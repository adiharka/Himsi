const tmblopsi = document.querySelectorAll('.opsi span');

tmblopsi.forEach(tombol => {
    tombol.addEventListener('click',(e)=>{
        tmblopsi.forEach(element => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');

        var target = document.querySelector(e.target.dataset.target);
        var hide = document.querySelector(e.target.dataset.sembunyi);

        hide.classList.add('hide');
        target.classList.remove('hide');
    })
});