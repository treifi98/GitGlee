const shell = require('shelljs');
const chalk = require('chalk');
// const axios = require('axios');

let jokes = ["Joke 1", "Joke 2"];
let quotes = ["Quote 1", "Quote 2"];

const getRandomMessage = () => {
  const allMessages = [...jokes, ...quotes];
  return allMessages[Math.floor(Math.random() * allMessages.length)];
};

const displayMessage = (message, color = 'green') => {
  console.log(chalk[color](message));
};

// Example function to add more messages
const addMessage = (message, type) => {
  if (type === 'joke') {
    jokes.push(message);
  } else if (type === 'quote') {
    quotes.push(message);
  }
};

// Git post-commit hook logic to display a message
shell.exec('git rev-parse --verify HEAD', (code, stdout, stderr) => {
  if (!stderr) {
    displayMessage(getRandomMessage());
  }
});
  