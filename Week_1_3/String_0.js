function getLength(str) {
    console.log("Original String ", str)
    console.log("length", str.length)
}

getLength("Hii Ravishankar")


function findIndexOf(str, target){
    console.log("Originla String ", str)
    console.log("Index of: ",str.indexOf(target))
}

findIndexOf("Hii Ravishankar", "Ravishankar")

function findLastIndexOf(str, target){
    console.log("Original String ", str)
    console.log("Last Index of ", str.lastIndexOf(target))
}
findLastIndexOf("Hii Ravishankar", "Ravishankar")

function getSlice(str, startNo, endNo){
    console.log("Original String", str)
    console.log("Slice", str.slice(startNo, endNo))
}
getSlice("Hii Ravishankar", 0, 5)

function replaceString(str, target, replacement){
    console.log("Original String", str)
    console.log("replaced String", str.replace(target, replacement))
}

replaceString("Hii Ravishankar", "Ravishankar", "Vaibhav")

function splitString(str, seperator){
    console.log("Original String", str)
    console.log("Splited String ", str.split(seperator))
}

splitString("Hi,i,Ravi,shankar,Good,Morning", " ,")




