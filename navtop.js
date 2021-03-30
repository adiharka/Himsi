const btnburger = document.querySelector('.nav-burger');
const navgroup = document.querySelector('.nav-group')

btnburger.addEventListener('click', function(){
    navgroup.classList.toggle("active");
})