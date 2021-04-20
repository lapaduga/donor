'use strict';

document.addEventListener("DOMContentLoaded", function () {
	var body = document.querySelector('body');
	var burger = document.querySelector('.header__burger');
	var closeArea = document.querySelector('.menu__close-area');
	var account = document.querySelector('.account');
	var accountList = document.querySelector('.account__list');

	// Burger menu 
	burger.addEventListener('click', function () {
		body.classList.toggle('body--lock');
	});
	closeArea.addEventListener('click', function () {
		body.classList.remove('body--lock');
	});

	// Account
	account.addEventListener('click', function () {
		accountList.classList.toggle('show');
		account.classList.toggle('turn');
	});
});
//# sourceMappingURL=index.js.map
