function invokeIfFunction(func, params) {
  if (!Array.isArray(params) && typeof params !== 'object') {
    params = [params];
  }
  if (typeof func === 'function') {
    return func.apply(null, params);
  }
}

export { invokeIfFunction };
