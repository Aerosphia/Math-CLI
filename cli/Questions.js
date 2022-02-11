import chalk from "chalk";

export default [
    {
        direction: "Solve for X",
        difficulty: 1,
        question: `Find ${chalk.yellow("x")} where ${chalk.yellow("17 + 5 = x")}.`,
        choices: [23, 22, 25, 19, 21],
        correctAnswer: 22,
    },
    {
        direction: "Solve for X",
        difficulty: 1,
        question: `Find ${chalk.yellow("x")} where ${chalk.yellow("17 + 18 - 15 = x")}.`,
        choices: [19, 17, 15, 20, 25],
        correctAnswer: 20,
    },
    {
        direction: "Solve for X",
        difficulty: 1,
        question: `Find ${chalk.yellow("x")} where ${chalk.yellow("(5 / 2 + 0.5) * 3 = x")}.`,
        choices: [4, 5.5, 9, 8.75, 10.5],
        correctAnswer: 9,
    },
    {
        direction: "Solve for X and Y",
        difficulty: 1,
        question: `Find ${chalk.yellow("x and y")} where ${chalk.yellow("6 / 3 * 2 + y = x")}.`,
        choices: ["y: 5, x: 7", "y: 1, x: 4", "y: 2, x: 6", "y: 3, x: 4"],
        correctAnswer: "y: 3, x: 4",
    },
    {
        direction: "Evaluate",
        difficulty: 1,
        question: `Evaluate: ${chalk.yellow("10 + 15 * 2 ^ 3 + 20 * 2 + (50 - (10 ^ 2 - 80))")}`,
        choices: [130, 170, 200, 210, 220],
        correctAnswer: 200,
    },
];
