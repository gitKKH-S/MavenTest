(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ag09m01");
            this.set_titletext("New Form");
            this.set_cssclass("frameCont");
            this.set_border("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,1220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSurvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVINFONM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchool", this);
            obj._setContents("<ColumnInfo><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"CHGPSNYN\" type=\"STRING\" size=\"256\"/><Column id=\"EVDDOCKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHORGNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobcode", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"32\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"32\"/><Column id=\"USEYN\" type=\"STRING\" size=\"32\"/><Column id=\"MODIFYYN\" type=\"STRING\" size=\"32\"/><Column id=\"ORDERSEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"32\"/><Column id=\"DIVISION\" type=\"STRING\" size=\"32\"/><Column id=\"EVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDncd", this);
            obj._setContents("<ColumnInfo><Column id=\"DNCD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CDNM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CDNM\">예</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CDNM\">아니요</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobGroupCd", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGROUPID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPage", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvdoc", this);
            obj._setContents("<ColumnInfo><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JOBTYPECD\">27</Col><Col id=\"JOBTYPENM\">취업자 (건보가입취업자)</Col><Col id=\"FILEFORMNM\">7</Col></Row><Row><Col id=\"JOBTYPECD\">28</Col><Col id=\"JOBTYPENM\">교내취업자</Col><Col id=\"FILEFORMNM\">1</Col></Row><Row><Col id=\"JOBTYPECD\">46</Col><Col id=\"JOBTYPENM\">취업자(1인창(사)업자)</Col><Col id=\"FILEFORMNM\">4-1</Col></Row><Row><Col id=\"JOBTYPECD\">48</Col><Col id=\"JOBTYPENM\">취업자(농림어업종사자)</Col><Col id=\"FILEFORMNM\">3</Col></Row><Row><Col id=\"JOBTYPECD\">41</Col><Col id=\"JOBTYPENM\">공연</Col><Col id=\"FILEFORMNM\">4-1</Col></Row><Row><Col id=\"JOBTYPECD\">42</Col><Col id=\"JOBTYPENM\">전시</Col><Col id=\"FILEFORMNM\">4-2</Col></Row><Row><Col id=\"JOBTYPECD\">43</Col><Col id=\"JOBTYPENM\">출판 및 출반</Col><Col id=\"FILEFORMNM\">4-3</Col></Row><Row><Col id=\"JOBTYPECD\">44</Col><Col id=\"JOBTYPENM\">영상 제작물</Col><Col id=\"FILEFORMNM\">4-4</Col></Row><Row><Col id=\"JOBTYPECD\">45</Col><Col id=\"JOBTYPENM\">저작권을 통한 수익 창출</Col><Col id=\"FILEFORMNM\">4-5</Col></Row><Row><Col id=\"JOBTYPECD\">51</Col><Col id=\"JOBTYPENM\">취업자(해외취업자)</Col><Col id=\"FILEFORMNM\">2</Col></Row><Row><Col id=\"JOBTYPECD\">6</Col><Col id=\"JOBTYPENM\">입대자</Col><Col id=\"FILEFORMNM\">5</Col></Row><Row><Col id=\"JOBTYPECD\">61</Col><Col id=\"JOBTYPENM\">여자군인 중 임관 전 훈련생</Col><Col id=\"FILEFORMNM\">6</Col></Row><Row><Col id=\"JOBTYPECD\">62</Col><Col id=\"JOBTYPENM\">항공종사자전문교육기관 교육대상자</Col><Col id=\"FILEFORMNM\">6</Col></Row><Row><Col id=\"JOBTYPECD\">64</Col><Col id=\"JOBTYPENM\">경찰공무원 채용후보자 중 훈련생</Col><Col id=\"FILEFORMNM\">6</Col></Row><Row><Col id=\"JOBTYPECD\">65</Col><Col id=\"JOBTYPENM\">소방공무원 채용후보자 중 훈련생</Col><Col id=\"FILEFORMNM\">6</Col></Row><Row><Col id=\"JOBTYPECD\">99</Col><Col id=\"JOBTYPENM\">미상</Col><Col id=\"FILEFORMNM\">8</Col></Row><Row><Col id=\"JOBTYPECD\">30</Col><Col id=\"JOBTYPENM\">기타</Col><Col id=\"FILEFORMNM\">8</Col></Row><Row><Col id=\"JOBTYPECD\">0</Col><Col id=\"JOBTYPENM\">제출공문</Col><Col id=\"FILEFORMNM\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJobFileNm", this);
            obj._setContents("<ColumnInfo><Column id=\"FILEFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileId", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_MAP_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_MAP_TOT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_NULL_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"NACODENM\" type=\"STRING\" size=\"32\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"32\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"FORGCOMNM\" type=\"STRING\" size=\"256\"/><Column id=\"HLTHINSSCBYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORM\" type=\"STRING\" size=\"256\"/><Column id=\"COLCD\" type=\"STRING\" size=\"32\"/><Column id=\"SEXCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"32\"/><Column id=\"EXCHANGEYN\" type=\"STRING\" size=\"32\"/><Column id=\"SCHWORKFORMNM\" type=\"STRING\" size=\"256\"/><Column id=\"GOSCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"DETAILDEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GOORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"GOFORGSCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SEXNM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISAYN\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEAVISATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURVKINDCD\" type=\"STRING\" size=\"32\"/><Column id=\"DEPTNM\" type=\"STRING\" size=\"32\"/><Column id=\"COLNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATNM\" type=\"STRING\" size=\"256\"/><Column id=\"DNCD\" type=\"STRING\" size=\"32\"/><Column id=\"ALDYEMPLYN\" type=\"STRING\" size=\"256\"/><Column id=\"UNIQUEKEY\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSETELNO\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"32\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"32\"/><Column id=\"STUDENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIGRADECD\" type=\"STRING\" size=\"256\"/><Column id=\"SCHCD\" type=\"STRING\" size=\"32\"/><Column id=\"SCHKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"DNNM\" type=\"STRING\" size=\"32\"/><Column id=\"SCHSTATCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILENO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NACODE\" type=\"STRING\" size=\"32\"/><Column id=\"SAMEUNIVYN\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD_BF\" type=\"STRING\" size=\"32\"/><Column id=\"OVERSEAWORKTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPECD\" type=\"STRING\" size=\"32\"/><Column id=\"ENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"32\"/><Column id=\"JOBTYPEGROUPCD\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPEGROUPNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTNM\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPL\" type=\"STRING\" size=\"256\"/><Column id=\"ARTPO\" type=\"STRING\" size=\"256\"/><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"ISEVDDOCYN\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGENO\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENM\" type=\"STRING\" size=\"256\"/><Column id=\"RNUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLogInSch", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORGNM\" type=\"STRING\" size=\"256\"/><Column id=\"SCHNM\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSTRTDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVENDDT\" type=\"STRING\" size=\"256\"/><Column id=\"SURVSEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK_SURVSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_SURVKINDCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div","0","0","1260","1217",null,null,null,null,null,null,this);
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

            obj = new Static("Static00","0","0","30","1217",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("1");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00_00","1230","0","30","1217",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("2");
            obj.set_background("#fd9da0");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_search","30","197","1200","160",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #a5a5a5");
            obj.set_background("#ffffff");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("divFormR");
            this.Div.addChild(obj.name, obj);

            obj = new Static("Static00","30","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("0");
            obj.set_text("담당자");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01","30","60","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("7");
            obj.set_text("학과");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Button("btn_search","1078","60","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("6");
            obj.set_text("검색");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","362","10","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("13");
            obj.set_text("취업구분");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_02","Static00_02_00:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsJobGroupCd");
            obj.set_codecolumn("JOBTYPEGROUPCD");
            obj.set_datacolumn("JOBTYPEGROUPNM");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02","692","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("8");
            obj.set_text("입력현황");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_00","Static00:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsUser");
            obj.set_codecolumn("USERID");
            obj.set_datacolumn("USERNM");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_05","Static00_01_01:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsDept");
            obj.set_datacolumn("DEPTNM");
            obj.set_codecolumn("DEPTCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("본교");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","362","110","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("9");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("개인식별키");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_00","Static00_01_00:10","110","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("3");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","30","110","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_01","Static00_01_00_00:10","110","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("4");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","692","60","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("11");
            obj.set_text("학번");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Edit("in_edit_02","Static00_01_00_00_00:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("5");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_01","Static00_02:10","10","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var Div_form_sub_search_form_in_cb_01_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_01_innerdataset", obj);
            Div_form_sub_search_form_in_cb_01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">등록</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">미등록</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_01_innerdataset);
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","362","60","70","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("15");
            obj.set_text("주야");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_06","Static00_02_00_01:10","60","210","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsDncd");
            obj.set_datacolumn("CDNM");
            obj.set_codecolumn("DNCD");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_text("2021");
            obj.set_value("");
            obj.set_index("-1");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Static("Static00_01_01_00_00_00","1006","10","62","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("17");
            obj.set_text("항목표시");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Combo("in_cb_viewCnt","Static00_01_01_00_00_00:10","10","100","30",null,null,null,null,null,null,this.Div.form.sub_search.form);
            obj.set_taborder("18");
            obj.set_accessibilitylabel("조사회차");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            var Div_form_sub_search_form_in_cb_viewCnt_innerdataset = new nexacro.NormalDataset("Div_form_sub_search_form_in_cb_viewCnt_innerdataset", obj);
            Div_form_sub_search_form_in_cb_viewCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"datacolumn\">100</Col><Col id=\"codecolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(Div_form_sub_search_form_in_cb_viewCnt_innerdataset);
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("0");
            this.Div.form.sub_search.addChild(obj.name, obj);

            obj = new Div("div_file","30","sub_search:20","1200","260",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("9");
            obj.set_cssclass("divFormR");
            obj.set_text("");
            obj.set_url("CM::DataTransSurv.xfdl");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("errorMsg","40","div_file:20","1188","20",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("15");
            obj.set_text("◎ 개별등록시 파일명 : 개인식별키    - 예시 : 900010001123456.PDF");
            obj.set_cssclass("state_result");
            obj.set_font("normal 15px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            obj.set_visible("true");
            obj.set_color("#070707");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_00","30","errorMsg:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("3");
            obj.set_text("제출");
            obj.set_cssclass("btn_sty08");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_00","30","btn_00:10","1198","405",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("4");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"114\"/><Column size=\"77\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"171\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"단과대학\"/><Cell col=\"3\" text=\"학과명\"/><Cell col=\"4\" text=\"학과소분류명\"/><Cell col=\"5\" text=\"주야구분\"/><Cell col=\"6\" text=\"취업구분\"/><Cell col=\"7\" text=\"학번\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"성별\"/><Cell col=\"10\" text=\"개인식별키\"/><Cell col=\"11\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:_chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RNUM\"/><Cell col=\"2\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"3\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"4\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"5\" text=\"bind:DNNM\"/><Cell col=\"6\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"7\" text=\"bind:STUDENTNO\"/><Cell col=\"8\" text=\"bind:NAME\"/><Cell col=\"9\" text=\"bind:SEXNM\"/><Cell col=\"10\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"11\" text=\"bind:REAL_FILE_NAME\" tooltiptext=\"bind:REAL_FILE_NAME\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_01","970","errorMsg:20","140","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("5");
            obj.set_text("증빙자료미존재");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("false");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Div("sub_research03","30","82","1200","95",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sub_research03");
            this.Div.addChild(obj.name, obj);

            obj = new Static("reser_st03","30","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("0");
            obj.set_text("조사 기준");
            obj.set_cssclass("reser_st03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_st_result","reser_st03:10","10","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("1");
            obj.set_text("20.12.31");
            obj.set_cssclass("reser_st_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj03","290","10","113","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("2");
            obj.set_text("조사 대상");
            obj.set_cssclass("reser_obj03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date_result","reser_obj03:10","10","584","29",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("3");
            obj.set_text("20.2월, 19.08월 졸업자");
            obj.set_cssclass("reser_date_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_date03","30","45","120","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("4");
            obj.set_text("조사 기간");
            obj.set_cssclass("reser_date03");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Static("reser_obj_result","reser_date03:10","45","606","30",null,null,null,null,null,null,this.Div.form.sub_research03.form);
            obj.set_taborder("5");
            obj.set_text("2020 7.13 ~ 2020.7.23. (2021년 고등교육기관 졸업생수 조사)");
            obj.set_cssclass("reser_obj_result");
            obj.set_font("16px/normal \"SpoqaHanSans-Regular\"");
            this.Div.form.sub_research03.addChild(obj.name, obj);

            obj = new Div("stepArea01_00","30","20","1200","42",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("10");
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

            obj = new Static("ag05m00","532","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
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
            obj.set_taborder("6");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","387","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","520","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","653","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","121","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag08m00","798","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("11");
            obj.set_text("결과제출");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","786","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("ico_step");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag09m01","931","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("13");
            obj.set_text("증빙제출");
            obj.set_cssclass("step01 on03");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("ag06m00","1064","0","133","40",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("15");
            obj.set_text("결과조회");
            obj.set_cssclass("step01");
            obj.set_cursor("pointer");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00","919","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00_00_00","1052","8","25","25",null,null,null,null,null,null,this.Div.form.stepArea01_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("ico_step on03");
            this.Div.form.stepArea01_00.addChild(obj.name, obj);

            obj = new Div("pagingWrap","30","1138","1200","60",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("8");
            obj.set_text("");
            this.Div.addChild(obj.name, obj);

            obj = new Div("div_pagging","380","11","480","40",null,null,null,null,null,null,this.Div.form.pagingWrap.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("CM::CmPagging.xfdl");
            this.Div.form.pagingWrap.addChild(obj.name, obj);

            obj = new Button("btn_02","810","errorMsg:20","140","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("11");
            obj.set_text("증빙자료존재");
            obj.set_cssclass("btn_sty08");
            obj.set_visible("false");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Static("label_fileCnt","150","errorMsg:20","540","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_textAlign("left");
            this.Div.addChild(obj.name, obj);

            obj = new Button("btn_savefile","1130","errorMsg:20","100","30",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("13");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_sty04");
            obj.set_font("normal 14px/normal \"SpoqaHanSans-Regular\",\"맑은 고딕\",\"sans-serif\"");
            this.Div.addChild(obj.name, obj);

            obj = new Grid("gd_01","592","gd_00:-270","628","210",null,null,null,null,null,null,this.Div.form);
            obj.set_taborder("14");
            obj.set_cssclass("grid_pdShort,grid_sty04");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsExcel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"114\"/><Column size=\"77\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"77\"/><Column size=\"171\"/></Columns><Rows><Row size=\"45\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"단과대학\"/><Cell col=\"2\" text=\"학과명\"/><Cell col=\"3\" text=\"학과소분류명\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"취업구분\"/><Cell col=\"6\" text=\"학번\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"성별\"/><Cell col=\"9\" text=\"개인식별키\"/><Cell col=\"10\" text=\"증빙자료&#13;&#10;존재여부\"/><Cell col=\"11\" text=\"파일명\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\"/><Cell col=\"1\" text=\"bind:COLNM\" tooltiptext=\"bind:COLNM\"/><Cell col=\"2\" text=\"bind:DEPTNM\" tooltiptext=\"bind:DEPTNM\"/><Cell col=\"3\" text=\"bind:DETAILDEPTNM\" tooltiptext=\"bind:DETAILDEPTNM\"/><Cell col=\"4\" text=\"bind:DNNM\"/><Cell col=\"5\" text=\"bind:JOBTYPENM\" displaytype=\"normal\" combodataset=\"dsJobcode\" combodatacol=\"JOBTYPENM\" combocodecol=\"JOBTYPECD\" tooltiptext=\"bind:JOBTYPENM\"/><Cell col=\"6\" text=\"bind:STUDENTNO\"/><Cell col=\"7\" text=\"bind:NAME\"/><Cell col=\"8\" text=\"bind:SEXNM\"/><Cell col=\"9\" text=\"bind:UNIQUEKEY\" tooltiptext=\"bind:UNIQUEKEY\"/><Cell col=\"10\" text=\"bind:ISEVDDOCYN\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CDNM\" combocodecol=\"CD\"/><Cell col=\"11\" text=\"bind:REAL_FILE_NAME\" tooltiptext=\"bind:REAL_FILE_NAME\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.Div.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,1220,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::DataTransSurv.xfdl");
            this._addPreloadList("fdl","CM::CmPagging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("ag09m01.xfdl","CM::common.xjs");
        this.addIncludeScript("ag09m01.xfdl","CM::utl_script.xjs");
        this.registerScript("ag09m01.xfdl", function() {
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

        this.fv_USERID = "";
        this.fv_USERGRPTYPE = "";
        this.fv_CHANGEYN = "";
        //페이징
        this.pageRowCnt = 20;
        this.totalRowCnt = 0;
        this.pageFirst = true;
        this.buttonStatus = false;
        this.fv_MENUNM = "졸업후상황>증빙제출(개별)";

        //글로벌 데이터셋을 사용하기 위한 objApp
        var objApp = nexacro.getApplication();

        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){
        		//trace(errCD);
        		this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, serviceID + " : Fail", "");  //접속기록(실패시)
        		alert(errMSG);
        	}else{

        		if(serviceID == "selectSurvSchool"){
        			var idx = 0;
        			if(this.dsLogInSch.rowcount > 0){
        				if(this.fv_SCHCD!= null && this.fv_SCHCD != ""){
        					idx = this.dsLogInSch.findRowExpr("SCHCD == '"+ this.fv_SCHCD +"' && ORGCD == '"+ this.fv_ORGCD +"'",0);
        				}else{
        					idx = this.dsLogInSch.findRowExpr("SURVSEQ > '000000'",0);
        				}
        				this.lfn_divSurvSet(this.dsLogInSch, idx);
        			}
        			this.lfn_selectSurvInfo();
        		}

        		if(serviceID == "selectSurvInfo"){
         			var idx = 0;
        			if(this.dsSchool.findRowExpr("SCHCD == '"+ this.fv_SCHCD +"' && ORGCD == '"+ this.fv_ORGCD +"'",0) > -1) {
        				idx = this.dsSchool.findRowExpr("SCHCD == '"+ this.fv_SCHCD +"' && ORGCD == '"+ this.fv_ORGCD +"'",0);
        			}
        		}

        		if(serviceID == "listQuestionNullChk"){

        			var nCnt = this.dsNCnt.getColumn(0,"FILE_NULL_CNT");
        			//alert("nCnt="+nCnt);
        			if(nCnt>0){
        				alert("제출이 완료되었습니다.");

        				this.buttonStatus = true;
        				this.pageRowCnt = this.Div.form.sub_search.form.in_cb_viewCnt.value;
        				this.pageFirst = true;
        				this.lfn_listPage(1);
        			}else{
        				alert("제출이 완료되었습니다.\r\n설문에 응답해주세요.");
        				window.open('/swiss/index.html?linkType=HP_QUESTION','_blank');
        			}
        		}

        		if(serviceID == "listEvdocInfoOne"){
        			if(this.buttonStatus){
        				if(this.dsMain.rowcount == 0) alert("조회된 자료가 없습니다.");
        				this.buttonStatus = false;
        			}
        			this.dsMain.set_updatecontrol( false );
        			this.dsMain.addColumn("_chk","string",1);
        			this.dsMain.set_updatecontrol( true );
        			//this.Div.form.label_fileCnt.set_text(this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+" 건");
        			this.Div.form.label_fileCnt.set_text("제출인원 : "+this.dsFCnt.getColumn(0,"FILE_MAP_CNT")+"명 / 제출대상 : "+this.dsTCnt.getColumn(0,"FILE_MAP_TOT")+"명");
        			this.totalRowCnt = this.dsPage.getColumn(0, "TOTALPAGECNT");
        			if(this.pageFirst)this.paggingInit();
        		}
        		if(serviceID == "listEvdocInfoOneCode"){
        			////trace(this.dsDetailDept.saveXML());
        			////trace(this.dsDetailDept.saveXML());

        			var v_SCHNM="";
        			var v_ORGNM="";
        			for(var i=0; i < this.dsSchool.rowcount; i++){
        				if( this.fv_SCHCD  == this.dsSchool.getColumn(i,"SCHCD") && this.fv_ORGCD == this.dsSchool.getColumn(i,"ORGCD")){
        					v_SCHNM = this.dsSchool.getColumn(i,"SCHNM");
        					v_ORGNM = this.dsSchool.getColumn(i,"ORGNM");
        				}
        			}
        			//trace(this.fv_SURVSEQ+"_"+v_SCHCD+"_"+v_SCHNM+"_"+v_ORGNM);
        			this.dsUser.set_keystring("S:USERNM+");
        			this.dsUser.insertRow(0);
        			this.dsUser.setColumn(0,"USERID","MANAGER");
        			this.dsUser.setColumn(0,"USERNM","전체");
        			this.dsUser.deleteRow(this.dsUser.findRowExpr("USERNM=='취업담당자'",0));

        			this.dsJobGroupCd.insertRow(0);
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPCD","");
        			this.dsJobGroupCd.setColumn(0,"JOBTYPEGROUPNM","전체");
        			//this.dsJobGroupCd.set_filterstr("JOBTYPEGROUPCD !='13' && JOBTYPEGROUPCD !='14' && JOBTYPEGROUPCD !='8' && JOBTYPEGROUPCD !='9' ");
        			this.dsJobGroupCd.set_filterstr("JOBTYPEGROUPCD !='1' && JOBTYPEGROUPCD !='5' && JOBTYPEGROUPCD !='10' && JOBTYPEGROUPCD !='11' && JOBTYPEGROUPCD !='13' && JOBTYPEGROUPCD !='14' && JOBTYPEGROUPCD !='8' && JOBTYPEGROUPCD !='9' ");

        			this.dsDept.set_keystring("S:DEPTNM+");
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0,"DEPTCD","");
        			this.dsDept.setColumn(0,"DEPTNM","전체");
        			this.dsDncd.insertRow(0);
        			this.dsDncd.setColumn(0,"DNCD","");
        			this.dsDncd.setColumn(0,"CDNM","전체");
        			this.Div.form.sub_search.form.in_cb_01.set_index(0);
        			this.Div.form.sub_search.form.in_cb_00.set_index(0);
        			this.Div.form.div_file.form.varSetting(this.dsFileId.getColumn(0,"ATT_IDT_NO"), true);
        			this.dsSchool.rowposition = 0;

        		}
        		if(serviceID == "insertAgEvdocOne"){
        			alert("첨부된 증빙자료가 해당 학생에게 적용되었습니다.");
        			if(this.dsFileId.getColumn(0,"ATT_IDT_NO"))this.Div.form.div_file.form.varSetting(this.dsFileId.getColumn(0,"ATT_IDT_NO"), true);
        			this.pageFirst = true;
        			this.lfn_listPage(1);
        		}
        		if(serviceID == "updateIsEvddocYn1"){
        			alert("증빙자료 미존재 등록이 완료되었습니다.");
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				if(this.dsMain.getColumn(i,"_chk") =="1"){
        					this.dsMain.setColumn(i,"ISEVDDOCYN", "2");
        				}
        			}
        		}
        		if(serviceID == "updateIsEvddocYn2"){
        			alert("증빙자료 존재 등록이 완료되었습니다.");
        			for(var i=0; i < this.dsMain.rowcount; i++){
        				if(this.dsMain.getColumn(i,"_chk") =="1"){
        					this.dsMain.setColumn(i,"ISEVDDOCYN", "1");
        				}
        			}
        		}
        		if(serviceID == "listEvddocNullChk"){
        			if(this.dsNCnt.getColumn(0,"FILE_NULL_CNT") > 0){
        				if(!this.confirm("증빙자료 미제출 "+this.dsNCnt.getColumn(0,"FILE_NULL_CNT")+"명 입니다. 이대로 제출하시겠습니까?")){
        					return;
        				}
        			}

        			//alert(this.dsSearch.saveXML());

        			//alert("제출 되었습니다.");
        			this.gfnTransaction("evddocSend",
        								"/swiss/ag/evdoc/evddocSend.do",
        								"dsSearch=dsSave",
        								"",
        								"",
        								"fnCallback",
        								false);

        		}

        		if(serviceID == "listQuestionNullChk"){
        			var nCnt = this.dsNCnt.getColumn(0,"FILE_NULL_CNT");
        			//alert("nCnt="+nCnt);
        			if(nCnt>0){
        				alert("제출이 완료되었습니다.");

        				this.buttonStatus = true;
        				this.pageRowCnt = this.Div.form.sub_search.form.in_cb_viewCnt.value;
        				this.pageFirst = true;
        				this.lfn_listPage(1);
        			}else{
        				alert("설문에 먼저 응답하셔야 합니다.");
        				window.open('/swiss/index.html?linkType=HP_QUESTION','_blank');
        			}
        		}

        		if(serviceID == "evddocSend"){
        			this.QuestionNullChk();
        		}

        		if(serviceID == "updateIsEvddocYnAll"){
        			alert("증빙자료 미존재 등록이 일괄처리되었습니다.");
        			this.pageFirst = true;
        			this.lfn_listPage(1);
        		}

        		if(serviceID == "listExcel"){
        			if(this.dsExcel.rowcount==0){
        				alert("파일저장할 내역이 없습니다");
        				return;
        			}
        			this.utlf_excelDownload("졸업후상황(증빙제출) 정보",this.Div.form.gd_01,this.Export00_onsuccess);
        		}
         	}
        }



        /*학교별 조사기간이 설정되어 있는지 확인 2021-02-18 yyz*/
        this.lfn_selectSurvSchool = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        //	trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvSchool",
        						"/swiss/cm/selectSurvSchool.do",
        						"dsSearch=dsSearch",
        						"dsLogInSch=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_selectSurvInfo = function(){
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("selectSurvInfo",
        						"/swiss/cm/listSchool.do",
        						"dsSearch=dsSearch",
        						"dsSchool=dsSchool",
        						"",
        						"fnCallback",
        						false);
        };

        this.ag09m01_onload = function(obj,e)
        {
        	var idx = objApp.gds_login_info.findRowExpr("SURVKINDCD=='AG'",0);
        	this.fv_USERID = objApp.gds_login_info.getColumn(idx, "USERID") ;
        	this.fv_SURVKINDCD = objApp.gds_login_info.getColumn(idx, "SURVKINDCD");
        	this.fv_USERGRPTYPE = objApp.gds_login_info.getColumn(idx, "USERGRPTYPE");
        	this.fv_CHANGEYN = objApp.gds_login_info.getColumn(idx, "CHANGEYN");

        	//this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	//this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	//this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	this.fv_SURVPROSTATUSCD = objApp.gds_param.getColumn(0, "SURVPROSTATUSCD");
        	this.fv_SCHCD = objApp.gds_param.getColumn(0, "SCHCD");
        	this.fv_ORGCD = objApp.gds_param.getColumn(0, "ORGCD");

        	//alert(this.fv_SCHCD);

        	this.lfn_selectSurvSchool();
        	this.lfn_divSurvSet()

        	this.Div.form.sub_search.form.in_cb_00.set_value("");
        	this.Div.form.sub_search.form.in_cb_01.set_value("");
        	this.Div.form.sub_search.form.in_cb_02.set_value("");
        	this.Div.form.sub_search.form.in_cb_05.set_value("");
        	this.Div.form.sub_search.form.in_cb_06.set_value("");
        	this.dsMain.clearData();
        	this.lfn_selectSearchCdList();

        	var getCnt = 0;
        	var chkEvddocd = 0;
        	//alert("bf chk");
        	//alert("maxcnt=["+this.dsSchool.rowcount+"]");
        	for(var chkCnt=0;chkCnt<this.dsSchool.rowcount;chkCnt++){

        		if( (this.fv_SCHCD == this.dsSchool.getColumn(chkCnt,"SCHCD")) && (this.fv_ORGCD == this.dsSchool.getColumn(chkCnt,"ORGCD")) ){
        			//alert("chkMatch = ["+chkCnt+"], schcd=["+this.dsSchool.getColumn(chkCnt,"SCHCD")+"], orgcd=["+this.dsSchool.getColumn(chkCnt,"ORGCD")+"], evddoc=["+chkEvddoc+"]");
        			var chkEvddoc = this.dsSchool.getColumn(chkCnt,"EVDDOCKIND");
        		}
        		//alert("chkMatch = ["+chkCnt+"], schcd=["+this.dsSchool.getColumn(chkCnt,"SCHCD")+"], orgcd=["+this.dsSchool.getColumn(chkCnt,"ORGCD")+"], evddoc=["+chkEvddoc+"]");
        	}

        	//if("1"==this.dsSchool.getColumn(0,"EVDDOCKIND")){
        	if("1"==chkEvddoc){
        		alert("증빙자료 일괄등록 대상입니다.\n일괄등록 화면으로 변경합니다.");
        		this.fn_goPage("AG::ag09m00.xfdl");
        		this.lfn_setEnable(false,this.fv_CHANGEYN);
        	}else if(!this.lfn_agAuthorityChk(this.dsSchool,0)){
        		this.lfn_setEnable(false,this.fv_CHANGEYN);
        	}else{
        		this.lfn_setEnable(true,this.fv_CHANGEYN);
        	}
        	this.utlf_enableBtnByCall();
        	this.pageRowCnt = this.Div.form.sub_search.form.in_cb_viewCnt.value;
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.Div_sub_search_btn_search_onclick = function(obj,e)
        {
        	this.buttonStatus = true;
        	this.pageRowCnt = this.Div.form.sub_search.form.in_cb_viewCnt.value;
        	this.pageFirst = true;
        	this.lfn_listPage(1);
        };

        this.lfn_listPage = function(sPage)
        {

        	var start = (sPage - 1) * this.pageRowCnt + 1;
        	var end = sPage * this.pageRowCnt;
        	var strParam = "";
        	strParam += "START=" + start + "ª";
        	strParam += "END="   + end   + "ª";

        	strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		                            + "ª";
        	strParam += "SURVKINDCD="	    + this.fv_SURVKINDCD 	                            + "ª";
        	strParam += "SCHCD="		    + this.fv_SCHCD 		                            + "ª";
        	strParam += "ORGCD="		    + this.fv_ORGCD	 		                            + "ª";

        	strParam += "USERID="		    + this.Div.form.sub_search.form.in_cb_00.value 		+ "ª";
        	strParam += "REGYN="		    + this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";

        	strParam += "DNCD="			    + this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			    + this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	    + this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	    + this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        	strParam += "PAGETYPE=1"+"ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "검색", strParam);  //접속기록
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listEvdocInfoOne",
        						"/swiss/ag/evdoc/listEvdocInfoOne.do",
        						"dsSearch=dsSearch",
        						"dsMain=dsResult dsPage=dsPage dsFCnt=dsFCnt dsTCnt=dsTCnt",
        						"",
        						"fnCallback",
        						false);
        };
        // 페이지 초기화 함수
        this.paggingInit = function(){
        	this.Div.form.pagingWrap.form.div_pagging.form.initPages(this.totalRowCnt, this.pageRowCnt); // 전체DATA CNT, 페이지출력수
        	this.Div.form.pagingWrap.form.div_pagging.form.setPage(1);
        }

        // 페이징 완료후 처리
        this.setPageAfter = function (nPage){
        	if(!this.pageFirst)this.lfn_listPage(nPage);
        	this.pageFirst = false;
        }

        this.lfn_selectSearchCdList = function()
        {
        	var strParam = "";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "USERGRPTYPE="	+ this.fv_USERGRPTYPE 	+ "ª";
        	strParam += "REGTYPE="		+ '2' 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listEvdocInfoOneCode",
        						"/swiss/ag/evdoc/listEvdocInfoOneCode.do",
        						"dsSearch=dsSearch",
        						"dsFileId=dsFileId dsUser=dsUser dsJobcode=dsJobcode dsDept=dsDept dsDncd=dsDncd dsJobGroupCd=dsJobGroupCd",
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

        //증빙자료 미존재처리
        this.Div_btn_01_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);
        			this.dsSave.setColumn(newRow,"ISEVDDOCYN", "2");
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("처리할 데이터를 선택해 주세요.");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "증빙자료미존재", "");  //접속기록
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("updateIsEvddocYn1",
        						"/swiss/ag/evdoc/updateIsEvddocYn.do",
        						"dsSearch=dsSave:A",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.lfn_agAuthorityChk = function(ds,row){
        	var ret = true;

        	var v_SCH_SURVSTRTDT  = ds.getColumn(row,"SURVSTRTDT");
        	var v_SCH_SURVENDDT   = ds.getColumn(row,"SURVENDDT");
        	var v_TO_DATE         = ds.getColumn(row,"TO_DATE");

        	if("8" != this.fv_SURVPROSTATUSCD && "10" != this.fv_SURVPROSTATUSCD && "11" != this.fv_SURVPROSTATUSCD && "13" != this.fv_SURVPROSTATUSCD){
        		this.alert("취업-데이터를 제출한 후에만 사용가능합니다.");
        		ret= false;
        	}
        	if(v_SCH_SURVSTRTDT > v_TO_DATE || v_SCH_SURVENDDT < v_TO_DATE){
        		alert("조사기간이 아닙니다.");
        		ret = false;
        	}
        	return ret;
        }


        this.lfn_setEnable = function(str,str2){
        	//alert("str2=["+str2+"]");

        	//this.utlf_enableBtn(this.Div,str);
         	this.Div.form.div_file.set_enable(str);
         	//this.Div.form.sub_search.form.btn_search.set_enable(str);

        	if(str2 == "Y"){
        		this.Div.form.btn_00.set_enable(false);
        	}else{
        		this.Div.form.btn_00.set_enable(str);
        	}

         	this.Div.form.btn_01.set_enable(str);
         	this.Div.form.btn_02.set_enable(str);
        }

        this.searchEnter = function(obj,e)
        {
        	if(e.keycode == nexacro.Event.KEY_ENTER){
        		this.pageFirst = true;
        		this.lfn_listPage(1);
        	}
        };

        //파일적용
        this.evddocFileUploadeEnd = function(attIdtNo)
        {
        	//alert('완료'+attIdtNo);
        	var strParam = "";
        	var v_SCHNM="";
        	var v_ORGNM="";
        	strParam += "SURVSEQ="		+ this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	+ this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		+ this.fv_SCHCD			+ "ª";
        	strParam += "ORGCD="		+ this.fv_ORGCD	 		+ "ª";
        	strParam += "USERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "WORKERID="		+ this.fv_USERID 		+ "ª";
        	strParam += "ATT_IDT_NO="	+ attIdtNo 				+ "ª";
        	for(var i=0; i < this.dsSchool.rowcount; i++){
        		if( this.fv_SCHCD == this.dsSchool.getColumn(i,"SCHCD") && this.fv_ORGCD == this.dsSchool.getColumn(i,"ORGCD")){
        			v_SCHNM = this.dsSchool.getColumn(i,"SCHNM");
        			v_ORGNM = this.dsSchool.getColumn(i,"ORGNM");
        		}
        	}

        	dsParamSetArrowBlank(this.dsSearch, strParam);
        	//trace(this.dsSearch.saveXML());
        	this.gfnTransaction("insertAgEvdocOne",
        						"/swiss/ag/evdoc/insertAgEvdocOne.do",
        						"dsSearch=dsSearch",
        						"",
        						"",
        						"fnCallback",
        						false);
        }
        //제출
        this.evddocNullChk = function(){
        	this.dsSave.clearData();
        	var statusChk=true;
        	var v_SURVPROSTATUSCD = "11";//
        	var bf_SURVPROSTATUSCD = this.dsSchool.getColumn(0,"SURVPROSTATUSCD");
        	if(bf_SURVPROSTATUSCD=="12"){
        		alert("제출 승인되어 처리할 수 없습니다.");
        		return;
        	}

        	var newRow = this.dsSave.addRow();
        	this.dsSave.addColumn("USERGRPTYPE","string");
        	this.dsSave.setColumn(newRow,"USERGRPTYPE", this.fv_USERGRPTYPE);
        	this.dsSave.setColumn(newRow,"SURVSEQ",this.fv_SURVSEQ);
        	this.dsSave.setColumn(newRow,"SURVKINDCD",this.fv_SURVKINDCD);
        	this.dsSave.setColumn(newRow,"SCHCD",this.fv_SCHCD);
        	this.dsSave.setColumn(newRow,"ORGCD",this.fv_ORGCD);

        	this.dsSave.addColumn("STATUSCD","string");
        	this.dsSave.setColumn(newRow,"STATUSCD",v_SURVPROSTATUSCD);
        	this.dsSave.addColumn("WORKERID","string");
        	this.dsSave.setColumn(newRow,"WORKERID",this.fv_USERID);
        	this.dsSave.addColumn("USERID","string");
        	this.dsSave.setColumn(newRow,"USERID",this.fv_USERID);

        	this.dsSave.addColumn("PAGETYPE","string");
        	this.dsSave.setColumn(newRow,"PAGETYPE","1");

        	if(!this.confirm("제출 하시겠습니까?")){
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "제출", "");  //접속기록
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("listEvddocNullChk",
        						"/swiss/ag/evdoc/listEvddocNullChk.do",
        						"dsSearch=dsSave",
        						"dsNCnt=dsNCnt",
        						"",
        						"fnCallback",
        						false);
        }

        this.Div_btn_00_onclick = function(obj,e)
        {
        	this.evddocNullChk();
        };

        this.Div_btn_02_onclick = function(obj,e)
        {
        	this.dsSave.clearData();
        	for(var i=0; i < this.dsMain.rowcount; i++){
        		if(this.dsMain.getColumn(i,"_chk") =="1"){
        			var newRow = this.dsSave.addRow();
        			this.dsSave.copyRow(newRow, this.dsMain, i);
        			this.dsSave.setColumn(newRow,"WORKERID", this.fv_USERID);
        			this.dsSave.setColumn(newRow,"ISEVDDOCYN", "1");
        		}
        	}
        	if(this.dsSave.rowcount == 0){
        		this.alert("처리할 데이터를 선택해 주세요.");
        		return;
        	}

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "증빙자료존재", "");  //접속기록
        	//trace(this.dsSave.saveXML());
        	this.gfnTransaction("updateIsEvddocYn2",
        						"/swiss/ag/evdoc/updateIsEvddocYn.do",
        						"dsSearch=dsSave:A",
        						"",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_gd_00_oncellclick = function(obj,e)
        {
        	if(e.col =='11') {
        		if(!this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME")) return;
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init("docviewer_popup"
        						  , 0
        						  , 0
        						  , 1280
        						  , 720
        						  , null
        						  , null
        						  , "CM::CMDocViewer.xfdl");
        		objChildFrame.set_showtitlebar(false);
        		objChildFrame.set_dragmovetype("all");
        		objChildFrame.set_openalign("center middle");
        		objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")
        		trace(this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME"));
        		var objParam = {param1:this.dsMain.getColumn(this.dsMain.rowposition,"SAVE_FILE_NAME")};
        		objChildFrame.showModal(this.getOwnerFrame()
        							  , objParam
        							  , this
        							  , "fn_popupCallback");
        	}
        };

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

        this.Div_btn_savefile_onclick = function(obj,e)
        {

        	var strParam = "";
        	strParam += "START=" + 0 + "ª";
        	strParam += "END=" + 999999999999 + "ª";

        	strParam += "SURVSEQ="		    + this.fv_SURVSEQ 		+ "ª";
        	strParam += "SURVKINDCD="	    + this.fv_SURVKINDCD 	+ "ª";
        	strParam += "SCHCD="		    + this.fv_SCHCD 		+ "ª";
        	strParam += "ORGCD="		    + this.fv_ORGCD		    + "ª";
        	strParam += "USERID="		    + this.Div.form.sub_search.form.in_cb_00.value 		+ "ª";
        	strParam += "REGYN="		    + this.Div.form.sub_search.form.in_cb_01.value 		+ "ª";
        	strParam += "JOBTYPEGROUPCD="	+ this.Div.form.sub_search.form.in_cb_02.value 		+ "ª";
        	strParam += "DEPTCD="		    + this.Div.form.sub_search.form.in_cb_05.value 		+ "ª";
        	strParam += "DNCD="			    + this.Div.form.sub_search.form.in_cb_06.value 		+ "ª";
        	strParam += "NAME="			    + this.Div.form.sub_search.form.in_edit_01.value 	+ "ª";
        	strParam += "UNIQUEKEY="	    + this.Div.form.sub_search.form.in_edit_00.value 	+ "ª";
        	strParam += "STUDENTNO="	    + this.Div.form.sub_search.form.in_edit_02.value 	+ "ª";

        	dsParamSetArrowBlank(this.dsSearch, strParam);

        	this.setAccessLog(this.fv_SURVSEQ, this.fv_SURVKINDCD, this.fv_MENUNM, "파일저장", strParam);  //접속기록
        	////trace(this.dsSearch.saveXML());
        	this.gfnTransaction("listExcel",
        						"/swiss/ag/evdoc/listEvdocInfoOne.do",
        						"dsSearch=dsSearch",
        						"dsExcel=dsResult",
        						"",
        						"fnCallback",
        						false);
        };

        this.Div_sub_search_Static02_onclick = function(obj,e)
        {

        };

        this.Div_sub_search_Static00_01_01_00_00_00_onclick = function(obj,e)
        {

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

        	this.Div.form.sub_research03.form.reser_st_result.set_text(this.fv_SURVSEQ.substr(0,2)+"."+this.fv_SURVSEQ.substr(2,2)+"."+this.fv_SURVSEQ.substr(4,2)) ;
        	this.Div.form.sub_research03.form.reser_date_result.set_text(this.fv_SURVOBJ) ;
        	var survinfo = this.fv_SURVSTRTDT.substr(0,4)+"."+this.fv_SURVSTRTDT.substr(4,2)+"."+this.fv_SURVSTRTDT.substr(6,2)
        					+" ~ "+this.fv_SURVENDDT.substr(0,4)+"."+this.fv_SURVENDDT.substr(4,2)+"."+this.fv_SURVENDDT.substr(6,2)
        					+" ( "+this.fv_SURVNM+" )";
        	this.Div.form.sub_research03.form.reser_obj_result.set_text(survinfo) ;

        };

        this.QuestionNullChk = function(){
        	if(this.fv_SURVTERM !=  "Y"){
        		//this.alert("선택된 학교는 조사기간이 아닙니다.");
        		//return;
        	}

        	var SURVPROSTATUSCD = this.dsSchool.getColumn(0,"SURVPROSTATUSCD");   // 상태코드

        	/*
        	if(  SURVPROSTATUSCD != "11" &&  SURVPROSTATUSCD != "12"  ){
        		this.alert("출력 가능한 상태가 아닙니다. 결과제출 이후 출력이 가능합니다.");
        		return;
        	}
        	*/

        	var newRow = this.dsChkCnt.addRow();

        	this.dsChkCnt.setColumn(newRow,"CHK_SURVSEQ",this.fv_SURVSEQ);
        	this.dsChkCnt.setColumn(newRow,"CHK_SURVKINDCD",this.fv_SURVKINDCD);
        	this.dsChkCnt.setColumn(newRow,"CHK_USERID",this.fv_USERID);

        	this.gfnTransaction("listQuestionNullChk",
        						"/swiss/gp/baserel/listQuestionNullChk.do",
        						"dsChkCnt=dsChkCnt",
        						"dsNCnt=dsNCnt",
        						"",
        						"fnCallback",
        						false);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ag09m01_onload,this);
            this.Div.form.Static01.addEventHandler("onclick",this.Div_Static01_onclick,this);
            this.Div.form.sub_search.form.btn_search.addEventHandler("onclick",this.Div_sub_search_btn_search_onclick,this);
            this.Div.form.sub_search.form.in_edit_00.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_01.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.in_edit_02.addEventHandler("onkeyup",this.searchEnter,this);
            this.Div.form.sub_search.form.Static00_01_01_00_00_00.addEventHandler("onclick",this.Div_sub_search_Static00_01_01_00_00_00_onclick,this);
            this.Div.form.sub_search.form.in_cb_viewCnt.addEventHandler("canitemchange",this.Div_div_searchArea_in_cb_schkind_canitemchange,this);
            this.Div.form.btn_00.addEventHandler("onclick",this.Div_btn_00_onclick,this);
            this.Div.form.gd_00.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
            this.Div.form.gd_00.addEventHandler("oncellclick",this.Div_gd_00_oncellclick,this);
            this.Div.form.btn_01.addEventHandler("onclick",this.Div_btn_01_onclick,this);
            this.Div.form.stepArea01_00.form.ag01m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag02m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag03m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag04m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag05m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag07m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag08m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag09m01.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.stepArea01_00.form.ag06m00.addEventHandler("onclick",this.lfn_goMenu,this);
            this.Div.form.btn_02.addEventHandler("onclick",this.Div_btn_02_onclick,this);
            this.Div.form.label_fileCnt.addEventHandler("onclick",this.Div_label_fileCnt_onclick,this);
            this.Div.form.btn_savefile.addEventHandler("onclick",this.Div_btn_savefile_onclick,this);
            this.Div.form.gd_01.addEventHandler("onheadclick",this.Div_gd_00_onheadclick,this);
        };

        this.loadIncludeScript("ag09m01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
