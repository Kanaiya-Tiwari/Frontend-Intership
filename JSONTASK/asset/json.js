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
