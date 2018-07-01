/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/app.js":
/*!****************************!*\
  !*** ./application/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_CatalogueController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/CatalogueController */ "./application/controllers/CatalogueController.js");
/* harmony import */ var _controllers_PhoneController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/PhoneController */ "./application/controllers/PhoneController.js");
/* harmony import */ var _controllers_CartController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/CartController */ "./application/controllers/CartController.js");
/* harmony import */ var _services_CartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/CartService */ "./application/services/CartService.js");
/* harmony import */ var _services_PhoneService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/PhoneService */ "./application/services/PhoneService.js");


//====================CONTROLLERS===========================//




//====================SERVICES==============================//



angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , _controllers_CartController__WEBPACK_IMPORTED_MODULE_2__["default"]]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  , _services_CartService__WEBPACK_IMPORTED_MODULE_3__["default"]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , _services_PhoneService__WEBPACK_IMPORTED_MODULE_4__["default"]);

let app = angular.module('PhoneApplication',[
    'ngRoute',
    'PhoneApplication.controllers',
    'PhoneApplication.services'
]);



app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , 'PhoneService' , _controllers_CatalogueController__WEBPACK_IMPORTED_MODULE_0__["default"] ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$routeParams' , 'CartService' , 'PhoneService' , _controllers_PhoneController__WEBPACK_IMPORTED_MODULE_1__["default"]],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();

/***/ }),

/***/ "./application/controllers/CartController.js":
/*!***************************************************!*\
  !*** ./application/controllers/CartController.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartController; });


class CartController{

    constructor( $scope , CartService ){

        $scope.cart = CartService.getCart();

        $scope.RemoveItem = function ( index ){
            CartService.removePhone( index );
        };

    }

};

/***/ }),

/***/ "./application/controllers/CatalogueController.js":
/*!********************************************************!*\
  !*** ./application/controllers/CatalogueController.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogueController; });


class CatalogueController{

    constructor( $scope , PhoneService){


        PhoneService.getPhones(`phones/phones.json`)
            .then( phones => {
                console.log('phones' , phones);
                $scope.phones = phones;
                $scope.$apply();

            } )
            .catch( error => {
                console.log("EXCEPTION: " , error)
            } )


    }//constructor

}

/***/ }),

/***/ "./application/controllers/PhoneController.js":
/*!****************************************************!*\
  !*** ./application/controllers/PhoneController.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneController; });


class PhoneController{

    constructor($scope, $routeParams , CartService , PhoneService){

        let id = $routeParams.phoneID;

        $scope.addPhoneToCart = function ( phone ){
            CartService.addPhone( phone );
        };

        PhoneService.getSinglePhone(`phones/${id}.json`)
            .then(
                phone => {
                    $scope.phone = phone;
                    $scope.thumbnail = phone.images[0];
                    $scope.$apply();
                }
            )
            .catch( error => {
                console.log('error' , error);
            } );

        $scope.setThumbnail = this._setThumbnail.bind( this, $scope );

    }

    _setThumbnail($scope , photo ){

        $scope.thumbnail = photo;

    }//_setThumbnail

}

/***/ }),

/***/ "./application/services/CartService.js":
/*!*********************************************!*\
  !*** ./application/services/CartService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CartService; });



class CartService{

    constructor(  ){

       this.cart = [];

    }

    getCart(){
        return this.cart;
    }

    addPhone( phone ){

        let exists = this.cart.some( p => {
            return p.id === phone.id;
        } );

        if(!exists){
            this.cart.push( this._getSimplePhone( phone ) );
        }//if
        else{

            for ( let i = 0 ; i < this.cart.length ;  i++ ){

                let p = this.cart[i];

                if(p.id === phone.id){

                    p.amount++;

                    break;

                }//if

            }//for i

        }//else

    }

    _getSimplePhone( phone ){

        return {
            'id' : phone.id,
            'amount' : phone.amount || 1,
            'name' : phone.name,
        };

    }

    removePhone( index ){

        this.cart.splice( index , 1 );
    }

}


/***/ }),

/***/ "./application/services/PhoneService.js":
/*!**********************************************!*\
  !*** ./application/services/PhoneService.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneService; });


class PhoneService{

    constructor( $http ){

        this.$http = $http;

    }

    async getPhones( url ){

        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return [];

        }//catch
    }

    async getSinglePhone( url ){


        try{
            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPhones" , ex);
            return null;

        }//catch

    }

}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map