var info = info ? info : {};

info.preguntas = [
	{label: "Esta consciente?", resp: "", id: 1, sintoma : "", tiempo: ""},
	{label: "Cómo se llama?", resp: "", id: 2, sintoma : "", tiempo: ""},
	{label: "Cual es su nombre?", resp: "", id: 3, sintoma : "", tiempo: ""},
	{label: "responde lentamente?", resp: "", id: 4, sintoma : "", tiempo: ""},
	{label: "Esta inconsciente?", resp: "", id: 5, sintoma : "", tiempo: ""},
	{label: "Esta palido?", resp: "", id: 6, sintoma : "", tiempo: ""},
	{label: "Tiene nauseas?", resp: "", id: 7, sintoma : "", tiempo: ""},
	{label: "Tiene mareos?", resp: "", id: 8, sintoma : "", tiempo: ""},
	{label: "Tiene suduración fria?", resp: "", id: 9, sintoma : "", tiempo: ""},
	{label: "Tiene dolor de cabeza?", resp: "", id: 10, sintoma : "", tiempo: ""},
];

info.signosSintomas = [
	{id: 1, desc: "conciencia", preguntaId: 1},
	{id: 2, desc: "inconciencia", preguntaId: 5},
	{id: 3, desc: "suduracion fria", preguntaId: 9},
	{id: 4, desc: "obnubilacion / respuesta lenta", preguntaId: 4},
	{id: 5, desc: "zumbidos en los oidos", preguntaId: 4},
	{id: 6, desc: "palidez", preguntaId: 6},
	{id: 7, desc: "Nauseas", preguntaId: 7},
	{id: 8, desc: "Mareos", preguntaId: 8},
	{id: 10, desc: "dolor de cabeza", preguntaId: 10},
];

info.patologias = [
	{id: 1, nombre: "Desfallecimiento", signoSintomaIds: [4, 5, 1, 6, 7, 8, 3, 10], signosSintomas: []},
	{id: 2, nombre: "Desmayo/Lipotimia", signoSintomaIds: [], signosSintomas: []}, 
	{id: 3, nombre: "Shock", signoSintomaIds: [], signosSintomas: []},
	{id: 4, nombre:  "Crisis convulsiva", signoSintomaIds: [], signosSintomas: []}
];

//Personas
info.personas = [];
info.personas.push({Nombre: 'ANTONIO', Apellido: 'GARCIA', Sexo: 'M'});
info.personas.push({Nombre: 'JOSE', Apellido: 'GONZALEZ', Sexo: 'M'});
info.personas.push({Nombre: 'MANUEL', Apellido: 'RODRIGUEZ', Sexo: 'M'});
info.personas.push({Nombre: 'FRANCISCO', Apellido: 'FERNANDEZ', Sexo: 'M'});
info.personas.push({Nombre: 'JUAN', Apellido: 'LOPEZ', Sexo: 'M'});
info.personas.push({Nombre: 'DAVID', Apellido: 'MARTINEZ', Sexo: 'M'});
info.personas.push({Nombre: 'JOSE ANTONIO', Apellido: 'SANCHEZ', Sexo: 'M'});
info.personas.push({Nombre: 'JOSE LUIS', Apellido: 'PEREZ', Sexo: 'M'});
info.personas.push({Nombre: 'JAVIER', Apellido: 'GOMEZ', Sexo: 'M'});
info.personas.push({Nombre: 'JESUS', Apellido: 'MARTIN', Sexo: 'M'});
info.personas.push({Nombre: 'FRANCISCO JAVIER', Apellido: 'JIMENEZ', Sexo: 'M'});
info.personas.push({Nombre: 'CARLOS', Apellido: 'RUIZ', Sexo: 'M'});
info.personas.push({Nombre: 'DANIEL', Apellido: 'HERNANDEZ', Sexo: 'M'});
info.personas.push({Nombre: 'MIGUEL', Apellido: 'DIAZ', Sexo: 'M'});
info.personas.push({Nombre: 'RAFAEL', Apellido: 'MORENO', Sexo: 'M'});
info.personas.push({Nombre: 'MARIA CARMEN', Apellido: 'GARCIA', Sexo: 'F'});
info.personas.push({Nombre: 'MARIA', Apellido: 'GONZALEZ', Sexo: 'F'});
info.personas.push({Nombre: 'CARMEN', Apellido: 'RODRIGUEZ', Sexo: 'F'});
info.personas.push({Nombre: 'JOSEFA', Apellido: 'FERNANDEZ', Sexo: 'F'});
info.personas.push({Nombre: 'ISABEL', Apellido: 'LOPEZ', Sexo: 'F'});
info.personas.push({Nombre: 'ANA MARIA', Apellido: 'MARTINEZ', Sexo: 'F'});
info.personas.push({Nombre: 'MARIA DOLORES', Apellido: 'SANCHEZ', Sexo: 'F'});
info.personas.push({Nombre: 'MARIA PILAR', Apellido: 'PEREZ', Sexo: 'F'});
info.personas.push({Nombre: 'MARIA TERESA', Apellido: 'GOMEZ', Sexo: 'F'});
info.personas.push({Nombre: 'ANA', Apellido: 'MARTIN', Sexo: 'F'});
info.personas.push({Nombre: 'LAURA', Apellido: 'JIMENEZ', Sexo: 'F'});
info.personas.push({Nombre: 'FRANCISCA', Apellido: 'RUIZ', Sexo: 'F'});
info.personas.push({Nombre: 'ANTONIA', Apellido: 'HERNANDEZ', Sexo: 'F'});
info.personas.push({Nombre: 'DOLORES', Apellido: 'DIAZ', Sexo: 'F'});
info.personas.push({Nombre: 'MARIA ANGELES', Apellido: 'MORENO', Sexo: 'F'});