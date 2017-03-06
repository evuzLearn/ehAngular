import angular from 'angular';

const ngModelBookmarks = angular.module('eggly.models.bookmarks', [

])
    .service('BookmarksModel', function ($http) {
        let model = this;
        const URLs = {
            FETCH: 'data/bookmarks.json'
        }
        let bookmarks;

        function extract(result) {
            return result.data;
        }

        function cacheBookmarks(result) {
            bookmarks = extract(result);
            return bookmarks;
        }

        model.getBookmarks = () => {
            return $http.get(URLs.FETCH).then(cacheBookmarks);
        }
    });

export default ngModelBookmarks;