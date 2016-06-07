(function (ns) {
	"use strict";

	// ns["repoman"] = {};
	// ns["repoman"].load = function load(){
		ns.repo = {};

		ns.repoz = {};


		ns.repo.load = function repoLoad(){
			console.log("repo working");
			$("#home").removeClass("active");
			$("#repo").addClass("active");

			$("#repo-detail").hide();
			$("#main-profile").hide();
			$("#repo-issues").hide();   //repeating, so I can probably put it in one line in this case the nav is doing it
			$("#repo-table").show();


			$.ajax({
				type: "GET",
				url: "https://api.github.com/users/" + ns.username + "/repos",
				dataType: "JSON",
				//contentType: "application/json" //Probably don't need this
				headers: {
					authorization: "token " + ns.authTok
				},
				success: function showData(data){

					$("#repo-list").empty();
					console.log(data);

					var name;
					var current_repo;
					for (var i=0; i < data.length; i++){
						name = data[i].name;

						current_repo = {
							//repoowner: ...  anytime I see myself repeating stuff I need to consider doing something like an object.
						};

						current_repo.repoowner = data[i].owner.login;
						current_repo.repostars = data[i].stargazers_count;
						current_repo.repoforks = data[i].forks;
						current_repo.repocreated = data[i].created_at.substring(0,10);
						current_repo.repodescriptions = data[i].description;
						current_repo.giturl = data[i].html_url;
						current_repo.openissues = data[i].open_issues;
						current_repo.reponame = data[i].name;

						ns.repoz[name] = current_repo;


						$("#repo-list")
							.append($("<tr>")
									.append($("<td>").append($("<a>").attr("href", "#repoDetail_" + current_repo.reponame).text(current_repo.reponame)))
									.append($("<td>").text(current_repo.repostars))
									.append($("<td>").text(data[i].open_issues))
									);

					}
				}
			});
		
		};
	
	

	window.gtt = ns;
})(window.gtt || {});