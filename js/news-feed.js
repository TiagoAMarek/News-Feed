/**
* @author Tiago Alves Marek
*/

var NewsFeed = (function () {
	'use strict';
	var NewsFeed = function () {
		
		/**
		* Body content of the panel
		*/
		var createPanelBody = function (panel) {
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
		},
			
			/**
			* Footer content of the panel
			*/
			createPanelFooter = function () {
				
			},
			
			/**
			* Start the creation of the panel
			*/
			createPanel = function (feedsContainer) {
				var	panel          = document.createElement("div"),
					panelBody      = document.createElement("div"),
					panelfooter    = document.createElement("div");
				
				panel.setAttribute("class", "panel panel-default");
				panelBody.setAttribute("class", "panel-body");
				panelBody.appendChild(createPanelBody());
				panelfooter.setAttribute("class", "panel-footer");
				//panelFooter.appendChild(createPanelFooter());
				panel.appendChild(panelBody);
				//panel.appendChild(panelFooter);
				
				return panel;
			},
			
			/**
			* Load the json feed
			*/
			load = function () {
			
			};
		
			
		
		this.init = function () {
			var feedsContainer = document.getElementById("feeds-container"),
				contentColumn  = document.createElement("div"),
				panel = createPanel(feedsContainer);

			contentColumn.setAttribute("class", "col-lg-12");
			contentColumn.appendChild(panel);
			feedsContainer.appendChild(contentColumn);
		};
	};
	
	return NewsFeed;

}());
