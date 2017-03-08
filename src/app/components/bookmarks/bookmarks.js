import angular from 'angular';
import bookmarksComponent from './bookmarks.component';

const BookmarsModule = angular.module('bookmarks', [])
    .component('bookmarks', bookmarksComponent);

export default BookmarsModule;