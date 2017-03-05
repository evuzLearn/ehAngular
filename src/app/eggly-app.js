import angular from 'angular';

angular.module('Eggly', [

]).controller('MainCtrl', $scope => {
    $scope.categories = [
        { "id": 0, "name": "Development" },
        { "id": 1, "name": "Design" },
        { "id": 2, "name": "Exercise" },
        { "id": 3, "name": "Humor" }
    ];

    $scope.bookmarks = [
        { "id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        { "id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        { "id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        { "id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        { "id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        { "id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        { "id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        { "id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        { "id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    /**
     * Filter categories
     */
    $scope.currentCategory = null;

    function setCurrentCategory(category) {
        $scope.currentCategory = category;

        cancelCreating();
        cancelEditing();
    }

    function isCurrentCategory(category) {
        return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;

    /**
     * CRUD
     */
    function resetCreateForm() {
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentCategory.name
        }
    }

    function createBookmark(bookmark) {
        const { bookmarks } = $scope;

        bookmark.id = bookmarks[bookmarks.length - 1].id + 1;
        bookmarks.push(bookmark);

        resetCreateForm();
    }

    function updateBookmark(bookmark) {
        const index = $scope.bookmarks.findIndex(b => {
             return b.id == bookmark.id
        });
        $scope.bookmarks[index] = bookmark;

        $scope.editedBookmark = null;
        $scope.isEditing = false;
    }

    function setEditedBookmark(bookmark) {
        $scope.editedBookmark = angular.copy(bookmark);
    }

    function isSelectedBookmark(bookmarkId) {
        return $scope.editedBookmark != null && $scope.editedBookmark.id == bookmarkId;
    }

    function deleteBookmark(bookmark) {
        const index = $scope.bookmarks.findIndex(b => {
            return b.id == bookmark.id;
        });
    
        $scope.bookmarks.splice(index, 1);
    }

    $scope.createBookmark = createBookmark;
    $scope.setEditedBookmark = setEditedBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.isSelectedBookmark = isSelectedBookmark;
    $scope.deleteBookmark = deleteBookmark;
    $scope.editedBookmark = null;

    /**
     * Creating and editing states
     */
    $scope.isCreating = false;
    $scope.isEditing = false;

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;

        $scope.editedBookmark = null;
    }

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
    }

    function shouldShowCreating() {
        return $scope.currentCategory && !$scope.isEditing;
    }

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;
});