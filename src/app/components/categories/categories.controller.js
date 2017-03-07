class CategoriesController {
    constructor(CategoriesModel) {
        CategoriesModel.getCategories()
        .then(result => {
            this.categories = result;
        })
    }
}

CategoriesController.$inject = ['CategoriesModel'];
export default CategoriesController;