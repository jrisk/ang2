System.register(['./mock_plans'], function(exports_1) {
    var mock_plans_1;
    var PlanService;
    return {
        setters:[
            function (mock_plans_1_1) {
                mock_plans_1 = mock_plans_1_1;
            }],
        execute: function() {
            ;
            PlanService = (function () {
                function PlanService() {
                }
                PlanService.prototype.getPlans = function () {
                    return Promise.resolve(mock_plans_1.PLANS);
                };
                PlanService.prototype.getPlan = function (id) {
                    return Promise.resolve(mock_plans_1.PLANS).then(function (plans) { return plans.filter(function (plan) { return plan.id === id; })[0]; });
                };
                return PlanService;
            })();
            exports_1("PlanService", PlanService);
        }
    }
});
//# sourceMappingURL=plan.service.js.map