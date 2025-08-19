(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag01m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(730,470);
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
            
            // UI Components Initialize
            obj = new Div("div_00","20","100","690","310",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_cssclass("divFormR");
            this.addChild(obj.name, obj);

            obj = new Edit("SURVYEAR","138","20","162","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.getSetter("validate").set("조사년도,required:true,max:9999,min:2021,digits");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00","49","20","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("조사년도");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00","379","20","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("조사구분");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01","49","100","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("연수시작일");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00_00","379","100","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("연수종료일");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("TITLE","138","60","492","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00","49","60","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("연수명");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("TRSDATE","139","100","160","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("TREDATE","469","100","160","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("SURVKINDCD","467","20","160","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_00_form_SURVKINDCD_innerdataset = new nexacro.NormalDataset("div_00_form_SURVKINDCD_innerdataset", obj);
            div_00_form_SURVKINDCD_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GP</Col><Col id=\"datacolumn\">졸업생정보</Col></Row><Row><Col id=\"codecolumn\">FP</Col><Col id=\"datacolumn\">신입생정보</Col></Row><Row><Col id=\"codecolumn\">AG</Col><Col id=\"datacolumn\">졸업후상황</Col></Row></Rows>");
            obj.set_innerdataset(div_00_form_SURVKINDCD_innerdataset);
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00_02","49","140","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_text("장소");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("PLACE","138","140","492","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00_02_00","49","180","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("최대인원");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("MAXCNT","138","180","492","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_01","49","220","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_text("신청시작일");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("RCSDATE","139","220","160","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_00_00_00","379","220","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_text("신청종료일");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("RCEDATE","469","220","160","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("17");
            this.div_00.addChild(obj.name, obj);

            obj = new CheckBox("CHKACTIVE","139","260","20","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("18");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label_00_01_00_02_00_00","49","260","79","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("19");
            obj.set_text("활성여부");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sub_title","20","0","140","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("연수관리");
            obj.set_color("#000000");
            obj.set_font("24px/normal \"SpoqaHanSans-Regular\"");
            obj.set_cssclass(" title_t2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","315","424","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","610","62","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",730,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.in_survseq","value","dsMain","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.TRSDATE","value","dsMain","TRSDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.in_tredate","value","dsMain","SURVENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.TITLE","value","dsMain","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_00.form.in_survkindcd","value","dsMain","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_00.form.PLACE","value","dsMain","PLACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_00.form.MAXCNT","value","dsMain","MAXCNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.RCSDATE","value","dsMain","RCSDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_00.form.RCEDATE","value","dsMain","RCEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_00.form.TREDATE","value","dsMain","TREDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_00.form.CHKACTIVE","value","dsMain","CHKACTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_00.form.SURVKINDCD","value","dsMain","SURVKINDCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_00.form.SURVYEAR","value","dsMain","SURVYEAR");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad05p01.xfdl","CM::utl_script.xjs");
        this.registerScript("ad05p01.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fv_MENUNM = "관리자>조사준비>연수관리>등록팝업";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog("", "AG", this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "mergeTrainingNew"){
        			alert('저장되었습니다.');
        			this.opener.lfn_selectSurvInfo();
        		}
        		if(serviceID == "createTrainingNew"){
        			this.opener.lfn_selectSurvInfo();
        			this.dsMain.setColumn(0,"SURVSTATUSCDNM","생성");
        			this.dsMain.setColumn(0,"SURVSTATUSCD","2");
        			alert('연수가 생성되었습니다.');
        		}

         	}
        }

        this.ag01m00_onload = function(obj,e)
        {
        	var objParam  = this.parent.param1;
        	var strRowPosition  = this.parent.param2;
        	if( "U" == this.parent.param3){

        		//this.div_00.form.in_edit_00.set_enable(false) ;
        		//this.div_00.form.in_cb_00.set_enable(false);

        		this.dsMain.clearData();
        		var nrow = this.dsMain.addRow();
        		this.dsMain.copyRow(nrow,objParam,strRowPosition);
        	}else{
        		this.dsMain.addRow();
        	}
        };


        this.div_00_btn_01_onclick = function(obj,e)
        {
        /*
        	if(this.dsMain.getColumn(0,"SURVSTATUSCD") == "2"){
        		this.alert("연수가 이미 생성되었습니다.");
        		return;
        	}
        	if(!this.utlf_validate(this.div_00)) return;
        */
        	var v_SURVSEQ = this.dsMain.getColumn(0,"SURVYEAR").substring(2,4) + "1231";
        	this.dsMain.setColumn(0,"SURVSEQ", v_SURVSEQ)

        	var strLog = "SURVSEQ=" + this.dsMain.getColumn(0, "SURVSEQ")
        				+ ",SURVKINDCD=" + this.dsMain.getColumn(0, "SURVKINDCD")
        				+ ",TITLE=" + this.dsMain.getColumn(0, "TITLE");

        	//alert(this.dsMain.saveXML());
        	this.setAccessLog(this.dsMain.getColumn(0, "SURVSEQ"), this.dsMain.getColumn(0, "SURVKINDCD"), this.fv_MENUNM, "저장", strLog);  //접속기록
        	this.gfnTransaction("mergeTrainingNew",
        						"/swiss/ad/survtrain/mergeTrainingNew.do",
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
        /*
        	if(true){
        		this.alert("연수생성 기능은 변경중이어서 이용하실 수 없습니다.");
        		return;
        	}
        	if(this.dsMain.getColumn(0,"SURVSTATUSCD") == "2"){
        		this.alert("연수가 이미 생성되었습니다.");
        		return;
        	}
        */
        	this.gfnTransaction("createTrainingNew",
        						"/swiss/ad/survtrain/createTrainingNew.do",
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
            this.addEventHandler("onload",this.ag01m00_onload,this);
            this.div_00.form.SURVKINDCD.addEventHandler("onitemchanged",this.div_00_SURVKINDCD_onitemchanged,this);
            this.btn_00.addEventHandler("onclick",this.div_00_btn_00_onclick,this);
            this.btn_01.addEventHandler("onclick",this.div_00_btn_01_onclick,this);
        };

        this.loadIncludeScript("ad05p01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
