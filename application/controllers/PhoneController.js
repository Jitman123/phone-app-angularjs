"use strict";

export  default class PhoneController{

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