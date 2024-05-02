//Create a program named 1-stdin.js that will be executed through command line:
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
	  process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
	  process.stdout.write('This important software is now closing\n');
});
