const tmblopsi = document.querySelectorAll('.opsi span');
tmblopsi.forEach(tombol => {
    tombol.addEventListener('click', (e) => {
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

tmblopsi[0].click();

const formcontrol = document.querySelectorAll('.form-previewed');

formcontrol.forEach(input => {
    var prev = document.querySelector(input.dataset.preview);
    prev.textContent = input.value;
    input.addEventListener('input', () => {
        if (input.nodeName == "INPUT") {
            // prev.textContent = input.value;
            prev.textContent = input.value;
        } else if (input.nodeName == "TEXTAREA") {
            // prev.textContent = input.value;
            prev.textContent = input.value;
            // console.log(prev);
        }
    })
});

const tambahtitle = document.querySelector('#tambah-pertanyaan-title');
const tambahselect = document.querySelector('#tambah-pertanyaan-jenis');
const tambahformpreview = document.querySelector('.form-group#tambah-pertanyaan-preview');
const tambahinputpreview = tambahformpreview.querySelectorAll('.form-control');
const tambahopsigroup = document.querySelector('#tambah-pertanyaan-opsi-group');
const tambahopsifield = document.querySelector('#tambah-pertanyaan-opsi');

tambahtitle.addEventListener('input',()=>{
    if (tambahtitle.value != "") {
        document.querySelector('#tambah-pertanyaan-preview-title').textContent = tambahtitle.value;
    }else {
        document.querySelector('#tambah-pertanyaan-preview-title').textContent = "Judul Pertanyaan";
    }
})

tambahselect.addEventListener('input', () => {
    tambahinputpreview.forEach(input => {
        input.classList.add('hide');
    })
    var isian = tambahselect.value;
    if (isian == "textarea") {
        tambahopsigroup.classList.add('hide');
        tambahformpreview.querySelector('textarea').classList.remove('hide');
    } else if (isian == "select") {
        tambahformpreview.querySelector('select').classList.remove('hide');
        tambahopsigroup.classList.remove('hide');
    } else {
        tambahopsigroup.classList.add('hide');
        tambahformpreview.querySelector('input').classList.remove('hide');
        tambahformpreview.querySelector('input').setAttribute('type', isian);
        tambahformpreview.querySelector('input').removeAttribute('disabled');
    }
})

tambahopsifield.addEventListener('input', () => {
    var select = tambahformpreview.querySelector('select');
    select.querySelectorAll('option').forEach(option => {
        select.removeChild(option);
    });

    var opsian = tambahopsifield.value.split(",");

    var defaultoption = document.createElement('option');
    defaultoption.setAttribute('disabled','true');
    defaultoption.setAttribute('selected','true');
    defaultoption.setAttribute('value',null);
    defaultoption.textContent = 'pilih';
    select.appendChild(defaultoption);

    opsian.forEach(opsi => {
        var opsiinject = document.createElement('option');
        opsiinject.value = opsi;
        opsiinject.textContent = opsi;

        select.appendChild(opsiinject);
    });

})