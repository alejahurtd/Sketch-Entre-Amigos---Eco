import { router, socket } from '../routes.js';

export default function renderWelcomeScreen() {
	const app = document.getElementById('app');
	app.innerHTML = `
			<h3>Bienvenidx a</h3>
			<p>Manifiesta tu glow up</p>
			<p id="timer">10</p> <!-- Temporizador visible -->
	`;

	// Asegúrate de que el elemento "timer" esté disponible después de modificar el DOM
	const timerElement = document.getElementById('timer');
	let timeLeft = 10;

	// Emitir el evento "userConnectedServer" para la DB y cambio de pantalla
	socket.emit('userConnectedServer');

	// Actualizar el temporizador cada segundo
	const countdown = setInterval(() => {
		timeLeft -= 1;
		timerElement.textContent = timeLeft;

		// Si el temporizador llega a 0, redirigir a la pantalla 2
		if (timeLeft === 0) {
			clearInterval(countdown);
			router.navigateTo('/2startScreen');
		}
	}, 1000);
}
