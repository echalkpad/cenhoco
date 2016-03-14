
// import {Component} from 'angular2/angular2';
import {widget} from 'content/widget/widget';
import {page} from 'content/page/page';
import {widgetService} from 'content/services/widgetService';

export class openhabAdapterService {

    widgetService: widgetService;

    constructor() {
        this.widgetService = new widgetService();
    }

    public getPage(url: string, successCallBack, errorCallBack) {
        console.log('getPage url value: ' + url);
        var self = this;
        $.ajax({
            //url: 'http://localhost:8080/rest/sitemaps',
            url: url,
            headers: { 'Accept': 'application/json' },
            success: function (data, textStatus, jqXHR) {
               console.log('getPage success');
               self.extractPage(data, textStatus, jqXHR, successCallBack, errorCallBack)
            },
            error: errorCallBack
        });
    }

    public extractPage(data: any, textStatus: string, jqXHR, successCallBack, errorCallBack) {
        var tempPage: page;
        var helpList: Array<widget>;
        helpList = new Array<widget>();

        if (!data || (!data.id && !data.title)) {
            errorCallBack(jqXHR, 'parserError', 'page data was empty');
            console.log('extractPage error - data empty');
            return;
        }

        if (!data.widget && !data.widgets) {
            errorCallBack(jqXHR, 'parserError', 'widget collection was empty');
            console.log('extractPage error - collection empty');
            return;
        }

        tempPage = new page(data);
        
        if (!data.widget.length) {
            console.log('openHabAdapterService - !data.widget.length run');
            tempPage.widgetList = this.widgetService.extractWidgets(data);
        }

        if (data.widget.length < 1) {
            errorCallBack(jqXHR, 'parserError', 'widget data collection was empty');
            console.log('data.widget was empty');
            return;
        }

        if (data.widget.length == 1) { 
            console.log('extractPage - single widget with widget: ' + data.widget + ' and widget type: ' + data.widget[0].type);
            tempPage.widgetList = this.widgetService.extractWidgets(data);
        }
        else {
            var tempList: Array<widget>;
            //console.log('extractPage - many widgets');
            console.log('extractPage - many with widget widget[0] type: ' + data.widget[0].type);
            for (var i = 0; i < data.widget.length; i += 1) {
                tempList = this.widgetService.extractWidgets(data.widget[i]);
                console.log('openhabService listfilling first for loop with i ' + data.widget[i]); // widgetElement is 0 on first run
                for (var i = 0; i < tempList.length; i += 1) { 
                    console.log('pre tempList push onto helpList');
                    //tempPage.widgetList.push(tempList[i]);
                    helpList.push(tempList[i]);
                    console.log('openhabService listfilling second for loop with tempList[' + i + '] ' + tempList[i]);
                }
            }
            console.log('helpList after for-loops: ' + helpList);
            tempPage.widgetList = helpList;
            console.log('tempPage.widgetList after setting it to helpList: ' + tempPage.widgetList);
        }
        console.log('openhabAdapterService extractedPage widgetList: ' + tempPage.widgetList + ' with tempPage.widgetList.length: ' + tempPage.widgetList.length);
        successCallBack(tempPage);
        return;
    }

}