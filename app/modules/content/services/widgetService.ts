/// <reference path="../../../typings/jquery/jquery.d.ts" /> 

import {Component} from 'angular2/angular2';
import {DataContainer} from 'DataContainer';
import {widget} from 'content/widget/widget';
import {ChartWidget} from 'content/widget/widgetTypes/ChartWidget';
import {ColorpickerWidget} from 'content/widget/widgetTypes/ColorpickerWidget';
import {FrameWidget} from 'content/widget/widgetTypes/FrameWidget';
import {GroupWidget} from 'content/widget/widgetTypes/GroupWidget';
import {ImageWidget} from 'content/widget/widgetTypes/ImageWidget';
import {ListWidget} from 'content/widget/widgetTypes/ListWidget';
import {SelectionWidget} from 'content/widget/widgetTypes/SelectionWidget';
import {SetpointWidget} from 'content/widget/widgetTypes/SetpointWidget';
import {SliderWidget} from 'content/widget/widgetTypes/SliderWidget';
import {SwitchWidget} from 'content/widget/widgetTypes/SwitchWidget';
import {TextWidget} from 'content/widget/widgetTypes/TextWidget';
import {VideoWidget} from 'content/widget/widgetTypes/VideoWidget';
import {WebviewWidget} from 'content/widget/widgetTypes/WebviewWidget';

@Component({
})
export class widgetService {

    //public widgetList: widget[];

    constructor() {
    }

    // TODO: set successCallBack and errorCallBack functionality

    public extractWidgets(data: any): widget[] {

        console.log('EXTRACT WIDGETS');
        var widgetList: Array<widget>;
        widgetList = new Array<widget>();
        var addWidget: widget;

        if (!data || (!data.widget && !data.widgets)) {
            //errorCallBack(jqXHR, 'parserError', 'Widget data was empty');
            console.log('Widget data was empty');
            return null;
        }

        if (!data.widget.length) {
        //if (!data.length) {
            console.log('single widget getting Typed with data.widget.type: ' + data.widget.type + 'and data.widget ' + data);
            widgetList = [this.getTypedWidget(data.widget)];
            //widgetList = [this.getTypedWidget(data)];
            return widgetList;
        }

        if (data.widget.length < 1) {
        //if (data.length < 1) {
            console.log('data.widget was empty');
            return null;
        }

        if (data.widget.length == 1) {
        //if (data.length == 1) {
            console.log('single widget getting Typed with data.widget[0].type: ' + data.widget[0].type + 'and data.widget ' + data);
            widgetList = [this.getTypedWidget(data.widget[0])];
            //widgetList = [this.getTypedWidget(data[0])];
            return widgetList;
        }
         
            console.log('several widgets getting Typed');
            //for (var widgetElement in data.widget) {
            for (var i = 0; i < data.widget.length; i += 1) {
            //for (var i = 0; i < data.length; i += 1) {
                //console.log('several widgets getting Typed - for loop with i: ' + i);
                //console.log('several widgets getting Typed - for loop with data.widget[i]: ' + data.widget[i] + ' data[i] and type ' + data[i] + ' ' + data[i].type);
                //console.log('several widgets getting Typed - for loop with data.widget[i].label: ' + data[i].label);
                addWidget = this.getTypedWidget(data.widget[i]);
                //addWidget = this.getTypedWidget(data[i]);
                console.log('pre widgetList.push inside several widget Typing loop with widgetList: ' + widgetList);
                widgetList.push(addWidget);
                //console.log('post widgetList.push inside several widget Typing loop');
            }
        
        console.log('getWidgets returned list: ' + widgetList + ' and type of first element: ' + widgetList[0].type + ' and widgetList.length: ' + widgetList.length);
        return widgetList; 
    }

    public getTypedWidget(widgetForType: any) {

        var returnWidget: widget;
        console.log('getTypedWidget called with widget of type: ' + widgetForType.type);
        switch (widgetForType.type) {
            case "Chart":
                returnWidget = new ChartWidget(widgetForType);
                break;
            case "Colorpicker":
                returnWidget = new ColorpickerWidget(widgetForType);
                break;
            case "Frame":
                console.log('FRAME WIDGET ABOUT TO BE CREATED');
                returnWidget = new FrameWidget(widgetForType);
                break;
            case "Group":
                console.log('GROUP WIDGET ABOUT TO BE CREATED');
                returnWidget = new GroupWidget(widgetForType);
                //console.log('GroupWidget created with widgetForType ' + widgetForType + ' and widgetForType.type: ' + widgetForType.type);
                //console.log('GroupWidget created inside getTypedWidget with returnWidget: ' + returnWidget + ' with returnWidget.type: ' + returnWidget.type);
                break;
            case "Image":
                returnWidget = new ImageWidget(widgetForType);
                break;
            case "List":
                returnWidget = new ListWidget(widgetForType);
                break;
            case "Selection":
                returnWidget = new SelectionWidget(widgetForType);
                break;
            case "Setpoin":
                returnWidget = new SetpointWidget(widgetForType);
                break;
            case "Switch":
                returnWidget = new SwitchWidget(widgetForType);
                break;
            case "Text":
                returnWidget = new TextWidget(widgetForType);
                break;
            case "Video":
                returnWidget = new VideoWidget(widgetForType);
                break;
            case "Webview":
                returnWidget = new WebviewWidget(widgetForType);
                break;
        }

        console.log('getTypedWidget return value: ' + returnWidget);
        return returnWidget;

    }

}