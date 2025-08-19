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
            obj._setContents("<ColumnInfo><Column id=\"PAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENM\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATETIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","575",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0",null,"240","32",null,"2",null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("메뉴오픈시점관리");
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
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","1120","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_kedUser","30","112","820","448",null,null,null,null,null,null,this.Div.form);
            obj.set_binddataset("ds_kedi_user");
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"224\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"82\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"그룹타입\"/><Cell col=\"1\" text=\"PAGEID\"/><Cell col=\"2\" text=\"PAGE명\"/><Cell col=\"3\" text=\"시작일시\"/><Cell col=\"4\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell text=\"BIND:USERGRPTYPE\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:PAGEID\" textAlign=\"center\"/><Cell col=\"2\" text=\"BIND:PAGENM\" textAlign=\"center\"/><Cell col=\"3\" text=\"BIND:START_DATETIME\" textAlign=\"center\"/><Cell col=\"4\" text=\"BIND:END_DATETIME\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add","890","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("신규 추가");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","890","112","340","238",null,null,null,null,null,null,this.Div.form);
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"189","100","30","62",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","62","189","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("pageid","106","10","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_accessibilitylabel("사용자ID");
            obj.set_maxlength("40");
            obj.set_readonly("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("end_datetime","106","127","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("전화번호");
            obj.set_maxlength("40");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","26","71","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("시작일시");
            obj.set_taborder("7");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","17","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("PAGEID");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","134","73","26",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_text("종료일시");
            obj.set_taborder("6");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("start_datetime","106","67","199","40",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("40");
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
        this.addIncludeScript("ad32m00.xfdl","CM::common.xjs");
        this.registerScript("ad32m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";

        var flag_key = "";
        var flag_menu_level = -1;

        this.fv_MENUNM = "관리자>시스템관리>메뉴오픈시점관리";

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
        };

        this.selectKediUser = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "메뉴오픈시점조회", strParam);  //접속기록

        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectMenuConList.do",
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

        		this.ds_kedi_user.setColumn(ds_row, "PAGEID", '');
        		this.ds_kedi_user.setColumn(ds_row, "START_DATETIME", '');
        		this.ds_kedi_user.setColumn(ds_row, "END_DATETIME", '');
        		this.lfn_setInputDiv(ds_row);
        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {

        	var nRow = this.ds_kedi_user.rowposition;
        	var isNewRow = this.ds_kedi_user.getRowType(this.ds_kedi_user.rowposition) == 2;

        /*
        	if(this.Div.form.Div00.form.user_grp_type.value == null || this.Div.form.Div00.form.user_grp_type.value == ""){
        		alert("사용자그룹유형을 선택하세요.");
        		this.Div.form.Div00.form.user_grp_type.setFocus();
        		this.Div.form.Div00.form.user_grp_type.dropdown();
        		return;
        	}
        */

        	if(this.Div.form.Div00.form.pageid.value == null || this.Div.form.Div00.form.pageid.value == ""){
        		alert("pageid를 입력하세요.");
        		this.Div.form.Div00.form.pageid.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.start_datetime.value == null || this.Div.form.Div00.form.start_datetime.value == "") {
        		alert("시작일을 입력하세요.");
        		this.Div.form.Div00.form.start_datetime.setFocus();
        		return;
        	}

        	if(this.Div.form.Div00.form.end_datetime.value == null || this.Div.form.Div00.form.end_datetime.value == ""){
        		alert("종료일을 입력하세요.");
        		this.Div.form.Div00.form.end_datetime.setFocus();
        		return;
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	var strParam = "PAGEID=" + this.Div.form.Div00.form.pageid.value + "ª";
        		strParam += "START_DATETIME=" + this.Div.form.Div00.form.start_datetime.value + "ª";
        		strParam += "END_DATETIME=" + this.Div.form.Div00.form.end_datetime.value + "ª";

        	if(isNewRow){
        		strParam += "rowType=I" + "ª";
        	} else {
        		strParam += "rowType=U" + "ª"
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	var strLog = "";
        	//var strLog = "USERGRPTYPE=9,PAGEID=" + this.ds_kedi_user.getColumn(nRow,"PAGEID") + ",USERID=" + this.ds_kedi_user.getColumn(nRow,"USERID");
        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strLog);  //접속기록

        	this.gfnTransaction("saveKediUser",
        						"/swiss/ad/user/saveMenuCon.do",
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
        	strParam += "PAGEID=" + this.Div.form.Div00.form.pageid.value + "ª";
        	strParam += "START_DATETIME=" + this.Div.form.Div00.form.start_datetime.value + "ª";
        	strParam += "END_DATETIME=" + this.Div.form.Div00.form.end_datetime.value + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록

        	this.gfnTransaction("deleteKediUser",
        						"/swiss/ad/user/deleteMenuCon.do",
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
        		this.Div.form.Div00.form.pageid.set_readonly(false);
        	}else{
        		this.Div.form.Div00.form.pageid.set_readonly(true);
        	}

        	this.Div.form.Div00.form.pageid.set_value(this.ds_kedi_user.getOrgColumn(nRow,"PAGEID"));
        	this.Div.form.Div00.form.start_datetime.set_value(this.ds_kedi_user.getOrgColumn(nRow,"START_DATETIME"));
        	this.Div.form.Div00.form.end_datetime.set_value(this.ds_kedi_user.getOrgColumn(nRow,"END_DATETIME"));
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
            this.ds_kedi_user.addEventHandler("canrowposchange",this.ds_kedi_user_canrowposchange,this);
        };

        this.loadIncludeScript("ad32m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
