System.register(['angular2/core', './grid', './column'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grid_1, column_1;
    var GridHome;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grid_1_1) {
                grid_1 = grid_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            GridHome = (function () {
                function GridHome() {
                    this.people = this.getPeople();
                    this.columns = this.getColumns();
                }
                GridHome.prototype.getPeople = function () {
                    return [
                        { firstName: 'Joe', lastName: 'Jackson', age: 20 },
                        { firstName: 'Peter', lastName: 'Smith', age: 30 },
                        { firstName: 'Jane', lastName: 'Doe', age: 50 },
                        { firstName: 'Tim', lastName: 'Smith', age: 80 }
                    ];
                };
                GridHome.prototype.getColumns = function () {
                    return [
                        new column_1.Column('firstName', 'First Name'),
                        new column_1.Column('lastName', 'Last Name'),
                        new column_1.Column('age', 'Age')
                    ];
                };
                GridHome = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<grid [rows]='people' \n\t\t\t\t\t [columns]='columns'>\n\t\t\t   </grid>",
                        inputs: ['rows: rows', 'columns: columns'],
                        directives: [grid_1.Grid],
                        providers: [grid_1.Grid]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridHome);
                return GridHome;
            })();
            exports_1("GridHome", GridHome);
        }
    }
});
//# sourceMappingURL=gridhome.js.map