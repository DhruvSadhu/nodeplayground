//const {readFile, readFileSync} = require('fs')


// do this asap is printed last
// const txt = readFileSync('./hello.txt', 'utf8')
// console.log(txt)
// console.log("DO THIS ASAP")


//refactor above implementation with callback to make sure do this asap is printed first
// readFile('./hello.txt', 'utf8', (err,txt2) => {
//     console.log(txt2);
// });
// console.log("DO THIS ASAP")



//promise based solution for file reading

//prommises are async and nonblocking ... tend to produce cleaner code vs callbacks

//this returns a promise when called
const{readFile} = require('fs').promises;
const myModule = require("./my-module.js")
console.log(myModule)

async function hello(){
    const file = await readFile('./hello.txt', 'utf8');
    
}