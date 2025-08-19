//XJS=utl_modal.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*
        	모달 호출
        */
        this.callModal = function(insWidth,insHeight,callFile,rtnService,outMsg){
        	//alert("insWidth="+insWidth+", insHeight="+insHeight+", callFile="+callFile+", rtnSErvice="+rtnService+",outMsg="+outMsg);

        	var objChildFrame = new ChildFrame();

            objChildFrame.init(rtnService
                              , 0
                              , 0
                              , 0
                              , 0
                              , null
                              , null
                              , callFile);

            objChildFrame.set_dragmovetype("none");
            objChildFrame.set_openalign("center middle");
            objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

            var objParam = {param1:insWidth,param2:insHeight,param3:outMsg};

            objChildFrame.showModal(this.getOwnerFrame()
                                  , objParam
                                  , this
                                  , "fnCallback");
        }

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
