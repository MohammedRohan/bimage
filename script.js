function draw(){
   let x = document.getElementById("input1").files[0]
   if(x){
   var reader = new FileReader()
   reader.readAsBinaryString(x)
   reader.onload = function(evt){
    document.getElementById("img1").src = "data:image/jpeg;base64," + evt.target.result;
   }
}

}