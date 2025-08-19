(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMPSComment");
            this.set_titletext("다운로드 사유");
            this.set_cssclass("btn_sty08");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TRSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLACE\" type=\"STRING\" size=\"16\"/><Column id=\"MAXCNT\" type=\"STRING\" size=\"32\"/><Column id=\"RCSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RCEDATE\" type=\"STRING\" size=\"32\"/><Column id=\"CHKACTIVE\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRAININGSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gds_accesslog2", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIP\" type=\"STRING\" size=\"256\"/><Column id=\"USERGRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"ALLMENUNM\" type=\"STRING\" size=\"256\"/><Column id=\"ACTION\" type=\"STRING\" size=\"256\"/><Column id=\"STRPARAM\" type=\"STRING\" size=\"256\"/><Column id=\"STRCOMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","20","20","690","240",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Static("label_00","19","10","660","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("다운로드 사유를 입력 저장하셔야 진행이 가능합니다.");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_close","410","275","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","290","275","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty08");
            this.addChild(obj.name, obj);

            obj = new TextArea("insComment","30","61","670","189",null,null,null,null,null,null,this);
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",730,320,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.in_survseq","value","dsMain","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.in_tredate","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_00.form.in_survkindcd","value","dsMain","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","insComment","value","dsMngreportMemo","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CMPSComment.xfdl","CM::common.xjs");
        this.addIncludeScript("CMPSComment.xfdl","CM::utl_script.xjs");
        this.registerScript("CMPSComment.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_SCHCD =  "";
        this.fv_ORGCD =  "";
        this.fv_SURVOBJ =  "";
        this.fv_SURVSTRTDT =  "";
        this.fv_SURVENDDT =  "";
        this.fv_SURVNM =  "";
        this.fv_SURVPROSTATUSCD = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";
        this.fv_SURVNM = "";

        this.fv_MENUNM = "졸업후상황>결과조회>다운로드사유";

        var objApp = nexacro.getApplication();


        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID=="setAccessLog2"){
        			this.parent.opener.chkRtn("save");
        			this.close();
        		}
         	}
        }

        this.btn_save_onclick = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        	//var v_SURVSEQ = this.dsMain.getColumn(0,"SURVYEAR").substring(2,4) + "1231";
        	//this.dsMain.setColumn(0,"SURVSEQ", v_SURVSEQ)
        /*
        	var strLog = "SURVSEQ=" + this.dsMain.getColumn(0, "SURVSEQ")
        				+ ",SURVKINDCD=" + this.dsMain.getColumn(0, "SURVKINDCD")
        				+ ",TITLE=" + this.dsMain.getColumn(0, "TITLE");
        */
        	//alert(this.dsMain.saveXML());

        	//this.dsMain.getColumn(0, "SURVSEQ"),
        	//this.dsMain.getColumn(0, "SURVKINDCD"),
        	//this.fv_MENUNM,
        	//"파일저장"

        	var strParam = "";
        		strParam += "SCHCD="		    + this.fv_SCHCD 		+ "ª";
        		strParam += "ORGCD="		    + this.fv_ORGCD		    + "ª";
        		strParam += "USERID="		    + this.fv_USERID		+ "ª";
        		strParam += "USERGRPTYPE="	    + this.fv_USERGRPTYPE 	+ "ª";

        	var loguserid = objApp.gds_login_info.getColumn(idx, "USERID");
        	var logusernm = objApp.gds_login_info.getColumn(idx, "USERNM");
        	var logusergrptype = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	var logschcd = objApp.gds_param.getColumn(0, "SCHCD");
        	var logorgcd = objApp.gds_param.getColumn(0, "ORGCD");
        	var logschnm = objApp.gds_param.getColumn(0, "SCHNM");
        	var logsurvseq = this.dsMain.getColumn(0, "SURVSEQ");
        	var logsurvkindcd = this.dsMain.getColumn(0, "SURVKINDCD");
        	var logmenunm = this.fv_MENUNM;
        	var logaction = "파일저장";
        	var logparam = strParam;
        	var logcomment = this.insComment.text;
        	//alert("strParam="+strParam);
        	//return false;
        	//alert('저장되었습니다.');

        	//var objParam = "complete";
        	//this.owner.rtnVal.value="save";

        	//this.setAccessLog(this.dsMain.getColumn(0, "SURVSEQ"), this.dsMain.getColumn(0, "SURVKINDCD"), this.fv_MENUNM, "파일저장", strParam);  //접속기록

        	//var objApp 		= nexacro.getApplication();
        	//var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='"+steSurvKindCd+"'",0);

        	alert(0);
        	this.gds_accesslog2.setColumn(0,"USERID"          ,loguserid);
        	alert(1);
        	this.gds_accesslog2.setColumn(0,"USERNM"          ,logusernm);
        	alert(2);
        	this.gds_accesslog2.setColumn(0,"USERGRPTYPE"     ,logusergrptype);
        	this.gds_accesslog2.setColumn(0,"SCHCD"           ,logschcd);
        	this.gds_accesslog2.setColumn(0,"ORGCD"           ,logorgcd);
        	this.gds_accesslog2.setColumn(0,"SCHNM"           ,logschnm);
        	this.gds_accesslog2.setColumn(0,"SURVSEQ"         ,logsurvseq);
        	this.gds_accesslog2.setColumn(0,"SURVKINDCD"      ,logsurvkindcd);
        	this.gds_accesslog2.setColumn(0,"ALLMENUNM"       ,logmenunm);
        	this.gds_accesslog2.setColumn(0,"ACTION"          ,logaction);
        	this.gds_accesslog2.setColumn(0,"STRPARAM"        ,logparam);
        	this.gds_accesslog2.setColumn(0,"STRCOMMENT"        ,logcomment);
        	alert(3);

        	this.gfnTransaction("setAccessLog2",
        					"swiss/cm/setAccessLog2.do",
        					"dsSearch=gds_accesslog2",
        					"",
        					"",
        					"fnCallback",
        					false);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.CMPSComment_onload = function(obj,e)
        {
        //alert("str");
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        //alert("idx="+idx);
        	this.fv_USERID     = objApp.gds_login_info.getColumn(idx, "USERID") ;

        	//alert("userid="+this.fv_USERID);

        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_CHANGEYN   = objApp.gds_login_info.getColumn(0, "CHANGEYN");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");

        	this.fv_SCHCD      = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD      = objApp.gds_param.getColumn(0, "ORGCD");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CMPSComment_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };

        this.loadIncludeScript("CMPSComment.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
