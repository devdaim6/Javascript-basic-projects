    let inputYear=document.getElementById("year").value;
    let int=parseInt(inputYear);
    
    
    function checkLeapYear(){
        let result=document.getElementById("leap_year");
        if(inputYear%4===0 ){
            if(inputYear%100===0){
                if(inputYear%400===0){
                    result.value="Leap Year";
                    
                }   else{
                    
                    result.value="Not a Leap Year";
                }
            }else{
                result.value="Leap Year";
                
            }
        }else{
            
            result.value="Not a Leap Year";
           
        }
    }