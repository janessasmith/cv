!function () {
    $.fn.share = function (a) {
        var h, e, i, b, d, j, f, c, g = this;
        $(this).hide();
        if (a == null) {
            a = {}
        }
        b = {};
        b.url = a.url || window.location.href;
        b.text = a.text || $("meta[name=description]").attr("content") || "";
        b.app_id = a.app_id;
        b.title = a.title;
        b.image = a.image;
        b.button_color = a.color || "#333";
        b.button_background = a.background || "#e1e1e1";
        b.button_icon = a.icon || "export";
        b.button_text = a.button_text || "Share";
        f = function (l, k) {
            if (a[l]) {
                return a[l][k] || b[k]
            } else {
                return b[k]
            }
        };
        b.twitter_url = f("twitter", "url");
        b.twitter_text = f("twitter", "text");
        b.fb_url = f("facebook", "url");
        b.fb_title = f("facebook", "title");
        b.fb_caption = f("facebook", "caption");
        b.fb_text = f("facebook", "text");
        b.fb_image = f("facebook", "image");
        b.gplus_url = f("gplus", "url");
        b.selector = "." + ($(this).attr("class"));
        b.twitter_text = encodeURIComponent(b.twitter_text);
        if (typeof b.app_id === "integer") {
            b.app_id = b.app_id.toString()
        }
        $(this).html("<label><span></span></label><div class='social_share'><ul><li class='twitter hover' data-network='twitter'></li><li class='facebook hover' data-network='facebook'></li><li class='gplus hover' data-network='gplus'></li></ul></div>");
        if (!window.FB && b.app_id) {
            $("body").append("<div id='fb-root'></div><script>(function(a,b,c){var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src='//connect.facebook.net/en_US/all.js#xfbml=1&appId=" + b.app_id + "',e.parentNode.insertBefore(d,e))})(document,'script','facebook-jssdk');<\/script>")
        }
        j = {
            twitter: "http://twitter.com/intent/tweet?text=" + b.twitter_text + "&url=" + b.twitter_url,
            facebook: "https://www.facebook.com/sharer/sharer.php?u=" + b.fb_url,
            gplus: "https://plus.google.com/share?url=" + b.gplus_url
        };
        h = $(this).parent().find(".social_share");
        c = function (k) {
            k.stopPropagation();
            return h.toggleClass("active")
        };
        d = function () {
            return h.addClass("active")
        };
        i = function () {
            return h.removeClass("active")
        };
        e = function () {
            var k;
            k = j[$(this).data("network")];
            if (($(this).data("network") === "facebook") && b.app_id) {
                window.FB.ui({
                    method: "feed",
                    name: b.fb_title,
                    link: b.fb_url,
                    picture: b.fb_image,
                    caption: b.fb_caption,
                    description: b.fb_text
                })
            } else {
                window.open(k, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=500,height=350")
            }
            return false
        };
        $(this).find("label").on("click", c);
        $(this).find("li").on("click", e);
        $("body").on("click", function () {
            if (h.hasClass("active")) {
                return h.removeClass("active")
            }
        });
        setTimeout((function () {
            return $(g).show()
        }), 250);
        return {toggle: c.bind(this), open: d.bind(this), close: i.bind(this), options: b, self: this}
    }
}.call(this);