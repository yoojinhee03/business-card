
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

function inputTextClick(){
	var inputText=document.createElement('div');
	var modelContainer=document.getElementById("model-container");
	var text=document.getElementById("text");
	modelContainer.appendChild(inputText);
	inputText.innerText=text.value;
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

