import angular from 'angular';
import bookmarksTemplate from './bookmarks.tmpl.html';

const ngBookmarks = angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.bookmarks'
])
.config($stateProvider => {
    $stateProvider.state('eggly.categories.bookmarks', {
        url: 'categories/:category',
        views: {
            'bookmarks@': {
                controller: 'BookmarksCtrl', 
                template: bookmarksTemplate
            }
        }
    })
})
.controller('BookmarksCtrl', ($scope, $stateParams) => {
    $scope.currentCategoryName = $stateParams.category;
});

export default ngBookmarks;