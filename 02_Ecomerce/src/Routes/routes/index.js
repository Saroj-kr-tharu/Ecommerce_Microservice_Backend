const express = require('express');

const router = express.Router();

const {authController, adminController,CustumerControllers } = require('../../controllers/index')
const {adminMiddleware,custumerMiddleware,userMiddleware} = require('../../middlewares/index')



router.get("/check", (req, res) => {
  return res.json({ message: "Auth Server is good to GO" });
});



// user 
router.post( "/auth/signup", userMiddleware.signupAndLogin, authController.signup );
router.post( "/auth/login", userMiddleware.signupAndLogin, authController.signin );
router.get( "/auth/veriyToken", userMiddleware.verifyToken, authController.veriyToken );
router.post( "/auth/refresh-token", userMiddleware.verifyRefreshToken, authController.refreshToken );
router.post( "/auth/login/otp", authController.loginByOTP );
router.post( "/auth/login/otp-verify", userMiddleware.verifyOTP, authController.VerifyOTP );
router.post( "/auth/logout",  authController.logout );

// admin 
// admin/products
router.post( "/products/add",adminMiddleware.verifyToken,  adminController.addProduct );
router.delete( "/products/delete", adminMiddleware.verifyToken, adminController.deleteProduct );
router.get( "/products/getall",adminMiddleware.verifyToken,  CustumerControllers.getProductall );
router.delete( "/products/bulkdelete", adminMiddleware.verifyToken, adminController.bulkdeleteProduct );
router.patch( "/products/update", adminMiddleware.verifyToken, adminController.editProduct );

//admin/orders
router.get( "/orders",  adminMiddleware.verifyToken, adminController.getAllOrders );
router.get( "/ordersAll",  adminMiddleware.verifyToken, adminController.getAllOrders );
router.get( "/getOrderAllWithoutFilter",  adminMiddleware.verifyToken, adminController.getAllOrdersWithoutFilter );
router.patch( "/orders/update",  adminMiddleware.verifyToken, adminController.editOrders );


//admin/users
router.get( "/users",  adminMiddleware.verifyToken, adminController.getAllUsers );
router.get( "/userswithoutfilter",  adminMiddleware.verifyToken, adminController.getAllUserWithoutFilter );
router.patch( "/users/update",  adminMiddleware.verifyToken, adminController.updateUserById );
router.patch( "/users/bulkupdate",  adminMiddleware.verifyToken, adminController.BulkupdateUsers );

// custumer 
// custumer/product
router.get( "/products",  CustumerControllers.getProduct );
router.get( "/product",  CustumerControllers.getProductById ); 

// custumer/orders
router.post( "/orders/addOrder",  custumerMiddleware.verifyToken, CustumerControllers.addOrders );
router.get( "/orders/getByUser",  custumerMiddleware.verifyToken, CustumerControllers.getOrdersByUserId );
router.post( "/orders/orderIntial",  custumerMiddleware.verifyToken, CustumerControllers.orderInitial );
router.get( "/orders/orderFinal",   CustumerControllers.orderFinal );
router.get( "/orders/orderByNO",   CustumerControllers.getDetailOrderByOrderno );

// custumer / cart 
router.post( "/cart/add",custumerMiddleware.verifyToken,  CustumerControllers.addItemCart);
router.delete( "/cart/delete", custumerMiddleware.verifyToken,  CustumerControllers.clearCart );
router.post( "/cart/getCart",  custumerMiddleware.verifyToken, CustumerControllers.getCartById );
router.delete( "/cart/removeItem",  custumerMiddleware.verifyToken, CustumerControllers.removeItemCart );
router.post( "/cart/bulkdelete",  custumerMiddleware.verifyToken, CustumerControllers.BulkremoveItemCart );
router.patch( "/cart/updateItem",  custumerMiddleware.verifyToken, CustumerControllers.updateItemCart );
router.patch( "/cart/bulkupdate",  custumerMiddleware.verifyToken, CustumerControllers.updateItemsBluk );

//custemer /checkout
router.get ( "/cart/checkout",  custumerMiddleware.verifyToken, CustumerControllers.checkoutCart );

 
 
module.exports = router;