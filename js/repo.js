(function (ns) {
	"use strict";

	ns.repo = function repo(){
		console.log("repo working");
		$("#home").removeClass("active");
		$("#repo").addClass("active");

		$("#main-profile").hide();

		$.ajax({
			type: "GET",
			url: "https://api.github.com/users/HaWyanHa/repos",
			dataType: "JSON",
			//contentType: "application/json" //Probably don't need this
			headers: {
				authorization: "token " + ns.authTok
			},
			success: function showData(data){

				console.log(data);

				for (var i=0; i < data.length; i++){
					$("#repo-list")
						.append($("<tr>")
								.append($("<td>").text(data[i].name))
								.append($("<td>").text(data[i].stargazers_count))
								.append($("<td>").text(data[i].open_issues))
						);
				}
			}
		});
	
	}

	$("#repo").on("click", ns.repo);
	

	window.gtt = ns;
})(window.gtt || {});