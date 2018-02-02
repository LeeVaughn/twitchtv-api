var names = ["freecodecamp", "csharpfritz", "blizzheroes", "noopkat", "noobs2ninjas", "vtriple", "supremerumham", "sheriffjackson", "jesseskinner", "esl_sc2", "dunktrain"];
var displayName, logo, streaming;

names.forEach((name) => {
    var channelAPI = "https://wind-bow.gomix.me/twitch-api/channels/" + name + "?callback=?";
    var streamAPI = "https://wind-bow.gomix.me/twitch-api/streams/" + name + "?callback=?";

    $.getJSON(channelAPI, function (channel) {
        $.getJSON(streamAPI, function (stream) {

            displayName = channel.display_name;

            if (channel.logo === null) {
                channel.logo = "http://www-cdn.jtvnw.net/images/xarth/404_user_150x150.png";
            }
            logo = "<img src='" + channel.logo + "' class='logo'>";

            if (stream.stream != null) {
                $("#names").append("<div class='name on' id='" + displayName + "'>");
                $("#" + displayName).append("<a href='//twitch.tv/" + displayName + "' target='_blank'>" + logo + "<h2 class='displayName'>" + displayName + "</h2>" + "</div>" + "<div class='game'>" + "Currrently streaming <strong>" + stream.stream.channel.game + "</strong> for " + stream.stream.viewers + " viewers.</div>" + "<div class='topic'>" + "<em>" + stream.stream.channel.status + "</em></div></a>");
            } else {
                $("#names").append("<div class='name off' id='" + displayName + "'>");
                $("#" + displayName).append("<a href='//twitch.tv/" + displayName + "' target='_blank'>" + logo + "<h2 class='displayName'>" + displayName + "</h2>" + "</div></a>");
            }

        });

        $("#all").click(function () {

            $("#all").addClass("active");
            $("#online").removeClass("active");
            $("#offline").removeClass("active");

            $(".name").show();
        });

        $("#online").click(function () {

            $("#all").removeClass("active");
            $("#online").addClass("active");
            $("#offline").removeClass("active");

			$(".on").show();
			$(".off").hide();
        });

        $("#offline").click(function () {
            $("#all").removeClass("active");
            $("#online").removeClass("active");
            $("#offline").addClass("active");

			$(".off").show();
			$(".on").hide();
        });
    });
});