(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp06m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1060);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult_mst", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTINQCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult_exList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVEY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_ORDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult_inqList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVEY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PART_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTION_OBJECT\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
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

            obj = new Static("Static00","0","0","30","1300",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1300",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgpoll","30","0","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_pollTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("설문조사 고등교육기관졸업자 취업통계조사 설문조사입니다.");
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","label_dc:190","1200","395",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","735","0","465","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","0","155","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_text("설문명");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","155","0","1045","50",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_title","172","14","362","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("3");
            obj.set_text("2020년 취업통계 만족도 조사");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("div_queContent","30","rowGrid:-343","1200","748",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("divForm");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","div_queContent:6",null,"68","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"20","120","30","0",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty09");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_list","540","20","120","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty01");
            obj.set_visible("false");
            obj.set_enable("false");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Static("label_stdMsg","1","20","269","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("설문기간이 아닙니다.");
            obj.set_visible("false");
            obj.set_color("#fb5f3c");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_queInqList","30","240",null,null,"32","70",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1060,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","Div.form.rowGrid.form.label_title","text","dsResult_mst","SURVEY_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp06m01.xfdl","CM::common.xjs");
        this.addIncludeScript("hp06m01.xfdl","CM::utl_script.xjs");
        this.registerScript("hp06m01.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;
        this.TAR_STATE;
        this.SURVEY_CODE;
        this.SURVEY_FILE;
        this.USERID;

        this.hp06m01_oninit = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();

        	this.SURVEY_CODE = nexacro.getApplication().gds_rtn_result.getColumn(0, "SURVEY_CODE");
        	this.USERID = objApp.gds_login_info.getColumn(0, "USERID") ;

        	if(this.SURVEY_CODE == null){
        		this.alert("올바른 접근이 아닙니다.");
        		//this.fn_goPage("HP::hp06m00.xfdl");
        		return;
        	}

        	this.selectQuestionViewList();
        };

        this.tstNet = function(){
        	alert("call tstNet");
        	return ;
        }

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectQuestionViewList"){

        		this.SURVEY_FILE = this.dsResult_mst.getColumn(0,"SURVEY_FILE");
        		if(!this.SURVEY_FILE){
        			this.SURVEY_FILE = "202401.jsp";
        		}

        		var param = "?SURVEY_CODE=" + this.SURVEY_CODE + "&USERID=" + this.USERID;
        		var t_url = nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/SURVEY/"+this.SURVEY_FILE+param;
        		//alert("t_url="+t_url);
        		this.webBrower_queInqList.set_url(t_url);

        		//alert("rtn callback");
        	}
        }

        this.selectQuestionViewList = function(){
        	var strParam = "SURVEY_CODE=" 	+ this.SURVEY_CODE + "ª";
        	//strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	//strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectQuestionViewList",
        					"swiss/hp/question/selectQuestionViewListNew.do",
        					"dsSearch=ds_search",
        					"dsResult_mst=dsResult, dsResult_exList=exList, dsResult_inqList=inqList",
        					"",
        					"fnCallback",
        					true);
        }

        this.gfn_getDate = function()
        {
        	var d = new Date();
        	var s;
        	s = d.getFullYear()
        	+ ((d.getMonth() + 1) + "").padLeft(2, '0')
        	+ (d.getDate() + "").padLeft(2, '0');

        	return (s);
        };

        //목록
        this.Div_btnArea_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp06m00.xfdl");
        };

        // 저장
        this.Div_btnArea_btn_save_onclick = function(obj,e)
        {
        	//alert("call 0");
        	//this.Div.form.div_queContent.form.webBrower_queInqList.callMethod("sendQes", this.SURVSEQ, this.SURVKINDCD, this.QUESTIONSEQ)
        	var sSendData = "";
        	//alert("call 1");
        	//WebBrowser에 로드된 웹페이지의 "fnCallMethod" 함수 호출
        	this.webBrower_queInqList.callMethod("go_Submit",sSendData)
        	//alert("call 2");

        	//WebBrowser에 로드된 웹페이지의 document 객체를 PluginObject로 반환
        	//var objPlugin = this.webBrower_queInqList.getProperty("document");
        	//PluginObject 객체에 정의된 메서드 호출
        	//getElementById("formStatus") --> Id txtFireUserNotify 인 요소 가져오기
        	//var objElement = objPlugin.callMethod("getElementById", "formStatus");

        	//txtFireUserNotify 객체의 정의된 "value" 속성 값 반환
        	//var sValue = objElement.getProperty("value");
        	//alert("svalue=["+sValue+"]");
        	/*
        	if(sValue == "success"){
        		alert("결과출력 메뉴로 이동합니다.");
        		this.fn_goPage("GP::gp07m00.xfdl");
        	}
        	*/
        };

        this.webBrower_queInqList_onusernotify = function(obj,e)
        {
        	f(e.userdata)
            {

            }
        };

        this.Div_btnArea_btn_move_onclick = function(obj,e)
        {
        	this.fn_goPage("GP::gp07m00.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp06m01_oninit,this);
            this.Div.form.btnArea.form.btn_save.addEventHandler("onclick",this.Div_btnArea_btn_save_onclick,this);
            this.Div.form.btnArea.form.btn_list.addEventHandler("onclick",this.Div_btnArea_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp06m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
