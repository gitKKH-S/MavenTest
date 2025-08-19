(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hp12m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1050);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trainingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRSDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TREDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRAININGDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCNTTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"RCSDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"RCEDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHKACTIVE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"CHKACTIVETEXT\" type=\"STRING\" size=\"256\" sumtext=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_maxCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"MAXCNT\" type=\"STRING\" size=\"256\" sumtext=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trainingDate", this);
            obj._setContents("<ColumnInfo><Column id=\"TRDATECD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRDATENM\" type=\"STRING\" size=\"256\" sumtext=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_trainingType", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USERGRPTYPENM\" type=\"STRING\" size=\"256\" sumtext=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receiptList", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEREMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USERTELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USERMOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receiptList_init", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEREMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USERTELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USERMOBILE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendSet", this);
            obj._setContents("<ColumnInfo><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"TRDATE\" type=\"STRING\" size=\"256\" sumtext=\"\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USEREMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USERTELNO\" type=\"STRING\" size=\"256\"/><Column id=\"USERMOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"rowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_maxExistCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"MAXCNT\" type=\"STRING\" size=\"256\" sumtext=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SelectResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1050",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1050",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1050",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new ImageViewer("imgTraining","30","40","1200","260",null,null,null,null,null,null,this.Div.form);
            obj.set_image("url(\'theme::default/images/img_trainingTop.jpg\')");
            obj.set_border("0px none");
            obj.set_accessibilitylabel("설문조사 고등교육기관졸업자 취업통계조사 설문조사입니다.");
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","imgTraining:30","1200","230",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("divTitle","15","10","1167","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_trdate","15","50","80","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("연수일시");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("divTrdate","123","50","1059","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_place","15","90","80","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("연수장소");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("divPlace","123","90","1059","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_maxcnt","15","130","80","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("신청인원");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("divMaxcnt","123","130","1059","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("label_rcdate","15","170","80","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("신청기간");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("divRcdate","123","170","1059","29",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_font("18px/normal \"SpoqaHanSans-Regular\"");
            obj.set_visible("true");
            obj.set_cssclass("reser_date_result");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","630","1200","320",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_scrollbartype("default none");
            obj.set_cssclass("default");
            obj.set_nodatatext("데이터가 없습니다.");
            obj.set_binddataset("ds_receiptList");
            obj.set_cellclickbound("control");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"90\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"참석일\"/><Cell col=\"1\" text=\"사용자구분\"/><Cell col=\"2\" text=\"참석자명\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"전화번호\"/><Cell col=\"5\" text=\"휴대폰 번호\"/><Cell col=\"6\" text=\"초기화여부\"/></Band><Band id=\"body\"><Cell padding-left=\"20px\" text=\"bind:TRDATE\" displaytype=\"editcontrol\" edittype=\"combo\" comboautoselect=\"true\" codecolumn=\"TRDATECD\" datacolumn=\"TRDATENM\" combodataset=\"ds_trainingDate\" combocodecol=\"TRDATECD\" combodatacol=\"TRDATECD\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"combo\" comboautoselect=\"false\" editautoselect=\"true\" codecolumn=\"USERGRPCD\" datacolumn=\"USERGRPNM\" combodataset=\"ds_trainingType\" combocodecol=\"USERGRPTYPENM\" combodatacol=\"USERGRPTYPENM\" text=\"bind:USERGRPTYPE\"/><Cell col=\"2\" text=\"bind:USERNM\" displaytype=\"editcontrol\" edittype=\"text\" comboautoselect=\"true\"/><Cell col=\"3\" text=\"bind:USEREMAIL\" displaytype=\"editcontrol\" edittype=\"text\" comboautoselect=\"true\"/><Cell col=\"4\" text=\"bind:USERTELNO\" displaytype=\"editcontrol\" edittype=\"text\" comboautoselect=\"true\"/><Cell col=\"5\" text=\"bind:USERMOBILE\" displaytype=\"editcontrol\" edittype=\"text\" comboautoselect=\"true\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" text=\"초기화\" edittype=\"button\" cssclass=\"cellBtn\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"585","120","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty09");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            obj = new Static("errorMsg",null,"585","340","30","890",null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("※ 참석자명 미입력시 저장 되지 않습니다.");
            obj.set_cssclass("state_result");
            obj.set_font("normal 16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1050,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("hp12m00.xfdl","CM::common.xjs");
        this.registerScript("hp12m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;


        this.fv_USERID = "" ;
        this.fv_USERSEQ = "" ;
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SURVOBJ = "";
        this.fv_SURVSTRTDT = "";
        this.fv_SURVENDDT = "";
        this.fv_SURVNM = "";
        this.fv_USERGRPTYPE = "";
        this.fv_CHANGEYN = "";
        this.fv_SCHCD      = "";
        this.fv_ORGCD      = "";
        this.fv_trSeq = 0;
        this.fv_resetFlag = false;
        this.fv_MENUNM = "연수신청";
        this.fv_today;
        var objApp 		= nexacro.getApplication();
        this.hp12m00_oninit = function(obj,e)
        {
        	//alert("in init");
        };

        this.hp12m00_onload = function(obj,e){
        	//alert("in load");

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(idx, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(0, "CHANGEYN");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");


        	var date = new Date();
            var year = date.getFullYear();
            var month = ("0" + (1 + date.getMonth())).slice(-2);
            var day = ("0" + date.getDate()).slice(-2);

        	this.fv_today = year + month + day;

        	this.getTrainingOne();

        	this.getTrainingDate();

        	this.getTrainingType();

        	if(this.fv_SCHCD == null){
        		this.Div.form.gd_list.set_enable(false);
        		this.Div.form.btn_save.set_enable(false);
        	}

        }

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0) {
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	} else {
        		if(serviceId == "getTrainingOne"){
        			var maxCnt = this.ds_trainingInfo.getColumn(0,"MAXCNT");
        			//alert("maxCnt="+maxCnt);
        		//}else if(serviceId != "getTrainingOne"){
        			//alert("in getTrainingOne");
        			//trace(this.ds_trainingInfo);

        			this.fv_SURVSEQ = this.ds_trainingInfo.getColumn(0,"SURVSEQ");
        			this.fv_SURVKINDCD = this.ds_trainingInfo.getColumn(0,"SURVKINDCD");

        			var getTitle = this.ds_trainingInfo.getColumn(0,"TITLE");
        			var getTrdate = this.ds_trainingInfo.getColumn(0,"TRAININGDATE");
        			var getPlace = this.ds_trainingInfo.getColumn(0,"PLACE");
        			var getMaxcnt = this.ds_trainingInfo.getColumn(0,"MAXCNTTEXT");
        			var getRcdate = this.ds_trainingInfo.getColumn(0,"RECEIPTDATE");
        			this.fv_trSeq = this.ds_trainingInfo.getColumn(0,"TRAININGSEQ");
        			//getTitle = "";
        			if(getTitle==""){
        				alert("현재 신청가능한 연수가 없습니다.");
        				this.Div.form.btn_save.set_enable(false);
        				//window.open('/swiss/index.html?linkType=HP_NOTICE','_self');
        				//history.back(0);
        			}else if (this.ds_trainingInfo.getColumn(0,"RCEDATE") < this.fv_today){
        				alert("연수 신청 기간이 지났습니다.");
        				this.Div.form.btn_save.set_enable(false);
        				//window.open('/swiss/index.html?linkType=HP_NOTICE','_self');
        				//history.back(0);
        				this.Div.form.sub_search.form.divTitle.set_text(getTitle);
        				this.Div.form.sub_search.form.divTrdate.set_text(getTrdate);
        				this.Div.form.sub_search.form.divPlace.set_text(getPlace);
        				this.Div.form.sub_search.form.divMaxcnt.set_text(getMaxcnt);
        				this.Div.form.sub_search.form.divRcdate.set_text(getRcdate);
        				//alert("bef Cnt");
        				this.getTrainingCnt();
        				this.getExistTrainingCnt();
        				//alert("bef Rst");
        				this.getTrainingResult();
        				//alert(this.ds_receiptList.getMax("RECEIPTSEQ"));
        				//alert("aft Rst");
        			}else{
        				//alert("in tr result");
        				this.Div.form.sub_search.form.divTitle.set_text(getTitle);
        				this.Div.form.sub_search.form.divTrdate.set_text(getTrdate);
        				this.Div.form.sub_search.form.divPlace.set_text(getPlace);
        				this.Div.form.sub_search.form.divMaxcnt.set_text(getMaxcnt);
        				this.Div.form.sub_search.form.divRcdate.set_text(getRcdate);
        				//alert("bef Cnt");
        				this.getTrainingCnt();
        				this.getExistTrainingCnt();
        				//alert("bef Rst");
        				this.getTrainingResult();
        				//alert(this.ds_receiptList.getMax("RECEIPTSEQ"));
        				//alert("aft Rst");

        			}
        			//alert("maxCnt="+maxCnt);


        			//this.searchQuestionList();

        		}

        		if (serviceId == "getTrainingCnt"){
        			var listMaxcnt = this.ds_maxCnt.getColumn(0,"MAXCNT");
        		}

        		if (serviceId == "getTrainingResult"){
        			var nRowCnt = this.ds_receiptList.getRowCount();

        			//for(var i=0; i<nRowCnt; i++){
        				//if(objApp.gds_param.getColumn(0, "SCHCD") == this.ds_receiptList.getColumn(i,"SCHCD")){
        				//	return;
        				//}
        			//}
        			for(var i =0; this.ds_receiptList.getRowCount()>i;i++){
        				if(this.ds_receiptList.getColumn(i,"USERNM")==null){
        					console.log(this.ds_receiptList.getColumn(i,"USERNM"));
        					this.ds_receiptList.setColumn(i,"TRDATE",null);
        					this.ds_receiptList.setColumn(i,"USERGRPTYPE",null);
        					this.ds_receiptList.setColumn(i,"USERNM",null);
        					this.ds_receiptList.setColumn(i,"USEREMAIL",null);
        					this.ds_receiptList.setColumn(i,"USERTELNO",null);
        					this.ds_receiptList.setColumn(i,"USERMOBILE",null);
        				}
        			}
        			if(this.ds_receiptList.rowcount == 0){
        			this.ds_receiptList.copyData(this.ds_receiptList_init);
        			}
        			var listMaxcnt = this.ds_maxCnt.getColumn(0,"MAXCNT");
        			var existMaxcnt = this.ds_maxExistCnt.getColumn(0,"MAXCNT");

        			if(this.fv_SCHCD != null){
        				for(var i=0; i < listMaxcnt-existMaxcnt; i++){
        					var nRow = this.ds_receiptList.addRow();
        				}
        			}

        		}

        		if(serviceId == "getTrainingDate"){
        			//alert(this.ds_trainingDate.saveXML());
        		}

        		if(serviceId == "getTrainingType"){
        			//alert(this.ds_trainingType.saveXML());
        		}
        		if(serviceId == "setTrainingResult"){
        			if(this.ds_resultCnt.getColumn(0, "CNT") == "0"){
        				this.alert("변경된 정보가 없습니다.");
        			}else{

        				this.ds_sendSet.clearData();

        				this.getTrainingOne();

        				this.getTrainingDate();

        				this.getTrainingType();

        				this.fv_resetFlag = false;
        				this.alert("변경사항이 적용 되었습니다.");


        			}

        		}
        		if(serviceId == "getExistTrainingCnt"){
        		}
        	}
        }

        this.getTrainingOne = function(){
        	//alert("in tr one");
        	var strParam = "1=1ª";

        	dsParamSetArrowBlank(this.ds_trainingInfo, strParam);

        	//alert(this.ds_trainingInfo.saveXML());

        	this.gfnTransaction("getTrainingOne",
        						"swiss/ad/survtrain/getTrainingOne.do",
        						"",
        						"ds_trainingInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.getTrainingDate = function(){
        	var strParam = "";
        	strParam += "TRSEQ="		+ this.fv_trSeq		    + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	dsParamSetArrowBlank(this.ds_trainingInfo, strParam);

        	//alert("IN DATE="+strParam);

        	//alert(this.ds_trainingDate.saveXML());

        	this.gfnTransaction("getTrainingDate",
        						"swiss/ad/survtrain/getTrainingDate.do",
        						"dsSearch=ds_trainingInfo",
        						"ds_trainingDate=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.getTrainingType = function(){
        	var strParam = "";
        	strParam += "TRSEQ="		+ this.fv_trSeq		    + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	dsParamSetArrowBlank(this.ds_trainingInfo, strParam);

        	//alert("IN TYPE="+strParam);
        	//alert(this.ds_trainingType.saveXML());

        	this.gfnTransaction("getTrainingType",
        						"swiss/ad/survtrain/getTrainingType.do",
        						"dsSearch=ds_trainingInfo",
        						"ds_trainingType=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.getTrainingCnt = function(){
        	//alert("in tr result");
        	var strParam = "";
        	strParam += "TRSEQ="		+ this.fv_trSeq		    + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";

        	//alert(strParam);
        	//return false;
        	//alert("in Cnt");

        	//dsParamSetArrowBlank(this.ds_receiptList, strParam);
        	dsParamSetArrowBlank(this.ds_searchCnt, strParam);
        	//alert(this.ds_searchCnt.saveXML());


        	this.gfnTransaction("getTrainingCnt",
        						"swiss/ad/survtrain/getTrainingCnt.do",
        						"dsSearch=ds_searchCnt",
        						"ds_maxCnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.getExistTrainingCnt = function(){
        	//alert("in tr result");
        	var strParam = "";
        	strParam += "TRSEQ="		+ this.fv_trSeq		    + "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID		+ "ª";
        	//alert(strParam);
        	//return false;
        	//alert("in Cnt");

        	//dsParamSetArrowBlank(this.ds_receiptList, strParam);
        	dsParamSetArrowBlank(this.ds_searchCnt, strParam);
        	//alert(this.ds_searchCnt.saveXML());


        	this.gfnTransaction("getExistTrainingCnt",
        						"swiss/ad/survtrain/getExistTrainingCnt.do",
        						"dsSearch=ds_searchCnt",
        						"ds_maxExistCnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.getTrainingResult = function(){
        	//alert("in tr result");
        	var strParam = "";
        	//var trSeq = this.ds_trainingInfo.getColumn(0,"TRAININGSEQ");

        	strParam += "TRAININGSEQ="		+ this.fv_trSeq			+ "ª";
        	strParam += "SCHCD="		    + this.fv_SCHCD		    + "ª";
        	strParam += "ORGCD="		    + this.fv_ORGCD		    + "ª";
        	//alert("in getTrainingResult:"+strParam);
        	//return false;
        	//alert("in Rst");

        	//dsParamSetArrowBlank(this.ds_receiptList, strParam);
        	dsParamSetArrowBlank(this.ds_SelectResult, strParam);

        	this.gfnTransaction("getTrainingResult",
        						"swiss/ad/survtrain/getTrainingResult.do",
        						"dsSearch=ds_SelectResult",
        						"ds_receiptList=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.Div_btn_save_onclick = function(obj,e)
        {
        	var nRowCnt = this.ds_receiptList.getRowCount();
        	var strParam = "";
        	var strResult = "";
        	var bChangeData = false;
        	var existMaxcnt = this.ds_maxExistCnt.getColumn(0,"MAXCNT");
        	var listMaxcnt = this.ds_maxCnt.getColumn(0,"MAXCNT");
        	for(var i=0; i<nRowCnt; i++){
        		switch(this.ds_receiptList.getRowType(i)){
        			case 0 :
        				strResult += "데이터가 존재하지 않습니다. " + i + "exit \n";
        				break;
        			case 1:
        				break;
        			case 16:
        				strResult += "ROW " + i + " 변경되지 않음 \n";
        				break;
        			case 2:
        				bChangeData = true;
        				var nRow = this.ds_sendSet.addRow();
        				this.ds_sendSet.copyRow(nRow, this.ds_receiptList, i);
        				this.ds_sendSet.setColumn(nRow,"rowType", "I");
        				this.ds_sendSet.setColumn(nRow,"TRAININGSEQ", this.fv_trSeq);
        				this.ds_sendSet.setColumn(nRow,"SCHCD", this.fv_SCHCD);
        				this.ds_sendSet.setColumn(nRow,"ORGCD", this.fv_ORGCD);
        				break;
        			case 4:
        				if(this.ds_receiptList.getColumn(i,"USERNM")!=null || this.fv_resetFlag){
        					bChangeData = true;
        				}
        				strResult += "ROW " + i + " 변경됨 \n";

        				var nRow = this.ds_sendSet.addRow();
        				this.ds_sendSet.copyRow(nRow, this.ds_receiptList, i);
        				this.ds_sendSet.setColumn(nRow,"rowType", "U");

        				break;
        			case 8:
        				strResult += "ROW " + i + " 변경됨 \n";
        				bChangeData = true;
        				break;
        			default:
        				strResult += "ROW " + i + " 상태 알수 없음 \n";
        			}
        		}
        	if(bChangeData == true){

        	//dsParamSetArrowBlank(this.ds_receiptList, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", "trSeq="+this.fv_trSeq);  //접속기록
        	this.gfnTransaction("setTrainingResult",
        						"swiss/ad/survtrain/setTrainingResult.do",
        						"dsSearch=ds_sendSet",
        						"ds_resultCnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        	}else{
        		this.alert("변경된 정보가 없습니다.");
        	}
        };

        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_list.getCellPos();
        	if(nPos != "0"){
        		if(nPos == 6){
        			if(this.confirm("초기화 하시겠습니까?")){
        				this.fv_resetFlag = true;
        				this.ds_receiptList.setColumn(e.row,"TRDATE",null);
        				this.ds_receiptList.setColumn(e.row,"USERGRPTYPE",null);
        				this.ds_receiptList.setColumn(e.row,"USERNM",null);
        				this.ds_receiptList.setColumn(e.row,"USEREMAIL",null);
        				this.ds_receiptList.setColumn(e.row,"USERTELNO",null);
        				this.ds_receiptList.setColumn(e.row,"USERMOBILE",null);
        			}
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.hp12m00_oninit,this);
            this.addEventHandler("onload",this.hp12m00_onload,this);
            this.Div.form.sub_search.form.label_place.addEventHandler("onclick",this.Div_sub_search_label_place_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.btn_save.addEventHandler("onclick",this.Div_btn_save_onclick,this);
        };

        this.loadIncludeScript("hp12m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
