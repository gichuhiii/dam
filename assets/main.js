function getInputValue(){

    // Selecting the input element and get its value 
    var inputVal = document.getElementById("someinput").value;
    
    //displaying text
    document.getElementById("text").innerHTML=`Hello ${inputVal}, welcome to the bootcamp.`;
   
    // alert(`Hello ${inputVal}, welcome to the bootcamp.`);
}