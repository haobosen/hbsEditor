;(function(){
function hbsEditor() {}

hbsEditor.prototype = {
    init: function (editorID) {
        // this.editorCreate(editorID);
        this.editorInit();
        this.editorSize(editorID);
        this.editorFun();
    },
    editorConfig: function(){
        return {
            'bold':{
                type:'bold',
                img:'./img/bold.png',
                value:''
            }
        }
    },
    editorCreate: function(editorID){
        //最外层div
        var editor_main = document.createElement('div');
        editor_main.className = 'hbs_editor_main';

        //工具栏div
        var editor_toolbar = document.createElement('div');
        editor_toolbar.className = 'hbs_toolbar';

        //编辑区div
        var hbs_edit_container = document.createElement('div');
        hbs_edit_container.className = 'hbs_edit_container';

        //实际编辑区
        var editarea = document.createElement('div');
        editarea.className = 'editarea';
        editarea.contentEditable = 'true';

        //用户自定义编辑器区域
        var hbs_editor = document.getElementById(editorID);
        hbs_editor.appendChild(editor_main);
        editor_main.appendChild(editor_toolbar);
        editor_main.appendChild(hbs_edit_container);

        // 功能



    },
    editorSize: function(editorID){
        console.log(this.editorConfig()['bold'])
        //尺寸初始化
        var user_custom_editor_area_height = document.getElementById(editorID).offsetHeight; //editor为外部传入
        var toolbar_height = document.getElementsByClassName('hbs_toolbar')[0].offsetHeight;
        document.getElementsByClassName('hbs_edit_container')[0].style.height = user_custom_editor_area_height - toolbar_height + "px";
        document.getElementsByClassName('editarea')[0].style.minHeight = user_custom_editor_area_height - toolbar_height + "px";
    },
    editorFun: function () {
        //功能
        var fun_btn = document.getElementsByClassName('toolbar_btn');
        for(var i = 0; i < fun_btn.length; i++){
            fun_btn[i].onclick = function(){
                document.execCommand(this.getAttribute('data-funname'), false, this.getAttribute('data-value'))
            }
        }



        // var bold = document.getElementsByClassName('hbs_bold')[0];
        // bold.onclick = function () {
        //     var bold = document.execCommand('bold', false, null);
        //     console.log(bold);
        // }
    },
    editorContent: function(){

    },
    editorInit: function(){

        

        document.getElementById('btn').onclick = function(){
            console.log(document.getElementsByClassName('editarea')[0].innerHTML);
            // console.log(document.getElementById('textareaeditor').value)
        }
    }

}
window.hbsEditor = new hbsEditor();
})();



