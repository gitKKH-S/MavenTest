(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("gp05p02");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(980,622);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"PROVINCECD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHGUBUN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHENM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","980","622",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","950","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00_01","30","30","920","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","434","9","65","40",null,null,null,null,null,null,this.Div.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_text("학교명");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","14","9","105","40",null,null,null,null,null,null,this.Div.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("대학구분");
            obj.set_textAlign("center");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div00_01.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","123","920","340",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGoSchool");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"289\"/><Column size=\"289\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"본분교명\"/></Band><Band id=\"body\"><Cell text=\"bind:_chk\" displaytype=\"checkboxcontrol\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:SCHNM\" cssclass=\"alignLeft\"/><Cell col=\"2\" text=\"bind:ORGNM\" cssclass=\"alignLeft\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_00:3","920","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","210","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_00","380","550","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("선택");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_01","500","550","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","565","45","190","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","190","45","190","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsSchCd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("CD");
            obj.set_enable("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","810","45","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",980,622,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.registerScript("ag05p01.xfdl", function() {

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_PRESCHCD = "";
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "졸업후상황>정보등록(개별)>학교팝업";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvSchool"){
        			if(this.dsLogInSch.rowcount > 0){
        				var idx = this.dsLogInSch.findRowExpr("SURVSEQ > '000000'",0);
        				this.lfn_divSurvSet(this.dsLogInSch, idx);
        			}
        			this.lfn_selectSearchCdList();
        		}
        		if(serviceID == "listGoSchool"){
        			//trace(this.dsGoSchool.saveXML());
        			//this.Div.form.in_cb_00.set_index(0);
        			this.dsGoSchool.addColumn("_chk","string",1);
        			//trace(this.dsGoSchool.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "selectSchKikdCodeList"){
        			this.dsSchCd.insertRow(0);
        			this.dsSchCd.setColumn(0,"CD","");
        			this.dsSchCd.setColumn(0,"CDNM","전체");
        			//trace(this.dsSchCd.saveXML());
        			this.Div.form.in_cb_00.set_index(0);
        		}

         	}
        }
        this.gp05p01_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var param = this.parent.param1;
        	this.fv_PRESCHCD = this.parent.param2;
        	var str = "";
        	if("80"==param){
        		str ="U";
        	}else if("81"==param){
        		str ="G";
        	}else if("82"==param){
        		str ="C";
        	}
          	this.lfn_selectSurvSchool();
        	this.Div.form.in_cb_00.set_value(str);

        };

        /*학교별 조사기간이 설정되어 있는지 확인 2021-02-18 yyz*/
        this.lfn_selectSurvSchool = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvSchool",
        						"/swiss/cm/selectSurvSchool.do",
        						"dsSearch=dsSearch",
        						"dsLogInSch=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_selectSearchCdList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "CDTYPE="		+ '0530' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSchKikdCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsSchCd=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_01_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Div_Div00_01_btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };
        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ	+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHGUBUN="		+ this.Div.form.in_cb_00.value 		+ "ª";
        	strParam += "SCHNM="		+ this.Div.form.in_edit_00.value 	+ "ª";
        	if("" != this.fv_PRESCHCD){
        		strParam += "SCHCD="		+ this.fv_PRESCHCD.substring(0,5) 	+ "ª";
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listGoSchool",
        						"/swiss/ag/regist/listGoSchool.do",
        						"dsSearch=dsSearch",
        						"dsGoSchool=dsGoSchool dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        };
        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }


        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listPage(nPage);
        	this.pageFirst = false;
        }
        this.Div_gd_00_oncellclick = function(obj,e)
        {
        	for(var i=0; i < this.dsGoSchool.rowcount; i++){
        		this.dsGoSchool.setColumn(i, "_chk", "");
        	}
        	this.dsGoSchool.setColumn(this.dsGoSchool.rowposition, "_chk",'1');
        };

        this.Div_btn_00_onclick = function(obj,e)
        {
        	var cntChk=0;
        	for(var i=0; i < this.dsGoSchool.rowcount; i++){
        		if(this.dsGoSchool.getColumn(i, "_chk")=="1")
        			cntChk++;
        	}
        	if(cntChk < 1) { this.alert("진학학교를 선택해 주세요"); return;}

            var SCHNM = this.dsGoSchool.getColumn(this.dsGoSchool.rowposition, "SCHNM");
            var SCHCD = this.dsGoSchool.getColumn(this.dsGoSchool.rowposition, "SCHCD");
            var ORGNM = this.dsGoSchool.getColumn(this.dsGoSchool.rowposition, "ORGNM");
        	var ORGCD = this.dsGoSchool.getColumn(this.dsGoSchool.rowposition, "ORGCD");
        	this.opener.fn_set_goschool(SCHCD,SCHNM,ORGCD,ORGNM);
        	this.close();
        };

        this.Div_gd_00_oncelldblclick = function(obj,e)
        {
        	this.Div_btn_00_onclick(this.Div.form.btn_00);
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        this.lfn_divSurvSet = function(dsObj, idx){

        	// ----------- dsObj의 조사기간 확인
        	var SURVSEQ = dsObj.getColumn(idx,"SURVSEQ");
        	var SURVSTRTDT = dsObj.getColumn(idx,"SURVSTRTDT");
        	var SURVENDDT = dsObj.getColumn(idx,"SURVENDDT");

        	/*선택 학교 조사기간 외 신입생정보조사기간 설정 추가 2021-02-09 yyz*/
        	if(SURVSEQ != null && SURVSEQ != "" && SURVSTRTDT != null && SURVENDDT != null){
        		/*선택 학교 조사기간 SURVSEQ 설정*/
        		this.fv_SURVSEQ = SURVSEQ;
        	}else{

        		/*기본 조사기간 설정*/
        		var objApp 		= nexacro.getApplication();
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.gp05p01_onload,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.gd_00.addEventHandler("oncelldblclick",this.Div_gd_00_oncelldblclick,this);
            this.Div.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_search.addEventHandler("onclick",this.Div_Div00_01_btn_search_onclick,this);
        };

        this.loadIncludeScript("ag05p01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
