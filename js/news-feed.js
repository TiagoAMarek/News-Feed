/**
* @author Tiago Alves Marek
*/

var NewsFeed = (function () {
	'use strict';
	var NewsFeed = function () {};
	
	/**
	* Body content of the panel
	*/
	NewsFeed.createPanelBody = function (data) {
		var row         = document.createElement("div"),
			leftColumn  = document.createElement("div"),
			rightColumn = document.createElement("div"),
			thumbnail   = document.createElement("div"),
			profileImg  = document.createElement("img"),
			rowProfName = document.createElement("div"),
			rowTitle    = document.createElement("div"),
			rowText     = document.createElement("div"),
			title       = document.createElement("span"),
			text        = document.createElement("p");

		row.setAttribute("class", "row");
		leftColumn.setAttribute("class", "col-sm-1");
		rightColumn.setAttribute("class", "col-sm-11");
		thumbnail.setAttribute("class", "thumbnail");
		profileImg.setAttribute("class", "prof-img");
		rowProfName.setAttribute("class", "row");
		rowTitle.setAttribute("class", "row");
		rowText.setAttribute("class", "row");

		rowProfName.innerHTML = "<span>Tiago A. Marek</span><span class='pull-right date-time'>dd/MM/yyyy - hh:mm</span>";
		title.innerHTML = "<h4>Post your title here!</h4>";
		text.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

		thumbnail.appendChild(profileImg);
		leftColumn.appendChild(thumbnail);
		rowTitle.appendChild(title);
		rowText.appendChild(text);
		rightColumn.appendChild(rowProfName);
		rightColumn.appendChild(rowTitle);
		rightColumn.appendChild(rowText);
		row.appendChild(leftColumn);
		row.appendChild(rightColumn);
		return row;
	};

	/**
	* Footer content of the panel
	*/
	NewsFeed.createPanelFooter = function (data) {
		var row         = document.createElement("div"),
			column      = document.createElement("div"),
			socialList  = document.createElement("ul"),
			likes       = document.createElement("li"),
			share       = document.createElement("li"),
			comment     = document.createElement("li");

		row.setAttribute("class", "row");
		column.setAttribute("class", "col-sm-6");
		socialList.setAttribute("class", "nav nav-pills");
		likes.innerHTML = "<a href='#'>like <span class='badge'>42</span></a>";
		share.innerHTML = "<a href='#'>share</a>";
		comment.innerHTML = "<a href='#'>comment</a>";

		socialList.appendChild(likes);
		socialList.appendChild(share);
		socialList.appendChild(comment);

		column.appendChild(socialList);
		row.appendChild(column);
		return row;
	};

	/**
	* Start the creation of the panel
	*/
	NewsFeed.createPanel = function (feedsContainer, data) {
		console.log("AQUI");
		var	panel          = document.createElement("div"),
			panelBody      = document.createElement("div"),
			panelFooter    = document.createElement("div");

		panel.setAttribute("class", "panel panel-default");
		panelBody.setAttribute("class", "panel-body");
		panelBody.appendChild(createPanelBody(data));
		panelFooter.setAttribute("class", "panel-footer");
		panelFooter.appendChild(createPanelFooter(data));
		panel.appendChild(panelBody);
		panel.appendChild(panelFooter);

		return panel;
	};

	NewsFeed.prototype.init = function (idContainer) {
		var feedsContainer = document.getElementById(idContainer),
			contentColumn  = document.createElement("div");

		$.ajax({
			url: "feed.json",
			dataType: 'json',
			crossDomain: true,
			success: function (data) {
				var panel = createPanel(feedsContainer, data);
			}
		});
		contentColumn.setAttribute("class", "col-lg-12");
		contentColumn.appendChild(panel);
		feedsContainer.appendChild(contentColumn);
	};
	return NewsFeed;

}());
