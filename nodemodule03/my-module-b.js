//การสร้างโมดูลแบบ esmodule แบบที่ 1
const dataA = "Hello..."

function sayHi(){
    console.log("Hi...")
}

const sawadee = (yourname) => {
    console.log(`สวัสดี ${yourname}`)
}

export {dataA, sayHi, sawadee}


