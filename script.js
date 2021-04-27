function btnclick(val)
{
    document.getElementById( "Displayscreen").value+=val   
}

function displayClear(val)
 {
    document.getElementById("Displayscreen").value=""    
}

function equalclick()
{
    var text=document.getElementById("Displayscreen").value
     var result=eval(text)
     document.getElementById("Displayscreen").value=result
}