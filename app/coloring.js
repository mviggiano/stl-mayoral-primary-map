// var obj = window.api.mapLayer._layers;

module.exports = {
	winners: function() {
		for (var key in obj) {
			var ward = obj[key];
			var AF = Number(ward.feature.properties.AF);
			var LR = Number(ward.feature.properties.LR);
			var TJ = Number(ward.feature.properties.TJ);
			var LK = Number(ward.feature.properties.LK);
			var max = Math.max(AF,LR,TJ,LK);
			if (max === AF) {
				ward.setStyle({"fillColor": "#99000d"})
			} else if (max === LR) {
				ward.setStyle({"fillColor": "#005a32"})
			} else if (max === TJ) {
				ward.setStyle({"fillColor": "#084594"})
			} else if (max === LK) {
				ward.setStyle({"fillColor": "#8c2d04"})
			}
		}
	},
	candidateSupport: function() {
		var colorPalette = [];
		if (candidate === "AF") {
			colorPalette = ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#99000d"];
		} else if (candidate ===  "LR") {
			colorPalette = ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#005a32"];
		} else if (candidate === "TJ") {
			colorPalette = ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#084594"];
		} else {
			colorPalette = ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#8c2d04"];
		}
		for (var key in obj) {
			var ward = obj[key];
			var support = Number(ward.feature.properties[candidate]);
			if (support < 10) {
				ward.setStyle({"fillColor": colorPalette[0]});
			} else if (support < 15) {
				ward.setStyle({"fillColor": colorPalette[1]});
			} else if (support < 20) {
				ward.setStyle({"fillColor": colorPalette[2]});
			} else if (support < 25) {
				ward.setStyle({"fillColor": colorPalette[3]});
			} else if (support < 30) {
				ward.setStyle({"fillColor": colorPalette[4]});
			} else if (support < 35) {
				ward.setStyle({"fillColor": colorPalette[5]});
			} else if (support < 40) {
				ward.setStyle({"fillColor": colorPalette[6]});
			} else {
				ward.setStyle({"fillColor": colorPalette[7]});
			}
		}
	}
}