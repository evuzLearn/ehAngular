import angular from 'angular';

const ngModelCategories = angular.module('eggly.models.categories', [

])
    .service('CategoriesModel', function () {
        let model = this;

        let categories = [
            { "id": 0, "name": "Development" },
            { "id": 1, "name": "Design" },
            { "id": 2, "name": "Exercise" },
            { "id": 3, "name": "Humor" }
        ];

        model.getCategories = () => {
            return categories;
        }
    });

export default ngModelCategories;