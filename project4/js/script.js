// var
// let 
// const age = 10; // неизменяемая

// let age = 20;

// if (age >= 16) {
//     console.log('Доступ разрешен')
// } else {
//     console.log('Доступ запрещен')
// }

// if (age == 14) {
//     console.log('Еще маловат')
// } else if (age == 16) {
//     console.log('Доступ разрешен')
// } else if (age < 14) {
//     console.log('Малявка')
// } else {
//     console.log('Доступ разрешен')
// }

// && - и
// || - или

// let age1 = 15,
//     age2 = 18

// if (age1 >= 18 && age2 >= 18) {
//     console.log('Вы прошли вместе с другом')
// } else {
//     alert('Кто-то из вас мелкий')
// }

// let age = 15;
// age = 20;
// console.log(age)

// let block = document.querySelectorAll('.aboutUs .aboutUsBlock .info-block .block');
// console.log(block);

// let h2 = document.querySelector('.aboutUs .aboutUsBlock h2')
// h2.style.fontSize = '50px'
// h2.style.background = 'red'
// h2.style.paddingTop = '30px'
// h2.classList.add('error')
// h2.classList.remove('error')
// h2.classList.toggle('error')

// let news = $('.news .newsBlock .info-block .block').eq(1)
let news = $('.news .newsBlock .info-block .block')
// news.css('background-color','red')
// news.css({
//     'background-color':'red',
//     'padding':'50px'
// })
// news.addClass('error')
// news.removeClass('error')

$('.news .newsBlock .info-block .block .btnEditColor').on('click', function() {
    // news.addClass('error');
    news.toggleClass('error')

    editText();
})

function editText() {
    let btnText = $('.news .newsBlock .info-block .block .btnEditColor');
    if ( btnText.val() == 'Замена текста' ) {
        btnText.val('Обратно')
    } else {
        btnText.val('Замена текста')
    }
}
