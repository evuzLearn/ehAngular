class CategoriesController {
    constructor(CategoriesModel) {
        this.categories = CategoriesModel.categories;
    }
}

CategoriesController.$inject = ['CategoriesModel'];
export default CategoriesController;