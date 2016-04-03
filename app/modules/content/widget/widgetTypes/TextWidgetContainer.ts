import {Component, View, Input} from 'angular2/angular2';
//import {Component, View, Input, Inject, forwardRef} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';
import {widgetcontainer} from 'content/widget/widgetcontainer';

@Component({
    selector: 'textwidgetcontainer'
})
@View({
    directives: [],
    //directives: [Inject, forwardRef, widgetcontainer],
    templateUrl: './scripts/modules/content/widget/widgetTypes/textwidgetcontainer.html'
})
export class textwidgetcontainer {

    @Input() widgetlocal: widget;

    //constructor( @Inject(forwardRef(() => widgetcontainer)) private _parent: widgetcontainer) { }

}
