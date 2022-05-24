

// navbar-search

const navbarSearch = () => {

	const input = document.querySelector('.fl-navbar-search-input');
	const modal = document.querySelector('.fl-empty-modal-container');

	const show = () => { modal.classList.add('fl-show'); }
	const hide = () => { modal.classList.remove('fl-show'); }

	input.addEventListener('focusin', show);
	input.addEventListener('focusout', hide);

}

navbarSearch();

// the-end-of-navbar-search



// the-end-of-choose-language

const chooseLanguage = () => {

	const btn = document.querySelector('.choose-language-btn');
	const item = btn.parentElement;
	const con  = document.querySelector('.change-language-container');
	const modal  = document.querySelector('.choose-language-modal-container');
	var canHide = true;

	const toggle = () => { 

		modal.classList.toggle('fl-show'); 
		con.classList.toggle('fl-show'); 
		btn.classList.toggle('fl-active');
		item.classList.toggle('fl-layer-10'); 

	}

	const hide = () => { 

		if(canHide) { 

			modal.classList.remove('fl-show'); 
			con.classList.remove('fl-show'); 
			btn.classList.remove('fl-active'); 
			item.classList.remove('fl-layer-10');

		} 
	}

	const mouseIsOver = () => canHide = false;

	const mouseIsOut = () => canHide = true;

	btn.addEventListener('click', toggle);
	con.addEventListener('mouseover', mouseIsOver);
	con.addEventListener('mouseout', mouseIsOut);
	modal.addEventListener('click', hide);

}

chooseLanguage();

// choose-language



// the-end-of-choose-language

const sidebar = () => {

	const btn = document.querySelector('.sidebar-btn');
	const item = btn.parentElement;
	const con  = document.querySelector('.sidebar-container');
	const modal  = document.querySelector('.sidebar-modal-container');
	const closer  = document.querySelector('.sidebar-closer');
	var canHide = true;

	const toggle = () => { 

		modal.classList.toggle('fl-show'); 
		con.classList.toggle('fl-show'); 
		btn.classList.toggle('fl-active');
		item.classList.toggle('fl-layer-10'); 

	}

	const hide = () => { 

		if (canHide) { 

			modal.classList.remove('fl-show'); 
			con.classList.remove('fl-show'); 
			btn.classList.remove('fl-active'); 
			item.classList.remove('fl-layer-10');

		} 
	}

	const close = () => { 

			modal.classList.remove('fl-show'); 
			con.classList.remove('fl-show'); 
			btn.classList.remove('fl-active'); 
			item.classList.remove('fl-layer-10');
	}

	const mouseIsOver = () => canHide = false;

	const mouseIsOut = () => canHide = true;

	btn.addEventListener('click', toggle);
	con.addEventListener('mouseover', mouseIsOver);
	con.addEventListener('mouseout', mouseIsOut);
	modal.addEventListener('click', hide);
	closer.addEventListener('click', close);

}

sidebar();

// choose-language



// sign-in

const signInForm = () => {

	const form = document.querySelector('.sign-in-form');
	const email = form.querySelector('#emailOrMobileNumber');
	const password = form.querySelector('#password');
	const submit = form.querySelector('.fl-form-submit');
	const toRegistrationBtn = form.querySelector('.to-registration-btn');
	
	var emailIsEmpty = true, passwordIsEmpty = true;

	const disableSubmit = () => { submit.setAttribute('disabled', ''); }

	const enableSubmit = () => { submit.removeAttribute('disabled'); }

	function checkEmail() {

		this.value == "" ? emailIsEmpty = true : emailIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	function checkPassword() {

		this.value == "" ? passwordIsEmpty = true : passwordIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	function hasFocus() { this.parentElement.parentElement.classList.add('input-has-focus'); }

	function loseFocus() { if (this.value == "") this.parentElement.parentElement.classList.remove('input-has-focus'); }

	const showSignUp = () => { document.querySelector('#signUpModalContainer').classList.add('fl-show'); }

	email.addEventListener('keyup', checkEmail);
	password.addEventListener('keyup', checkPassword);
	email.addEventListener('focusin', hasFocus);
	email.addEventListener('focusout', loseFocus);
	password.addEventListener('focusin', hasFocus);
	password.addEventListener('focusout', loseFocus);
	toRegistrationBtn.addEventListener('click', showSignUp);

}

signInForm();

// the-end-of-sign-in



// sign-up

const signUpForm = () => {

	const form = document.querySelector('.sign-up-form');
	const email = form.querySelector('#email');
	const password = form.querySelector('#regPassword');
	const submit = form.querySelector('.fl-form-submit');
	const toLoginBtn = form.querySelector('.to-login-btn');
	const day = form.querySelector('.form-day .select-items');
	const month = form.querySelector('.form-month .select-items');
	const year = form.querySelector('.form-year .select-items');
	
	var emailIsEmpty = true, passwordIsEmpty = true;

	const disableSubmit = () => { submit.setAttribute('disabled', ''); }

	const enableSubmit = () => { submit.removeAttribute('disabled'); }

	function checkEmail() {

		this.value == "" ? emailIsEmpty = true : emailIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	function checkPassword() {

		this.value == "" ? passwordIsEmpty = true : passwordIsEmpty = false;

		!emailIsEmpty && !passwordIsEmpty ? enableSubmit() : disableSubmit();

	}

	function hasFocus() { this.parentElement.parentElement.classList.add('input-has-focus'); }

	function loseFocus() { if (this.value == "") this.parentElement.parentElement.classList.remove('input-has-focus'); }

	const showSignIn = () => { document.querySelector('#signInModalContainer').classList.add('fl-show'); }

	function showLabel() { this.closest('.fl-custom-select').querySelector('.form-hidden-label').classList.add('fl-show'); }

	email.addEventListener('keyup', checkEmail);
	password.addEventListener('keyup', checkPassword);
	email.addEventListener('focusin', hasFocus);
	email.addEventListener('focusout', loseFocus);
	password.addEventListener('focusin', hasFocus);
	password.addEventListener('focusout', loseFocus);
	toLoginBtn.addEventListener('click', showSignIn);
	day.addEventListener('click', showLabel);
	month.addEventListener('click', showLabel);
	year.addEventListener('click', showLabel);

}

signUpForm();

// the-end-of-sign-up
