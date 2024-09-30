const removeEmptyObjects = (o) => {
    for (var k in o) {
      if (!o[k] || typeof o[k] !== "object") {
        continue // If null or not an object, skip to the next iteration
      }
      // The property is an object
      removeEmptyObjects(o[k]); // <-- Make a recursive call on the nested object
      if (Object.keys(o[k]).length === 0) {
        delete o[k]; // The object had no properties, so delete that property
      }
    }
      return o;
  }
  
const compactObject = (val) => {
    const data = Array.isArray(val) ? val.filter(Boolean) : val;
    let withEmptyKeys = Object.keys(data).reduce(
        (acc, key) => {
            const value = data[key];
            if (Boolean(value))
                acc[key] = typeof value === "object" ? compactObject(value) : value;
            return acc;
        },
        Array.isArray(val) ? [] : {}
    );
    let withoutEmptyArrays = Object.entries(withEmptyKeys).reduce((acc, [k, v]) => v ? { ...acc, [k]: v } : acc, {});
    return removeEmptyObjects(withoutEmptyArrays);
};

export function determineActiveFilters(filterStatus) {
    return compactObject(filterStatus);
}