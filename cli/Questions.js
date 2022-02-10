import chalk from "chalk";

export default [
    {
        direction: "Evaluate",
        difficulty: 1,
        question: `Find ${chalk.yellow("x")} where ${chalk.yellow("17 + 5 = x")}.`,
        choices: [23, 22, 25, 19, 21, 20, 12],
        correctAnswer: 22,
    },
    {
        direction: "Evaluate",
        difficulty: 1,
        question: `Find ${chalk.yellow("x")} where ${chalk.yellow("17 + 18 - 15 = x")}.`,
        choices: [19, 17, 15, 20, 25, 14, 26],
        correctAnswer: 20,
    }
];
