function calculatepercentage (){
   const obtainmarksRef = document.querySelector("#obtainmarks");
   const totalmarksRef = document.querySelector("#totalmarks");
   const resultDivRef = document.querySelector("#percentage"); 


    let obtainmarks = Number(obtainmarksRef.value);
    let totalmarks = Number(totalmarksRef.value);
    console.log(obtainmarks);
    console.log(totalmarks);


    const percentage=(obtainmarks/totalmarks)*100
    resultDivRef.innerHTML = percentage;
}