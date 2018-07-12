window.onload=function(){
	var divId=document.getElementById("loginWin");
	var spanId=document.getElementById("login");
	spanId.onmouseover=function(){
		divId.style.display="block";
		
	},
	spanId.onmouseout=function(){
		divId.style.display="none";
	}
	
	var obj = document.getElementsByClassName('lunboimg');
	
	
	var cur = 0;
	
	var s=setInterval(function() {
		for(i = 0; i < obj.length; i++) {
			obj[i].style.display = 'none';
		}
		obj[cur].style.display = 'block';
		cur++;
		if(cur >= obj.length) {
			cur = 0;
		}
	}, 1500);
}