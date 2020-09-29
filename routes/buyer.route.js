var express = require('express');
var router = express.Router();
const buyerController  = require('../controllers/buyer.controller');
const { route } = require('./index.route');

const {isAuth,isBuyer,requireSignin,userById,productById} = require('../controllers/auth.controller')


router.param("userId",userById)
router.param("productId", productById);


/*GET for product listing */
router.get('/buyerhome',buyerController.productlisting);

/*GET Product related listing */
router.get('/similiar/:productId',buyerController.listRelated);

/*POST METHOD FOR SEARCHING */
router.post('/search',buyerController.listBySearch);

/*GET Detail Product */
router.get('/detailproduct/:productId',buyerController.detailProduct);

/*POST method Add to Cart */
router.post('/addcart',buyerController.addtoCart);

/*GET Cart page */
router.get('/mycart', buyerController.viewCart);

/*Remove Cart Page*/
router.get('/removecart',buyerController.removeCart);

/*GET method Wishlist  */
router.get('/wishlist',buyerController.wishlist);

/* POST Wishlist Page */
router.post('/mywishlist',buyerController.mywishlist);

/*POST  Remove cart*/
router.get('/removewishlist',buyerController.removeWishlist);

/*POST Update Cart */
router.post('/updatecart',buyerController.updateqty);

/*GET checkoutlist */
router.get('/checkout',buyerController.checkoutlist);

/* POST CHECKOUT */
router.post('/checkout',buyerController.checkout);

/* GET Profile */
router.get('/profile:userId',requireSignin,isAuth,isBuyer,buyerController.myprofile);

/* UPDATE profile */
router.post('/profile:userId',requireSignin,isAuth,isBuyer,buyerController.updateProfile);

/* GET Search */
router.get('/productsearch',buyerController.listSearch);

module.exports = router;