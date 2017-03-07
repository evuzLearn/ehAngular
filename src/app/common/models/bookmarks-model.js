import angular from 'angular';

const ngModelBookmarks = angular.module('eggly.models.bookmarks', [

])
    .service('BookmarksModel', function ($http, $q) {
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

        function findBookmark (bookmarkId) {
            return bookmarks.find(bookmark => {
                return bookmark.id == parseInt(bookmarkId, 10);
            })
        }

        model.getBookmarkById = function (bookmarkId) {
            let deferred = $q.defer();

            if(bookmarks) {
                deferred.resolve(findBookmark(bookmarkId));
            } else {
                model.getBookmarks().then(() => {
                    deferred.resolve(findBookmark(bookmarkId));
                })
            }

            return deferred.promise;
        }

        model.getBookmarks = () => {
            let deferred = $q.defer();

            if(bookmarks) {
                deferred.resolve(bookmarks);
            } else {
                $http.get(URLs.FETCH).then(bookmarks => {
                    deferred.resolve(cacheBookmarks(bookmarks));
                })
            }

            return deferred.promise;
        }

        model.createBookmark = function(bookmark) {
            bookmark.id = bookmarks[bookmarks.length - 1].id + 1;
            bookmarks.push(bookmark);
        }

        model.updateBookmark = function(bookmark) {
            const index = bookmarks.findIndex(b => {
                return b.id == bookmark.id;
            })

            bookmarks[index] = bookmark;
        }

        model.deleteBookmark = function(bookmark) {
            const index = bookmarks.findIndex(b => {
                return b.id == bookmark.id;
            })

            bookmarks.splice(index, 1)
        }
    });

export default ngModelBookmarks;