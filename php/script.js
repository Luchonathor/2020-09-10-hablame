const url = `http://api.ipstack.com/`;
const default_ip = "134.201.250.155";
const key = `d703b36f588cd0671c1b2f3092d3c634`;

getIpStack(default_ip);

/***** EJERCICIO 4 *****/
$("#send").click(function(e){
	e.preventDefault();
	let form = $(this).parents("#form");
	let ip = form.find("#ip").val();
	getIpStack(ip);
});

function getIpStack(ip){
	var msg = ``;

	var msg_result = $("#result");
	msg_result.removeClass().empty();


	if (ip) { 
		fetch(`${url}${ip}?access_key=${key}`)
		.then(res => res.json())
		.then(res => {
			console.log(res)
			msg = `
				<h3>Resultados del Test</h3>
				<div class="panel">
					<div class="panel-title">
						<h4>IP</h4>
					</div>
					<div class="panel-content">
						<p>${res.ip}</p>
					</div>
				</div>
				<div class="panel">
					<div class="panel-title">
						<h4>Continente</h4>
					</div>
					<div class="panel-content">
						<p>${res.continent_name} (${res.continent_code})</p>
					</div>
				</div>
				<div class="panel">
					<div class="panel-title">
						<h4>Pais</h4>
					</div>
					<div class="panel-content">
						<p>${res.country_name} (${res.country_code})</p>
					</div>
				</div>
				<div class="panel">
					<div class="panel-title">
						<h4>Ciudad</h4>
					</div>
					<div class="panel-content">
						<p>${res.city}</p>
						<p><small>${res.region_name} (${res.region_code})</small></p>
					</div>
				</div>
				<div class="panel">
					<div class="panel-title">
						<h4>Ubicación</h4>
					</div>
					<div class="panel-content">
						<p>Longitud: <strong>${res.longitude}</strong></p>
						<p>Latitud: <strong>${res.latitude}</strong></p>
					</div>
				</div>
				<div class="panel">
					<div class="panel-title">
						<h4>ZIP</h4>
					</div>
					<div class="panel-content">
						<p>${res.zip}</p>
					</div>
				</div>
			`;
			msg_result.addClass("results").html(msg);
		})
	}
	else { msg = `<h4>No se seleccionado la ip</h4>`; }

	msg_result.addClass("results").html(msg);

}

