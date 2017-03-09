import angular from 'angular';
import saveBookmarkComponent from './save-bookmark.component';

const SaveBookmarkModule = angular.module('save-bookmark', [])
    .component('saveBookmark', saveBookmarkComponent);

export default SaveBookmarkModule;