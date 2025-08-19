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
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_init", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COLFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COLFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COLFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UMFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UMFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UMFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MSTFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DRFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MDFRESHCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MDFRESHCNTF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MDFRESHCNTM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendSet", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"COLFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"UNIFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"UMFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MSTFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"DRFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"MDFRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"rowType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptnm", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_colnm", this);
            obj._setContents("<ColumnInfo><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayNight", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("btnArea","30","div_searchArea:0","1090","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","0","20","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일로 저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"20","100","30","0",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"20","100","30","btn_del:10",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btnArea:0","1090","430",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_cssclass("grid_sty03");
            obj.set_autoenter("select");
            obj.set_scrollpixel("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"127\"/><Column size=\"108\"/><Column size=\"163\"/><Column size=\"115\"/><Column size=\"101\"/><Column size=\"102\"/><Column size=\"112\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"100\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"입학시기\"/><Cell col=\"2\" colspan=\"2\" text=\"단과대학\"/><Cell col=\"4\" colspan=\"4\" text=\"학과\"/><Cell col=\"8\" rowspan=\"2\" text=\"교육부계열코드\"/><Cell col=\"9\" colspan=\"3\" text=\"합계\"/><Cell col=\"12\" colspan=\"2\" text=\"전문학사\"/><Cell col=\"14\" colspan=\"2\" text=\"학사\"/><Cell col=\"16\" colspan=\"2\" text=\"학석사통합과정\"/><Cell col=\"18\" colspan=\"2\" text=\"석사과정\"/><Cell col=\"20\" colspan=\"2\" text=\"박사과정\"/><Cell col=\"22\" colspan=\"2\" text=\"석박사통합과정\"/><Cell col=\"24\" rowspan=\"2\" text=\"취업통계제출일\"/><Cell row=\"1\" col=\"2\" text=\"이름\"/><Cell row=\"1\" col=\"3\" text=\"코드\"/><Cell row=\"1\" col=\"4\" text=\"학과명\"/><Cell row=\"1\" col=\"5\" text=\"학과코드\"/><Cell row=\"1\" col=\"6\" text=\"주야구분명\"/><Cell row=\"1\" col=\"7\" text=\"주야코드\"/><Cell row=\"1\" col=\"9\" text=\"계\"/><Cell row=\"1\" col=\"10\" text=\"남자\"/><Cell row=\"1\" col=\"11\" text=\"여자\"/><Cell row=\"1\" col=\"12\" text=\"남\"/><Cell row=\"1\" col=\"13\" text=\"여\"/><Cell row=\"1\" col=\"14\" text=\"남\"/><Cell row=\"1\" col=\"15\" text=\"여\"/><Cell row=\"1\" col=\"16\" text=\"남\"/><Cell row=\"1\" col=\"17\" text=\"여\"/><Cell row=\"1\" col=\"18\" text=\"남\"/><Cell row=\"1\" col=\"19\" text=\"여\"/><Cell row=\"1\" col=\"20\" text=\"남\"/><Cell row=\"1\" col=\"21\" text=\"여\"/><Cell row=\"1\" col=\"22\" text=\"남\"/><Cell row=\"1\" col=\"23\" text=\"여\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:ENTERSEQ\" edittype=\"text\" displaytype=\"editcontrol\" editmaxlength=\"5\" editinputfilter=\"sign,symbol\" editinputtype=\"digit\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:COLNM\" displaytype=\"normal\" edittype=\"none\" maskedittype=\"string\" editmaxlength=\"50\" editinputfilter=\"symbol,sign\"/><Cell col=\"3\" text=\"bind:COLCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editmaxlength=\"8\" editinputtype=\"digit\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEPTNM\" displaytype=\"normal\" edittype=\"none\" maskedittype=\"string\" editmaxlength=\"50\" editinputtype=\"normal\"/><Cell col=\"5\" text=\"bind:DEPTCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editinputtype=\"english,digit\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEPTDNNM\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" edittype=\"none\" maskedittype=\"string\" font=\"normal 12px/normal &quot;SpoqaHanSans-Regular&quot;,&quot;맑은 고딕&quot;,&quot;sans-serif&quot;\"/><Cell col=\"7\" text=\"bind:DEPTDNCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\" editinputtype=\"numberandenglish\" editmaxlength=\"2\" editautoselect=\"true\"/><Cell col=\"8\" edittype=\"normal\" displaytype=\"editcontrol\" text=\"bind:MOECLASS\" editinputtype=\"digit\" editmaxlength=\"2\" editautoselect=\"true\"/><Cell col=\"9\" text=\"bind:FRESHCNT\" displaytype=\"normal\" editinputtype=\"digit\" edittype=\"none\" editmaxlength=\"22\"/><Cell col=\"10\" text=\"bind:FRESHCNTM\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"22\"/><Cell col=\"11\" text=\"bind:FRESHCNTF\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"digit\" editmaxlength=\"22\"/><Cell col=\"12\" text=\"bind:COLFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"13\" text=\"bind:COLFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"14\" text=\"bind:UNIFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"15\" text=\"bind:UNIFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"16\" text=\"bind:UMFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"17\" text=\"bind:UMFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"18\" text=\"bind:MSTFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"19\" text=\"bind:MSTFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"20\" text=\"bind:DRFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"21\" text=\"bind:DRFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"22\" text=\"bind:MDFRESHCNTM\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"23\" text=\"bind:MDFRESHCNTF\" edittype=\"normal\" displaytype=\"editcontrol\" editinputtype=\"digit\" editmaxlength=\"22\" editautoselect=\"true\"/><Cell col=\"24\" text=\"bind:STATUSWKDTHM\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea00","30","640","1090","43",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","463","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea00.form);
            obj.set_taborder("0");
            obj.set_text("수정 완료");
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
        this.addIncludeScript("ad08p00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad08p00.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.init_SURVSEQ;
        this.init_SURVKINDCD;
        this.inti_SCHCD;
        this.init_ORGCD;

        this.init_INFO;
        this.init_SCHNM;

        this.fv_MENUNM = "관리자>조사진행>신입생정보>연계결과 상세팝업"

        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectDetailFP"){
        		this.getDayNight();
        	}
        	if(serviceId == "getDayNight"){

        	}
        	if(serviceId == "selectDeptNm"){

        	}
        	if(serviceId == "selectColNm"){

        	}
        }

        this.popCntResult_oninit = function(obj,e)
        {
        	this.init_SURVSEQ = this.parent.SURVSEQ;
        	this.init_SURVKINDCD = this.parent.SURVKINDCD;
        	this.inti_SCHCD = this.parent.SCHCD;
        	this.init_ORGCD = this.parent.ORGCD;
        	this.init_INFO	= this.parent.INFO;
        	this.init_SCHNM = this.parent.SCHNM;

        	this.Div.form.div_searchArea.form.label_survTitle.set_text(this.init_INFO);
        	this.Div.form.div_searchArea.form.label_survTitle00.set_text(this.init_SCHNM);

        	this.selectDetailFP();
        };

        // 추가
        this.Div_btnArea_btn_add_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount == 0){
        		this.ds_list.copyData(this.ds_list_init);
        	}
        	var nRow = this.ds_list.addRow();

        	this.lfn_cntColInit(nRow);
        };

        // 삭제
        this.Div_btnArea00_btn_del_onclick = function(obj,e)
        {
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
        	var bChangeData = false;
        	var nRowCnt = this.ds_list.getRowCount();

        	var strResult = "";
        	//this.ds_sendSet.deleteAll();

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
        				if (this.ds_list.getColumn(i, "ENTERSEQ") == null){
        					this.alert("입학시기는 필수 입력 사항입니다.");
        					return;
        				};
        				if (this.ds_list.getColumn(i, "DEPTCD") == null){
        					this.alert("학과코드는 필수 입력 사항입니다.");
        					return;
        				}
        				if (this.ds_list.getColumn(i, "DEPTDNCD") == null){
        					this.alert("주야 구분코드는 필수 입력 사항입니다.");
        					return;
        				}

        				if (this.ds_list.getColumn(i, "MOECLASS") == null){
        					this.alert("교육부계열구분코드는 필수 입력 사항입니다.");
        					return;
        				}
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

        	// 삭제된 ROW 처리
        	var nRowDelCnt = this.ds_list.getDeletedRowCount();
        	if(nRowDelCnt > 0){
        		bChangeData = true;
        	}

        	if(bChangeData == true){
        		this.gfnTransaction("updateDetailFP",
        						"swiss/ad/progress/updateDetailFP.do",
        						"dsSearch=ds_sendSet",
        						"ds_resultCnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        		if(this.ds_resultCnt.getColumn(0, "CNT") == "-1"){
        			this.alert("학과정보가 없습니다.");
        			return;
        		} else if(this.ds_resultCnt.getColumn(0, "CNT") == "0"){
        			this.alert("0건의 데이타가 수정 되었습니다.\n단과대학,학과,계열정보 변경시에는 신규 생성 해야 합니다.");
        			return;
        		} else {
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
        								"",
        								"",
        								"fnCallback",
        								false);
        			this.close("update");
        		}
        	} else {
        		this.alert("변경된 정보가 없습니다.");
        	}
        };

        this.selectDetailFP = function(){

        	var strParam = "SURVSEQ=" 		+ this.init_SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strParam += "SCHCD=" 			+ this.inti_SCHCD + "ª";
        	strParam += "ORGCD="  			+ this.init_ORGCD + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectDetailFP",
        						"swiss/ad/progress/selectDetailFP.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.selectDeptNm = function(deptCd){
        	var strParam = "SURVSEQ=" 		+ this.init_SURVSEQ    + "ª";
        	strParam += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strParam += "DEPTCD="		    + deptCd                  + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("selectDeptNm",
        						"swiss/ad/progress/selectDeptNm.do",
        						"dsSearch=dsSearch",
        						"ds_deptnm=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        this.selectColNm = function(colCd){
        	var strParam = "SURVSEQ=" 		+ this.init_SURVSEQ    + "ª";
        	strParam += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strParam += "COLCD="		    + colCd                  + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.gfnTransaction("selectColNm",
        						"swiss/ad/progress/selectColNm.do",
        						"dsSearch=dsSearch",
        						"ds_colnm=dsResult",
        						"",
        						"fnCallback",
        						false);
        }

        // 주야간코드 가져오기
        this.getDayNight = function(){

        	var strParam = "";
        	strParam += "tmp="		        + "a" 		            + "ª";
        	strParam += "SURVSEQ="		    +  this.init_SURVSEQ  	+ "ª";
        	strParam += "SURVKINDCD="		+  this.init_SURVKINDCD + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("getDayNight",
        						"/swiss/fp/baserel/getDayNight.do",
        						"dsSearch=dsSearch",
        						"ds_dayNight=dsResult",
        						"",
        						"fnCallback",
        						false);

        }

        this.Div_btnArea_Button00_onclick = function(obj,e)
        {
        	var strLog = "SURVSEQ=" 		+ this.init_SURVSEQ + "ª";
        	strLog += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        	strLog += "SCHCD=" 			+ this.inti_SCHCD + "ª";
        	strLog += "ORGCD="  			+ this.init_ORGCD + "ª";
        	this.setAccessLog(this.init_SURVSEQ, this.init_SURVKINDCD, this.fv_MENUNM, "파일저장", strLog);  //접속기록
        	this.utlf_excelDownload("신편입생연계결과_학과정보", this.Div.form.gd_list, this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {

        }
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

        this.ds_list_oncolumnchanged = function(obj,e)
        {
        	var DEPTCD;
        	var COLCD;
        	//단과대학 코드
        	if(e.columnid == "COLCD"){
        		COLCD = e.newvalue;
        		this.selectColNm(COLCD);
        		this.ds_list.setColumn(e.row,"COLNM",this.ds_colnm.getColumn(0, "COLNM"))
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
        		var deptNm = this.ds_deptnm.getColumn(0, "DEPTNM");
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
        		var existDeptDnCd = false;
        		for(var i=0;i<this.ds_dayNight.getRowCount();i++){
        			if(e.newvalue == this.ds_dayNight.getColumn(i, "DNCD")){
        				this.ds_list.setColumn(e.row,"DEPTDNNM",this.ds_dayNight.getColumn(i, "DNNM"));
        				existDeptDnCd = true;
        			}
        		}

        		if(!existDeptDnCd){
        			this.ds_list.setColumn(e.row,"DEPTDNNM","");
        		}
        	}
        	//합계
        	if( e.columnid == "COLFRESHCNTM"||e.columnid =="COLFRESHCNTF"||e.columnid =="UNIFRESHCNTM"||e.columnid =="UNIFRESHCNTF"||
        	    e.columnid == "UMFRESHCNTM" ||e.columnid =="UMFRESHCNTF" ||e.columnid =="MSTFRESHCNTM"||e.columnid =="MSTFRESHCNTF"||
        	    e.columnid == "DRFRESHCNTM" ||e.columnid =="DRFRESHCNTF" ||e.columnid =="MDFRESHCNTM" ||e.columnid =="MDFRESHCNTF"){

        		//남 합계
        		this.ds_list.setColumn(e.row,"FRESHCNTM",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"COLFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UNIFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UMFRESHCNTM" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRFRESHCNTM" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MDFRESHCNTM" ))
        		);
        		//여 합계
        		this.ds_list.setColumn(e.row,"FRESHCNTF",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"COLFRESHCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UNIFRESHCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UMFRESHCNTF" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTFRESHCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRFRESHCNTF" ))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MDFRESHCNTF" ))
        		);
        		//남녀 합계
        		this.ds_list.setColumn(e.row,"FRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"FRESHCNTF"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"FRESHCNTM"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"COLFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"COLFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"COLFRESHCNTF"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"UNIFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UNIFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UNIFRESHCNTF"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"UMFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UMFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"UMFRESHCNTF"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"MSTFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MSTFRESHCNTF"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"DRFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"DRFRESHCNTF"))
        		);

        		//소계합계
        		this.ds_list.setColumn(e.row,"MDFRESHCNT",
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MDFRESHCNTM"))+
        			this.lfn_nullToZero(this.ds_list.getColumn(e.row,"MDFRESHCNTF"))
        		);
        	}
        };

        this.lfn_cntColInit = function(nRow)
        {
        	this.ds_list.setColumn(nRow, "FRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "FRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "FRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "COLFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "COLFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "COLFRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "UNIFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "UNIFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "UNIFRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "UMFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "UMFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "UMFRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "MSTFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "MSTFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "MSTFRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "DRFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "DRFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "DRFRESHCNTM", "0");
        	this.ds_list.setColumn(nRow, "MDFRESHCNT", "0");
        	this.ds_list.setColumn(nRow, "MDFRESHCNTF", "0");
        	this.ds_list.setColumn(nRow, "MDFRESHCNTM", "0");
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
            this.Div.form.btnArea00.form.btn_save.addEventHandler("onclick",this.Div_btnArea_btn_return_onclick,this);
            this.Div.form.btnArea00.form.btn_close.addEventHandler("onclick",this.Div_btnArea00_btn_close_onclick,this);
            this.ds_list.addEventHandler("oncolumnchanged",this.ds_list_oncolumnchanged,this);
        };

        this.loadIncludeScript("ad08p00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
