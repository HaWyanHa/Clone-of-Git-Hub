(function(ns) {
	"use strict";


	ns.showProfile = function showProfile() {
		console.log("show profile is working");

		var p = $("#profile");
	    p.append($("<li>").text(ns.username));  //span class="label", span class="details" fo I can style them differently
		p.append($("<li>").text(ns.name));
		p.append($("<li>").text(ns.repos));
		p.append($("<li>").text(ns.followers));
		p.append($("<li>").text(ns.creation));

		$(".gitpic").append($("<img src=" + ns.avatar + ">"));

		$("#home").addClass("active").show();
		$("#repo").show();


	}

	ns.clickHome = function clickHome(){
		$("#main-profile").show();
		console.log("clickHome is working");
		$("#home").addClass("active");
		$("#repo").removeClass("active");
	}

	$("#home").on("click", ns.clickHome);

	window.gtt = ns;
})(window.gtt || {});