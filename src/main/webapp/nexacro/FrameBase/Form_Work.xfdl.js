(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","573.00","36","134","44",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("KCCPMS");
            obj.set_textAlign("center");
            obj.set_font("20pt \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","390","86","500","274",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("5px solid, 1px solid, 1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","121.00","23","257","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Sign In to your Account");
            obj.set_textAlign("center");
            obj.set_font("14pt/normal \"나눔고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","113","88","256","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_value("Username");
            obj.set_text("Username");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","113.00","128","256","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_value("Password");
            obj.set_text("Password");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","305","195","64","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Sign in");
            obj.set_color("#d7d7d9");
            obj.set_background("#081db9");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Div00_Button00_onclick = function(obj,e)
        {
        	alert("앗 형님 거긴 안됩니다!!");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button00.addEventHandler("onclick",this.Div00_Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
