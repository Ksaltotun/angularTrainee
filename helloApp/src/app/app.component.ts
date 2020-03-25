import { Component} from '@angular/core';
        
@Component({
    selector: 'my-app',
    template: `<div [class]="red"></div>`,
    styles: [`
        div {width:50px; height:50px; border:1px solid #ccc}
         .isredbox{background-color:red;}
    `]
})
export class AppComponent{ 
      
    red = "isredbox"
}