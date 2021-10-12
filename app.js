/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

function listArray() {
	const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
	
	const countryUl = document.createElement("ul");
	document.body.appendChild(countryUl);

	for (const country = 1; countries < 6; index++) {
		const countryLi = document.createElement("li");
		countryUl.appendChild(countryLi)
	}
	console.log(listArray)
}

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

function removeElements() {
	const elements = document.removeAttribute(".fn-remove-me");
	 elements.innerHTML  
}

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

function arrayCars() {
	const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
	
	const carUl = document.createElement("ul");
	document.body.appendChild(carUl);

	for (const cars = 1; cars < 5; index++) {
		const carLi = document.createElement("li");
		carUl.appendChild(carLi)
	}
	console.log(arrayCars)
}


/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

function arrayCountries() {
	const countries = [
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
		{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
	];

	const ulList= document.createElement("ul");
	document.body.appendChild(ulList);

	for (let index = 0; index < array.length; index++) {
		
	}

}



/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */




/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */
 