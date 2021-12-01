import { signUpUser } from "./4-user-promise";
import { uploadPhoto } from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([ signUpUser(firstName, lastName), uploadPhoto(fileName) ])
    .then((result) => {
      const profilearray = [];
      result.forEach((profileindex) => {
        if (profileindex.status === 'fulfilled') {
          profilearray.push({ status: profileindex.status, value: profileindex.value, });
        } else {
          profilearray.push({ status: profileindex.status, value: `Error: ${profileindex.reason.message}`, });
        }
      });
      return profilearray;
    });
}
