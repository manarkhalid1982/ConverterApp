/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/



function convert() {
    let meterFeetEl= document.getElementById("meterFetet")
    let litersGallonsEl= document.getElementById("litersGallons")
    let kiloPoundsEl= document.getElementById("kiloPounds")
    let inputValue = document.getElementById("input").value
    let displayEl=document.getElementById("display")
    
    meterFeetEl.textContent=Number((inputValue * 3.281).toFixed(2))
    litersGallonsEl.textContent=Number((inputValue * 0.264).toFixed(2))
    kiloPoundsEl.textContent=Number((inputValue * 2.204).toFixed(2))
    displayEl.textContent=`Converting ${inputValue}`
    document.getElementById("input").value=null
  
  }
