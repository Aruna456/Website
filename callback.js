// function success(){
 
//     console.log("Success");
// }
// function fail()
// {
//     console.log("Failed");
    
// }
// function error()
// {
//     console.log("Error");
    
// }
// function exe(data,callback){

//     if(data)
//     {
//         console.log(`Balance: ${data}`);
        
//     }
//     setTimeout(callback,3000);

// }

// function trigger(data){

//     if(data>0)
//     {
//         exe(data,success)
//     }
//     else if(data<0)
//     {
//         exe(data,fail)
//     }
//     else 
//     {
//         exe(data,error)
//     }

// }

// let data=prompt("Enter amount:")
// trigger(data)


async function API(){

   try{
    const res= await fetch('https://66e526d55cc7f9b6273c69e0.mockapi.io/register')
    const data= await res.json();
    // console.log(data);
    return data;

  }
   catch(error){
    console.log('error')
   }
   
}

//API();
async function getapi()
{
    const apidata=await API();
    console.table(apidata)
    const struct=await apidata.map((data)=>{console.log(data)})
    const filtereddata=apidata.filter(data=>data.isactive)
    console.log( filtereddata);
}

getapi()