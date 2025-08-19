(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,770);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVINFONM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPECD_6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_0\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_7\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","762",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","760",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","760",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","310","1200","420",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default default");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"단과대학명\"/><Cell col=\"1\" rowspan=\"2\" text=\"학과명\"/><Cell col=\"2\" rowspan=\"2\" text=\"학과소분류명\"/><Cell col=\"3\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"4\" rowspan=\"2\" text=\"졸업자\"/><Cell col=\"5\" colspan=\"5\" text=\"연계자료\"/><Cell col=\"10\" rowspan=\"2\" text=\"입력대상\" border=\"0px none,0,1px solid #e6c9c0,0px none\"/><Cell row=\"1\" col=\"5\" text=\"취업자\"/><Cell row=\"1\" col=\"6\" text=\"진학자\"/><Cell row=\"1\" col=\"7\" text=\"입대자\"/><Cell row=\"1\" col=\"8\" text=\"취업불가능자\"/><Cell row=\"1\" col=\"9\" text=\"제외인정자\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"1\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"2\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"3\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"4\" text=\"bind:JOBTYPECD_0\" editinputtype=\"normal\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:JOBTYPECD_1\" editinputtype=\"normal\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:JOBTYPECD_2\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:JOBTYPECD_3\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:JOBTYPECD_4\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:JOBTYPECD_6\" displaytype=\"number\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:JOBTYPECD_7\" border=\"0px none,0,1px solid #e6c9c0,0px none\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_0&quot;)\" editinputtype=\"digit\" displaytype=\"number\"/><Cell col=\"5\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_1&quot;)\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_2&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_3&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_4&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_6&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_7&quot;)\" border=\"0px none,0,0px none,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Static("st_status","30","270","110","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("취업통계진행상태 :");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_01","st_status:20","270","480","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_color("red");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","82","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st03","30","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","10","113","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","10","584","29",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date03","30","45","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date03:10","45","606","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Div("Div00","30","Div_surv:20","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_12","470","10","62","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("주야구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","label_12:20","10","250","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("CD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("label_11","30","10","50","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","1060","10","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","label_11:20","10","300","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("KEDI대학원(본교)");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("ag01m00","0","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag02m00","266","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag03m00","133","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01 on03");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00","399","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag05m01","532","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag07m00","665","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01","254","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01 ");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Button("btn_01","1130","270","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_02","1010","270","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,770,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag03m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ag03m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag03m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";
        this.fv_SURVPROSTATUSCDNM = "";
        this.fv_CHGPSNYN = "";
        this.fv_CHANGEYN = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";

        this.fv_TMPNULL = "";

        //글로벌 데이터셋을 사용하기 위한 objApp

        this.fv_MENUNM = "졸업후상황>연계결과";

        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)

        	}else{
        		if(serviceID == "listDept"){
        			this.dsDept.set_keystring("S:DEPTNM+");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");

        			this.Div_Div00_btn_search_onclick(this.Div.form.Div00.form.btn_search);
        		}
        		if(serviceID == "listDncd"){
        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"CD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");
        		}
        		if(serviceID == "listLinkResult"){
        			//trace(this.dsMain.saveXML());
        		}
        		if(serviceID == "insertTrag"){
        			//trace(this.dsMain.saveXML());
        			this.Div.form.label_01.set_text("미제출") ;
        			this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);
        			alert("초기화가 완료되었습니다.");
        		}
        		if(serviceID == "getTmp"){
        			for(var cnt=0;cnt<this.dsTmp.rowcount;cnt++){
        				var chkname = this.dsTmp.getColumn(cnt,"OPTNAME");
        				var chkopt = this.dsTmp.getColumn(cnt,"OPTVALUE");

        				//alert("chkname="+chkname+", chkopt="+chkopt);

        				if(chkname=="미연계자기타처리"){
        					if(chkopt=="1"){
        						//alert("in chk");
        						this.fv_TMPNULL = this.dsTmp.getColumn(cnt,"OPTVALUE");
        					}
        				}
        				//alert("chkstatus="+this.fv_DEPTSTATUS);
        			}
        		}
         	}
        }

        this.listDept = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID			+ "ª";
        	strParam += "TMPNULL="		+ this.fv_TMPNULL			+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSchool.saveXML());
        	this.gfnTransaction("listDept",
        						"/swiss/ag/linkresult/listDept.do",
        						"dsSearch=dsSearch",
        						"dsDept=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.listDncd = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("listDncd",
        						"/swiss/ag/linkresult/listDncd.do",
        						"dsSearch=dsSearch",
        						"dsDncd=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.ag03m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.fv_CHGPSNYN = objApp.gds_param.getColumn(0, "CHGPSNYN");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");

        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SURVPROSTATUSCDNM = objApp.gds_param.getColumn(0, "SURVPROSTATUSCDNM");

        	//alert(this.fv_CHGPSNYN);

        	if( "Y" == this.fv_CHANGEYN){
        		this.Div.form.btn_02.set_enable(false);
        	}else{
        		this.Div.form.btn_02.set_enable(true);
        	}

        	if("6" == this.fv_USERGRPTYPE){
        		this.Div.form.btn_02.set_visible(false);

        		this.Div.form.st_status.set_visible(false);
        		this.Div.form.label_01.set_visible(false);
        	}

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.getTmp();

        	this.listDept();										// 해당학교 학과목록

        	this.listDncd();										// 해당학교 주야간코드


        	this.Div.form.label_01.set_text(this.fv_SURVPROSTATUSCDNM) ;



        	//this.Div_Div00_btn_search_onclick();
        };


        this.getTmp = function()
        {
        	var optname = "미연계자기타처리";

        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "OPTNAME="		+ optname			+ "ª";

        	//alert("strParam="+strParam);
        	//return false;
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "null값 기타 설정값 조회", strParam);  //접속기록
        	//alert("01");
        	this.gfnTransaction("getTmp",
        						"/swiss/ag/config/getTmp.do",
        						"dsSearch=dsSearch",
        						"dsTmp=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_Div00_btn_search_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";

        	strParam += "DEPTCD="		+ this.Div.form.Div00.form.in_cb_01.value	+ "ª";
        	strParam += "DNCD="			+ this.Div.form.Div00.form.in_cb_02.value	+ "ª";

        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID			+ "ª";
        	strParam += "TMPNULL="		+ this.fv_TMPNULL			+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSchool.saveXML());

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록

        	this.gfnTransaction("listLinkResult",
        						"/swiss/ag/linkresult/listLinkResult.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_01_onclick = function(obj,e)
        {
        	if(this.dsMain.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	var strLog = "";
        	strLog += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strLog += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strLog += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strLog += "ORGCD="		+ this.fv_ORGCD				+ "ª";

        	strLog += "DEPTCD="		+ this.Div.form.Div00.form.in_cb_01.value	+ "ª";
        	strLog += "DNCD="			+ this.Div.form.Div00.form.in_cb_02.value	+ "ª";

        	strLog += "USERGRPTYPE="	+ this.fv_USERGRPTYPE		+ "ª";
        	strLog += "USERID="		+ this.fv_USERID			+ "ª";
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strLog);  //접속기록

        	this.utlf_excelDownload("연계결과",this.Div.form.gd_00,this.Export00_onsuccess);

        };
        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
        }
        this.btn_02_onclick = function(obj,e)
        {
        	if(!this.confirm("기존에 등록한 데이터는 모두 삭제됩니다.\r\n계속 진행하시겠습니까?")) return;
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID			+ "ª";
        	strParam += "TMPNULL="		+ this.fv_TMPNULL			+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSchool.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "초기화", strParam);  //접속기록

        	this.gfnTransaction("insertTrag",
        						"/swiss/ag/linkresult/insertTrag.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        //메뉴처리
        this.lfn_goMenu = function(obj,e)
        {
        	if(this.name == obj.id ){
        		return;
        		//this.reload();
        	}

        	var menuid = obj.id ;

        	if("6" == this.fv_USERGRPTYPE){
        		if("ag01m00" !=menuid && "ag03m00" !=menuid
        			&& "ag05m01" !=menuid && "ag08m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        		if("ag08m00" == menuid){
        			menuid = "ag08m01";// this.fn_goPage("AG::ag08m01.xfdl");
        		}
        	}

        	this.fv_EVDDOCKIND = objApp.gds_param.getColumn(0,"EVDDOCKIND");
        	if(menuid =='ag09m00' && "2" == this.fv_EVDDOCKIND ){
        		menuid = "ag09m01";// this.fn_goPage("AG::ag09m01.xfdl");
        	}

        	this.fn_goPage("AG::"+menuid +".xfdl");
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
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.Div_surv.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.Div_surv.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.Div_surv.form.reser_obj_result.set_text(survinfo) ;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag03m00_onload,this);
            this.Div.form.Div00.form.btn_search.addEventHandler("onclick",this.Div_Div00_btn_search_onclick,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.Div.form.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
        };

        this.loadIncludeScript("ag03m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
