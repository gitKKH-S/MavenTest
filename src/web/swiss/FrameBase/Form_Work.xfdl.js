(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.set_cssclass("btn_sty06");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,5500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("sub_research01","0","150","1200","125",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sub_research01");
            this.addChild(obj.name, obj);

            obj = new Static("reser_st01","32","25","120","30",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st01");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st01:10","25","120","30",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj01","290","25","113","30",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj01");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj01:10","26","584","29",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_date01","32","70","120","28",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date01");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","162","69","606","30",null,null,null,null,null,null,this.sub_research01.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research01.addChild(obj.name, obj);

            obj = new Div("sel_box","12","4900","340","390",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sel_box");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","260","199","40",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("휴대폰번호");
            this.sel_box.addChild(obj.name, obj);

            obj = new Button("Button00_00","174",null,"122","40",null,"19",null,null,null,null,this.sel_box.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.sel_box.addChild(obj.name, obj);

            obj = new Button("Button00_01","42","329","122","40",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty05");
            this.sel_box.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","106","120","199","40",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("사용자ID");
            this.sel_box.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","106","200","199","40",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("전화번호");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00","22","67","73","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","117","73","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("7");
            obj.set_text("사용자ID");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","207","73","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_02","22","267","73","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰번호");
            this.sel_box.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","105","63","199","40",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("성명");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","18","107","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("10");
            obj.set_text("사용자그룹유형 :");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","127","18","107","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("11");
            obj.set_text("전산담당자");
            this.sel_box.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","105","165","224","26",null,null,null,null,null,null,this.sel_box.form);
            obj.set_taborder("12");
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_color("#0054d6");
            this.sel_box.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","40","1200","63",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("divForm");
            this.addChild(obj.name, obj);

            obj = new Div("pagingWrap","0","4803","1200","60",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_first","450","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("2");
            obj.set_text("Button00");
            obj.set_cssclass("btn_first");
            obj.set_accessibilitylabel("처음이동");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_before","btn_first:10","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("3");
            obj.set_text("Button01");
            obj.set_cssclass("btn_before");
            obj.set_accessibilitylabel("이전");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00","625","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_pagNum");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_after","Button04_00_00_00:20","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("8");
            obj.set_text("Button02");
            obj.set_cssclass("btn_after");
            obj.set_accessibilitylabel("다음");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_last","btn_after:10","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("16");
            obj.set_text("Button03");
            obj.set_cssclass("btn_last");
            obj.set_accessibilitylabel("끝이동");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04","btn_before:20","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_pagNum");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00","565","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_pagNum");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00_00","595","16","28","28",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_pagNum");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button00","1080","11","120","40",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("1");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty05");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","11","120","40",null,null,null,null,null,null,this.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("파일로저장");
            this.pagingWrap.addChild(obj.name, obj);

            obj = new Div("sub_search","0","2728","1200","273",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","39","64","23",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("입고년도");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","99","44","23",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("학교");
            this.sub_search.addChild(obj.name, obj);

            obj = new Combo("sel_school","Static00_01:43","90","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학교");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","480","39","54","23",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("입고일");
            this.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","505","193","190","50",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.sub_search.addChild(obj.name, obj);

            obj = new Combo("sel_school00","112","30","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Combo("sel_school01","556","90","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("구분");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Combo("sel_school00_00","sel_school00:10","30","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("7");
            obj.set_accessibilitylabel("입고년도회차");
            obj.set_text("1회차");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("Edit00","556","30","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("일고일 시작");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","728","30","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("입고일 끝");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("Static01","707","41","18","19",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("~");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","480","99","54","23",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("11");
            obj.set_text("구분");
            this.sub_search.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","sel_school01:10","90","140","40",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("12");
            this.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","918","40","150","20",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("13");
            obj.set_text("보관일경과여부");
            obj.set_accessibilitylabel("보관일경과여부");
            this.sub_search.addChild(obj.name, obj);

            obj = new Static("Static02","25","160","1140","1",null,null,null,null,null,null,this.sub_search.form);
            obj.set_taborder("14");
            obj.set_background("#e4e4e4");
            this.sub_search.addChild(obj.name, obj);

            obj = new Div("stepArea","0","540","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01 on01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea.addChild(obj.name, obj);

            obj = new Static("Static01_01","159","29","25","25",null,null,null,null,null,null,this.stepArea.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea.addChild(obj.name, obj);

            obj = new Div("sub_research02","0","279","1200","125",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sub_research02");
            this.addChild(obj.name, obj);

            obj = new Static("reser_st02","32","25","120","30",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st02");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st02:10","25","120","30",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj02","290","25","113","30",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj02");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj02:10","26","584","29",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date02","32","70","120","28",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date02");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","162","69","606","30",null,null,null,null,null,null,this.sub_research02.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research02.addChild(obj.name, obj);

            obj = new Div("sub_research03","0","409","1200","125",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.addChild(obj.name, obj);

            obj = new Static("reser_st03","32","25","120","30",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","25","120","30",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","25","113","30",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","26","584","29",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date03","32","70","120","28",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","162","69","606","30",null,null,null,null,null,null,this.sub_research03.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            this.sub_research03.addChild(obj.name, obj);

            obj = new Div("stepArea00","0","637","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01 on01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_01","159","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","329","29","25","25",null,null,null,null,null,null,this.stepArea00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea00.addChild(obj.name, obj);

            obj = new Div("stepArea00_00","0","728","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00","0","820","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00","0","910","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 on01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00","0","1003","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01 on01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00_00","0","1095","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","172","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 on01 last");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01","0","1200","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01 on02");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Static("Static01_01","159","29","25","25",null,null,null,null,null,null,this.stepArea01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea01.addChild(obj.name, obj);

            obj = new Div("stepArea00_01","1","1300","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01 on02");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","159","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","329","29","25","25",null,null,null,null,null,null,this.stepArea00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_01.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_01","0","1390","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on02");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_01.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_01","0","1488","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on02");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_01.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_01","0","1583","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 on02");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_00_01.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00_01","0","1675","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01 on02");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 last");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_00_00_01.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00_00_00_00_00","0","1770","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","171","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","342","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","513","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","684","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","855","0","171","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","1026","0","172","83",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 on02 last");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","500","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","1013","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on02");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","671","29","25","25",null,null,null,null,null,null,this.stepArea00_00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","0","1876","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00.addChild(obj.name, obj);

            obj = new Div("sel_box02","371","4900","340","390",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sel_box02");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","260","199","40",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("6");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Button("Button00_00","174",null,"122","40",null,"19",null,null,null,null,this.sel_box02.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty06");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Button("Button00_01","42","329","122","40",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty06");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","106","120","199","40",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("3");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","106","200","199","40",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("4");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00","22","67","73","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","117","73","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("7");
            obj.set_text("사용자ID");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","207","73","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_02","22","267","73","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰번호");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","105","63","199","40",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("2");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","18","107","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("10");
            obj.set_text("사용자그룹유형 :");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","127","18","107","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("11");
            obj.set_text("전산담당자");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","105","165","224","26",null,null,null,null,null,null,this.sel_box02.form);
            obj.set_taborder("12");
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCOrange");
            this.sel_box02.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00","735","4898","340","390",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sel_box03");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","260","199","40",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("6");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","174",null,"122","40",null,"19",null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty07");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","42","329","122","40",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty07");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","106","120","199","40",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("3");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","106","200","199","40",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("4");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","22","67","73","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","117","73","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("사용자ID");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","207","73","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02","22","267","73","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰번호");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","105","63","199","40",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("2");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","18","107","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("사용자그룹유형 :");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","127","18","107","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("전산담당자");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","105","165","224","26",null,null,null,null,null,null,this.Div00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCGreen");
            this.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_search00","0","3005","1200","323",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","39","64","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("0");
            obj.set_text("조사회차");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","99","44","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("5");
            obj.set_text("학교");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Combo("sel_school","Static00_01:43","90","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학교");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Button("btn_search","505","245","190","50",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Combo("sel_school00","112","30","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("조사회차");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Combo("sel_school01","556","90","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("본 분교 선택");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","450","99","86","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("6");
            obj.set_text("본 분교 선택");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static02","25","215","1140","1",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("7");
            obj.set_background("#e4e4e4");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_00","450","39","64","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("8");
            obj.set_text("조사기간");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","556","39","513","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("9");
            obj.set_text("2020-07-13 ~ 2020-07-23 (2021년 고등교육기관 졸업생정보조사)");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","880","99","69","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("10");
            obj.set_text("단과대학");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Edit("Edit00","959","90","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("단과대학");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","25","159","69","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","112","150","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("학과");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","450","160","69","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("14");
            obj.set_text("학번");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","556","151","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("학번");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00_00","880","159","69","23",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("16");
            obj.set_text("이름");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","959","150","210","40",null,null,null,null,null,null,this.sub_search00.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("이름");
            this.sub_search00.addChild(obj.name, obj);

            obj = new Div("sub_search01","0","3335","1200","455",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","32","44","23",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("3");
            obj.set_text("학교");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Combo("sel_school","119","23","210","40",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("학교");
            obj.set_text("KEDI대학원(본교)");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","450","32","84","23",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("4");
            obj.set_text("본 분교 선택");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Combo("sel_day","Static00_01_00:10","23","210","40",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("본 분교 선택");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Button("btn_search","505","375","190","50",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","25","84","34","23",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("5");
            obj.set_text("분류");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Radio("Radio00","119","84","256","165",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var sub_search01_form_Radio00_innerdataset = new nexacro.NormalDataset("sub_search01_form_Radio00_innerdataset", obj);
            sub_search01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">단과대학</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">학과</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">단과대학+학과</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">단과대학+학과+학과소분류</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">대계열</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">소계열</Col></Row></Rows>");
            obj.set_innerdataset(sub_search01_form_Radio00_innerdataset);
            this.sub_search01.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","25","269","44","23",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("7");
            obj.set_text("주야간");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Radio("Radio01","119","264","212","50",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var sub_search01_form_Radio01_innerdataset = new nexacro.NormalDataset("sub_search01_form_Radio01_innerdataset", obj);
            sub_search01_form_Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">구분</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">구분없음</Col></Row></Rows>");
            obj.set_innerdataset(sub_search01_form_Radio01_innerdataset);
            this.sub_search01.addChild(obj.name, obj);

            obj = new Static("Static02","25","345","1140","1",null,null,null,null,null,null,this.sub_search01.form);
            obj.set_taborder("9");
            obj.set_background("#e4e4e4");
            this.sub_search01.addChild(obj.name, obj);

            obj = new Div("sub_search03","0","3800","1200","263",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","39","64","23",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("0");
            obj.set_text("학교명");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Combo("sel_school00","112","30","210","40",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학교명");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","450","39","69","23",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("8");
            obj.set_text("학과명");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","536","30","210","40",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("학과명");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","870","39","86","23",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("6");
            obj.set_text("주야구분");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Combo("sel_school01","956","30","210","40",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("주야구분");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","99","68","23",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("5");
            obj.set_text("일치여부");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Combo("sel_school","112","90","210","40",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("일치여부");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Static("Static02","25","150","1140","1",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("7");
            obj.set_background("#e4e4e4");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Button("btn_search","505","183","190","50",null,null,null,null,null,null,this.sub_search03.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.sub_search03.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00_00","13","5310","340","390",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sel_box04");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","106","260","199","40",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("6");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","174",null,"122","40",null,"19",null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty08");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00_01","42","329","122","40",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty08");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","106","120","199","40",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("3");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","106","200","199","40",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("4");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00","22","67","73","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","117","73","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("사용자ID");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","207","73","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_02","22","267","73","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("휴대폰번호");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","105","63","199","40",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("2");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","18","107","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("사용자그룹유형 :");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","127","18","107","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("전산담당자");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","105","165","224","26",null,null,null,null,null,null,this.Div00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCRed");
            this.Div00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("sub_title00","0","4080","260","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("제출 자료 유무");
            obj.set_cssclass("title_t2");
            this.addChild(obj.name, obj);

            obj = new Div("rowGrid","0","sub_title00:10","1200","185",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("7");
            obj.set_text("메뉴명");
            obj.set_cssclass("boxTitleManda");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","61","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("8");
            obj.set_text("메뉴ID");
            obj.set_cssclass("boxTitle");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","122","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("9");
            obj.set_text("페이지 경로");
            obj.set_cssclass("boxTitle");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01","400","0","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("10");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("boxTitleManda");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","400","61","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("11");
            obj.set_text("메뉴순서");
            obj.set_cssclass("boxTitle");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","246","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("12");
            obj.set_cssclass("boxDesc");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","155","61","246","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("13");
            obj.set_cssclass("boxDesc");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","155","122","1045","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("14");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00","165","12","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("0");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","165","71","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("3");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","165","132","1024","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("6");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","555","0","246","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("15");
            obj.set_cssclass("boxDesc");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","555","61","246","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("16");
            obj.set_cssclass("boxDesc");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","565","12","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("1");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01","565","71","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("4");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","801","0","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("boxTitle");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","801","61","155","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("18");
            obj.set_text("페이지 ID");
            obj.set_cssclass("boxTitle");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","956","0","243","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("19");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01_00","956","61","243","61",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("20");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","965","12","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("2");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_01_00","965","71","224","40",null,null,null,null,null,null,this.rowGrid.form);
            obj.set_taborder("5");
            this.rowGrid.addChild(obj.name, obj);

            obj = new Static("sub_title00_00","0","4358","260","32",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("제출 자료 유무");
            obj.set_cssclass("title_t2");
            this.addChild(obj.name, obj);

            obj = new Div("colGrid00","0","sub_title00_00:10","1200","104",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("colGrid");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","300","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("0");
            obj.set_text("교내 취업자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00","300","0","300","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("1");
            obj.set_text("해외 취업자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","600","0","300","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("2");
            obj.set_text("농림어업종사자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","900","0","300","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("3");
            obj.set_text("입대자");
            obj.set_cssclass("boxTitleCol");
            obj.set_textAlign("center");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01","0","40","300","60",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDescCol");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00","300","40","300","60",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDescCol");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","600","40","300","60",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDescCol");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","900","40","300","60",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDescCol");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","59","60","23","20",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("8");
            this.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","369","60","23","20",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("9");
            this.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","669","60","23","20",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("10");
            this.colGrid00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00_00","969","60","23","20",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("11");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Edit("Edit00","85","49","114","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("12");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","CheckBox00_00:3","50","114","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("13");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","CheckBox00_00_00:3","50","114","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("14");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","CheckBox00_00_00_00:3","50","114","40",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("15");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02","Edit00:5","62","33","18",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("16");
            obj.set_text("명");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00","Edit00_00:5","62","33","18",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("17");
            obj.set_text("명");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","Edit00_00_00:5","62","33","18",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("18");
            obj.set_text("명");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","Edit00_00_00_00:5","62","33","18",null,null,null,null,null,null,this.colGrid00.form);
            obj.set_taborder("19");
            obj.set_text("명");
            this.colGrid00.addChild(obj.name, obj);

            obj = new Div("btnArea","0","4514","1202","60",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","430","1","122","40",null,null,null,null,null,null,this.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_00","562","1","122","40",null,null,null,null,null,null,this.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","694","1","122","40",null,null,null,null,null,null,this.btnArea.form);
            obj.set_taborder("20");
            obj.set_text("뒤로가기");
            obj.set_cssclass("btn_sty01");
            this.btnArea.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00","0","1965","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00","-1","2055","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00","0","2148","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00_00","0","2242","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00_00_00","0","2330","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00_00_00_00","0","2423","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00_00_00_00_00","0","2515","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 on03");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01  last");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00_00_00_00_00_00_00_00_00","0","2616","1200","85",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","133","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","133","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","397","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","529","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","661","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00","793","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","252","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","384","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","516","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","648","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","780","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","120","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00","925","0","132","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","912","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00_00_00_00","1057","0","141","83",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01 on03  last");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","1044","29","25","25",null,null,null,null,null,null,this.stepArea01_00_00_00_00_00_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step on03");
            this.stepArea01_00_00_00_00_00_00_00_00_00.addChild(obj.name, obj);

            obj = new Div("sub_search02","0","4570","1200","203",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","39","64","23",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("0");
            obj.set_text("조사년도");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Combo("sel_school00","112","30","210","40",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학교명");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","450","39","69","23",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("6");
            obj.set_text("조사종류");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","956","30","210","40",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학과명");
            obj.set_displaynulltext("제목 / 내용 / 작성자");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Combo("sel_school01","536","30","210","40",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("주야구분");
            obj.set_text("졸업생정보");
            obj.set_value("");
            obj.set_index("-1");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Static("Static02","25","91","1140","1",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("5");
            obj.set_background("#e4e4e4");
            this.sub_search02.addChild(obj.name, obj);

            obj = new Button("btn_search","505","122","190","50",null,null,null,null,null,null,this.sub_search02.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.sub_search02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1200,5500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div.form.Grid00_00","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Work.xfdl","CM::common.xjs");
        this.registerScript("Form_Work.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.sub_search01.form.Static00_01.addEventHandler("onclick",this.Div_sub_search_Static00_01_onclick,this);
            this.sub_search01.form.Radio00.addEventHandler("onitemchanged",this.Div_sub_search_Radio00_onitemchanged,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
