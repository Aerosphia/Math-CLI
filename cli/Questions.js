import chalk from "chalk";

export default [
    // Easy
    {
        direction: "Evaluate",
        difficulty: 1,
        question: chalk.yellow("17 + 5"),
        choices: [23, 22, 25, 19, 21],
        correctAnswer: 22,
    },
    {
        direction: "Evaluate",
        difficulty: 1,
        question: chalk.yellow("17 + 18 - 15"),
        choices: [19, 17, 15, 20, 25],
        correctAnswer: 20,
    },
    {
        direction: "Evaluate",
        difficulty: 1,
        question: chalk.yellow("(5 / 2 + 0.5) * 3"),
        choices: [4, 5.5, 9, 8.75, 10.5],
        correctAnswer: 9,
    },
    {
        direction: "Solve for X and Y",
        difficulty: 1,
        question: chalk.yellow("6 / 3 * 2 + y = x"),
        choices: ["x = 7, y = 5", "x = 4, y = 1", "x = 6, y = 2", "x = 4, y = 3"],
        correctAnswer: "x = 6, y = 2",
    },
    {
        direction: "Evaluate",
        difficulty: 1,
        question: chalk.yellow("10 + 15 * 2 ^ 3 + 20 * 2 + (50 - (10 ^ 2 - 80))"),
        choices: [130, 170, 200, 210, 220],
        correctAnswer: 200,
    },

    // Medium
    {
        direction: "Find Circumference",
        difficulty: 2,
        question: `Find ${chalk.yellow("C")} of a circle with a ${chalk.yellow("diameter")} of ${chalk.yellow("6cm")} Note: ${chalk.italic(
            "d = 2r"
        )} & ${chalk.italic("C = 2πr")} & ${chalk.italic("π = 3.14")}`,
        choices: ["18.84cm", "14.51cm", "30.10cm", "5.49cm", "11.05cm"],
        correctAnswer: "18.84cm",
    },
    {
        direction: "Solve for X",
        difficulty: 2,
        question: `Find ${chalk.yellow("X")} where ${chalk.yellow("5(x + 4) = 6x - 5")}`,
        choices: [33, 25, 10, 11, 15.5],
        correctAnswer: 25,
    },
    {
        direction: "Evaluate",
        difficulty: 2,
        question: chalk.yellow("3√12"),
        choices: [1.15, 1.32, 4.05, 2.29, 2.23],
        correctAnswer: 2.29,
    },
];
