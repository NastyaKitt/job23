let currentIndex = 0;
const items = document.querySelectorAll('.priceItem');
const itemsMono = document.querySelectorAll('.priceItemMono');
const itemsLap = document.querySelectorAll('.priceItemLap');
const totalItems = items.length;

function showSlides() {
    const activeSlidesCount = window.innerWidth <= 1024 ? 4 : 5;

    const updateSlides = (itemArray) => {
        itemArray.forEach((item) => {
            item.classList.remove('show', 'first-active', 'middle-active', 'last-active');
        });

        for (let i = 0; i < activeSlidesCount; i++) {
            const index = (currentIndex + i) % totalItems; 
            itemArray[index].classList.add('show');

            if (i === 0) {
                itemArray[index].classList.add('first-active');
            } else if (i === activeSlidesCount - 1) {
                itemArray[index].classList.add('last-active');
            } else {
                itemArray[index].classList.add('middle-active');
            }
        }
    };

    updateSlides(items);
    updateSlides(itemsMono);
    updateSlides(itemsLap);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlides();
}

showSlides();
setInterval(nextSlide, 5000);

window.addEventListener('resize', showSlides);


const itemsH = document.querySelectorAll('.howItem');
const prevButton = document.getElementById('prev1');
const nextButton = document.getElementById('next1'); 

let currentIndexH = 0; 

function showSlide(index) {
    itemsH.forEach((item, i) => {
        item.classList.remove('show'); // Скрываем все элементы
        if (i === index) {
            item.classList.add('show'); // Показываем текущий
        }
    });
}

nextButton.addEventListener('click', () => {
    currentIndexH = (currentIndexH + 1) % itemsH.length; // Переход к следующему элементу
    showSlide(currentIndexH);
});

prevButton.addEventListener('click', () => {
    currentIndexH = (currentIndexH - 1 + itemsH.length) % itemsH.length; // Переход к предыдущему элементу
    showSlide(currentIndexH);
});

showSlide(currentIndexH);

// ///////
const itemsW = document.querySelectorAll('.whyItem'); 
const prevButton3 = document.getElementById('prev3'); 
const nextButton3 = document.getElementById('next3'); 

let currentIndexW = 0; 

function showSlideW(index) {
    itemsW.forEach((item, o) => {
        item.classList.remove('show'); // Скрываем все элементы
        if (o === index) {
            item.classList.add('show'); // Показываем текущий
        }
    });
}

nextButton3.addEventListener('click', () => {
    currentIndexW = (currentIndexW + 1) % itemsW.length; // Переход к следующему элементу
    showSlideW(currentIndexW);
});

prevButton3.addEventListener('click', () => {
    currentIndexW = (currentIndexW - 1 + itemsW.length) % itemsW.length; // Переход к предыдущему элементу
    showSlideW(currentIndexW);
});


showSlideW(currentIndexW);

////////////////////////

const itemsR = document.querySelectorAll('.reviewItem'); 
const prevButton2 = document.getElementById('prev2'); 
const nextButton2 = document.getElementById('next2'); 

let currentIndexR = 0;

function showSlideR(index) {
    itemsR.forEach((item, z) => {
        item.classList.remove('show'); // Скрываем все элементы
        if (z === index) {
            item.classList.add('show'); // Показываем текущий
        }
    });
}

nextButton2.addEventListener('click', () => {
    currentIndexR = (currentIndexR + 1) % itemsR.length; // Переход к следующему элементу
    showSlideR(currentIndexR);
});

prevButton2.addEventListener('click', () => {
    currentIndexR = (currentIndexR - 1 + itemsR.length) % itemsR.length; // Переход к предыдущему элементу
    showSlideR(currentIndexR);
});

showSlideR(currentIndexR);

// // // // // / // // / / //// / // // /// // / / // / // // /

let formWin = document.getElementById('formWin')
let clsForm = document.getElementById('clsForm')
let callForm0 = document.getElementById('callForm0')
let callForm1 = document.getElementById('callForm1')
let callForm2 = document.getElementById('callForm2')

callForm0.addEventListener('click', function(){
    formWin.classList.add('show')
})
callForm1.addEventListener('click', function(){
    formWin.classList.add('show')
})
callForm2.addEventListener('click', function(){
    formWin.classList.add('show')
})
clsForm.addEventListener('click', function(){
    formWin.classList.remove('show')
})

///////////////////////////


let callPolit = document.getElementById('callPolit')
let clsPolit = document.getElementById('clsPolit')
let politWin = document.getElementById('politWin')



callPolit.addEventListener('click', function(){
    politWin.classList.add('show')
})
clsPolit.addEventListener('click', function(){
    politWin.classList.remove('show')
})

// 


function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) {
        e.setSelectionRange(pos, pos);
    } else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}

function mask(e) {
    var matrix = this.placeholder, 
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
        return val.charAt(i++) || "_";
    });
    
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this);
}

window.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#tel1");
    
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});