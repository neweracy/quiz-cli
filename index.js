#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import {
    createSpinner
} from 'nanospinner';
import figlet from 'figlet';


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow('HOW WELL DO YOU KNOW YOUR STUFF? \n')

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('How To Play')}
    I am a process on your computer.
    If you get any question wrong I will be killed ${chalk.bgRed('killed')}
    So get all question right ....
    `);
}

await welcome()

const askName = async () => {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name',
        default () {
            return "Player"
        },

    });

    playerName = answers.player_name;
}

await askName();
const question_1 = async () => {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'First President of Ghana',
        choices: [
            'John Dramani Mahama',
            'Kwame Nkrumah',
            'John Adams',
            "Nana Akufo Addo"


        ]

    });
    return handleAnswer(answers.question_1 == 'Kwame Nkrumah');


}
const winner = () => {
    console.clear()
    const msg = `congrats , ${playerName} `;
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data))
    })
}

const handleAnswer = async (isCorrect) => {
    const spinner = createSpinner('checking answer.....').start();
    await sleep();
    if (isCorrect) {
        spinner.success({
            text: `Nice work!${playerName}. That's good `
        })
    } else {
        spinner.error({
            text: `Game over!${playerName}. \n YOU KNOW YOUR STUFF`
        })
        process.exit(1)
    }
}
await question_1();
await winner();