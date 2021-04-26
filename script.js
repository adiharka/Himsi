var inputs = document.querySelectorAll('.form-control-file-button');
Array.prototype.forEach.call(inputs, function (input) {
	var label = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener('change', function (e) {
		var fileName = '';
		if (this.files && this.files.length > 1)
			fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
		else
			fileName = e.target.value.split('\\').pop();

		if (fileName)
			label.querySelector('span').innerHTML = fileName;
		else
			label.innerHTML = "masok";
	});
});

const modal = document.querySelectorAll('.modal');
const closemodal = document.querySelectorAll('.modal-close-button');
const modaltrigger = document.querySelectorAll('.btn-modal-trigger');
const modalgobtn = document.querySelectorAll('.modal-go-btn');
// const formcontrol = document.querySelectorAll('.form-control');

function validation(form){
	var returnal = true;
	var formcontrol = form.querySelectorAll('.form-control');
	formcontrol.forEach(fctrl => {
		var errormsg = document.querySelector(fctrl.dataset.error);
		if (fctrl.value == "") {
			returnal = false;
			fctrl.classList.add('is-invalid');
			errormsg.classList.remove('hide');
			errormsg.textContent = "Bagian ini harus di isi"
		}else{
			fctrl.classList.remove('is-invalid');
			errormsg.classList.add('hide');
		}
	});

	return returnal;
}

modaltrigger.forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelector(btn.dataset.modal).classList.remove('hide');
	})
});

modalgobtn.forEach(btn => {
	btn.addEventListener('click',()=>{
		var form = btn.parentElement.parentElement.querySelector('form');
		if (validation(form)) {
			form.submit();
		}
	})
});

closemodal.forEach(button => {
	button.addEventListener('click', () => {
		modal.forEach(mod => {
			mod.classList.add('hide');
		});
	})
});
