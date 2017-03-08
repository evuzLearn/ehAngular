class CategoriesModel {
    constructor($q) {
        this.$q = $q;
        this.currentCategory = null;

        this.categories = [
            { 'id': 0, 'name': 'Development' },
            { 'id': 1, 'name': 'Design' },
            { 'id': 2, 'name': 'Exercise' },
            { 'id': 3, 'name': 'Humor' }
        ];
    }

    getCategories() {
        return this.$q.when(this.categories);
    }

    setCurrentCategory(category) {
        this.currentCategory = category;
    }

    getCurrentCategory() {
        return this.currentCategory;
    }
}

CategoriesModel.$inject = ['$q'];
export default CategoriesModel;