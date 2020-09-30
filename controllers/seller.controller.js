let buyer = require('../models/buyer.model')
let seller = require('../models/seller.model');
let prdt = require('../models/prdt.model')

let sellerController  = {}

sellerController.add = async(req,res,next)=>{
    return res.status(200).json({message:'You have reached product adding session'})
}


sellerController.addProduct = async(req,res,next)=>{ 

    console.log("bodyyyyyyyy",req.body)       
    let sellerid = req.profile.userid
    let prdts = await prdt.find().sort({prdtid:-1})
    let strid
    if(prdts.length == 0){
        strid = "PRDT001"        
    }else{
        let id = (Number(prdts[0].prdtid.slice(4,7))+1).toString()
        let trg_len = 4-id.length
        let uid = id.padStart(trg_len, 0)
        strid = "PRDT"+uid
    }
    const data = new prdt({ 
        prdtid: strid,
        sellerid : sellerid,
        brand : req.body.brand,
        prdtname: req.body.prdtname,
        descn: req.body.descn,
        price : req.body.price,
        offer: req.body.offer,
        catgy: req.body.cat,
        qty : req.body.qty,
        gstper:req.body.gstper,
        imgpath1:req.body.img1,
        imgpath2: req.body.img2,
        video:req.body.video
    })
    try {
        await data.save()
        return res.status(200).json({message:'Product added successfully'})
    } catch (error) {
       res.status(201).json({message:'Error in adding the product'+error})
    }        
};

sellerController.productList = async(req,res,next)=>{
    let sellerid = req.profile.userid;
    let prdts = await prdt.find({sellerid,active:1})
    let sellers = await seller.findOne({sellerid}).select({'firstname':1,"_id":0})
    if(prdts.length == 0){
        return res.status(201).json({message:`Hi ${sellers.firstname}, Sorry! No products found`})
    }else {
        return res.status(200).json({message:`Hi ${sellers.firstname} your prdts are ${prdts} ${prdts[0].prdtname }`})
    }
}
           
/* Product details update page */
sellerController.update = async(req,res,next)=>{
    let prdts = req.product
    let sellerid = req.profile.userid
    let sellers = await seller.findOne({sellerid}).select({'firstname':1,"_id":0})
    return res.status(200).json({message:`Hi ${sellers.firstname}, Details of the product you have to update ${prdts}`})        
};

/* Product details update page POST method */
sellerController.updateProduct = async(req,res,next)=>{
    let prdtid = req.product.prdtid
    let sellerid = req.profile.userid
    let data = await prdt.update({prdtid},{
        sellerid : sellerid,
        brand : (req.body.brand).charAt(0).toUpperCase() + (req.body.brand).slice(1),
        prdtname: (req.body.prdtname).charAt(0).toUpperCase() + (req.body.prdtname).slice(1),
        descn: (req.body.descn).charAt(0).toUpperCase() + (req.body.descn).slice(1),
        price : req.body.price,
        offer: req.body.offer,
        catgy: req.body.catgy,
        qty : req.body.qty,
        gstper:req.body.gstper,
        imgpath1:req.body.imgpath1,
        imgpath2: req.body.imgpath2,
        video:req.body.video
    }, {new : true})
    return  res.status(200).json({message:'SUCCESSFULLY UPDATED THE DETAILS'})   
};
/* Deleting Product details   */
sellerController.deleteProduct = async(req,res,next)=>{
    let prdtid = req.product.prdtid
    let sellerid = req.profile.userid
    let prdts = await prdt.updateOne({prdtid,sellerid},{active:0})
    res.status(200).json({message:`SUCCESSFULLY DELETED THE PRODUCT ${prdts}`})
}

/*GET profile*/
sellerController.profile = async(req,res,next)=>{
    let sellerid = req.profile.userid
    let sellerDetails = await seller.findOne({sellerid})
    return res.status(200).json({message:`Your details as follows ${sellerDetails}`})
}
/* seller profile update page post method */
sellerController.sellerProfileDetails = async(req,res,next)=>{
    let sellerid = req.profile.userid
    let data=await seller.update({sellerid},{ 
        firstname: (req.body.firstname).charAt(0).toUpperCase() + (req.body.firstname).slice(1),
        lastname: (req.body.lastname).charAt(0).toUpperCase() + (req.body.lastname).slice(1),
        state: req.body.state,
        city: (req.body.city).charAt(0).toUpperCase() + (req.body.city).slice(1),
        gstnumber : req.body.gstnumber,
        phone : req.body.phone,
        shop : (req.body.shop).charAt(0).toUpperCase() + (req.body.shop).slice(1),
        street : req.body.street,
        pin : req.body.pin,
        po : req.body.po
    })
    return res.status(200).json({message:'Profile updated successfully'})   
};

/*Stock report */
sellerController.stockReport = async(req,res,next)=>{
    let sellerid = req.profile.userid;
    let sellerData = await seller.findOne({sellerid})
    let prdts = await prdt.find({sellerid:sellerData.sellerid})
    return res.status(200).json({message:`Your products are ${prdts}`})
}

/*SALES REPORT */
sellerController.salesReport =async(req,res,next)=>{

    // let d=new Date(prdts[0].date)
	// console.log(d.toLocaleDateString('en-GB'))
	// console.log(d.toLocaleTimeString('en-GB'))
    
}

/*DELETE SELLER */
sellerController.deleteUser =async(req,res,next)=>{

}

module.exports =sellerController;