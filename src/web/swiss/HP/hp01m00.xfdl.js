(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp01m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_notice", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","900",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","40","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","900",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaTitleImg","30","-1","1200","200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgNews","0","0","1200","160",null,null,null,null,null,null,this.Div.form.div_areaTitleImg.form);
            obj.set_image("url(\'theme://images/img_noticeTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("취업통계소식 고등교육기관졸업자 취업통계조사 취업통계소식입니다.");
            obj.set_taborder("0");
            this.Div.form.div_areaTitleImg.addChild(obj.name, obj);

            obj = new Div("sub_search","30","div_areaTitleImg:0","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("조사년도");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:0","20","150","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","290","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_text("조사종류");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","100","30","30",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:0","20","190","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_keyword","760","20","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_displaynulltext("검색어");
            obj.set_maxlength("50");
            obj.set_inputfilter("symbol,comma,dot,sign");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_name","629","20","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("이름");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_subject","in_chkBox_name:15","20","50","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_value("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("div_00","30","sub_search:0","1200","56",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"26","100","30","0",null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty09");
            obj.set_visible("false");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Grid("gd_notice_list","30","div_00:10","1200","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_notice");
            obj.set_cssclass("default");
            obj.set_wheelscrollrow("1");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"604\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"조사년도\"/><Cell col=\"2\" text=\"조사종류\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"첨부\"/><Cell col=\"5\" text=\"조회수\"/><Cell col=\"6\" text=\"작성자\"/><Cell col=\"7\" text=\"작성일\" border=\"0px none,0px none,1px solid #a5a5a5\"/></Band><Band id=\"body\"><Cell text=\"expr:RNUM == '0' ? '공지' :RNUM\" cssclass=\"c_red\" color=\"black\"/><Cell col=\"1\" text=\"bind:SURVYEAR\"/><Cell col=\"2\" text=\"bind:SURVKINDNM\"/><Cell col=\"3\" text=\"bind:SUBJECT\" cssclass=\"alignLeft\"/><Cell col=\"4\" displaytype=\"expr:FILEYN == '1' ? 'imagecontrol' : 'none'\" text=\"expr:FILEYN == '1'? &quot;url('theme://images/ico_file.png')&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:HIT\"/><Cell col=\"6\" text=\"bind:WORKERNM\"/><Cell col=\"7\" text=\"bind:WORKDTHM\" calendardateformat=\"yyyy.MM.dd\" displaytype=\"date\" calendareditformat=\"yyyy.MM.dd\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_notice_list:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("1");
            obj.set_text("pagging");
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
        this.addIncludeScript("hp01m00.xfdl","CM::common.xjs");
        this.registerScript("hp01m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        // include "HP::lib_hpCommon.xjs";


        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.fv_MENUNM = "알림소식>공지사항";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();
        this.hp01m00_oninit = function(obj,e)
        {
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");

        	if(grp == "2" || grp == "8"){
        		this.Div.form.div_00.form.btn_add.set_visible(true);
        	}
        };

        this.hp01m00_onload = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.selectYearList();
        	this.searchNoticeCnt();
        };


        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.searchNoticeCnt();
        };


        // 새글 작성
        this.Div_pagingWrap_btn_add_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.fn_goPage("HP::hp01m01.xfdl");
        };


        // 상세페이지 연결
        this.Div_gd_notice_list_oncellclick = function(obj,e)
        {
        	var rowPos = this.Div.form.gd_notice_list.getSelectedRows();
        	var bbsNo = this.ds_notice.getColumn(rowPos, "BBSNO");

        	var strParam = "BBSNO=" + bbsNo + "ª";
        	dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        	this.fn_goPage("HP::hp01m02.xfdl");
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_sub_search_btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)

        	}else{
        		if(serviceID == "searchNoticeCnt"){
        			this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        			this.paggingInit();
        	//		this.selectNoticeSearch(Number(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1));
        		}
        	}
        }

        // 조사년도
        this.selectYearList = function(){
        	this.gfnTransaction("selectYearList",
        						"swiss/hp/com/selectYearList.do",
        						"",
        						"ds_year=dsResult",
        						"",
        						"fnCallback",
        						false);
        	this.Div.form.sub_search.form.in_cb_year.set_index(0);
        	this.Div.form.sub_search.form.in_cb_kind.set_index(0);
        }

        // 전체 게시글수
        this.searchNoticeCnt = function(){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workernm = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";

        	if(workernm){
        		strParam += "WORKERNM=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //공지조회
        	this.gfnTransaction("searchNoticeCnt",
        						"swiss/hp/notice/searchNoticeCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 데이터 가져오기
        this.selectNoticeSearch = function(sPage){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workernm = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	if(workernm){
        		strParam += "WORKERNM=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectNoticeSearch",
        						"swiss/hp/notice/searchNoticeList.do",
        						"dsSearch=ds_search",
        						"ds_notice=dsResult",
        						"",
        						"fnCallback",
        						false);
        	/*
        	var cnt = this.ds_notice.getRowCount();
        	if(cnt > 10){
        		this.Div.form.gd_notice_list.set_height(Number(Number(cnt*40)+Number(50)));
        	} else {
        		this.Div.form.gd_notice_list.set_height(445);
        	}
        	this.Div.form.resetScroll();
        	*/
        }


        // 페이징 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        //	var num = (nPage == 0 ) ? '1' : nPage;
        	this.selectNoticeSearch(nPage);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp01m00_onload,this);
            this.addEventHandler("oninit",this.hp01m00_oninit,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_keyword.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.div_00.form.btn_add.addEventHandler("onclick",this.Div_pagingWrap_btn_add_onclick,this);
            this.Div.form.gd_notice_list.addEventHandler("oncellclick",this.Div_gd_notice_list_oncellclick,this);
        };

        this.loadIncludeScript("hp01m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
