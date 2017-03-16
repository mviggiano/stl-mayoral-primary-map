var obj = window.api.mapLayer._layers;

function winners() {
	for (var key in obj) {
		var ward = obj[key];
		var AF = Number(ward.feature.properties.AF);
		var LR = Number(ward.feature.properties.LR);
		var TJ = Number(ward.feature.properties.TJ);
		var LK = Number(ward.feature.properties.LK);
		var max = Math.max(AF,LR,TJ,LK);
		if (max === AF) {
			ward.setStyle({"fillColor": "#FF0000"})
		} else if (max === LR) {
			ward.setStyle({"fillColor": "#00FF00"})
		} else if (max === TJ) {
			ward.setStyle({"fillColor": "#0000FF"})
		} else if (max === LK) {
			ward.setStyle({"fillColor": "#FFFF00"})
		}
	}
}

function candidateSupport(candidate) {
	var colorPalette = [];
	if (candidate === "AF") {
		colorPalette = ["#110000", "#330000", "#550000", "#770000", "#990000", "#bb0000", "#dd0000", "#ff0000"];
	} else if (candidate ===  "LR") {
		colorPalette = ["#001100", "#003300", "#005500", "#007700", "#009900", "#00bb00", "#00dd00", "#00ff00"];
	} else if (candidate === "TJ") {
		colorPalette = ["#001111", "#003333", "#005555", "#007777", "#009999", "#00bbbb", "#00dddd", "#00ffff"];
	} else {
		colorPalette = ["#111100", "#333300", "#555500", "#777700", "#999900", "#bbbb00", "#dddd00", "#ffff00"];
	}
	for (var key in obj) {
		var ward = obj[key];
		var support = Number(ward.feature.properties[candidate]);
		if (support < 5) {
			ward.setStyle({"fillColor": colorPalette[0]});
		} else if (support < 10) {
			ward.setStyle({"fillColor": colorPalette[1]});
		} else if (support < 15) {
			ward.setStyle({"fillColor": colorPalette[2]});
		} else if (support < 20) {
			ward.setStyle({"fillColor": colorPalette[3]});
		} else if (support < 25) {
			ward.setStyle({"fillColor": colorPalette[4]});
		} else if (support < 30) {
			ward.setStyle({"fillColor": colorPalette[5]});
		} else if (support < 35) {
			ward.setStyle({"fillColor": colorPalette[6]});
		} else {
			ward.setStyle({"fillColor": colorPalette[7]});
		}
	}
}