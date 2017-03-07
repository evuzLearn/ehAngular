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
    .controller('EditBookmarkCtrl', function ($state, $stateParams, BookmarksModel) {
        let editBookmarkCtrl = this;

        function returnToBookmarks() {
            const { category } = $stateParams;
            $state.go('eggly.categories.bookmarks', {
                category
            });
        }

        function cancelEditing() {
            returnToBookmarks();
        }

        function updateBookmark() {
            editBookmarkCtrl.bookmark = angular.copy(editBookmarkCtrl.editedBookmark);
            BookmarksModel.updateBookmark(editBookmarkCtrl.bookmark);
            returnToBookmarks();
        }

        BookmarksModel.getBookmarkById($stateParams.bookmarkId)
            .then(bookmark => {
                if (bookmark) {
                    editBookmarkCtrl.bookmark = bookmark;
                    editBookmarkCtrl.editedBookmark = angular.copy(editBookmarkCtrl.bookmark);
                } else {
                    returnToBookmarks();
                }
            })

        editBookmarkCtrl.cancelEditing = cancelEditing;
        editBookmarkCtrl.updateBookmark = updateBookmark;
    })

export default ngBookmarksEdit;