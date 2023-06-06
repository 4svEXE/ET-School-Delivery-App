const { Router } = require("express");
const Shop = require("../models/Shop");
const Product = require("../models/Product");
const User = require("../models/User");
const Check = require("../models/Check");
const SoldGoods = require("../models/SoldGoods");
const router = Router();

router.get("/shops", async (req, res) => {
  const shops = await Shop.find({});

  res.json(shops);
});

router.get("/shopProducts", async (req, res) => {
  const products = await Product.find({ shopID: req.query.id });

  res.json(products);
});

router.get("/products", async (req, res) => {
  const products = [];

  ids = req.query?.ids?.split(",");

  async function getProduct(product) {
    await Product.find({ _id: product });
  }

  for (let i = 0; i < ids.length - 1; i++) {
    products[i] = await Product.findOne({ _id: ids[i] });
  }

  res.json(products);
});

router.get("/createUser", async (req, res) => {
  let userForm = JSON.parse(req.query.userForm);

  const user = new User({
    session: userForm.userSessionID,
    name: userForm.userName,
    phone: userForm.userPhone,
    email: userForm.userEmail,
    adress: userForm.userAdress,
    createdAt: new Date().toUTCString(),
  });

  if (!(await User.findOne({ email: user.email }))) {
    await user.save();

    res.json({ ok: "ok", user: user });
  } else {
    res.json({ ok: "user is exist", user: user });
  }
});

router.get("/createCheck", async (req, res) => {
  let checkForm = JSON.parse(req.query.checkForm);

  const check = new Check({
    userSession: checkForm.userSessionID,
    createdAt: new Date().toUTCString(),
  });

  await check.save();

  res.json({ ok: "ok", checkID: check._id });
});

router.get("/createSoldGoods", async (req, res) => {
  let productsForm = JSON.parse(req.query.productsForm);

  let products = productsForm.products;

  for (const key in products) {
    if (Object.hasOwnProperty.call(products, key)) {
      const soldGoods = new SoldGoods({
        userSession: productsForm.userSessionID,
        productID: key,
        checkID: productsForm.checkID,
        shopID: productsForm.shopID,
        productsCount: products[key].count,
        createdAt: new Date().toUTCString(),
      });

      await soldGoods.save();
    }
  }

  res.json({ ok: "ok" });
});

router.get("/getHistory", async (req, res) => {
  const user = JSON.parse(req.query.user);

  const products = await SoldGoods.find({ userSession: user.session });

  res.json(products);
});

module.exports = router;
