(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SURVSEQ\">2020-1</Col><Col id=\"SURVKINDCD\">KEDI 대학교</Col><Col id=\"SCHKINDCD\">2020-1 고등교육기관 졸업자 건강정보 DB연계 취업 통계조사 결과 제출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"16\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"16\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"16\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchkindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">2020-1</Col><Col id=\"CDNM\">KEDI 대학교</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","890",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("조사기간관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","890",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","890",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","10","74","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조사기준");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","60","74","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학제구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","Static00_01:13","60","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("보관상태");
            obj.set_innerdataset("dsSchkindCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","480","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("조사종류");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","1080","40","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","480","60","54","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("학교명");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","556","60","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","556","10","280","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_accessibilitylabel("보관상태");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search_form_in_cb_00_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_00_innerdataset", obj);
            Div_form_sub_search_form_in_cb_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00:13","10","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","sub_search:60","1200","538",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"252\"/><Column size=\"170\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학교명\"/><Cell col=\"2\" text=\"본분교명\"/><Cell col=\"3\" text=\"진행상태\"/><Cell col=\"4\" text=\"조사시작일\"/><Cell col=\"5\" text=\"조사종료일\" border=\"0px none,0px,1px solid #a5a5a5,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" cssclass=\"alignLeft\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SCHNM\" cssclass=\"alignLeft\"/><Cell col=\"2\" text=\"bind:ORGNM\"/><Cell col=\"3\" text=\"bind:SURVPROSTATUSNM\"/><Cell col=\"4\" edittype=\"date\" displaytype=\"calendarcontrol\" text=\"bind:SURVSTRTDT\" calendardateformat=\"yyyy.MM.dd ddd\" calendareditformat=\"yyyy.MM.dd\"/><Cell col=\"5\" edittype=\"date\" displaytype=\"calendarcontrol\" text=\"bind:SURVENDDT\" calendardateformat=\"yyyy.MM.dd ddd\" calendareditformat=\"yyyy.MM.dd\" border=\"0px none,0px,1px solid #a5a5a5,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","1130","190","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_00:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","370","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad03m00.xfdl","CM::common.xjs");
        this.registerScript("ad03m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SURVSTRTDT = "";
        this.fv_SURVENDDT = "";
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>조사준비>조사기간관리";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
        			this.Div.form.sub_search.form.in_cb_sruvseq.set_index(0);
        			this.fv_SURVSEQ = this.Div.form.sub_search.form.in_cb_sruvseq.value;
        			this.fv_SURVNM = this.dsSurvInfo.getColumn(0,"SURVNM");
        		}
        		if(serviceID == "selectCodeList"){
        			this.dsSchkindCd.insertRow(0);
        			this.dsSchkindCd.setColumn(0,"CD","");
        			this.dsSchkindCd.setColumn(0,"CDNM","전체");
        			//trace(this.dsSchkindCd.saveXML());
        		}
        		if(serviceID == "listSurvPrgs"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			//trace(this.dsPage.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "updateSurvPrgs"){
        			alert("저장되었습니다.");
        		}

         	}
        }

        // 조사종류조회 2021-01-20 yyz
        this.selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
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

        //학제
        this.selectCodeList = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "CDTYPE="		+ '0527' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsSchkindCd=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.ad03m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();

        	/*조사종류 default값 셋팅을 위한 사항(우선 담당자에만 적용) 2021-01-29 yyz*/
        	var idx = 0;                                                                 // 조사종류에 대한 선택 값
        	var objDate = new nexacro.Date();                                            // 현재날짜 object 생성
        	var toDay = objDate.toString().substr(0,8);                                  // 현재날짜 문자열로 변경 YYYYMMDD
        	var chkMonth = toDay.substr(4,2);                                            // 현재 월
        	var fpNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);         // FP RowNum
        	var agNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);         // AG RowNum
        	var gpNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);         // GP RowNum
        	var fp_SURVSTRTDT = objApp.gds_login_info.getColumn(fpNum, "SURVSTRTDT");    // 신입생정보 조사시작일
        	var fp_SURVENDDT  = objApp.gds_login_info.getColumn(fpNum, "SURVENDDT");     // 신입생정보 조사종료일
        	var ag_SURVSTRTDT = objApp.gds_login_info.getColumn(agNum, "SURVSTRTDT");    // 졸업후상황 조사시작일
        	var ag_SURVENDDT  = objApp.gds_login_info.getColumn(agNum, "SURVENDDT");     // 졸업후상황 조사종료일
        	var gp_SURVSTRTDT = objApp.gds_login_info.getColumn(gpNum, "SURVSTRTDT");    // 졸업생정보 조사시작일
        	var gp_SURVENDDT  = objApp.gds_login_info.getColumn(gpNum, "SURVENDDT");     // 졸업생정보 조사종료일

        	if(chkMonth == "01"||chkMonth == "02"){        // 현재 월이 1월, 2월일때 기본 FP setting
        		idx = fpNum;
        	}else if(chkMonth == "07"||chkMonth == "08"){  // 현재 월이 7월, 8월일때 기본 AG setting
        		idx = agNum;
        	}else{                                         // 현재 월이 3월, 4월, 5월, 6월, 9월, 10월, 11월 12월 일때 GP setting
        		idx = gpNum;
        	}

        	/*조사기간에 따라 조사종류 default값 셋팅 default값 우선 순위는 조사기간 > 월별*/

        	if(fp_SURVSTRTDT <= toDay && fp_SURVENDDT >= toDay){
        		idx = fpNum;
        	}
        	if(ag_SURVSTRTDT <= toDay && ag_SURVENDDT >= toDay){
        		idx = agNum;
        	}
        	if(gp_SURVSTRTDT <= toDay && gp_SURVENDDT >= toDay){
        		idx = gpNum;
        	}
        	/*조사종류 default값 셋팅*/

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(idx, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");

        	if( this.fv_USERID == "" || this.fv_USERID == null ){
        		this.alert("로그인 후 이용 해 주세요.");
        		this.go("HP::hp08m00.xfdl");
        		return;
        	}

        	this.Div.form.sub_search.form.in_cb_00.set_index(idx);

        	this.selectSurvInfo(); // 조사회차 (조사결과 것 사용 2021-02-18 yyz)
        	this.selectCodeList();
        };

        this.Div_sub_search_btn_search_onclick = function(obj,e)
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

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ									+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_00.value		+ "ª";
        	strParam += "SCHKINDCD="	+ this.Div.form.sub_search.form.in_cb_01.value		+ "ª";
        	strParam += "SCHNM="		+ this.Div.form.sub_search.form.in_edit_00.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listSurvPrgs",
        						"/swiss/ad/surv/listSurvPrgs.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
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
        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        this.Div_btn_save_onclick = function(obj,e)
        {
        	//this.dsMain.addColumn("WORKERID","string");
        	var updCnt=0;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getRowType( i )=="4"){
        			updCnt++;
        			var v_SURVSTRTDT = this.dsMain.getColumn(i,"SURVSTRTDT");
        			var v_SURVENDDT = this.dsMain.getColumn(i,"SURVENDDT");
        			if(!v_SURVSTRTDT ){
        				alert("학교의 조사시작일은 필수 입력사항입니다.");
        				return;
        			}
        			if(!v_SURVENDDT){
        				alert("학교의 조사종료일은 필수 입력사항입니다.");
        				return;
        			}
        			//alert(v_SURVENDDT + ":" + v_SURVSTRTDT);
        			if(v_SURVENDDT < v_SURVSTRTDT ){
        				alert("학교의 조사시작일은 조사종료일보다 클 수 없습니다.");
        				return;
        			}
        			this.dsMain.setColumn(i,"WORKERID", this.fv_USERID);
        		}
        	}
        	if(updCnt == 0){
        		this.alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	//trace(this.dsMain.saveXML());

        	var strLog = "SURVSEQ=" + this.fv_SURVSEQ
        			 + ",SURVKINDCD=" + this.fv_SURVKINDCD;
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", strLog);  //접속기록
        	this.gfnTransaction("updateSurvPrgs",
        						"/swiss/ad/surv/updateSurvPrgs.do",
        						"dsSearch=dsMain:U",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_sub_search_in_cb_00_onitemchanged = function(obj,e)
        {
        	this.fv_SURVKINDCD = obj.value;
        	this.selectSurvInfo(); // 조사종류에 따라 조사기준 일자 조회 2021-01-20 yyz
        	this.selectCodeList(); // 조사기준에 따라 학제구분 변경 2021-01-20 yyz
        };

        this.Div_sub_search_in_cb_sruvseq_onitemchanged = function(obj,e)
        {
        	this.fv_SURVSEQ = obj.value;
        	this.selectCodeList();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad03m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_cb_00.addEventHandler("onitemchanged",this.Div_sub_search_in_cb_00_onitemchanged,this);
            this.Div.form.sub_search.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.Div_sub_search_in_cb_sruvseq_onitemchanged,this);
            this.Div.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
        };

        this.loadIncludeScript("ad03m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
