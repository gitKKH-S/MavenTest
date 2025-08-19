(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp05m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">조사지침</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">학과담당자용</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CDNM\">전산담당자용</Col></Row><Row><Col id=\"CD\">5</Col><Col id=\"CDNM\">취업담당자용</Col></Row><Row><Col id=\"CD\">6</Col><Col id=\"CDNM\">홈페이지</Col></Row><Row><Col id=\"CD\">7</Col><Col id=\"CDNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","900",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

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
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgQna","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_qnaTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("FAQ 고등교육기관졸업자 취업통계조사 FAQ입니다.");
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","imgQna:40","1200","74",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"20","100","30","30",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_keyword",null,"20","200","30","145",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("검색어");
            obj.set_maxlength("50");
            obj.set_inputfilter("comma,dot,sign,symbol");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_text",null,"20","50","30","in_edit_keyword:5",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_type","469","20","32","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("유형");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_type","label_type:5","20","130","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_subject",null,"20","50","30","in_chkBox_text:15",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_value("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_name",null,"20","50","30","in_chkBox_subject:15",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00","25","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("조사년도");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:0","20","130","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","in_cb_year:30","20","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("조사종류");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:0","20","130","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("div_00","30","sub_search:0","1200","56",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_fileSave","0","26","100","30",null,null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("파일로저장");
            obj.set_cssclass("btn_sty05");
            obj.set_visible("false");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"26","100","30","0",null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("1");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty09");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Grid("gd_qna_list","30","div_00:10","1200","445",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_qna");
            obj.set_cssclass("default");
            obj.set_wheelscrollrow("1");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_scrollbartype("auto auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"158\"/><Column size=\"18\"/><Column size=\"450\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"105\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"조사년도\"/><Cell col=\"2\" text=\"조사종류\"/><Cell col=\"3\" text=\"유형\"/><Cell col=\"4\" border=\"1px solid #cacaca,0px solid #cacaca,1px solid #cacaca,1px solid #cacaca\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"답변\"/><Cell col=\"7\" text=\"첨부\"/><Cell col=\"8\" text=\"학교명\"/><Cell col=\"9\" text=\"작성자\"/><Cell col=\"10\" text=\"작성일\" border=\"1px solid #cacaca\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"c_red\" color=\"#050505\"/><Cell col=\"1\" text=\"bind:SURVYEAR\"/><Cell col=\"2\" text=\"bind:SURVKINDNM\"/><Cell col=\"3\" text=\"bind:TYPENM\"/><Cell col=\"4\" displaytype=\"expr:SECRETYN == '1' ? 'imagecontrol' : 'none'\" text=\"expr:SECRETYN == '1'? &quot;url('theme://images/ico_lock.png')&quot; : &quot;&quot;\" border=\"1px solid #dbdee2,0px solid #dbdee2,1px solid #dbdee2,1px solid #dbdee2\"/><Cell col=\"5\" text=\"bind:SUBJECT\" cssclass=\"alignLeft\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:REPLYCNT\"/><Cell col=\"7\" displaytype=\"expr:FILEYN == '1' ? 'imagecontrol' : 'none'\" text=\"expr:FILEYN == '1'? &quot;url('theme://images/ico_file.png')&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:SCHNM\"/><Cell col=\"9\" text=\"bind:WORKERNM\"/><Cell col=\"10\" text=\"bind:WORKDTHM\" calendardateformat=\"yyyy.MM.dd\" displaytype=\"date\" calendareditformat=\"yyyy.MM.dd\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_qna_list:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("1");
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
        this.addIncludeScript("hp05m00.xfdl","CM::common.xjs");
        this.addIncludeScript("hp05m00.xfdl","CM::utl_script.xjs");
        this.registerScript("hp05m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.pageRowCnt = 20;
        this.totalRowCnt = 0;

        this.fv_MENUNM = "알림소식>Q&A";

        this.hp05m00_oninit = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	if(grp == "2" || grp == "8"){
        		this.Div.form.div_00.form.btn_fileSave.set_visible(true);
        	}


        };

        this.hp05m00_onload = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.selectYearList();
        	this.searchQnaCnt();
        };


        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.searchQnaCnt();
        };

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_sub_search_btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };

        // 작성
        this.Div_pagingWrap_btn_add_onclick = function(obj,e)
        {
        	nexacro.getApplication().gds_rtn_result.clear();
        	this.fn_goPage("HP::hp05m01.xfdl");
        };


        // 상세
        this.Div_gd_qna_list_oncellclick = function(obj,e)
        {
        	var rowPos = this.Div.form.gd_qna_list.getSelectedRows();
        	var bbsNo = this.ds_qna.getColumn(rowPos, "BBSNO");
        	var writer = this.ds_qna.getColumn(rowPos, "WORKERID");
        	var sec	= this.ds_qna.getColumn(rowPos, "SECRETYN");

        	var objApp = nexacro.getApplication();
        	var grp = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	var userid = objApp.gds_login_info.getColumn(0, "USERID");

        	if(sec == "1"){
        		if(userid == writer || grp == '2' || grp == '8'){
        			var strParam = "BBSNO=" + bbsNo + "ª";
        			dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        			this.fn_goPage("HP::hp05m02.xfdl");
        		} else {
        			this.alert("작성자만 열람 가능합니다.");
        		}
        	} else {
        		var strParam = "BBSNO=" + bbsNo + "ª";
        		dsParamSetArrowBlank(nexacro.getApplication().gds_rtn_result, strParam);
        		this.fn_goPage("HP::hp05m02.xfdl");
        	}
        };

        // 파일저장
        this.Div_btn_fileSave_onclick = function(obj,e)
        {
        	if(this.ds_qna.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var typecd = this.Div.form.sub_search.form.in_cb_type.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workernm = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;
        	var text = this.Div.form.sub_search.form.in_chkBox_text.value;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "TYPECD=" + typecd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";

        	if(workernm){
        		strParam += "WORKERNM=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}
        	if(text){
        		strParam += "ANSWER=Y" + "ª";
        	}
        	this.setAccessLog("", "AG", this.fv_MENUNM, "파일로저장", strParam);

        	this.utlf_excelDownload("QnA목록", this.Div.form.gd_qna_list, this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {
        }



        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "searchQnaCnt"){
        			this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        			this.paggingInit();
        			//this.searchQnaList(Number(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1));
        		} else if(serviceId == "selectYearList"){

        		} else if(serviceId == "searchQnaList"){
        		//	this.Div.form.gd_notice_list.set_height(500);

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
        	this.Div.form.sub_search.form.in_cb_type.set_index(0);
        }


        //Div.form.pagingWrap.form.div_pagging


        // 전체 게시글수
        this.searchQnaCnt = function(){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var typecd = this.Div.form.sub_search.form.in_cb_type.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workernm = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;
        	var text = this.Div.form.sub_search.form.in_chkBox_text.value;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "TYPECD=" + typecd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";

        	if(workernm){
        		strParam += "WORKERNM=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}
        	if(text){
        		strParam += "ANSWER=Y" + "ª";
        	}
        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("searchQnaCnt",
        						"swiss/hp/qna/searchQnaCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 데이터 가져오기
        this.searchQnaList = function(sPage){
        	var year = this.Div.form.sub_search.form.in_cb_year.value;
        	var kindcd = this.Div.form.sub_search.form.in_cb_kind.value;
        	var typecd = this.Div.form.sub_search.form.in_cb_type.value;
        	var keyword = this.Div.form.sub_search.form.in_edit_keyword.value;
        	var workernm = this.Div.form.sub_search.form.in_chkBox_name.value;
        	var subject = this.Div.form.sub_search.form.in_chkBox_subject.value;
        	var text = this.Div.form.sub_search.form.in_chkBox_text.value;

        	if(sPage == '0'){
        		sPage=1;
        	}
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;

        	var strParam = "SURVYEAR=" + year+ "ª";
        	strParam += "SURVKINDCD=" + kindcd+ "ª";
        	strParam += "TYPECD=" + typecd+ "ª";
        	strParam += "KEYWORD=" + keyword+ "ª";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	if(workernm){
        		strParam += "WORKERNM=Y" + "ª";
        	}
        	if(subject){
        		strParam += "SUBJECT=Y" + "ª";
        	}
        	if(text){
        		strParam += "ANSWER=Y" + "ª";
        	}
        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "검색", strParam);

        	this.gfnTransaction("searchQnaList",
        						"swiss/hp/qna/searchQnaList.do",
        						"dsSearch=ds_search",
        						"ds_qna=dsResult",
        						"",
        						"fnCallback",
        						false);

        	/*
        	var cnt = this.ds_qna.getRowCount();
        	if(cnt > 10){
        		this.Div.form.gd_qna_list.set_height(Number(Number(cnt*40)+Number(50)));
        	} else {
        		this.Div.form.gd_qna_list.set_height(445);
        	}
        	this.Div.form.resetScroll();
        	*/
        }


        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }


        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	this.searchQnaList(nPage);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hp05m00_onload,this);
            this.addEventHandler("oninit",this.hp05m00_oninit,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_keyword.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.div_00.form.btn_fileSave.addEventHandler("onclick",this.Div_btn_fileSave_onclick,this);
            this.Div.form.div_00.form.btn_add.addEventHandler("onclick",this.Div_pagingWrap_btn_add_onclick,this);
            this.Div.form.gd_qna_list.addEventHandler("oncellclick",this.Div_gd_qna_list_oncellclick,this);
        };

        this.loadIncludeScript("hp05m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
