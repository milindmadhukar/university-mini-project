import User from "../types/User";
import mg from "./images/mg.jpg";
import thicc_frog_pfp from "./images/thicc__frog.jpg";

export const milind: User = {
  id: "1dcca62f-98e5-4193-bf86-102e6b7ba3bf",
  username: "milind_1504",
  avatar: "https://i.ibb.co/7jpf15G/Website-Logo.png",
  followers: ["c184ebf5-69d6-4e92-9f81-0a23d0f0a3a3"],
  following: ["78e7faa3-c60a-4713-87c1-f369a4e2958a"],
};

export const martingarrix: User = {
  id: "78e7faa3-c60a-4713-87c1-f369a4e2958a",
  username: "martingarrix",
  avatar: mg,
  following: [],
  followers: [
    "1dcca62f-98e5-4193-bf86-102e6b7ba3bf",
    "c184ebf5-69d6-4e92-9f81-0a23d0f0a3a3",
  ],
};

export const thicc__frog: User = {
  id: "c184ebf5-69d6-4e92-9f81-0a23d0f0a3a3",
  username: "thicc__frog",
  avatar: thicc_frog_pfp,
  followers: ["1dcca62f-98e5-4193-bf86-102e6b7ba3bf"],
  following: [
    "78e7faa3-c60a-4713-87c1-f369a4e2958a",
    "1dcca62f-98e5-4193-bf86-102e6b7ba3bf",
  ],
};

const initialUsers: User[] = [milind, martingarrix, thicc__frog];

export default initialUsers;
