// Generate Random Values in Array
function generateArray(length, minValue, maxValue) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    const randomValue =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    arr.push(randomValue);
  }
  return arr;
}

// to string()
function printFormattedArray(array) {
  return array.map((value, index) => `[елемент_${index + 1}_значення_${value}]`);
}

// TASK 1
function countAndSumEvenInRange(array, minValue, maxValue) {
  let sum = 0;
  let count = 0;

  for (const num of array) {
    if (num >= minValue && num <= maxValue && num % 2 === 0) {
      sum += num;
      count++;
    }
  }

  return {
    range: `від ${minValue} до ${maxValue}`,
    count: count,
    sum: sum
  };
}

// Task 2
function getAverageAndCountGreater(array) {
  if (array.length === 0) return { average: 0, countGreater: 0 };

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let avrg = sum / array.length;
  let countOfAvrg = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > avrg) {
      countOfAvrg++;
    }
  }

  return {
    average: avrg,
    countGreater: countOfAvrg
  };
}

// Task 3
function sumOfTwoArray(firstArray, secondArray) {
  return firstArray.map((number, index) => number + secondArray[index]);
}

// Task 4
function concatenationOfTwoArray(firstArray, secondArray) {
  return firstArray.concat(secondArray);
}

// Task 5
function swapMinMax(array) {
  if (array.length === 0) return { originalArray: array, modifiedArray: array, min: null, max: null };

  const newArray = [...array];
  let min = newArray[0];
  let max = newArray[0];
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
      maxIndex = i;
    }
    if (newArray[i] < min) {
      min = newArray[i];
      minIndex = i;
    }
  }

  let temp = newArray[minIndex];
  newArray[minIndex] = newArray[maxIndex];
  newArray[maxIndex] = temp;

  return {
    min: min,
    max: max,
    modifiedArray: newArray
  };
}

// Task 6
function splitArrayPositiveAndNegative(array) {
  let positiveArray = array.filter(num => num > 0);
  let negativeArray = array.filter(num => num < 0);

  return {
    positive: positiveArray,
    negative: negativeArray
  };
}

// Task 7
function deleteFromArrayDuplicates(array) {
  if (array.length === 0) return { originalArray: array, modifiedArray: [] };

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[maxIndex]) {
      maxIndex = i;
    }
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }

  let max = array[maxIndex];
  let min = array[minIndex];

  let newArray = array.filter((number, index) => {
    if (number === max || number === min) {
      return index === maxIndex || index === minIndex;
    }
    return true;
  });

  return {
    originalArray: array,
    modifiedArray: newArray
  };
}

// Task 8
function averageOfArray(firstArray, secondArray) {
  let sumFirstArray = 0;
  let sumSecondArray = 0;

  for (let i = 0; i < firstArray.length; i++) {
    sumFirstArray += firstArray[i];
  }

  let avrgFirstArray = firstArray.length ? sumFirstArray / firstArray.length : 0;

  for (let i = 0; i < secondArray.length; i++) {
    sumSecondArray += secondArray[i];
  }

  let avrgSecondArray = secondArray.length ? sumSecondArray / secondArray.length : 0;

  let thirdArray = firstArray.concat(secondArray);

  let min = Math.min(avrgFirstArray, avrgSecondArray);
  let max = Math.max(avrgFirstArray, avrgSecondArray);

  return thirdArray.filter(number => number >= min && number <= max);
}

////////////////////////////////////////////////////
//////////       DEMONSTRATION         /////////////
////////////////////////////////////////////////////

const firstArray = generateArray(3, -10, 10);
const secondArray = generateArray(3, 0, 10);

console.log("\nЗгенерований перший масив:");
console.log(printFormattedArray(firstArray).join("\n"));

console.log("\nЗгенерований другий масив:");
console.log(printFormattedArray(secondArray).join("\n"));

console.log("\n-------------TASK 1-------------", "\nПорахувати кількість та суму парних елементів масиву, що знаходяться в заданому діапазоні.");
console.log(countAndSumEvenInRange(firstArray, 0, 5));

console.log("\n-------------TASK 2-------------", "\nВизначити середнє арифметичне елементів масиву та кількість елементів, що є більшими за середнє арифметичне");
console.log(getAverageAndCountGreater(firstArray));

console.log("\n-------------TASK 3-------------", "\nУтворити третій масив як попарну суму елементів двох масивів однакової довжини");
console.log(sumOfTwoArray(firstArray, secondArray));

console.log("\n-------------TASK 4-------------", "\nУтворити третій масив як конкатенацію двох масивів різної довжини");
console.log(concatenationOfTwoArray(firstArray, secondArray));

console.log("\n-------------TASK 5-------------", "\nВ масиві поміняти місцями максимум та мінімум");
console.log(swapMinMax(firstArray));

console.log("\n-------------TASK 6-------------", "\nМасив поділити на два масиви: з додатніх та від’ємних елементів");
console.log(splitArrayPositiveAndNegative(firstArray));

console.log("\n-------------TASK 7-------------", "\nЗ масиву видалити дублікати максимума та мінімума.");
console.log(deleteFromArrayDuplicates(firstArray));

console.log("\n-------------TASK 8-------------", "\nВизначити середні арифметичні двох масивів. Утворити третій масив з елементів обидвох масивів, що знаходяться в межах між значеннями середніх арифметичних");
console.log(averageOfArray(firstArray, secondArray));
