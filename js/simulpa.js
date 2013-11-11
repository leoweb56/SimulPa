var preguntas = [
	{label: "Esta consciente?", resp: "", id: 1, sintoma : "", tiempo: ""},
	{label: "Cómo se llama?", resp: "", id: 2, sintoma : "", tiempo: ""},
	{label: "Cual es su nombre?", resp: "", id: 3, sintoma : "", tiempo: ""},
	{label: "responde lentamente?", resp: "", id: 4, sintoma : "", tiempo: ""}
];

var signosSintomas = [
	{id: 1, desc: "consciente", preguntaId: -1},
	{id: 2, desc: "inconsciente", preguntaId: -1},
	{id: 3, desc: "suduracion fria", preguntaId: -1},
	{id: 4, desc: "obnubilacion / respuesta lenta", preguntaId: 4},

];

var patologias = [
	{id: 1, nombre: "Desfallecimiento", signoSintomaIds: [4], signosSintomas: []},
	{id: 2, nombre: "Desmayo/Lipotimia", signoSintomaIds: [], signosSintomas: []}, 
	{id: 3, nombre: "Shock", signoSintomaIds: [], signosSintomas: []},
	{id: 4, nombre:  "Crisis convulsiva", signoSintomaIds: [], signosSintomas: []}
];

var patologia = function(datos){
	var self = this;
	self.datos = datos;

	self.init = function(){
		ko.utils.arrayForEach(self.datos.signoSintomaIds, function(id){
			var sintoma = ko.utils.arrayFirst(signosSintomas, function(sintoma){ return sintoma.id == id});
			if (sintoma != null)
				self.datos.signosSintomas.push(sintoma);
		});
	};


	self.responder = function(pregunta){
		var sintoma = ko.utils.arrayFirst(self.datos.signosSintomas, function(sintoma){
			return sintoma.preguntaId == pregunta.id; 
		});

		if (sintoma == null) {
			pregunta.resp = "No";
		}else{
			pregunta.resp = "Si";
			pregunta.sintoma = sintoma.desc;
		};
	};

	self.init();
}

var victima = function(datos){
	var self = this;
	self.datos = datos;
	self.responder = function(pregunta){
		switch(pregunta.id){
			case 2:
				pregunta.resp = self.datos.Nombre + " " + self.datos.Apellido;
				break;
			case 3:
				pregunta.resp = self.datos.Nombre + " " + self.datos.Apellido;
				break;
			default:
				self.patologia.responder(pregunta);
		}
	};
	//self.patologia = new patologia(patologias[Math.floor((Math.random()*patologias.length)-1)]);
	self.patologia = new patologia(patologias[0]);
}

var SimulPaVM = {
	victima : new victima(personas[Math.floor((Math.random()*personas.length)-1)]),
	initTime : false,
	preguntas : preguntas,
	respuestas: ko.observableArray([]),

	init: function(){
		$("#consulta").autocomplete({
			minLength: 0,
	    	source: preguntas,
	    	focus: function( event, ui ) {
	        	$( "#consulta" ).val( ui.item.label );
	        	return false;
	      	},
	      	select: function(event, ui){
	      		if (!SimulPaVM.initTime) { 
					SimulPaVM.initTime = true;
					$('#time').stopwatch({format:'{M}m, {s}s'}).stopwatch('start');
				};
	      		SimulPaVM.victima.responder(ui.item);
	      		ui.item.tiempo = $('#time').text();
	      		SimulPaVM.respuestas.push(ui.item);
	      		$("#consulta").val("");

	      		return false;
	      	},
		});
	},

	verificar: function(){
		if (!SimulPaVM.initTime) { 
			SimulPaVM.initTime = true;
			$('#time').stopwatch({format:'{M}m, {s}s'}).stopwatch('start');
		};


	}
}