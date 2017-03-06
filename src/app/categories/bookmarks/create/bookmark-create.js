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
    .controller('CreateBookmarkCtrl', function($state, $stateParams, BookmarksModel) {
        const createBookmarkCtrl = this;

        function returnToBookmarks() {
            $state.go('eggly.categories.bookmarks', {
                category: $stateParams.category
            })
        }

        function cancelCreating () {
            returnToBookmarks();
        }

        function createBookmark(bookmark) {
            BookmarksModel.createBookmark(bookmark);
            returnToBookmarks();
        }

        function resetForm() {
            createBookmarkCtrl.newBookmark = {
                title: '',
                url: '',
                category: $stateParams.category
            }
        }

        createBookmarkCtrl.cancelCreating = cancelCreating;
        createBookmarkCtrl.createBookmark = createBookmark;

        resetForm();
    });

export default ngBookmarksCreate;