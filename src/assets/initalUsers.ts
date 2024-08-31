import User from "../types/User";
import mg_pfp from "./images/mg.jpg";
import thicc_frog_pfp from "./images/thicc__frog.jpg";
import max_pfp from "./images/max.jpg";

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
  avatar: mg_pfp,
  following: ["4ad4dcc7-2a13-4e85-ae1f-42992afcde6d"],
  followers: [
    "1dcca62f-98e5-4193-bf86-102e6b7ba3bf",
    "c184ebf5-69d6-4e92-9f81-0a23d0f0a3a3",
    "4ad4dcc7-2a13-4e85-ae1f-42992afcde6d",
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

export const max: User = {
  id: "4ad4dcc7-2a13-4e85-ae1f-42992afcde6d",
  username: "maxverstappen1",
  avatar: max_pfp,
  followers: ["78e7faa3-c60a-4713-87c1-f369a4e2958a"],
  following: ["78e7faa3-c60a-4713-87c1-f369a4e2958a"],
};

const initialUsers: User[] = [milind, martingarrix, thicc__frog, max];

export default initialUsers;
