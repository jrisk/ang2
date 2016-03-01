System.register(['angular2/platform/browser', './formapp.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, formapp_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (formapp_component_1_1) {
                formapp_component_1 = formapp_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(formapp_component_1.FormAppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map