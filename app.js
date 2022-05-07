window.addEventListener("load", async ()=>{
     const subscribeButton=document.querySelector("#subscribeButton");
     
     //register service worker
     const sW=await navigator.serviceWorker.register("./sw.js");
     console.log("ServiceWorker=> ",sW);

     subscribeButton.addEventListener("click", async ()=>{
          const serviceWorker= await navigator.serviceWorker.ready ;
          const clientID = await serviceWorker.pushManager.subscribe({
               userVisibleOnly:true,
               applicationServerKey:"BEdOImIUf22Qz9_Bq04evMo3VSWBaPbz1bUfqh8GWpVGApQv_tRp4FUB7CdP5bHQ-hFIZ7JVuVMw9EY2ut7-B90",
          });
     console.log(clientID);
     console.log(js.stringify(clientID));
     });
});
