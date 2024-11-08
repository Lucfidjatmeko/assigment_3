function compareNumbers(firstNumber, secondNumber) {
    if (secondNumber > firstNumber) {
        return true;
    } else if (secondNumber < firstNumber) {
        return false;
    } else {
        return -1;
    }
}
console.log(compareNumbers(5, 10)); // Output: true
console.log(compareNumbers(10, 5)); // Output: false
console.log(compareNumbers(5, 5));  // Output: -1


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"


function sortString(text) {
    return text.split('').sort().join('');
}
console.log(sortString("hello")); // Output: "ehllo"
console.log(sortString("world")); // Output: "dlorw"


function sortStringManual(text) {
    let chars = text.split(''); // Ubah string menjadi array karakter
    let n = chars.length;
    
    // Algoritma Bubble Sort
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
                // Tukar posisi karakter jika tidak sesuai urutan
                let temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }
    
    return chars.join(''); // Gabungkan array menjadi string
}
console.log(sortStringManual("hello")); // Output: "ehllo"
console.log(sortStringManual("world")); // Output: "dlorw"


function checkAB(str) {
    for (let i = 0; i < str.length - 4; i++) {
        if ((str[i] === 'a' && str[i + 4] === 'b') || (str[i] === 'b' && str[i + 4] === 'a')) {
            return true;
        }
    }
    return false;
}
console.log(checkAB("lane borrowed")); // Output: true (ada "a...b" dengan jarak 3 karakter)
console.log(checkAB("hello world"));   // Output: false
console.log(checkAB("abracadabra"));   // Output: true (ada "a...b")


function findGCD(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}
console.log(findGCD(48, 18)); // Output: 6
console.log(findGCD(100, 25)); // Output: 25
console.log(findGCD(7, 5));    // Output: 1 (bilangan prima relatif)


function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));   // Output: true
console.log(isPrime(10));  // Output: false
console.log(isPrime(13));  // Output: true
console.log(isPrime(1));   // Output: false


function findPrimesInRange(angkaPertama, angkaKedua) {
    function isPrime(number) {
        if (number <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primeNumbers = [];
    for (let i = angkaPertama; i <= angkaKedua; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
console.log(findPrimesInRange(10, 20)); // Output: [11, 13, 17, 19]
console.log(findPrimesInRange(1, 10));  // Output: [2, 3, 5, 7]
console.log(findPrimesInRange(15, 30)); // Output: [17, 19, 23, 29]


