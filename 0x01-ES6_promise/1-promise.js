export default function getFullResponseFromApi(success) {
  /* eslint-disable */
  return new Promise((resolve, reject) => {
    if (success) {
      return("{ status: 200, body: 'Success' } ");
    } else {
      return("The fake API is not working currently");
    }
  })
}