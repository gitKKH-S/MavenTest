(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("rt12m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsView", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsViewAll", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AREA\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsActive", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","740",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","740",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","740",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","120","30",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("분석자료");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","20","80","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("조사기준");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00:10","20","220","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","416","20","94","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학교-본분교");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("in_edit_sch","Static00_01_01:10","20","280","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_sch","in_edit_sch:108","20","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","506","120","490","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_datacolumn("SCHORGNM");
            obj.set_codecolumn("SCHORGCD");
            obj.set_innerdataset("dsSchool");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","30","Div00:20","1200","90",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt00","300","30","140","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("졸업상황 총괄표");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_00","40","24","180","40",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("총괄표");
            obj.set_cssclass("btn_sty11");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_enable("false");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","30","Div01:20","1200","90",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt03","740","30","140","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("소계열");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_rpt04","960","30","140","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("학과별-계열별");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_rpt01","300","30","140","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("5대계열");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_rpt02","btn_rpt01:80","30","140","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7대계열");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_00_00","40","24","180","40",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("4");
            obj.set_text("계열별");
            obj.set_cssclass("btn_sty11");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_enable("false");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div03","30","Div02:20","1200","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt05","300","30","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("0");
            obj.set_text("취업현황");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt06","520","30","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("유지취업");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt07","740","30","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("산업분류");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt08","960","30","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("기업규모");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt09","300","80","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("기업유형");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt10","520","80","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("근무지역");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt12","960","80","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("7");
            obj.set_text("자격증취득");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt11","740","80","140","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("6");
            obj.set_text("초임급여");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_00_00_00","40","44","180","40",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("8");
            obj.set_text("설립·지역별");
            obj.set_cssclass("btn_sty11");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_enable("false");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div04","30","534","1200","190",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_rpt13","300","30","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("0");
            obj.set_text("취업현황");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt14","520","30","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("1");
            obj.set_text("유지취업");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt16","960","30","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("3");
            obj.set_text("기업규모");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt15","740","30","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("2");
            obj.set_text("산업분류");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt17","300","80","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("4");
            obj.set_text("기업유형");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt18","520","80","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("5");
            obj.set_text("근무지역");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt20","960","80","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("7");
            obj.set_text("자격증취득");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt19","740","80","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("6");
            obj.set_text("초임급여");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt21","300","130","140","30",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("8");
            obj.set_text("자격증직무");
            obj.set_cssclass("btn_sty05");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div04.addChild(obj.name, obj);

            obj = new Button("btn_rpt01_00_00_00_00","40","70","180","40",null,null,null,null,null,null,this.Div.form.Div04.form);
            obj.set_taborder("9");
            obj.set_text("학과별");
            obj.set_cssclass("btn_sty11");
            obj.set_font("bold 18px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_enable("false");
            this.Div.form.Div04.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,740,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("rt12m00.xfdl","CM::common.xjs");
        this.registerScript("rt12m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD= "" ;
        this.fv_ORGCD= "";
        this.fv_USERGRPTYPE="";
        this.fv_UNIGRADENM="";

        this.fv_MENUID = "rt12m00";
        this.fv_MENUNM = "조사결과>분석자료";

        this.rt00_status = 0;
        this.rt01_status = 0;
        this.rt02_status = 0;
        this.rt03_status = 0;
        this.rt04_status = 0;
        this.rt05_status = 0;
        this.rt06_status = 0;
        this.rt07_status = 0;
        this.rt08_status = 0;
        this.rt09_status = 0;
        this.rt10_status = 0;
        this.rt11_status = 0;
        this.rt12_status = 0;
        this.rt13_status = 0;
        this.rt14_status = 0;
        this.rt15_status = 0;
        this.rt16_status = 0;
        this.rt17_status = 0;
        this.rt18_status = 0;
        this.rt19_status = 0;
        this.rt20_status = 0;
        this.rt21_status = 0;

        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		//trace(errCD);
        		//trace(errMSG);
        	}else{
        		if(serviceID == "selectSurvReg"){
        		//alert("rtn selectsurvreg");
        		//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=this.dsSurvInfo.rowcount-1; i >= 0; i--){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				/* 조사기준11.12.31 이후 자료만 조회 2021-02-25 고객요청*/
        				 if(v_survseq.substr(0,2) < "17") this.dsSurvInfo.deleteRow(i);
        			}
        			for(var i=this.dsSurvInfo.rowcount-1; i >= 0; i--){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				/* 모든 조사기준에서 06.01 자료 제외 2021-02-25 고객요청*/
        				if(v_survseq.substr(2,4) == "0601") this.dsSurvInfo.deleteRow(i);
        			}

        			this.Div.form.Div00.form.in_cb_sruvseq.set_index(0);

        			var tmpSurvseq=this.Div.form.Div00.form.in_cb_sruvseq.value;
        			//alert("bef chkView");

        			this.chkViewAll(tmpSurvseq,this.fv_MENUID);

        			/*
        			this.chkView(tmpSurvseq,this.fv_MENUID,'00');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'01');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'02');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'03');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'04');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'05');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'06');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'07');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'08');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'09');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'10');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'11');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'12');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'13');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'14');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'15');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'16');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'17');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'18');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'19');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'20');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'21');
        			*/
        		}

        		if(serviceID == "chkViewAll"){
        			//alert("in all");
        			//alert("rtn chkView2");
        			for(var lcnt=0;lcnt<this.dsViewAll.rowcount;lcnt++){
        				var CHKREPORT = this.dsViewAll.getColumn(lcnt,"REPORT");
        				var CHKSTATUS = this.dsViewAll.getColumn(lcnt,"STATUS");
        				//alert("RTN REPORT = "+CHKREPORT+", status="+CHKSTATUS);

        				if(CHKREPORT=="00" && CHKSTATUS=="1"){
        					this.Div.form.Div01.form.btn_rpt00.set_background("#ffffff");
        					this.rt00_status = 1;
        				}
        				if(CHKREPORT=="00" && CHKSTATUS=="0"){
        					this.Div.form.Div01.form.btn_rpt00.set_background("#dbdbdb");
        					this.rt00_status = 0;
        				}

        				if(CHKREPORT=="01" && CHKSTATUS=="1"){
        					this.Div.form.Div02.form.btn_rpt01.set_background("#ffffff");
        					this.rt01_status = 1;
        				}
        				if(CHKREPORT=="01" && CHKSTATUS=="0"){
        					this.Div.form.Div02.form.btn_rpt01.set_background("#dbdbdb");
        					this.rt01_status = 0;
        				}
        				if(CHKREPORT=="02" && CHKSTATUS=="1"){
        					this.Div.form.Div02.form.btn_rpt02.set_background("#ffffff");
        					this.rt02_status = 1;
        				}
        				if(CHKREPORT=="02" && CHKSTATUS=="0"){
        					this.Div.form.Div02.form.btn_rpt02.set_background("#dbdbdb");
        					this.rt02_status = 0;
        				}
        				if(CHKREPORT=="03" && CHKSTATUS=="1"){
        					this.Div.form.Div02.form.btn_rpt03.set_background("#ffffff");
        					this.rt03_status = 1;
        				}
        				if(CHKREPORT=="03" && CHKSTATUS=="0"){
        					this.Div.form.Div02.form.btn_rpt03.set_background("#dbdbdb");
        					this.rt03_status = 0;
        				}
        				if(CHKREPORT=="04" && CHKSTATUS=="1"){
        					this.Div.form.Div02.form.btn_rpt04.set_background("#ffffff");
        					this.rt04_status = 1;
        				}
        				if(CHKREPORT=="04" && CHKSTATUS=="0"){
        					this.Div.form.Div02.form.btn_rpt04.set_background("#dbdbdb");
        					this.rt04_status = 0;
        				}



        				if(CHKREPORT=="05" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt05.set_background("#ffffff");
        					this.rt05_status = 1;
        				}
        				if(CHKREPORT=="05" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt05.set_background("#dbdbdb");
        					this.rt05_status = 0;
        				}
        				if(CHKREPORT=="06" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt06.set_background("#ffffff");
        					this.rt06_status = 1;
        				}
        				if(CHKREPORT=="06" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt06.set_background("#dbdbdb");
        					this.rt06_status = 0;
        				}
        				if(CHKREPORT=="07" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt07.set_background("#ffffff");
        					this.rt07_status = 1;
        				}
        				if(CHKREPORT=="07" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt07.set_background("#dbdbdb");
        					this.rt07_status = 0;
        				}
        				if(CHKREPORT=="08" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt08.set_background("#ffffff");
        					this.rt08_status = 1;
        				}
        				if(CHKREPORT=="08" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt08.set_background("#dbdbdb");
        					this.rt08_status = 0;
        				}
        				if(CHKREPORT=="09" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt09.set_background("#ffffff");
        					this.rt09_status = 1;
        				}
        				if(CHKREPORT=="09" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt09.set_background("#dbdbdb");
        					this.rt09_status = 0;
        				}
        				if(CHKREPORT=="10" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt10.set_background("#ffffff");
        					this.rt10_status = 1;
        				}
        				if(CHKREPORT=="10" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt10.set_background("#dbdbdb");
        					this.rt10_status = 0;
        				}
        				if(CHKREPORT=="11" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt11.set_background("#ffffff");
        					this.rt11_status = 1;
        				}
        				if(CHKREPORT=="11" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt11.set_background("#dbdbdb");
        					this.rt11_status = 0;
        				}
        				if(CHKREPORT=="12" && CHKSTATUS=="1"){
        					this.Div.form.Div03.form.btn_rpt12.set_background("#ffffff");
        					this.rt12_status = 1;
        				}
        				if(CHKREPORT=="12" && CHKSTATUS=="0"){
        					this.Div.form.Div03.form.btn_rpt12.set_background("#dbdbdb");
        					this.rt12_status = 0;
        				}


        				if(CHKREPORT=="13" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt13.set_background("#ffffff");
        					this.rt13_status = 1;
        				}
        				if(CHKREPORT=="13" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt13.set_background("#dbdbdb");
        					this.rt13_status = 0;
        				}
        				if(CHKREPORT=="14" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt14.set_background("#ffffff");
        					this.rt14_status = 1;
        				}
        				if(CHKREPORT=="14" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt14.set_background("#dbdbdb");
        					this.rt14_status = 0;
        				}
        				if(CHKREPORT=="15" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt15.set_background("#ffffff");
        					this.rt15_status = 1;
        				}
        				if(CHKREPORT=="15" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt15.set_background("#dbdbdb");
        					this.rt15_status = 0;
        				}
        				if(CHKREPORT=="16" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt16.set_background("#ffffff");
        					this.rt16_status = 1;
        				}
        				if(CHKREPORT=="16" && CHKSTATUS=="0"){
        						this.Div.form.Div04.form.btn_rpt16.set_background("#dbdbdb");
        					this.rt16_status = 0;
        				}
        				if(CHKREPORT=="17" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt17.set_background("#ffffff");
        					this.rt17_status = 1;
        				}
        				if(CHKREPORT=="17" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt17.set_background("#dbdbdb");
        					this.rt17_status = 0;
        				}
        				if(CHKREPORT=="18" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt18.set_background("#ffffff");
        					this.rt18_status = 1;
        				}
        				if(CHKREPORT=="18" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt18.set_background("#dbdbdb");
        					this.rt18_status = 0;
        				}
        				if(CHKREPORT=="19" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt19.set_background("#ffffff");
        					this.rt19_status = 1;
        				}
        				if(CHKREPORT=="19" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt19.set_background("#dbdbdb");
        					this.rt19_status = 0;
        				}
        				if(CHKREPORT=="20" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt20.set_background("#ffffff");
        					this.rt20_status = 1;
        				}
        				if(CHKREPORT=="20" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt20.set_background("#dbdbdb");
        					this.rt20_status = 0;
        				}
        				if(CHKREPORT=="21" && CHKSTATUS=="1"){
        					this.Div.form.Div04.form.btn_rpt21.set_background("#ffffff");
        					this.rt21_status = 1;
        				}
        				if(CHKREPORT=="21" && CHKSTATUS=="0"){
        					this.Div.form.Div04.form.btn_rpt21.set_background("#dbdbdb");
        					this.rt21_status = 0;
        				}
        			}

        		}
        		if(serviceID == "schoolInfo"){

        			var idx = this.dsSchool.findRowExpr("SCHCD=='"+this.fv_SCHCD+"'",0);
        			var schText = this.dsSchool.getColumn(idx, "SCHORGNM");

        			this.Div.form.Div00.form.in_edit_sch.set_value(schText);

        			if(this.dsSchool.getColumn(idx,"SCHORGCD").substring(9,10) == "M"){
        				this.fv_UNIGRADENM = "대학원";
        			}else{
        				this.fv_UNIGRADENM = "대학";
        			}

        		}
        		if(serviceID == "chkActive"){
        			//alert("rtn chkActive");
        			var chkCnt = this.dsActive.getColumn(idx, "CNT");
        			//alert("chkCnt="+chkCnt);
        			if(chkCnt==0){
        				alert("현재 사용이 불가능합니다.");
        				window.open('/','_self');
        			}
        		}
         	}
        }

        this.rt12m00_onload = function(obj,e)
        {
        	this.chkActive();

        	this.Div.form.Div01.form.btn_rpt01_00.set_background("#00487E");
        	this.Div.form.Div02.form.btn_rpt01_00_00.set_background("#00487E");
        	this.Div.form.Div03.form.btn_rpt01_00_00_00.set_background("#00487E");
        	this.Div.form.Div04.form.btn_rpt01_00_00_00_00.set_background("#00487E");

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	//취업담당자4,전산담당자5,학과담당자6
        	if("4" == this.fv_USERGRPTYPE || "5" == this.fv_USERGRPTYPE || "6" == this.fv_USERGRPTYPE ){
        		this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        		this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        		this.Div.form.Div00.form.btn_sch.set_visible(false);
        		this.lfn_schoolInfo();
        	}else{
        		this.Div.form.Div00.form.btn_sch.set_visible(true);
        	}

        	this.lfn_selectSurvInfo();
        };

        this.btn_sch_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("sch_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMSchool.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };
        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}
        	if(strPopupID == "sch_popup"){
        		//this.alert("Return Value: " + strReturn);
        		//SCHCD/SCHNM/ORGCD/ORGNM
        		var arr = strReturn.split(",");
        		this.Div.form.Div00.form.in_edit_sch.set_value(arr[1]+"-"+arr[3]);
        		this.fv_SCHCD=arr[0];
        		this.fv_ORGCD=arr[2];
        		this.fv_UNIGRADENM=arr[4];
        	}
        };


        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ "AG" 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/surv/selectSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsSurvInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.in_cb_sruvseq_onitemchanged = function(obj,e){
        			var tmpSurvseq=this.Div.form.Div00.form.in_cb_sruvseq.value;
        			//alert("bef chkView survseq="+tmpSurvseq);

        			this.chkViewAll(tmpSurvseq,this.fv_MENUID);

        			/*
        			this.chkView(tmpSurvseq,this.fv_MENUID,'00');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'01');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'02');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'03');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'04');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'05');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'06');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'07');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'08');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'09');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'10');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'11');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'12');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'13');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'14');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'15');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'16');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'17');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'18');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'19');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'20');
        			this.chkView(tmpSurvseq,this.fv_MENUID,'21');
        			*/
        }

        this.chkView = function(ins_survseq,ins_area,ins_report){
        	//alert("in chkview survseq="+ins_survseq+", report="+ins_report);

        	var strParam = "";
        	strParam += "SURVSEQ="		+ ins_survseq 		+ "ª";
        	strParam += "AREA="		+ ins_area 		+ "ª";
        	strParam += "REPORT="		+ ins_report 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());

        	this.gfnTransaction("chkView",
        						"/swiss/ad/user/chkView.do",
        						"dsSearch=dsSearch",
        						"dsView=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.chkViewAll = function(ins_survseq,ins_area){
        	//alert("in chkview survseq="+ins_survseq+", report="+ins_report);

        	var strParam = "";
        	strParam += "SURVSEQ="		+ ins_survseq 		+ "ª";
        	strParam += "AREA="		+ ins_area 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());

        	this.gfnTransaction("chkViewAll",
        						"/swiss/ad/user/chkViewAll.do",
        						"dsSearch=dsSearch",
        						"dsViewAll=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.lfn_schoolInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("schoolInfo",
        						"/swiss/cm/schoolInfo.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsSchool",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_Div01_btn_rpt00_onclick = function(obj,e)
        {
        	if(this.rt00_status == 1){
        		this.lfn_report("analysis/rt12r00","졸업상황 총괄표");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div02_btn_rpt01_onclick = function(obj,e)
        {
        	if(this.rt01_status == 1){
        		this.lfn_report("analysis/rt12r01","5대계열");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div02_btn_rpt02_onclick = function(obj,e)
        {
        	if(this.rt02_status == 1){
        		this.lfn_report("analysis/rt12r02","7대계열");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div02_btn_rpt03_onclick = function(obj,e)
        {
        	if(this.rt03_status == 1){
        		this.lfn_report("analysis/rt12r03","소계열");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}
        };

        this.Div_Div02_btn_rpt04_onclick = function(obj,e)
        {
        	if(this.rt04_status == 1){
        		this.lfn_report("analysis/rt12r04","학과별-계열별");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}
        };

        this.Div_Div03_btn_rpt05_onclick = function(obj,e)
        {
        	if(this.rt05_status == 1){
        		this.lfn_report("analysis/rt12r05","취업현황");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt06_onclick = function(obj,e)
        {
        	if(this.rt06_status == 1){
        		this.lfn_report("analysis/rt12r06","유지취업");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt07_onclick = function(obj,e)
        {
        	if(this.rt07_status == 1){
        		this.lfn_report("analysis/rt12r07","산업분류");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt08_onclick = function(obj,e)
        {
        	if(this.rt08_status == 1){
        		this.lfn_report("analysis/rt12r08","기업규모");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt09_onclick = function(obj,e)
        {
        	if(this.rt09_status == 1){
        		this.lfn_report("analysis/rt12r09","기업유형");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt10_onclick = function(obj,e)
        {
        	if(this.rt10_status == 1){
        		this.lfn_report("analysis/rt12r10","근무지역");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt11_onclick = function(obj,e)
        {
        	if(this.rt11_status == 1){
        		this.lfn_report("analysis/rt12r11","초임급여");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div03_btn_rpt12_onclick = function(obj,e)
        {
        	if(this.rt12_status == 1){
        		this.lfn_report("analysis/rt12r12","자격증취득");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt13_onclick = function(obj,e)
        {
        	if(this.rt13_status == 1){
        		this.lfn_report("analysis/rt12r13","취업현황");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}
        };

        this.Div_Div04_btn_rpt14_onclick = function(obj,e)
        {
        	if(this.rt14_status == 1){
        		this.lfn_report("analysis/rt12r14","유지취업");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt15_onclick = function(obj,e)
        {
        	if(this.rt15_status == 1){
        		this.lfn_report("analysis/rt12r15","산업분류");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt16_onclick = function(obj,e)
        {
        	if(this.rt16_status == 1){
        		this.lfn_report("analysis/rt12r16","기업규모");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt17_onclick = function(obj,e)
        {
        	if(this.rt17_status == 1){
        		this.lfn_report("analysis/rt12r17","기업유형");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt18_onclick = function(obj,e)
        {
        	if(this.rt18_status == 1){
        		this.lfn_report("analysis/rt12r18","근무지역");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt19_onclick = function(obj,e)
        {
        	if(this.rt19_status == 1){
        		this.lfn_report("analysis/rt12r19","초임급여");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt20_onclick = function(obj,e)
        {
        	if(this.rt20_status == 1){
        		this.lfn_report("analysis/rt12r20","자격증취득");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.Div_Div04_btn_rpt21_onclick = function(obj,e)
        {
        	if(this.rt21_status == 1){
        		this.lfn_report("analysis/rt12r21","자격증직무");
        	}else{
        		alert("해당년도에 제공되지 않는 장표입니다");
        	}

        };

        this.lfn_report = function(rpt,rptname)
        {
        	if("" == this.fv_SCHCD){
        		alert("학교를 선택해 주세요.");
        		return;
        	}
        	if("대학" != this.fv_UNIGRADENM)
        		rpt = rpt+"_2";

        	var SURVSEQ 	= this.Div.form.Div00.form.in_cb_sruvseq.value;
        	var SURVKINDCD 	= this.fv_SURVKINDCD;
        	var SCHCD  		= this.fv_SCHCD;
        	var ORGCD  		= this.fv_ORGCD;
        	var param = "SURVSEQ["+SURVSEQ+"] SCHCD["+SCHCD+"] ORGCD["+ORGCD+"] PRINT_GB[]";
        	//var param = "SURVSEQ[181231] SCHCD[53013600] ORGCD[1] PRINT_GB[]";
        	var objFrame = new ChildFrame();
        	var objParam = {param1:"rt/"+rpt+".mrd" , param2:param };
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, rptname, objParam.param1 + " " + param );  //접속기록
        	//var objParam = {param1:"rt/rt09r00_2.mrd" , param2:param };
        	//trace("rt/"+rpt+".mrd");

        	objFrame.init( rpt, null, null, 600, 600);
        	objFrame.set_showtitlebar(false);
        	objFrame.set_openalign("center middle");
        	objFrame.set_formurl( "CM::CMRdViewer.xfdl" );
        	objFrame.showModal(rpt ,this.getOwnerFrame() ,objParam );
        };

        this.chkActive = function(){
        	var strParam = "";
        	strParam += "PAGEID=" + this.fv_MENUID + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	//alert(strParam);
        	//return false;

        	//alert("start active");

        	this.gfnTransaction("chkActive",
        						"/swiss/ad/user/chkActive.do",
        						"dsSearch=dsSearch",
        						"dsActive=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.rt12m00_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.Div00.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.in_cb_sruvseq_onitemchanged,this);
            this.Div.form.Div00.form.in_edit_sch.addEventHandler("onkeydown",this.Div_sub_search_onkeydown,this);
            this.Div.form.Div00.form.btn_sch.addEventHandler("onclick",this.btn_sch_onclick,this);
            this.Div.form.Div00.form.in_cb_00.addEventHandler("onitemchanged",this.Div_div_school_in_cb_00_onitemchanged,this);
            this.Div.form.Div01.form.btn_rpt00.addEventHandler("onclick",this.Div_Div01_btn_rpt00_onclick,this);
            this.Div.form.Div01.form.btn_rpt01_00.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
            this.Div.form.Div02.form.btn_rpt03.addEventHandler("onclick",this.Div_Div02_btn_rpt03_onclick,this);
            this.Div.form.Div02.form.btn_rpt04.addEventHandler("onclick",this.Div_Div02_btn_rpt04_onclick,this);
            this.Div.form.Div02.form.btn_rpt01.addEventHandler("onclick",this.Div_Div02_btn_rpt01_onclick,this);
            this.Div.form.Div02.form.btn_rpt02.addEventHandler("onclick",this.Div_Div02_btn_rpt02_onclick,this);
            this.Div.form.Div02.form.btn_rpt01_00_00.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
            this.Div.form.Div03.form.btn_rpt05.addEventHandler("onclick",this.Div_Div03_btn_rpt05_onclick,this);
            this.Div.form.Div03.form.btn_rpt06.addEventHandler("onclick",this.Div_Div03_btn_rpt06_onclick,this);
            this.Div.form.Div03.form.btn_rpt07.addEventHandler("onclick",this.Div_Div03_btn_rpt07_onclick,this);
            this.Div.form.Div03.form.btn_rpt08.addEventHandler("onclick",this.Div_Div03_btn_rpt08_onclick,this);
            this.Div.form.Div03.form.btn_rpt09.addEventHandler("onclick",this.Div_Div03_btn_rpt09_onclick,this);
            this.Div.form.Div03.form.btn_rpt10.addEventHandler("onclick",this.Div_Div03_btn_rpt10_onclick,this);
            this.Div.form.Div03.form.btn_rpt12.addEventHandler("onclick",this.Div_Div03_btn_rpt12_onclick,this);
            this.Div.form.Div03.form.btn_rpt11.addEventHandler("onclick",this.Div_Div03_btn_rpt11_onclick,this);
            this.Div.form.Div03.form.btn_rpt01_00_00_00.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
            this.Div.form.Div04.form.btn_rpt13.addEventHandler("onclick",this.Div_Div04_btn_rpt13_onclick,this);
            this.Div.form.Div04.form.btn_rpt14.addEventHandler("onclick",this.Div_Div04_btn_rpt14_onclick,this);
            this.Div.form.Div04.form.btn_rpt16.addEventHandler("onclick",this.Div_Div04_btn_rpt16_onclick,this);
            this.Div.form.Div04.form.btn_rpt15.addEventHandler("onclick",this.Div_Div04_btn_rpt15_onclick,this);
            this.Div.form.Div04.form.btn_rpt17.addEventHandler("onclick",this.Div_Div04_btn_rpt17_onclick,this);
            this.Div.form.Div04.form.btn_rpt18.addEventHandler("onclick",this.Div_Div04_btn_rpt18_onclick,this);
            this.Div.form.Div04.form.btn_rpt20.addEventHandler("onclick",this.Div_Div04_btn_rpt20_onclick,this);
            this.Div.form.Div04.form.btn_rpt19.addEventHandler("onclick",this.Div_Div04_btn_rpt19_onclick,this);
            this.Div.form.Div04.form.btn_rpt21.addEventHandler("onclick",this.Div_Div04_btn_rpt21_onclick,this);
            this.Div.form.Div04.form.btn_rpt01_00_00_00_00.addEventHandler("onclick",this.Div_Div01_btn_rpt01_onclick,this);
        };

        this.loadIncludeScript("rt12m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
