
function showMenu(menu){
	console.log(menu);
	var menuContainer=document.getElementById("menu-container");
	var menuList=document.getElementsByClassName("menu-list");
	menuContainer.style.display="inline-block";
	menu.style.color="#0065ff";

	for(let i=0; i<menuList.length; i++){
		// console.log(menuList[i]);
		if(menuList[i].firstChild==menu){
			menuContainer.children[i].style.display="block";
		}else{
			menuList[i].firstChild.style.color="#000000";
			menuContainer.children[i].style.display="none";
			console.log(i);
			// 
		}
	}
}

function sizeChk(width,height){
	console.log(width);
	var modelContainer=document.getElementById("model-container");
	modelContainer.style.width=width+'px';
	modelContainer.style.height=height+'px';
	
}

$('.demo').minicolors({

  // animation speed
  animationSpeed: 50,

  // easing function
  animationEasing: 'swing',

  // defers the change event from firing while the user makes a selection
  changeDelay: 0,

  // hue, brightness, saturation, or wheel
  control: 'hue',

  // default color
  defaultValue: '',

  // hex or rgb
  format: 'hex',

  // show/hide speed
  showSpeed: 100,
  hideSpeed: 100,

  // is inline mode?
  inline: false,

  // a comma-separated list of keywords that the control should accept (e.g. inherit, transparent, initial). 
  keywords: '',

  // uppercase or lowercase
  letterCase: 'lowercase',

  // enables opacity slider
  opacity: false,

  // custom position
  position: 'bottom left',
  
  // additional theme class
  theme: 'default',

  // an array of colors that will show up under the main color <a href="https://www.jqueryscript.net/tags.php?/grid/">grid</a>
  swatches: []
  
});

$('.demo').minicolors({

  // Fires when the value of the color picker changes
  change: null,

  // Fires when the color picker is hidden.
  hide: null,

  // Fires when the color picker is shown. 
  show: null

});
function inputTextClick(){//확인 눌렀을때
	var text=document.getElementById("text");
	if(text.value.length>0){
		var inputText=document.createElement('div');
		var modelContainer=document.getElementById("model-container");
		modelContainer.appendChild(inputText);
		inputText.innerText=text.value;
		inputText.className="drag-text";
		inputText.draggable="true";
	}
}

function menuTextClick(event){
	// x = event.clientX;
 //    y = event.clientY; 
 //    console.log('x좌표:' +x + ', y좌표:' + y);

	// var menuText=document.getElementById('menu-text');
	// for(let i=0; i<menuText.length; i++){
	// 	if(menuText[i].id="inputComplete"){
	// 		break;
	// 	}
	// }
 //    var inputText=document.createElement('input');
 //    // inputText.id='dd';
 //    inputText.type="text";
 //    menuText.appendChild(inputText);

 //    // inputText.style.position="absolute";
 //    inputText.style.left=x+'px';
 //    inputText.style.top=y+'px';

}

