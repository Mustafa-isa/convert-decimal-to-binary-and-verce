let  des =document.getElementById('des')
let  bin =document.getElementById("bin")
let error =document.getElementById("error")
let auct =document.getElementById("aoct")
let hex =document.getElementById('hex')

//add event lisnter
//from decimal to all 
des.addEventListener('input' , () =>{
  let decimal =parseInt(des.value)
 bin.value =decimal.toString(2)
 auct.value = decimal.toString(8)
 hex.value =decimal.toString(16)

})
//auval to all
auct.addEventListener("input" ,()=>{


  let decimal= des.value =parseInt(auct.value ,8)
bin.value = decimal.toString(2)
 hex.value = decimal.toString(16)


})
// convert from hex to all 
hex.addEventListener("input" ,() =>{
  let decimal= des.value =parseInt(hex.value ,16)
bin.value = decimal.toString(2)
 auct.value = decimal.toString(8)


})





//convert from binary to all

bin.addEventListener("input" ,() =>{
  let decimal= des.value =parseInt(bin.value  ,2)

 auct.value = decimal.toString(8)

 hex.value = decimal.toString(16)
})
