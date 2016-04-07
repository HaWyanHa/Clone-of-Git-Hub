(function(ns) {
	"use strict";
//
	ns.authTok = "" 
	var authTok;
	//= ns.authTok

	ns.username;
	ns.name;
	ns.repos;
	ns.followers;
	ns.creation;
	ns.avatar;
	
	$("#login").on("click", function(){
		event.preventDefault();
		console.log("hi");
		ns.authTok = $("#tokId").val();
		// console.log(authTok);

		$.ajax({
			type: "GET",
			url: "https://api.github.com/user",
			dataType: "JSON",
			//contentType: "application/json" //Probably don't need this
			headers: {
				authorization: "token " + ns.authTok
			},
			success: function showData(data){
				console.log(data);
				ns.username = data.login;
				console.log(ns.username);
				ns.name = data.name;
				ns.repos = data.public_repos;
				ns.followers = data.followers;
				ns.creation = data.created_at.substring(0,10);
				ns.avatar = data.avatar_url;
				console.log(ns.avatar);

				$("#main-login").hide();

				ns.showProfile();
			},
			error: function wrong(){
				console.log("error");
			}
		});
	});

	window.gtt = ns;
})(window.gtt || {});