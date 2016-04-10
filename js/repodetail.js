(function (ns) {
	"use strict";

	ns.repoDetail = {};
	ns.repoDetail.load = function detailLoad(repoName){

		console.log("detailLoad is working");
		$("#repodetails").show();
		$("#repo-detail").addClass("active").show();
		$("#repo-detail").find("a").attr("href", "#repoDetail_" + ns.repoz[repoName].reponame);	
		$("#repo").removeClass("active").show();
		$("#repo-issues").removeClass("active");
		
		var section = $("#repodetails");
	
		section.find("li").remove();
		section.find("h2").text("");
		section.find("h3").text("");

		section.find("h3").append($("<a>").attr("href", "#openissues_" + ns.repoz[repoName].reponame).text(ns.repoz[repoName].openissues + " open issues"))

		section.find($("h2").append($("<a>").attr("href", ns.repoz[repoName].giturl).text(repoName)));
		section.find($("h2").find("a").attr("target", "_blank"));
		section.find($("p")).text(ns.repoz[repoName].repodescription);
		section.find($("ul")).append($("<li>").text("Owner: " + ns.repoz[repoName].repoowner));
		section.find($("ul")).append($("<li>").text("Stars: " + ns.repoz[repoName].repostars));
		section.find($("ul")).append($("<li>").text("Forks: " + ns.repoz[repoName].repoforks));
		section.find($("ul")).append($("<li>").text("Created on: " + ns.repoz[repoName].repocreated));


	};

	window.gtt = ns;
})(window.gtt || {});