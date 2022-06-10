function natura(){
    let a = document.getElementById("bulb").src;
    console.log(a);

    if( a == 'file:///C:/Users/CCT_7/Desktop/Gvantsa%20Vakhtangishvili/anteba-chaqroba/imgs/dark.png'){
        document.getElementById("bulb").src = "imgs/bright.png";
    }
    else{
        document.getElementById("bulb").src = "imgs/dark.png";
    }
}
