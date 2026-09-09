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
