(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag05m20");
            this.set_titletext("New Form");
            this.getSetter("validate").set("주당근무시간,required1:true,maxlength:2");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcodegrcd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMainPre", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGSTATUSCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new PopupDiv("PopupDiv00","14","677","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","207","26",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("건보가입자_교외");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","60",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31) 당시 건강보험 직장\r\n가입자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","183",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 국민건강보험공단 DB 연계자: 증빙 제출 \r\n  불필요\r\n※ 단, 대학에서 정부 및 지자체의 청년 일자리\r\n  사업에 선정되어 인건비(4대 보험료 포함)의\r\n  일부 또는 전부를 지원받은 경우 관련 증빙자료 구비\r\n    , 7월 자체점검시 제출\r\n   - 사업계획 공문, 선정공문, 사업 참여\r\n     학생 및 기업 명단");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00","30","90","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취업구분");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","118","90","195","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.getSetter("validate").set("취업구분,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("toolTip","325","90","31","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("toolQRed");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","30","490","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("건강보험\r\n가입여부");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("label_00","119","490","89","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_color("#595959");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","16","480","340","1",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","20","150","318","316",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_교내취업자","10","10","70","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("계약시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","50","70","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("계약종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","10","90","70","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("근무형태");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","10","130","120","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("주당근무시간");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","98","10","195","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("계약시작일,required1:true,date");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","98","50","195","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("계약종료일,required1:true,date");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","98","90","142","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("validate").set("근무형태,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_00_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_00_form_in_rdo_00_innerdataset", obj);
            div_00_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">상근</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">비상근</Col></Row></Rows>");
            obj.set_innerdataset(div_00_form_in_rdo_00_innerdataset);
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","98","130","195","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_maxlength("2");
            obj.getSetter("validate").set("주당근무시간,required1:true,min:1");
            obj.set_inputtype("digit");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","10","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","50","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("학번");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("label_01","118","10","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("label_02","118","50","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","16","140","340","1",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","20","150","318","316",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_교내취업tlo","10","10","70","30",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("계약시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","50","70","30",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("계약종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","98","10","195","30",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("계약시작일,required1:true,date");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_enable("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","98","50","195","30",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.getSetter("validate").set("계약종료일,required1:true,date");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_enable("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_01.addChild(obj.name, obj);

            obj = new Div("div_02","20","150","318","340",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("div_00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","10","0","280","100",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("취업구분상세,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_02_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_02_form_in_rdo_00_innerdataset", obj);
            div_02_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">공연</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">전시</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">출판 및 출반</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">영상제작물</Col></Row><Row><Col id=\"codecolumn\">45</Col><Col id=\"datacolumn\">저작권을 통한 수익 창출</Col></Row></Rows>");
            obj.set_innerdataset(div_02_form_in_rdo_00_innerdataset);
            this.div_02.addChild(obj.name, obj);

            obj = new Div("div_00","0","120","318","210",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_text("div_00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","78","0","235","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("0");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("시작일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","78","40","235","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("1");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("종료일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static05공연","10","40","50","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("2");
            obj.set_text("종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static08","10","0","50","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("3");
            obj.set_text("시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","78","80","235","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("4");
            obj.getSetter("validate").set("공연명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static01","10","80","60","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("5");
            obj.set_text("공연명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static02","10","120","60","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("6");
            obj.set_text("장소");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","78","120","235","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("7");
            obj.getSetter("validate").set("장소,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static03","10","160","60","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("8");
            obj.set_text("역할");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","78","160","235","30",null,null,null,null,null,null,this.div_02.form.div_00.form);
            obj.set_taborder("9");
            obj.getSetter("validate").set("역할,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_00.addChild(obj.name, obj);

            obj = new Div("div_01","0","120","318","210",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","78","0","235","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("0");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("시작일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","78","40","235","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("1");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("종료일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static05전시","10","40","50","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("2");
            obj.set_text("종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static08","10","0","50","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("3");
            obj.set_text("시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","78","80","235","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("4");
            obj.getSetter("validate").set("전시회명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static01","10","80","60","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("5");
            obj.set_text("전시회명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static02","10","120","60","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("6");
            obj.set_text("장소");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","78","120","235","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("7");
            obj.getSetter("validate").set("장소,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static03","10","160","60","40",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("8");
            obj.set_text("작품명\r\n(개인)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","78","160","235","30",null,null,null,null,null,null,this.div_02.form.div_01.form);
            obj.set_taborder("9");
            obj.getSetter("validate").set("작품명(개인),required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_01.addChild(obj.name, obj);

            obj = new Div("div_02","0","120","318","210",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("3");
            obj.set_text("div_00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","78","0","235","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("0");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("출판일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Static("Static08출판","10","0","50","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("1");
            obj.set_text("출판일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","78","40","235","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("도서명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","60","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("3");
            obj.set_text("도서명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Static("Static02","10","80","60","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("4");
            obj.set_text("출판사");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","78","80","235","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("5");
            obj.getSetter("validate").set("출판사,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Static("Static03","10","120","60","40",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("6");
            obj.set_text("작품명\r\n(개인)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","78","120","235","30",null,null,null,null,null,null,this.div_02.form.div_02.form);
            obj.set_taborder("7");
            obj.getSetter("validate").set("작품명(개인),required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_02.addChild(obj.name, obj);

            obj = new Div("div_03","0","120","318","210",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","78","0","235","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("0");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("시작일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","78","40","235","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("1");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("종료일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Static("Static05영상","10","40","50","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("2");
            obj.set_text("종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Static("Static08","10","0","50","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("3");
            obj.set_text("시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","78","80","235","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("4");
            obj.getSetter("validate").set("작품명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Static("Static01","10","80","60","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("5");
            obj.set_text("작품명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Static("Static02","10","120","60","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("6");
            obj.set_text("역할");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","78","120","235","30",null,null,null,null,null,null,this.div_02.form.div_03.form);
            obj.set_taborder("7");
            obj.getSetter("validate").set("역할,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_03.addChild(obj.name, obj);

            obj = new Div("div_04","0","120","318","210",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","78","0","235","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("0");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("등록일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Static("Static08저작권","10","0","50","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("1");
            obj.set_text("등록일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","78","40","235","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("2");
            obj.getSetter("validate").set("작품명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Static("Static01","10","40","60","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("3");
            obj.set_text("작품명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Static("Static02","10","80","60","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("4");
            obj.set_text("역할");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","78","80","235","30",null,null,null,null,null,null,this.div_02.form.div_04.form);
            obj.set_taborder("5");
            obj.getSetter("validate").set("역할,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_02.form.div_04.addChild(obj.name, obj);

            obj = new Div("div_03","20","150","318","316",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oversea","250","0","62","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static01","10","0","80","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("0");
            obj.set_text("근무지(국가)");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static02","10","40","98","32",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("1");
            obj.set_text("해외취업회사명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static03","10","80","70","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("2");
            obj.set_text("비자여부");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static04","10","120","70","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("3");
            obj.set_text("비자유형");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","108","0","130","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.getSetter("validate").set("근무지(국가),required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","108","40","204","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("6");
            obj.getSetter("validate").set("해외취업회사명,required1:true");
            obj.set_maxlength("80");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_00","108","80","150","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("7");
            obj.set_truevalue("1");
            obj.set_falsevalue("2");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","108","120","204","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("8");
            obj.getSetter("validate").set("비자유형,required1:true");
            obj.set_maxlength("50");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static05","10","200","80","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("9");
            obj.set_text("계약종료일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static06","10","240","70","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("10");
            obj.set_text("근무형태");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static07","10","280","97","32",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("11");
            obj.set_text("주당근무시간");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("in_calr_00","108","160","205","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("12");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("계약시작일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Calendar("in_calr_01","108","200","205","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("13");
            obj.set_editformat("yyyy.MM.dd");
            obj.getSetter("validate").set("계약종료일,required1:true,date");
            obj.set_dateformat("yyyy.MM.dd ddd");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","112","240","196","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.getSetter("validate").set("근무형태,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_03_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_03_form_in_rdo_00_innerdataset", obj);
            div_03_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">풀타임</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">파트타임</Col></Row></Rows>");
            obj.set_innerdataset(div_03_form_in_rdo_00_innerdataset);
            this.div_03.addChild(obj.name, obj);

            obj = new Edit("in_edit_03","110","280","204","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("15");
            obj.set_maxlength("2");
            obj.set_inputtype("number");
            obj.getSetter("validate").set("주당근무시간,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Static("Static08","10","160","80","30",null,null,null,null,null,null,this.div_03.form);
            obj.set_taborder("16");
            obj.set_text("계약시작일");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_03.addChild(obj.name, obj);

            obj = new Div("div_04","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_school","265","130","62","30",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_enable("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new Static("Static01_00","4","180","310","1",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("0");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","10","0","280","70",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("[대학·대학원·전문대학],required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_04_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_04_form_in_rdo_00_innerdataset", obj);
            div_04_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">80</Col><Col id=\"datacolumn\">대학</Col></Row><Row><Col id=\"codecolumn\">81</Col><Col id=\"datacolumn\">대학원</Col></Row><Row><Col id=\"codecolumn\">82</Col><Col id=\"datacolumn\">전문대학</Col></Row></Rows>");
            obj.set_innerdataset(div_04_form_in_rdo_00_innerdataset);
            this.div_04.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","4","120","310","1",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("2");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new CheckBox("in_chkBox_00","10","80","150","30",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("3");
            obj.set_text("동대학(원)");
            obj.set_truevalue("1");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","130","50","30",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("4");
            obj.set_text("학교명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","59","130","197","30",null,null,null,null,null,null,this.div_04.form);
            obj.set_taborder("5");
            obj.getSetter("validate").set("학교명,required1:true");
            obj.set_enable("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_04.addChild(obj.name, obj);

            obj = new Div("div_05","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_oversea","225","130","62","30",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","10","0","280","70",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("[대학·대학원·전문대학],required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_05_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_05_form_in_rdo_00_innerdataset", obj);
            div_05_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">70</Col><Col id=\"datacolumn\">대학</Col></Row><Row><Col id=\"codecolumn\">71</Col><Col id=\"datacolumn\">대학원</Col></Row><Row><Col id=\"codecolumn\">72</Col><Col id=\"datacolumn\">전문대학</Col></Row></Rows>");
            obj.set_innerdataset(div_05_form_in_rdo_00_innerdataset);
            this.div_05.addChild(obj.name, obj);

            obj = new Static("Static01_00","4","80","310","1",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("1");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Static("Static00_00","10","130","60","32",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("2");
            obj.set_text("국가명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10","85","60","40",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("5");
            obj.set_text("해외진학\r\n학교명");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","89","90","200","30",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("6");
            obj.getSetter("validate").set("해외진학학교명,required1:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","89","130","130","30",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("3");
            obj.getSetter("validate").set("국가명,required1:true");
            obj.set_enable("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","4","170","310","1",null,null,null,null,null,null,this.div_05.form);
            obj.set_taborder("7");
            obj.set_background("#d7e0e8");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.div_05.addChild(obj.name, obj);

            obj = new Div("div_06","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","20","0","280","70",null,null,null,null,null,null,this.div_06.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("취업구분상세,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_06_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_06_form_in_rdo_00_innerdataset", obj);
            div_06_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">수형자</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">해외이민자</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">6개월이상 장기 입원자</Col></Row></Rows>");
            obj.set_innerdataset(div_06_form_in_rdo_00_innerdataset);
            this.div_06.addChild(obj.name, obj);

            obj = new Div("div_07","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","10","0","280","100",null,null,null,null,null,null,this.div_07.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("validate").set("취업구분상세,required2:true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_07_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_07_form_in_rdo_00_innerdataset", obj);
            div_07_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">61</Col><Col id=\"datacolumn\">여자군인 중 임관 전 훈련생</Col></Row><Row><Col id=\"codecolumn\">62</Col><Col id=\"datacolumn\">항공종사자전문교육기관 교육대상자</Col></Row></Rows>");
            obj.set_innerdataset(div_07_form_in_rdo_00_innerdataset);
            this.div_07.addChild(obj.name, obj);

            obj = new Div("div_08","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("div_00");
            obj.set_visible("false");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Radio("in_rdo_00","10","0","280","70",null,null,null,null,null,null,this.div_08.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var div_08_form_in_rdo_00_innerdataset = new nexacro.NormalDataset("div_08_form_in_rdo_00_innerdataset", obj);
            div_08_form_in_rdo_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">66</Col><Col id=\"datacolumn\">제외인정자 WFK</Col></Row></Rows>");
            obj.set_innerdataset(div_08_form_in_rdo_00_innerdataset);
            this.div_08.addChild(obj.name, obj);

            obj = new Div("div_09","20","150","328","316",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","395","677","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("건보가입자_교내");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","80",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 건강보험 직장가입자\r\n중 학교법인 및 관련 기관에 1년 이상계약하고, \r\n계약기간 동안 최저임금* 이상의 월 급여를 받는 자\r\n* 최저임금: ’23년: 2,010,580원, ‘24년: 2,060,740원");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            obj.set_padding("0px");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","137","70","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","157","325","46",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            obj.set_text("·1년 이상 근무자 : 경력(재직)증명서 or 고용계약서\r\n·1년 미만 근무자 : 고용계약서");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","208","70","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            obj.set_text("[기타]");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","227","325","100",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("6");
            obj.set_text("교내취업자 기업연계 청년기술전문인력 육성사업에\r\n해당되나 ‘교내취업자’로 연계된 경우\r\n건보가입자_교내(기업연계) 취업구분으로 변경 후 저장\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","20","295","70","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("7");
            obj.set_text("[FAQ]");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","314","325","80",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("8");
            obj.set_text("Q. 교내취업자로 연계되었으나, 인정기준에 부적\r\n    합한 경우는 어떻게 처리해야 하나요?\r\nA. 타 취업구분으로 수정하여 입력하시기 바랍니다. ");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv02","760","680","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","259","26",null,null,null,null,null,null,this.PopupDiv02.form);
            obj.set_taborder("0");
            obj.set_text("건보가입자_교내(기업연계)");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv02.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","77",null,null,null,null,null,null,this.PopupDiv02.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31) 당시 건강보험 직장\r\n가입자 중 과학기술정보통신부에서 인정하는 \r\n일자리사업 인정기준에 해당하는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv02.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","102",null,null,null,null,null,null,this.PopupDiv02.form);
            obj.set_taborder("4");
            obj.set_text("· 연계자 : 증빙 제출 불필요\r\n· 미연계자 : 아래의 증빙자료 모두 제출\r\n - 계약 체결(선정) 공문 또는 사업 계약서\r\n - 청년기술전문인력 육성사업 참여 학생 명단\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv02.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv03","1115","683","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("0");
            obj.set_text("해외취업자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","84",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31) 당시 건강보험 직장\r\n가입자가 아닌 자 중 해외국가에서 주당 15시간 \r\n이상 일하며, 91일 이상 고용계약한 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","162",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 한국산업인력공단 DB 연계자: 증빙 제출 \r\n  불필요\r\n⦁ 한국산업인력공단 DB 미연계자: 아래 두가지\r\n  서류 모두 제출\r\n  - 비자사본(합법적으로 취업 가능한 비자)\r\n  - 고용계약 관련서류(고용사실이 확인\r\n    가능한 자료)");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","20","310","70","20",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("5");
            obj.set_text("[참고]");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","20","330","325","48",null,null,null,null,null,null,this.PopupDiv03.form);
            obj.set_taborder("6");
            obj.set_text("비자종류 확인: 월드잡 플러스 홈페이지\r\n(http://www.worldjob.or.kr/)");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv03.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv04","6","1147","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv04.form);
            obj.set_taborder("0");
            obj.set_text("농림어업종사자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv04.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv04.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv04.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","84",null,null,null,null,null,null,this.PopupDiv04.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 건강보험 직장\r\n가입자가 아닌 자 중 농림᛫어업에 종사하는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv04.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv04.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv04.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","186",null,null,null,null,null,null,this.PopupDiv04.form);
            obj.set_taborder("4");
            obj.set_text("아래의 증빙자료 중 택 1 제출\r\n⦁ 농업인확인서\r\n⦁ 어업인확인서\r\n⦁ 어업허가내역서(어업허가증)\r\n⦁ 기타 법령에 근거하여 국가 및 지자체에서\r\n  발급한 확인서 또는 공문\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv04.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv05","385","1150","350","450",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv05.form);
            obj.set_taborder("0");
            obj.set_text("개인창작활동종사자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv05.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv05.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv05.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","85",null,null,null,null,null,null,this.PopupDiv05.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 건강보험 직장\r\n가입자가 아닌 자 중 졸업 이후부터 조사기준일\r\n(2023.12.31.)까지 개인작품 창작활동 실적이\r\n있는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv05.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","145","70","20",null,null,null,null,null,null,this.PopupDiv05.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv05.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","165","325","274",null,null,null,null,null,null,this.PopupDiv05.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 공연: 공연장 등록증(사업자등록증), 공연\r\n  확인서, 계약서, 공연관련 책자(팸플릿 등)\r\n⦁ 전시: 박물관·미술관 등록증(사업자등록증), \r\n  전시확인서, 계약서, 전시관련 책자(팸플릿 등)\r\n⦁ 출판 및 출반\r\n - 오프라인: 출판(반)사 사업자등록증, 계약서,\r\n   인쇄/출반 증명서, 발간된 출판(반)물\r\n - 온라인: E-book/출반물 발간업체 사업자\r\n   등록증, 계약서, 게시물 URL 및 캡처본\r\n⦁ 영상제작물: 계약서\r\n⦁ 저작권을 통한 수익 창출: 신탁체결서, 수입\r\n  증명서\r\n※ 자세한 증빙목록은 매뉴얼 참조 ");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv05.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv06","760","1153","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","217","26",null,null,null,null,null,null,this.PopupDiv06.form);
            obj.set_taborder("0");
            obj.set_text("1인 창(사)업자 - 중기부");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv06.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv06.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv06.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","136",null,null,null,null,null,null,this.PopupDiv06.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 건강보험 직장가입자가\r\n아닌 자 중에서 아래의 기준을 충족하는 자\r\n \r\n - 2023년 사업자 등록이 되어있고, 중소벤처기업부에서\r\n실시하는  ‘초기창업패키지 사업’에 선정되어 참여한 자\r\n※ 단, 사업 주관기관이 ‘대학’인 경우에 한함.\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv06.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","206","70","20",null,null,null,null,null,null,this.PopupDiv06.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv06.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","228","325","72",null,null,null,null,null,null,this.PopupDiv06.form);
            obj.set_taborder("4");
            obj.set_text("증빙 제출 불필요");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv06.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv07","1123","1150","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv07.form);
            obj.set_taborder("0");
            obj.set_text("기타");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv07.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv07.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv07.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","84",null,null,null,null,null,null,this.PopupDiv07.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 취업, 진학, 입대,\r\n취업불가능, 미상, 제외인정자에 해당하지 않는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv07.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv07.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv07.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","38",null,null,null,null,null,null,this.PopupDiv07.form);
            obj.set_taborder("4");
            obj.set_text("증빙 제출 불필요");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv07.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv08","-12","1620","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv08.form);
            obj.set_taborder("0");
            obj.set_text("(국내)진학자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv08.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv08.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv08.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","152",null,null,null,null,null,null,this.PopupDiv08.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 학위취득을\r\n목적으로 고등교육법에서 인정하는 교육기관\r\n으로 진학한 자, 그 밖에 다른 법률에서 인정하는\r\n교육기관으로 진학한 자\r\n※ 조사기준일 당시 휴학생은 진학자로 인정되나\r\n   2024년 입학허가서를 받은 진학예정자는\r\n   진학자로 인정하지 않음");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv08.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","202","70","20",null,null,null,null,null,null,this.PopupDiv08.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv08.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","223","325","176",null,null,null,null,null,null,this.PopupDiv08.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 미연계 진학자: 재학증명서, 재적\r\n  증명서, 휴학증명서, 학교 간 진학자 여부를\r\n  확인하는 공문 중 택1 구비");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv08.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv09","368","1620","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv09.form);
            obj.set_taborder("0");
            obj.set_text("(국외)진학자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv09.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv09.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv09.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","84",null,null,null,null,null,null,this.PopupDiv09.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 학위취득을 목적으로\r\n외국의 정규교육기관에 진학한 자\r\n※ 2024년 입학허가서를 받은 진학예정자는 진학\r\n  자로 인정하지 않음");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv09.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","146","70","20",null,null,null,null,null,null,this.PopupDiv09.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv09.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","168","325","55",null,null,null,null,null,null,this.PopupDiv09.form);
            obj.set_taborder("4");
            obj.set_text("재학증명서, 재적증명서, 휴학증명서 중 택1 구비");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv09.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv10","751","1617","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("0");
            obj.set_text("입대자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","30",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31) 당시 군 입대자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","100",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 병무청DB 연계자: 증빙 제출 불필요\r\n⦁ 병무청 DB 미연계자: 군복무 확인 공문,\r\n  부사관 입영통지서, 현역 복무 확인서,\r\n  병적증명서  중 택1 제출");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","252","70","20",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("5");
            obj.set_text("[FAQ]");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","20","274","325","118",null,null,null,null,null,null,this.PopupDiv10.form);
            obj.set_taborder("6");
            obj.set_text("Q. 학사장교 및 부사관의 경우 취업자인가요?\r\n   입대자인가요?\r\nA. 임관 후에는 건강보험이 가입되므로 ‘취업자\r\n   (건강보험 직장가입자)’로 분류되어 \r\n   연계됩니다.");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv10.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv11","1125","1623","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv11.form);
            obj.set_taborder("0");
            obj.set_text("취업불가능자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv11.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv11.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv11.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","54",null,null,null,null,null,null,this.PopupDiv11.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 수형자,\r\n사망자, 해외이민자, 6개월 이상 장기입원자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv11.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv11.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv11.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","38",null,null,null,null,null,null,this.PopupDiv11.form);
            obj.set_taborder("4");
            obj.set_text("증빙 제출 불필요");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv11.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv12","-5","2093","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv12.form);
            obj.set_text("미상");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv12.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv12.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv12.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","54",null,null,null,null,null,null,this.PopupDiv12.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 졸업 후 상황을\r\n파악할 수 없는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv12.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","132","70","20",null,null,null,null,null,null,this.PopupDiv12.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv12.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","152","325","42",null,null,null,null,null,null,this.PopupDiv12.form);
            obj.set_taborder("4");
            obj.set_text("증빙 제출 불필요");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv12.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv13","365","2090","350","420",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("popupDiv00");
            obj.set_boxShadow("1px 1px 1px #");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","0","167","26",null,null,null,null,null,null,this.PopupDiv13.form);
            obj.set_text("제외인정자");
            obj.set_cssclass("popupTitRed");
            this.PopupDiv13.addChild(obj.name, obj);

            obj = new Static("Static01","20","30","70","20",null,null,null,null,null,null,this.PopupDiv13.form);
            obj.set_taborder("1");
            obj.set_text("[정의]");
            this.PopupDiv13.addChild(obj.name, obj);

            obj = new Static("Static02","20","50","325","84",null,null,null,null,null,null,this.PopupDiv13.form);
            obj.set_taborder("2");
            obj.set_text("조사기준일(2023.12.31.) 당시 건강보험\r\n직장가입 대상자가 아니므로 취업대상자에서 \r\n제외되는 자");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv13.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","146","70","20",null,null,null,null,null,null,this.PopupDiv13.form);
            obj.set_taborder("3");
            obj.set_text("[증빙자료]");
            this.PopupDiv13.addChild(obj.name, obj);

            obj = new Static("Static02_00","20","166","325","203",null,null,null,null,null,null,this.PopupDiv13.form);
            obj.set_taborder("4");
            obj.set_text("⦁ 여자군인 중 임관 전 훈련생: 군복무 확인공문,\r\n  부사관 입영통지서, 현역 복무확인서 등 \r\n⦁ 항공종사자전문교육기관 교육대상자:\r\n  교육훈련생 신분 확인서\r\n");
            obj.set_cssclass("popupDesc");
            obj.set_verticalAlign("top");
            this.PopupDiv13.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",370,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_00.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.in_rdo_00","value","dsMain","SCHWORKFORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.in_edit_00","value","dsMain","WORKHOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_01.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_01.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_03.form.in_edit_00","value","dsMain","NACODENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_03.form.in_edit_01","value","dsMain","FORGCOMNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_03.form.in_chkBox_00","value","dsMain","OVERSEAVISAYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_03.form.in_edit_02","value","dsMain","OVERSEAVISATYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_03.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_03.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_03.form.in_rdo_00","value","dsMain","OVERSEAWORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_03.form.in_edit_03","value","dsMain","WORKHOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_04.form.in_chkBox_00","value","dsMain","SAMEUNIVYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_04.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_04.form.in_edit_00","value","dsMain","GOSCHNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_05.form.in_edit_00","value","dsMain","GOFORGSCHNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_05.form.in_edit_01","value","dsMain","NACODENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_07.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_08.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_02.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_06.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_05.form.in_rdo_00","value","dsMain","JOBTYPECD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_02.form.div_00.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_02.form.div_00.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_02.form.div_00.form.in_edit_00","value","dsMain","ARTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_02.form.div_00.form.in_edit_01","value","dsMain","ARTPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_02.form.div_00.form.in_edit_02","value","dsMain","ARTPO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_02.form.div_01.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_02.form.div_01.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_02.form.div_01.form.in_edit_00","value","dsMain","ARTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_02.form.div_01.form.in_edit_01","value","dsMain","ARTPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_02.form.div_01.form.in_edit_02","value","dsMain","ARTPO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_02.form.div_02.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_02.form.div_02.form.in_edit_00","value","dsMain","ARTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_02.form.div_02.form.in_edit_01","value","dsMain","ARTPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_02.form.div_02.form.in_edit_02","value","dsMain","ARTPO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_02.form.div_03.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_02.form.div_03.form.in_calr_01","value","dsMain","ENDDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_02.form.div_03.form.in_edit_00","value","dsMain","ARTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_02.form.div_03.form.in_edit_02","value","dsMain","ARTPO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_02.form.div_04.form.in_calr_00","value","dsMain","STARTDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_02.form.div_04.form.in_edit_00","value","dsMain","ARTNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_02.form.div_04.form.in_edit_02","value","dsMain","ARTPO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","in_cb_00","value","dsMain","JOBTYPEGROUPCD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ag05s01.xfdl","CM::utl_script.xjs");
        this.registerScript("ag05s01.xfdl", function() {
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		//trace(errMSG);
        	}else{
        		if(serviceID == "insertAgRegistOne"){
        			var nJOBTYPECD = this.dsJobcode.findRowExpr("JOBTYPECD=="+"'"+this.dsMain.getColumn(0,"JOBTYPECD")+"'",0);
        			this.dsMain.setColumn(0,"JOBTYPENM",this.dsJobcode.getColumn(nJOBTYPECD,"JOBTYPENM"));
        			this.parent.parent.dsMain.copyRow(this.parent.parent.dsMain.rowposition, this.dsMain,0);
        			if(this.dsErr.rowcount==0){
        				alert("저장되었습니다.");
        			}
        			if (this.dsErr.rowcount>0)
        			{	alert("저장되었습니다.2");
        				this.utlf_err_pop(this.dsErr);
        			}
        		}

         	}
        }

        this.toolTip_onclick = function(obj,e)
        {
        	var v_JOBTYPEGROUPCD = this.in_cb_00.value;
        	var pnm = "";
        	if("1" == v_JOBTYPEGROUPCD) //건보취업
        		pnm = "this.PopupDiv00";
        	if("12" == v_JOBTYPEGROUPCD)//교내취업
        		pnm = "this.PopupDiv01";
        	if("13" == v_JOBTYPEGROUPCD)//교내취업자 TLO
        		pnm = "this.PopupDiv02";
        	if("4" == v_JOBTYPEGROUPCD)//해외취업자
        		pnm = "this.PopupDiv03";
        	if("2" == v_JOBTYPEGROUPCD)//농림어업종사자
        		pnm = "this.PopupDiv04";
        	if("3" == v_JOBTYPEGROUPCD)//개인창작활동종사자
        		pnm = "this.PopupDiv05";
        	if("14" == v_JOBTYPEGROUPCD)//1인 창(사)업자
        		pnm = "this.PopupDiv06";
        	if("9" == v_JOBTYPEGROUPCD)//기타
        		pnm = "this.PopupDiv07";
        	if("10" == v_JOBTYPEGROUPCD)//(국내)진학자
        		pnm = "this.PopupDiv08";
        	if("11" == v_JOBTYPEGROUPCD)//(국외)진학자
        		pnm = "this.PopupDiv09";
        	if("6" == v_JOBTYPEGROUPCD)//입대자
        		pnm = "this.PopupDiv10";
        	if("5" == v_JOBTYPEGROUPCD)//취업불가능자
        		pnm = "this.PopupDiv11";
        	if("8" == v_JOBTYPEGROUPCD)//미상
        		pnm = "this.PopupDiv12";
        	if("7" == v_JOBTYPEGROUPCD)//제외인정자
        		pnm = "this.PopupDiv13";

        	if("" != pnm) eval(pnm).trackPopupByComponent(obj, obj.getOffsetWidth() - 348, obj.getOffsetHeight() + 10, 350, 460);
        };
        this.lfn_setData = function()
        {
        	this.dsMain.clearData();
        	this.dsMain.addRow();
        	this.dsMain.copyRow(0, this.parent.parent.dsMain,this.parent.parent.dsMain.rowposition);

        	this.dsJobcode.copyData(this.parent.parent.dsJobcode);
        	this.dsJobGroupCd.copyData(this.parent.parent.dsJobGroupCd);
        	this.dsJobcodegrcd.copyData(this.parent.parent.dsJobcodegrcd);

        	if(this.parent.parent.dsMainPre)
        		this.dsMainPre.copyData(this.parent.parent.dsMainPre);

        	this.lfn_chgJobtypeCd();
        }
        this.lfn_chgJobtypeCd = function()
        {
        	//1.취업그룹 필터 초기화
        	//2.취업그룹 값세팅
        	//3.취업그룹 필터
        	this.dsJobGroupCd.set_filterstr("");
        	var v_JOBTYPECD = this.dsMain.getColumn(0,"JOBTYPECD");
        	var v_JOBTYPECD_BF = this.dsMain.getColumn(0,"JOBTYPECD_BF");

        	//var v_JOBTYPEGROUPCD = this.in_cb_00.value;
        	var v_JOBTYPEGROUPCD = this.dsMain.getColumn(0,"JOBTYPEGROUPCD");


        	var g_i = this.dsJobGroupCd.findRow("JOBTYPEGROUPCD",v_JOBTYPEGROUPCD);
        	var v_CHGROUPID = this.dsJobGroupCd.getColumn(g_i,"CHGROUPID");

        	//alert("jobcd=["+v_JOBTYPECD+"], jobcdbf=["+v_JOBTYPECD_BF+"], jobgrcd=["+v_JOBTYPEGROUPCD+"], g_i=["+g_i+"]");

        	if(v_JOBTYPECD_BF == "28" || v_JOBTYPECD_BF == "29"){
        		var fitterString ="JOBTYPEGROUPCD == '12'||"; // "JOBTYPECD =='28'||";//교내취업자
        			fitterString+="JOBTYPEGROUPCD == '13'||"; // "JOBTYPECD =='29'||";//교내취업자TLO
        			fitterString+="JOBTYPEGROUPCD == '4'||"; // "JOBTYPECD =='51'||";//해외취업자
        			fitterString+="JOBTYPEGROUPCD == '2'||"; // "JOBTYPECD =='48'||";//농림어업종사자
        			fitterString+="JOBTYPEGROUPCD == '3'||"; // "JOBTYPECD =='41'|| JOBTYPECD =='42'|| JOBTYPECD =='43'|| JOBTYPECD =='44'|| JOBTYPECD =='45'||";//개인창작활동종사자
        			fitterString+="JOBTYPEGROUPCD == '10' || JOBTYPEGROUPCD == '11' ||"; // "JOBTYPECD =='4' || JOBTYPECD =='14'|| JOBTYPECD =='16'|| JOBTYPECD =='5' || JOBTYPECD =='15'|| JOBTYPECD =='26'||";//진학자
        			fitterString+="JOBTYPEGROUPCD == '6'||"; // "JOBTYPECD =='6' ||";//입대자
        			fitterString+="JOBTYPEGROUPCD == '7'||"; // "JOBTYPECD =='61'|| JOBTYPECD =='62'|| JOBTYPECD =='64'|| JOBTYPECD =='65'||";//제외인정자
        			fitterString+="JOBTYPEGROUPCD == '5'||"; // "JOBTYPECD =='33'|| JOBTYPECD =='35'|| JOBTYPECD =='36'||";//취업불가능자
        			fitterString+="JOBTYPEGROUPCD == '9'||"; // "JOBTYPECD =='30'||";//기타
        			fitterString+="JOBTYPEGROUPCD == '8'"; // "JOBTYPECD =='99'"  ;//미상

        		this.dsJobGroupCd.set_filterstr(fitterString);
        		this.in_cb_00.set_enable(true);

        	}else if(
        		// 입력대상자, 입대자, 해외취업자, 진학자
        		this.utlf_IsNull(v_JOBTYPECD_BF)
        		|| v_JOBTYPECD_BF == "6"
        		|| (v_JOBTYPECD_BF == "50" || v_JOBTYPECD_BF == "51" || v_JOBTYPECD_BF == "52")
        		|| (v_JOBTYPECD_BF == "4" || v_JOBTYPECD_BF == "14" || v_JOBTYPECD_BF == "16" || v_JOBTYPECD_BF == "5" || v_JOBTYPECD_BF == "15" || v_JOBTYPECD_BF == "26"
        			|| v_JOBTYPECD_BF == "80" || v_JOBTYPECD_BF == "81" || v_JOBTYPECD_BF == "82" || v_JOBTYPECD_BF == "70" || v_JOBTYPECD_BF == "71" || v_JOBTYPECD_BF == "72")
        	){
        		this.dsJobGroupCd.set_filterstr("CHGROUPID=='"+2+"' " + "&& JOBTYPEGROUPCD != '15'" ); // 변경가능그룹으로 필터 + 프리랜서제외

        	}else{
        		this.dsJobGroupCd.set_filterstr("CHGROUPID=='"+v_CHGROUPID+"'"); // 변경가능그룹으로 필터
        	}

        	if( (v_JOBTYPECD_BF != "28" && v_JOBTYPECD=="29") || v_JOBTYPECD=="32" || v_JOBTYPECD=="34"
        		|| v_JOBTYPECD=="46"|| v_JOBTYPECD=="47"|| v_JOBTYPECD=="60"|| v_JOBTYPECD=="63"){
        		var irow = this.dsJobcode.findRow("JOBTYPECD",v_JOBTYPECD);
        		this.dsJobGroupCd.addRow();
        		this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD",this.dsJobcode.getColumn(irow,"JOBTYPECD"));
        		this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM",this.dsJobcode.getColumn(irow,"JOBTYPENM"));
        		this.in_cb_00.set_index(0);
        		this.in_cb_00.set_enable(false);
        		this.lfn_divVisibleFalse();
        	}else{
        		this.in_cb_00.set_enable(true);
        	}

        	//그룹당 취업코드 1개 선택시 취업코드 변경
        	//1취업자(건보가입취업자),12교내취업자,13 교내취업자(TLO),
        	//14취업자(1인창(사)업자),2취업자(농림어업종사자),6입대자,
        	//8미상,9기타,4해외취업자
        	if(v_JOBTYPEGROUPCD=="1" || v_JOBTYPEGROUPCD=="12" || v_JOBTYPEGROUPCD=="13"
        		|| v_JOBTYPEGROUPCD=="14" || v_JOBTYPEGROUPCD=="2" || v_JOBTYPEGROUPCD=="6"
        		|| v_JOBTYPEGROUPCD=="4" || v_JOBTYPEGROUPCD=="8" || v_JOBTYPEGROUPCD=="9" ){
        		var i = this.dsJobGroupCd.findRow("JOBTYPEGROUPCD",v_JOBTYPEGROUPCD);
        		v_JOBTYPECD = this.dsJobGroupCd.getColumn(i,"JOBTYPECD");
        	}
        	this.dsMain.setColumn(0,"JOBTYPECD",v_JOBTYPECD);

        	if("50"==v_JOBTYPECD || "52"==v_JOBTYPECD ){
        		v_JOBTYPEGROUPCD='4';
        		this.in_cb_00.set_value(v_JOBTYPEGROUPCD);
        	}
        	if("4"==v_JOBTYPECD || "14"==v_JOBTYPECD || "16"==v_JOBTYPECD ){
        		v_JOBTYPEGROUPCD='10';
        		this.in_cb_00.set_value(v_JOBTYPEGROUPCD);
        	}
        	//trace(v_JOBTYPEGROUPCD);
        	//trace(v_JOBTYPECD);
        	//취업그룹별 화면 세팅
        	this.lfn_divVisibleFalse();

        	if(v_JOBTYPECD=="27"){//취업자(건보가입취업자)
        		this.div_09.set_visible(true);
        	}else if(v_JOBTYPECD=="28"){//교내취업자
        		this.div_00.set_visible(true);
        	}else if(v_JOBTYPECD=="29"){//교내취업자(TLO)
        		this.div_01.set_visible(true);
        		if(v_JOBTYPECD_BF == "28"){
        			this.utlf_enableDiv(this.div_01,true);
        			this.in_cb_00.set_enable(true);
        		}else{
        			this.utlf_enableDiv(this.div_01,false);
        		}
        	}else if(v_JOBTYPEGROUPCD=="3" ){//취업자(개인창작활동종사자)
        		this.set_div_02_div();
        		this.div_02.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="4" ){//취업자(해외취업자)
        		this.div_03.set_visible(true);
        	}else if(v_JOBTYPECD=="48" ){//취업자(농림어업종사자)
        		this.div_09.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="14" ){//취업자(1인창(사)업자)중기부
        		this.div_09.set_visible(true);
        	//프리랜서 기타로 분류
        	}else if(v_JOBTYPEGROUPCD=="5" && v_JOBTYPECD!="34"){//취업불가능자
        		this.div_06.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="11" ){//진학자(국외)
        		this.div_05.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="10" ){//진학자(국내)
        		this.div_04.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="7" ){//제외인정자
        		if(v_JOBTYPECD=="66" ){//제외인정자 wfk
        			this.div_08.set_visible(true);
        			this.div_07.set_visible(false);
        		}else {
        			this.div_07.set_visible(true);
        			this.div_08.set_visible(false);
        		}
        	}else if(v_JOBTYPEGROUPCD=="6" ){//입대자
        		this.div_09.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="8" ){//미상
        		this.div_09.set_visible(true);
        	}else if(v_JOBTYPEGROUPCD=="9" ){//기타
        		this.div_09.set_visible(true);
        	}

        	if("27" == v_JOBTYPECD
        		|| "28" == v_JOBTYPECD
        		|| "29" == v_JOBTYPECD){
        		this.label_00.set_text("예");
        	}else{
        		this.label_00.set_text("아니요");
        	}

        	this.label_01.set_text(this.dsMain.getColumn(0,"NAME"));
        	this.label_02.set_text(this.dsMain.getColumn(0,"STUDENTNO"));
        }
        this.lfn_divVisibleFalse = function()
        {
        	//취업그룹별 화면 세팅
        	this.div_00.set_visible(false);
        	this.div_01.set_visible(false);
        	this.div_02.set_visible(false);
        	this.div_03.set_visible(false);
        	this.div_04.set_visible(false);
        	this.div_05.set_visible(false);
        	this.div_06.set_visible(false);
        	this.div_07.set_visible(false);
        	this.div_08.set_visible(false);
        	this.div_09.set_visible(false);
        	this.div_02.form.div_00.set_visible(false);
        	this.div_02.form.div_01.set_visible(false);
        	this.div_02.form.div_02.set_visible(false);
        	this.div_02.form.div_03.set_visible(false);
        	this.div_02.form.div_04.set_visible(false);
        }
        //연계데이터로 초기화
        this.lfn_resetPreData = function()
        {
        	var idx = this.dsMainPre.findRowExpr("UNIQUEKEY=='"+this.dsMain.getColumn(0,"UNIQUEKEY")+"'",0);
        	//trace(idx);
        	if(idx ==-1){
        		this.lfn_resetData();
        		this.dsMain.setColumn(0,"JOBTYPECD",this.dsMainPre.getColumn(idx,"JOBTYPECD"));
        	}

        	this.dsMain.setColumn(0,"JOBTYPECD",this.dsMainPre.getColumn(idx,"JOBTYPECD"));
        	this.dsMain.setColumn(0,"SCHWORKFORM",this.dsMainPre.getColumn(idx,"SCHWORKFORM"));
        	this.dsMain.setColumn(0,"WORKHOUR",this.dsMainPre.getColumn(idx,"WORKHOUR"));
        	this.dsMain.setColumn(0,"STARTDT",this.dsMainPre.getColumn(idx,"STARTDT"));
        	this.dsMain.setColumn(0,"ENDDT",this.dsMainPre.getColumn(idx,"ENDDT"));
        	this.dsMain.setColumn(0,"NACODE",this.dsMainPre.getColumn(idx,"NACODE"));
        	this.dsMain.setColumn(0,"NACODENM",this.dsMainPre.getColumn(idx,"NACODENM"));
        	this.dsMain.setColumn(0,"FORGCOMNM",this.dsMainPre.getColumn(idx,"FORGCOMNM"));
        	this.dsMain.setColumn(0,"OVERSEAVISATYPE",this.dsMainPre.getColumn(idx,"OVERSEAVISATYPE"));
        	this.dsMain.setColumn(0,"OVERSEAVISAYN",this.dsMainPre.getColumn(idx,"OVERSEAVISAYN"));
        	this.dsMain.setColumn(0,"OVERSEAWORKTYPE",this.dsMainPre.getColumn(idx,"OVERSEAWORKTYPE"));
        	this.dsMain.setColumn(0,"GOSCHCD",this.dsMainPre.getColumn(idx,"GOSCHCD"));
        	this.dsMain.setColumn(0,"GOSCHNM",this.dsMainPre.getColumn(idx,"GOSCHNM"));
        	this.dsMain.setColumn(0,"GOORGCD",this.dsMainPre.getColumn(idx,"GOORGCD"));
        	this.dsMain.setColumn(0,"GOFORGSCHNM",this.dsMainPre.getColumn(idx,"GOFORGSCHNM"));
        	this.dsMain.setColumn(0,"ARTNM",this.dsMainPre.getColumn(idx,"ARTNM"));
        	this.dsMain.setColumn(0,"ARTPL",this.dsMainPre.getColumn(idx,"ARTPL"));
        	this.dsMain.setColumn(0,"ARTPO",this.dsMainPre.getColumn(idx,"ARTPO"));
        	this.dsMain.setColumn(0,"SAMEUNIVYN",this.dsMainPre.getColumn(idx,"SAMEUNIVYN"));

        	this.parent.parent.dsMain.copyRow(this.parent.parent.dsMain.rowposition,this.dsMain ,0);

        	var v_JOBTYPECD = this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPECD");
        	var i = this.dsJobcodegrcd.findRow("JOBTYPECD",v_JOBTYPECD);
        	var v_JOBTYPEGROUPCD = this.dsJobcodegrcd.getColumn(i,"JOBTYPEGROUPCD");
        	this.dsMain.setColumn(this.dsMain.rowposition,"JOBTYPEGROUPCD",v_JOBTYPEGROUPCD);
        	this.in_cb_00.set_value(v_JOBTYPEGROUPCD);
        	this.lfn_chgJobtypeCd();
        }

        //초기화
        this.lfn_resetData = function()
        {
        	if (this.components) {
        		for (var i = 0; i < this.components.length; i++) {
        			var oComp = this.components[i];
        			if(oComp instanceof Div){
        				this.utlf_resetDiv(oComp);
        			}
        		}
        	}

        	var v_JOBTYPEGROUPCD = this.dsMain.getColumn(this.dsMain.rowposition,"JOBTYPEGROUPCD");
        	this.in_cb_00.set_value(v_JOBTYPEGROUPCD);
        	this.lfn_chgJobtypeCd();
        	this.label_00.set_text("");
        	this.label_01.set_text("");
        	this.label_02.set_text("");

        	/*학교리셋이 안되는 문제 수정 2021-04-16*/
        	this.dsMain.setColumn(0,"GOSCHNM", "");
        	this.dsMain.setColumn(0,"GOSCHCD", "");
        	this.dsMain.setColumn(0,"GOORGNM", "");
        	this.dsMain.setColumn(0,"GOORGCD", "");
        	/*국가 초기화 2021-04-22*/
        	this.dsMain.setColumn(0,"NACODE", "");

        }

        //전체 삭제
        this.lfn_deleteAllData = function()
        {
        	this.dsMain.clearData();
        	this.label_00.set_text("");
        }

        this.lfn_saveData = function()
        {
        	this.dsErr.clearData();
        //trace(this.dsMain.getColumn(0,"JOBTYPECD_BF"));
        // 	var arrjobcd = "[66][16][14][4][60][34][47][32][46][52][29]";
        // 	//var arrjobcd = "[29][32][66][63][34][52]";
        // 	if(arrjobcd.indexOf("["+this.dsMain.getColumn(0,"JOBTYPECD")+"]")>-1){
        // 		this.lfn_setErr("연계 취업코드는 신규 입력할 수 없습니다.");
        // 	}

        // 	this.dsErr.addColumn("ERRDESC","string");
        // 	this.dsErr.addColumn("ERRKINDCD","string");
        // 	this.dsErr.addColumn("ERRKINDNM","string");
        	if(this.dsMain.rowcount==0) {
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	if(!this.in_cb_00.value || "" == this.in_cb_00.value) {
        		alert("취업구분을 선택해 주세요");
        		return;
        	}

        	var v_JOBTYPEGROUPCD = this.dsMain.getColumn(0,"JOBTYPEGROUPCD");
        	var v_JOBTYPECD = this.dsMain.getColumn(0,"JOBTYPECD");
        	var v_JOBTYPECD_BF = this.dsMain.getColumn(0,"JOBTYPECD_BF");

        	if(v_JOBTYPEGROUPCD=="4" ){//취업자(해외취업자)
        		if("1" != this.div_03.form.in_chkBox_00.value){
        			this.div_03.form.in_edit_02.validate = "비자유형";
        		}else{
        			this.div_03.form.in_edit_02.validate = "비자유형,required:true";
        		}
        		this.utlf_validateAG(this.div_03,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="5" ){//취업불가능자
        		this.utlf_validateAG(this.div_06,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="3" ){//취업자(개인창작활동종사자)
        		this.utlf_validateAG(this.div_02,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="7" ){//제외인정자
        		if(v_JOBTYPECD!="66" ){//제외인정자
        			this.utlf_validateAG(this.div_07,this.dsErr);
        		}
        	}
        	if(v_JOBTYPEGROUPCD=="11" ){//진학자(국외)
        		this.utlf_validateAG(this.div_05,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="10" ){//진학자(국내)
        		this.utlf_validateAG(this.div_04,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="12" ){//교내취업자
        		this.utlf_validateAG(this.div_00,this.dsErr);
        	}
        	if(v_JOBTYPEGROUPCD=="13" ){//교내취업자(TLO)
        		this.utlf_validateAG(this.div_01,this.dsErr);
        	}
        	//trace(this.dsMain.saveXML());
        	//등록상태값 저장
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	var v_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.dsMain.addColumn("STATUSCD","string");
        	this.dsMain.addColumn("USERGRPTYPE","string");
        	this.dsMain.setColumn(0,"USERGRPTYPE",v_USERGRPTYPE);
        	if("6" == v_USERGRPTYPE){
        		this.dsMain.setColumn(0,"STATUSCD","3");//학과-데이터 등록
        	}else{
        		this.dsMain.setColumn(0,"STATUSCD","7");//취업-데이터 등록
        	}
        	//trace(this.dsMain.saveXML());
        	var irow = this.dsMain.rowposition;
        	if( "1" != this.dsMain.getColumn(irow,"SAMEUNIVYN")){ //동대학여부
        		this.dsMain.setColumn(i,"SAMEUNIVYN","");
        	}
        	if(this.dsMain.getColumn(irow,"JOBTYPECD_BF") && "30" ==this.dsMain.getColumn(irow,"JOBTYPECD")
        			&& "30" !=this.dsMain.getColumn(irow,"JOBTYPECD_BF")  ){
        		if(!this.confirm("연계된 취업구분을 기타로 변경합니다. 계속 진행하시겠습니까?")) return;
        	}
        	if(this.dsMain.getColumn(irow,"JOBTYPECD_BF") && "99" ==this.dsMain.getColumn(irow,"JOBTYPECD")
        			&& "99" !=this.dsMain.getColumn(irow,"JOBTYPECD_BF")  ){
        		if(!this.confirm("연계된 취업구분을 미상으로 변경합니다. 계속 진행하시겠습니까?")) return;
        	}

        	var v_allowChanges28 = "|28|29|51|48|41|42|43|44|45|6|61|62|64|65|33|35|36|30|99|80|81|82|70|71|72|";
        	//if( "28" !=this.dsMain.getColumn(irow,"JOBTYPECD")
        	if( v_allowChanges28.indexOf("|"+ this.dsMain.getColumn(irow,"JOBTYPECD") +"|") == -1
        			&& "28" ==this.dsMain.getColumn(irow,"JOBTYPECD_BF")  ){

        		//alert("교내취업자로 연계된 취업구분은 변경불가 합니다.");
        		alert("교내취업자로 연계된 취업구분은 해당 취업구분으로 변경불가 합니다.");
        		return;
        	}
        	this.lfn_validate();
        	if (this.dsErr.rowcount>0)
        	{
        		this.utlf_err_pop(this.dsErr);
        		if(this.dsErr.findRowExpr("ERRKINDCD=='2'",0) > -1){
        			return;
        		}
        	}

        	//alert("jobcd=["+v_JOBTYPECD+"], jobcdbf=["+v_JOBTYPECD_BF+"]");
        	//return false;

        	this.gfnTransaction("insertAgRegistOne",
        						"/swiss/ag/regist/insertAgRegistOne.do",
        						"dsSearch=dsMain",
        						"",
        						"",
        						"fnCallback",
        						false);
        }

        this.lfn_validate = function(){
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		var STUDENTNO = this.dsMain.getColumn(i,"STUDENTNO");
        		//trace(this.dsMain.getColumn(i,"JOBTYPECD"));
        		//trace(this.dsMain.getColumn(i,"SEXCD"));
        		if("1" == this.utlf_Trim(this.dsMain.getColumn(i,"EXCHANGEYN")) && "6" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			this.lfn_setErr("외국인은 입대자로 입력할 수 없습니다.");
        		}
        		if("1" == this.utlf_Trim(this.dsMain.getColumn(i,"EXCHANGEYN")) && "61" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			this.lfn_setErr("외국인은 여자군인 중 임관 전 훈련생으로 입력할 수 없습니다.");
        		}
        		if("2" == this.dsMain.getColumn(i,"SEXCD") && "6" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			this.lfn_setErr("여자는 입대자로 입력할 수 없습니다.");
        		}
        		if("1" == this.dsMain.getColumn(i,"SEXCD") && "61" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			this.lfn_setErr("남자는 여자군인 중 임관 전 훈련생으로 입력할 수 없습니다.");
        		}
        		if(!this.utlf_specialPattern(this.dsMain.getColumn(i,"GOFORGSCHNM")) && ("70" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "71" ==this.dsMain.getColumn(i,"JOBTYPECD") || "72" ==this.dsMain.getColumn(i,"JOBTYPECD")) ){
        			this.lfn_setErr("해외진학학교명에 특수문자 또는 영어 외 외국어가 존재합니다.");
        		}
        		if(!this.utlf_specialPattern(this.dsMain.getColumn(i,"FORGCOMNM")) && "51" ==this.dsMain.getColumn(i,"JOBTYPECD") && "52" != this.dsMain.getColumn(i,"JOBTYPECD_BF") ){
        			this.lfn_setErr("해외취업회사명에 특수문자 또는 영어 외 외국어가 존재합니다.");
        		}
        		// 	시작일이 조사기준일 이후 28,51,41,42,43,44,45
        		if(this.dsMain.getColumn(i,"STARTDT") > "20"+this.dsMain.getColumn(i,"SURVSEQ")  && ("28" ==this.dsMain.getColumn(i,"JOBTYPECD") || "51" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "41" ==this.dsMain.getColumn(i,"JOBTYPECD") || "42" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "43" ==this.dsMain.getColumn(i,"JOBTYPECD") || "44" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "45" ==this.dsMain.getColumn(i,"JOBTYPECD") ) ){
        			this.lfn_setErr("시작일/출판일/등록일이 조사기준일 이후 입니다.");
        		}
        		// 시작일이 졸업 이전
        		if(this.dsMain.getColumn(i,"STARTDT") < (this.dsMain.getColumn(i,"OUTYM")+"01")  && ("41" ==this.dsMain.getColumn(i,"JOBTYPECD") || "42" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "43" ==this.dsMain.getColumn(i,"JOBTYPECD") || "44" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "45" ==this.dsMain.getColumn(i,"JOBTYPECD") ) ){
        			this.lfn_setErr(" 시작일/출판일/등록일이 졸업 이전 입니다.");
        		}
        		// 종료일이 조사기준일 이전
        		if(this.dsMain.getColumn(i,"ENDDT") < "20"+this.dsMain.getColumn(i,"SURVSEQ")   && ("28" ==this.dsMain.getColumn(i,"JOBTYPECD") || "51" ==this.dsMain.getColumn(i,"JOBTYPECD")) ){
        			this.lfn_setErr("종료일이 조사기준일 이전 입니다.");
        		}
        		// 종료일이 조사기준일 이후
        		if(this.dsMain.getColumn(i,"ENDDT") > "20"+this.dsMain.getColumn(i,"SURVSEQ")   && ("41" ==this.dsMain.getColumn(i,"JOBTYPECD") || "42" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "44" ==this.dsMain.getColumn(i,"JOBTYPECD")) ){
        			this.lfn_setWar("종료일이 조사기준일 이후 이지만 정상 등록됩니다.");
        		}
        		// 시작일보다 종료일이 빠른경우
        		if(this.dsMain.getColumn(i,"STARTDT") > this.dsMain.getColumn(i,"ENDDT")  && ("28" ==this.dsMain.getColumn(i,"JOBTYPECD") || "51" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "41" ==this.dsMain.getColumn(i,"JOBTYPECD") || "42" ==this.dsMain.getColumn(i,"JOBTYPECD")
        										|| "44" ==this.dsMain.getColumn(i,"JOBTYPECD") ) ){
        			this.lfn_setErr("종료일이 시작일 이전입니다.");
        		}
        		// 교내취업자의 기간이 1년 미만인 경우
        		if("28" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        // 			if( this.utlf_dateDiff(this.utlf_toDate(this.dsMain.getColumn(i,"STARTDT")),this.utlf_toDate(this.dsMain.getColumn(i,"ENDDT"))) < 364 ){
        // 				this.lfn_setWar("교내취업자의 근무일수가 1년 미만입니다. 확인해주세요.");
        // 			}
        			if(this.dsMain.getColumn(i,"STARTDT") && this.dsMain.getColumn(i,"ENDDT")
        				&&this.utlf_dateDiff(this.dsMain.getColumn(i,"STARTDT"),this.dsMain.getColumn(i,"ENDDT")) < 364 ){
        				this.lfn_setWar("교내취업자의 근무일수가 1년 미만입니다. 확인해주세요.");
        			}
        		}
        		// 해외취업자의 근무기간이 91일 미만인 경우
        		if("51" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			if(this.dsMain.getColumn(i,"STARTDT") && this.dsMain.getColumn(i,"ENDDT")
        				&& this.utlf_dateDiff(this.dsMain.getColumn(i,"STARTDT"),this.dsMain.getColumn(i,"ENDDT")) < 91 ){
        				this.lfn_setErr("해외취업자의 근무기간이 91일 미만으로 인정기준에 부합하지 않습니다.");
        			}
        		}
        		if( this.dsMain.getColumn(i,"WORKHOUR")  < 15  && ("51" ==this.dsMain.getColumn(i,"JOBTYPECD") ) ){
        			this.lfn_setErr("해외취업자의 근무기간 자격요건을 충족하지 못합니다.(주당근무시간이 15시간 미만)");
        		}

        		if( "80" ==this.dsMain.getColumn(i,"JOBTYPECD") || "81" ==this.dsMain.getColumn(i,"JOBTYPECD") || "82" ==this.dsMain.getColumn(i,"JOBTYPECD")){
        			var preschcd = this.dsMain.getColumn(i,"SCHCD").substring(0,5);
        			var aftschcd = this.dsMain.getColumn(i,"GOSCHCD").substring(0,5);
        			if(preschcd != aftschcd && "1" == this.dsMain.getColumn(i,"SAMEUNIVYN") )
        				this.lfn_setErr("동대학(원) 여부를 확인해 주세요.");
        			if(preschcd == aftschcd && "1" != this.dsMain.getColumn(i,"SAMEUNIVYN") )
        				this.lfn_setErr("동대학(원) 여부를 확인해 주세요.");
        		}
        	}
        }

        this.in_cb_00_onitemchanged = function(obj,e)
        {
        	this.lfn_resetData();
        	this.lfn_chgJobtypeCd();

        };


        this.div_04_btn_school_onclick = function(obj,e)
        {
        	if( !this.div_04.form.in_rdo_00.value){
        		alert("대학구분을 선택해 주세요");
        		return;
        	}

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("school_popup"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AG::ag05p01.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)");
        	var schcd = "";
        	if("1" == this.dsMain.getColumn(this.dsMain.rowposition,"SAMEUNIVYN")){
        		schcd = this.dsMain.getColumn(this.dsMain.rowposition,"SCHCD");
        	}
        	var objParam = {param1:this.div_04.form.in_rdo_00.value,param2:schcd};
        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , objParam
        						  , this
        						  , "");
        };

        this.fn_set_goschool = function(SCHCD,SCHNM,ORGCD,ORGNM)
        {

        	if(SCHNM == ""){
        		return;
        	}
        	this.dsMain.setColumn(0,"GOSCHNM", SCHNM);
        	this.dsMain.setColumn(0,"GOSCHCD", SCHCD);
        	this.dsMain.setColumn(0,"GOORGNM", ORGNM);
        	this.dsMain.setColumn(0,"GOORGCD", ORGCD);
        	var preschcd = this.dsMain.getColumn(0,"SCHCD").substring(0,5);
        	var aftschcd = this.dsMain.getColumn(0,"GOSCHCD").substring(0,5);
        	//trace(preschcd);
        	//trace(aftschcd);
        	//동대학여부
        	if(preschcd == aftschcd)
        		this.dsMain.setColumn(0,"SAMEUNIVYN", '1');
        	else{
        		this.dsMain.setColumn(0,"SAMEUNIVYN", '');
        	}

        };
        this.div_05_btn_oversea_onclick = function(obj,e)
        {
        	this.fn_selectOversea();
        };
        this.fn_selectOversea = function()
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("oversea_popup1"
        	                  , 0
        					  , 0
        					  , 300
        					  , 200
        					  , null
        					  , null
        					  , "AG::ag05p02.xfdl");
        	objChildFrame.set_showtitlebar(false);
        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	objChildFrame.showModal(this.getOwnerFrame()
        	                      , ''
        						  , this
        						  , "");
        }
        this.fn_set_oversea = function(cd, cdnm)
        {
        	if(cdnm == undefined){
        		return;
        	}

        	this.dsMain.setColumn(this.dsMain.rowposition,"NACODE", cd);
        	this.dsMain.setColumn(this.dsMain.rowposition,"NACODENM", cdnm);
        	//trace(cd);
        	//trace(cdnm);

        };

        this.div_03_btn_oversea_onclick = function(obj,e)
        {
        	this.fn_selectOversea();
        };


        this.div_02_in_rdo_00_onitemchanged = function(obj,e)
        {
        	this.utlf_resetDiv(this.div_02.form.div_00);
        	this.utlf_resetDiv(this.div_02.form.div_01);
        	this.utlf_resetDiv(this.div_02.form.div_02);
        	this.utlf_resetDiv(this.div_02.form.div_03);
        	this.utlf_resetDiv(this.div_02.form.div_04);
        	this.set_div_02_div();
        };
        this.set_div_02_div = function()
        {
        	this.div_02.form.div_00.set_visible(false);
        	this.div_02.form.div_01.set_visible(false);
        	this.div_02.form.div_02.set_visible(false);
        	this.div_02.form.div_03.set_visible(false);
        	this.div_02.form.div_04.set_visible(false);
        	if("41" == this.div_02.form.in_rdo_00.value){//공연
        		this.div_02.form.div_00.set_visible(true);
        	}else if("42" == this.div_02.form.in_rdo_00.value){//전시
        		this.div_02.form.div_01.set_visible(true);
        	}else if("43" == this.div_02.form.in_rdo_00.value){//출판
        		this.div_02.form.div_02.set_visible(true);
        	}else if("44" == this.div_02.form.in_rdo_00.value){//영상
        		this.div_02.form.div_03.set_visible(true);
        	}else if("45" == this.div_02.form.in_rdo_00.value){//저작
        		this.div_02.form.div_04.set_visible(true);
        	}
        }

        //
        // this.fn_err_pop = function(){
        //
        // 	var objChildFrame = new ChildFrame();
        // 	objChildFrame.init("error_pop"
        // 	                  , 0
        // 					  , 0
        // 					  , 600
        // 					  , 520
        // 					  , null
        // 					  , null
        // 					  , "CM::CMErrorView.xfdl");
        // 	objChildFrame.set_showtitlebar(false);
        // 	objChildFrame.set_dragmovetype("all");
        // 	objChildFrame.set_openalign("center middle");
        // 	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        // 	var objParam = {param1:this.dsErr};
        // 	objChildFrame.showModal(this.getOwnerFrame()
        // 	                      , objParam
        // 						  , this
        // 						  , null);
        // }
        this.div_03_in_chkBox_00_onchanged = function(obj,e)
        {
        	if("1" == obj.value){
        		this.div_03.form.in_edit_02.set_enable(true);
        	}else{
        		this.div_03.form.in_edit_02.set_enable(false);
        		this.div_03.form.in_edit_02.set_value("");
        	}
        };
        //오류 set
        this.lfn_setErr = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        	this.dsErr.setColumn(nRow,"ERRKINDCD","2"); // 1확인 2오류
        }

        //확인 set
        this.lfn_setWar = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        	this.dsErr.setColumn(nRow,"ERRKINDCD","1"); // 1확인 2오류
        }

        this.div_04_in_rdo_00_onitemchanged = function(obj,e)
        {
        	this.dsMain.setColumn(0,"GOSCHCD","");
        	this.dsMain.setColumn(0,"GOSCHNM","");
        	this.dsMain.setColumn(0,"GOORGCD","");
        	this.dsMain.setColumn(0,"GOORGNM","");
        };

        this.PopupDiv09_Static02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.in_cb_00.addEventHandler("onitemchanged",this.in_cb_00_onitemchanged,this);
            this.toolTip.addEventHandler("onclick",this.toolTip_onclick,this);
            this.div_02.form.in_rdo_00.addEventHandler("onitemchanged",this.div_02_in_rdo_00_onitemchanged,this);
            this.div_03.form.btn_oversea.addEventHandler("onclick",this.div_03_btn_oversea_onclick,this);
            this.div_03.form.in_chkBox_00.addEventHandler("onchanged",this.div_03_in_chkBox_00_onchanged,this);
            this.div_04.form.btn_school.addEventHandler("onclick",this.div_04_btn_school_onclick,this);
            this.div_04.form.in_rdo_00.addEventHandler("onitemchanged",this.div_04_in_rdo_00_onitemchanged,this);
            this.div_05.form.btn_oversea.addEventHandler("onclick",this.div_05_btn_oversea_onclick,this);
            this.div_07.form.in_rdo_00.addEventHandler("onitemchanged",this.Div_Div02_Radio00_onitemchanged,this);
            this.div_08.form.in_rdo_00.addEventHandler("onitemchanged",this.Div_Div02_Radio00_onitemchanged,this);
            this.PopupDiv09.form.Static02.addEventHandler("onclick",this.PopupDiv09_Static02_onclick,this);
        };

        this.loadIncludeScript("ag05s01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
