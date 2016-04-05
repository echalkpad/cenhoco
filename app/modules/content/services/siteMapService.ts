/// <reference path="../../../typings/jquery/jquery.d.ts" /> 

import {SiteMap} from 'content/home/SiteMap';

export class siteMapService {

    public getSiteMaps(url: string, successCallBack, errorCallBack) {
        console.log('siteMapService getSiteMaps url value: ' + url);
        var self = this;
        $.ajax({
            //url: 'http://localhost:8080/rest/sitemaps',
            url: url,
            headers: { 'Accept': 'application/json' },
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
            return;
        }

        if (data.sitemap) {
            var siteMap = new SiteMap();
            siteMap.Label = data.sitemap.label;
            siteMap.Name = data.sitemap.name;
            if (!data.sitemap.homepage || !data.sitemap.homepage.link) {
                errorCallBack(jqXHR, 'parserError', 'homepage data was empty');
                return;
            }
            siteMap.Url = data.sitemap.homepage.link;
            siteMapList = [siteMap];
            console.log('single sitemap with label: ' + siteMap.Label);
            successCallBack(siteMapList);
            return;
        }

        if (!data.sitemaps.length || (data.sitemaps.length < 1)) {
            errorCallBack(jqXHR, 'parserError', 'Sitemap collection was empty');
            return;
        }

        console.log('number of sitemaps: ' + data.sitemaps.length);
        siteMapList = [];
        for (var i = 0; i < data.sitemaps.length; i += 1) {
        //for (var openHabSiteMap in data.sitemaps) {
            var siteMap = new SiteMap();
            siteMap.Label = data.sitemaps[i].label;
            siteMap.Name = data.sitemaps[i].name;
            siteMap.Url = data.sitemaps[i].link; 
            siteMapList.push(siteMap);
            //console.log('sitemap pushed onto List with label: ' + siteMap.Label);
        }
        console.log('sitemap list formed with length: ' + siteMapList.length);
        successCallBack(siteMapList);
        return;
    }

    public getSiteMap(name: string, url: string, successCallBack, errorCallBack) {
        var self = this;
        $.ajax({
            url: url,
            headers: { 'Accept': 'application/json' },
            success: function (data, textStatus, jqXHR) {
                var siteMap = self.setSingleSiteMap(data);
                successCallBack(siteMap);
            },
            error: errorCallBack
        });
        return;
    }

    public setSingleSiteMap(data: any): SiteMap {
        var siteMap = new SiteMap();
        siteMap.Label = data.sitemap.label;
        siteMap.Name = data.sitemap.name;
        if (!data.sitemap.homepage || !data.sitemap.homepage.link) {
            //errorCallBack(jqXHR, 'parserError', 'homepage data was empty');
            return;
        }
        siteMap.Url = data.sitemap.homepage.link;
        //console.log('single sitemap with label: ' + siteMap.Label);        
        return siteMap;
    }

}

