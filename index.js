
function calc(){
    var htf=parseInt(document.getElementById("htf").value);
    var hti=parseInt(document.getElementById("hti").value);
    var wt=parseInt(document.getElementById("wt").value);
    var bmi,status,clr;
     var ht=((htf+(hti/12))/3.33).toFixed(3);
    if(ht>2.7||wt>150||wt<0||hti>12||hti<0||htf<0)
    {
        bmi="invalid input";
        clr="black";
    }
    else{
     bmi=(wt/(ht*ht)).toFixed(3);
    }
    if(bmi<=18.4)
    {
        status="  (under weight)";
        clr="yellow";
    }
    else if(bmi>=18.4&&bmi<=24.9)
    {
        status="    (ideal)";
        clr="green";
    }
    else if(bmi>=24.9){
        status="  (over weight)";
        clr="red";
    }
    else{
        status=" (none)";
        clr="black";
    }
    document.getElementById("sd").style.color=clr;
    document.getElementById("sd").innerHTML="BMI:"+bmi+status;
}