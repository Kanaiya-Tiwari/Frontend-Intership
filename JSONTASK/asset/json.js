const data={
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }
  
  // TASK 1


  // FIRST WAY
  const stringData=JSON.stringify(data);
  console.log(stringData)

  // SECOND WAY

  const data2=`{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`
  





  // TASK 2


  // FIRST WAY
   const objectdata=JSON.parse(stringData);
   console.log(objectdata)

// Second way

const objectdata2=JSON.parse(data2);
console.log(objectdata2)


   //TASK 3

   let obj1={
        id:1,
        name:"Vipul"
   }

   let obj2={
      id:1,
      name:"Vipul"
   }

   console.log(JSON.stringify(obj1)==JSON.stringify(obj2))


   let arr=[
    {
      id:1,
      name:'ronak'
    },
    {
      id:2,
      name:'sameer'
    },
    {
      id:3,
      name:'sunil'
    },
    {
      id:4,
      name:'ronak'
    },
  ];

  let dynamicId = 3;
  // {
  //   id:3,
  //   name:'sunil'
  // },

//  let data=arr.find(())
  //  for( let i=0;i<arr.length;i++)
  //  {
  //    // console.log(arr[i].id)

  //     if(arr[i].id==3){
  //       console.log(`array id is ${arr[i].id} and value is ${arr[i].name}`);
  //     }
  //  }

  // let dataa=arr.filter(x=>x.id===3)
  // console.log(dataa[0])
  // let dataae=arr.find(x=>x.id===3)
  // console.log(dataae)

  let array=[3,4,12,10,9,7,16];
 
  // 

 // let arraysort=array.sort((a,b)=>a-b);
  let arraysort=array.sort();
  console.log(arraysort); 
  let temp=[];
  let vare;
  for( let i=0;i<array.length;i++)
  {
    

    for(j=i+1;j<array.length;j++)
    {
    if(array[i]<array[j]){
        console.log("done");
    }
    else{
      let local=array[j];
      array[j]=array[i];
      array[i]=local;

    }                         
    }

    
  }
  console.log(array)
