var myself = document.querySelector('.myself')
var experience = document.querySelector('.experience')
var education = document.querySelector('.education')
var progress = document.querySelectorAll('progress')
var anna = document.querySelector('.Anna')
var contact = document.querySelector('.contact')
var skills = document.querySelector('.skills')
var certification = document.querySelector('.certification')
var awards = document.querySelector('.awards')
myself.addEventListener('onmouseover',function(){
    myself.style.Color = '#9300fc'
})
myself.addEventListener('mouseover',function(){
    var elements = document.querySelector('.six')
    anime({
    targets: elements,
    translateX: 270,
    easing: 'easeInOutQuad',
    endDelay: 1000,
    direction: 'alternate'
    })
    elements.style.color = "green"
})
experience.addEventListener('click',function(){
    var elements = document.querySelector('.enterprise')
    anime({
    targets: elements,
    translateX: 270,
    easing: 'easeInOutQuad',
    endDelay: 1000,
    direction: 'alternate'
    })
    elements.style.color = "green"
})
education.addEventListener('click',function(){
    var education_elements = document.querySelector('.Education_Elements')
    anime({
        targets: education_elements,
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: 'linear'
      });
})
anime({
        targets: progress,
        value: [0, 100],
        round: 1,
        easing: 'easeInOutExpo',
        loop: true
});