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
            this.set_background("#f9f9f9");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_news", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARDSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BBSNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOARDTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"REFNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NOTICEYN\" type=\"STRING\" size=\"256\"/><Column id=\"SECRETYN\" type=\"STRING\" size=\"256\"/><Column id=\"HIT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","920",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","920",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","920",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgNews","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_newsTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("취업통계소식 고등교육기관졸업자 취업통계조사 취업통계소식입니다.");
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaMain","30","imgNews:30","1200","650",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_areaContent","0","53","1198","580",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #a5a5a5");
            obj.set_text("");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Div("div_area4","0","0","1198",null,null,"0",null,null,null,null,this.Div.form.div_areaMain.form.div_areaContent.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_url("CM::TextEditor.xfdl");
            this.Div.form.div_areaMain.form.div_areaContent.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","0","155","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("boxTitle");
            obj.set_textAlign("center");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","155","0","1045","40",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Edit("in_edit_subject","Static00_00_00_00:20","5","1005","30",null,null,null,null,null,null,this.Div.form.div_areaMain.form);
            obj.set_taborder("3");
            obj.set_maxlength("200");
            obj.set_inputfilter("sign");
            this.Div.form.div_areaMain.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"div_areaMain:20","120","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_list","590","div_areaMain:20","120","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,920,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div.form.div_areaMain.form.div_areaContent.form.div_area4","text","ds_news","TEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div.form.div_areaMain.form.in_edit_subject","value","ds_news","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::TextEditor.xfdl");
        };
        
        // User Script
        this.addIncludeScript("hp02m01.xfdl","CM::common.xjs");
        this.registerScript("hp02m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.bbsNo;
        this.mode = "NEW";
        this.fv_MENUNM = "알림소식>취업통계소식>작성";
        this.fv_SURVSEQ="";
        this.fv_SURVKINDCD="AG";
        var objApp 		= nexacro.getApplication();
        this.hp02m01_oninit = function(obj,e)
        {
        	this.bbsNo =  nexacro.getApplication().gds_rtn_result.getColumn(0, "BBSNO");
        	if(this.bbsNo != null){			// 신규
        		this.mode = "MOD";
        	}
        };

        this.hp02m01_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	if(this.mode == "MOD"){
        		this.Div.form.btn_save.set_text("수정");
        		this.selectNewsView();
        	}
        };


        // 목록
        this.Div_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp02m00.xfdl");
        };

        // 처리
        this.Div_btn_save_onclick = function(obj,e)
        {
        	if(this.validate()){
        		return;
        	}
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var TEXT 		= this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.getContentTxt();
        	var WORKERNM	= objApp.gds_login_info.getColumn(0, "USERNM");

        	var strParam = 'SUBJECT＃§＃' + SUBJECT + 'ª';
        	strParam += 'TEXT＃§＃' + TEXT + 'ª';
        	strParam += 'WORKERNM＃§＃' + WORKERNM + 'ª';

        	if(this.mode == 'MOD'){
        		strParam += 'BBSNO＃§＃' + this.bbsNo + 'ª';
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "수정", strParam);  //취업통계소식 수정
        		dsParamSetArrowBlank2(this.ds_search, strParam);
        		this.gfnTransaction("updateNews",
        						"swiss/hp/news/updateNews.do",
        						"dsSearch=ds_search",
        						"",
        						"",
        						"fnCallback",
        						true);
        	} else {
        		dsParamSetArrowBlank2(this.ds_search, strParam);
        			this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", strParam);  //취업통계소식 저장
        		this.gfnTransaction("insertNews",
        						"swiss/hp/news/insertNews.do",
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
        		return this.ds_news.getColumn(0, "TEXT");
        	} else {
        		return "";
        	}
        }

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectNewsView"){

        		} else if(serviceID == "insertNews"){
        			this.alert("저장 되었습니다.");
        			this.fn_goPage("HP::hp02m00.xfdl");
        		} else if(serviceID == "updateNews"){
        			this.alert("수정 되었습니다.");
        			this.fn_goPage("HP::hp02m00.xfdl");
        		}
        	}
        }

        // 상세정보
        this.selectNewsView = function(){
        	var strParam = "BBSNO=" + this.bbsNo + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectNewsView",
        						"swiss/hp/news/selectNewsView.do",
        						"dsSearch=ds_search",
        						"ds_news=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.validate = function(){
        	var SUBJECT		= this.Div.form.div_areaMain.form.in_edit_subject.value;
        	var TEXT 		= this.Div.form.div_areaMain.form.div_areaContent.form.div_area4.form.getContentTxt();

        	if(SUBJECT == null || SUBJECT == ""){
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
            this.addEventHandler("oninit",this.hp02m01_oninit,this);
            this.addEventHandler("onload",this.hp02m01_onload,this);
            this.Div.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
            this.Div.form.btn_list.addEventHandler("onclick",this.Div_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp02m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
