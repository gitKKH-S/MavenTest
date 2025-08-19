(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad20m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_charegelist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmd", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"ymdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("survdataset", this);
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("userGRPdataset", this);
            obj._setContents("<ColumnInfo><Column id=\"grpCd\" size=\"256\"/><Column id=\"grpNm\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grpCd\">4</Col><Col id=\"grpNm\">취업담당자</Col></Row><Row><Col id=\"grpCd\">5</Col><Col id=\"grpNm\">전산담당자</Col></Row><Row><Col id=\"grpCd\">6</Col><Col id=\"grpNm\">학과담당자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","580",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","0","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","8","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("화면공유");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","580",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","sub_title_wrap:40","1200","100",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","100","30","150",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00_00","420","20","69","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("학교명");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("sel_sch_nm","Static00_01_01_00_00_00_00:10","20","247","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학번");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","30","20","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("담당자구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("user_grp","Static00_01:10","20","217","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("userGRPdataset");
            obj.set_codecolumn("grpCd");
            obj.set_datacolumn("grpNm");
            obj.set_text("담당자그룹");
            obj.set_value("4");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00","416","61","533","28",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("※ 검색된 결과의 학교명은 가장 최근의 학교명으로 입력된 학교명과 다를 수 있습니다");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","580",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","30","sub_search:30","1200","280",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_charegelist");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\" band=\"left\"/><Column size=\"400\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"140\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학교코드\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"1\" text=\"학교명\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"2\" text=\"본분교\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"3\" text=\"담당자구분\" border=\"0px none,1px solid #a5a5a5,1px solid #a5a5a5,0px none\"/><Cell col=\"4\" text=\"취업담당자명\" border=\"0px none,0px solid,1px solid #a5a5a5,0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHCD\"/><Cell col=\"1\" text=\"bind:SCHNM\"/><Cell col=\"2\" text=\"bind:ORGNM\"/><Cell col=\"3\" text=\"bind:CHARGGRPNM\"/><Cell col=\"4\" text=\"bind:USERNM\" border=\"0px none,0px solid,1px solid #a5a5a5,0px none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","574","gd_main:30","122","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("화면공유하기");
            obj.set_cssclass("btn_sty01");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_00.form.in_calr_00_00","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad25m00.xfdl","CM::common.xjs");
        this.registerScript("ad25m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>화면공유";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				//if(v_survseq.substr(0,2) < 20) this.dsSurvInfo.deleteRow(i);
        			}
        			this.Div.form.sub_search.form.in_cb_sruvseq.set_index(0);
        			this.fv_SURVSEQ = this.Div.form.sub_search.form.in_cb_sruvseq.value;
        			//this.fv_SURVNM = this.dsSurvInfo.getColumn(0,"SURVNM");
        		}

        		if(serviceID == "changeCharege"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal =="Y"){
        				this.alert("화면이 공유되었습니다.");
        				window.location.href=nexacro.getEnvironment().services["svcBaseUrl"].url+"swiss/index.html?linkType=MY";
        			}
        			if( resultVal =="AN"){
        				this.alert("권한이 없습니다.");
        			}
        			if( resultVal =="SN"){
        				this.alert("전환 실패 했습니다.");
        			}

        		}
        		if(serviceID == "listTrainFile"){

        		}

         	}
        }





        this.ad20m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();

        	/*조사종류 default값 셋팅을 위한 사항(우선 담당자에만 적용) 2021-01-29 yyz*/
        	var numChk = 0;                                // 조사종류에 대한 선택 값 - GP : 0, FP : 1, AG : 2
        	var objDate = new nexacro.Date();              // 현재날짜 object 생성
        	var toDay = objDate.toString().substr(0,8);    // 현재날짜 문자열로 변경 YYYYMMDD
        	var chkMonth = toDay.substr(4,2);              // 현재 월

        	if(chkMonth == "01"||chkMonth == "02"){        // 현재 월이 1월, 2월일때 기본 FP setting
        		numChk = 1;
        	}else if(chkMonth == "07"||chkMonth == "08"){  // 현재 월이 7월, 8월일때 기본 AG setting
        		numChk = 2;
        	}else{                                         // 현재 월이 3월, 4월, 5월, 6월, 9월, 10월, 11월 12월 일때 GP setting
        		numChk = 0;
        	}

        	/*조사기간에 따라 조사종류 default값 셋팅 default값 우선 순위는 조사기간 > 월별*/
        	var gp_SURVSTRTDT = objApp.gds_login_info.getColumn(0, "SURVSTRTDT");
        	var gp_SURVENDDT = objApp.gds_login_info.getColumn(0, "SURVENDDT");
        	var fp_SURVSTRTDT = objApp.gds_login_info.getColumn(1, "SURVSTRTDT");
        	var fp_SURVENDDT = objApp.gds_login_info.getColumn(1, "SURVENDDT");
        	var ag_SURVSTRTDT = objApp.gds_login_info.getColumn(2, "SURVSTRTDT");
        	var ag_SURVENDDT = objApp.gds_login_info.getColumn(2, "SURVENDDT");

        	if(gp_SURVSTRTDT <= toDay && gp_SURVENDDT >= toDay){
        		numChk = 0;
        	}
        	if(fp_SURVSTRTDT <= toDay && fp_SURVENDDT >= toDay){
        		numChk = 1;
        	}
        	if(ag_SURVSTRTDT <= toDay && ag_SURVSTRTDT >= toDay){
        		numChk = 2;
        	}
        	/*조사종류 default값 셋팅*/

        	this.fv_USERID = objApp.gds_login_info.getColumn(numChk, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(numChk, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(numChk, "SURVKINDCD");

        	/*조사기준, 조사종류 화면고유 조건에서 제외 2021-02-25*/
        	//this.getFpSurvYear();
        	//this.Div.form.sub_search.form.in_cb_survkindcd.set_index(numChk);

        	//this.lfn_selectSurvInfo(); // 조사회차


        };


        // 조사년도 가져오기
        this.getFpSurvYear = function(){

        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getFpSurvYear",
        						"/swiss/fp/insertrel/getFpSurvYear.do",
        						"dsSearch=dsSearch",
        						"ds_survList=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.selectPubCharege = function(obj,e)
        {

        	if( this.Div.form.sub_search.form.sel_sch_nm.value == null || this.Div.form.sub_search.form.sel_sch_nm.value == ""){
        		alert("학교명을 입력하세요.");
        		return;
        	}
        	if(this.Div.form.sub_search.form.sel_sch_nm.value.length < 2 ){
        		alert("학교명을 2자 이상 입력하세요.");
        		return;
        	}




        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	//strParam += "SURVSEQ="		+ this.Div.form.sub_search.form.in_cb_sruvseq.value  	+ "ª";
        	//strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value 	+ "ª";

        	strParam += "sel_sch_nm="	+ this.Div.form.sub_search.form.sel_sch_nm.value	+ "ª";
        	strParam += "user_grp="	+ this.Div.form.sub_search.form.user_grp.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "검색", strParam);  //접속기록

        	this.gfnTransaction("selectPubCharege",
        						"/swiss/ad/system/selectPubCharege.do",
        						"dsSearch=dsSearch",
        						"ds_charegelist=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_change_onclick = function(obj,e)
        {
        	var SCHNM = this.ds_charegelist.getColumn(this.ds_charegelist.rowposition,"SCHNM");
        	var USERID = this.ds_charegelist.getColumn(this.ds_charegelist.rowposition,"USERID");
        	var USERGRPTYPE = this.ds_charegelist.getColumn(this.ds_charegelist.rowposition,"USERGRPTYPE");
        	var CHARGGRPNM = this.ds_charegelist.getColumn(this.ds_charegelist.rowposition,"CHARGGRPNM");


        	if(this.ds_charegelist.rowposition < 0){
        		alert("화면공유할 학교를 선택하지 않았습니다.");
        		return;
        	}


        	if(!this.confirm("선택된 " + SCHNM + " " + CHARGGRPNM + "로 전환 하겠습니까?")){
        		return;
        	}

        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "USERID="		+ USERID  	+ "ª";
        	strParam += "USERGRPTYPE="		+ USERGRPTYPE  	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "화면공유하기", strParam);  //접속기록

        	this.gfnTransaction("changeCharege",
        						"/swiss/ad/system/changeCharege.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };


        // 조사회차 (조사종류조회 2021-01-20 yyz)
        this.lfn_selectSurvInfo = function(){
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

        /* 조사기준, 조사종류 화면공유 조건에서 제외 2021-02-25
        this.Div_sub_search_in_cb_survkindcd_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        {
        	this.fv_SURVKINDCD = this.Div.form.sub_search.form.in_cb_survkindcd.value;
        	this.lfn_selectSurvInfo(); // 조사종류에 따라 조사기준 일자 조회 2021-01-20 yyz
        };
        */

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.selectPubCharege();
        	}
        };

        this.Div_gd_main_oncelldblclick = function(obj,e)
        {
        	this.btn_change_onclick();
        };

        this.Div_sub_search_user_grp_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad20m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectPubCharege,this);
            this.Div.form.sub_search.form.sel_sch_nm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.Static00_01.addEventHandler("onclick",this.Div_sub_search_Static00_01_onclick,this);
            this.Div.form.sub_search.form.user_grp.addEventHandler("onitemchanged",this.Div_sub_search_user_grp_onitemchanged,this);
            this.Div.form.gd_main.addEventHandler("oncelldblclick",this.Div_gd_main_oncelldblclick,this);
            this.Div.form.Button00_00_00.addEventHandler("onclick",this.btn_change_onclick,this);
        };

        this.loadIncludeScript("ad25m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
