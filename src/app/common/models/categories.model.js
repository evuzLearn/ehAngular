class CategoriesModel {
    constructor($q) {
        this.$q = $q;
        this.categories = [
            { "id": 0, "name": "Development" },
            { "id": 1, "name": "Design" },
            { "id": 2, "name": "Exercise" },
            { "id": 3, "name": "Humor" }
        ];
    }

    getCategories() {
        return this.$q.when(this.categories);
    }
}

CategoriesModel.$inject = ['$q'];
export default CategoriesModel;