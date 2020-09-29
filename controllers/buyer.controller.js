const buyer = require('../models/buyer.model');
const prdt = require('../models/prdt.model');
const seller = require('../models/seller.model');
const cart = require('../models/cart.model');
const wishlist =  require('../models/wishlist.model');
const order = require('../models/order.model');
const { errorHandler } = require('../helpers/dbErrorHandler');

const  buyerController ={}

/*Product Listing GET method */
buyerController.productlisting = async(req,res,next)=>{
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 6;

    prdt.find()
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'

                });
            }
        const inStock = products.filter(x => x.active == 1);
        res.json(products);
    });
};

/*Similar products GET method */
buyerController.listRelated = (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 4;
    let prdtid =req.product.prdtid
    prdt.find({ prdtid: { $ne: prdtid }, catgy: req.product.catgy })
        .limit(limit)
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json(products);
        });
};
   
/*Product Details  */
buyerController.detailProduct = async(req,res,next)=>{
    return res.json(req.product);
};

/* Add to cart post method */
buyerController.addtoCart = async(req,res,next)=>{
   let email = req.body.email
   let prdtid = req.query.id 
    let sellerid = req.query.sellerid
    let prdts = await prdt.findOne({prdtid})
    let userid = await buyer.findOne({email})
    
    if(email && prdts.active==1){ 
        let qty = 0, data, seq ;
        let finddata = await cart.findOne({prdtid,email})
        const cartData = await cart.find().sort({cartid:-1})
        if(cartData.length == 0){
             seq = "CRT001"        
        }else{
            let id = (Number(cartData[0].cartid.slice(3,7))+1).toString()
            let targetLength = 4-id.length
            let cid = id.padStart(targetLength, 0)
            seq = "CRT"+cid
        }
        if(finddata)
            qty = (finddata.qty)+1
        else{
            data = new cart({ 
                cartid:seq,
                prdtid,
                buyerid : userid.buyerid,
                sellerid,
                qty: 1
            })
        }
        try {
            if(qty == 0){
                await data.save()
            }else{
                await Cart.update({prdtid,buyerid:userid},{qty:qty})}
            return res.status(200).json({message:`Successfully added to your Cart`})
        } catch (error) {
            return res.status(201).json({message:`Error while adding to cart ${error}`})
        }  
    }else if(!email){
        return res.status(200).json({message:`Please Login to continue`})
    }else {
        return res.status(201).json({message:`Sorry!!!!!! PRODUCT OUT OF STOCK. Please Check back later`})
    } 
};

/* GET method for view cart  */
buyerController.viewCart = async(req,res,next)=>{
    const arr=[] ;  
    let email=req.body.email
    if(email){
        let buyerData = (await buyer.findOne({email}))
        let cartData = await cart.find({buyerid:buyerData.buyerid})
        for(var i=0; i<=cartData.length-1; i++){
            let prdts= await prdt.findOne({prdtid:cartData[i].prdtid})
            arr.push(prdts) 
        }
        if(arr.length>0){
            return res.status(200).json({message:`Your cart details are ${arr}`})
        }else{
            return res.status(201).json({message:`Your cart is empty`})
        }
    }else{
        return res.status(201).json({message:`Please login to continue.`})
    }
       
}

   /*Removing from Cart */
buyerController.removeCart = async(req,res,next)=>{
    let email = req.body.email
    let buyerData =await buyer.findOne({email})
    if(email && buyerData.active == 1){
        let id = req.query.id
        let prdts = await cart.deleteOne({prdtid: id,buyerid:buyerData.buyerid})
        res.status(200).json({message:`Successfully deleted product from cart`})
    }else if(!email){
        return res.status(201).json({message:`Please login to continue.`})
    }else if(buyerData.active == 0){
        return res.status(201).json({message:`Sorry you have deleted your account`})
    }
    
}

/* GET Method for buyer wishlist*/
buyerController.wishlist = async(req,res,next)=>{
    let email = req.body.email;
    let buyerData = await buyer.findOne({email})
    if(email && buyerData.active == 1){
        const arr = [] ;  
        let buyerid = buyerData.buyerid
        let wishlistProduct = await wishlist.find({buyerid})
        for(var i=0; i<=wishlistProduct.length-1; i++){
            let prdts= await prdt.findOne({prdtid:wishlistProduct[i].prdtid})
            arr.push(prdts) 
        }
        try {
            return res.status(200).json({message:`Hi ${buyerData.firstname} you products in wishlist are ${arr}`})
        } catch (error) {
            return res.send(error)
        }
    }else{
        return res.status(201).json({message:`Please login to continue.`})
    }    
};

/*POST METHOD for adding to wishlist*/
buyerController.mywishlist = async(req,res,next)=>{
    let email = req.body.email
    let buyerData = await buyer.findOne({email})
    let id = req.query.id 
    if(email && id){
        let data = await wishlist.findOne({prdtid:id,buyerid:buyerData.buyerid}) 
        if(!data){
            const wishlistData = await wishlist.find().sort({wishid:-1})
            console.log(wishlistData)
            if(wishlistData.length == 0){
                seq = "WST001"        
            }else{
                let id = (Number(wishlistData[0].wishid.slice(3,7))+1).toString()
                let targetLength = 4-id.length
                let wid = id.padStart(targetLength, 0)
                seq = "WST"+wid
            }
            const data = new wishlist({ 
                wishid:seq,
                prdtid: id,
                buyerid : buyerData.buyerid
            })
            try {
                await data.save()
                return res.status(200).json({message:`Product added to wishlist`})
            } catch (error) {
                return res.status(404).json({message:`Something went wrong ${error}`})
            }
        }else if(data){
            return res.status(200).json({message:'Product already added to wishlist'})
        }
    }else{
        return res.status(201).json({message:`Please login to continue.`})
    } 
};

/*Removing from Wishlist */
buyerController.removeWishlist = async(req,res,next)=>{
    let email = req.body.email
    let id = req.query.id 
    if(email && id){
        let buyerData = await buyer.findOne({email})
        let prdts = await wishlist.deleteOne({prdtid: id,buyerid:buyerData.buyerid})
        if(prdts.length>0)
            return res.status(400).json({message:`Product sucessfully removed from wishlist.`})
    }else if(!email){
        return res.status(201).json({message:`Please login to continue.`})
    } else if(!id){
        return res.status(201).json({message:`Enter the product to remove`})
    }
}

/* For Cart update */
buyerController.updateqty= async(req,res,next)=>{
    let email = req.body.email
    let id = req.query.id 
    if(email && id){
        let buyerData = await buyer.findOne({email})
        let uid = buyerData.buyerid
        let flag = req.query.flag
        let finddata = await cart.findOne({prdtid:id,buyerid:uid})
        if(flag == 1){
            await cart.update({prdtid:id,buyerid:uid},{qty:(finddata.qty)+1})
        }else if(flag==0){
            await cart.update({prdtid:id,buyerid:uid},{qty:(finddata.qty)-1})
            let cartData = await cart.findOne({prdtid:id,buyerid:uid})
            let qty = cartData.qty
            if(qty==0){
                await cart.deleteOne({cartid:cartData.cartid})
            }
        }
        return res.status(200).json({message:`Sucessfully updated cart`})
    }else if(!email){
        return res.status(201).json({message:`Login to continue`})
    }else if(!id){
        return res.status(201).json({message:`Enter the product`})
    }
}; 

 /* Viewing the Checkout page */
buyerController.checkoutlist = async(req,res,next)=>{
    let email = req.body.email
    if(email ){
        let buyerData = await buyer.findOne({email})
        const arr=[] ;  
        let userid = buyerData.buyerid
        let cartData = await cart.find({buyerid:userid})
        for(var i=0; i<=cartData.length-1; i++){
            let prdts= await prdt.findOne({prdtid:cartData[i].prdtid})
            prdts['qty']=cartData[i].qty
            arr.push(prdts) 
        }
        try {
           return res.status(200).json({message:` Your checkout page details ${arr}`}) 
        } catch (error) {
            res.send(error)
        }  
    }else{
        res.status(201).json({message:`Please login to continue.`})
    }
};

/*Post method for buyer checkout  */
buyerController.checkout= async(req,res,next)=>{
    let email = req.body.email
    if(email ){
        let buyerData = await buyer.findOne({email})
        const arr =[]
        let id = buyerData.buyerid
        const orderid = await order.find().sort({oid:-1})
        let strid
        if(orderid.length == 0){
            strid = "OID001"        
        }else{
            let id = (Number(orderid[0].oid.slice(3,7))+1).toString()
            let trg_len = 4-id.length
            let oid = id.padStart(trg_len, 0)
            strid = "OID"+oid
        }
        let cartData =await cart.find({buyerid:id})
        for(var i=0; i<=cartData.length-1; i++){
            let prdts= await prdt.findOne({prdtid:cartData[i].prdtid})
            let offer = (prdts.price) -((prdts.price * prdts.offer)/100)
            let orders = new order({
                oid:strid,
                prdtid:prdts.prdtid,
                sellerid:prdts.sellerid,
                buyerid:id,
                prdtname:prdts.prdtname,
                price: prdts.price,
                offer : offer,
                gst : prdts.gstper,
                total: offer*cartData[i].qty,
                qty : cartData[i].qty
            })
            await orders.save() 
        }
        await cart.deleteMany({buyerid:id})
        return res.status(200).json({message:`Your order is succesfull.`})
    }else{
        return res.send('Please login to continue.')
    }
};

/* Profile page for buyer */
buyerController.myprofile =  async(req,res,next)=>{
    let buyerid = req.profile.userid
    if(buyerid){
        let buyerData=await buyer.findOne({buyerid})
        return res.status(200).json({message:`Your details as follows ${buyerData}`})
    }else{
        res.status(201).json({message:`Please login to continue.`})
    }   
}

/* Update method for buyer profile */
buyerController.updateProfile =  async(req,res,next)=>{
    let buyerid = req.profile.userid
    await buyer.update({buyerid},{
            firstname: (req.body.firstname).charAt(0).toUpperCase() + (req.body.firstname).slice(1),
            lastname: (req.body.lastname).charAt(0).toUpperCase() + (req.body.lastname).slice(1),
            home : (req.body.home).charAt(0).toUpperCase() + (req.body.home).slice(1),
            street:  (req.body.street).charAt(0).toUpperCase() + (req.body.street).slice(1),
            phone:  req.body.phone,
            state : ( req.body.state).charAt(0).toUpperCase() + (req.body.state).slice(1),
            city:  (req.body.city).charAt(0).toUpperCase() + (req.body.city).slice(1),
            pin:  req.body.pin,
            po:  (req.body.po).charAt(0).toUpperCase() + (req.body.po).slice(1)
        }, {new : true}).exec((err,data)=>{
            if (err){
                return res.status(400).json({
                    error: 'Something went wrong'
    
                });
    
            }return res.status(200).json({message:'Successfully updated profile'})
        })
   
}

/*DELETE SELLER */
buyerController.deleteUser =async(req,res,next)=>{
    let buyerid = req.profile.userid
    await buyer.update({buyerid},{active:0}).exec((err,data)=>{
        if (err){
            return res.status(400).json({
                error: 'Something went wrong'

            });

        }return res.status(200).json({message:'Successfully updated profile'})
    })
} 

/* Search products */
buyerController.listBySearch = (req, res) => {
    let order = req.body.order ? req.body.order : 'desc';
    let sortBy = req.body.sortBy ? req.body.sortBy : '_id';
    let limit = req.body.limit ? parseInt(req.body.limit) : 100;
    let skip = parseInt(req.body.skip);
    let findArgs = {};

    for (let key in req.body.filters) {
        if (req.body.filters[key].length > 0) {
            if (key === 'price') {
                findArgs[key] = {
                    $gte: req.body.filters[key][0],
                    $lte: req.body.filters[key][1]
                };
            } else {
                findArgs[key] = req.body.filters[key];
            }
        }
    }

    prdt.find(findArgs)
        .sort([[sortBy, order]])
        .skip(skip)
        .limit(limit)
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: 'Products not found'
                });
            }
            res.json({
                size: data.length,
                data
            });
            console.log('from back',data )
        });


};

buyerController.listSearch = (req, res) => {
   
    if (req.query.search) {

        SearchData = (req.query.search).charAt(0).toUpperCase() + (req.query.search).slice(1);
        prdt.find({$or: [{brand:SearchData}, {prdtname:SearchData}]}, (err, products) => {
            if (err) {
                console.log(err)
                return res.status(400).json({
                    error: errorHandler(err)

                });
            }
            console.log(products)
            res.json(products);
        });
    }
};



module.exports = buyerController;

