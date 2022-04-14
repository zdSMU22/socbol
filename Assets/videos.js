$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://www.scorebat.com/video-api/v3/feed/?token=MTcyODRfMTY0OTkwNjMxMl81YTI5ZWVkMWU0NjFiNzI0ZGY5ZmUxYzU4ODVhN2Q3MTRhZjQ4YjQw",
        dataType: "json",
        success: function (response) {
            $(response.response).each(function (index) {
                var matchItem = response.response[index]
                var matchTitle = matchItem.title;
                
                $(matchItem.videos).each(function (videoIndex){
                    var video = matchItem.videos[videoIndex];
                    var itemElement = $(".suggestedVideo").first().clone()
                
                    $(itemElement).find("h2").text(matchTitle);
                    $(itemElement).find("p").text(video.title);
                    $(itemElement).find("img").attr("src", matchItem.thumbnail)
                    $(itemElement).appendTo("#Feed").show();
                    $(itemElement).click(function (e) { 
                        e.preventDefault();
                        $("#Player>div").replaceWith(video.embed).attr("id", "videoPlayer");
                    });
                });

                
                
            });

        }
    });
});