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
    }
}

BookmarsController.$inject = ['BookmarksModel', 'CategoriesModel'];
export default BookmarsController;