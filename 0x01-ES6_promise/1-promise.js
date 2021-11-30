export default function getFullResponseFromApi(success) {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    if (success) {
      throw ("{ status: 200, body: 'Success' } ");
    } else {
      throw new Error("The fake API is not working currently");
    }
  })
}