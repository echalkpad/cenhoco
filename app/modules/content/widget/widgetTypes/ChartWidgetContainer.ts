import {Component, View, Input} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';

@Component({
    selector: 'chartwidgetcontainer'
})
@View({
    directives: [],
    templateUrl: './scripts/modules/content/widget/widgetTypes/ChartWidgetContainer.html'
    //template: 'bla'
})
export class chartwidgetcontainer {

    @Input() widgetlocal: widget;

}
