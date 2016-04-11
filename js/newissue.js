(function (ns) {
	"use strict";

	ns.newissue = {};
	ns.newissue.load = function newissue(repoName){

		$("#new-issue").show();

		console.log(ns.repoz[repoName].reponame); //I dont know why reponame is undefined?

		$("#ajaxcall").on("submit", function(event){
			event.preventDefault();
			console.log("submit working");

			$.ajax({
				type: "POST",
				url: "https://api.github.com/repos/" + ns.username + "/" + ns.repoz[repoName].reponame + "/issues",
				contentType: "application/json",
				data: "JSON.stringify({title:____, body:____})",

				success: function(){
					console.log("good");
				},

				error: function(){
					console.log("why");
				}
			});
		});

	};
	window.gtt = ns;
})(window.gtt || {});