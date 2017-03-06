import angular from 'angular';

const ngModelCategories = angular.module('eggly.models.categories', [

])
    .service('CategoriesModel', function ($http) {
        let model = this;
        let categories;
        const URLs = {
            FETCH: 'data/categories.json'
        }

        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        model.getCategories = () => {
            return (categories) ? $q.when(categories) : $http.get(URLs.FETCH)
                .then(cacheCategories);
        }

        model.getCategoriesByName = function () {
            let deferred = $q.defer();

            function findCategory() {
                return _.find(categories, c => {
                    return c.name == categoryName;
                })
            }

            if(categories) {
                deferred.resolve(findCategory());
            } else {
                model.getCategories()
                .then(result => {
                    deferred.resolve(findCategory());
                })
            }

            return deferred.promise;
        }
    });

export default ngModelCategories;