(function (ns) {
	"use strict";

	window.addEventListener("hashchange", function hashNav(){
		console.log("doNav is working");
		doNav();
		
	});

	function doNav(){
		$(".view").hide(); // hide everything with a class
		var newView = $(window.location.hash).show();

		// check the hash, and load the correct view based on the first part
		var s = window.location.hash.substr(1).split("_");
		//return ["#repoDetail", "name of repo"]

		// s[0].substr(1);

		

		//returns repoDetail
		console.log(s);
		// console.log(n);


		if (newView.length === 0) {
			console.log("no new view");
			s = window.location.hash.substr(1).split("_");
			ns[s[0]].load(s[1]);
		}else {
			if (ns[s[0]].load){

				ns[s[0]].load(s[1]);
				console.log("loading works");
			}
		}
	}

	// ns["repo"] = {};
	// ns["repo"].load = function(){
		
	// 	$("#repo").on("click", ns.repo);
	
	// }

	window.gtt = ns;
})(window.gtt || {} );