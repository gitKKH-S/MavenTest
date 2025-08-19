(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ad11m00");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            this.set_font("15px/normal \"SpoqaHanSans-Regular\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SUCCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVPROSTATUSNM\" type=\"STRING\" size=\"32\"/><Column id=\"RNUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALSUCCNT\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"_chk\" type=\"string\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROPTYCNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALIMPRCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvprostatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\"/><Col id=\"CDNM\">전체</Col></Row><Row><Col id=\"CD\">14</Col><Col id=\"CDNM\">KEDI-소명요청</Col></Row><Row><Col id=\"CD\">15</Col><Col id=\"CDNM\">취업-소명제출</Col></Row><Row><Col id=\"CD\">16</Col><Col id=\"CDNM\">KEDI-소명승인</Col></Row><Row><Col id=\"CD\">17</Col><Col id=\"CDNM\">KEDI-소명반려</Col></Row><Row><Col id=\"CD\">18</Col><Col id=\"CDNM\">KEDI-최종승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProgSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALSUCCNT\" type=\"STRING\" size=\"32\"/><Column id=\"TOTALCNT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsValid", this);
            obj._setContents("<ColumnInfo><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IMPROPTYN\">적합여부,required:true,fix12</Col><Col id=\"RTNRN\">반려사유,maxlengthB:2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsErr", this);
            obj._setContents("<ColumnInfo><Column id=\"ERRDESC\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"ERRKINDCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelBf", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"DEGREECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"MOECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCETC\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"32\"/><Column id=\"SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"INDLGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TRANSCLOSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"IMPROPTYN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"256\"/><Column id=\"RTNRN\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETYN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CLERICYN\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVPROSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"WELFARECD\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ATT_IDT_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"OUTYM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"COLNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTHYEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"MNTNEMPLYN4\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"INYM\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AGE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"32\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN1\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN2\" type=\"STRING\" size=\"256\"/><Column id=\"MNTNEMPLYN3\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"NACODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPECD_AT\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDDT_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHWORKFORM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR_AT\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"FORGCOMNM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE_AT\" type=\"STRING\" size=\"256\"/><Column id=\"SAMEUNIVYN_AT\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD_AT\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGCD_AT\" type=\"STRING\" size=\"256\"/><Column id=\"GOFORGSCHNM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL_AT\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImpropt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">적합</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">부적합</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CDNM\">확인필요</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CDNM\">내용변경</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVENDDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVYEAR\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCDNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDTHM\" type=\"DATETIME\" size=\"17\"/><Column id=\"SURVOBJ\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSTATUSCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVNM\" type=\"STRING\" size=\"32\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"RN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SURVKINDNM\" type=\"STRING\" size=\"32\"/><Column id=\"REMARK\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","890",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("#f9f9f9");
            this.addChild(obj.name, obj);

            obj = new Div("sub_title_wrap","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            this.Div.addChild(obj.name, obj);

            obj = new Static("sub_title","0","0","370","32",null,null,null,null,null,null,this.Div.form.sub_title_wrap.form);
            obj.set_taborder("0");
            obj.set_text("학교별 소명자료");
            obj.set_cssclass(" title_t2");
            this.Div.form.sub_title_wrap.addChild(obj.name, obj);

            obj = new Static("Static01","30","0","1200","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("0");
            obj.set_background("#fd9da0");
            obj.set_visible("false");
            obj.set_opacity("0.5");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","30","890",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("Div00","30","60","1200","50",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_01","25","10","74","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조사기준");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","Static00_01:0","10","150","30",null,null,null,null,null,null,this.Div.form.Div00.form);
            obj.set_taborder("0");
            obj.set_datacolumn("SURVSEQNM");
            obj.set_codecolumn("SURVSEQ");
            obj.set_innerdataset("dsSurvInfo");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.Div00.addChild(obj.name, obj);

            obj = new Div("sub_search","30","Div00:20","1200","110",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_search","1030","66","130","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("btn_styLarge");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00","440","10","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_text("학제구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","33","10","64","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_text("취업구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_job","116","10","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","850","10","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_text("학교명");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_schnm","921","10","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_schkind","526","10","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsSchKind");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","30","60","80","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("체크구분");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_survprostatus00","116","60","240","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_accessibilitylabel("입고년도");
            obj.set_innerdataset("dsSurvprostatus");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CDNM");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","890",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_return",null,"260","150","30","30",null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("소명자료요청");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_main","30","sub_search:60","1200","550",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_binddataset("dsMain");
            obj.set_cellmovingtype("col");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"42\"/><Column size=\"160\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"학제명\"/><Cell col=\"3\" text=\"학교명\"/><Cell col=\"4\" text=\"본분교명\"/><Cell col=\"5\" text=\"진행상태\"/><Cell col=\"6\" text=\"전체\"/><Cell col=\"7\" text=\"적합\"/><Cell col=\"8\" text=\"부적합\"/><Cell col=\"9\" text=\"확인필요\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:(SURVPROSTATUSCD=='15' || SURVPROSTATUSCD=='17')?'checkboxcontrol':'normal'\" edittype=\"expr:(SURVPROSTATUSCD=='15' || SURVPROSTATUSCD=='17')?'checkbox':'none'\" checkboxtruevalue=\"1\" text=\"bind:_chk\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:SCHKINDNM\"/><Cell col=\"3\" text=\"bind:SCHNM\"/><Cell col=\"4\" text=\"bind:ORGNM\"/><Cell col=\"5\" text=\"bind:SURVPROSTATUSNM\"/><Cell col=\"6\" text=\"bind:TOTALCNT\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:SUCCNT\"/><Cell col=\"8\" text=\"bind:IMPROPTYCNT\"/><Cell col=\"9\" text=\"bind:CONCNT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"5\" text=\"합계\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;TOTALCNT&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;SUCCNT&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;IMPROPTYCNT&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;CONCNT&quot;)\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_appro",null,"260","100","30","btn_return:20",null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_returndown","33","260","150","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_text("반려사유다운로드");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_returnup","btn_returndown:20","260","150","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("반려사유업로드");
            obj.set_cssclass("btn_sty04");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_excel","324","660","904",null,null,"gd_main:-412",null,null,null,null,this.Div.form);
            obj.set_taborder("10");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsExcelBf");
            obj.set_visible("false");
            obj.set_cssclass("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"103\"/><Column size=\"94\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"169\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"155\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"190\"/><Column size=\"155\"/><Column size=\"147\"/><Column size=\"106\"/><Column size=\"158\"/><Column size=\"146\"/><Column size=\"153\"/><Column size=\"128\"/><Column size=\"153\"/><Column size=\"157\"/><Column size=\"205\"/><Column size=\"106\"/><Column size=\"118\"/><Column size=\"252\"/><Column size=\"129\"/><Column size=\"178\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학교코드\"/><Cell col=\"2\" text=\"학교명\"/><Cell col=\"3\" text=\"본분교코드\"/><Cell col=\"4\" text=\"본분교명\"/><Cell col=\"5\" text=\"취업구분\"/><Cell col=\"6\" text=\"학번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"개인식별키\"/><Cell col=\"9\" text=\"적합여부명\"/><Cell col=\"10\" text=\"적합여부코드\" background=\"linear-gradient(to top,#eff0f0,#f9fafa) #fbfb1c\"/><Cell col=\"11\" text=\"반려사유\" background=\"linear-gradient(to top,#eff0f0,#f9fafa) #fbfb1c\"/><Cell col=\"12\" text=\"외국인유학생여부\"/><Cell col=\"13\" text=\"진학학교명\"/><Cell col=\"14\" text=\"진학학교본분교명\"/><Cell col=\"15\" text=\"국가명\"/><Cell col=\"16\" text=\"해외진학학교명\"/><Cell col=\"17\" text=\"해외취업회사명\"/><Cell col=\"18\" text=\"해외비자여부\"/><Cell col=\"19\" text=\"해외비자유형\"/><Cell col=\"20\" text=\"해외근무형태\"/><Cell col=\"21\" text=\"교내근무형태\"/><Cell col=\"22\" text=\"시작일/출판일/등록일\"/><Cell col=\"23\" text=\"종료일\"/><Cell col=\"24\" text=\"근무시간\"/><Cell col=\"25\" text=\"공연명/전시회명/도서명/작품명\"/><Cell col=\"26\" text=\"장소/출판사\"/><Cell col=\"27\" text=\"역할/작품명(개인)\"/><Cell col=\"28\" text=\"취업구분_수정\"/><Cell col=\"29\" text=\"동대학(원)진학여부_수정\"/><Cell col=\"30\" text=\"진학학교_수정\"/><Cell col=\"31\" text=\"진학학교본분교_수정\"/><Cell col=\"32\" text=\"국가_수정\"/><Cell col=\"33\" text=\"해외진학학교명_수정\"/><Cell col=\"34\" text=\"해외취업회사명_수정\"/><Cell col=\"35\" text=\"해외비자여부_수정\"/><Cell col=\"36\" text=\"해외비자유형_수정\"/><Cell col=\"37\" text=\"해외근무형태_수정\"/><Cell col=\"38\" text=\"교내근무형태_수정\"/><Cell col=\"39\" text=\"시작일/출판일/등록일_수정\"/><Cell col=\"40\" text=\"종료일_수정\"/><Cell col=\"41\" text=\"근무시간_수정\"/><Cell col=\"42\" text=\"공연명/전시회명/도서명/작품명_수정\"/><Cell col=\"43\" text=\"장소/출판사_수정\"/><Cell col=\"44\" text=\"역할/작품명(개인)_수정\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SCHCD\"/><Cell col=\"2\" text=\"bind:SCHNM\"/><Cell col=\"3\" text=\"bind:ORGCD\"/><Cell col=\"4\" text=\"bind:ORGNM\"/><Cell col=\"5\" text=\"bind:JOBTYPENM\"/><Cell col=\"6\" text=\"bind:STUDENTNO\"/><Cell col=\"7\" text=\"bind:NAME\"/><Cell col=\"8\" text=\"bind:UNIQUEKEY\"/><Cell col=\"9\" text=\"bind:IMPROPTYN\" displaytype=\"combotext\" combodataset=\"dsImpropt\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"10\" text=\"bind:IMPROPTYN\"/><Cell col=\"11\" text=\"bind:RTNRN\"/><Cell col=\"12\" text=\"bind:EXCHANGEYN\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"13\" text=\"bind:GOSCHNM\"/><Cell col=\"14\" text=\"bind:GOORGNM\"/><Cell col=\"15\" text=\"bind:NACODENM\"/><Cell col=\"16\" text=\"bind:GOFORGSCHNM\"/><Cell col=\"17\" text=\"bind:FORGCOMNM\"/><Cell col=\"18\" text=\"bind:OVERSEAVISAYN\"/><Cell col=\"19\" text=\"bind:OVERSEAVISATYPE\"/><Cell col=\"20\" text=\"bind:OVERSEAWORKTYPE\"/><Cell col=\"21\" text=\"bind:SCHWORKFORMNM\"/><Cell col=\"22\" text=\"bind:STARTDT\"/><Cell col=\"23\" text=\"bind:ENDDT\"/><Cell col=\"24\" text=\"bind:WORKHOUR\"/><Cell col=\"25\" text=\"bind:ARTNM\"/><Cell col=\"26\" text=\"bind:ARTPL\"/><Cell col=\"27\" text=\"bind:ARTPO\"/><Cell col=\"28\" text=\"bind:JOBTYPECD_AT\"/><Cell col=\"29\" text=\"bind:SAMEUNIVYN_AT\"/><Cell col=\"30\" text=\"bind:GOSCHCD_AT\"/><Cell col=\"31\" text=\"bind:GOORGCD_AT\"/><Cell col=\"32\" text=\"bind:NACODE_AT\"/><Cell col=\"33\" text=\"bind:GOFORGSCHNM_AT\"/><Cell col=\"34\" text=\"bind:FORGCOMNM_AT\"/><Cell col=\"35\" text=\"bind:OVERSEAVISAYN_AT\"/><Cell col=\"36\" text=\"bind:OVERSEAVISATYPE_AT\"/><Cell col=\"37\" text=\"bind:OVERSEAWORKTYPE_AT\"/><Cell col=\"38\" text=\"bind:SCHWORKFORM_AT\"/><Cell col=\"39\" text=\"bind:STARTDT_AT\"/><Cell col=\"40\" text=\"bind:ENDDT_AT\"/><Cell col=\"41\" text=\"bind:WORKHOUR_AT\"/><Cell col=\"42\" text=\"bind:ARTNM_AT\"/><Cell col=\"43\" text=\"bind:ARTPL_AT\"/><Cell col=\"44\" text=\"bind:ARTPO_AT\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("ad12m00.xfdl","CM::common.xjs");
        this.addIncludeScript("ad12m00.xfdl","CM::utl_script.xjs");
        this.registerScript("ad12m00.xfdl", function() {
        this.executeIncludeScript("CM::common.xjs"); /*include "CM::common.xjs"*/;
        this.executeIncludeScript("CM::utl_script.xjs"); /*include "CM::utl_script.xjs"*/;

        //기본변수세팅
        this.fv_USERID = "";
        this.fv_SURVSEQ = "";
        this.fv_SURVKINDCD = "AG";
        this.fv_EVDDOCTYPE = "2"; // 소명자료
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;

        this.fv_MENUNM = "관리자>자료검증>학교별소명자료";

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        	}else{
        		if(serviceID == "selectSurvReg"){
        			this.dsSurvInfo.addColumn("SURVSEQNM","string");
        			for(var i=0; i < this.dsSurvInfo.rowcount; i++){
        				var v_survseq = this.dsSurvInfo.getColumn(i,"SURVSEQ");
        				var v_SURVSEQNM = v_survseq.substr(0,2)+"."+v_survseq.substr(2,2)+"."+v_survseq.substr(4,2);
        				this.dsSurvInfo.setColumn(i,"SURVSEQNM",v_SURVSEQNM);
        			}
         			this.Div.form.Div00.form.in_cb_00.set_value(this.fv_SURVSEQ);
        			this.selectSchKindCodeList();
        		}
        		if(serviceID == "selectSchKindCodeList"){
        			this.dsSchKind.insertRow(0);
        			this.dsSchKind.setColumn(0,"CD","");
        			this.dsSchKind.setColumn(0,"CDNM","전체");
        			this.lfn_listJobGroupCd();
        			this.Div.form.sub_search.form.in_cb_schkind.set_index(0);
        		}
        		if(serviceID == "listJobGroupCd"){
        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");
        			this.dsJobGroupCd.set_filterstr("JOBTYPEGROUPCD !='13' && JOBTYPEGROUPCD !='14' && JOBTYPEGROUPCD !='8' && JOBTYPEGROUPCD !='9' ");
        			this.Div.form.sub_search.form.in_cb_job.set_index(0);
        		}

        		if(serviceID == "listSchEvdoc"){
        			if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        			this.dsMain.addColumn("_chk","string");
        			//trace(this.dsMain.saveXML());
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listReturnRsn"){
        			trace(this.dsExcelBf.saveXML());
        			this.utlf_excelDownload("소명자료-반려사유리스트",this.Div.form.gd_excel,this.Export00_onsuccess);
        		}
        		if(serviceID == "insertAdRtEvdoc"){
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			alert("소명자료를 요청하였습니다.");
        		}
        		if(serviceID == "updateSchStatus"){
        			this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        			alert("승인되었습니다.");
        		}
        		if(serviceID == "updateReturnRsn"){
        			alert("반려사유를 업로드 하였습니다.");
        			this.lfn_listPage(1);
        		}
         	}
        }

        this.selectSchKindCodeList = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "CDTYPE="		+ '0527' 		+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.gfnTransaction("selectSchKindCodeList",
        						"/swiss/cm/selectCodeList.do",
        						"dsSearch=dsSearch",
        						"dsSchKind=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_listJobGroupCd = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listJobGroupCd",
        						"/swiss/ad/dataVerification/listJobGroupCd.do",
        						"dsSearch=dsSearch",
        						"dsJobGroupCd=dsJobGroupCd",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {
        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END=" + end + "ª";

        	strParam += "EVDDOCTYPE=" 		+ this.fv_EVDDOCTYPE	+ "ª";
        	strParam += "SURVSEQ=" 			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHKINDCD=" 		+ this.Div.form.sub_search.form.in_cb_schkind.value	+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_job.value	+ "ª";
        	strParam += "SCHNM="			+ this.Div.form.sub_search.form.in_edit_schnm.value	+ "ª";
        	strParam += "SURVPROSTATUSCD="	+ this.Div.form.sub_search.form.in_cb_survprostatus00.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	this.gfnTransaction("listSchEvdoc",
        						"/swiss/ad/dataVerification/listSchEvdoc.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage",
        						"",
        						"fnCallback",
        						false);
        };

        // 페이지 초기화 함수
        this.paggingInit = function(){
        	//this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	//this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listPage(nPage);
        	this.pageFirst = false;
        }

        this.ad11m00_onload = function(obj,e)
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.lfn_selectSurvInfo();
        };

        this.Export00_onsuccess = function (obj, e )
        {
        	trace(e.eventid);
        }

        this.btn_returnup_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "반려사유업로드", "");  //접속기록
        	this.utlf_excelUpload("dsExcel",this.Import00_onsuccess,this.Import00_onerror);
        };
        //onsuccess Event
        this.Import00_onsuccess = function(obj,  e)
        {
        	this.dsExcel.deleteRow(0);
        	this.dsSaveExcel.clearData();
        	for(var i=0; i < this.dsExcel.rowcount; i++){
        		var nRow = this.dsSaveExcel.addRow();
        		this.dsSaveExcel.copyRow(nRow,this.dsExcel,i,"SCHCD=Column1,ORGCD=Column3,UNIQUEKEY=Column8,IMPROPTYN=Column10,RTNRN=Column11");
        		if(!this.dsSaveExcel.getColumn(nRow,"UNIQUEKEY")){
        			this.dsSaveExcel.deleteRow(nRow);
        		}
        		if(!this.dsSaveExcel.getColumn(nRow,"IMPROPTYN") && !this.dsSaveExcel.getColumn(nRow,"RTNRN") ){
        			this.dsSaveExcel.deleteRow(nRow);
        		}
        		this.dsSaveExcel.addColumn("EVDDOCTYPE","string");
        		this.dsSaveExcel.setColumn(nRow,"EVDDOCTYPE", this.fv_EVDDOCTYPE);
        		this.dsSaveExcel.addColumn("SURVSEQ","string");
        		this.dsSaveExcel.setColumn(nRow,"SURVSEQ", this.fv_SURVSEQ);
        		this.dsSaveExcel.addColumn("SURVKINDCD","string");
        		this.dsSaveExcel.setColumn(nRow,"SURVKINDCD", this.fv_SURVKINDCD);
        		this.dsSaveExcel.addColumn("WORKERID","string");
        		this.dsSaveExcel.setColumn(nRow,"WORKERID", this.fv_USERID);
        	}
        	trace(this.dsSaveExcel.saveXML());
        	this.lfn_excelSave();
        }
        this.lfn_excelSave = function()
        {
        	if(this.dsExcel.rowcount == 0){
        		this.alert("입력할 엑셀파일을 선택하세요");
        		return;
        	}
        	this.utlf_getValidDataSet(this.dsSaveExcel,this.dsValid,this.dsErr);
        	if(this.dsErr.rowcount>0){
        		this.utlf_err_pop(this.dsErr);
        		return;
        	}
        	this.gfnTransaction("updateReturnRsn",
        						"/swiss/ad/dataVerification/updateReturnRsn.do",
        						"dsSearch=dsSaveExcel",
        						"",
        						"",
        						"fnCallback",
        						false);
        };
        //onerror Event
        this.Import00_onerror = function(obj,  e)
        {
        	trace("임포트실패");
        }

        this.btn_returndown_onclick = function(obj,e)
        {
        	var strParam = "";
        	strParam += "EVDDOCTYPE=" 		+ this.fv_EVDDOCTYPE	+ "ª";
        	strParam += "SURVSEQ=" 			+ this.fv_SURVSEQ		+ "ª";
        	strParam += "SURVKINDCD="		+ this.fv_SURVKINDCD	+ "ª";
        	strParam += "SCHKINDCD=" 		+ this.Div.form.sub_search.form.in_cb_schkind.value	+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_job.value	+ "ª";
        	strParam += "SCHNM="			+ this.Div.form.sub_search.form.in_edit_schnm.value	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "반려사유다운로드", strParam);  //접속기록
        	this.gfnTransaction("listReturnRsn",
        						"/swiss/ad/dataVerification/listReturnRsn.do",
        						"dsSearch=dsSearch",
        						"dsExcelBf=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_appro_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	this.dsSave.clearData();
        	var statusChk=true;
        	var cntChk =true;
        	var impChk =true;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			if(	"15" != this.dsMain.getColumn(i,"SURVPROSTATUSCD") && "17" != this.dsMain.getColumn(i,"SURVPROSTATUSCD")) statusChk = false;
        			if(this.utlf_Trim(this.dsMain.getColumn(i,"TOTALCNT")) != this.utlf_Trim(this.dsMain.getColumn(i,"SUCCNT"))) cntChk = false;
        			if(this.utlf_Trim(this.dsMain.getColumn(i,"IMPROPTYCNT")) > 0) impChk = false;
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			var v_PRGSTATUSCD = "18"; // KEDI-최종승인
        			this.dsSave.setColumn(newRow,"SURVPROSTATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("EVDDOCTYPE","string");
        			this.dsSave.setColumn(newRow,"EVDDOCTYPE", this.fv_EVDDOCTYPE);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	trace(this.dsSave.saveXML());
        	if(this.dsSave.rowcount == 0){
        		this.alert("승인할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("학교에서 제출한 경우에만 처리 가능합니다.");
        		return;
        	}
        	/*
        	if(!cntChk){
        		alert("완료되지 않은 자료가 있습니다. 처리 후 진행해 주십시요.");
        		return;
        	}
        	if(!impChk){
        		alert("부적합자가 있습니다. 처리 후 진행해 주십시요.");
        		return;
        	}
        	*/
        	if(!this.confirm("승인 하시겠습니까?")){
        		return;
        	}
        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "승인", "");  //접속기록
        	this.gfnTransaction("updateSchStatus",
        						"/swiss/cm/insertSurvMntr.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.btn_return_onclick = function(obj,e)
        {
        	if(!this.lfn_yearchk()) return;
        	this.dsSave.clearData();
        	var statusChk=true;
        	var cntChk =true;
        	var impChk =true;
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			if(	"16" != this.dsMain.getColumn(i,"SURVPROSTATUSCD")) statusChk = false;
        			if(this.utlf_Trim(this.dsMain.getColumn(i,"TOTALCNT")) != this.utlf_Trim(this.dsMain.getColumn(i,"SUCCNT"))) cntChk = false;
        			if(this.utlf_Trim(this.dsMain.getColumn(i,"IMPROPTYCNT")) == 0) impChk = false;
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			var v_PRGSTATUSCD = "14"; // 소명자료요청
        			this.dsSave.setColumn(newRow,"SURVPROSTATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("EVDDOCTYPE","string");
        			this.dsSave.setColumn(newRow,"EVDDOCTYPE", this.fv_EVDDOCTYPE);
        			//모티터링 처리
        			this.dsSave.addColumn("RCEPTCN","string");
        			this.dsSave.setColumn(newRow,"RCEPTCN", "");
        			this.dsSave.addColumn("STATUSCD","string");
        			this.dsSave.setColumn(newRow,"STATUSCD",v_PRGSTATUSCD);
        			this.dsSave.addColumn("WORKERID","string");
        			this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        		}
        	}
        	trace(this.dsSave.saveXML());
        	if(this.dsSave.rowcount == 0){
        		this.alert("소명자료를 요청할 데이터를 선택해 주십시요");
        		return;
        	}
        	if(!statusChk){
        		alert("학교에서 제출한 경우에만 처리 가능합니다.");
        		return;
        	}
        	if(!cntChk){
        		alert("완료되지 않은 자료가 있습니다. 처리 후 진행해 주십시요.");
        		return;
        	}
        	if(!impChk){
        		alert("부적합자가 없어 소명자료를 요청할 수 없습니다.");
        		return;
        	}
        	if(!this.confirm("소명자료를 요청 하시겠습니까?")){
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "소명자료요청", "");  //접속기록
        	this.gfnTransaction("insertAdRtEvdoc",
        						"/swiss/ad/dataVerification/insertAdRtRtEvdoc.do",
        						"dsSearch=dsSave",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        //그리드의 head영역의 체크박스 클릭 시 전체 체크
        this.Div_gd_main_onheadclick = function(obj,e)
        {
        //alert("in head");
        	var sColID = obj.getCellProperty("body", e.cell, "text");   //"bind:colChk"
            sColID = sColID.substr(5);
            if(sColID == "_chk"){
        	//alert("in head _chk");
        		var nValue = obj.getCellProperty("head", e.cell, "text");
        		nValue = (nValue == "1" ? "0" : "1");
        		//alert(nValue);
        		for(var i=0; i < this.dsMain.rowcount; i++){
        			if("15"==this.dsMain.getColumn(i, "SURVPROSTATUSCD")){
        				this.dsMain.setColumn(i, "_chk", nValue);
        			}
        		}
        		obj.setCellProperty("Head", e.cell, "text", nValue);
        	}
        };


        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.btn_search_onclick(this.Div.form.sub_search.form.btn_search);
        	}
        };


        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVKINDCD="	+ "AG" 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvReg",
        						"/swiss/ad/surv/selectSurvReg.do",
        						"dsSearch=dsSearch",
        						"dsSurvInfo=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_in_cb_00_onitemchanged = function(obj,e)
        {

        	this.dsMain.clearData();
        	this.fv_SURVSEQ = this.Div.form.Div00.form.in_cb_00.value;
        	var i = this.Div.form.Div00.form.in_cb_00.index;
        	//this.fv_SURVKINDCD = this.dsSurvInfo.getColumn(i, "SURVKINDCD");
        	this.fv_SURVOBJ = this.dsSurvInfo.getColumn(i, "SURVOBJ");
        	this.fv_SURVSTRTDT = this.dsSurvInfo.getColumn(i, "SURVSTRTDT");
        	this.fv_SURVENDDT = this.dsSurvInfo.getColumn(i, "SURVENDDT");
        	this.fv_SURVNM = this.dsSurvInfo.getColumn(i, "SURVNM");

        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( " + this.fv_SURVNM + " )";
        	this.Div.form.Div00.form.label_00.set_text(survinfo) ;

        };

        this.lfn_yearchk = function()
        {
        	var objApp 		= nexacro.getApplication();
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	var SURVSEQ = objApp.gds_login_info.getColumn(idx, "SURVSEQ");
        	if(this.fv_SURVSEQ != SURVSEQ){
        		//alert("당해년도만 처리 가능합니다.");
        		//return false;
        		return true;
        	}else{
        		return true;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ad11m00_onload,this);
            this.Div.form.Div00.form.in_cb_00.addEventHandler("onitemchanged",this.Div_in_cb_00_onitemchanged,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_schnm.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.btn_return.addEventHandler("onclick",this.btn_return_onclick,this);
            this.Div.form.gd_main.addEventHandler("onheadclick",this.Div_gd_main_onheadclick,this);
            this.Div.form.btn_appro.addEventHandler("onclick",this.btn_appro_onclick,this);
            this.Div.form.btn_returndown.addEventHandler("onclick",this.btn_returndown_onclick,this);
            this.Div.form.btn_returnup.addEventHandler("onclick",this.btn_returnup_onclick,this);
        };

        this.loadIncludeScript("ad12m00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
