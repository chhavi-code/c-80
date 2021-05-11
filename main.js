nameofthrestudentarray=[];

function submit() 
{
    var dispstudentarray=[];

    for(var j=1; j<=4; j++)
    {
        var nameofthestudent=document.getElementById("name_of_the_student_"+j).value;
    console.log(nameofthestudent);
nameofthrestudentarray.push(nameofthestudent);
}
console.log(nameofthrestudentarray);
var length=nameofthrestudentarray.length;
console.log(length);

for(var k=0; k<length; k++)
{
    dispstudentarray.push("<h4>Name- "+nameofthrestudentarray[k]+"</h4>");
    console.log(dispstudentarray);
}
console.log(dispstudentarray);
document.getElementById("display_name_with_commas").innerHTML=dispstudentarray;

var remove=dispstudentarray.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){

    nameofthrestudentarray.sort();
    console.log(nameofthrestudentarray);
    var dipsorting=[];
    var lengthofnameofstudentsarray=nameofthrestudentarray.length;
    console.log(lengthofnameofstudentsarray);


    for(var k=0; k<lengthofnameofstudentsarray; k++)
    {
        dipsorting.push("<h4>Name- "+nameofthrestudentarray[k]+"</h4>");
        console.log(dipsorting);


        
    }

    var remove=dipsorting.join(" ");
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    
}


