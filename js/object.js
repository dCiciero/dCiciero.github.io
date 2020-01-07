var person = {
    name: 'Sarah',
    country: 'US',
    age: 35,
    CS_Student: 'true',
    skills: ['JavaScript', 'CSS', 'HTML']
};



function print(message)
{
    var outputDiv = document.getElementById('output')
    outputDiv.innerHTML += message;
}
var html = '';
for (var i = 0; i < students.length; i += 1){
    html += '<h3>'+ students[i].name+ '</h3>'
    html += '<p> Track: '+ students[i].track+ '</p>'
    html += '<p> Achievements: '+ students[i].achievements+ '</p>'
    html += '<p> Points: '+ students[i].points+ '</p>'
    
}

print(html)