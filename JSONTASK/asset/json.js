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

  const stringData=JSON.stringify(data);
  console.log(stringData)


  // TASK 2

   const objectdata=JSON.parse(stringData);
   console.log(objectdata)





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
