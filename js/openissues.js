(function (ns) {
	"use strict";

	ns.openissues = {};
	ns.issuez;
	ns.openissues.load = function openissues(repoName){

		$("issue-table").find("a").remove();

		console.log("open issues is working");
		$("#issue-table").show();
		$("#repo-issues").addClass("active").show();
		$("#repo-issues").find("a").attr("href", "#openissues_" + ns.repoz[repoName].reponame);
		$("#repo-detail").removeClass("active").show();

		$.ajax({
			type: "GET",
			url:  "https://api.github.com/repos/"+ ns.username +"/" + ns.repoz[repoName].reponame + "/issues",
			dataType: "JSON",
			headers: {
				authorization: "token " + ns.authTok
			},
				success: function issueData(data){
					console.log(data);

					var issue;
					var current_issue;
					for (var i=0; i<data.length; i++){
						issue = data[i].name;
						current_issue = {};

						current_issue.title = data[i].title;
						current_issue.submitter = data[i].user.login;

						$("#issue-list")
						.append($("<tr>")
							.append($("<td>").text(current_issue.title))
							.append($("<td>").text(current_issue.submitter))
							.append($("<td>")
								.append($("<button>").text("Close Issue"))
							)
						);

					}
				}



		});

	}

	window.gtt = ns;
})(window.gtt || {});