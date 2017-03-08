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
        this.CategoriesModel.setCurrentCategory(category);
    }

    isCurrentCategory(category) {
        const currentCategory = this.CategoriesModel.getCurrentCategory();
        
        return currentCategory && currentCategory.id == category.id;
    }
}

CategoriesController.$inject = ['CategoriesModel'];
export default CategoriesController;