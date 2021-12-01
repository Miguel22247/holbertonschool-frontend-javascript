import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([ signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((result) => {
      const profilearray = [];
      result.forEach((index) => {
        if (index.status !== 'fullfilled') {
          profilearray.push({ status: index.status, value: `Error: ${index.value}`,});
        } else {
          profilearray.push({ status: index.status, value: index.value, })
        }
      });
      return profilearray;
    });
}
