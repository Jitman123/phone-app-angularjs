"use strict";

//====================CONTROLLERS===========================//
import CatalogueController from './controllers/CatalogueController';
import PhoneController from './controllers/PhoneController';
import CartController from './controllers/CartController';

//====================SERVICES==============================//
import CartService from './services/CartService';
import PhoneService from './services/PhoneService';

angular.module('PhoneApplication.controllers' , []);
angular.module('PhoneApplication.services' , []);

angular.module('PhoneApplication.controllers')
    .controller(
        'CartController' ,
        ['$scope' , 'CartService' , CartController]
    );

angular.module('PhoneApplication.services')
    .service( 'CartService'  , CartService);

angular.module('PhoneApplication.services')
    .service( 'PhoneService'  , PhoneService);

let app = angular.module('PhoneApplication',[
    'ngRoute',
    'PhoneApplication.controllers',
    'PhoneApplication.services'
]);



app.config( [ '$routeProvider' , '$locationProvider'  , ($routeProvider , $locationProvider)=>{

    $locationProvider.html5Mode(true);

    $routeProvider.when('/' , {

        templateUrl: 'templates/catalogue.html',
        controller: [  '$scope' , 'PhoneService' , CatalogueController ]

    });

    $routeProvider.when('/single-phone/:phoneID' , {

        controller: [ '$scope', '$routeParams' , 'CartService' , 'PhoneService' , PhoneController],
        templateUrl: 'templates/single-phone.html'

    });

} ] );

app.run();