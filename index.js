console.log("This is Strings Tutorial")
let a = "Khubaib"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
//console.log(a[7]) It will show undefined because 7th element does not exist
console.log(a.length)
let real_name = "Khubaib"
let friend = "Ali/Mubashir"
console.log("His name is " + real_name + " and his friend name is " + friend)
// Tempelate literal
console.log(`His name is ${real_name} and his friend name is ${friend}`)

let b = "ShayanSh"
console.log(b.toUpperCase()) // For a function to run we need to use brackets it is not important in a function
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,5))
//Replace
console.log(b.replace("Sh","24")) // In this case there are 2 Sh so it will print first Sh
console.log(b.concat(a))
console.log(b.concat(a,"ali"))
console.log(b.concat(a,"ali", "mubashir","muntaha","sudais"))
// After all these the string will not change bcz it is immutable as given below:
console.log(b)


