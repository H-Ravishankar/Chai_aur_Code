const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//        console.log(val);
// })

// coding.forEach ( (item)=>{
//     console.log(item)
// })

// function pritme(item){
//     console.log(item);
// }

// coding.forEach(pritme)

// coding.forEach( (item, index, arr)=>{
//     console.log(item,index, arr);
// })


const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'Python',
        languageFileName: 'python'
    },
    {
        languageName: 'C++',
        languageFileName: 'cpp'
    }
]


myCoding.forEach ( (item)=>{
      console.log(item.languageName)
})