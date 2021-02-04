// num = ""     //return false
// num = 0;        //return false
// num = 1;            //return true
//num ="";            //return false  null string means none
//num = " ";          //return true -white space means somthing has into the string
//num = "1";              //return true - its count as string not a number;
//num = undefined;          //return false -- undifine means it's not having anything
//num = null;                 // return false -- same as undefined;
num = NaN;                      //return false -- same as before

if(num){
    console.log("condition is True");
}
else{
    console.log("codition is False");
}