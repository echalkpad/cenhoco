
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
        //console.log('getPage url value: ' + url);
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
        //var helpList: Array<widget>;
        //helpList = new Array<widget>();

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
            console.log('extractPage - many widgets');
            //console.log('!!!!!!!!!!! extractPage - many with widget[0] type: ' + data.widget[0].type + ' and data.widget ' + data.widget); //data.widget[x].type=Frame
            console.log('extract page many widgets with data.widget.length: ' + data.widget.length + ' and data.length: ' + data.length);
            tempList = this.widgetService.extractWidgets(data);

            // TODO: this for-loop has to be integrated better with aboves else-path to work through recursion
            for (var i = 0; i < tempList.length; i += 1) {
                if (!tempList[i].linkedPage) {
                    tempList[i].widgetSubList = this.widgetService.extractWidgets(data.widget[i]);
                    console.log('tempList[' + i + '] extractWidgets result: ' + tempList[i].widgetSubList);
                    console.log('tempList[' + i + '].widgetSubList[0].type: ' + tempList[i].widgetSubList[0].type + ' !!!!!!!');
                }
            }

            //for (var i = 0; i < data.widget.length; i += 1) { 
            //    tempList = this.widgetService.extractWidgets(data.widget[i]); //gets the Group widgets under Frame
            //    for (var i = 0; i < tempList.length; i += 1) {  // changing i to j here for some reason makes it go to even deeper levels  
            //        helpList.push(tempList[i]);  
            //    }
            //}
            //console.log('helpList after for-loops: ' + helpList);
            //tempPage.widgetList = helpList;

            tempPage.widgetList = tempList;
            console.log('tempPage.widgetList after setting it to tempList: ' + tempPage.widgetList);
        }
        console.log('openhabAdapterService extractedPage widgetList: ' + tempPage.widgetList + ' with tempPage.widgetList.length: ' + tempPage.widgetList.length);
        successCallBack(tempPage);
        return;
    }

}