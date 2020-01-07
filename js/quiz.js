var questions = [
    ["Who is Nigeria's 2nd President?", "Bala", "Sala", "Gala"],
    ["How many legs does a spider have", "12", "8", "6"],
    ["What's your favourite programming language", "C++", "Java", "Python"]
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
    question = questions[i][0];

    options.push(questions[i][1])
    options.push(questions[i][2])
    options.push(questions[i][3])

    print(question)
    print(displayQuestions(options))
    options = []
    
}
