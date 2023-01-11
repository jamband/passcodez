export const generatePasscode = (length: number) => {
  return [...Array(length)]
    .map(() => {
      return Math.floor(Math.random() * Math.floor(10)).toString();
    })
    .join("");
};

export const generateInvalidPasscode = (passcode: string) => {
  let value: number;

  if (passcode.length < 4 || passcode.length > 6) {
    throw new Error("Passcode must be between 4 and 6 characters.");
  }

  value = Number(passcode) || 0;

  if (passcode.length === 4) {
    value = value === 9999 ? 0 : value + 1;
  }
  if (passcode.length === 5) {
    value = value === 99999 ? 0 : value + 1;
  }
  if (passcode.length === 6) {
    value = value === 999999 ? 0 : value + 1;
  }

  return value.toString().padStart(passcode.length, "0");
};
