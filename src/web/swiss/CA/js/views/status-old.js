var app = null;

var _globalUniversityGradeArray = [{
        key: 'associate',
        text: '전문학사'
    },
    {
        key: 'bachelor',
        text: '학사'
    },
    {
        key: 'master',
        text: '석사'
    },
    {
        key: 'doctor',
        text: '박사'
    },
];

var _globalCompanySizeSummaryObject = {
    'A': '농업',
    'B': '광업',
    'C': '제조',
    'D': '전기',
    'E': '수도',
    'F': '건설',
    'G': '도매',
    'H': '운수',
    'I': '숙박',
    'J': '정보',
    'K': '금융',
    'L': '부동산',
    'M': '전문',
    'N': '시설',
    'O': '행정',
    'P': '교육',
    'Q': '보건',
    'R': '예술',
    'S': '협회',
    'T': '가구',
    'U': '국제',
    'Z': '미상'
};

var _globalCompanyAreaArray = [{
        'text': '서울',
        'value': '서울'
    },
    {
        'text': '강원',
        'value': '강원'
    },
    {
        'text': '부산',
        'value': '부산'
    },
    {
        'text': '충북',
        'value': '충북'
    },
    {
        'text': '대구',
        'value': '대구'
    },
    {
        'text': '충남',
        'value': '충남'
    },
    {
        'text': '인천',
        'value': '인천'
    },
    {
        'text': '전북',
        'value': '전북'
    },
    {
        'text': '광주',
        'value': '광주'
    },
    {
        'text': '전남',
        'value': '전남'
    },
    {
        'text': '대전',
        'value': '대전'
    },
    {
        'text': '경북',
        'value': '경북'
    },
    {
        'text': '울산',
        'value': '울산'
    },
    {
        'text': '경남',
        'value': '경남'
    },
    {
        'text': '세종',
        'value': '세종'
    },
    {
        'text': '제주',
        'value': '제주'
    },
    {
        'text': '경기',
        'value': '경기'
    }
];

/**
 * @description 토익 차트 관련 series data 생성.
 * @param {*} toeic
 * @returns
 */
function getToeicSeriesData(toeic, type) {
    var group = type == 'toeic' ? [{
            name: '0~99',
            start: 0,
            end: 99
        },
        {
            name: '100~199',
            start: 100,
            end: 199,
        },
        {
            name: '200~299',
            start: 200,
            end: 299,
        },
        {
            name: '300~399',
            start: 300,
            end: 399,
        },
        {
            name: '400~499',
            start: 400,
            end: 499,
        },
        {
            name: '500~599',
            start: 500,
            end: 599,
        },
        {
            name: '600~699',
            start: 600,
            end: 699,
        },
        {
            name: '700~799',
            start: 700,
            end: 799,
        },
        {
            name: '800~899',
            start: 800,
            end: 899,
        },
        {
            name: '900~990',
            start: 900,
            end: 990,
        },
    ] : [{
            name: '0~10',
            start: 0,
            end: 10
        },
        {
            name: '11~20',
            start: 11,
            end: 20
        },
        {
            name: '21~30',
            start: 21,
            end: 30
        },
        {
            name: '31~40',
            start: 31,
            end: 40
        },
        {
            name: '41~50',
            start: 41,
            end: 50
        },
        {
            name: '51~60',
            start: 51,
            end: 60
        },
        {
            name: '61~70',
            start: 61,
            end: 70
        },
        {
            name: '71~80',
            start: 71,
            end: 80
        },
        {
            name: '81~90',
            start: 81,
            end: 90
        },
        {
            name: '91~100',
            start: 91,
            end: 100
        },
    ];

    var totalCount = toeic.length;

    if (totalCount > 0) {
        var result = _.map(group, function(item) {
            var count = _.filter(toeic, function(x) {
                if (x >= item.start && x <= item.end) {
                    return x;
                }
            }).length;
            item.count = count;
            item.y = round((count / totalCount) * 100);
            return item;
        });
        return result
    } else {
        return [];
    }
}


/**
 * @description 학점 차트 관련 series data 생성.
 * @param {*} toeic
 * @returns
 */
function getGradeSeriesData(data) {
    var group = [{
            name: '3.0 미만',
            start: 0,
            end: 2.9
        },
        {
            name: '3.0 ~ 3.5 미만',
            start: 3.0,
            end: 3.4
        },
        {
            name: '3.5 ~ 4.0 미만',
            start: 3.5,
            end: 3.9
        },
        {
            name: '4.0 ~ 4.5 이상',
            start: 4.0,
            end: 5
        },
    ];

    var totalCount = data.length;


    var result = _.map(group, function(item) {
        var count = _.filter(data, function(x) {
            if (x >= item.start && x <= item.end) {
                return x;
            }
        }).length;
        item.count = count;
        item.y = round((count / totalCount) * 100);
        return item;
    });
    return result
}


/**
 * @description 라인 차트 Render
 * @param {*} id
 * @param {*} seriesData
 */
function setRenderLineChart(id, seriesData, min, max, startIndex, endIndex) {
    Highcharts.chart(id, {
        title: {
            text: ''
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}"> \u25CF </span><b>{point.name}</b>  ' + '<br /><b>{point.y:.1f}%</b>',
        },
        yAxis: {
            title: {
                text: ''
            },
            min: 0,
            max: 100
        },
        xAxis: {
            type: 'category'
        },
        series: [{
            showInLegend: false,
            name: '',
            data: seriesData,
            marker: {
                symbol: 'cross',
                lineColor: 'black',
                lineWidth: 3,
                fillColor: '#FFFFFF',
            }
        }],
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    y: -20,
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
        annotations: [{
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: startIndex,
                    y: seriesData[startIndex].y + 20,
                },
                text: '최소 ' + min,
            }, {
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: endIndex,
                    y: seriesData[endIndex].y + 20
                },
                text: '최대 ' + max,
            }]
        }],
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        }
    });
}



/**
 * @description 소재지 관련 JSON Array Mapping
 * @param {*} area
 * @param {*} degree
 */
function getUniversityDegreeRemapping(area, degree) {
    //소재지별 최종학력 근황.
    var all = _.map(getSeriesDataAndSort(area), function(item) {
        return {
            text: item.text,
            point: item.point,
            associate: 0,
            bachelor: 0,
            master: 0,
            doctor: 0
        };
    });


    _.map(_globalUniversityGradeArray, function(grade) {
        var nowData = degree[grade.text];
        _.map(all, function(area, index) {
            if (nowData[area.text]) {
                all[index][grade.key] = round((nowData[area.text] / all[index]['point']) * 100);
            }
        });
    });
    return all;
}



/**
 * @description 출신학교 / 전공 관련 JSON Array Mapping
 * @param {*} area
 * @param {*} degree
 */
function getOriginUniversityRemapping(all, degree) {
    var universityKey = _.keys(all);


    var result = {
        all: [],
        associate: [],
        bachelor: [],
        master: [],
        doctor: []
    };
    var allPoint = _.sum(_.map(universityKey, function(item, index) {
        return all[item];
    }));

    var _all = _.map(universityKey, function(item, index) {
        return {
            text: item,
            value: round((all[item] / allPoint) * 100) + '%(' + all[item] + '명)',
            point: all[item],
        };
    });

    result.all = _.sortBy(_all, 'point').reverse();


    _.map(_globalUniversityGradeArray, function(grade, index) {
        var nowObject = degree[grade.text];
        var nowKey = _.keys(nowObject);
        if (nowObject) {
            var nowPoint = _.sum(_.map(nowKey, function(_key, index) {
                return nowObject[_key];
            }));
            var _now = _.map(nowKey, function(item, index) {
                return {
                    text: item,
                    value: round((nowObject[item] / nowPoint) * 100) + '%(' + nowObject[item] + '명)',
                    point: nowObject[item],
                };
            });

            result[grade.key] = _.sortBy(_now, 'point').reverse();
        }
    });

    return result;
}


function json_to_sheet(remappingData) {
    var _workSheet = {};
    var _range = {
        s: {
            c: 0,
            r: 0
        },
        e: {
            c: 21,
            r: remappingData.length
        }
    };
    var mergesArray = [];
    remappingData.map((item, index) => {
        var option = item[0];
        var existsCount = item[1];
        var data = item.slice(2, 21);

        var styleObject = {};

        if (option === 'bigtitle') {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                font: {
                    sz: 13,
                    bold: true,
                    //color: { rgb: '30839f' },
                },
                fill: {
                    fgColor: {
                        rgb: 'F2F2F2'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        } else if (option === 'bigtitle-three') {
            mergesArray.push({s:{r:index,c:0},e:{r:index,c:2}});
            styleObject = {
             border: {
                 bottom: {
                     style: 'thin',
                     color: 'gray'
                 },
                 top: {
                     style: 'thin',
                     color: 'gray'
                 },
                 left: {
                     style: 'thin',
                     color: 'gray'
                 },
                 right: {
                     style: 'thin',
                     color: 'gray'
                 },
             },
             font: {
                 sz: 13,
                 bold: true,
                 //color: { rgb: '30839f' },
             },
             fill: {
                 fgColor: {
                     rgb: 'F2F2F2'
                 },
             },
             alignment: {
                 wrapText: true,
                 horizontal: 'center',
                 vertical: 'center'
             },
            };
        } else if (option === 'bigtitle-four') {
           mergesArray.push({s:{r:index,c:0},e:{r:index,c:3}});
           styleObject = {
               font: {
                   sz: 20,
                   bold: true,
               },
               fill: {
                   fgColor: {
                       rgb: 'F2F2F2'
                   },
               },
               alignment: {
                   horizontal: 'center',
                   vertical: 'center'
               },
               border: {
                  bottom: {
                      style: 'thin',
                      color: 'gray'
                  },
                  top: {
                      style: 'thin',
                      color: 'gray'
                  },
                  left: {
                      style: 'thin',
                      color: 'gray'
                  },
                  right: {
                      style: 'thin',
                      color: 'gray'
                  },
               }
           };
       }
       else if (option === 'search1') {
            //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
            styleObject = {
                border: {
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
            };
       } else if (option === 'search2') {
           //mergesArray.push({s:{r:index,c:0},e:{r:index,c:9}});
           styleObject = {
               border: {
                   bottom: {
                       style: 'thin',
                       color: 'gray'
                   },
                   left: {
                       style: 'thin',
                       color: 'gray'
                   },
                   right: {
                       style: 'thin',
                       color: 'gray'
                   },
               },
           };
       } else if (option === 'search3') {
          mergesArray.push({s:{r:index,c:0},e:{r:index,c:2}});
          styleObject = {
              border: {
                  bottom: {
                      style: 'thin',
                      color: 'gray'
                  },
                  left: {
                      style: 'thin',
                      color: 'gray'
                  },
                  right: {
                      style: 'thin',
                      color: 'gray'
                  },
              },
          };
      } else if (option === 'search-one-three') {
         mergesArray.push({s:{r:index,c:1},e:{r:index,c:3}});
         styleObject = {
             font: {
                sz: 13,
                bold: true,
             },
             border: {
                bottom: {
                    style: 'thin',
                    color: 'gray'
                },
                top: {
                    style: 'thin',
                    color: 'gray'
                },
                left: {
                    style: 'thin',
                    color: 'gray'
                },
                right: {
                    style: 'thin',
                    color: 'gray'
                },
             },
             alignment: {
                 wrapText: true,
                 horizontal: 'center',
                 vertical: 'center'
             }
         };
       }
       if (option === 'header' || option === 'header-two-three' || option === 'header-two' || option === 'header-three-three' ||
            option === 'header-three-five' || option === 'header-three' || option === 'header-two-multi' || option === 'header-five-three' || option === 'header-six-three') {
            if (option === 'header-two-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 2
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 3
                    },
                    e: {
                        r: index,
                        c: 4
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 5
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
            } else if (option === 'header-three-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7
                    },
                    e: {
                        r: index,
                        c: 9
                    }
                });
            } else if (option === 'header-three-five') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 4
                    },
                    e: {
                        r: index,
                        c: 6
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 7
                    },
                    e: {
                        r: index,
                        c: 9
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 10
                    },
                    e: {
                        r: index,
                        c: 12
                    }
                });
                mergesArray.push({
                    s: {
                        r: index,
                        c: 13
                    },
                    e: {
                        r: index,
                        c: 15
                    }
                });
            } else if (option === 'header-two') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 2
                    }
                });
            } else if (option === 'header-three') {
                mergesArray.push({
                    s: {
                        r: index,
                        c: 1
                    },
                    e: {
                        r: index,
                        c: 3
                    }
                });
            } else if (option === 'header-two-multi') {
                var colCnt = data.length - 1 / 2;
                for (var i = 0; i < colCnt; i++) {
                    mergesArray.push({
                        s: {
                            r: index,
                            c: (i * 2) + 1
                        },
                        e: {
                            r: index,
                            c: (i + 1) * 2
                        }
                    });
                }
            } else if (option === 'header-five-three') {
              mergesArray.push({
                  s: {
                      r: index,
                      c: 1
                  },
                  e: {
                      r: index,
                      c: 5
                  }
              });
              mergesArray.push({
                  s: {
                      r: index,
                      c: 6
                  },
                  e: {
                      r: index,
                      c: 8
                  }
              });
              mergesArray.push({
                  s: {
                      r: index,
                      c: 9
                  },
                  e: {
                      r: index,
                      c: 11
                  }
              });
              mergesArray.push({
                s: {
                    r: index,
                    c: 12
                },
                e: {
                    r: index,
                    c: 14
                }
              });
              mergesArray.push({
                s: {
                    r: index,
                    c: 15
                },
                e: {
                    r: index,
                    c: 17
                }
              });
          } else if (option === 'header-six-three') {
             mergesArray.push({
                 s: {
                     r: index,
                     c: 1
                 },
                 e: {
                     r: index,
                     c: 6
                 }
             });
             mergesArray.push({
                 s: {
                     r: index,
                     c: 7
                 },
                 e: {
                     r: index,
                     c: 9
                 }
             });
             mergesArray.push({
                 s: {
                     r: index,
                     c: 10
                 },
                 e: {
                     r: index,
                     c: 12
                 }
             });
             mergesArray.push({
               s: {
                   r: index,
                   c: 13
               },
               e: {
                   r: index,
                   c: 15
               }
             });
             mergesArray.push({
               s: {
                   r: index,
                   c: 16
               },
               e: {
                   r: index,
                   c: 18
               }
             });
         }
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                fill: {
                    fgColor: {
                        rgb: 'FFFFDE7'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        }
        if (option === 'data' || option === 'data-first' || option === 'data-three') {
            if (option === 'data-three') {
             mergesArray.push({
                 s: {
                     r: index,
                     c: 0
                 },
                 e: {
                     r: index,
                     c: 2
                 }
             });
            }
            styleObject = {
                border: {
                    bottom: {
                        style: 'thin',
                        color: 'gray'
                    },
                    top: {
                        style: 'thin',
                        color: 'gray'
                    },
                    left: {
                        style: 'thin',
                        color: 'gray'
                    },
                    right: {
                        style: 'thin',
                        color: 'gray'
                    },
                },
                alignment: {
                    wrapText: true,
                    horizontal: 'center',
                    vertical: 'center'
                },
            };
        }

        data.map((subitem, subindex) => {
            var type = typeof subitem == 'number' ? 'n' : typeof subitem == 'boolean' ? 'b' : 'z';
            if (existsCount > subindex)
                if (option === 'data-first') {
                    if (subindex === 0) {
                        styleObject.fill = {
                            fgColor: {
                                rgb: 'FFFFDE7'
                            }
                        };
                    } else {
                        styleObject.fill = {
                            fgColor: {
                                rgb: 'FFFFFF'
                            }
                        };
                    }

                }
            _workSheet[XLSX.utils.encode_cell({
                r: index,
                c: subindex
            })] = {
                t: type,
                v: subitem,
                s: styleObject
            };
        });




    });
    _workSheet['!ref'] = XLSX.utils.encode_range(_range);
    return {
        data: _workSheet,
        mergesArray
    };

}


function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}


/**
 * @description Select List 기본 선택 추가.
 * @param {*} _type
 * @returns
 */
function getDefaultSelect(_type) {
    var result = {
        text: '선택',
        value: ''
    };
    switch (_type) {
        case "YEAR":
            result['text'] = '대상 년도 선택';
            break;

        case "COMTYPE":
            result['text'] = '기업 규모 선택';
            break;

        case "COMIND":
            result['text'] = '기업 분류 선택'
            break;
        case "COMNM":
            result['text'] = '기업 분류 선택'
            break;
    }
    return result;
}

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "json/ui.json",
        dataType: "text",
        success: function(data) {
            var responseData = JSON.parse(data);
            var companySizeSummary = arrayToObject(responseData, 'COMIND');

            companySizeSummary.map((item, index) => {
                item.text = _globalCompanySizeSummaryObject[item.value];
                return item
            })

            app = new Vue({
                el: "#app",
                components: {
                    vuejsDatepicker
                },
                data: {
                    null_value: null,
                    isResponse: false,
                    isUIResponse: false,
                    isFetching: false,
                    isSelectedSearchCorp: false,
                    isSelectedSearchComp: false,
                    isSelectedCorp: true,
                    isSelectedComp: false,
                    isSelectedManual: false,
                    isManualStep1: true,
                    isManualStep2: false,
                    isManualStep3: false,
                    isManualStep4: false,
                    isManualStep5: false,
                    isOpenCorpType: false,
                    isOpenCorpSize: false,
                    isSelectAllCorpType: false,
                    isSelectAllCorpSize: false,
                    isSelectAllCorpPerSize: false,
                    isSelectAllCorpArea: false,
                    isUsageExporter: false,
                    selectedCompanyText: "",
                    selectedCompanyValue: "",
                    selectedChartIndex: 0,
                    selectedChartColor: "",
                    isLicense: true,
                    isPublicLicense: true,
                    isPrivateLicense: true,
                    years: _.sortBy(arrayToObject(responseData, 'YEAR'), 'text').reverse(),
                    selectedYear: _.sortBy(arrayToObject(responseData, 'YEAR'), 'text').reverse()[0].text,
                    companySizes: companySizeSummary, //arrayToObject(responseData, 'COMIND'),
                    selectedCompanySize: null,
                    selectedCompanySizeText: null,
                    companyTypes: arrayToObject(responseData, 'COMTYPE'),
                    selectedCompanyArea: null,
                    selectedCompanyAreaText: null,
                    selectedCompanyPersonnelSize: null,
                    selectedCompanyPersonnelSizeText: null,

                    selectedCompanyType: null,
                    selectedCompanyTypeText: null,
                    hopeSalary: {
                        start: 0,
                        end: 0
                    },
                    hopeSalary_comp: {
                        start: 0,
                        end: 0
                    },
                    // companyList: arrayToObject(responseData, 'COMNM'),
                    companySearch: '',
                    companySearchResults: [],
                    companyListSearchResults: [],
                    isCompanyResultOpen: false,
                    selectedCompany: null,
                    searchResult: null,
                    avarageAnalysis: {
                        gradescore_avg: 0,
                        txt_gradescore_avg: 0,
                        gradescore_percent: 0.0,
                        toeic_avg: 0,
                        toeic_percent: 0,
                        license_avg: 0,
                        license_percent: 0,
                        oversea_avg: 0,
                        oversea_percent: 0,
                        internship_avg: 0,
                        internship_percent: 0,
                    },
                    analysis_university_fund: {},
                    analysis_university_kind: {},
                    analysis_university_origin: {},
                    analysis_university_area: {},
                    major_rank: [],
                    major_field_rank: [],
                    wrap_tab_toggle: {
                        company: true,
                        job: true,
                        university: true,
                        major: true,
                        license: true,
                        intern: true,
                    },
                    university_area: [],
                    university_origin: [],

                    university_dept: [],

                    university_deptcol: [],
                    selectedOriginTabValue: '',
                    university_origin_tab_list: [],

                    selectedAreaTabValue: '',
                    university_area_tab_list: [],

                    selectedDeptTabValue: '',
                    university_dept_tab_list: [],

                    selectedDeptcolTabValue: '',
                    university_deptcol_tab_list: [],
                    toeic_avarage: 0,
                    toeic_rate: 0,
                    license_list: [],
                    privatelicense_list: [],
                    company_info: {
                        COMNM: "",
                        COMTYPE: "",
                        SECTOR: "",
                        INDNAME: "",
                        SALARY: 0,
                        LIVEGRADE: "",
                        LIVEDATE: "",
                        YEAR: [],
                        EMPLOYEECNT: [],
                        ENTRANTCNT: [],
                        RETIREECNT: [],
                        SALARYCOMPARE: [],
                        BASEYEAR: "",
                    },
                    isCompany_info: false,
                    isCompany_info_data: false,
                    isCompany_list: false,
                    slider_value: 50,
                    slider_text: "전체",
                    companyFindResult: null,
                    companyListFindResult: null,
                    resultCount: 0,
                    company_list: [],
                    companyPersonnelSizes: [{
                        'text': '5명 미만',
                        'value': '0,5'
                    }, {
                        'text': '5~29명',
                        'value': '5,29'
                    }, {
                        'text': '30~299명',
                        'value': '30,299'
                    }, {
                        'text': '300~999명',
                        'value': '300,999'
                    }, {
                        'text': '1000명 이상',
                        'value': '1000,99999'
                    }],
                    companyAreas: _globalCompanyAreaArray,
                    isCompanyList: false,

                    datepicker_lang: vdp_translation_ko.js,
                    usageExporterType: [{
                        'value': '1',
                        'text': '취업현황(조건검색)'
                    }, {
                        'value': '2',
                        'text': '취업현황(회사검색)'
                    }, {
                        'value': '3',
                        'text': '진로예측'
                    }],
                    usageExporterTypeValue: "1",
                    usageExporterDate: [{'value':'1m', 'text':'1개월'}, {'value':'1w', 'text':'1주'}, {'value':'1d', 'text':'1일'}, {'value':'1h', 'text':'1시간'}],
                    usageExporterDateValue: "1d",
                    usageExporterStartDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    usageExporterEndDate: new Date(),
                    selectedCompanyTypeList: [],
                    selectedCompanySizeList: [],
                    selectedCompanyPersonnelSizeList: [],
                    selectedCompanyAreaList: [],
                    isUserGroup: false,
                },
                methods: {

                    /**
                     * @description 엑셀 출력
                     */
                    excelExport: function() {
                        var _this = this;
                        var nowData = _this.searchResult;
                        var ws_name = '취업기업목록';

                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ['subtitle', 3, title, '', ''];
                        }

                        var companyTypeListText = '';
                        var companySizeListText = '';
                        var companyPersonnelSizeListText = '';
                        var companyAreaListText = '';
                        var companyText = '';
                        if (_this.isSelectedCorp) {
                            if (_this.selectedCompanyTypeList.length > 0) {
                                _this.selectedCompanyTypeList.forEach((item) => {
                                    var dateObj = _.find(_this.companyTypes, {value: item});
                                    companyTypeListText += dateObj.text+', ';
                                })
                                companyTypeListText = companyTypeListText.slice(0, -2);
                            }

                            if (_this.selectedCompanySizeList.length > 0) {
                                _this.selectedCompanySizeList.forEach((item) => {
                                    var dateObj = _.find(_this.companySizes, {value: item});
                                    console.log(dateObj.text)
                                    companySizeListText += dateObj.text+', ';
                                })
                                companySizeListText = companySizeListText.slice(0, -2);
                            }

                            if (_this.selectedCompanyPersonnelSizeList.length > 0) {
                                _this.selectedCompanyPersonnelSizeList.forEach((item) => {
                                    tmpItem = item.join(',');
                                    var dateObj = _.find(_this.companyPersonnelSizes, {value: tmpItem});
                                    companyPersonnelSizeListText += dateObj.text+', ';
                                })
                                companyPersonnelSizeListText = companyPersonnelSizeListText.slice(0, -2);
                            }

                            if (_this.selectedCompanyAreaList.length > 0) {
                                _this.selectedCompanyAreaList.forEach((item) => {
                                    var dateObj = _.find(_this.companyAreas, {value: item});
                                    companyAreaListText += dateObj.text+', ';
                                })
                                companyAreaListText = companyAreaListText.slice(0, -2);
                            }
                        } else if (_this.isSelectedComp) {
                        	companyText = _this.selectedCompany.text;
                        }

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from(''.repeat(num))
                            var rowEmpty = ['empty', num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from(''.repeat(num - 1))
                            var titleRow = ['bigtitle-three', num, '기업 취업 현황', '',''];
                            titleRow.concat(empty);
                            wsData.push(titleRow);

                            if (_this.isSelectedCorp) {
                                var searchRow1 = ['search3', num, `1. 통계 기준: ${_this.selectedYear}`, '',''];
                                searchRow1.concat(empty);
                                wsData.push(searchRow1);
                                var searchRow2 = ['search3', num, `2. 검색 조건`, '',''];
                                searchRow2.concat(empty);
                                wsData.push(searchRow2);
                                var searchRow3 = ['search3', num, `  - 기업유형: ${companyTypeListText}`, '',''];
                                searchRow3.concat(empty);
                                wsData.push(searchRow3);
                                var searchRow4 = ['search3', num, `  - 산업분류: ${companySizeListText}`, '',''];
                                searchRow4.concat(empty);
                                wsData.push(searchRow4);
                                var searchRow5 = ['search3', num, `  - 기업규모: ${companyPersonnelSizeListText}`, '',''];
                                searchRow5.concat(empty);
                                wsData.push(searchRow5);
                                var searchRow6 = ['search3', num, `  - 기업지역: ${companyAreaListText}`, '',''];
                                searchRow6.concat(empty);
                                wsData.push(searchRow6);
                            } else {
                                var searchRow1 = ['search3', num, `1. 통계 기준: ${_this.selectedYear}`, '',''];
                                searchRow1.concat(empty);
                                wsData.push(searchRow1);
                                var searchRow2 = ['search3', num, `2. 검색 조건: ${companyText}`, '',''];
                                searchRow2.concat(empty);
                                wsData.push(searchRow2);
                            }
                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        }

                        var addSheet = (wsData, ws_name) => {
                            let objectMaxLength = [];
                            let startRow = 0;
                            if (_this.isSelectedCorp) {
                                startRow = 9;
                            } else {
                                startRow = 5;
                            }

                            for (let i = startRow; i < wsData.length; i++) {
                              let value = Object.values(wsData[i]);
                              if (value.length > 2) {
                                  for (let j = 2; j < value.length; j++) {
                                    tmpLength = value[j].length ? value[j].length * 1.7 : 20;
                                    objectMaxLength[j] = objectMaxLength[j] >= tmpLength ? objectMaxLength[j] : tmpLength;
                                  }
                              }
                            }

                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var cols = []
                            for (var i = 2; i < objectMaxLength.length; i++) {
                                cols.push({wch: objectMaxLength[i]})
                            }

                            ws['!cols'] = cols;
                            ws['!merges'] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        }

                        var wsData = [];
                        var rowEmpty = [];

                        if (_this.selectedCompany && _this.isCompany_info) {
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];
                            var title1 = ['subtitle', 7, '▶기업 개요', '(※ 출처: ㈜이크레더블)', '', '', '', '', ''];
                            wsData.push(title1);
                            var dataHeaderRow1 = ['header', 7, '이름', '기업규모', '업종', '표준산업분류', '평균연봉', '기업상태', '기업상태 평가일'];
                            wsData.push(dataHeaderRow1);
                            var _data1 = nowData.COMPANYINFO;
                            var dataRow1 = ['data', 7, _data1.COMNM, _data1.COMTYPE, _data1.SECTOR, _data1.INDNAME, `${_data1.SALARY} 만원`, _data1.LIVEGRADE, _data1.LIVEDATE];
                            wsData.push(dataRow1);
                            wsData.push(rowEmpty);
                            var title1 = ['subtitle', 6, '▶최근 3년간의 기업변화', '', '', '', '', ''];
                            wsData.push(title1);
                            wsData.push(['header', 6, '', '종업원수', '입사자수', '퇴사자수', '입사율', '퇴사율']);
                            var yeardata = _data1.YEAR;
                            yeardata.forEach((year, index) => {
                                var empratio = parseFloat((_data1.ENTRANTCNT[index] / _data1.EMPLOYEECNT[index] * 100).toFixed(2));
                                var retratio = parseFloat((_data1.RETIREECNT[index] / _data1.EMPLOYEECNT[index] * 100).toFixed(2));
                                wsData.push(['data-first', 6, year, _data1.EMPLOYEECNT[index], _data1.ENTRANTCNT[index], _data1.RETIREECNT[index], empratio, retratio]);
                            })
                            wsData.push(rowEmpty);
                            var _data2 = [...nowData.depttop3].reverse();
                            var title1 = ['subtitle', 7, '▶전공 TOP3', '', '', '', '', '', ''];
                            wsData.push(title1);
                            wsData.push(['header-two-three', 7, '','1순위(인원수)','','2순위(인원수)','','3순위(인원수)','']);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.name[0] = ""
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.name[1] = ""
                                    item.data[1] = ""
                                }
                                if(item.name[2] == undefined){
                                    item.name[2] = ""
                                    item.data[2] = ""
                                }
                                wsData.push(['data-first', 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                            })
                            wsData.push(rowEmpty);

                            _data2 = [...nowData.areatop3].reverse();
                            title1 = ['subtitle', 7, '▶대학 소재지 TOP 3', '', '', '', '', '', ''];
                            wsData.push(title1);
                            wsData.push(['header-two-three', 7, '','1순위(인원수)','','2순위(인원수)','','3순위(인원수)','']);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.name[0] = ""
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.name[1] = ""
                                    item.data[1] = ""
                                }
                                if(item.name[2] == undefined){
                                    item.name[2] = ""
                                    item.data[2] = ""
                                }
                                wsData.push(['data-first', 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                            })
                            wsData.push(rowEmpty);

                            _data2 = [...nowData.fromarea].reverse();
                            title1 = ['subtitle', 3, '▶동일지역 출신 비율', '', ''];
                            wsData.push(title1);
                            var titleData = _data2[0];
                            wsData.push(['header', 3, '', titleData.name[0]+"(%)", titleData.name[1]+"(%)"]);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.data[1] = ""
                                }
                                wsData.push(['data-first', 3, item.year, item.data[0], item.data[1]]);
                            })
                            wsData.push(rowEmpty);

                            title1 = ['subtitle', 3, '▶동종업계 급여비교', '', ''];
                            wsData.push(title1);
                            wsData.push(['header', 3, '이름', '급여', '비교']);
                            var salkeys = Object.keys(_data1.SALARYCOMPARE);
                            wsData.push(['data', 3, salkeys[0], _data1.SALARYCOMPARE[salkeys[0]], parseFloat((_data1.SALARYCOMPARE[salkeys[0]] / _data1.SALARYCOMPARE[salkeys[1]]).toFixed(2)) + ' 배']);
                            wsData.push(['header', 3, salkeys[1], _data1.SALARYCOMPARE[salkeys[1]], '']);
                            wsData.push(['subtitle', 1, '※동종업계: 기업개요에서 기업규모, 업종, 표준산업분류가 동일한 기업']);
                            wsData.push(rowEmpty);

                            _data2 = nowData.salary;
                            title1 = ['subtitle', 2, '▶급여분포', ''];
                            wsData.push(title1);
                            wsData.push(['header', 2, '급여', '인원']);
                            var salary_dept = 100;
                            if (_data2.length > 2) {
                                salary_dept = _data2[1][0] - _data2[0][0];
                            }

                            var tmpIndex = _data2.length - 1;
                            _data2.forEach((item, index) => {
                                if (index != tmpIndex) {
                                    wsData.push(['data-first', 2, item[0]+'만원 ~ '+(item[0]+salary_dept)+'만원', item[1]]);
                                } else {
                                    wsData.push(['data-first', 2, item[0]+'만원 이상', item[1]]);
                                }
                            })

                            ws_name = '희망기업현황';
                        } else if (_this.selectedCompany && _this.isCompany_info_data) {
                            ret = getTitle(7);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            var title1 = ['subtitle', 3, '▶취업기업목록', '', ''];
                            wsData.push(title1);
                            var dataHeaderRow1 = ['header', 3, '기업명', '비율(%)', '인원수'];
                            wsData.push(dataHeaderRow1);
                            var companyList = nowData.company_list;
                            for (const [key, value] of Object.entries(companyList)) {
                                var infos = key.split('_');
                                wsData.push(['data-first', 6, infos[1], parseFloat((value / nowData.count * 100).toFixed(2)), value]);
                            }
                            wsData.push(rowEmpty);

                            var _data2 = [...nowData.depttop3].reverse();
                            title1 = ['subtitle', 7, '▶전공 TOP3', '', '', '', '', '', ''];
                            wsData.push(title1);
                            wsData.push(['header-two-three', 7, '','1순위(인원수)','','2순위(인원수)','','3순위(인원수)','']);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.name[0] = ""
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.name[1] = ""
                                    item.data[1] = ""
                                }
                                if(item.name[2] == undefined){
                                    item.name[2] = ""
                                    item.data[2] = ""
                                }
                                wsData.push(['data-first', 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                            })
                            wsData.push(rowEmpty);

                            _data2 = [...nowData.areatop3].reverse();
                            title1 = ['subtitle', 7, '▶대학 소재지 TOP 3', '', '', '', '', '', ''];
                            wsData.push(title1);
                            wsData.push(['header-two-three', 7, '','1순위(인원수)','','2순위(인원수)','','3순위(인원수)','']);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.name[0] = ""
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.name[1] = ""
                                    item.data[1] = ""
                                }
                                if(item.name[2] == undefined){
                                    item.name[2] = ""
                                    item.data[2] = ""
                                }
                                wsData.push(['data-first', 7, item.year, item.name[0], item.data[0], item.name[1], item.data[1], item.name[2], item.data[2]]);
                            })
                            wsData.push(rowEmpty);

                            _data2 = [...nowData.fromarea].reverse();
                            title1 = ['subtitle', 3, '▶동일지역 출신 비율', '', ''];
                            wsData.push(title1);
                            var titleData = _data2[0];
                            wsData.push(['header', 3, '', titleData.name[0]+"(%)", titleData.name[1]+"(%)"]);
                            _data2.forEach((item, index) => {
                                if(item.name[0] == undefined){
                                    item.data[0] = ""
                                }
                                if(item.name[1] == undefined){
                                    item.data[1] = ""
                                }
                                wsData.push(['data-first', 3, item.year, item.data[0], item.data[1]]);
                            })
                            wsData.push(rowEmpty);

                            _data2 = nowData.salary;
                            title1 = ['subtitle', 2, '▶급여분포', ''];
                            wsData.push(title1);
                            wsData.push(['header', 2, '급여', '인원']);
                            var salary_dept = 100;
                            if (_data2.length > 2) {
                                salary_dept = _data2[1][0] - _data2[0][0];
                            }

                            var tmpIndex = _data2.length - 1;
                            _data2.forEach((item, index) => {
                                if (index == tmpIndex) {
                                    wsData.push(['data-first', 2, item[0]+'만원 이상', item[1]]);
                                } else {
                                    wsData.push(['data-first', 2, item[0]+'만원 ~ '+(item[0]+salary_dept)+'만원', item[1]]);
                                }
                            })

                            ws_name = '희망기업현황';
                        } else {
                            ret = getTitle(3);
                            wsData = ret[0];
                            rowEmpty = ret[1];

                            var title1 = ['subtitle', 3, '▶취업기업목록', '', ''];
                            wsData.push(title1);
                            var dataHeaderRow1 = ['header', 3, '기업명', '비율(%)', '인원수'];
                            wsData.push(dataHeaderRow1);
                            var companyList = nowData.company_list;
                            for (const [key, value] of Object.entries(companyList)) {
                                var infos = key.split('_');
                                wsData.push(['data-first', 6, infos[1], parseFloat((value / nowData.count * 100).toFixed(2)), value]);
                            }
                            wsData.push(rowEmpty);
                        }

                        addSheet(wsData, ws_name);

                        //취업현황요약
                        ret = getTitle(7);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle('▶학력(1순위)'));
                        wsData.push(['header', 4, '출신학교', '출신학교 소재지', '학제', '설립']);
                        wsData.push(['data', 4, _this.analysis_university_origin.name +" ("+ _this.analysis_university_origin.value+")",
                                                _this.analysis_university_area.name+" ("+_this.analysis_university_area.value+")",
                                                _this.analysis_university_kind.name+" ("+_this.analysis_university_kind.value+"%)",
                                                _this.analysis_university_fund.name+" ("+_this.analysis_university_fund.value+"%)"]);
                        wsData.push(rowEmpty);
                        wsData.push(getSubtitle('▶전공(1~3순위)'));
                        wsData.push(['header', 3, '순위', '전공', '소계열']);
                        for (var i = 0; i < _this.major_rank.length; i++) {
                            tmpMajorRank = _this.major_rank[i].name ? _this.major_rank[i].name+' ('+ _this.major_rank[i].value +')' : '';
                            tmpMajorFieldRank = _this.major_field_rank[i].name ? _this.major_field_rank[i].name+' ('+ _this.major_field_rank[i].value +')' : '';
                            wsData.push(['data', 3, (i+1), tmpMajorRank, tmpMajorFieldRank]);
                        }
                        wsData.push(rowEmpty);
                        wsData.push(getSubtitle('▶자격(평균)'));
                        wsData.push(['header', 3, '학점(백분율)', '토익점수', '자격증 수']);
                        var tt = _this.avarageAnalysis;
                        wsData.push(['data', 3, tt.gradescore_avg, tt.toeic_avg+' ('+tt.toeic_percent+'% 보유)', tt.license_avg+' ('+tt.license_percent+'% 보유)']);
                        wsData.push(rowEmpty);
                        wsData.push(getSubtitle('▶특성(비율)'));
                        wsData.push(['header', 4, '편입여부(%)', '교직과정이수여부(%)', '현장실습여부(%)', '해외연수여부(%)']);
                        var tt = _this.avarageAnalysis;
                        wsData.push(['data', 4, tt.transfer_percent, tt.teach_percent, tt.internship_percent, tt.oversea_percent]);
                        wsData.push(rowEmpty);

                        addSheet(wsData, '취업현황요약');

                        ret = getTitle(16);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        //설립
                        wsData.push(getSubtitle('▶설립'));
                        var tt3 = nowData.university_fund;
                        const tt3keys = Object.keys(tt3);
                        var tt3cnt = tt3keys.length + 1;
                        var tt3sum = _.sum(_.values(tt3));
                        var tt3header = ['header', tt3cnt, '구분'];
                        tt3header = tt3header.concat(tt3keys);
                        wsData.push(tt3header);
                        var tt3num = ['data', tt3cnt, '인원']
                        var tt3ratio = ['data', tt3cnt, '비율(%)']
                        tt3keys.forEach(ele => {
                            tt3num.push(tt3[ele]);
                            tt3ratio.push(parseFloat((tt3[ele] / tt3sum * 100).toFixed(3)));
                        });
                        wsData.push(tt3num);
                        wsData.push(tt3ratio);
                        wsData.push(rowEmpty);

                        // 학제
                        wsData.push(getSubtitle('▶학제'));
                        var tt2 = nowData.university_kind;
                        const tt2keys = Object.keys(tt2);
                        var tt2cnt = tt2keys.length + 1;
                        var tt2sum = _.sum(_.values(tt2));
                        var tt2header = ['header', tt2cnt, '구분'];
                        tt2header = tt2header.concat(tt2keys);
                        wsData.push(tt2header);
                        var tt2num = ['data', tt2cnt, '인원']
                        var tt2ratio = ['data', tt2cnt, '비율(%)']
                        tt2keys.forEach(ele => {
                            tt2num.push(tt2[ele]);
                            tt2ratio.push(parseFloat((tt2[ele] / tt2sum * 100).toFixed(3)));
                        });
                        wsData.push(tt2num);
                        wsData.push(tt2ratio);
                        wsData.push(rowEmpty);

                        //최종 학력 소재지
                        wsData.push(getSubtitle('▶학력'));
                        var tt4 = nowData.degreeCnt;
                        const tt4keys = Object.keys(tt4).reverse();
                        var tt4cnt = tt4keys.length + 1;
                        var tt4header = ['header', tt4cnt, '구분'];
                        tt4header = tt4header.concat(tt4keys);
                        wsData.push(tt4header);
                        var tt4num = ['data', tt4cnt, '인원']
                        var tt4ratio = ['data', tt4cnt, '비율(%)']
                        tt4keys.forEach(ele => {
                            tt4num.push(tt4[ele][0]);
                            tt4ratio.push(tt4[ele][1]);
                        });
                        wsData.push(tt4num);
                        wsData.push(tt4ratio);
                        wsData.push(rowEmpty);

                        // 출신학교
                        wsData.push(getSubtitle('▶ 출신학교'));
                        var uni = nowData.university;
                        const unikeys = Object.keys(uni);
                        var unisum = _.sum(_.values(uni));
                        var university_degree = nowData.university_degree;
                        var unidcnt = 0;
                        var unimcnt = 0;
                        var unibcnt = 0;
                        var unipcnt = 0;

                        if ('박사' in university_degree) {
                            var university_d = nowData.university_degree['박사'];
                            var unidkeys = Object.keys(university_d);
                            unidcnt = unidkeys.length;
                            var udsum = _.sum(_.values(university_d));
                        }
                        if ('석사' in university_degree) {
                            var university_m = nowData.university_degree['석사'];
                            var unimkeys = Object.keys(university_m);
                            unimcnt = unimkeys.length;
                            var umsum = _.sum(_.values(university_m));
                        }
                        if ('학사' in university_degree) {
                            var university_b = nowData.university_degree['학사'];
                            var unibkeys = Object.keys(university_b);
                            unibcnt = unibkeys.length;
                            var ubsum = _.sum(_.values(university_b));
                        }
                        if ('전문학사' in university_degree) {
                            var university_p = nowData.university_degree['전문학사'];
                            var unipkeys = Object.keys(university_p);
                            unipcnt = unipkeys.length;
                            var upsum = _.sum(_.values(university_p));
                        }

                        var tt6cnt = 16;
                        var tt6header1 = ['header-three-five', tt6cnt, '구분', '전체', '', '', '전문학사', '', '', '학사', '', '', '석사', '', '', '박사', '', ''];
                        var tt6header2 = ['header', tt6cnt, '순위', '명칭', '인원', '비율(%)', '명칭', '인원', '비율(%)', '명칭', '인원', '비율(%)', '명칭', '인원', '비율(%)', '명칭', '인원', '비율(%)'];
                        wsData.push(tt6header1);
                        wsData.push(tt6header2);

                        var i;
                        for (i = 0; i < unikeys.length; i++) {
                            var tt6data = ['data', tt6cnt, i + 1];
                            tt6data = tt6data.concat([unikeys[i], uni[unikeys[i]], parseFloat((uni[unikeys[i]] / unisum * 100).toFixed(3))]);

                            if (unipcnt > 0 && unipcnt > i) {
                                tt6data = tt6data.concat([unipkeys[i], university_p[unipkeys[i]], parseFloat((university_p[unipkeys[i]] / upsum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            if (unibcnt > 0 && unibcnt > i) {
                                tt6data = tt6data.concat([unibkeys[i], university_b[unibkeys[i]], parseFloat((university_b[unibkeys[i]] / ubsum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            if (unimcnt > 0 && unimcnt > i) {
                                tt6data = tt6data.concat([unimkeys[i], university_m[unimkeys[i]], parseFloat((university_m[unimkeys[i]] / umsum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            if (unidcnt > 0 && unidcnt > i) {
                                tt6data = tt6data.concat([unidkeys[i], university_d[unidkeys[i]], parseFloat((university_d[unidkeys[i]] / udsum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }
                            wsData.push(tt6data);
                        }
                        wsData.push(rowEmpty);

                        //▶ 최종학력 소재지
                        wsData.push(getSubtitle('▶출신학교 소재지'));
                        var tt5 = nowData.uniAreaCnt;
                        const tt5keys = Object.keys(tt5).reverse();
                        var tt5cnt = tt5keys.length * 2 + 3;
                        var tt5header1 = ['header-two-multi', tt5cnt, '구분'];
                        var tt5header2 = ['header', tt5cnt, '시도'];
                        tt5header1.push('전체');
                        tt5header1.push('')
                        tt5header2.push('인원');
                        tt5header2.push('비율(%)')
                        tt5keys.forEach(ele => {
                            tt5header1.push(ele);
                            tt5header1.push('')
                            tt5header2.push('인원');
                            tt5header2.push('비율(%)')
                        });
                        wsData.push(tt5header1);
                        wsData.push(tt5header2);
                        var tt5subkeys = Object.keys(tt5[tt5keys[0]]);
                        var totalSum = 0;
                        tt5subkeys.forEach(ele => {
                            tt5keys.forEach(mele => {
                                totalSum += tt5[mele][ele][0];
                            });
                        });
                        tt5subkeys.forEach(ele => {
                            var tt5data = ['data', tt5cnt, ele];
                            var subSum = 0;
                            tt5keys.forEach(mele => {
                                subSum += tt5[mele][ele][0];
                            });
                            tt5data.push(subSum);
                            tt5data.push(parseFloat((subSum / totalSum * 100).toFixed(3)));
                            tt5keys.forEach(mele => {
                                tt5data.push(tt5[mele][ele][0]);
                                tt5data.push(tt5[mele][ele][1]);
                            });
                            wsData.push(tt5data);
                        });
                        wsData.push(rowEmpty);
                        addSheet(wsData, '최종학력');

                        //▶ 졸업학교 및 전공
                        ret = getTitle(3);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle('▶ 전공'));
                        var dpet = nowData.dept;
                        var deptcol = nowData.deptColCnt;
                        const dpetkeys = Object.keys(dpet);
                        const deptcolkeys = Object.keys(deptcol);
                        var deptsum = _.sum(_.values(dpet));
                        var deptcolsum = _.sum(_.values(deptcol));
                        var tt6header1 = ['header-six-three', 19, '구분', '전체', '', '', '', '', '', '전문학사', '', '', '학사', '', '', '석사', '', '', '박사', '', ''];
                        var tt6header2 = ['header', 19, '순위', '대계열', '중계열', '소계열', '전공명(학과명)', '인원', '비율(%)', '전공명(학과명)', '인원', '비율(%)', '전공명(학과명)', '인원', '비율(%)', '전공명(학과명)', '인원', '비율(%)', '전공명(학과명)', '인원', '비율(%)'];
                        wsData.push(tt6header1);
                        wsData.push(tt6header2);

                        var dept_a_sum = 0;
                        if ('associate' in _this.university_dept) {
                            _this.university_dept['associate'].forEach((item, index)=>{
                                dept_a_sum += item.point;
                            })
                        }
                        var dept_b_sum = 0;
                        if ('bachelor' in _this.university_dept) {
                            _this.university_dept['bachelor'].forEach((item, index)=>{
                                dept_b_sum += item.point;
                            })
                        }
                        var dept_m_sum = 0;
                        if ('master' in _this.university_dept) {
                            _this.university_dept['master'].forEach((item, index)=>{
                                dept_m_sum += item.point;
                            })
                        }
                        var dept_d_sum = 0;
                        if ('doctor' in _this.university_dept) {
                            _this.university_dept['doctor'].forEach((item, index)=>{
                                dept_d_sum += item.point;
                            })
                        }

                        var i;
                        for (i = 0; i < dpetkeys.length; i++) {
                            var tt6data = ['data', 19, i + 1];

                            // 전체
                            // 전공명
                            var arrDpet = dpetkeys[i].split('/');
                            var largeText = arrDpet[0] == undefined ? '' : arrDpet[0];
                            var middleText = arrDpet[1] == undefined ? '' : arrDpet[1];
                            var smallText = arrDpet[2] == undefined ? '' : arrDpet[2];
                            var itemtext = arrDpet[3] == undefined ? '' : arrDpet[3];

                            // 인원, 비율
                            tt6data = tt6data.concat([largeText, middleText, smallText, itemtext, dpet[dpetkeys[i]], parseFloat((dpet[dpetkeys[i]] / deptsum * 100).toFixed(3))]);

                            var tmpObj = _this.university_dept['associate'][i] == undefined ? '' : _this.university_dept['associate'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_a_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            var tmpObj = _this.university_dept['bachelor'][i] == undefined ? '' : _this.university_dept['bachelor'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_b_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }


                            var tmpObj = _this.university_dept['master'][i] == undefined ? '' : _this.university_dept['master'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_m_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            var tmpObj = _this.university_dept['doctor'][i] == undefined ? '' : _this.university_dept['doctor'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_d_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            wsData.push(tt6data);
                        }
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle('▶ 전공계열(소계열)'));
                        tt6header1 = ['header-five-three', 18, '구분', '전체', '', '', '', '', '전문학사', '', '', '학사', '', '', '석사', '', '', '박사', '', ''];
                        tt6header2 = ['header', 18, '순위', '대계열', '중계열', '소계열', '인원', '비율(%)', '소계열', '인원', '비율(%)', '소계열', '인원', '비율(%)', '소계열', '인원', '비율(%)', '소계열', '인원', '비율(%)'];
                        wsData.push(tt6header1);
                        wsData.push(tt6header2);

                        var deptcol_a_sum = 0;
                        if ('associate' in _this.university_deptcol) {
                            _this.university_deptcol['associate'].forEach((item, index)=>{
                                deptcol_a_sum += item.point;
                            })
                        }
                        var deptcol_b_sum = 0;
                        if ('bachelor' in _this.university_deptcol) {
                            _this.university_deptcol['bachelor'].forEach((item, index)=>{
                                deptcol_b_sum += item.point;
                            })
                        }
                        var deptcol_m_sum = 0;
                        if ('master' in _this.university_deptcol) {
                            _this.university_deptcol['master'].forEach((item, index)=>{
                                deptcol_m_sum += item.point;
                            })
                        }
                        var deptcol_d_sum = 0;
                        if ('doctor' in _this.university_deptcol) {
                            _this.university_deptcol['doctor'].forEach((item, index)=>{
                                deptcol_d_sum += item.point;
                            })
                        }

                        var deptcol_all_sum = 0;
                        if ('all' in _this.university_deptcol) {
                            _this.university_deptcol['all'].forEach((item, index)=>{
                                deptcol_all_sum += item.point;
                            })
                        }

                        _this.university_deptcol['all'].forEach((item, i)=>{
                            var tt6data = ['data', 18, i + 1];

                            var arrDpet = (item.text).split('/');
                            var largeText = arrDpet[0] == undefined ? '' : arrDpet[0];
                            var middleText = arrDpet[1] == undefined ? '' : arrDpet[1];
                            var smallText = arrDpet[2] == undefined ? '' : arrDpet[2];

                            tt6data = tt6data.concat([largeText, middleText, smallText, item.point, parseFloat(item.point / deptcol_all_sum * 100).toFixed(3)]);

                            var tmpObj = _this.university_deptcol['associate'][i] == undefined ? '' : _this.university_deptcol['associate'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_a_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            var tmpObj = _this.university_deptcol['bachelor'][i] == undefined ? '' : _this.university_deptcol['bachelor'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_b_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }


                            var tmpObj = _this.university_deptcol['master'][i] == undefined ? '' : _this.university_deptcol['master'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_m_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            var tmpObj = _this.university_deptcol['doctor'][i] == undefined ? '' : _this.university_deptcol['doctor'][i];
                            if (tmpObj != '') {
                                var idx = (tmpObj.text).lastIndexOf('/') == -1 ? 0 : (tmpObj.text).lastIndexOf('/') + 2;
                                itemtext = (tmpObj.text).substr(idx);
                                tt6data = tt6data.concat([itemtext, tmpObj.point, parseFloat((tmpObj.point / dept_d_sum * 100).toFixed(3))]);
                            } else {
                                tt6data = tt6data.concat(['', '', '']);
                            }

                            wsData.push(tt6data);
                        })

                        wsData.push(rowEmpty);
                        addSheet(wsData, '전공');


                        ret = getTitle(4);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        var getDevValue = (array) => {
                            var sum = function(x, y) {
                                return x + y;
                            };
                            var square = function(x) {
                                return x * x;
                            };
                            var mean = array.reduce(sum) / array.length; // 평균 3
                            var deviations = array.map(function(x) {
                                return x - mean;
                            });
                            var stddev = Math.sqrt(deviations.map(square).reduce(sum) / (array.length - 1)); // 표준편차 2
                            return stddev;
                        }

                        var getQuantile = (arr, type) => {
                            const asc = arr => arr.sort((a, b) => a - b);
                            const sum = arr => arr.reduce((a, b) => a + b, 0);
                            const mean = arr => sum(arr) / arr.length;
                            // sample standard deviation
                            const std = (arr) => {
                                const mu = mean(arr);
                                const diffArr = arr.map(a => (a - mu) * (a - mu));
                                return Math.sqrt(sum(diffArr) / (arr.length - 1));
                            };
                            const quantile = (arr, q) => {
                                const sorted = asc(arr);
                                const pos = (sorted.length - 1) * q;
                                const base = Math.floor(pos);
                                const rest = pos - base;
                                if (sorted[base + 1] !== undefined) {
                                    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
                                } else {
                                    return sorted[base];
                                }
                            };
                            const q25 = arr => quantile(arr, .25);
                            const q50 = arr => quantile(arr, .50);
                            const q75 = arr => quantile(arr, .75);
                            //const median = arr => q50(arr);
                            if (type == 25) {
                                return q25(arr);
                            } else if (type == 50) {
                                return q50(arr);
                            } else {
                                return q75(arr);
                            }
                        }

                        //▶ 학점 및 토익점수
                        wsData.push(getSubtitle('▶ 학점 및 토익점수'));
                        wsData.push(['header', 3, '구분', 'TOEIC', '학점']);
                        var toeic_percent = nowData.toeic_percent;
                        var gradescore_percent = nowData.gradescore_percent;
                        var toeic_v = 0;
                        var toeic_dev = 0;
                        var toeic_min = 0; //getDevValue(nowData.toeic);
                        var toeic_max = 0;
                        var toeic_25 = 0;
                        var toeic_50 = 0;
                        var toeic_75 = 0;
                        if (nowData.toeic.length > 0) {
                            toeic_v = round(_.sum(nowData.toeic) / nowData.toeic.length);
                            toeic_dev = getDevValue(nowData.toeic);
                            toeic_min = _.min(nowData.toeic); //getDevValue(nowData.toeic);
                            toeic_max = _.max(nowData.toeic);
                            toeic_25 = getQuantile(nowData.toeic, 25);
                            toeic_50 = getQuantile(nowData.toeic, 50);
                            toeic_75 = getQuantile(nowData.toeic, 75);
                        }
                        var gradescore_v = 0;
                        var gradescore_dev = 0;
                        var gradescore_min = 0; //getDevValue(nowData.toeic);
                        var gradescore_max = 0;
                        var gradescore_25 = 0;
                        var gradescore_50 = 0;
                        var gradescore_75 = 0;

                        if (nowData.gradescore.length > 0) {
                            gradescore_v = round(_.sum(nowData.gradescore) / nowData.gradescore.length);
                            gradescore_dev = getDevValue(nowData.gradescore);
                            gradescore_min = _.min(nowData.gradescore); //getDevValue(nowData.gradescore);
                            gradescore_max = _.max(nowData.gradescore);
                            gradescore_25 = getQuantile(nowData.gradescore, 25);
                            gradescore_50 = getQuantile(nowData.gradescore, 50);
                            gradescore_75 = getQuantile(nowData.gradescore, 75);
                        }

                        wsData.push(['data-first', 3, '보유(%)', round(toeic_percent), round(gradescore_percent)]);
                        wsData.push(['data-first', 3, '평균', round(toeic_v), round(gradescore_v)]);
                        wsData.push(['data-first', 3, '표준편차', round(toeic_dev), round(gradescore_dev)]);
                        wsData.push(['data-first', 3, '최소값', toeic_min, gradescore_min]);
                        wsData.push(['data-first', 3, '1분위값', toeic_25, gradescore_25]);
                        wsData.push(['data-first', 3, '중앙값', toeic_50, gradescore_50]);
                        wsData.push(['data-first', 3, '3분위값', toeic_75, gradescore_75]);
                        wsData.push(['data-first', 3, '최대값', toeic_max, gradescore_max]);
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle('▶자격증 종류(국가기술/국가전문)'));
                        //wsData.push(['header-three', 4, '구분', '자격증', '', '']);
                        wsData.push(['header', 4, '순위', '명칭', '인원', '비율(%)']);

                        //▶ 자격증
                        var license_nm = nowData.license_nm;
                        var licsum = _.sum(_.values(license_nm));
                        _.keys(license_nm).map((item, index) => {
                            return {
                                name: item,
                                value: license_nm[item]
                            };
                        }).map((item, index) => {
                            var idx = item.name.lastIndexOf('/') == -1 ? 0 : item.name.lastIndexOf('/') + 2;
                            var itemtext = item.name.substr(idx);
                            wsData.push(['data-first', 4,
                                (index + 1),
                                itemtext,
                                item.value,
                                parseFloat((item.value / licsum * 100).toFixed(3))
                            ]);
                        });
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle('▶자격증 종류(민간공인/민간등록)'));
                        //wsData.push(['header-three', 4, '구분', '자격증', '', '']);
                        wsData.push(['header', 4, '순위', '명칭', '인원', '비율(%)']);

                        //▶ 자격증
                        var private_license_nm = nowData.private_license_nm;
                        var private_licsum = _.sum(_.values(private_license_nm));
                        _.keys(private_license_nm).map((item, index) => {
                            return {
                                name: item,
                                value: private_license_nm[item]
                            };
                        }).map((item, index) => {
                            //var idx =item.name.lastIndexOf('/') == -1 ? 0 : item.name.lastIndexOf('/') + 2;
                            //var itemtext = item.name.substr(idx);
                            wsData.push(['data-first', 4,
                                (index + 1),
                                item.name,
                                item.value,
                                parseFloat((item.value / private_licsum * 100).toFixed(3))
                            ]);
                        });
                        wsData.push(rowEmpty);
                        addSheet(wsData, '자격정보');

                        ret = getTitle(6);
                        wsData = ret[0];
                        rowEmpty = ret[1];
                        wsData.push(getSubtitle('▶해외연수 여부'));
                        var oversea = nowData.oversea;
                        var overseakeys = _.keys(oversea);
                        var overseavalues = _.values(oversea);
                        var oversea_sum = _.sum(overseavalues);
                        wsData.push(['header', overseakeys.length + 1, '구분'].concat(overseakeys));
                        wsData.push(['data-first', overseakeys.length + 1, '인원'].concat(overseavalues));
                        var oversearatio = overseavalues.map((item, index) => {
                            return parseFloat((item / oversea_sum * 100).toFixed(3));
                        })
                        wsData.push(['data-first', overseakeys.length + 1, '비율(%)'].concat(oversearatio));
                        wsData.push(rowEmpty);

                        wsData.push(getSubtitle('▶현장실습, 편입, 교직과정이수 여부'));
                        wsData.push(['header-two-multi', 5, '구분', '예', '', '아니오', '']);
                        wsData.push(['header', 5, '', '인원', '비율(%)', '인원', '비율(%)']);
                        var internship = nowData.internship;
                        var internship_yes = internship['현장실습'] ? internship['현장실습'] : 0;
                        var internship_sum = _.sum(_.values(internship));
                        var internship_yes_ratio = internship['현장실습'] ? parseFloat((internship['현장실습'] / internship_sum * 100).toFixed(3)) : 0;
                        var internship_no = internship['해당없음'] ? internship['해당없음'] : 0;
                        var internship_no_ratio = internship['해당없음'] ? parseFloat((internship['해당없음'] / internship_sum * 100).toFixed(3)) : 0;
                        wsData.push(['data-first', 5, '현장실습여부', internship_yes, internship_yes_ratio, internship_no, internship_no_ratio]);
                        var transfer = nowData.transfer;
                        var transfer_yes = transfer['편입'] ? transfer['편입'] : 0;
                        var transfer_sum = _.sum(_.values(transfer));
                        var transfer_yes_ratio = transfer['편입'] ? parseFloat((transfer['편입'] / transfer_sum * 100).toFixed(3)) : 0;
                        var transfer_no = transfer['해당없음'] ? transfer['해당없음'] : 0;
                        var transfer_no_ratio = transfer['해당없음'] ? parseFloat((transfer['해당없음'] / transfer_sum * 100).toFixed(3)) : 0;
                        wsData.push(['data-first', 5, '편입여부', transfer_yes, transfer_yes_ratio, transfer_no, transfer_no_ratio]);
                        var teach = nowData.teach;
                        var teach_sum = _.sum(_.values(teach));
                        var teach_yes = teach['교직이수'] ? teach['교직이수'] : 0;
                        var teach_yes_ratio = teach['교직이수'] ? parseFloat((teach['교직이수'] / teach_sum * 100).toFixed(3)) : 0;
                        var teach_no = teach['해당없음'] ? teach['해당없음'] : 0;
                        var teach_no_ratio = teach['해당없음'] ? parseFloat((teach['해당없음'] / teach_sum * 100).toFixed(3)) : 0;
                        wsData.push(['data-first', 5, '교직이수여부', teach_yes, teach_yes_ratio, teach_no, teach_no_ratio]);
                        wsData.push(rowEmpty);
                        addSheet(wsData, '특성정보');

                        var wbout = XLSX.write(wb, {
                            bookType: 'xlsx',
                            bookSST: true,
                            type: 'binary'
                        });

                        if (this.isSelectedCorp) {
                            ws_name = '기업취업현황(기업조건)';
                        } else {
                            ws_name = '기업취업현황(회사명)';
                        }

                        var _date = moment().format('YYYYMMDD'); //moment().format('YYYYMMDDHHmm');
                        saveAs(new Blob([s2ab(wbout)], {
                            type: 'application/octet-stream'
                        }), ws_name + '_' + _date + '.xlsx');

                    },

                    /**
                     * @description 화면 학력 / 자격증 / 인턴 탭 toggle evnet
                     * @param {*} type
                     */
                    handleWrapTabToggle: function(type) {
                        this.wrap_tab_toggle[type] = !this.wrap_tab_toggle[type];

                    },
                    /**
                     * @description 회사 조회 event
                     */
                    companySearchOnSubmit: function() {
                        var _this = this;
                        var searchText = _this.companySearch;
                        var selectedYear = "year"; //_this.selectedYear;
                        if (searchText.length > 0) {
                            var _this = this;
                            $.ajax({
                                type: "GET",
                                url: "json/company.json",
                                dataType: "text",
                                async: false,
                                success: function(data) {
                                    _this.companyFindResult = JSON.parse(data);
                                }
                            });
                            var comres = arrayToObject(_this.companyFindResult, 'COMNM');
                            if (comres.length == 0) {
                                alert('일치하는 이름의 회사가 없습니다.');
                                this.selectedCompany = null;
                                this.isCompanyResultOpen = false;
                                this.companySearchResults = [];
                            } else {
                                var tmpYearRes = comres.filter(item => (item.value) == _this.selectedYear);
                                if (tmpYearRes.length == 0) {
                                    var msg = "(";
                                    for (var key in comres) {
                                        msg += (comres[key].value)+"년, ";
                                    }
                                    msg = msg.slice(0, -2);
                                    alert('일치하는 이름의 회사가 없습니다. '+msg+' 검색가능)');
                                } else {
                                    var result = []
                                    var tmpObject = tmpYearRes[0].text;

                                    for (var item in tmpObject) {
                                        result.push({
                                            "text": tmpObject[item],
                                            "value": item,
                                        });
                                    }

                                    result = charSortByArray(result);
                                    this.isCompanyResultOpen = true;
                                    this.companySearchResults = result;
                                }
                            }
                        } else {
                            alert('검색할 회사명을 작성 하셔야 합니다.');
                            this.selectedCompany = null;
                            this.isCompanyResultOpen = false;
                            this.companySearchResults = [];
                        }
                    },

                    /**
                     * @description 회사 조회 초기화.
                     */
                    companySearchInit: function() {
                        this.selectedCompany = null;
                        this.companySearch = "";
                    },
                    /**
                     * @description 회사 선택 시 발생 event
                     * @param {*} selectValue
                     */
                    handleSelectCompany: function(selectValue) {
                        //희망 업종 및 월급 선택 초기화.
                        this.selectedCompanySize = null;
                        this.selectedCompanyType = null;
                        this.selectedCompanyArea = null;
                        this.selectedCompanyPersonnelSize = null;

                        this.hopeSalary = {
                            start: 0,
                            end: 0
                        };

                        this.companySearch = selectValue.text;
                        this.selectedCompany = selectValue;
                        this.isCompanyResultOpen = false;
                        this.companySearchResults = [];
                        this.companyListSearchResults = [];
                    },

                    setSelectedCompany: function(point, selectedPoint) {
                        // 리스트 초기화
                        Object.keys(this.$refs.setSelectedCompany).forEach(el => {
                            this.$refs.setSelectedCompany[el].classList.remove('active');
                        })

                        // 기존 선택 되어진 값이 없는 경우
                        if (selectedPoint.length == 0) {
                            this.selectedCompanyText = point.name;
                            this.selectedCompanyValue = point.value;
                            this.selectedChartIndex = point.index;
                            clickChart.series[0].data[this.selectedChartIndex].update({
                                borderColor: '#FF0000',
                                selected: true,
                                sliced: true
                            });
                            clickChart.series[1].data[this.selectedChartIndex].update({
                                borderColor: '#FF0000',
                                selected: true,
                                sliced: true
                            });

                            this.$refs.setSelectedCompany[this.selectedChartIndex].classList.add('active');
                        } else {
                            clickChart.series[0].data[this.selectedChartIndex].update({
                                borderColor: '#FFFFFF',
                                selected: false,
                                sliced: false
                            });
                            clickChart.series[1].data[this.selectedChartIndex].update({
                                borderColor: '#FFFFFF',
                                selected: false,
                                sliced: false
                            });

                            if (this.selectedCompanyValue == point.value) {
                                // 선택 값과 기존 값이 같은 경우 캔슬
                                this.selectedCompanyText = "";
                                this.selectedCompanyValue = "";
                            } else {
                                // 선택 값과 기존 값이 다른 경우 새로운 값으로 변경
                                this.selectedCompanyText = point.name;
                                this.selectedCompanyValue = point.value;
                                this.selectedChartIndex = point.index;
                                clickChart.series[0].data[this.selectedChartIndex].update({
                                    borderColor: '#FF0000',
                                    selected: true,
                                    sliced: true
                                });
                                clickChart.series[1].data[this.selectedChartIndex].update({
                                    borderColor: '#FF0000',
                                    selected: true,
                                    sliced: true
                                });

                                this.$refs.setSelectedCompany[this.selectedChartIndex].classList.add('active');
                            }
                        }
                    },

                    handleSetSelectedCompany: function(event, com, index) {
                        clickChart.series[0].data[this.selectedChartIndex].update({
                            borderColor: '#FFFFFF',
                            selected: false,
                            sliced: false
                        });
                        clickChart.series[1].data[this.selectedChartIndex].update({
                            borderColor: '#FFFFFF',
                            selected: false,
                            sliced: false
                        });

                        var parent = event.target.parentElement.parentElement;
                        if (parent.classList.contains('active')) {
                            parent.classList.remove('active');
                            this.selectedCompanyText = "";
                            this.selectedCompanyValue = "";
                        } else {
                            if (index < 5) {
                                this.selectedChartIndex = index;
                                this.selectedChartColor = clickChart.series[0].data[index].color;
                                clickChart.series[0].data[this.selectedChartIndex].update({
                                    borderColor: '#FF0000',
                                    selected: true,
                                    sliced: true
                                });
                                clickChart.series[1].data[this.selectedChartIndex].update({
                                    borderColor: '#FF0000',
                                    selected: true,
                                    sliced: true
                                });
                            }

                            Object.keys(this.$refs.setSelectedCompany).forEach(el => {
                                this.$refs.setSelectedCompany[el].classList.remove('active');
                            })

                            parent.classList.add('active');
                            this.selectedCompanyText = com.name;
                            this.selectedCompanyValue = com.value;
                        }
                    },

                    /**
                     * @description 년도 및 회사 규모 등을 변경 시 회사명 선택 정보 초기화.
                     */
                    handleYearAndCompany: function() {
                        if (this.selectedCompany) {
                            this.selectedCompany = null;
                            this.hopeSalary_comp = {
                                start: 0,
                                end: 0
                            };
                            this.companySearch = '';
                            this.isCompanyResultOpen = false;
                            this.companySearchResults = [];
                            this.companyListSearchResults = [];
                        }
                    },

                    handleYearChange: function() {
                        $.ajax({
                            type: "GET",
                            url: "json/ui.json",
                            dataType: "text",
                            success: function(data) {
                                var responseData = JSON.parse(data);
                                this.companySizes = arrayToObject(responseData, 'COMIND');
                                this.selectedCompanySize = null;
                                this.selectedCompanySizeText = null;
                                this.companyTypes = arrayToObject(responseData, 'COMTYPE');
                                this.selectedCompanyType = null;
                                this.selectedCompanyTypeText = null;
                            }
                        });
                    },

                    /**
                     * @description 월급여 start 작성 event
                     * @param {*} event
                     */
                    hopeSalaryStartChange: function(event) {
                        var updateSalary = event.target.value || 0;
                        this.hopeSalary.start = parseInt(updateSalary);
                        if (updateSalary > parseInt(this.hopeSalary.end || 0)) {
                            this.hopeSalary.end = parseInt(updateSalary) + 100;
                        }
                        this.handleYearAndCompany();
                    },

                    hopeSalaryCompStartChange: function(event) {
                        if (this.selectedCompany) {
                            this.handleSelectCompany(this.selectedCompany);
                        }
                        var updateSalary = event.target.value || 0;
                        this.hopeSalary_comp.start = parseInt(updateSalary);
                        if (updateSalary > parseInt(this.hopeSalary_comp.end || 0)) {
                            this.hopeSalary_comp.end = parseInt(updateSalary) + 100;
                        }
                    },

                    /**
                     * @description number input 숫자체크 하는 validation function
                     * @param {*} evt
                     * @returns bool
                     */
                    isNumber: function(evt) {
                        //            if(this.selectedCompany) {
                        //              this.companySearch = '';
                        //              this.selectedCompany = null;
                        //              this.isCompanyResultOpen = false;
                        //              this.companySearchResults = [];
                        //            }
                        evt = (evt) ? evt : window.event;
                        var charCode = (evt.which) ? evt.which : evt.keyCode;
                        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                            evt.preventDefault();;
                        } else {
                            return true;
                        }
                    },

                    handleManualStatus: function() {
                        this.isSelectedManual = true;
                        //this.isSelectedSearchCorp = true;
                        //this.isSelectedSearchComp = true;
                        //this.isSelectedCorp = false;
                        //this.isSelectedComp = false;
                        this.handleManual();
                    },

                    handleInit: function() {
                        // 조회 영역 초기화
                        this.selectedCompanyArea = null;
                        this.selectedCompanySize = null;
                        this.selectedCompanyType = null;
                        this.selectedCompanyPersonnelSize = null;
                        this.companySearch = '';
                        this.selectedCompany = null;
                        this.selectedCompanyTypeList = []
                        this.selectedCompanySizeList = []
                        this.selectedCompanyPersonnelSizeList = []
                        this.selectedCompanyAreaList = []

                        Object.keys(this.$refs.companyTypes).forEach(el => {
                            this.$refs.companyTypes[el].classList.remove('active');
                        })

                        Object.keys(this.$refs.companySizes).forEach(el => {
                            this.$refs.companySizes[el].classList.remove('active');
                        })

                        Object.keys(this.$refs.companyPersonnelSizes).forEach(el => {
                            this.$refs.companyPersonnelSizes[el].classList.remove('active');
                        })

                        Object.keys(this.$refs.companyAreas).forEach(el => {
                            this.$refs.companyAreas[el].classList.remove('active');
                        })

                        this.isSelectAllCorpType = false;
                        this.isSelectAllCorpSize = false;
                        this.isSelectAllCorpPerSize = false;
                        this.isSelectAllCorpArea = false;

                        // 결과 영역 초기화
                        this.isResponse = false;
                    },

                    handlePrint: function() {
                        if (this.isResponse) {
                            window.print();
                        } else {
                            alert('검색 후 결과 출력을 진행 해주시기 바랍니다.');
                        }
                    },

                    handleExport: function() {
                        if (this.isResponse) {
                            this.excelExport();
                        } else {
                            alert('검색 후 결과 저장을 진행 해주시기 바랍니다.');
                        }
                    },

                    handleSearchSubmit: function() {
                        var validation = true;
                        var message = '';

                        if (!this.isSelectedCorp && !this.isSelectedComp) {
                            validation = false;
                            message = '기업조건 또는 회사명 선택 후 검색 가능 합니다.';
                        }

                        if (this.isSelectedCorp) {
                            if (this.selectedCompanyTypeList.length == 0 && this.selectedCompanySizeList.length == 0
                                && this.selectedCompanyPersonnelSizeList.length == 0 && this.selectedCompanyAreaList.length == 0) {
                                validation = false;
                                message = '원하는 조건을 선택 한 뒤 검색해 주세요.';
                            }
                        } else if (this.isSelectedComp) {
                            if (!this.selectedCompany) {
                                validation = false;
                                message = '회사명 입력 후 돋보기 버튼을 눌러 회사명을 선택해주세요.';
                            }
                        }

                        if (!this.selectedYear) {
                            validation = false;
                            message = '대상 년도는 필수 선택 입니다.';
                        }

                        if (validation) {
                            //this.isResponse = false;
                            this.isFetching = true;
                            this.requestData(this.isSelectedCorp);
                        } else {
                            alert(message);
                        }
                    },

                    handleSearchCompanySubmit: function() {
                        if (this.selectedCompanyValue == "") {
                            alert("선택 된 회사가 없습니다.");
                        } else {
                            var obj = {
                                text: this.selectedCompanyText,
                                value: this.selectedCompanyValue
                            }

                            //희망 업종 및 월급 선택 초기화.
                            this.selectedCompanySize = null;
                            this.selectedCompanyType = null;
                            this.hopeSalary = {
                                start: 0,
                                end: 0
                            };

                            this.companySearch = this.selectedCompanyText;
                            this.selectedCompany = obj;
                            this.isCompanyResultOpen = false;
                            this.companySearchResults = [];
                            this.companyListSearchResults = [];

                            // 차트 선택 값 초기화
                            this.selectedCompanyText = "";
                            this.selectedCompanyValue = "";

                            // 회사명 검색 화면 활성화
                            this.isSelectedSearchCorp = true;
                            this.isSelectedSearchComp = false;
                            this.isSelectedCorp = false;
                            this.isSelectedComp = true;

                            // 화면 최상단으로 스크롤 이동
                            window.scrollTo(0, 0);

                            this.handleSearchSubmit();
                        }
                    },

                    handleManual: function(step) {
                        this.isManualStep1 = false;
                        this.isManualStep2 = false;
                        this.isManualStep3 = false;
                        this.isManualStep4 = false;
                        this.isManualStep5 = false;

                        switch (step) {
                            case 1:
                                this.isManualStep1 = true;
                                break;
                            case 2:
                                this.isManualStep2 = true;
                                break;
                            case 3:
                                this.isManualStep3 = true;
                                //this.isSelectedSearchCorp = false;
                                //this.isSelectedSearchComp = false;
                                //this.isSelectedCorp = true;
                                //this.isSelectedComp = false;
                                break;
                            case 4:
                                this.isManualStep4 = true;
                                //this.isSelectedSearchCorp = true;
                                //this.isSelectedSearchComp = false;
                                //this.isSelectedCorp = false;
                                //this.isSelectedComp = true;
                                break;
                            case 5:
                                this.isManualStep5 = true;
                                break;
                            default:
                                this.isManualStep1 = true;
                        }
                    },

                    handleManualInit: function() {
                        this.isSelectedManual = false;
                        //this.isSelectedSearchCorp = true;
                        //this.isSelectedSearchComp = true;
                        //this.isSelectedCorp = false;
                        //this.isSelectedComp = false;
                    },

                    renderGridAndChart: function(val, id) {
                        var _this = this;
                        if (id == 'origin') {
                            if (val) {
                                this.university_origin_tab_list = this.university_origin[val];
                                var top3Data = this.university_origin[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_origin[val].slice(0, 3);
                                }

                                setRenderPieChart('origin', _.map(top3Data, function(item, index) {
                                    if (index == 0) {
                                        var idx = item.text.lastIndexOf('/') == -1 ? 0 : item.text.lastIndexOf('/') + 2;
                                        var itemtext = item.text.substr(idx);
                                        var itemvalue = item.value.substr(0, item.value.lastIndexOf('('));
                                        _this.analysis_university_origin['name'] = itemtext;
                                        _this.analysis_university_origin['value'] = itemvalue;
                                    }
                                    return [item.text, item.point];
                                }), Highcharts);
                            }
                        } else if (id == 'dept') {
                            if (val) {
                                this.university_dept_tab_list = this.university_dept[val];
                                var top3Data = this.university_dept[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_dept[val].slice(0, 3);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (this.major_rank.length != 0) {
                                    this.major_rank.length = []
                                };

                                //학력 pie chart render
                                setRenderPieChart('dept', _.map(top3Data, function(item, index) {
                                    var idx = item.text.lastIndexOf('/') == -1 ? 0 : item.text.lastIndexOf('/') + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf('('));

                                    var num = "";
                                    if (index == 0) {
                                        num = "①";
                                    } else if (index == 1) {
                                        num = "②";
                                    } else if (index == 2) {
                                        num = "③";
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    _this.major_rank.push({
                                        "name": itemtext,
                                        "value": itemvalue,
                                        "num": num
                                    });

                                    return [itemtext, item.point];
                                }), Highcharts);
                            }
                        } else if (id == 'deptcol') {
                            if (val) {
                                this.university_deptcol_tab_list = this.university_deptcol[val];
                                var top3Data = this.university_deptcol[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_deptcol[val].slice(0, 3);
                                }

                                // 취업현황 요약에서 사용하기 위한 데이터 초기화
                                if (this.major_field_rank.length != 0) {
                                    this.major_field_rank.length = []
                                };

                                //학력 pie chart render
                                setRenderPieChart('deptcol', _.map(top3Data, function(item, index) {
                                    var idx = item.text.lastIndexOf('/') == -1 ? 0 : item.text.lastIndexOf('/') + 2;
                                    var itemtext = item.text.substr(idx);
                                    var itemvalue = item.value.substr(0, item.value.lastIndexOf('('));

                                    var num = "";
                                    if (index == 0) {
                                        num = "①";
                                    } else if (index == 1) {
                                        num = "②";
                                    } else if (index == 2) {
                                        num = "③";
                                    }

                                    // 취업현황 요약에서 사용하기 위한 데이터
                                    _this.major_field_rank.push({
                                        "name": itemtext,
                                        "value": itemvalue,
                                        "num": num
                                    });

                                    return [itemtext, item.point];
                                }), Highcharts);
                            }
                        } else if (id == 'uniarea') {
                            if (val) {
                                this.university_area_tab_list = this.university_area[val];
                                var top3Data = this.university_area[val];
                                if (top3Data.length > 3) {
                                    top3Data = this.university_area[val].slice(0, 3);
                                }

                                //학력 pie chart render
                                setRenderPieChart('uniarea', _.map(top3Data, function(item, index) {
                                    var idx = item.text.lastIndexOf('/') == -1 ? 0 : item.text.lastIndexOf('/') + 2;
                                    var itemtext = item.text.substr(idx);

                                    if (index == 0) {
                                        var itemvalue = item.value.substr(0, item.value.lastIndexOf('('));
                                        _this.analysis_university_area['name'] = itemtext;
                                        _this.analysis_university_area['value'] = itemvalue;
                                    }

                                    return [itemtext, item.point];
                                }), Highcharts);
                            }
                        }
                    },

                    //REST API Request
                    // condFlag true 기업조건 검색, false 회사명 검색
                    requestData: function(condFlag) {
                        var _this = this;
                        var _data = {};
                        var _url = "";

                        if (condFlag) {
                            _url = "/swiss/cm/getStatByCond2.do";

                            if (this.selectedYear) {
                                _data['year'] = this.selectedYear;
                            }
                            if (this.selectedCompanyTypeList.length != 0) {
                                _data['comtype'] = this.selectedCompanyTypeList.join(',');
                            }
                            if (this.selectedCompanySizeList.length != 0) {
                                _data['comind'] = this.selectedCompanySizeList.join(',');
                            }
                            if (this.selectedCompanyPersonnelSizeList.length != 0) {
								_data['size'] = this.selectedCompanyPersonnelSizeList.join('|');
                            }
                            if (this.selectedCompanyAreaList.length != 0) {
                                _data['area'] = this.selectedCompanyAreaList.join(',');
                            }
                        } else {
                            _url = "/swiss/cm/getStatByComp2.do";

                            if (this.selectedYear) {
                                _data['year'] = this.selectedYear;
                            }
                            if (this.selectedCompany) {
                                _data['comnm'] = this.selectedCompany.value;
                            }
                        }

                        $.ajax({
                            type: "GET",
                            url: condFlag == true ? "json/data.json" : "json/dataBycomp2.json",
                            dataType: "text",
                            data: _data,
                            beforeSend: function(xhr) {
                                xhr.setRequestHeader("username", userid+"_"+userType);
                            },
                            success: function(response) {
                                var res = JSON.parse(response);
                                if (res.count == undefined || res.count == 0) {
                                    alert('검색 결과가 존재하지 않습니다.');
                                    _this.isResponse = false;
                                    _this.isFetching = false;
                                } else {
                                    _this.resultCount = res.count;
                                    _this.isResponse = true;
                                    _this.isFetching = false;

                                    // 슬라이더 초기화
                                    _this.slider_value = 50;
                                    _this.slider_text = "전체";
                                    // _this.selectedOriginTabValue = null;
                                    // _this.selectedDeptTabValue = null;
                                    // _this.selectedDeptcolTabValue = null;

                                    _this.isCompany_list = _this.selectedCompany != null ? false : true;
                                    var cnt1 = 0;
                                    _this.company_list = [];
                                    var companyTop5 = [];
                                    for (var key in res.company_list) {
                                        var infos = key.split('_');
                                        var value = res.company_list[key];
                                        cnt1 += 1;
                                        if (cnt1 <= 1000) {
                                            _this.company_list.push({
                                                name: infos[1],
                                                count: round(value / res.count * 100, 2) + '%(' + value + '명)',
                                                value: infos[0]
                                            });
                                        } else {
                                            break;
                                        }
                                        if (cnt1 <= 5) {
                                            companyTop5.push({
                                                value: infos[0],
                                                y: value,
                                                name: infos[1]
                                            });
                                        }
                                    }

                                    setRenderPieChartClick('company', companyTop5, Highcharts);

                                    if (_this.selectedYear == '2018')
                                        _this.isLicense = false;
                                    else
                                        _this.isLicense = true;

                                    if ($.isEmptyObject(res.license_nm))
                                        _this.isPublicLicense = false;
                                    else
                                        _this.isPublicLicense = true;

                                    if ($.isEmptyObject(res.private_license_nm))
                                        _this.isPrivateLicense = false;
                                    else
                                        _this.isPrivateLicense = true;

                                    _this.searchResult = res;
                                    if (_this.selectedCompany) {
                                        if (_.has(res, 'COMPANYINFO')) {
                                            _this.company_info = res.COMPANYINFO;
                                            _this.isCompany_info = true;
                                            _this.isCompany_info_data = false;
                                            var empData = _this.company_info;
                                            var employeeModel = empData.YEAR;

                                            setRenderLineSimpleChart('employee_chart', employeeModel, empData.EMPLOYEECNT, Highcharts);
                                            setRenderColumnSimpleChart('employee_multi_chart',
                                                _.map(employeeModel, function(item, index) {
                                                    return {
                                                        name: item,
                                                        y: empData.ENTRANTCNT[index]
                                                    };
                                                }),
                                                _.map(employeeModel, function(item, index) {
                                                    return {
                                                        name: item,
                                                        y: empData.RETIREECNT[index]
                                                    };
                                                }),
                                                _.map(employeeModel, function(item, index) {
                                                    return {
                                                        name: item,
                                                        y: empData.EMPLOYEERATIO[index]
                                                    };
                                                }),
                                                Highcharts);

                                            var baseYear = "("+(empData.YEAR).slice(-1)[0]+" 기준)";
                                            _this.company_info['BASEYEAR'] = baseYear;

                                            var _salcomp = getColumnChartSeries(getSeriesDataAndSort(empData.SALARYCOMPARE, isSimple = true, sort = false));
                                            setSalaryColumnChart('salary_compare_chart', _salcomp, Highcharts, empData.COMTYPE, empData.SECTOR, empData.INDNAME, 260);

                                            var dataObj = _.sortBy(res.depttop3, 'year');
                                            setRenderColumnSimpleChartByDept('employee_multi_chart_dept', dataObj, Highcharts);

                                            dataObj = _.sortBy(res.areatop3, 'year');
                                            setRenderColumnSimpleChartByDept('employee_multi_chart_dept_area', dataObj, Highcharts);

                                            dataObj = res.fromarea
                                            setRenderColumnSimpleChartByArea('employee_multi_chart_com_area',
                                                _.map(dataObj, function(item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[0],
														z: item.name[0]
                                                    };
                                                }),
                                                _.map(dataObj, function(item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[1],
														z: item.name[1]
                                                    };
                                                }),
                                            Highcharts);

                                            var salary_data = res.salary
                                            var salary_dept = 100;
                                            if (salary_data.length > 2) {
                                                salary_dept = salary_data[1][0] - salary_data[0][0];
                                            }
                                            var tmpIndex = salary_data.length - 1;
                                            setRenderColumnSimpleChartBySalary('salary_chart',
                                                _.map(salary_data, function(item, index) {
                                                    var obj = {}
                                                    if (index == tmpIndex) {
                                                        obj = {
                                                           name: item[0].toLocaleString() +"만원 이상",
                                                           y: item[1]
                                                        };
                                                    } else {
                                                        obj = {
                                                           name: item[0].toLocaleString() +"만원 ~ "+(item[0] + salary_dept).toLocaleString()+"만원",
                                                           y: item[1]
                                                        };
                                                    }
                                                    return obj
                                               }),
                                               salary_dept,
                                           Highcharts, false);
                                        } else {
                                            _this.isCompany_info = false;
                                            _this.isCompany_info_data = true;

                                            // COMPANYINFO 가 없는 경우에도 전공TOP3, 대학소재지 TOP3, 동일지역 출신 비율, 급여분포는 나와야 한다.
                                            var dataObj = _.sortBy(res.depttop3, 'year');
                                            setRenderColumnSimpleChartByDept('employee_multi_chart_dept2', dataObj, Highcharts);

                                            dataObj = _.sortBy(res.areatop3, 'year');
                                            setRenderColumnSimpleChartByDept('employee_multi_chart_dept_area2', dataObj, Highcharts);

                                            dataObj = res.fromarea
                                            setRenderColumnSimpleChartByArea('employee_multi_chart_com_area2',
                                                _.map(dataObj, function(item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[0],
														z: item.name[0]
                                                    };
                                                }),
                                                _.map(dataObj, function(item, index) {
                                                    return {
                                                        name: item.year,
                                                        y: item.data[1],
														z: item.name[1]
                                                    };
                                                }),
                                            Highcharts);

                                            var salary_data = res.salary
                                            var salary_dept = 100;
                                            if (salary_data.length > 2) {
                                                salary_dept = salary_data[1][0] - salary_data[0][0];
                                            }
                                            var tmpIndex = salary_data.length - 1;
                                            setRenderColumnSimpleChartBySalary('salary_chart2',
                                                _.map(salary_data, function(item, index) {
                                                    var obj = {}
                                                    if (index == tmpIndex) {
                                                        obj = {
                                                           name: item[0].toLocaleString() +"만원 이상",
                                                           y: item[1]
                                                        };
                                                    } else {
                                                        obj = {
                                                           name: item[0].toLocaleString() +"만원 ~ "+(item[0] + salary_dept).toLocaleString()+"만원",
                                                           y: item[1]
                                                        };
                                                    }
                                                    return obj
                                               }),
                                               salary_dept,
                                           Highcharts, true);
                                        }
                                    } else {
                                        _this.isCompany_info = false;
                                        _this.isCompany_info_data = false;
                                    }

                                    var getOverSeaPercent = function(total, data) {
                                        if (_.keys(data).length > 0) {
                                            var empty = 0;
                                            if ('해당없음' in data)
                                                empty = data['해당없음'];
                                            var value = total - empty;
                                            var avg = round(value / total);
                                            var percentage = round((value / total) * 100);
                                            return {
                                                avg: avg,
                                                percentage: percentage
                                            };
                                        } else {
                                            return {
                                                avg: 0.00,
                                                percentage: 0.00
                                            };
                                        }

                                    }
                                    _this.toeic_rate = round(res.toeic_percent);
                                    _this.avarageAnalysis = {
                                        gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        txt_gradescore_avg: res.gradescore.length > 0 ? round(_.sum(res.gradescore) / res.gradescore.length) : 0,
                                        gradescore_percent: round(res.gradescore_percent),
                                        toeic_avg: res.toeic.length > 0 ? round(_.sum(res.toeic) / res.toeic.length) : 0,
                                        toeic_percent: round(res.toeic_percent),
                                        license_avg: round((_.sum(getObjectConvertArray(res.license_nm)) / res.count)),
                                        license_percent: round(res.license_percent),
                                        oversea_avg: getOverSeaPercent(res.count, res.oversea).avg,
                                        oversea_percent: getOverSeaPercent(res.count, res.oversea).percentage,
                                        internship_avg: getOverSeaPercent(res.count, res.internship).avg,
                                        internship_percent: getOverSeaPercent(res.count, res.internship).percentage,
                                        transfer_avg: getOverSeaPercent(res.count, res.transfer).avg,
                                        transfer_percent: getOverSeaPercent(res.count, res.transfer).percentage,
                                        teach_avg: getOverSeaPercent(res.count, res.teach).avg,
                                        teach_percent: getOverSeaPercent(res.count, res.teach).percentage,
                                    }

                                    var total_fund = 0;
                                    var total_kind = 0;

                                    //설립구분
                                    setRenderPieChart('fund', _.map(_.keys(res.university_fund), function(key, index) {
                                        if (index == 0) {
                                            _this.analysis_university_fund['name'] = key;
                                            _this.analysis_university_fund['value'] = res.university_fund[key];
                                        }
                                        total_fund += res.university_fund[key];

                                        return [key, res.university_fund[key]];
                                    }), Highcharts);
                                    _this.analysis_university_fund['value'] = (_this.analysis_university_fund['value'] / total_fund * 100).toFixed(1);

                                    //학제
                                    setRenderPieChart('kind', _.map(_.keys(res.university_kind), function(key, index) {
                                        if (index == 0) {
                                            _this.analysis_university_kind['name'] = key;
                                            _this.analysis_university_kind['value'] = res.university_kind[key];
                                        }
                                        total_kind += res.university_kind[key];

                                        return [key, res.university_kind[key]];
                                    }), Highcharts);
                                    _this.analysis_university_kind['value'] = (_this.analysis_university_kind['value'] / total_kind * 100).toFixed(1);


                                    //출신학교 list
                                    _this.university_origin = getOriginUniversityRemapping(res.university, res.university_degree);
                                    _this.selectedOriginTabValue = 'all';
                                    _this.renderGridAndChart('all', 'origin');

                                    //출신학교 소재지 list
                                    _this.university_area = getOriginUniversityRemapping(res.university_area, res.university_area_degree);
                                    _this.selectedAreaTabValue = 'all';
                                    _this.renderGridAndChart('all', 'uniarea');

                                    //전공 list
                                    _this.university_dept = getOriginUniversityRemapping(res.dept, res.dept_degree);
                                    _this.selectedDeptTabValue = 'all';
                                    _this.renderGridAndChart('all', 'dept');

                                    //전공계열 list
                                    _this.university_deptcol = getOriginUniversityRemapping(res.deptcol, res.deptcol_degree);
                                    _this.selectedDeptcolTabValue = 'all';
                                    _this.renderGridAndChart('all', 'deptcol');

                                    //토익 line chart
                                    var toeicmin = 0;
                                    var toeic = res.toeic;
                                    if (toeic) {
                                        toeic.sort((a, b) => a - b);
                                        toeicmain = toeic[0] - 10;
                                    }
                                    toeicmain = toeicmin <= 0 ? 0 : toeicmin;
                                    setRenderMultipleAxisChart('toeic_chart', res.toeic, Highcharts, 100, toeicmin, 990);
                                    _this.toeic_avarage = res.toeic.length > 0 ? round(_.meanBy(res.toeic)) : 0;


                                    //학점 line chart
                                    var scoremin = 0;
                                    var gradescore = res.gradescore;
                                    if (gradescore) {
                                        gradescore.sort((a, b) => a - b);
                                        scoremin = gradescore[0] - 10;
                                    }
                                    scoremin = scoremin <= 0 ? 0 : scoremin;
                                    setRenderMultipleAxisChart('grade_chart', res.gradescore, Highcharts, 10, scoremin, 100);

                                    //해외경험.
                                    var _oversea = getColumnChartSeries(getSeriesDataAndSort(res.oversea));
                                    setRenderColumnChart('overseaChart', _oversea, Highcharts, 260);

                                    //인턴
                                    setRenderHalfDounutChart('internChart', _.map(_.keys(res.internship), function(key) {
                                        return [key, res.internship[key]];
                                    }), Highcharts, 260);
                                    //편입
                                    setRenderHalfDounutChart('transferChart', _.map(_.keys(res.transfer), function(key) {
                                        return [key, res.transfer[key]];
                                    }), Highcharts, 260);
                                    //교직여부
                                    setRenderHalfDounutChart('teachChart', _.map(_.keys(res.teach), function(key) {
                                        return [key, res.teach[key]];
                                    }), Highcharts, 260);

                                    //자격증 종류 column chart
                                    var licenseArray = getLicenseDataAndSort(res.license_nm);
                                    _this.license_list = licenseArray;
                                    var top3Data = licenseArray;
                                    if (top3Data.length > 3) {
                                        top3Data = licenseArray.slice(0, 3);
                                    }

                                    setRenderPieChart('licenseChart', _.map(top3Data, function(item) {
                                        var idx = item.text.lastIndexOf('/') == -1 ? 0 : item.text.lastIndexOf('/') + 2;
                                        var itemtext = item.text.substr(idx);
                                        return [itemtext, item.point];
                                    }), Highcharts);

                                    var privatelicenseArray = getLicenseDataAndSort(res.private_license_nm);
                                    _this.privatelicense_list = privatelicenseArray;
                                    var privateTop3Data = privatelicenseArray;
                                    if (privateTop3Data.length > 3) {
                                        privateTop3Data = privatelicenseArray.slice(0, 3);
                                    }

                                    setRenderPieChart('privatelicenseChart', _.map(privateTop3Data, function(item) {
                                        return [item.text, item.point];
                                    }), Highcharts);
                                }
                            },
                            error: function(xhr) {}
                        });
                    },
                    searchCorpBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            this.isSelectedSearchCorp = true;
                            this.isSelectedSearchComp = true;
                            this.isSelectedCorp = false;
                            this.isSelectedComp = false;
                        } else {
                            event.target.classList.add('active');
                            this.isSelectedSearchCorp = false;
                            this.isSelectedSearchComp = false;
                            this.isSelectedCorp = true;
                            this.isSelectedComp = false;
                        }

                        this.handleInit();
                    },
                    searchCompBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            this.isSelectedSearchCorp = true;
                            this.isSelectedSearchComp = true;
                            this.isSelectedCorp = false;
                            this.isSelectedComp = false;
                        } else {
                            event.target.classList.add('active');
                            this.isSelectedSearchCorp = true;
                            this.isSelectedSearchComp = false;
                            this.isSelectedCorp = false;
                            this.isSelectedComp = true;
                        }
                        this.handleInit();
                    },
                    selectCorpBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            this.selectedCompanyType = null;

                            var arr = this.selectedCompanyTypeList;
                            for(let i = 0; i < arr.length; i++) {
                              if(arr[i] === event.currentTarget.value)  {
                                arr.splice(i, 1);
                                i--;
                              }
                            }
                        } else {
                            event.target.classList.add('active');
                            this.selectedCompanyType = event.currentTarget.value;
                            this.selectedCompanyTypeList.push(event.currentTarget.value);
                        }
                    },
                    selectCorpSizeBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            var arr = this.selectedCompanySizeList;
                            for(let i = 0; i < arr.length; i++) {
                              if(arr[i] === event.currentTarget.value)  {
                                arr.splice(i, 1);
                                i--;
                              }
                            }
                        } else {
                            event.target.classList.add('active');
                            this.selectedCompanySizeList.push(event.currentTarget.value);
                        }
                    },
                    selectCorpPerBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            var arr = this.selectedCompanyPersonnelSizeList;
                            for(let i = 0; i < arr.length; i++) {
                              if(arr[i].join(",").toString() === event.currentTarget.value)  {
                                arr.splice(i, 1);
                                i--;
                              }
                            }
                        } else {
                            event.target.classList.add('active');
                            this.selectedCompanyPersonnelSizeList.push(event.currentTarget.value.split(','));
                        }
                    },
                    selectCorpAreaBtn: function(event) {
                        if (event.target.classList.contains('active')) {
                            event.target.classList.remove('active');
                            var arr = this.selectedCompanyAreaList;
                            for(let i = 0; i < arr.length; i++) {
                              if(arr[i] === event.currentTarget.value)  {
                                arr.splice(i, 1);
                                i--;
                              }
                            }
                        } else {
                            event.target.classList.add('active');
                            this.selectedCompanyAreaList.push(event.currentTarget.value);
                        }
                    },
                    selectAll: function(type) {
                        switch (type) {
                            case "CORPTYPE":
                                this.selectedCompanyTypeList = [];
                                if (this.isSelectAllCorpType) {
                                    this.isSelectAllCorpType = false;
                                    this.selectedCompanyType = null;
                                } else {
                                    this.isSelectAllCorpType = true;
                                    Object.keys(this.$refs.companyTypes).forEach(el => {
                                        this.selectedCompanyTypeList.push(this.$refs.companyTypes[el].value);
                                    })
                                }
                                break;
                            case "CORPSIZE":
                                this.selectedCompanySizeList = [];
                                if (this.isSelectAllCorpSize) {
                                    this.isSelectAllCorpSize = false;
                                } else {
                                    this.isSelectAllCorpSize = true;
                                    Object.keys(this.$refs.companySizes).forEach(el => {
                                        this.selectedCompanySizeList.push(this.$refs.companySizes[el].value);
                                    })
                                }
                                break;

                            case "CORPPERSIZE":
                                this.selectedCompanyPersonnelSizeList = [];
                                if (this.isSelectAllCorpPerSize) {
                                    this.isSelectAllCorpPerSize = false;
                                } else {
                                    this.isSelectAllCorpPerSize = true;
                                    Object.keys(this.$refs.companyPersonnelSizes).forEach(el => {
                                        this.selectedCompanyPersonnelSizeList.push(this.$refs.companyPersonnelSizes[el].value);
                                    })
                                }
                                break;
                            case "CORPAREA":
                                this.selectedCompanyAreaList = [];
                                if (this.isSelectAllCorpArea) {
                                    this.isSelectAllCorpArea = false;
                                } else {
                                    this.isSelectAllCorpArea = true;
                                    Object.keys(this.$refs.companyAreas).forEach(el => {
                                        this.selectedCompanyAreaList.push(this.$refs.companyAreas[el].value);
                                    })
                                }
                                break;
                        }
                    },
                    openCorpType(type) {
                        if (type == "I") {
                            this.isOpenCorpType = true;
                        } else {
                            this.isOpenCorpType = false;
                        }
                    },
                    openCorpSize(type) {
                        if (type == "I") {
                            this.isOpenCorpSize = true;
                        } else {
                            this.isOpenCorpSize = false;
                        }
                    },
                    handleParameterSetting: function() {
                        // 기업조건 검색 화면으로 세팅
                        this.isSelectedSearchCorp = false;
                        this.isSelectedSearchComp = false;
                        this.isSelectedCorp = true;
                        this.isSelectedComp = false;

                        // 파라미터값으로 버튼 선택 처리
                        if (paramComtype != "") {
                            Object.keys(this.$refs.companyTypes).forEach(el => {
                                if (paramComtype.indexOf(this.$refs.companyTypes[el].value) != -1) {
                                    this.$refs.companyTypes[el].classList.add('active');
                                    this.selectedCompanyTypeList.push(this.$refs.companyTypes[el].value);
                                }
                            })
                        }

                        if (paramComind != "") {
                            Object.keys(this.$refs.companySizes).forEach(el => {
                                if (paramComind.indexOf(this.$refs.companySizes[el].value) != -1) {
                                    this.$refs.companySizes[el].classList.add('active');
                                    this.selectedCompanySizeList.push(this.$refs.companySizes[el].value);
                                }
                            })
                        }

                        // 검색버튼 클릭
                        this.handleSearchSubmit();
                    },

                    handleSearchCompanyListSubmit: function() {
                        if (this.selectedCompanyArea == null && this.selectedCompanySize == null &&
                            this.selectedCompanyType == null && this.selectedCompanyPersonnelSize == null) {
                            alert("회사리스트 검색 조건을 선택해 주세요.");
                        } else {
                            this.requestCompanyData();
                        }
                    },
                    //회사 리스트 호출 API /findCompanyByCond
                    requestCompanyData: function() {

                        var _this = this;
                        var _data = {};
                        if (this.selectedYear) {
                            _data['year'] = this.selectedYear;
                        }
                        if (this.selectedCompanyArea) {
                            _data['area'] = this.selectedCompanyArea;
                        }
                        if (this.selectedCompanySize) {
                            _data['bookind'] = this.selectedCompanySize;
                        }
                        if (this.selectedCompanyType) {
                            _data['comtype'] = this.selectedCompanyType;
                        }
                        if (this.selectedCompanyPersonnelSize) {
                            _data['size'] = this.selectedCompanyPersonnelSize;
                        }

                        $.ajax({
                            type: "GET",
                            url: "json/findCompany.json",
                            dataType: "text",
                            async: false,
                            data: _data,
                            success: function(data) {
                                var comres = JSON.parse(data);
                                if (comres.length == 0) {
                                    alert('일치하는 조건의 회사가 없습니다.');
                                } else {
                                    comres = getSeriesDataByValue(comres);
                                    comres = comres.filter(item => item.text != null);
                                    comres = comres.filter(item => item.text != ".");
                                    comres = charSortByArray(comres);

                                    _this.companyListSearchResults = comres;
                                    // 팝업 오픈
                                    _this.isCompanyList = true;
                                }
                            }
                        });
                    },
                    handleCompanyList(event) {
                        if (event.currentTarget.classList.contains('active')) {
                            event.currentTarget.classList.remove('active');
                        } else {
                            Object.keys(this.$refs.setSelectedCompany).forEach(el => {
                                this.$refs.setSelectedCompany[el].classList.remove('active');
                            })
                            event.currentTarget.classList.add('active');
                        }
                    },
                    handleSelectedCompanyList() {
                        var selectedFlag = false;
                        Object.keys(this.$refs.setSelectedCompany).forEach(el => {
                            if (this.$refs.setSelectedCompany[el].classList.contains('active')) {
                                selectedFlag = true;

                                var selectValue = {
                                    'text': this.$refs.setSelectedCompany[el].children[1].innerText,
                                    'value': this.$refs.setSelectedCompany[el].children[2].innerText
                                }
                                this.companySearch = selectValue.text;
                                this.selectedCompany = selectValue;
                                this.isCompanyResultOpen = false;
                                this.companySearchResults = [];
                                this.companyListSearchResults = [];

                                // 팝업 초기화
                                this.isCompanyList = false;
                                this.$refs.setSelectedCompany[el].classList.remove('active');
                            }
                        })

                        if (!selectedFlag) {
                            alert("선택 된 검색내역이 없습니다.");
                        }
                    },
                    handleDoubleClickSelectedCompanyList(event) {
                        this.handleCompanyList(event);
                        this.handleSelectedCompanyList();
                    },
                    usageExporterSearchOnSubmit() {
                        // validation
                        if (this.usageExporterTypeValue == null) {
                            alert("구분을 선택해 주세요.");
                            return false;
                        }
                        if (this.usageExporterStartDate == null || this.usageExporterEndDate == null) {
                            alert("조회기간을 선택해 주세요.");
                            return false;
                        }
                        if (moment(this.usageExporterStartDate).isAfter(this.usageExporterEndDate)) {
                            alert("검색 종료일은 검색 시작일보다 빨라야 합니다.");
                            return false;
                        }
                        if (this.usageExporterDateValue == null) {
                            alert("조회간격을 선택해 주세요.");
                            return false;
                        }

                        // 데이터 조회
                        var _this = this;
                        var _data = {};
                        _data['what'] = this.usageExporterTypeValue;
                        _data['start'] = moment(this.usageExporterStartDate).format('YYYY-MM-DD');
                        _data['end'] = moment(this.usageExporterEndDate).format('YYYY-MM-DD');
                        _data['agg'] = this.usageExporterDateValue;

                        $.ajax({
                            type: "GET",
                            url: "json/getUsageExporterData.json",
                            dataType: "text",
                            data: _data,
                            success: function(response) {
                                var res = JSON.parse(response);
                                if (res.length == 0) {
                                    alert('검색 결과가 존재하지 않습니다.');
                                } else {
                                    // 엑셀 다운로드
                                    _this.usageExcelExport(res);
                                }
                            }
                        });
                    },
                    /**
                     * @description 사용현황 엑셀 출력
                     */
                    usageExcelExport: function(data) {
                        var _this = this;
                        var nowData = data;
                        var ws_name = '사용현황 통계';
                        var wb = new Workbook();

                        var getSubtitle = (title) => {
                            return ['subtitle', 3, title, '', ''];
                        }

                        var dateObj = _.find(this.usageExporterDate, {value: this.usageExporterDateValue});
                        var searchText = '';
                        searchText += _.find(this.usageExporterType, {value: this.usageExporterTypeValue}).text + ' / ';
                        searchText += moment(this.usageExporterStartDate).format('YYYY-MM-DD') + ' / ';
                        searchText += moment(this.usageExporterEndDate).format('YYYY-MM-DD') + ' / ';
                        searchText += dateObj.text;

                        var getTitle = (num) => {
                            var wsData = [];
                            var empty = Array.from(''.repeat(num))
                            var rowEmpty = ['empty', num];
                            rowEmpty.concat(empty);
                            wsData.push(rowEmpty);
                            empty = Array.from(''.repeat(num - 1))
                            var titleRow = ['bigtitle-four', num, '사용현황 통계', '', '', ''];
                            wsData.push(titleRow);
                            var searchRow1 = ['search-one-three', num, '검색 조건', `${searchText}`, '', ''];
                            wsData.push(searchRow1);
                            wsData.push(rowEmpty);
                            return [wsData, rowEmpty];
                        }

                        var addSheet = (wsData, ws_name) => {
                            var _sheet = json_to_sheet(wsData);
                            var ws = _sheet.data;
                            var wscols = [
                                {wch:20},
                                {wch:20},
                                {wch:20},
                                {wch:20}
                            ];

                            ws['!cols'] = wscols;
                            ws['!merges'] = _sheet.mergesArray;
                            wb.SheetNames.push(ws_name);
                            wb.Sheets[ws_name] = ws;
                        }

                        var wsData = [];
                        var rowEmpty = [];

                        ret = getTitle(4);
                        wsData = ret[0];
                        rowEmpty = ret[1];

                        var dataHeaderRow1 = ['header', 4, '날짜', 'ID', '유저구분', '접속'];
                        wsData.push(dataHeaderRow1);
                        for (const [key, value] of Object.entries(nowData)) {
                            wsData.push(['data-first', 4, value['date'], value['user'], value['usergroup'], value['count']]);
                        }
                        //wsData.push(rowEmpty);
                        addSheet(wsData, ws_name);

                        var wbout = XLSX.write(wb, {
                            bookType: 'xlsx',
                            bookSST: true,
                            type: 'binary'
                        });
                        var _date = moment().format('YYYYMMDDHHmm');
                        saveAs(new Blob([s2ab(wbout)], {
                            type: 'application/octet-stream'
                        }), ws_name + '_' + _date + '.xlsx');
                    },
                },
                created() {
                    this.isUIResponse = true;
                    if (userType == "1" || userType == "2") {
                        this.isUserGroup = true;
                    }
                },
                mounted() {
                    if (paramComtype != "" || paramComind != "") {
                        this.handleParameterSetting();
                    }
                },
                watch: {
                    isUIResponse: function(val) {
                        if (val) {
                            $('#module0').waitMe('hide');
                        } else {
                            run_waitMe($('#module0'), 1, 'bounce');
                        }
                    },
                    isFetching: function(val) {
                        var loading = 'bounce';
                        if (val) {
                            run_waitMe($('#wrap_container'), 1, loading, "1");
                        } else {
                            $('#wrap_container').waitMe('hide');
                        }
                    },
                    selectedOriginTabValue: function(val) {
                        this.renderGridAndChart(val, 'origin');
                    },
                    selectedAreaTabValue: function(val) {
                        this.university_area_tab_list = this.university_area[val];
                        var top3Data = this.university_area[val];
                        if (top3Data.length > 3) {
                            top3Data = this.university_area[val].slice(0, 3);
                        }
                        setRenderPieChart('uniarea', _.map(top3Data, function(item) {
                            return [item.text, item.point];
                        }), Highcharts);
                    },
                    selectedDeptTabValue: function(val) {
                        this.renderGridAndChart(val, 'dept');
                    },
                    selectedDeptcolTabValue: function(val) {
                        this.renderGridAndChart(val, 'deptcol');
                    },
                    slider_value: function(val) {

                        var res = this.searchResult;
                        var _grade = getRateArray(res.count, res.gradescore, val);
                        var _toeic = getRateArray(res.count, res.toeic, val);
                        var _license = getRateArray(res.count, res.license_cnt, val);

                        this.avarageAnalysis.gradescore_avg = _grade.avg;
                        this.avarageAnalysis.toeic_avg = _toeic.avg;
                        this.avarageAnalysis.license_avg = _license.avg;
                        if (val < 50) {
                            this.slider_text = "하위 " + val + " %";
                        } else if (val == 50) {
                            this.slider_text = "전체";
                        } else {
                            this.slider_text = "상위 " + (100 - val) + " %";
                        }
                    },
                    selectedCompanyType: function(val) {
                        this.selectedCompanyTypeText = null;
                        if (val) {
                            var _find = _.find(this.companyTypes, {
                                value: val
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyTypeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    selectedCompanySize: function(val) {
                        this.selectedCompanySizeText = null;
                        if (val) {
                            var _find = _.find(this.companySizes, {
                                value: val
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanySizeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    selectedCompanyPersonnelSize: function(val) {
                        this.selectedCompanyPersonnelSizeText = null;
                        if (val) {
                            var _find = _.find(this.companyPersonnelSizes, {
                                text: val
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyPersonnelSizeText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    selectedCompanyArea: function(val) {
                        this.selectedCompanyAreaText = null;
                        if (val) {
                            var _find = _.find(this.companyAreas, {
                                text: val
                            });
                            if (_find) {
                                setTimeout(() => {
                                    this.selectedCompanyAreaText = _find.text;
                                }, 100);
                            }
                        }
                    },
                    companySearch: function(val) {
                        if (val == "") {
                            this.isCompanyResultOpen = false;
                        }
                    }
                }
            });
        },
    });
});