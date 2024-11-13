// import { router, socket } from '../routes.js';

// export default function renderStartScreen() {
// 	const app = document.getElementById('app');
// 	app.innerHTML = `

//         <button id="goToScreen3"> <h1>Click aquí</h1>
//         <p>para continuar</p></button>
//     `;

// 	document.getElementById('goToScreen3').addEventListener('click', () => {
// 		router.navigateTo('/3optionsScreen');
// 		socket.emit('startQuestions');
//     //para verificar que el evento si se emita
//     console.log('Evento startQuestions emitido desde client-mobile');
// 	});
// }

// Importar router y socket desde las rutas
import { router, socket } from '../routes.js';

// Función para renderizar la pantalla de bienvenida
export default function renderWelcomeScreen() {
	// Obtener el elemento "app" donde se insertará el contenido
	const app = document.getElementById('app');

	// Asignar el contenido HTML al elemento "app"
	app.innerHTML = `
    <h3>Bienvenido a Entre amigos de</h3>
    <img src="logo-JuanValdez" class="" alt="logo" />
    <p>¿No sabes qué pedir hoy? Entre amigos nos recomendamos. Responde algunas preguntas para recomendarte la bebida perfecta.</p>
     <button id="goToScreen3">
         <p>Comenzar</p></button>
     `;

	document.getElementById('goToScreen3').addEventListener('click', () => {
		router.navigateTo('/3optionsScreen');
		socket.emit('startQuestions');
		//para verificar que el evento si se emita
		console.log('Evento startQuestions emitido desde client-mobile');
	});
}
