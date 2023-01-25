#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';


let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow('who wants to be a millionare ? \n')

    await sleep();
    rainbowTitle.stop();

    console.log(`
    ${chalk.bgBlue('how to play')}
    I am a process on your computer.
    If you get any question wrong I will be killed ${chalk.bgRed('killed')}
    So get all question right ....
    `);
}

await welcome()