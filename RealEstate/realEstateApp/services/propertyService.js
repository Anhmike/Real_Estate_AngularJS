/// <reference path="flightService.js" />
(function (app) {

    var property =
                  [  
                      {
                          Id : 1,
                          FirstName: "Jose",
                          LastName: "Vowels",
                          Company: "ACME",
                          JobTitle: "Marine electronics technician",
                          BusinessPhone: "5593346999",
                          HomePhone: "321123654",
                          MobilePhone: "9735465485",
                          FaxNumber: "9785465854",
                          Street: "600 Caisson Hill Road ",
                          City: "Smoky Hill",
                          State: "Texas",
                          Country: "USA",
                          Email: "PamelaJCallaghan@rhyta.com",
                          WebPage: "JesseAIrvine.dayrep.com",
                          Notes: " "                          
                      },
                      {
                           Id : 2,
                           FirstName: "Andrew",
                           LastName: "Mowry",
                           Company: "ACME",
                           JobTitle: "Software Developer",
                           BusinessPhone: "3215468458",
                           HomePhone: "321123654",
                           MobilePhone: "9735465485",
                           FaxNumber: "9785465854",
                           Street: "2104 Melm Street",
                           City: "Providence",
                           State: "rhode island",
                           Country: "USA",
                           Email: "ClydeRPrice@jourrapide.com",
                           WebPage: "ClydeRPrice.jourrapide.com",
                           Notes: " "
                       },
                        {
                            Id: 3,
                            FirstName: "Milton",
                            LastName: "White",
                            Company: "ACME",
                            JobTitle: "Sawing machine tender",
                            BusinessPhone: "3215468458",
                            HomePhone: "321123654",
                            MobilePhone: "9735465485",
                            FaxNumber: "9785465854",
                            Street: "1214 Charles Street",
                            City: "Southfield",
                            State: "Florida",
                            Country: "USA",
                            Email: "JohnGHaines@armyspy.com",
                            WebPage: "FurnishingExperts.com",
                            Notes: " "
                        },
                  ];


    var propertyService = function () {
        var propertyFactory = {};

        propertyFactory.getProperty = function (index) {
            var returnProperty = [];
            if (propertyFactory.isOverflow(index))
            {
                index = 0;
            }
            returnProperty.push(property[index]);
            return returnProperty;
        };

        propertyFactory.isOverflow = function (index){

            return (property.length <= index)
        };

        propertyFactory.addProperty = function (index) {
            var returnProperty = [];
            var newIndex = property.length + 1;
            property.push(propertyFactory.newItem(newIndex));
            returnProperty.push(property[property.length -1]);
            return (returnProperty)
        };

         propertyFactory.deleteProperty = function (index) {
            var returnProperty = [];

            property.splice(index,1);
           if (property.length <= index)
           {
               index = property.length -1;
           }
            returnProperty.push(property[index]);
            return (returnProperty)
        };

        propertyFactory.newItem = function (index) {

            var newItem = {

                Id: index,
                FirstName: "",
                LastName: "",
                Company: "",
                JobTitle: "",
                BusinessPhone: "",
                HomePhone: "",
                MobilePhone: "",
                FaxNumber: "",
                Street: "",
                City: "",
                State: "",
                Country: "",
                Email: "",
                WebPage: "",
                Notes: ""
            }
            return newItem;

        }

        return propertyFactory;
    };
    app.factory("propertyService", propertyService);

}(angular.module("realestateApp")));