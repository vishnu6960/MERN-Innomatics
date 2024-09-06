function printVowels(vowel, delay){
    return new Promise((resolve)=>{
      setTimeout(() =>{
        resolve()
        console.log(vowel)
      }, delay);
    })
  }
  
  async function call(){
    await printVowels("a", 3000);
    await printVowels("e", 100);
    await printVowels("i", 2000);
    await printVowels("o", 10);
    await printVowels("u", 1000);
  }
  call()