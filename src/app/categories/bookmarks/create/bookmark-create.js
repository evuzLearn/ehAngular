import angular from 'angular';
import template from './bookmark-create.tmpl.html';

const ngBookmarksCreate = angular.module('categories.bookmarks.create', [

])
    .config($stateProvider => {
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url: '/bookmarks/create',
                template: template,
                controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
            })
    })
    .controller('CreateBookmarkCtrl', function() {

    });

export default ngBookmarksCreate;