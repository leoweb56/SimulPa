var patologia = function(datos){
	var self = this;
	self.datos = datos;

	self.init = function(){
		ko.utils.arrayForEach(self.datos.signoSintomaIds, function(id){
			var sintoma = ko.utils.arrayFirst(info.signosSintomas, function(sintoma){ return sintoma.id == id});
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
	//self.patologia = new patologia(info.patologias[Math.floor((Math.random()*info.patologias.length)-1)]);
	self.patologia = new patologia(info.patologias[2]);
}

var SimulPaVM = {
	victima : new victima(info.personas[Math.floor((Math.random()*info.personas.length)-1)]),
	preguntas : info.preguntas,
	respuestas: ko.observableArray([]),

	init: function(){
		$('#time').stopwatch({format:'{M}m, {s}s'}).stopwatch('start');

		$("#consulta").autocomplete({
			minLength: 3,
	    	source: info.preguntas,
	    	focus: function( event, ui ) {
	        	$( "#consulta" ).val( ui.item.label );
	        	return false;
	      	},
	      	select: function(event, ui){
	      		SimulPaVM.victima.responder(ui.item);
	      		ui.item.tiempo = $('#time').text();
	      		SimulPaVM.respuestas.push(ui.item);
	      		$("#consulta").val("");

	      		return false;
	      	},
		});
	},
}
