registrationFormMod.

factory( 'registrationSvc', function() {
   var profile = {
           userType: null,
           firstName: 'Daniel',
           lastName: 'Hogan',
           phone: '3032752331',
           email1: 'dan_hogan@fws.gov',
           email2: 'dan_hogan@fws.gov',
           regionId: null,
           stateId: null,
           organization: 'U.S. Fish and Wildlife Service',
           dataentry: false,
           fedreview: true,
           useradmin: true,
           fbmsReports: false,
           password1: null,
           password2: null
       }

   return {
      save: function(profile){
      },
      findById: function(id){
        return profile;
      }
    };
});

registrationFormMod.
factory('registrationSvc', function ($rootScope, $timeout) {
    return {
        focusNG: function(name) {
        $timeout(function () {
            $rootScope.$broadcast('focusOn', name);
        });
    }}
});
