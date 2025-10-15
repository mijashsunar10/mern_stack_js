const Product = require('../models/productModel');
const {all} = require('../routes/productRoutes');
//business Logic

const getProducts = async(req,res)=>
{
    try{

        const allProducts =await  Product.find();

        if(!allProducts||allProducts.length===0){
            res.json({
                message:"No products found"
            })
        }

        res.status(200).json({
            success:true,
            products:allProducts
        })

    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }


}

const createProduct = async(req,res)=>
{
    try{
        const {name,price,category,description} = req.body;

        if(!name||!price||!category||!description)
        {
            return res.status(400).json({
                success:false,
                message:"Please provide all the details"
            })
        }

        const newProduct = new Product({
            name,price,category,description
        })

        await newProduct.save();

        res.status(201).json({
            success:true,
            message:"Product created successfully",
            product:newProduct
        })

    }
    catch(err)
    {
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category, description } = req.body; // ✅ fixed typo: "descriAption"

    // Check if product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category, description },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};




module.exports = { getProducts, createProduct, updateProduct };
