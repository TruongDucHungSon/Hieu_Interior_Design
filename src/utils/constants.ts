const ProductImage1 = require("../assets/images/product1.jpg");
const ProductImage2 = require("../assets/images/product2.jpg");
const ProductImage3 = require("../assets/images/product3.jpg");
const ProductImage4 = require("../assets/images/product4.jpg");

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
