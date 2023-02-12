const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const Product=require("./models/product")
const user=require("./models/user");
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
    User.findById(1)
    .then(user=>{
        req.user=user;
        next()
    }).catch(err=>{
        console.log(err)
    })
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(user,{constraints:true,onDelete:'CASCADE'})
user.hasMany(Product)
user.hasOne(Cart)
Cart.belongsTo(user)
Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart,{through:CartItem})

sequelize
.sync({force:true})
.then(result=>{
    return user.findById(1)
})
.then(user=>{
    if(!User){
        return user.create({name:'vishal',email:'vishal@gmail.com'})
    }
    return User
})
.then(user=>{
    return user.createCart()
})
.then(cart=>{
    app.listen(3500)
})
.catch(err=>{
    console.log(err)
})


