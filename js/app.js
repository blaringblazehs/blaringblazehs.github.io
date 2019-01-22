  var config = {
    apiKey: "AIzaSyCU7rLDrX8XoMxiMfeX9WJ58bP8-LPRN3U",
    authDomain: "aloysius-photos.firebaseapp.com",
    databaseURL: "https://aloysius-photos.firebaseio.com",
    projectId: "aloysius-photos",
    storageBucket: "aloysius-photos.appspot.com",
    messagingSenderId: "81724430929"
  };
  firebase.initializeApp(config);

firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

     $("#btn-logout").click(function(){
	        firebase.auth().signOut();
	    });
	

   function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }
