const tombol = document.querySelector('#tombol');
const hasil = document.querySelector('.hasil');
const hide = document.getElementById('hide');

tombol.addEventListener('click', async function() {
	hasil.style.display = 'block';
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
		method: "GET"
	});

	const json = await response.json();
	function ObjekPikachu(name, image, type, number) {
		this.name = name;
		this.image = image;
		this.type = type;
		this.number = number;
	}
	let arr1 = [];

	let data = '';

	let objPikachu = new ObjekPikachu(json.name, json.sprites.front_default, json.types[0].type.name, json.id);

	arr1.push(objPikachu);

	arr1.forEach((key) => {
		data += `<div class="cardd electric">
							<h4 class="name">${key.number}<br><b>${key.name}</b></h4>
							  <img src=${key.image}>
							  <div class="containerr">
							    <h4>Type : ${key.type}</h
							  </div>
					</div>`;
	});
	hasil.innerHTML = data;


	


	
});

hide.addEventListener('click', () => {
	hasil.style.display = 'none';
});