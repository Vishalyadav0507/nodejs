const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const Title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const Price = req.body.price;
  const description = req.body.description;
  Product.create({
    title:Title,
    price:Price,
    imageUrl:imageUrl,
    description:description
  }).then(result=>{
    console.log(result)

  }).catch(err=>{
    console.log(err)
    
  })
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    })
  })
  .catch(err=>{
    console.log(err)
  })
}
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findById(prodId)
  .then(product=>{
    product.title=updatedTitle
    product.Price=updatedPrice
    product.imageUrl=updatedImageUrl
    product.description=updatedDesc
    return product.save()
  })
  .then(result=>{
    console.log('uspdated product')
    res.redirect('/admin/products');
  })
  .catch(err=>{console.log(err)})
  .catch(err=>{console.log(err)})
  
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
  .catch(err=>{console.log(err)})

};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
  .then(product=>{
    return product.destroy()
  })
  .then(result=>{
    consnole.log('product deleted')
  })
  .catch(err=>{console.log(err)})
  .catch(err=>{console.log(err)})
  res.redirect('/admin/products');
};
