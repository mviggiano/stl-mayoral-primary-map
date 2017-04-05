// This is likely getting phased out - going to restructure the JS so as to not need this file.

// module.exports = {
//   candidateSupport: function() {
//   var colorPalette = [];
//   if (candidate === 'AF') {
//     colorPalette = ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#91003f'];
//   } else if (candidate ===  'LR') {
//     colorPalette = ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#005a32'];
//   } else if (candidate === 'TJ') {
//     colorPalette = ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#084594'];
//   } else {
//     colorPalette = ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'];
//   }
//   for (var key in obj) {
//     const ward = obj[key];
//     const support = Number(ward.feature.properties[candidate]);
//     if (support < 10) {
//     ward.setStyle({ fillColor: colorPalette[0] });
//     } else if (support < 15) {
//     ward.setStyle({ fillColor: colorPalette[1] });
//     } else if (support < 20) {
//     ward.setStyle({ fillColor: colorPalette[2] });
//     } else if (support < 25) {
//     ward.setStyle({ fillColor: colorPalette[3] });
//     } else if (support < 30) {
//     ward.setStyle({ fillColor: colorPalette[4] });
//     } else if (support < 35) {
//     ward.setStyle({ fillColor: colorPalette[5] });
//     } else if (support < 40) {
//     ward.setStyle({ fillColor: colorPalette[6] });
//     } else {
//     ward.setStyle({ fillColor: colorPalette[7] });
//     }
//   }
//   },
// }

/* global L */

L.DropDown = {};

L.DropDown = L.Control.extend({
  options: {
    position: 'topright',
    title: 'Select',
  },
  onAdd: function () {
    this.div = L.DomUtil.create('div', 'leaflet-countryselect-container');
    this.select = L.DomUtil.create('select', 'leaflet-countryselect', this.div);
    const content = '<option>1</option><option>2</option><option>3</option><option>4</option>';

    this.select.innerHTML = content;

    this.select.onmousedown = L.DomEvent.stopPropagation;

    return this.div;
  },
  on: function (type, handler) {
    if (type === 'change') {
      this.onChangeHandler = handler;
      L.DomEvent.addListener(this.select, 'change', this.onChange, this);
    } else {
      console.log(`DropDown - cannot handle ${type} events.`);
    }
  },
  onChange: function (e) {
    const selected = this.select.options[this.select.selectedIndex].value;
    e.val = selected;
    this.onChangeHandler(e);
  },
});

L.dropDown = (id, options) => {
  return new L.DropDown(id, options);
};
