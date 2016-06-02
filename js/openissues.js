(function (ns) {
	"use strict";

	ns.openissues = {};
	ns.issuez; //I thought I needed another variable but I don't think I need it anymore;
	ns.openissues.load = function openissues(repoName){
console.log(ns.repoz[repoName].reponame);
		console.log("open issues is working");
		$("#issue-table").show();
		$("#repo-issues").addClass("active").show();
		$("#repo-issues").find("a").attr("href", "#openissues_" + ns.repoz[repoName].reponame);
		$("#repo-detail").removeClass("active").show();

		$("#issue-table").find("h2").text("");
		$("#issue-table").find($("h2").append($("<a>").attr("href", ns.repoz[repoName].giturl).text(repoName)));
		$("#issue-table").find($("h2").find("a").attr("target", "_blank"));

		$.ajax({
			type: "GET",
			url:  "https://api.github.com/repos/"+ ns.username +"/" + ns.repoz[repoName].reponame + "/issues",
			dataType: "JSON",
			headers: {
				authorization: "token " + ns.authTok
			},
				success: function issueData(data){
					console.log(data);

					
					$("#issue-list").empty();

					var issue;
					var current_issue;
					for (var i=0; i<data.length; i++){
						issue = data[i].name;
						current_issue = {};

						current_issue.title = data[i].title;
						current_issue.submitter = data[i].user.login;
						current_issue.url = data[i].html_url;


						

						$("#issue-list")
						.append($("<tr>")
							.append($("<td>")
								.append($("<a>").attr("href", current_issue.url).text(current_issue.title)))
							.append($("<td>").text(current_issue.submitter))
							.append($("<td>")
								.append($("<button>").text("Close Issue"))
							)
						);

						$("#newissuebutton").text("");
						$("#issue-list").find("a").attr("target", "_blank");
						$("#newissuebutton").append($("<a>").attr("href", "#newissue_" + ns.repoz[repoName].reponame).text("New Issue"));


						// $("#issue-table").find("button").text("New Issue");
						// $("#issue-table").find("button").attr("href", "#newissue")

					}
				}



		});

	}

	window.gtt = ns;
})(window.gtt || {});