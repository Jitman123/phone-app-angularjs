"use strict";

//====================CONTROLLERS===========================//
import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';
import CartController from './controllers/CartController';

//====================SERVICES==============================//
import CartService from './services/CartService';
import PhoneService from './services/PhoneService';

//====================FILTERS==============================//
import SearchPhonesFilter from './filters/SearchPhonesFilter';

angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);
angular.module('PhoneApplication.filters' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , CartController]
    );


angular.module('PhoneApplication.filters')
    .filter('SearchPhonesFilter' ,  SearchPhonesFilter);

angular.module('PhoneApplication.controllers')
    .controller(
        'ExampleController' ,
        ['$scope' , 'PhoneService' , ( $scope , PhoneService )=>{

            $scope.searchObject = PhoneService.getSearchObject();

        }]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  ,[ 'localStorageService' , CartService ]);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , [ '$http' , PhoneService ]);


let app = angular.module('PhoneApplication',[
    'ngRoute',
    'LocalStorageModule',
    'PhoneApplication.controllers',
    'PhoneApplication.filters',
    'PhoneApplication.services'
]);


app.config( [
    '$routeProvider' ,
    '$locationProvider' ,
    'localStorageServiceProvider' ,
    ($routeProvider , $locationProvider , localStorageServiceProvider)=>{

    $locationProvider.html5Mode(true);

    localStorageServiceProvider.setStorageCookie( 7 , '/' );
    localStorageServiceProvider.setStorageCookieDomain('localhost');

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , 'PhoneService', CatalogueController ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$routeParams' , 'CartService' , 'PhoneService' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();