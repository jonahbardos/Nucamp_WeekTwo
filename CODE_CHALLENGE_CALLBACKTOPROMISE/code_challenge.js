




var promise = new Promise(function(resolve, reject){
    const itBlends = Math.floor(Math.random() * 10) % 3 === 0;
    if (itBlends) 
    {
        console.log(itBlends);
        resolve("Good news! It Blends!");
      
    } else 
    {
        console.log(itBlends);
        reject(new Error("Oh No! It didn't Blend!"));
      
    }
    
});


promise
    .then(function(err, itblends){
        if(err === null){console.log(err)}
    })
    .catch(function(err){
        console.log(err.message)
    })
    
// statring








// function myfunct(){

//     var promise = new Promise(function(resolve, reject){
//         const itBlends = Math.floor(Math.random() * 10) % 3 === 0;
//         if (itBlends) 
//         {
//             console.log(itBlends);
//             resolve({success: "Good news! It Blends!"});
          
//         } else 
//         {
//             console.log(itBlends);
//             reject(new Error("Oh No! It didn't Blend!"));
          
//         }
        
//     });
//     return promise
//   };
  
  
//   myfunct()
//     .then(function(err){
//         console.log(err)
//     })
//     .catch(function(err){
//         console.log(err.message)
//     })

