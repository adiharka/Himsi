function validation(form){
	var returnal = true;
	var formcontrol = form.querySelectorAll('.form-control');
	formcontrol.forEach(fctrl => {
		if (!fctrl.classList.contains('not-required-validate')) {
			var errormsg = document.querySelector(fctrl.dataset.error);
			if (fctrl.value == "") {
                console.log(fctrl);
				returnal = false;
				fctrl.classList.add('is-invalid');
				errormsg.classList.remove('hide');
				errormsg.textContent = "Bagian ini harus di isi"
			}else{
				fctrl.classList.remove('is-invalid');
				errormsg.classList.add('hide');
			}
		}
	});

	return returnal;
}

document.querySelector('#form-submit-uhuy').addEventListener('click',(e)=>{
    e.preventDefault()
    if(validation(e.target.parentElement.parentElement)){
        e.target.parentElement.parentElement.submit()
    }
});