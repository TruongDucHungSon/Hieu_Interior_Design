const ProductImage1 = require("../assets/images/product1.jpg");
const ProductImage2 = require("../assets/images/product2.jpg");
const ProductImage3 = require("../assets/images/product3.jpg");
const ProductImage4 = require("../assets/images/product4.jpg");
const DesignImage1 = require("../assets/images/ds1.jpg");
const DesignImage2 = require("../assets/images/ds2.jpg");
const DesignImage3 = require("../assets/images/ds3.jpg");
const DesignImage4 = require("../assets/images/ds4.jpg");

const ProjectImage1 = require("../assets/images/pj1.jpg");
const ProjectImage2 = require("../assets/images/pj2.jpg");
const ProjectImage3 = require("../assets/images/pj3.jpg");
const ProjectImage4 = require("../assets/images/pj4.jpg");

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

export const DATA_PROJECT = [
  {
    id: 0,
    label: "Project",
    price: "Mono Redesign",
    image: ProjectImage1,
  },
  {
    id: 1,
    label: "Project",

    price: "Mono Redesign",
    image: ProjectImage2,
  },
  {
    id: 2,
    label: "Project",

    price: "Mono Redesign",
    image: ProjectImage3,
  },
  {
    id: 3,
    label: "Project",

    price: "Mono Redesign",
    image: ProjectImage4,
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

export const DATA_DESIGNER = [
  {
    id: 0,
    image: require("../assets/images/d1.jpg"),
  },
  {
    id: 1,
    image: require("../assets/images/d2.jpg"),
  },
  {
    id: 2,
    image: require("../assets/images/d3.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/d4.jpg"),
  },
] as const;

export const MENU_LIST = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
    path: "/blog",
  },
] as const;
