//set a new module
var registrationFormMod = angular.module('registrationForm', ['ngAnimate', 'ui.bootstrap', 'gov.doi.tracs.forms']);

registrationFormMod.
    controller("RegistrationFormController", [ '$scope', 'registrationSvc', function($scope,registrationSvc){

        //what is 'this' inside a controller? How is it different from $scope?
    var vm = this;

//    this.profile = registrationSvc.findById(1);
    vm.profile = {};
    vm.step ='usertype';
    vm.title = 'TRACS Registration Form';
    vm.showUserTypeWarn = false;
    vm.showProfileWarn = false;

    vm.setStep = function( stepName ) {
        vm.saveFormState();

        if ( 'profile' == stepName ) {
            if ( vm.isUserTypeFormValid ) {
                vm.step = stepName;
                vm.showUserTypeWarn = false;
                vm.showProfileWarn = false;
            } else {
                vm.showUserTypeWarn = true;
                vm.showProfileWarn = false;
            }
        } else if ( 'roles' == stepName ) {
           if ( vm.isProfileFormValid ) {
               vm.step = stepName;
               vm.showUserTypeWarn = false;
               vm.showProfileWarn = false;
           } else {
               vm.showUserTypeWarn = false;
               vm.showProfileWarn = true;
           }
       } else {
            vm.showUserTypeWarn = false;
            vm.showProfileWarn = false;
            vm.step = stepName;
       }
    };

    vm.getUserType = function() {
        if ( vm.profile.userType == 'fedUser' ) {
            return "Federal User Profile Information";
        } else if ( vm.profile.userType == 'stateUser' ) {
             return "State User Profile Information";
        } else if ( vm.profile.userType == 'tribalUser' ) {
             return "Tribal User Profile Information";
        } else {
            console.log("Current user type is " + vm.profile.userType);
             return "Other User Profile Information";
        }
    };

    vm.isUserTypeFormValid = false;
    vm.isUserTypeFormDirty = false;
    vm.isProfileFormValid = false;
    vm.isProfileFormDirty = false;

    vm.saveFormState = function() {
//        if ( 'usertype' == vm.step ) {
//            vm.isUserTypeFormDirty = true;
//        }
//
//        if ( 'regform' == vm.step ) {
//            vm.isProfileFormDirty = true;
//            vm.isProfileFormValid =
//        }
//
//        if ( 'roles' == vm.step ) {
//            vm.isRoleFormDirty = true;
//        }
    };


    $scope.$watch('main.userTypeForm.$valid', function(blah) {
        if ( typeof blah != 'undefined' ) {
            vm.isUserTypeFormValid = blah;
        }
    });
    $scope.$watch('main.userTypeForm.$dirty', function(blah) {
         if ( typeof blah != 'undefined' ) {
             //once sullied, you can never be clean again
             if ( false == vm.isUserTypeFormDirty ) {
                 vm.isUserTypeFormDirty = blah;
             }
         }
    });

    $scope.$watch('main.regform.$valid', function(blah) {
        if ( typeof blah != 'undefined' ) {
            vm.isProfileFormValid = blah;
        }
    });
    $scope.$watch('main.regform.$dirty', function(blah) {
         if ( typeof blah != 'undefined' ) {
             //once sullied, you can never be clean again
             if ( false == vm.isProfileFormDirty ) {
                vm.isProfileFormDirty = blah;
             }
         }
    });
    vm.isRoleFormDirty = false;
    vm.isRoleFormValid = function() {
        return vm.profile.dataentry == true
               || vm.profile.fedreview == true
               || vm.profile.useradmin == true
               || vm.profile.fbmsReports == true;
    };
//    $scope.$watch('main.roleform.$dirty', function(blah) {
//         if ( typeof blah != 'undefined' ) {
//             vm.isRoleFormDirty = blah;
//         }
//    });

    vm.toggleCustomOrg = function() {
            vm.profile.isCustomOrg = !vm.profile.isCustomOrg;
            vm.profile.organization = null;
            vm.profile.customOrg = null;
            if (vm.profile.isCustomOrg) {
                registrationSvc.focusIt("focusCustomOrgF")
            } else {
                registrationSvc.focusIt("focusOrgF")
            }
        };

    vm.finish = function() {
        alert( "Thanks for Registering: " + vm.profile.firstName );
    };

    vm.fwsRegions = [
      {
        "name": "Headquarters",
        "id": 9,
      }, {
        "name": "Region 1",
        "id": 1,
      }, {
        "name": "Region 2",
        "id": 2,
      }, {
        "name": "Region 3",
        "id": 3,
      }, {
        "name": "Region 4",
        "id": 4,
      }, {
        "name": "Region 5",
        "id": 5,
      }, {
        "name": "Region 6",
        "id": 6,
      }, {
         "name": "Region 7",
         "id": 7,
      }, {
         "name": "Region 8",
         "id": 8,
      }
    ];

    vm.states = [{
        "name": "Alabama",
        "id": 1,
        "countryId": 1
      }, {
        "name": "Alaska",
        "id": 2,
        "countryId": 1
      }, {
        "name": "Arizona",
        "id": 3,
        "countryId": 1
      }, {
        "name": "Alberta",
        "id": 4,
        "countryId": 2
      }, {
        "name": "British columbia",
        "id": 5,
        "countryId": 2
    }];

    vm.organizations = [
          {
            "name": "Colorado Division of Wildlife",
            "id": 9,
          }, {
            "name": "Colorado Fish and Game",
            "id": 1,
          }, {
            "name": "Washington Fish and Game",
            "id": 2,
          }, {
            "name": "California Division of Wildlife",
            "id": 3,
          }, {
            "name": "California Fish and Game",
            "id": 4,
          }, {
            "name": "New York Fish & Game",
            "id": 5,
          }, {
            "name": "New York Division of Environmental Contaminants",
            "id": 6,
          }, {
             "name": "Colorado Division of Environmental Contaminants",
             "id": 7,
          }, {
             "name": "California Division of Environmental Contaminants",
             "id": 8,
          }
        ];
}]);