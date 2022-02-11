#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import Util from "./Util.js";
import Questions from "./Questions.js";

async function Handle(callback) {
    const spinner = createSpinner("Validating answer..").start();
    await Util.sleep();

    const answerPossibilities = {
        success: ["Good answer!", "Nice work.", "Brilliant.", "Exceptional.", "Genius!", "Amazing!", "Keep it up!"],
        error: ["Yikes, you're out! Bad answer.", "Oh no! You lose!", "Incorrect! You lose.", "Bad answer! You lose."],
    };

    if (callback()) {
        spinner.success({ text: chalk.green(answerPossibilities.success[Math.floor(Math.random() * answerPossibilities.success.length)]) });
        return true;
    } else {
        spinner.error({ text: chalk.red(answerPossibilities.error[Math.floor(Math.random() * answerPossibilities.error.length)]) });
        return false;
    }
}

function ParseDifficulty(difficultyInteger) {
    switch (difficultyInteger) {
        case 1:
            return chalk.green("Easy");
        case 2:
            return chalk.yellow("Medium");
        case 3:
            return chalk.red("Hard");
        default:
            throw new RangeError("Could not parse difficulty: exceeds inclusive 1-3 range.");
    }
}

function Win() {
    console.clear();
    const winMessage = "Congratulations! You win!";

    figlet(winMessage, (_, data) => {
        console.log(gradient.pastel.multiline(data));
    });
}

async function Init() {
    chalkAnimation.rainbow("Let's do some mathematics!");
    await Util.sleep();

    console.log(`
        ${chalk.bold("GETTING STARTED")}
        Answer the following mathematical questions as they proceed.
        The questions will continue to get more difficult as it goes on.
        There are ${chalk.yellow("15 questions")} and ${chalk.magenta("3 levels")} in total.
        If you get a question wrong, you will be ${chalk.red("ELIMINATED!")}
    `);

    await Util.sleep();

    const areYouReadyPrompt = await inquirer.prompt({
        name: "isReady",
        type: "confirm",
        message: "Are you ready to begin?",
    });

    if (areYouReadyPrompt.isReady) {
        const pendingSpinner = createSpinner("Starting..").start();

        await Util.sleep(1000);
        pendingSpinner.success();
        await Util.sleep(500);
        console.clear();

        for (const questionObject of Questions) {
            const questionNumber = Questions.indexOf(questionObject) + 1;
            const stringQuestionNumber = questionNumber.toString();

            const direction = questionObject.direction;
            const difficulty = questionObject.difficulty;
            const question = questionObject.question;
            const questionChoices = questionObject.choices;
            const correctAnswer = questionObject.correctAnswer;

            const promptId = `question-${stringQuestionNumber}`;
            const messageFormat = `${chalk.bold(`Question ${stringQuestionNumber}`)}\n  ${ParseDifficulty(difficulty)}\n  ${direction}\n  ${question}`;

            const prompt = await inquirer.prompt({
                name: promptId,
                type: "list",
                message: messageFormat,
                choices: questionChoices,
            });

            const status = await Handle(() => {
                return prompt[promptId] === correctAnswer;
            });

            if (status) {
                if (questionNumber === Questions.length) {
                    await Util.sleep();
                    Win();
                    break;
                }
            } else {
                await Util.sleep();
                console.clear();
                process.exit();
            }

            await Util.sleep();
            console.clear();
        }
    }
}

await Init();
