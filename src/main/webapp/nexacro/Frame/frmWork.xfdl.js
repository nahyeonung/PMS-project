(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTitle","10","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴명입니다.");
            obj.set_cssclass("sta_WF_title01");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","30",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        this.frmWork_onload = function(obj,e)
        {
          //화면 초기화 함수 호출
          this.fnInitForm();
        };

        this.fnInitForm = function ()
        {
          //현재 form이 소속된 부모 frame 반
          var objOwnerFrame = this.getOwnerFrame();

          /*
          workFrame에 Frame이 생성될 떄 추가된 파라미터 정보 가져오기
          (frmLeft form의 fnOpenMenu 함수에서 생성한 Frame에 추가)
          var objParam  = {menunm : sMenuNm,
                                      menupath : sMenuPath
                                      };
          */

          //파라미터 정보 중 메뉴명 가져오기
          var sPageNm = objOwnerFrame.param.menunm;

          //파라미터 정보 중 메뉴경로 가져오기
          var sFormPath= objOwnerFrame.param.menupath;

          //화면 타이틀 설정
          this.staTitle.set_text(sPageNm);
          this.staTitle.set_fittocontents("width");

          //Div 컴포넌트에 화면 URL을 설정
          this.divWork.set_url(sFormPath);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
