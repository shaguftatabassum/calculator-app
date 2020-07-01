var textview=document.getElementById("textview");

function insert(Value) {
    if(textview.value=="0")textview.value=Value;
    else  textview.value+=Value;
}
function clean() {
    textview.value="0";
}
function back(){
    let val =textview.value;
    if(val.length>0)textview.value=val.substr(0, val.length-1);
}
function equalTo() {
    try{
    var expression=textview.value
    var result=eval(expression);
    textview.value=expression+"="+result;
    }catch(err){
           textview.value="error";
    }
}
function sqaureRoot(){
  var inputNum1=textview.value;
  try{
         var result = Math.sqrt(inputNum1);
          textview.value = result;
    }catch(err){
           textview.value="error";
    }

}
function sqaure(){
  var inputNum1=textview.value;
  try{
      var result =inputNum1*inputNum1;
        textview.value = result;
  } catch(err){
        textview.value="error";
    }
}