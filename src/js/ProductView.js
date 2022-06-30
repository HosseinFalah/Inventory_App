import Storage from "./Storage.js";
const addNewProductBtn = document.querySelector("#add-new-product");

class ProductView {
    constructor(){
        addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
        this.products = [];
    }

    setApp(){
        this.products = Storage.getAllProducts();
    }

    addNewProduct(e){
        e.preventDefault();
        const title = document.querySelector("#product-title").value;
        const quantity = document.querySelector("#product-quantity").value;
        const category = document.querySelector("#product-category").value;

        if (!title || !quantity || !category) return;
        Storage.saveProducts({title, quantity, category});
        this.products = Storage.getAllProducts();
        this.createProductList()
        title.value = ""
        quantity.value = ""
        category.value = ""
    }

    createProductList(){
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        const productsDOM = document.querySelector("#products-list");
        productsDOM.innerHTML = ""
        this.products.forEach(product => {
            const selectedCategory = Storage.getAllCategories().find(category => category.id === +product.category)
            productsDOM.insertAdjacentHTML("afterbegin", `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-slate-400">${product.title}</span>
                    <div class="flex items-center gap-x-3">
                        <span class="text-slate-400">${new Date().toLocaleDateString("fa-IR", options)}</span>
                        <span class="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">${selectedCategory.title}</span>
                        <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">${product.quantity}</span>
                        <button class="border px-2 py-0.5 rounded-2xl border-red-500 text-red-400" data-id=${product.id}><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>`
            )
        })
    }
}

export default new ProductView()