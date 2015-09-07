function scrollData() {
    var e = $(window).scrollTop();
    scrollHeight = e / 2
}
function circleIn(e, t) {
    circleR = $("#" + e).find("circle").attr("r");
    circleScope = Math.PI * 2 * circleR;
    $("#" + e).find("circle").attr("stroke-dasharray", circleScope);
    $("#" + e).find("circle").animate({svgStrokeDashOffset: 0}, t)
}
function circleOut(e, t) {
    strokeW = $("#" + e).find("circle").attr("stroke-width");
    circleR = $("#" + e).find("circle").attr("r");
    circleScope = Math.PI * 2 * circleR;
    $("#" + e).find("circle").attr("stroke-dasharray", circleScope);
    if (isFirefox == true) {
        $("#" + e).find("circle").stop().animate({svgStrokeDashOffset: circleScope / strokeW}, t)
    } else {
        $("#" + e).find("circle").stop().animate({svgStrokeDashOffset: circleScope}, t)
    }
}
function load_out() {
    $("#logo").removeClass();
    $(".circle h2,.social,.close_line,.work h2,.rotate,.work .circle_inner,.work .strokes,#work_menu li a").removeClass("active");
    if (portfolioPop == 1) {
        portfoliopopClose()
    }
    if (innerCase == 1) {
        caseClosed()
    }
    $(".phil_bg").animate({left: "-100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    $(".contact_bg").animate({left: "100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    if (hash == "#home" || hash == "#philosophy" || hash == "#contact") {
        $(".work_bg.l").animate({left: "-100%"}, {queue: false, duration: 300, easing: "easeInCubic"});
        $(".work_bg.r").animate({right: "-100%"}, {queue: false, duration: 300, easing: "easeInCubic"})
    }
    if (hash == "#portfolio" || hash == "#case_studies") {
        $(".info_btn").fadeOut(200)
    } else {
        $(".info_btn").delay(1300).fadeIn(200);
        $("#nav_bar").delay(1e3).animate({top: -50}, {
            duration: 300, easing: "easeOutCubic", complete: function () {
                $(".share").removeClass("bar")
            }
        });
        menuClose();
        $("#portfolio_section,#study_section").fadeOut(300, function () {
            $("#portfolio_section,#study_section").hide();
            $("#home_section").delay(300).fadeIn(1e3)
        })
    }
    $(".philosophy_list").fadeOut({
        queue: false, duration: 100, complete: function () {
            window.clearInterval(phillList)
        }
    })
}
function home() {
    philHoverOut();
    conHoverOut();
    workHoverOut()
}
function phillListAnim() {
    var e = $(".philosophy_list").offset().top;
    if (e > winHeight) {
        $(".philosophy_list").animate({bottom: "100%"}, 0)
    }
    $(".philosophy_list").animate({bottom: "-=1%"}, {queue: false, duration: 60, easing: "linear"})
}
function philosophy() {
    $(".philosophy h2,.philosophy .circle_inner,.philosophy .close_line").addClass("active");
    $(".phil_bg").delay(500).animate({left: "0%"}, {duration: 500, easing: "easeOutCubic"});
    $(".philosophy_list").delay(700).fadeIn(350, function () {
        phillList = window.setInterval(function () {
            phillListAnim()
        }, 60)
    });
    $(".philosophy .close_line").addClass("active");
    philHoverIn();
    workHoverOut();
    conHoverOut()
}
function contact() {
    $("body").animate({scrollTop: 600}, {duration: 500, easing: "easeInOutCubic"});
    $(".contact").find("h2").addClass("active");
    $(".contact .close_line").addClass("active");
    $(".contact_bg").delay(500).animate({left: "50%"}, {duration: 500, easing: "easeOutCubic"});
    $(".social,.contact .close_line").addClass("active");
    conHoverIn();
    workHoverOut();
    philHoverOut()
}
function work() {
    $(".work h2,.rotate,.work .circle_inner,.work .close_line").addClass("active");
    $(".work_bg.l").delay(500).animate({left: "-40%"}, {duration: 500, easing: "easeOutCubic"});
    $(".work_bg.r").delay(500).animate({right: "-40%"}, {duration: 500, easing: "easeOutCubic"});
    $(".work .close_line,.work .strokes").addClass("active");
    workHoverIn();
    conHoverOut();
    philHoverOut()
}
function case_studies() {
    $("body").animate({scrollTop: 0}, {duration: 500, easing: "easeInOutCubic"});
    $(".study_link").addClass("active");
    circleOut("portfolio_circle", 300);
    circleIn("study_circle", 300);
    $(".study_list li").css("height", (winHeight - 48) / 3);
    $(".inner_loader.study").fadeIn(200, function () {
        $(".sections").hide();
        $("#study_section").show()
    }).delay(300).fadeOut(200, function () {
        $("#nav_bar").animate({top: 0}, {duration: 300, easing: "easeOutCubic"});
        $(".share").addClass("bar")
    });
    if (studyLoad == 0) {
        $(".study_list li").each(function () {
            var e = $(this).index() + 1;
            $(this).find(".img").css("background-image", "url(../css/img/case_" + e + "_m.jpg)")
        })
    }
    studyLoad = 1
}
function caseClosed() {
    $(".study_inner").fadeOut(200, function () {
        $(".content_study").empty()
    });
    $("#study_section").delay(300).fadeIn(300);
    innerCase = 0
}
function portfolio_load() {
    $(".portfolio_list li").each(function () {
        var e = $(this).index() + 1;
        $(this).find(".img").css("background-image", "url(../css/img/work_" + e + ".jpg)")
    })
}
function portfolio() {
    $("body").animate({scrollTop: 0}, {duration: 500, easing: "easeInOutCubic"});
    $(".portfolio_link").addClass("active");
    circleOut("study_circle", 300);
    circleIn("portfolio_circle", 300);
    $(".inner_loader.portfolio").fadeIn(200, function () {
        $(".sections").hide();
        $("#portfolio_section").show()
    }).delay(300).fadeOut(200, function () {
        $("#nav_bar").animate({top: 0}, {duration: 300, easing: "easeOutCubic"});
        $(".share").addClass("bar")
    });
    if (portfolioLoad == 0) {
        portfolio_load()
    }
    portfolioLoad = 1
}
function portfoliopopClose() {
    $("#portfolio_inner").fadeOut(200, function () {
        $(".content").html("")
    })
}
function portfolio_page() {
    $(".sections").hide();
    $(".work_arrows").show();
    $(".inner_loader.portfolio").show();
    $("body").animate({scrollTop: 0}, 0);
    $("#portfolio_inner").show();
    if (portfolioNum == 1) {
        $(".prev").hide()
    }
    if (portfolioNum == 16) {
        $(".next").hide()
    }
    $(".content").load("portfolio_" + portfolioNum + ".html", function () {
        if (contentType == "image") {
            $(this).find("img").load(function () {
                $(".content").css("height", "auto");
                $("#portfolio_inner").css("background-color", "#fff");
                $(".inner_loader.portfolio").fadeOut(200)
            })
        } else if (contentType == "video") {
            $(this).css("height", winHeight - 48);
            $("#portfolio_inner").css("background-color", "#fff");
            $(".inner_loader.portfolio").fadeOut(200)
        }
    })
}
function menuOpen() {
    $("#menu").animate({left: 0}, {duration: 200, easing: "easeOutCubic"});
    $("#work_menu").hide();
    $("#toggler").animate({marginLeft: 50}, {duration: 200, easing: "easeOutCubic"}).addClass("active")
}
function menuClose() {
    $("#work_menu").delay(200).fadeIn(200);
    $("#menu").animate({left: -160}, {duration: 200, easing: "easeOutCubic"});
    $("#toggler").animate({marginLeft: 0}, {duration: 200, easing: "easeOutCubic"}).removeClass("active")
}
function philHoverIn() {
    circleIn("phil_circle", 480);
    $(".philosophy").find("h2,.circle_inner").addClass("hovered")
}
function philHoverOut() {
    circleOut("phil_circle", 480);
    $(".philosophy").find("h2,.circle_inner").removeClass("hovered")
}
function workHoverIn() {
    $(".work .stroke.tr").animate({width: 95, opacity: 1}, 80);
    $(".work .stroke.r").delay(80).animate({width: 95}, 80);
    $(".work .stroke.br").delay(160).animate({width: 95}, 80);
    $(".work .stroke.bl").delay(240).animate({width: 95}, 80);
    $(".work .stroke.l").delay(320).animate({width: 95}, 80);
    $(".work .stroke.tl").delay(400).animate({width: 95}, 80);
    $(".work").find("h2,.circle_inner").addClass("hovered")
}
function workHoverOut() {
    $(".work .stroke.tl").animate({width: 0}, 80);
    $(".work .stroke.l").delay(80).animate({width: 0}, 80);
    $(".work .stroke.bl").delay(160).animate({width: 0}, 80);
    $(".work .stroke.br").delay(240).animate({width: 0}, 80);
    $(".work .stroke.r").delay(320).animate({width: 0}, 80);
    $(".work .stroke.tr").delay(400).animate({width: 0, opacity: 0}, 80);
    $(".work").find("h2,.circle_inner").removeClass("hovered")
}
function conHoverIn() {
    $(".contact .stroke.t").animate({width: 158, opacity: 1}, 120);
    $(".contact .stroke.r").delay(120).animate({width: 158}, 120);
    $(".contact .stroke.b").delay(240).animate({width: 158}, 120);
    $(".contact .stroke.l").delay(360).animate({width: 158}, 120);
    $(".contact").find("h2,.circle_inner").addClass("hovered")
}
function conHoverOut() {
    $(".contact .stroke.l").animate({width: 0}, 120);
    $(".contact .stroke.b").delay(120).animate({width: 0}, 120);
    $(".contact .stroke.r").delay(240).animate({width: 0}, 120);
    $(".contact .stroke.t").delay(360).animate({width: 0, opacity: 0}, 120);
    $(".contact").find("h2,.circle_inner").removeClass("hovered")
}
function infoOpen() {
    $(".info_bar").animate({scrollTop: 0}, 0).animate({left: "0%"}, {duration: 350, easing: "easeOutCubic"});
    setTimeout(function () {
        $(".info_bar > p").animate({paddingTop: 20}, {duration: 500, easing: "easeOutCubic"});
        circleIn("age", 500);
        circleIn("awards", 500);
        circleIn("kids", 500);
        circleIn("shib", 500)
    }, 200);
    $(".info_btn").addClass("active");
    $("#home_section").addClass("close_cursor");
    info = 1
}
function infoClose() {
    $(".info_bar").animate({left: "-87%"}, {duration: 350, easing: "easeOutCubic"});
    setTimeout(function () {
        $(".info_bar > p").animate({paddingTop: 40}, 0);
        circleOut("age", 0);
        circleOut("awards", 0);
        circleOut("kids", 0);
        circleOut("shib", 0)
    }, 350);
    $(".info_btn").removeClass("active");
    $("#home_section").removeClass("close_cursor");
    info = 0
}
var scrollHeight = 0;
var isFirefox = typeof InstallTrigger !== "undefined";
var winWidth = $(window).width();
var winHeight = $(window).height();
var info = 0;
var move = 0;
var portfolioLoad = 0;
var studyLoad = 0;
var innerCase = 0;
var portfolioPop = 0;
var portfolioNum = 0;
var contentType = "image";
(function (e, t) {
    e.addTest("csstransformspreserve3d", function () {
        var n = e.prefixed("transformStyle");
        var r = "preserve-3d";
        var i;
        if (!n)return false;
        n = n.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-");
        e.testStyles("#modernizr{" + n + ":" + r + ";}", function (e, r) {
            i = t.getComputedStyle ? getComputedStyle(e, null).getPropertyValue(n) : ""
        });
        return i === r
    })
})(Modernizr, window);
var phillList = 0;
$(document).ready(function () {
    if (winWidth > 720) {
        location.href = "../"
    }
    document.addEventListener("scroll", scrollData, false);
    if (!Modernizr.csstransformspreserve3d) {
        $(".wall").hide()
    }
    $(".share-button").share({
        url: "http://tomlrn.com",
        text: "Design portfolio by Tomer Lerner",
        image: "http://carrot.is/img/fb-share.jpg"
    });
    $("svg").find("circle").each(function () {
        strokeW = $(this).attr("stroke-width");
        circleR = $(this).attr("r");
        circleScope = Math.PI * 2 * circleR;
        $(this).attr("stroke-dasharray", circleScope);
        if (isFirefox == true) {
            $(this).animate({svgStrokeDashOffset: circleScope / strokeW}, 0)
        } else {
            $(this).animate({svgStrokeDashOffset: circleScope}, 0)
        }
    });
    $(window).hashchange(function () {
        hash = location.hash;
        document.title = "Design by Tomer Lerner -  " + hash.replace(/^#/, "");
        load_out();
        if (hash === "") {
            window.location.hash = "#home"
        } else if (hash === "#home") {
            home()
        } else if (hash === "#philosophy") {
            philosophy()
        } else if (hash === "#contact") {
            contact()
        } else if (hash === "#work") {
            work()
        } else if (hash === "#case_studies") {
            case_studies()
        } else if (hash === "#portfolio") {
            portfolio()
        }
    });
    $(window).hashchange();
    $(".wall.back").hide();
    window.ondeviceorientation = function (e) {
        alpha = Math.round(e.alpha);
        beta = Math.round(e.beta);
        gamma = Math.round(e.gamma);
        var t = window.orientation;
        if (move == 0 && hash == "#home") {
            if (t === -90) {
                if (beta < -10) {
                    $("#logo").removeClass().addClass("flip_1")
                } else if (beta > 20) {
                    $("#logo").removeClass().addClass("flip_2")
                } else if (gamma < -15) {
                    $("#logo").removeClass().addClass("flip_3")
                } else if (gamma > 50) {
                    $("#logo").removeClass().addClass("flip_4")
                } else {
                    $("#logo").removeClass()
                }
            } else if (t === 90) {
                if (gamma < -50) {
                    $("#logo").removeClass().addClass("flip_4")
                } else if (gamma > 15) {
                    $("#logo").removeClass().addClass("flip_3")
                } else if (beta < -20) {
                    $("#logo").removeClass().addClass("flip_2")
                } else if (beta > 20) {
                    $("#logo").removeClass().addClass("flip_1")
                } else {
                    $("#logo").removeClass()
                }
            } else if (t === 0) {
                if (gamma < -20) {
                    $("#logo").removeClass().addClass("flip_2")
                } else if (gamma > 20) {
                    $("#logo").removeClass().addClass("flip_1")
                } else if (beta < -15) {
                    $("#logo").removeClass().addClass("flip_3")
                } else if (beta > 50) {
                    $("#logo").removeClass().addClass("flip_4")
                } else {
                    $("#logo").removeClass()
                }
            } else if (t === 180) {
                if (gamma < -20) {
                    $("#logo").removeClass().addClass("flip_1")
                } else if (gamma > 20) {
                    $("#logo").removeClass().addClass("flip_2")
                } else if (beta < -50) {
                    $("#logo").removeClass().addClass("flip_4")
                } else if (beta > 15) {
                    $("#logo").removeClass().addClass("flip_3")
                } else {
                    $("#logo").removeClass()
                }
            }
        }
    };
    $(".logo_hover").on("touchstart touchmove", function (e) {
        move = 1;
        e.preventDefault();
        endCoords = e.originalEvent.targetTouches[0];
        var t = $(".logo_hover").width();
        var n = $(".logo_hover").height();
        var r = $(".logo_hover").offset().left - endCoords.pageX + t;
        var i = $(".logo_hover").offset().top - endCoords.pageY + n;
        if (i > 0 && i < 70) {
            $("#logo").removeClass().addClass("flip_4")
        } else if (r > t / 2 && i > 70 && i < n - 70) {
            $("#logo").removeClass().addClass("flip_2")
        } else if (r < t / 2 && i > 70 && i < n - 70) {
            $("#logo").removeClass().addClass("flip_1")
        } else if (i < n && i > n - 70) {
            $("#logo").removeClass().addClass("flip_3")
        }
    });
    $(".logo_hover").on("touchend", function (e) {
        e.preventDefault();
        $("#logo").removeClass("flip_1 flip_2 flip_3 flip_4 flip_5");
        move = 0
    });
    $(".philosophy h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#philosophy"
        } else {
            window.location.hash = "#home"
        }
    });
    $(".contact h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#contact"
        } else {
            window.location.hash = "#home"
        }
    });
    $(".work h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#work"
        } else {
            window.location.hash = "#home"
        }
    });
    $(".study .dragged").on("click", function () {
        window.location.hash = "#case_studies"
    });
    $(".portfolio .dragged").on("click", function () {
        window.location.hash = "#portfolio"
    });
    $("#toggler").on("click", function () {
        if (!$(this).hasClass("active")) {
            menuOpen()
        } else {
            menuClose()
        }
    });
    $(".info_btn").on("click", function () {
        if (!$(this).hasClass("active")) {
            infoOpen()
        } else {
            infoClose()
        }
    });
    $("body").on("click", "#home_section.close_cursor", function () {
        if (info == 1) {
            infoClose()
        }
    });
    $(".study_list li").find(".open").on("click", function (e) {
        if (innerCase == 1) {
            caseClosed()
        }
        e.preventDefault();
        var t = $(this).attr("href");
        $(".inner_loader,#study_section").hide();
        $(".inner_loader.study").show();
        $(".study_inner").show();
        $(".content_study").load(t, function () {
            $("body").animate({scrollTop: 0}, 0);
            $(this).find("img").load(function () {
                $(".inner_loader.study").delay(100).fadeOut(300)
            })
        });
        innerCase = 1
    });
    $("body").on("click", ".study_inner .back", function () {
        caseClosed()
    });
    $("body").on("click", ".study_link", function () {
        if (innerCase == 1) {
            caseClosed()
        }
    });
    $("body").on("click", ".down", function () {
        var e = $(this).siblings(".image_wrapper").offset().top;
        $("body").animate({scrollTop: e - 47}, {duration: 500, easing: "easeInOutCubic"})
    });
    $(".portfolio_list li").find(".open, .video").click(function (e) {
        e.preventDefault();
        portfolioPop = 1;
        if ($(this).hasClass("open")) {
            contentType = "image"
        } else if ($(this).hasClass("video")) {
            contentType = "video"
        }
        portfolioNum = $(this).parent().index() + 1;
        portfolio_page()
    });
    $(".work_arrows.close").on("click", function () {
        portfolioPop = 0;
        portfoliopopClose();
        $("#portfolio_section").delay(500).fadeIn(300)
    });
    $("body").on("click", ".next, .prev", function () {
        if ($(this).hasClass("next")) {
            portfolioNum = portfolioNum + 1
        } else if ($(this).hasClass("prev")) {
            portfolioNum = portfolioNum - 1
        }
        $(".inner_loader.portfolio").show();
        portfolio_page()
    });
    $(window).on("resize", function () {
        winWidth = $(window).width();
        winHeight = $(window).height();
        if (hash == "#case_studies") {
            $(".study_list li").css("height", (winHeight - 48) / 3)
        }
        if (hash == "#portfolio" || portfolioPop == 1) {
            $(".content").find("iframe").css("height", winHeight - 48)
        }
        if (winWidth > 720) {
            location.href = "../"
        }
    })
});
$(window).load(function () {
    $("#loading").delay(800).fadeOut(300)
})