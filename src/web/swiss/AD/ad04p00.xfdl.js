(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag04p00");
            this.set_titletext("취업담당자 등록");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(880,610);
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
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"PSNINFOAGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schkind_cd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_school_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","20","100","840","450",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","80","92",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00","80","92","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("학교명");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","450","92","139","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보 동의여부 : ");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm00","175","94","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close_sh1",null,"92","59","28","447",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00","642","96","97","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("미동의");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","80","123",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00","78","123","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("사용자구분");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00","450","123","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("사용자ID");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_user_id","545","124","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00","175","127","130","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_text("취업담당자");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00","80","163",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00","78","163","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("사용자명");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00","450","163","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_text("메일수신동의");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_user_nm","175","165","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00","80","203",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00","78","203","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00","450","203","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("17");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_tel","175","205","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("18");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_phone","545","204","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00_00","78","243","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("20");
            obj.set_text("부서명");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00","450","243","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("21");
            obj.set_text("FAX번호");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_depart","175","245","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("22");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_fax","545","244","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_00","80","283",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00_00_00","78","283","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("25");
            obj.set_text("학교추가1");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_00","450","283","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("26");
            obj.set_text("학교추가2");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm01","175","285","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm02","545","285","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("28");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_01","80","323",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00_00_01","78","323","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("30");
            obj.set_text("학교추가3");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_01","450","323","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("31");
            obj.set_text("학교추가4");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm03","175","325","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("32");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm04","545","325","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("33");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00_00_00_00_02","80","363",null,"30","108",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("34");
            obj.set_cssclass("cls_st_back01");
            obj.set_background("#ffffff");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static08_00_00_00_00_00_00_02","77","363","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("35");
            obj.set_text("학교추가5");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static10_00_00_00_00_00_00_02","450","363","90","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("36");
            obj.set_text("학교추가6");
            obj.set_cssclass("cls_st_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm05","175","365","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("37");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_nm06","545","365","147","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("38");
            obj.set_cssclass("cls_edt_base01");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00",null,"284","59","28","449",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("39");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00_00",null,"324","59","28","449",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("40");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00_00_00",null,"364","59","28","449",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("41");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00_01",null,"284","59","28","79",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("42");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00_01_00",null,"324","59","28","79",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("43");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close00_00_01_00_00",null,"364","59","28","79",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("44");
            obj.set_text("검색");
            obj.set_cssclass("cls_btn_close");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh00_cd","53","398","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("45");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh04_cd","53","418","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("46");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh01_cd","115","398","45","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("47");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh02_cd","171","398","69","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("48");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh03_cd","250","397","60","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("49");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh05_cd","117","421","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("50");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh06_cd","180","421","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("51");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh_temp","704","402","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("52");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new CheckBox("sms_agree","565","168","20","20",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("53");
            obj.set_text("in_chkBox_00");
            obj.set_value("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh00_orgcd","397","396","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("54");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh01_orgcd","457","396","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("55");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh02_orgcd","527","396","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("56");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh03_orgcd","597","396","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("57");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh04_orgcd","397","416","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("58");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh05_orgcd","457","416","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("59");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh06_orgcd","527","416","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("60");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            obj.set_text("77");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("survSeq","140","32","81","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("61");
            obj.set_text("001231");
            obj.set_cssclass("cls_st_base01");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("survNm","280","32","429","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("62");
            obj.set_text("신편");
            obj.set_cssclass("cls_st_base01");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취업담당자 등록");
            obj.set_color("#000000");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\"");
            obj.set_cssclass("title_t2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","401","564","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","615","60","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"60","134","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("선택학교 클리어");
            obj.set_cssclass("cls_btn_save");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",880,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ad04p00.xfdl", function() {


        //기본변수세팅

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fv_MENUNM = "관리자>조사준비>담당자관리(취업담당자)>등록팝업";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var objApp 		= nexacro.getApplication();

        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvSeq"){
        			//this.selectPage();
        			//trace( this.ds_survSeq.saveXML());  // 트레이스

        			//this.cmb_select_survseq.set_index(0);
        			//this.cmb_select_survkind.set_index(0);

        			//this.selectChargeUser();  // 회차 검색 후에 조회

        		}



        		if(serviceID == "saveChargeUser"){
        			//alert(objApp.gds_rtn_result);
        			//alert("id :" + objApp.gds_rtn_result.getColumn(0, "RESULTVAL") );
        			var retVal = objApp.gds_rtn_result.getColumn(0, "RESULTVAL");


        			if (retVal.indexOf("DUP") > -1 ){
        				var dupId  = retVal.split("-");
        				this.alert( dupId[1] + " 아이디 담당자가 " + dupId[2]+ " 학교의 취업담당자로 설정되어 있습니다. " );
        			}

        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="O"){
        				this.alert("중복된 아이디가 존재 합니다.");
        			}
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="N"){
        				this.alert("등록에 실패 했습니다.");
        			}

        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="Y"){
        				this.alert("저장되었습니다.");
        				this.opener.reload();
        				this.close();// 창닫기
        			}


        		}

        		if(serviceID == "getChargeSchoolLise"){
        			var schoolCnt =  this.ds_school_list.getCount();

        			this.fv_SCHCD =  this.ds_school_list.getColumn(0,"SCHCD") ;
        			var SCHNM01 = "";
        			var SCHCD01 = "";
        			var ORGCD01 = "";
        			for(i = 0 ; i < schoolCnt ;i++){
        				SCHNM01 = this.ds_school_list.getColumn(i,"SCHNM") ;
        				SCHCD01 = this.ds_school_list.getColumn(i,"SCHCD") ;
        				ORGCD01 = this.ds_school_list.getColumn(i,"ORGCD") ;
        				 if(i == 0){
        					this.div_00.form.edt_sh_nm00.set_value(SCHNM01);
        					this.div_00.form.edt_sh00_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh00_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 1){
        					this.div_00.form.edt_sh_nm01.set_value(SCHNM01);
        					this.div_00.form.edt_sh01_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh01_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 2){
        					this.div_00.form.edt_sh_nm02.set_value(SCHNM01);
        					this.div_00.form.edt_sh02_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh02_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 3){
        					this.div_00.form.edt_sh_nm03.set_value(SCHNM01);
        					this.div_00.form.edt_sh03_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh03_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 4){
        					this.div_00.form.edt_sh_nm04.set_value(SCHNM01);
        					this.div_00.form.edt_sh04_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh04_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 5){
        					this.div_00.form.edt_sh_nm05.set_value(SCHNM01);
        					this.div_00.form.edt_sh05_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh05_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 6){
        					this.div_00.form.edt_sh_nm06.set_value(SCHNM01);
        					this.div_00.form.edt_sh06_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh06_orgcd.set_value(ORGCD01);
        				 }
        				 if(i == 7){
        					this.div_00.form.edt_sh_nm07.set_value(SCHNM01);
        					this.div_00.form.edt_sh07_cd.set_value(SCHCD01);
        					this.div_00.form.edt_sh07_orgcd.set_value(ORGCD01);
        				 }
        			}
        			//alert(schoolCnt);

        		}



        		if(serviceID == "deleteKediUser"){
        			alert("삭제되었습니다.");
        			this.selectKediUser();
        			this.setBefPos();
        		}


         	}
        }

        this.ag04p00_onload = function(obj,e)
        {
        	//alert(11);
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;  // 로그인 아이디
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(0, "USERSEQ") ;
        	this.fv_SURVSEQ = this.parent.SURVParam[0];
        	this.fv_SURVKINDCD = this.parent.SURVParam[1];
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(0, "SURVOBJ");
        	this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(0, "SURVSTRTDT");
        	this.fv_SURVENDDT = objApp.gds_login_info.getColumn(0, "SURVENDDT");
        	this.fv_SURVNM = this.parent.SURVParam[2];


        	//this.label_surv_info.set_text(this.opener.cmb_select_survseq.value + "(" + this.opener.cmb_select_survkind.text + ")")   ;
        	//this.selectSurvSeq(); // 조사회차

        	this.div_00.form.survSeq.set_text(this.fv_SURVSEQ);
        	this.div_00.form.survNm.set_text(this.fv_SURVNM);

        	if( this.parent.saveType[0] == "U") {

        		this.div_00.form.edt_user_id.set_value(this.parent.saveType[1]);
        		this.div_00.form.edt_user_nm.set_value(this.parent.saveType[2]);
        		this.div_00.form.edt_depart.set_value(this.parent.saveType[3]);
        		this.div_00.form.edt_tel.set_value(this.parent.saveType[4]);
        		this.div_00.form.edt_phone.set_value(this.parent.saveType[5]);
        		this.div_00.form.edt_fax.set_value(this.parent.saveType[6]);

        		this.getChargeSchoolLise();
        	}


        };

        this.getChargeSchoolLise = function(){

        	var USERID = this.parent.saveType[1];

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // ------------------  임시 조사기준
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";  // ------------------  임시 조사종류
        	strParam += "USERID="		+ USERID	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getChargeSchoolLise",
        						"/swiss/ad/user/getChargeSchoolLise.do",
        						"dsSearch=dsSearch",
        						"ds_school_list=dsResult",
        						"",
        						"fnCallback",
        						false);

        }


        this.selectSurvSeq = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // ------------------  임시 조사기준
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD 		+ "ª";  // ------------------  임시 조사종류
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSurvSeq",
        						"/swiss/ad/user/selectSurvSeq.do",
        						"dsSearch=dsSearch",
        						"ds_survSeq=dsResult",
        						"",
        						"fnCallback",
        						false);
        }




        // 학교선택
        this.school_add_00_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "00");
        	   this.schoolAddPop( "00"); //팝업 호출
        };
        this.school_add_01_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "01");
        	   this.schoolAddPop("01"); //팝업 호출
        };
        this.school_add_02_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "02");
        	   this.schoolAddPop("02"); //팝업 호출
        };
        this.school_add_03_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "03");
        	   this.schoolAddPop("03"); //팝업 호출
        };
        this.school_add_04_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "04");
        	   this.schoolAddPop("04"); //팝업 호출
        };
        this.school_add_05_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "05");
        	   this.schoolAddPop("05"); //팝업 호출
        };
        this.school_add_06_onclick = function(obj,e)
        {
        	   this.div_00.form.edt_sh_temp.set_value( "06");
        	   this.schoolAddPop("06"); //팝업 호출
        };



        // 학교선택 팝업
        this.schoolAddPop  = function(popId)
        {
        		var objFrame = new ChildFrame();
        		var arr = new Array();
        		arr["popId"] = [popId, ""];
        		arr["SURVParam"] = [this.fv_SURVSEQ, this.fv_SURVKINDCD];

        		objFrame.init( "ad04p01", null, null, 600, 600);
        		objFrame.set_openalign("center middle");
        		objFrame.set_formurl( "AD::ad04p01.xfdl" );
        		objFrame.showModal("ad04p01" ,this.getOwnerFrame() ,arr );
        };

        this.fn_popReturn = function(popId,SCHNM,SCHCD,ORGCD)
        {
        	//alert(popId);

        	if(popId == "00" ){
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		this.div_00.form.edt_sh_nm00.set_value(SCHNM);
        		this.div_00.form.edt_sh00_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh00_orgcd.set_value(ORGCD);
        	}
        	if(popId == "01" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		this.div_00.form.edt_sh_nm01.set_value(SCHNM);
        		this.div_00.form.edt_sh01_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh01_orgcd.set_value(ORGCD);
        	}
        	if(popId == "02" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		this.div_00.form.edt_sh_nm02.set_value(SCHNM);
        		this.div_00.form.edt_sh02_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh02_orgcd.set_value(ORGCD);
        	}
        	if(popId == "03" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		this.div_00.form.edt_sh_nm03.set_value(SCHNM);
        		this.div_00.form.edt_sh03_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh03_orgcd.set_value(ORGCD);
        	}
        	if(popId == "04" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		this.div_00.form.edt_sh_nm04.set_value(SCHNM);
        		this.div_00.form.edt_sh04_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh04_orgcd.set_value(ORGCD);
        	}
        	if(popId == "05" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh06_cd.value == SCHCD && this.div_00.form.edt_sh06_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		this.div_00.form.edt_sh_nm05.set_value(SCHNM);
        		this.div_00.form.edt_sh05_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh05_orgcd.set_value(ORGCD);
        	}
        	if(popId == "06" ){
        		if(this.div_00.form.edt_sh00_cd.value == SCHCD && this.div_00.form.edt_sh00_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh01_cd.value == SCHCD && this.div_00.form.edt_sh01_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh02_cd.value == SCHCD && this.div_00.form.edt_sh02_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh03_cd.value == SCHCD && this.div_00.form.edt_sh03_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh04_cd.value == SCHCD && this.div_00.form.edt_sh04_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}
        		if(this.div_00.form.edt_sh05_cd.value == SCHCD && this.div_00.form.edt_sh05_orgcd.value == ORGCD){
        			alert(" 학교를 중복 선택 했습니다.");
        			return;
        		}

        		this.div_00.form.edt_sh_nm06.set_value(SCHNM);
        		this.div_00.form.edt_sh06_cd.set_value(SCHCD);
        		this.div_00.form.edt_sh06_orgcd.set_value(ORGCD);
        	}
        };


        // 저장
        this.btn_save_onclick = function(obj,e)
        {

        		//alert(this.sms_agree.value);

        		if(this.div_00.form.edt_sh00_cd.value == null || this.div_00.form.edt_sh00_cd.value == ""){
        			this.alert("학교명을 입력하세요.");
        			this.div_00.form.edt_sh_nm00.setFocus();
        			return;
        		}
        		if(this.div_00.form.edt_user_nm.value == null || this.div_00.form.edt_user_nm.value == ""){
        			alert("성명을 입력하세요.");
        			this.div_00.form.edt_user_nm.setFocus();
        			return;
        		}
        		if(this.div_00.form.edt_user_id.value == null || this.div_00.form.edt_user_id.value == ""){
        			this.alert("사용자ID를 입력하세요.");
        			this.div_00.form.edt_user_id.setFocus();
        			return;
        		}
        		var emailRule = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;  //이메일 형식이 알파벳+숫자@알파벳+숫자.알파벳+숫자 형식이 아닐 경우
        		if(!emailRule.test( this.div_00.form.edt_user_id.value )) {
        			this.alert("이메일 형식이 올바르지 않습니다.");
        					return;
        		}

        		if(this.div_00.form.edt_tel.value == null || this.div_00.form.edt_tel.value == ""){
        			alert("전화번호를 입력하세요.");
        			this.div_00.form.edt_tel.setFocus();
        			return;
        		}

        		if(this.div_00.form.edt_phone.value == null || this.div_00.form.edt_phone.value == ""){
        			this.alert("휴대폰번호를 입력하세요.");
        			this.div_00.form.edt_phone.setFocus();
        			return;
        		}

        		var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
        		if(!regExp.test( this.div_00.form.edt_phone.value  )) {
        			this.alert("핸드폰 형식이 올바르지 않습니다.");
        			return;
        		}



        	if(!this.confirm("저장하시겠습니까?")){
        		return;
        	}

        	//alert(this.opener.cmb_select_survseq.value);
        	var strParam = "";
        	//strParam += "SURVSEQ="		+ this.opener.cmb_select_survseq.value 	+ "ª";
        	//strParam += "SURVKINDCD="		+ this.opener.cmb_select_survkind.value + "ª";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD		+ "ª";	// 공통 세션 데이터셋에 있는 정보 가져오기
        	//strParam += "SURVKINDCD="		+ "4"		+ "ª";	// 사용자 등급

        	//alert(this.parent.saveType[0]);
        	strParam += "saveType="		+ this.parent.saveType[0] + "ª"; // 저장 타입
        	strParam += "USERID="		+ this.parent.saveType[1] + "ª";
        	strParam += "USERGRPTYPE="		+ "4" + "ª";  // 취업담당자


        	if(this.div_00.form.sms_agree.value == true ){
        		strParam += "sms_agree="		+ "1" + "ª";
        	}else{
        		strParam += "sms_agree="		+ "2" + "ª";
        	}


        	strParam += "edt_sh_nm00="		+ this.div_00.form.edt_sh_nm00.value + "ª";
        	strParam += "edt_user_id="		+ this.div_00.form.edt_user_id.value + "ª";
        	strParam += "edt_user_nm="		+ this.div_00.form.edt_user_nm.value + "ª";
        	strParam += "edt_tel="		+ this.div_00.form.edt_tel.value + "ª";
        	strParam += "edt_phone="		+ this.div_00.form.edt_phone.value + "ª";

        	strParam += "edt_depart="		+ this.div_00.form.edt_depart.value + "ª";
        	strParam += "edt_fax="		+ this.div_00.form.edt_fax.value + "ª";
        	strParam += "edt_sh_nm01="		+ this.div_00.form.edt_sh_nm01.value + "ª";
        	strParam += "edt_sh_nm02="		+ this.div_00.form.edt_sh_nm02.value + "ª";
        	strParam += "edt_sh_nm03="		+ this.div_00.form.edt_sh_nm03.value + "ª";

        	strParam += "edt_sh_nm04="		+ this.div_00.form.edt_sh_nm04.value + "ª";
        	strParam += "edt_sh_nm05="		+ this.div_00.form.edt_sh_nm05.value + "ª";
        	strParam += "edt_sh_nm06="		+ this.div_00.form.edt_sh_nm06.value + "ª";

        	strParam += "edt_sh00_cd="		+ this.div_00.form.edt_sh00_cd.value + "ª";
        	strParam += "edt_sh01_cd="		+ this.div_00.form.edt_sh01_cd.value + "ª";
        	strParam += "edt_sh02_cd="		+ this.div_00.form.edt_sh02_cd.value + "ª";
        	strParam += "edt_sh03_cd="		+ this.div_00.form.edt_sh03_cd.value + "ª";
        	strParam += "edt_sh04_cd="		+ this.div_00.form.edt_sh04_cd.value + "ª";
        	strParam += "edt_sh05_cd="		+ this.div_00.form.edt_sh05_cd.value + "ª";
        	strParam += "edt_sh06_cd="		+ this.div_00.form.edt_sh06_cd.value + "ª";


        	strParam += "edt_sh00_orgcd="		+ this.div_00.form.edt_sh00_orgcd.value + "ª";
        	strParam += "edt_sh01_orgcd="		+ this.div_00.form.edt_sh01_orgcd.value + "ª";
        	strParam += "edt_sh02_orgcd="		+ this.div_00.form.edt_sh02_orgcd.value + "ª";
        	strParam += "edt_sh03_orgcd="		+ this.div_00.form.edt_sh03_orgcd.value + "ª";
        	strParam += "edt_sh04_orgcd="		+ this.div_00.form.edt_sh04_orgcd.value + "ª";
        	strParam += "edt_sh05_orgcd="		+ this.div_00.form.edt_sh05_orgcd.value + "ª";
        	strParam += "edt_sh06_orgcd="		+ this.div_00.form.edt_sh06_orgcd.value + "ª";


        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장", strParam);  //접속기록
        	this.gfnTransaction("saveChargeUser",
        						"/swiss/ad/user/saveChargeUser.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);


        };

        this.btn_clear_onclick = function(obj,e)
        {
        					this.div_00.form.edt_sh_nm00.set_value("");
        					this.div_00.form.edt_sh00_cd.set_value("");
        					this.div_00.form.edt_sh00_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm01.set_value("");
        					this.div_00.form.edt_sh01_cd.set_value("");
        					this.div_00.form.edt_sh01_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm02.set_value("");
        					this.div_00.form.edt_sh02_cd.set_value("");
        					this.div_00.form.edt_sh02_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm03.set_value("");
        					this.div_00.form.edt_sh03_cd.set_value("");
        					this.div_00.form.edt_sh03_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm04.set_value("");
        					this.div_00.form.edt_sh04_cd.set_value("");
        					this.div_00.form.edt_sh04_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm05.set_value("");
        					this.div_00.form.edt_sh05_cd.set_value("");
        					this.div_00.form.edt_sh05_orgcd.set_value("");

        					this.div_00.form.edt_sh_nm06.set_value("");
        					this.div_00.form.edt_sh06_cd.set_value("");
        					this.div_00.form.edt_sh06_orgcd.set_value("");


        };


        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        this.Static10_00_00_00_00_onclick = function(obj,e)
        {

        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag04p00_onload,this);
            this.div_00.form.Static10_00_00.addEventHandler("onclick",this.div_00_Static10_00_00_onclick,this);
            this.div_00.form.btn_close_sh1.addEventHandler("onclick",this.school_add_00_onclick,this);
            this.div_00.form.Static10_00_00_00_00.addEventHandler("onclick",this.Static10_00_00_00_00_onclick,this);
            this.div_00.form.btn_close00_00.addEventHandler("onclick",this.school_add_01_onclick,this);
            this.div_00.form.btn_close00_00_00.addEventHandler("onclick",this.school_add_03_onclick,this);
            this.div_00.form.btn_close00_00_00_00.addEventHandler("onclick",this.school_add_05_onclick,this);
            this.div_00.form.btn_close00_00_01.addEventHandler("onclick",this.school_add_02_onclick,this);
            this.div_00.form.btn_close00_00_01_00.addEventHandler("onclick",this.school_add_04_onclick,this);
            this.div_00.form.btn_close00_00_01_00_00.addEventHandler("onclick",this.school_add_06_onclick,this);
            this.div_00.form.survNm.addEventHandler("onclick",this.div_00_survSeq00_onclick,this);
            this.btn_00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_save00.addEventHandler("onclick",this.btn_clear_onclick,this);
        };

        this.loadIncludeScript("ad04p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
