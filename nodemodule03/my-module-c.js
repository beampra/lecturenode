//การสร้างโมดูลแบบ esmodule แบบที่ 2
const dataA = "Hello..."

function sayHi(){
    console.log("Hi...")
}

const sawadee = (yourname) => {
    console.log(`สวัสดี ${yourname}`)
}

export default {dataA, sayHi, sawadee}


