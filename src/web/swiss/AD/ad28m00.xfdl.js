(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad09m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1105);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDYN\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survProStatusNmCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_survList", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schkind", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_viewCntList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">20</Col><Col id=\"CDNM\">20</Col></Row><Row><Col id=\"CD\">50</Col><Col id=\"CDNM\">50</Col></Row><Row><Col id=\"CD\">100</Col><Col id=\"CDNM\">100</Col></Row><Row><Col id=\"CD\">200</Col><Col id=\"CDNM\">200</Col></Row><Row><Col id=\"CD\">500</Col><Col id=\"CDNM\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendSet", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDYN\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"rowType\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_excel", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDYN\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("신입생 제출 현황");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","1095",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1095",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_monitor","30","sub_title_wrap:10","1200","80",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("0");
            obj.set_text("미제출  :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00","335","5","90","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("1");
            obj.set_text("학과정보수정 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","655","5","90","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("2");
            obj.set_text("학과정보제출 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","980","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("3");
            obj.set_text("신입생등록 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","25","40","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("4");
            obj.set_text("신입생제출 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_01","335","40","90","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("5");
            obj.set_text("KEDI승인 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_02","980","40","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("6");
            obj.set_text("합계 :");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_unSub","Static00:10","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("7");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_insert","Static00_00_00_00:10","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("8");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_deptUpdate","Static00_00:10","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("9");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_fpSub","Static00_00_01:10","40","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("10");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_deptSub","Static00_00_00:10","5","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("11");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_approval","Static00_00_00_01:10","40","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("12");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Static("label_total","Static00_00_00_02:10","40","80","30",null,null,null,null,null,null,this.Div.form.div_monitor.form);
            obj.set_taborder("13");
            obj.set_text("0");
            this.Div.form.div_monitor.addChild(obj.name, obj);

            obj = new Div("div_searchArea","30","div_monitor:20","1200","155",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","25","10","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("0");
            obj.set_text("조사년도");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Button("btn_search","980","110","150","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_year","Static00:23","10","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_survList");
            obj.set_codecolumn("SURVYEAR");
            obj.set_datacolumn("SURVYEAR");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","450","60","86","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("5");
            obj.set_text("학교명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_00","450","10","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("6");
            obj.set_text("조사명");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00","870","60","69","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("7");
            obj.set_text("진행상태");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_prostatus","949","60","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("진행상태");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Edit("in_edit_school","525","60","294","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("2");
            obj.set_accessibilitylabel("학교명");
            obj.set_inputfilter("sign,symbol");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("label_survnm","525","10",null,"30","50",null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("8");
            obj.set_text("label_survnm");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","60","64","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("9");
            obj.set_text("학제구분");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_schkind","112","60","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("10");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_schkind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Combo("in_cb_viewCnt","112","110","210","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("11");
            obj.set_accessibilitylabel("조사회차");
            obj.set_innerdataset("ds_viewCntList");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("0");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","25","110","69","30",null,null,null,null,null,null,this.Div.form.div_searchArea.form);
            obj.set_taborder("12");
            obj.set_text("항목표시");
            this.Div.form.div_searchArea.addChild(obj.name, obj);

            obj = new Div("btnArea","30","div_searchArea:0","1202","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_fileDn","0","21","100","30",null,null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("0");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty05");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_return",null,"21","120","30","150",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("1");
            obj.set_text("신입생정보 반려");
            obj.set_cssclass("btn_sty03");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"21","120","30","280",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("2");
            obj.set_text("신입생정보 승인");
            obj.set_cssclass("btn_sty03");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Button("btn_return_dep",null,"21","120","30","2",null,null,null,null,null,this.Div.form.btnArea.form);
            obj.set_taborder("3");
            obj.set_text("학과정보 반려");
            obj.set_cssclass("btn_sty03");
            this.Div.form.btnArea.addChild(obj.name, obj);

            obj = new Grid("gd_list","30","btnArea:0","1200","550",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"75\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"130\"/><Column size=\"235\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"조사기준\"/><Cell col=\"2\" rowspan=\"2\" text=\"학교명\"/><Cell col=\"3\" rowspan=\"2\" text=\"본분교\"/><Cell col=\"4\" colspan=\"3\" text=\"담당자\"/><Cell col=\"7\" rowspan=\"2\" text=\"제출일시\"/><Cell col=\"8\" rowspan=\"2\" text=\"진행상태\"/><Cell row=\"1\" col=\"4\" text=\"이름\"/><Cell row=\"1\" col=\"5\" text=\"이메일\"/><Cell row=\"1\" col=\"6\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"expr:SURVPROSTATUSCD == '2'?'checkboxcontrol':SURVPROSTATUSCD == '4'?'checkboxcontrol':SURVPROSTATUSCD == '6'?'checkboxcontrol':SURVPROSTATUSCD == '7'?'checkboxcontrol':SURVPROSTATUSCD == '8'?'checkboxcontrol':SURVPROSTATUSCD == '9'?'checkboxcontrol':SURVPROSTATUSCD == '10'?'checkboxcontrol':SURVPROSTATUSCD == '11'?'checkboxcontrol':SURVPROSTATUSCD == '12'?'checkboxcontrol':SURVPROSTATUSCD == '13'?'checkboxcontrol':'none'\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SCHNM\" tooltiptext=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGNM\"/><Cell col=\"4\" text=\"bind:USERNM\" tooltiptext=\"bind:USERNM\"/><Cell col=\"5\" text=\"bind:USERID\" tooltiptext=\"bind:USERID\"/><Cell col=\"6\" text=\"bind:TELNO\" tooltiptext=\"bind:TELNO\"/><Cell col=\"7\" text=\"bind:SENDDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" tooltiptext=\"bind:SENDDATE\"/><Cell col=\"8\" text=\"bind:SURVPROSTATUSNM\" tooltiptext=\"bind:SURVPROSTATUSNM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","gd_list:10","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","360","11","480","33",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("pagging");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Grid("gd_list_excel","353","617","860","267",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_excel");
            obj.set_autofittype("col");
            obj.set_cssclass("grid_sty03");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"75\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"130\"/><Column size=\"235\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"25\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"조사기준\"/><Cell col=\"2\" rowspan=\"2\" text=\"학교명\"/><Cell col=\"3\" rowspan=\"2\" text=\"본분교\"/><Cell col=\"4\" colspan=\"3\" text=\"담당자\"/><Cell col=\"7\" rowspan=\"2\" text=\"제출일시\"/><Cell col=\"8\" rowspan=\"2\" text=\"진행상태\"/><Cell row=\"1\" col=\"4\" text=\"이름\"/><Cell row=\"1\" col=\"5\" text=\"이메일\"/><Cell row=\"1\" col=\"6\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" text=\"bind:CHK\" displaytype=\"expr:SURVPROSTATUSCD == '2'?'checkboxcontrol':SURVPROSTATUSCD == '4'?'checkboxcontrol':SURVPROSTATUSCD == '6'?'checkboxcontrol':SURVPROSTATUSCD == '7'?'checkboxcontrol':SURVPROSTATUSCD == '8'?'checkboxcontrol':SURVPROSTATUSCD == '9'?'checkboxcontrol':SURVPROSTATUSCD == '10'?'checkboxcontrol':SURVPROSTATUSCD == '11'?'checkboxcontrol':SURVPROSTATUSCD == '12'?'checkboxcontrol':SURVPROSTATUSCD == '13'?'checkboxcontrol':'none'\"/><Cell col=\"1\" text=\"bind:SURVSEQ\"/><Cell col=\"2\" text=\"bind:SCHNM\" tooltiptext=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGNM\"/><Cell col=\"4\" text=\"bind:USERNM\" tooltiptext=\"bind:USERNM\"/><Cell col=\"5\" text=\"bind:USERID\"/><Cell col=\"6\" text=\"bind:TELNO\"/><Cell col=\"7\" text=\"bind:SENDDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd hh:mm\" calendareditformat=\"yyyy-MM-dd hh:mm\" tooltiptext=\"bind:SENDDATE\"/><Cell col=\"8\" text=\"bind:SURVPROSTATUSNM\" tooltiptext=\"bind:SURVPROSTATUSNM\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new PopupDiv("popDiv_history","1287","75","982","552",null,null,null,null,null,null,this);
            obj.set_text("popDiv_history");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #54666d");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popDiv_return","1287","741","655","475",null,null,null,null,null,null,this);
            obj.set_text("popDiv_00");
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #54666d");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1105,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ad28m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad28m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad28m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.pageRowCnt = 20;
        this.totalRowCnt = 0;

        this.fv_updateApprovalStatus = 0;//반려버튼 구분

        this.fv_SURVSEQ = "";
        this.fv_MENUNM = "관리자>조사진행>신입생정보"

        this.fnCallback = function(serviceId, errCD, errMSG){
        	var unSub = 0

        	if(errCD < 0){
        		//trace(errCD);
        		this.setAccessLog(this.fv_SURVSEQ, "FP", this.fv_MENUNM, serviceId + " : Fail", "");  //접속기록(실패시)
        		alert(errMSG);
        	}else{
        		if(serviceId == "initFpInfo"){
        			this.Div.form.div_searchArea.form.in_cb_year.set_index(0);
        			this.yearChanged();
        			this.searchFpInfoResultCnt();//전체 CNT
        			this.getSurvProStatusNmCnt();   //진행상황별 CNT
        		}
        		if(serviceId == "searchFpInfoResultCnt"){
        			this.totalRowCnt = this.ds_cnt.getColumn(0, "CNT");
        			this.paggingInit();
        			//this.searchFpInfoResultList(this.Div.form.pagingWrap.form.div_pagging.form.fv_pageIdx+1);
        		}
        		if(serviceId == "getSurvProStatusNmCnt"){
        			var unsub    = 0;//미제출
        			var update   = 0;//학과정보수정
        			var deptSub  = 0;//학과정보제출
        			var insert   = 0;//신입생등록
        			var fpSub    = 0;//신입생제출
        			var approval = 0;//KEDI승인

        			for(var i = 0 ;i<this.ds_survProStatusNmCnt.getRowCount();i++){
        				if('1' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        				   '5' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        				   '13' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					unsub += this.ds_survProStatusNmCnt.getColumn(i,'CNT');
        				}

        				if('2' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        				   '3' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					update += this.ds_survProStatusNmCnt.getColumn(i,'CNT');
        				}

        				if('4' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					deptSub += this.ds_survProStatusNmCnt.getColumn(i,'CNT');
        				}

        				if( '6'  == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        					'7'  == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        					'8'  == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        					'9'  == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')||
        					'10' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					insert += this.ds_survProStatusNmCnt.getColumn(i,'CNT')
        				}

        				if('11' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					fpSub += this.ds_survProStatusNmCnt.getColumn(i,'CNT')
        				}

        				if('12' == this.ds_survProStatusNmCnt.getColumn(i,'SURVPROSTATUSCD')){
        					approval += this.ds_survProStatusNmCnt.getColumn(i,'CNT')
        				}
        			}
        			this.Div.form.div_monitor.form.label_unSub.set_text(unsub)       //1번
        			this.Div.form.div_monitor.form.label_deptUpdate.set_text(update);//2번
        			this.Div.form.div_monitor.form.label_deptSub.set_text(deptSub);  //3번
        			this.Div.form.div_monitor.form.label_insert.set_text(insert);    //4번
        			this.Div.form.div_monitor.form.label_fpSub.set_text(fpSub);      //5번
        			this.Div.form.div_monitor.form.label_approval.set_text(approval);//6번
        			var total = unsub+update+deptSub+insert+fpSub+approval;
        			this.Div.form.div_monitor.form.label_total.set_text(total);      //합계
        		}
        		if(serviceId == "searchFpInfoResultList"){

        		}
        		if(serviceId =="updateMultiApproval"){
        			this.getSurvProStatusNmCnt();
        			this.searchFpInfoResultCnt();
        		}
        		if(serviceId =="updateApproval"){
        			this.alert("처리 완료 되었습니다.");
        			this.searchFpInfoResultCnt();
        			this.getSurvProStatusNmCnt();
        		}
        		if(serviceId == "selectstatusList"){
        			this.ds_status.insertRow(0);
        			this.ds_status.setColumn(0,"SURVSEQ","");
        			this.ds_status.setColumn(0,"SURVKINDCD","");
        			this.ds_status.setColumn(0,"CDTYPE","");
        			this.ds_status.setColumn(0,"CD","");
        			this.ds_status.setColumn(0,"CDNM","전체");
        		} else if(serviceId =="selectschkindList"){
        			this.ds_schkind.insertRow(0);
        			this.ds_schkind.setColumn(0,"SURVSEQ","");
        			this.ds_schkind.setColumn(0,"SURVKINDCD","");
        			this.ds_schkind.setColumn(0,"CDTYPE","");
        			this.ds_schkind.setColumn(0,"CD","");
        			this.ds_schkind.setColumn(0,"CDNM","전체");
        		} else if(serviceId == "fpInfoResultListExcel"){
        			if(this.ds_excel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				return;
        			}

        			this.utlf_excelDownload("신입생학생정보제출현황", this.Div.form.gd_list_excel, this.Export00_onsuccess);
        		}
        	}
        }

        this.ad09m00_oninit = function(obj,e)
        {
        	this.initFpInfo();
        };

        // 검색
        this.Div_sub_search00_btn_search_onclick = function(obj,e)
        {
        	this.pageRowCnt = this.Div.form.div_searchArea.form.in_cb_viewCnt.value;
        	this.searchFpInfoResultCnt();//this.searchFpResultCnt();
        	this.getSurvProStatusNmCnt();
        };


        this.Div_div_searchArea_in_cb_year_onitemchanged = function(obj,e)
        {
        	this.yearChanged();
        };

        // 전체 선택
        this.Div_gd_list_onheadclick = function(obj,e)
        {
        	var strType = obj.getCellProperty("head", e.cell, "displaytype");
        	if(strType == "checkboxcontrol"){
        		var strVal = obj.getCellProperty("head", e.cell, "text");
        		var v1_chk = false;

        		if(strVal){
        			obj.setCellProperty("head", e.cell, "text", false); obj.setcell
        			v1_chk = false;
        		} else {
        			obj.setCellProperty("head", e.cell, "text", true);
        			v1_chk = true;
        		}

        		var objDS = obj.getBindDataset();

        		for (var i=0; i<objDS.rowcount; i++){
        			if(objDS.getColumn(i, "CHK") != null){
        				objDS.setColumn(i, "CHK", v1_chk);
        			}
        		}
        	}
        };

        // 승인
        this.Div_btnArea_btn_approval_onclick = function(obj,e)
        {
        	if(this.chkSelect("OK")){
        		return;
        	}
        	this.updateMultiApproval("OK","");
        };

        // 반려
        this.Div_btnArea_btn_return_onclick = function(obj,e)
        {
        	this.fv_updateApprovalStatus = 1;
        	if(this.chkSelect()){
        		return;
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("popReject_info"
        					  , 0
        					  , 0
        					  , 650
        					  , 470
        					  , null
        					  , null
        					  , "AD::popReject.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_autosize("false");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	var objParam = {
        		 SURVYEAR	: this.Div.form.div_searchArea.form.in_cb_year.value
        		 ,updateApprovalStatus : this.fv_updateApprovalStatus
        	};
        	objChildFrame.showModal(this.getOwnerFrame()
        						  , objParam
        						  , this
        						  , "fn_returnCallback");
        };


        // 반려처리연계결과
        this.Div_btnArea_btn_return_dep_onclick = function(obj,e)
        {
        	this.fv_updateApprovalStatus = 2;
        	var objDS = this.Div.form.gd_list.getBindDataset();
        	var chkCnt = 0;				// 반려처리건수
        	var chkStatus = false;		// 접수 상태 체크
        	var status = "";			// 접수상태

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		var tmpStatus = objDS.getColumn(i, "SURVPROSTATUSCD");

        		if(chk == true){
        			chkCnt += 1;
        			if(chkCnt == "1"){
        				status = tmpStatus;
        			}

        			if(status != tmpStatus){
        				chkStatus = true;
        			}

        			if(this.fv_updateApprovalStatus == 1 && tmpStatus < 7){
        				this.alert("[학과정보반려]버튼을 사용해주세요");
        				this.fv_updateApprovalStatus = 0;
        				return true;
        			}

        			if(this.fv_updateApprovalStatus == 2 && tmpStatus >= 7){
        				this.alert("[신입생정보반려]버튼을 사용해주세요");
        				this.fv_updateApprovalStatus = 0;
        				return true;
        			}
        		}
        	}

        	if(chkCnt <= 0){
        		this.alert("반려할 대상을 선택하세요");
        		return;
        	}

        	// 상태가 같은경우만 처리
        	if(chkStatus){
        		this.alert("접수상태가 동일한건만 처리 가능합니다.");
        		return;
        	}

        	/*
        	var objApp = nexacro.getApplication();
        	var mainFrame = objApp.mainframe;
        	var nH = nexacro.toNumber()
        	*/
        	/* Div->objFrame 변경
        	this.popDiv_return.set_url("");
        	this.popDiv_return.trackPopup(300,200,650,470,"fn_returnCallback");
        	this.popDiv_return.set_url("AD::popReturn.xfdl");
        	*/
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("popReject_info"
        					  , 0
        					  , 0
        					  , 650
        					  , 470
        					  , null
        					  , null
        					  , "AD::popReject.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_autosize("false");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	var objParam = {
        		 SURVYEAR	: this.Div.form.div_searchArea.form.in_cb_year.value
        		 ,updateApprovalStatus : this.fv_updateApprovalStatus
        	};
        	objChildFrame.showModal(this.getOwnerFrame()
        						  , objParam
        						  , this
        						  , "fn_returnCallback");
        };

        // 반려팝업 Div -> objFram
        /*this.popDiv_return_onpopup = function(obj:nexacro.PopupDiv,e:nexacro.EventInfo)
        {

        };*/

        this.searchByEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.Div_sub_search00_btn_search_onclick(this.Div.form.div_searchArea.form.btn_search);
        	}
        };

        this.chkSelect = function(sCd){
        	var objDS = this.Div.form.gd_list.getBindDataset();
        	var chkCnt = 0;				// 처리건수
        	var chkStatus = false;		// 접수 상태 체크
        	var status = "";			// 접수상태

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		var tmpStatus = objDS.getColumn(i, "SURVPROSTATUSCD");

        		if(chk == true){
        			chkCnt += 1;
        			if(chkCnt == "1"){
        				status = tmpStatus;
        			}

        			if(status != tmpStatus){
        				chkStatus = true;
        			}

        			if(sCd == 'OK' && tmpStatus == "12"){
        				this.alert("승인된 건을 선택해제 후 재 시도 하시기 바랍니다.");
        				return true;
        			}

        			if(sCd == 'OK' && tmpStatus != "11"){
        				this.alert("진행상태가 [취업-신입생정보 제출] 에서만 [승인]이 가능합니다.\n상태 확인 후 실행 하시기 바랍니다.");
        				return true;
        			}
        		}
        	}

        	if(chkCnt <= 0){
        		this.alert("승인/반려할 학교를 선택하세요");
        		return true;
        	}

        	// 상태가 같은경우만 처리
        	if(chkStatus){
        		this.alert("진행상태가 동일한건만 처리 가능합니다.");
        		return true;
        	}

        }

        // 팝업에서 호출
        this.fn_returnProc = function(rceptcn){
        	if(this.fv_updateApprovalStatus != 0 && this.fv_updateApprovalStatus == 1){
        		this.updateMultiApproval("CANCLE",rceptcn);
        	}else if(this.fv_updateApprovalStatus != 0 && this.fv_updateApprovalStatus == 2){
        		this.updateApproval(rceptcn);
        	}
        	this.fv_updateApprovalStatus = 0;
        	//this.popDiv_return.closePopup(); Div -> objFrame 변경
        }


        this.fn_returnCallback = function(){

        }

        // 팝업
        this.Div_gd_list_oncellclick = function(obj,e)
        {
        	var nRow = this.Div.form.gd_list.getSelectedDatasetRows();
        	var nPos = this.Div.form.gd_list.getCellPos();

        	var survProStatusCd = this.ds_list.getColumn(nRow, "SURVPROSTATUSCD");

        	if(nPos != "0"){
        		if(nPos == "8"){	//수정요청 히스토리
        			this.popDiv_history.set_url("")
        			this.popDiv_history.trackPopup(300, 200);

        			//this.popDiv_history.trackPopupByComponent(this.Div.form.div_searchArea.form.in_cb_year.getOffsetWidth(), this.Div.form.div_searchArea.form.in_cb_year.getOffsetHeight(), 150, 100);
        			this.popDiv_history.set_url("AD::popHistory.xfdl")
        		}else {

        			if(survProStatusCd >= 7){
        				return;
        			}

        			var objChildFrame = new ChildFrame();
        			objChildFrame.init("pop_ad08p00_info"
        							  , 0
        							  , 0
        							  , 1150
        							  , 700
        							  , null
        							  , null
        							  , "AD::ad08p00.xfdl");
        			objChildFrame.set_showtitlebar(false);
        			objChildFrame.set_dragmovetype("all");
        			objChildFrame.set_openalign("center middle");
        			objChildFrame.set_autosize("false");
        			objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        			var objParam = {
        				SURVSEQ 	: this.ds_list.getColumn(nRow, "SURVSEQ")
        				, SURVKINDCD: this.ds_list.getColumn(nRow, "SURVKINDCD")
        				, SCHCD		: this.ds_list.getColumn(nRow, "SCHCD")
        				, ORGCD		: this.ds_list.getColumn(nRow, "ORGCD")
        				, INFO		: this.Div.form.div_searchArea.form.label_survnm.text
        				, SCHNM		: this.ds_list.getColumn(nRow,"SCHNM")
        			};
        			objChildFrame.showModal(this.getOwnerFrame()
        								  , objParam
        								  , this
        								  , "fn_popupCallback");
        		}
        	}
        };

        this.fn_popupCallback = function(strPopupID, strReturn){
        	if(strPopupID == "pop_ad08p00_info"){
        		if("update" == strReturn){
        			this.searchFpInfoResultCnt();
        			this.getSurvProStatusNmCnt();
        		}
        	}
        }

        this.popDiv_history_onpopup = function(obj,e)
        {

        };

        this.initFpInfo = function(){
        	this.gfnTransaction("initFpInfo",
        						"swiss/ad/progress/initFpInfo.do",
        						"",
        						"ds_survList=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // YRAR 선택 후 처리
        this.yearChanged = function(){
        	var choice = this.Div.form.div_searchArea.form.in_cb_year.index;
        	var txt = this.ds_survList.getColumn(choice, "SURVNM") + "(" + this.ds_survList.getColumn(choice, "SURVSTRTDT") +  " ~ " + this.ds_survList.getColumn(choice, "SURVENDDT") + ")"
        	this.Div.form.div_searchArea.form.label_survnm.set_text(txt);

        	this.fv_SURVSEQ = this.ds_survList.getColumn(choice, "SURVSEQ");

        	this.selectstatusList();
        	this.selectschkindList();

        }
        this.selectstatusList = function(){
        	var SURVYEAR	= this.Div.form.div_searchArea.form.in_cb_year.value

        	var strParam = "SURVYEAR="     + SURVYEAR + "ª";
        	strParam    += "SURVKINDCD=FP" + "ª";
        	strParam    += "CDTYPE=0082"   + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectstatusList",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						"ds_status=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        this.selectschkindList = function(){
        	var SURVYEAR = this.Div.form.div_searchArea.form.in_cb_year.value;

        	var strParam = "SURVYEAR="     + SURVYEAR + "ª";
        	strParam    += "SURVKINDCD=FP" + "ª";
        	strParam    += "CDTYPE=0527"   + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("selectschkindList",
        						"swiss/cm/selectCodeList.do",
        						"dsSearch=ds_search",
        						"ds_schkind=dsResult",
        						"",
        						"fnCallback",
        						true);
        }
        // CNT
        this.searchFpInfoResultCnt = function(){
        	var SURVYEAR		= this.Div.form.div_searchArea.form.in_cb_year.value;
        	var SCHKINDCD		= this.Div.form.div_searchArea.form.in_cb_schkind.value;
        	var SCHNM 			= this.Div.form.div_searchArea.form.in_edit_school.value;
        	var SURVPROSTATUSCD	= this.Div.form.div_searchArea.form.in_cb_prostatus.value;

        	var strParam = "SURVYEAR=" 		    + SURVYEAR        + "ª";
        	strParam    += "SCHKINDCD=" 		+ SCHKINDCD       + "ª";
        	strParam    += "SCHNM=" 			+ SCHNM           + "ª";
        	strParam    += "SURVPROSTATUSCD="   + SURVPROSTATUSCD + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("searchFpInfoResultCnt",
        						"swiss/ad/progress/searchFpInfoResultCnt.do",
        						"dsSearch=ds_search",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        //진행상황 CNT
        this.getSurvProStatusNmCnt = function(){

        	var objApp = nexacro.getApplication();

        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='FP'",0);

        	var SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	var SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");

        	var strParam = "SURVSEQ=" 		+ SURVSEQ + "ª";
        	strParam += "SURVKINDCD=" 		+ SURVKINDCD + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("getSurvProStatusNmCnt",
        						"swiss/ad/progress/getSurvProStatusNmCnt.do",
        						"dsSearch=ds_search",
        						"ds_survProStatusNmCnt=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 목록
        this.searchFpInfoResultList = function(sPage){
        	var SURVYEAR		= this.Div.form.div_searchArea.form.in_cb_year.value;
        	var SCHKINDCD		= this.Div.form.div_searchArea.form.in_cb_schkind.value;
        	var SCHNM 			= this.Div.form.div_searchArea.form.in_edit_school.value;
        	var SURVPROSTATUSCD	= this.Div.form.div_searchArea.form.in_cb_prostatus.value;

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end   = sPage       * this.pageRowCnt;
        	var strParam = "SURVYEAR=" 		    + SURVYEAR        + "ª";
        	strParam    += "SCHKINDCD=" 		+ SCHKINDCD       + "ª";
        	strParam    += "SCHNM=" 			+ SCHNM           + "ª";
        	strParam    += "SURVPROSTATUSCD="   + SURVPROSTATUSCD + "ª";
        	strParam    += "START=" + start + "ª";
        	strParam    += "END="   + end   + "ª";

        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, "FP", this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("searchFpInfoResultList",
        						"swiss/ad/progress/searchFpInfoResultList.do",
        						"dsSearch=ds_search",
        						"ds_list=dsResult",
        						"",
        						"fnCallback",
        						true);
        }

        // 승인,반려 처리
        this.updateMultiApproval = function(proc, rceptcn){
        	var objDS = this.Div.form.gd_list.getBindDataset();

        	this.ds_sendSet.deleteAll();

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		if(chk == true){
        			var nRow = this.ds_sendSet.addRow();
        			this.ds_sendSet.copyRow(nRow, this.ds_list, i);

        			// 주의 STATUSCD 승인:12, 반려:13  코드 변경시 JAVA service 부분 변경필수
        			if(proc == "OK"){
        				this.ds_sendSet.setColumn(nRow,"rowType", "FP");
        				this.ds_sendSet.setColumn(nRow,"STATUSCD", "12");	// 12:승인, 13:반려 후 6:인적정보요청으로 변경
        			} else if (proc == "CANCLE") {
        				this.ds_sendSet.setColumn(nRow,"rowType", "FP");
        				this.ds_sendSet.setColumn(nRow,"STATUSCD", "13");	// 12:승인, 13:반려 후 6:인적정보요청으로 변경
        				this.ds_sendSet.setColumn(nRow,"RCEPTCN", rceptcn);
        			}
        		}
        	}

        	if(proc == "CANCLE" && !this.confirm("선택한 학교를 [반려] 하시겠습니까?\n\n학교에서 제출된 자료는 모두 삭제 됩니다.") ){
        		return false;
        	}
        	if(proc == "OK" && !this.confirm("선택한 학교를 [승인] 하시겠습니까?") ){
        		return false;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, "FP", this.fv_MENUNM, proc == "OK" ? "신입생정보 승인" : "신입생정보 반려", "");  //접속기록
        	// 반려일경우 Tr, Master TABLE에서 해당 학교 정보가 모두 삭제됨
        	this.gfnTransaction("updateMultiApproval",
        						"swiss/ad/progress/updateMultiApproval.do",
        						"dsSearch=ds_sendSet",
        						"ds_cnt=dsResult",
        						"",
        						"fnCallback",
        						false);
        	this.alert("처리 완료 되었습니다.");
        	this.searchFpInfoResultCnt();
        	this.getSurvProStatusNmCnt();

        }

        // 반려
        this.updateApproval = function(rceptcn){
        	var objDS = this.Div.form.gd_list.getBindDataset();

        	for(var i=0; i<objDS.rowcount; i++){
        		var chk = objDS.getColumn(i, "CHK");
        		if(chk == true){
        			var SURVSEQ 	= this.ds_list.getColumn(i, "SURVSEQ");
        			var SURVKINDCD  = this.ds_list.getColumn(i, "SURVKINDCD");
        			var SCHCD  		= this.ds_list.getColumn(i, "SCHCD");
        			var ORGCD 		= this.ds_list.getColumn(i, "ORGCD");

        			var strParam = "SURVSEQ=" 		+ SURVSEQ + "ª";
        			strParam += "SURVKINDCD=" 		+ SURVKINDCD + "ª";
        			strParam += "SCHCD=" 			+ SCHCD + "ª";
        			strParam += "ORGCD="  			+ ORGCD + "ª";
        			strParam += "STATUSCD=5ª"; 			// 5:반려, 3:수정완료

        			strParam += "RCEPTCN="  		+ rceptcn + "ª";

        			dsParamSetArrowBlank(this.ds_search, strParam);
        			this.setAccessLog(this.fv_SURVSEQ, "FP", this.fv_MENUNM, "학과정보 반려", strParam);  //접속기록
        			this.gfnTransaction("updateApproval",
        								"swiss/ad/progress/updateApproval.do",
        								"dsSearch=ds_search",
        								"ds_list=dsResult",
        								"",
        								"fnCallback",
        								true);
        		}
        	}
        }

        // 파일저장
        this.Div_btnArea_btn_fileDn_onclick = function(obj,e)
        {

        	var SURVYEAR		= this.Div.form.div_searchArea.form.in_cb_year.value;
        	var SCHKINDCD		= this.Div.form.div_searchArea.form.in_cb_schkind.value;
        	var SCHNM 			= this.Div.form.div_searchArea.form.in_edit_school.value;
        	var SURVPROSTATUSCD	= this.Div.form.div_searchArea.form.in_cb_prostatus.value;

        	var strParam = "SURVYEAR=" 		    + SURVYEAR        + "ª";
        	strParam    += "SCHKINDCD=" 		+ SCHKINDCD       + "ª";
        	strParam    += "SCHNM=" 			+ SCHNM           + "ª";
        	strParam    += "SURVPROSTATUSCD="   + SURVPROSTATUSCD + "ª";
        	strParam    += "START=" 			+ 0               + "ª";
        	strParam    += "END=" 				+ 9999999999999   + "ª";

        	this.setAccessLog(this.fv_SURVSEQ, "FP", this.fv_MENUNM, "파일저장", "");  //접속기록
        	dsParamSetArrowBlank(this.ds_search, strParam);
        	this.gfnTransaction("fpInfoResultListExcel",
        						"swiss/ad/progress/searchFpInfoResultList.do",
        						"dsSearch=ds_search",
        						"ds_excel=dsResult",
        						"",
        						"fnCallback",
        						true);
        };
        this.Export00_onsuccess = function (obj, e )
        {

        }

        // 페이징 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	this.searchFpInfoResultList(nPage);
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.ad09m00_oninit,this);
            this.Div.form.div_searchArea.form.btn_search.addEventHandler("onclick",this.Div_sub_search00_btn_search_onclick,this);
            this.Div.form.div_searchArea.form.in_cb_year.addEventHandler("onitemchanged",this.Div_div_searchArea_in_cb_year_onitemchanged,this);
            this.Div.form.div_searchArea.form.in_edit_school.addEventHandler("onkeydown",this.searchByEnter,this);
            this.Div.form.div_searchArea.form.in_cb_schkind.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.div_searchArea.form.in_cb_viewCnt.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.btnArea.form.btn_fileDn.addEventHandler("onclick",this.Div_btnArea_btn_fileDn_onclick,this);
            this.Div.form.btnArea.form.btn_return.addEventHandler("onclick",this.Div_btnArea_btn_return_onclick,this);
            this.Div.form.btnArea.form.btn_approval.addEventHandler("onclick",this.Div_btnArea_btn_approval_onclick,this);
            this.Div.form.btnArea.form.btn_return_dep.addEventHandler("onclick",this.Div_btnArea_btn_return_dep_onclick,this);
            this.Div.form.gd_list.addEventHandler("oncellclick",this.Div_gd_list_oncellclick,this);
            this.Div.form.gd_list.addEventHandler("onheadclick",this.Div_gd_list_onheadclick,this);
            this.popDiv_return.addEventHandler("onpopup",this.popDiv_return_onpopup,this);
        };

        this.loadIncludeScript("ad28m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
