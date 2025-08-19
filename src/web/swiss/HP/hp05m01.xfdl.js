(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp05m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            this.set_background("#f9f9f9");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">FP</Col><Col id=\"CDNM\">신입생정보</Col></Row><Row><Col id=\"CD\">GP</Col><Col id=\"CDNM\">졸업생정보</Col></Row><Row><Col id=\"CD\">AG</Col><Col id=\"CDNM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_year", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchkey", this);
            obj._setContents("<ColumnInfo><Column id=\"ipaddr\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_key", this);
            obj._setContents("<ColumnInfo><Column id=\"genBBSKey\" type=\"STRING\" size=\"256\"/><Column id=\"genBBSKeyOrg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"TYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"TYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">조사지침</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">학과담당자용</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CDNM\">전산담당자용</Col></Row><Row><Col id=\"CD\">5</Col><Col id=\"CDNM\">취업담당자용</Col></Row><Row><Col id=\"CD\">6</Col><Col id=\"CDNM\">홈페이지</Col></Row><Row><Col id=\"CD\">7</Col><Col id=\"CDNM\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","940",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","940",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","940",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgQna","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_qnaTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("FAQ 고등교육기관졸업자 취업통계조사 FAQ입니다.");
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaMain","30","imgQna:30","1200","670",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_area4","0","120","1198","301",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","0","0","155","300",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_area4.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.form.div_area4.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01_00","155","0","1043","300",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_area4.form);
            obj.set_taborder("1");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.form.div_area4.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_answer","Static00_00_00_00_00:20","5",null,null,"18","9",null,null,null,null,this.Div.form.div_areaMain.form.div_area4.form);
            obj.set_taborder("2");
            obj.set_maxlength("4000");
            this.Div.form.div_areaMain.form.div_area4.addChild(obj.name, obj);

            obj = new Div("div_areaFile","0","div_area4:-1","1198","245",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_formscrollbartype("none none");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","0","0","155","245",null,null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Div("div_fileRight","Static00_00_00_00_00_00:15","0",null,"235","10",null,null,null,null,null,this.Div.form.div_areaMain.form.div_areaFile.form);
            obj.set_taborder("1");
            obj.set_text("div_fileRight");
            obj.set_url("CM::DataTransBoard.xfdl");
            this.Div.form.div_areaMain.form.div_areaFile.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","245","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("3");
            obj.set_text("조사년도");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","400","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("4");
            obj.set_text("조사종류");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","555","0","245","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,1px solid #b5bbc2,1px solid #b5bbc2,0px none");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:20","4","205","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_year");
            obj.set_codecolumn("CDNM");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_kind","Static00_01_01:20","4","205","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_kind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","800","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("8");
            obj.set_text("유형");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","Static00_01_01_00:0","0","245","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("9");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0","40","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("11");
            obj.set_text("비공개");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02","Static00_00_00:0","Static00_02:0","1045","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Combo("in_cb_type","Static00_01_01_00:20","4","205","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_secretYn","Static00_00_00:20","48","150","20",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("13");
            obj.set_text("비공개");
            obj.set_falsevalue("2");
            obj.set_truevalue("1");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","80","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("14");
            obj.set_text("제목");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","155","80","1045","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("15");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Edit("in_edit_subject","Static00_00_00_00:20","84",null,"30","20",null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("16");
            obj.set_maxlength("200");
            obj.set_inputfilter("sign");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Div("div_00","30","div_areaMain:0",null,"68","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","120","30","0",null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.Div.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_list","560","20","120","30",null,null,null,null,null,null,this.Div.form.div_00.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.Div.form.div_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,940,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.div_areaMain.form.in_cb_year","value","ds_qna","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.div_areaMain.form.in_cb_kind","value","ds_qna","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.div_areaMain.form.in_cb_type","value","ds_qna","TYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.div_areaMain.form.in_chkBox_secretYn","value","ds_qna","SECRETYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.div_areaMain.form.in_edit_subject","value","ds_qna","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.div_areaMain.form.div_area4.form.in_txtEdit_answer","value","ds_qna","ANSWER");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::DataTransBoard.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp05m01.xfdl","CM::common.xjs");
        this.registerScript("hp05m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.bbsNo;
        this.mode = "NEW";
        this.genBBSKey;
        this.genBBSKeyOrg;
        this.CLIENT_IPADDRESS;
        this.fv_USERGRPTYPE;
        this.fv_MENUNM = "알림소식>Q&A>작성";
        var objApp = nexacro.getApplication();
        this.hp05m01_oninit = function(obj,e)
        {

        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo != null){			// 신규
        		this.mode = "MOD";
        	}

        	this.transaction("sid","/ext_lib/ip_chk.jsp","","","","fn_ip_chk");
        };

        this.fn_ip_chk = function(sid, ecd, emsg)
        {
        	//alert("ip:"+this.CLIENT_IPADDRESS+", sid:"+sid+",ecd:"+ecd+",emsg:"+emsg);
        	if(!this.CLIENT_IPADDRESS){
        		this.CLIENT_IPADDRESS="127.0.0.1"
        	}
        	//alert(this.CLIENT_IPADDRESS);
        	//var chkIP = this.CLIENT_IPADDRESS;
        	//alert("chkIP="+chkIP);

        	this.genBBSKey();
        }

        this.hp05m01_onload = function(obj,e)
        {
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(0, "USERGRPTYPE");
        	if(this.fv_USERGRPTYPE == '1' || //마스터관리자
        	   this.fv_USERGRPTYPE == '2' || //kedi관리자
        	   this.fv_USERGRPTYPE == '8' ){ //콜센터관리자

        	   }else{
        			this.Div.form.div_areaMain.form.Static00_00_00.set_visible(false);     //비공개 타이틀
        			this.Div.form.div_areaMain.form.in_chkBox_secretYn.set_visible(false); //비공개 체크박스
        			this.Div.form.div_areaMain.form.Static00_02_02.set_visible(false);     //비공개 바디

        			this.Div.form.div_areaMain.form.Static00_00_00_00.set_top(40);         //제목 타이틀
        			this.Div.form.div_areaMain.form.Static00_02_02_01.set_top(40);         //제목 바디
        			this.Div.form.div_areaMain.form.in_edit_subject.set_top(44);           //제목 에디트박스
        			this.Div.form.div_areaMain.form.div_area4.set_top(80);                 //내용 div
        			this.Div.form.div_areaMain.form.div_areaFile.set_top(380);             //첨부파일 div
        			this.Div.form.div_00.set_top(820);                                     //목록 저장 버튼 div
        	   }
        	this.selectYearList();
        	if(this.mode == "NEW"){
        		this.Div.form.div_areaMain.form.in_cb_year.set_index(0);
        		this.Div.form.div_areaMain.form.in_cb_kind.set_index(0);
        		this.Div.form.div_areaMain.form.in_cb_type.set_index(0);
        	} else {
        		this.Div.form.div_00.form.btn_save.set_text("수정");
        		this.selectQnaView();
        	}
        };


        // 목록

        this.Div_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp05m00.xfdl");
        };

        // 처리
        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(this.validate()){
        		return;
        	}

        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var SECRETYN	= this.Div.form.div_areaMain.form.in_chkBox_secretYn.value;
        	var TYPECD		= this.Div.form.div_areaMain.form.in_cb_type.value;
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var ANSWER		= escape(this.Div.form.div_areaMain.form.div_area4.form.in_txtEdit_answer.value);

        	//alert("Answer=["+ANSWER+"]");
        	//return false;

        	var FILEID 		= this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.returnAttIdtNo();
        	var GENBBSKEY   = this.genBBSKey;
        	var WORKERNM	= objApp.gds_login_info.getColumn(0, "USERNM");

        	var strParam = 'SURVYEAR=' 	+ SURVYEAR + 'ª';
        	strParam 	+= 'SURVKINDCD='+ SURVKINDCD + 'ª';
        	strParam 	+= 'SECRETYN=' 	+ SECRETYN + 'ª';
        	strParam 	+= 'TYPECD=' 	+ TYPECD + 'ª';
        	strParam 	+= 'SUBJECT=' 	+ SUBJECT + 'ª';
        	strParam 	+= 'ANSWER=' 	+ ANSWER + 'ª';
        	strParam 	+= 'FILEID=' 	+ FILEID + 'ª';
        	strParam 	+= 'GENKEY=' 	+ GENBBSKEY + 'ª';
        	strParam 	+= 'WORKERNM='	+ WORKERNM + 'ª';

        	if(this.mode == 'MOD'){
        		strParam += 'BBSNO=' 	+ this.bbsNo + 'ª';

        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.setAccessLog("", "AG", this.fv_MENUNM, "수정", strParam);  //접속기록
        		this.gfnTransaction("updateQna",
        						"swiss/hp/qna/updateQna.do",
        						"dsSearch=ds_search ",
        						"",
        						"",
        						"fnCallback",
        						true);
        	} else {
        		dsParamSetArrowBlank(this.ds_search, strParam);
        		this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strParam);  //접속기록
        		this.gfnTransaction("insertQna",
        						"swiss/hp/qna/insertQna.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	}
        };


        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD == 0){
        		if(serviceId == "selectYearList"){


        		} else if(serviceId == "genBBSKey"){
        			//alert(this.ds_key.saveXML());
        			this.genBBSKey = this.ds_key.getColumn(0,"GENBBSKEY");
        			this.genBBSKeyOrg = this.ds_key.getColumn(0,"GENBBSKEYORG");
        			//alert("genBBSKey=["+this.genBBSKey+"], genBBSKeyOrg=["+this.genBBSKeyOrg+"]");

        		} else if(serviceId == "selectQnaView"){
        			//this.Div.form.Div00.form.Div00_00_00.form.in_cb_year.set_value(this.ds_qna.getColumn(0, "SURVYEAR"));

        			var nAnswer = this.ds_qna.getColumn(0,"ANSWER");
        			var n2Answer = unescape(nAnswer);
        			this.ds_qna.setColumn(0,"ANSWER",n2Answer);

        			setTimeout(function() {
        				//this.Div.form.div_areaMain.form.div_areaContent.form.div_area4
        				//this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.setContentTxt( "서브 내용 전달" /*this.ds_qna.getColumn(0, "TEXT")*/);
        			}, 3000);
        			//trace("내용 전달 START 1");
        			//this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.setContentTxt( "서브 내용 전달" /*this.ds_qna.getColumn(0, "TEXT")*/);
        			//trace("내용 전달 END");

        			this.Div.form.div_areaMain.form.div_areaFile.form.div_fileRight.form.varSetting(this.ds_qna.getColumn(0, "FILEID"), true);
        		} else if(serviceId == "insertQna"){
        			this.alert("저장 되었습니다.");
        			this.fn_goPage("HP::hp05m00.xfdl");
        		} else if(serviceId == "updateQna"){
        			this.alert("수정 되었습니다.");
        			this.fn_goPage("HP::hp05m00.xfdl");
        		}
        	} else {
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
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

        //자동등록방지 키 생성
        this.genBBSKey = function(){
        	var strParam = 'IPADDR=' 	+ this.CLIENT_IPADDRESS + 'ª';
        	//alert(strParam);
        	dsParamSetArrowBlank(this.ds_searchkey, strParam);

        	//alert(this.ds_searchkey.saveXML());

        	this.gfnTransaction("genBBSKey",
        						"swiss/hp/com/genBBSKey.do",
        						"dsSearch=ds_searchkey",
        						"ds_key=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 상세정보
        this.selectQnaView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog("", "AG", this.fv_MENUNM, "상세", strParam);  //접속기록
        	this.gfnTransaction("selectQnaView",
        						"swiss/hp/qna/selectQnaView.do",
        						"dsSearch=ds_search",
        						"ds_qna=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.validate = function(){
        	var SURVYEAR 	= this.Div.form.div_areaMain.form.in_cb_year.value;
        	var SURVKINDCD 	= this.Div.form.div_areaMain.form.in_cb_kind.value;
        	var TYPECD 		= this.Div.form.div_areaMain.form.in_cb_type.value;
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var TEXT 		= this.Div.form.div_areaMain.form.div_area4.form.in_txtEdit_answer.value;

        	if(SURVYEAR == null || SURVYEAR == ""){
        		this.alert("조사년도를 선택하세요");
        		return true;
        	} else if(SURVKINDCD == null || SURVKINDCD == ""){
        		this.alert("조사종류를 선택하세요");
        		return true;
        	} else if(TYPECD == null || TYPECD == ""){
        		this.alert("유형을 선택하세요");
        		return true;
        	} else if(SUBJECT == null || SUBJECT == ""){
        		this.alert("제목을 입력하세요");
        		return true;
        	} else if(TEXT == null || TEXT == ""){
        		this.alert("내용을 입력하세요");
        		return true;
        	}
        }

        // editor에 내용 전달 (처음로딩시 실행)
        this.returnContent = function(){
        	if(this.mode == "MOD"){
        		return this.ds_qna.getColumn(0, "TEXT");
        	} else {
        		return "";
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp05m01_oninit,this);
            this.addEventHandler("onload",this.hp05m01_onload,this);
            this.Div.form.div_areaMain.form.Static00.addEventHandler("onclick",this.Div_div_areaMain_Static00_onclick,this);
            this.Div.form.div_00.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
            this.Div.form.div_00.form.btn_list.addEventHandler("onclick",this.Div_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp05m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
