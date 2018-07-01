"use strict";

export default class PhoneService{

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
