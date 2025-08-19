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


            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"school\" type=\"STRING\" size=\"256\"/><Column id=\"val\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"school\">전체</Col><Col id=\"val\">67.7</Col></Row><Row><Col id=\"school\">전문대학</Col><Col id=\"val\">71.1</Col></Row><Row><Col id=\"school\">대학</Col><Col id=\"val\">64.2</Col></Row><Row><Col id=\"school\">교육대학</Col><Col id=\"val\">68.8</Col></Row><Row><Col id=\"school\">산업대학</Col><Col id=\"val\">70.1</Col></Row><Row><Col id=\"school\">각종학교</Col><Col id=\"val\">55.8</Col></Row><Row><Col id=\"school\">기능대학</Col><Col id=\"val\">81.0</Col></Row><Row><Col id=\"school\">일반대학원</Col><Col id=\"val\">78.9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div03","744","5","386","615",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("yearStatic","3","365","150","17",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_font("normal bold 12px/normal \"맑은 고딕\"");
            obj.set_color("navy");
            obj.set_textAlign("left");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00","5","35","178","135",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("cls_st_back01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","28","45","120","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("취업률");
            obj.set_font("normal 700 10pt/normal \"Arial\", \"맑은 고딕\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","28","74","60","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("전문대학\r\n\r\n대학\r\n\r\n일반대학원");
            obj.set_color("brown");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00","118","74","39","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("70.6%\r\n\r\n64.3%\r\n\r\n78.3%");
            obj.set_color("brown");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00","195","35","178","135",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_cssclass("cls_st_back01");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_00","218","45","120","19",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_text("진학률");
            obj.set_font("normal 700 10pt/normal \"Arial\", \"맑은 고딕\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_01","218","74","60","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_text("전문대학\r\n\r\n대학\r\n\r\n일반대학원");
            obj.set_color("blue");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","308","74","39","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("70.6%\r\n\r\n64.3%\r\n\r\n78.3%");
            obj.set_color("blue");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","6","10","150","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("▦ 취업률차트");
            obj.set_font("normal 700 12px/normal \"맑은 고딕\"");
            obj.set_color("chocolate");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static11","203","15","150","17",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_font("normal normal 12px/normal \"맑은 고딕\"");
            obj.set_textAlign("right");
            obj.set_text("2019년 12월 31일 기준");
            this.Div03.addChild(obj.name, obj);

            obj = new Tab("Tab00","11","184","372","261",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_tabindex("0");
            this.Div03.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Div03.form.Tab00);
            obj.set_text("학제별");
            this.Div03.form.Tab00.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","5","2","367","207",null,null,null,null,null,null,this.Div03.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsChart");
            obj._setContents({
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": true
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 5pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "normal bold 6pt/normal \"맑은 고딕\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"visible": true
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"visible": "true",
            			"autotickscale": "100",
            			"tickmax": "100",
            			"tickmin": "0"
            		}
            	],
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#4c4c4c",
            		"visible": false
            	},
            	"selection": {
            		"id": "selection",
            		"type": "xy",
            		"linestyle": "1px solid #525252",
            		"background": "#525252",
            		"opacity": "0.5",
            		"visible": false
            	},
            	"crosshair": {
            		"id": "crosshair",
            		"type": "xy",
            		"xlinestyle": "1px solid #525252",
            		"ylinestyle": "1px solid #525252",
            		"tooltiptype": "xy",
            		"visible": false
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "azure",
            			"itemtextfont": "normal 700 9/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:val",
            			"stacktype": "none",
            			"linevisible": false,
            			"pointvisible": false,
            			"lineareavisible": false,
            			"barlinestyle": "1px solid #3182bd",
            			"barfillstyle": "#3182bd"
            		}
            	],
            	"title": {
            		"id": "title",
            		"text": "※ 학제별 취업률",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"linestyle": "0px none"
            	}
            });
            obj.set_categorycolumn("bind:school");
            this.Div03.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Div03.form.Tab00);
            obj.set_text("계열별");
            this.Div03.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Div03.form.Tab00);
            obj.set_text("지역별");
            this.Div03.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Div03.form.Tab00);
            obj.set_text("성별");
            this.Div03.form.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Div03.form.Tab00);
            obj.set_text("시계열");
            this.Div03.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","37","512","134","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("12");
            obj.set_text("학교기본정보");
            obj.set_color("#fd7106");
            obj.set_font("normal 700 12px/normal \"맑은 고딕\"");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_01","48","534","265","77",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("13");
            obj.set_text("학교총괄 개요 \r\n\r\n계열별 취업정보개요(7대 계열)\r\n\r\n계열별 취업정보개요(5대 계열)");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02_00_01_00","39","534","33","77",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("14");
            obj.set_text("·\r\n\r\n·\r\n\r\n·");
            obj.set_color("#fd7106");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","24","443","83","58",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("15");
            obj.set_image("url(\'imagerc::tt1.PNG\')");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","114","443","83","58",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("16");
            obj.set_image("url(\'imagerc::tt2.PNG\')");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00","204","443","83","58",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("17");
            obj.set_image("url(\'imagerc::tt3.PNG\')");
            this.Div03.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00_00_00","294","443","83","58",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("18");
            obj.set_image("url(\'imagerc::tt4.PNG\')");
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

            obj = new ImageViewer("ImageViewer01","16","442","697","92",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_image("url(\'imagerc::shortcut1.PNG\')");
            obj.set_color("transparent");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","19","420","687","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("서비스 바로가기");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_00","19","538","687","20",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_text("관련사이트 바로가기");
            this.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","24","571","697","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::shortcut2.PNG\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","766","423","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("▣ 분석장표");
            obj.set_font("normal 700 12px/normal \"맑은 고딕\"");
            obj.set_color("chocolate");
            this.addChild(obj.name, obj);

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
        this.registerScript("SwissHomMain.xfdl", function() {
        this.fnCallback = function(serviceID, errCD, errMSG){
        	if(errCD < 0){

        	}else{
        		if(serviceID == "selectCalendar"){
        			var objDate = new nexacro.Date();   //넥사크로 Date object 선언
        			var nDate = objDate.getUTCDate();   //현재날짜
        			this.Div03.form.yearStatic.set_text(objDate.getUTCFullYear() + "년");  //현재년도
        			this.Div03.form.monthStatic.set_text((objDate.getMonth()+1) + "월");  //현재월
        			var week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
        			trace("=======================>>>>>>>nDate:"+nDate);
        			trace("=======================>>>>>>>dsCalendar:"+this.dsCalendar.saveXML());
        			for(var i=0; i < this.dsCalendar.rowcount; i++){
        				for(var j=0; j < week.length; j++){
        					if(this.dsCalendar.getColumn(i, week[j]) == nDate){
        						this.Div03.form.Grid01.setCellPos(j, i)
        					}
        					if(this.dsCalendar.getColumn(i, week[j]) >= "13" && this.dsCalendar.getColumn(i, week[j]) <= "24"){
        						this.Div03.form.Grid01.set
        					}
        				}
        			}
        		}
         	}
        };

        this.Main_onload = function(obj,e)
        {

        	// this.alert("Row == " + nRow);
        	var arrData = eval(this.dsChart.getColumn(1, "data"));
        	var arrOption = eval(this.dsChart.getColumn(1, "opt"));
        	// this.alert("arrData " + arrData);
        	// this.alert("arrOption " + arrOption);
        	this.WebBrowser00.callMethod("btnCallChart", arrData, arrOption);

        	var strUrl = "http://support.tobesoft.co.kr/Next_JSP/GoogleChart/chart/" + strChart + ".html";
        	this.WebBrowser00.set_url(strUrl);

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

        this.Div03_Tab01_onchanged = function(obj,e)
        {

        };

        this.Div02_TextArea00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Main_onload,this);
            this.Div02.form.ImageViewer01.addEventHandler("onclick",this.Div02_ImageViewer01_onclick,this);
        };

        this.loadIncludeScript("SwissHomMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
