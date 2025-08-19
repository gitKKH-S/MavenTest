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
                this._setFormPosition(960,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSWKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list_init", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTDNNM\" type=\"STRING\" size=\"256\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNT\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTM\" type=\"STRING\" size=\"256\"/><Column id=\"FRESHCNTF\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSWKDTHM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","-30","960","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","900","40",null,null,null,null,null,null,this.Div.form);
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

            obj = new Static("Static00_00","930","20","30","1200",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("btnArea","30","200","900","43",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("Button00","30","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일로 저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"0","100","30","30",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"1","100","30","btn_del:10",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btnArea:5","900","343",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"127\"/><Column size=\"108\"/><Column size=\"115\"/><Column size=\"163\"/><Column size=\"93\"/><Column size=\"101\"/><Column size=\"102\"/><Column size=\"155\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"100\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" colspan=\"2\" text=\"단과대학\"/><Cell col=\"3\" rowspan=\"2\" text=\"본분교코드\"/><Cell col=\"4\" colspan=\"2\" text=\"학과\"/><Cell col=\"6\" colspan=\"2\" text=\"주야\"/><Cell col=\"8\" text=\"5대계열코드\"/><Cell col=\"9\" colspan=\"3\" text=\"취업통계 제출자료\"/><Cell col=\"12\" rowspan=\"2\" text=\"취업통계제출일\"/><Cell row=\"1\" col=\"1\" text=\"이름\"/><Cell row=\"1\" col=\"2\" text=\"코드\"/><Cell row=\"1\" col=\"4\" text=\"학과명\"/><Cell row=\"1\" col=\"5\" text=\"코드\"/><Cell row=\"1\" col=\"6\" text=\"구분\"/><Cell row=\"1\" col=\"7\" text=\"코드\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\" text=\"전체\"/><Cell row=\"1\" col=\"10\" text=\"남자\"/><Cell row=\"1\" col=\"11\" text=\"여자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:COLNM\" displaytype=\"editcontrol\" edittype=\"text\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:COLCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:ORGCD\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:DEPTNM\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:DEPTCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"6\" text=\"bind:DEPTDNNM\" displaytype=\"editcontrol\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"7\" text=\"bind:DEPTDNCD\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"8\" text=\"bind:MOECLASS\" displaytype=\"editcontrol\" edittype=\"normal\" maskedittype=\"string\"/><Cell col=\"9\" text=\"bind:FRESHCNT\" displaytype=\"editcontrol\" editinputtype=\"digit\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:FRESHCNTM\" displaytype=\"editcontrol\" edittype=\"normal\" editinputtype=\"digit\"/><Cell col=\"11\" text=\"bind:FRESHCNTF\" displaytype=\"editcontrol\" edittype=\"normal\" editinputtype=\"digit\"/><Cell col=\"12\" text=\"bind:STATUSWKDTHM\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_searchArea","30","90","900","90",null,null,null,null,null,null,this.Div.form);
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

            obj = new Div("btnArea00","30","600","900","43",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_save","343","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea00.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea00.addChild(obj.name, obj);

            obj = new Button("btn_close","btn_save:20","1","100","30",null,null,null,null,null,null,this.Div.form.btnArea00.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popCntResult.xfdl", function() {
        this.init_SURVSEQ;
        this.init_SURVKINDCD;
        this.inti_SCHCD;
        this.init_ORGCD;

        this.popCntResult_onactivate = function(obj,e)
        {
        	this.selectDetailFP();
        };

        // 추가
        this.Div_btnArea_btn_add_onclick = function(obj,e)
        {
        	if(this.ds_list.rowcount == 0){
        		this.ds_list.copyData(this.ds_list_init);
        	}
        	this.ds_list.addRow();
        };

        // 저장
        this.Div_btnArea_btn_return_onclick = function(obj,e)
        {
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
        				var strParam = "SURVSEQ=" 		+ this.init_SURVSEQ + "ª";
        				strParam += "SURVKINDCD=" 		+ this.init_SURVKINDCD + "ª";
        				strParam += "ENTERSEQ=" 		+ '20201' + "ª";
        				strParam += "SCHCD=" 			+ this.inti_SCHCD + "ª";
        				strParam += "ORGCD="  			+ this.ds_list.getColumn(i, "ORGCD") + "ª";

        				strParam += "COLCD="  			+ this.ds_list.getColumn(i, "COLCD") + "ª";
        				strParam += "DEPTCD="  			+ this.ds_list.getColumn(i, "DEPTCD") + "ª";
        				strParam += "DEPTDNCD="  		+ this.ds_list.getColumn(i, "DEPTDNCD") + "ª";
        				strParam += "MOECLASS="  		+ this.ds_list.getColumn(i, "MOECLASS") + "ª";

        				strParam += "COLNM="  			+ this.ds_list.getColumn(i, "COLNM") + "ª";
        				strParam += "DEPTNM="  			+ this.ds_list.getColumn(i, "DEPTNM") + "ª";
        				strParam += "FRESHCNT="  		+ this.ds_list.getColumn(i, "FRESHCNT") + "ª";
        				strParam += "FRESHCNTF="  		+ this.ds_list.getColumn(i, "FRESHCNTF") + "ª";
        				strParam += "FRESHCNTM="  		+ this.ds_list.getColumn(i, "FRESHCNTM") + "ª";

        				dsParamSetArrowBlank(this.ds_search, strParam);
        				this.gfnTransaction("insertDetailFP",
        						"swiss/ad/progress/insertDetailFP.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);

        				break;
        			case 4:
        				bChangeData = true;
        				strResult += "ROW " + i + " 변경됨 \n";

        				var strParam = "SURVSEQ=" 		+ this.ds_list.getColumn(i, "SURVSEQ") + "ª";
        				strParam += "SURVKINDCD=" 		+ this.ds_list.getColumn(i, "SURVKINDCD") + "ª";
        				strParam += "ENTERSEQ=" 		+ this.ds_list.getColumn(i, "ENTERSEQ") + "ª";
        				strParam += "SCHCD=" 			+ this.ds_list.getColumn(i, "SCHCD") + "ª";
        				strParam += "ORGCD="  			+ this.ds_list.getColumn(i, "ORGCD") + "ª";

        				strParam += "COLCD="  			+ this.ds_list.getColumn(i, "COLCD") + "ª";
        				strParam += "DEPTCD="  			+ this.ds_list.getColumn(i, "DEPTCD") + "ª";
        				strParam += "DEPTDNCD="  		+ this.ds_list.getColumn(i, "DEPTDNCD") + "ª";
        				strParam += "MOECLASS="  		+ this.ds_list.getColumn(i, "MOECLASS") + "ª";

        				strParam += "COLNM="  			+ this.ds_list.getColumn(i, "COLNM") + "ª";
        				strParam += "DEPTNM="  			+ this.ds_list.getColumn(i, "DEPTNM") + "ª";
        				strParam += "FRESHCNT="  		+ this.ds_list.getColumn(i, "FRESHCNT") + "ª";
        				strParam += "FRESHCNTF="  		+ this.ds_list.getColumn(i, "FRESHCNTF") + "ª";
        				strParam += "FRESHCNTM="  		+ this.ds_list.getColumn(i, "FRESHCNTM") + "ª";

        				dsParamSetArrowBlank(this.ds_search, strParam);
        				this.gfnTransaction("updateDetailFP",
        						"swiss/ad/progress/updateDetailFP.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
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
        		for(var i=0; i<nRowDelCnt; i++){
        			var strParam = "SURVSEQ=" 		+ this.ds_list.getDeletedColumn(i, "SURVSEQ") + "ª";
        				strParam += "SURVKINDCD=" 	+ this.ds_list.getDeletedColumn(i, "SURVKINDCD") + "ª";
        				strParam += "ENTERSEQ=" 	+ this.ds_list.getDeletedColumn(i, "ENTERSEQ") + "ª";
        				strParam += "SCHCD=" 		+ this.ds_list.getDeletedColumn(i, "SCHCD") + "ª";
        				strParam += "ORGCD="  		+ this.ds_list.getDeletedColumn(i, "ORGCD") + "ª";

        				strParam += "COLCD="  		+ this.ds_list.getDeletedColumn(i, "COLCD") + "ª";
        				strParam += "DEPTCD="  		+ this.ds_list.getDeletedColumn(i, "DEPTCD") + "ª";
        				strParam += "DEPTDNCD="  	+ this.ds_list.getDeletedColumn(i, "DEPTDNCD") + "ª";
        				strParam += "MOECLASS="  	+ this.ds_list.getDeletedColumn(i, "MOECLASS") + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);
        			this.gfnTransaction("deleteDetailFP",
        						"swiss/ad/progress/deleteDetailFP.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
        		}
        	}

        	if(bChangeData == true){
        			var strParam = "SURVSEQ=" 	+ this.init_SURVSEQ + "ª";
        			strParam += "SURVKINDCD=" 	+ this.init_SURVKINDCD + "ª";
        			strParam += "SCHCD=" 		+ this.inti_SCHCD + "ª";
        			strParam += "ORGCD="  		+ this.init_ORGCD + "ª";
        			strParam += "STATUSCD=3ª"; 			// 5:반려, 3:수정완료

        			dsParamSetArrowBlank(this.ds_search, strParam);
        			this.gfnTransaction("updateApproval",
        								"swiss/ad/progress/updateApproval.do",
        								"dsSearch=ds_search",
        								"ds_list=dsResult",
        								"",
        								"fnCallback",
        								true);
        	} else {
        		this.alert("변경된 정보가 없습니다.");
        	}
        	this.parent.parent.searchFpResultCnt();
        	this.parent.parent.popDiv_detail.closePopup();


        };

        // 삭제
        this.Div_btnArea00_btn_del_onclick = function(obj,e)
        {
        	this.ds_list.deleteRow(this.ds_list.rowposition);
        };

        // 닫기
        this.Div_btnArea00_btn_close_onclick = function(obj,e)
        {
        	this.parent.parent.popDiv_detail.closePopup();
        };


        this.fnCallback = function(serviceId, errCD, errMSG){
        	if(serviceId == "selectDetailFP"){
        		this.Div.form.div_searchArea.form.label_survTitle.set_text(this.parent.parent.Div.form.div_searchArea.form.label_survnm.text);
        		this.Div.form.div_searchArea.form.label_survTitle00.set_text(this.ds_list.getColumn(0,"SCHNM"));
        	}
        }


        this.selectDetailFP = function(){
        	var nRow = this.parent.parent.Div.form.gd_list.getSelectedDatasetRows();

        	this.init_SURVSEQ 		= this.parent.parent.ds_list.getColumn(nRow, "SURVSEQ");
        	this.init_SURVKINDCD 	= this.parent.parent.ds_list.getColumn(nRow, "SURVKINDCD");
        	this.inti_SCHCD 		= this.parent.parent.ds_list.getColumn(nRow, "SCHCD");
        	this.init_ORGCD			= this.parent.parent.ds_list.getColumn(nRow, "ORGCD");

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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.popCntResult_onactivate,this);
            this.Div.form.btnArea.form.btn_del.addEventHandler("onclick",this.Div_btnArea00_btn_del_onclick,this);
            this.Div.form.btnArea.form.btn_add.addEventHandler("onclick",this.Div_btnArea_btn_add_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.gd_list.addEventHandler("onheadclick",this.Div_gd_list_onheadclick,this);
            this.Div.form.btnArea00.form.btn_save.addEventHandler("onclick",this.Div_btnArea_btn_return_onclick,this);
            this.Div.form.btnArea00.form.btn_close.addEventHandler("onclick",this.Div_btnArea00_btn_close_onclick,this);
        };

        this.loadIncludeScript("popCntResult.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
