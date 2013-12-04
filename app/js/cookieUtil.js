var cookieUtil={};
cookieUtil.setCookie=function(key,value,iDay){
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=key+"="+value+";expires="+oDate;
}
cookieUtil.getCookie=function(name){
	var cookieArray=document.cookie.split("; "); 
   var cookie=new Object();   
   for (var i=0;i<cookieArray.length;i++){   
      var arr=cookieArray[i].split("=");       
      if(arr[0]==name)return unescape(arr[1]); 
   }
   return "0";

}
