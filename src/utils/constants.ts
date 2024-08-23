const ProductImage1 = require("../assets/images/product1.jpg");
const ProductImage2 = require("../assets/images/product2.jpg");
const ProductImage3 = require("../assets/images/product3.jpg");
const ProductImage4 = require("../assets/images/product4.jpg");
const DesignImage1 = require("../assets/images/ds1.jpg");
const DesignImage2 = require("../assets/images/ds2.jpg");
const DesignImage3 = require("../assets/images/ds3.jpg");
const DesignImage4 = require("../assets/images/ds4.jpg");

export const DATA_PRODUCT = [
  {
    id: 0,
    name: "Arm Sofas",
    price: "$45.80",
    image: ProductImage1,
  },
  {
    id: 1,
    name: "Living table",
    price: "$45.80",
    image: ProductImage2,
  },
  {
    id: 2,
    name: "Floor lamp",
    price: "$45.80",
    image: ProductImage3,
  },
  {
    id: 3,
    name: "Arm Sofas",
    price: "$45.80",
    image: ProductImage4,
  },
] as const;

export const DATA_DESIGNED = [
  {
    id: 0,
    image: DesignImage1,
  },
  {
    id: 0,
    image: DesignImage2,
  },
  {
    id: 0,
    image: DesignImage3,
  },
  {
    id: 0,
    image: DesignImage4,
  },
] as const;
