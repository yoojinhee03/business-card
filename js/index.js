function showMenu(menu){
	console.log(menu);
	var menuContainer=document.getElementById("menu-container");
	var menuList=document.getElementsByClassName("menu-list");
	menuContainer.style.display="inline-block";
	menu.style.color="#0065ff";

	for(let i=0; i<menuList.length; i++){
		// console.log(menuList[i]);
		if(menuList[i].firstChild!=menu){
			menuList[i].firstChild.style.color="#000000";
		}
	}
}