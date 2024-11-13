import { router, socket } from '../routes.js';

const userInfo = {
	name: '',
	email: '',
};

export default function renderFormScreen() {
	const app = document.getElementById('app');
	app.innerHTML = `
        <div class="form-container">
            <h2>Tu bebida será facturada con los siguientes datos</h2>
            <p>Por favor llena la siguiente información.</p>

            <form>
                <input type="text" id="name" placeholder="Escribe tu nombre" required>
                <input type="text" id="lastName" placeholder="Escribe tu apellido*" required>
                <input type="text" id="idNumber" placeholder="Escribe tu cédula*" required>
                <input type="email" id="email" placeholder="Escribe tu correo electrónico*" required>

                <button type="submit" class="confirm-button" id="sendButton">Confirmar pedido</button>
                <button type="button" class="cancel-button">Cancel</button>
            </form>
        </div>
    `;

	// Seleccionar los elementos por su ID
	const nameInput = document.getElementById('name');
	const emailInput = document.getElementById('email');

	// Variables para almacenar los valores de los inputs
	let nameValue = '';
	let emailValue = '';

	// Añadir manejadores de eventos para capturar los datos del usuario
	nameInput.addEventListener('input', (event) => {
		nameValue = event.target.value;
		console.log(nameValue);
	});

	emailInput.addEventListener('input', (event) => {
		emailValue = event.target.value;
		console.log(emailValue);
	});

	// Manejar el envío del formulario
	document.getElementById('sendButton').addEventListener('click', (event) => {
		event.preventDefault(); // Evitar el comportamiento por defecto del formulario
		router.navigateTo('/5linktreeScreen');

		// Emitir la información del usuario al servidor
		socket.emit('saveUserInfo', nameValue, emailValue);
	});
}
