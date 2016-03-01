System.register(['./formapp.component', 'angular2/platform/browser'], function(exports_1) {
    var formapp_component_1, browser_1;
    return {
        setters:[
            function (formapp_component_1_1) {
                formapp_component_1 = formapp_component_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(formapp_component_1.FormAppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map