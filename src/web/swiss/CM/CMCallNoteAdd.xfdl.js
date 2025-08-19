(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSchool");
            this.set_titletext("학교검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(820,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInit", this);
            obj._setContents("<ColumnInfo><Column id=\"DIV\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceipt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResponseStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("in_schnm","44","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("학교명");
            obj.set_maxlength("100");
            obj.set_readonly("false");
            obj.set_text("asdf");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgnm","in_schnm:10","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("본분교명");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("in_usrnm","in_orgnm:10","33","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("담당자");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","80","26","186",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학교찾기");
            obj.set_cssclass("btn_sty06");
            this.addChild(obj.name, obj);

            obj = new Edit("in_email","44","in_schnm:10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("이메일");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("in_telno","in_email:10","in_schnm:10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_displaynulltext("연락처");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("in_survey_div","44","in_email:10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSurvey");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("in_receipt_div","214","in_email:10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsReceipt");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new TextArea("in_receipt","44","in_survey_div:10","746","185",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_text("asdf");
            obj.set_displaynulltext("접수내용");
            obj.set_maxlength("1000");
            obj.set_readonly("false");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("fixed");
            this.addChild(obj.name, obj);

            obj = new Combo("in_response_status","44","in_receipt:10","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsResponseStatus");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("in_response","44","in_response_status:10","746","185",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_text("asdf");
            obj.set_displaynulltext("답변내용");
            obj.set_maxlength("1000");
            obj.set_readonly("false");
            obj.set_scrollbartype("fixed");
            obj.set_scrolltype("vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify","298","600","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty08");
            this.addChild(obj.name, obj);

            obj = new Edit("in_idx","650","35","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("idx");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","398","600","84","33",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("in_schcd","510","in_idx:283","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("schcd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("in_orgcd","660","in_schcd:-30","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("orgcd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("in_usrgrpcd","214","in_idx:283","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("usrgrpcd");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("in_usrgrpnm","in_usrgrpcd:6","in_usrgrpcd:-30","140","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_displaynulltext("usrgrpnm");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",820,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCallNoteAdd.xfdl", function() {
        //기본변수세팅
        this.fv_USERID = "";
        this.fv_USERNM = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_MENUNM = "";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		//alert(serviceID);

        		if(serviceID == "modifyCallNote"){
        			//alert("rtn modifyCallNote");
        			alert("저장이 완료되었습니다.");

        			var objParam = "complete";
        			this.close(objParam);
        			// 창닫기
        	}

        		if(serviceID == "searchBoxInit"){
        			//alert("rtn searchBoxInit rowcount=["+this.dsInit.rowcount+"]");
        			var cnt_dsSurvey = 0;
        			var cnt_dsReceipt = 0;
        			var cnt_dsResponseStatus = 0;
        			var cnt_dsUserlist = 0;

        			for(var i=0; i < this.dsInit.rowcount; i++){
        				var init_div = this.dsInit.getColumn(i,"DIV");
        				//alert("init_div="+init_div);


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

        			}


        			//this.Div.form.sub_search.form.in_cb_schkind.set_index(0)

        			//this.Div.form.sub_search.form.in_survey_div.set_index(0);
        			//this.Div.form.sub_search.form.in_receipt_div.set_index(0);
        			//this.Div.form.sub_search.form.in_response_status.set_index(0);
        			//this.Div.form.sub_search.form.in_call_user.set_index(0);
        		}
        	}
        }

        this.CMCallNoteModify_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_USERNM = objApp.gds_login_info.getColumn(idx, "USERNM") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var MENUNM         = this.opener.fv_MENUNM;
        	this.fv_MENUNM     = MENUNM + ">콜센터 수정";



        	this.searchBoxInit();
        /*
        	this.in_idx.set_value(this.parent.SURVParam[0]);
        	this.in_schcd.set_value(this.parent.SURVParam[1]);
        	this.in_schnm.set_value(this.parent.SURVParam[2]);
        	this.in_orgcd.set_value(this.parent.SURVParam[3]);
        	this.in_orgnm.set_value(this.parent.SURVParam[4]);
        	this.in_usrnm.set_value(this.parent.SURVParam[5]);
        	this.in_usrgrpnm.set_value(this.parent.SURVParam[6]);
        	this.in_email.set_value(this.parent.SURVParam[7]);
        	this.in_telno.set_value(this.parent.SURVParam[8]);
        	this.in_survey_div.set_value(this.parent.SURVParam[9]);
        	this.in_receipt_div.set_value(this.parent.SURVParam[10]);
        	this.in_receipt.set_value(this.parent.SURVParam[11]);
        	this.in_response_status.set_value(this.parent.SURVParam[12]);
        	this.in_response.set_value(this.parent.SURVParam[13]);
        */
        	this.in_survey_div.set_value(this.parent.SURVParam[9]);
        	this.in_receipt_div.set_value(this.parent.SURVParam[10]);
        	this.in_response_status.set_value(this.parent.SURVParam[12]);

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

        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };



        this.btn_modify_onclick = function(obj,e)
        {

        	if(this.in_survey_div.value=="0"){
        		alert("조사구분을 선택하셔야 합니다.");
        		return false;
        	}

        	if(this.in_receipt_div.value=="0"){
        		alert("문의구분을 선택하셔야 합니다.");
        		return false;
        	}

        	if(this.in_response_status.value=="0"){
        		alert("답변현황을 선택하셔야 합니다.");
        		return false;
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	var strParam = "CMODE=ADDª";
        	strParam += "IDX=" + this.in_idx.value + "ª";
        	strParam += "SCHCD=" + this.in_schcd.value + "ª";
        	strParam += "SCHNM=" + this.in_schnm.value + "ª";
        	strParam += "ORGCD=" + this.in_orgcd.value + "ª";
        	strParam += "ORGNM=" + this.in_orgnm.value + "ª";
        	strParam += "USRNM=" + this.in_usrnm.value + "ª";
        	strParam += "USRGRPNM=" + this.in_usrgrpnm.value + "ª";
        	strParam += "EMAIL=" + this.in_email.value + "ª";
        	strParam += "TELNO=" + this.in_telno.value + "ª";
        	strParam += "SURVEY_DIV=" + this.in_survey_div.value + "ª";
        	strParam += "RECEIPT_DIV=" + this.in_receipt_div.value + "ª";
        	strParam += "RECEIPT=" + this.in_receipt.value + "ª";
        	strParam += "RESPONSE_STATUS=" + this.in_response_status.value + "ª";
        	strParam += "RESPONSE=" + this.in_response.value + "ª";
        	strParam += "ENTRY_USERID=" + this.fv_USERID + "ª";
        	strParam += "ENTRY_USERNM=" + this.fv_USERNM + "ª";
        	strParam += "MODIFY_USERID=" + this.fv_USERID + "ª";
        	strParam += "MODIFY_USERNM=" + this.fv_USERNM + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	//var strLog = "USERGRPTYPE=9,USERNM=" + this.ds_kedi_user.getColumn(nRow,"USERNM")+ ",USERID=" + this.ds_kedi_user.getColumn(nRow,"USERID");
        	//this.setAccessLog("", "AD", this.fv_MENUNM, "저장", strLog);  //접속기록

        	this.gfnTransaction("modifyCallNote",
        						"/swiss/ad/system/modifyCallNote.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.selectSchoolOnclick = function(obj,e)
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

        		this.in_usrgrpcd.set_value(arr[0]);
        		this.in_usrgrpnm.set_value(arr[1]);
        		this.in_email.set_value(arr[2]);
        		this.in_telno.set_value(arr[3]);
        		this.in_usrnm.set_value(arr[4]);
        		this.in_schcd.set_value(arr[5]);
        		this.in_schnm.set_value(arr[6]);
        		this.in_orgcd.set_value(arr[7]);
        		this.in_orgnm.set_value(arr[8]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMCallNoteModify_onload,this);
            this.btn_search00.addEventHandler("onclick",this.selectSchoolOnclick,this);
            this.in_response.addEventHandler("onchanged",this.in_response_onchanged,this);
            this.btn_modify.addEventHandler("onclick",this.btn_modify_onclick,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
        };

        this.loadIncludeScript("CMCallNoteAdd.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
