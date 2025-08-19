(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad16p01");
            this.set_titletext("설문결과");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsResult_mst", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMFR\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTERMTO\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONTITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTINQCNT\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"DELYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_essayAns", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"QUESTIONSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INQNO\" type=\"STRING\" size=\"256\"/><Column id=\"INQTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"INQTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWERNO\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWERTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","695",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","695",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","695",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("설문결과");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Button("btn_saveFile",null,"27","100","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.addChild(obj.name, obj);

            obj = new Div("rowGrid","30","60","1200","305",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
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

            obj = new Static("label_05","0","153","155","150",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("10");
            obj.set_text("설명");
            obj.set_cssclass("boxTitleBlue");
            obj.set_textAlign("center");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_survseq","172","14","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("11");
            obj.set_text("20202");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_queSeq","763","14","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("12");
            obj.set_text("001");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("Static01_01","172","65","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("13");
            obj.set_text("2020-06-26");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_endde","763","65","208","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("14");
            obj.set_text("2020-07-22");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_title","172","116","362","22",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("15");
            obj.set_text("2020년 취업통계 만족도 조사");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Div("div_00","155","153","1045","150",null,null,null,null,null,null,this.Div.form.rowGrid.form);
            obj.set_taborder("16");
            obj.set_formscrollbartype("default");
            obj.set_formscrolltype("vertical");
            this.Div.form.rowGrid.addChild(obj.name, obj);

            obj = new Static("label_dc","0","0","1045","200",null,null,null,null,null,null,this.Div.form.rowGrid.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("boxDesc");
            obj.set_border("0px none,0px none,1px solid #b5bbc2");
            this.Div.form.rowGrid.form.div_00.addChild(obj.name, obj);

            obj = new Div("div_queContent","30","rowGrid:30","1200","200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_cssclass("divForm");
            this.Div.addChild(obj.name, obj);

            obj = new WebBrowser("webBrower_queInqList","0","0",null,null,"0","0",null,null,null,null,this.Div.form.div_queContent.form);
            obj.set_taborder("0");
            this.Div.form.div_queContent.addChild(obj.name, obj);

            obj = new Grid("gd_essayAns","978","14","216","120",null,null,null,null,null,null,this.Div.form.div_queContent.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_essayAns");
            obj.set_cssclass("default");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"조사회차\"/><Cell col=\"1\" text=\"조사종류\"/><Cell col=\"2\" text=\"설문순번\"/><Cell col=\"3\" text=\"문제번호\"/><Cell col=\"4\" text=\"설문타입\"/><Cell col=\"5\" text=\"문제내용\"/><Cell col=\"6\" text=\"답변번호\"/><Cell col=\"7\" text=\"답변내용\"/><Cell col=\"8\" text=\"사용자ID\"/><Cell col=\"9\" text=\"사용자명\"/><Cell col=\"10\" text=\"학교코드\"/><Cell col=\"11\" text=\"학교이름\"/><Cell col=\"12\" text=\"본분교코드\"/><Cell col=\"13\" text=\"본분교\"/></Band><Band id=\"body\"><Cell text=\"bind:SURVSEQ\"/><Cell col=\"1\" text=\"bind:SURVKINDCD\"/><Cell col=\"2\" text=\"bind:QUESTIONSEQ\"/><Cell col=\"3\" text=\"bind:INQNO\"/><Cell col=\"4\" text=\"bind:INQTYPENM\"/><Cell col=\"5\" text=\"bind:INQTEXT\"/><Cell col=\"6\" text=\"bind:ANSWERNO\"/><Cell col=\"7\" text=\"bind:ANSWERTEXT\"/><Cell col=\"8\" text=\"bind:USERID\"/><Cell col=\"9\" text=\"bind:USERNM\"/><Cell col=\"10\" text=\"bind:SCHCD\"/><Cell col=\"11\" text=\"bind:SCHNM\"/><Cell col=\"12\" text=\"bind:ORGCD\"/><Cell col=\"13\" text=\"bind:ORGNM\"/></Band></Format></Formats>");
            this.Div.form.div_queContent.addChild(obj.name, obj);

            obj = new Div("btnArea","30","div_queContent:20","1202","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_close","548","0","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty01");
            this.Div.form.btnArea.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,700,this,function(p){});
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

            obj = new BindItem("item5","Div.form.rowGrid.form.div_00.form.label_dc","text","dsResult_mst","QUESTIONSCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad16p01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad16p01.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.SURVSEQ;
        this.SURVKINDCD;
        this.QUESTIONSEQ;

        this.fv_MENUNM = this.opener.fv_MENUNM + ">설문결과팝업";

        this.ad16p01_oninit = function(obj,e)
        {
        	this.SURVSEQ 	= this.parent.SURVSEQ;
        	this.SURVKINDCD = this.parent.SURVKINDCD;
        	this.QUESTIONSEQ= this.parent.QUESTIONSEQ;

        	this.selectQuestionViewList();
        };



        // 닫기
        this.Div_btnArea_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "selectQuestionViewList"){

        		}
        	}
        }

        this.selectQuestionViewList = function(){
        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "설문결과정보", strParam);  //접속기록

        	this.gfnTransaction("selectQuestionViewList",
        					"swiss/hp/question/selectQuestionViewList.do",
        					"dsSearch=ds_search",
        					"dsResult_mst=dsResult",
        					"",
        					"fnCallback",
        					false);
        	var param = "SURVSEQ=" + this.SURVSEQ + "&SURVKINDCD=" + this.SURVKINDCD + "&QUESTIONSEQ=" + this.QUESTIONSEQ;
        	this.Div.form.div_queContent.form.webBrower_queInqList.set_url(nexacro.getEnvironment().services["svcBaseUrl"].url + "swiss/hp/question/selectQueResTotJsp.do?"+param);
        	this.selectEssayAns();

        }

        /* 20201228 추가 */
        this.selectEssayAns = function(){
        	var strParam = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strParam += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);

        	this.gfnTransaction("selectQuestionViewList",
        					"swiss/hp/question/selectEssayAns.do",
        					"dsSearch=ds_search",
        					"ds_essayAns=dsResult",
        					"",
        					"fnCallback",
        					false);
        }

        // 파일저장
        this.Div_btn_saveFile_onclick = function(obj,e)
        {
        	var strLog = "SURVSEQ=" 	+ this.SURVSEQ + "ª";
        	strLog += "SURVKINDCD=" 	+ this.SURVKINDCD + "ª";
        	strLog += "QUESTIONSEQ=" 	+ this.QUESTIONSEQ + "ª";

        	this.setAccessLog(this.SURVSEQ, this.SURVKINDCD, this.fv_MENUNM, "파일저장", strLog);  //접속기록

        	this.utlf_excelDownload("설문결과", this.Div.form.div_queContent.form.gd_essayAns, this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad16p01_oninit,this);
            this.Div.form.btn_saveFile.addEventHandler("onclick",this.Div_btn_saveFile_onclick,this);
            this.Div.form.btnArea.form.btn_close.addEventHandler("onclick",this.Div_btnArea_btn_close_onclick,this);
        };

        this.loadIncludeScript("ad16p01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
