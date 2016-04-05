import {Component, View, Input} from 'angular2/angular2';
//import {Component, View, Input, Inject, forwardRef} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';
//import {widgetcontainer} from 'content/widget/widgetcontainer';

@Component({
    selector: 'groupwidgetcontainer'
})
    @View({
    //directives: [Inject, forwardRef, widgetcontainer],
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/groupwidgetcontainer.html'
})
export class groupwidgetcontainer {

    @Input() widgetlocal: widget;

    //constructor( @Inject(forwardRef(() => widgetcontainer)) private _parent: widgetcontainer) { }

}
