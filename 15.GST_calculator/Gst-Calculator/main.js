function gstcalculator(){
    var amount=document.getElementById('amount').value;
    var option=document.getElementById('option').value;
    var rate=document.getElementById('rate').value;


    if (option=="GST EXCLUSIVE"){
        var total=(amount *(rate*0.01));
        var totalgst=total.toFixed(2);
        var net=(parseInt(amount) + parseInt(total));
        var netprice=net.toFixed(2);
        document.getElementById("totalgst").innerHTML = "Gst Amount="+ totalgst;
        document.getElementById("netprice").innerHTML = "Net Price="+ netprice;
    }
    else if(option=="GST INCLUSIVE"){
        var total=(amount-(amount*(100/(parseInt("100")+parseInt(rate)))));
        var totalgst=total.toFixed(2);
        var net=(amount - total);
        var netprice=net.toFixed(2);
        document.getElementById("totalgst").innerHTML = "Removed Gst Amount="+ totalgst;
        document.getElementById("netprice").innerHTML = "Net Price="+ netprice;
        

    }

    }
