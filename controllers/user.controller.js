let bcrypt = require('bcrypt');
const { errorHandler } = require('../helpers/dbErrorHandler')
const jwt =require('jsonwebtoken')
const nodemailer = require('nodemailer')
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');

let Buyer = require('../models/buyer.model')
let User = require('../models/usr.model');
let Seller = require('../models/seller.model');
let Category = require('../models/category.model');

require("dotenv").config();

let userController = {}

/*GET METHOD*/

userController.register = async(req,res,next)=>{
    res.send("reached here")
}

// For user registration post method.
userController.registerUser = async(req,res,next)=>{
    let flag= 0
        const user =  new User(req.body);
         await user.save (async(err, user) => {
            if (err) {
               
                return res.status(400).json({ err:errorHandler(err) });
               
            }
            user.hashed_password =undefined
            user.salt = undefined
           
            flag = 1
           
            let seq
            if(req.body.usertype == 0){
                const userData =  await Seller.find().sort({sellerid:-1})
                console.log('userdddd',userData)
                if(userData.length == 0){
                    seq = "SLR001"        
                }else{
                    let id = (Number(userData[0].sellerid.slice(3,7))+1).toString()
                    let targetLength = 4-id.length
                    let uid = id.padStart(targetLength, 0)
                    seq = "SLR"+uid
                }
                data = new Seller({ 
                    sellerid:seq,
                    firstname: (req.body.firstname).charAt(0).toUpperCase() + (req.body.firstname).slice(1),
                    lastname: (req.body.lastname).charAt(0).toUpperCase() + (req.body.lastname).slice(1),
                    email: req.body.email   
                })
            }else{
                const userData = await Buyer.find().sort({buyerid:-1})
                if(userData.length == 0){
                    seq = "USR001"        
                }else{
                    let id = (Number(userData[0].buyerid.slice(3,7))+1).toString()
                    let targetLength = 4-id.length
                    let uid = id.padStart(targetLength, 0)
                    seq = "USR"+uid
                }
                data = new Buyer({ 
                    buyerid:seq,
                    firstname: (req.body.firstname).charAt(0).toUpperCase() + (req.body.firstname).slice(1),
                    lastname: (req.body.lastname).charAt(0).toUpperCase() + (req.body.lastname).slice(1),
                    email: req.body.email   
                })    
            }
        
             await data.save()
             await User.updateOne({email:req.body.email},{userid:seq})
            
            console.log('Data saved successfully')

           return res.json({user})
        });

   
};

/* Login Get method for user */
userController.login = async(req,res,next)=>{
   res.status(200).json({message:"Entered login page"})
};

/*Login POST method for user */
userController.loginUser = async(req,res,next)=>{

    const { email, password } = req.body;
    User.findOne({ email },async (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password doesnot match'
            });
        }
        let name
        const {userid,email,usertype} = user
        const token = jwt.sign({_id:user.userid},process.env.JWT_SECRET)
        if(user.usertype == 1){
            let data = await Buyer.findOne({email})
            name = data.firstname;
        }else if (user.usertype == 0){
            let data = await Seller.findOne({email})
            name = data.firstname
        }
        
        res.cookie("t",token,{expire:new Date()+9999});

       
        req.profile = user
        return res.json({token,user:{userid,email,usertype,name}})

    })
 
};

userController.logout=async(req,res)=>{
    res.clearCookie('t')
    res.status(200).json({message:`Logged out successfully`})
}

userController.listCatgy = (req, res) => {
   Category.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log(data)
        res.json(data);
    });
};

const randomString = length =>{
    let text ="";
    const possible ='abcdefghijklmnopqrstuvwxyz0987654321'
    for(let i =0;i<length;i++){
        text += possible.charAt(Math.floor(Math.random()*possible.length))
    }
    return text;
}

const sendEmail = (emailData,email)=>{
    const completeData = Object.assign(email,emailData)
    const transporter = nodemailer.createTransport({service: 'gmail',
        auth: {                                   
            user: 'shopin.helpdesk@gmail.com',  
            pass: 'Shopin@321'
        }
    })
    return transporter
        .sendMail(completeData)
        .then(info=>console.log("Message sent"))
        .catch(err=>console.log(`Problem encountered while sending mail/n ${err}`))
}

userController.forgotpwd = async(req,res)=>{
    const email = req.body.email;
   
    User.findOne({ email },async (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }else{
            const token = randomString(30)
            const emailData ={
                to:email,
                subject:"ShopIN Password Reset",
                text:"Please click on the link below to reset your password",
                html:`<p>Please use the link below to reset your password</p><p>${process.env.API}/resetpwd/${token}</p>`
            };
            return User.update({email},{reset:token},
                (error,result)=>{
                    if(error){
                        return res.send(error)
                    }else{
                        sendEmail(emailData,email)
                        return res.status(200).json({message:`Reset email has been send to ${email}.`})
                    }

            })
        }
    })
    
}

userController.frgtpwd = async(req,res)=>{
    const reset = req.user.reset
    const {password}= req.body
    let salt = req.user.salt
    var md5 = crypto.createHmac('sha1', salt);
    hashed_password = md5.update(password).digest("hex");
    User.updateOne({reset},{hashed_password,reset:''}, (err,data)=>{
        if(err){
            return res.send({message:`Problem encountered while updating data ${err}`})
        }else{
            return res.json({message:'Successfully changed password'})
        }
    })
}



module.exports = userController;