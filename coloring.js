var obj = window.api.mapLayer._layers;
for (var key in obj) {
	var ward = obj[key];
	var AF = Number(ward.feature.properties.AF);
	var LR = Number(ward.feature.properties.LR);
	var TJ = Number(ward.feature.properties.TJ);
	var LK = Number(ward.feature.properties.LK);
	if (TJ < 5) {
		ward.setStyle({"fillColor": "#001111"});
	} else if (TJ < 10) {
		ward.setStyle({"fillColor": "#003333"});
	} else if (TJ < 15) {
		ward.setStyle({"fillColor": "#005555"});
	} else if (TJ < 20) {
		ward.setStyle({"fillColor": "#007777"});
	} else if (TJ < 25) {
		ward.setStyle({"fillColor": "#009999"});
	} else if (TJ < 30) {
		ward.setStyle({"fillColor": "#00bbbb"});
	} else if (TJ < 35) {
		ward.setStyle({"fillColor": "#00dddd"});
	} else {
		ward.setStyle({"fillColor": "#00ffff"});
	}
}

	// var max = Math.max(AF,LR,TJ,LK);
	// if (max === AF) {
	// 	ward.setStyle({"fillColor": "#FF0000"})
	// } else if (max === LR) {
	// 	ward.setStyle({"fillColor": "#00FF00"})
	// } else if (max === TJ) {
	// 	ward.setStyle({"fillColor": "#0000FF"})
	// } else if (max === LK) {
	// 	ward.setStyle({"fillColor": "#FFFF00"})
	// }