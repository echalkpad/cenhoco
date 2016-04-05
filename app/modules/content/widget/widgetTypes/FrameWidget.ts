import {Component, View, bootstrap} from 'angular2/angular2';
import {widgetService} from 'content/services/widgetService';
import {widget} from 'content/widget/widget';

export class FrameWidget extends widget {

    //public widgetList: widget[];

    constructor(data) {
        //var widgetService = new widgetService();
        super(data);
        //this.widgetList = widgetService.extractWidgets(data);
    }

}