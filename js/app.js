// var containerOne =document.querySelector('.container');
// var containerTwo =document.querySelector('.container-1')
const slides = document.querySelectorAll('.container');
 


const next = document.getElementById('next');
const previous = document.getElementById('prev');

let index =0;

function nextslide(){
    index++;
    if(index>slides.length -1){
        index = 0;
    }
   slides.forEach((slides)=>{
       slides.style.display = 'none';
   });
   slides[index].style.display = 'flex';
}


function previousSlide(){
    index--;
    if(index< 0){
        index= slides.length - 1;
    }
   slides.forEach((slides)=>{
       slides.style.display = 'none';
   });
   slides[index].style.display = 'flex';
}

next.addEventListener('click',nextslide);
previous.addEventListener('click',previousSlide);
console.log(next);

