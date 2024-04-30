(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stabg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_mdi_bg01");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","0","10",null,"100","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_cssclass("tab_mdi_menu");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMdi);
            obj.set_text("Tabpage1");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabMdi);
            obj.set_text("Tabpage2");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("closeAll",null,"0","40",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_mdi_close");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMdi.Tabpage1
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage1.form,function(p){});
            this.tabMdi.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tabMdi.Tabpage2
            obj = new Layout("default","",0,0,this.tabMdi.Tabpage2.form,function(p){});
            this.tabMdi.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,40,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {

        this.frmMdi_onload = function(obj,e)
        {
        	//자동 생성된 첫 번째 탭페이지 삭제
        	this.tabMdi.removeTabpage(0);
        };

        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
          trace("onextrabuttonclick");
          //선택된 extrabutton(삭제 버튼)의 index == Tabpage index
          var nExtraIdx = e.index

          //extrabuton의 index로 생성된 메뉴아이디 값
          var sMenuId = this.tabMdi.tabpages[nExtraIdx].id;

          //extrabuton의 index로 탭페이지 삭제
          this.tabMdi.removeTabpage(nExtraIdx);

          //WorkFram에 생성된 프레임 중 메와 일치하는 프레임의 Form 닫기
          nexacro.WorkFrame[sMenuId].form.close();

          //열린 화면 정보 삭제 함수 호출
          nexacro.LeftFrame.form.fnDelOpenMenu(sMenuId);
        };

        this.closeAll_onclick = function(obj,e)
        {
          //Tab 컴포넌트에 등록된 TabPage의 개수 반환
          var nPageCnt = this.tabMdi.getTabpageCount();

          //Frameset에 등록된 Frame 전체 가져오기
          var objWorkFrame = nexacro.WorkFrame.all;

          //application 오브젝트 반환
          var objApp = nexacro.Application;

         //글로벌 gdsOpenMenu 가져오기 : 열린화면 정보
          var objDsOpenMenu = objApp.pmsMenuOpen;

          // 마지막 탭 페이지부터 모두 삭제
          for(var i = nPageCnt-1; i >= 0; i--)
          {
            // index의 TabPage 삭제
            this.tabMdi.removeTabpage(i);

            // workFrame에 등록된 form 닫기
            objWorkFrame[i].form.close();

            // 열린화면 메뉴 row 삭제
            objDsOpenMenu.deleteRow(i);
          }
        };


        this.fnAddTabPage = function(sMenuId,sMenuNm)
        {
        	//Tab 컴포넌트에서 지정한 위치에 Tabpage 삽입
        	//삽입될 위치를 -1 추가하여 마지막에 추가되도록 함
        	this.tabMdi.insertTabpage(sMenuId, -1, "", sMenuNm);
        }

        this.fnActiveTabPage = function (sMenuId)
        {
          // Tab 컴포넌트에 등록된 TabPage의 개수 반환
          var nPageCnt = this.tabMdi.getTabpageCount();

          // TabPage의 수만큼 반복
          for(i=0; i<nPageCnt; i++)
          {
            // 메뉴아이디가 일치하는 아이디를 갖는 TabPage 찾기
            if(this.tabMdi.tabpages[i].id == sMenuId)
            {
              //화면에 표시될 TabPage index에 값 설정 후 반복문 종료
              this.tabMdi.set_tabindex(i);
              break;
            }
          }
        };

        this.tabMdi_onchanged = function(obj,e)
        {
        	//글로벳 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.getApplication();
        	var objDsOpenMenu = objApp.pmsMenuOpen;

            //메뉴 데이터셋 가져오기
        	var objDsMenu = nexacro.LeftFrame.form.gridLeftMenu.getBindDataset();
        	var objWorkFrame = nexacro.WorkFrame;

        	var sMenuId = obj._tabbutton_obj._tabpage.id;

        	//오픈할 메뉴 정보 가져오기
        	var nFRow = objDsMenu.findRow("MENU_ID", sMenuId);
        	var sMenuNm = objDsMenu.getColumn(nFRow, "MENU_NM");
        	var sMenuPath = objDsMenu.getColumn(nFRow, "MENU_PATH");

        	//이미 오픈된 메뉴인지 확인
        	var nFRowOpen = objDsOpenMenu.findRow("MENU_ID", sMenuId);

        	if(nFRowOpen > -1)
        	{
        		objWorkFrame[sMenuId].form.setFocus()
        	}
        	else{
        		//업무화면을 구성하기 위한 childframe 생성
        		var objChildFrame = new ChildFrame();
        		objChildFrame.init(sMenuId, 10, 30, 200, 500 ,null, null);

        		//업무화면에 전달할 파라미터 정보
        		var oParam = {menumn : sMenuNm,
        					  menupath : sMenuPath
        					  };


        		trace("plz", objWorkFrame[sMenuId]);

        		var pageCnt = this.tabMdi.getTabpageCount();

        		//workframe에 자식으로 추가
        		objWorkFrame.addChild(objChildFrame.name, objChildFrame);

        		//업무 화면용 ChildFrame에 공통 속성 적용
        		objChildFrame.set_openstatus('maximize');
        		objChildFrame.set_showtitlebar('false');
        		objChildFrame.set_formurl(sMenuPath);
        		objChildFrame.param = oParam;
        		objChildFrame.show();
        		trace("2");
        		trace("now tab id", obj._tabbutton_obj._tabpage.id);
        		trace("obj._tabbutton_obj", obj._tabbutton_obj);
        		trace("objWorkFrame", objWorkFrame);

        		this.fnAddOpenMenu(sMenuId);
        	}




        	//WorkFram에 생성된 프레임 중 메와 일치하는 프레임의 Form 닫기
            //nexacro.WorkFrame[sMenuId].form.visible();

        };

        this.fnAddOpenMenu = function (sMenuId)
        {
        	//글로벌 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.Application;
        	var objDsOpenMenu = objApp.pmsMenuOpen;

        	//마지막 row에 새로운 값 추가
        	var nRow = objDsOpenMenu.addRow();
        	objDsOpenMenu.setColumn(nRow, "MENU_ID", sMenuId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmMdi_onload,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.closeAll.addEventHandler("onclick",this.closeAll_onclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
