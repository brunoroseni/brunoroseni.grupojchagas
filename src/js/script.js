$(document).ready(function(){
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-story')
    document.querySelector('.slide-story').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item-story')
    document.querySelector('.slide-story').prepend(items[items.length - 1]) // here the length of items = 6
})
