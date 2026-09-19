//TASK K: 

//Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;
function countVowels(str) {
    let lowStr = str.toLowerCase()
    let count = 0;
    for(let char of lowStr) {
        if(char === "a" || char === "o" || char === "e" || char === "i" || char === "u" || char === "y") {
            count++
        }
    }
    return count
}
const result = countVowels("agentic")
console.log(result)

// TASK G: 
//  // Yagona parametrga ega function tuzing. 
// // Bu function parametr orqali integer ma'lumotlardan iborat arrayni qabul qilsin.
//  // Ushbu function arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin. 
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]);  1  Bu yerda eng katta son 21. 
// // 21 birinchi marta 1-indexda emas, 1-indexli?  JavaScriptda index 0 dan boshlanadi. 
// // Shuning uchun birinchi 21 ning indexi 1.
// function getHighestIndex(arr) { let highestIndex = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[highestIndex]) {
//         highestIndex = i;
//     }
// }

// return highestIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));
// // F-TASK:
// // Yagona string argumentga ega findDoublers nomli function tuzing.
// // Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa 
// // true, aks holda false natija qaytarsin.
// // // MASALAN: findDoublers("hello") => true
// // function findDoublers(str) { for (let i = 0; i < str.length; i++) {
// // for (let j = i + 1; j < str.length; j++) {

// //         if (str[i] === str[j]) {
// //             return true;
// //         }
// //     }
// // }

// // return false;
// // }
// // const result = findDoublers("hello");
// // console.log(result);

// // // TASK E: 
// // // Shunday function tuzing, u bitta string argumentni qabul qilib,
// // //  
// // // o'sha stringni teskari qilib return qilsin. // 
// // // // MASALAN: getReverse("hello") return qiladi "olleh"
// // function getReverse(string) { let result = "";
// // for (let i = string.length - 1; i >= 0; i--) {
// //     result += string[i];
// // }

// // return result;
// // }
// // console.log(getReverse("hello"));
// // =======

// // // TASK G:
// //  // Yagona parametrga ega function tuzing. 
// //  // Bu function parametr orqali integer ma'lumotlardan iborat arrayni qabul qilsin.
// //  //   Ushbu function arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin. 
// //  // MASALAN: getHighestIndex([5, 21, 12, 21, 8]);  1  Bu yerda eng katta son 21. 
// //  // 21 birinchi marta 1-indexda emas, 1-indexli? 
// //  // // JavaScriptda index 0 dan boshlanadi. 
// //  // Shuning uchun birinchi 21 ning indexi 1.
 
// // function getHighestIndex(arr) { let highestIndex = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > arr[highestIndex]) {
// //         highestIndex = i;
// //     }
// // }

// // return highestIndex;
// }
// console.log(getHighestIndex([5, 21, 12, 21, 8]));


// // F-TASK:
// // Yagona string argumentga ega findDoublers nomli function tuzing.
// // Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa 
// // true, aks holda false natija qaytarsin.
// // MASALAN: findDoublers("hello") => true
// // function findDoublers(str) { for (let i = 0; i < str.length; i++) {
// // for (let j = i + 1; j < str.length; j++) {

// //         if (str[i] === str[j]) {
// //             return true;
// //         }
// //     }
// // }

// // return false;
// // }
// // const result = findDoublers("hello");
// // console.log(result);

// // // TASK E: 
// // // Shunday function tuzing, u bitta string argumentni qabul qilib,
// // //  
// // // o'sha stringni teskari qilib return qilsin. // 
// // // // MASALAN: getReverse("hello") return qiladi "olleh"
// // function getReverse(string) { let result = "";
// // for (let i = string.length - 1; i >= 0; i--) {
// //     result += string[i];
// // }

// // return result;
// // }
// // console.log(getReverse("hello"));

