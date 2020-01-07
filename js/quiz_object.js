var questions = [
    { 
        question: "Who is Nigeria's 2nd President?",
        option1: "Bala", 
        option2: "Sala", 
        option3: "Gala"
    },
    { 
        question: "How many legs does a spider have",
        option1: "12", 
        option2: "8", 
        option3: "6"
    },
    { 
        question: "What's your favourite programming language",
        option1: "C++", 
        option2: "Java", 
        option3: "Python"
    }
];

var question = [];
var answer;
var option1;
var option2;
var option3;
var options = [];

function print(message)
{
    var outputDiv = document.getElementById('output')
    outputDiv.innerHTML += message;
}

function displayQuestions(arr){
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1){
        listHTML += '<li>' + arr[i] + '</li>';
    } 
    return listHTML;
}
for (let i = 0; i < questions.length; i++) {
    question = questions[i].question;

    options.push(questions[i].option1)
    options.push(questions[i].option2)
    options.push(questions[i].option3)

    print(question)
    print(displayQuestions(options))
    options = []
    
}
