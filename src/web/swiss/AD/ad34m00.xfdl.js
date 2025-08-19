(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad34m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grp_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code_id\" type=\"STRING\" size=\"256\"/><Column id=\"code_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code_id\">4</Col><Col id=\"code_nm\">취업담당자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_kedi_user", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"REPORTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","780",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0",null,"310","32",null,"2",null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("장표리스트관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","570",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","570",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","1120","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_kedUser","30","112","820","458",null,null,null,null,null,null,this.Div.form);
            obj.set_binddataset("ds_kedi_user");
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"312\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"조사기준일\"/><Cell col=\"1\" text=\"그룹타입\"/><Cell col=\"2\" text=\"PAGEID\"/><Cell col=\"3\" text=\"장표번호\"/></Band><Band id=\"body\"><Cell text=\"BIND:SURVSEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:USERGRPTYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"BIND:PAGEID\" textAlign=\"center\"/><Cell col=\"3\" text=\"BIND:REPORTNO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add","890","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_text("신규 추가");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_taborder("9");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","890","112","340","188",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"140","100","30","59",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","65","140","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","91","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("장표번호");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("reportno","139","87","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("학교코드");
            obj.set_maxlength("40");
            obj.set_readonly("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","22","20","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("조사기준일");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("survseq","139","14","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학교코드");
            obj.set_maxlength("40");
            obj.set_readonly("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("pageid","139","50","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("본분교코드");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","54","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("PAGEID");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("PROCTYPE","783","650","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","750","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_text("검색");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","70","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조사기준");
            this.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","104","70","160","30",null,null,null,null,null,null,this);
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ_TXT");
            obj.set_innerdataset("ds_survList");
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad34m00.xfdl","CM::common.xjs");
        this.registerScript("ad34m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        var flag_key = "";
        var flag_menu_level = -1;

        this.fv_MENUNM = "관리자>시스템관리>장표리스트관리";

        this.oriUserRowCnt = 0;
        this.fnCallback = function(serviceID, errCD, errMSG){

        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSystemId"){
        			//this.selectPage();
        		}

        		if(serviceID == "selectKediUser"){
        			//alert("rtn select");
        			this.oriUserRowCnt = this.ds_kedi_user.rowcount;
        			this.lfn_setInputDiv(0);
        		}
        		if(serviceID == "saveKediUser"){
        			//alert("rtn savekedi");
        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");
        			//alert("resultVal="+resultVal);
        			if( resultVal =="0"){
        				this.alert("저장되었습니다.");

        				this.selectKediUser();
        			}else{
        				this.alert("중복된 아이디가 존재 합니다.");
        			}
        		}

        		if(serviceID == "deleteKediUser"){
        			this.alert("삭제되었습니다.");
        			this.ds_kedi_user.deleteRow(this.ds_kedi_user.rowposition);

        			this.selectKediUser();
        		}
        		if(serviceID == "sendIdNotice"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			//alert("id :" + objApp.gds_rtn_result.getColumn(0, "RESULTVAL") );
        			if( resultVal =="O"){
        				this.alert("존재하지 않는 이메일주소 입니다.");
        			}else if( resultVal =="N"){
        				this.alert("전송에 실패 했습니다.");
        			}else{
        				this.alert("전송 되었습니다.");
        			}

        		}

         	}
        }

        this.ad34m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(0, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(0, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(0, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(0, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(0, "SURVNM");
        	this.getFpSurvYear();

        	//this.Div.form.sub_search.form.in_cb_sruvseq.set_value(this.fv_SURVSEQ);
        	this.in_cb_sruvseq.set_index(0);

        	this.selectKediUser();
        };

        this.getFpSurvYear = function(){

        	var strParam = "";
        	strParam += "tmp="		+ "a" 		+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";

        	//alert(strParam);

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getFpSurvYear",
        						"/swiss/fp/insertrel/getFpSurvYear.do",
        						"dsSearch=dsSearch",
        						"ds_survList=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.selectKediUser = function(){
        	var tseq = "";
        	tseq = this.in_cb_sruvseq.value;
        	if(!tseq){
        		//alert("in not");
        		return false;
        	}

        	var strParam = "";
        	strParam += "SURVSEQ=" + this.in_cb_sruvseq.value + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);


        	this.setAccessLog("", "AG", this.fv_MENUNM, "사용자조회", strParam);  //접속기록

        	//alert("bef select");

        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectReportConList.do",
        						"dsSearch=dsSearch",
        						"ds_kedi_user=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        // 사용 추가
        this.btn_add_onclick = function(obj,e)
        {
        	var existNewRow = this.oriUserRowCnt+1 == this.ds_kedi_user.rowcount;

        	if(existNewRow){
        		this.Div.form.gd_kedUser.setCellPos(1, this.ds_kedi_user.rowcount-1);//포커스
        		this.lfn_setInputDiv(this.ds_kedi_user.rowcount-1);
        	} else {
        		var ds_row = this.ds_kedi_user.addRow();

        		this.ds_kedi_user.setColumn(ds_row, "SURVSEQ", '');
        		this.ds_kedi_user.setColumn(ds_row, "PAGEID", '');
        		this.ds_kedi_user.setColumn(ds_row, "REPORTNO", '');
        		this.lfn_setInputDiv(ds_row);
        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	//alert(0);
        	var nRow = this.ds_kedi_user.rowposition;
        	var isNewRow = this.ds_kedi_user.getRowType(this.ds_kedi_user.rowposition) == 2;

        	if(this.Div.form.Div00.form.survseq.value == null || this.Div.form.Div00.form.survseq.value == ""){
        		alert("조사기준일을 입력하세요.");
        		this.Div.form.Div00.form.survseq.setFocus();
        		this.Div.form.Div00.form.survseq.dropdown();
        		return;
        	}

        	if(this.Div.form.Div00.form.pageid.value == null || this.Div.form.Div00.form.pageid.value == ""){
        		alert("PAGEID를 입력하세요.");
        		this.Div.form.Div00.form.pageid.setFocus();
        		this.Div.form.Div00.form.pageid.dropdown();
        		return;
        	}

        	if(this.Div.form.Div00.form.reportno.value == null || this.Div.form.Div00.form.reportno.value == ""){
        		alert("장표번호를 입력하세요.");
        		this.Div.form.Div00.form.reportno.setFocus();
        		this.Div.form.Div00.form.reportno.dropdown();
        		return;
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}
        	//alert(1);

        	var strParam = "SURVSEQ=" + this.Div.form.Div00.form.survseq.value + "ª";
        		strParam += "PAGEID=" + this.Div.form.Div00.form.pageid.value + "ª";
        		strParam += "REPORTNO=" + this.Div.form.Div00.form.reportno.value + "ª";

        	if(isNewRow){
        		strParam += "rowType=I" + "ª";
        	} else {
        		strParam += "rowType=U" + "ª"
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strParam);  //접속기록
        	this.gfnTransaction("saveKediUser",
        						"/swiss/ad/user/saveReportCon.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);
        };




        this.btn_del_onclick = function(obj,e)
        {
        	if(!this.confirm("선택된 행을 삭제하시겠습니까?")){
        		return;
        	}

        	if(this.ds_kedi_user.getRowType(this.ds_kedi_user.rowposition) == 2){
        		this.ds_kedi_user.deleteRow(this.ds_kedi_user.rowposition);
        		this.lfn_setInputDiv(this.ds_kedi_user.rowposition);
        		alert("삭제되었습니다.");
        		return;
        	}

        	var strParam = "SURVSEQ=" + this.Div.form.Div00.form.survseq.value + "ª";
        		strParam += "PAGEID=" + this.Div.form.Div00.form.pageid.value + "ª";
        		strParam += "REPORTNO=" + this.Div.form.Div00.form.reportno.value + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록

        	this.gfnTransaction("deleteKediUser",
        						"/swiss/ad/user/deleteReportCon.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };


        this.Grid00_oncellclick = function(obj,e)
        {
        	//alert(0);
        	this.lfn_setInputDiv(this.ds_kedi_user.rowposition);
        };

        // Div.form.Div00에 nRow 데이터복사
        this.lfn_setInputDiv = function(nRow){
        	//alert("in setinput");
        	var isNewRow = nRow == this.oriUserRowCnt;
        //alert("in setinput2");
        	if(isNewRow){
        		this.Div.form.Div00.form.survseq.set_readonly(false);
        		this.Div.form.Div00.form.pageid.set_readonly(false);
        		this.Div.form.Div00.form.reportno.set_readonly(false);
        	}else{
        		this.Div.form.Div00.form.survseq.set_readonly(true);
        		this.Div.form.Div00.form.pageid.set_readonly(true);
        		this.Div.form.Div00.form.reportno.set_readonly(true);
        	}
        //alert("in setinput3");
        	this.Div.form.Div00.form.survseq.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SURVSEQ"));
        	this.Div.form.Div00.form.pageid.set_value(this.ds_kedi_user.getOrgColumn(nRow,"PAGEID"));
        	this.Div.form.Div00.form.reportno.set_value(this.ds_kedi_user.getOrgColumn(nRow,"REPORTNO"));
        	//alert("in setinput4");
        }

        this.Div_btn_search_onclick = function(obj,e)
        {
        	this.selectKediUser();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad34m00_onload,this);
            this.Div.form.gd_kedUser.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Div.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div.form.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div.form.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.btn_search.addEventHandler("onclick",this.Div_btn_search_onclick,this);
            this.ds_kedi_user.addEventHandler("canrowposchange",this.ds_kedi_user_canrowposchange,this);
        };

        this.loadIncludeScript("ad34m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
