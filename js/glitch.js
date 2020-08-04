//pre-loader
function changeImg(){
	setTimeout(()=>{document.getElementById('app').style.display='none';},500)
}
window.onload=changeImg


//navbar slide animation
flag=2;
		function dropdown(){
		flag ++;
		if(flag%2==0)
		{
			document.getElementById("m2").style.opacity = 1; 
			document.getElementById("m1").style.transform = "rotate(0deg)"; 
			document.getElementById("m3").style.transform = "rotate(0deg)"; 
			document.getElementById("ctn").style.transform = "translateX(0%)"; 
		}
		else{
			document.getElementById("m2").style.opacity=0; 
			document.getElementById("m1").style.transform = "rotate(45deg) translateY(8px)"; 
			document.getElementById("m3").style.transform = "rotate(-45deg) translateY(-8px)"; 
			document.getElementById("ctn").style.transform = "translateX(100%)"; 
		}	
	};
	function myFunction(x) {
		if (x.matches) { 
			document.getElementById("ctn").style.transform = "translateX(0%)"; 
		} 
		else {
			if (flag%2!=0){
				document.getElementById("ctn").style.transform = "translateX(100%)"; 
			}
		}
	  }
	  var x = window.matchMedia("(min-width: 900px)")
	  myFunction(x) 
	  x.addListener(myFunction) 


$(document).ready(function(){
	
//faq show div
	$(".inner").click(function(e){
		$(this).parent().children("div.ans").slideToggle("slow");
		$(this).children("div.drpdn").toggleClass("drp-rot"); });

//timeline bulb show
	$(".bulb").click(function(e){
		$( ".bulb" ).not(this).removeClass("bulb-big");
		$( ".bulb" ).not(this).children("span").removeClass("show-txt");
		$(this).toggleClass("bulb-big");
		setTimeout(() => { $(this).children("span").toggleClass("show-txt"); }, 100);
		
	 });
});


//aos-init
AOS.init({
	duration: 1500,
  })




  

