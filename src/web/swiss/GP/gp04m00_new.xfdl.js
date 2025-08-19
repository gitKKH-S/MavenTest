(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag05m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("normal 700 36px/normal \"맑은 고딕\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"ERRDESC\" type=\"STRING\" size=\"32\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"ERRCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFIERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"MODDTHM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKIND\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"CDTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"UPCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CDENGNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CDNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSummary", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAVEERRORCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsValid", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JOBTYPECD\">취업구분코드,required2:true</Col><Col id=\"SCHWORKFORM\">교내근무형태,fix12,digitsAG2</Col><Col id=\"WORKHOUR\">근무시간,maxlengthAG1:3,digitsAG1,min:1</Col><Col id=\"STARTDT\">시작일/출판일/등록일,dateAG1</Col><Col id=\"ENDDT\">종료일자,dateAG2</Col><Col id=\"NACODE\">국가코드,maxlengthAG2:4,minlengthAG2:4,digitsAG2</Col><Col id=\"FORGCOMNM\">해외취업회사명,maxlength:80,special</Col><Col id=\"OVERSEAVISATYPE\">해외비자유형,maxlength:80</Col><Col id=\"OVERSEAVISAYN\">해외-비자여부,required1:true,fix12</Col><Col id=\"OVERSEAWORKTYPE\">해외-근무형태,fix12</Col><Col id=\"GOSCHCD\">진학학교코드,maxlength:8</Col><Col id=\"GOORGCD\">진학학교본분교코드,maxlength:1</Col><Col id=\"GOFORGSCHNM\">해외진학학교명,maxlength:80,special</Col><Col id=\"ARTNM\">공연명/전시회명/출판작품명/시나리오명/저작권명,maxlength:80</Col><Col id=\"ARTPL\">공연장소/전시장소/출판사,maxlength:80</Col><Col id=\"ARTPO\">역할/전시작품명/출판작품명,maxlength:80</Col></Row><Row><Col id=\"SCHWORKFORM\">,28,</Col><Col id=\"WORKHOUR\">,28,51,52,</Col><Col id=\"STARTDT\">,28,41,42,43,44,45,51,52,</Col><Col id=\"ENDDT\">,28,41,42,44,51,52,</Col><Col id=\"NACODE\">,51,70,71,72,52,5,15,26,</Col><Col id=\"FORGCOMNM\">,51,52,</Col><Col id=\"OVERSEAVISATYPE\">,51,52,</Col><Col id=\"OVERSEAVISAYN\">,51,52,</Col><Col id=\"OVERSEAWORKTYPE\">,51,52,</Col><Col id=\"GOSCHCD\">,80,81,82,4,14,16,</Col><Col id=\"GOORGCD\">,80,81,82,4,14,16,</Col><Col id=\"GOFORGSCHNM\">,70,71,72,5,15,26,</Col><Col id=\"ARTNM\">,41,42,43,44,45,</Col><Col id=\"ARTPL\">,41,42,43,</Col><Col id=\"ARTPO\">,41,42,43,44,45,</Col></Row><Row><Col id=\"SCHWORKFORM\">,28,</Col><Col id=\"WORKHOUR\">,28,51,52,</Col><Col id=\"STARTDT\">,28,41,42,43,44,45,51,52,</Col><Col id=\"ENDDT\">,28,41,42,44,51,52,</Col><Col id=\"NACODE\">,51,70,71,72,52,5,15,26,</Col><Col id=\"FORGCOMNM\">,51,52,</Col><Col id=\"OVERSEAVISATYPE\">,51,52,</Col><Col id=\"OVERSEAVISAYN\">,51,52,</Col><Col id=\"OVERSEAWORKTYPE\">,51,52,</Col><Col id=\"GOSCHCD\">,80,81,82,4,14,16,</Col><Col id=\"GOORGCD\">,80,81,82,4,14,16,</Col><Col id=\"GOFORGSCHNM\">,70,71,72,5,15,26,</Col><Col id=\"ARTNM\">,41,42,43,44,45,</Col><Col id=\"ARTPL\">,41,42,43,</Col><Col id=\"ARTPO\">,41,42,43,44,45,</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM_BF\" type=\"STRING\" size=\"256\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNationCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/><Column id=\"CDTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGoSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"PROVINCECD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHGUBUN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHENM\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"OPTVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErrKind", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ERRKINDCD\">1</Col><Col id=\"ERRKINDNM\">확인사항</Col></Row><Row><Col id=\"ERRKINDCD\">2</Col><Col id=\"ERRKINDNM\">필수사항</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bfList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fileDownTrans", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","842",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","840",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("tableTitle","30","430","430","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("오류내역");
            obj.set_cssclass("tableTitle");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div02","30","227","1200","52",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_03","460","10","100","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("0");
            obj.set_text("파일등록");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","62","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("1");
            obj.set_text("파일등록");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_02","250","10","100","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("2");
            obj.set_text("코드집");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Button("btn_01","130","10","100","30",null,null,null,null,null,null,this.Div.form.Div02.form);
            obj.set_taborder("3");
            obj.set_text("조사서식");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div02.addChild(obj.name, obj);

            obj = new Div("Div01","30","Div02:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #a5a5a5");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_05","30","60","30","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_05:20","60","210","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_04","in_edit_00:40","60","100","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_cssclass("btn_sty01 btn_styLarge");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","10","80","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("연계인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00","290","10","80","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("제출인원수 :");
            obj.set_cssclass("fontC59");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00","550","10","60","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("오류건수 : ");
            obj.set_cssclass("fontC59");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_00_00_00","780","10","120","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("확인건수(확인사항) : ");
            obj.set_cssclass("fontC59");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_01","Static00_00_00:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("0");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03","Static00_00:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("0");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","Static00_00_01_00_00_00:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_05","Static00_00_01_00_00_00_00:10","10","120","30",null,null,null,null,null,null,this.Div.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("0");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.Div01.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","470","1200","330",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("none");
            obj.set_cssclass("grid_sty02");
            obj.set_autosizingtype("none");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"938\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"오류구분\"/><Cell col=\"3\" text=\"오류내용\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:STUDENTNO\"/><Cell col=\"2\" text=\"bind:ERRKINDCD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsErrKind\" combodatacol=\"ERRKINDNM\" combocodecol=\"ERRKINDCD\"/><Cell col=\"3\" text=\"bind:ERRDESC\" textAlign=\"left\" tooltiptext=\"bind:ERRDESC\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_state","30","187","1200","40",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static02","490","0","130","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("2");
            obj.set_text("취업통계진행상태 :");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("label_01","630","0","300","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("3");
            obj.set_cssclass("state_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("Static00","30","0","50","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("0");
            obj.set_text("학교명 :");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Static("SCHTEXT","Static00:10","0","340","30",null,null,null,null,null,null,this.Div.form.sub_state.form);
            obj.set_taborder("1");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("oo대학교");
            this.Div.form.sub_state.addChild(obj.name, obj);

            obj = new Div("Div_surv","30","82","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sub_research01");
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

            obj = new Button("btn_excel","1130","430","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_visible("true");
            obj.set_font("14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","331","597","842","153",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutExcel");
            obj.set_visible("false");
            obj.set_cssclass("grid_sty02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"300\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"61\"/><Column size=\"100\"/><Column size=\"143\"/><Column size=\"300\"/><Column size=\"150\"/><Column size=\"113\"/><Column size=\"172\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"127\"/><Column size=\"117\"/><Column size=\"180\"/><Column size=\"125\"/><Column size=\"176\"/><Column size=\"300\"/><Column size=\"235\"/><Column size=\"108\"/><Column size=\"150\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"단과대학명\" background=\"#c4c4c4\"/><Cell col=\"1\" text=\"학과명\" background=\"#c4c4c4\"/><Cell col=\"2\" text=\"학과소분류명\" background=\"#c4c4c4\"/><Cell col=\"3\" text=\"주야구분\" background=\"#c4c4c4\"/><Cell col=\"4\" text=\"학번\" background=\"#c4c4c4\"/><Cell col=\"5\" text=\"개인식별키\" background=\"#c4c4c4\"/><Cell col=\"6\" text=\"성별\" background=\"#c4c4c4\"/><Cell col=\"7\" text=\"성명\" background=\"#c4c4c4\"/><Cell col=\"8\" text=\"외국인유학생여부\" background=\"#c4c4c4\"/><Cell col=\"9\" text=\"취업구분코드\"/><Cell col=\"10\" text=\"교내근무형태\"/><Cell col=\"11\" text=\"주당근무시간\"/><Cell col=\"12\" text=\"시작일/출판일/등록일\"/><Cell col=\"13\" text=\"종료일\"/><Cell col=\"14\" text=\"국가코드\"/><Cell col=\"15\" text=\"해외취업회사명\"/><Cell col=\"16\" text=\"해외비자유형\"/><Cell col=\"17\" text=\"해외비자여부\"/><Cell col=\"18\" text=\"해외근무형태\"/><Cell col=\"19\" text=\"진학학교코드\"/><Cell col=\"20\" text=\"진학학교본분교코드\"/><Cell col=\"21\" text=\"해외진학학교명\"/><Cell col=\"22\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"23\" text=\"장소/출판사\"/><Cell col=\"24\" text=\"역할/작품명(개인)\"/></Band><Band id=\"body\"><Cell text=\"bind:COLNM\"/><Cell col=\"1\" text=\"bind:DEPTNM\"/><Cell col=\"2\" text=\"bind:DETAILDEPTNM\"/><Cell col=\"3\" text=\"bind:DNNM\"/><Cell col=\"4\" text=\"bind:STUDENTNO\"/><Cell col=\"5\" text=\"bind:UNIQUEKEY\"/><Cell col=\"6\" text=\"bind:SEXNM\"/><Cell col=\"7\" text=\"bind:NAME\"/><Cell col=\"8\" text=\"bind:EXCHANGEYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"9\" text=\"bind:JOBTYPECD\"/><Cell col=\"10\" text=\"bind:SCHWORKFORM\"/><Cell col=\"11\" text=\"bind:WORKHOUR\"/><Cell col=\"12\" text=\"bind:STARTDT\"/><Cell col=\"13\" text=\"bind:ENDDT\"/><Cell col=\"14\" text=\"bind:NACODE\"/><Cell col=\"15\" text=\"bind:FORGCOMNM\"/><Cell col=\"16\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"17\" text=\"bind:OVERSEAVISAYN\"/><Cell col=\"18\" text=\"bind:OVERSEAWORKTYPE\"/><Cell col=\"19\" text=\"bind:GOSCHCD\"/><Cell col=\"20\" text=\"bind:GOORGCD\"/><Cell col=\"21\" text=\"bind:GOFORGSCHNM\"/><Cell col=\"22\" text=\"bind:ARTNM\"/><Cell col=\"23\" text=\"bind:ARTPL\"/><Cell col=\"24\" text=\"bind:ARTPO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("stepArea00_00_00","30","20","1200","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("stepArea");
            this.addChild(obj.name, obj);

            obj = new Static("gp01m00","0","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("조사현황");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp02m00","342","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("환경설정");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp03m00","171","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("연계결과");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp04m00","513","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("정보등록");
            obj.set_cssclass("step01 on01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp05m00","1026","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("결과조회");
            obj.set_cssclass("step01 last");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp06m00","684","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("결과집계");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("gp07m00","855","0","171","40",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","329","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","159","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","842","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","1013","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","671","8","25","25",null,null,null,null,null,null,this.stepArea00_00_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step on01");
            this.stepArea00_00_00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("gp04m00.xfdl","CM::common.xjs");
        this.addIncludeScript("gp04m00.xfdl","CM::utl_script.xjs");
        this.registerScript("gp04m00.xfdl", function() {
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
        this.fv_SURVPROSTATUSCDNM = "";
        this.fv_TMP = "";

        this.fv_USERID = "";
        this.fv_CHANGEYN = "";
        this.fv_CHGPSNYN = "";
        this.fv_SURVTERM = "";
        this.fv_MENUNM = "졸업후상황>정보등록(개별)";
        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//alert(errMSG);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "insertBatchAgRegist"){
        			this.lfn_summary();
        			this.Div.form.sub_state.form.label_01.set_text("취업-데이터 등록") ;
        			//trace(this.dsErr.saveXML());
        			if(this.dsErr.rowcount > 0){
        				this.alert("확인사항이 있지만 파일이 정상적으로 등록되었습니다.");
        			}else{
        				this.alert("파일이 정상적으로 등록되었습니다.");
        				this.Div_btn_goIndi_onclick(this.Div.form.btn_goIndi);
        			}

        		}
        		if(serviceID == "listSaveError"){
        			//if(this.dsMain.rowcount == 0) alert("조회된 오류자료가 없습니다.");

        			var errcnt = this.dsSummary.getColumn(0,"ERRCNT");
        			var totcnt = this.dsSummary.getColumn(0,"TOTCNT");
        			var regcnt = this.dsSummary.getColumn(0,"REGCNT");
        			var cfmcnt = this.dsSummary.getColumn(0,"CFMCNT");
        			this.Div.form.Div01.form.sta_01.set_text(totcnt);
        			this.Div.form.Div01.form.sta_03.set_text(regcnt);
        			this.Div.form.Div01.form.sta_04.set_text(errcnt);
        			this.Div.form.Div01.form.sta_05.set_text(cfmcnt);

        		}
        		if(serviceID == "listAGinfo"){
        			////trace(this.dsOutExcel.saveXML());
        			this.lfn_excelOutputSave();
        		}
        		if(serviceID == "deleteEvddoc"){
        			alert("처리 되었습니다.");
        		}
        		if(serviceID == "mainData"){

        			this.dsJobcode.deleteRow(this.dsJobcode.findRowExpr("JOBTYPECD=='31'",0));
        			this.dsJobcode.deleteRow(this.dsJobcode.findRowExpr("JOBTYPECD=='40'",0));
        			this.dsJobcode.deleteRow(this.dsJobcode.findRowExpr("JOBTYPECD=='50'",0));
        		}

        		if(serviceID == "getTmp"){
        			var chkopt = this.dsTmp.getColumn(0,"OPTVALUE");
        			if(chkopt=="1"){
        				//this.Div.form.Div02_2.form.in_chkBox_01_2.set_value(1);
        				this.fv_TMP="1";
        				//alert("미연계자 기타설정 학교 m00");

        			}
        		}
         	}
        }

        this.ag05m00_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);

        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");

        	this.fv_SURVSEQ = objApp.gds_param.getColumn(0, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_param.getColumn(0, "SURVKINDCD");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");
        	this.fv_CHGPSNYN = objApp.gds_param.getColumn(0, "CHGPSNYN");
        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SURVPROSTATUSCDNM = objApp.gds_param.getColumn(0, "SURVPROSTATUSCDNM");

        	this.fileDownTrans.setPostData("BASE_DIR", "");
        	this.fileDownTrans.set_url("svcBaseUrl::swiss/hp/com/downloadFileDoc.do");

        	this.Div.form.sub_state.form.SCHTEXT.set_text(objApp.gds_param.getColumn(0, "SCHTEXT1"));
        	this.Div.form.sub_state.form.label_01.set_text(this.fv_SURVPROSTATUSCDNM);

        	this.getTmp();

        	this.dsMain.clearData();
        	this.Div.form.Div01.form.sta_01.set_text("");
        	this.Div.form.Div01.form.sta_03.set_text("");
        	this.Div.form.Div01.form.sta_04.set_text("");
        	this.Div.form.Div01.form.sta_05.set_text("");

        	if( this.fv_CHGPSNYN =='1'){
        		this.lfn_setEnable(false);
        		alert("학과담당자가 지정이 되었습니다. 개별등록 화면에서 진행해 주세요");
        		//this.fn_goPage("AG::ag05m01.xfdl");
        		return;
        	}else{
        		this.lfn_setEnable(true);
        	}

        	this.lfn_divSurvSet();
        	this.lfn_setEnable(this.lfn_agAuthorityChk());
        	this.lfn_mainData();
        	this.utlf_enableBtnByCall();

        	if("Y" == this.fv_CHANGEYN){
        		this.Div.form.Div02.form.btn_01.set_enable(true);
        	}
        };

        this.getTmp = function()
        {
        	var optname = "미연계자기타처리";

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

        this.lfn_agAuthorityChk = function(){
        	var ret = true;

        	var v_SURVPROSTATUSCD = this.fv_SURVPROSTATUSCD;

        	if(this.fv_SURVTERM !=  "Y"){
        		alert("조사기간이 아닙니다.");
        		ret = false;
        	}

        	if("8" == v_SURVPROSTATUSCD || 10 <= v_SURVPROSTATUSCD){
        		alert("이미 제출되었습니다.");
        		ret =  false;
        	}
        	return ret;
        }

        this.lfn_setEnable = function(str){
        	this.Div.form.Div01.set_enable(str);
        	this.Div.form.Div02.set_enable(str);
        	this.Div.form.btn_excel.set_enable(str);
        }
        ////////excel start/////////////////////////////////////////////////////////////////
        //excel upload

        this.btn_03_onclick = function(obj,e)
        {
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일등록", "");  //접속기록
        	this.utlf_excelUpload("dsExcel",this.Import00_onsuccess,this.Import00_onerror);
        };

        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	////trace("임포트성공");
        	this.dsExcel.deleteRow(0);

        	////trace(this.dsExcel.saveXML());
        	this.lfn_excelSave();
        }

        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	////trace("임포트실패");
        }

        this.lfn_excelSave = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD			+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID		+ "ª";
        	strParam += "USERGRPTYPE="	+ '4'					+ "ª";//취업담당자
        	strParam += "STATUSCD="		+ '7'					+ "ª";//취업-데이터 등록

        	dsParamSetArrowBlank(this.dsSearch00, strParam);

        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsExcel.rowcount; i++) {
        		var nRow = this.dsSave.addRow();
        		this.dsSave.copyRow(nRow,this.dsExcel,i,"COLNM=Column0,DEPTNM=Column1,DETAILDEPTNM=Column2,DNNM=Column3,STUDENTNO=Column4,UNIQUEKEY=Column5,SEXNM=Column6,NAME=Column7,EXCHANGEYN=Column8,JOBTYPECD=Column9,SCHWORKFORM=Column10,WORKHOUR=Column11,STARTDT=Column12,ENDDT=Column13,NACODE=Column14,FORGCOMNM=Column15,OVERSEAVISATYPE=Column16,OVERSEAVISAYN=Column17,OVERSEAWORKTYPE=Column18,GOSCHCD=Column19,GOORGCD=Column20,GOFORGSCHNM=Column21,ARTNM=Column22,ARTPL=Column23,ARTPO=Column24");
        		this.dsSave.addColumn("SURVSEQ","STRING");
        		this.dsSave.setColumn(nRow,"SURVSEQ",this.fv_SURVSEQ );
        		this.dsSave.addColumn("SURVKINDCD","STRING");
        		this.dsSave.setColumn(nRow,"SURVKINDCD",this.fv_SURVKINDCD );
        		this.dsSave.addColumn("SCHCD","STRING");
        		this.dsSave.setColumn(nRow,"SCHCD",this.fv_SCHCD );
        		this.dsSave.addColumn("ORGCD","STRING");
        		this.dsSave.setColumn(nRow,"ORGCD",this.fv_ORGCD );
        		this.dsSave.addColumn("WORKERID","STRING");
        		this.dsSave.setColumn(nRow,"WORKERID",this.fv_USERID );

        		if("2" == this.dsSave.getColumn(nRow,"OVERSEAVISAYN") && this.dsSave.getColumn(nRow,"JOBTYPECD")!="51" ){
        			this.dsSave.setColumn(nRow,"OVERSEAVISAYN","");
        		}

        		for(var p=0; p < this.dsJobcode.rowcount; p++){
        			if(this.dsSave.getColumn(nRow,"JOBTYPECD") == this.dsJobcode.getColumn(p,"JOBTYPECD")){
        				this.dsSave.setColumn(nRow,"JOBTYPENM",this.dsJobcode.getColumn(p,"JOBTYPENM"));
        				break;
        			}else{
        				this.dsSave.setColumn(nRow,"JOBTYPENM"," ");
        			}
        		}
        	}

         	if(this.gd_01.getCellCount("head") != this.dsExcel.getColCount()){
         		this.alert("조사서식의 파일이 다릅니다. 조사서식을 다운로드 해서 작성해 주세요.");
        		return;
         	}
        	this.dsErr.clearData();
        	this.dsMain.clearData();

        	this.lfn_DataCheck1()
        	this.lfn_DataCheck2();
        	this.lfn_getValidDataSetAG(this.dsSave,this.dsValid,this.dsErr);

        	if(this.dsErr.rowcount>0){
        		this.lfn_errdataset();
        		this.dsMain.copyData(this.dsErr);
        		//trace(this.dsErr.saveXML());
        		if(this.dsErr.findRowExpr("ERRKINDCD=='2'",0) > -1){
        			this.lfn_summary();
        			alert("아래의 오류내역을 확인하여 주세요.");
        			return;
        		}
        // 		this.utlf_err_pop(this.dsErr);
        // 		if(this.dsErr.findRowExpr("ERRKINDCD=='2'",0) > -1){
        // 			return;
        // 		}
        	}
        	//this.lfn_summary();
        	this.gfnTransaction("insertBatchAgRegist",
        						"/swiss/ag/regist/insertBatchAgRegist.do",
        						"dsSearch=dsSave dsSearch00=dsSearch00",
        						"",
        						"",
        						"fnCallback",
        						false);
        };
        ////////excel end /////////////////////////////////////////////////////////////////
        this.lfn_errdataset = function(){
        	for(var i=0; i < this.dsErr.rowcount; i++){
        		var ERRDESC = this.dsErr.getColumn(i,"ERRDESC");
        		if(ERRDESC.indexOf("[학번:") > -1){
        			var pos = this.utlf_Pos(ERRDESC,"]")
        			this.dsErr.setColumn(i, "STUDENTNO",ERRDESC.substring(4,pos));
        			this.dsErr.setColumn(i, "ERRDESC",ERRDESC.substring(pos+1));
        		}
        	}
        }
        this.lfn_summary = function(){
        	var totcnt = this.dsOutExcel.rowcount;
        	var regcnt = 0;
        	var regcnt2 = 0;
        	var errcnt = 0;
        	var cfmcnt = 0;
        	for(var i=0; i < this.dsOutExcel.rowcount; i++){
        		if(this.dsOutExcel.getColumn(i,"JOBTYPECD")){
        			regcnt++;
        		}
        	}

        	for(var i=0; i < this.dsSave.rowcount; i++){
        		if(this.dsSave.getColumn(i,"JOBTYPECD")){
        			regcnt2++;
        		}
        	}
        	for(var i=0; i < this.dsErr.rowcount; i++){
        		if("2" == this.dsErr.getColumn(i,"ERRKINDCD")){
        			errcnt++;
        		}
        		if("1" == this.dsErr.getColumn(i,"ERRKINDCD")){
        			cfmcnt++;
        		}
        	}
        	if(this.dsErr.rowcount > 0){
        		if(this.dsErr.findRowExpr("ERRKINDCD=='2'",0) == -1){
        			regcnt = regcnt2;	//오류사항이 없으면 등록된내용 반영
        		}
        	}
        	this.Div.form.Div01.form.sta_01.set_text(totcnt);
        	this.Div.form.Div01.form.sta_03.set_text(regcnt);
        	this.Div.form.Div01.form.sta_04.set_text(errcnt);
        	this.Div.form.Div01.form.sta_05.set_text(cfmcnt);
        }
        this.lfn_DataCheck1 = function()
        {	//기준이 되는 연계자료와 비교검증
        	var ret = true;
        	var deptErr = "";
        	for(var i=0; i < this.dsOutExcel.rowcount; i++){
        		//dept check
        		var COLNM = this.utlf_nvl(this.dsOutExcel.getColumn(i,"COLNM"),"");
        		var DEPTNM = this.utlf_nvl(this.dsOutExcel.getColumn(i,"DEPTNM"),"");
        		var DETAILDEPTNM = this.dsOutExcel.getColumn(i,"DETAILDEPTNM");
        		var DNNM = this.dsOutExcel.getColumn(i,"DNNM");
        		var STUDENTNO = this.dsOutExcel.getColumn(i,"STUDENTNO");
        		var UNIQUEKEY = this.dsOutExcel.getColumn(i,"UNIQUEKEY");
        		var SEXNM = this.utlf_nvl(this.dsOutExcel.getColumn(i,"SEXNM"),"");
        		var NAME = this.utlf_nvl(this.dsOutExcel.getColumn(i,"NAME"),"");
        		var nRow ="";
        		if("" != NAME){
        			nRow = this.dsSave.findRowExpr("COLNM=="+"'"+COLNM+"' && DEPTNM=="+"'"+DEPTNM+"' && DETAILDEPTNM=="+"'"+DETAILDEPTNM+"' && DNNM=="+"'"+DNNM+"' && STUDENTNO=="+"'"+STUDENTNO+"' && UNIQUEKEY=="+"'"+UNIQUEKEY+"' && SEXNM=="+"'"+SEXNM+"' && NAME=="+"'"+NAME+"'",0);
        		}else{
        			nRow = this.dsSave.findRowExpr("COLNM=="+"'"+COLNM+"' && DEPTNM=="+"'"+DEPTNM+"' && DETAILDEPTNM=="+"'"+DETAILDEPTNM+"' && DNNM=="+"'"+DNNM+"' && STUDENTNO=="+"'"+STUDENTNO+"' && UNIQUEKEY=="+"'"+UNIQUEKEY+"' && SEXNM=="+"'"+SEXNM+"'",0);
        		}
        		if(nRow == -1){
        			//deptErr = "("+COLNM+"|"+DEPTNM+"|"+DETAILDEPTNM+"|"+DNNM+"|"+STUDENTNO+"|"+UNIQUEKEY+"|"+SEXNM+"|"+NAME+") \n"
        			this.lfn_setErr("[학번:"+STUDENTNO+"]"+"조사대상 학생의 개인식별키가 일치하지 않습니다."+"("+COLNM+"|"+DEPTNM+"|"+DETAILDEPTNM+"|"+DNNM+"|"+STUDENTNO+"|"+UNIQUEKEY+"|"+SEXNM+"|"+NAME+")" );
        			ret = false;
        		}
        		////trace(this.dsOutExcel.getColumn(i,"JOBTYPECD_BF"));
        		for(var k=0; k < this.dsSave.rowcount; k++){
        			if(this.dsSave.getColumn(k,"UNIQUEKEY") == this.dsOutExcel.getColumn(i,"UNIQUEKEY")){
        				this.dsSave.setColumn(k,"JOBTYPECD_BF", this.dsOutExcel.getColumn(i,"JOBTYPECD_BF")) ;
        				this.dsSave.setColumn(k,"JOBTYPENM_BF", this.dsOutExcel.getColumn(i,"JOBTYPENM_BF")) ;
        				this.dsSave.setColumn(k,"OUTYM", this.dsOutExcel.getColumn(i,"OUTYM")) ;
        				this.dsSave.setColumn(k,"SEXCD", this.dsOutExcel.getColumn(i,"SEXCD")) ;
        				this.dsSave.setColumn(k,"EXCHANGEYN", this.dsOutExcel.getColumn(i,"EXCHANGEYN")) ;
        			}
        		}

        	}

        	var dupStr = "";
        	var isUseKey = true;
        	for(var i=0; i < this.dsSave.rowcount; i++){
        		var STUDENTNO = this.dsSave.getColumn(i,"STUDENTNO");
        		if(!this.dsSave.getColumn(i,"UNIQUEKEY")){
        			isUseKey = false;
        		}
        		var nStr = this.dsSave.getColumn(i,"UNIQUEKEY");
        		var nRow = this.dsSave.findRowExpr("UNIQUEKEY=="+"'"+nStr+"'",i+1);

        		if(nRow != -1){
        			dupStr = dupStr + "["+nStr+"]"
        		}
        	}

        	if(!isUseKey){
        		this.lfn_setErr("개인식별키는 수정 및 삭제 사항이 아닙니다. 조사서식을 확인해 주세요.");
        		ret = false;
        	}
        	if(dupStr != ""){
        		this.lfn_setErr(dupStr + "개인식별키 에 중복된 값이 존재 합니다.");
        		ret = false;
        	}
        	return ret;
        }

        this.lfn_DataCheck2 = function()
        {	//엑셀에서 입력받은 자료검증
        	for(var i=0; i < this.dsSave.rowcount; i++){
        	////trace(this.dsSave.getColumn(i,"JOBTYPECD"));
        		var STUDENTNO = this.dsSave.getColumn(i,"STUDENTNO");
        		var JOBTYPECD_BF = this.dsSave.getColumn(i,"JOBTYPECD_BF");
        		var JOBTYPENM_BF = this.dsSave.getColumn(i,"JOBTYPENM_BF");
        		var JOBTYPECD = this.dsSave.getColumn(i,"JOBTYPECD");
        		var JOBTYPENM = this.dsSave.getColumn(i,"JOBTYPENM");
        		//취업구분 27,28(최초값이 27아닌경우)29,32,66,63,34,52
        // 		var arrjobcd = "[63][52]";
        // 		if(arrjobcd.indexOf("["+this.dsSave.getColumn(i,"JOBTYPECD")+"]")>-1){
        // 			this.lfn_setErr("[학번:"+STUDENTNO+"]연계 취업코드는 신규 입력할 수 없습니다.");
        // 		}
        		if( "27" == JOBTYPECD_BF ){
        			if( "27"  == JOBTYPECD || "28" == JOBTYPECD ){
        				//연계 취업구분 건보가입자는 제출 취업구분 건보가입자, 교내취업자 만 가능
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "28" == JOBTYPECD_BF ){
        			var v_allowChanges28 = "|28|29|51|48|41|42|43|44|45|6|61|62|64|65|33|35|36|30|99|80|81|82|70|71|72|4|14|16|5|15|26|";
        			if( "28" == JOBTYPECD || v_allowChanges28.indexOf("|" + JOBTYPECD + "|") > -1){
        				//연계 취업구분 교내취업자 변경가능 |28|29|51|48|41|42|43|44|45|6|61|62|64|65|33|35|36|30|99|80|81|82|70|71|72|4|14|16|5|15|26|
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 ["+JOBTYPENM+"]로 변경할 수 없습니다.");
        			}
        		}
        		else if( "29" == JOBTYPECD_BF ){
        			if( "29" == JOBTYPECD ){
        				//연계 취업구분 교내취업자(TLO)는 제출 취업구분 교내취업자(TLO) 만 가능
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "52" == JOBTYPECD_BF ){
        			if( "52" == JOBTYPECD ){
        				//연계 취업구분 해외취업자(산인공)는 제출 취업구분 해외취업자(산인공) 만 가능
        			}else{
        				//this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "32" == JOBTYPECD_BF ){
        			if( "32" == JOBTYPECD ){
        				//연계 취업구분 1인(창)사업자는 제출 취업구분 1인(창)사업자 만 가능
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "34" == JOBTYPECD_BF ){
        			if( "34" == JOBTYPECD ){
        				//연계 취업구분 취업불가능자(사망자)는 제출 취업구분 취업불가능자(사망자) 만 가능
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "66" == JOBTYPECD_BF ){
        			if( "66" == JOBTYPECD ){
        				//연계 취업구분 제외인정자(해외봉사)는 제출 취업구분 제외인정자(해외봉사) 만 가능
        			}else{
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM_BF+"]의 취업구분을 변경할 수 없습니다.");
        			}
        		}
        		else if( "4" == JOBTYPECD_BF ){
        			if( "27" == JOBTYPECD || "28" == JOBTYPECD || "29" == JOBTYPECD ||
        				"52" == JOBTYPECD || "32" == JOBTYPECD || "34" == JOBTYPECD ||
        				"66" == JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]의 연계되지 않은 취업코드를 연계 취업코드로 변경할 수 없습니다.");
        			}
        				//연계 취업구분 국내진학자(대학)는 제출 취업구분코드 51,48,41,42,43,44,45,33,35,36,4,14,16,5,15,26,80,81,82,70,71,72,61,62,64,65,6,30,99 가능
        		}
        		else if( "14" == JOBTYPECD_BF ){
        			if( "27" == JOBTYPECD || "28" == JOBTYPECD || "29" == JOBTYPECD ||
        				"52" == JOBTYPECD || "32" == JOBTYPECD || "34" == JOBTYPECD ||
        				"66" == JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]의 연계되지 않은 취업코드를 연계 취업코드로 변경할 수 없습니다.");
        			}
        				//연계 취업구분 국내진학자(대학)는 제출 취업구분코드 51,48,41,42,43,44,45,33,35,36,4,14,16,5,15,26,80,81,82,70,71,72,61,62,64,65,6,30,99 가능
        		}
        		else if( "16" == JOBTYPECD_BF ){
        			if( "27" == JOBTYPECD || "28" == JOBTYPECD || "29" == JOBTYPECD ||
        				"52" == JOBTYPECD || "32" == JOBTYPECD || "34" == JOBTYPECD ||
        				"66" == JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]의 연계되지 않은 취업코드를 연계 취업코드로 변경할 수 없습니다.");
        			}else{
        				//연계 취업구분 국내진학자(대학)는 제출 취업구분코드 51,48,41,42,43,44,45,33,35,36,4,14,16,5,15,26,80,81,82,70,71,72,61,62,64,65,6,30,99 가능

        			}
        		}
        		else if( "6" == JOBTYPECD_BF ){
        			if( "27" == JOBTYPECD || "28" == JOBTYPECD || "29" == JOBTYPECD ||
        				"52" == JOBTYPECD || "32" == JOBTYPECD || "34" == JOBTYPECD ||
        				"66" == JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]의 연계되지 않은 취업코드를 연계 취업코드로 변경할 수 없습니다.");
        			}
        				//연계 취업구분 국내진학자(대학)는 제출 취업구분코드 51,48,41,42,43,44,45,33,35,36,4,14,16,5,15,26,80,81,82,70,71,72,61,62,64,65,6,30,99 가능
        		}
        		else {
        			if( "27" == JOBTYPECD || "28" == JOBTYPECD || "29" == JOBTYPECD ||
        				"52" == JOBTYPECD || "32" == JOBTYPECD || "34" == JOBTYPECD ||
        				"66" == JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]연계 취업코드는 신규 입력할 수 없습니다.");
        			}else{
        				//연계 취업구분 국내진학자(대학)는 제출 취업구분코드 51,48,41,42,43,44,45,33,35,36,4,14,16,5,15,26,80,81,82,70,71,72,61,62,64,65,6,30,99 가능
        				if( "4" == JOBTYPECD ){
        					this.dsSave.setColumn(i,"JOBTYPECD","80"); //입력받은 값이 연계 취업토드일 때 변경
        				}else if( "14" == JOBTYPECD ){
        					this.dsSave.setColumn(i,"JOBTYPECD","81"); //입력받은 값이 연계 취업토드일 때 변경
        				}else if( "16" == JOBTYPECD ){
        					this.dsSave.setColumn(i,"JOBTYPECD","82"); //입력받은 값이 연계 취업토드일 때 변경
        				}
        			}
        		}

        		// 입력한 취업구분 검증 유지
        		var nJOBTYPECD = this.dsJobcode.findRowExpr("JOBTYPECD=="+"'"+JOBTYPECD+"'",0);
        		if(nJOBTYPECD == -1){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]올바른 취업구분 코드를 입력해주세요.");
        		}

        		//확인사항 유지 2021-03-30
        		if(JOBTYPECD && JOBTYPECD_BF && "30" ==JOBTYPECD && "30" !=JOBTYPECD_BF){
        			if("52" !=JOBTYPECD_BF){
        				this.lfn_setWar("[학번:"+STUDENTNO+"]연계된 취업구분이 변경되었습니다.("+JOBTYPENM_BF+"->"+JOBTYPENM+")");
        			}
        		}
        		if(JOBTYPECD && JOBTYPECD_BF && "99" ==JOBTYPECD && "99" !=JOBTYPECD_BF){
        			if("52" !=JOBTYPECD_BF){
        				this.lfn_setWar("[학번:"+STUDENTNO+"]연계된 취업구분이 변경되었습니다.("+JOBTYPENM_BF+"->"+JOBTYPENM+")");
        			}
        		}
        		//이 조건은 유지2021-03-30,
        		if( "46" ==JOBTYPECD || "47" ==JOBTYPECD || "60" ==JOBTYPECD ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]신규입력할 수 없는 연계코드("+JOBTYPECD+")입니다.");
        		}
        		if("1" == this.utlf_Trim(this.dsSave.getColumn(i,"EXCHANGEYN")) && "6" ==JOBTYPECD){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]외국인은 입대자로 입력할 수 없습니다.");
        		}
        		if("1" == this.utlf_Trim(this.dsSave.getColumn(i,"EXCHANGEYN")) && "61" ==JOBTYPECD){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]외국인은 여자군인 중 임관 전 훈련생으로 입력할 수 없습니다.");
        		}
        		if("2" == this.utlf_Trim(this.dsSave.getColumn(i,"SEXCD")) && "6" ==JOBTYPECD){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]여자는 입대자로 입력할 수 없습니다.");
        		}
        		if("1" == this.utlf_Trim(this.dsSave.getColumn(i,"SEXCD")) && "61" ==JOBTYPECD){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]남자는 여자군인 중 임관 전 훈련생으로 입력할 수 없습니다.");
        		}

        		// 	시작일이 조사기준일 이후 28,51,41,42,43,44,45
        		if(this.dsSave.getColumn(i,"STARTDT") > "20"+this.dsSave.getColumn(i,"SURVSEQ")  && ("28" ==JOBTYPECD || "51" ==JOBTYPECD
        										|| "41" ==JOBTYPECD || "42" ==JOBTYPECD
        										|| "43" ==JOBTYPECD || "44" ==JOBTYPECD
        										|| "45" ==JOBTYPECD ) ){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 시작일/출판일/등록일이 조사기준일 이후 입니다.");
        		}
        		// 시작일이 졸업 이전
        		//trace(this.dsSave.getColumn(i,"OUTYM")+"01");
        		//trace(this.dsSave.getColumn(i,"STARTDT"));
        		//trace(this.dsSave.getColumn(i,"ENDDT"));
        		if(this.dsSave.getColumn(i,"STARTDT") < this.dsSave.getColumn(i,"OUTYM")+"01"  && ("41" ==JOBTYPECD || "42" ==JOBTYPECD
        										|| "43" ==JOBTYPECD || "44" ==JOBTYPECD
        										|| "45" ==JOBTYPECD ) ){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 시작일/출판일/등록일이 졸업 이전 입니다.");
        		}
        		// 종료일이 조사기준일 이전
        		if(this.dsSave.getColumn(i,"ENDDT") < "20"+this.dsSave.getColumn(i,"SURVSEQ")   && ("28" ==JOBTYPECD || "51" ==JOBTYPECD) ){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 종료일이 조사기준일 이전 입니다.");
        		}
        		// 종료일이 조사기준일 이후
        		if(this.dsSave.getColumn(i,"ENDDT") && this.dsSave.getColumn(i,"ENDDT") > "20"+this.dsSave.getColumn(i,"SURVSEQ")   && ("41" ==JOBTYPECD || "42" ==JOBTYPECD
        										|| "44" ==JOBTYPECD) ){
        			this.lfn_setWar("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 종료일이 조사기준일 이후입니다.");
        		}
        		// 시작일보다 종료일이 빠른경우
        		if(this.dsSave.getColumn(i,"STARTDT") > this.dsSave.getColumn(i,"ENDDT")  && ("28" ==JOBTYPECD || "51" ==JOBTYPECD
        										|| "41" ==JOBTYPECD || "42" ==JOBTYPECD
        										|| "44" ==JOBTYPECD ) ){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 종료일이 시작일 이전입니다.");
        		}
        		// 교내취업자의 기간이 1년 미만인 경우
        		if("28" ==JOBTYPECD){
        			if(this.dsSave.getColumn(i,"STARTDT") && this.dsSave.getColumn(i,"ENDDT")
        				&& this.utlf_dateDiff(this.dsSave.getColumn(i,"STARTDT"),this.dsSave.getColumn(i,"ENDDT")) < 364 ){
        				this.lfn_setWar("[학번:"+STUDENTNO+"]교내취업자의 근무일수가 1년 미만입니다. 확인해주세요.");
        			}
        		}
        		// 해외취업자의 근무기간이 91일 미만인 경우
        		if("51" ==JOBTYPECD){
        			if( this.dsSave.getColumn(i,"STARTDT") && this.dsSave.getColumn(i,"ENDDT")
        				&& this.utlf_dateDiff(this.dsSave.getColumn(i,"STARTDT"),this.dsSave.getColumn(i,"ENDDT")) < 91 ){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]해외취업자의 근무기간이 91일 미만으로 인정기준에 부합하지 않습니다.");
        			}
        		}
        		if( this.dsSave.getColumn(i,"WORKHOUR")  < 15  && ("51" ==JOBTYPECD ) ){
        			this.lfn_setErr("[학번:"+STUDENTNO+"]해외취업자의 근무기간 자격요건을 충족하지 못합니다.(주당근무시간이 15시간 미만)");
        		}

        		//국가코드
        		var nNACODE = this.dsSave.getColumn(i,"NACODE");
        		if( nNACODE && ("51" ==JOBTYPECD || "70" ==JOBTYPECD
        			|| "71" ==JOBTYPECD || "72" ==JOBTYPECD
        			|| "52" ==JOBTYPECD)){
        			var nNationRow = this.dsNationCd.findRowExpr("CD=="+"'"+nNACODE+"'",0);
        			if(nNationRow == -1){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 존재하지 않는 국가코드입니다.");
        			}
        		}

        		//진학학교
        		var nGOSCHCD = this.dsSave.getColumn(i,"GOSCHCD");
        		var nGOORGCD = this.dsSave.getColumn(i,"GOORGCD");
        		if( nGOSCHCD && ("80" ==JOBTYPECD
        			|| "81" ==JOBTYPECD
        			|| "82" ==JOBTYPECD )){
        			var nGoSchoolRow = this.dsGoSchool.findRowExpr("SCHCD=="+"'"+nGOSCHCD+"' && ORGCD=="+"'"+nGOORGCD+"'",0);
        			if(nGoSchoolRow == -1){
        				this.lfn_setErr("[학번:"+STUDENTNO+"]["+JOBTYPENM+"]의 올바른 진학학교본분교코드를 입력해주세요.");
        			}
        		}
        	}
        }

        this.btn_01_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "tmp="				+  "a" 					+ "ª";
        	strParam += "SCHCD="			+  this.fv_SCHCD		+ "ª";
        	strParam += "ORGCD="			+  this.fv_ORGCD		+ "ª";
        	strParam += "SURVSEQ="			+  this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="		+  this.fv_SURVKINDCD 	+ "ª";

        	//alert(strParam);

        	if(this.fv_SURVTERM !=  "Y"){
        		this.alert("선택된 학교는 조사기간이 아닙니다.");
        		return false;
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //해당 학교의 연계결과 조회

        	this.gfnTransaction("selectGpBFList",
        						"/swiss/gp/baserel/selectGpBFList.do",
        						"dsSearch=dsSearch",
        						"dsOutExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        };
        ///EXCEL OUTPUT ////

        this.lfn_mainData = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("mainData",
        						"/swiss/ag/regist/listAGinfo.do",
        						"dsSearch=dsSearch",
        						"dsOutExcel=dsResult dsJobcode=dsJobcode dsNationCd=dsNationCd dsGoSchool=dsGoSchool",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_excelOutputSave = function()
        {
        	if(this.dsOutExcel.getRowCount()==0){
        		alert("저장할 데이터가 없습니다.");
        		return;
        	}
        	this.utlf_excelDownload("졸업후상황조사서식_"+this.getFormatDate(),this.gd_01,this.Export00_onsuccess);
        };
        this.Export00_onsuccess = function (obj, e )
        {
        	//this.setWaitCursor(false);
        	////trace(e.eventid);
        }
        ///EXCEL OUTPUT ////
        this.btn_02_onclick = function(obj,e)
        {
        	this.ds_fileDownList.clearData();

        	var nRow = this.ds_fileDownList.addRow();

        	var svcBaseUrl = nexacro.getEnvironment().services["svcBaseUrl"].url;
        	var downUrl ="doc";
        	if (svcBaseUrl.indexOf("localhost") > 0 ){
        			 downUrl = "C:/eGovFrameDev-3.8.0-64bit/server/apache-tomcat-9.0.31/webapps/swiss/docdown/";
        	}

        	this.ds_fileDownList.setColumn(nRow, "SAVE_PATH", downUrl );
         	this.ds_fileDownList.setColumn(nRow, "SAVE_FILE_NAME", "GPsurvCode.hwp");
         	this.ds_fileDownList.setColumn(nRow, "REAL_FILE_NAME", "졸업생정보코드.hwp");
        	////trace(this.ds_fileDownList.saveXML());
        	// 서버로 전송할 파일정보 셋팅
        	this.fileDownTrans.setPostData("fileInfo", this.ds_fileDownList.saveXML());
        	this.fileDownTrans.set_downloadfilename(this.ds_fileDownList.getColumn(0, "REAL_FILE_NAME"));

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "코드집", "");  //접속기록

        	// 파일 다운로드 실행
        	this.fileDownTrans.download();
        };

        this.btn_04_onclick = function(obj,e)
        {
        	if (this.Div.form.Div01.form.in_edit_00.value && "" != this.Div.form.Div01.form.in_edit_00.value)
        	{
        		this.dsMain.set_filterstr("STUDENTNO.indexOf('"+this.Div.form.Div01.form.in_edit_00.value+"') > -1");
        		//this.dsMain.set_filterstr("ERRDESC=[학번:"+this.Div.form.Div01.form.in_edit_00.value);
        	}
        	else
        	{
        		this.dsMain.set_filterstr("");
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", "STUDENTNO=" + this.utlf_Str(this.Div.form.Div01.form.in_edit_00.value));  //접속기록
        	//this.lfn_listSaveError();
        };


        this.lfn_listSaveError = function(){

        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 			+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD		+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD				+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD				+ "ª";
        	strParam += "STUDENTNO="	+ this.Div.form.Div01.form.in_edit_00.value	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listSaveError",
        						"/swiss/ag/regist/listSaveError.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsSummary=dsSummary",
        						"",
        						"fnCallback",
        						false);
        }

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_04_onclick(this.Div.form.Div01.form.btn_04);
        	}
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

        //오류 set
        this.lfn_setErr = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        	this.dsErr.setColumn(nRow,"ERRKINDCD","2"); // 1확인 2오류
        }
        this.lfn_setWar = function(str)
        {
        	var nRow = this.dsErr.addRow();
        	this.dsErr.setColumn(nRow,"ERRDESC",str);
        	this.dsErr.setColumn(nRow,"ERRKINDCD","1"); // 1확인 2오류
        }

        this.Div_btn_excel_onclick = function(obj,e)
        {
        	if(this.dsMain.rowcount==0){
        		alert("파일저장할 오류내역이 없습니다");
        		return;
        	}
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", "");  //접속기록
        	this.utlf_excelDownload("오류내역",this.Div.form.gd_00,this.Export00_onsuccess);
        };

        /**
        * Check 데이터셋의 Value 확인.
        * @return  true/strin(Message)
        * @example  lfn_getValidDataSetAG(dsMain, dsValid, dsErr)
        */
        //this.errCnt=0;
        this.lfn_getValidDataSetAG = function(dsMain, dsValid, dsErr) {
        	//dsErr.clearData();
        	var rtnVal = "";
        	var errMsg = "";
        	for (var i=0; i<dsMain.rowcount; i++) {
        		var vSTUDENTNO = dsMain.getColumn(i,"STUDENTNO");
        		var vJOBTYPECD = dsMain.getColumn(i,"JOBTYPECD");
        		var vJOBTYPENM = dsMain.getColumn(i,"JOBTYPENM");
        		var vOVERSEAVISAYN = dsMain.getColumn(i,"OVERSEAVISAYN");
        		if(!vOVERSEAVISAYN){
        			vOVERSEAVISAYN = "";
        		}
        		var vUNIQUEKEY = dsMain.getColumn(i,"UNIQUEKEY");
        		/*
        		if(vUNIQUEKEY == "731500001100011"){
        			alert("uniquekey=["+vUNIQUEKEY+"], overseavisayn=["+vOVERSEAVISAYN+"]");
        		}
        		*/

        		for (var K=0; K<dsMain.getColCount(); K++) {
        			for (var j=0; j<dsValid.getColCount(); j++) {
        				if(dsMain.getColID(K) == dsValid.getColID(j)){
        					if(dsValid.getColumn(0,dsValid.getColID(j))){
        						var vCell = dsMain.getColumn(i,dsMain.getColID(K));

        						var str = dsValid.getColumn(0,dsValid.getColID(j));
        						var aStr = dsValid.getColumn(1,dsValid.getColID(j));
        						var isStr = dsValid.getColumn(2,dsValid.getColID(j));

        						var iStr = -1;
        						if(aStr){ // 필수입력여부 체크
        							var iStr = aStr.indexOf(","+vJOBTYPECD+",");
        							if(iStr > -1){
        							//trace(vJOBTYPECD);
        							//trace(vOVERSEAVISAYN);
        								if(vJOBTYPECD == "51" && vOVERSEAVISAYN !="1" && dsValid.getColID(j) == "OVERSEAVISATYPE"){ //해외취업자 비자유형 필수체크 해제
        								}else{
        									/*
        									if(dsValid.getColID(j) == "SCHWORKFORM" || dsValid.getColID(j) == "ENDDT" || dsValid.getColID(j) == "NACODE"
        										|| dsValid.getColID(j) == "OVERSEAVISAYN" || dsValid.getColID(j) == "OVERSEAWORKTYPE"
        										|| dsValid.getColID(j) == "GOSCHCD" || dsValid.getColID(j) == "GOORGCD" || dsValid.getColID(j) == "ARTPL"){
        										str = str+",required2:true";
        									}else{
        										str = str+",required1:true";
        									}
        									*/
        									if(dsValid.getColID(j) == "SCHWORKFORM" || dsValid.getColID(j) == "ENDDT" || dsValid.getColID(j) == "NACODE"
        										|| dsValid.getColID(j) == "OVERSEAWORKTYPE"
        										|| dsValid.getColID(j) == "GOSCHCD" || dsValid.getColID(j) == "GOORGCD" || dsValid.getColID(j) == "ARTPL"){
        										str = str+",required2:true";
        									}else{
        										str = str+",required1:true";
        									}
        								}
        							}
        						}
        // 						if(vJOBTYPECD == "51" && dsValid.getColID(j) == "FORGCOMNM"){ //해외취업회사명 체크
        // 							var colnm = str.split(",");
        // 							if(!this.utlf_specialPattern(vCell)){
        // 								this.lfn_setErr( "["+vJOBTYPENM+"]의 입력정보 중 ["+colnm[0]+"]에 특수문자가 존재합니다.");
        // 							}
        // 						}
        // 						if((vJOBTYPECD == "70" || vJOBTYPECD == "71" || vJOBTYPECD == "72") && dsValid.getColID(j) == "GOFORGSCHNM"){ //해외진학학교명 체크
        // 							var colnm = str.split(",");
        // 							if(!this.utlf_specialPattern(vCell)){
        // 								this.lfn_setErr( "["+vJOBTYPENM+"]의 입력정보 중 ["+colnm[0]+"]에 특수문자가 존재합니다.");
        // 							}
        // 						}
        						// 비 필수 입력여부 체크
        						var irequired = str.indexOf("required");
        						if(irequired == -1){
        							/*
        							if((vJOBTYPECD == "52" || vJOBTYPECD == "51") && dsValid.getColID(j) == "OVERSEAVISAYN"){ //해외취업자 비자유형 필수체크 해제
        							}else */
        							if(vJOBTYPECD == "29"){//교내취업tlo 제외
        							}else{
        								/*
        								if(dsValid.getColID(j) == "SCHWORKFORM" || dsValid.getColID(j) == "ENDDT" || dsValid.getColID(j) == "NACODE"
        									|| dsValid.getColID(j) == "OVERSEAVISAYN" || dsValid.getColID(j) == "OVERSEAWORKTYPE"
        									|| dsValid.getColID(j) == "GOSCHCD" || dsValid.getColID(j) == "GOORGCD" || dsValid.getColID(j) == "ARTPL"){
        									var sp1 = str.split(",");
        									str = "["+vJOBTYPENM+"]의 입력정보 중 "+sp1[0]+",unrequired2:true";
        								}else{
        									var sp1 = str.split(",");
        									str = "["+vJOBTYPENM+"]의 입력정보 중 "+sp1[0]+",unrequired1:true";
        								}
        								*/
        								if(dsValid.getColID(j) == "SCHWORKFORM" || dsValid.getColID(j) == "ENDDT" || dsValid.getColID(j) == "NACODE"
        									|| dsValid.getColID(j) == "OVERSEAWORKTYPE"
        									|| dsValid.getColID(j) == "GOSCHCD" || dsValid.getColID(j) == "GOORGCD" || dsValid.getColID(j) == "ARTPL"){
        									var sp1 = str.split(",");
        									str = "["+vJOBTYPENM+"]의 입력정보 중 "+sp1[0]+",unrequired2:true";
        								}else{
        									var sp1 = str.split(",");
        									str = "["+vJOBTYPENM+"]의 입력정보 중 "+sp1[0]+",unrequired1:true";
        								}
        								dsMain.setColumn(i,dsMain.getColID(K),"");//값 제거
        							}
        						}else{
        							if(dsValid.getColID(j) == "WORKHOUR"){
        							}else{
        								str = "["+vJOBTYPENM+"]의 올바른 "+str;
        							}
        						}

        						var ifix12 = str.indexOf("fix12");
        						if(irequired == -1 && ifix12 > -1){
        							str = "["+vJOBTYPENM+"]의 올바른 "+str;
        						}
        						var arrValidChk = str.split(",");
        						var strColName = arrValidChk[0];
        						if(iStr > -1 || vCell ){
        							for (var h=arrValidChk.length-1; h>0; h--) {
        							//for (var h=1; h<arrValidChk.length; h++) {
        								rtnVal = this.utlf_swiss_procValidationChk(vCell, arrValidChk[h], strColName);
        								if(vJOBTYPECD == "52" && dsValid.getColID(j) == "FORGCOMNM") rtnVal = "";
        								if(rtnVal != ""){
        									var nRow = dsErr.addRow();
        									dsErr.setColumn(nRow,"ERRDESC","[학번:"+vSTUDENTNO+"]"+rtnVal);
        									if(arrValidChk[h] == "unrequired1:true" || arrValidChk[h] == "unrequired2:true"){
        										dsErr.setColumn(nRow,"ERRKINDCD","1"); // 1확인 2오류
        									}else{
        										dsErr.setColumn(nRow,"ERRKINDCD","2"); // 1확인 2오류
        									}
        									break;
        									//dsErr.setColumn(nRow,"ERRKINDNM","오류사항");
        // 									this.errCnt++;
        // 									if(this.errCnt>100){
        // 										return false;
        // 									}
        								}
        							}
        						}
        					}
        				}
        			}
        		}
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

        	// ----------- 선택 학교 조사기간 확인
        	if(this.fv_SURVSTRTDT > toDate || this.fv_SURVENDDT < toDate){
        		this.fv_SURVTERM =  "N";
        	}else{
        		this.fv_SURVTERM =  "Y";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag05m00_onload,this);
            this.Div.form.Div02.form.btn_03.addEventHandler("onclick",this.btn_03_onclick,this);
            this.Div.form.Div02.form.btn_02.addEventHandler("onclick",this.btn_02_onclick,this);
            this.Div.form.Div02.form.btn_01.addEventHandler("onclick",this.btn_01_onclick,this);
            this.Div.form.Div01.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.Div01.form.btn_04.addEventHandler("onclick",this.btn_04_onclick,this);
            this.Div.form.Div01.form.Static00_00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_onclick,this);
            this.Div.form.Div01.form.Static00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_onclick,this);
            this.Div.form.Div01.form.Static00_00_01_00_00_00_00.addEventHandler("onclick",this.Div_sub_fileErr_Static00_00_01_00_00_00_00_onclick,this);
            this.Div.form.btn_excel.addEventHandler("onclick",this.Div_btn_excel_onclick,this);
            this.stepArea00_00_00.form.gp01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.stepArea00_00_00.form.gp07m00.addEventHandler("onclick",this.lfn_goMenu,this);
        };

        this.loadIncludeScript("gp04m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
