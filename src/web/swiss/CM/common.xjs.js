//XJS=common.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*	메뉴선택시 content 높이조절
        *
        */
        this.contentOnload = function(obj,e){
        	var h = this.vscrollbar.max;
        	h += this.vscrollbar.view;

        	/*	해더, 푸터 고정
        	__content.set_height(h+"");
        	__content.parent.resetScroll();
        	//*/

        	//*	해더, 푸티 고정 x
        	__content.parent.parent.set_height(h + 2);;
        	__content.set_height(h + 1 + "");
        	__content.form.div_nomagin.set_height(h+"");
        	//this.set_height(h  + "");
        	__footer.set_top("div_content:0");
        	__footer.parent.resetScroll();
        	//*/
        	__content.form.div_nomagin.set_formscrolltype("none");
        }

        this.addEventHandler("onload", this.contentOnload, this);

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
