const fetch=require('node-fetch')
global.Headers = fetch.Headers;
// var myHeaders = new Headers();
// myHeaders.append("x-api-key", "bckXY2gM1r7GUXjUtOztaayJsGjPmcKw68nrHw7V");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://api.atra.io/prod/v1/dtables", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(JSON.parse(result)[0]))
//   .catch(error => console.log('error', error));

let _data={
  "tableId": "d7c687b6-d099-4126-bd00-2b13c4827f98",
  "record": [
    "test1",
    "test1",
    "test1",
    "test1",
    "0x59aF999BB82B8431d03B3c9059DFb442Ecb2B26c"
   
  ]
}






 fetch('https://api.atra.io/prod/v1/dtables/records',
 {
   method:'POST',
   headers:{
     'x-api-key': 'bckXY2gM1r7GUXjUtOztaayJsGjPmcKw68nrHw7V',    
   },
   body: JSON.stringify(_data)
 })
 .then(response => response.text())
 .then(result => console.log(result))
// var i;
// fetch('https://api.atra.io/prod/v1/dtables/records?tableId=d7c687b6-d099-4126-bd00-2b13c4827f98&metadata=true',
// {
//   method:'GET',
//   headers:{
//     'x-api-key': 'bckXY2gM1r7GUXjUtOztaayJsGjPmcKw68nrHw7V',    
//   }
//  // body: JSON.stringify(_data)

// })
// const newdata= await response.json();
// console.log(newdata);
// .then(response => response.json())
// .then(result => i=result['live']['0']['record'][0])
// .then(() => console.log(i))
//  console.log(i)



//  async function fetchExam(){
//   try {
//       const response = await fetch('https://api.atra.io/prod/v1/dtables/records?tableId=d7c687b6-d099-4126-bd00-2b13c4827f98&metadata=true',
//       {
//         method:'GET',
//         headers:{
//           'x-api-key': 'bckXY2gM1r7GUXjUtOztaayJsGjPmcKw68nrHw7V',    
//         }
//        // body: JSON.stringify(_data)
      
//       });
//       const exam = await response.json();
//       return exam;
//   } catch (error) {
//       console.error(error);
//   }
// }
// async function renderExam() {
//   const exam = await fetchExam();
//   console.log(exam);
// }
// renderExam();
