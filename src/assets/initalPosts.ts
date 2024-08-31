import Post from "../types/Post";
import mg1 from "./images/mg1.jpg";
import mg2 from "./images/mg2.jpg";
import max1 from "./images/max1.jpg";
import { martingarrix, max, milind, thicc__frog } from "./initalUsers";

const initalPosts: Post[] = [
  {
    id: "78855781-7142-4cee-b952-33f4788ca871",
    user: martingarrix,
    caption:
      "New York HOLY SHIT!!! thanks so much for last night.. can’t believe we get to do it again tonight for round 2!! 🔥❤️ (also sorry about the earthquake)",
    imageUrl: mg1,
    comments: [
      {
        user: max,
        content: "Lets gooooo!",
      },
    ],
  },

  {
    id: "2e57c9f1-5281-4f13-b37e-d0be5494db6d",
    user: martingarrix,
    caption: "thank you @f1 & @saudiarabiangp that was CRAZY!",
    imageUrl: mg2,
    comments: [
      {
        user: thicc__frog,
        content: "This is the best",
      },
    ],
  },

  {
    id: "ec553fbb-c4f9-485c-b42a-5764ae8c4a92",
    user: max,
    caption: "Shanghai 2024 🇨🇳 🙏",
    imageUrl: max1,
    comments: [
      {
        user: milind,
        content: "DU DU DU DU MAX VERSTAPPEN!",
      },
    ],
  },
];

export default initalPosts;
