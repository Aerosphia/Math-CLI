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
        spinner.success({ text: answerPossibilities.success[Math.floor(Math.random() * answerPossibilities.success.length)] });
        Promise.resolve();
    } else {
        spinner.error({ text: answerPossibilities.error[Math.floor(Math.random() * answerPossibilities.error.length)] });
        process.exit(1);
    }
}

async function Init() {
    const title = chalkAnimation.rainbow("Let's do some mathematics!");

    await Util.sleep(2000);
    title.stop();

    console.log(`
        ${chalk.bold("GETTING STARTED")}
        Answer the following mathematical questions as they proceed.
        The questions will continue to get more difficult as it goes on.
        There are ${chalk.yellow("30 levels")} in total.
        If you get one wrong, you will be ${chalk.red("ELIMINATED!")}
    `);

    await Util.sleep(2000);

    const areYouReadyPrompt = await inquirer.prompt({
        name: "isReady",
        type: "confirm",
        message: "Are you ready to begin?",
    });

    if (areYouReadyPrompt.isReady) {
        // Do something later
        process.exit();
    } else {
        process.exit();
    }
}

await Init();
