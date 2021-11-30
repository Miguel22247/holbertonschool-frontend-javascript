import { uploadPhoto, createUser } from "./utils.js";
export default function handleProfileSignup() {
  return promise
  .all([uploadPhoto, createUser])
}
