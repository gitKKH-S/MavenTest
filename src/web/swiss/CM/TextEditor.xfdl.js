(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RichTextEditorMain");
            this.set_titletext("New Form");
            this.getSetter("classname").set("RichTextEditorSample");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_images", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"selected\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selected\">Y</Col><Col id=\"filename\">birthday.jpg</Col><Col id=\"savefilename\">birthday.jpg</Col><Col id=\"filesize\">14168</Col></Row><Row><Col id=\"filename\">ChristmasTree.jpg</Col><Col id=\"savefilename\">ChristmasTree.jpg</Col><Col id=\"filesize\">12215</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_files", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_reversesubsum("false");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"fileimg\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filetype\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"tranfilesize\" type=\"INT\" size=\"256\"/><Column id=\"prog\" type=\"INT\" size=\"256\"/><Column id=\"rmimg\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/><Column id=\"filekey\" type=\"STRING\" size=\"256\"/><Column id=\"downcnt\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upload", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delFiles", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_async("false");
            obj.set_url("CM::TextEditorBase.xfdl");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","CM::TextEditorBase.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TextEditor.xfdl","lib::lib_base.xjs");
        this.registerScript("TextEditor.xfdl", function() {
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;

        this.RichTextEditorSample_onload = function(obj, e)
        {
        	var userConfig = {
        		editor : {
        			loadCallback : this.onloadEditor,
        			resizeCallback : this.onresizeEditor
        		},
        		image : {
        			loadCallback : this.onloadImage,
        			removeCallback : this.onremoveImage
        		}
        	};
        	this.div_editor.form.initialize(userConfig, obj);
        }

        // editor loading 이 완료되었을 때
        this.onloadEditor = function(obj)
        {
            // obj 는 this.div_editor 임.
        }

        // editor resize 가 발생할 때
        this.onresizeEditor = function(obj, e)
        {
        	// obj 는 this.div_editor 이고 e 는 nexacro.SizeEventInfo 임.
        }

        // editor image (up/down) loading 이 완료되었을 때
        this.onloadImage = function(type, errorcode, errormsg, dataset)
        {
        	// - upload 는 본문에 이미지가 추가될 때 마다 실시간으로 서버에 저장된 후 호출됨.
        	// - dataset 은 실제 업로드된 파일 정보를 담은 Dataset reference
        	if ( type == "upload" )
        	{
        		var row = -1;
        		var cnt = dataset.rowcount;
        		this.ds_images.set_enableevent(false);
        		for (var i=0; i<cnt; i++)
        		{
        			row = this.ds_images.addRow();
        			this.ds_images.setColumn(row, "filename", dataset.getColumn(i, "filename"));
        			this.ds_images.setColumn(row, "savefilename", dataset.getColumn(i, "savefilename"));
        			this.ds_images.setColumn(row, "filesize", dataset.getColumn(i, "filesize"));
        		}
        		this.ds_images.set_enableevent(true);
        	}
        }

        // editor image 삭제가 완료되었을 때
        this.onremoveImage = function(errorcode, errormsg, dataset)
        {
        	// - 실제 서버에서 삭제된 후 호출됨.
        	// - dataset 은 삭제한 파일 정보를 담은 Dataset reference
        	var row = -1;
        	var cnt = dataset.rowcount;
        	this.ds_images.set_enableevent(false);
        	for (var i=0; i<cnt; i++)
        	{
        		row = this.ds_images.findRow("savefilename", dataset.getColumn(i, "savefilename"));
        		if ( row > -1 )
        		{
        			this.ds_images.deleteRow(row);
        		}
        	}
        	this.ds_images.set_enableevent(true);
        }

        this.btn_naver_onclick = function(obj,e)
        {
        	var domain = document.location.href;
            var arrdomain = domain.split('/');
            var currentfile = arrdomain.pop();
            domain = domain.replace(currentfile, "naver.com")
            this.WebBrowser00.set_url(domain);
        };

        // 내용부분 전달
        this.getContentTxt = function(){
        	return this.div_editor.form.getContent();
        }

        // 내용부분 컨텐츠 지정
        this.setContentTxt = function(content){
        	this.div_editor.form.setContent(content);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorSample_onload,this);
        };

        this.loadIncludeScript("TextEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
