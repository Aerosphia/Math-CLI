#!/usr/bin/env node

import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import nanospinner, { createSpinner } from "nanospinner";
import Util from "./Util.js";
import Questions from "./Questions.js";

async function Handle(callback) {
    const spinner = createSpinner("Validating..").start();
    await Util.sleep();

    const answerPossibilities = {
        success: ["Good answer!", "Nice work.", "Brilliant.", "Exceptional.", "Genius!", "Amazing!", "Keep it up!"],
        error: ["Yikes, you're out! Bad answer.", "Oh no! You lose!", "Incorrect! You lose.", "Bad answer! You lose."],
    };

    if (callback()) {
        spinner.success({ text: chalk.green(answerPossibilities.success[Math.floor(Math.random() * answerPossibilities.success.length)]) });
        Promise.resolve();
    } else {
        spinner.error({ text: chalk.red(answerPossibilities.error[Math.floor(Math.random() * answerPossibilities.error.length)]) });
        Promise.reject();
    }
}

function ParseDifficulty(difficultyInteger) {
    console.assert(typeof difficultyInteger === "number");

    switch (difficultyInteger) {
        case 1:
            return chalk.green("Easy");
        case 2:
            return chalk.yellow("Medium");
        case 3:
            return chalk.red("Hard");
        default:
            throw "Could not parse difficulty: exceeds inclusive 1-3 range.";
    };
}

async function Init() {
    const title = chalkAnimation.rainbow("Let's do some mathematics!");

    await Util.sleep();
    title.stop();

    console.log(`
        ${chalk.bold("GETTING STARTED")}
        Answer the following mathematical questions as they proceed.
        The questions will continue to get more difficult as it goes on.
        There are ${chalk.yellow("30 levels")} in total.
        If you get one wrong, you will be ${chalk.red("ELIMINATED!")}
    `);

    await Util.sleep();

    const areYouReadyPrompt = await inquirer.prompt({
        name: "isReady",
        type: "confirm",
        message: "Are you ready to begin?",
    });

    if (areYouReadyPrompt.isReady) {
        for (const questionObject of Questions) {
            const questionNumber = Questions.indexOf(questionObject);
            const stringQuestionNumber = questionNumber.toString();

            const direction = questionObject.direction;
            const difficulty = questionObject.difficulty;
            const question = questionObject.question;
            const questionChoices = questionObject.choices;
            const correctAnswer = questionObject.correctAnswer;

            const promptId = `question-${stringQuestionNumber}`;
            const messageFormat = `
                ${chalk.bold(`Question ${stringQuestionNumber}`)}
                ${ParseDifficulty(difficulty)}
                ${direction}
                ${question}
            `;

            const prompt = await inquirer.prompt({
                name: promptId,
                type: "list",
                message: messageFormat,
                choices: questionChoices,
            });

            Handle(() => {
                return prompt.promptId == correctAnswer;
            }).then(() => {
                if (questionNumber === Questions.length - 1) {
                    // Process win, this is just a placeholder
                    console.log("You win!");
                    process.exit();
                }
            }).catch(() => {
                process.exit();
            })
        }
    }
}

await Init();
