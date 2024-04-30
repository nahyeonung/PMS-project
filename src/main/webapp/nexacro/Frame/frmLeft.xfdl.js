(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLeft");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLeft", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staMain","0","0","190","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Main Title Menu");
            obj.set_border("1px solid");
            obj.set_cssclass("sta_LF_title01");
            this.addChild(obj.name, obj);

            obj = new Grid("gridLeftMenu","0","50",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_binddataset("dsLeft");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"190\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LEVEL\" treestartlevel=\"1\" text=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,570,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        this.frmLeft_onload = function(obj,e)
        {
        	//메뉴가져오는 함수 호출
        	this.fnGetLeftMenu();
        };

        /**
        * @description           : 화면 로드 시, 사용자가 상단 메뉴 클릭시 왼쪽 메뉴 가져오는 함수
        * @param sMenuId         : 클릭한 상단 메뉴
        * @return                : 없음
        */
        this.fnGetLeftMenu = function (sMenuId)
        {
        	//글로벌 데이터셋 pmsMenu 가져오기
        	var objApp = nexacro.getApplication();
        	var objDsMenu = objApp.pmsMenu;

        	//선택된 0레벨 메뉴의 하위 메뉴정보로 필터링
        	objDsMenu.filter("MENU_ID.indexOf('"+sMenuId+"') == 0 && MENU_LEVEL > 0 ");

        	//필터 처리된 데이터셋을 복사
        	this.dsLeft.copyData(objDsMenu, true);

        	//필터링 없애기
        	objDsMenu.filter("");
        };

        /**
        * @description       :     메뉴 그리드 oncellclick 시 처리
        */
        this.gridLeftMenu_oncellclick = function(obj,e)
        {
        	//그리드에 바인딩 된 데이터셋으로 가져오기
        	var objDsMenu = obj.getBindDataset();
        	var sMenuId = objDsMenu.getColumn(e.row, "MENU_ID");
        	trace("sMenuId : " + sMenuId);

        	//업무 화면 여는 함수 호출
        	this.fnOpenMenu(sMenuId);
        };

        /**
        * @description           : 선택된 메뉴의 업무화면을 활성화하는 함수
        * @param sMenuId         : 선택된 왼쪽 메뉴 ID
        * @return                : 없음
        */
        this.fnOpenMenu = function (sMenuId)
        {
        	//글로벳 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.getApplication();
        	var objDsOpenMenu = objApp.pmsMenuOpen;

        	//글로벌 변수 MDI Frame, Work FrameSet 가져오기
        	var objMdiFrame = nexacro.MdiFrame;
        	var objWorkFrame = nexacro.WorkFrame;

        	//메뉴 데이터셋 가져오기
        	var objDsMenu = this.gridLeftMenu.getBindDataset();

        	//오픈할 메뉴 정보 가져오기
        	trace("nFROW : " + objDsMenu.findRow("MENU_ID", sMenuId));
        	var nFRow = objDsMenu.findRow("MENU_ID", sMenuId);
        	trace("sMenuNm : " + objDsMenu.getColumn(nFRow, "MENU_NM"));
        	trace("sMenuPath : " + objDsMenu.getColumn(nFRow, "MENU_PATH"));
        	var sMenuNm = objDsMenu.getColumn(nFRow, "MENU_NM");
        	var sMenuPath = objDsMenu.getColumn(nFRow, "MENU_PATH");

        	//이미 오픈된 메뉴인지 확인
        	var nFRowOpen = objDsOpenMenu.findRow("MENU_ID", sMenuId);
        	var nOpenMenuRowCnt = objDsOpenMenu.rowcount;

        	//이미 오픈된 메뉴일 경우 해당 메뉴를 Active
        	if(nFRowOpen > -1)
        	{
        		//MDI Frame에 정의된 Active 함수 호출
        		objMdiFrame.form.fnActiveTabPage(sMenuId);
        		return;
        	}
        	//메뉴가 열려있지 않다면
        	else
        	{
        		//이미 오픈된 메뉴가 7개 일 경우 예외처리
        		if(nOpenMenuRowCnt >= 7) {
        			alert("7개 이상 열 수 없습니다. skr");
        			return;
        		}
        		//메뉴의 경로가 없는 경우
        		if(sMenuPath == null || sMenuPath.length == 0) {
        			alert("경로가 존재하지 않습니다.");
        			return;
        		}
        		//
        		//

        		//열린화면 데이터셋에 정보 추가 함수 호출
        		//this.fnAddOpenMenu(sMenuId);

        		//MDI Frame에 정의된 MDI Tab 추가 함수 호출
        		objMdiFrame.form.fnAddTabPage(sMenuId, sMenuNm);
        		}
        };

        /**
        * @description          : 열린화면 데이터셋 추가 함수
        * @param sMenuId        : 추가할 메뉴 ID
        * @return               : 없음
        */
        this.fnAddOpenMenu = function (sMenuId)
        {
        	//글로벌 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.Application;
        	var objDsOpenMenu = objApp.pmsMenuOpen;

        	//마지막 row에 새로운 값 추가
        	var nRow = objDsOpenMenu.addRow();
        	objDsOpenMenu.setColumn(nRow, "MENU_ID", sMenuId);
        };

        /**
        * @description           : 열린화면 데이터셋 삭제 함수
        * @param sMenuId         : 열린 메뉴 ID
        * @return                : 없음
        */
        this.fnDelOpenMenu = function (sMenuId)
        {
        	//글로벌 데이터셋 gdsOpenMenu 가져오기
        	var objApp = nexacro.getApplication();

        	var objDsOpenMenu = objApp.pmsMenuOpen;

        	//sMenuId로 데이터셋에서 row 찾기
        	var nRow = objDsOpenMenu.findRow("MENU_ID", sMenuId);

        	//데이터셋에서 찾은 row 삭제
        	objDsOpenMenu.deleteRow(nRow);
        };



        // //업무화면을 구성하기 위한 childframe 생성
        // 		var objChildFrame = new ChildFrame();
        // 		objChildFrame.init(sMenuId, 10, 30, 200, 500 ,null, null);
        //
        // 		//업무화면에 전달할 파라미터 정보
        // 		var oParam = {menumn : sMenuNm,
        // 					  menupath : sMenuPath
        // 					  };
        //
        // 		//workframe에 자식으로 추가
        // 		objWorkFrame.addChild(objChildFrame.name, objChildFrame);
        //
        // 		//업무 화면용 ChildFrame에 공통 속성 적용
        // 		objChildFrame.set_openstatus('maximize');
        // 		objChildFrame.set_showtitlebar('false');
        // 		objChildFrame.set_formurl(sMenuPath);
        // 		objChildFrame.param = oParam;
        // 		objChildFrame.show();
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmLeft_onload,this);
            this.staMain.addEventHandler("onclick",this.staMain_onclick,this);
            this.gridLeftMenu.addEventHandler("oncellclick",this.gridLeftMenu_oncellclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
