class CategoriesController {
    constructor(CategoriesModel) {
        this.CategoriesModel = CategoriesModel;
    }

    $onInit() {
        this.CategoriesModel.getCategories()
        .then(result => {
            this.categories = result;
        });
    }

    onCategorySelected (category) {
        console.log('Category Selected:', category)
    }
}

CategoriesController.$inject = ['CategoriesModel'];
export default CategoriesController;