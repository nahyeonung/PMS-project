(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample05");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("my_info", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"dept\" type=\"INT\" size=\"256\"/><Column id=\"rank\" type=\"INT\" size=\"256\"/><Column id=\"division\" type=\"INT\" size=\"256\"/><Column id=\"license\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("titleDiv","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_color("#c9c9c9");
            obj.set_background("#c9c9c9");
            obj.set_border("0px none, 0px none, 1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","0","126","40",null,null,null,null,null,null,this.titleDiv.form);
            obj.set_taborder("0");
            obj.set_text("나의경력조회");
            obj.set_font("bold 18px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_textAlign("center");
            this.titleDiv.addChild(obj.name, obj);

            obj = new Div("Div00","0","40",null,"100%","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","92","35","1097","98",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"29","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("0px none, 0px none, 1px solid");
            obj.set_background("#efefef");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","16","4","68","21",null,null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("기본 정보");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","29",null,"67","0",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("my_info");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"dept\"/><Cell col=\"2\" text=\"rank\"/><Cell col=\"3\" text=\"division\"/><Cell col=\"4\" text=\"license\"/></Band><Band id=\"body\"><Cell text=\"bind:name\"/><Cell col=\"1\" text=\"bind:dept\"/><Cell col=\"2\" text=\"bind:rank\"/><Cell col=\"3\" text=\"bind:division\"/><Cell col=\"4\" text=\"bind:license\"/></Band></Format></Formats>");
            this.Div00.form.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.titleDiv.form
            obj = new Layout("default","",0,0,this.titleDiv.form,function(p){});
            this.titleDiv.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

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
        this.registerScript("myCareer.xfdl", function() {

        this.sample05_onload = function(obj,e)
        {
        	this.myInfoSearch();
        };

        //처리콜백 함수
        this.fnCallback = function(svcId, errorCode, errorMsg)
        {
        	//에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		this.alert(errorCode+"\n"+errorMsg);
        		return;
        	}
        	  switch(svcID)
        	  {
        		case "search":
        		  if(this.my_info.rowcount < 1){
        			this.alert("조회된 결과가 없습니다.");
        		  }

        		  break;
        	  }
        }

        //내 정보 조회 함수
        this.myInfoSearch = function ()
        {
        	var strSvcId = "search";
        	var strSvcUrl = "svc::selectMemberInfo.do";
        	var inData = "input1=ds_search";
        	var outData = "my_info=output1";
        	var strArg = "";
        	var callBackFnc = "fnCallback";
        	var isAsync = true;

        	this.transaction(strSvcId ,
        		strSvcUrl ,
        		inData ,
        		outData ,
        		strArg ,
        		callBackFnc ,
        		isAsync);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sample05_onload,this);
        };
        this.loadIncludeScript("myCareer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
