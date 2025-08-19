(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SwissLogin_pop01");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLogin", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Pw\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_GB\" type=\"STRING\" size=\"256\"/><Column id=\"JOJIK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK\" type=\"STRING\" size=\"256\"/><Column id=\"SG_DN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","33","72","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자ID");
            obj.set_font("normal 700 12pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","20","83","72","44",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 ");
            obj.set_font("normal 700 12pt/normal \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"150","82","28","96",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("cls_btn_close");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login",null,"150","82","28","188",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("로그인");
            obj.set_cssclass("cls_btn_login");
            this.addChild(obj.name, obj);

            obj = new Edit("EditId","110","44","207","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cls_edt_base01");
            this.addChild(obj.name, obj);

            obj = new Edit("EditPw","110","94","207","29",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_password("true");
            obj.set_cssclass("cls_edt_base01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("Id","EditId","value","dsLogin","Id");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("Pw","EditPw","value","dsLogin","Pw");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SwissLogin_pop01.xfdl", function() {
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	} else {
        		if(serviceID == "setLoginInfo") {
        			var logInYn = this.dsResult.getColumn(0, "LOGIN_YN"); //로그인 여부
        			var objApp = nexacro.getApplication();
        			//trace(objApp.gds_user_info.saveXML());
        			if(logInYn == "Y"){
        				objApp.alert("로그인이 완료되었습니다.");
        				objApp.mainframe.Frame.TopFrame.form.Form_Top_onload();
        				objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그아웃");
        				this.close();
        			}else{
        				nexacro.getApplication().alert("아이디 혹은 비밀번호 입력이 잘못되었습니다.\n\n확인하시고 다시 입력하여 주시기 바랍니다.");
        				objApp.mainframe.Frame.TopFrame.form.LogInIcon.set_text("로그인");
        			}
        		}
         	}
        };

        this.SwissLogin_pop01_onload = function(obj,e)
        {
        	this.EditId.setFocus();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        this.btn_login_onclick = function(obj,e)
        {
        	this.gfnTransaction("setLoginInfo",
        						"swiss/cmm/setLoginInfo.do",
        						"dsSearch=dsLogin",
        						"dsResult=dsResult gds_user_info=dsResult",
        						"",
        						"fnCallback",
        						false);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SwissLogin_pop01_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };

        this.loadIncludeScript("SwissLogin_pop01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
