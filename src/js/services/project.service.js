(() => {
  'use strict';

  const projectRoute = '/api/project';

  function ProjectService($http, $q) {
    this.getProject = function getProject() {

    };

    this.createProject = function createProject(data) {
      return $q((resolve, reject) => {
        $http.post(projectRoute, data)
          .then((project) => {
              resolve(project.data);
            },
            (err) => {
              reject(err);
            });
      });
    };
  }

  ProjectService.$inject = ['$http', '$q'];

  angular.module('ashcan').service('ProjectService', ProjectService);
})();
