const navSlide =  () => {
    const burger= document.querySelector('.burger');
    const burger1= document.querySelector('.burger1');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    burger1.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
    
}
navSlide();