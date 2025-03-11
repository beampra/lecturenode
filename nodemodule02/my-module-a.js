const dataA = "Hello..."

function sayHi(){
    console.log("Hi...")
}

const sawadee = (yourname) => {
    console.log(`สวัสดี ${yourname}`)
}

// module.exports = {
//     dataA,
//     sayHi,
//     sawadee
// }

//หรือ

module.exports.dataA = dataA
module.exports.sayHi = sayHi
module.exports.sawadee = sawadee

