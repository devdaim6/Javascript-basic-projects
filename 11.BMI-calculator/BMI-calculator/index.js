//Formula to calculate BMI : [weight (kg) / height (cm) / height (cm)] x 10,000


//Function to get input from the webpage
 function getInput(){   
    let weight=document.getElementById("in1");
    weight=weight.value;
    let intWeight=parseFloat(weight); //parsing it to int as the input was originally in string
    console.log(intWeight)
    // let numbers = /^[0-9]+$/;
    let height=document.getElementById("in2");
    height=height.value;
    let intHeight=parseFloat(height);
    console.log(intHeight)

//conditions to check for valid input
    if(isNaN(intWeight) && isNaN(intHeight)){
            window.alert("Please Enter Valid Weight & Height");
}       else if(isNaN(intHeight)){
                window.alert("Please Enter Valid Height");
}           else if(isNaN(intWeight)){
                    window.alert("Please Enter Valid Weight");
}

//calling function to calculate BMI 
    calculateBMI(intWeight,intHeight);

}   

function calculateBMI(inputWeight,inputHeight){
    let BMI=(inputWeight/(inputHeight*inputHeight))*10000;  //FORMULA
    //  geting the element where input should be displayed
    let outputBox=document.getElementById("exact_bmi"); 
    outputBox.innerText=Math.round(BMI);

}
