document.getElementById('demo').style.fontSize='20px';
var ans;
function multiplicationtable(userInputNumber){
    if(isNaN(userInputNumber)) return;
    var demoText = '';
    for (var i=1; i<=10; i++) {
        ans = userInputNumber * i;
        demoText = demoText + userInputNumber +' * ' + i + ' = ' +  ans  + '<br />';
    }
    document.getElementById('demo').innerHTML = demoText;
    document.getElementById('demo').style.border = '3px solid #000';
    document.getElementById("demo").style.padding = "10px 50px";
}