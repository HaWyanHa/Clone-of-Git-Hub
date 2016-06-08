(function (ns) {
	"use strict";

	ns.newissue = {};
	ns.newissue.load = function newissue(repoName){

		$("#new-issue").show();

		console.log(ns.repoz, repoName); //I dont know why reponame is undefined?

		$("#ajaxcall").on("submit", function(event){
			event.preventDefault();
			var formValue = {};
			formValue.title =  $('#issue-title').val();
        	formValue.body = $('#issue-body').val();

			console.log(formValue.body);

			$.ajax({
				type: "POST",
				url: "https://api.github.com/repos/" + ns.username + "/" + ns.repoz[repoName].reponame + "/issues",
				contentType: "application/json",
				headers: {
					authorization: "token " + ns.authTok
				},
				data: JSON.stringify({title: formValue.title, body: formValue.body}),

				success: function(data){
					console.log('success data', data);
					console.log("good");
					window.location.hash = "#openissues_" + repoName;
				},

				error: function(){
					console.log("this is the ", data);
				}

			});
		});

	};
	window.gtt = ns;
})(window.gtt || {});