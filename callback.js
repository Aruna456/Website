function success(){
 
    console.log("Success");
}
function fail()
{
    console.log("Failed");
    
}
function error()
{
    console.log("Error");
    
}
function exe(data,callback){

    if(data)
    {
        console.log(`Balance: ${data}`);
        
    }
    setTimeout(callback,3000);

}

function trigger(data){

    if(data>0)
    {
        exe(data,success)
    }
    else if(data<0)
    {
        exe(data,fail)
    }
    else 
    {
        exe(data,error)
    }

}

let data=prompt("Enter amount:")
trigger(data)