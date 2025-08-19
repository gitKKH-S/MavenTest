(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad36m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,580);
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
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","575",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","120","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0",null,"120","32",null,"2",null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_text("계정관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("sub_title_help","sub_title_wrap:20","20","720","50",null,null,null,null,null,null,this.Div.form);
            obj.set_text("※ 교내사용자(진로탐색 메뉴만 이용 가능한 사용자) 등록을 위한 화면입니다.");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCRed");
            obj.set_taborder("11");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title_help2","sub_title_wrap:20","40","720","50",null,null,null,null,null,null,this.Div.form);
            obj.set_text("(학과(전산)담당자 등록 혹은 취업담당자 변경을 위한 화면이 아닙니다.)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCRed");
            obj.set_taborder("11");
            this.Div.addChild(obj.name, obj);

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
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","1120","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_kedUser","30","112","820","394",null,null,null,null,null,null,this.Div.form);
            obj.set_binddataset("ds_kedi_user");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"224\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"그룹타입\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"휴대폰전화\"/><Cell col=\"4\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"BIND:USERGRPTYPE\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:USERID\" textAlign=\"center\"/><Cell col=\"2\" text=\"BIND:USERNM\" textAlign=\"center\"/><Cell col=\"3\" text=\"BIND:MOBILENO\" textAlign=\"center\"/><Cell col=\"4\" text=\"BIND:TELNO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add","890","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("신규 추가");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","890","112","340","390",null,null,null,null,null,null,this.Div.form);
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Edit("mobile_no","106","220","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("휴대폰번호");
            obj.set_maxlength("15");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"289","100","30","62",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","62","289","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("users_id","106","10","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("사용자ID");
            obj.set_maxlength("40");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("tel_no","106","160","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("전화번호");
            obj.set_maxlength("15");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","26","101","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("성명");
            obj.set_taborder("6");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","17","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("사용자ID");
            obj.set_taborder("7");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","167","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("전화번호");
            obj.set_taborder("8");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","22","227","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("휴대폰번호");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("user_nm","109","97","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("10");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","105","55","224","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("※ ID는 이메일 주소로 입력해 주세요.");
            obj.set_font("12px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCRed");
            obj.set_taborder("9");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("PROCTYPE","1047","510","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad37m00.xfdl","CM::common.xjs");
        this.registerScript("ad37m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";

        var flag_key = "";
        var flag_menu_level = -1;

        this.fv_MENUNM = "관리자>시스템관리>계정관리";

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
        			this.oriUserRowCnt = this.ds_kedi_user.rowcount;
        			this.lfn_setInputDiv(0);
        		}
        		if(serviceID == "saveKediUser"){

        			var resultVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");

        			if( resultVal =="0"){
        				//this.ds_kedi_user.setColumn(this.ds_kedi_user.rowposition, "USERGRPTYPENM", this.Div.form.Div00.form.user_grp_type.text );

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

        this.ad36m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(0, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");


        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	//alert("onload="+this.fv_SCHCD);
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");

        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(0, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(0, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(0, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(0, "SURVNM");

        	this.selectKediUser();

        	this.Div.form.Div00.form.users_id.set_enable(false);
        	this.Div.form.Div00.form.users_id.set_readonly(false);

        	this.Div.form.Div00.form.user_nm.set_enable(false);
        	this.Div.form.Div00.form.user_nm.set_readonly(false);

        	this.Div.form.Div00.form.tel_no.set_enable(false);
        	this.Div.form.Div00.form.tel_no.set_readonly(false);

        	this.Div.form.Div00.form.mobile_no.set_enable(false);
        	this.Div.form.Div00.form.mobile_no.set_readonly(false);

        	this.Div.form.Div00.form.btn_save.set_enable(false);
        	this.Div.form.Div00.form.btn_del.set_enable(false);
        };

        this.selectKediUser = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "사용자조회", strParam);  //접속기록

        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectSchoolTmpUserList.do",
        						"dsSearch=dsSearch",
        						"ds_kedi_user=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 사용 추가
        this.btn_add_onclick = function(obj,e)
        {

        	var maxUsr = 1;

        	var chkRow = this.ds_kedi_user.rowcount;
        	//alert("chkRow="+chkRow);
        	if(chkRow>maxUsr-1){
        		alert("교내사용자는 "+maxUsr+"명까지만 등록가능합니다.\r\n사용자를 변경하시려면, 기존사용자를 삭제 후 등록하시기 바랍니다.");
        		return flase;
        	}

        	var existNewRow = this.oriUserRowCnt+1 == this.ds_kedi_user.rowcount;

        	if(existNewRow){
        		this.Div.form.gd_kedUser.setCellPos(1, this.ds_kedi_user.rowcount-1);//포커스
        		this.lfn_setInputDiv(this.ds_kedi_user.rowcount-1);
        	} else {
        		var ds_row = this.ds_kedi_user.addRow();

        		this.ds_kedi_user.setColumn(ds_row, "SURVSEQ", this.fv_SURVSEQ);
        		this.ds_kedi_user.setColumn(ds_row, "SURVKINDCD", this.fv_SURVKINDCD);
        		//alert("clk_add="+this.fv_SCHCD);
        		this.ds_kedi_user.setColumn(ds_row, "SCHCD", this.fv_SCHCD);
        		this.ds_kedi_user.setColumn(ds_row, "ORGCD", this.fv_ORGCD);

        		this.ds_kedi_user.setColumn(ds_row, "USERGRPTYPE", "9");
        		this.ds_kedi_user.setColumn(ds_row, "USERID", null);
        		this.ds_kedi_user.setColumn(ds_row, "USERNM", null);
        		this.ds_kedi_user.setColumn(ds_row, "TELNO", null);
        		this.ds_kedi_user.setColumn(ds_row, "MOBILENO", null);

        		this.lfn_setInputDiv(ds_row);

        		this.Div.form.Div00.form.users_id.set_enable(true);
        		this.Div.form.Div00.form.users_id.set_readonly(false);

        		this.Div.form.Div00.form.user_nm.set_enable(true);
        		this.Div.form.Div00.form.user_nm.set_readonly(false);

        		this.Div.form.Div00.form.tel_no.set_enable(true);
        		this.Div.form.Div00.form.tel_no.set_readonly(false);

        		this.Div.form.Div00.form.mobile_no.set_enable(true);
        		this.Div.form.Div00.form.mobile_no.set_readonly(false);

        		this.Div.form.Div00.form.btn_save.set_enable(true);
        		this.Div.form.Div00.form.btn_del.set_enable(true);

        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {

        	var nRow = this.ds_kedi_user.rowposition;
        	var isNewRow = this.ds_kedi_user.getRowType(this.ds_kedi_user.rowposition) == 2;

        	//alert("nRow="+nRow);
        	//return false;

        	if(nRow<0){
        		alert("신규추가를 먼저 선택하세요.");
        		return false;
        	}


        /*
        	if(this.Div.form.Div00.form.user_grp_type.value == null || this.Div.form.Div00.form.user_grp_type.value == ""){
        		alert("사용자그룹유형을 선택하세요.");
        		this.Div.form.Div00.form.user_grp_type.setFocus();
        		this.Div.form.Div00.form.user_grp_type.dropdown();
        		return;
        	}
        */

        	if(this.Div.form.Div00.form.user_nm.value == null || this.Div.form.Div00.form.user_nm.value == ""){
        		alert("성명을 입력하세요.");
        		this.Div.form.Div00.form.user_nm.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.users_id.value == null || this.Div.form.Div00.form.users_id.value == "") {
        		alert("아이디를 입력하세요.");
        		this.Div.form.Div00.form.users_id.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.tel_no.value == null || this.Div.form.Div00.form.tel_no.value == ""){
        		alert("전화번호를 입력하세요.");
        		this.Div.form.Div00.form.tel_no.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.mobile_no.value == null || this.Div.form.Div00.form.mobile_no.value == ""){
        		alert("휴대전화번호를 입력하세요.");
        		this.Div.form.Div00.form.mobile_no.setFocus();
        		return;
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	var strParam = "USERGRPTYPE=9ª";
        		strParam += "TELNO=" + this.Div.form.Div00.form.tel_no.value + "ª";
        		strParam += "MOBILENO=" + this.Div.form.Div00.form.mobile_no.value + "ª";
        		//strParam += "USERGRPTYPENM=" + this.Div.form.Div00.form.user_grp_type.text + "ª";
        		//strParam += "DEPTNM=" + this.ds_kedi_user.getColumn(nRow, "DEPTNM") + "ª";
        		//strParam += "FAXNO=" + this.ds_kedi_user.getColumn(nRow, "FAXNO") + "ª";
        		strParam += "USERNM=" + this.Div.form.Div00.form.user_nm.value + "ª";

        		//alert("load="+this.fv_SCHCD);
        		strParam += "SCHCD=" + this.ds_kedi_user.getColumn(nRow, "SCHCD") + "ª";
        		strParam += "ORGCD=" + this.ds_kedi_user.getColumn(nRow, "ORGCD") + "ª";


        	if(isNewRow){
        		strParam += "USERID=" + this.Div.form.Div00.form.users_id.value + "ª";
        		strParam += "EMAILADDR=" + this.Div.form.Div00.form.users_id.value + "ª";
        		strParam += "rowType=I" + "ª";
        	} else {
        		strParam += "USERID="		+ this.ds_kedi_user.getColumn(nRow,"USERID") + "ª";
        		strParam += "EMAILADDR="	+ this.ds_kedi_user.getColumn(nRow,"EMAILADDR") + "ª";
        		strParam += "rowType=U" + "ª"
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	var strLog = "USERGRPTYPE=9,USERNM=" + this.ds_kedi_user.getColumn(nRow,"USERNM")
        				 + ",USERID=" + this.ds_kedi_user.getColumn(nRow,"USERID");
        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strLog);  //접속기록

        	this.gfnTransaction("saveKediUser",
        						"/swiss/ad/user/saveKediUser9.do",
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

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";

        	strParam += "USERID=" 		+ this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition, "USERID") + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록

        	this.gfnTransaction("deleteKediUser",
        						"/swiss/ad/user/deleteKediUser.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	this.lfn_setInputDiv(this.ds_kedi_user.rowposition);
        };

        // Div.form.Div00에 nRow 데이터복사
        this.lfn_setInputDiv = function(nRow){
        	var isNewRow = nRow == this.oriUserRowCnt;
        	if(isNewRow){
        		//this.Div.form.Div00.form.users_id.set_enable(true);
        		this.Div.form.Div00.form.users_id.set_readonly(false);
        	}else{
        		//this.Div.form.Div00.form.users_id.set_enable(false);
        		this.Div.form.Div00.form.users_id.set_readonly(true);
        	}

        	this.Div.form.Div00.form.user_nm.set_value(this.ds_kedi_user.getOrgColumn(nRow,"USERNM"));
        	this.Div.form.Div00.form.users_id.set_value(this.ds_kedi_user.getOrgColumn(nRow,"USERID"));
        	this.Div.form.Div00.form.tel_no.set_value(this.ds_kedi_user.getOrgColumn(nRow,"TELNO"));
        	this.Div.form.Div00.form.mobile_no.set_value(this.ds_kedi_user.getOrgColumn(nRow,"MOBILENO"));

        	this.Div.form.Div00.form.users_id.set_enable(true);
        	this.Div.form.Div00.form.users_id.set_readonly(true);

        	this.Div.form.Div00.form.user_nm.set_enable(true);
        	this.Div.form.Div00.form.user_nm.set_readonly(false);

        	this.Div.form.Div00.form.tel_no.set_enable(true);
        	this.Div.form.Div00.form.tel_no.set_readonly(false);

        	this.Div.form.Div00.form.mobile_no.set_enable(true);
        	this.Div.form.Div00.form.mobile_no.set_readonly(false);

        	this.Div.form.Div00.form.btn_save.set_enable(true);
        	this.Div.form.Div00.form.btn_del.set_enable(true);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad36m00_onload,this);
            this.Div.form.gd_kedUser.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Div.form.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.Div.form.Div00.form.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div.form.Div00.form.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.Div.form.Div00.form.users_id.addEventHandler("onchanged",this.Div_Div00_users_id_onchanged,this);
            this.ds_kedi_user.addEventHandler("canrowposchange",this.ds_kedi_user_canrowposchange,this);
        };

        this.loadIncludeScript("ad37m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
