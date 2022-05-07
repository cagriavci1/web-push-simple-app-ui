self.addEventListener("push",(e)=> {
     const config={
          body:"Mesaj İçeriği Burada Yer Alacaktır..",
          data:{
               dateOfArrival:Date.now(),
               primaryKey:"3",
          },
     };
     e.waitUntil(self.registration.showNotification("Yeni Makale Eklendi",{config}))
})