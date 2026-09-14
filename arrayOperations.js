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
  const formattedElements = array.map((value, index) => {
    console.log(`[елемент_${index + 1}_значення_${value}]`);
  });
}

//TASK 1
function countAndSumEvenInRange(array, minValue, maxValue) {
  let sum = 0;
  let count = 0;

  for (const num of array) {
    if (num >= minValue && num <= maxValue && num % 2 === 0) {
      sum += num;
      count++;
    }
  }

  console.log(
    `\nДіапазон фільтрації елементів: від ${minValue} до ${maxValue}`,
  );
  console.log(`Кількість парних елементів у діапазоні: ${count}`);
  console.log(`Сума парних елементів у діапазоні: ${sum}`);
}

// Task 2
function getAverageAndCountGreater(array) {
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

  console.log(`Середнє: ${avrg}, Кількість більших: ${countOfAvrg}`);
}

// Task 3
function sumOfTwoArray(firstArray, secondArray) {

    let newArray = firstArray.map((number, index) => {
        return number + secondArray[index]
    })

    console.log(newArray)
}

// Task 4
function сoncatenationOfTwoArray(firstArray, secondArray) {
  let newArray = firstArray.concat(secondArray)
  console.log(newArray)
}

// Task 5
function swapMinMax(array) {
  let min = array[0];
  let max = array[0];

  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }

  let temp = array[minIndex];
  array[minIndex] = array[maxIndex];
  array[maxIndex] = temp;

  console.log("\nМаксимальний елемент в масиві: ", max)
  console.log("Мінімальний елемент в масиві: ", min)
  console.log("\nЗмінений масив:")
  console.log(array)
}

// Task 6
function splitArrayPositiveAndNegative(array) {
  let possitiveArray = array.filter(array => array > 0);
  let neggativeArray = array.filter(array => array < 0);

    console.log("\nМасив із додатніми числами:");
    console.log(possitiveArray);

    console.log("\nМасив із від'ємними числами:");
    console.log(neggativeArray);
}

// Task 7
function deleteFromArrayDublicates(array) {
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

    console.log("\nЗмінений масив:")
    console.log(newArray);
    console.log("\nПочатковий масив:")
    console.log(array);
}

// Task 8
function averageOfArray(firstArray, secondArray) {
  let countFirstArray = 0;
  let sumFirstArray = 0;

  let countSecondArray = 0;
  let sumSecondArray = 0;

  for (let i = 0; i < firstArray.length; i++){
    sumFirstArray += firstArray[i];
    countFirstArray++;
  }

  let avrgFirstArray = sumFirstArray / countFirstArray;

    for (let i = 0; i < secondArray.length; i++){
    sumSecondArray += secondArray[i];
    countSecondArray++;
    }
  
  let avrgSecondArray = sumSecondArray / countSecondArray;

  let thirdArray = firstArray.concat(secondArray)

  let min = Math.min(avrgFirstArray, avrgSecondArray);
  let max = Math.max(avrgFirstArray, avrgSecondArray);

  thirdArray = thirdArray.filter(number => number >= min && number <= max);

  console.log(thirdArray)
}

////////////////////////////////////////////////////
//////////      DEMONSTRATION         /////////////
//////////////////////////////////////////////////

const firstArray = generateArray(3, -10, 10);
const secondArray = generateArray(3, 0, 10);

console.log("\nЗгенерований перший масив:");
printFormattedArray(firstArray);
console.log("\nЗгенерований другий масив:");
printFormattedArray(secondArray);

console.log("\n-------------TASK 1-------------", "\nПорахувати кількість та суму парних елементів масиву, що знаходяться в заданому діапазоні. ");
countAndSumEvenInRange(firstArray, 0, 5);
console.log("\n-------------TASK 2-------------", "\nВизначити середнє арифметичне елементів масиву та кількість елементів, що є більшими за середнє арифметичне");
getAverageAndCountGreater(firstArray);
console.log("\n-------------TASK 3-------------", "\nУтворити третій масив як попарну суму елементів двох масивів однакової довжини");
sumOfTwoArray(firstArray, secondArray)
console.log("\n-------------TASK 4-------------", "\nУтворити третій масив як конкатенацію двох масивів різної довжини");
сoncatenationOfTwoArray(firstArray, secondArray)
console.log("\n-------------TASK 5-------------", "\nВ масиві поміняти місцями максимум та мінімум");
swapMinMax(firstArray)
console.log("\n-------------TASK 6-------------", "\nМасив поділити на два масиви: з додатніх та від’ємних елементів");
splitArrayPositiveAndNegative(firstArray)
console.log("\n-------------TASK 7-------------","\nЗ масиву видалити дублікати максимума та мінімума.")
deleteFromArrayDublicates(firstArray)
console.log("\n-------------TASK 8-------------", "\nВизначити середні арифметичні двох масивів. Утворити третій масив з елементів обидвох масивів, що знаходяться в межах між значеннями середніх арифметичних")
averageOfArray(firstArray,secondArray)
