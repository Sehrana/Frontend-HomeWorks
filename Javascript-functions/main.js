/*1*/
console.log(3 * 4);                 
console.log(10 * 7);       
/*2*/

    
function calculateDiscount(price, discountPercent) {
    if (discountPercent < 0 || discountPercent > 100) {
        console.error("Xəta");
        return null;
    }

    if (price < 0) {
        console.error("Xəta");
    return null;
    }

    return price - (price * discountPercent / 100);

}
console.log(calculateDiscount(100, 20));   
console.log(calculateDiscount(59.9, 15));   
console.log(calculateDiscount(200, 0));    
console.log(calculateDiscount(150, 110)); 
console.log(calculateDiscount(-10, 10))
function getGradeByScore(score) {
    if (score >= 85 && score <= 100) {
        return "A";
    } else if (score >= 70 && score < 80) {
        return "C";
    
}
}
console.log(getGradeByScore(85));
console.log(getGradeByScore(72));

/*3*/
function findAverage(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    console.error("Xəta");
    return null;
  }

  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
console.log(findAverage([1,2,3]))
console.log(findAverage([15, 25, 10, 30]))

/*4*/
const divisorCountSimple = (number) => {
  if (typeof number !== "number" || number <= 0) {
    console.error("Xəta: düzgün ədəd daxil edilməlidir.");
    return null;
  }

  let divisors = [];

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  console.log(`[${divisors.join(", ")}]`);
  console.log(`Bölənlərin sayı: ${divisors.length}`);
  return divisors.length;
};

divisorCountSimple(1);
divisorCountSimple(6);
divisorCountSimple(12);
divisorCountSimple(25);
divisorCountSimple(100);

/*5*/
function getGradeByScore(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";  
}
}
console.log(getGradeByScore(90))
console.log(getGradeByScore(85))
console.log(getGradeByScore(72))
console.log(getGradeByScore(60))
console.log(getGradeByScore(59))
/*6*/
function reverString(start) {
    return start.split('').reverse().join('');
}

console.log(reverString("code"));  
console.log(reverString("hello")); 

/*7*/
function sumRange(start, _end) {
  let sum = 0;
  for(let i = start; i <= _end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumRange(1, 4)); // Output: 10 (1+2+3+4)
console.log(sumRange(4, 6)); // Output: 15 (4+5+6)
