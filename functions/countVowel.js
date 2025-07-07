//write an logic of a function that count the number of vowels in a string and also print them


function countVowels(str){
    let vowels = 'aeiouAEIOU'
    let count = 0;
    let found = ""
    for (const ch of str) {
        if(vowels.includes(ch)){
            count++;
            found+=ch+" "
        }
    }
    console.log(`the number of vowels in ${str} are: ${count}\n and the vowels are :: ${found}`)
}
countVowels('suraj SINGH')
