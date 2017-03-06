import angular from 'angular';
import template from './bookmark-edit.tmpl.html';

const ngBookmarksEdit = angular.module('categories.bookmarks.edit', [

])
.config($stateProvider => {
    $stateProvider
    .state('eggly.categories.bookmarks.edit', {
        url: '/bookmarks/:bookmarkId/edit',
        template: template,
        controller: 'EditBookmarkCtrl as editBookmarkCtrl'
    })
})
.controller('EditBookmarkCtrl', function () {

})

export default ngBookmarksEdit;