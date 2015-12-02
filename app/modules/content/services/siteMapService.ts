/// <reference path="../../../typings/jquery/jquery.d.ts" /> 

import {SiteMap} from 'content/home/SiteMap';
import {OpenhabAdapterService} from 'openhabAdapter/OpenhabAdapterService';
//import {DataContainer} from 'DataContainer';

export class siteMapService {

    public OpenhabAdapter: OpenhabAdapterService;
    //public config;
      
    constructor() {
        this.OpenhabAdapter = new OpenhabAdapterService();
        //this.config = DataContainer.Config;
    }

    public getSiteMaps(url: string, successCallBack, errorCallBack) {
        console.log('getSiteMaps url value: ' + url);
        var self = this;
        $.ajax({
            //url: 'http://localhost:8080/rest/sitemaps',
            url: url,
            headers: { 'Accept': 'application/json' },
            //accepts: 'application/json',
            success: function (data, textStatus, jqXHR) {
                self.extractSiteMaps(data, textStatus, jqXHR, successCallBack, errorCallBack)
            },
            error: errorCallBack
        });
    }

    public extractSiteMaps(data: any, textStatus: string, jqXHR, successCallBack, errorCallBack) {
        var siteMapList: SiteMap[];
        if (!data || (!data.sitemap && !data.sitemaps)) {
            errorCallBack(jqXHR, 'parserError', 'Sitemap data was empty');
            //this.config.siteMap = 'No sitemap data found';
            return;
        }

        if (data.sitemap) {
            var siteMap = new SiteMap();
            siteMap.Label = data.sitemap.label;
            siteMap.Name = data.sitemap.name;
            siteMap.Url = data.sitemap.link;
            siteMapList = [siteMap];
            console.log('single sitemap with label: ' + siteMap.Label);
            successCallBack(siteMapList);
            return;
        }

        if (!data.sitemaps.length || (data.sitemaps.length < 1)) {
            errorCallBack(jqXHR, 'parserError', 'Sitemap collection was empty');
            //this.config.siteMap = 'No sitemaps found';
            return;
        }

        console.log('number of sitemaps: ' + data.sitemaps.length);
        siteMapList = [];
        for (var openHabSiteMap in data.sitemaps) {
            var siteMap = new SiteMap();
            siteMap.Label = openHabSiteMap.label;
            siteMap.Name = openHabSiteMap.name;
            siteMap.Url = openHabSiteMap.link; 
            siteMapList.push(siteMap);
            console.log('sitemap pushed onto List with label: ' + siteMap.Label);
        }
        console.log('sitemap list formed with length: ' + siteMapList.length);
        successCallBack(siteMapList);
        return;
    }

    //public getState() {
    //var request = $.ajax
    //    ({
    //        type: "GET",
    //        url: "http://localhost:8080/rest/sitemaps"
    //    });

    //request.done(function (data) {
    //    console.log("Success: Status=" + data);
    //});

    //request.fail(function (jqXHR, textStatus) {
    //    console.log("Failure: " + textStatus);
    //});
}

