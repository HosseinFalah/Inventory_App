import CategoryView from "./CategoryView.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log(CategoryView);
    // setApp => categories : ok
    CategoryView.setApp()
    // create categories options
    CategoryView.createCategoriesList();
})

// target: 
// 1.create Category
// 2.create product based on celected category
// 3.edit product
// 4.remove product
// 5.save products in local storage
// => Storage Class for hanle application methods
// => ProductView Class
// => CategoryView Class
// => Main and App Class