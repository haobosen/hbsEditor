;(function(){
function hbsEditor() {}

hbsEditor.prototype = {
    init: function (editorID) {
        this.editorSize(editorID);
        this.editorFun();
    },
    editorSize: function(editorID){
        //尺寸初始化
        var user_custom_editor_area_height = document.getElementById(editorID).offsetHeight; //editor为外部传入
        var toolbar_height = document.getElementsByClassName('hbs_toolbar')[0].offsetHeight;
        document.getElementsByClassName('hbs_edit_container')[0].style.height = user_custom_editor_area_height - toolbar_height + "px";
    },
    editorFun: function () {
        //功能
        var bold = document.getElementsByClassName('hbs_bold')[0];
        var italic = document.getElementsByClassName('hbs_italic')[0];
        var fontsize = document.getElementsByClassName('hbs_fontsize')[0];
        bold.onclick = function () {
            var bold = document.execCommand('bold', false, null);
            console.log(bold);
        }

        italic.onclick = function () {
            var italic = document.execCommand('italic', false, null);
            console.log(italic);
        }

        fontsize.onclick = function () {
            var fontsize = document.execCommand('FontSize', false, "100");
            console.log(fontsize);
        }
    }

}
window.hbsEditor = new hbsEditor();
})();



