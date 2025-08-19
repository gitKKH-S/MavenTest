Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

function noData(id, height) {
  $("#" + id).html('<div style="height: '+height+'px;vertical-align: baseline;line-height: '+height+'px; text-align: center; color: red;">데이터가 존재하지 않습니다.</div>');
}

/**
 * @description UI 코드가 object로 되어 있어서 이를 JSON Array로 변환하는 작업.
 * @param {*} _responseData data
 * @param {*} _type Object 의 key
 * @returns
 */
 function arrayToObject(_responseData, _type) {
  var result2 = [];
  var nowObject = _responseData[_type];
  if(_type == 'DEPARTMENT_L') {
	    _.map(_.keys(nowObject), function (item, index) {
	      var splitKey = item.split('_');
	      var value = item;
	      var text = nowObject[item];

	      if(splitKey[0].substring(0, 2) == 'C0') {
	        result2.push({value, text});
	      }
	    });

	    return result2;
	  }
  else {
	  var result = [];
	  var _arrayData = _.map(_.keys(nowObject), function (item, index) {
	    return {
	      value: item,
	      text: nowObject[item],
	    };
	  });

	  return _.concat(result, _arrayData);

  }
 }

/**
 * @description Raw Object 를 Series data로 형식 변환.
 * @param {*} data
 */
 function getSeriesDataAndSort(data, isSimple = false, sort=true) {
  var _keys = _.keys(data);
  var _all = []


  if(isSimple) {
    _all = _.map(_keys, function (item, index) {
      return {
        text: item,
        value: data[item],
      };
    });
  }
  else {
    var allPoint = _.sum(_.map(_keys, function (item, index) {
      return  data[item];
    }));
    _all = _.map(_keys, function (item, index) {
      return {
        text: item,
        value: round((data[item] / allPoint) * 100),
        point: data[item],
      };
    });
  }
  if(sort)
	  return _.sortBy(_all, 'value').reverse();
  else
	  return _all;
}

 /**
  * @description Raw Object 를 Series data로 형식 변환.
  * @param {*} data
  */
  function getLicenseDataAndSort(data) {
   var _keys = _.keys(data);
   var _all = []

   var allPoint = _.sum(_.map(_keys, function (item, index) {
       return  data[item];
     }));
     _all = _.map(_keys, function (item, index) {
       return {
         text: item,
         value: round((data[item] / allPoint) * 100)+'%('+data[item]+'명)',
         point: data[item],
       };
     });
     return _.sortBy(_all, 'point').reverse();
 }

   function getJobLowDataAndSort(data, obj) {
    var _keys = _.keys(data);
    var _all = []

    var allPoint = _.sum(_.map(_keys, function (item, index) {
        return  data[item];
      }));
      _all = _.map(_keys, function (item, index) {
        return {
          text: obj[item],
          value: round((data[item] / allPoint) * 100)+'%('+data[item]+'명)',
          point: data[item],
        };
      });
      return _.sortBy(_all, 'point').reverse();
  }

  /**
    * @description Raw Object 를 Series data로 형식 변환.
    * @param {*} data
    */
    function getLectureDataAndSort(data, cnt) {
     var _all = []
       _all = _.map(data.subnm, function (item, index) {
         return {
           text: item,
           value: round((data.counts[index] / cnt) * 100)+'%('+data.counts[index]+'건)',
           point: data.counts[index],
         };
       });
       return _.sortBy(_all, 'point').reverse();
   }

  function getLectureDataAndSortAll(data, cnt) {
    var _all = []
      _all = _.map(data.subnm, function (item, index) {
        return {
          text: item,
          value: round((data.counts[index] / cnt) * 100)+'%('+data.counts[index]+'건)',
          point: data.counts[index],
        };
      });
      return _.sortBy(_all, 'point').reverse();
  }


/**
 * @description Object 를 JSON Array 로 형식 변환.
 * @param {*} data
 */
 function getJSONArray(data) {
  var _keys = _.keys(data);
  return _.map(_keys, function (item, index) {
    return {
      text: item,
      value: data[item],
    };
  });
}


/**
 * @description 컬럼 차트 심플버전 Render
 * @param {*} id
 * @param {*} seriesData
 */
  function setRenderMultipleAxisChartByGrade(id, seriesData, Highcharts) {
    if(seriesData.length == 0) {
      noData(id, 260);
    } else if(seriesData.reduce((accumulator, item) => accumulator + item.y, 0) == 0) {
      noData(id, 260);
    } else {
      var tmpmax = Math.max(...seriesData.map(item => item.y));
      Highcharts.chart(id, {
        chart: {type: 'column',marginRight: -30},
        title: {text: ''},
        tooltip: {
          headerFormat: '',
          pointFormatter: function() {
            var unit = '명';
            return '<span style="color:'+this.color+'"> \u25CF </span><b>'+  this.name + '</b><b> '+Highcharts.numberFormat(this.y, 0)+'</b>' + unit;
          },
        },
        xAxis: [{
            categories: ['0점', '60점', '65점', '70점', '75점', '80점', '85점', '90점', '95점', '100점'],
            crosshair: true,
            tickInterval: 1,
            showLastLabel: true,
        }],
        yAxis: [{
          min: 0,
          labels: {
            format: '{value:,.0f}명',
            style: {
                fontSize: '12px'
            }
          },
          title: {
              text: '',
          },
          tickInterval: tmpmax <= 5 ? 1 : null,
        }],
        series: [{
          showInLegend: false,
          data: seriesData,
        }],
        plotOptions: {
        	spline: {
                color: '#E74D74'
            },
            series: {
                pointPadding: 0,
                groupPadding: 0.02,
                borderWidth: 0,
                shadow: false,
                 dataLabels: {
                    borderRadius: 0,
                    borderWidth: 1
                }
            },
            column: {
                pointPlacement: 'between'
            }
        },
        exporting: { enabled: false },
        credits: { enabled: false }
      });
    }
  }

  function setRenderMultipleAxisChartByToeic(id, seriesData, Highcharts) {
      if(seriesData.length == 0) {
        noData(id, 260);
      } else if(seriesData.reduce((accumulator, item) => accumulator + item.y, 0) == 0) {
        noData(id, 260);
      } else {
        var tmpmax = Math.max(...seriesData.map(item => item.y));
        Highcharts.chart(id, {
          chart: {type: 'column',marginRight: -30},
          title: {text: ''},
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              var unit = '명';
              return '<span style="color:'+this.color+'"> \u25CF </span><b>'+  this.name + '</b><b> '+Highcharts.numberFormat(this.y, 0)+'</b>' + unit;
            },
          },
          xAxis: [{
              categories: ['0점', '400점', '450점', '500점', '550점', '600점', '650점', '700점', '750점', '800점', '850점', '900점', '950점', '990점'],
              crosshair: true,
              tickInterval: 1,
              showLastLabel: true,
          }],
          yAxis: [{
            min: 0,
            title: {
              text: ''
            },
            labels: {
                format: '{value:,.0f}명',
                style: {
                    fontSize: '12px'
                }
            },
            tickInterval: tmpmax <= 5 ? 1 : null,
          }],
          series: [{
            showInLegend: false,
            data: seriesData,
            dataLabels: {
              enabled: false // Disable or adjust data labels as needed
            }
          }],
          plotOptions: {
          	spline: {
                  color: '#E74D74'
              },
              series: {
                  pointPadding: 0,
                  groupPadding: 0.02,
                  borderWidth: 0,
                  shadow: false,
                   dataLabels: {
                      borderRadius: 0,
                      borderWidth: 1
                  }
              },
              column: {
                  pointPlacement: 'between'
              }
          },
          exporting: { enabled: false },
          credits: { enabled: false }
        });
      }
    }

  /**
   * @description 라인 컬럼 혼합 차트 Render
   * @param {*} id
   * @param {*} seriesData
   */
 function setRenderMultipleAxisChart(id, seriesData, Highcharts, tickInterval, xmin, xmax, bin_width) {
    if(seriesData.length == 0) {
      noData(id, 260);
    }
    else {
      Highcharts.chart(id, {
//        title: {
//        	  text: '(단위: 점)',
//        	  x: 0,
//        	  y: 363,
//        	  align: 'right',
//        	  style: {
//        		  color: '#FF0000',
//        		  fontSize: 12
//        	  }
//        },
        title: { text: '' },
        xAxis: [{
          title: { text: '' },
          alignTicks: false,
          min: 0,
          max: 100,
          categories: ['0', '60', '65', '70', '75', '80', '85', '90', '95', '100'],
          crosshair: true,
          labels: {
              style: {
                  fontSize: '12px'
              },
              format: '{value}점',
          },
        }],
        yAxis: [{title: { text: '' },labels: {format: '{value:,.0f}명',style: {fontSize: '12px'}}}, {title: { text: '' }, opposite: true}],
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}"> \u25CF </span>' + '<b>{point.x:.0f} ~ {point.x2:.0f}</b><br />{point.y} 명',
        },
        plotOptions: {
          histogram: {
            binWidth: bin_width,
            accessibility: {
              point: {
                valueDescriptionFormat: '{index}. {point.x:.0f} to {point.x2:.0f}, {point.y}.'
              }
            }
          }
        },

        series: [{
          name: 'Histogram',
          type: 'histogram',
          showInLegend: false,
          baseSeries: 's1',

        }, {
          name: 'Data',
          type: 'scatter',
          data: seriesData,
          id: 's1',
          marker: {
            radius: 1.5
          },
          showInLegend: false,
          visible: false
        }],
          exporting: { enabled: false },
        credits: { enabled: false }
      });
    }
  }

  /**
 * @description 라인 차트 심플버전 Render
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderLineSimpleChart(id, categories, data, Highcharts) {
  if(data.length == 0) {
    noData(id, 400);
  }
  else {
    Highcharts.chart(id, {
      title: {text: ''},
      yAxis: [{
      	labels: {
      	    format: '{value:,.0f}명',
      	    style: {
                fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
            }
      	},
      	title: '',
      }],
      xAxis: { categories: categories,
        labels: {
            style: {
               fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
            }
        },
      },
      tooltip: {
      	headerFormat: '',
      	pointFormatter: function() {
      	var unit = '명';
      	return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.category + '</span></b><br /><b>'+this.series.name+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
      	},
      },
      series: [{
        name: '종업원 수',
        showInLegend: false,
        data: data,
      }],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

 /**
 * @description 라인 차트 심플버전 Render
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderLineSimpleChart2(id, categories, data1, data2, data3, seriesNames, Highcharts) {
  if(data1.length == 0) {
    noData(id, 400);
  }
  else {
    Highcharts.chart(id, {
      title: {text: ''},
      yAxis: { title: { text: '' } },
      xAxis: { categories: categories},
      series: [
        {name: seriesNames[0], data: data1 },
        {name: seriesNames[1], data: data2 },
        {name: seriesNames[2], data: data3 },
      ],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

 /**
 * @description 컬럼 차트 심플버전 Render
 * @param {*} id
 * @param {*} seriesData
 */
  function setRenderColumnSimpleChart(id, data1, data2, data3, Highcharts, type) {
    if(data1.length == 0) {
      noData(id, 400);
    }
    else {
      var seriesNames = ['입사자수', '퇴사자수', '순입사율'];
      Highcharts.chart(id, {
        title: {text: ''},
        tooltip: {
          headerFormat: '',
          pointFormatter: function() {
            var unit = this.series.name == '순입사율' ? '%' : '명';
            return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.name+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
          },
        },
        xAxis:
        [{
          type: 'category',
          title: {
            text: '',
          },
          labels: {
            style: {
                fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
            }
          },
        }],
        series: [
          {name: seriesNames[0], type: 'column',  data: data1 },
          {name: seriesNames[1], type: 'column', data: data2 },
          {name: seriesNames[2], type: 'spline', data: data3, yAxis: 1},
        ],
        yAxis: [{ // Primary yAxis
          endOnTick: false, // 눈금이 y축의 최대값에서 끝나지 않도록 함
          labels: {
        	format: '{value:,.0f}명',
            style: {
                fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
            }
          },
          title: {
              text: '입사자/퇴사자',
          },
        }, { // Second yAxis
            gridLineWidth: 0, // Y축 눈금선의 너비
            labels: {
          	    format: '{value}%',
          	    style: {
                    fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
                }
            },
            title: {
                text: '순입사율',
            },
            opposite: true
          }],

        plotOptions: {
        	spline: {
                color: '#E74D74'
            }
        },

        exporting: { enabled: false },
        credits: { enabled: false }
      });
    }

  }

 /**
   * @description 컬럼 차트 심플버전 Render
   * @param {*} id
   * @param {*} seriesData
   */
    function setRenderColumnSimpleChartByDept(id, data, Highcharts, type) {
      if(data.length == 0) {
        noData(id, 400);
      } else if (data.length == 3) {
        Highcharts.chart(id, {
          title: {text: ''},
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              var unit = '명';
              return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
            },
          },
          xAxis: [{
            type: 'category',
            categories: data[0].name,
            width: '30%',
            title: {
              text: '',
            },
            labels: {
                style: {
                    fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
                }
            },
          },
          {
            type: 'category',
            categories: data[1].name,
            offset: 0,
            left: '33%',
            width: '30%',
            title: {
              text: '',
            },
            labels: {
                style: {
                    fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
                }
            },
          },
          {
            type: 'category',
            categories: data[2].name,
            offset: 0,
            left: '66%',
            width: '30%',
            title: {
              text: '',
            },
            labels: {
                style: {
                    fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
                }
            },
          }
          ],
          series: [
            {name: data[0].year+'년', xAxis: 0, type: 'column',  data: data[0].data },
            {name: data[1].year+'년', xAxis: 1, type: 'column', data: data[1].data },
            {name: data[2].year+'년', xAxis: 2, type: 'column', data: data[2].data },
          ],
          plotOptions: {
              series: {
                  pointWidth: 25
              }
          },
          yAxis: [{ // Primary yAxis
            labels: {
                format: '{value:,.0f}명',
                style: {
                    fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
                }
            },
            title: {
                text: '인원수',
            },
          }],

          exporting: { enabled: false },
          credits: { enabled: false }
        });
      } else if (data.length == 2) {
        Highcharts.chart(id, {
          title: {text: ''},
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              var unit = '명';
              return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
            },
          },
          xAxis: [{
            type: 'category',
            categories: data[0].name,
            width: '49%',
            title: {
              text: '',
            },
          },
          {
            type: 'category',
            categories: data[1].name,
            offset: 0,
            left: '50%',
            width: '49%',
            title: {
              text: '',
            },
          },
          ],
          series: [
            {name: data[0].year, xAxis: 0, type: 'column',  data: data[0].data },
            {name: data[1].year, xAxis: 1, type: 'column', data: data[1].data },
          ],
          plotOptions: {
              series: {
                  pointWidth: 25
              }
          },
          yAxis: [{ // Primary yAxis
            labels: {
            format: '{value}명',
            },
            title: {
                text: '인원수',
            },
          }],

          exporting: { enabled: false },
          credits: { enabled: false }
        });
      } else if (data.length == 1) {
       Highcharts.chart(id, {
          title: {text: ''},
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              var unit = '명';
              return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
            },
          },
          xAxis: [{
            type: 'category',
            categories: data[0].name,
            title: {
              text: '',
            },
          },
          ],
          series: [
            {name: data[0].year, xAxis: 0, type: 'column',  data: data[0].data },
          ],
          plotOptions: {
              series: {
                  pointWidth: 25
              }
          },
          yAxis: [{ // Primary yAxis
            labels: {
            format: '{value}명',
            },
            title: {
                text: '인원수',
            },
          }],

          exporting: { enabled: false },
          credits: { enabled: false }
        });
      }
    }

   /**
   * @description Stacked bar Render
   * @param {*} id
   * @param {*} seriesData
   */
    function setRenderColumnSimpleChartByArea(id, data1, data2, Highcharts) {
      if(data1.length == 0 && data2.length == 0) {
        noData(id, 400);
      }
      else {
        tst= Highcharts.chart(id, {
          chart: {type: 'bar', marginRight: 20},
          title: {text: ''},
          tooltip: {
            headerFormat: '',
            pointFormatter: function() {
              var unit = '%';
              return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.z + '</span></b><br /><b>'+this.name+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
            },
          },
          xAxis:
          [{
            type: 'category',
            labels: {
              format: '{value}년',
              style: {
                  fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
              }
            },
            title: {
              text: '',
            },
          }],
          series: [
            {type: 'column', data: data2, showInLegend: false },
            {type: 'column',  data: data1, showInLegend: false },
          ],
          yAxis: [{ // Primary yAxis
            min: 0,
            max: 100,
            tickInterval: 10,
            labels: {
          	  format: '{value}%',
              style: {
                  fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
              }
            },
            title: {
                text: '',
            },
          }],
          plotOptions: {
            series: {
              stacking: 'normal',
              dataLabels: {
                enabled: true,
                format: '{point.z}'
              }
            },
          },
          /*title: {
          	  text: '(%)',
          	  x: 0,
          	  y: 388,
          	  align: 'right',
          	  style: {
          		  color: '#FF0000',
          		  fontSize: 12
          	  }
          },*/

          exporting: { enabled: false },
          credits: { enabled: false }
        });
      }
   }


/**
 * @description 컬럼 차트 심플버전 Render
 * @param {*} id
 * @param {*} seriesData
 */
  function setRenderColumnSimpleChartBySalary(id, seriesData, dept, Highcharts, flag) {
    if(seriesData.length == 0) {
      noData(id, 400);
    } else if(seriesData.reduce((accumulator, item) => accumulator + item.y, 0) == 0) {
      noData(id, 400);
    } else {
      var tmpmax = Math.max(...seriesData.map(item => item.y));
      Highcharts.chart(id, {
        chart: {type: 'column'},
        title: {text: ''},
        tooltip: {
          headerFormat: '',
          pointFormatter: function() {
            var unit = '명';
            return '<span style="color:'+this.color+'"> \u25CF </span><b>'+  this.name + '</b><b> '+this.y+'</b>' + unit;
          },
        },
        xAxis: [{
            tickPositioner: function() {
              var positions = [];
              for (var i = 0; i < seriesData.length; i++) {
                if (flag) {
                    if(i%2 == 0){
                      positions.push(i);
                    }
                } else {
                    positions.push(i);
                }
              }

              return positions
            },
            min: 0,
            labels: {
                formatter: function() {
                    return Highcharts.numberFormat(this.value*dept, 0)+'만원';
                },
                style: {
                    fontSize: '12px'
                },
                rotation: -45
            },
        }],
        yAxis: [{
          min: 0,
          labels: {
            format: '{value:,.0f}명',
            style: {
                fontSize: '12px'
            }
          },
          title: {
              text: '인원수',
          },
          tickInterval: tmpmax <= 5 ? 1 : null,
        }],
        series: [{
          showInLegend: false,
          name: '급여분포',
          data: seriesData,
        }],
        plotOptions: {
        	spline: {
                color: '#E74D74'
            },
            series: {
                pointPadding: 0,
                groupPadding: 0.02,
                borderWidth: 0,
                shadow: false,
                 dataLabels: {
                    borderRadius: 0,
                    borderWidth: 1
                }
            },
            column: {
                pointPlacement: 'between'
            }
        },
        exporting: { enabled: false },
        credits: { enabled: false }
      });
    }
  }


  function setRenderForceChart(id, data, Highcharts) {
	    var test = [];
	    if(data.length == 0) {
	      noData(id, 200);
	    }
	    else {
	      var seriesNames = ['학점'];
	      var height = Object.keys(data).length == 4 ? 250 : Object.keys(data).length == 3 ? 200 : 150;
	      var score = (data.expected + data.shap_gradescore) > 100 ? 100 : (data.expected + data.shap_gradescore);
	      score = score < 0 ? 0 : score;
	      var scorecolor = data.shap_gradescore > 0 ? '#E62E4D' : '#498CFB';
	      var scoredata = [data.expected, score];
	      var scoremin = Math.min(...scoredata);
	      var scoremax = Math.max(...scoredata);
	      var annoX = Math.abs((0-scoremin)) > Math.abs((100-scoremax)) ? 0 : 600;
	      var serisedata = [{
	    	  low: scoremin,
	    	  high: scoremax,
	    	  color: scorecolor
	      }]
	      if('shap_toeic' in data){
	    	  var toeiccolor = data.shap_toeic > 0 ? '#E62E4D' : '#498CFB';
	    	  var toeic = (data.expected + data.shap_toeic) > 100 ? 100 : (data.expected + data.shap_toeic);
		      toeic = toeic < 0 ? 0 : toeic;
		      var toeicdata = [data.expected, toeic];

		      serisedata.push({
		    	  low: Math.min(...toeicdata),
		    	  high: Math.max(...toeicdata),
		    	  color: toeiccolor
		      });
		      seriesNames.push('TOEIC');
	      }

	      if('shap_license' in data){
	    	  var licensecolor = data.shap_license > 0 ? '#E62E4D' : '#498CFB';
	    	  var license = (data.expected + data.shap_license) > 100 ? 100 : (data.expected + data.shap_license);
		      license = license < 0 ? 0 : license;
		      var licensedata = [data.expected, license];
		      serisedata.push({
		    	  low: Math.min(...licensedata),
		    	  high: Math.max(...licensedata),
		    	  color: licensecolor
		      });
		      seriesNames.push('자격증');
	      }


	      Highcharts.chart(id, {
	        title: {text: ''},
	        chart: {
	            type: 'columnrange',
	            inverted: true,
	            height: height
	        },

	        xAxis: {
	            categories: seriesNames,
	            labels: {
                    style: {
                        fontSize: '12px'
                    }
                },
	        },

	        yAxis: {
//	            title: {
//	                text: '(%)',
//	                align: 'high',
//                    style: {
//                        color: '#FF0000',
//                        fontSize: 12
//                    }
//	            },
                title: {text:''},
	            plotLines: [{
	                color: '#2CA02C',
	                width: 2,
	                value: data.expected,
	                dashStyle: 'ShortDot'
	            }],
	            min: 0,
		        max: 100,
		        //gridLineColor: 'transparent'
		        labels: {
                    style: {
                        fontSize: '12px'
                    },
                    format: '{value}%',
                },
	        },
	        plotOptions: {
	            columnrange: {
	                dataLabels: {
	                    enabled: true,
	                    //format: '{y}%'
	                    formatter:function(){
	    	        		var txt = null;
	    	        		if(test.indexOf(this.point.index) == -1) {
	    	        			test.push(this.point.index);
		    	        		if(this.point.low == this.point.high)
		    	        			txt = '변화 없음';
		    	        		else if(data.expected > this.point.low)
		    	        			txt = (data.expected - this.point.low).toFixed(2) + '% 감소';
		    	        		else
		    	        			txt = (this.point.high - data.expected).toFixed(2) + '% 증가';
	    	        		}
	    	                return txt;
	    	            }
	                },
	                borderRadius: 5
	            }
	        },
	        tooltip: {
	        	enabled: false
	        },
	        annotations: [{
		    	  draggable: '',
		          labelOptions: {
		              backgroundColor: 'transparent',
		              borderWidth: 0,
		              verticalAlign: 'top',
		              x: annoX,
		              y: 0,
		          },
		          labels: [{
		        	  point: {
		                  xAxis: '학점',
		                  yAxis: data.expected,
		                  x: '학점',
		                  y: data.expected
		              },
		              style: {
		                  fontSize: '12px',
		                  color: '#2CA02C',
		                  fontWeight: 'bold',
		                  fontFamily: 'Segoe UI'
		              },
		              text: '출신 학과 평균(' + data.expected + '%)'
		          }]
		      }],

	        legend: {
	            enabled: false
	        },

	        series: [{
	            name: seriesNames,
	            data: serisedata
	        }],
	        exporting: { enabled: false },
	        credits: { enabled: false }
	      });
	    }
	  }


function getColumnChartSeries(data, selectName = '') {
  var result= _.map(data, function(x, i) {
    if(!x.point) {
      if(x.text === selectName) {
        return {name: x.text, y:x.value, color: '#FF4500',};
      }
      else {
        return {name: x.text, y:x.value, };
      }
    }
    else {
      if(i === 0) {
        return {name: x.text, y:x.value, value: x.point, color: '#FF4500',};
      }
      else {
        return {name: x.text, y:x.value, value: x.point};
      }
    }

  })
  return result;
}

/**
 * @description 컬럼 차트 ; (유색 차트, value로 지정한 값은 해당 색상 표기)
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderColumnChartForColorful(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
   noData(id, height);
  }
  else {
   Highcharts.chart(id, {
     chart: {
        type: 'column',
        marginTop: 30 // 상단에 추가 여백을 설정
     },
     title: {text: ''},
     tooltip: {
       headerFormat: '',
       pointFormatter: function() {
         var ext = this.value ? '('+this.value+'건)' : '' ;
         return '<span style="color:'+this.color+'"> \u25CF </span><b>'+this.name+'</b>  ' + ' <b>'+this.y+'</b>% ' + ext;
       },
     },
     yAxis: { title: { text: ''}, min:0, max: 100, },
     xAxis: { type: 'category' },
     series: [{
         showInLegend: false,
         name: '',
         data: seriesData,
     }],
     plotOptions: {
       series: {
         dataLabels: {
           enabled: true,
           y: 0,
           overflow: 'none',
           crop: false,
           style: {
             fontFamily: 'Segoe UI',
             color: 'gray',
             fontSize: '16px',
             textOutline: false,
           },
           format: '{point.y:.1f}%',
         },
         marker: {
           radius: 7
         }
       }
     },
     exporting: { enabled: false },
     credits: { enabled: false }
   });
  }

}


/**
 * @description 컬럼 차트 Render (회색조, 지정한 값만 컬러)
 * @param {*} id
 * @param {*} seriesData
 */
 function setRenderColumnChart(id, seriesData, Highcharts, height=400) {
   if(seriesData.length == 0) {
    noData(id, height);
   }
   else {
    Highcharts.chart(id, {
      chart: {type: 'column'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var ext = this.value ? '('+this.value+'개)' : '' ;
          return '<span style="color:'+this.color+'"> \u25CF </span><b>'+this.name+'</b>  ' + ' <b>'+this.y+'</b>% ' + ext;
        },
      },
      yAxis: { title: { text: ''}, min:0, max: 100 },
      xAxis: { type: 'category' },
      series: [{
          showInLegend: false,
          name: '',
          data: seriesData,
      }],
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            y: -10,
            style: {
              fontFamily: 'Segoe UI',
              color: 'gray',
              fontSize: '16px',
              textOutline: false,
            },
            format: '{point.y:.1f}%',
          },
          color: 'gray',
          marker: {
            radius: 7
          }
        }
      },
      exporting: { enabled: false },
      credits: { enabled: false }
    });
   }

}

function setSalaryColumnChart(id, seriesData, Highcharts, comtype, sector, indnm, height=400) {
   if(seriesData.length == 0) {
    noData(id, height);
   }
   else {
      var anotxt = (seriesData[0].y / seriesData[1].y).toFixed(2) + '배';
	  
	  if (seriesData[1].y == 0) {
		  anotxt = '1배';
	  }

      var _seriesData = _.map(seriesData, function (item, index) {
         return {
                name: item.name,
                y: item.y,
                id: String(index)
              };
            });


    Highcharts.chart(id, {
      chart: {type: 'column'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          html = '';
          if (this.name == "동종업계평균") {
            html = '<span style="color:'+this.color+'"> \u25CF </span><b>'+this.name+'</b>  ' + ' <b>'+this.y.toLocaleString()+'</b>만원<br/>';
            html += '<br/><b style="color:#89b1c9">※ 동종업계</b><br/><b style="color:#89b1c9">기업규모: '+comtype+'</b><br/><b style="color:#89b1c9">업종: '+sector+'</b><br/><b style="color:#89b1c9">표준산업분류: '+indnm+'</b>';
          } else {
            html = '<span style="color:'+this.color+'"> \u25CF </span><b>'+this.name+'</b>  ' + ' <b>'+this.y.toLocaleString()+'</b>만원';
          }

          return html;
        },
      },
      yAxis: [{
      	labels: {
      	    format: '{value:,.0f}만원',
            style: {
                fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
            }
      	},
      	title: {
      		text: '',
      	},
      }],
      xAxis: { type: 'category',
        labels: {
             style: {
                 fontSize: '12px' // 레이블 폰트 크기를 13px로 설정
             }
        },
      },
      series: [{
          showInLegend: false,
          name: '',
          data: _seriesData,
      }],
      plotOptions: {
        series: {
          marker: {
            radius: 7
          }
        },
        column: {
            colorByPoint: true
        }
      },
      annotations: [{
          draggable: '',
          labelOptions: {
              backgroundColor: 'rgba(255,255,255,1)',
              borderWidth: 0,
              verticalAlign: 'middle',
          },
          labels: [{
              point: '0',
              style: {
                  fontSize: '12px',
                  color: '#E74D74',
                  fontWeight: 'bold',
                  fontFamily: 'Segoe UI'
              },
              text: anotxt
          }]
      }],
      colors: ['#FF6B8A', '#567BFF'],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
   }

}

function setSalaryColumnChart2(id, seriesData, Highcharts, height=400) {
   if(seriesData.length == 0) {
       noData(id, height);
   }
   else {
      var _seriesData = _.map(seriesData, function (item, index) {
         return {
                name: item.name,
                y: item.y,
                id: String(index)
              };
            });


    Highcharts.chart(id, {
      chart: {type: 'column'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          return '<span style="color:'+this.color+'"> \u25CF </span><b>'+this.name+'</b>  ' + ' <b>'+this.y.toLocaleString()+'</b>명';
        },
      },
      yAxis: { title: { text: ''}},
      xAxis: { type: 'category' },
      series: [{
          showInLegend: false,
          name: '',
          data: _seriesData,
      }],
      plotOptions: {
        series: {
          marker: {
            radius: 7
          }
        },
        column: {
            colorByPoint: true
        }
      },
      colors: ['#6ECEDA', '#C6D2BE'],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
   }

}


function setRenderPieChart(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '55%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 5
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

function setRenderPieChartByColor(id, seriesData, Highcharts, height = 400) {
  if (seriesData.length == 0) {
    noData(id, height);
  } else {
    // Define a color map for specific values
    const colorMap = {
      '유지' : '#567BFF',
      '이동' : '#26DAAF',
      '대기업' : '#567BFF',
      '중소기업' : '#26DAAF',
    };

    // Map the colors based on the values in seriesData
    const coloredSeriesData = seriesData.map((dataPoint) => ({
      name: dataPoint[0],
      y: dataPoint[1],
      color: colorMap[dataPoint[0]] || '#FFA620', // Default to green for other values
    }));

    Highcharts.chart(id, {
      chart: { type: 'pie' },
      title: { text: '' },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
          '<b>{point.y} 건</b>  ({point.percentage:.1f}%)',
      },
      plotOptions: {
        pie: {
          size: '55%',
          cursor: 'pointer',
          data: coloredSeriesData, // Use the colored data
        },
      },
      series: [
        {
          innerSize: '30%',
          type: 'pie',
          dataLabels: {
            verticalAlign: 'top',
            enabled: true,
            connectorWidth: 1,
            distance: -30,
            connectorColor: '#000000',
            style: {
              fontFamily: 'Segoe UI',
              fontWeight: 'bold',
              textOutline: false,
              fontSize: '13px',
            },
            format: '{point.percentage:.1f}%',
            filter: {
              property: 'percentage',
              operator: '>',
              value: 5,
            },
          },
        },
        {
          innerSize: '30%',
          type: 'pie',
          dataLabels: {
            enabled: true,
            connectorWidth: 1,
            distance: 10,
            format: '{point.name} ({point.percentage:.1f}%)',
            style: {
              fontFamily: 'Segoe UI',
              fontWeight: 'bold',
              textOutline: false,
              fontSize: '13px',
            },
          },
        },
      ],
      exporting: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
    });
  }
}

function setRenderPieChartBySize(id, seriesData, Highcharts, height) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '55%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 4
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

function setRenderPieChartBySize(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 5
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var salaryChart = null;
function setRenderPieChart2(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    salaryChart = Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.2f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 5
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var jobChart = null;
function setRenderPieChart3(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    jobChart = Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.2f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 5
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var durationChart = null;
function setRenderPieChartDuration(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    durationChart = new Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                data: seriesData
            }
        },
        series: [{
          innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                    format: '{point.percentage:.2f}%',
                    filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 5
                  }
                }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}


var clickChart = null;
function setRenderPieChartClick(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    seriesData.sort(function(a, b) {
        return b.y - a.y; // 여기서 'y'는 각 데이터 조각의 값입니다.
    });

    clickChart = new Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.value} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '80%',
                cursor: 'pointer',
                events: {
                    click: function(event) {
                        var selectedPoint = this.chart.getSelectedPoints();
                        window.app.setSelectedCompany(event.point, selectedPoint);
                    }
                },
                data: seriesData,
            }
        },
        series: [
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            },
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                }
            }
        ],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

function setRenderPieChartByRate(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    seriesData.sort(function(a, b) {
        return b.y - a.y; // 여기서 'y'는 각 데이터 조각의 값입니다.
    });

    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.value} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '80%',
                cursor: 'pointer',
                events: {
                    click: function(event) {
                        var selectedPoint = this.chart.getSelectedPoints();
                        window.app.setSelectedCompany(event.point, selectedPoint);
                    }
                },
                data: seriesData,
            }
        },
        series: [
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            },
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                }
            }
        ],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var clickUniChart = null;
function setRenderPieChartUniClick(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    clickUniChart = new Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '80%',
                cursor: 'pointer',
                events: {
                    click: function(event) {
                        var selectedPoint = this.chart.getSelectedPoints();
                        window.app.setSelectedCompany(event.point, selectedPoint);
                    }
                },
                data: seriesData,
            }
        },
        series: [
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            },
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                }
            }
        ],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var indChart = null;
function setRenderPieChartMultiClick(id, seriesData, Highcharts, height=300) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    indChart = Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                events: {
                   click: function(event) {

                        if (this.chart.series[0].data[event.point.index].selected) {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.selectedComtype;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.selectedComind;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                        } else {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.companyTypes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComtype.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.companySizes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComind.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                        }
                    }
                },
                data: seriesData
            },
        },
        series: [{
          innerSize: '30%',
            type: 'pie',
            dataLabels: {
                verticalAlign: 'top',
                enabled: true,
                connectorWidth: 1,
                distance: -30,
                connectorColor: '#000000',
                style: {
                  fontFamily: 'Segoe UI',
                  fontWeight: 'bold',
                  textOutline: false,
                  fontSize: '13px',
                },
                format: '{point.percentage:.2f}%',
                filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 5
              }
            }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

var comsizeChart = null;
function setRenderPieChartMultiClickByUserGroup(id, seriesData, Highcharts, height=300) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    comsizeChart = Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                events: {
                   click: function(event) {

                        if (this.chart.series[0].data[event.point.index].selected) {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.selectedComtype;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.selectedComind;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                        } else {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.companyTypes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComtype.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.companySizes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComind.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                        }
                    }
                },
                data: seriesData
            },
        },
        series: [{
          innerSize: '30%',
            type: 'pie',
            dataLabels: {
                verticalAlign: 'top',
                enabled: true,
                connectorWidth: 1,
                distance: -30,
                connectorColor: '#000000',
                style: {
                  fontFamily: 'Segoe UI',
                  fontWeight: 'bold',
                  textOutline: false,
                  fontSize: '13px',
                },
                format: '{point.percentage:.2f}%',
                filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 5
              }
            }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

function setRenderPieChartMultiClickByJob(id, seriesData, Highcharts, height=300) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
              '<b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                size: '80%',
                cursor: 'pointer',
                events: {
                   click: function(event) {

                        if (this.chart.series[0].data[event.point.index].selected) {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.selectedComtype;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.selectedComind;
                                for(let i = 0; i < arr.length; i++) {
                                  if(arr[i].name === this.chart.series[0].data[event.point.index].name)  {
                                    arr.splice(i, 1);
                                    i--;
                                  }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FFFFFF', selected : false, sliced : false});
                        } else {
                            if (id == "comtype_pie_chart") {
                                var arr = window.app.companyTypes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComtype.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            } else if (id == "comind_pie_chart") {
                                var arr = window.app.companySizes;
                                for (let i = 0; i < arr.length; i++) {
                                    if (arr[i].text == this.chart.series[0].data[event.point.index].name) {
                                        window.app.selectedComind.push({'name':arr[i].text, 'value':arr[i].value})
                                        break;
                                    }
                                }
                            }

                            this.chart.series[0].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                            this.chart.series[1].data[event.point.index].update({borderColor : '#FF0000', selected : true, sliced : true});
                        }
                    }
                },
                data: seriesData
            },
        },
        series: [{
          innerSize: '30%',
            type: 'pie',
            dataLabels: {
                verticalAlign: 'top',
                enabled: true,
                connectorWidth: 1,
                distance: -30,
                connectorColor: '#000000',
                style: {
                  fontFamily: 'Segoe UI',
                  fontWeight: 'bold',
                  textOutline: false,
                  fontSize: '13px',
                },
                format: '{point.percentage:.2f}%',
                filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
            }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

/*
하프도넛 차트 다른 스타일
  20231114 추가. `기업취업현황-특성정보` 수정사항 대응용
*/
function setRenderHalfDounutChartNew(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    var majorPercent = "100";
    dataz = [[seriesData[0][0], seriesData[0][1]]];
    if (seriesData.length === 2) {
      majorPercent = (seriesData[0][1] / (seriesData[0][1] + seriesData[1][1]) * 100).toFixed(2);
      dataz = [
        [seriesData[0][0], seriesData[0][1]],
        {
          name: seriesData[1][0],
          y: seriesData[1][1]
        }
      ];
    }

    Highcharts.chart(id, {
      chart: { renderTo: 'halfPie', type: 'pie', margin: [0, 0, 0, 0],},
      title: {
        text: majorPercent + '%',
        align: 'center',
        verticalAlign: 'middle',
        y: 30,
        style: {
          color:'#A50000',
          fontSize: '20px',
          fontFamily: 'Segoe UI',
          fontWeight: 'bold',
          textOutline: false
        }
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
            '<b>{point.y}건</b>  ({point.percentage:.1f}%)'
      },
      plotOptions: {
        pie: {
              dataLabels: {
                enabled: true,
                distance: -20,
              },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '150%',
                showInLegend: false
                }
      },
      series: [{
        type: 'pie',
          innerSize: '50%',
          data: dataz,
          dataLabels: {
            enabled: true,
            distance: -50,
            formatter: function () {
              retval = null;
              // 값이 10% 이상만 라벨 표시.
              if (10 < this.percentage) {
                retval = this.point.name;
              }
              // 라벨이 "아니오"인 데이터 영역은 회색으로 표시.
              if (this.point.name === '아니오') {
                this.point.color = "#808080";
              }
              return retval;
            },

            style: {
              fontFamily: 'Segoe UI',
              fontWeight: 'bold',
              textOutline: false,
              fontSize: '15px',
            },
          }
      }],
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      }
    });
  }
}

function setRenderHalfDounutChart(id, seriesData, Highcharts, height=400) {
	  if(seriesData.length == 0) {
	    noData(id, height);
	  }
	  else {
		  var majorPercent = "100";
		  dataz = [[seriesData[0][0], seriesData[0][1]]];
		  if(seriesData.length==2){
			  majorPercent = (seriesData[0][1] / (seriesData[0][1] + seriesData[1][1]) * 100).toFixed(2);
			  dataz = [
	               [seriesData[0][0], seriesData[0][1]],
	               {
	                   name: seriesData[1][0],
	                   y: seriesData[1][1],
	                   dataLabels: {
	                  	 enabled: false
	                   }
	                 }
	             ];
		  }
	    Highcharts.chart(id, {
	      chart: { renderTo: 'halfPie', type: 'pie', margin: [0, 0, 0, 0],},
	      title: {
	          text: majorPercent + '%',
	          align: 'center',
	          verticalAlign: 'middle',
	          y: 30,
	          style: {
	              color:'#A50000',
	              fontSize: '20px',
	              fontFamily: 'Segoe UI',
	              fontWeight: 'bold',
	              textOutline: false
	            }
	      },
	        tooltip: {
	          headerFormat: '',
	          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' +
	              '<b>{point.y}건</b>  ({point.percentage:.1f}%)'
	        },
	        plotOptions: {
	        	pie: {
	                dataLabels: {
	                  enabled: true,
	                  distance: -20,
	                },
	                  startAngle: -90,
	                  endAngle: 90,
	                  center: ['50%', '75%'],
	                  size: '150%',
	                  showInLegend: false
	                 }
	        },
	        series: [{
	        	 type: 'pie',
	             innerSize: '50%',
	             data: dataz,
	             dataLabels: {
	               enabled: true,
	               //format: '{point.x}',
	               color: '#000000',
	               align: 'center',
	               //세로 위치 지정
	               y: 20,
	               //x: 0,
	               style: {
	                      fontFamily: 'Segoe UI',
	                      fontWeight: 'bold',
	                      textOutline: false,
	                      size: '16px'
	                    }
	             }
	            }],
	        exporting: {
	            enabled: false
	        },
	        credits: {
	            enabled: false
	        }
	    });
	  }
	}

var setFlag = true;
function setRenderColumnRangeChart(id, catData, seriesData, base, last, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    $(function() {
      (function(factory) {
        if (setFlag) {
            factory(Highcharts);
            setFlag = false;
        }
      }(function(Highcharts) {
        (function(H) {
          H.wrap(H.seriesTypes.columnrange.prototype, 'translate', function(proceed) {
            const options = this.options;
            const topMargin = options.topMargin || 0;
            const bottomMargin = options.bottomMargin || 0;

            proceed.apply(this, [].slice.call(arguments, 1));

            this.points.forEach((point) => {
              if (point.color == "#115bcb") { // blue
                 options.borderRadiusTopLeft = 0;
                 options.borderRadiusTopRight = 0;
                 options.borderRadiusBottomRight = 50;
                 options.borderRadiusBottomLeft = 50;
              } else if (point.color == "#e71909") { // red
                 options.borderRadiusTopLeft = 50;
                 options.borderRadiusTopRight = 50;
                 options.borderRadiusBottomRight = 0;
                 options.borderRadiusBottomLeft = 0;
              }

              if (options.borderRadiusTopLeft || options.borderRadiusTopRight || options.borderRadiusBottomRight || options.borderRadiusBottomLeft) {
                const w = point.shapeArgs.width;
                const h = point.shapeArgs.height;
                const x = point.shapeArgs.x;
                const y = point.shapeArgs.y;

                let radiusTopLeft = H.relativeLength(options.borderRadiusTopLeft || 0, w);
                let radiusTopRight = H.relativeLength(options.borderRadiusTopRight || 0, w);
                let radiusBottomRight = H.relativeLength(options.borderRadiusBottomRight || 0, w);
                let radiusBottomLeft = H.relativeLength(options.borderRadiusBottomLeft || 0, w);

                const maxR = Math.min(w, h) / 2

                radiusTopLeft = radiusTopLeft > maxR ? maxR : radiusTopLeft;
                radiusTopRight = radiusTopRight > maxR ? maxR : radiusTopRight;
                radiusBottomRight = radiusBottomRight > maxR ? maxR : radiusBottomRight;
                radiusBottomLeft = radiusBottomLeft > maxR ? maxR : radiusBottomLeft;

                point.dlBox = point.shapeArgs;

                point.shapeType = 'path';
                point.shapeArgs = {
                  d: [
                    'M', x + radiusTopLeft, y + topMargin,
                    'L', x + w - radiusTopRight, y + topMargin,
                    'C', x + w - radiusTopRight / 1, y, x + w, y + radiusTopRight / 1, x + w, y + radiusTopRight,
                    'L', x + w, y + h - radiusBottomRight,
                    'C', x + w, y + h - radiusBottomRight / 1, x + w - radiusBottomRight / 1, y + h, x + w - radiusBottomRight, y + h + bottomMargin,
                    'L', x + radiusBottomLeft, y + h + bottomMargin,
                    'C', x + radiusBottomLeft / 1, y + h, x, y + h - radiusBottomLeft / 1, x, y + h - radiusBottomLeft,
                    'L', x, y + radiusTopLeft,
                    'C', x, y + radiusTopLeft / 1, x + radiusTopLeft / 1, y, x + radiusTopLeft, y,
                    'Z'
                  ]
                };
              }
            });
          });
        }(Highcharts));
      }));
        Highcharts.chart(id, {
            chart: {
                type: 'columnrange',
                inverted: true,
            },
            title: {
                text: '개인별 정보',
                align: 'left',
                style: {
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            },
            xAxis: {
                categories: catData,
                labels: {
                	style: {
                		fontSize: '12px',
                		color: '#000000'
                	}
                },
            },
            yAxis: {
                title: {text: '학교 평균 취업 영향도 : '+base},
                plotLines: [{
                    color: '#000000',
                    width: 2,
                    value: base,
                    zIndex: 5,
                    dashStyle: 'longdashdot',
                    label: {
                        align: 'right',
                        x: 45,
                        y: -5,
                        text: "학교 영향도 평균",
                        rotation: 360
                    }
                },
                {
                    color: '#FF0000',
                    width: 2,
                    value: last,
                    zIndex: 5,
                    label: {
                        align: 'right',
                        color: '#FF0000',
                        x: 30,
                        y: -5,
                        text: "개인 영향도<span style='color:#FF0000'> : "+last+"</span>",
                        rotation: 360
                    }
                }
                ],
                stackLabels: {
                    style: {
                        color: 'white'       // Make the labels white
                    },
                    enabled: true,           // Enable stack labels
                    verticalAlign: 'middle', // Position them vertically in the middle
                    align: 'center',            // Align them to the left edge of the bar
                    formatter: '{point.value}'
                }
            },
            tooltip: {
              headerFormat: '',
              pointFormatter: function() {
                var unit = '';
                return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.category + '</span></b>' + ' <b>'+this.value+'</b>' + unit;
              },
            },
            plotOptions: {
                series: {
                    pointWidth: 20,
                },
            },
            legend: {
                enabled: false
            },
            series: [{
                data: seriesData,
                dataLabels: [{
                    enabled: false,
                    align: 'right',
                    format: '', // one decimal
                }, {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.value}', // one decimal
                    style: {
                        fontSize: '10px',
                    },
                }],
            }],
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            }
        });
    });
  }
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function setRenderBarChart(id, categoryData, seriesData, Highcharts, height=550) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: {type: 'bar'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var unit = '';
          return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
        },
      },
      xAxis: {
        categories: categoryData,
        labels: {
            style: {
                fontSize: '12px',
                color: '#000000'
            }
        },
      },
      yAxis: [{
        title: {
            text: '변수영향력'
        },
      }],
      plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
              format: '<span style="color:#ff0051">{y}</span>'
            }
        },
        series: {
          pointWidth: 20
        }
      },
      series: [{
        data: seriesData,
        color: "#ff0051",
        showInLegend: false,
        name: "변수영향력"
      }],

      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function setRenderBarChartByColor(id, categoryData, seriesData, Highcharts, title, height=550) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: {type: 'bar'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var unit = '명';
          return '<span style="color:#ff0051"> \u25CF </span><b><span style="color:#ff0051">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
        },
      },
      xAxis: {
        categories: categoryData,
        title: {
            text: ''
        },
        labels: {
        	style: {
        		fontSize: '12px',
        		color: '#000000'
        	}
        },
      },
      yAxis: [{
          title: {
            text: title
          },
      }],
      plotOptions: {
        series: {
          colorByPoint: true,
          pointWidth: 20
        },
      },
      series: [{
        data: seriesData,
        showInLegend: false,
        name: "변수중요도",
        colors: ["#EA96A3","#E79680","#D4954D","#BC9B4A","#A79E46","#92A446","#73AB47","#48AF6C","#4AAD8C","#4BAC9D","#4BAAAB","#4FABBB","#54ACD1","#84AEE6","#AFAAEB","#C99EE9","#E38BE7","#E28ACA"],
      }],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

/**
* 카테고리 이름을 x tick 으로 하는 그래프
* 옵션에 따라 그래프의 모양을 조정
*  options = {
*      labels : {
*          plot : '그래프 제목',
*          x : 'x 축 제목',
*          y : 'y 축(값) 제목',
*          flag : '마우스 오버 플래그 제목',
*      },
*      type: 'column' # 그래프 종류 (하이차트 참고)
*  }
*/
function setRenderCategoricalChartWithOptions(id, seriesData, Highcharts, options, height=550) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    var tmpmax = Math.max(...seriesData.map(item => item[1]));
    Highcharts.chart(id, {
      chart: {
        type: options.type ?? 'column',
        height: height,
        zIndex: 99,
        marginBottom: 100
      },
      title: {
        style: {
          fontSize: '23px',
          fontWeight: '700',
        },
        text: options.labels.plot ?? ''
      },
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var unit = (options.labels.flag === "강좌수") ? '건' : '명';
          var value = Highcharts.numberFormat(this.y, 0);
          return '<span style="color:#ff0051"> \u25CF </span><b><span style="color:#ff0051">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+value+'</b>' + unit;
        },
      },
      xAxis: {
        categories: _.map(seriesData, function(item) { return item[0]; }),
        title: {
            text: options.labels.x ?? ''
        },
        labels: {
        	style: {
        		fontSize: '10px',
        		color: '#000000'
        	}
        },
        height: height-200
      },
      yAxis: [{
          title: {
            text: options.labels.y ?? ''
          },
          height: height-200,
          labels: {
            format: (options.labels.flag === "강좌수") ? '{value:,.0f}건' : '{value:,.0f}명'
          },
          tickInterval: tmpmax <= 5 ? 1 : null,
      }],
      plotOptions: {
        series: {
          colorByPoint: true,
          pointWidth: 30
        },
      },
      series: [{
        data: seriesData,
        showInLegend: false,
        name: options.labels.flag ?? '',
        // colors: ["#EA96A3","#E79680","#D4954D","#BC9B4A","#A79E46","#92A446","#73AB47","#48AF6C","#4AAD8C","#4BAC9D","#4BAAAB","#4FABBB","#54ACD1","#84AEE6","#AFAAEB","#C99EE9","#E38BE7","#E28ACA"],
        // colors: ["#567bff"]
      }],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

function setRenderCategoricalChartWithOptionsJobLow(id, seriesData, Highcharts, options, height=550) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    var tmpmax = Math.max(...seriesData.map(item => item[1]));
    Highcharts.chart(id, {
      chart: {
        type: options.type ?? 'column',
        height: height,
        zIndex: 99,
        marginBottom: 100
      },
      title: {
        style: {
          fontSize: '23px',
          fontWeight: '700',
        },
        text: options.labels.plot ?? ''
      },
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var unit = (options.labels.flag === "강좌수") ? '건' : '명';
          var value = Highcharts.numberFormat(this.y, 0);
          return '<span style="color:#ff0051"> \u25CF </span><b><span style="color:#ff0051">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+value+'</b>' + unit;
        },
      },
      xAxis: {
        categories: _.map(seriesData, function(item) { return item[0]; }),
        title: {
            text: options.labels.x ?? ''
        },
        labels: {
        	style: {
        		fontSize: '10px',
        		color: '#000000'
        	},
        	formatter: function() {
              var label = this.value;
              if (label.length > 12) {
                label = label.substring(0, 12) + '...';
              }
              return label;
            }
        },
        height: height-200
      },
      yAxis: [{
          title: {
            text: options.labels.y ?? ''
          },
          height: height-200,
          labels: {
            format: (options.labels.flag === "강좌수") ? '{value:,.0f}건' : '{value:,.0f}명'
          },
          tickInterval: tmpmax <= 5 ? 1 : null,
      }],
      plotOptions: {
        series: {
          colorByPoint: true,
          pointWidth: 30
        },
      },
      series: [{
        data: seriesData,
        showInLegend: false,
        name: options.labels.flag ?? '',
        // colors: ["#EA96A3","#E79680","#D4954D","#BC9B4A","#A79E46","#92A446","#73AB47","#48AF6C","#4AAD8C","#4BAC9D","#4BAAAB","#4FABBB","#54ACD1","#84AEE6","#AFAAEB","#C99EE9","#E38BE7","#E28ACA"],
        // colors: ["#567bff"]
      }],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function setRenderBarChartByProgram(id, categoryData, data1, data2, unitData, titleX, titleY, Highcharts, height=550) {
  if(data1.length == 0 && data2.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: {type: 'column'},
      title: {text: ''},
      tooltip: {
        headerFormat: '',
        pointFormatter: function() {
          var unit = unitData;
          return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.category+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
        },
      },
      xAxis: {
        categories: categoryData,
        title: {
            text: titleX
        },
        labels: {
        	style: {
        		color: '#000000'
        	}
        },
      },
      yAxis: [{ // Primary yAxis
          title: {
            text: titleY
          },
      }],
      plotOptions: {
      },
      legend: {
          align: 'right',
          verticalAlign: 'top',
          x: 0,
          y: 15,
          floating: true,
          backgroundColor: "#fff",
          borderRadius: 2,
          borderWidth: 1,
      },
      series: [
        {name: "취업자", data: data1, showInLegend: true, color:"#1f77b4"},
        {name: "미취업자", data: data2, showInLegend: true, color:"#ff7f0e"},
      ],
      exporting: { enabled: false },
      credits: { enabled: false }
    });
  }
}

/**
* @description scatter
* @param {*} id
* @param {*} seriesData
*/

function setRenderScatterChart(id, categoryData, seriesData, Highcharts, maxValue, height=550) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
        chart: {
            type: 'scatter',
        },
        title: {
            text: '',
        },
        xAxis: {
            title: {
                text: '변수영향력'
            },
            labels: {
                format: '{value}'
            },
            startOnTick: false,
            endOnTick: false,
            showLastLabel: false,
            plotLines: [{
                color: '#999999',
                width: 1,
                value: 0,
                zIndex: 5
            }],
        },
        yAxis: {
            min : 0,
            max : maxValue,
            title: {
                text: ''
            },
            labels: {
                style: {
                    fontSize: '12px',
                    color: '#000000'
                }
            },
            categories: categoryData
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.0,
                    symbol: 'circle',
                },
            },
            series: {
                turboThreshold: 6000,
                boostThreshold: 6000,
            },
        },
        tooltip: {
            pointFormat: '[{point.x}]',
        },
        series: seriesData,
        exporting: { enabled: false },
        credits: { enabled: false },
        legend: { enabled: false }
    });
  }
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function setRenderStackedBarChart(id, categoryData, data1, data2, data3, data4, data5, Highcharts, height=550) {
  if(data1.length == 0 && data2.length == 0 && data3.length == 0 && data4.length == 0 && data5.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categoryData,
            labels: {
                style: {
                    fontSize: '12px',
                    color: '#000000'
                }
            },
        },
        yAxis: {
            min: 0,
            title: {
                text: 'SHAP Value'
            },
        },
        legend: {
            reversed: true,
            align: 'right',
            verticalAlign: 'bottom',
            x: -5,
            y: -45,
            floating: true,
            width: 150,
            backgroundColor: "#fff",
            borderRadius: 2,
            borderWidth: 1,
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        colors: ["#009c63","#c56a00","#fb008a","#008bfb","#a460e6"],
        series: [{
            name: '500만원이상',
            data: data1
        }, {
            name: '350만원~500만원',
            data: data2
        }, {
            name: '250만원~350만원',
            data: data3
        }, {
            name: '최저임금~250만원',
            data: data4
        }, {
            name: '최저임금이하',
            data: data5
        }],
        exporting: { enabled: false },
        credits: { enabled: false },
    });
  }
}

/**
* @description sankey
* @param {*} id
* @param {*} seriesData
*/
function setRenderSankeyChart(id, data, height=550) {
  if(data.length == 0) {
    noData(id, 400);
  } else {
    Highcharts.chart(id, {
        title: {
            text: ''
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
            }
        },
        tooltip: {
            headerFormat: null,
            pointFormat: '{point.fromNode.name} \u2192 {point.toNode.name}: {point.weight:.0f}명',
            nodeFormat: '{point.name}: {point.sum:.0f}명'
        },
        series: [{
            keys: ['from', 'to', 'weight'],

            data: data,
            type: 'sankey',
            name: 'job flow',
        }],
        exporting: { enabled: false },
        credits: { enabled: false },
    });
  }
}

/**
 * @description 컬럼 차트 심플버전 Render
 * @param {*} id
 * @param {*} data1, data2
 */
  function setRenderColumnSimpleChartByJob(id, data1, data2, Highcharts, type) {
    if(data1.length == 0) {
      noData(id, 400);
    }
    else {
      var seriesNames = ['유지', '이탈'];
      Highcharts.chart(id, {
        title: {text: ''},
        tooltip: {
          headerFormat: '',
          pointFormatter: function() {
            var unit = '%';
            return '<span style="color:'+this.color+'"> \u25CF </span><b><span style="color:'+this.color+'">'+  this.series.name + '</span></b><br /><b>'+this.name+'</b>  ' + ' <b>'+this.y+'</b>' + unit;
          },
        },
        xAxis:
        [{
          type: 'category',
          title: {
            text: '',
        },
        }],
        series: [
          {name: seriesNames[0], type: 'column',  data: data1 },
          {name: seriesNames[1], type: 'column', data: data2 },
        ],
        yAxis: [{ // Primary yAxis
          labels: {
        	format: '{value}',
          },
          title: {
              text: '유지/이탈률 (%)',
          },
        }],

        exporting: { enabled: false },
        credits: { enabled: false }
      });
    }
  }


/**
 * @description setRenderColumnStackChart
 * @param {*} id
 * @param {*} data1, data2
 */
function setRenderColumnStackChart(id, Highcharts, type) {
  Highcharts.chart(id, {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: ['2019', '2020', '2021']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: '분포률 (%)'
        },
        stackLabels: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
    },
    plotOptions: {
        column: {
            stacking: 'normal',
        }
    },
    showInLegend: true,
        series: [{
            name: '농업',
            data: [3, 5, 1]
        }, {
            name: '광업',
            data: [14, 8, 8]
        }, {
            name: '제조',
            data: [0, 2, 6]
        }, {
           name: '전기',
           data: [0, 5, 1]
       }, {
           name: '수도',
           data: [14, 8, 8]
       }, {
           name: '건설',
           data: [0, 2, 6]
       }, {
          name: '도매',
          data: [0, 5, 1]
      }, {
          name: '운수',
          data: [14, 8, 8]
      }, {
          name: '숙박',
          data: [0, 2, 6]
      }, {
         name: '정보',
         data: [3, 5, 1]
     }, {
         name: '금융',
         data: [14, 8, 8]
     }, {
         name: '부동산',
         data: [0, 2, 6]
     }, {
       name: '전문',
       data: [0, 5, 1]
    }, {
       name: '시설',
       data: [4, 8, 3]
    }, {
       name: '행정',
       data: [0, 0, 0]
    }, {
      name: '교육',
      data: [3, 0, 1]
    }, {
      name: '보건',
      data: [14, 8, 8]
    }, {
      name: '예술',
      data: [0, 2, 6]
    }, {
     name: '협회',
     data: [3, 5, 1]
    }, {
     name: '가구',
     data: [14, 8, 8]
    }, {
     name: '국제',
     data: [0, 2, 6]
    }, {
    name: '미상',
    data: [0, 2, 6]
    }],

    exporting: { enabled: false },
    credits: { enabled: false }
  });
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function setRenderStackedBarChart2(id, categoryData, data1, data2, data3, data4, data5, data6, data7, Highcharts, height=550) {
  if(data1.length == 0 && data2.length == 0 && data3.length == 0 && data4.length == 0 && data5.length == 0 && data6.length == 0 && data7.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: categoryData
        },
        yAxis: {
            min: 0,
            title: {
                text: '변수영향력'
            },
            labels: {
            	style: {
            		fontSize: '12px',
            		color: '#000000'
            	}
            },
        },
        legend: {
            reversed: true,
            align: 'right',
            verticalAlign: 'bottom',
            x: -5,
            y: -45,
            floating: true,
            width: 150,
            backgroundColor: "#fff",
            borderRadius: 2,
            borderWidth: 1,
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        colors: ["#008bfb","#d640c5","#dc5700","#7471f5","#009ea6","#439300","#ff007b"],
        series: [{
            name: '기타',
            data: data1
        }, {
            name: '비영리법인',
            data: data2
        }, {
            name: '공공기관 및 공기업',
            data: data3
        }, {
            name: '국가 및 지방자치단체',
            data: data4
        }, {
            name: '중소기업',
            data: data5
        },{
            name: '중견기업',
            data: data6
        },{
            name: '대기업',
            data: data7
        }],
        exporting: { enabled: false },
        credits: { enabled: false },
    });
  }
}

function setRenderPieChartUni(id, seriesData, Highcharts, height=400) {
  if(seriesData.length == 0) {
    noData(id, height);
  }
  else {
    Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '80%',
                cursor: 'pointer',
                data: seriesData,
            }
        },
        series: [
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    verticalAlign: 'top',
                    enabled: true,
                    connectorWidth: 1,
                    distance: -30,
                    connectorColor: '#000000',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                    format: '{point.percentage:.1f}%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            },
            {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 10,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                        fontFamily: 'Segoe UI',
                        fontWeight: 'bold',
                        textOutline: false,
                        fontSize: '13px',
                    },
                }
            }
        ],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

function setRenderPieChartMultiUni(id, seriesData, Highcharts, height=300) {
  if(seriesData.length == 0) {
    noData(id, height);
  } else {
    indChart = Highcharts.chart(id, {
      chart: { type: 'pie' },
        title: {text: '',},
        tooltip: {
          headerFormat: '',
          pointFormat: '<span style="color:{point.color}">\u25CF</span><b>{point.name}</b>  ' + '<b>{point.y} 건</b>  ({point.percentage:.1f}%)'
        },
        plotOptions: {
            pie: {
                size: '70%',
                cursor: 'pointer',
                data: seriesData
            },
        },
        series: [{
          innerSize: '30%',
            type: 'pie',
            dataLabels: {
                verticalAlign: 'top',
                enabled: true,
                connectorWidth: 1,
                distance: -30,
                connectorColor: '#000000',
                style: {
                  fontFamily: 'Segoe UI',
                  fontWeight: 'bold',
                  textOutline: false,
                  fontSize: '13px',
                },
                format: '{point.percentage:.1f}%',
                filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 5
              }
            }
            }, {
                innerSize: '30%',
                type: 'pie',
                dataLabels: {
                    enabled: true,
                    connectorWidth: 1,
                    distance: 30,
                    format: '{point.name} ({point.percentage:.1f}%)',
                    style: {
                      fontFamily: 'Segoe UI',
                      fontWeight: 'bold',
                      textOutline: false,
                      fontSize: '13px',
                    },
                }
            }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
  }
}

/**
 * @description 컬럼 차트 심플버전 Render
 * @param {*} id
 * @param {*} data1, data2, data3, data4, data5
 */
function setRenderColumnSimpleChartByUnis(id, categories, ytitle, format, data, Highcharts, type) {
    if (data.length == 0) {
        noData(id, 400);
    } else {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: { text: '' },
            tooltip: {
                headerFormat: '',
                pointFormatter: function () {
                    var pointName = this.category; // 수정된 부분
                    var unit = (pointName == '취업률' || pointName == '진학률') ? '%' : '명';
                    var formattedValue = Highcharts.numberFormat(this.y, 0); // Format this.y as a number
                    return '<span style="color:' + this.color + '"> \u25CF </span><b><span style="color:' + this.color + '">' + this.series.name + '</span></b><br /><b>' + pointName + '</b>  ' + ' <b>' + formattedValue + '</b>' + unit;
                },
            },
            xAxis: {
                categories: categories,
                labels: {
                    style: {
                        fontSize: '12px'
                    }
                },
            },
            series: data,
            yAxis: [{ // Primary yAxis
                labels: {
                    format: format,
                    style: {
                        fontSize: '12px'
                    }
                },
                title: {
                    text: ytitle,
                },
            }],
            exporting: { enabled: false },
            credits: { enabled: false }
        });
    }
}

/**
* @description Stacked bar Render
* @param {*} id
* @param {*} seriesData
*/
function charSortByArray(arrayObj) {
    arrayObj.sort(function(a, b){
        var tempA = "";
        var tempB = "";

        if ('text' in a) {
            tempA = (a.text).trim().replace("（", "(");
            tempB = (b.text).trim().replace("（", "(");
        } else if ('name' in a) {
            tempA = (a.name).trim().replace("（", "(");
            tempB = (b.name).trim().replace("（", "(");
        }

        if (tempA.startsWith("(") && !(tempB).startsWith("(")) {
            return 1;
        } else if (!tempA.startsWith("(") && (tempB).startsWith("(")) {
            return -1;
        } else {
            return (tempA).localeCompare(tempB);
        }
    });

    return arrayObj;
}

/**
 * @description Raw Object 를 Series data로 형식 변환.
 * @param {*} data
 */
 function getSeriesDataByValue(data, isSimple = false, sort=true) {
    var _keys = _.keys(data);
    var _all = []

    _all = _.map(_keys, function (item, index) {
      return {
        text: data[item],
        value: item,
      };
    });

    return _all;
 }

String.prototype.lpad = function(padLength, padString){
    var s = this;
    while(s.length < padLength)
        s = padString + s;
    return s;
}