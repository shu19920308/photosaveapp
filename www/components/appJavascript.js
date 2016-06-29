// This is a JavaScript file

function test()
{
    document.addEventListener("deviceready", onDeviceReady, false);

      function onDeviceReady()
      {
          //window.alert ('Loading PhoneGap is completed');
      }

      function onSuccess (imageURI) 
      {
            var largeImage = document.getElementById ('picture');
            largeImage.style.display = 'block';
            largeImage.src = imageURI;
      }

      function getPhoto () 
      {
        //Specify the source to get the photos.
        navigator.camera.getPicture(onSuccess, onFail, 
          { quality: 50,destinationType: Camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM });
      }

      function onFail (message) 
      {
          alert('An error occured: ' + message);
      }
      
      function pagesave()
      {
          alert("確認");
          //データベースオブジェクトを作成
          db = window.openDatabase("Database", "1.0", "TestDatabase", 200000);
          tx.executeSql('CREATE TABLE IF NOT EXISTS TestTable2(id INTEGER PRIMARY KEY, canvasDataURL TEXT)', 
                      [], 
                      createTableSuccess, 
                      createTableFailed);
      }
      
      
      
      function pagemove()
      {
          alert("確認1");
          location.href = "app.html";
      }
}
