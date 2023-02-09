let  des =document.getElementById('des')
let  bin =document.getElementById("bin")
let error =document.getElementById("error")
//add event lisnter
des.addEventListener('input' , () =>{
  let decimal =parseInt(des.value)
 bin.value =decimal.toString(2)

})
bin.addEventListener('input', () =>{

if(check(bin.value)){

error.classList ='correct'
error.innerText= 'vaild transaction'
 des.value =parseInt(bin.value ,2)

}
else{

error.innerText ='please enter a  number'
error.classList ='error'


}




})
 function check(input){
for(let i  =0 ;i<input.length ; i++){


if(!input[i] =='0'  || !input[i] =='1'){
    return true
}
return false

}


}