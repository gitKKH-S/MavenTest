(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad38m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResponseStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserlist", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCallCenter", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInit", this);
            obj._setContents("<ColumnInfo><Column id=\"DIV\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
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
            obj.set_text("콜센터");
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

            obj = new Div("sub_search","30","60","1200","180",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"13","100","30","29",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty04");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_start","14","13","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Calendar("in_calr_end","in_calr_start:10","13","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_schnm","14","in_calr_start:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("학교명");
            obj.set_maxlength("100");
            obj.set_readonly("false");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_orgnm","in_schnm:10","in_calr_start:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("본분교명");
            obj.set_readonly("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_survey_div","14","in_schnm:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_receipt_div","in_survey_div:10","in_schnm:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsReceipt");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_response_status","in_receipt_div:10","in_schnm:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsResponseStatus");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search00","in_usrnm:524","in_calr_start:10","150","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("학교찾기");
            obj.set_cssclass("btn_sty06");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_call_user","in_response_status:10","in_schnm:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsUserlist");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_receipt_txt","14","in_survey_div:10","500","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("문의내용");
            obj.set_readonly("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_response_txt","in_receipt_txt:10","in_survey_div:10","500","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("답변내용");
            obj.set_readonly("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"in_survey_div:10","100","30","29",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_text("작성");
            obj.set_cssclass("btn_sty08");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search01_00",null,"73","100","30","29",null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            obj.set_text("통계");
            obj.set_cssclass("btn_sty07");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_usrnm","in_orgnm:10","in_calr_start:10","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("학교담당자");
            obj.set_readonly("false");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_schcd","689","4","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("schcd");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_orgcd","859","4","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("orgcd");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_usrgrpcd","689","39","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("usrgrpcd");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_usrgrpnm","859","39","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("usrgrpnm");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_email","689","73","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("이메일");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_telno","859","74","160","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("전화번호");
            obj.set_maxlength("100");
            obj.set_readonly("true");
            obj.set_text("asdf");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","910",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","35","250",null,"660","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("dsCallCenter");
            obj.set_cellmovingtype("none");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("row");
            obj.set_cssclass("grid_sty02");
            obj.set_extendsizetype("row");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"498\"/><Column size=\"498\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"90\"/></Rows><Band id=\"head\"><Cell text=\"정보\"/><Cell col=\"1\" text=\"문의내용\"/><Cell col=\"2\" text=\"답변내용\"/></Band><Band id=\"body\" tooltiptype=\"default\"><Cell text=\"bind:CALL_INFO\" controlautosizingtype=\"height\" autosizerow=\"limitmax\" displaytype=\"text\" autosizecol=\"limitmin\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"1\" text=\"bind:RECEIPT\" textAlign=\"left\" autosizecol=\"default\" autosizerow=\"limitmax\" controlautosizingtype=\"height\" displaytype=\"text\" verticalAlign=\"top\" wordWrap=\"char\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"2\" text=\"bind:RESPONSE\" textAlign=\"left\" autosizecol=\"default\" autosizerow=\"limitmax\" controlautosizingtype=\"height\" verticalAlign=\"top\" displaytype=\"text\" wordWrap=\"char\" expandshow=\"hide\" expandsize=\"16\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

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

        };
        
        // User Script
        this.addIncludeScript("ad38m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad38m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad38m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        //페이징
        this.pageRowCnt = 30;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>시스템관리>콜센터";


        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		//alert(serviceID);

        		if(serviceID == "searchBoxInit"){
        			//alert("rtn searchBoxInit rowcount=["+this.dsInit.rowcount+"]");
        			var cnt_dsSurvey = 0;
        			var cnt_dsReceipt = 0;
        			var cnt_dsResponseStatus = 0;
        			var cnt_dsUserlist = 0;

        			for(var i=0; i < this.dsInit.rowcount; i++){
        				var init_div = this.dsInit.getColumn(i,"DIV");

        				if(init_div == "IN_SURVEY_DIV"){
        					this.dsSurvey.addRow();
        					this.dsSurvey.setColumn(cnt_dsSurvey,"CD",this.dsInit.getColumn(i,"CD"));
        					this.dsSurvey.setColumn(cnt_dsSurvey,"CDNM",this.dsInit.getColumn(i,"CDNM"));
        					cnt_dsSurvey++;
        				}

        				if(init_div == "IN_RECEIPT_DIV"){
        					this.dsReceipt.addRow();
        					this.dsReceipt.setColumn(cnt_dsReceipt,"CD",this.dsInit.getColumn(i,"CD"));
        					this.dsReceipt.setColumn(cnt_dsReceipt,"CDNM",this.dsInit.getColumn(i,"CDNM"));
        					cnt_dsReceipt++;
        				}

        				if(init_div == "IN_RESPONSE_STATUS"){
        					this.dsResponseStatus.addRow();
        					this.dsResponseStatus.setColumn(cnt_dsResponseStatus,"CD",this.dsInit.getColumn(i,"CD"));
        					this.dsResponseStatus.setColumn(cnt_dsResponseStatus,"CDNM",this.dsInit.getColumn(i,"CDNM"));
        					cnt_dsResponseStatus++;
        				}

        				if(init_div == "IN_USERLIST"){
        					this.dsUserlist.addRow();
        					this.dsUserlist.setColumn(cnt_dsUserlist,"CD",this.dsInit.getColumn(i,"CD"));
        					this.dsUserlist.setColumn(cnt_dsUserlist,"CDNM",this.dsInit.getColumn(i,"CDNM"));
        					cnt_dsUserlist++;
        				}
        			}


        			//this.Div.form.sub_search.form.in_cb_schkind.set_index(0)

        			this.Div.form.sub_search.form.in_survey_div.set_index(0);
        			this.Div.form.sub_search.form.in_receipt_div.set_index(0);
        			this.Div.form.sub_search.form.in_response_status.set_index(0);
        			this.Div.form.sub_search.form.in_call_user.set_index(0);
        		}

        		if(serviceID == "selectCallcenterList"){
        			//alert("rtn selectCallcenterList");
        		}


         	}
        }

        this.ad38m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");

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

        	var tToDate = year +"-" +  month + "-01";
        	var toDate =  year +"-" +  month +"-" +  day ;

        	this.Div.form.sub_search.form.in_calr_start.set_value(tToDate);
        	this.Div.form.sub_search.form.in_calr_end.set_value(toDate);

        	//this.selectCallcenterList();
        	this.searchBoxInit();
        };

        this.searchBoxInit = function(){

        	//var strParam = "";
        	//strParam += "MENU=ª";

        	//dsParamSetArrowBlank(this.dsSearch, strParam);

        	//alert("call searchBoxInit in fnc");

        	this.gfnTransaction("searchBoxInit",
        						"/swiss/ad/system/searchBoxInit.do",
        						"",
        						"dsInit=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 로그인 리스트
        this.selectCallcenterList = function(){
        	//alert("in call list");
        	//this.dsSearch.clear();

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

        	var strParam = "";
        	strParam += "IN_CALR_START=" + this.Div.form.sub_search.form.in_calr_start.value	+ "ª";
        	strParam += "IN_CALR_END=" + this.Div.form.sub_search.form.in_calr_end.value	+ "ª";

        	if(!this.Div.form.sub_search.form.in_schnm.value){
        		this.Div.form.sub_search.form.in_schnm.value = "";
        	}
        	strParam += "IN_SCHNM=" + this.Div.form.sub_search.form.in_schnm.value	+ "ª";

        	if(!this.Div.form.sub_search.form.in_orgnm.value){
        		this.Div.form.sub_search.form.in_orgnm.value = "";
        	}
        	strParam += "IN_ORGNM=" + this.Div.form.sub_search.form.in_orgnm.value	+ "ª";

        	if(!this.Div.form.sub_search.form.in_usrnm.value){
        		this.Div.form.sub_search.form.in_usrnm.value = "";
        	}
        	strParam += "IN_USRNM=" + this.Div.form.sub_search.form.in_usrnm.value	+ "ª";

        	if(!this.Div.form.sub_search.form.in_survey_div.value){
        		this.Div.form.sub_search.form.in_survey_div.value = "";
        	}
        	strParam += "IN_SURVEY_DIV=" + this.Div.form.sub_search.form.in_survey_div.value	+ "ª";


        	if(!this.Div.form.sub_search.form.in_receipt_div.value){
        		this.Div.form.sub_search.form.in_receipt_div.value = "";
        	}
        	strParam += "IN_RECEIPT_DIV=" + this.Div.form.sub_search.form.in_receipt_div.value	+ "ª";


        	if(!this.Div.form.sub_search.form.in_response_status.value){
        		this.Div.form.sub_search.form.in_response_status.value = "";
        	}
        	strParam += "IN_RESPONSE_STATUS=" + this.Div.form.sub_search.form.in_response_status.value	+ "ª";


        	if(!this.Div.form.sub_search.form.in_call_user.value){
        		this.Div.form.sub_search.form.in_call_user.value = "";
        	}
        	strParam += "IN_CALL_USER=" + this.Div.form.sub_search.form.in_call_user.value	+ "ª";


        	if(!this.Div.form.sub_search.form.in_receipt_txt.value){
        		this.Div.form.sub_search.form.in_receipt_txt.value = "";
        	}
        	strParam += "IN_RECEIPT_TXT=" + this.Div.form.sub_search.form.in_receipt_txt.value	+ "ª";


        	if(!this.Div.form.sub_search.form.in_response_txt.value){
        		this.Div.form.sub_search.form.in_response_txt.value = "";
        	}
        	strParam += "IN_RESPONSE_TXT=" + this.Div.form.sub_search.form.in_response_txt.value	+ "ª";

        	//alert(strParam);
        	//trace(this.dsSearch.saveXML());
        	//return;

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//this.setAccessLog(this.Div.form.sub_search.form.in_cb_sruvseq.value, this.Div.form.sub_search.form.in_cb_survkindcd.value, this.fv_MENUNM, "검색", strParam);  //접속기록

        	this.gfnTransaction("selectCallcenterList",
        						"/swiss/ad/system/selectCallcenterList.do",
        						"dsSearch=dsSearch",
        						"dsCallCenter=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        this.Div_gd_main_onmousemove = function(obj,e)
        {
        	var nCellSize = obj.getFormatColSize(e.cell);
        	var strText   = obj.getCellText(e.row, e.cell);
        	var nTextLen  = nexacro.getTextSize( strText, "normal normal 12px NanumGothic");

        	if( nCellSize < nTextLen.nx){
        		obj.setCellProperty( "Body", e.cell, "tooltiptext", strText);
        	} else {
        		obj.setCellProperty( "Body", e.cell, "tooltiptext", "");
        	}
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == undefined){
        		return;
        	}else{
        		//alert("strpopid="+strPopupID);
        	}

        	if(strPopupID == "sch_popup"){
        		//this.alert("Return Value: " + strReturn);

        		var arr = strReturn.split(",");
        		//alert("학교명=["+arr[1]+"], 본분교명=["+arr[3]+"]");

        		this.Div.form.sub_search.form.in_usrgrpcd.set_value(arr[0]);
        		this.Div.form.sub_search.form.in_usrgrpnm.set_value(arr[1]);
        		this.Div.form.sub_search.form.in_email.set_value(arr[2]);
        		this.Div.form.sub_search.form.in_telno.set_value(arr[3]);

        		this.Div.form.sub_search.form.in_usrnm.set_value(arr[4]);



        		//alert("schcd="+arr[5]);
        		this.Div.form.sub_search.form.in_schcd.set_value(arr[5]);
        		this.Div.form.sub_search.form.in_schnm.set_value(arr[6]);
        		//alert("orgcd="+arr[7]);
        		this.Div.form.sub_search.form.in_orgcd.set_value(arr[7]);
        		this.Div.form.sub_search.form.in_orgnm.set_value(arr[8]);
        	}


        	if(strPopupID == "modify_popup"){
        		this.selectCallcenterList();
        	}

        	if(strPopupID == "wrt_popup"){
        		this.selectCallcenterList();
        	}
        };


        this.btn_search_onclick = function(obj,e)
        {

        };

        this.btn_search00_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("sch_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMSchoolCall.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I',param4:'II',param5:'III'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this.wrt_pop = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("wrt_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMCallNoteAdd.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I',param4:'II',param5:'III'};
        	var arr = new Array();
        	arr["SURVParam"] = [
        		""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,""
        		,"0"
        		,"0"
        		,""
        		,"0"
        		,""
        	];

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , arr
        						  , this
        						  , "fn_popupCallback");
        };

        this.rst_pop = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("rst_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMCallReport.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I'};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "fn_popupCallback");
        };

        this._oncellclick = function(obj,e)
        {

        };

        this.Dif_gd_main_oncellclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("modify_popup"
        	                  , 0
        					  , 0
        					  , 0
        					  , 0
        					  , null
        					  , null
        					  , "CM::CMCallNoteModify.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	var objParam = {param3:'I',param4:'II',param5:'III'};
        	var arr = new Array();
        	arr["SURVParam"] = [
        		this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"IDX")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"SCHCD")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"SCHNM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"ORGCD")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"ORGNM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"USRNM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"USRGRPNM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"EMAIL")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"TELNO")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"SURVEY_DIV")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"RECEIPT_DIV")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"RECEIPT")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"RESPONSE_STATUS")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"RESPONSE")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"ENTRYDTHM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"ENTRYUSRNM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"MODIFYDTHM")
        		,this.dsCallCenter.getColumn(this.dsCallCenter.rowposition,"MODIFYUSRNM")
        	];

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , arr
        						  , this
        						  , "fn_popupCallback");

        		//arr["SURVParam"] = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        		//objFrame.showModal("ad04p00" ,this.getOwnerFrame() ,arr );
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad38m00_onload,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.selectCallcenterList,this);
            this.Div.form.sub_search.form.btn_search00.addEventHandler("onclick",this.btn_search00_onclick,this);
            this.Div.form.sub_search.form.in_receipt_txt.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_response_txt.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.btn_search01.addEventHandler("onclick",this.wrt_pop,this);
            this.Div.form.sub_search.form.btn_search01_00.addEventHandler("onclick",this.rst_pop,this);
            this.Div.form.sub_search.form.in_usrnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
            this.Div.form.gd_main.addEventHandler("oncelldblclick",this.Dif_gd_main_oncellclick,this);
            this.Div.form.gd_main.addEventHandler("onmousemove",this.Div_gd_main_onmousemove,this);
        };

        this.loadIncludeScript("ad38m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
