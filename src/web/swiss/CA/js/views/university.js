var app = null;

var _uniTabs = [
    {"name":"한양대학교", "value":"531230002"},
    {"name":"영남대학교", "value":"530810001"},
    {"name":"영진전문대학교", "value":"731040001"}
]

var _deptList = [
    {"name":"dept","value":"학과명"},
    {"name":"age","value":"나이"},
    {"name":"gradescore","value":"학점"},
    {"name":"nonsubjectcnt","value":"비교과과정참여횟수"},
    {"name":"awardcnt","value":"수상횟수"},
    {"name":"license","value":"자격증"},
    {"name":"parttime","value":"아르바이트"},
    {"name":"admission","value":"전형"},
    {"name":"exchange","value":"교류구분"},
    {"name":"startupclubcnt","value":"창업동아리참여횟수"},
    {"name":"jobclubdate","value":"취업동아리참여기간"},
    {"name":"langen","value":"어학_영어"},
    {"name":"langenspeak","value":"어학_영어말하기"},
    {"name":"langcn","value":"어학_중국어"},
    {"name":"langjp","value":"어학_일본어"},
    {"name":"langko","value":"어학_한국어"},
    {"name":"capstone","value":"캡스톤디자인수상"},
    {"name":"jobprogramdate","value":"취업프로그램참여일수"},
    {"name":"jobprogramcnt","value":"취업프로그램참여횟수"},
    {"name":"doublemajor","value":"복수전공"},
    {"name":"minor","value":"부전공"},
    {"name":"club","value":"동아리"},
    {"name":"field","value":"현장실습"},
    {"name":"gradescore1","value":"1학년성적"},
    {"name":"gradescore2","value":"2학년성적"},
    {"name":"gradescore3","value":"3학년성적"},
    {"name":"gradescore4","value":"4학년성적"},
    {"name":"majorscore","value":"전공성적"},
    {"name":"minorscore","value":"교양성적"},
]

function json_to_sheet(remappingData) {
  var _workSheet = {};
  var _maxC = _.max(remappingData.map(x => x.length));
  var _range = { s: { c: 0, r: 0 }, e: { c: _maxC, r: remappingData.length } };
  var mergesArray = [];

  remappingData.map((item, index) => {
    var option = item[0];
    var existsCount = item[1];
    var data = item.slice(2, 14);

    var styleObject = {};

    if (option === 'bigtitle') {
      mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: 9 } });
      styleObject = {
        border: {
          bottom: { style: 'thin', color: 'gray' },
          top: { style: 'thin', color: 'gray' },
          left: { style: 'thin', color: 'gray' },
          right: { style: 'thin', color: 'gray' },
        },
        font: {
          sz: 13,
          bold: true,
          //color: { rgb: '30839f' },
        },
        fill: {
          fgColor: { rgb: 'E3F2ED' },
        },
        alignment: { wrapText: true, horizontal: 'center', vertical: 'center' },
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
      mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: existsCount - 1 } });
      styleObject = {
        border: {
          top: { style: 'thin', color: 'gray' },
          left: { style: 'thin', color: 'gray' },
          right: { style: 'thin', color: 'gray' },
        },
      };
    }
    else if (option === 'search2') {
      mergesArray.push({ s: { r: index, c: 0 }, e: { r: index, c: existsCount - 1 } });
      styleObject = {
        border: {
          bottom: { style: 'thin', color: 'gray' },
          left: { style: 'thin', color: 'gray' },
          right: { style: 'thin', color: 'gray' },
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
    if (option === 'header' || option === 'header-two-three' || option === 'header-two') {
      if (option === 'header-two-three') {
        mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 2 } });
        mergesArray.push({ s: { r: index, c: 3 }, e: { r: index, c: 4 } });
        mergesArray.push({ s: { r: index, c: 5 }, e: { r: index, c: 6 } });
      }
      if (option === 'header-two') {
        mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 2 } });
      }
      styleObject = {
        border: {
          bottom: { style: 'thin', color: 'gray' },
          top: { style: 'thin', color: 'gray' },
          left: { style: 'thin', color: 'gray' },
          right: { style: 'thin', color: 'gray' },
        },
        fill: {
          fgColor: { rgb: 'FFFFDE7' },
        },
        alignment: { wrapText: true, horizontal: 'center', vertical: 'center' },
      };
    }
    if (option === 'data' || option === 'data-first') {
      styleObject = {
        border: {
          bottom: { style: 'thin', color: 'gray' },
          top: { style: 'thin', color: 'gray' },
          left: { style: 'thin', color: 'gray' },
          right: { style: 'thin', color: 'gray' },
        },
        alignment: { wrapText: true, horizontal: 'center', vertical: 'center' },
      };
    }

    data.map((subitem, subindex) => {
      var type = typeof subitem == 'number' ? 'n' : typeof subitem == 'boolean' ? 'b' : 'z';
      if (existsCount > subindex)
        if (option === 'data-first') {
          if (subindex === 0) {
            styleObject.fill = { fgColor: { rgb: 'FFFFDE7' } };
          }
          else {
            styleObject.fill = { fgColor: { rgb: 'FFFFFF' } };
          }

        }
        _workSheet[XLSX.utils.encode_cell({ r: index, c: subindex })] = { t: type, v: subitem, s: styleObject };
    });




    });
    _workSheet['!ref'] = XLSX.utils.encode_range(_range);
    return { data: _workSheet, mergesArray };
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

$(document).ready(function () {
    app = new Vue({
        el: "#app",
        data: {
            predicResult: true,
            isResponse: false,
            wantedResult: false,
            wantedResultTitleList1: [],
            wantedResultTitleList2: [],
            wantedResultList1: [],
            wantedResultList2: [],
            wantedResultDescList1: [],
            wantedResultDescList2: [],
            isUIResponse: false,
            isFetching: false,
            isPersonal: false,

            null_value: null,
            wrap_tab_toggle: {
                impact: true,
                importance: true,
                program: true,
                personal: true,
            },

            //희망업종
            searchTypes: [{name:"취업여부", value:"E"},{name:"급여구간", value:"S"},{name:"기업유형", value:"C"}],
            salaryTypes: [{name:"최저임금이하", value:0},{name:"최저임금~250만원", value:1},{name:"250만원~350만원", value:2},{name:"350만원~500만원", value:3},{name:"500만원이상", value:4}],
            comTypes: [{name:"대기업", value:3},{name:"중견기업", value:5},{name:"중소기업", value:6},{name:"국가 및 지방자치단체", value:1},{name:"공공기관 및 공기업", value:0},{name:"비영리법인", value:4},{name:"기타", value:2}],
            isSalaryType: false,
            isComType: false,
            selectedSearchType: null,

            selectedUniType: null,
            selectedSalaryType: null,
            selectedCompanyType: null,
            selectedCompanyTypeText: null,

            privatelicense_list: [],
            currentTab: null,
            isPersonalSearch: false,

            uniDeptList: [],
            admTypeList: [],
            excTypeList: [],

            classTypeByPersonal: 0,

            // 개인별 데이터
            dept: null,
            age: null,
            gradescore: null,
            nonsubjectcnt: null,
            awardcnt: null,
            license: null,
            parttime: null,
            admission: null,
            exchange: null,
            startupclubcnt: null,
            jobclubdate: null,
            langen: null,
            langenspeak: null,
            langcn: null,
            langjp: null,
            langko: null,
            capstone: null,
            jobprogramdate: null,
            jobprogramcnt: null,
            doublemajor: null,
            minor: null,
            club: null,
            field: null,
            gradescore1: null,
            gradescore2: null,
            gradescore3: null,
            gradescore4: null,
            majorscore: null,
            minorscore: null,

            classTypeByAll: 0,
            tmpUniTabs: _uniTabs,
            selectedUni: false,
        },
        methods: {
            excelExport: function () {
                var _this = this;
            },
            handleExport: function () {
                if (this.isResponse) {
                    this.excelExport();
                }
                else {
                    alert('예측 후 예측 결과 저장을 진행 해주시기 바랍니다.');
                }
            },
            handleSearchSubmit: function () {
                var _this = this;
                _this.isFetching = true;

                if (_this.tmpUniTabs.length == 0) {
                    alert('사용권한이 없습니다.');
                    _this.isFetching = false;
                    return false;
                }

                if (_this.selectedUniType == null) {
                    alert('대학 선택 후 검색 가능 합니다.');
                    _this.isFetching = false;
                    return false;
                }

                if (_this.isPersonalSearch) {
                    if (!this.selectedSearchType) {
                        alert('분석모델 선택 후 검색 가능 합니다.');
                        _this.isFetching = false;
                        return false;
                    }

                    if (!this.dept) {
                        alert('학과 선택 후 검색 가능 합니다.');
                        _this.isFetching = false;
                        return false;
                    }

                    //개인별 조회 인 경우
                    var _data = {};
                    _data['unitype'] = _this.selectedUniType;
                    _data['modeltype'] = _this.selectedSearchType;
                    _data['classtype'] = _this.classTypeByPersonal;

                    if (this.currentTab == 0) {
                        _data['dept'] = this.dept;
                        _data['admission'] = this.admission;
                        _data['exchange'] = this.exchange;
                        _data['age'] = this.age;
                        _data['gradescore'] = this.gradescore;
                        _data['nonsubjectcnt'] = this.nonsubjectcnt;
                        _data['awardcnt'] = this.awardcnt;
                        _data['license'] = this.license;
                        _data['parttime'] = this.parttime;
                        _data['startupclubcnt'] = this.startupclubcnt;
                        _data['jobclubdate'] = this.jobclubdate;
                        _data['jobprogramdate'] = this.jobprogramdate;
                        _data['jobprogramcnt'] = this.jobprogramcnt;
                        _data['capstone'] = this.capstone;
                        _data['langen'] = this.langen;
                        _data['langenspeak'] = this.langenspeak;
                        _data['langcn'] = this.langcn;
                        _data['langjp'] = this.langjp;
                        _data['langko'] = this.langko;
                    } else if (this.currentTab == 1) {
                        _data['dept'] = this.dept;
                        _data['age'] = this.age;
                        _data['gradescore'] = this.gradescore;
                        _data['nonsubjectcnt'] = this.nonsubjectcnt;
                        _data['awardcnt'] = this.awardcnt;
                        _data['license'] = this.license;
                        _data['doublemajor'] = this.doublemajor;
                        _data['minor'] = this.minor;
                        _data['majorscore'] = this.majorscore;
                        _data['minorscore'] = this.minorscore;
                        _data['field'] = this.field;
                        _data['club'] = this.club;
                        _data['gradescore1'] = this.gradescore1;
                        _data['gradescore2'] = this.gradescore2;
                        _data['gradescore3'] = this.gradescore3;
                        _data['gradescore4'] = this.gradescore4;
                    } else {
                        _data['dept'] = this.dept;
                        _data['age'] = this.age;
                        _data['gradescore'] = this.gradescore;
                        _data['nonsubjectcnt'] = this.nonsubjectcnt;
                        _data['awardcnt'] = this.awardcnt;
                        _data['license'] = this.license;
                        _data['majorscore'] = this.majorscore;
                        _data['minorscore'] = this.minorscore;
                        _data['gradescore1'] = this.gradescore1;
                        _data['gradescore2'] = this.gradescore2;
                    }

                    _this.getPersonalImpact(_data);

                } else {

                    if (!this.selectedSearchType) {
                        alert('분석모델 선택 후 검색 가능 합니다.');
                        _this.isFetching = false;
                        return false;
                    }

                    var _data = {}
                    _data['unitype'] = _this.selectedUniType;
                    _data['modeltype'] = _this.selectedSearchType;

                    $.ajax({
                        type: "GET",
                        url: "./json/getEmployment.json",
                        dataType: "text",
                        data: _data,
                        async: false,
                        success: function(data) {
                            var res = JSON.parse(data);
                            if (res.length == 0) {
                                alert('결과 데이터가 존재하지 않습니다.');
                            } else {
                                var emplImpData = res['IMP_PRED'];
                                var emplImpData2 = res['IMP_LOSS'];

                                if (_this.selectedSearchType == "E") {
                                    var emplInfData = res['INF'];
                                    setRenderBarChart("bar_chart", emplInfData.name, emplInfData.data, Highcharts)
                                } else if (_this.selectedSearchType == "S") {
                                    var emplInfData = res['INF'];
                                    //setRenderStackedBarChart("bar_chart", emplInfData.name, emplInfData.data5, emplInfData.data4, emplInfData.data3, emplInfData.data2, emplInfData.data1, Highcharts)
                                } else if (_this.selectedSearchType == "C") {
                                    var emplInfData = res['INF'];
                                    //setRenderStackedBarChart2("bar_chart", emplInfData.name, emplInfData.data3, emplInfData.data5, emplInfData.data1, emplInfData.data2, emplInfData.data7, emplInfData.data6, emplInfData.data4, Highcharts)
                                }

                                // 변수중요도
                                setRenderBarChartByColor("bar_color_chart", emplImpData.name, emplImpData.data, Highcharts, "변수값 변경에 따른 변수중요도")
                                setRenderBarChartByColor("bar_color_chart2", emplImpData2.name, emplImpData2.data, Highcharts, "변수추가에 따른 변수중요도")

                                // scatter 변수영향력 조회 getModelImpact
                                var classType = 0;
                                _this.infClasstype = 0;
                                if (_this.isComType) {
                                    classType = 3;
                                    _this.infComtype = 0;
                                }
                                _this.getModelImpact(classType);
                            }
                        }
                    });
                }
            },
            getPersonalImpact: function(data) {
                var _this = this;

                $.ajax({
                    type: "GET",
                    url: "./json/getPersonalImpact.json",
                    dataType: "text",
                    data: data,
                    async: false,
                    success: function(data) {
                        var res = JSON.parse(data);
                        if (res.length == 0) {
                            alert('결과 데이터가 존재하지 않습니다.');
                        } else {
                            var personalData = res['PERSONAL'];

                            // 개인 데이터 조회
                            setRenderColumnRangeChart("columnrange_chart", personalData.name, personalData.data, personalData.base, personalData.last, Highcharts)

                            // 개인데이터 정상적으로 입력 되어 있으면
                            _this.isPersonal = true;
                            _this.isFetching = false;
                        }
                    }
                });
            },
            getModelImpact: function(classType) {
                var _this = this;

                var _data = {};
                _data['unitype'] = _this.selectedUniType;
                _data['modeltype'] = _this.selectedSearchType;
                _data['classtype'] = classType;

                // Make json title
                var title = "";
                if (_this.selectedUniType == '531230002') {
                    title = "hy_";
                } else if (_this.selectedUniType == '530810001') {
                    title = "yn_";
                } else {
                    title = "yj_";
                }

                if (_this.selectedSearchType == "E") {
                    title += "empyn";
                } else if (_this.selectedSearchType == "S") {
                    title += "salary_"+classType;
                } else if (_this.selectedSearchType == "C") {
                    title += "comtype_"+classType;
                }

                $.ajax({
                    type: "GET",
                    url: "./json/"+title+".json",
                    dataType: "text",
                    data: _data,
                    async: true,
                    success: function(data) {
                        var res = JSON.parse(data);
                        if (res.length == 0) {
                            alert('결과 데이터가 존재하지 않습니다.');
                        } else {
                            var scatterCatData = res['INF_NM'];
                            var scatterData = res['INF_DATA'];

                            max = 18
                            if (_this.currentTab == 1) {
                                max = 15
                            } else if (_this.currentTab == 2) {
                                max = 9
                            }

                            // 변수영향력
                            setRenderScatterChart("scatter_chart", scatterCatData, scatterData, Highcharts, max)

                            // 학과별 취업프로그램/이수과목 검색 getDeptImpact
                            _this.getDeptImpact(_this.uniDeptList[0]);
                        }
                    }
                });
            },
            getDeptImpact: function(dept) {
                var _this = this;
                var _data = {};
                _data['unitype'] = _this.selectedUniType;
                _data['deptnm'] = dept;

                $.ajax({
                    type: "GET",
                    url: "./json/getDeptImpact.json",
                    dataType: "text",
                    data: _data,
                    async: true,
                    success: function(data) {
                        var res = JSON.parse(data);
                        if (res.length == 0) {
                            alert('결과 데이터가 존재하지 않습니다.');
                        } else {
                           var programData = res['PROGRAM'];

                           var unit = "%";
                           var titleX = "취업프로그램명";
                           var titleY = "참여율";
                           if (_this.currentTab != 0) {
                              unit = "";
                              titleX = "이수과목(학년)";
                              titleY = "학점";
                           }

                            // 프로그램 차트
                            setRenderBarChartByProgram("program_chart", programData.name, programData.data1, programData.data2, unit, titleX, titleY, Highcharts)
                            _this.isFetching = false;
                            _this.isResponse = true;
                        }
                    }
                });
            },
            tabClick: function(obj, val) {
                this.currentTab = val;
                this.selectedSearchType = null;
                this.isResponse = false;
                this.isPersonal = false;
                this.isPersonalSearch = false;
                this.selectedUniType = obj.value;
                this.getEmplUiCode(this.selectedUniType, '');
                this.handlePersonalInit();
            },
            handleWrapTabToggle: function(type) {
                this.wrap_tab_toggle[type] = !this.wrap_tab_toggle[type];
            },
            searchPerBtn: function(event) {
                this.handlePersonalInit();
                this.isPersonalSearch = true;
                this.isPersonal = false;
                this.isResponse = false;
            },
            searchAllBtn: function(event) {
                this.handlePersonalInit();
                this.isPersonalSearch = false;
                this.isPersonal = false;
                this.isResponse = false;
            },
            getEmplUiCode: function(uni, dept) {
                var _this = this;

                // 대학별 UI 조회
                var _data = {}
                _data['unitype'] = uni;
                _data['deptnm'] = dept;

                $.ajax({
                    type: "GET",
                    url: "./json/getEmplUICode.json",
                    dataType: "text",
                    data: _data,
                    success: function (data) {
                        var responseData = JSON.parse(data);

                        if (dept) {
                           for (key in responseData) {
                             target = _.find(_deptList, { value: key }).name;
                             _this[`${target}`] = responseData[key]
                           }
                        } else {
                            _this.uniDeptList = responseData["UNI_DEPT"];
                            _this.admTypeList = responseData["ADM_TYPE"];
                            _this.excTypeList = responseData["EXC_TYPE"];
                        }
                    },
                });
            },
            /**
            * @description number input 숫자체크 하는 validation function
            * @param {*} evt
            * @returns bool
            */
            isNumber: function (evt) {
                if (this.selectedCompany) {
                    this.companySearch = '';
                    this.selectedCompany = null;
                    this.isCompanyResultOpen = false;
                    this.companySearchResults = [];
                }

                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            /**
            * @description number input 숫자체크 하는 validation function
            * @param {*} evt
            * @returns bool
            */
            isOnlyNumber: function (evt) {
                if (this.selectedCompany) {
                    this.companySearch = '';
                    this.selectedCompany = null;
                    this.isCompanyResultOpen = false;
                    this.companySearchResults = [];
                }

                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode == 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
            handleDeptPersonal: function(event) {
                var dept = event.target.value;
                this.getEmplUiCode(this.selectedUniType, dept);
            },
            setPersonalData: function(data) {
                if (currentTab == 0) {

                } else if (currentTab == 1) {

                } else if (currentTab == 2) {

                }
            },
            handleInfClassType: function(event) {
                var classType = event.target.value;
                this.getModelImpact(classType);
            },
            handleClassTypeByPersonal: function(event) {
                this.classTypeByPersonal = event.target.value;
            },
            handleInfComType: function(event) {
                var classType = event.target.value;
                this.getModelImpact(classType);
            },
            handlePersonalInit: function() {
                this.dept = null,
                this.age = null,
                this.gradescore = null,
                this.nonsubjectcnt = null,
                this.awardcnt = null,
                this.license = null,
                this.parttime = null,
                this.admission = null,
                this.exchange = null,
                this.startupclubcnt = null,
                this.jobclubdate = null,
                this.langen = null,
                this.langenspeak = null,
                this.langcn = null,
                this.langjp = null,
                this.langko = null,
                this.capstone = null,
                this.jobprogramdate = null,
                this.jobprogramcnt = null,
                this.doublemajor = null,
                this.minor = null,
                this.club = null,
                this.field = null,
                this.gradescore1 = null,
                this.gradescore2 = null,
                this.gradescore3 = null,
                this.gradescore4 = null,
                this.majorscore = null,
                this.minorscore = null
            },
            handleDept: function(event) {
                var dept = event.target.value;
                this.getDeptImpact(dept);
            },
            validation: function (data) {
                var message = '';
                var tmp_message = ' 항목은 필수 항목 입니다.';
                if (this.currentTab == 0) {
                	if (!data['dept']) {
                		message = "학과" + tmp_message;
                	} else if (!data['admission']) {
                		message = "전공" + tmp_message;
                	} else if (!data['exchange']) {
                		message = "교류구분" + tmp_message;
                	} else if (!data['age']) {
                		message = "나이" + tmp_message;
                	} else if (!data['gradescore']) {
                		message = "학점" + tmp_message;
                	} else if (!data['nonsubjectcnt']) {
                		message = "비교과과정 참여횟수" + tmp_message;
                	} else if (!data['awardcnt']) {
                		message = "수상횟수" + tmp_message;
                	} else if (!data['license']) {
                		message = "자격증" + tmp_message;
                	} else if (!data['parttime']) {
                		message = "아르바이트" + tmp_message;
                	} else if (!data['startupclubcnt']) {
                		message = "창업동아리 참여횟수" + tmp_message;
                	} else if (!data['jobclubdate']) {
                		message = "취업동아리 참여기간" + tmp_message;
                	} else if (!data['jobprogramdate']) {
                		message = "취업프로그램 참여일수" + tmp_message;
                	} else if (!data['jobprogramcnt']) {
                		message = "취업프로그램 참여횟수" + tmp_message;
                	} else if (!data['capstone']) {
                		message = "캡스톤디자인수상" + tmp_message;
                	} else if (!data['langen']) {
                		message = "영어" + tmp_message;
                	} else if (!data['langenspeak']) {
                		message = "영어말하기" + tmp_message;
                	} else if (!data['langcn']) {
                		message = "중국어" + tmp_message;
                	} else if (!data['langjp']) {
                		message = "일본어" + tmp_message;
                	} else if (!data['langko']) {
                		message = "한국어" + tmp_message;
                	}
                } else if (this.currentTab == 1) {
                	if (!data['dept']) {
                		message = "학과" + tmp_message;
                	} else if (!data['age']) {
                		message = "나이" + tmp_message;
                	} else if (!data['gradescore']) {
                		message = "학점" + tmp_message;
                	} else if (!data['nonsubjectcnt']) {
                		message = "비교과과정 참여횟수" + tmp_message;
                	} else if (!data['awardcnt']) {
                		message = "수상횟수" + tmp_message;
                	} else if (!data[' license']) {
                   	message = "자격증" + tmp_message;
                    } else if (!data['doublemajor']) {
                		message = "복수전공" + tmp_message;
                	} else if (!data['minor']) {
                		message = "부전공" + tmp_message;
                	} else if (!data['majorscore']) {
                		message = "전공성적" + tmp_message;
                	} else if (!data['minorscore']) {
                		message = "교양성적" + tmp_message;
                	} else if (!data['field']) {
                		message = "현장실습" + tmp_message;
                	} else if (!data['club']) {
                		message = "동아리" + tmp_message;
                	} else if (!data['gradescore1']) {
                		message = "1학년성적" + tmp_message;
                	} else if (!data['gradescore2']) {
                		message = "2학년성적" + tmp_message;
                	} else if (!data['gradescore3']) {
                		message = "3학년성적" + tmp_message;
                	} else if (!data['gradescore4']) {
                		message = "4학년성적" + tmp_message;
                	}
                } else {
                	if (!data['dept']) {
                		message = "학과" + tmp_message;
                	} else if (!data['age']) {
                		message = "나이" + tmp_message;
                	} else if (!data['gradescore']) {
                		message = "학점" + tmp_message;
                	} else if (!data['nonsubjectcnt']) {
                		message = "비교과과정 참여횟수" + tmp_message;
                	} else if (!data['awardcnt']) {
                		message = "수상횟수" + tmp_message;
                	} else if (!data['license']) {
                		message = "자격증" + tmp_message;
                	} else if (!data['majorscore']) {
                		message = "전공성적" + tmp_message;
                	} else if (!data['minorscore']) {
                		message = "교양성적" + tmp_message;
                	} else if (!data['gradescore1']) {
                		message = "1학년성적" + tmp_message;
                	} else if (!data['gradescore2']) {
                		message = "2학년성적" + tmp_message;
                	}
                }

                return message;
            },
            helpInfo(event) {
                var targetDom = event.path[2].__vue__;
                if (event.type == "click") {
                    targetDom.isActive = true;
                } else {
                    targetDom.isActive = false;
                }
            },
        },
        created() {
            this.isUIResponse = true;
            this.selectedUni = false;

            // userType == "4" || userType == "9" ||  userType == "1" || userType == "2" || userType == "8" ||  (gSchcd == "53081000" && gOrgcd == "1") || (gSchcd == "53123000" && gOrgcd == "2") || (gSchcd == "73104000" && gOrgcd == "1")
            // 화면 생성 후 대학별 UI 조회
            if (userType == "1" || userType == "2" || userType == "8" || userType == "7") {
                this.selectedUniType = this.tmpUniTabs[0]['value'];
                this.getEmplUiCode(this.tmpUniTabs[0]['value'], '');
            } else {
                let uniCode = gSchcd + gOrgcd;
                this.tmpUniTabs = _uniTabs.filter(item => uniCode.includes(item.value));

                if (this.tmpUniTabs.length != 0) {
                    this.selectedUniType = this.tmpUniTabs[0]['value'];
                    this.getEmplUiCode(this.tmpUniTabs[0]['value'], '');
                    this.selectedUni = true;
                }else{
					alert('추가적인 학생 데이터를 제공한 학교에서 사용할 수 있는 화면입니다.');
				}
            }
        },
        watch: {
            isUIResponse: function (val) {
                if (val) {
                    $('#module0').waitMe('hide');
                }
                else {
                    run_waitMe($('#module0'), 1, 'bounce');
                }
            },
            isFetching: function (val) {
                var loading = 'bounce';
                if (val) {
                    run_waitMe($('#wrap_container'), 2, loading, "1");
                }
                else {
                    $('#wrap_container').waitMe('hide');
                }
            },
            selectedUniType: function(val) {
                if (val == null) {
                    this.currentTab = null;
                } else {
                     _uniTabs.forEach((item, index) => {
                        if (item.value == val) {
                            this.currentTab = index;
                        }
                    })
                }

                this.selectedSearchType = null;
                this.isResponse = false;
                this.isPersonal = false;
                this.isPersonalSearch = false;
                this.selectedUniType = val;
                this.getEmplUiCode(this.selectedUniType, '');
                this.handlePersonalInit();
            },
            selectedSearchType: function(val) {
                this.isResponse = false;
                this.isPersonal = false;
                this.isSalaryType = false;
                this.isComType = false;
                this.selectedSalaryType = null;
                this.selectedCompanyType = null;

                if (val == "S") {
                    this.isSalaryType = true;
                    this.classTypeByPersonal = 0;
                    this.classTypeByAll = 0;
                } else if (val == "C") {
                    this.isComType = true;
                    this.classTypeByPersonal = 3;
                    this.classTypeByAll = 3;
                } else {
                    this.classTypeByPersonal = 0;
                    this.classTypeByAll = 0;
                }
            },
        }
    });
});
