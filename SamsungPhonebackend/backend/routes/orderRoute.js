const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrderToDelivered,
  deleteOrder,
  updateOrderToPaid,
} = require("../controllers/orderController");

const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router
  .route("/order/:id")
  .get(isAuthenticatedUser, getSingleOrder)
  .put(isAuthenticatedUser, updateOrderToPaid);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrder)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderToDelivered)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

module.exports = router;
