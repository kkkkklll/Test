window.onload = function() {
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