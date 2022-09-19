var d_no;
function count(x,y) {
var d_no = Math.floor(Math.random()*(y)) + x;
display(d_no);
return d_no;
}


function display(a){ 
if(a==1){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/U%2B2680.svg/800px-U%2B2680.svg.png';}
if(a==2){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/U%2B2681.svg/180px-U%2B2681.svg.png';}
if(a==3){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/U%2B2682.svg/180px-U%2B2682.svg.png';}
if(a==4){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/U%2B2683.svg/180px-U%2B2683.svg.png';}
if(a==5){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/U%2B2684.svg/180px-U%2B2684.svg.png';}
if(a==6){document.getElementById('im').src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/U%2B2685.svg/180px-U%2B2685.svg.png';}
}