import angular from 'angular';
import categoryItemComponent from './category-item.component';

const categoryItemModule = angular.module('category-item', [])
    .component('categoryItem', categoryItemComponent);

export default categoryItemModule;