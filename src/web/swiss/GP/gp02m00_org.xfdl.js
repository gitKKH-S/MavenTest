(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fp02m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","744",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","740",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","740",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea00_01","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("stepArea");
            this.Div.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp05m00","1024","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","171","40",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","671","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","329","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea00_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on01");
            this.Div.form.stepArea00_01.addChild(obj.name, obj);

            obj = new Div("sub_research02","30","stepArea00_01:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sub_research01");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st02","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st02:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj02","290","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj02:10","10","584","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_date02","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date01");
            obj.set_font("16px/normal \"SpoqaHanSans-Bold\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date02:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research02.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research02.addChild(obj.name, obj);

            obj = new Static("tableTitle","30","200","430","32",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("전산담당자 등록");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_sms_noti","550","200","140","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("ID생성 알림");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","btn_sms_noti:10","820","83",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_school_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty02_01");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"125\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교코드\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"학교명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"본분교구분\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"담당자명\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"사용자ID\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"휴대폰번호\" border=\"0px none,0px none,1px solid #d0e39c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHCD\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"1\" text=\"bind:SCHNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"2\" text=\"bind:ORGNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"3\" text=\"bind:USERNM\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"4\" text=\"bind:USERID\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"5\" text=\"bind:MOBILENO\" border=\"0px none,0px none,1px solid #d0e39c\" font=\"14px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","890","200","340","460",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("sel_box02");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("MOBILENO","110","330","199","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("12");
            obj.set_accessibilitylabel("휴대폰번호");
            obj.set_maxlength("15");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del","194","400","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty06");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","50","400","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty06");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("USERID","110","210","200","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("사용자ID");
            obj.set_maxlength("40");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("TELNO","110","280","200","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("10");
            obj.set_accessibilitylabel("전화번호");
            obj.set_maxlength("15");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","160","73","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","210","73","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("사용자ID");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","20","280","73","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("전화번호");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","20","330","73","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("휴대폰번호");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("USERNM","110","160","200","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("10");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","18","297","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학교를 선택 해 주세요.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","110","240","200","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("12px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCOrange");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","35","55","224","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("※전산담당자존재 유무설정을 해 주세요.");
            obj.set_font("12px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCOrange");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","15","50","304","1",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("15");
            obj.set_background("#000000");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_00","24","90","130","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("전산담당자존재");
            obj.set_truevalue("1");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save00","190","90","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02_00","15","128","304","1",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("16");
            obj.set_background("#000000");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("SCHCD","949","740","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("ORGCD","1037","740","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("PROCTYPE","1117","740","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("SURVSEQ","949","700","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("SURVKINDCD","1039","700","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("USERSEQ_COM","1119","700","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_req","710","200","140","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("자료등록 요청하기");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_pub_charg","950","680","220","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("기존 전산담당자 검색/공유");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.Grid00_00","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.Grid00_00","accessibilityaction","Dataset00","학교명");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.Div00.form.in_chkBox_00","value","dsUserSchool","CHGPSNYN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("gp02m00_copy0.xfdl","CM::common.xjs");
        this.addIncludeScript("gp02m00_copy0.xfdl","CM::utl_script.xjs");
        this.registerScript("gp02m00_copy0.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERID = "";
        this.fv_SURVTERM =  "";
        this.fv_CHANGEYN = "";
        this.fv_USERGRPTYPE =  "";

        this.fv_MENUNM = "졸업생정보>환경설정";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectChargeCompuInfo"){
        			var schoolTitle = this.ds_school_list.getColumn(0,"SCHNM") ;
        			schoolTitle += "("+ this.ds_school_list.getColumn(0,"ORGNM") + ") 담당자 등록";
        			this.Div.form.Div00.form.Static00_03.set_text(schoolTitle)  ;

        			var SURVSEQ = this.ds_school_list.getColumn(0,"SURVSEQ");
        			var SURVKINDCD = this.ds_school_list.getColumn(0,"SURVKINDCD");
        			var SCHCD = this.ds_school_list.getColumn(0,"SCHCD");
        			var ORGCD = this.ds_school_list.getColumn(0,"ORGCD");
        			var USERID = this.ds_school_list.getColumn(0,"USERID");
        			var USERGRPTYPE = this.ds_school_list.getColumn(0,"USERGRPTYPE");
        			var USERNM = this.ds_school_list.getColumn(0,"USERNM");
        			var TELNO = this.ds_school_list.getColumn(0,"TELNO");
        			var MOBILENO = this.ds_school_list.getColumn(0,"MOBILENO");
        			var USERSEQ_COM = this.ds_school_list.getColumn(0,"USERSEQ_COM");

        			this.Div.form.SURVSEQ.set_value(SURVSEQ);
        			this.Div.form.SURVKINDCD.set_value(SURVKINDCD);
        			this.Div.form.SCHCD.set_value(SCHCD);
        			this.Div.form.ORGCD.set_value(ORGCD);
        			this.Div.form.USERSEQ_COM.set_value(USERSEQ_COM);

        			if( USERID == null || USERID ==""){
        				this.Div.form.PROCTYPE.set_value("I");
        				this.Div.form.Div00.form.USERID.set_readonly(false);
        			}else{
        				this.Div.form.PROCTYPE.set_value("U");
        				this.Div.form.Div00.form.USERID.set_readonly(true);
        			}

        			this.Div.form.Div00.form.USERID.set_value(USERID);
        			this.Div.form.Div00.form.USERNM.set_value(USERNM);
        			this.Div.form.Div00.form.TELNO.set_value(TELNO);
        			this.Div.form.Div00.form.MOBILENO.set_value(MOBILENO);

        			// 전산담당자 유무
        			if( this.ds_school_list.getColumn(0, "CHGCOMYN" ) =="1"){
        				this.Div.form.Div00.form.in_chkBox_00.set_value(1);
        				this.chargeYnShow(1);
        			}else{
        				this.chargeYnShow(0);
        			}

        			var CHGCOMYN = this.ds_school_list.getColumn(0, "CHGCOMYN" );
        			if(CHGCOMYN != "1"){
        				this.Div.form.btn_req.set_visible(false);
        			}else{
        				this.Div.form.btn_req.set_visible(true);
        			}
        		}

        		if(serviceID == "saveChargeCompu"){

        			//this.selectChargeSchoolList();  //담당 학교 목록
        			//this.clearForm();

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			//alert("id :" + objApp.gds_rtn_result.getColumn(0, "RESULTVAL") );
        			if( resultVal =="O"){
        				this.alert("중복된 아이디가 존재 합니다.");
        			}else if( resultVal =="N"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				this.alert("저장 되었습니다.");

        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "USERID", this.Div.form.Div00.form.USERID.value );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "USERNM", this.Div.form.Div00.form.USERNM.value );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "TELNO", this.Div.form.Div00.form.TELNO.value );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "MOBILENO", this.Div.form.Div00.form.MOBILENO.value );

        				this.Div.form.PROCTYPE.set_value("U");
        				this.Div.form.btn_pub_charg.set_visible(false);

        			}

        		}
        		if(serviceID == "sendIdNotice"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			//alert("id :" + objApp.gds_rtn_result.getColumn(0, "RESULTVAL") );
        			if( resultVal =="O"){
        				this.alert("존재하지 않는 이메일주소 입니다.");
        			}else if( resultVal =="N"){
        				this.alert("전산담당자 정보가 존재하지 않습니다. 담당자 정보 입력 후 저장해주세요.");
        			}else{
        				this.alert("전산담당자의 이메일로 ID생성 안내메일이 전송되었습니다.");
        			}

        		}

        		if(serviceID == "deleteChargeCompu"){

        			//this.selectChargeSchoolList();  //담당 학교 목록
        			//this.clearForm();


        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			//alert("id :" + objApp.gds_rtn_result.getColumn(0, "RESULTVAL") );
        			if( resultVal =="O"){

        			}else if( resultVal =="N"){
        				this.alert("삭제 처리가 되지 않았습니다.");
        			}else{
        				this.alert("삭제 되었습니다.");

        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "USERID", "" );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "USERNM", "" );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "TELNO", "" );
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "MOBILENO", "" );
        				this.Div.form.btn_pub_charg.set_visible(true);
        				this.clearForm();
        			}

        		}
        		// 전산담당자 유무 저장
        		if(serviceID == "saveCheComyn"){
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			if( resultVal =="Y"){
        				this.ds_school_list.setColumn(this.ds_school_list.rowposition, "CHGCOMYN", this.Div.form.Div00.form.in_chkBox_00.value );

        				if("1"==this.Div.form.Div00.form.in_chkBox_00.value){
        					this.chargeYnShow(1);
        				}else{
        					this.chargeYnShow(0);
        				}
        				this.alert("설정 되었습니다.");
        			}

        		}
        		if(serviceID == "insertSurvHist"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal !="Y"){
        				this.alert("등록에 실패 했습니다.");
        			}else{
        				this.alert("전산담당자에게 자료 등록을 요청하였습니다.");
        				//this.ds_school_list.setColumn(this.ds_school_list.rowposition, "SURVPROSTATUSCD" ,'6');    // 상태코드
        			}

        		}


         	}
        }

        this.fp02m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(idx, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");

        	this.lfn_divSurvSet();
        	this.Div.form.Div00.set_enable(true);
        	this.selectChargeCompuInfo();

        	if(Number( this.fv_SURVPROSTATUSCD )  < 4){
        		//제출상태가 아니면 알랏을띄우고
        		alert("연계결과를 제출하지 않았습니다.");
        		this.utlf_enableBtn(this.Div,false);
        	}
        	if(this.fv_CHANGEYN =="Y"){
        		this.utlf_enableBtn(this.Div,false);
        	}
        };

        this.clearForm = function(){

        	this.Div.form.SURVSEQ.set_value("");
        	this.Div.form.SURVKINDCD.set_value("");

        	this.Div.form.SCHCD.set_value("");
        	this.Div.form.ORGCD.set_value("");
        	this.Div.form.USERSEQ_COM.set_value("");

        	this.Div.form.PROCTYPE.set_value("");
        	this.Div.form.Div00.form.USERID.set_readonly(false);

        	//alert(USERID);
        	this.Div.form.Div00.form.USERID.set_value("");
        	this.Div.form.Div00.form.USERNM.set_value("");
        	this.Div.form.Div00.form.TELNO.set_value("");
        	this.Div.form.Div00.form.MOBILENO.set_value("");

        };


        // 전산담당자 등록폼 전시여부
        this.chargeYnShow = function(val){

        	if(val =="1"){
        		this.Div.form.Div00.form.USERID.set_visible(true);
        		this.Div.form.Div00.form.USERNM.set_visible(true);
        		this.Div.form.Div00.form.TELNO.set_visible(true);
        		this.Div.form.Div00.form.MOBILENO.set_visible(true);

        		this.Div.form.Div00.form.Static00.set_visible(true);
        		this.Div.form.Div00.form.Static00_00.set_visible(true);
        		this.Div.form.Div00.form.Static00_01.set_visible(true);
        		this.Div.form.Div00.form.Static00_03_01.set_visible(true);
        		this.Div.form.Div00.form.Static00_02.set_visible(true);
        		this.Div.form.Div00.form.btn_save.set_visible(true);
        		this.Div.form.Div00.form.btn_del.set_visible(true);

        		if( this.ds_school_list.getColumn(this.ds_school_list.rowposition, "USERID" ) == undefined ){
        			this.Div.form.btn_pub_charg.set_visible(true);
        		}
        	}else{
        		this.Div.form.Div00.form.USERID.set_visible(false);
        		this.Div.form.Div00.form.USERNM.set_visible(false);
        		this.Div.form.Div00.form.TELNO.set_visible(false);
        		this.Div.form.Div00.form.MOBILENO.set_visible(false);

        		this.Div.form.Div00.form.Static00.set_visible(false);
        		this.Div.form.Div00.form.Static00_00.set_visible(false);
        		this.Div.form.Div00.form.Static00_01.set_visible(false);
        		this.Div.form.Div00.form.Static00_03_01.set_visible(false);
        		this.Div.form.Div00.form.Static00_02.set_visible(false);
        		this.Div.form.Div00.form.btn_save.set_visible(false);
        		this.Div.form.Div00.form.btn_del.set_visible(false);
        		this.Div.form.btn_pub_charg.set_visible(false);
        	}
        };


        this.selectChargeCompuInfo = function(){

        	var strParam = "";
        	strParam += "tmp="					+ "a" 					+ "ª";
        	strParam += "STATUSparamCD="		+ "0081" 				+ "ª";  // 졸업자
        	strParam += "SURVSEQ="				+  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="			+  this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="				+  this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="				+  this.fv_ORGCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "해당 학교의 전산담당자 조회", strParam);  //해당 학교의 전산담당자 조회
        	this.gfnTransaction("selectChargeCompuInfo",
        						"/swiss/fp/baserel/selectChargeCompuInfo.do",
        						"dsSearch=dsSearch",
        						"ds_school_list=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        // 전산담당자정보 세팅
        this.setChargeCompuInfo = function(obj, e)
        {
        	var nRow = 0;
        	var schoolTitle = this.ds_school_list.getColumn(nRow,"SCHNM") ;
        	schoolTitle += "("+ this.ds_school_list.getColumn(nRow,"ORGNM") + ") 담당자 등록";
        	//this.Div.form.tableTitle.set_text(schoolTitle)  ;
        	//alert(schoolTitle);
        	this.Div.form.Div00.form.Static00_03.set_text(schoolTitle)  ;


        	var SURVSEQ = this.ds_school_list.getColumn(nRow,"SURVSEQ");

        	//alert("clk survseq="+SURVSEQ);

        	var SURVKINDCD = this.ds_school_list.getColumn(nRow,"SURVKINDCD");
        	var SCHCD = this.ds_school_list.getColumn(nRow,"SCHCD");
        	var ORGCD = this.ds_school_list.getColumn(nRow,"ORGCD");

        	var USERID = this.ds_school_list.getColumn(nRow,"USERID");
        	var USERGRPTYPE = this.ds_school_list.getColumn(nRow,"USERGRPTYPE");
        	var USERNM = this.ds_school_list.getColumn(nRow,"USERNM");
        	var TELNO = this.ds_school_list.getColumn(nRow,"TELNO");
        	var MOBILENO = this.ds_school_list.getColumn(nRow,"MOBILENO");
        	var USERSEQ_COM = this.ds_school_list.getColumn(nRow,"USERSEQ_COM");




        	this.Div.form.SURVSEQ.set_value(SURVSEQ);
        	this.Div.form.SURVKINDCD.set_value(SURVKINDCD);

        	this.Div.form.SCHCD.set_value(SCHCD);
        	this.Div.form.ORGCD.set_value(ORGCD);
        	this.Div.form.USERSEQ_COM.set_value(USERSEQ_COM);

        	if( USERID == null || USERID ==""){
        		this.Div.form.PROCTYPE.set_value("I");
        		this.Div.form.Div00.form.USERID.set_readonly(false);

        		if( this.ds_school_list.getColumn(nRow, "CHGCOMYN" ) =="1"){
        			this.Div.form.btn_pub_charg.set_visible(true);
        		}else{
        			this.Div.form.btn_pub_charg.set_visible(false);
        		}
        	}else{
        		this.Div.form.PROCTYPE.set_value("U");
        		this.Div.form.Div00.form.USERID.set_readonly(true);
        		this.Div.form.btn_pub_charg.set_visible(false);
        	}


        	//alert(USERID);
        	this.Div.form.Div00.form.USERID.set_value(USERID);
        	this.Div.form.Div00.form.USERNM.set_value(USERNM);
        	this.Div.form.Div00.form.TELNO.set_value(TELNO);
        	this.Div.form.Div00.form.MOBILENO.set_value(MOBILENO);

        	if( this.ds_school_list.getColumn(nRow, "CHGCOMYN" ) =="1"){
        		this.Div.form.Div00.form.in_chkBox_00.set_value(1);
        		this.chargeYnShow(1);
        	}else{
        		this.Div.form.Div00.form.in_chkBox_00.set_value(false);
        		this.chargeYnShow(0);
        	}

        	var CHGCOMYN = this.ds_school_list.getColumn(nRow, "CHGCOMYN" );
        	if(CHGCOMYN != "1"){
        		this.Div.form.btn_req.set_visible(false);
        	}else{
        		this.Div.form.btn_req.set_visible(true);
        	}
        	//alert(CHGCOMYN);

        };


        // 전산담당자 유무 저장
        this.btn_comyn_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}
            //alert(this.ds_school_list.getColumn(this.ds_school_list.rowposition, "CHGCOMYN" ) );

        	var SURVPROSTATUSCD =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "SURVPROSTATUSCD" );    // 상태코드
        	//alert(SURVPROSTATUSCD);

        	// 제출조건
        	if( SURVPROSTATUSCD == "12" ){
        		this.alert(" KEDI-승인상태로 변경하실 수 없습니다. \n  수정요청을 원하시면 KEDI로 연락 후 반려처리 하셔야 합니다. ");
        		return;
        	}

        	if(!this.confirm("전산담당자존재 유무 변경시 조사진행 상태가 \n취업-학과정보 제출완료로 변경 됩니다.\n변경 하겠습니까?")){
        		return;
        	}

        	var v_chgpsnyn ="";
        	if("1"==this.Div.form.Div00.form.in_chkBox_00.value){
        		v_chgpsnyn = '1';

        		if(!this.confirm("전산담당자존재로 설정 하겠습니까?")){

        			if( this.ds_school_list.getColumn(this.ds_school_list.rowposition, "CHGCOMYN" ) =="1"){
        				this.Div.form.Div00.form.in_chkBox_00.set_value(1);
        			}else{
        				this.Div.form.Div00.form.in_chkBox_00.set_value(false);
        			}

        			return;
        		}

        	}else{
        		v_chgpsnyn = '2';
        		if(!this.confirm("전산담당자 미존재로 설정 하겠습니까?")){

        			if( this.ds_school_list.getColumn(this.ds_school_list.rowposition, "CHGCOMYN" ) =="1"){
        				this.Div.form.Div00.form.in_chkBox_00.set_value(1);
        			}else{
        				this.Div.form.Div00.form.in_chkBox_00.set_value(false);
        			}

        			return;
        		}
        	}

        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.Div.form.SURVSEQ.value	  + "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.SURVKINDCD.value  + "ª";
        	strParam += "SCHCD="		+ this.Div.form.SCHCD.value		  + "ª";
        	strParam += "ORGCD="		+ this.Div.form.ORGCD.value		  + "ª";
        	strParam += "CHGCOMYN="		+ v_chgpsnyn		              + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "전산담당자 유무 저장", strParam); //전산담당자 유무 저장
        	this.gfnTransaction("saveCheComyn",
        						"/swiss/fp/baserel/saveCheComyn.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);


        };


        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(this.Div.form.SCHCD.value == null || this.Div.form.SCHCD.value == ""){
        		alert("학교를 선택 해 주세요.");
        		return;
        	}

        	if(this.Div.form.Div00.form.USERNM.value == null || this.Div.form.Div00.form.USERNM.value == ""){
        		alert("성명을 입력하세요.");
        		this.Div.form.Div00.form.USERID.setFocus();
        		return;
        	}

        	if(this.Div.form.PROCTYPE.value == "I"){
        		if(this.Div.form.Div00.form.USERID.value == null || this.Div.form.Div00.form.USERID.value == ""){
        			alert("사용자ID를 입력하세요.");
        			this.Div.form.Div00.form.USERID.setFocus();
        			return;
        		}
        		var emailRule = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐 경우
        		if(!emailRule.test( this.Div.form.Div00.form.USERID.value )) {
        			alert("이메일 형식이 올바르지 않습니다.");
        					return;
        		}
        	}



        	if(this.Div.form.Div00.form.TELNO.value == null || this.Div.form.Div00.form.TELNO.value == ""){
        		alert("전화번호를 입력하세요.");
        		this.Div.form.Div00.form.TELNO.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.MOBILENO.value == null || this.Div.form.Div00.form.MOBILENO.value == ""){
        		alert("휴대폰번호를 입력하세요.");
        		this.Div.form.Div00.form.MOBILENO.setFocus();
        		return;
        	}



        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	//alert(this.opener.cmb_select_survseq.value);
        	var strParam = "";
        	//strParam += "SURVSEQ="		+ this.opener.cmb_select_survseq.value 	+ "ª";
        	//strParam += "SURVKINDCD="		+ this.opener.cmb_select_survkind.value + "ª";

        	strParam += "SURVSEQ="		+ this.Div.form.SURVSEQ.value		      + "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.SURVKINDCD.value	      + "ª";
        	strParam += "SCHCD="		+ this.Div.form.SCHCD.value		          + "ª";
        	strParam += "ORGCD="		+ this.Div.form.ORGCD.value		          + "ª";
        	strParam += "PROCTYPE="		+ this.Div.form.PROCTYPE.value		      + "ª";

        	strParam += "USERID="		+ this.Div.form.Div00.form.USERID.value   + "ª";
        	strParam += "USERNM="		+ this.Div.form.Div00.form.USERNM.value   + "ª";
        	strParam += "TELNO="		+ this.Div.form.Div00.form.TELNO.value    + "ª";
        	strParam += "MOBILENO="		+ this.Div.form.Div00.form.MOBILENO.value + "ª";
        	strParam += "USERGRPTYPE="  + "5"                                     + "ª";  // 전산담당자


        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "전산담당자 정보 저장", strParam); //전산담당자 정보 저장
        	this.gfnTransaction("saveChargeCompu",
        						"/swiss/fp/baserel/saveChargeCompu.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        // id 생성 알림
        this.btn_sms_noti_onclick = function(obj,e)
        {

        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	if(this.Div.form.SCHCD.value == null || this.Div.form.SCHCD.value == ""){
        		alert("학교를 선택 해 주세요.");
        		return;
        	}

        	//alert(this.ds_school_list.getColumn(this.ds_school_list.rowposition,"USERID"));
        	//if(this.Div.form.Div00.form.USERID.value == null || this.Div.form.Div00.form.USERID.value == ""){
        	if(this.ds_school_list.getColumn(this.ds_school_list.rowposition,"USERID") == null || this.ds_school_list.getColumn(this.ds_school_list.rowposition,"USERID") == ""){
        		alert("전산담당자 정보가 존재하지 않습니다. 담당자 정보 입력 후 저장해주세요.");
        		return;
        	}

        	var strParam = "";

        	strParam += "USERID="		+ this.Div.form.Div00.form.USERID.value + "ª";
        	strParam += "USERNM="		+ this.Div.form.Div00.form.USERNM.value + "ª";
        	strParam += "MOBILENO="		+ this.Div.form.Div00.form.MOBILENO.value + "ª";

        	var EMAILADDR = this.ds_school_list.getColumn(this.ds_school_list.rowposition,"EMAILADDR");
        	if(EMAILADDR =="" || EMAILADDR == null){
        		strParam += "EMAILADDR="		+ this.Div.form.Div00.form.USERID.value + "ª";
        	}else{
        		strParam += "EMAILADDR="		+ this.ds_school_list.getColumn(this.ds_school_list.rowposition,"USERID") + "ª";
        	}

        	//alert(3);

        	strParam += "SURVSEQ="		+ this.Div.form.SURVSEQ.value	+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.SURVKINDCD.value+ "ª";
        	strParam += "SCHCD="		+ this.Div.form.SCHCD.value		+ "ª";
        	strParam += "ORGCD="		+ this.Div.form.ORGCD.value		+ "ª";
        	strParam += "STATUSCD="		+ "6"		                    + "ª";	// 전산 ~인적정보 등록요청

        	//alert(this.Div.form.Div00.form.USERNM.value);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "ID생성 알림", strParam);  //ID생성 알림
        	this.gfnTransaction("sendIdNotice",
        						"/swiss/fp/baserel/sendIdNotice.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        // 전산담당자 삭제
        this.btn_del_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}
        	if(this.Div.form.SCHCD.value == null || this.Div.form.SCHCD.value == ""){
        		alert("학교를 선택 해 주세요.");
        		return;
        	}
        	if(this.Div.form.Div00.form.MOBILENO.value == null || this.Div.form.Div00.form.MOBILENO.value == ""){
        		alert("삭제할 정보가 없습니다.");
        		this.Div.form.Div00.form.MOBILENO.setFocus();
        		return;
        	}

        	if(!this.confirm(" 전산 담당자는 다음조사에서도 지속적으로 사용 됩니다. \n 그래도 삭제 하시겠습니까?")){
        		return;
        	}


        	var strParam = "";
        	//alert(this.Div.form.Div00.form.USERID.value);

        	strParam += "PROCTYPE="		+ "D" + "ª";
        	strParam += "USERID="		+ this.Div.form.Div00.form.USERID.value + "ª";
        	strParam += "USERNM="		+ this.Div.form.Div00.form.USERNM.value + "ª";
        	strParam += "USERSEQ_COM="	+ this.Div.form.USERSEQ_COM.value       + "ª";
        	strParam += "SCHCD="		+ this.Div.form.SCHCD.value		        + "ª";
        	strParam += "ORGCD="		+ this.Div.form.ORGCD.value		        + "ª";

        	//alert(this.Div.form.Div00.form.USERNM.value);

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "전산담당자 정보 삭제", strParam); //전산담당자 정보 삭제
        	this.gfnTransaction("deleteChargeCompu",
        						"/swiss/fp/baserel/deleteChargeCompu.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);


        };



        // 전산등록 요청
        this.btn_reg_req = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}

        	var CHGCOMYN =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "CHGCOMYN" );    // 전산담당자 유무
        	var SURVPROSTATUSCD =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "SURVPROSTATUSCD" );    // 상태코드

        	//alert("in btn clk : "+SURVPROSTATUSCD);

        	// 요청
        	if( CHGCOMYN != "1" ){
        		this.alert("전산담당자존재시에만 요청가능합니다.");
        		return;
        	}

        	//alert("["+SURVPROSTATUSCD+"]");
        	// 제출조건

        	if( SURVPROSTATUSCD != "4" ){
        		this.alert("취업-졸업자수 제출완료 상태에서만 요청할 수 있습니다.");
        		return;
        	}


        	if(this.Div.form.SCHCD.value == null || this.Div.form.SCHCD.value == ""){
        		alert("학교를 선택 해 주세요.");
        		return;
        	}
        	if(this.Div.form.Div00.form.MOBILENO.value == null || this.Div.form.Div00.form.MOBILENO.value == ""){
        		alert("휴대폰번호를 입력하세요.");
        		this.Div.form.Div00.form.MOBILENO.setFocus();
        		return;
        	}


        	var strParam = "";

        	strParam += "USERID="		+ this.Div.form.Div00.form.USERID.value   + "ª";
        	strParam += "USERNM="		+ this.Div.form.Div00.form.USERNM.value   + "ª";
        	strParam += "MOBILENO="		+ this.Div.form.Div00.form.MOBILENO.value + "ª";

        	strParam += "SURVSEQ="		+ this.Div.form.SURVSEQ.value		      + "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.SURVKINDCD.value		  + "ª";
        	strParam += "SCHCD="		+ this.Div.form.SCHCD.value		          + "ª";
        	strParam += "ORGCD="		+ this.Div.form.ORGCD.value		          + "ª";


        	strParam += "STATUSCD="		+ "6"		+ "ª";	// 전산 ~인적정보 등록요청

        	//alert(this.Div.form.Div00.form.USERNM.value);

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "자료등록 요청하기", strParam);  //자료등록 요청하기
        	this.gfnTransaction("insertSurvHist",
        						"/swiss/fp/baserel/insertSurvHist.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);



        };

        // 전산담당자 공유
        this.btn_pub_onclick = function(obj,e)
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return;
        	}
        	var SCHCD =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "SCHCD" ); // 학교코드
        	var ORGCD =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "ORGCD" );// 본분교

        	var SCHNM =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "SCHNM" );// 본분교
        	var ORGNM =  this.ds_school_list.getColumn(this.ds_school_list.rowposition, "ORGNM" );// 본분교

        	var objFrame = new ChildFrame();
        	var arr = new Array();
        	//arr["SCHCDORGCD"] = this.Div.form.sub_search.form.sel_schooNm.value;

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1"
        					  , 0
        					  , 0
        					  , 750
        					  , 550
        					  , null
        					  , null
        					  , "FP::fp02p00.xfdl");

        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	//var objParam = {param1:SCHCD, param2:ORGCD};
        	var objParam = {param1:SCHCD, param2:ORGCD,SURVSEQ:this.fv_SURVSEQ, SURVKINDCD:this.fv_SURVKINDCD  ,SCHNM:SCHNM, ORGNM:ORGNM, MENUNM:this.fv_MENUNM};
        	objChildFrame.showModal(this.getOwnerFrame()
        						  , objParam
        						  , this
        						  , "fn_popupCallback");

        };

        // 전산공유 콜백
        this.fn_saveResult = function(saveStr,saveFl)
        {
        		this.selectChargeCompuInfo();  //학교전산담당자 정보
        		this.setChargeCompuInfo();
        };

        //메뉴이동
        this.lfn_goMenu = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var menuid = obj.id ;

        	if("5" == this.fv_USERGRPTYPE){
        		if("gp03m00" !=menuid && "gp04m00" !=menuid
        			&& "gp05m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        	}

        	this.fn_goPage("GP::"+menuid +".xfdl");
        };

        this.lfn_divSurvSet = function(){

        	/*조사기준, 조사기간 설정 : 현재시간에 해당하는 설정 확인*/
        	var toDate     = objApp.gds_param.getColumn(0, "TODATE");
        	var survStrtdt = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        	var survEnddt  = objApp.gds_param.getColumn(0, "SURVENDDT");
        	if(toDate >= survStrtdt && toDate <= survEnddt){
        		this.fv_SURVSEQ = objApp.gds_param.getColumn(0, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_param.getColumn(0, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_param.getColumn(0, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_param.getColumn(0, "SURVNM");

        	}else{
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.sub_research02.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research02.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research02.form.reser_obj_result.set_text(survinfo) ;

        	// ----------- 선택 학교 조사기간 확인
        	if(this.fv_SURVSTRTDT > toDate || this.fv_SURVENDDT < toDate){
        		this.fv_SURVTERM =  "N";
        	}else{
        		this.fv_SURVTERM =  "Y";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fp02m00_onload,this);
            this.Div.form.stepArea00_01.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea00_01.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_sms_noti.addEventHandler("onclick",this.btn_sms_noti_onclick,this);
            this.Div.form.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div.form.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.Div00.form.Static00_03.addEventHandler("onclick",this.Div_Div00_Static00_03_onclick,this);
            this.Div.form.Div00.form.Static00_03_01_00.addEventHandler("onclick",this.Div_Div00_Static00_03_01_00_onclick,this);
            this.Div.form.Div00.form.btn_save00.addEventHandler("onclick",this.btn_comyn_onclick,this);
            this.Div.form.btn_req.addEventHandler("onclick",this.btn_reg_req,this);
            this.Div.form.btn_pub_charg.addEventHandler("onclick",this.btn_pub_onclick,this);
        };

        this.loadIncludeScript("gp02m00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
