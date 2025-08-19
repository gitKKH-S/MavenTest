(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag01p00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvKindCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","20","100","690","430",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","140","18","160","35",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.getSetter("validate").set("조사년도,required:true,max:9999,min:2021,digits");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00","45","20","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("조사년도");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00","379","20","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("조사구분");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01","45","70","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("조사시작일");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00_00","379","70","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("조사종료일");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_00_01_00","140","168","489","35",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00","45","170","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("조사명");
            this.div_00.addChild(obj.name, obj);

            obj = new TextArea("in_txtEdit_00","140","215","489","157",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00_00","45","292","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("특이사항");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","140","70","160","33",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00_00","470","70","160","33",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","470","21","160","31",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_00_form_in_cb_00_innerdataset = new nexacro.NormalDataset("div_00_form_in_cb_00_innerdataset", obj);
            div_00_form_in_cb_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(div_00_form_in_cb_00_innerdataset);
            obj.set_text("in_cb_00");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_01","45","382","99","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("조사생성여부");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","140","380","162","35",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00_01","45","120","79","26",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_text("조사대상");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_03","140","118","490","35",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sub_title","20","0","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조사등록");
            obj.set_color("#000000");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\"");
            obj.set_cssclass(" title_t2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","320","545","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","500","62","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조사생성");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","610","62","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",730,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.in_edit_00","value","dsMain","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.in_calr_00","value","dsMain","SURVSTRTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.in_calr_00_00","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.in_edit_00_01_00","value","dsMain","SURVNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.in_txtEdit_00","value","dsMain","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_00.form.in_cb_00","value","dsMain","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_00.form.in_edit_01","value","dsMain","SURVSTATUSCDNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_00.form.in_edit_03","value","dsMain","SURVOBJ");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad01p00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad01p00.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fv_MENUNM = "관리자>조사준비>조사등록>등록팝업"

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "mergeSurvReg"){
        			alert('저장되었습니다.');
        			this.opener.lfn_selectSurvInfo();
        		}
        		if(serviceID == "createSurvReg"){
        			this.opener.lfn_selectSurvInfo();
        			this.dsMain.setColumn(0,"SURVSTATUSCDNM","생성");
        			this.dsMain.setColumn(0,"SURVSTATUSCD","2");
        			alert('조사가 생성되었습니다.');
        		}

         	}
        }

        this.ag01p00_onload = function(obj,e)
        {
        	var objParam  = this.parent.param1;
        	var strRowPosition  = this.parent.param2;
        	if( "U" == this.parent.param3){
        		this.div_00.form.in_edit_00.set_enable(false) ;
        		this.div_00.form.in_cb_00.set_enable(false);
        		this.dsMain.clearData();
        		var nrow = this.dsMain.addRow();
        		this.dsMain.copyRow(nrow,objParam,strRowPosition);
        	}else{
        		this.dsMain.addRow();
        	}
        };


        this.div_00_btn_01_onclick = function(obj,e)
        {
        	if(this.dsMain.getColumn(0,"SURVSTATUSCD") == "2"){
        		this.alert("조사가 이미 생성되었습니다.");
        		return;
        	}
        	if(!this.utlf_validate(this.div_00)) return;
        	var v_SURVSEQ = this.dsMain.getColumn(0,"SURVYEAR").substring(2,4) + "1231";
        	this.dsMain.setColumn(0,"SURVSEQ", v_SURVSEQ)
        	//trace(this.div_00.form.in_edit_00.value );
        	//trace(this.dsMain.saveXML());

        	var strLog = "SURVSEQ=" + v_SURVSEQ
        				 + ",SURVKINDCD=" + this.dsMain.getColumn(0,"SURVKINDCD")
        				 + ",SURVNM=" + this.dsMain.getColumn(0,"SURVNM");

        	this.setAccessLog(v_SURVSEQ, this.dsMain.getColumn(0,"SURVKINDCD"), this.fv_MENUNM, "저장", strLog);  //접속기록
        	this.gfnTransaction("mergeSurvReg",
        						"/swiss/ad/surv/mergeSurvReg.do",
        						"dsSearch=dsMain",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.div_00_btn_00_onclick = function(obj,e)
        {
        	this.close();
        };


        this.div_00_btn_02_onclick = function(obj,e)
        {
        	if(false){
        		this.alert("조사생성 기능은 변경중이어서 이용하실 수 없습니다.");
        		return;
        	}
        	if(this.dsMain.getColumn(0,"SURVSTATUSCD") == "2"){
        		this.alert("조사가 이미 생성되었습니다.");
        		return;
        	}

        	var strLog = "SURVSEQ=" + this.dsMain.getColumn(0,"SURVSEQ")
        			 + ",SURVKINDCD=" + this.dsMain.getColumn(0,"SURVKINDCD")
        			 + ",SURVNM=" + this.dsMain.getColumn(0,"SURVNM");
        	this.setAccessLog(this.dsMain.getColumn(0,"SURVSEQ"), this.dsMain.getColumn(0,"SURVKINDCD"), this.fv_MENUNM, "저장", strLog);  //접속기록
        	this.gfnTransaction("createSurvReg",
        						"/swiss/ad/surv/createSurvReg.do",
        						"dsSearch=dsMain",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag01p00_onload,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
            this.btn_02.addEventHandler("onclick",this.div_00_btn_02_onclick,this);
            this.btn_01.addEventHandler("onclick",this.div_00_btn_01_onclick,this);
        };

        this.loadIncludeScript("ad01p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
