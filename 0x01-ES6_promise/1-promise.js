export default function getFullResponseFromApi(success) {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(`{ status: 200, body: 'Success' }`);
    } else {
      reject("The fake API is not working currently");
    }
  })
}