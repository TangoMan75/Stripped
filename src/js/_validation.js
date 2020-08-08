/**
 * HTML5 Validation
 * 
 * @author         Matthias Morin <matthias.morin@gmail.com>
 * @last-modified  14:00 09/10/2017
 */

/**
 * Initializes script
 */
 window.onload = init();

function init() {
	var name = document.getElementById('name');
	name.addEventListener('keyup', function (event) {
		if(name.validity.patternMismatch) {
			name.setCustomValidity('Votre nom ne peut comporter que des caractères alphabétiques.');
		} else {
			name.setCustomValidity('');
		}
	});

	var email = document.getElementById('mail');
	email.addEventListener('keyup', function (event) {
		if(email.validity.typeMismatch) {
			email.setCustomValidity('Vous devez renseigner une adresse email valide.');
		} else {
			email.setCustomValidity('');
		}
	});

	var phone = document.getElementById('phone');
	phone.addEventListener('keyup', function (event) {
		if(phone.validity.patternMismatch) {
			phone.setCustomValidity('Vous devez renseigner un numéro de téléphone valide.');
		} else {
			phone.setCustomValidity('');
		}
	});

	var message = document.getElementById('message');
	message.addEventListener('keyup', function (event) {
		if(message.validity.patternMismatch) {
			message.setCustomValidity('Votre message est trop court.');
		} else {
			message.setCustomValidity('');
		}
	});
};
