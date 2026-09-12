// F-TASK:
// Yagona string argumentga ega findDoublers nomli function tuzing.
\// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa 
// true, aks holda false natija qaytarsin.
// MASALAN: findDoublers("hello") => true
function findDoublers(str) { for (let i = 0; i < str.length; i++) {
for (let j = i + 1; j < str.length; j++) {

        if (str[i] === str[j]) {
            return true;
        }
    }
}

return false;
}
const result = findDoublers("hello");
console.log(result);

// TASK E: 
// Shunday function tuzing, u bitta string argumentni qabul qilib,
//  
// o'sha stringni teskari qilib return qilsin. // 
// // MASALAN: getReverse("hello") return qiladi "olleh"
function getReverse(string) { let result = "";
for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
}

return result;
}
console.log(getReverse("hello"));
