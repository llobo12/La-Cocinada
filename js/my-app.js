// Initialize your app
var myApp = new Framework7({
	// Default title for modals
	root:'#app',
	theme: 'md',
	view:{
		xhrcache:false,
		pushState:true
	},
	dialog:{
		title:'Framework7'
	},
	routes: [
		{
		path: '/receta/',
    	url: 'receta.html',
    	name: 'receta',
  		},
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/recetario/',
    	url: 'recetario.html',
    	name: 'recetario',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/hamburguesa/',
    	url: 'hamburguesa.html',
    	name: 'hamburguesa',
  		},
		{
		path: '/rollos/',
    	url: 'rollos.html',
    	name: 'rollos',
  		},
	]
    // ... other parameters
});

// Export selectors engine
var $$ = Dom7;


$$('#btn-login') .on('click', function(){
	var usuario= $$('#usuario').val();
	var password= $$('#password').val();
	
	if(usuario == "admin" && password == "admin"){
		myApp.popup.close("#popup-login");
	}else{
		myApp.dialog.alert("Los datos ingresados son incorrectos","LOGIN");
	}
});

$$('.close-registro') .on('click', function(){
	myApp.popup.close('#popup-registro');
});



// Add another view, which is in right panel





 

