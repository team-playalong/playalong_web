function uuidAlgorithm() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

export function generateUuid() {
  const numAttempts = 8;
  let uuid = uuidAlgorithm();
  for (let i = 0; i < numAttempts - 1; i++) {
    uuid += '-' + uuidAlgorithm();
  }

  return uuid;
}
