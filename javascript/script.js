/***** EJERCICIO 1 *****/
$("#send_1").click(function(e){
	e.preventDefault();
	let msg_result = $("#result_1");
	msg_result.removeClass();
	let form = $(this).parents("#form_1");
	let value = form.find("#value_1").val();
	let result = compare(value);
	const msg = `
		<h4>El valor enviado es</h4>
		<p>${value}</p>
		<h4>El resultado es</h4>
		<p>${result[0]}: ${result[1]}</p>
	`;
	msg_result.addClass("results").html(msg);
});

function compare(n){
	let array = new Array();
	let msg;
	if (n) {
		if (n%2 != 0) {
			msg = `Es impar`;
			n = n*3 + 1;
		} else {
			msg = `Es par`
			n = n/2;
		}
	} else { msg = `No hay valor asignado...` }

	array.push(msg, n);
	return array;
}

/***** EJERCICIO 2 *****/
$("#send_2").click(function(e){
	e.preventDefault();
	let msg_result = $("#result_2");
	msg_result.removeClass();
	let form = $(this).parents("#form_2");
	let value = form.find("#value_2").val();
	let result = palindrome(value);
	const msg = `
		<h4>El valor enviado es</h4>
		<p>${value}</p>
		<h4>El resultado es</h4>
		<p>${result}</p>
	`;
	msg_result.addClass("results").html(msg);
});

function palindrome(value){
	let response = ``;
	if(value){
		let flag = true;
		response = `Es un string palíndromo`;
		let word = value.split('');
		let reverse = value.split('').reverse();
		word.forEach(function(value, index){
			if (value != reverse[index]) { flag = false; }
		});
		if (!flag) { response = `No es un string palíndromo`; }
	} else { response = `No hay valor asignado...` }
	return response;
}

/***** EJERCICIO 2 *****/
$("#send_3").click(function(e){
	e.preventDefault();
	let msg_result = $("#result_3");
	msg_result.removeClass();
	let form = $(this).parents("#form_3");
	let value = form.find("#value_3").val();
	let result = calculo(value);
	const msg = `
		<h4>El resultado es</h4>
		<p>${result}</p>
	`;
	msg_result.addClass("results").html(msg);
});

function calculo(value){
	let result = (8/2)*(2+2);
	console.log(result) 
	return result;
}