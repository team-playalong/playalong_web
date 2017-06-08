export function getNestedProperty(obj, propString) {
  if (!obj || !propString) { return false; }

  const props = propString.split('.');
  let tmpObj = obj;

  for (let i = 0; i < props.length; i++) {
    if (!!tmpObj && tmpObj[props[i]] !== undefined) {
      tmpObj = tmpObj[props[i]];
    }
    else {
      return null;
    }
  }

  return tmpObj;
}
