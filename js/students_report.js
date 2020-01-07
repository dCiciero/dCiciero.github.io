var html = '';
var student;
var search;

function print(message)
{
    var outputDiv = document.getElementById('output')
    outputDiv.innerHTML += message;
}

function getStudentReport( student ){
    var report = '<h2> Student: '+ student.name+ '</h2>'
    report += '<p> Track: '+ student.track+ '</p>'
    report += '<p> Achievements: '+ student.achievements+ '</p>'
    report += '<p> Points: '+ student.points+ '</p>'

    return report;
}

while (true) {
    search = prompt("Enter a name to search record or type 'quit' to end ")
    if (search.toLowerCase() === "quit" || search === 'null'){
        break;
    }
    
    for (var i = 0; i < students.length; i += 1){
        student = students[i];
        if (search.toLowerCase() === student.name.toLowerCase()){
           var msg = getStudentReport(student)
           print(msg)
        }
    }
    
}

// for (var i = 0; i < students.length; i += 1){
//     student = students[i];
//     html += '<h2> Student: '+ student.name+ '</h2>'
//     html += '<p> Track: '+ student.track+ '</p>'
//     html += '<p> Achievements: '+ student.achievements+ '</p>'
//     html += '<p> Points: '+ student.points+ '</p>'
    
// }

// print(html)