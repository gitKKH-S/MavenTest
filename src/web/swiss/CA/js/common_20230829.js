function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return Math.round(m) / 100 * Math.sign(num);
}

function integerFormatter (number) {
  return Math.floor(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function floatFormatter (number, fix = 2) {
  if (number) {
    return number
      .toFixed(fix)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return '0.00';
  }
};

function getObjectConvertArray (data) {
  return _.map(_.keys(data), function(item) {
    return data[item];
  });
}


function getRateArray(totalCount, arrayData, perValue) {
  if(arrayData.length == 0) {
    return {avg:0, rate: 0};
  }

  arrayData.sort(function(a,b) { return a - b;});
  var cut = Math.round(arrayData.length * perValue / 100);
  if (cut == 0) {
    cut = 1;
  } else if (cut == arrayData.length) {
    cut = arrayData.length - 1;
  }
  if(perValue < 50){
	  var resultArray = arrayData.slice(0, cut+1);
  }else if (perValue > 50){
	  var resultArray = arrayData.slice(cut);
  } else {
    var resultArray = arrayData;
  }
  var avg = round(_.sum(resultArray) / resultArray.length);
  return {avg, perValue};
}