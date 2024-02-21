import mysql from 'mysql2'
import{config} from 'dotenv'
config()

const pool=mysql.createPool({
    host:process.env.host,
    user:process.env.user,
    password:process.env.password,
    database:process.env.database
}).promise()

const getProducts= async()=>{
    const[result] = await pool.query(`
    SELECT * FROM Products`)
    return result
}

const getProduct= async(id)=>{
    const[result] = await pool.query(`
    SELECT * 
    FROM Products
    WHERE id = ?`,[id])
    return result
}

const addProduct= async(prod_name, quantity, amount, category, ProdURL)=>{
    const [product] = await pool.query(`
        INSERT INTO Products(prod_name, quantity, amount, category, ProdURL) VALUES (?,?,?,?,?)
    `,[prod_name, quantity, amount, category, ProdURL])
    return getProducts(product.InsertId)
}

const deleteProduct = async(id)=>{
    const [product] = await pool.query(`
        DELETE FROM Products
        WHERE id = ?
    `,[id])
    return getProducts(product.DeleteId)
} 

const editProduct = async(prod_name, quantity, amount, category,ProdURL,id)=>{
    await pool.query(`
        UPDATE Products
        SET prod_name = ?, quantity = ?, amount = ?, category = ?, ProdURL=?
        WHERE id = ?
    `,[prod_name, quantity, amount, category,ProdURL,id])
    return getProducts()
}

// console.log(getProducts());

export {getProducts,getProduct,addProduct,deleteProduct,editProduct}