class BookmarsController {
    constructor(BookmarksModel, CategoriesModel) {
        this.BookmarksModel = BookmarksModel;
        this.CategoriesModel = CategoriesModel;
    }

    $onInit() {
        const { BookmarksModel, CategoriesModel } = this;
        BookmarksModel.getBookmarks()
            .then(results => {
                this.bookmarks = results;
            })
        this.getCurrentCategory
            = CategoriesModel.getCurrentCategory.bind(CategoriesModel);
        this.deleteBookmark = this.BookmarksModel.deleteBookmark.bind(BookmarksModel);
    }

    createBookmark() {
        this.currentBookmark = this.initNewBookmark();
    }

    initNewBookmark() {
        return {
            id: null,
            title: '',
            url: '',
            category: this.CategoriesModel.getCurrentCategory().name
        }
    }

    editBookmark(bookmark) {
        this.currentBookmark = bookmark;
    }

    saveBookmark(bookmark) {
        if(bookmark.id) {
            this.BookmarksModel.updateBookmark(bookmark);
        } else {
            this.BookmarksModel.createBookmark(bookmark);
        }
    }

    onSave(bookmark) {
        this.saveBookmark(bookmark);
        this.reset();
    }

    reset() {
        this.currentBookmark = null;
    }
}

BookmarsController.$inject = ['BookmarksModel', 'CategoriesModel'];
export default BookmarsController;