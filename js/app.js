$('div').on('click', function (){
    $('#one').empty();
    $('#two').remove();
    $('#three').hide();
});
$('li').on('click', function () {
    $(this).text("Clicked").delay(800).fadeOut(400);
});

document.getElementById('awesomeBtn').onclick = function () {
    console.log('I clicked from apps.js');
}

let btn2 = document.getElementById('awesomeBtn2');
btn2.addEventListener('click', () => {
    console.log('I clicked btn2 from apps.js');
});

$('#awesomeBtnJqy').on('click', () => {
    console.log('I clicked JqyBtn from apps.js');
});

$('.onep').parent().css( "background", "yellow" )
console.log($('.onep').parent().tagName)