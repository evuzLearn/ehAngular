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
            return $http.get(URLs.FETCH)
                .then(cacheCategories);
        }
    });

export default ngModelCategories;