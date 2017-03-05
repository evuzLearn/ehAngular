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
                  controller: 'CategoriesCtrl',
                  template: categoriesTemplate
              },
              'bookmarks@': {
                  controller: 'BookmarksCtrl',
                  template: bookmarksTemplate
              }
         }
     })
})
.controller('CategoriesCtrl', $scope => {

})
.controller('BookmarksCtrl', $scope => {
    
})

export default ngCategories;