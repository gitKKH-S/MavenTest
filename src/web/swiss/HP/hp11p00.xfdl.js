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
            this.set_titletext("비밀번호 변경");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(670,430);
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
            obj = new Div("div_00","20","60","630","280",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_sh04_cd","53","418","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh05_cd","117","421","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_sh06_cd","180","421","57","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cls_edt_base01");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("curr_pwd","185","50","199","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("15");
            obj.set_password("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00","42","57","123","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("현재 비밀번호");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","42","130","123","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("새 비밀번호");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("new_pwd","185","123","199","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("15");
            obj.set_password("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01","409","130","210","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("※ 특수문자,숫자,영문조합  8~15자");
            obj.set_font("12px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCGreen");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","42","200","123","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("새 비밀번호 확인");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("new_pwd_re","185","193","199","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_accessibilitylabel("성명");
            obj.set_maxlength("15");
            obj.set_password("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_03_01_00","409","200","210","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_text("※ 특수문자,숫자,영문조합  8~15자");
            obj.set_font("12px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\"");
            obj.set_cssclass("fontCGreen");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","400","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호변경");
            obj.set_color("#000000");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\"");
            obj.set_cssclass("title_t2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","341","367","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","236","367","84","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("변경");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",670,430,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("hp11p00.xfdl", function() {


        //기본변수세팅

        this.fv_USERID = "";
        this.fv_USERSEQ = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "";

        this.fv_MENUNM = "마이페이지>비밀번호변경";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	var objApp 		= nexacro.getApplication();

        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "updateMypwd"){
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="Y"){
        				this.alert("수정되었습니다.");
        				this.close();// 창닫기
        			}
        			if( objApp.gds_rtn_result.getColumn(0, "RESULTVAL") =="D"){
        				this.alert("현재 비밀번호가 일치하지 않습니다.");
        			}
        		}


         	}
        }

        this.ag04p00_onload = function(obj,e)
        {
        	//alert(11);
        	var objApp 		= nexacro.getApplication();
        	this.fv_USERID = objApp.gds_login_info.getColumn(0, "USERID") ;  // 로그인 아이디
        	this.fv_USERSEQ = objApp.gds_login_info.getColumn(0, "USERSEQ") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(0, "SURVKINDCD");

        };

        // 저장
        this.btn_save_onclick = function(obj,e)
        {

        		if(this.div_00.form.curr_pwd.value == null || this.div_00.form.curr_pwd.value == ""){
        			this.alert("현재 비밀번호를 입력하세요.");
        			this.div_00.form.curr_pwd.setFocus();
        			return;
        		}

        		if(this.div_00.form.new_pwd.value == null || this.div_00.form.new_pwd.value == ""){
        			this.alert("새 비밀번호를 입력하세요.");
        			this.div_00.form.new_pwd.setFocus();
        			return;
        		}

        		if(this.div_00.form.new_pwd_re.value == null || this.div_00.form.new_pwd_re.value == ""){
        			this.alert("새 비밀번호 확인을 입력하세요.");
        			this.div_00.form.new_pwd_re.setFocus();
        			return;
        		}

        		var regType1 = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+|=\-?])[A-Za-z\d~!@#$%^&*()_+|=\-?]{8,15}/;

        		if(!regType1.test( this.div_00.form.new_pwd.value )) {
        			this.alert("새 비밀번호를 특수문자,숫자,영문조합  8~15자로 등록 해 주세요.");
        			return;
        		}

        		//if(!regType1.test( this.div_00.form.new_pwd_re.value )) {
        		//	this.alert("새 비밀번호 확인을 숫자,영문,특수문자조합  8~15자로 등록 해 주세요.");
        		//	return;
        		//}

        		if(this.div_00.form.new_pwd.value != this.div_00.form.new_pwd_re.value){
        			this.alert("새 비밀번호와 확인이 일치하지 않습니다.");
        			this.div_00.form.new_pwd.setFocus();
        			return;
        		}


        	if(!this.confirm("수정하시겠습니까?")){
        		return;
        	}

        	//alert(this.opener.cmb_select_survseq.value);
        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";  // 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD		+ "ª";	// 공통 세션 데이터셋에 있는 정보 가져오기
        	strParam += "curr_pwd="		+ this.div_00.form.curr_pwd.value		+ "ª";
        	strParam += "new_pwd="		+ this.div_00.form.new_pwd.value		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog("", "AG", this.fv_MENUNM, "변경(비밀번호)", "");  //접속기록
        	this.gfnTransaction("updateMypwd",
        						"/swiss/hp/my/updateMypwd.do",
        						"dsSearch=dsSearch",
        						"gds_rtn_result=dsResult",
        						"",
        						"fnCallback",
        						false);

        };




        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag04p00_onload,this);
            this.div_00.form.Static00.addEventHandler("onclick",this.div_00_Static00_onclick,this);
            this.div_00.form.Static00_00.addEventHandler("onclick",this.div_00_Static00_onclick,this);
            this.div_00.form.Static00_00_00.addEventHandler("onclick",this.div_00_Static00_onclick,this);
            this.btn_00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_01.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("hp11p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
