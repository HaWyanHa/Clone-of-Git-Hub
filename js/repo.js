(function (ns) {
	"use strict";

	// ns["repoman"] = {};
	// ns["repoman"].load = function load(){
		ns.repoowner;
		ns.repostars;
		ns.repoforks;
		ns.repocreated;

		ns.repo = {};

		ns.repo.load = function repoLoad(){
			console.log("repo working");
			$("#home").removeClass("active");
			$("#repo").addClass("active");

			$("#main-profile").hide();
			$("#repo-table").show();

			$.ajax({
				type: "GET",
				url: "https://api.github.com/users/HaWyanHa/repos",
				dataType: "JSON",
				//contentType: "application/json" //Probably don't need this
				headers: {
					authorization: "token " + ns.authTok
				},
				success: function showData(data){

					$("#repo-list").empty();
					console.log(data);

					for (var i=0; i < data.length; i++){

						ns.repoowner = data[i].owner.login;
						ns.repostars = data[i].stargazers_count;
						ns.repoforks = data[i].forks;
						ns.repocreated = data[i].created_at.substring(0,10);
					
						$("#repo-list")
							.append($("<tr>")
									.append($("<td>").append($("<a>").attr("href", "#repoDetail_" + data[i].name).text(data[i].name)))
									.append($("<td>").text(ns.repostar))
									.append($("<td>").text(data[i].open_issues))
							);

					}
				}
			});
		
		}
	
	

	window.gtt = ns;
})(window.gtt || {});