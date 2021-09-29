/*
1. What is Node?
Node is a runtime that allows you to run JavaScript on the server.
Visit URL on google (client) that points to Node server. Node handles URL request by reading a file (HTML, DB), then responds back to google.
Can run in REPL mode in Terminal (CTRL + `) + "node".


2. How do you install Node?
nodejs.org
"nvm install 12" to install version 12, nvm (node version manager).
"node -v" to check version.
*/


// 3. Hello World - run in terminal - "node ." or "node app.js"
console.log("hello world")


/* 4. Know the Runtime:
1. global -  use it to save global variable throughout the app. Similar to window in the browser.
2. process - interact with the current process to information like the OS platform or environment variables.
*/
console.log(global.luckyNum);
global.luckyNum = '7';
console.log(global.luckyNum);

console.log(process.platform);
console.log(process.env.USER); //if exists


/* 5. Events:
Listen to events and handling them with callbacks.
Create your own events with an EventEmitter.
Asynchronous, event-driven, non-blocking, JS-runtime.
Event loop - Node pushes larger operations on seperate thread, and puts simple, non-blocking operations on main thread.
*/

//callback "on", first Node sees the function, then it executes inner function after completing all blocking operations
process.on('exit', function(){
})

//Example
// Create
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();
// Handle
eventEmitter.on('lunch', () => {
    console.log('yum 🍣');
});
// Emit
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');



/* 6. File System:
"fs" - read/write in blocking (sync) or non-blocking (no sync).
Many APIs in Node are callback based.
*/

const { readFile, readFileSync } = require('fs');

// Blocking! - always executes in order
const txt = readFileSync('./hello.txt', 'utf8');
console.log(txt + " readFileSync");
console.log("hello from app.js 1");

// Non-blocking - waits to execute until after all blocking code
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt + " readFile");
});
console.log("hello from app.js 2");

// Promise based, also non-blocking
//const { readFile } = require('fs').promises;
//const txt = await readFile('./hello.txt', 'utf8');


/* 7. Modules & NPM
A module is a JS file that exports its code. eg. fs, events, etc.
NPM - tool to install remote packages
*/
const { hello } = require('./helloworld.js');
console.log(hello); //world



// 8. Build & Deploy - done seperately - second-node-fullstack-app
