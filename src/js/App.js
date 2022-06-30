import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";

document.addEventListener("DOMContentLoaded", () => {
    // setApp => categories : ok
    CategoryView.setApp()
    // create categories options
    CategoryView.createCategoriesList();
    //
    ProductView.setApp();
    //
    ProductView.createProductList(ProductView.products);
})