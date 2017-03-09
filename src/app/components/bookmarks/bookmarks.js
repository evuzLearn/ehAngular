import angular from 'angular';
import bookmarksComponent from './bookmarks.component';
import SaveBookmarkModule from './save-bookmark/save-bookmark';

const BookmarsModule = angular.module('bookmarks', [
    SaveBookmarkModule.name
])
    .component('bookmarks', bookmarksComponent);

export default BookmarsModule;