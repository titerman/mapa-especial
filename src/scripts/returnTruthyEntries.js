export function returnTruthyEntries(inputArray) {
    const flatArray = Object.keys(inputArray).map(key => ({ item: key, sold: inputArray[key] }));
    let truthyArray = flatArray.filter(function (el) {
        return el.sold;
      });
    return truthyArray;
}