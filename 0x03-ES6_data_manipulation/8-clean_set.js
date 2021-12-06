export default function updateUniqueItems(set, startString) {
  let res = '';
  if (!startString || !startString.length) {
      return res;
  } else {
      set.forEach((element) => {
        if (element && element.startsWith(startString)) {
          res += `${element.slice(startString.length)}-`;
        }
      });
      return res.slice(0, res.length - 1);
  }
}
