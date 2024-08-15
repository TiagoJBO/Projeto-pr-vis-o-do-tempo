let chave = 'cebcd482eda57fa9a6714c1c2ba91885';

function display(dados) {
	console.log(dados);
	document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name;
	document.querySelector('.temp').innerHTML =
		Math.floor(dados.main.temp) + '°C';
	document.querySelector('.text-previsao').innerHTML =
		dados.weather[0].description;
	document.querySelector('.umidade').innerHTML = dados.main.humidity + '%';
	document.querySelector(
		'.icone'
	).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

	console.log(dados);
}

async function buscarCidade(cidade) {
	let dados = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
	).then((response) => response.json());

	display(dados);
}

function cliqueiNobotao() {
	let cidade = document.querySelector('.input-cidade').value;

	buscarCidade(cidade);
}
