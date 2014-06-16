/*! 
 * Fade Chosen Blocks pageinview.js
 */
function pageInView(){
	var e=$(window).scrollTop(),t=e+$(window).height();
	$(".fademe").each(
			function(){
				pageQ1=$(this).offset().top+$(this).height()/4;
				pageQ3=$(this).offset().top+$(this).height()/1.3;
				pageQ1<=t&&pageQ3>=e?$(this).removeClass("is-out-of-view").addClass("is-in-view"):$(this).hasClass("is-in-view")&&$(this).removeClass("is-in-view").addClass("is-out-of-view");
				});
	}
$(window).scroll(function(){pageInView();});var is={ie:navigator.appName=='Microsoft Internet Explorer',java:navigator.javaEnabled(),ns:navigator.appName=='Netscape',ua:navigator.userAgent.toLowerCase(),version:parseFloat(navigator.appVersion.substr(21))||parseFloat(navigator.appVersion),win:navigator.platform=='Win32'};
is.mac=is.ua.indexOf('mac')>=0;if(is.ua.indexOf('opera')>=0){is.ie=is.ns=false;is.opera=true;}
if(is.ua.indexOf('gecko')>=0){is.ie=is.ns=false;is.gecko=true;}