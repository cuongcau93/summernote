import { Component, OnInit } from '@angular/core' 
import { Ng2Summernote } from 'ng2-summernote/ng2-summernote';
import { FormBuilder, FormGroup } from '@angular/forms';
// Jquery declaration
declare var $: any;

@Component({
    templateUrl: 'summernote.component.html',
    styleUrls: ['summernote.component.css']
})

export class SummernoteComponent implements OnInit {

    HelloButton (context) {
        let ui = $.summernote.ui;

        // create button
        let button = ui.button({
            contents: '<i class="fa fa-child"/> Hello',
            tooltip: 'hello',
            click: function () {
                // invoke insertText method with 'hello' on editor module.
                //context.invoke('editor.insertText', 'hello');
                //SHOW MODAL''
                $('#myModal').modal();
            }
        });

        return button.render();   // return button as jquery object
    }

    ngOnInit() {
       // $ init summernote
        //$('#summernote').summernote();
        $('#summernote').summernote({
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'italic', 'underline', 'clear']],
                ['fontname', ['fontname']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['table', ['table']],
                ['insert', ['link', 'picture', 'hr']],
                ['view', ['fullscreen', 'codeview']],
                ['help', ['help']],
                ['mybutton', ['hello']]
            ],

            buttons: {
                hello: this.HelloButton
            }
        });
    }

    

}
