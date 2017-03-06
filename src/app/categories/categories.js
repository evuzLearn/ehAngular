import angular from 'angular';

import categoriesTemplate from './categories.tmpl.html'
import bookmarksTemplate from './bookmarks/bookmarks.tmpl.html';

const ngCategories = angular.module('categories', [
    'eggly.models.categories'
])
.config($stateProvider => {
     $stateProvider.state('eggly.categories', {
         url: '/',
         views: {
              'categories@': {
                  controller: 'CategoriesListCtrl as categoriesListCtrl',
                  template: categoriesTemplate
              },
              'bookmarks@': {
                  controller: 'BookmarksListCtrl as bookmarksListCtrl',
                  template: bookmarksTemplate
              }
         }
     })
})
.controller('CategoriesListCtrl', function(CategoriesModel) {
    let categoriesListCtrl = this;

    categoriesListCtrl.categories = CategoriesModel.getCategories();
});

export default ngCategories;