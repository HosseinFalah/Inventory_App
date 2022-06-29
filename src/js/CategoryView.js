//title, description => {} => saveCategory => ...
import Storage from "./Storage";
const title = document.querySelector("#category-title");
const description = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");

class CategoryView {
    constructor(){
        addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategory(e))
        this.categoriees = [];
    }

    addNewCategory(e){
        console.log(e);
        e.preventDefault();
        const title = title.value;
        const description = description.value;
        if (!title || !description) return;
        Storage.saveCategory({title, description});
        this.categoriees = Storage.getAllCategories();
        // update DOM : update select option in categories
    }
}

export default CategoryView;