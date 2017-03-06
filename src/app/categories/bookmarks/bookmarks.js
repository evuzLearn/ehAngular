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
                    controller: 'BookmarksListCtrl as bookmarksListCtrl',
                    template: bookmarksTemplate
                }
            }
        })
    })
    .controller('BookmarksListCtrl', function ($stateParams, BookmarksModel, CategoriesModel) {
        let bookmarksListCtrl = this;

        CategoriesModel.setCurrentCategory($stateParams.category);

        BookmarksModel.getBookmarks()
            .then(result => {
                bookmarksListCtrl.bookmarks = result;
            })

        bookmarksListCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory
        bookmarksListCtrl.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName
    });

export default ngBookmarks;