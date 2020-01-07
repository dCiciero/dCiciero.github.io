// function say(greeting) {
//     console.log(greeting);
// }

function exec(func, arg) {
    func(arg);
}

window.setTimeout((greeting) => {
    console.log(greeting);
},3000, "Greetings people!!");