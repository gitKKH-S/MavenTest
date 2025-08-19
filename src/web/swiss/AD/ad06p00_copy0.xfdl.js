(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popCntResult");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1150,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_init", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTF2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTF2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTF2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTM2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNT8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTF8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADCNTM8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNT8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTF8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTGRADCNTM8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNT8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTF8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRGRADCNTM8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendSet", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF2\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"GRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"MSTGRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNT8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTF8\" type=\"STRING\" size=\"256\"/><Column id=\"DRGRADCNTM8\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"rowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1150","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1090","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1120","0","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","160","1090","43",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","0","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일로 저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"0","100","30","0",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"1","100","30","btn_del:10",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btnArea:-5","1090","412",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grid_sty02");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"127\"/><Column size=\"108\"/><Column size=\"163\"/><Column size=\"115\"/><Column size=\"101\"/><Column size=\"102\"/><Column size=\"91\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"NO\"/><Cell col=\"1\" colspan=\"2\" text=\"단과대학\"/><Cell col=\"3\" colspan=\"4\" text=\"학과\"/><Cell col=\"7\" rowspan=\"3\" text=\"교육부계열구분코드\"/><Cell col=\"8\" colspan=\"3\" text=\"합계\"/><Cell col=\"11\" colspan=\"6\" text=\"하반기 (8월) 졸업자\"/><Cell col=\"17\" colspan=\"6\" text=\"상반기 (2월) 졸업자\"/><Cell col=\"23\" rowspan=\"3\" text=\"취업통계제출일\"/><Cell row=\"1\" col=\"1\" rowspan=\"2\" text=\"이름\"/><Cell row=\"1\" col=\"2\" rowspan=\"2\" text=\"코드\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" text=\"학과명\"/><Cell row=\"1\" col=\"4\" rowspan=\"2\" text=\"학과코드\"/><Cell row=\"1\" col=\"5\" rowspan=\"2\" text=\"주야구분명\"/><Cell row=\"1\" col=\"6\" rowspan=\"2\" text=\"주야구분\"/><Cell row=\"1\" col=\"8\" rowspan=\"2\" text=\"계\"/><Cell row=\"1\" col=\"9\" rowspan=\"2\" text=\"남자\"/><Cell row=\"1\" col=\"10\" rowspan=\"2\" text=\"여자\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" text=\"학사\"/><Cell row=\"1\" col=\"13\" colspan=\"2\" text=\"석사\"/><Cell row=\"1\" col=\"15\" colspan=\"2\" text=\"박사\"/><Cell row=\"1\" col=\"17\" colspan=\"2\" text=\"학사\"/><Cell row=\"1\" col=\"19\" colspan=\"2\" text=\"석사\"/><Cell row=\"1\" col=\"21\" colspan=\"2\" text=\"박사\"/><Cell row=\"2\" col=\"11\" text=\"남\"/><Cell row=\"2\" col=\"12\" text=\"여\"/><Cell row=\"2\" col=\"13\" text=\"남\"/><Cell row=\"2\" col=\"14\" text=\"여\"/><Cell row=\"2\" col=\"15\" text=\"남\"/><Cell row=\"2\" col=\"16\" text=\"여\"/><Cell row=\"2\" col=\"17\" text=\"남\"/><Cell row=\"2\" col=\"18\" text=\"여\"/><Cell row=\"2\" col=\"19\" text=\"남\"/><Cell row=\"2\" col=\"20\" text=\"여\"/><Cell row=\"2\" col=\"21\" text=\"남\"/><Cell row=\"2\" col=\"22\" text=\"여\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:COLNM\" displaytype=\"normal\" edittype=\"none\" maskedittype=\"string\" editmaxlength=\"50\" editinputfilter=\"symbol,sign\"/><Cell col=\"2\" text=\"bind:COLCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editmaxlength=\"8\" editinputtype=\"digit\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DEPTNM\" displaytype=\"normal\" edittype=\"none\" maskedittype=\"string\" editmaxlength=\"50\" editinputfilter=\"symbol,sign\"/><Cell col=\"4\" text=\"bind:DEPTCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editmaxlength=\"12\" editinputtype=\"digit,english\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEPTDNNM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" edittype=\"none\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:DEPTDNCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editinputtype=\"numberandenglish\" editmaxlength=\"2\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:MOECLASS\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editmaxlength=\"2\" editinputtype=\"digit\" editautoselect=\"true\"/><Cell col=\"8\" text=\"bind:GRADCNT\" displaytype=\"normal\" editinputtype=\"digit\" edittype=\"none\" editmaxlength=\"22\"/><Cell col=\"9\" text=\"bind:GRADCNTM\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"22\"/><Cell col=\"10\" text=\"bind:GRADCNTF\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"22\"/><Cell col=\"11\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:GRADCNTM8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"12\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:GRADCNTF8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"13\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:MSTGRADCNTM8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"14\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:MSTGRADCNTF8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"15\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:DRGRADCNTM8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"16\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:DRGRADCNTF8\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"17\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:GRADCNTM2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"18\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:GRADCNTF2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"19\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:MSTGRADCNTM2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"20\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:MSTGRADCNTF2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"21\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:DRGRADCNTM2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"22\" displaytype=\"editcontrol\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:DRGRADCNTF2\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"23\" text=\"bind:STATUSWKDTHM\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_searchArea","30","40","1090","90",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","20","80","23",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("0");
            obj.set_text("조사명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("label_survTitle","Static00:10","20","499","23",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("1");
            obj.set_text("조사명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static01","25","50","80","23",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("2");
            obj.set_text("학교명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("label_survTitle00","Static01:10","50","270","23",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("3");
            obj.set_text("조사명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Div("btnArea00","30","640","1090","43",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","433","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea00.form);
            obj.set_taborder("0");
            obj.set_text("수정완료");
            obj.set_cssclass("btn_sty09");
            this.Div.form.btnArea00.addChild(obj.name, obj);

            obj = new Button("btn_close","btn_save:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea00.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1150,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad06p00_copy0.xfdl","CM::utl_script.xjs");
        this.registerScript("ad06p00_copy0.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.init_SURVSEQ;
        this.init_SURVKINDCD;
        this.inti_SCHCD;
        this.init_ORGCD;

        this.init_INFO;
        this.init_SCHNM;

        this.init_SURVPROSTATUSCD;

        this.fv_MENUNM = "관리자>조사진행>졸업생정보>연계결과 상세팝업"

        this.popCntResult_oninit = function(obj,e)
        {
        	this.init_SURVSEQ = this.parent.SURVSEQ;
        	this.init_SURVKINDCD = this.parent.SURVKINDCD;
        	this.inti_SCHCD = this.parent.SCHCD;
        	this.init_ORGCD = this.parent.ORGCD;
        	this.init_INFO	= this.parent.INFO;
        	this.init_SCHNM = this.parent.SCHNM;
        	this.init_SURVPROSTATUSCD = this.parent.SURVPROSTATUSCD;

        	this.Div.form.div_searchArea.form.label_survTitle.set_text(this.init_INFO);
        	this.Div.form.div_searchArea.form.label_survTitle00.set_text(this.init_SCHNM);

        	this.selectDetailGP();

        	/* 수정 시 결과 반영 데이터셋(ds_sendSet) 초기화 2021-06-09 */
        	this.ds_sendSet.deleteAll();
        };

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.init_SURVSEQ, this.init_SURVKINDCD, this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceId == "selectDetailGP"){

        			for(var i=0; i < this.ds_list.rowcount; i++){


        					//남 합계
        					this.ds_list.setColumn(i,"GRADCNTM",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTM2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM2" ))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTM8"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM8" ))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM8" ))
        					);
        					//여 합계
        					this.ds_list.setColumn(i,"GRADCNTF",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF2" ))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTF8"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF8" ))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF8" ))
        					);

        					//남녀 합계
        					this.ds_list.setColumn(i,"GRADCNT",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTF"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTM"))
        					);

        					//석사여
        					this.ds_list.setColumn(i,"MSTGRADCNTF",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF8"))
        					);

        					//석사남
        					this.ds_list.setColumn(i,"MSTGRADCNTM",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM8"))
        					);

        					//석사
        					this.ds_list.setColumn(i,"MSTGRADCNT",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM"))
        					);

        					//박사여
        					this.ds_list.setColumn(i,"DRGRADCNTF",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF8"))
        					);

        					//박사남
        					this.ds_list.setColumn(i,"DRGRADCNTM",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM8"))
        					);

        					//박사
        					this.ds_list.setColumn(i,"DRGRADCNT",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM"))
        					);

        					//학사2월
        					this.ds_list.setColumn(i,"GRADCNT2",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTM2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTF2"))
        					);

        					//석사2월
        					this.ds_list.setColumn(i,"MSTGRADCNT2",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM2"))
        					);

        					//박사2월
        					this.ds_list.setColumn(i,"DRGRADCNT2",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF2"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM2"))
        					);

        					//학사8
        					this.ds_list.setColumn(i,"GRADCNT8",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTF8"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"GRADCNTM8"))
        					);

        					//석사8
        					this.ds_list.setColumn(i,"MSTGRADCNT8",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTF8"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"MSTGRADCNTM8"))
        					);

        					//박사8
        					this.ds_list.setColumn(i,"DRGRADCNT8",
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTF8"))+
        						this.lfn_nullToZero(this.ds_list.getColumn(i,"DRGRADCNTM8"))
        					);

        			}
        		}

        		if(serviceId == "updateDetailGP"){
        			if(this.ds_resultCnt.getColumn(0, "CNT") == "-1"){
        				this.alert("학과정보가 없습니다.");
        				return;
        			} else if(this.ds_resultCnt.getColumn(0, "CNT") == "0"){
        				this.alert("0건의 데이타가 수정 되었습니다.\n단과대학,학과,계열정보 변경시에는 신규 생성 해야 합니다.");
        				return;
        			} else {																					// 상태 변경

        				var strParam = "SURVSEQ=" 	+ this.init_SURVSEQ + "ª";
        				strParam += "SURVKINDCD=" 	+ this.init_SURVKINDCD + "ª";
        				strParam += "SCHCD=" 		+ this.inti_SCHCD + "ª";
        				strParam += "ORGCD="  		+ this.init_ORGCD + "ª";
        				strParam += "STATUSCD=3ª"; 			// 5:반려, 3:수정완료

        				dsParamSetArrowBlank(this.ds_search, strParam);
        				this.setAccessLog(this.init_SURVSEQ, this.init_SURVKINDCD, this.fv_MENUNM, "수정완료", strParam);  //접속기록
        				this.gfnTransaction("updateApproval",
        									"swiss/ad/progress/updateApproval.do",
        									"dsSearch=ds_search",
        									"ds_list=dsResult",
        									"",
        									"fnCallback",
        									false);

        			}
        		}

        		if(serviceId == "updateApproval"){
        			this.alert("수정완료되었습니다.");
        			this.close("update");
        		}

        	}

        }


        // 추가
        this.Div_btnArea_btn_add_onclick = function(obj,e)
        {
        	var nRow;

        	if(this.init_SURVPROSTATUSCD != "1" && this.init_SURVPROSTATUSCD != "2"){
        		alert("추가하실 수 없는 접수상태입니다.");
        		return;
        	}
        	if(this.ds_list.rowcount == 0){
        		this.ds_list.copyData(this.ds_list_init);
        	}

        	nRow = this.ds_list.addRow();
        	this.lfn_cntColInit(nRow);
        };

        // 삭제
        this.Div_btnArea00_btn_del_onclick = function(obj,e)
        {
        	if(this.init_SURVPROSTATUSCD != "1" && this.init_SURVPROSTATUSCD != "2"){
        		alert("삭제하실 수 없는 접수상태입니다.");
        		return;
        	}
        	/* 삭제할Row를 결과반영할 ds_sendSet에 copyRow 2021.06.09 */
        	var nRow = this.ds_sendSet.addRow();
        	this.ds_sendSet.copyRow(nRow, this.ds_list, this.ds_list.rowposition);
        	this.ds_sendSet.setColumn(nRow,"rowType", "D");
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        };

        // 닫기
        this.Div_btnArea00_btn_close_onclick = function(obj,e)
        {
        	this.close();
        };


        // 저장
        this.Div_btnArea_btn_return_onclick = function(obj,e)
        {
        	if(this.init_SURVPROSTATUSCD != "1" && this.init_SURVPROSTATUSCD != "2"){
        		alert("수정하실 수 없는 접수상태입니다.");
        		return;
        	}
        	var bChangeData = false;
        	var nRowCnt = this.ds_list.getRowCount();

        	var strResult = "";

        	for(var i=0; i<nRowCnt; i++){
        		switch(this.ds_list.getRowType(i)){
        			case 0 :
        				strResult += "데이터가 존재하지 않습니다. " + i + "exit \n";
        				break;
        			case 1:
        				break;
        			case 16:
        				strResult += "ROW " + i + " 변경되지 않음 \n";
        				break;
        			case 2:
        				bChangeData = true;

        				if (this.ds_list.getColumn(i, "COLCD") == null){
        					this.alert("단과대학코드는 필수 입력 사항입니다.");
        					return;
        				};
        				if (this.ds_list.getColumn(i, "DEPTCD") == null){
        					this.alert("학과코드는 필수 입력 사항입니다.");
        					return;
        				};
        				if (this.ds_list.getColumn(i, "DEPTDNCD") == null){
        					this.alert("주야 구분코드는 필수 입력 사항입니다.");
        					return;
        				};
        				if (this.ds_list.getColumn(i, "MOECLASS") == null){
        					this.alert("교육부계열구분코드는 필수 입력 사항입니다.");
        					return;
        				};

        				var nRow = this.ds_sendSet.addRow();
        				this.ds_sendSet.copyRow(nRow, this.ds_list, i);
        				this.ds_sendSet.setColumn(nRow,"rowType", "I");
        				this.ds_sendSet.setColumn(nRow,"SURVSEQ", this.ds_list.getColumn(0, "SURVSEQ"));
        				this.ds_sendSet.setColumn(nRow,"SURVKINDCD", this.ds_list.getColumn(0, "SURVKINDCD"));
        				this.ds_sendSet.setColumn(nRow,"SCHCD", this.ds_list.getColumn(0, "SCHCD"));
        				this.ds_sendSet.setColumn(nRow,"ORGCD", this.ds_list.getColumn(0, "ORGCD"));
        				break;
        			case 4:
        				bChangeData = true;
        				strResult += "ROW " + i + " 변경됨 \n";

        				var nRow = this.ds_sendSet.addRow();
        				this.ds_sendSet.copyRow(nRow, this.ds_list, i);
        				this.ds_sendSet.setColumn(nRow,"rowType", "U");
        				break;
        			case 8:
        				strResult += "ROW " + i + " 변경됨 \n";
        				bChangeData = true;
        				break;
        			default:
        				strResult += "ROW " + i + " 상태 알수 없음 \n";
        		}
        	}

        	// 삭제된 ROW 처리 (삭제 처리할 때 결과 데이터셋에 반영 2021-06-09)

        	var nRowDelCnt = this.ds_list.getDeletedRowCount();
        	if(nRowDelCnt > 0){
        		bChangeData = true;
        	}

        	if(bChangeData == true){
        		this.gfnTransaction("updateDetailGP",
        						"swiss/ad/progress/updateDetailGP.do",
        						"dsSearch=ds_sendSet",
        						"ds_resultCnt=dsResult",
        						"",
        						"fnCallback",
        						false);

        	} else {
        		this.alert("변경된 정보가 없습니다.");
        	}
        };

        this.selectDetailGP = function(){
        	var strParam = "SURVSEQ=" 		+ this.init_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strParam += "SCHCD=" 			+ this.inti_SCHCD + "ª";
        	strParam += "ORGCD="  			+ this.init_ORGCD + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.init_SURVSEQ, this.init_SURVKINDCD, this.fv_MENUNM, "조회", strParam);  //접속기록
        	this.gfnTransaction("selectDetailGP",
        						"swiss/ad/progress/selectDetailGP.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
        }


        this.selectColNm = function(colCd){
        	var strParam = "SURVSEQ=" 	+ this.init_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.init_SURVKINDCD + "ª";
        	strParam += "COLCD=" 		+ colCd + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectColNm",
        						"swiss/ad/progress/selectColNm.do",
        						"dsSearch=ds_search",
        						"ds_temp=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.selectDeptNm = function(deptCd){
        	var strParam = "SURVSEQ=" 	+ this.init_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.init_SURVKINDCD + "ª";
        	strParam += "DEPTCD=" 		+ deptCd + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectDeptNm",
        						"swiss/ad/progress/selectDeptNm.do",
        						"dsSearch=ds_search",
        						"ds_temp=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.selectDeptDnNm = function(deptDnCd){
        	var strParam = "SURVSEQ=" 	+ this.init_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 	+ this.init_SURVKINDCD + "ª";
        	strParam += "DEPTDNCD=" 	+ deptDnCd 			+ "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectDeptDnNm",
        						"swiss/ad/progress/selectDeptDnNm.do",
        						"dsSearch=ds_search",
        						"ds_temp=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 파일저장
        this.Div_btnArea_Button00_onclick = function(obj,e)
        {
        	var strLog = "SURVSEQ=" 		+ this.init_SURVSEQ + "ª";
        	strLog += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strLog += "SCHCD=" 			+ this.inti_SCHCD + "ª";
        	strLog += "ORGCD="  			+ this.init_ORGCD + "ª";
        	this.setAccessLog(this.init_SURVSEQ, this.init_SURVKINDCD, this.fv_MENUNM, "파일저장", strLog);  //접속기록
        	this.utlf_excelDownload("졸업생연계결과_학과정보", this.Div.form.gd_list, this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        }

        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	var DEPTCD;
        	var COLCD;
        	//단과대학 코드
        	if(e.columnid == "COLCD"){
        		COLCD = e.newvalue;
        		this.selectColNm(COLCD);
        		this.ds_list.setColumn(e.row,"COLNM",this.ds_temp.getColumn(0,0));
        	}
        	//학과코드
        	if(e.columnid == "DEPTCD"){
        		DEPTCD = e.newvalue;

        		if(this.utlf_IsNull(DEPTCD)){
        			this.ds_list.setColumn(e.row,"DEPTNM",null);
        			this.ds_list.setColumn(e.row,"DEPTCD",null);
        			return false;
        		}

        		this.selectDeptNm(DEPTCD);
        		var deptNm = this.ds_temp.getColumn(0, 0);

        		if(this.utlf_IsNull(deptNm)){
        			var regCheck = this.confirm("해당 학과코드는 존재하지않습니다. 입력한 코드로 학과를 추가하시겠습니까?");
        			if(regCheck){
        				this.Div.form.div_searchArea.setFocus();	// 모달종료시오류방지 - edit창에 포커스 있을때 팝업(popAddDept)을 닫으면 모달 정상종료안됨

        				var objChildFrame = new ChildFrame();
        				objChildFrame.init("popAddDept"
        								  , 0
        								  , 0
        								  , 640
        								  , 200
        								  , null
        								  , null
        								  , "AD::popAddDept.xfdl");
        				objChildFrame.set_showtitlebar(false);
        				objChildFrame.set_dragmovetype("all");
        				objChildFrame.set_openalign("center middle");
        				objChildFrame.set_autosize("false");
        				objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        				var objParam = {
        					SURVSEQ 	: this.init_SURVSEQ
        					, SURVKINDCD: this.init_SURVKINDCD
        					, SCHCD		: this.inti_SCHCD
        					, ORGCD		: this.init_ORGCD
        					, SCHNM		: this.init_SCHNM
        					, NROW		: e.row
        					, DEPTCD	: DEPTCD
        				};
        				objChildFrame.showModal(this.getOwnerFrame()
        									  , objParam
        									  , this
        									  , "fn_popupCallback");

        			}else{
        				this.ds_list.setColumn(e.row,"DEPTNM",null);
        				this.ds_list.setColumn(e.row,"DEPTCD",null);
        			}
        		}else{
        			this.ds_list.setColumn(e.row,"DEPTNM", deptNm);
        		}
        	}
        	//주야간 코드
        	if(e.columnid == "DEPTDNCD"){
        		var deptDnCd = e.newvalue;
        		this.selectDeptDnNm(deptDnCd);
        		this.ds_list.setColumn(e.row, "DEPTDNNM", this.ds_temp.getColumn(0,0));
        	}

        	//합계
        	if ( //e.columnid == "MSTGRADCNTF" || e.columnid == "MSTGRADCNTM" || e.columnid == "DRGRADCNTF" || e.columnid == "DRGRADCNTM"   ||
        		 e.columnid == "GRADCNTF2"   || e.columnid == "GRADCNTM2"   ||
        		 e.columnid == "MSTGRADCNTF2"|| e.columnid == "MSTGRADCNTM2"||
        		 e.columnid == "DRGRADCNTF2" || e.columnid == "DRGRADCNTM2" ||
        		 e.columnid == "GRADCNTF8"	 || e.columnid == "GRADCNTM8"   ||
        		 e.columnid == "MSTGRADCNTF8"|| e.columnid == "MSTGRADCNTM8"||
        		 e.columnid == "DRGRADCNTF8" || e.columnid == "DRGRADCNTM8" ){

        		//남 합계
        		this.ds_list.setColumn(e.row,"GRADCNTM",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTM2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM2" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTM8"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM8" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM8" ))
        		);
        		//여 합계
        		this.ds_list.setColumn(e.row,"GRADCNTF",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF2" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTF8"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF8" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF8" ))
        		);

        		//남녀 합계
        		this.ds_list.setColumn(e.row,"GRADCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTM"))
        		);

        		//석사여
        		this.ds_list.setColumn(e.row,"MSTGRADCNTF",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF8"))
        		);

        		//석사남
        		this.ds_list.setColumn(e.row,"MSTGRADCNTM",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM8"))
        		);

        		//석사
        		this.ds_list.setColumn(e.row,"MSTGRADCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM"))
        		);

        		//박사여
        		this.ds_list.setColumn(e.row,"DRGRADCNTF",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF8"))
        		);

        		//박사남
        		this.ds_list.setColumn(e.row,"DRGRADCNTM",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM8"))
        		);

        		//박사
        		this.ds_list.setColumn(e.row,"DRGRADCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM"))
        		);

        		//학사2월
        		this.ds_list.setColumn(e.row,"GRADCNT2",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTM2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTF2"))
        		);

        		//석사2월
        		this.ds_list.setColumn(e.row,"MSTGRADCNT2",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM2"))
        		);

        		//박사2월
        		this.ds_list.setColumn(e.row,"DRGRADCNT2",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF2"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM2"))
        		);

        		//학사8
        		this.ds_list.setColumn(e.row,"GRADCNT8",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTF8"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"GRADCNTM8"))
        		);

        		//석사8
        		this.ds_list.setColumn(e.row,"MSTGRADCNT8",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTF8"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTGRADCNTM8"))
        		);

        		//박사8
        		this.ds_list.setColumn(e.row,"DRGRADCNT8",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTF8"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRGRADCNTM8"))
        		);
        	}

        };

        //널체크
        this.lfn_nullToZero = function(val){
        	if(new String(val).valueOf() == "undefined"){
        		return 0;
        	}
        	if(val == null){
        		return 0;
        	}
        	if(val == null){
        		return 0;
        	}
        	if(("x"+val == "xNaN")&&(new String(val.length).valueOf()=="undefined")){
        		return 0;
        	}
        	if(val.length == 0){
        		return 0;
        	}
        	return val;
        }

        this.lfn_cntColInit = function(nRow)
        {
        	this.ds_list.setColumn(nRow, "GRADCNT", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTF", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTM", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNT", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTF", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTM", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNT", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTF", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTM", "0");
        	this.ds_list.setColumn(nRow, "GRADCNT2", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTF2", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTM2", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNT2", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTF2", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTM2", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNT2", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTF2", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTM2", "0");
        	this.ds_list.setColumn(nRow, "GRADCNT8", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTF8", "0");
        	this.ds_list.setColumn(nRow, "GRADCNTM8", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNT8", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTF8", "0");
        	this.ds_list.setColumn(nRow, "MSTGRADCNTM8", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNT8", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTF8", "0");
        	this.ds_list.setColumn(nRow, "DRGRADCNTM8", "0");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strPopupID == "popAddDept"){
        	}
        }

        this.lfn_afterInsertDept = function(nRow, deptNm, deptCd)
        {
        	this.ds_list.setColumn(nRow, "DEPTCD", deptCd);
        	this.ds_list.setColumn(nRow, "DEPTNM", deptNm);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.popCntResult_oninit,this);
            this.Div.form.btnArea.form.Button00.addEventHandler("onclick",this.Div_btnArea_Button00_onclick,this);
            this.Div.form.btnArea.form.btn_del.addEventHandler("onclick",this.Div_btnArea00_btn_del_onclick,this);
            this.Div.form.btnArea.form.btn_add.addEventHandler("onclick",this.Div_btnArea_btn_add_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.gd_list.addEventHandler("onheadclick",this.Div_gd_list_onheadclick,this);
            this.Div.form.btnArea00.form.btn_save.addEventHandler("onclick",this.Div_btnArea_btn_return_onclick,this);
            this.Div.form.btnArea00.form.btn_close.addEventHandler("onclick",this.Div_btnArea00_btn_close_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };

        this.loadIncludeScript("ad06p00_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
