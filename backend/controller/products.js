import { getProducts, getProduct, addProduct , deleteProduct, editProduct} from "../models/database.js";

export default{
    getMany: async(req,res)=>{
        res.send(await getProducts())
    },

    getMan: async(req,res)=>{
        res.send(await getProduct(+req.params.id))
    },

    addProd: async(req,res)=>{
        const { prod_name, quantity, amount, category, ProdURL } = req.body;
        await addProduct(prod_name, quantity, amount, category, ProdURL);
        res.send(await getProducts())
    },

    deleteProd: async(req,res)=>{
        res.send(await deleteProduct(req.params.id));   
    },

    editProd: async(req,res)=>{
        const [product] = await getProduct(+req.params.id)

        let {prod_name, quantity, amount, category, ProdURL} = req.body

        prod_name ? prod_name=prod_name: {prod_name}=product

        quantity ? quantity= quantity: {quantity}=product

        amount ? amount= amount: {amount}=product

        category ? category= category: {category}=product

        ProdURL ? ProdURL= ProdURL: {ProdURL}=product

        await editProduct(prod_name, quantity, amount, category, ProdURL,+req.params.id)
        
        res.json(await getProducts())
    }
}
    // addProd: async(req,res)=>{
    //     res.send(await addProduct())
    // }
