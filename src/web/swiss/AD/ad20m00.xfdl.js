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
                this._setFormPosition(1260,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_webloglist", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SUCCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALSUCCNT\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"select_gubun_id\" type=\"STRING\" size=\"256\"/><Column id=\"select_gubun_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"select_gubun_id\">I</Col><Col id=\"select_gubun_nm\">사용자ID</Col></Row><Row><Col id=\"select_gubun_id\">U</Col><Col id=\"select_gubun_nm\">성명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmd", this);
            obj._setContents("<ColumnInfo><Column id=\"ymd\" type=\"STRING\" size=\"256\"/><Column id=\"ymdnm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelBf", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGYN\" type=\"STRING\" size=\"16\"/><Column id=\"NM1\" type=\"STRING\" size=\"32\"/><Column id=\"NM2\" type=\"STRING\" size=\"32\"/><Column id=\"NM3\" type=\"STRING\" size=\"256\"/><Column id=\"NM4\" type=\"STRING\" size=\"256\"/><Column id=\"NM5\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGNM\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGNM\" type=\"STRING\" size=\"32\"/><Column id=\"TRAININGYN\" type=\"STRING\" size=\"16\"/><Column id=\"NM1\" type=\"STRING\" size=\"32\"/><Column id=\"NM2\" type=\"STRING\" size=\"32\"/><Column id=\"NM3\" type=\"STRING\" size=\"256\"/><Column id=\"NM4\" type=\"STRING\" size=\"256\"/><Column id=\"NM5\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","915",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("웹로그현황");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","910",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","60","1200","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","30","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조사기준");
            obj.set_visible("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"55","100","30","30",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","508","30","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            obj.set_visible("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_survkindcd","Static00_00:10","30","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            var Div_form_sub_search_form_in_cb_survkindcd_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_survkindcd_innerdataset", obj);
            Div_form_sub_search_form_in_cb_survkindcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신편입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_survkindcd_innerdataset);
            obj.set_text("졸업생정보");
            obj.set_value("GP");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","Static00:10","30","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ_TXT");
            obj.set_innerdataset("ds_survList");
            obj.set_visible("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00_01","30","73","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("검색일자");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_start","label_00_01:10","73","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_00_00_00","in_calr_start:10","74","18","24",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("~");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_end","in_calr_start:30","73","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","910",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_filesave",null,"sub_search:20","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("파일저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","30","btn_filesave:17","1200","532",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_webloglist");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"0\"/><Column size=\"322\"/><Column size=\"144\"/><Column size=\"208\"/><Column size=\"136\"/><Column size=\"187\"/><Column size=\"211\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"기능\"/><Cell col=\"3\" text=\"사용자그룹\"/><Cell col=\"4\" text=\"사용자ID\"/><Cell col=\"5\" text=\"사용자명\"/><Cell col=\"6\" text=\"접속IP\"/><Cell col=\"7\" text=\"접속일시\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:MENUNM\"/><Cell col=\"2\" text=\"bind:PROCFUNC\"/><Cell col=\"3\" text=\"bind:USERGRPTYPESTR\"/><Cell col=\"4\" text=\"bind:USERID\"/><Cell col=\"5\" text=\"bind:USERNM\"/><Cell col=\"6\" text=\"bind:LOGIP\"/><Cell col=\"7\" text=\"bind:WORKDTHM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","845","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_00.form.in_calr_00_00","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad20m00.xfdl","CM::common.xjs");
        this.registerScript("ad20m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>시스템관리>웹로그현황";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{

        		if(serviceID == "selectWebLogList"){

        		}
        		if(serviceID == "listTrainFile"){

        		}

         	}
        }

        this.btn_search_onclick = function(obj,e)
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

        	strParam += "SURVSEQ=" 		+ this.Div.form.sub_search.form.in_cb_sruvseq.value		+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value	+ "ª";
        	strParam += "SCHKINDNM=" 	+ this.Div.form.sub_search.form.in_cb_schkind.value		+ "ª";
        	strParam += "DAMDANGNM="	+ this.Div.form.sub_search.form.in_edit_damdang.value	+ "ª";
        	strParam += "SCHNM="		+ this.Div.form.sub_search.form.in_edit_schnm.value		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listTrain",
        						"/swiss/ad/survtrain/listTrain.do",
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

        this.ad20m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");

        	this.getFpSurvYear();
        	//this.Div.form.sub_search.form.in_cb_sruvseq.set_index(0);
        	this.Div.form.sub_search.form.in_cb_sruvseq.set_value(this.fv_SURVSEQ);
        	this.Div.form.sub_search.form.in_cb_survkindcd.set_value(this.fv_SURVKINDCD);

        	var d = new Date();
        	var year = d.getYear();
        	var month = (d.getMonth() + 1) ;
        	if(month.length == 1){
        		month = "0" + month;
        	}
        	var day = d.getDate();
        	if(day.length == 1){
        		day = "0" + day;
        	}
        	var toDate =  year +"-" +  month +"-" +  day ;

        	this.Div.form.sub_search.form.in_calr_start.set_value(toDate);
        	this.Div.form.sub_search.form.in_calr_end.set_value(toDate);

        	this.selectWebLogList();

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

        // 로그인 리스트
        this.selectWebLogList = function(){

        	if( this.Div.form.sub_search.form.in_calr_start.value  > this.Div.form.sub_search.form.in_calr_end.value ){
        		this.alert("검색일자를 정확히 입력 해 주세요.");
        		return;
        	}

        	var input1=this.Div.form.sub_search.form.in_calr_start.value;
        	var input2=this.Div.form.sub_search.form.in_calr_end.value ;
        	var date1 = new Date(input1.substr(0,4),input1.substr(4,2)-1,input1.substr(6,2));
        	var date2 = new Date(input2.substr(0,4),input2.substr(4,2)-1,input2.substr(6,2));
        	var interval = date2 - date1;
        	var day = 1000*60*60*24;
        	if( parseInt(interval/day) > 3 ){
        		this.alert("시작일과 종료일 차이는 3일 이내로 선택 해 주세요.");
        		return;
        	}



        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.Div.form.sub_search.form.in_cb_sruvseq.value  	+ "ª";
        	strParam += "SURVKINDCD="	+ this.Div.form.sub_search.form.in_cb_survkindcd.value 	+ "ª";

        	strParam += "in_calr_start="	+ this.Div.form.sub_search.form.in_calr_start.value	+ "ª";
        	strParam += "in_calr_end="	+ this.Div.form.sub_search.form.in_calr_end.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.Div.form.sub_search.form.in_cb_sruvseq.value, this.Div.form.sub_search.form.in_cb_survkindcd.value, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("selectWebLogList",
        						"/swiss/ad/system/selectWebLogList.do",
        						"dsSearch=dsSearch",
        						"ds_webloglist=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad20m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectWebLogList,this);
            this.Div.form.btn_filesave.addEventHandler("onclick",this.Div_btn_filesave_onclick,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
        };

        this.loadIncludeScript("ad20m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
