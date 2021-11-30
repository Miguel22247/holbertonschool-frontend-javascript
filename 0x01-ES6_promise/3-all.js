import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup() {
  const promise1 = Promise.resolve(uploadPhoto);
  const promise2 = Promise.resolve(createUser);

  return Promise.all([promise1, promise2]).then(values => console.log(values));
}
