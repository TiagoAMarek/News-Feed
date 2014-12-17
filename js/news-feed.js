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
		profileImg.setAttribute("src", data.profileimage);
		rowProfName.setAttribute("class", "row");
		rowTitle.setAttribute("class", "row");
		rowText.setAttribute("class", "row");

		rowProfName.innerHTML = "<span>"+data.name+"</span><span class='pull-right date-time'>"+data.datetime+"</span>";
		title.innerHTML = "<h4>"+data.title+"</h4>";
		text.innerHTML = "<p>"+data.text+"</p>";

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
		likes.innerHTML = "<a href='#'>like <span class='badge'>"+data.likes+"</span></a>";
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
		var	panel          = document.createElement("div"),
			panelBody      = document.createElement("div"),
			panelFooter    = document.createElement("div");

		panel.setAttribute("class", "panel panel-default");
		panelBody.setAttribute("class", "panel-body");
		panelBody.appendChild(NewsFeed.createPanelBody(data));
		panelFooter.setAttribute("class", "panel-footer");
		panelFooter.appendChild(NewsFeed.createPanelFooter(data));
		panel.appendChild(panelBody);
		panel.appendChild(panelFooter);

		return panel;
	};

	/**
	* create a new object from NewsFeed and call the init function to create new panels
	**/
	NewsFeed.prototype.init = function (idContainer, data) {
		var feedsContainer = document.getElementById(idContainer),
			contentColumn  = document.createElement("div"),
			panel          = null,
			i              = 0;
		
		contentColumn.setAttribute("class", "col-lg-12");
				
		for (i = 0; i < data.news.length; i++) {
			panel = NewsFeed.createPanel(feedsContainer, data.news[i]);
			contentColumn.appendChild(panel);
		}
		
		feedsContainer.appendChild(contentColumn);
	};
	return NewsFeed;

}());
