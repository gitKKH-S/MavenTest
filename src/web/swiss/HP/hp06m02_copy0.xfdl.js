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
                this._setFormPosition(1260,1300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult_mst", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTINQCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult_exList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLENO\" type=\"STRING\" size=\"256\"/><Column id=\"EXAMPLETEXT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult_inqList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INQEXAMPLECNT\" type=\"STRING\" size=\"256\"/><Column id=\"INQGRPNM\" type=\"STRING\" size=\"256\"/><Column id=\"INQTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"SUJECTINQTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1300",null,null,null,null,null,null,this);
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

            obj = new Div("rowGrid","30","imgpoll:30","1200","395",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("rowGrid");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_01","0","0","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("0");
            obj.set_text("조사 회차");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_mfr","0","51","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("1");
            obj.set_text("설문 시작일");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02","155","0","425","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("2");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_02","580","0","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("3");
            obj.set_text("설문 회차");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00","735","0","465","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("4");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_stdde","155","51","425","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("5");
            obj.set_cssclass("boxDesc");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_04","580","51","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("6");
            obj.set_text("설문 종료일");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_00_00","735","51","465","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("7");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","0","102","155","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("8");
            obj.set_text("설문명");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static00_02_02_01","155","102","1045","51",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("9");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_05","0","153","155","240",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("10");
            obj.set_text("설명");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_dc","155","153","1045","240",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("11");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_survseq","172","14","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("12");
            obj.set_text("20202");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_queSeq","763","14","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("13");
            obj.set_text("001");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static01_01","172","65","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("14");
            obj.set_text("2020-06-26");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_endde","763","65","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("15");
            obj.set_text("2020-07-22");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_title","172","116","362","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("16");
            obj.set_text("2020년 취업통계 만족도 조사");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","172","166","362","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("17");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("div_queContent","30","rowGrid:30","1200","600",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_cssclass("divForm");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_queInqList","0","0",null,null,"0","0",null,null,null,null,this.Div.form.div_queContent.form);
            obj.set_taborder("0");
            this.Div.form.div_queContent.addChild(obj.name, obj);

            obj = new Div("btnArea","30","div_queContent:6",null,"68","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","540","20","120","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"20","120","30","0",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.rowGrid.form.label_survseq","text","dsResult_mst","SURVSEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.rowGrid.form.label_queSeq","text","dsResult_mst","QUESTIONSEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.rowGrid.form.Static01_01","text","dsResult_mst","QUESTIONTERMFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.rowGrid.form.label_endde","text","dsResult_mst","QUESTIONTERMTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div.form.rowGrid.form.label_title","text","dsResult_mst","QUESTIONTITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div.form.rowGrid.form.label_dc","text","dsResult_mst","QUESTIONSCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp06m02_copy0.xfdl","CM::common.xjs");
        this.registerScript("hp06m02_copy0.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;

        this.hp06m01_oninit = function(obj,e)
        {
        	this.QUESTIONSEQ = nexacro.getApplication().gds_rtn_result.getColumn(0, "QUESTIONSEQ");
        	if(this.QUESTIONSEQ == null){
        		this.alert("올바른 접근이 아닙니다.");
        		this.fn_goPage("HP::hp06m00.xfdl");
        		return;
        	}
        	this.SURVSEQ 	= nexacro.getApplication().gds_rtn_result.getColumn(0, "SURVSEQ");
        	this.SURVKINDCD = nexacro.getApplication().gds_rtn_result.getColumn(0, "SURVKINDCD");

        	this.selectQuestionViewList();
        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectQuestionViewList"){
        		var param = "SURVSEQ=" + this.SURVSEQ + "&SURVKINDCD=" + this.SURVKINDCD + "&QUESTIONSEQ=" + this.QUESTIONSEQ;
        		this.Div.form.div_queContent.form.webBrower_queInqList.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/hp/question/selectQueResTotJsp.do?"+param);
        	}
        }

        this.selectQuestionViewList = function(){
        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectQuestionViewList",
        					"swiss/hp/question/selectQuestionViewList.do",
        					"dsSearch=ds_search",
        					"dsResult_mst=dsResult",
        					"",
        					"fnCallback",
        					true);
        }

        //목록
        this.Div_btnArea_btn_list_onclick = function(obj,e)
        {
        	this.fn_goPage("HP::hp06m00.xfdl");
        };

        // 저장
        this.Div_btnArea_btn_save_onclick = function(obj,e)
        {
        	this.Div.form.div_queContent.form.webBrower_queInqList.callMethod("sendQes", this.SURVSEQ, this.SURVKINDCD, this.QUESTIONSEQ)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp06m01_oninit,this);
            this.Div.form.btnArea.form.btn_save.addEventHandler("onclick",this.Div_btnArea_btn_save_onclick,this);
            this.Div.form.btnArea.form.btn_list.addEventHandler("onclick",this.Div_btnArea_btn_list_onclick,this);
        };

        this.loadIncludeScript("hp06m02_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
