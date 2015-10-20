(function () {
    // "safeHTML"-Polyfill anfügen
    var scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', 'scripts/winstore-jscompat.js');
    //see: https://github.com/systemjs/systemjs/issues/825
    var scriptElem2 = document.createElement('script');
    scriptElem2.setAttribute('src', 'scripts/system-polyfills.js');
    if (document.body) {
        document.body.appendChild(scriptElem);
        document.body.appendChild(scriptElem2);
    } else {
        document.head.appendChild(scriptElem);
        document.head.appendChild(scriptElem2);
    }
}());