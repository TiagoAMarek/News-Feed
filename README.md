News-Feed
=========

A news feed app.

### Dependencies
* jQuery, Bootstrap, Grunt.

### JSON format
```json
{
    "news": [
        {
            "name": "Mario",
            "profileimage": "profile image url",
            "title": "Title here!",
            "datetime": "26/11/2014 19:00",
            "text": "text here!",
            "likes": "29"
        },
    ]
}
```
### Calling the app
```javascript
var feed = new NewsFeed();
feed.init("div id here", json);
```
