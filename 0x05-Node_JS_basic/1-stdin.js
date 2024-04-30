//creata a name that will be xecuted through command line
//it should display Welcome to Holberton School, what is your name?
//the program should display Your name is: INPUT
//when user ends, display This important software is now closing

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
	process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
	process.stdout.write('This important software is now closing\n');
});
