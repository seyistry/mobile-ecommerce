export async function getProducts() {
    try {
        await fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => (data));
    } catch (e) {
        console.log(e);
    }
}

export const getCategories = [
    "electronics",
    "jewelery",
    "men clothing",
    "women clothing"
    ]


