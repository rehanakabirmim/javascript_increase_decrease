//var num1=100;
//var num2=50;
//var val=num1+num2;

//val = Math.PI;
//document.write(val);
var count =0;
function increaseBtn(){
    count+=1;
    document.getElementById('countVal').innerHTML=count;
}
function restBtn(){
    count=0;
    document.getElementById('countVal').innerHTML=count;
}
function decreaseBtn(){
    if(count>0){
        count-=1;
    }
    document.getElementById('countVal').innerHTML=count;
}
function range(){
    $rangeVal =document.getElementById('rangeVal').value;
    document.getElementById('countVal').innerHTML=$rangeVal;
}
