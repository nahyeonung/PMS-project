(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("pmsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ID\">00</Col><Col id=\"MENU_NM\">상단메뉴1</Col></Row><Row><Col id=\"MENU_ID\">0000</Col><Col id=\"MENU_NM\">업무화면1</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000001</Col><Col id=\"MENU_NM\">샘플 1-1</Col><Col id=\"MENU_PATH\">Sample::sample01.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000002</Col><Col id=\"MENU_NM\">샘플 1-2</Col><Col id=\"MENU_PATH\">Sample::sample02.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000003</Col><Col id=\"MENU_NM\">샘플 1-3</Col><Col id=\"MENU_PATH\">Sample::sample03.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">000004</Col><Col id=\"MENU_NM\">샘플 1-4</Col><Col id=\"MENU_PATH\">Sample::sample04.xfdl</Col></Row><Row><Col id=\"MENU_ID\">0001</Col><Col id=\"MENU_NM\">업무화면2</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">000101</Col><Col id=\"MENU_NM\">샘플 2-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample05.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000102</Col><Col id=\"MENU_NM\">샘플 2-2</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000103</Col><Col id=\"MENU_NM\">샘플 2-3</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_ID\">000104</Col><Col id=\"MENU_NM\">샘플 2-4</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row><Row><Col id=\"MENU_ID\">01</Col><Col id=\"MENU_NM\">경력관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0100</Col><Col id=\"MENU_NM\">나의경력조회</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">010001</Col><Col id=\"MENU_NM\">나의경력조회</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::myCareer.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010002</Col><Col id=\"MENU_NM\">샘플 3-2</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010003</Col><Col id=\"MENU_NM\">샘플 3-3</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">010004</Col><Col id=\"MENU_NM\">샘플 3-4</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row><Row><Col id=\"MENU_NM\">상단메뉴3</Col><Col id=\"MENU_ID\">02</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">0200</Col><Col id=\"MENU_NM\">업무화면4</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">020001</Col><Col id=\"MENU_NM\">샘플 4-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample01.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020002</Col><Col id=\"MENU_NM\">샘플 4-2</Col><Col id=\"MENU_PATH\">Sample::sample02.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020003</Col><Col id=\"MENU_NM\">샘플 4-3</Col><Col id=\"MENU_PATH\">Sample::sample03.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020004</Col><Col id=\"MENU_NM\">샘플 4-4</Col><Col id=\"MENU_PATH\">Sample::sample04.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020005</Col><Col id=\"MENU_NM\">샘플 4-5</Col><Col id=\"MENU_PATH\">Sample::sample05.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">020006</Col><Col id=\"MENU_NM\">샘플 4-6</Col><Col id=\"MENU_PATH\">Sample::sample06.xfdl</Col></Row><Row><Col id=\"MENU_ID\">03</Col><Col id=\"MENU_NM\">상단메뉴4</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_PATH\"/></Row><Row><Col id=\"MENU_ID\">0300</Col><Col id=\"MENU_NM\">업무화면5</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">030001</Col><Col id=\"MENU_NM\">샘플5-1</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_PATH\">Sample::sample07.xfdl</Col></Row><Row><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">030002</Col><Col id=\"MENU_NM\">샘플5-2</Col><Col id=\"MENU_PATH\">Sample::sample08.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("pmsMenuOpen", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_YES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFSet01",null,null,null,null,null,null,this);
            frame0.set_separatesize("0,0,0,*");
            frame0.set_showtitlebar("true");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"Frame::frmTop.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Frame::frmTop.xfdl");


            var frame2 = new HFrameSet("HFSet01",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("190,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"Frame::frmLeft.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("Frame::frmLeft.xfdl");


            var frame4 = new VFrameSet("VFSet02",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("40,*");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"Frame::frmMdi.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("Frame::frmMdi.xfdl");


            var frame6 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame4);
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"Frame::frmBottom.xfdl",frame0);
            frame7.set_showtitlebar("false");
            frame0.addChild(frame7.name, frame7);
            frame7.set_formurl("Frame::frmBottom.xfdl");


            var frame8 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"Frame::frmLogin.xfdl",frame0);
            frame8.set_showtitlebar("false");
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("Frame::frmLogin.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Application_onload,this);
        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.Application_onload = function(obj,e)
        {
          //공통 FrameSet/Frame에 직접접근을 위한 변수 선언

          //메인프레인 안에 첫 번째 VFrameSet
          nexacro.VFSet01 = this.mainframe.VFSet01;

          //VFSet01 안에 TopFrame
          nexacro.TopFrame = this.mainframe.VFSet01.TopFrame;

          //VFSet01 안에 HFSet01
          nexacro.HFSet01 = this.mainframe.VFSet01.HFSet01;
          //HFSet01 안에 LeftFrame
          nexacro.LeftFrame = this.mainframe.VFSet01.HFSet01.LeftFrame;

          //HFSet01 안에 VFSet02
          nexacro.VFSet02 = this.mainframe.VFSet01.HFSet01.VFSet02;

          //VFSet02 안에 MdiFrame
          nexacro.MdiFrame = this.mainframe.VFSet01.HFSet01.VFSet02.MdiFrame;

          //VFSet02 안에 WorkFrame
          nexacro.WorkFrame = this.mainframe.VFSet01.HFSet01.VFSet02.WorkFrame;

        };
        });
        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::temp_main.xcss");
        this.loadCss("xcssrc::button.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
