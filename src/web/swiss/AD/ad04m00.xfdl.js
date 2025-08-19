(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad04m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_survkind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_ID\">GP</Col><Col id=\"CODE_NM\">졸업자정보</Col></Row><Row><Col id=\"CODE_ID\">FP</Col><Col id=\"CODE_NM\">신입생정보</Col></Row><Row><Col id=\"CODE_ID\">AG</Col><Col id=\"CODE_NM\">졸업후상황</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_charg_user", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"PSNINFOAGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schkind_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_select_gubun", this);
            obj._setContents("<ColumnInfo><Column id=\"select_gubun_id\" type=\"STRING\" size=\"256\"/><Column id=\"select_gubun_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"select_gubun_id\">S</Col><Col id=\"select_gubun_nm\">학교명</Col></Row><Row><Col id=\"select_gubun_id\">U</Col><Col id=\"select_gubun_nm\">취업담당자명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_psninfoagree", this);
            obj._setContents("<ColumnInfo><Column id=\"psninfoagree_id\" type=\"STRING\" size=\"256\"/><Column id=\"psninfoagree_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"psninfoagree_id\"/><Col id=\"psninfoagree_nm\">전체</Col></Row><Row><Col id=\"psninfoagree_id\">1</Col><Col id=\"psninfoagree_nm\">수집동의</Col></Row><Row><Col id=\"psninfoagree_id\">2</Col><Col id=\"psninfoagree_nm\">미동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userYn", this);
            obj._setContents("<ColumnInfo><Column id=\"userYn_id\" type=\"STRING\" size=\"256\"/><Column id=\"userYn_nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userYn_id\">1</Col><Col id=\"userYn_nm\">사용</Col></Row><Row><Col id=\"userYn_id\">2</Col><Col id=\"userYn_nm\">미사용</Col></Row><Row><Col id=\"userYn_id\"/><Col id=\"userYn_nm\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","960",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("담당자관리 (취업담당자)");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","960",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","960",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search00","30","60","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","60","64","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("0");
            obj.set_text("학제구분");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","110","77","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("use_yn","122","110","210","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("userYn_id");
            obj.set_datacolumn("userYn_nm");
            obj.set_innerdataset("ds_userYn");
            obj.set_accessibilitylabel("학제구분");
            obj.set_text("전체");
            obj.set_value("1");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Button("btn_search","1079","60","100","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("sel_scKind","122","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_innerdataset("ds_schkind_cd");
            obj.set_accessibilitylabel("학제구분");
            obj.set_text("전체");
            obj.set_value("-1");
            obj.set_index("0");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_00","540","60","179","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("7");
            obj.set_text("개인정보 수집동의");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","540","110","69","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("cmb_select_gubun","707","110","140","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_codecolumn("select_gubun_id");
            obj.set_datacolumn("select_gubun_nm");
            obj.set_innerdataset("ds_select_gubun");
            obj.set_taborder("4");
            obj.set_accessibilitylabel("구분");
            obj.set_text("학교명");
            obj.set_value("S");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("cmb_psninfoagree","706","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_codecolumn("psninfoagree_id");
            obj.set_datacolumn("psninfoagree_nm");
            obj.set_taborder("2");
            obj.set_innerdataset("ds_psninfoagree");
            obj.set_accessibilitylabel("개인정보수집");
            obj.set_text("전체");
            obj.set_value("");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Edit("sel_keyword","853","110","204","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("9");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_02","25","10","80","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("10");
            obj.set_text("조사기준");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("in_cb_sruvseq","122","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_codecolumn("SURVSEQ");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","540","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("12");
            obj.set_text("조사종류");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","706","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search00.form);
            obj.set_taborder("13");
            obj.set_accessibilitylabel("보관상태");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div_form_sub_search00_form_in_cb_00_innerdataset = new nexacro.NormalDataset("Div_form_sub_search00_form_in_cb_00_innerdataset", obj);
            Div_form_sub_search00_form_in_cb_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search00_form_in_cb_00_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search00.addChild(obj.name, obj);

            obj = new Div("btnArea","30","sub_search00:0","1202","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_charge_add","773","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("담당자 등록");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_00","663","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("12");
            obj.set_text("계정비활성");
            obj.set_cssclass("btn_sty05");
            obj.set_visible("false");
            obj.set_enable("false");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","991","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("Button00_01","882","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("ID생성알림");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_charge_delete","1098","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("4");
            obj.set_text("담당자 삭제");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("true");
            obj.set_enable("true");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","btnArea:5","1200","587",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_charg_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학교코드\"/><Cell col=\"2\" text=\"조사기준\"/><Cell col=\"3\" text=\"학제명\"/><Cell col=\"4\" text=\"학교명\"/><Cell col=\"5\" text=\"본분교\"/><Cell col=\"6\" text=\"사용자구분\"/><Cell col=\"7\" text=\"사용자ID\"/><Cell col=\"8\" text=\"이메일\"/><Cell col=\"9\" text=\"사용자명\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"수집동의\"/><Cell col=\"12\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:SCHCD\"/><Cell col=\"2\" text=\"BIND:SURVSEQ\"/><Cell col=\"3\" text=\"BIND:SCHKINDCDNM\"/><Cell col=\"4\" text=\"BIND:SCHNM\"/><Cell col=\"5\" text=\"BIND:ORGCDNM\"/><Cell col=\"6\" text=\"BIND:USERGRPNM\"/><Cell col=\"7\" text=\"BIND:USERID\"/><Cell col=\"8\" text=\"BIND:USERID_ORG\"/><Cell col=\"9\" text=\"BIND:USERNM\"/><Cell col=\"10\" text=\"BIND:TELNO\"/><Cell col=\"11\" text=\"BIND:AUTHYN\"/><Cell col=\"12\" text=\"BIND:WORKYN_STR\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","Grid00:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_first","450","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("Button00");
            obj.set_cssclass("btn_first");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_before","btn_first:10","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("1");
            obj.set_text("Button01");
            obj.set_cssclass("btn_before");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00_00_00","625","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("btn_pagNum");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_after","Button04_00_00_00:20","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("6");
            obj.set_text("Button02");
            obj.set_cssclass("btn_after");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_last","btn_after:10","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("20");
            obj.set_text("Button03");
            obj.set_cssclass("btn_last");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04","btn_before:20","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("btn_pagNum");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00","565","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_cssclass("btn_pagNum");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("Button04_00_00","595","16","28","28",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("btn_pagNum");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","Grid00:-1150","320","1200","587",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_charg_user");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학교코드\"/><Cell col=\"2\" text=\"조사기준\"/><Cell col=\"3\" text=\"학제명\"/><Cell col=\"4\" text=\"학교명\"/><Cell col=\"5\" text=\"본분교\"/><Cell col=\"6\" text=\"사용자구분\"/><Cell col=\"7\" text=\"사용자ID\"/><Cell col=\"8\" text=\"이메일\"/><Cell col=\"9\" text=\"사용자명\"/><Cell col=\"10\" text=\"전화번호\"/><Cell col=\"11\" text=\"수집동의\"/><Cell col=\"12\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"BIND:SCHCD\"/><Cell col=\"2\" text=\"BIND:SURVSEQ\"/><Cell col=\"3\" text=\"BIND:SCHKINDCDNM\"/><Cell col=\"4\" text=\"BIND:SCHNM\"/><Cell col=\"5\" text=\"BIND:ORGCDNM\"/><Cell col=\"6\" text=\"BIND:USERGRPNM\"/><Cell col=\"7\" text=\"BIND:USERID\"/><Cell col=\"8\" text=\"BIND:USERID_ORG\"/><Cell col=\"9\" text=\"BIND:USERNM_ORG\"/><Cell col=\"10\" text=\"BIND:TELNO_ORG\"/><Cell col=\"11\" text=\"BIND:AUTHYN\"/><Cell col=\"12\" text=\"BIND:WORKYN_STR\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,970,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad04m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad04m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad04m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";
        this.fv_SURVOBJ = "";
        this.fv_SURVSTRTDT = "";
        this.fv_SURVENDDT = "";
        this.fv_SURVNM = "";

        this.fv_MENUNM = "관리자>조사준비>담당자관리(취업담당자)";

        this.fnCallback = function(serviceID, errCD, errMSG){

        	var objApp 		= nexacro.getApplication();
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        		//trace(this.dsSurvInfo.saveXML());
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        				//if(v_survseq.substr(0,2) < 20) this.dsSurvInfo.deleteRow(i);
        			}
        			this.Div.form.sub_search00.form.in_cb_sruvseq.set_index(0);
        			this.fv_SURVSEQ = this.Div.form.sub_search00.form.in_cb_sruvseq.value;
        			this.fv_SURVNM = this.dsSurvInfo.getColumn(0,"SURVNM");
        		}

        		/*
        		if(serviceID == "selectSurvSeq"){
        			//this.selectPage();
        			//trace( this.ds_survSeq.saveXML());  // 트레이스

        			this.cmb_select_survseq.set_index(0);
        			this.cmb_select_survkind.set_index(0);
        		}  */

        		if(serviceID == "selectCharge"){
        			trace( this.ds_charg_user.saveXML());  // 트레이스
        		}

        		if(serviceID == "saveKediUser"){
        			alert("저장되었습니다.");
        			this.users_id.set_readonly(true);  // 속성변경
        			this.setBefPos();
        		}

        		if(serviceID == "deleteKediUser"){
        			this.ds_charg_user.deleteRow(this.ds_charg_user.rowposition);
        			this.ds_charg_user.setColumn(0,"WORKYN_STR","미사용");
        			alert("비활성화 처리 되었습니다.");
        			//this.selectKediUser();
        			//this.setBefPos();
        		}

        		if(serviceID == "realdeleteKediUser"){
        			this.ds_charg_user.deleteRow(this.ds_charg_user.rowposition);
        			//this.ds_charg_user.setColumn(0,"WORKYN_STR","미사용");
        			alert("삭제 되었습니다.");
        			//this.selectKediUser();
        			//this.setBefPos();
        		}

        		if(serviceID == "selectSchkindCd"){
        			this.ds_schkind_cd.insertRow(0);
        			this.ds_schkind_cd.setColumn(0,"CD","");
        			this.ds_schkind_cd.setColumn(0,"CDNM","전체");
        			this.Div.form.sub_search00.form.sel_scKind.set_index(0);  // 첫번쩨 인덱스 선택
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

        this.ad04m00_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	/*조사종류 default값 셋팅을 위한 사항(우선 담당자에만 적용) 2021-01-29 yyz*/
        	var idx = 0;                                                                 // 조사종류에 대한 선택 값
        	var objDate = new nexacro.Date();                                            // 현재날짜 object 생성
        	var toDay = objDate.toString().substr(0,8);                                  // 현재날짜 문자열로 변경 YYYYMMDD
        	var chkMonth = toDay.substr(4,2);                                            // 현재 월
        	var fpNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);         // FP RowNum
        	var agNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);         // AG RowNum
        	var gpNum = objApp.gds_login_info.findRowExpr("SURVKINDCD=='GP'",0);         // GP RowNum
        	var fp_SURVSTRTDT = objApp.gds_login_info.getColumn(fpNum, "SURVSTRTDT");    // 신입생정보 조사시작일
        	var fp_SURVENDDT  = objApp.gds_login_info.getColumn(fpNum, "SURVENDDT");     // 신입생정보 조사종료일
        	var ag_SURVSTRTDT = objApp.gds_login_info.getColumn(agNum, "SURVSTRTDT");    // 졸업후상황 조사시작일
        	var ag_SURVENDDT  = objApp.gds_login_info.getColumn(agNum, "SURVENDDT");     // 졸업후상황 조사종료일
        	var gp_SURVSTRTDT = objApp.gds_login_info.getColumn(gpNum, "SURVSTRTDT");    // 졸업생정보 조사시작일
        	var gp_SURVENDDT  = objApp.gds_login_info.getColumn(gpNum, "SURVENDDT");     // 졸업생정보 조사종료일

        	if(chkMonth == "01"||chkMonth == "02"){        // 현재 월이 1월, 2월일때 기본 FP setting
        		idx = fpNum;
        	}else if(chkMonth == "07"||chkMonth == "08"){  // 현재 월이 7월, 8월일때 기본 AG setting
        		idx = agNum;
        	}else{                                         // 현재 월이 3월, 4월, 5월, 6월, 9월, 10월, 11월 12월 일때 GP setting
        		idx = gpNum;
        	}

        	/*조사기간에 따라 조사종류 default값 셋팅 default값 우선 순위는 조사기간 > 월별*/

        	if(fp_SURVSTRTDT <= toDay && fp_SURVENDDT >= toDay){
        		idx = fpNum;
        	}
        	if(ag_SURVSTRTDT <= toDay && ag_SURVENDDT >= toDay){
        		idx = agNum;
        	}
        	if(gp_SURVSTRTDT <= toDay && gp_SURVENDDT >= toDay){
        		idx = gpNum;
        	}
        	/*조사종류 default값 셋팅*/

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(idx, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");

        	//alert(this.fv_USERID);

        	if( this.fv_USERID == "" || this.fv_USERID == null ){
        		this.alert("로그인 후 이용 해 주세요.");
        		this.go("HP::hp08m00.xfdl");
        		return;
        	}

        	//this.selectSurvSeq(); // 조사회차
        	this.Div.form.sub_search00.form.in_cb_00.set_index(idx);

        	this.lfn_selectSurvInfo(); // 조사회차 (조사결과 것 사용 2021-01-20 yyz)
        	this.selectSchkindCd(); // 학제구분

        	//this.selectChargeUser();  // 취업담당자 조회

        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	if(this.fv_USERGRPTYPE=="1"){
        		//this.Div.form.btnArea.form.btn_charge_delete.set_enable(true);
        		//this.Div.form.btnArea.form.btn_charge_delete.set_visible(true);
        	}else{
        		//this.Div.form.btnArea.form.btn_charge_delete.set_enable(false);
        		//this.Div.form.btnArea.form.btn_charge_delete.set_visible(false);
        	}

        };

        //회차
        this.selectSurvSeq = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";	// 공통 세션 데이터셋에 있는 정보 가져오기


        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSurvSeq",
        						"/swiss/ad/user/selectSurvSeq.do",
        						"dsSearch=dsSearch",
        						"ds_survSeq=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        //학제
        this.selectSchkindCd = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSchkindCd",
        						"/swiss/ad/user/selectSchkindCd.do",
        						"dsSearch=dsSearch",
        						"ds_schkind_cd=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 담당자 목록
        this.selectChargeUser = function(){
        	//alert(1);

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";
        	strParam += "sel_scKind="		+ this.Div.form.sub_search00.form.sel_scKind.value 		+ "ª";  // 학제
        	strParam += "cmb_psninfoagree="		+ this.Div.form.sub_search00.form.cmb_psninfoagree.value 		+ "ª";	// 개인정보 수집동의
        	strParam += "use_yn="		+ this.Div.form.sub_search00.form.use_yn.value 		+ "ª";	// 사용여부
        	strParam += "cmb_select_gubun="		+ this.Div.form.sub_search00.form.cmb_select_gubun.value 		+ "ª";	// 구분
        	strParam += "sel_keyword="		+ this.Div.form.sub_search00.form.sel_keyword.value 		+ "ª";	// 구분 값

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("selectCharge",
        						"/swiss/ad/user/selectChargeUserList.do",
        						"dsSearch=dsSearch",
        						"ds_charg_user=dsResult",
        						"",
        						"fnCallback",
        						false);
        }


        // 사용자 생성 팝업
        this.charge_add_onclick = function(obj,e)
        {

        		var objFrame = new ChildFrame();
        		var arr = new Array();
        		arr["saveType"] = ["I", ""];
        		arr["SURVParam"] = [this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_SURVNM];


        		objFrame.init( "ad04p00", null, null, 800, 700);
        		objFrame.set_openalign("center middle");
        		objFrame.set_formurl( "AD::ad04p00.xfdl" );
        		objFrame.showModal("ad04p00" ,this.getOwnerFrame() ,arr );

        };



        // 그리드 셀  클릭시 이벤트
        this.grd_charg_user_oncellclick = function(obj, e)
        {

        		var USERID = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERID");
        		var USERNM = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERNM");
        		var DEPTNM = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"DEPTNM");
        		var TELNO = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"TELNO");
        		var MOBILENO = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"MOBILENO");
        		var FAXNO = this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"FAXNO");

        		var objFrame = new ChildFrame();
        		var arr = new Array();
        		arr["saveType"] = ["U", USERID,USERNM,DEPTNM,TELNO,MOBILENO,FAXNO];
        		arr["SURVParam"] = [this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_SURVNM];

        		objFrame.init( "ad04p00", null, null, 700, 600);
        		objFrame.set_openalign("center middle");
        		objFrame.set_formurl( "AD::ad04p00.xfdl" );
        		objFrame.showModal("ad04p00" ,this.getOwnerFrame() ,arr );

        };

        // 담당자 삭제
        this.btn_del_onclick = function(obj,e)
        {
        	if(!this.confirm(" 취업 담당자는 다음조사에서도 지속적으로 사용 됩니다. \n 그래도 선택된 행을 삭제하시겠습니까?")){
        		return;
        	}

        	/*
        	if(this.ds_charg_user.getRowType(this.ds_charg_user.rowposition) == 2){
        		this.ds_charg_user.deleteRow(this.ds_charg_user.rowposition);
        		alert("삭제되었습니다.");
        		return;
        	}*/

        	var strParam = "";
        	//strParam += "SURVSEQ="		+ '211231' 		+ "ª";
        	//strParam += "SURVKINDCD="		+ 'GP' 		+ "ª";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID=" 		+ this.ds_charg_user.getColumn(this.ds_charg_user.rowposition, "USERID") + "ª";


        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "계정비활성", strParam);  //접속기록
        	this.gfnTransaction("deleteKediUser",
        						"/swiss/ad/user/deleteKediUser.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);

        };


        // id 생성 알림
        this.btn_sms_noti_onclick = function(obj,e)
        {

        	if(this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERID") == null || this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERID") == ""){
        		alert("대상자를 선택후 발송 해 주세요.");
        		return;
        	}


        	var strParam = "";

        	strParam += "USERID="		+ this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERID") + "ª";
        	strParam += "USERNM="		+ this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"USERNM") + "ª";
        	strParam += "EMAILADDR="		+ this.ds_charg_user.getColumn(this.ds_charg_user.rowposition,"EMAILADDR") + "ª";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	//strParam += "SCHCD="		+ this.Div.form.SCHCD.value		+ "ª";
        	//strParam += "ORGCD="		+ this.Div.form.ORGCD.value		+ "ª";

        	//alert(this.Div.form.Div00.form.USERNM.value);
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "ID생성알림", strParam);  //접속기록
        	this.gfnTransaction("sendIdNotice",
        						"/swiss/fp/baserel/sendIdNotice.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };

        // 조사회차 (조사종류조회 2021-01-20 yyz)
        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/surv/selectSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsSurvInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_sub_search00_in_cb_00_onitemchanged = function(obj,e)
        {
        	this.fv_SURVKINDCD = obj.value;
        	this.lfn_selectSurvInfo(); // 조사종류에 따라 조사기준 일자 조회 2021-01-20 yyz
        	this.selectSchkindCd(); // 조사기준에 따라 학제구분 변경 2021-01-20 yyz
        };

        // 조사기준에 따라 학제구분 변경 2021-01-20 yyz
        this.Div_sub_search00_in_cb_sruvseq_onitemchanged = function(obj,e)
        {
        	this.fv_SURVSEQ = obj.value;
        	this.fv_SURVNM = this.dsSurvInfo.getColumn(e.postindex,"SURVNM");

        	this.selectSchkindCd();
        };

        // 누락된 기능 복구 2021-01-20 yyz, utlf_securityExcelDownload(보안다운로드 적용 2021-03-12)
        this.Div_btnArea_Button00_01_00_onclick = function(obj,e)
        {
        	var strLog = "SURVSEQ=" + this.fv_SURVSEQ
        				+ ",SURVKINDCD=" + this.fv_SURVKINDCD;
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strLog);  //접속기록
        	this.utlf_securityExcelDownload("담당자관리",this.Div.form.Grid00_00,this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
        }

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.selectChargeUser();
        	}
        };

        this.charge_delete_onclick = function(obj,e)
        {
        /*
        	if(this.ds_charg_user.getColumn(this.ds_charg_user.rowposition, "WORKYN_STR")!="미사용"){
        		alert("활성화된 계정은 바로 삭제할수 없습니다.\n비활성화 후 다시 시도해주세요");
        		return false;
        	}
        */

        	if(!this.confirm(" 담당자를 삭제하시면 더 이상 접근이 불가능합니다. \n 그래도 선택된 행을 삭제하시겠습니까?")){
        		return;
        	}

        	/*
        	if(this.ds_charg_user.getRowType(this.ds_charg_user.rowposition) == 2){
        		this.ds_charg_user.deleteRow(this.ds_charg_user.rowposition);
        		alert("삭제되었습니다.");
        		return;
        	}*/

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID=" 		+ this.ds_charg_user.getColumn(this.ds_charg_user.rowposition, "USERID_ORG") + "ª";

        	//alert("strParam="+strParam);
        	//return false;

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "계정비활성", strParam);  //접속기록
        	this.gfnTransaction("realdeleteKediUser",
        						"/swiss/ad/user/realdeleteKediUser.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad04m00_onload,this);
            this.Div.form.sub_title_wrap.form.sub_title.addEventHandler("onclick",this.Div_sub_title_wrap_sub_title_onclick,this);
            this.Div.form.sub_search00.form.btn_search.addEventHandler("onclick",this.selectChargeUser,this);
            this.Div.form.sub_search00.form.sel_keyword.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search00.form.in_cb_sruvseq.addEventHandler("onitemchanged",this.Div_sub_search00_in_cb_sruvseq_onitemchanged,this);
            this.Div.form.sub_search00.form.in_cb_00.addEventHandler("onitemchanged",this.Div_sub_search00_in_cb_00_onitemchanged,this);
            this.Div.form.btnArea.form.btn_charge_add.addEventHandler("onclick",this.charge_add_onclick,this);
            this.Div.form.btnArea.form.Button00_00.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Div.form.btnArea.form.Button00_01_00.addEventHandler("onclick",this.Div_btnArea_Button00_01_00_onclick,this);
            this.Div.form.btnArea.form.Button00_01.addEventHandler("onclick",this.btn_sms_noti_onclick,this);
            this.Div.form.btnArea.form.btn_charge_delete.addEventHandler("onclick",this.charge_delete_onclick,this);
            this.Div.form.Grid00.addEventHandler("oncelldblclick",this.grd_charg_user_oncellclick,this);
            this.Div.form.Grid00_00.addEventHandler("oncellclick",this.grd_charg_user_oncellclick,this);
        };

        this.loadIncludeScript("ad04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
