const btnburger = document.querySelector('.nav-burger');
const navgroup = document.querySelector('.nav-group');

btnburger.addEventListener('click', function(){
    navgroup.classList.toggle("active");
})

const dropdown = document.querySelectorAll('.dropdown')
const dropbtn = document.querySelectorAll('button.dropbtn');

dropbtn.forEach(button => {
    button.addEventListener('click',()=>{
        button.parentElement.classList.toggle('active');
    })
});

window.addEventListener('click',(e)=>{
    if(!e.target.classList.contains('dropbtn')){
        dropdown.forEach(ddown => {
            ddown.classList.remove('active');
        });
    }
})