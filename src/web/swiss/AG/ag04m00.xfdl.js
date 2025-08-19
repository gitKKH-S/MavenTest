(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag04m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNICNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"STATUSWKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERNM\" type=\"STRING\" size=\"32\"/><Column id=\"USERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNICNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"STATUSWKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERNM\" type=\"STRING\" size=\"32\"/><Column id=\"USERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","682",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","680",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","680",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static04","30","270","110","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("취업통계진행상태 :");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_01","Static04:20","270","480","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_color("red");
            obj.set_visible("false");
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

            obj = new Static("Static00_01_00","470","10","62","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("처리상태");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","Static00_01_00:0","10","210","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsStatus");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("CD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","30","10","50","30",null,null,null,null,null,null,this.Div.form.Div00.form);
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

            obj = new Combo("in_cb_01","Static00_01_01:20","10","300","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("KEDI대학원(본교)");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","310","1200","340",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_autofittype("none");
            obj.set_binddataset("dsMain");
            obj.set_autoenter("select");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"42\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" padding=\"0px\"/><Cell col=\"1\" text=\"순번\" padding=\"0px\"/><Cell col=\"2\" text=\"단과대학명\" padding=\"0px\"/><Cell col=\"3\" text=\"학과명\" padding=\"0px\"/><Cell col=\"4\" text=\"학과소분류명\" padding=\"0px\"/><Cell col=\"5\" text=\"주야구분\" padding=\"0px\"/><Cell col=\"6\" text=\"담당자명\" padding=\"0px\"/><Cell col=\"7\" text=\"전화번호\" padding=\"0px\"/><Cell col=\"8\" text=\"총건수\" padding=\"0px\"/><Cell col=\"9\" text=\"처리상태\" padding=\"0px\"/><Cell col=\"10\" text=\"제출일시\" padding=\"0px\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:(PRGSTATUSCD=='4' || PRGSTATUSCD=='5') ?'checkboxcontrol':'normal'\" edittype=\"expr:(PRGSTATUSCD=='4' || PRGSTATUSCD=='5') ?'checkbox':'none'\" checkboxtruevalue=\"1\" text=\"bind:_chk\" padding=\"0px\"/><Cell col=\"1\" text=\"expr:currow+1\" padding=\"0px\"/><Cell col=\"2\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\" padding=\"0px\"/><Cell col=\"3\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\" padding=\"0px\"/><Cell col=\"4\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\" padding=\"0px\"/><Cell col=\"5\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\" padding=\"0px\"/><Cell col=\"6\" text=\"bind:USERNM\" displaytype=\"normal\" edittype=\"none\" tooltiptext=\"bind:USERNM\" padding=\"0px\"/><Cell col=\"7\" text=\"bind:MOBILENO\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"###-####-####\" maskedittype=\"string\" padding=\"0px\"/><Cell col=\"8\" text=\"bind:UNICNT\" padding=\"0px\"/><Cell col=\"9\" text=\"bind:PRGSTATUSCDNM\" tooltiptext=\"bind:PRGSTATUSCDNM\" padding=\"0px\"/><Cell col=\"10\" text=\"expr:PRGSTATUSCD==&quot;4&quot; || PRGSTATUSCD==&quot;5&quot; ?PRGSTATUSDTHM:&quot;&quot;\" tooltiptext=\"expr:PRGSTATUSCD==&quot;4&quot; || PRGSTATUSCD==&quot;5&quot; ?PRGSTATUSDTHM:&quot;&quot;\" padding=\"0px\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_02","880","270","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("승인");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_03","1000","270","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("반려");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

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
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00","399","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01 on03");
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
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01 ");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
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
            obj.set_taborder("10");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,690,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag04m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ag04m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag04m00.xfdl", function() {
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

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";

        this.fv_MENUNM = "졸업후상황>모니터링";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)

        	}else{
        		if(serviceID == "selectCodeList"){
        			this.dsStatus.set_filterstr("CD=='1' || CD=='3' || CD=='4' || CD=='5'");
        			this.dsStatus.insertRow(0);
        			this.dsStatus.setColumn(0,"CD","");
        			this.dsStatus.setColumn(0,"CDNM","전체");
        			this.lfn_selectDept();
        		}
        		if(serviceID == "listDept"){
        			this.dsDept.set_keystring("S:DEPTNM+");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");
        			this.Div_Div00_btn_search_onclick(this.Div.form.Div00.form.btn_search);
        		}
        		if(serviceID == "listMntr"){
        			this.dsMain.addColumn("_chk","string",1);
        			//trace(this.dsMain.saveXML());
        		}
        		if(serviceID == "updateStatus01"){
        			alert("승인되었습니다.");
        			this.Div_Div00_btn_search_onclick(this.Div.form.Div00.form.btn_search);
        		}
        		if(serviceID == "updateStatus02"){
        			alert("반려되었습니다.");
        			this.Div_Div00_btn_search_onclick(this.Div.form.Div00.form.btn_search);
        		}

         	}
        }

        this.lfn_selectDept = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSchool.saveXML());
        	this.gfnTransaction("listDept",
        						"/swiss/ag/mntr/listDept.do",
        						"dsSearch=dsSearch",
        						"dsDept=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.selectCodeList = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "CDTYPE="		+ '0083' 			+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsStatus=dsResult",
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

        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SURVPROSTATUSCDNM = objApp.gds_param.getColumn(0, "SURVPROSTATUSCDNM");

        	this.lfn_divSurvSet();									// 기본정보 설정
        	this.selectCodeList();
        	//this.Div.form.label_01.set_text(this.fv_SURVPROSTATUSCDNM) ;

        };

        this.Div_Div00_btn_search_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.Div00.form.in_cb_01.value	+ "ª";
        	strParam += "PRGSTATUSCD="	+ this.Div.form.Div00.form.in_cb_02.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listMntr",
        						"/swiss/ag/mntr/listMntr.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        //그리드의 head영역의 체크박스 클릭 시 전체 체크
        this.Div_gd_00_onheadclick = function(obj,e)
        {
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);

            if(sColID == "_chk"){
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			if(this.dsMain.getColumn(i,"PRGSTATUSCD") == "4" ){
        				this.dsMain.setColumn(i, "_chk", nValue);
        			}
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };



        this.btn_01_onclick = function(obj,e)
        {
        	if(this.dsMain.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	strParam += "DEPTCD="		+ this.Div.form.Div00.form.in_cb_01.value	+ "ª";
        	strParam += "PRGSTATUSCD="	+ this.Div.form.Div00.form.in_cb_02.value	+ "ª";

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
        	this.utlf_excelDownload("모니터링",this.Div.form.gd_00,this.Export00_onsuccess);
        };


        this.btn_02_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	var statusChk=true;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			if(	"4" != this.dsMain.getColumn(i,"PRGSTATUSCD")) statusChk = false;
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			var v_PRGSTATUSCD = "5";//취업-학과 데이터 제출 승인
        			this.dsSave.setColumn(newRow,"PRGSTATUSCD",v_PRGSTATUSCD);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "학과["+this.dsSave.getColumn(newRow,"DETAILDEPTNM")+"] 데이터 제출 승인");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}

        	if(this.dsSave.rowcount == 0){
        		this.alert("승인할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("학과에서 제출한 경우에만 처리 가능합니다.");
        		return;
        	}
        	if(!this.confirm("승인 하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "승인", "");  //접속기록
        	this.gfnTransaction("updateStatus01",
        						"/swiss/ag/mntr/updateStatus.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_03_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	var statusChk=true;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			if(	"4" != this.dsMain.getColumn(i,"PRGSTATUSCD") && "5" != this.dsMain.getColumn(i,"PRGSTATUSCD")) statusChk = false;
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"PRGSTATUSCD","6");
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "학과["+this.dsSave.getColumn(newRow,"DETAILDEPTNM")+"] 데이터 반려");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD","6");
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("반려할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("학과에서 제출한 경우에만 처리 가능합니다.");
        		return;
        	}
        	if(!this.confirm("반려 하시겠습니까?")){
        		return;
        	}
        	//trace(this.dsSave.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "반려", "");  //접속기록
        	this.gfnTransaction("updateStatus02",
        						"/swiss/ag/mntr/updateStatus.do",
        						"dsSearch=dsSave",
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
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
            this.Div.form.btn_03.addEventHandler("onclick",this.btn_03_onclick,this);
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
        };

        this.loadIncludeScript("ag04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
