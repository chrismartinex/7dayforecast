
   
async function GetData(){
 const promise = await fetch(
   "https://api.openweathermap.org/data/2.5/forecast?q=stockton&appid=dd39ad3836cd95e0847faf228f7f4b17"
 );
 const data = await promise.json()
 console.log(data)
 return data
}
export {GetData};

