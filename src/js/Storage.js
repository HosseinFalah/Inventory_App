class Storage{
    // getAllCategories
    static getAllCategories() {
        // Products, category = localStorage => 
        const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
        // Sort => desecnding
        return savedCategories.sort((a, b) => {
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
        })
    }

    // save Category
    static saveCategory(categoryToSave) {
        const savedCategories = Storage.getAllCategories()
        // edit => ...save
        // new => ...save
        const existedItem = savedCategories.find((category) => category.id === categoryToSave.id)
        if (existedItem) {
            // save edit category
            existedItem.title = categoryToSave.title;
            existedItem.description = categoryToSave.description;
        } else {
            // save new category
            categoryToSave.id = new Date().getTime();
            categoryToSave.createdAt = new Date().toISOString();
            savedCategories.push(categoryToSave);
        }
        localStorage.setItem("category", JSON.stringify(savedCategories))
    }

    // getAllProducts
    static getAllProducts(sort = "newest"){
        // Products, category = localStorage => 
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        // Sort => desecnding
        return savedProducts.sort((a, b) => {
            // default: newest
            if (sort === "newest") {
                return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1
            } else if (sort === "oldest"){
                return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
            }
        })
    }

    // saveProducts
    static saveProducts(productToSave){
        const savedProducts = Storage.getAllProducts()
        // edit => ...save
        // new => ...save
        const existedItem = savedProducts.find((product) => product.id === productToSave.id)
        if (existedItem) {
            // save edit product
            existedItem.title = productToSave.title;
            existedItem.quantity = productToSave.quantity;
            existedItem.category = productToSave.category;
        } else {
            // save new product
            productToSave.id = new Date().getTime();
            productToSave.createdAt = new Date().toISOString();
            savedProducts.push(productToSave);
        }
        localStorage.setItem("products", JSON.stringify(savedProducts))
    }

    static deleteProduct(id){
        const savedProducts = Storage.getAllProducts();
        const filteredProducts = savedProducts.filter(product => product.id !== +id);
        localStorage.setItem("products", JSON.stringify(filteredProducts))
    }
}

export default Storage