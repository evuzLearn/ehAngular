import angular from 'angular';
import CategoriesModule from './categories/categories';

const ComponentsModule = angular.module('components', [
    CategoriesModule.name
]);

export default CategoriesModule;