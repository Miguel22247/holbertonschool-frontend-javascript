export default function groceriesList() {
  const groceriesArray = [['Apples', 10], ['Tomatoes', 10], ['Pasta', 1], ['Rice', 1], ['Banana', 5]];
  const groceriesMap = new Map();
  for (const elements of groceriesArray) {
    groceriesMap.set(elements[0], elements[1]);
  }
  return groceriesMap;
}
