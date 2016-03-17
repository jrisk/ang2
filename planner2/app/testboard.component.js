System.register(['angular2/core', './new_plan.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_plan_service_1;
    var TestBoard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_plan_service_1_1) {
                new_plan_service_1 = new_plan_service_1_1;
            }],
        execute: function() {
            TestBoard = (function () {
                function TestBoard(_newPlanService) {
                    this._newPlanService = _newPlanService;
                    this.dateArr = [];
                }
                TestBoard.prototype.newDetails = function (newplan) {
                    this.newplan = newplan;
                };
                TestBoard.prototype.ngOnInit = function () {
                    var _this = this;
                    Promise.resolve(this._newPlanService.getNewPlans())
                        .then(function (newplans) { return _this.newplans = newplans; }).then(function (data) { return console.log(data); });
                    var newArr = [];
                    /*var newMap = this._newPlanService.getNewPlans().map(
                        (source, i) => {
                            console.log(source);
                            console.log(i);
                            if (newArr.indexOf(source[i].start) == -1) {
                                newArr.push(source[i].start);
                            }
                            else {
                                console.log('got the else');
                            }
                            console.log(newArr);
                        });
            
                    newMap.forEach(function(something) {
                        console.log(something);
                    },
                        function(hmm) {
                            console.log(hmm);
                        });*/
                    var invalid = 0;
                    var filterMap = this._newPlanService.getNewPlans().filter(function (item) {
                        return item[2].start.valueOf(); //obs.indexOf(item[ind].start == -1);
                    });
                    filterMap.subscribe(function (why) { console.log('next on filter: %s', why.start); }, function (err) { console.log('err: ', err); }, function () { console.log('completed on filter'); });
                    /*newMap.subscribe(
                        (x) => { console.log('next: %s', x); },
                        (err) => { console.log('error: %s ',  err); },
                        () => { console.log('on completed...'); }
                    )*/
                };
                TestBoard = __decorate([
                    core_1.Component({
                        selector: 'test',
                        templateUrl: 'app/public/views/testboard.component.html',
                        inputs: ['newplan']
                    }), 
                    __metadata('design:paramtypes', [new_plan_service_1.NewPlanService])
                ], TestBoard);
                return TestBoard;
            })();
            exports_1("TestBoard", TestBoard);
        }
    }
});
//# sourceMappingURL=testboard.component.js.map