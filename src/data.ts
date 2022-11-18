export const people = [
  {
    name: "Mark Zuckerberg",
    imgSrc: "/assets/zuck.png",
    id: "markZuck",
    email: "zuck@oslash.com",
  },
  {
    name: "Sundar Pichai",
    imgSrc: "/assets/sunpic.jpg",
    id: "sunPichai",
    email: "sundar@oslash.com",
  },
  {
    name: "Tim Cook",
    imgSrc: "/assets/tcook.jpg",
    id: "timCook",
    email: "tim@oslash.com",
  },
  {
    name: "Nandkishor Sonune",
    imgSrc: "/assets/NandkishorSonune.jpg",
    id: "nandkishorSonune",
    email: "nandkishorsonune0@gmail.com",
  },
];

export const groups = [
  { name: "Product", imgSrc: "", id: "product", email: "product@oslash.com" },
  {
    name: "Engineering",
    imgSrc: "",
    id: "engineering",
    email: "engineering@oslash.com",
  },
  { name: "Design", imgSrc: "", id: "design", email: "design@oslash.com" },
  {
    name: "Marketing",
    imgSrc: "",
    id: "marketing",
    email: "marketing@oslash.com",
  },
];

export const access = ["Full access", "Can edit", "Can View", "No access"];

export const invitedList: {
  name: string;
  imgSrc?: string;
  id: string;
  email: string;
  access?: string;
  members?: number;
}[] = [
  {
    name: "Everyone at OSlash",
    imgSrc: "/assets/oslash.png",
    id: "everyoneOslash",
    email: "everyone@oslash.com",
    access: "No access",
    members: 25,
  },
  {
    name: "Nandkishor Sonune",
    imgSrc: "/assets/NandkishorSonune.jpg",
    id: "NandkishorSonune",
    email: "nandkishorsonune0@gmail.com",
    access: "Full access",
  },
];
