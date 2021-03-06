function nFormatter(num, digits, type) {
  if (type) {
  var si = [
    { value: 1, symbol: " " },
    { value: 1E6, symbol: " M " },
    { value: 1E9, symbol: " B " },
    { value: 1E12, symbol: " T " },
    { value: 1E15, symbol: " Qa " },
    { value: 1E18, symbol: " Qi " },
    { value: 1E21, symbol: " Sx " },
    { value: 1E24, symbol: " Sp " },
    { value: 1E27, symbol: " Oc " },
    { value: 1E30, symbol: " No " },
    { value: 1E33, symbol: " Dc " },
  ];
  }
  else {
var si = [
    { value: 1, symbol: " " },
    { value: 1E6, symbol: " M" },
    { value: 1E9, symbol: " G" },
    { value: 1E12, symbol: " T" },
    { value: 1E15, symbol: " P" },
    { value: 1E18, symbol: " E" },
    { value: 1E21, symbol: " Z" },
    { value: 1E24, symbol: " Y" },
    { value: 1E27, symbol: " Oc " },
    { value: 1E30, symbol: " No " },
    { value: 1E33, symbol: " Dc " },
  ];
  }

  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}
