// Your code goes here
// adding selectors
const links = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');
const image = document.querySelectorAll('img');
const textContent = document.querySelectorAll('.text-content');

//adding event listeners
window.addEventListener('resize', ()=>{
    alert('window has been resized')
});
window.addEventListener('load', () => {
    alert('page is fully loaded');
});

document.addEventListener('keydown', (event)=>{
    if( event.key === "Escape"){
        alert('You presed the escape key');
    }
});
nav.addEventListener('mouseover', (event)=>{
    event.target.style.color = 'blue';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
});

Array.from(links).forEach( link =>{
    link.addEventListener('click', (event)=>{
        event.preventDefault();
        event.stopPropagation();
        alert('you clicked me');
    })
});

image[0].addEventListener('mouseup', (event)=>{
    event.target.style.border = "3px solid black";
});
image[1].addEventListener('dblclick', ()=>{
    alert('you double clicked me')
});
image[2].addEventListener('wheel',(event)=>{
    event.target.style.border = "3px solid blue"
})

textContent[0].addEventListener('mouseleave', (event)=>{
    event.target.style.color = 'purple';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
});

textContent[1].addEventListener('mouseenter', (event)=>{
    event.target.style.color = 'green';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
});