import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {item} from 'content/item/item';
//import {itemService} from 'content/services/itemService';
//import {widgetService} from 'content/services/widgetService';
import {openhabAdapterService} from 'content/services/openhabAdapterService';
import {page} from 'content/page/page';
import {DataContainer} from 'DataContainer';
import {widget} from 'content/widget/widget';
import {widgetcontainer} from 'content/widget/widgetcontainer';

@Component({
    selector: 'home',
    bindings: [openhabAdapterService]
    //bindings: []
})
@View({
    directives: [NgFor, widgetcontainer],
    templateUrl: './scripts/modules/content/home/home.html'
})
export class home {

    public Page: page; // when to set this.Page to page?
    public widgetList: Array<widget>;

    //itemList: Array<item>;
    constructor(openhabAdapterServiceHome: openhabAdapterService) {        // <- is not called! probably need an on page load function to call getPage
        console.log('home constructor called');
        this.setPage(new page(null));         
        //this.Page = DataContainer.Page;
        //console.log('page.title: ' + this.Page.title);   
        //var openhabAdapterServiceHome: openhabAdapterService;
        //openhabAdapterServiceHome = new openhabAdapterService();
        openhabAdapterServiceHome.getPage(DataContainer.ActivePageUrl, (page) => { this.setPage(page) }, "error"); // TODO: set propper errorCallBack
        // TODO: Call openhabAdpterService getPage on current URL
        // how to read out current URL? need to connect this to navigation? or rather to the stack?
        // probably read current top from stack to get URL, maybe make a stack of objects that contain a URL? or just stack of URLs
        // then page contains all data needed to display something
    }

    public setPage(page: page) {
        console.log("setPage");
        this.widgetList = page.widgetList;
        this.Page = page;
        console.log('in Home setPage widgetList: ' + this.widgetList); // widgetList gets "filled" in openhabAdapterService, but widgetService never creates widgets to fill it with
        //console.log("extracted page title = " + this.Page.title);
        for (var i = 0; i < this.widgetList.length; i += 1) {
            console.log('in setPage, widgetId: ' + this.widgetList[i].widgetId);
        } 
    }

}

