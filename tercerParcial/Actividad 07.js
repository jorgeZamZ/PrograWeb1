function funcionControles() {
	let varCadena = "Detalle de los controles:";
	// Acceso al Formulario
	let varForm = document.forms["frmControles"];
	// Acceso a los controles
	let varRadio = varForm.elements["groupRadio"];
	varCadena += "\n Radio: " + varRadio.value;
	let varCheck = varForm.elements["groupCheck"];
	varCadena += "\nCheck: " + varCheck.value;
	let varBasic = varForm.elements["selectBasic"];
	varCadena += "\nBasic: " + varBasic.value;
	let varMultiple = varForm.elements["selectMultiple"];
	varCadena += "\nMultiple: " + varMultiple.value;
	// Otros controles
	let varFile = varForm.elements["varFile"];
	varCadena += "\nArchivo: " + varFile.value;
	let varColor = varForm.elements["varColor"];
	varCadena += "\nColor: " + varColor.value;
	let varDate = varForm.elements["varDate"];
	varCadena += "\nFecha: " + varDate.value;
	let varTime = varForm.elements["varTime"];
	varCadena += "\nTiempo: " + varTime.value;
	let varWeek = varForm.elements["varWeek"];
	varCadena += "\nSemana: " + varWeek.value;
	let varMonth = varForm.elements["varMonth"];
	varCadena += "\nMes: " + varMonth.value;
	let varNumber = varForm.elements["varNumber"];
	varCadena += "\nNúmero: " + varNumber.value;
	let varRange = varForm.elements["varRange"];
	varCadena += "\nRango: " + varRange.value;
	alert(varCadena);
}