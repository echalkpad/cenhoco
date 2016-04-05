import {Component, View, Input, NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf} from 'angular2/angular2';
import {item} from 'content/item/item';
import {widget} from 'content/widget/widget';
import {chartwidgetcontainer} from 'content/widget/widgetTypes/chartwidgetcontainer';
import {colorpickerwidgetcontainer} from 'content/widget/widgetTypes/colorpickerwidgetcontainer';
import {framewidgetcontainer} from 'content/widget/widgetTypes/framewidgetcontainer';
import {groupwidgetcontainer} from 'content/widget/widgetTypes/groupwidgetcontainer';
import {imagewidgetcontainer} from 'content/widget/widgetTypes/imagewidgetcontainer';
import {listwidgetcontainer} from 'content/widget/widgetTypes/listwidgetcontainer';
import {selectionwidgetcontainer} from 'content/widget/widgetTypes/selectionwidgetcontainer';
import {setpointwidgetcontainer} from 'content/widget/widgetTypes/setpointwidgetcontainer';
import {sliderwidgetcontainer} from 'content/widget/widgetTypes/sliderwidgetcontainer';
import {switchwidgetcontainer} from 'content/widget/widgetTypes/switchwidgetcontainer';
import {textwidgetcontainer} from 'content/widget/widgetTypes/textwidgetcontainer';
import {videowidgetcontainer} from 'content/widget/widgetTypes/videowidgetcontainer';
import {webviewwidgetcontainer} from 'content/widget/widgetTypes/webviewwidgetcontainer';

@Component({
    selector: 'widgetcontainer'
})
@View({
    directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, NgIf, chartwidgetcontainer, colorpickerwidgetcontainer, framewidgetcontainer,
                 groupwidgetcontainer, imagewidgetcontainer, listwidgetcontainer, selectionwidgetcontainer, setpointwidgetcontainer,
                 switchwidgetcontainer, textwidgetcontainer, videowidgetcontainer, webviewwidgetcontainer, sliderwidgetcontainer,
                 widgetcontainer],

        //directives : [ng.core.forwardRef(function() { return widgetcontainer; })]

    templateUrl: './scripts/modules/content/widget/widgetcontainer.html'
})
export class widgetcontainer {

    //public widgethtml: widget;

    //constructor() { };

    @Input() widgettyper: widget;
    //public widgetList: Array<widget>;

    //constructor() {
    //    console.log('widgetContainer Contstructor');
    //    this.widgetList = new Array<widget>();
    //    if (this.widgettyper.widgetSubList) {
    //        this.widgetList = this.widgettyper.widgetSubList
    //    }
    //}
}
