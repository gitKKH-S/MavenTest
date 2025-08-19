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
                this._setFormPosition(1260,790);
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
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCHINM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHFUNDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"PROVINCECD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_TXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","780",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0",null,"310","32",null,"2",null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("학교정보 관리");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","570",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","780",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","1120","1202","140",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_kedUser","30","112","820","608",null,null,null,null,null,null,this.Div.form);
            obj.set_binddataset("ds_kedi_user");
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"312\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"학교코드\"/><Cell col=\"1\" text=\"그룹타입\"/><Cell col=\"2\" text=\"본분교코드\"/><Cell col=\"3\" text=\"학교명\"/></Band><Band id=\"body\"><Cell text=\"BIND:SCHCD\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:USERGRPTYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"BIND:ORGCD\" textAlign=\"center\"/><Cell col=\"3\" text=\"BIND:SCHNM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_add","890","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("신규 추가");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","890","112","340","608",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"560","100","30","59",null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_save","65","560","100","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty01");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","22","97","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학교코드");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_cd","139","87","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("학교코드");
            obj.set_maxlength("40");
            obj.set_readonly("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","22","127","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("본분교코드");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("org_cd","139","123","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("본분교코드");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","22","162","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("학교명");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_nm","139","159","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("7");
            obj.set_accessibilitylabel("학교명");
            obj.set_maxlength("255");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","22","197","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("학교명 중문");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_chinm","139","193","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("학교명 중문");
            obj.set_maxlength("255");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","22","233","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("학교명 영문");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_engnm","139","229","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("학교명 영문");
            obj.set_maxlength("255");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","22","271","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("SCHKINDCD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_kindcd","139","267","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("SCHKINDCD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_01","22","310","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("14");
            obj.set_text("SCHFUNDCD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_fundcd","139","306","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("15");
            obj.set_accessibilitylabel("SCHFUNDCD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_02","23","349","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("16");
            obj.set_text("SCHSEXCD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_sexcd","139","345","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("17");
            obj.set_accessibilitylabel("SCHSEXCD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_03","22","385","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("SCHDNCD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_dncd","139","381","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("19");
            obj.set_accessibilitylabel("SCHDNCD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_04","22","457","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("PROVINCECD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("provincecd","139","453","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("21");
            obj.set_accessibilitylabel("PROVINCECD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_05","22","491","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("zipcode","139","487","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("23");
            obj.set_accessibilitylabel("우편번호");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_06","22","526","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("24");
            obj.set_text("학교주소");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_addr","139","522","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("25");
            obj.set_accessibilitylabel("학교주소");
            obj.set_maxlength("255");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_03_00","22","421","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("26");
            obj.set_text("SCHSTATCD");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("sch_statcd","139","417","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("27");
            obj.set_accessibilitylabel("SCHDNCD");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","22","24","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("28");
            obj.set_text("조사기준일");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("survseq","139","14","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("29");
            obj.set_accessibilitylabel("학교코드");
            obj.set_maxlength("40");
            obj.set_readonly("false");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("survkindcd","139","50","190","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("30");
            obj.set_accessibilitylabel("본분교코드");
            obj.set_maxlength("10");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","22","54","107","22",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("조사구분");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Edit("PROCTYPE","783","650","57","26",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","750","70","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","70","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조사기준");
            this.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","104","70","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQ_TXT");
            obj.set_innerdataset("ds_survList");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","478","70","64","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조사종류");
            this.addChild(obj.name, obj);

            obj = new Combo("in_cb_survkindcd","552","70","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_accessibilitylabel("입고년도");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var in_cb_survkindcd_innerdataset = new nexacro.NormalDataset("in_cb_survkindcd_innerdataset", obj);
            in_cb_survkindcd_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신편입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(in_cb_survkindcd_innerdataset);
            obj.set_text("졸업생정보");
            obj.set_value("GP");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,790,this,function(p){});
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

        this.fv_MENUNM = "관리자>시스템관리>학교정보관리";

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
        			//alert("sel");
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
        	strParam += "SURVKINDCD=" + this.in_cb_survkindcd.value + "ª";


        	dsParamSetArrowBlank(this.dsSearch, strParam);


        	this.setAccessLog("", "AG", this.fv_MENUNM, "사용자조회", strParam);  //접속기록

        	this.gfnTransaction("selectKediUser",
        						"/swiss/ad/user/selectSchoolInfList.do",
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

        		this.ds_kedi_user.setColumn(ds_row, "SURVSEQ", this.fv_SURVSEQ);
        		this.ds_kedi_user.setColumn(ds_row, "SURVKINDCD", this.fv_SURVKINDCD);

        		this.ds_kedi_user.setColumn(ds_row, "USERGRPTYPE", "2");
        		this.ds_kedi_user.setColumn(ds_row, "USERID", null);
        		this.ds_kedi_user.setColumn(ds_row, "USERNM", null);
        		this.ds_kedi_user.setColumn(ds_row, "TELNO", null);
        		this.ds_kedi_user.setColumn(ds_row, "MOBILENO", null);

        		this.lfn_setInputDiv(ds_row);
        	}
        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {
        	//alert(0);
        	var nRow = this.ds_kedi_user.rowposition;
        	var isNewRow = this.ds_kedi_user.getRowType(this.ds_kedi_user.rowposition) == 2;

        	if(this.Div.form.Div00.form.sch_cd.value == null || this.Div.form.Div00.form.sch_cd.value == ""){
        		alert("학교코드를 입력하세요.");
        		this.Div.form.Div00.form.sch_cd.setFocus();
        		this.Div.form.Div00.form.sch_cd.dropdown();
        		return;
        	}

        	if(this.Div.form.Div00.form.org_cd.value == null || this.Div.form.Div00.form.org_cd.value == ""){
        		alert("본분교코드를 입력하세요.");
        		this.Div.form.Div00.form.org_cd.setFocus();
        		this.Div.form.Div00.form.org_cd.dropdown();
        		return;
        	}

        	if(this.Div.form.Div00.form.sch_nm.value == null || this.Div.form.Div00.form.sch_nm.value == ""){
        		alert("학교명을 선택하세요.");
        		this.Div.form.Div00.form.sch_nm.setFocus();
        		this.Div.form.Div00.form.sch_nm.dropdown();
        		return;
        	}

        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}
        	//alert(1);

        	var strParam = "SCHNM=" + this.Div.form.Div00.form.sch_nm.value + "ª";
        		strParam += "SCHCHINM=" + this.Div.form.Div00.form.sch_chinm.value + "ª";
        		strParam += "SCHENGNM=" + this.Div.form.Div00.form.sch_engnm.value + "ª";

        		strParam += "SURVSEQ=" + this.Div.form.Div00.form.survseq.value + "ª";
        		strParam += "SURVKINDCD=" + this.Div.form.Div00.form.survkindcd.value + "ª";

        		strParam += "SCHCD=" + this.Div.form.Div00.form.sch_cd.value + "ª";
        		strParam += "ORGCD=" + this.Div.form.Div00.form.org_cd.value + "ª";
        		strParam += "SCHKINDCD=" + this.Div.form.Div00.form.sch_kindcd.value + "ª";
        		strParam += "SCHFUNDCD=" + this.Div.form.Div00.form.sch_fundcd.value + "ª";
        		strParam += "SCHSEXCD=" + this.Div.form.Div00.form.sch_sexcd.value + "ª";
        		strParam += "SCHDNCD=" + this.Div.form.Div00.form.sch_dncd.value + "ª";
        		strParam += "SCHSTATCD=" + this.Div.form.Div00.form.sch_statcd.value + "ª";
        		strParam += "PROVINCECD=" + this.Div.form.Div00.form.provincecd.value + "ª";
        		strParam += "ZIPCODE=" + this.Div.form.Div00.form.zipcode.value + "ª";
        		strParam += "SCHADDR=" + this.Div.form.Div00.form.sch_addr.value + "ª";


        	//alert(strParam);
        	//return false;

        	if(isNewRow){
        		strParam += "rowType=I" + "ª";
        	} else {
        		strParam += "rowType=U" + "ª"
        	}
        	//alert(3);

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	var strLog = "SCHNM=" + this.Div.form.Div00.form.sch_nm.value + "ª";
        		strLog += "SCHCHINM=" + this.Div.form.Div00.form.sch_chinm.value + "ª";
        		strLog += "SCHENGNM=" + this.Div.form.Div00.form.sch_engnm.value + "ª";

        		strParam += "SURVSEQ=" + this.Div.form.Div00.form.survseq.value + "ª";
        		strParam += "SURVKINDCD=" + this.Div.form.Div00.form.survkindcd.value + "ª";

        		strLog += "SCHCD=" + this.Div.form.Div00.form.sch_cd.value + "ª";
        		strLog += "ORGCD=" + this.Div.form.Div00.form.org_cd.value + "ª";
        		strLog += "SCHKINDCD=" + this.Div.form.Div00.form.sch_kindcd.value + "ª";
        		strLog += "SCHFUNDCD=" + this.Div.form.Div00.form.sch_fundcd.value + "ª";
        		strLog += "SCHSEXCD=" + this.Div.form.Div00.form.sch_sexcd.value + "ª";
        		strLog += "SCHDNCD=" + this.Div.form.Div00.form.sch_dncd.value + "ª";
        		strLog += "SCHSTATCD=" + this.Div.form.Div00.form.sch_statcd.value + "ª";
        		strLog += "PROVINCECD=" + this.Div.form.Div00.form.provincecd.value + "ª";
        		strLog += "ZIPCODE=" + this.Div.form.Div00.form.zipcode.value + "ª";
        		strLog += "SCHADDR=" + this.Div.form.Div00.form.sch_addr.value + "ª";


        	//alert(4);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "저장", strLog);  //접속기록
        	this.gfnTransaction("saveKediUser",
        						"/swiss/ad/user/saveSchoolInf.do",
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

        	strParam += "SURVSEQ=" + this.Div.form.Div00.form.survseq.value + "ª";
        	strParam += "SURVKINDCD=" + this.Div.form.Div00.form.survkindcd.value + "ª";

        	strParam += "SCHCD=" + this.Div.form.Div00.form.sch_cd.value + "ª";
        	strParam += "ORGCD=" + this.Div.form.Div00.form.org_cd.value + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog("", "AG", this.fv_MENUNM, "삭제", strParam);  //접속기록

        	this.gfnTransaction("deleteKediUser",
        						"/swiss/ad/user/deleteSchoolInf.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };


        // id 생성 알림
        this.btn_sms_noti_onclick = function(obj,e)
        {

        	if(this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition,"USERID") == null || this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition,"USERID") == ""){
        		alert("대상자를 선택후 발송 해 주세요.");
        		return;
        	}

        	var strParam = "";

        	strParam += "USERID="		+ this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition,"USERID") + "ª";
        	strParam += "USERNM="		+ this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition,"USERNM") + "ª";
        	strParam += "EMAILADDR="		+ this.ds_kedi_user.getColumn(this.ds_kedi_user.rowposition,"EMAILADDR") + "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog("", "AG", this.fv_MENUNM, "ID생성 알림", strParam);  //접속기록
        	this.gfnTransaction("sendIdNotice",
        						"/swiss/fp/baserel/sendIdNotice.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
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
        	//alert(1);
        	var isNewRow = nRow == this.oriUserRowCnt;

        	if(isNewRow){
        		this.Div.form.Div00.form.survseq.set_readonly(false);
        		this.Div.form.Div00.form.survkindcd.set_readonly(false);
        		this.Div.form.Div00.form.sch_cd.set_readonly(false);
        		this.Div.form.Div00.form.org_cd.set_readonly(false);
        	}else{
        		this.Div.form.Div00.form.survseq.set_readonly(true);
        		this.Div.form.Div00.form.survkindcd.set_readonly(true);
        		this.Div.form.Div00.form.sch_cd.set_readonly(true);
        		this.Div.form.Div00.form.org_cd.set_readonly(true);
        	}

        	//alert(2);

        /*
        	var tmp2=this.ds_kedi_user.getOrgColumn(nRow,"PROVINCECD");
        	alert("["+tmp2+"]");

        	tmp2=this.ds_kedi_user.getOrgColumn(nRow,"ZIPCODE");
        	alert("["+tmp2+"]");

        	tmp2=this.ds_kedi_user.getOrgColumn(nRow,"SCHADDR");
        	alert("["+tmp2+"]");
        */
        	this.Div.form.Div00.form.survseq.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SURVSEQ"));
        	this.Div.form.Div00.form.survkindcd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SURVKINDCD"));

        	this.Div.form.Div00.form.sch_cd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHCD"));
        	this.Div.form.Div00.form.org_cd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"ORGCD"));
        	this.Div.form.Div00.form.sch_nm.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHNM"));
        	this.Div.form.Div00.form.sch_chinm.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHCHINM"));
        	this.Div.form.Div00.form.sch_engnm.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHENGNM"));

        	this.Div.form.Div00.form.sch_kindcd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHKINDCD"));
        	this.Div.form.Div00.form.sch_fundcd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHFUNDCD"));
        	this.Div.form.Div00.form.sch_sexcd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHSEXCD"));
        	this.Div.form.Div00.form.sch_dncd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHDNCD"));
        	this.Div.form.Div00.form.sch_statcd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHSTATCD"));
        	//alert(0);
        	this.Div.form.Div00.form.provincecd.set_value(this.ds_kedi_user.getOrgColumn(nRow,"PROVINCECD"));
        	//alert(1);
        	this.Div.form.Div00.form.zipcode.set_value(this.ds_kedi_user.getOrgColumn(nRow,"ZIPCODE"));
        	//alert(2);
        	this.Div.form.Div00.form.sch_addr.set_value(this.ds_kedi_user.getOrgColumn(nRow,"SCHADDR"));
        	//alert(3);
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
