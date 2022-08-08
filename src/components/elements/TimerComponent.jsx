import { useEffect } from "react";

const TimerComponent = ({ duracao, idSeletor }) => {
	console.log("\n\n\n\n");
	console.log(duracao);
	function startTimer(duration, display) {
		var timer = duration,
			horas,
			minutes,
			seconds;
		setInterval(function () {
			horas = parseInt(timer / 60 / 60, 10);
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			horas = horas < 10 ? "0" + horas : horas;

			minutes = minutes >= 60 ? minutes % 60 : minutes;

			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = horas + ":" + minutes + ":" + seconds;
			if (--timer < 0) {
				timer = duration;
			}
		}, 1000);
	}
	useEffect(() => {
		var duration = 60 * 60 * duracao; // Converter para segundos
		var display = document.querySelector(`#${idSeletor}`); // selecionando o timer
		startTimer(duration, display); // iniciando o timer
	}, []);
};

export default TimerComponent;
