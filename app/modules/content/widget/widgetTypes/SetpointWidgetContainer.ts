import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'setpointwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/setpointwidgetcontainer.html'
})
export class setpointwidgetcontainer {

    @Input() widgetlocal: widget;

}
