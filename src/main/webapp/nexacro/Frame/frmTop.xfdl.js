(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,65);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBack02","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_top_bg02");
            this.addChild(obj.name, obj);

            obj = new Static("staBack01",null,"0","1280","24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_top_bg01");
            this.addChild(obj.name, obj);

            obj = new Static("staHello","10","0","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Hello! Nahyeonung");
            obj.set_cssclass("sta_top_textWht");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","24","160","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_top_logo");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,65,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {

        this.frmTop_onload = function(obj,e)
        {
        	nexacro.getApplication().trace("ㄴㅇ미라ㅓㅗ니ㅏ러디람너리ㅏㅓㄴㅁ디;ㄹ");
        	//메뉴 정보 가져오는 함수 호출
        	this.fnGetTopMenu();

        	//메뉴 버튼 생성하는 함수 호출
        	this.fnCreateTopMenu();
        };
        /*
        * @description          : 메뉴 정보 가져오는 함수
        * @param                : 없음
        * @return               : 없음
        */
        this.fnGetTopMenu = function ()
        {
          //글로벌 데이터셋 gdsMenu 가져옴
          var objApp = nexacro.getApplication();
          var objDsMenu = objApp.pmsMenu;

          //MENU_LVL이 0인 값으로 데이터셋 필터링
          objDsMenu.filter("MENU_LEVEL == 0");

          //필터처리된 데이터셋을 복사
          //CopyData 메서드 매개변수에 "true" 설정하여 필터링 된 데이터만 복사
          this.dsTop.copyData(objDsMenu,true);

          objDsMenu.filter("");
        };

        /**
        * @description          : 메뉴 버튼 생성하는 함수
        * @param                : 없음
        * @return               : 없음
        */
        this.fnCreateTopMenu = function ()
        {
          //메뉴id, 메뉴명
          var sMenuId;
          var sMenuNm;

          //메뉴 버튼들 위치 설정을 위한 기본값
          var nLeft = 190;
          var nTop = 24;
          var nWidth = 190 ;
          var nHeight = 40;

          //버튼 사이에 간격 선언
          var nGap = 20;

          //버튼의 cssclass 선언
          var sBtnCssClass = "btn_top_menu";

          var nRowCnt  = this.dsTop.rowcount;

          //복사한 데이터셋의 row 갯수만큼 for문 반복
          for(i=0; i<nRowCnt; i++){

            //데이터셋에서 MENU_CD, MENU_NM 값 가져와 선언한 변수에 각각 넣어주기
            sMenuId = this.dsTop.getColumn(i, "MENU_ID");
            sMenuNm = this.dsTop.getColumn(i ,"MENU_NM");

            //새로운 버튼 생성
            var objButton = new Button();
            objButton.init("btn_"+sMenuId, nLeft, nTop, nWidth, nHeight, null, null);

            //버튼 컴포넌트 설정
            objButton.set_text(sMenuNm);
            objButton.set_cssclass(sBtnCssClass);

            //fittocontents
            objButton.set_fittocontents("width");

            //생성한 버튼 컴포넌트를 form의 자식 컴포넌트로 추가
            this.addChild(objButton.id,objButton);

            //버튼의 특정 이벤트에 onclick 핸들러 함수를 추가
            objButton.addEventHandler("onclick",this.btnTopMenu_onclick,this);

            objButton.show();

            //두번째 버튼부터는 이전 버튼과 nGap 만큼의 간격으로 생성되도록 Left 값 설정
            //PositionBase
            nLeft = objButton.id+":"+nGap+"px";
          }
          this.resetScroll();
        };

        /**
         * @description    :     탑메뉴 버튼 onclick 시 처리
        */
        this.btnTopMenu_onclick = function(obj,e)
        {
          //버튼 Id에서 메뉴 id값을 추출
          //ex) btn_000001 -> 000001
          var arrResultId = obj.id.split('_');
          var sResultId = arrResultId [1];

          //왼쪽 메뉴 가져오는 함수 호출 - frmleft 화면
          nexacro.LeftFrame.form.fnGetLeftMenu(sResultId);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmTop_onload,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
