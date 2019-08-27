(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/list/list-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListRoutingModule", function() { return ListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list/list.component.ts");
/* harmony import */ var _list_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/products/products.component */ "./src/app/list/list/products/products.component.ts");





var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        children: [
            { path: 'products',
                component: _list_products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"]
            }
        ]
    }
];
var ListRoutingModule = /** @class */ (function () {
    function ListRoutingModule() {
    }
    ListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ListRoutingModule);
    return ListRoutingModule;
}());



/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/list/list-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list/list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _list_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/products/products.component */ "./src/app/list/list/products/products.component.ts");
/* harmony import */ var _shared_services_list_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/list.service */ "./src/app/shared/services/list.service.ts");








var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _list_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _list_routing_module__WEBPACK_IMPORTED_MODULE_3__["ListRoutingModule"]
            ],
            providers: [_shared_services_list_service__WEBPACK_IMPORTED_MODULE_7__["ListService"]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/list/list/list.component.css":
/*!**********************************************!*\
  !*** ./src/app/list/list/list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/list/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div style=\"text-align: center;\">\n        <div class=\"form-group\">\n          <label>Brand Name: </label>\n          <select class=\"form-control\" [ngModel]=\"selected\" (ngModelChange)=\"onSelect($event)\">\n            <option value=\"0\">--Select--</option>\n            <option *ngFor=\"let bn of data\" [ngValue]=\"bn\">{{bn.BrandName}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label>Brand Products: </label>\n          <select class=\"form-control\" [ngModel]=\"selected1\" (ngModelChange)=\"onSelect1($event)\">\n            <option value=\"0\">--Select--</option>\n            <option *ngFor=\"let one of selected.BrandProducts\" [ngValue]=\"one\">{{one.ProductType}}</option>\n          </select>\n        </div>\n\n        <ng-container *ngFor=\"let item of new_Array\">\n            <label class=\"btn btn-filter\">\n              <input type=\"checkbox\" [value]=\"item\" \n                (change)=\"checked($event)\">{{ item }}\n                </label>\n                </ng-container>\n\n            <div>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"feedback()\">Feedback</button>\n            </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/list/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/list/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/list.service */ "./src/app/shared/services/list.service.ts");




var ListComponent = /** @class */ (function () {
    function ListComponent(router, listservice) {
        var _this = this;
        this.router = router;
        this.listservice = listservice;
        this.selected = {
            BrandProducts: []
        };
        this.selected1 = [];
        this.data = [
            {
                BrandName: "LG",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'LGTV001',
                        ModelName: 'LGultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'LGTV002',
                        ModelName: 'LGultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'LGF001',
                        ModelName: 'LG1doubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'LGF002',
                        ModelName: 'LGdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'LGM001',
                        ModelName: 'LGsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'LGM002',
                        ModelName: 'LGsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "SAMSUNG",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'SMNG001',
                        ModelName: 'SMNGultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'SMNG002',
                        ModelName: 'SMNGultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'SMNG001',
                        ModelName: 'SMNGdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'SMNG002',
                        ModelName: 'SMNGdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'SMNG001',
                        ModelName: 'SMNGsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'SMNG002',
                        ModelName: 'SMNGsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "SONY",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'SONY001',
                        ModelName: 'SONYultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'SONY002',
                        ModelName: 'SONYultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'SONY001',
                        ModelName: 'SONYdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'SONY002',
                        ModelName: 'SONYdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'SONY001',
                        ModelName: 'SONYsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'SONY002',
                        ModelName: 'SONYsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "HAIER",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'HAIER001',
                        ModelName: 'HAIERultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'HAIER002',
                        ModelName: 'HAIERultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'HAIER001',
                        ModelName: 'HAIERdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'HAIER002',
                        ModelName: 'HAIERdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'HAIER001',
                        ModelName: 'HAIERsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'HAIER002',
                        ModelName: 'HAIERsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "PANASONIC",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'PANASONICO001',
                        ModelName: 'PANASONICultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'PANASONIC002',
                        ModelName: 'PANASONICultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'HAIER001',
                        ModelName: 'HAIERdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'PANASONIC002',
                        ModelName: 'PANASONICdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'PANASONIC001',
                        ModelName: 'PANASONICsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'PANASONIC002',
                        ModelName: 'PANASONICsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "TOSHIBA",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'TOSHIBAO001',
                        ModelName: 'TOSHIBAultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'TOSHIBA002',
                        ModelName: 'TOSHIBAultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'TOSHIBA001',
                        ModelName: 'TOSHIBAdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'TOSHIBA002',
                        ModelName: 'TOSHIBAdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'TOSHIBA001',
                        ModelName: 'TOSHIBAsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'TOSHIBA002',
                        ModelName: 'TOSHIBAsmartmobile2'
                    }
                ]
            },
            {
                BrandName: "MI",
                BrandProducts: [
                    {
                        ProductType: 'TV',
                        ModelNumber: 'MIO001',
                        ModelName: 'MIultraslim1'
                    },
                    {
                        ProductType: 'TV',
                        ModelNumber: 'MI002',
                        ModelName: 'MIultraslim2'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'MI001',
                        ModelName: 'MIdoubledoor1'
                    },
                    {
                        ProductType: 'Fridge',
                        ModelNumber: 'MI002',
                        ModelName: 'MIdoubledoor2'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'MI001',
                        ModelName: 'MIsmartmobile1'
                    },
                    {
                        ProductType: 'Mobile',
                        ModelNumber: 'MI002',
                        ModelName: 'MIsmartmobile2'
                    }
                ]
            }
        ];
        this.new_Array = [];
        this.new_Array1 = [];
        this.subscription = this.listservice.currentid.subscribe(function (message) { _this.message = message; });
    }
    ListComponent.prototype.ngOnInit = function () {
        this.remove();
    };
    ListComponent.prototype.onSelect = function (value) {
        this.selected = value;
        this.selected1 = '';
    };
    ListComponent.prototype.onSelect1 = function (value) {
        this.selected1 = value;
        this.listservice.userid.next(value);
        this.router.navigate(['/list/products'], { queryParams: { 'BrandName': this.selected.BrandName, 'ProductType': this.selected1.ProductType } });
    };
    ListComponent.prototype.checked = function (event) {
        console.log(event.target.checked);
        if (event.target.checked) {
            this.selected = '';
            this.selected1 = '';
            this.extract(event.target.value);
            this.listservice.userid.next(this.new_Array1);
            this.router.navigate(['/list/products'], { queryParams: { 'ProductType': event.target.value } });
        }
        else {
            this.new_Array1 = [];
            this.extract(event.target.value);
            this.listservice.userid.next(this.new_Array1);
            this.router.navigate(['/list/products'], { queryParams: { 'ProductType': event.target.value } });
        }
    };
    ListComponent.prototype.remove = function () {
        for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i].BrandProducts.length; j++) {
                if (this.new_Array.indexOf(this.data[i].BrandProducts[j].ProductType) === -1) {
                    this.new_Array.push(this.data[i].BrandProducts[j].ProductType);
                }
            }
        }
    };
    ListComponent.prototype.extract = function (value) {
        // this.new_Array1 = [];
        for (var i = 0; i < this.data.length; i++) {
            for (var j = 0; j < this.data[i].BrandProducts.length; j++) {
                if (this.data[i].BrandProducts[j].ProductType == value) {
                    this.new_Array1.push(this.data[i].BrandProducts[j]);
                }
            }
        }
    };
    ListComponent.prototype.feedback = function () {
        this.router.navigate(["/feedback"]);
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list/list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/list/list/products/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/list/list/products/products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/list/list/products/products.component.html":
/*!************************************************************!*\
  !*** ./src/app/list/list/products/products.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-lg-6\">\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Model Name</th>\n            <th>Model Number</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of data1\">\n            <td>{{item.ModelName}}</td>\n            <td>{{item.ModelNumber}}</td>\n          </tr>\n        </tbody>\n      </table>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/list/list/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list/list/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/list.service */ "./src/app/shared/services/list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(listService, router) {
        var _this = this;
        this.listService = listService;
        this.router = router;
        this.data1 = [];
        this.subscription = this.listService.currentid.subscribe(function (data) {
            if (data) {
                if (data.constructor.name === "Object") {
                    _this.data1.push(data);
                }
                else {
                    _this.data1 = data;
                }
            }
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/list/list/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/list/list/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/list.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/list.service.ts ***!
  \*************************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ListService = /** @class */ (function () {
    function ListService() {
        this.userid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentid = this.userid.asObservable();
    }
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListService);
    return ListService;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map