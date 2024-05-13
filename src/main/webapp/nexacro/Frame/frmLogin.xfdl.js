(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("BodyDiv","436.00","212","408","276",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("3px solid darkblue, 1px solid, 1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("LoginBtn","264.00","195","88","40",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("0");
            obj.set_text("로그인");
            obj.set_cssclass("LoginBtn");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new Static("Static00","78","19","252","48",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("1");
            obj.set_text("Sing In to your Account");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new Edit("EditLogin","92","81","261","34",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("2");
            obj.set_border("1px solid, 1px solid, 1px solid, 0px none");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new Div("Div00","57","81","36","34",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("1px solid, 0px none, 1px solid, 1px solid");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","3.00","5","30","24",null,null,null,null,null,null,this.BodyDiv.form.Div00.form);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::login.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.BodyDiv.form.Div00.addChild(obj.name, obj);

            obj = new Edit("EditPwd","91.00","128","261","34",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("4");
            obj.set_border("1px solid, 1px solid, 1px solid, 0px none");
            obj.set_font("18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new Div("Div01","57","128","36","34",null,null,null,null,null,null,this.BodyDiv.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid, 0px none, 1px solid, 1px solid");
            this.BodyDiv.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","3.00","5","30","24",null,null,null,null,null,null,this.BodyDiv.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none");
            obj.set_image("url(\'imagerc::lock.png\')");
            obj.set_stretch("fixaspectratio");
            this.BodyDiv.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","589.00","160","62","56",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("KCC");
            obj.set_font("bold 24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","644.00","170","56","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("PMS");
            obj.set_font("24px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.BodyDiv.form.Div00.form
            obj = new Layout("default","",0,0,this.BodyDiv.form.Div00.form,function(p){});
            this.BodyDiv.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.BodyDiv.form.Div01.form
            obj = new Layout("default","",0,0,this.BodyDiv.form.Div01.form,function(p){});
            this.BodyDiv.form.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.BodyDiv.form
            obj = new Layout("default","",0,0,this.BodyDiv.form,function(p){});
            this.BodyDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {

        this.LoginBtn_onclick = function(obj,e)
        {
        	var id = "";
        	var url = "svc::login.do";
        	var reqDs = "";
        	var respDs = "";
        	var args = "id="+this.BodyDiv.form.EditLogin.text + " pwd="+this.BodyDiv.form.EditPwd.text;
        	var callback = "received";
        	this.transaction(id, url, reqDs, respDs, args, callback);

        	//Top, HFSet01, Bottom, Login 4개 영역에 대하여
        	//로그인 화면이 보이지 않도록 설정
        	//VFSet01은 내가 mainframe에 셋팅한 root 프레임의 이름
        	nexacro.VFSet01.set_separatesize("65,*,30,0");
        };

        this.received = function(id,code,message)
        {
        	if (code == 0) {
        		this.alert("SUCESS["+code+"]:"+message);
        	} else{
        		this.alert("Error["+code+"]:"+message);
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.BodyDiv.form.LoginBtn.addEventHandler("onclick",this.LoginBtn_onclick,this);
            this.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
