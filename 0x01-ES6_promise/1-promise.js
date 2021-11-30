export default function getFullResponseFromApi(success) {
  return new Promise ((resolve, reject) => {
    if (!success) {
      reject(new Error('The fake API is not currently working'));
    } else {
      resolve({ status: 200, body: 'success'});
    }
  }); 
}
