System.register(['angular2/platform/browser', './app.component', 'rxjs/add/operator/map', 'rxjs/add/operator/filter'], function(exports_1) {
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map