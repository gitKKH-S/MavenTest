(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag07m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"dept1\" type=\"STRING\" size=\"256\"/><Column id=\"dept2\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPECD_F9\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F7\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F8\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_F0\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M11\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M12\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M10\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F14\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F15\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F12\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F13\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M15\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M13\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M14\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M8\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F10\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M9\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_F11\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M6\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M7\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M0\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M1\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M4\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M5\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M2\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD_M3\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchoolData", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"STATUSCDNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","882",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","880",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","880",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_excel","1130","390","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","200","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","1059","64","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","30","11","34","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("분류");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","Static00_01_01:31","12","439","135",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_direction("vertical");
            obj.set_rowcount("6");
            obj.set_fittocontents("width");
            var Div_form_sub_search_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_rdo_00_innerdataset", obj);
            Div_form_sub_search_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">단과대학</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">학과</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">단과대학+학과</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">단과대학+학과+학과소분류</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">7대계열</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">소계열</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_rdo_00_innerdataset);
            obj.set_text("단과대학");
            obj.set_value("1");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00","410","11","44","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("주야간");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Radio("in_rdo_01","Static00_01_01_00:31","12","212","50",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var Div_form_sub_search_form_in_rdo_01_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_rdo_01_innerdataset", obj);
            Div_form_sub_search_form_in_rdo_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">구분</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">구분없음</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_rdo_01_innerdataset);
            obj.set_text("구분");
            obj.set_value("1");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Grid("gd_01","30","430","1200","440",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_cssclass("grid_sty04");
            obj.set_autofittype("none");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"0\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\" band=\"head\"/><Row size=\"40\"/><Row size=\"40\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"단과대학\"/><Cell col=\"1\" rowspan=\"2\" text=\"학과\"/><Cell col=\"2\" rowspan=\"2\" text=\"학과소분류\"/><Cell col=\"3\" rowspan=\"2\" text=\"주야간구분\"/><Cell col=\"4\" colspan=\"3\" text=\"졸업자\"/><Cell col=\"7\" colspan=\"3\" text=\"취업자합계\"/><Cell col=\"10\" colspan=\"3\" text=\"건강보험가입취업자\"/><Cell col=\"13\" colspan=\"3\" text=\"교내취업자\"/><Cell col=\"16\" colspan=\"3\" text=\"해외취업자\"/><Cell col=\"19\" colspan=\"3\" text=\"농림어업종사자\"/><Cell col=\"22\" colspan=\"3\" text=\"개인창작활동종사자\"/><Cell col=\"25\" colspan=\"3\" text=\"1인(창)사업자\"/><Cell col=\"28\" colspan=\"3\" text=\"진학자(국내)\"/><Cell col=\"31\" colspan=\"3\" text=\"진학자(국외)\"/><Cell col=\"34\" colspan=\"3\" text=\"입대자\"/><Cell col=\"37\" colspan=\"3\" text=\"취업불가능자\"/><Cell col=\"40\" colspan=\"3\" text=\"제외인정자\"/><Cell col=\"43\" colspan=\"3\" text=\"기타\"/><Cell col=\"46\" colspan=\"3\" text=\"미상\" border=\"0px none,0px none,1px solid #e3c89c\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"남자\"/><Cell row=\"1\" col=\"6\" text=\"여자\"/><Cell row=\"1\" col=\"7\" text=\"계\"/><Cell row=\"1\" col=\"8\" text=\"남자\"/><Cell row=\"1\" col=\"9\" text=\"여자\"/><Cell row=\"1\" col=\"10\" text=\"계\"/><Cell row=\"1\" col=\"11\" text=\"남자\"/><Cell row=\"1\" col=\"12\" text=\"여자\"/><Cell row=\"1\" col=\"13\" text=\"계\"/><Cell row=\"1\" col=\"14\" text=\"남자\"/><Cell row=\"1\" col=\"15\" text=\"여자\"/><Cell row=\"1\" col=\"16\" text=\"계\"/><Cell row=\"1\" col=\"17\" text=\"남자\"/><Cell row=\"1\" col=\"18\" text=\"여자\"/><Cell row=\"1\" col=\"19\" text=\"계\"/><Cell row=\"1\" col=\"20\" text=\"남자\"/><Cell row=\"1\" col=\"21\" text=\"여자\"/><Cell row=\"1\" col=\"22\" text=\"계\"/><Cell row=\"1\" col=\"23\" text=\"남자\"/><Cell row=\"1\" col=\"24\" text=\"여자\"/><Cell row=\"1\" col=\"25\" text=\"계\"/><Cell row=\"1\" col=\"26\" text=\"남자\"/><Cell row=\"1\" col=\"27\" text=\"여자\"/><Cell row=\"1\" col=\"28\" text=\"계\"/><Cell row=\"1\" col=\"29\" text=\"남자\"/><Cell row=\"1\" col=\"30\" text=\"여자\"/><Cell row=\"1\" col=\"31\" text=\"계\"/><Cell row=\"1\" col=\"32\" text=\"남자\"/><Cell row=\"1\" col=\"33\" text=\"여자\"/><Cell row=\"1\" col=\"34\" text=\"계\"/><Cell row=\"1\" col=\"35\" text=\"남자\"/><Cell row=\"1\" col=\"36\" text=\"여자\"/><Cell row=\"1\" col=\"37\" text=\"계\"/><Cell row=\"1\" col=\"38\" text=\"남자\"/><Cell row=\"1\" col=\"39\" text=\"여자\"/><Cell row=\"1\" col=\"40\" text=\"계\"/><Cell row=\"1\" col=\"41\" text=\"남자\"/><Cell row=\"1\" col=\"42\" text=\"여자\"/><Cell row=\"1\" col=\"43\" text=\"계\"/><Cell row=\"1\" col=\"44\" text=\"남자\"/><Cell row=\"1\" col=\"45\" text=\"여자\"/><Cell row=\"1\" col=\"46\" text=\"계\"/><Cell row=\"1\" col=\"47\" text=\"남자\"/><Cell row=\"1\" col=\"48\" text=\"여자\" border=\"0px none,0px none,1px solid #e3c89c\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\"/><Cell col=\"1\" text=\"bind:DEPTNM\"/><Cell col=\"2\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"3\" text=\"bind:DNNM\"/><Cell col=\"4\" text=\"expr:JOBTYPECD_M0+JOBTYPECD_F0\"/><Cell col=\"5\" text=\"bind:JOBTYPECD_M0\"/><Cell col=\"6\" text=\"bind:JOBTYPECD_F0\"/><Cell col=\"7\" text=\"expr:JOBTYPECD_M1+JOBTYPECD_F1\"/><Cell col=\"8\" text=\"bind:JOBTYPECD_M1\"/><Cell col=\"9\" text=\"bind:JOBTYPECD_F1\"/><Cell col=\"10\" text=\"expr:JOBTYPECD_M2+JOBTYPECD_F2\"/><Cell col=\"11\" text=\"bind:JOBTYPECD_M2\"/><Cell col=\"12\" text=\"bind:JOBTYPECD_F2\"/><Cell col=\"13\" text=\"expr:JOBTYPECD_M3+JOBTYPECD_F3\"/><Cell col=\"14\" text=\"bind:JOBTYPECD_M3\"/><Cell col=\"15\" text=\"bind:JOBTYPECD_F3\"/><Cell col=\"16\" text=\"expr:JOBTYPECD_M4+JOBTYPECD_F4\"/><Cell col=\"17\" text=\"bind:JOBTYPECD_M4\"/><Cell col=\"18\" text=\"bind:JOBTYPECD_F4\"/><Cell col=\"19\" text=\"expr:JOBTYPECD_M5+JOBTYPECD_F5\"/><Cell col=\"20\" text=\"bind:JOBTYPECD_M5\"/><Cell col=\"21\" text=\"bind:JOBTYPECD_F5\"/><Cell col=\"22\" text=\"expr:JOBTYPECD_M6+JOBTYPECD_F6\"/><Cell col=\"23\" text=\"bind:JOBTYPECD_M6\"/><Cell col=\"24\" text=\"bind:JOBTYPECD_F6\"/><Cell col=\"25\" text=\"expr:JOBTYPECD_M7+JOBTYPECD_F7\"/><Cell col=\"26\" text=\"bind:JOBTYPECD_M7\"/><Cell col=\"27\" text=\"bind:JOBTYPECD_F7\"/><Cell col=\"28\" text=\"expr:JOBTYPECD_M8+JOBTYPECD_F8\"/><Cell col=\"29\" text=\"bind:JOBTYPECD_M8\"/><Cell col=\"30\" text=\"bind:JOBTYPECD_F8\"/><Cell col=\"31\" text=\"expr:JOBTYPECD_M9+JOBTYPECD_F9\"/><Cell col=\"32\" text=\"bind:JOBTYPECD_M9\"/><Cell col=\"33\" text=\"bind:JOBTYPECD_F9\"/><Cell col=\"34\" text=\"expr:JOBTYPECD_M10+JOBTYPECD_F10\"/><Cell col=\"35\" text=\"bind:JOBTYPECD_M10\"/><Cell col=\"36\" text=\"bind:JOBTYPECD_F10\"/><Cell col=\"37\" text=\"expr:JOBTYPECD_M11+JOBTYPECD_F11\"/><Cell col=\"38\" text=\"bind:JOBTYPECD_M11\"/><Cell col=\"39\" text=\"bind:JOBTYPECD_F11\"/><Cell col=\"40\" text=\"expr:JOBTYPECD_M12+JOBTYPECD_F12\"/><Cell col=\"41\" text=\"bind:JOBTYPECD_M12\"/><Cell col=\"42\" text=\"bind:JOBTYPECD_F12\"/><Cell col=\"43\" text=\"expr:JOBTYPECD_M13+JOBTYPECD_F13\"/><Cell col=\"44\" text=\"bind:JOBTYPECD_M13\"/><Cell col=\"45\" text=\"bind:JOBTYPECD_F13\"/><Cell col=\"46\" text=\"expr:JOBTYPECD_M15+JOBTYPECD_F15\"/><Cell col=\"47\" text=\"bind:JOBTYPECD_M15\"/><Cell col=\"48\" text=\"bind:JOBTYPECD_F15\" border=\"0px none,0px none,1px solid #e3c89c\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M0&quot;)+dataset.getSum(&quot;JOBTYPECD_F0&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M0&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F0&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M1&quot;)+dataset.getSum(&quot;JOBTYPECD_F1&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M1&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F1&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M2&quot;)+dataset.getSum(&quot;JOBTYPECD_F2&quot;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M2&quot;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F2&quot;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M3&quot;)+dataset.getSum(&quot;JOBTYPECD_F3&quot;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M3&quot;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F3&quot;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M4&quot;)+dataset.getSum(&quot;JOBTYPECD_F4&quot;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M4&quot;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F4&quot;)\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M5&quot;)+dataset.getSum(&quot;JOBTYPECD_F5&quot;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M5&quot;)\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F5&quot;)\"/><Cell col=\"22\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M6&quot;)+dataset.getSum(&quot;JOBTYPECD_F6&quot;)\"/><Cell col=\"23\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M6&quot;)\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F6&quot;)\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M7&quot;)+dataset.getSum(&quot;JOBTYPECD_F7&quot;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M7&quot;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F7&quot;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M8&quot;)+dataset.getSum(&quot;JOBTYPECD_F8&quot;)\"/><Cell col=\"29\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M8&quot;)\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F8&quot;)\"/><Cell col=\"31\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M9&quot;)+dataset.getSum(&quot;JOBTYPECD_F9&quot;)\"/><Cell col=\"32\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M9&quot;)\"/><Cell col=\"33\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F9&quot;)\"/><Cell col=\"34\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M10&quot;)+dataset.getSum(&quot;JOBTYPECD_F10&quot;)\"/><Cell col=\"35\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M10&quot;)\"/><Cell col=\"36\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F10&quot;)\"/><Cell col=\"37\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M11&quot;)+dataset.getSum(&quot;JOBTYPECD_F11&quot;)\"/><Cell col=\"38\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M11&quot;)\"/><Cell col=\"39\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F11&quot;)\"/><Cell col=\"40\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M12&quot;)+dataset.getSum(&quot;JOBTYPECD_F12&quot;)\"/><Cell col=\"41\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M12&quot;)\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F12&quot;)\"/><Cell col=\"43\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M13&quot;)+dataset.getSum(&quot;JOBTYPECD_F13&quot;)\"/><Cell col=\"44\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M13&quot;)\"/><Cell col=\"45\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F13&quot;)\"/><Cell col=\"46\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M15&quot;)+dataset.getSum(&quot;JOBTYPECD_F15&quot;)\"/><Cell col=\"47\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_M15&quot;)\"/><Cell col=\"48\" text=\"expr:dataset.getSum(&quot;JOBTYPECD_F15&quot;)\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_cssclass("stepArea");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("ag01m00","0","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag02m00","266","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag03m00","133","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00","399","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("3");
            obj.set_text("모니터링");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag05m01","532","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("4");
            obj.set_text("정보등록");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag07m00","665","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("5");
            obj.set_text("결과집계");
            obj.set_cssclass("step01 on03");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag02m00_s","254","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag03m00_s","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag04m00_s","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag05m02_s","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag01m00_s","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag07m00_s","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step on03");
            obj.set_text("");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_text("결과조회");
            obj.set_cssclass("step01  last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00_s","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00_s","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","stepArea01_00:20","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st03","30","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","10","113","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","10","584","29",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_date03","30","45","120","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date03:10","45","606","30",null,null,null,null,null,null,this.Div.form.Div_surv.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.Div_surv.addChild(obj.name, obj);

            obj = new Static("tableTitle","30","400","960","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("결과집계 장표에는 취업구분항목에 외국인유학생이 포함되어 있습니다.");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,890,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag07m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ag07m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag07m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SCHCD = "";
        this.fv_ORGCD = "";
        this.fv_SURVKINDCD = "";
        this.fv_USERGRPTYPE = "";
        this.fv_SURVOBJ = "";
        this.fv_SURVNM = "";

        this.fv_SURVSTRTDT = "";
        this.fv_SURVENDDT = "";

        this.fv_MENUNM = "졸업후상황>결과집계";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		trace(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{

        		if(serviceID == "listSchool"){
        			this.dsMain.clearData();
        			if(this.dsSchool.rowcount==0){
        				alert("대상 학교가 없습니다.");
        				return;
        			}
        			if("6" == this.fv_USERGRPTYPE){
        				this.Div.form.div_school.form.label_school.set_text(this.dsSchool.getColumn(0,"SCHORGNM"));
        			}
        			var idx = 0;
        			if(this.dsSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0) > -1) {
        				idx = this.dsSchool.findRowExpr("SCHCD == '"+objApp.gds_param.getColumn(0,"SCHCD")+"' && ORGCD == '"+objApp.gds_param.getColumn(0,"ORGCD")+"'",0);
        			}
         			this.Div.form.div_school.form.in_cb_00.set_index(idx);
        		}
        		if(serviceID == "listResult"){
        			this.item_onitemchanged();
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			//trace(this.dsMain.saveXML());
        		}
         	}
        }

        this.ag07m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        	this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");

        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	if("6" == this.fv_USERGRPTYPE){
        		this.Div.form.div_school.form.in_cb_00.set_enable(false);
        	}

        	this.lfn_divSurvSet();
        };

        this.btn_search_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";

        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";

        	strParam += "GBN="			+ this.Div.form.sub_search.form.in_rdo_00.value		+ "ª";
        	strParam += "DNYN="			+ this.Div.form.sub_search.form.in_rdo_01.value		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listResult",
        						"/swiss/ag/resultsum/listResult.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsMain",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_excel_onclick = function(obj,e)
        {
        	if(this.dsMain.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";

        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";

        	strParam += "GBN="			+ this.Div.form.sub_search.form.in_rdo_00.value		+ "ª";
        	strParam += "DNYN="			+ this.Div.form.sub_search.form.in_rdo_01.value		+ "ª";
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록

        	this.utlf_excelDownload("결과집계",this.Div.form.gd_01,this.Export00_onsuccess);
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	trace(e.eventid);
        }

        this.item_onitemchanged = function()
        {
        	this.Div.form.gd_01.setCellProperty( "head", 0, "text", "단과대학");
        	if( "5" == this.Div.form.sub_search.form.in_rdo_00.value){
        		this.Div.form.gd_01.setCellProperty( "head", 0, "text", "대계열");
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 0);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 0);
        	}else if( "6" == this.Div.form.sub_search.form.in_rdo_00.value){
        		this.Div.form.gd_01.setCellProperty( "head", 0, "text", "소계열");
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 0);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 0);
        	}else if( "2" == this.Div.form.sub_search.form.in_rdo_00.value){
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 0);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 0);
        	}else if( "3" == this.Div.form.sub_search.form.in_rdo_00.value){
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 0);
        	}else if( "4" == this.Div.form.sub_search.form.in_rdo_00.value){
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 125);
        	}else{
        		this.Div.form.gd_01.setCellProperty( "head", 0, "text", "단과대학");
        		this.Div.form.gd_01.setFormatColProperty(0, "size", 125);
        		this.Div.form.gd_01.setFormatColProperty(1, "size", 0);
        		this.Div.form.gd_01.setFormatColProperty(2, "size", 0);
        	}
        	if( "1" != this.Div.form.sub_search.form.in_rdo_01.value){
        		this.Div.form.gd_01.setFormatColProperty(3, "size", 0);
        		//this.Div.form.gd_01.deleteContentsCol("body",1);
        	}else{
        		//this.Div.form.gd_01.insertContentsCol("body",1,true);
        		this.Div.form.gd_01.setFormatColProperty(3, "size", 125);
        	}
        }

        //메뉴처리
        this.lfn_goMenu = function(obj,e)
        {
        	if(this.name == obj.id ){
        		return;
        		//this.reload();
        	}

        	var menuid = obj.id ;

        	if("6" == this.fv_USERGRPTYPE){
        		if("ag01m00" !=menuid && "ag03m00" !=menuid
        			&& "ag05m01" !=menuid && "ag08m00" !=menuid ){
        			alert("화면에 대한 권한이 없습니다.");
        			return;
        		}
        		if("ag08m00" == menuid){
        			menuid = "ag08m01";// this.fn_goPage("AG::ag08m01.xfdl");
        		}
        	}

        	this.fv_EVDDOCKIND = objApp.gds_param.getColumn(0,"EVDDOCKIND");
        	if(menuid =='ag09m00' && "2" == this.fv_EVDDOCKIND ){
        		menuid = "ag09m01";// this.fn_goPage("AG::ag09m01.xfdl");
        	}

        	this.fn_goPage("AG::"+menuid +".xfdl");
        };


        this.lfn_divSurvSet = function(){

        	/*조사기준, 조사기간 설정 : 현재시간에 해당하는 설정 확인*/
        	var toDate     = objApp.gds_param.getColumn(0, "TODATE");
        	var survStrtdt = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        	var survEnddt  = objApp.gds_param.getColumn(0, "SURVENDDT");
        	if(toDate >= survStrtdt && toDate <= survEnddt){
        		this.fv_SURVSEQ = objApp.gds_param.getColumn(0, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_param.getColumn(0, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_param.getColumn(0, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_param.getColumn(0, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_param.getColumn(0, "SURVNM");
        	}else{
        		var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        		this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        		this.fv_SURVOBJ = objApp.gds_login_info.getColumn(idx, "SURVOBJ");
        		this.fv_SURVSTRTDT = objApp.gds_login_info.getColumn(idx, "SURVSTRTDT");
        		this.fv_SURVENDDT = objApp.gds_login_info.getColumn(idx, "SURVENDDT");
        		this.fv_SURVNM = objApp.gds_login_info.getColumn(idx, "SURVNM");
        	}

        	this.Div.form.Div_surv.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.Div_surv.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.Div_surv.form.reser_obj_result.set_text(survinfo) ;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag07m00_onload,this);
            this.Div.form.btn_excel.addEventHandler("onclick",this.Div_btn_excel_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.sub_search.form.in_rdo_00.addEventHandler("onitemchanged",this.Common_onitemchanged,this);
            this.Div.form.sub_search.form.in_rdo_01.addEventHandler("onitemchanged",this.Common_onitemchanged,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
        };

        this.loadIncludeScript("ag07m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
