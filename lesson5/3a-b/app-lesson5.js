'use strict';
const modal = document.querySelector('.wrp');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function() {
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
    setTimeout(function() {
        modal.classList.add('dispn');
    }, 1000);
});

showBtn.addEventListener('click', function() {
    modal.classList.remove('rollOut', 'dispn');
    modal.classList.add('animated', 'rollIn');
});