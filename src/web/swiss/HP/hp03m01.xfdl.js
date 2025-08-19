(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp03m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            this.set_background("#f9f9f9");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1070);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pds", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1070",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1060",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1060",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgreFer","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_referTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("자료실 고등교육기관졸업자 취업통계조사 자료실입니다.");
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaMain","30","imgreFer:30","1200","805",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaContent","0","130","1198","420",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("1");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Div("div_area4","0","0","1198","400",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaContent.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_url("CM::TextEditor.xfdl");
            this.Div.form.div_areaMain.form.div_areaContent.addChild(obj.name, obj);

            obj = new Div("div_areaFile","0","div_areaContent:0","1198","246",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("static_file","0","0","155","245",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Div("div_fileRight","static_file:15","0",null,"235","10",null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("div_fileRight");
            obj.set_url("CM::DataTransBoard.xfdl");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("2");
            obj.set_text("조사년도");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","578","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","425","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:20","4","150","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","733","0",null,"40","0",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("6");
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:20","4","210","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","40","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("8");
            obj.set_text("공지여부");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","80","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static_noticeYn","Static00_00_00:0","Static00_02:0",null,"40","0",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("12");
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","Static00_00_00_00:0","Static_noticeYn:0",null,"40","0",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Edit("in_edit_subject","Static00_00_00_00:20","85",null,"30","20",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("11");
            obj.set_maxlength("200");
            obj.set_inputfilter("sign");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_noticeYn","Static00_00_00:20","48","150","20",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("13");
            obj.set_text("공지사항");
            obj.set_falsevalue("2");
            obj.set_truevalue("1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Div("div_00","30","div_areaMain:0",null,"68","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","120","30","0",null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_visible("true");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_list","560","20","120","30",null,null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1070,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div.form.div_areaMain.form.div_areaContent.form.div_area4","text","ds_pds","TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div.form.div_areaMain.form.in_cb_year","value","ds_pds","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_areaMain.form.in_cb_kind","value","ds_pds","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.div_areaMain.form.in_edit_subject","value","ds_pds","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.div_areaMain.form.in_chkBox_noticeYn","value","ds_pds","NOTICEYN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::TextEditor.xfdl");
            this._addPreloadList("fdl","CM::DataTransBoard.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp03m01.xfdl","CM::common.xjs");
        this.registerScript("hp03m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.bbsNo;
        this.mode = "NEW";
        //this.fv_MENUNM = "알림소식>자료실>작성";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();
        this.hp03m00_oninit = function(obj,e)
        {
        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo != null){			// 신규
        		this.mode = "MOD";
        	}


        };


        this.hp03m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.selectYearList();

        	if(this.mode == "NEW"){
        		this.Div.form.div_areaMain.form.in_cb_year.set_index(0);
        		this.Div.form.div_areaMain.form.in_cb_kind.set_index(0);
        	} else {
        		this.Div.form.div_00.form.btn_save.set_text("수정");
        		this.selectPdsView();
        	}

        };


        // 목록
        this.Div_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp03m00.xfdl");
        };

        // 처리
        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(this.validate()){
        		return;
        	}

        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var REFNO = '';
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var TEXT 		= this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.getContentTxt();
        	var NOTICEYN 	= this.Div.form.div_areaMain.form.in_chkBox_noticeYn.value;
        	var FILEID 		= this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.returnAttIdtNo();
        	var WORKERNM	= objApp.gds_login_info.getColumn(0, "USERNM");

        	var strParam = 'SURVYEAR＃§＃' + SURVYEAR + 'ª';
        	strParam += 'SURVKINDCD＃§＃' + SURVKINDCD + 'ª';
        	strParam += 'SUBJECT＃§＃' + SUBJECT + 'ª';
        	strParam += 'TEXT＃§＃' + TEXT + 'ª';
        	strParam += 'NOTICEYN＃§＃' + NOTICEYN + 'ª';
        	strParam += 'FILEID＃§＃' + FILEID + 'ª';
        	strParam += 'WORKERNM＃§＃' + WORKERNM + 'ª';

        	if(this.mode == 'MOD'){
        		strParam += 'BBSNO＃§＃' + this.bbsNo + 'ª';
        		//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "수정", strParam);  //자료실 수정
        		dsParamSetArrowBlank2(this.ds_search, strParam);
        		this.gfnTransaction("updatePds",
        						"swiss/hp/pds/updatePds.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	} else {
        		strParam += 'REFNO＃§＃' + REFNO + 'ª';
        		//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", strParam);  //자료실 저장
        		dsParamSetArrowBlank2(this.ds_search, strParam);
        		this.gfnTransaction("insertPds",
        						"swiss/hp/pds/insertPds.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	}
        };

        // editor에 내용 전달 (처음로딩시 실행)
        this.returnContent = function(){
        	if(this.mode == "MOD"){
        		return this.ds_pds.getColumn(0, "TEXT");
        	} else {
        		return "";
        	}
        }

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectYearList"){

        		} else if(serviceID == "selectPdsView"){

        		} else if(serviceID == "insertPds"){
        			this.alert("저장 되었습니다.");
        			this.fn_goPage("HP::hp03m00.xfdl");
        		} else if(serviceID == "updatePds"){
        			this.alert("수정 되었습니다.");
        			this.fn_goPage("HP::hp03m00.xfdl");
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
        }

        // 상세정보
        this.selectPdsView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("selectPdsView",
        						"swiss/hp/pds/selectPdsView.do",
        						"dsSearch=ds_search",
        						"ds_pds=dsResult",
        						"",
        						"fnCallback",
        						false);
        	this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.varSetting(this.ds_pds.getColumn(0, "FILEID"), true);
        }

        this.validate = function(){
        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var TEXT 		= this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.getContentTxt();

        	if(SURVYEAR == null || SURVYEAR == ""){
        		this.alert("조사년도를 선택하세요");
        		return true;
        	} else if(SURVKINDCD == null || SURVKINDCD == ""){
        		this.alert("조사종류를 선택하세요");
        		return true;
        	} else if(SUBJECT == null || SUBJECT == ""){
        		this.alert("제목을 입력하세요");
        		return true;
        	} else if(TEXT == null || TEXT == ""){
        		this.alert("내용을 입력하세요");
        		return true;
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp03m00_oninit,this);
            this.addEventHandler("onload",this.hp03m00_onload,this);
            this.Div.form.div_00.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
            this.Div.form.div_00.form.btn_list.addEventHandler("onclick",this.Div_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp03m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
