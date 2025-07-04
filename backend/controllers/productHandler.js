const productList = require("../dumyData");
const Product = require("../models/product");

//insert products into the database
const insertProducts = async(req, res)=>{

    try {
        // insert query
        await Product.insertMany(productList);
        res.status(200).json({ message: "Products inserted successfully" });
        
    } catch (error) {
        res.status(500).json({ message: "Error inserting products", error: error.message });
    }

}

//get products from the database
const getProductsOnQuery = async (req, res)=>{

    try {
        const pageNumber = parseInt(req.params.currentPage) || 1;
        const perPage = parseInt(req.params.perPage) || 10;
        const searchValue = req.params.searchValue || "";
        const skipRows = (pageNumber - 1) * perPage;
        let ProductList;
        if(searchValue !== 0){
            const reEx = {"$regex": searchValue, "$options": "i"};
            const query = {
                $or: [
                    { title: reEx },
                    { category: reEx },
                    { subCategory: reEx },
                    { brand: reEx },
                    { shop_name: reEx },
                    { product_code: reEx },
                    { remarks: reEx },
                    { shop: reEx },
                    
                ]
            };
            ProductList = await Product.aggregate([
                {
                    $facet : {
                        totalCount: [ { $match: query }, { $count: "count" } ],
                        products: [
                            { $match: query },
                            { $skip: skipRows },
                            { $limit: perPage }
                        ]
                    }
                }
            ])
        }else{
            ProductList = await Product.aggregate([
                {
                    $facet : {
                        totalCount: [ { $count: "count" } ],
                        products: [
                            { $skip: skipRows },
                            { $limit: perPage }
                        ]
                    }
                }
            ])
        }

        res.status(200).json({message: "Products fetched successfully", data: ProductList});
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
}

//exporting the function
module.exports = {
    insertProducts,
    getProductsOnQuery
}