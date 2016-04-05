import {Component, View, Input, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf, NgFor, Inject, forwardRef} from 'angular2/angular2';
//import {Component, View, Input, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf, NgFor} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';
import {widgetcontainer} from 'content/widget/widgetcontainer';
//import {groupwidgetcontainer} from 'content/widget/widgetTypes/groupwidgetcontainer';
//import {textwidgetcontainer} from 'content/widget/widgetTypes/textwidgetcontainer';

@Component({
    selector: 'framewidgetcontainer'
})
@View({
        //directives: [widgetcontainer],
        //directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf, NgFor, Inject, forwardRef, widgetcontainer],
        directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf, NgFor],
    templateUrl: './scripts/modules/content/widget/widgetTypes/framewidgetcontainer.html'
})
export class framewidgetcontainer {

    //constructor( @Inject(forwardRef(() => widgetcontainer)) private _parent: widgetcontainer) { }

    @Input() widgetlocal: widget;
    
    //public widgetList: Array<widget>;
   
    //constructor() {
    //    this.widgetList = this.widgetlocal.widgetSubList;
    //}

}
