(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag08m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,760);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVINFONM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRGSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRGSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","752",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","750",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","750",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"200","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","240","1200","200",null,null,null,null,"83",null,this.Div.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"198\"/><Column size=\"176\"/><Column size=\"118\"/><Column size=\"191\"/><Column size=\"223\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"학과명\"/><Cell col=\"2\" text=\"학과소분류\"/><Cell col=\"3\" text=\"주야구분\"/><Cell col=\"4\" text=\"처리상태\"/><Cell col=\"5\" text=\"제출일시\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:DEPTNM\"/><Cell col=\"2\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"3\" text=\"bind:DNNM\"/><Cell col=\"4\" text=\"bind:PRGSTATUSCDNM\" editinputtype=\"normal\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:PRGSTATUSDTHM\" editinputtype=\"normal\" displaytype=\"normal\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
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

            obj = new Static("ag02m00_s","254","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag03m00_s","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00_s","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag05m00_s","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag01m00_s","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01 on03");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag07m00_s","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step on03");
            obj.set_text("");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_text("결과조회");
            obj.set_cssclass("step01  last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00_s","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00_s","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","stepArea01_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
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

            obj = new Grid("gd_00_00","30","gd_00:68","1200","230",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_binddataset("dsErr");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"460\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학과명\"/><Cell col=\"1\" text=\"학과소분류\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"오류구분\"/><Cell col=\"4\" text=\"오류내용\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPTNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DETAILDEPTNM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:STUDENTNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:ERRKINDNM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ERRDESC\" border=\"0px none,0px solid #e6c9c0,1px solid #e6c9c0,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Static("tableTitle00","30",null,"650","30",null,"gd_00_00:8",null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("※아래의 오류내역을 확인하시고 정보등록에서 수정 후 제출하여 주시기 바랍니다.");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,null,"100","30","30","gd_00_00:10",null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,760,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag08m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ag08m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ag08m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_USERGRPTYPE = "";
        this.fv_SURVOBJ = "";
        this.fv_SURVNM = "";

        this.fv_MENUNM = "졸업후상황>결과제출(학과담당자)";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		alert(errMSG);
        	}else{

        		if(serviceID == "listResultSendDept"){
        			this.dsMain.addColumn("_chk","string",1);
        			//trace(this.dsMain.saveXML());
        		}
        		if(serviceID == "verifyDataDept"){
        			if(this.dsErr.rowcount > 0){
        				this.lfn_listDept();
        				alert("오류내역을 확인하시기 바랍니다.");
        				this.Div.form.gd_00_00.setFocus();
        			}else{
        				this.updateDeptStatus();
        			}
        		}
        		if(serviceID == "updateDeptStatus"){
        			this.lfn_listDept();
        			alert("제출되었습니다.");
        		}
         	}
        }

        this.ag08m01_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");

        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	//this.lfn_selectSurvSchool();
        	this.lfn_divSurvSet();
        	this.lfn_listDept();
        	this.utlf_enableBtnByCall();
        };

        this.Div_btn_01_onclick = function(obj,e)
        {
        	var statusChk=true;
        	var statusChk2=true;
        	this.dsSave.clearData();
        	//3등록,4제출,6반려
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			if(	"5" == this.dsMain.getColumn(i,"PRGSTATUSCD")){
        				statusChk2 = false;
        			}
        			if(	"3" != this.dsMain.getColumn(i,"PRGSTATUSCD")
        				&& "4" != this.dsMain.getColumn(i,"PRGSTATUSCD")
        				&& "6" != this.dsMain.getColumn(i,"PRGSTATUSCD") ) statusChk = false;
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "학과["+this.dsSave.getColumn(newRow,"DETAILDEPTNM")+"] 제출");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD","4");
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("제출할 데이터가 없습니다.");
        		return;
        	}
        	if(!statusChk2){
        		alert("취업담당자가 승인하여 제출이 불가능한 학과가 있습니다.");
        		return;
        	}
        	if(!statusChk){
        		alert("제출 가능한 상태가 아닌 학과가 있습니다. 처리상태를 확인해 주세요.");
        		return;
        	}

        	if(!this.confirm("제출 하시겠습니까?")){
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "제출", "");  //접속기록
        	this.gfnTransaction("verifyDataDept",
        						"/swiss/ag/resultsend/verifyDataDept.do",
        						"dsSearch=dsSave",
        						"dsErr=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.updateDeptStatus = function()
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "학과["+this.dsSave.getColumn(newRow,"DETAILDEPTNM")+"] 제출");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD","4");
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}

        	this.gfnTransaction("updateDeptStatus",
        						"/swiss/ag/resultsend/updateDeptStatus.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_listDept = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("listResultSendDept",
        						"/swiss/ag/resultsend/listResultSendDept.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsMain",
        						"",
        						"fnCallback",
        						false);

        };

        this.Div_btn_excel_onclick = function(obj,e)
        {
        	if(this.dsErr.rowcount==0){
        		alert("파일저장할 오류내역이 없습니다");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //접속기록
        	this.utlf_excelDownload("결과제출오류내역",this.Div.form.gd_00_00,this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {

        };


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
            this.addEventHandler("onload",this.ag08m01_onload,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_excel.addEventHandler("onclick",this.Div_btn_excel_onclick,this);
        };

        this.loadIncludeScript("ag08m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
