var app = null;
var _universityTypes = [
  { value: '전문대학', text: '전문대학' },
  { value: '대학', text: '대학' },
  { value: '대학원', text: '대학원' },
];

var uiCodeRawData = null;

var thisyear = new Date(Date.now()).getFullYear();
var _birthList = [];
for (let i = thisyear - 35; i < thisyear - 10; i++) {
  _birthList.push({ 'value': i, 'text': i })
}
var _indateList = [];
for (let i = thisyear - 30; i < thisyear - 1; i++) {
  _indateList.push({ 'value': i, 'text': i })
}
var _outdateList = [];
for (let i = thisyear - 5; i < thisyear; i++) {
  _outdateList.push({ 'value': i, 'text': i })
}
var _monthList = [];
for (let i = 1; i < 13; i++) {
  _monthList.push({ 'value': i, 'text': i })
}
var selectedBirth = thisyear - 26
var selectedIndate = thisyear - 7
var selectedOutdate = thisyear - 1

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
    if (option === 'header' || option === 'header-two-three' || option === 'header-two' || option === 'header-row') {
      if (option === 'header-two-three') {
        mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 2 } });
        mergesArray.push({ s: { r: index, c: 3 }, e: { r: index, c: 4 } });
        mergesArray.push({ s: { r: index, c: 5 }, e: { r: index, c: 6 } });
      }
      if (option === 'header-two') {
        mergesArray.push({ s: { r: index, c: 1 }, e: { r: index, c: 2 } });
      }
      if (option === 'header-row') {
        mergesArray.push({ s: { r: index, c: 0 }, e: { r: index+1, c: 0 } });
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
    else {

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

  $.ajax({
    type: "GET",
    url: "/swiss/cm/getPredUICode.do",
    dataType: "text",
    success: function (data) {
      //if(result.code === 'SUCCESS') {
      var responseData = JSON.parse(data);
      uiCodeRawData = responseData;
      var _license1 = _.map(arrayToObject(responseData, 'LICENSE_L'), function (item) {
        var splitItem = item.value.split('_');
        return { value: splitItem[1], text: { code: item.value, data: item.text } }
      });

      var _all_university = [];
      var _uni_dept = [];
      // var _all_subCode = [];
      _.map(_.keys(responseData.UNIVERSITY), function (key) {
        var nowTypeData = _.map(getJSONArray(responseData.UNIVERSITY[key]), function (item, index) {
          var splitCode = item.text.split('_');
          var unicode = splitCode[0] + '_' + splitCode[1];
          var uniname = item.value[1] == '본교' ? item.value[0] : item.value[0] + '(' + item.value[1] + ')';
          return {
            id: unicode,
            name: uniname,
          }
        });

        _all_university = _.concat(_all_university, nowTypeData);
        _all_university.sort(function(a, b){
            return (a.name).localeCompare(b.name);
        });
      });

            if(selectUcode!="undefined_undefined"){
          	  new_all_university = []
          	  _all_university.forEach(function (item, index) {
          		  if(selectUcode == item.id)
          			  new_all_university.push(item)
          		});
          	  _all_university = new_all_university
            }


      var _all_license = [];

      _.map(_.keys(responseData.LICENSE_M), function (key) {
        var nowLicenseData = _.map(responseData.LICENSE_M[key], function (item, index) {
          var values = item.split('_');
          return {
            id: values[0],
            name: values[1],
          }
        });
        _all_license = _.concat(_all_license, nowLicenseData);
      });

      //      _selectUcode = selectUcode;

      app = new Vue({
        el: "#app",
        components: {
            vuejsDatepicker
        },
        data: {
          predicResult: true,
          licenseTotalCount: null,
          isResponse: false,
          wantedResult: false,
          wantedResultTitleList1: [],
          wantedResultTitleList2: [],
          wantedResultList1: [],
          wantedResultList2: [],
          wantedResultDescList1: [],
          wantedResultDescList2: [],
          wantedResultChart1: {},
          wantedResultChart2: {},
          wantedResultChart3: {},
          wantedResultChart4: {},
          isUIResponse: false,
          isFetching: false,
          isOpenLicense: false,
          isHelpComSize: false,
          isHelpCompany: false,
          isHelpInfo: false,
          isUsageExporter: false,
          isBookmark: false,
          isBookmarkTitle: false,
          isBookmarkDetail: false,
          selectedComtype: [],
          selectedComind: [],

          //메뉴얼
          isSelectedManual: false,
          isManualStep1: true,
          isManualStep2: false,
          isManualStep3: false,
          isManualStep4: false,
          isManualStep5: false,
          isManualStep6: false,

          //전문대학/대학/대학원
          universityTypes: _universityTypes,
          selectedUniversityType: null,

          //대학검색
          universitys: _all_university,
          selectedUniversity: null,

          //전공분류
          department4: [],
          departmemt1List: _.map(arrayToObject(responseData, 'DEPARTMENT_L'), function (item) {
            var splitItem = item.value.split('_');
            return { value: splitItem[1], text: { code: item.value, data: item.text } }
          }),
          departmemt4List: [],
          selectedDepartmemt4: null,
          selectedDepartmemt4Text: null,
          uorgcode: null,
          null_value: null,
          uorgcodeList: [],
          dncode: "A",
          //편입여부
          transfer: "2",
          teach: "2",
          oversea: "B",
          internship: "2",

          //토익
          toeic: null,
          gradeScore: null,
          gradeScoreStandard: null,
          gradeScorePercent: null,

          //개인신상
          gender: null,
          inAge: null,
          outAge: null,
          highschoolAreaList: arrayToObject(responseData, 'HIGHSCHOOL_AREA'),
          selectedHighschoolArea: null,
          highschoolTypeList: arrayToObject(responseData, 'HIGHSCHOOL_TYPE'),
          selectedHighschoolType: null,
          birthList: _birthList,
          indateList: _indateList,
          outdateList: _outdateList,
          monthList: _monthList,
          birthyear: selectedBirth,
          birthmonth: 1,
          inyear: selectedIndate,
          inmonth: 3,
          outyear: selectedOutdate,
          outmonth: 2,
          birthList: _birthList,
          indateList: _indateList,
          outdateList: _outdateList,
          monthList: _monthList,

          //자격증
          license: [
            {
              license1List: _license1,
              selectedLicense1: null,
              selectedLicense1Text: null,
              license2List: [],
              selectedLicense2: null,
              selectedLicense2Text: null,
              license3List: _all_license,
              selectedLicense3: null,
              selectedLicense3Text: null,
            },
            {
              license1List: _license1,
              selectedLicense1: null,
              selectedLicense1Text: null,
              license2List: [],
              selectedLicense2: null,
              selectedLicense2Text: null,
              license3List: _all_license,
              selectedLicense3: null,
              selectedLicense3Text: null,
            },
            {
              license1List: _license1,
              selectedLicense1: null,
              selectedLicense1Text: null,
              license2List: [],
              selectedLicense2: null,
              selectedLicense2Text: null,
              license3List: _all_license,
              selectedLicense3: null,
              selectedLicense3Text: null,
            }
          ],
          licenseSearch: '',
          licenseSearchResults: [],

          //희망업종
          companySizes: arrayToObject(responseData, 'COMIND'),
          selectedCompanySize: null,
          selectedCompanySizeText: null,
          companyTypes: arrayToObject(responseData, 'COMTYPE'),
          selectedCompanyType: null,
          selectedCompanyTypeText: null,
          selectedDurationText: null,
          selectedSalaryText: null,
          wanted_duration: null,
          wanted_salary: null,

          companyList: arrayToObject(responseData, 'COMNM'),

          companySearch: '',
          companySearchResults: [],
          isCompanyResultOpen: false,
          selectedCompany: null,

          highschoolSearch: '',
          highschoolSearchResults: [],
          isHighschoolResultOpen: false,
          selectedHighschool: null,

          selectedLicense: null,
          isLicenseResultOpen: false,
          searchResult: null,
          wantedComtypeText: '',
          wantedComindText: '',
          wantedDurationText: '',
          wantedSalaryText: '',
          companyFindResult: null,
          chart1: [],
          chart2: [],
          chart3: [],
          chart3tmp: [],
          chart4: [],
          chartDesc1: '0',
          chartDesc2: '0',
          chartDesc3: '0',
          chartDesc4: '0',
          usageExporterType: [{'value':'1', 'text':'취업현황(조건검색)'}, {'value':'2', 'text':'취업현황(회사검색)'}, {'value':'3', 'text':'진로예측'}],
          usageExporterDate: [{'value':'1m', 'text':'1개월'}, {'value':'1w', 'text':'1주'}, {'value':'1d', 'text':'1일'}, {'value':'1h', 'text':'1시간'}],
          datepicker_lang: vdp_translation_ko.js,
          usageExporterTypeValue: "3",
          usageExporterDateValue: "1d",
          usageExporterStartDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          usageExporterEndDate: new Date(),
          bookMark_list: [],
          bookMark_filter_list: [],
          bookMark_detail: {},
          searchFilterText: '',
          searchFilterType: null,
          checkBookmark: false,
          bookmarkTitle: '',
          highschoolFindResult: null,
          isUserGroup: false,
        },
        methods: {
          excelExport: function () {
            var _this = this;
            var nowData = this.searchResult;
            var ws_name = '진로예측';
            var wb = new Workbook();

            var getSubtitle = (title) => {
              return ['subtitle', 13, title, '', '', '', '', '', '', '', '', '', '', '', ''];
            }
            var wsData = [];

            var rowEmpty = ['empty', 13, '', '', '', '', '', '', '', '', '', '', '', '', ''];
            wsData.push(rowEmpty);
            var titleRow = ['bigtitle', 13, '진로 예측', '', '', '', '', '', '', '', '', ''];
            wsData.push(titleRow);
            wsData.push(rowEmpty);

            //대학명
            var _optional = [];
            var lictotcnt = 0;
            var toeic = _this.toeic ? _this.toeic : 0;
            var license1 = _this.license[0].selectedLicense3Text ? _this.license[0].selectedLicense3Text : '';
            var license2 = _this.license[1].selectedLicense3Text ? _this.license[1].selectedLicense3Text : '';
            var license3 = _this.license[2].selectedLicense3Text ? _this.license[2].selectedLicense3Text : '';
            if (license1) lictotcnt += 1;
            if (license2) lictotcnt += 1;
            if (license3) lictotcnt += 1;
            var wanted_comtype = _this.wantedComtypeText ? _this.wantedComtypeText : '';
            var wanted_comind = _this.wantedComindText ? _this.wantedComindText : '';
            var wanted_duration = _this.wantedDurationText ? _this.wantedDurationText : '';
            var wanted_salary = _this.wantedSalaryText ? _this.wantedSalaryText : '';
            lictotcnt = _this.licenseTotalCount ? _this.licenseTotalCount : lictotcnt;

            var _selectedAllValue = [
              { seq: 1, name: '졸업학교', value: _this.selectedUniversity.name },
              { seq: 1, name: '전공학과', value: _this.selectedDepartmemt4.name },
              { seq: 1, name: '주간/야간', value: _this.dncode === 'A' ? '주간' : '야간' },
              { seq: 1, name: '입학년월', value: String(_this.inyear) + '년  ' + String(_this.inmonth) + '월' },
              { seq: 1, name: '졸업년월', value: String(_this.outyear) + '년  ' + String(_this.outmonth) + '월' },
              { seq: 1, name: '고등학교 지역', value: $("#sel_higharea option:selected").text().replace('\n', '').trim() },
              { seq: 1, name: '고등학교 유형', value: $("#sel_hightype option:selected").text().replace('\n', '').trim() },
              { seq: 2, name: '성별', value: _this.gender === '1' ? '남자' : '여자' },
              { seq: 2, name: '출생년월', value: String(_this.birthyear) + '년  ' + String(_this.birthmonth) + '월' },
              { seq: 3, name: '졸업 학점', value: _this.gradeScore },
              { seq: 3, name: '졸업학점 만점', value: _this.gradeScoreStandard },
              { seq: 3, name: '토익점수', value: _this.toeic ? _this.toeic : 0 },
              { seq: 3, name: '편입여부', value: _this.transfer === '1' ? 'Y' : 'N' },
              { seq: 3, name: '교직과정이수여부', value: _this.teach === '1' ? 'Y' : 'N' },
              { seq: 3, name: '해외연수 여부', value: _this.oversea === '1' ? 'Y' : 'N' },
              { seq: 3, name: '현장경험 여부', value: _this.inter === '1' ? 'Y' : 'N' },
              { seq: 4, name: '총 자격증 개수', value: lictotcnt },
              { seq: 4, name: '자격증1', value: license1 },
              { seq: 4, name: '자격증2', value: license2 },
              { seq: 4, name: '자격증3', value: license3 },
            ]

            var _optional = [
              { name: '기업유형', value: wanted_comtype },
              { name: '산업분류', value: wanted_comind },
              { name: '취업소요기간', value: wanted_duration },
              { name: '희망 급여', value: wanted_salary }
            ];

            var temp = '';
            var temp2 = '';
            _selectedAllValue.map((item, index) => {
              if (index != 0) {
                temp += ' / ';
              }
              temp += `${item.name}: ${item.value}`;
            })
            _optional.map((item, index) => {
              if (index != 0) {
                temp2 += ' / ';
              }
              temp2 += `${item.name}: ${item.value}`;
            })

            wsData.push(getSubtitle('▶ 검색 조건(기본)'));
            wsData.push(['header-row', 8, '학력정보', ..._selectedAllValue.filter(f => f.seq === 1).map(x => x.name)]);
            wsData.push(['data', 8, '', ..._selectedAllValue.filter(f => f.seq === 1).map(x => x.value)]);
            wsData.push(rowEmpty);
            wsData.push(['header-row', 3, '개인신상', ..._selectedAllValue.filter(f => f.seq === 2).map(x => x.name)]);
            wsData.push(['data', 3, '', ..._selectedAllValue.filter(f => f.seq === 2).map(x => x.value)]);
            wsData.push(rowEmpty);
            wsData.push(['header-row', 8, '학업 및 경험', ..._selectedAllValue.filter(f => f.seq === 3).map(x => x.name)]);
            wsData.push(['data', 8, '', ..._selectedAllValue.filter(f => f.seq === 3).map(x => x.value)]);
            wsData.push(rowEmpty);
            wsData.push(['header-row', 5, '자격정보', ..._selectedAllValue.filter(f => f.seq === 4).map(x => x.name)]);
            wsData.push(['data', 5, '', ..._selectedAllValue.filter(f => f.seq === 4).map(x => x.value)]);
            wsData.push(rowEmpty);
            wsData.push(getSubtitle('▶ 검색 조건(선택)'));
            wsData.push(['header-row', 5, '희망진로', ..._optional.map(x => x.name)]);
            wsData.push(['data', 5, '', ..._optional.map(x => x.value)]);
            wsData.push(rowEmpty);


            wsData.push(getSubtitle('▶ 기업 유형별 취업 가능성(%)'));
            wsData.push(['header', _this.chart1.length, ..._this.chart1.map(x => x.name)]);
            wsData.push(['data', _this.chart1.length, ..._this.chart1.map(x => parseFloat((x.y * 100).toFixed(2)))]);
            wsData.push(rowEmpty);

            wsData.push(getSubtitle('▶ 산업 분류별 취업 가능성(%)'));
            wsData.push(['header', _this.chart2.length, ..._this.chart2.map(x => x.name)]);
            wsData.push(['data', _this.chart2.length, ..._this.chart2.map(x => parseFloat((x.y * 100).toFixed(2)))]);
            wsData.push(rowEmpty);

            wsData.push(getSubtitle('▶ 취업까지 걸린 기간별 취업 가능성(%)'));
            wsData.push(['header', _this.chart3.length, ..._this.chart3.map(x => x.name)]);
            wsData.push(['data', _this.chart3.length, ..._this.chart3.map(x => x.y)]);
            wsData.push(rowEmpty);

            wsData.push(getSubtitle('▶ 급여별 취업 가능성(%)'));
            wsData.push(['header', _this.chart4.length, ..._this.chart4.map(x => x.name)]);
            wsData.push(['data', _this.chart4.length, ..._this.chart4.map(x => parseFloat((x.y * 100).toFixed(2)))]);
            wsData.push(rowEmpty);

            if (_this.wantedResult) {

              wsData.push(getSubtitle('▶ 학점/TOEIC/자격증 영향도(%)'));
              wsData.push(['header', 5, '구분', '희망 기업유형', '희망 산업분류', '희망 취업소요기간', '희망 급여']);
              wsData.push(['header', 5, '', wanted_comtype, wanted_comind, wanted_duration, wanted_salary]);

              var avgarr = ['', '', '', ''];
              var scorear = ['', '', '', ''];
              var toeicarr = ['', '', '', ''];
              var licarr = ['', '', '', ''];
              if (Object.keys(nowData.wanted_comtype).length > 0) {
                avgarr[0] = nowData.wanted_comtype.expected ? nowData.wanted_comtype.expected : '';
                scorear[0] = nowData.wanted_comtype.shap_gradescore ? nowData.wanted_comtype.shap_gradescore + nowData.wanted_comtype.expected : nowData.wanted_comtype.expected;
                toeicarr[0] = nowData.wanted_comtype.shap_toeic ? nowData.wanted_comtype.shap_toeic + nowData.wanted_comtype.expected : nowData.wanted_comtype.expected;
                licarr[0] = nowData.wanted_comtype.shap_license ? nowData.wanted_comtype.shap_license + nowData.wanted_comtype.expected : nowData.wanted_comtype.expected;
              }
              if (Object.keys(nowData.wanted_comind).length > 0) {
                avgarr[1] = nowData.wanted_comind.expected ? nowData.wanted_comind.expected : '';
                scorear[1] = nowData.wanted_comind.shap_gradescore ? nowData.wanted_comind.shap_gradescore + nowData.wanted_comind.expected : nowData.wanted_comind.expected;
                toeicarr[1] = nowData.wanted_comind.shap_toeic ? nowData.wanted_comind.shap_toeic + nowData.wanted_comind.expected : nowData.wanted_comind.expected;
                licarr[1] = nowData.wanted_comind.shap_license ? nowData.wanted_comind.shap_license + nowData.wanted_comind.expected : nowData.wanted_comind.expected;
              }
              if (Object.keys(nowData.wanted_duration).length > 0) {
                avgarr[2] = nowData.wanted_duration.expected ? nowData.wanted_duration.expected : '';
                scorear[2] = nowData.wanted_duration.shap_gradescore ? nowData.wanted_duration.shap_gradescore + nowData.wanted_duration.expected: nowData.wanted_duration.expected;
                toeicarr[2] = nowData.wanted_duration.shap_toeic ? nowData.wanted_duration.shap_toeic + nowData.wanted_duration.expected: nowData.wanted_duration.expected;
                licarr[2] = nowData.wanted_duration.shap_license ? nowData.wanted_duration.shap_license + nowData.wanted_duration.expected : nowData.wanted_duration.expected;
              }
              if (Object.keys(nowData.wanted_salary).length > 0) {
                avgarr[3] = nowData.wanted_salary.expected ? nowData.wanted_salary.expected : '';
                scorear[3] = nowData.wanted_salary.shap_gradescore ? nowData.wanted_salary.shap_gradescore + nowData.wanted_salary.expected: nowData.wanted_salary.expected;
                toeicarr[3] = nowData.wanted_salary.shap_toeic ? nowData.wanted_salary.shap_toeic + nowData.wanted_salary.expected: nowData.wanted_salary.expected;
                licarr[3] = nowData.wanted_salary.shap_license ? nowData.wanted_salary.shap_license + nowData.wanted_salary.expected: nowData.wanted_salary.expected;
              }
              wsData.push(['data', 5, '학과 평균 취업가능성'].concat(avgarr));
              wsData.push(['data', 5, '학점 반영 취업가능성'].concat(scorear));
              if(toeic > 0){
                wsData.push(['data', 5, 'TOEIC 반영 취업가능성'].concat(toeicarr));
              }
              if(lictotcnt > 0){
                wsData.push(['data', 5, '자격증 반영 취업가능성'].concat(licarr));
              }
            }
            var _sheet = json_to_sheet(wsData);
            var ws = _sheet.data;

            let objectMaxLength = [];
            let startRow = 3;

            for (let i = startRow; i < wsData.length; i++) {
              let value = Object.values(wsData[i]);
              if (value.length > 2) {
                  for (let j = 2; j < value.length; j++) {
                    tmpLength = value[j].length ? value[j].length * 2 : 20;
                    objectMaxLength[j] = objectMaxLength[j] >= tmpLength ? objectMaxLength[j] : tmpLength;
                  }
              }
            }

            var cols = []
            for (var i = 2; i < objectMaxLength.length; i++) {
                cols.push({wch: objectMaxLength[i]})
            }

            ws['!cols'] = cols;
            ws['!merges'] = _sheet.mergesArray;
            wb.SheetNames.push(ws_name);
            wb.Sheets[ws_name] = ws;
            var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });
            var _date = moment().format('YYYYMMDD'); //moment().format('YYYYMMDDHHmm');
            saveAs(new Blob([s2ab(wbout)], { type: 'application/octet-stream' }), ws_name + '_' + _date + '.xlsx');
          },
          handleExport: function () {
            if (this.isResponse) {
              this.excelExport();
            }
            else {
              alert('예측 후 예측 결과 저장을 진행 해주시기 바랍니다.');
            }
          },

          //대학타입 선택 (전문대학/대학/대학원)
          handleUniversityType: function () {
            var _this = this;
            //var subCode = [];
            if (_this.selectedUniversityType != null && _this.selectedUniversityType != 'null') {
              _this.selectedUniversity = null;
              var universityRawData = responseData['UNIVERSITY'];

              if (_.has(universityRawData, _this.selectedUniversityType)) {
                var temp = _.map(getJSONArray(universityRawData[_this.selectedUniversityType]), function (item, index) {
                  var splitCode = item.text.split('_');
                  var unicode = splitCode[0] + '_' + splitCode[1];
                  var uniname = item.value[1] == '본교' ? item.value[0] : item.value[0] + '(' + item.value[1] + ')';
                  return {
                    id: unicode,
                    name: uniname,
                  }
                });


                _this.universitys = temp;
              }
              //_this.uorgcodeList = _.sortBy(subCode, 'code');
            }
            else {
              //_this.uorgcodeList = _all_subCode;
              _this.universitys = _all_university;
              _this.selectedUniversity = null;
              _this.uorgcode = null;
            }
          },

          /**
          * @description 자격증 조회 event
          */
          licenseSearchOnSubmit: function () {
            var searchText = this.licenseSearch;
            if (searchText.length > 0) {
              var findLicenres = _all_license.filter(item => (item.name).indexOf(searchText) != -1);

              if (findLicenres.length == 0) {
                alert('일치하는 이름의 자격증이 없습니다.');
                this.selectedLicense = null;
                this.isLicenseResultOpen = false;
                this.licenseSearchResults = [];
              } else {
                this.isLicenseResultOpen = true;
                findLicenres = charSortByArray(findLicenres);
                this.licenseSearchResults = findLicenres;
              }
            }
            else {
              alert('검색할 자격증을 작성 하셔야 합니다.');
              this.selectedLicense = null;
              this.isLicenseResultOpen = false;
              this.licenseSearchResults = [];
            }
          },
          /**
           * @description 자격증 선택 시 발생 event
           * @param {*} selectValue
           */
          handleSelectLicense: function (selectValue) {
            this.licenseSearch = selectValue.name;
            this.selectedLicense = selectValue;
            this.isLicenseResultOpen = false;
            this.licenseSearchResults = [];
          },

          confirmLicense: function () {
            if (this.selectedLicense == null) {
                var text = '자격증이 선택되지 않았습니다.\n\n'+
                            '[선택 및 적용방법]\n'+
                            '1. 자격증 명(일부)을 입력 후 [돋보기 버튼]을 클릭\n'+
                            '2. 검색된 자격증 리스트 중에서 입력할 자격증을 선택\n'+
                            '3. [확인]버튼을 눌러서 적용';

                alert(text)
                return false;
            }

            if (this.license[0].selectedLicense3 == this.selectedLicense
                || this.license[1].selectedLicense3 == this.selectedLicense
                || this.license[2].selectedLicense3 == this.selectedLicense) {

                alert('중복된 자격증이 존재합니다.')
                return false;
            }

            if (this.license[0].selectedLicense3 == null) {
              this.license[0].selectedLicense3 = this.selectedLicense;
              this.license[0].selectedLicense3Text = this.selectedLicense.name;
              this.licenseSearchInit();
            } else if (this.license[1].selectedLicense3 == null) {
              this.license[1].selectedLicense3 = this.selectedLicense;
              this.license[1].selectedLicense3Text = this.selectedLicense.name;
              this.licenseSearchInit();
            } else if (this.license[2].selectedLicense3 == null) {
              this.license[2].selectedLicense3 = this.selectedLicense;
              this.license[2].selectedLicense3Text = this.selectedLicense.name;
              this.licenseSearchInit();
            } else {
              alert('자격증 삭제 후 입력 가능합니다.');
            }
          },

          licenseInit: function (key) {
            if (key == 0) {
              this.license[0].selectedLicense3 = null;
            } else if (key == 1) {
              this.license[1].selectedLicense3 = null;
            } else if (key == 2) {
              this.license[2].selectedLicense3 = null;
            }
          },

          handleLicense1: function (key) {
            var _this = this;
            this.license[key].selectedLicense1Text = null;
            this.license[key].license2List = [];
            this.license[key].selectedLicense2 = null;
            this.license[key].license3List = [];
            this.license[key].selectedLicense3 = null;

            var _text = '';

            if (this.license[key].selectedLicense1) {
              _text = this.license[key].selectedLicense1.code.split('_')[1];
              var _result = [];
              //arrayToObject(responseData, 'DEPARTMENT_M');
              var _license2 = _.map(arrayToObject(responseData, 'LICENSE_M'), function (item) { return { value: item.value, text: { code: item.value, data: item.text } } })
              if (this.license[key].selectedLicense1) {
                _.map(this.license[key].selectedLicense1.data, function (item) {
                  var splitItem = item.split('_');
                  var nowData = _.find(_license2, { value: item });
                  nowData.value = splitItem[1];

                  _result.push(nowData);
                })
              }
              this.license[key].license2List = _result;
            } else {
              this.license[key].license3List = _all_license;
            }
            setTimeout(function () {
              _this.license[key].selectedLicense1Text = _text;
            }, 1000);
          },

          handleLicense2: function (key) {
            var _this = this;
            this.license[key].selectedLicense2Text = null;
            this.license[key].license3List = [];
            this.license[key].selectedLicense3 = null;

            var _text = '';

            if (this.license[key].selectedLicense2) {
              _text = this.license[key].selectedLicense2.code.split('_')[1];
              var _result = [];
              var _license3 = _.map(this.license[key].selectedLicense2.data, function (item) {
                var splitItem = item.split('_');
                return { name: splitItem[1], id: splitItem[0] };
              });
              this.license[key].license3List = _license3;
            }
            else {
              this.license[key].license3List = _all_license;
            }
            setTimeout(function () {
              _this.license[key].selectedLicense2Text = _text;
            }, 1000);
          },

          /**
          * @description 자격증 조회 초기화.
          */
          licenseSearchInit: function () {
            this.selectedLicense = null;
            this.licenseSearch = "";
          },

          validation: function () {
            var result = true;
            var message = ' 항목은 필수 항목 입니다.';
            var vaild = '';
            if (!this.selectedUniversity) {
              return { result: false, message: '최종 졸업 학교를 선택하세요.', data: null };
            }

            var unicode = this.selectedUniversity.id.split('_');
            var ucode = unicode[0];
            var uorgcode = unicode[1];
            var deptcd = this.selectedDepartmemt4;
            var higharea = this.selectedHighschoolArea ? this.selectedHighschoolArea.value : '';
            var hightype = this.selectedHighschoolType ? this.selectedHighschoolType.value : '';
            var sex = this.gender;
            var birth = String(this.birthyear) + String(this.birthmonth).lpad(2, "0");
            var inage = String(this.inyear) + String(this.inmonth).lpad(2, "0");
            var outage = String(this.outyear) + String(this.outmonth).lpad(2, "0");
            var transfer = this.transfer;
            var teach = this.teach;
            var oversea = this.oversea;
            var inter = this.internship;
            var gscore = this.gradeScore;
            var gstandard = this.gradeScoreStandard;
            var dncode = this.dncode;
            var birthday = this.birthday;

            if (!deptcd) {
              return { result: false, message: '졸업 학과를 선택하세요.', data: null };
            }

            if (this.toeic) {
              if (parseFloat(this.toeic) >= 0) {
                result = true;
              } else {
                return { result: false, message: '토익점수는 숫자로 입력하세요.', data: [] };
              }
            }

            if (gscore) {
              if (parseFloat(gscore) >= 0) {
                result = true;
              } else {
                return { result: false, message: '학점은 숫자로 입력하세요.', data: [] };
              }
            }

            if (gstandard) {
              if (parseFloat(gstandard) >= 0) {
                result = true;
              } else {
                return { result: false, message: '학점만점은 숫자로 입력하세요.', data: [] };
              }
            }

            if (this.licenseTotalCount) {
              if (parseInt(this.licenseTotalCount) >= 0) {
                result = true;
              } else {
                return { result: false, message: '총 자격증 개수는 숫자로 입력하세요.', data: [] };
              }
            }

            var arrayRequired = [
              { code: 'SCHCD', value: ucode }
              , { code: 'ORGCD', value: uorgcode }
              , { code: 'DEPTCD', value: deptcd.id }
              , { code: 'highschool_area', value: higharea }
              , { code: 'highschool_type', value: hightype }
              , { code: 'SEXCD', value: sex }
              , { code: 'birthym', value: birth }
              , { code: 'inym', value: inage }
              , { code: 'outym', value: outage }
              , { code: 'TRANSFERYM', value: transfer }
              , { code: 'TEACHCERTIYN', value: teach }
              , { code: 'overseacode', value: oversea }
              , { code: 'INTERNSHIPYN', value: inter }
              , { code: 'gscore', value: parseFloat(gscore) }
              , { code: 'gstandard', value: parseFloat(gstandard) }
              , { code: 'dncode', value: dncode }
            ];

            if (!ucode) {
              vaild = '대학교' + message;
            }
            else if (!uorgcode) {
              vaild = '본분교' + message;
            }
            else if (!deptcd) {
              vaild = '학과' + message;
            }
            else if (!dncode) {
              vaild = '주간/야간을 선택해 주세요.';
            }
            else if (!higharea) {
              vaild = '고등학교 지역' + message;
            }
            else if (!hightype) {
              vaild = '고등학교 유형' + message;
            }
            else if (!sex) {
              vaild = '성별을 선택해 주세요.';
            }
            else if (!gscore) {
              vaild = '졸업 학점을 입력해 주세요.';
            }
            else if (!gstandard) {
              vaild = '졸업학점만점을 입력해 주세요.';
            }
            else if (!birth) {
              vaild = '출생년월' + message;
            }
            else if (!inage) {
              vaild = '입학년월' + message;
            }
            else if (!outage) {
              vaild = '졸업년월' + message;
            }
            else if (!transfer) {
              vaild = '편입여부' + message;
            }
            else if (!teach) {
              vaild = '교직이수여부' + message;
            }
            else if (!oversea) {
              vaild = '해외 경험 여부' + message;
            }
            else if (!inter) {
              vaild = '현장체험 여부' + message;
            }


            var data = {};

            if (vaild != '') {
              result = false;
              message = vaild;
            }
            else {
              if (birth > inage || birth > outage) {
                message = '출생년월을 정확하게 입력하세요.'
                result = false;
              }
              else if (inage > outage) {
                message = '입학년월을 정확하게 입력하세요.'
                result = false;
              }
              else {
                _.map(arrayRequired, function (item) {
                  data[item.code] = item.value;
                })
              }


            }

            //필수 아님.
            var toeic = this.toeic ? parseInt(this.toeic) : 0;
            var licensecd1 = this.license[0].selectedLicense3;
            var licensecd2 = this.license[1].selectedLicense3;
            var licensecd3 = this.license[2].selectedLicense3;
            var wanted_comtype = this.selectedCompanyTypeText;
            var wanted_comind = this.selectedCompanySizeText;
            var wanted_duration = this.wanted_duration == "null"? null :  this.wanted_duration;
            var wanted_salary = this.wanted_salary == "" ? null : this.wanted_salary;
            var selectedDuration = '';
            var selectedSalary = '';

            if (wanted_duration) {
              if (wanted_duration == 'DU') {
                this.selectedDurationText = '졸업12개월전~졸업';
                selectedDuration = 'DU';
              } else if (wanted_duration == 'TH') {
                this.selectedDurationText = '졸업~3개월';
                selectedDuration = 'TH';
              } else if (wanted_duration == 'SI') {
                this.selectedDurationText = '4개월~6개월';
                selectedDuration = 'SI';
              } else if (wanted_duration == 'NI') {
                this.selectedDurationText = '7개월~9개월';
                selectedDuration = 'NI';
              } else if (wanted_duration == 'TW') {
                this.selectedDurationText = '10개월~12개월';
                selectedDuration = 'TW';
              } else if (wanted_duration == 'OY') {
                this.selectedDurationText = '13개월~24개월';
                selectedDuration = 'OY';
              } else {
                this.selectedDurationText = '입학전';
                selectedDuration = 'BU';
              }
            }
            if (wanted_salary) {
              var temp = parseFloat(wanted_salary)
              if (temp < 179) {
                this.selectedSalaryText = '최저임금이하';
                selectedSalary = 'A';
              } else if (179 < temp && temp <= 200) {
                this.selectedSalaryText = '최저임금~200만원';
                selectedSalary = 'B';
              } else if (200 < temp && temp <= 230) {
                this.selectedSalaryText = '200만원~230만원';
                selectedSalary = 'C';
              } else if (230 < temp && temp <= 260) {
                this.selectedSalaryText = '230만원~260만원';
                selectedSalary = 'D';
              } else if (260 < temp && temp <= 290) {
                this.selectedSalaryText = '260만원~290만원';
                selectedSalary = 'E';
              } else if (290 < temp && temp <= 320) {
                this.selectedSalaryText = '290만원~320만원';
                selectedSalary = 'F';
              } else if (320 < temp && temp <= 350) {
                this.selectedSalaryText = '320만원~350만원';
                selectedSalary = 'G';
              } else if (350 < temp && temp <= 400) {
                this.selectedSalaryText = '350만원~400만원';
                selectedSalary = 'H';
              } else if (400 < temp && temp <= 500) {
                this.selectedSalaryText = '400만원~500만원';
                selectedSalary = 'I';
              } else {
                this.selectedSalaryText = '500만원 이상';
                selectedSalary = 'J';
              }
            }

            data['TOEIC'] = toeic;
            if (licensecd1) {
              data['liccd1'] = licensecd1.id;
              data['licnm1'] = licensecd1.name;
            }
            if (licensecd2) {
              data['liccd2'] = licensecd2.id;
              data['licnm2'] = licensecd2.name;
            }
            if (licensecd3) {
              data['liccd3'] = licensecd3.id;
              data['licnm3'] = licensecd3.name;
            }
            if (wanted_comtype) {
              data['wanted_comtype'] = this.selectedCompanyType.value;
            }
            if (wanted_comind) {
              data['wanted_comind'] = this.selectedCompanySize.value;
            }
            if (wanted_duration) {
              data['wanted_duration'] = selectedDuration;
            }
            if (wanted_salary) {
              data['wanted_salary'] = selectedSalary;
            }
            data['tcnt'] = this.licenseTotalCount ? parseInt(this.licenseTotalCount) : 0;

            return { result: result, message: message, data: data };
            //return {result: true, message: message, data: data};
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
              return false;
            } else {
              return true;
            }
          },
          isNumberByReplace: function(evt) {
            if (evt.key.match(/[^0-9]/g)) {
              evt.target.value =  evt.target.value.replace(/[^0-9]/g, '');
              this.licenseTotalCount = evt.target.value.replace(/[^0-9]/g, '');
            }
          },

          setScorePercent: function () {
            const num = this.gradeScore / this.gradeScoreStandard * 100;
            if (!isFinite(num)) {
              this.gradeScorePercent = null;
            } else {
              var scorePer = Math.round(num * 10) / 10;
              if (scorePer > 100) {
                alert("학점은 학점만점을 초과할 수 없습니다.");
                this.gradeScorePercent = null;
                this.gradeScore = null;
              } else {
                this.gradeScorePercent = Math.round(num * 10) / 10;
              }
            }
          },

          handleSearchSubmit: function () {
            //this.isResponse = true;
            var validationResult = this.validation();
            if (!validationResult.result) {
              alert(validationResult.message);
              return false;
            }

            // validation 후 즐겨찾기 체크
            if (this.checkBookmark) {
                this.isResponse = false;
                this.isBookmarkTitle = true;
                this.bookmarkTitle = '';
            } else {
                this.getSearchResult(validationResult);
            }
          },
         /**
          * @description 즐겨찾기 저장 후 예측 조회
          */
          handleSearchSubmitByBookmark: function (userid) {
            var _this = this;
            var validationResult = this.validation();
            if (!validationResult.result) {
              alert(validationResult.message);
              return false;
            }

            // 즐겨찾기 저장
            var _validata = validationResult.data;
            var _data = {};
			_data['index'] = 0;

            var tmpTitle = this.bookmarkTitle;
            _data['title'] = tmpTitle.split(' ').join('_');
            _data['schcd'] = _validata['SCHCD'];
			_data['schnm'] = this.selectedUniversity.name;
			_data['orgcd'] = _validata['ORGCD'];
            _data['deptcd'] = _validata['DEPTCD'];
			_data['deptnm'] = this.selectedDepartmemt4.name;
			_data['dncode'] = _validata['dncode'];
            _data['highschool_area'] = _validata['highschool_area'];
			_data['highschool_area_nm'] = this.selectedHighschoolArea.text;
            _data['highschool_type'] = _validata['highschool_type'];
			_data['highschool_type_nm'] = this.selectedHighschoolType.text;
            _data['sexcd'] = _validata['SEXCD'];
            _data['birthym'] = _validata['birthym'];
            _data['inym'] = _validata['inym'];
            _data['outym'] = _validata['outym'];
            _data['transferym'] = _validata['TRANSFERYM'];
            _data['teachcertiyn'] = _validata['TEACHCERTIYN'];
            _data['overseacode'] = _validata['overseacode'];
            _data['internshipyn'] = _validata['INTERNSHIPYN'];
            _data['toeic'] = _validata['TOEIC'];
            _data['gscore'] = _validata['gscore'];
            _data['gstandard'] = _validata['gstandard'];
            _data['liccd1'] = _validata['liccd1'] ? _validata['liccd1'] : null;
            _data['licnm1'] = _validata['licnm1'] ? _validata['licnm1'] : null;
            _data['liccd2'] = _validata['liccd2'] ? _validata['liccd2'] : null;
            _data['licnm2'] = _validata['licnm2'] ? _validata['licnm2'] : null;
            _data['liccd3'] = _validata['liccd3'] ? _validata['liccd3'] : null;
            _data['licnm3'] = _validata['licnm3'] ? _validata['licnm3'] : null;
            _data['tcnt'] = _validata['tcnt'];
            _data['wanted_comtype'] = _validata['wanted_comtype'] ? _validata['wanted_comtype'] : null;
            _data['wanted_comtype_nm'] = this.selectedCompanyType ? this.selectedCompanyType.text : null;
            _data['wanted_comind'] = _validata['wanted_comind'] ? _validata['wanted_comind'] : null;
            _data['wanted_comind_nm'] = this.selectedCompanySize ? this.selectedCompanySize.text : null;
            _data['wanted_duration'] = this.wanted_duration ? this.wanted_duration : null;
            _data['wanted_salary'] = this.wanted_salary ? this.wanted_salary : null;
            _data['create_id'] = userid;

           $.ajax({
              type: "GET",
              url: "/swiss/cm/insertBookmark.do",
              dataType: "text",
              data: _data,
              success: function (data) {
                var res = JSON.parse(data);
                if (res.code == 'FAIL') {
                    alert(res.message)
                }

                _this.getSearchResult(validationResult);
                _this.isBookmarkTitle = false;
				_this.checkBookmark = false;
              }
            });
          },

          /**
           * @description 예측 조회
           */
          getSearchResult: function(validationResult) {
            var _this = this;
            var _data = validationResult.data;
            _this.wantedResultTitleList1 = [];
            _this.wantedResultTitleList2 = [];
            _this.wantedResultList1 = [];
            _this.wantedResultList2 = [];
            _this.wantedResultDescList1 = [];
            _this.wantedResultDescList2 = [];
            _this.wantedResultChart1 = {};
            _this.wantedResultChart2 = {};
            _this.wantedResultChart3 = {};
            _this.wantedResultChart4 = {};
            _this.isFetching = true;
            _this.selectedComtype = [];
            _this.selectedComind = [];
            _this.chartDesc1 = '0';
            _this.chartDesc2 = '0';
            _this.chartDesc3 = '0';
            _this.chartDesc4 = '0';


            var makeDesc = function (avg, score, toeic, license) {
              if (avg == undefined && score == undefined && toeic == undefined && license == undefined) {
                return [];
              }

              var gradescore = (avg + score) > 100 ? (100 - avg) : (avg + score) < 0 ? -avg : score;

              var result = { 'avg': avg.toFixed(2), 'grade': gradescore.toFixed(2) };
              if (_data['TOEIC'] != 0) {
                var toeicscore = (avg + toeic) > 100 ? (100 - avg) : (avg + toeic) < 0 ? -avg : toeic;
                result['toeic'] = toeicscore.toFixed(2);
              }

              if (_data['liccd1'] || _data['liccd2'] || _data['liccd2']) {
                var licensescore = (avg + license) > 100 ? (100 - avg) : (avg + license) < 0 ? -avg : license;
                result['license'] = licensescore.toFixed(2);
              }

              return result;
            }

            var getTop3Data = function (data, keyName = '') {
              var top3Data = data;
              return _.map(top3Data, function (item) {
                if (keyName != '') {
                  if (item.name == keyName) {
                    item.sliced = true;
                    item.selected = true;
                  }
                }

                return item;
              })
            }
            if (_this.selectedCompanyTypeText) {
              _this.wantedResultTitleList1.push('희망 기업유형');
              _this.wantedResultList1.push(_this.selectedCompanyTypeText);
            }
            if (_this.selectedCompanySizeText) {
              _this.wantedResultTitleList1.push('희망 산업분류');
              _this.wantedResultList1.push(_this.selectedCompanySizeText);
            }
            if (_this.wanted_duration) {
              if (_this.wantedResultTitleList1.length == 2) {
                _this.wantedResultTitleList2.push('희망 취업기간');
                _this.wantedResultList2.push(_this.selectedDurationText);

              } else {
                _this.wantedResultTitleList1.push('희망 취업기간');
                _this.wantedResultList1.push(_this.selectedDurationText);
              }
            }
            if (_this.wanted_salary) {
              if (_this.wantedResultTitleList1.length == 2) {
                _this.wantedResultTitleList2.push('희망 급여');
                _this.wantedResultList2.push(_this.selectedSalaryText);
              } else {
                _this.wantedResultTitleList1.push('희망 급여');
                _this.wantedResultList1.push(_this.selectedSalaryText);
              }
            }
            $.ajax({
              type: "GET",
              url: "/swiss/cm/prediction.do",
              dataType: "text",
              data: _data,
              beforeSend: function (xhr) {
                   xhr.setRequestHeader("username", userid+"_"+userType);
              },
              success: function (data) {
                var result = {};
                if (data.startsWith('{"Result"'))
                  result = JSON.parse(data).Result;
                else
                  result = { 'code': 'FAIL', 'message': data };
                if (result.code === 'SUCCESS') {
                  _this.predicResult = true;
                  _this.isFetching = false;
                  _this.isResponse = true;

                  var responseData = JSON.parse(data).Data;
                  _this.searchResult = responseData;

                  _this.wantedResult = (Object.keys(responseData.wanted_comtype).length > 0 || Object.keys(responseData.wanted_comind).length > 0
                    || Object.keys(responseData.wanted_duration).length > 0 || Object.keys(responseData.wanted_salary).length > 0) ? true : false;

                  var _selectedCompanyTypeText = '';
                  var _selectedCompanySizeText = '';
                  var _selectedDurationText = _this.selectedDurationText;
                  var _selectedSalaryText = _this.selectedSalaryText;
                  if (_this.selectedCompanySize) {
                      _selectedCompanySizeText = _this.selectedCompanySize.text;
                      _this.selectedComind.push({'name':_this.selectedCompanySize.text, 'value':_this.selectedCompanySize.value})
                  }

                  if (_this.selectedCompanyType) {
                      _selectedCompanyTypeText = _this.selectedCompanyType.text;
                      _this.selectedComtype.push({'name':_this.selectedCompanyType.text, 'value':_this.selectedCompanyType.value})
                  }
                  _this.wantedComtypeText = _selectedCompanyTypeText;
                  _this.wantedComindText = _selectedCompanySizeText;
                  _this.wantedDurationText = _selectedDurationText;
                  _this.wantedSalaryText = _selectedSalaryText;
                  var chart1 = getColumnChartSeries(getSeriesDataAndSort(responseData.comtype, true), _selectedCompanyTypeText);
                  _this.chart1 = chart1;

                  //setRenderColumnChart('comtype_chart', chart1, Highcharts);
                  setRenderPieChartMultiClick('comtype_pie_chart', getTop3Data(chart1, _selectedCompanyTypeText), Highcharts);
                  for (var i = 0; i < _this.chart1.length; i++) {
                    if ('selected' in _this.chart1[i]) {
                      _this.chartDesc1 = (_this.chart1[i]['y']*100).toFixed(2)
                    }
                  }

                  var chart2 = getColumnChartSeries(getSeriesDataAndSort(responseData.comind, true), _selectedCompanySizeText);
                  _this.chart2 = chart2;
                  //setRenderColumnChart('comind_chart', chart2, Highcharts);
                  setRenderPieChartMultiClick('comind_pie_chart', getTop3Data(chart2, _selectedCompanySizeText), Highcharts);
                  for (var i = 0; i < _this.chart2.length; i++) {
                    if ('selected' in _this.chart2[i]) {
                      _this.chartDesc2 = (_this.chart2[i]['y']*100).toFixed(2)
                    }
                  }

                  var chart3 = getColumnChartSeries(getSeriesDataAndSort(responseData.duration, true), _selectedDurationText);
                  _this.chart3 = chart3;

                  //setRenderColumnChart('duration_chart', chart2, Highcharts);
                  setRenderPieChartDuration('duration_pie_chart', getTop3Data(chart3, _selectedDurationText), Highcharts);

                  _this.chart3tmp = chart3;
                  for (var i = 0; i < durationChart.series[0].points.length; i++) {
                    _this.chart3tmp[i]['y'] = (durationChart.series[0].points[i].percentage).toFixed(2)
                    if (durationChart.series[0].points[i].selected) {
                      _this.chartDesc3 = _this.chart3tmp[i]['y']
                    }
                  }

                  var chart4 = getColumnChartSeries(getSeriesDataAndSort(responseData.salary, true), _selectedSalaryText);
                  _this.chart4 = chart4;
                  //setRenderColumnChart('salary_chart', chart2, Highcharts);
                  setRenderPieChart2('salary_pie_chart', getTop3Data(chart4, _selectedSalaryText), Highcharts);
                  for (var i = 0; i < _this.chart4.length; i++) {
                    if ('selected' in _this.chart4[i]) {
                      _this.chartDesc4 = (_this.chart4[i]['y']*100).toFixed(2)
                    }
                  }

                  if (_this.wantedResult) {
                    for (var i = 0; i < _this.wantedResultTitleList1.length; i++) {
                      var data = responseData.wanted_comtype;
                      _this.wantedResultDescList1[i] = makeDesc(responseData.wanted_comtype.expected, responseData.wanted_comtype.shap_gradescore,
                        responseData.wanted_comtype.shap_toeic, responseData.wanted_comtype.shap_license);

                        _this.wantedResultChart1 = _this.wantedResultDescList1[i];
                      if (_this.wantedResultTitleList1[i] == '희망 산업분류') {
                        data = responseData.wanted_comind;
                        _this.wantedResultDescList1[i] = makeDesc(responseData.wanted_comind.expected, responseData.wanted_comind.shap_gradescore,
                          responseData.wanted_comind.shap_toeic, responseData.wanted_comind.shap_license);

                        _this.wantedResultChart2 = _this.wantedResultDescList1[i];
                      } else if (_this.wantedResultTitleList1[i] == '희망 취업기간') {
                        data = responseData.wanted_duration;
                        _this.wantedResultDescList1[i] = makeDesc(responseData.wanted_duration.expected, responseData.wanted_duration.shap_gradescore,
                          responseData.wanted_duration.shap_toeic, responseData.wanted_duration.shap_license);
                        _this.wantedResultChart3 = _this.wantedResultDescList1[i];
                      } else if (_this.wantedResultTitleList1[i] == '희망 급여') {
                        data = responseData.wanted_salary;
                        _this.wantedResultDescList1[i] = makeDesc(responseData.wanted_salary.expected, responseData.wanted_salary.shap_gradescore,
                          responseData.wanted_salary.shap_toeic, responseData.wanted_salary.shap_license);
                        _this.wantedResultChart4 = _this.wantedResultDescList1[i];
                      }
                      if (_data['TOEIC'] == 0) {
                        delete data['shap_toeic']
                      }
                      if (!(_data['liccd1'] || _data['liccd2'] || _data['liccd2'])) {
                        delete data['shap_license']
                      }
                      setRenderForceChart('shap1' + i, data, Highcharts);
                    }
                    for (var i = 0; i < _this.wantedResultTitleList2.length; i++) {
                      var data = responseData.wanted_duration;
                      _this.wantedResultDescList2[i] = makeDesc(responseData.wanted_duration.expected, responseData.wanted_duration.shap_gradescore,
                        responseData.wanted_duration.shap_toeic, responseData.wanted_duration.shap_license);
                        _this.wantedResultChart3 = _this.wantedResultDescList2[i];
                      if (_this.wantedResultTitleList2[i] == '희망 급여') {
                        data = responseData.wanted_salary;
                        _this.wantedResultDescList2[i] = makeDesc(responseData.wanted_salary.expected, responseData.wanted_salary.shap_gradescore,
                          responseData.wanted_salary.shap_toeic, responseData.wanted_salary.shap_license);
                        _this.wantedResultChart4 = _this.wantedResultDescList2[i];
                      }
                      if (_data['TOEIC'] == 0) {
                        delete data['shap_toeic']
                      }
                      if (!(_data['liccd1'] || _data['liccd2'] || _data['liccd2'])) {
                        delete data['shap_license']
                      }
                      setRenderForceChart('shap2' + i, data, Highcharts);
                    }
                  } else {
                    _this.wantedResultTitleList1 = ['영향도를 산출에 필요한 충분한 데이터가 업습니다.'];
                    _this.wantedResultTitleList2 = [];
                  }
                }
                else {
                  alert(result.message);
                  _this.predicResult = false;
                  _this.isFetching = false;
                }
              },
              error: function (xhr) {
              }
            });
          },

          /**
           * @description 회사 조회 event
           */
          companySearchOnSubmit: function () {
            var searchText = this.companySearch;
            if (searchText.length > 0) {
              var _this = this;
              $.ajax({
                type: "GET",
                url: "/swiss/cm/findCompany.do?year=all&comnm="+searchText,
                dataType: "text",
                async: false,
                success: function (data) {
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
                comres = charSortByArray(comres);
                this.isCompanyResultOpen = true;
                this.companySearchResults = comres;
              }
            }
            else {
              alert('검색할 회사명을 작성 하셔야 합니다.');
              this.selectedCompany = null;
              this.isCompanyResultOpen = false;
              this.companySearchResults = [];
            }
          },

          /**
           * @description 회사 조회 초기화.
           */
          companySearchInit: function () {
            this.selectedCompany = null;
            this.companySearch = "";
          },
          /**
           * @description 회사 선택 시 발생 event
           * @param {*} selectValue
           */
          handleSelectCompany: function (selectValue) {
            //희망 업종 및 월급 선택 초기화.
            this.selectedCompanySize = null;
            this.selectedCompanySizeText = null;
            this.selectedCompanyType = null;
            this.selectedCompanyTypeText = null;
            this.hopeSalary = { start: 0, end: 0 };

            this.companySearch = selectValue.text;
            this.selectedCompany = selectValue;
            this.isCompanyResultOpen = false;
            this.companySearchResults = [];

            var _this = this;
            var _data = {};
            if (selectValue['value']) {
              _data['comnm'] = selectValue['value'];
            }

            $.ajax({
              type: "GET",
              url: "/swiss/cm/getCompStatus.do",
              dataType: "text",
              data: _data,
              success: function (data) {
                var responseData = JSON.parse(data);
                if (responseData) {
                  _this.selectedCompanyType = {value:responseData['COMTYPE'][0], text:responseData['COMTYPE'][1]};
                  _this.selectedCompanyTypeText = responseData['COMTYPE'][1];
                  _this.hopeSalary = { start: responseData['SALARY_MIN'], end: responseData['SALARY_MAX'] };
                  var _find = _.find(_this._data.companySizes, { value: responseData['COMIND'][0] });
                  if (_find) {
                    _this.selectedCompanySize = _find;
                    _this.selectedCompanySizeText = _find.text;
                  } else {
                    _this.selectedCompanySize = {value:'기타', text:'기타'};
                    _this.selectedCompanySizeText = '기타';
                  }
                }
              }
            });
          },


          highschoolSearchOnSubmit: function () {
            var _this = this;
            var searchText = this.highschoolSearch;
            if (searchText.length > 0) {
              var _data = {};
              _data['highnm'] = searchText;

              var _this = this;
              $.ajax({
                type: "GET",
                url: "/swiss/cm/findHighschool.do",
                dataType: "text",
                data: _data,
                success: function (data) {
                    res = JSON.parse(data);

                    if (res.length == 0) {
                        alert('일치하는 이름의 고등학교가 없습니다.');
                        _this.selectedHighschool = null;
                        _this.isHighschoolResultOpen = false;
                        _this.highschoolSearchResults = [];
                    } else {
                        _this.isHighschoolResultOpen = true;
                        var temp = _.map(res, function (item, index) {
                            item['HIGHAREA_NM'] = _.find(_this.highschoolAreaList, { value: item.HIGHAREA }).text;
                            item['HIGHTYPE_NM'] = _.find(_this.highschoolTypeList, { value: item.HIGHTYPE }).text;
                            item['text'] = item.HIGHNM;
                            return item
                        });
                        res = charSortByArray(res);
                        _this.highschoolSearchResults = res;
                    }
                }
              });
            }
            else {
              alert('검색할 고등학교명을 작성 하셔야 합니다.');
              _this.selectedHighschool = null;
              _this.isHighschoolResultOpen = false;
              _this.highschoolSearchResults = [];
            }
          },

          /**
          * @description 회사 조회 초기화.
          */
          highschoolSearchInit: function () {
            this.selectedHighschool = null;
            this.highschoolSearch = "";
          },

          /**
          * @description 고등학교 선택 시 발생 event
          * @param {*} selectValue
          */
          handleSelectHighschool: function (selectValue) {
            this.highschoolSearch = selectValue.HIGHNM;
            this.selectedHighschool = selectValue;
            this.isHighschoolResultOpen = false;
            this.highschoolSearchResults = [];

            this.selectedHighschoolArea = _.find(this.highschoolAreaList, { value: selectValue.HIGHAREA });
            this.selectedHighschoolType = _.find(this.highschoolTypeList, { value: selectValue.HIGHTYPE });
          },

          handleInit: function () {
            if (confirm("기본입력사항 입력 부분 전체를 초기화 하시겠습니까?")) {
                this.licenseTotalCount = null;
                this.isResponse = false;
                this.predicResult = true;
                this.wantedResult = false;
                this.wantedResultTitleList1 = [];
                this.wantedResultTitleList2 = [];
                this.wantedResultList1 = [];
                this.wantedResultList2 = [];
                this.wantedResultDescList1 = [];
                this.wantedResultDescList2 = [];
                //this.isUIResponse= false;
                this.isFetching = false;
                //전문대학/대학/대학원
                this.universityTypes = _universityTypes;
                this.selectedUniversityType = null;

                //대학검색
                this.universitys = _all_university;
                this.selectedUniversity = null;

                //전공분류
                this.departmemt4List = [];
                this.selectedDepartmemt4 = null;
                this.selectedDepartmemt4Text = null;
                this.uorgcode = null;
                this.null_value = null;
                this.uorgcodeList = [];
                this.dncode = 'A';
                //편입여부
                this.transfer = '2';
                this.teach = '2';
                this.oversea = 'B';
                this.internship = '2';

                //토익
                this.toeic = null;
                this.gradeScore = null;
                this.gradeScoreStandard = null;
                this.gradeScorePercent = null;

                //개인신상
                this.gender = null;
                this.inAge = null;
                this.outAge = null;
                this.highschoolAreaList = arrayToObject(uiCodeRawData, 'HIGHSCHOOL_AREA');
                this.selectedHighschoolArea = null;
                this.highschoolTypeList = arrayToObject(uiCodeRawData, 'HIGHSCHOOL_TYPE');
                this.selectedHighschoolType = null;
                this.birthyear = selectedBirth;
                this.birthmonth = 1;
                this.inyear = selectedIndate;
                this.inmonth = 3;
                this.outyear = selectedOutdate;
                this.outmonth = 2;

                // 고등학교 검색
                this.selectedHighschool = null;
                this.highschoolSearch = '';
                this.highschoolSearchResults = [];
                this.isHighschoolResultOpen = false;

                //자격증
                this.selectedLicense = null;
                this.licenseSearch = "";
                this.license = [
                  {
                    license1List: _license1,
                    selectedLicense1: null,
                    selectedLicense1Text: null,
                    license2List: [],
                    selectedLicense2: null,
                    selectedLicense2Text: null,
                    license3List: _all_license,
                    selectedLicense3: null,
                    selectedLicense3Text: null,
                  },
                  {
                    license1List: _license1,
                    selectedLicense1: null,
                    selectedLicense1Text: null,
                    license2List: [],
                    selectedLicense2: null,
                    selectedLicense2Text: null,
                    license3List: _all_license,
                    selectedLicense3: null,
                    selectedLicense3Text: null,
                  },
                  {
                    license1List: _license1,
                    selectedLicense1: null,
                    selectedLicense1Text: null,
                    license2List: [],
                    selectedLicense2: null,
                    selectedLicense2Text: null,
                    license3List: _all_license,
                    selectedLicense3: null,
                    selectedLicense3Text: null,
                  }
                ];

                //희망업종
                this.companySizes = arrayToObject(uiCodeRawData, 'COMIND');
                this.selectedCompanySize = null;
                this.selectedCompanySizeText = null;
                this.companyTypes = arrayToObject(uiCodeRawData, 'COMTYPE');
                this.selectedCompanyType = null;
                this.selectedCompanyTypeText = null;
                this.wanted_duration = null;
                this.selectedDurationText = null;
                this.wanted_salary = null;
                this.selectedSalaryText = null;
                this.selectedDurationText = null;
                this.selectedSalaryText = null;

                this.companyList = arrayToObject(uiCodeRawData, 'COMNM');
                this.companySearch = '';
                this.companySearchResults = [];
                this.isCompanyResultOpen = false;
                this.selectedCompany = null;
                this.searchResult = null;
            }
          },
          handleResultInit: function() {
            this.isResponse = false;
            this.predicResult = true;
            this.wantedResult = false;
            this.wantedResultTitleList1 = [];
            this.wantedResultTitleList2 = [];
            this.wantedResultList1 = [];
            this.wantedResultList2 = [];
            this.wantedResultDescList1 = [];
            this.wantedResultDescList2 = [];
            this.isFetching = false;
          },

          handleEducationInit: function () {
            if (confirm("학력정보 입력 부분을 초기화 하시겠습니까?")) {
                this.handleResultInit();

                //전문대학/대학/대학원
                this.universityTypes = _universityTypes;
                this.selectedUniversityType = null;

                //대학검색
                this.universitys = _all_university;
                this.selectedUniversity = null;

                //전공분류
                this.departmemt4List = [];
                this.selectedDepartmemt4 = null;
                this.selectedDepartmemt4Text = null;
                this.uorgcode = null;
                this.null_value = null;
                this.uorgcodeList = [];
                this.dncode = 'A';

                //개인신상
                this.inAge = null;
                this.outAge = null;
                this.highschoolAreaList = arrayToObject(uiCodeRawData, 'HIGHSCHOOL_AREA');
                this.selectedHighschoolArea = null;
                this.highschoolTypeList = arrayToObject(uiCodeRawData, 'HIGHSCHOOL_TYPE');
                this.selectedHighschoolType = null;
                this.inyear = selectedIndate;
                this.inmonth = 3;
                this.outyear = selectedOutdate;
                this.outmonth = 2;

                // 고등학교 검색
                this.selectedHighschool = null;
                this.highschoolSearch = '';
                this.highschoolSearchResults = [];
                this.isHighschoolResultOpen = false;
            }
          },
          handlePersonalInit: function () {
            if (confirm("개인신상 입력 부분을 초기화 하시겠습니까?")) {
                this.handleResultInit();

                //개인신상
                this.gender = null;
                this.birthyear = selectedBirth;
                this.birthmonth = 1;
            }
          },
          handleExperienceInit: function () {
            if (confirm("학업 및 경험 입력 부분을 초기화 하시겠습니까?")) {
                this.handleResultInit();

                // 학업 및 경험
                this.toeic = null;
                this.gradeScore = null;
                this.gradeScoreStandard = null;
                this.gradeScorePercent = null;

                this.transfer = "2";
                this.teach = "2";
                this.oversea = "B";
                this.internship = "2";
            }
          },
          handleLicenseInit: function() {
            if (confirm("자격정보 입력 부분을 초기화 하시겠습니까?")) {
                this.handleResultInit();

                // 자격 정보
                this.licenseTotalCount = null;
                this.selectedLicense = null;
                this.licenseSearch = "";
                this.license = [
                    {
                        license1List: _license1,
                        selectedLicense1: null,
                        selectedLicense1Text: null,
                        license2List: [],
                        selectedLicense2: null,
                        selectedLicense2Text: null,
                        license3List: _all_license,
                        selectedLicense3: null,
                        selectedLicense3Text: null,
                    },
                    {
                        license1List: _license1,
                        selectedLicense1: null,
                        selectedLicense1Text: null,
                        license2List: [],
                        selectedLicense2: null,
                        selectedLicense2Text: null,
                        license3List: _all_license,
                        selectedLicense3: null,
                        selectedLicense3Text: null,
                    },
                    {
                        license1List: _license1,
                        selectedLicense1: null,
                        selectedLicense1Text: null,
                        license2List: [],
                        selectedLicense2: null,
                        selectedLicense2Text: null,
                        license3List: _all_license,
                        selectedLicense3: null,
                        selectedLicense3Text: null,
                    }
                ]
            }
          },
          handleDesiredIndustryInit: function() {
            if (confirm("선택입력사항 입력 부분을 초기화 하시겠습니까?")) {
                this.handleResultInit();

                //희망업종
                this.companySizes = arrayToObject(uiCodeRawData, 'COMIND');
                this.selectedCompanySize = null;
                this.selectedCompanySizeText = null;
                this.companyTypes = arrayToObject(uiCodeRawData, 'COMTYPE');
                this.selectedCompanyType = null;
                this.selectedCompanyTypeText = null;
                this.wanted_duration = null;
                this.selectedDurationText = null;
                this.wanted_salary = null;
                this.selectedSalaryText = null;
                this.selectedDurationText = null;
                this.selectedSalaryText = null;

                this.companyList = arrayToObject(uiCodeRawData, 'COMNM');
                this.companySearch = '';
                this.companySearchResults = [];
                this.isCompanyResultOpen = false;
                this.selectedCompany = null;
                this.searchResult = null;
            }
          },

          handleManualPrediction: function () {
            this.isSelectedManual = true;
            this.handleManual();
          },

          handleManual: function (step) {
            this.isManualStep1 = false;
            this.isManualStep2 = false;
            this.isManualStep3 = false;
            this.isManualStep4 = false;
            this.isManualStep5 = false;
            this.isManualStep6 = false;

            switch (step) {
              case 1:
                this.isManualStep1 = true;
                break;
              case 2:
                this.isManualStep2 = true;
                break;
              case 3:
                this.isManualStep3 = true;
                break;
              case 4:
                this.isManualStep4 = true;
                break;
              case 5:
                this.isManualStep5 = true;
                break;
              case 6:
                this.isManualStep6 = true;
                break;
              default:
                this.isManualStep1 = true;
            }
          },
          handleManualInit: function () {
            this.isSelectedManual = false;
          },
          openLicense(type) {
            if (type == "I") {
              this.isOpenLicense = true;
            } else {
              this.isOpenLicense = false;
            }
          },
          helpComSize(type) {
            if (type == "I") {
              this.isHelpComSize = true;
            } else {
              this.isHelpComSize = false;
            }
          },
          helpCompany(type) {
            if (type == "I") {
              this.isHelpCompany = true;
            } else {
              this.isHelpCompany = false;
            }
          },
          moveSearchStatus() {
            var confirmMsg = "";
            var selectComtype = "";
            var selectComind = "";
            var etcFlag = false;

            if (this.selectedComtype.length == 0 && this.selectedComind.length == 0) {
                alert("선택한 기업조건이 없습니다.\n기업유형 또는 산업분류에서 선택 후 검색해주세요.");
                return false;
            }

            if (this.selectedComtype.length > 0) {
              confirmMsg += "[기업유형] : "
              for (var i = 0; i < this.selectedComtype.length; i++) {
                if (i == 0) {
                    confirmMsg += this.selectedComtype[i].name;
                    selectComtype += this.selectedComtype[i].value;
                } else {
                    confirmMsg += ", "+this.selectedComtype[i].name;
                    selectComtype += ","+this.selectedComtype[i].value;
                }
              }
              confirmMsg += "\n"
            }

            if (this.selectedComind.length > 0) {
              confirmMsg += "[산업분류] : "
              for (var i = 0; i < this.selectedComind.length; i++) {
                if (this.selectedComind[i].name == "기타") {
                    etcFlag = true;
                }

                if (i == 0) {
                    confirmMsg += this.selectedComind[i].name;
                    selectComind += this.selectedComind[i].value;
                } else {
                    confirmMsg += ", "+this.selectedComind[i].name;
                    selectComind += ","+this.selectedComind[i].value;
                }
              }
              if (etcFlag) {
                if (confirmMsg.length > 20) {
                    confirmMsg += "\n"
                    confirmMsg += "               (기타는 선택에서 제외됩니다.)\n"
                } else {
                    confirmMsg += " (기타는 선택에서 제외됩니다.)\n"
                }
              } else {
                confirmMsg += "\n"
              }
            }
            confirmMsg += "\n";
            confirmMsg += "선택한 기업조건에 취업한 졸업자 정보를 최신 연도로 검색합니다.\n기업취업현황으로 이동하시겠습니까?";

            if (confirm(confirmMsg)) {
                window.location.href = 'status.jsp?SCHCD='+gSchcd+'&ORGCD='+gOrgcd+'&USERID='+userid+'&COMTYPE='+selectComtype+'&COMIND='+selectComind;
            }
          },
          handleBookmark(event) {
            if (event.currentTarget.classList.contains('active')) {
                event.currentTarget.classList.remove('active');
            } else {
                Object.keys(this.$refs.setSelectedBookmark).forEach(el => {
                  this.$refs.setSelectedBookmark[el].classList.remove('active');
                })
                event.currentTarget.classList.add('active');
            }
          },
          handleSelectedBookmark() {
              var selectedFlag = false;
              Object.keys(this.$refs.setSelectedBookmark).forEach(el => {
                if (this.$refs.setSelectedBookmark[el].classList.contains('active')) {
                    selectedFlag = true;

                    var tmpObj = this.bookMark_list[el];

                    // 필수입력값
                    this.selectedUniversity = { id: tmpObj.SCHCD+"_"+tmpObj.ORGCD, name: tmpObj.SCHNM  };
                    var unidept = responseData['UNI_DEPT'][this.selectedUniversity.id];
                    var temp = _.map(unidept, function (item, index) {
                      var splitCode = item.split('_');
                      return {
                        id: splitCode[0],
                        name: splitCode[1],
                      }
                    });
                    this.department4 = temp;
                    this.department4.sort(function(a, b){
                    	return (a.name).localeCompare(b.name);
                    });

                    this.selectedDepartmemt4 = { id: tmpObj.DEPTCD, name: tmpObj.DEPTNM  };
                    this.selectedHighschoolArea = { value: tmpObj.HIGHSCHOOL_AREA, text: tmpObj.HIGHSCHOOL_AREA_NM  };
                    this.selectedHighschoolType = { value: tmpObj.HIGHSCHOOL_TYPE, text: tmpObj.HIGHSCHOOL_TYPE_NM  };
                    this.gender = tmpObj.SEXCD;
                    this.gradeScore = tmpObj.GSCORE;
                    this.gradeScoreStandard = tmpObj.GSTANDARD;
                    this.setScorePercent();

                    // 선택입력값
                    this.dncode = tmpObj.DNCODE;
                    this.birthyear = tmpObj.BIRTHYM.substring(0,4);
                    this.birthmonth = tmpObj.BIRTHYM.substring(5,6);

                    this.inyear = tmpObj.INYM.substring(0,4);
                    this.inmonth = tmpObj.INYM.substring(5,6);

                    this.outyear = tmpObj.OUTYM.substring(0,4);
                    this.outmonth = tmpObj.OUTYM.substring(5,6);

                    this.transfer = tmpObj.TRANSFERYM;
                    this.teach = tmpObj.TEACHCERTIYN;
                    this.oversea = tmpObj.OVERSEACODE;
                    this.internship = tmpObj.INTERNSHIPYN;
                    this.toeic = tmpObj.TOEIC;

                    this.licenseTotalCount = tmpObj.TCNT;

                    if (tmpObj.LICCD1 != "") {
                        this.license[0].selectedLicense3 = {id:tmpObj.LICCD1, name:tmpObj.LICNM1};
                        this.license[0].selectedLicense3 = {id:tmpObj.LICCD1, name:tmpObj.LICNM1};
                    } else {
                        this.license[0].selectedLicense3 = null;
                        this.license[0].selectedLicense3 = null;
                    }

                    if (tmpObj.LICCD2 != "") {
                        this.license[1].selectedLicense3 = {id:tmpObj.LICCD2, name:tmpObj.LICNM2};
                        this.license[1].selectedLicense3Text = tmpObj.LICNM2;
                    } else {
                        this.license[1].selectedLicense3 = null;
                        this.license[1].selectedLicense3Text = null;
                    }

                    if (tmpObj.LICCD3 != "") {
                        this.license[2].selectedLicense3 = {id:tmpObj.LICCD3, name:tmpObj.LICNM3};
                        this.license[2].selectedLicense3Text = tmpObj.LICNM3;
                    } else {
                        this.license[2].selectedLicense3 = null;
                        this.license[2].selectedLicense3Text = null;
                    }

                    if (tmpObj.WANTED_COMTYPE != "") {
                        this.selectedCompanyType = {value:tmpObj.WANTED_COMTYPE, text:tmpObj.WANTED_COMTYPE_NM}
                    } else {
                        this.selectedCompanyType = null;
                    }

                    if (tmpObj.WANTED_COMIND != "") {
                        this.selectedCompanySize = {value:tmpObj.WANTED_COMIND, text:tmpObj.WANTED_COMIND_NM}
                    } else {
                        this.selectedCompanySize = null;
                    }
                    this.wanted_duration = tmpObj.WANTED_DURATION == "" ? null : tmpObj.WANTED_DURATION;
                    this.wanted_salary = tmpObj.WANTED_SALARY;

                    // 팝업 초기화
                    this.isBookmark = false;
                    this.$refs.setSelectedBookmark[el].classList.remove('active');
                }
              })

              if (!selectedFlag) {
                alert("선택 된 검색내역이 없습니다.");
              }
          },
          handleDoubleClickSelectedBookmark(index) {
            // 상세정보 팝업 오픈
            this.isBookmarkDetail = true;
            this.bookMark_detail = this.bookMark_list[index];
            var licenseText = "";
            if (this.bookMark_detail.LICNM1) {
                licenseText = this.bookMark_detail.LICNM1;
            }
            if (this.bookMark_detail.LICNM2) {
                if (licenseText == "") {
                    licenseText = this.bookMark_detail.LICNM2;
                } else {
                    licenseText += " / "+this.bookMark_detail.LICNM2;
                }
            }
            if (this.bookMark_detail.LICNM3) {
                if (licenseText == "") {
                    licenseText = this.bookMark_detail.LICNM3;
                } else {
                    licenseText += " / "+this.bookMark_detail.LICNM3;
                }
            }
            this.bookMark_detail["LICENSETEXT"] = licenseText;
          },
          handleSearchInit() {
            this.searchFilterText = "";
            this.handleSearchFilter()
          },
          handleSearchFilter() {
            this.bookMark_filter_list = this.bookMark_list;
            if (this.searchFilterType == "B") {
                this.bookMark_filter_list = this.bookMark_list.filter(item => (item.TITLE).indexOf(this.searchFilterText) != -1);
            } else if (this.searchFilterType == "U") {
                this.bookMark_filter_list = this.bookMark_list.filter(item => (item.SCHNM).indexOf(this.searchFilterText) != -1);
            } else {
                if (this.searchFilterText != "") {
                    this.bookMark_filter_list = this.bookMark_list.filter(item => {
                        if ((item.TITLE).indexOf(this.searchFilterText) != -1 || (item.SCHNM).indexOf(this.searchFilterText) != -1 ||
                        (item.DEPTNM).indexOf(this.searchFilterText) != -1 || (item.HIGHSCHOOL_AREA_NM).indexOf(this.searchFilterText) != -1 ||
                        (item.HIGHSCHOOL_TYPE_NM).indexOf(this.searchFilterText) != -1) {
                            return true;
                        }
                    })
                }
            }
          },
          openBookmark(userid) {
            var _this = this;
            this.searchFilterText = ''
            this.searchFilterType = null

            this.isBookmark = true

            var _data = {};
            _data['userid'] = userid;

            $.ajax({
              type: "GET",
              url: "/swiss/cm/getBookmark.do",
              dataType: "text",
              data: _data,
              success: function(response) {
                  var res = JSON.parse(response);
                  if (res.length == 0) {
                      alert('검색 결과가 존재하지 않습니다.');
                      _this.bookMark_list = [];
                      _this.bookMark_filter_list = _this.bookMark_list;
                  } else {
                      _this.bookMark_list = res;
                      _this.bookMark_filter_list = _this.bookMark_list;
                  }
              }
            });

          },
          closeBookmark() {
            this.isBookmark = false

            if (this.$refs.setSelectedBookmark != undefined) {
                Object.keys(this.$refs.setSelectedBookmark).forEach(el => {
                    if (this.$refs.setSelectedBookmark[el].classList.contains('active')) {
                        this.$refs.setSelectedBookmark[el].classList.remove('active');
                    }
                })
            }
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
                  url: "/swiss/cm/getUsageExport.do",
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
          handleDeleteBookmark(userid) {
              var _this = this;
              var selectedFlag = false;
              var index = null;
              Object.keys(this.$refs.setSelectedBookmark).forEach(el => {
                  if (this.$refs.setSelectedBookmark[el].classList.contains('active')) {
                      selectedFlag = true;
                      index = this.bookMark_list[el].index;
                  }
              })

              if (selectedFlag) {
                  var _data = {};
                  _data['index'] = index;

                  $.ajax({
                      type: "GET",
                       url: "/swiss/cm/deleteBookmark.do",
                      dataType: "text",
                      data: _data,
                      success: function(data) {
                          var res = JSON.parse(data);
                          alert(res.message)
                          _this.openBookmark(userid);
                      }
                  });
              } else {
                alert("선택 된 검색내역이 없습니다.");
              }
          },
          helpInfo(type) {
              if (type == "I") {
                  this.isHelpInfo = true;
              } else {
                  this.isHelpInfo = false;
              }
          },
        },
        created() {
          this.isUIResponse = true;
          if (userType == "1" || userType == "2" || userType == "7") {
              this.isUserGroup = true;
          }
        },
        watch: {
          selectedUniversity: function (val) {
            if (val) {
              var unidept = responseData['UNI_DEPT'][this.selectedUniversity.id];
              var temp = _.map(unidept, function (item, index) {
                var splitCode = item.split('_');
                return {
                  id: splitCode[0],
                  name: splitCode[1],
                }
              });
              this.department4 = temp;
              this.department4.sort(function(a, b){
                return (a.name).localeCompare(b.name);
              });
            }
            else {
              this.department4 = [];
              this.selectedDepartmemt4 = null;
            }
          },
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
          selectedDepartmemt4: function (val) {
            this.selectedDepartmemt4Text = null;
            if (val) {
              var _find = _.find(this.departmemt4List, { text: val });
              if (_find) {
                setTimeout(() => {
                  this.selectedDepartmemt4Text = _find.value;
                }, 100);
              }
            }
          },
          selectedCompanyType: function (val) {
            this.selectedCompanyTypeText = null;
            if (val) {
                setTimeout(() => {
                  this.selectedCompanyTypeText = val.text;
                }, 100);
            }
          },
          selectedCompanySize: function (val) {
            this.selectedCompanySizeText = null;
            if (val) {
                setTimeout(() => {
                  this.selectedCompanySizeText = val.text;
                }, 100);
            }
          },
          license: {
            deep: true,
            handler(val) {
              _this = this;
              _.map(val, function (item, index) {
                if (item.selectedLicense3 != null) {
                  setTimeout(() => {
                    _this.license[index].selectedLicense3Text = item.selectedLicense3.name;
                  }, 1000);
                }
                else {
                  _this.license[index].selectedLicense3Text = null;
                }
              });
            }
          }

        }
      });
      // }
      // else {
      //   alert(result.message);
      // }

    },
  });
});
