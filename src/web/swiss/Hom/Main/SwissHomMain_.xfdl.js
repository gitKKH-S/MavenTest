(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1146,628);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBidd", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰명\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">5</Col><Col id=\"의뢰명\">영업물품 구매의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">4</Col><Col id=\"의뢰명\">개찰용품 구매의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">3</Col><Col id=\"의뢰명\">기술검토용</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">2</Col><Col id=\"의뢰명\">소프트웨어 구매의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">1</Col><Col id=\"의뢰명\">사무용품 구매의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBuy", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">11</Col><Col id=\"제목\">소프트웨어 구매</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"번호\">10</Col><Col id=\"제목\">시스템책상 구매</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"번호\">9</Col><Col id=\"제목\">공용 사무용품 구매</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">공통 사무용품 구매</Col><Col id=\"번호\">8</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">세금계산서 기초정보 생성</Col><Col id=\"번호\">7</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">사무용품 계약 세금계산서</Col><Col id=\"번호\">6</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">문서세단기 구매</Col><Col id=\"번호\">5</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">일반집기 구매</Col><Col id=\"번호\">4</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">사무용 일반 집기 구매</Col><Col id=\"번호\">3</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">OA시스템 책상 구매</Col><Col id=\"번호\">2</Col><Col id=\"날짜\">2020-02-05</Col></Row><Row><Col id=\"제목\">팩스 소모품(CF-5100) 구매</Col><Col id=\"번호\">1</Col><Col id=\"날짜\">2020-02-05</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIns", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰건명\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">4</Col><Col id=\"의뢰건명\">검수 및 세금계산</Col><Col id=\"날짜\">2020-02-27</Col></Row><Row><Col id=\"번호\">3</Col><Col id=\"의뢰건명\">소프트웨어 구매</Col><Col id=\"날짜\">2020-02-27</Col></Row><Row><Col id=\"번호\">2</Col><Col id=\"의뢰건명\">시스템책상 구매</Col><Col id=\"날짜\">2020-02-27</Col></Row><Row><Col id=\"번호\">1</Col><Col id=\"의뢰건명\">공용 사무용품 구매</Col><Col id=\"날짜\">2020-02-27</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPmt", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰명\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">3</Col><Col id=\"의뢰명\">사무비품 구매</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">2</Col><Col id=\"의뢰명\">비품구매요청의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row><Row><Col id=\"번호\">1</Col><Col id=\"의뢰명\">소프트웨어 구매의 건</Col><Col id=\"날짜\">2020-02-29</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBook", this);
            obj._setContents("<ColumnInfo><Column id=\"구분\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/><Column id=\"시작시간\" type=\"STRING\" size=\"256\"/><Column id=\"종료시간\" type=\"STRING\" size=\"256\"/><Column id=\"일정\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"구분\">A</Col><Col id=\"날짜\">2020-03-03</Col><Col id=\"시작시간\">10 : 00</Col><Col id=\"종료시간\">12 : 30</Col><Col id=\"일정\">3분기 예상 파이브라인 회의</Col></Row><Row><Col id=\"구분\">B</Col><Col id=\"날짜\">2020-03-03</Col><Col id=\"시작시간\">14 : 00</Col><Col id=\"종료시간\">15 : 00</Col><Col id=\"일정\">정보기획팀 지원일정 협의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotic", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"제목\">무선 AP 도입을 위한 입찰 공고</Col><Col id=\"번호\">6</Col><Col id=\"날짜\">2029-02-29</Col></Row><Row><Col id=\"제목\">통합시스템 구축업체 선정을 위한 입찰 공고</Col><Col id=\"번호\">5</Col><Col id=\"날짜\">2029-02-29</Col></Row><Row><Col id=\"제목\">홈페이지 리뉴얼 업체 선정을 위한 입찰 공고</Col><Col id=\"번호\">4</Col><Col id=\"날짜\">2029-02-29</Col></Row><Row><Col id=\"제목\">개발용역 업체 선정을 위한 입찰 공고</Col><Col id=\"번호\">3</Col><Col id=\"날짜\">2029-02-29</Col></Row><Row><Col id=\"제목\">스토리지 증설 및 구조 개선을 위한 입찰 공고</Col><Col id=\"번호\">2</Col><Col id=\"날짜\">2029-02-29</Col></Row><Row><Col id=\"제목\">사무용품 관리 시스템 업체 선정을 위한 입찰 공고</Col><Col id=\"번호\">1</Col><Col id=\"날짜\">2029-02-29</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotice00", this);
            obj._setContents("<ColumnInfo><Column id=\"제목\" type=\"STRING\" size=\"256\"/><Column id=\"날짜\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"제목\">취업통계조사(2019.12.31 기준) 정정기간...</Col><Col id=\"날짜\">2020-02-01</Col></Row><Row><Col id=\"제목\">파일전송 이상 시 [수동으로 전송하기]...</Col><Col id=\"날짜\">2020-02-01</Col></Row><Row><Col id=\"제목\">(2019.12.31 기준) 허위취업에 대한 대학...</Col><Col id=\"날짜\">2020-02-01</Col></Row><Row><Col id=\"제목\">콜센터 휴무 안내(설날)</Col><Col id=\"날짜\">2020-01-20</Col></Row><Row><Col id=\"제목\">개발용역 업체 선정을 위한 입찰 공고</Col><Col id=\"날짜\">2020-01-19</Col></Row><Row><Col id=\"제목\">프로그램 업데이트 일정 및 오류해결방법</Col><Col id=\"날짜\">2020-01-19</Col></Row><Row><Col id=\"제목\">취업통계조사프로그램 업데이트(16시~)</Col><Col id=\"날짜\">2020-01-17</Col></Row><Row><Col id=\"제목\">(중요) 조사일정 변경 안내</Col><Col id=\"날짜\">2029-01-14</Col></Row><Row><Col id=\"제목\">지침 및 메뉴얼 정정표</Col><Col id=\"날짜\">2029-01-14</Col></Row><Row><Col id=\"제목\">공인인증서 발금관련 안내 및 취업담당자 변...</Col><Col id=\"날짜\">2029-01-13</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataList", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰건명\" type=\"STRING\" size=\"256\"/><Column id=\"계열사\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰부서\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰자\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰일자\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">3012</Col><Col id=\"의뢰번호\">2020-00012</Col><Col id=\"의뢰건명\">2020년 신입사원 사무용품 일괄구매</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">임시저장</Col></Row><Row><Col id=\"번호\">3011</Col><Col id=\"의뢰번호\">2020-00011</Col><Col id=\"의뢰건명\">2020년 신입사원 전산장비 일괄구매</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3010</Col><Col id=\"의뢰번호\">2020-00010</Col><Col id=\"의뢰건명\">사옥 로비 현황판 설치</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">검토중</Col></Row><Row><Col id=\"번호\">3009</Col><Col id=\"의뢰번호\">2020-00009</Col><Col id=\"의뢰건명\">2019년 송년 행사 외주</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3008</Col><Col id=\"의뢰번호\">2020-00008</Col><Col id=\"의뢰건명\">사옥 청소 용역</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">검토중</Col></Row><Row><Col id=\"번호\">3007</Col><Col id=\"의뢰번호\">2020-00007</Col><Col id=\"의뢰건명\">서버 노후장비 교체</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3006</Col><Col id=\"의뢰번호\">2020-00006</Col><Col id=\"의뢰건명\">2019년 신년 행사</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">임시저장</Col></Row><Row><Col id=\"번호\">3005</Col><Col id=\"의뢰번호\">2020-00005</Col><Col id=\"의뢰건명\">입찰 관련 추가 기능 회의</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataList00", this);
            obj._setContents("<ColumnInfo><Column id=\"번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰번호\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰건명\" type=\"STRING\" size=\"256\"/><Column id=\"계열사\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰부서\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰자\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰일자\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"번호\">3012</Col><Col id=\"의뢰번호\">2020-00012</Col><Col id=\"의뢰건명\">2020년 신입사원 사무용품 일괄구매</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">임시저장</Col></Row><Row><Col id=\"번호\">3011</Col><Col id=\"의뢰번호\">2020-00011</Col><Col id=\"의뢰건명\">2020년 신입사원 전산장비 일괄구매</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3010</Col><Col id=\"의뢰번호\">2020-00010</Col><Col id=\"의뢰건명\">사옥 로비 현황판 설치</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">검토중</Col></Row><Row><Col id=\"번호\">3009</Col><Col id=\"의뢰번호\">2020-00009</Col><Col id=\"의뢰건명\">2019년 송년 행사 외주</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3008</Col><Col id=\"의뢰번호\">2020-00008</Col><Col id=\"의뢰건명\">사옥 청소 용역</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">검토중</Col></Row><Row><Col id=\"번호\">3007</Col><Col id=\"의뢰번호\">2020-00007</Col><Col id=\"의뢰건명\">서버 노후장비 교체</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3006</Col><Col id=\"의뢰번호\">2020-00006</Col><Col id=\"의뢰건명\">2020년 신년 행사</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">임시저장</Col></Row><Row><Col id=\"번호\">3005</Col><Col id=\"의뢰번호\">2020-00005</Col><Col id=\"의뢰건명\">입찰계획 테스트 1</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col></Row><Row><Col id=\"번호\">3004</Col><Col id=\"의뢰번호\">2020-00004</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">검토중</Col><Col id=\"의뢰건명\">입찰계획 테스트 2</Col></Row><Row><Col id=\"번호\">3003</Col><Col id=\"의뢰번호\">2020-00003</Col><Col id=\"계열사\">JOINS</Col><Col id=\"의뢰부서\">총무팀</Col><Col id=\"의뢰자\">홍길동</Col><Col id=\"의뢰일자\">2020-02-25</Col><Col id=\"상태\">접수완료</Col><Col id=\"의뢰건명\">입찰계획 테스트 3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataList01", this);
            obj._setContents("<ColumnInfo><Column id=\"의뢰건명\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰일자\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"의뢰건명\">자료제출 완료 확인요청</Col><Col id=\"의뢰일자\">2020-02-25</Col></Row><Row><Col id=\"의뢰건명\">[re] 처리완료</Col><Col id=\"의뢰일자\">2020-02-25</Col></Row><Row><Col id=\"의뢰건명\">취업자 수정 오류</Col><Col id=\"의뢰일자\">2020-02-23</Col></Row><Row><Col id=\"의뢰건명\">[re] 처리완료</Col><Col id=\"의뢰일자\">2020-02-25</Col></Row><Row><Col id=\"의뢰건명\">최종결과 자료 제출 문의</Col><Col id=\"의뢰일자\">2020-02-21</Col></Row><Row><Col id=\"의뢰건명\">[re] 처리완료</Col><Col id=\"의뢰일자\">2020-02-25</Col></Row><Row><Col id=\"의뢰건명\">건강보험 DB 연계 누락자</Col><Col id=\"의뢰일자\">2020-02-20</Col></Row><Row><Col id=\"의뢰건명\">[re] 처리완료</Col><Col id=\"의뢰일자\">2020-02-22</Col></Row><Row><Col id=\"의뢰건명\">정부출력</Col><Col id=\"의뢰일자\">2020-02-19</Col></Row><Row><Col id=\"의뢰건명\">[re] 처리완료</Col><Col id=\"의뢰일자\">2020-02-22</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"sun\" type=\"STRING\" size=\"256\"/><Column id=\"mon\" type=\"STRING\" size=\"256\"/><Column id=\"tue\" type=\"STRING\" size=\"256\"/><Column id=\"wed\" type=\"STRING\" size=\"256\"/><Column id=\"thu\" type=\"STRING\" size=\"256\"/><Column id=\"fri\" type=\"STRING\" size=\"256\"/><Column id=\"sat\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div03","744","5","386","615",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","3","386","370","227",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"15\"/><Row size=\"25\"/></Rows><Band id=\"head\"><Cell text=\"SUN\" color=\"red\"/><Cell col=\"1\" text=\"MON\"/><Cell col=\"2\" text=\"TUE\"/><Cell col=\"3\" text=\"WED\"/><Cell col=\"4\" text=\"THU\"/><Cell col=\"5\" text=\"FRI\"/><Cell col=\"6\" text=\"SAT\" color=\"blue\"/></Band><Band id=\"body\"><Cell text=\"bind:SUN\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:MON\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:TUE\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:WED\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:THU\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:FRI\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:SAT\" padding=\"0px 2px 0px 0px\" textAlign=\"right\"/><Cell row=\"1\" textAlign=\"right\" verticalAlign=\"top\" color=\"red\" cssclass=\"expr:(bind:SUN == &quot;19&quot;) ? chkBG :&quot;&quot;\"/><Cell row=\"1\" col=\"1\" textAlign=\"right\" verticalAlign=\"top\"/><Cell row=\"1\" col=\"2\" textAlign=\"right\" verticalAlign=\"top\"/><Cell row=\"1\" col=\"3\" textAlign=\"right\" verticalAlign=\"top\"/><Cell row=\"1\" col=\"4\" textAlign=\"right\" verticalAlign=\"top\"/><Cell row=\"1\" col=\"5\" textAlign=\"right\" verticalAlign=\"top\"/><Cell row=\"1\" col=\"6\" textAlign=\"right\" verticalAlign=\"top\" color=\"blue\"/></Band></Format></Formats>");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("yearStatic","3","365","150","17",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_font("normal bold 12px/normal \"맑은 고딕\"");
            obj.set_color("navy");
            obj.set_textAlign("left");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("monthStatic","219","365","150","17",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_font("normal bold 12px/normal \"맑은 고딕\"");
            obj.set_color("navy");
            obj.set_textAlign("right");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","5","35","178","135",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_cssclass("cls_st_back01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","28","45","120","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("취업률");
            obj.set_font("normal 700 10pt/normal \"Arial\", \"맑은 고딕\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","28","74","60","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_text("전문대학\r\n\r\n대학\r\n\r\n일반대학원");
            obj.set_color("brown");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","118","74","39","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("70.6%\r\n\r\n64.3%\r\n\r\n78.3%");
            obj.set_color("brown");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","195","35","178","135",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_cssclass("cls_st_back01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","218","45","120","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("진학률");
            obj.set_font("normal 700 10pt/normal \"Arial\", \"맑은 고딕\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","218","74","60","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("전문대학\r\n\r\n대학\r\n\r\n일반대학원");
            obj.set_color("blue");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","308","74","39","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_text("70.6%\r\n\r\n64.3%\r\n\r\n78.3%");
            obj.set_color("blue");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","6","10","150","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_text("▦ 취업률차트");
            obj.set_font("normal bold 14px/normal \"맑은 고딕\"");
            obj.set_color("chocolate");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","203","15","150","17",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_font("normal normal 12px/normal \"맑은 고딕\"");
            obj.set_textAlign("right");
            obj.set_text("2019년 12월 31일 기준");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div02","8","5","729",null,null,"18",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","160","150","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("◈ 공지사항");
            obj.set_font("normal 700 12px/normal \"맑은 고딕\"");
            obj.set_color("brown");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("Grid00_01","13","Static00:0","342","225",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsNotice00");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"316\"/><Column size=\"92\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"제목\" font=\"normal 700 12px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"날짜\" font=\"normal 700 12px/normal &quot;맑은 고딕&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:제목\" font=\"normal normal 12px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"bind:날짜\" font=\"normal normal 12px/normal &quot;맑은 고딕&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","13","7","709","149",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::mainT.png\')");
            obj.set_stretch("fit");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","32","33","397","27",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("School to Work Transition Information Survey System");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_color("cornflowerblue");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00","32","60","397","27",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("과학적인 국가인적자원 정책수립을 위한 고등교육기관");
            obj.set_font("normal 700 8pt/normal \"Arial\",\"맑은 고딕\"");
            obj.set_color("#114096");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","32","86","397","37",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("졸업자취업통계시스템");
            obj.set_font("normal 600 19pt/normal \"Arial\",\"맑은 고딕\"");
            obj.set_color("royalblue");
            this.Div02.addChild(obj.name, obj);

            obj = new Tab("Tab00","378","161","342","254",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            this.Div02.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div02.form.Tab00);
            obj.set_text("▥ FAQ");
            this.Div02.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","0","0","342","225",null,null,null,null,null,null,this.Div02.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDataList01");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"251\"/><Column size=\"80\"/></Columns><Rows><Row size=\"22\" band=\"head\"/><Row size=\"20\"/></Rows><Band id=\"head\"><Cell text=\"제목\" font=\"normal 700 12px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"날짜\" font=\"normal 700 12px/normal &quot;맑은 고딕&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:의뢰건명\" font=\"normal normal 12px/normal &quot;맑은 고딕&quot;\"/><Cell col=\"1\" text=\"bind:의뢰일자\" font=\"normal normal 12px/normal &quot;맑은 고딕&quot;\" textAlign=\"center\"/></Band></Format></Formats>");
            this.Div02.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div02.form.Tab00);
            obj.set_text("자료실");
            this.Div02.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div02.form.Tab00);
            obj.set_text("Q&A");
            this.Div02.form.Tab00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1146,628,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SwissHomMain_.xfdl", function() {
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectCalendar"){
        			var objDate = new nexacro.Date();   //넥사크로 Date object 선언
        			var nDate = objDate.getUTCDate();   //현재날짜
        			this.Div03.form.yearStatic.set_text(objDate.getUTCFullYear() + "년");  //현재년도
        			this.Div03.form.monthStatic.set_text((objDate.getMonth()+1) + "월");  //현재월
        			var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
        			for(var i=0; i < this.dsCalendar.rowcount; i++){
        				for(var j=0; j < week.length; j++){
        					if(this.dsCalendar.getColumn(i, week[j]) == nDate){
        						this.Div03.form.Grid01.setCellPos(j, i)
        					}
        					if(this.dsCalendar.getColumn(i, week[j]) >= "13" && this.dsCalendar.getColumn(i, week[j]) <= "24"){

        					}
        				}
        			}
        		}
         	}
        };

        this.Main_onload = function(obj,e)
        {
        	this.sessionCheck();
        	var objApp = nexacro.getApplication();
        	this.selectCalendar();
        };


        this.Button00_onclick = function(obj,e)
        {
        	if( obj.text == "<<")
        	{
        		this.Ani01.play();
        		this.Button00.set_visible(false);
        	}
        };

        this.Ani00_oncomplete = function(obj,e)
        {
          this.Button00.set_text("<<");
        };

        this.Ani01_oncomplete = function(obj,e)
        {
          this.Button00.set_text(">>");

        };

        this.Div00_01_Div01_onclick = function(obj,e)
        {
        	if( this.Button00.text == ">>")
        	{
        		this.Ani00.play();
        		this.Button00.set_visible(true);
        	}
        };

        this.selectCalendar = function(){

        	this.gfnTransaction("selectCalendar",
        						"swiss/cmm/selectCalendar.do",
        						"",
        						"dsCalendar=dsResult",
        						"",
        						"fnCallback",
        						false);

        };



        this.Div03_Grid01_oncellclick = function(obj,e)
        {
        	alert(e.cell);
        	obj.setCellProperty( "body", e.cell, "background", "black");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Main_onload,this);
            this.Div03.form.Grid01.addEventHandler("oncellclick",this.Div03_Grid01_oncellclick,this);
        };

        this.loadIncludeScript("SwissHomMain_.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
