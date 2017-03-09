class saveBookmarkController {
    $onChanges() {
        this.editedBookmark = Object.assign({}, this.bookmark);
    }
}

export default saveBookmarkController;