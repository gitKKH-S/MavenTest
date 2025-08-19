(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag02m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVINFONM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"dept1\" type=\"STRING\" size=\"256\"/><Column id=\"dept2\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelBf", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ISPASSWD\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INFOSMSSENDYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWDDIFFCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ISPASSWD\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INFOSMSSENDYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch01", this);
            obj._setContents("<ColumnInfo><Column id=\"ISDEPT\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsValid", this);
            obj._setContents("<ColumnInfo><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EMAILADDR\">이메일주소,maxlength:45,email</Col><Col id=\"USERNM\">담당자명,maxlength:25</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"PRGSTATUSDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ISPASSWD\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INFOSMSSENDYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"RCEPTCN\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new VirtualFile("VirtualFile00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","940",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","930",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","930",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div03","30","197","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","190","50",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("0");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","134","30",null,null,null,null,null,null,this.Div.form.Div03.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과담당자 유무설정");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","717","0","33","50",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("6");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div01_00","524","0","53","50",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("7");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","610","10","122","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("증빙자료 등록구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_00","220","10","122","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("학과담당자존재");
            obj.set_truevalue("1");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","780","10","200","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("4");
            obj.set_direction("horizontal");
            obj.set_rowcount("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var Div_form_Div03_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("Div_form_Div03_form_in_rdo_00_innerdataset", obj);
            Div_form_Div03_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일괄등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">개별등록</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_Div03_form_in_rdo_00_innerdataset);
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_01","1020","10","100","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty08");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Button("btn_00","400","10","100","30",null,null,null,null,null,null,this.Div.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div03.addChild(obj.name, obj);

            obj = new Div("Div01","30","Div03:10","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","190","50",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","134","30",null,null,null,null,null,null,this.Div.form.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학과담당자 일괄등록");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_03","220","10","180","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("학과리스트양식 다운로드");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_04","430","10","180","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("학과리스트 업로드");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","30","Div01:10","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","190","50",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("0");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","62","30",null,null,null,null,null,null,this.Div.form.Div02.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("담당자명");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search","750","10","100","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_01","600","10","120","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("미지정학과보기");
            obj.set_truevalue("1");
            obj.set_falsevalue("2");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","220","10","320","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_2","30","Div02:10","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00_2","0","0","190","50",null,null,null,null,null,null,this.Div.form.Div02_2.form);
            obj.set_taborder("0");
            obj.set_border("0px none,1px solid #a5a5a5,0px none,0px none");
            this.Div.form.Div02_2.addChild(obj.name, obj);

            obj = new Static("Static00_2","30","10","62","30",null,null,null,null,null,null,this.Div.form.Div02_2.form.Div00_2.form);
            obj.set_taborder("0");
            obj.set_text("편의기능");
            obj.set_textAlign("center");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02_2.form.Div00_2.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_01_2","220","10","139","30",null,null,null,null,null,null,this.Div.form.Div02_2.form);
            obj.set_taborder("1");
            obj.set_text("미입력자 기타설정");
            obj.set_truevalue("1");
            obj.set_falsevalue("2");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02_2.addChild(obj.name, obj);

            obj = new Button("btn_01_2","359","10","100","30",null,null,null,null,null,null,this.Div.form.Div02_2.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty08");
            this.Div.form.Div02_2.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","498","1200","320",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("dsMain");
            obj.set_cssclass("grid_sty04");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"42\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"단과대학명\"/><Cell col=\"4\" text=\"학과명\"/><Cell col=\"5\" text=\"학과소분류명\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"담당자명\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"이메일주소\"/><Cell col=\"10\" text=\"비밀번호&#13;&#10;생성여부\" padding=\"0px\"/><Cell col=\"11\" text=\"안내메일&#13;&#10;전송여부\" border=\"0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none\" padding=\"0px\"/><Cell col=\"12\" border=\"0px none,0px,1px solid #e6c9c0,0px none\" text=\"로그인&#13;&#10;잠김\" padding=\"0px\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:SCHNM\" tooltiptext=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"4\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"5\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"6\" text=\"bind:DNNM\" tooltiptext=\"bind:DNNM\"/><Cell col=\"7\" text=\"bind:USERNM\" displaytype=\"editcontrol\" edittype=\"text\" padding=\"2px\"/><Cell col=\"8\" text=\"bind:MOBILENO\" displaytype=\"editcontrol\" edittype=\"text\" maskeditformat=\"###-####-####\" maskedittype=\"string\" padding=\"2px\"/><Cell col=\"9\" text=\"bind:EMAILADDR\" displaytype=\"expr:!(USERID)?'editcontrol':'normal'\" edittype=\"expr:!(USERID)?'text':'none'\" padding=\"2px\"/><Cell col=\"10\" text=\"expr:ISPASSWD=='1'?'예':'아니요'\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"expr:INFOSMSSENDYN=='1'?'예':'아니요'\" displaytype=\"normal\" border=\"0px none,1px solid #e6c9c0,1px solid #e6c9c0,0px none\"/><Cell col=\"12\" border=\"0px none,0px,1px solid #e6c9c0,0px none\" text=\"bind:PASSWDDIFFCNT\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_05","30","460","120","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("안내메일전송");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_06","1010","460","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_07","1130","460","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_sty08");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_08","210","460","120","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("로그인 잠금해제");
            obj.set_cssclass("btn_sty04");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","70","608","1125","100",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_autofittype("none");
            obj.set_binddataset("dsExcelBf");
            obj.set_visible("false");
            obj.set_cellmovingtype("none");
            obj.set_cssclass("grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"단과대학코드\" background=\"#c4c4c4\"/><Cell col=\"1\" text=\"단과대학명\" background=\"#c4c4c4\"/><Cell col=\"2\" text=\"학과코드\" background=\"#c4c4c4\"/><Cell col=\"3\" text=\"학과명\" background=\"#c4c4c4\"/><Cell col=\"4\" text=\"학과소분류명\" background=\"#c4c4c4\"/><Cell col=\"5\" text=\"주야구분코드\" background=\"#c4c4c4\"/><Cell col=\"6\" text=\"주야구분\" background=\"#c4c4c4\"/><Cell col=\"7\" text=\"담당자명\"/><Cell col=\"8\" text=\"연락처\"/><Cell col=\"9\" text=\"이메일주소\"/></Band><Band id=\"body\"><Cell text=\"bind:COLCD\"/><Cell col=\"1\" text=\"bind:COLNM\"/><Cell col=\"2\" text=\"bind:DEPTCD\"/><Cell col=\"3\" text=\"bind:DEPTNM\"/><Cell col=\"4\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"5\" text=\"bind:DNCD\"/><Cell col=\"6\" text=\"bind:DNNM\"/><Cell col=\"7\" text=\"bind:USERNM\"/><Cell col=\"8\" text=\"bind:MOBILENO\" edittype=\"none\" editinputtype=\"digit\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:EMAILADDR\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","82","1200","95",null,null,null,null,null,null,this.Div.form);
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

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
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
            obj.set_cssclass("step01 on03");
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
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01","254","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag01m00_s","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("6");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m00","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01 ");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Button("toolTip","155","460","31","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("toolQRed");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("toolTip00","335","460","31","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("toolQRed");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","62","860","570","130",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","207","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("안내메일전송");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static02","20","33","537","83",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("학과담당자 등록 후 [안내메일전송] 버튼을 클릭하면,\r\n임시 비밀번호가 생성되어 등록된 학과담당자 이메일 주소로 비밀번호가 발송됩니다.\r\n※ 클릭할 때마다 비밀번호가 변경되어 메일로 발송되므로 주의 바람.\r\n→ 여러 번 메일이 발송된 경우, 가장 최근 메일의 비밀번호로 로그인\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            obj.set_font("bold 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","505","850","450","420",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","766","856","570","164",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","207","26",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("로그인 잠금해제");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static02","20","33","443","120",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("학과담당자가 비밀번호 입력을 5회 이상 틀리면 로그인이 잠깁니다.\r\n로그인이 잠긴 학과담당자를 선택 후 [로그인 잠금해제] 버튼을\r\n클릭하면 잠금이 해제됩니다.\r\n※비밀번호 초기화가 필요한 경우 해당 인원만 체크 후\r\n[안내메일전송]버튼을 클릭하십시오.");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            obj.set_font("bold 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","505","850","350","420",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv01");
            obj.set_boxShadow("1px 1px 1px #");
            this.PopupDiv01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,930,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div.form.Div03.form.in_chkBox_00","value","dsUserSchool","CHGPSNYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div.form.Div03.form.in_rdo_00","value","dsUserSchool","EVDDOCKIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div.form.Div02.form.in_chkBox_01","value","dsSearch01","ISDEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div.form.Div02.form.in_edit_00","value","dsSearch01","USERNM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag02m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ag02m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ag02m00.xfdl", function() {
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
        this.fv_CHANGEYN = "";

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";
        this.fv_CHGPSNYN = "";
        this.fv_EVDDOCKIND = "";

        this.fv_DEPTSTATUS = "";

        this.fv_MENUNM = "졸업후상황>환경설정";

        this.fv_SURVTERM ="";
        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        //alert("serviceid="+serviceID+", errcd="+errCD+", errmsg="+errMSG);
        	if(errCD < 0){
        		//trace(errCD);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		alert(errMSG);
        	}else{

        		if(serviceID == "updateChgpsnyn"){
        			this.lfn_enableSet(this.fv_CHGPSNYN);
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        			this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);
        			alert("학과담당자 유무설정이 저장되었습니다.");
        		}
        		if(serviceID == "updateEvddockind"){
        			this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);
        			alert("증빙자료 등록구분이 저장되었습니다.");
        		}
        		if(serviceID == "updateEmptyToTmp"){
        			this.utlf_refreshGdsSchoolInfo(this.fv_SURVKINDCD);
        			alert("미연계자 기타처리구분이  저장되었습니다.");
        		}
        		if(serviceID == "insertAllDeptUser"){
        			alert("등록되었습니다.");
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        		}
        		if(serviceID == "insertDeptUser"){
        			alert("등록되었습니다.");
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        		}
        		if(serviceID == "deleteDeptUser"){
        			alert("삭제되었습니다.");
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        		}
        		if(serviceID == "listDeptUser"){
        			//this.dsExcelBf.copyData(this.dsMain);
        			this.dsMain.set_updatecontrol( false );
        			this.dsMain.addColumn("_chk","string",1);
        			this.dsMain.set_updatecontrol( true );
        			//trace(this.dsMain.saveXML());
        		}
        		if(serviceID == "excelDeptUser"){
        			this.utlf_excelDownload("학과리스트양식_"+this.getFormatDate(),this.Div.form.gd_01,this.Export00_onsuccess);
        		}

        		if(serviceID == "updateNewPwd"){
        			alert("로그인 잠금 해제되었습니다.");
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        		}
        		if(serviceID == "smsSendToDeptUser"){
        			this.dsMain.setColumn(this.dsMain.rowposition,"INFOSMSSENDYN","1");
        			alert("안내메일이 전송 되었습니다.");
        			this.btn_search_onclick (this.Div.form.Div02.form.btn_search);
        		}
        		if(serviceID == "getTmp"){
        			//alert("rtn gettmp");
        			//alert("max="+this.dsTmp.rowcount);
        			for(var cnt=0;cnt<this.dsTmp.rowcount;cnt++){
        				var chkname = this.dsTmp.getColumn(cnt,"OPTNAME");
        				var chkopt = this.dsTmp.getColumn(cnt,"OPTVALUE");

        				//alert("chkname="+chkname+", chkopt="+chkopt);

        				if(chkname=="미연계자기타처리"){
        					if(chkopt=="1"){
        						//alert("in chk");
        						this.Div.form.Div02_2.form.in_chkBox_01_2.set_value(1);
        					}
        				}

        				if(chkname=="학과담당자유무설정"){
        					this.fv_DEPTSTATUS = chkopt;
        				}

        				//alert("chkstatus="+this.fv_DEPTSTATUS);
        			}
        		}
         	}
        }

        this.ag02m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");
        	this.fv_CHGPSNYN = objApp.gds_param.getColumn(0, "CHGPSNYN");
        	this.fv_EVDDOCKIND = objApp.gds_param.getColumn(0, "EVDDOCKIND");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");

        	this.lfn_divSurvSet();									// 기본정보 설정

        	this.getTmp();

        	this.lfn_OnPageSet();


        };

        this.getTmp = function()
        {
        	//var optname = "미연계자기타처리";
        	var optname = "";
        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "OPTNAME="		+ optname			+ "ª";

        	//alert("strParam="+strParam);
        	//return false;
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "null값 기타 설정값 조회", strParam);  //접속기록
        	//alert("01");
        	this.gfnTransaction("getTmp",
        						"/swiss/ag/config/getTmp.do",
        						"dsSearch=dsSearch",
        						"dsTmp=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_OnPageSet = function()
        {
        	if(this.fv_SURVTERM !=  "Y"){
        		this.lfn_enableSet("2");
        		this.Div.form.Div03.form.btn_00.set_enable(false);
        		this.Div.form.Div03.form.in_rdo_00.set_enable(false);
        		this.Div.form.Div03.form.btn_01.set_enable(false);
        		this.Div.form.Div02.form.btn_search.set_enable(false);
        		this.Div.form.Div02_2.form.btn_01_2.set_enable(false);
        		alert("조사기간이 아닙니다.");
        		return;
        	}

        	var v_SURVPROSTATUSCD = this.fv_SURVPROSTATUSCD;

        	if( 8 <= v_SURVPROSTATUSCD &&  9 != v_SURVPROSTATUSCD ){ // 취업-데이터 제출
        		//alert("이미 제출되었습니다.");
        		this.lfn_enableSet("2");
        		this.Div.form.Div03.form.btn_00.set_enable(false);
        		this.Div.form.Div03.form.in_rdo_00.set_enable(true);
        		this.Div.form.Div03.form.btn_01.set_enable(true);
        		this.Div.form.Div02_2.form.btn_01_2.set_enable(false);
        	}else if( '12' == v_SURVPROSTATUSCD || 13 < v_SURVPROSTATUSCD){ // 취업담당자
        		this.lfn_enableSet("2");
        		this.Div.form.Div03.form.btn_00.set_enable(false);
        		this.Div.form.Div03.form.in_rdo_00.set_enable(false);
        		this.Div.form.Div03.form.btn_01.set_enable(false);
        		this.Div.form.Div02_2.form.btn_01_2.set_enable(false);
        		//alert("증빙자료가 제출되어 처리 불가능합니다.");
        	}else{
        		this.Div.form.Div03.form.btn_00.set_enable(true);
        		this.Div.form.Div03.form.in_rdo_00.set_enable(true);
        		this.Div.form.Div03.form.btn_01.set_enable(true);
        		this.Div.form.Div02_2.form.btn_01_2.set_enable(true);
        		this.lfn_enableSet(this.fv_CHGPSNYN);
        	}
        	this.utlf_enableBtnByCall();
        	this.btn_search_onclick (this.Div.form.Div02.form.btn_search);

        	if("Y" == this.fv_CHANGEYN){
        		this.Div.form.Div01.form.btn_03.set_enable(true);
        	}

        	if("1" == this.fv_CHGPSNYN){
        		this.Div.form.Div03.form.in_chkBox_00.set_value("1");
        	}

        	if(!this.utlf_IsNull(this.fv_EVDDOCKIND)){
        		this.Div.form.Div03.form.in_rdo_00.set_value(this.fv_EVDDOCKIND);
        	}
        };

        this.lfn_enableSet = function(CHGPSNYN){
        	if( "1" != CHGPSNYN){
        		this.Div.form.Div01.form.btn_03.set_enable(false);
        		this.Div.form.Div01.form.btn_04.set_enable(false);
        		this.Div.form.btn_05.set_enable(false);
        		this.Div.form.btn_06.set_enable(false);
        		this.Div.form.btn_07.set_enable(false);
        		this.Div.form.btn_08.set_enable(false);
        		this.Div.form.gd_00.set_enable(false);
        	}else{
        		this.Div.form.Div01.form.btn_03.set_enable(true);
        		this.Div.form.Div01.form.btn_04.set_enable(true);
        		this.Div.form.btn_05.set_enable(true);
        		this.Div.form.btn_06.set_enable(true);
        		this.Div.form.btn_07.set_enable(true);
        		this.Div.form.btn_08.set_enable(true);
        		this.Div.form.gd_00.set_enable(true);
        	}
        }

        ////////excel start/////////////////////////////////////////////////////////////////
        //excel upload
        this.Div_btn_04_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학과리스트 업로드", "");  //접속기록
        	this.utlf_excelUpload("dsExcel",this.Import00_onsuccess,this.Import00_onerror);
        };

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	//trace("임포트성공");

        	this.dsExcel.deleteRow(0);
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsExcel.rowcount; i++){
        		var nRow = this.dsSave.addRow();
        		this.dsSave.copyRow(nRow,this.dsExcel,i,"COLCD=Column0,COLNM=Column1,DEPTCD=Column2,DEPTNM=Column3,DETAILDEPTNM=Column4,DNCD=Column5,USERNM=Column7,MOBILENO=Column8,EMAILADDR=Column9,USERID=Column9");
        		this.dsSave.addColumn("SURVSEQ","STRING");
        		this.dsSave.setColumn(i,"SURVSEQ",this.fv_SURVSEQ );
        		this.dsSave.addColumn("SURVKINDCD","STRING");
        		this.dsSave.setColumn(i,"SURVKINDCD",this.fv_SURVKINDCD );
        		this.dsSave.addColumn("SCHCD","STRING");
        		this.dsSave.setColumn(i,"SCHCD",this.fv_SCHCD );
        		this.dsSave.addColumn("ORGCD","STRING");
        		this.dsSave.setColumn(i,"ORGCD",this.fv_ORGCD );
        		this.dsSave.addColumn("WORKERID","STRING");
        		this.dsSave.setColumn(i,"WORKERID",this.fv_USERID );
        		if(this.dsSave.getColumn(i,"EMAILADDR"))
        			this.dsSave.setColumn(i,"EMAILADDR",this.utlf_Trim(this.dsSave.getColumn(i,"EMAILADDR")));
        		if(this.dsSave.getColumn(i,"USERID"))
        			this.dsSave.setColumn(i,"USERID",this.utlf_Trim(this.dsSave.getColumn(i,"USERID")));
        		if(this.dsSave.getColumn(i,"USERNM"))
        			this.dsSave.setColumn(i,"USERNM",this.utlf_Trim(this.dsSave.getColumn(i,"USERNM")));

        	}
        	this.lfn_excelSave();
        }

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	//trace("임포트실패");
        }

        this.lfn_excelSave = function()
        {
        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}

        	this.utlf_getValidDataSet(this.dsSave,this.dsValid,this.dsErr);
        	this.gfn_emailDupCheck();
        	//this.gfn_DupCheck();
        	//this.gfn_DeptCheck();
        	//trace(this.dsErr.saveXML());
        	if(this.dsErr.rowcount>0){
        		this.fn_err_pop();
        		return;
        	}

        	this.gfnTransaction("insertAllDeptUser",
        						"/swiss/ag/config/insertAllDeptUser.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };
        ////////excel end /////////////////////////////////////////////////////////////////
        this.gfn_emailDupCheck = function()
        {
        	var dupStr = "";
        	var dupStr2 = "";
        	var dupStr3 = "";
        	var deptErr = "";
        	var isUseKey = true;
        	for(var i=0; i < this.dsSave.rowcount; i++){
        		//id check
        		var DEPTCD = this.dsSave.getColumn(i,"DEPTCD");
        		var DETAILDEPTNM = this.dsSave.getColumn(i,"DETAILDEPTNM");
        		var USERNM = this.dsSave.getColumn(i,"USERNM");
        		var USERID = this.dsSave.getColumn(i,"USERID");
        		var COLCD = this.dsSave.getColumn(i,"COLCD");
        		var EMAILADDR = this.dsSave.getColumn(i,"EMAILADDR");
        		var DNCD = this.dsSave.getColumn(i,"DNCD");
        		var DEPTNM = this.dsSave.getColumn(i,"DEPTNM");
        		var COLNM = this.dsSave.getColumn(i,"COLNM");
        		var MOBILENO = this.dsSave.getColumn(i,"MOBILENO");  // 휴대폰번호에서 연락처로 변경 2021-03-03
        		if(this.dsSave.getColumn(i,"USERID")){
        			var nIDRow = this.dsSave.findRowExpr("DEPTCD=="+"'"+DEPTCD+"' && COLCD=="+"'"+COLCD+"' && DETAILDEPTNM=="+"'"+DETAILDEPTNM+"' && DNCD=="+"'"+DNCD+"' && EMAILADDR =="+"'"+EMAILADDR+"'",i+1);
        			if( nIDRow != -1){
        					//dupStr = dupStr + "["+EMAILADDR+"]"
        					this.lfn_setErr( "["+EMAILADDR+"]"+ "이메일에 중복된 값이 존재 합니다.");
        			}
        		}

        		//요청사항 MOBILENO 은 모든 형식검증 제외 2021-03-03
        		/* 2021-03-03 이전
        		var nRow2 = this.dsSave.findRowExpr("EMAILADDR=="+"'"+EMAILADDR+"' && ( MOBILENO !="+"'"+MOBILENO+"' || USERNM !="+"'"+this.utlf_nvl(USERNM,'')+"')",i+1);
        		if(nRow2 != -1){
        			//dupStr2 = "(["+USERNM+"]"+"["+MOBILENO+"]"+ "["+EMAILADDR+"]) \n";
        			this.lfn_setErr("(["+USERNM+"]"+"["+MOBILENO+"]"+ "["+EMAILADDR+"])"+ " 서로 다른 학과담당자끼리는 이름,번호,메일 중복 업로드가 불가합니다.");
        		}
        		*/

        		//서로 다른 학과담당자끼리는 메일,번호 중복 업로드가 불가해야 함(현재 업로드 가능)
        		var nRow2 = this.dsSave.findRowExpr("EMAILADDR=="+"'"+EMAILADDR+"' && USERNM !="+"'"+this.utlf_nvl(USERNM,'')+"'",i+1);
        		if(nRow2 != -1){
        			//dupStr2 = "(["+USERNM+"]"+"["+MOBILENO+"]"+ "["+EMAILADDR+"]) \n";
        			this.lfn_setErr("(["+USERNM+"]" + "["+EMAILADDR+"])"+ " 서로 다른 학과담당자끼리는 이메일 중복 업로드가 불가합니다.");
        		}

        		//요청사항 MOBILENO 은 모든 형식검증 제외 2021-03-03
        		/* 2021-03-03 이전
        		var nRow3 = this.dsSave.findRowExpr("MOBILENO=="+"'"+MOBILENO+"' && EMAILADDR !="+"'"+EMAILADDR+"'",i+1);
        		if(nRow3 != -1){
        			//dupStr3 = "(["+USERNM+"]"+"["+MOBILENO+"]"+ "["+EMAILADDR+"]) \n";
        			//this.lfn_setErr( "(["+this.dsSave.getColumn(nRow3,"USERNM")+"]"+"["+this.dsSave.getColumn(nRow3,"MOBILENO")+"]"+ "["+this.dsSave.getColumn(nRow3,"EMAILADDR")+"]) "+ " 서로 다른 학과담당자끼리는 메일,번호 중복 업로드가 불가합니다.");
        			this.lfn_setErr( "(["+USERNM+"]"+"["+MOBILENO+"]"+ "["+EMAILADDR+"]) "+ " 서로 다른 학과담당자끼리는 번호,메일 중복 업로드가 불가합니다.");
        		}
        		*/

        		var nRow = this.dsMain.findRowExpr("COLCD=="+"'"+COLCD+"' && DEPTCD=="+"'"+DEPTCD+"' && DNCD=="+"'"+DNCD+"' && DETAILDEPTNM=="+"'"+DETAILDEPTNM+"'",0);
        		if(nRow == -1){
        			this.lfn_setErr( "(["+COLNM+"]["+DEPTNM+"]["+DETAILDEPTNM+"]"+ "["+DNCD+"])" + " 등록대상이 아닌 학과가 있습니다.");
        		}

        		//요청사항 MOBILENO 은 모든 형식검증 제외 2021-03-03
        		/* 2021-03-03 이전
        		if( (USERNM && (!MOBILENO || !EMAILADDR)) || (MOBILENO && (! USERNM || !EMAILADDR)) || (EMAILADDR && (!MOBILENO || !USERNM)) ){
        			this.lfn_setErr("["+EMAILADDR+"] 담당자명,휴대폰번호,이메일주소는 필수 입력사항입니다.");
        		}
        		*/

        		//오류사항별 구분 2021-03-04
        		if(USERNM && !EMAILADDR){
        			this.lfn_setErr("["+USERNM+"] 이메일주소는 필수 입력사항입니다.");
        		}
        		if(EMAILADDR && !USERNM){
        			this.lfn_setErr("["+EMAILADDR+"] 담당자명은 필수 입력사항입니다.");
        		}
        		if(MOBILENO && (! USERNM || !EMAILADDR)){
        			this.lfn_setErr("["+MOBILENO+"] 연락처만 입력되었습니다. 담당자명,이메일주소는 필수 입력사항입니다.");
        		}

        	}
        }

        this.Div_btn_00_onclick = function(obj,e)
        {
        	if(this.fv_DEPTSTATUS=="2"){
        		alert("학과담당자 기능을 사용하실수 없습니다.");
        		return false;
        	}

        	var v_chgpsnyn ="";
        	var strParam = "";

        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID		+ "ª";

        	if("1"==this.Div.form.Div03.form.in_chkBox_00.value){
        		v_chgpsnyn = '1';
        	}else{
        		v_chgpsnyn = '2';
        		this.dsSave.clearData();
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			if(this.dsMain.getColumn(i,"USERID") !=""){
        				var newRow = this.dsSave.addRow();
        				this.dsSave.copyRow(newRow, this.dsMain, i);
        			}
        		}
        	}
        	strParam += "CHGPSNYN="		+ v_chgpsnyn + "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.fv_CHGPSNYN = v_chgpsnyn;
        	if(v_chgpsnyn== "2" && this.dsSave.rowcount>0){
        		if(!this.confirm("학과담당자존재 해제시 등록된 학과담당자는 삭제됩니다. 계속 진행하시겠습니까?")){
        			return;
        		}
        	}
        	if(v_chgpsnyn== "1"){
        		if(!this.confirm("학과담당자 존재 선택하였습니다. 계속 진행하시겠습니까?")){
        			return;
        		}
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장(학과담당자유무설정)", strParam);  //접속기록

        	this.gfnTransaction("updateChgpsnyn",
        						"/swiss/ag/config/updateChgpsnyn.do",
        						"dsSearch=dsSearch dsSave=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_01_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "EVDDOCKIND="	+ this.Div.form.Div03.form.in_rdo_00.value	+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	if(!this.Div.form.Div03.form.in_rdo_00.value){
        		alert("증빙자료 등록구분을 선택해 주세요"); return;
        	}

        	var v_EVDDOCKIND = this.fv_EVDDOCKIND;
        	if(v_EVDDOCKIND && v_EVDDOCKIND !=this.Div.form.Div03.form.in_rdo_00.value ){
        		if(!this.confirm("증빙자료 등록구분 변경시 기존에 입력된 증빙자료는 삭제됩니다.\n 진행 하시겠습니까?")){
        			return;
        		}
        	}

        	this.fv_EVDDOCKIND = this.Div.form.Div03.form.in_rdo_00.value;

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장(증빙자료등록구분)", strParam);  //접속기록
        	this.gfnTransaction("updateEvddockind",
        						"/swiss/ag/config/updateEvddockind.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_03_onclick = function(obj,e)
        {
        	this.fn_deptList();
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	//trace(e.eventid);
        }

        this.Div_btn_06_onclick = function(obj,e)
        {
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"EMAILADDR"))
        			this.dsMain.setColumn(i,"EMAILADDR",this.utlf_Trim(this.dsMain.getColumn(i,"EMAILADDR")));
        		if(this.dsMain.getColumn(i,"USERNM"))
        			this.dsMain.setColumn(i,"USERNM",this.utlf_Trim(this.dsMain.getColumn(i,"USERNM")));
        	}
        	this.dsSave.clearData();
        	this.dsSave.copyData(this.dsMain);
        	//this.dsErr.clearData();
        	this.utlf_getValidDataSet(this.dsSave,this.dsValid,this.dsErr);
        	this.gfn_emailDupCheck();
        	if(this.dsErr.rowcount>0){
        		this.fn_err_pop();
        		return;
        	}
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getRowType( i )=="4"){
        			if(this.dsMain.getColumn(i,"EMAILADDR"))
        				this.dsMain.setColumn(i,"EMAILADDR",this.utlf_Trim(this.dsMain.getColumn(i,"EMAILADDR")));
        			if(this.dsMain.getColumn(i,"USERID"))
        				this.dsMain.setColumn(i,"USERID",this.utlf_Trim(this.dsMain.getColumn(i,"USERID")));
        		//id check
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"USERID",this.dsSave.getColumn(newRow,"EMAILADDR"));
        			this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("저장할 데이터가 없습니다.");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장(학과담당자정보)", "");  //접속기록
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("insertDeptUser",
        						"/swiss/ag/config/insertDeptUser.do",
        						"dsSearch=dsSave:A",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_07_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("삭제할 데이터가 없습니다.");
        		return;
        	}
        	if(!this.confirm("선택한 학과담당자의 정보를 삭제합니다. 계속 하시겠습니까?"))return;
        	//trace(this.dsSave.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "삭제(학과담당자정보)", "");  //접속기록

        	this.gfnTransaction("deleteDeptUser",
        						"/swiss/ag/config/deleteDeptUser.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_btn_08_onclick = function(obj,e)
        {
        	this.dsCopy.clearData();
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(newRow, this.dsMain, i);
        			if(!this.dsCopy.getColumn(newRow,"USERID")){
        				alert("등록되지 않은 데이터는 패스워드를 초기화 할 수 없습니다."); return;
        			}
        			this.dsCopy.setColumn(newRow,"WORKERID", this.fv_USERID);
        		}
        	}
        	if(this.dsCopy.rowcount == 0){
        		this.alert("패스워드를 초기화 할 데이터를 선택해주세요.");
        		return;
        	}
        	//중복제거
        	for(var i=0; i < this.dsCopy.rowcount; i++){
        		var newRow = this.dsSave.addRow();
        		var EMAILADDR = this.dsCopy.getColumn(i,"EMAILADDR");
        		var nIDRow = this.dsSave.findRowExpr("EMAILADDR =="+"'"+EMAILADDR+"'",0);
        		if( nIDRow < 0){
        			this.dsSave.copyRow(newRow, this.dsCopy, i);
        		}else{
        			this.dsSave.deleteRow(newRow);
        		}
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "로그인 잠금해제", "");  //접속기록

        	this.gfnTransaction("updateNewPwd",
        						"/swiss/ag/config/updateNewPwd.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	if("1"==this.Div.form.Div02.form.in_chkBox_01.value){
        		this.dsMain.set_filterstr("!USERID");
        		return;
        	}else{
        		this.dsMain.set_filterstr("");
        	}
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERNM="		+ this.Div.form.Div02.form.in_edit_00.value 		+ "ª";
        	strParam += "ISDEPT="		+ this.Div.form.Div02.form.in_chkBox_01.value 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색(담당자명)", strParam);  //접속기록

        	this.gfnTransaction("listDeptUser",
        						"/swiss/ag/config/listDeptUser.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.fn_deptList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "학과리스트양식 다운로드", strParam);  //접속기록

        	this.gfnTransaction("excelDeptUser",
        						"/swiss/ag/config/listDeptUser.do",
        						"dsSearch=dsSearch",
        						"dsExcelBf=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        //그리드의 head영역의 체크박스 클릭 시 전체 체크
        this.Div_gd_00_onheadclick = function(obj,e)
        {
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);

            if(sColID == "_chk"){
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			this.dsMain.setColumn(i, "_chk", nValue);
        			if(nValue == 0){

        			}else if(nValue == 1){

        			}
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };


        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		if(this.Div.form.Div02.form.btn_search.enable == true){
        			this.btn_search_onclick(this.Div.form.Div02.form.btn_search);
        		}
        	}
        };

        this.Div_btn_05_onclick = function(obj,e)
        {
        	this.dsCopy.clearData();
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsCopy.addRow();
        			this.dsCopy.copyRow(newRow, this.dsMain, i);
        			if(!this.dsCopy.getColumn(newRow,"USERID")){
        				alert("등록되지 않은 데이터는 안내메일를 전송할 수 없습니다."); return;
        			}
        			if(!this.dsCopy.getColumn(newRow,"USERNM") || !this.dsCopy.getColumn(newRow,"EMAILADDR")){
        				alert("담당자명,이메일주소는 필수 입력사항입니다.");
        				return;
        			}
        			//모티터링 처리
        			this.dsCopy.addColumn("RCEPTCN","string");
        			this.dsCopy.setColumn(newRow,"RCEPTCN", "학과["+this.dsCopy.getColumn(newRow,"DEPTNM")+"]에 데이터 등록요청");
        			this.dsCopy.addColumn("STATUSCD","string");
        			this.dsCopy.setColumn(newRow,"STATUSCD","2");//취업-데이터 등록요청
        			this.dsCopy.addColumn("WORKERID","string");
        			this.dsCopy.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	//중복제거
        	for(var i=0; i < this.dsCopy.rowcount; i++){
        		var newRow = this.dsSave.addRow();
        		var EMAILADDR = this.dsCopy.getColumn(i,"EMAILADDR");
        		var nIDRow = this.dsSave.findRowExpr("EMAILADDR =="+"'"+EMAILADDR+"'",0);
        		if( nIDRow < 0){
        			this.dsSave.copyRow(newRow, this.dsCopy, i);
        		}else{
        			this.dsSave.deleteRow(newRow);
        		}
        	}

        	if(this.dsSave.rowcount == 0){
        		this.alert("안내메일를 전송할 데이터를 선택해 주세요.");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "안내메일전송", "");  //접속기록

        	this.gfnTransaction("smsSendToDeptUser",
        						"/swiss/ag/config/smsSendToDeptUser.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        /**
         *   today_yyyyMMdd 포맷으로 반환
         */
        this.getFormatDate  = function(){
        	var date = new Date();
            var year = date.getFullYear();              //yyyy
            var month = (1 + date.getMonth());          //M
            month = month >= 10 ? month : '0' + month;  //month 두자리로 저장
            var day = date.getDate();                   //d
            day = day >= 10 ? day : '0' + day;          //day 두자리로 저장
            return  year + '_' + month + '_' + day;       //'-' 추가하여 yyyy-mm-dd 형태 생성 가능
        }

        //오류 팝업 start ==========================================
        this.fn_err_pop = function(){
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("error_pop"
        	                  , 0
        					  , 0
        					  , 600
        					  , 520
        					  , null
        					  , null
        					  , "CM::CMErrorView.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        	var objParam = {param1:this.dsErr};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , null);
        }

        this.lfn_setErr = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        }
        //오류 팝업 end==========================================

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

        	// ----------- 선택 학교 조사기간 확인
        	if(this.fv_SURVSTRTDT > toDate || this.fv_SURVENDDT < toDate){
        		this.fv_SURVTERM =  "N";
        	}else{
        		this.fv_SURVTERM =  "Y";
        	}
        };

        this.Div_btn_01_2_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "OPTNAME=미연계자기타처리ª";
        	strParam += "OPTVALUE="	+ this.Div.form.Div02_2.form.in_chkBox_01_2.value	+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "저장(미연계자기타설정)", strParam);  //접속기록
        	this.gfnTransaction("updateEmptyToTmp",
        						"/swiss/ag/config/updateEmptyToTmp.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.toolTip_onclick = function(obj,e)
        {
        	pnm = "this.PopupDiv00";
        	if("" != pnm) eval(pnm).trackPopupByComponent(obj, 35, 0, 570, 130);
        };

        this.toolTip2_onclick = function(obj,e)
        {
        	pnm = "this.PopupDiv01";
        	if("" != pnm) eval(pnm).trackPopupByComponent(obj, 35, 0, 570, 155);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag02m00_onload,this);
            this.Div.form.Div03.form.in_rdo_00.addEventHandler("onitemchanged",this.Div_Div03_in_rdo_00_onitemchanged,this);
            this.Div.form.Div03.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.Div03.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
            this.Div.form.Div01.form.btn_03.addEventHandler("onclick",this.Div_btn_03_onclick,this);
            this.Div.form.Div01.form.btn_04.addEventHandler("onclick",this.Div_btn_04_onclick,this);
            this.Div.form.Div02.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.Div02.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Div02_2.form.btn_01_2.addEventHandler("onclick",this.Div_btn_01_2_onclick,this);
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.btn_05.addEventHandler("onclick",this.Div_btn_05_onclick,this);
            this.Div.form.btn_06.addEventHandler("onclick",this.Div_btn_06_onclick,this);
            this.Div.form.btn_07.addEventHandler("onclick",this.Div_btn_07_onclick,this);
            this.Div.form.btn_08.addEventHandler("onclick",this.Div_btn_08_onclick,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.toolTip.addEventHandler("onclick",this.toolTip_onclick,this);
            this.toolTip.addEventHandler("onmouseenter",this.toolTip_onmouseenter,this);
            this.toolTip.addEventHandler("onmouseleave",this.toolTip_onmouseleave,this);
            this.toolTip00.addEventHandler("onclick",this.toolTip2_onclick,this);
        };

        this.loadIncludeScript("ag02m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
