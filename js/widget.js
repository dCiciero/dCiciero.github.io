let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let employee = JSON.parse(xhr.responseText);
        console.log(employee);
    }
};

xhr.open('GET', 'data/employees.json');
xhr.send();