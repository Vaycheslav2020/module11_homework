export const calculateArray = (arr) => {
  if (!arr.length || checkingNumber(arr) === false) {
    return "это должен быть массив и он не должен быть пустым";
  }

  let resArr = [];
  arr.map((item) => {
    if (item % 2 === 0) {
      item += 4;
      resArr.push(item);
    } else {
      item -= 2;
      if (item % 13 === 0) {
        return;
      }
      resArr.push(item);
    }
  });
  let res = 0;
  resArr.map((i) => {
    res += i;
  });
  return res;
};

const checkingNumber = (array) => {
  let check = true;
  array.map((item) => {
    if (typeof item !== "number" || isNaN(item)) {
      check = false;
    }
  });
  return check;
};
