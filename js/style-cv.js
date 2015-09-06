/**
 * Created by ZhengLu on 2015/9/6.
 */

var isFirefox = typeof InstallTrigger !== "undefined";
var winWidth = $(window).width();
var winHeight = $(window).height();
var loaded = 0;
var info = 0;
var move = 0;
var portfolioLoad = 0;
var studyLoad = 0;
var innerCase = 0;
var portfolioPop = 0;
var portfolioNum = 0;
var contentType = "image";
var deviceAgent = navigator.userAgent.toLowerCase();
var isTouchDevice = Modernizr.touch || (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i));
(function (b, a) {
    b.addTest("csstransformspreserve3d", function () {
        var e = b.prefixed("transformStyle");
        var d = "preserve-3d";
        var c;
        if (!e) {
            return false
        }
        e = e.replace(/([A-Z])/g, function (g, f) {
            return "-" + f.toLowerCase()
        }).replace(/^ms-/, "-ms-");
        b.testStyles("#modernizr{" + e + ":" + d + ";}", function (f, g) {
            c = a.getComputedStyle ? getComputedStyle(f, null).getPropertyValue(e) : ""
        });
        return (c === d)
    })
}(Modernizr, window));
// circle
function circleIn(b, a) {
    circleR = $("#" + b).find("circle").attr("r");
    circleScope = (Math.PI) * 2 * circleR;
    $("#" + b).find("circle").attr("stroke-dasharray", circleScope);
    $("#" + b).find("circle").animate({svgStrokeDashOffset: 0}, a)
}
function circleOut(b, a) {
    strokeW = $("#" + b).find("circle").attr("stroke-width");
    circleR = $("#" + b).find("circle").attr("r");
    circleScope = (Math.PI) * 2 * circleR;
    $("#" + b).find("circle").attr("stroke-dasharray", circleScope);
    if (isFirefox == true) {
        $("#" + b).find("circle").stop().animate({svgStrokeDashOffset: circleScope / strokeW}, a)
    } else {
        $("#" + b).find("circle").stop().animate({svgStrokeDashOffset: circleScope}, a)
    }
}
function loadOut() {
    if (loaded == 1) {
        $(".circle h2,.social,.close-line,.work h2,.rotate,.work .circle-inner,.work .strokes,#work_menu li a").removeClass("active");
        $(".logo-wrapper, .circles-wrapper").animate({marginTop: 0, opacity: 1}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom-out");
        $(".circle").animate({left: 0, top: 0}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom-out")
    }
    //if (portfolioPop == 1) {
    //    setTimeout("portfoliopopClose()", 500)
    //}
    //$("#study_section, #portfolio_section").find(".inner_loader").animate({left: "0%"}, {
    //    duration: 500,
    //    easing: "easeOutCubic"
    //});
    //$(".phil_bg").animate({left: "-100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    //$(".contact_bg").animate({left: "100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    //if (hash == "#home" || hash == "#philosophy" || hash == "#contact") {
    //    $(".work_bg.l").animate({left: "-100%"}, {queue: false, duration: 500, easing: "easeInCubic"});
    //    $(".work_bg.r").animate({right: "-100%"}, {queue: false, duration: 500, easing: "easeInCubic"})
    //}
    //$("#home_section").animate({left: "0%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    //$("#study_section").animate({left: "-100%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    //$("#portfolio_section").animate({left: "100%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    //if (hash == "#portfolio" || hash == "#case_studies") {
    //    $(".info_btn").fadeOut(200)
    //} else {
    //    $(".info_btn").delay(1300).fadeIn(200);
    //    $("#nav_bar").delay(1000).animate({top: -50}, {
    //        duration: 300, easing: "easeOutCubic", complete: function () {
    //            $(".share").removeClass("bar")
    //        }
    //    });
    //    menuClose()
    //}
    //$(".philosophy_list").fadeOut({
    //    queue: false, duration: 100, complete: function () {
    //        window.clearInterval(phillList)
    //    }
    //})
}
function home() {
    if (isTouchDevice) {
        skillHoverOut();
        conHoverOut();
        workHoverOut()
    }
}

//skills show
//var skilllList = 0;
//function skilllListAnim() {
//    var a = $(".philosophy_list").offset().top;
//    if (a > winHeight) {
//        $(".philosophy_list").animate({bottom: "100%"}, 0)
//    }
//    $(".philosophy_list").animate({bottom: "-=1%"}, {queue: false, duration: 60, easing: "linear"})
//}

//skill
function skills() {
    $(".skills h2,.skills .circle-inner,.skills .close-line").addClass("active");
    //$(".phil_bg").delay(500).animate({left: "0%"}, {duration: 500, easing: "easeOutCubic"});
    //$(".philosophy_list").delay(700).fadeIn(350, function () {
    //    skilllList = window.setInterval(function () {
    //        skilllListAnim()
    //    }, 60)
    //});
    if (!(isTouchDevice)) {
        circleIn("sk-circle", 0);
        $(".skills").find("h2,.circle-inner").addClass("hovered")
    } else {
        skillHoverIn()
    }
    $(".logo-wrapper").animate({marginTop: -50}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom-out");
    //$(".contact").animate({left: 120, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom-out");
    //$(".work").animate({left: 180, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom-out");
    $(".skills").animate({left: 228, top: -60}, {
        duration: 500, easing: "easeOutCubic", complete: function () {
            $(".skills .strokes").addClass("active")
        }
    }).find(".skills .circle-inner").addClass("active");
    //workHoverOut();
    //conHoverOut()
}

function skillHoverIn() {
    circleIn("sk-circle", 480);
    $(".skills").find("h2,.circle-inner").addClass("hovered")
}
function skillHoverOut() {
    circleOut("sk-circle", 480);
    $(".skills").find("h2,.circle-inner").removeClass("hovered")
}

//function contact() {
//    $(".contact").find("h2").addClass("active");
//    $(".contact .close_line").addClass("active");
//    $(".contact_bg").delay(500).animate({left: "50%"}, {duration: 500, easing: "easeOutCubic"});
//    if (!(isTouchDevice)) {
//        $(".contact .stroke").animate({width: 158, opacity: 1}, 0);
//        $(".contact").find("h2,.circle_inner").addClass("hovered")
//    } else {
//        conHoverIn()
//    }
//    $("#logo_wrapper").animate({marginTop: -50}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".philosophy").animate({left: -135}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".work").animate({left: -190}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".contact").animate({left: -226}, {
//        duration: 500, easing: "easeOutCubic", complete: function () {
//            $(".social").addClass("active")
//        }
//    }).find("h2").addClass("active");
//    workHoverOut();
//    skillHoverOut()
//}
//function work() {
//    $(".work h2,.rotate,.work .circle_inner,.work .close_line").addClass("active");
//    $(".work_bg.l").delay(500).animate({left: "-40%"}, {duration: 500, easing: "easeOutCubic"});
//    $(".work_bg.r").delay(500).animate({right: "-40%"}, {duration: 500, easing: "easeOutCubic"});
//    if (!(isTouchDevice)) {
//        $(".work .stroke").animate({width: 95, opacity: 1}, 0);
//        $(".work").find("h2,.circle_inner").addClass("hovered")
//    } else {
//        workHoverIn()
//    }
//    $("#logo_wrapper").animate({marginTop: -50}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".philosophy").animate({left: 40, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".contact").animate({left: -40, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
//    $(".work").animate({top: 70}, {
//        duration: 500, easing: "easeOutCubic", complete: function () {
//            $(".work .strokes").addClass("active")
//        }
//    }).find(".work .circle_inner").addClass("active");
//    conHoverOut();
//    skillHoverOut()
//}
//function case_studies() {
//    $(".study_link").addClass("active");
//    circleOut("portfolio_circle", 300);
//    circleIn("study_circle", 300);
//    $("#home_section").animate({left: "100%"}, {duration: 1000, easing: "easeInOutCubic"});
//    $("#study_section").animate({left: "0%"}, {duration: 1000, easing: "easeInOutCubic"});
//    $("#study_section > .inner_loader").delay(100).animate({left: "100%"}, {
//        duration: 500,
//        easing: "easeOutCubic",
//        complete: function () {
//            $("#nav_bar").animate({top: 0}, {duration: 300, easing: "easeOutCubic"});
//            $(".share").addClass("bar")
//        }
//    });
//    if (studyLoad == 0) {
//        $(".study_list li").each(function () {
//            var a = $(this).index() + 1;
//            $(this).find(".img").css("background-image", "url(css/img/case_" + a + ".jpg)")
//        })
//    }
//    studyLoad = 1
//}
//function caseClosed() {
//    $(".study_list li").removeClass("open close active unactive").find(".img").show().removeClass("zoomed").find(".load_ring").hide();
//    $(".study_list li").find("a.open,.txt").show();
//    $(".study_list li").find(".txt").removeClass("close");
//    $(".study_inner").fadeOut(300);
//    if (!(isTouchDevice)) {
//        $(".study_inner").getNiceScroll().hide()
//    }
//    innerCase = 0
//}
//function portfolio_load() {
//    listResize();
//    $(".portfolio_list li").each(function () {
//        var a = $(this).index() + 1;
//        $(this).find(".img").css("background-image", "url(css/img/work_" + a + ".jpg)")
//    })
//}
//function portfolio() {
//    $(".portfolio_link").addClass("active");
//    circleOut("study_circle", 300);
//    circleIn("portfolio_circle", 300);
//    $("#home_section").animate({left: "-100%"}, {duration: 1000, easing: "easeInOutCubic"});
//    $("#portfolio_section").animate({left: "0%"}, {duration: 1000, easing: "easeInOutCubic"});
//    $("#portfolio_section > .inner_loader").delay(100).animate({left: "-100%"}, {
//        duration: 500,
//        easing: "easeOutCubic",
//        complete: function () {
//            $("#nav_bar").animate({top: 0}, {duration: 300, easing: "easeOutCubic"});
//            $(".share").addClass("bar")
//        }
//    });
//    if (portfolioLoad == 0) {
//        portfolio_load()
//    }
//    portfolioLoad = 1
//}
//function listResize() {
//    var a = $(".portfolio_list li").outerHeight();
//    $(".portfolio_list li").css("width", a * 1.153);
//    $(".portfolio_list").css("width", ((a * 1.153 * $(".portfolio_list li").length) / 2) + 110);
//    if (!(isTouchDevice)) {
//        $(".horiz_scroll").getNiceScroll().resize()
//    }
//}
//function portfoliopopClose() {
//    if (!(isTouchDevice)) {
//        $(".content").getNiceScroll().hide()
//    }
//    $("#portfolio_inner").fadeOut(200, function () {
//        $(".portfolio_loader").show();
//        $("#inner_work").find(".content").html("").animate({opacity: 0}, 0);
//        $(".next").animate({opacity: 0, left: "40%"}, 0);
//        $(".prev").animate({opacity: 0, right: "40%"}, 0)
//    })
//}
//function portfolioLoaderOut() {
//    $(".content").animate({opacity: 1}, 200, function () {
//        $(".next").animate({opacity: 1, left: "50%"}, {duration: 500, easing: "easeOutBack"});
//        $(".prev").delay(100).animate({opacity: 1, right: "50%"}, {duration: 500, easing: "easeOutBack"});
//        $(".portfolio_loader").fadeOut(200, function () {
//            if ((!(isTouchDevice)) && contentType == "image") {
//                $(".content").getNiceScroll().resize().show()
//            } else {
//                $(".content").getNiceScroll().hide()
//            }
//        })
//    })
//}
//function portfolio_page() {
//    if (!(isTouchDevice)) {
//        $(".content").getNiceScroll().hide()
//    }
//    $(".work_arrows").show();
//    if (portfolioNum == 1) {
//        $(".prev").hide()
//    }
//    if (portfolioNum == 16) {
//        $(".next").hide()
//    }
//    $("#inner_work").find(".content").load("portfolio_" + portfolioNum + ".html", function () {
//        $(this).animate({scrollTop: 0}, 0);
//        if (contentType == "image") {
//            $("#inner_work").removeClass("vid");
//            $(this).find("img").load(function () {
//                portfolioLoaderOut()
//            })
//        } else {
//            if (contentType == "video") {
//                $("#inner_work").addClass("vid");
//                portfolioLoaderOut()
//            }
//        }
//    })
//}
//function menuOpen() {
//    $("#menu").animate({left: 0}, {duration: 200, easing: "easeOutCubic"});
//    $("#toggler").animate({marginLeft: 40}, {duration: 200, easing: "easeOutCubic"}).addClass("active")
//}
//function menuClose() {
//    $("#menu").animate({left: -160}, {duration: 200, easing: "easeOutCubic"});
//    $("#toggler").animate({marginLeft: 0}, {duration: 200, easing: "easeOutCubic"}).removeClass("active");
//    $("#work_menu").delay(200).fadeIn(200)
//}

//function workHoverIn() {
//    $(".work .stroke.tr").animate({width: 95, opacity: 1}, 80);
//    $(".work .stroke.r").delay(80).animate({width: 95}, 80);
//    $(".work .stroke.br").delay(160).animate({width: 95}, 80);
//    $(".work .stroke.bl").delay(240).animate({width: 95}, 80);
//    $(".work .stroke.l").delay(320).animate({width: 95}, 80);
//    $(".work .stroke.tl").delay(400).animate({width: 95}, 80);
//    $(".work").find("h2,.circle_inner").addClass("hovered")
//}
//function workHoverOut() {
//    $(".work .stroke.tl").animate({width: 0}, 80);
//    $(".work .stroke.l").delay(80).animate({width: 0}, 80);
//    $(".work .stroke.bl").delay(160).animate({width: 0}, 80);
//    $(".work .stroke.br").delay(240).animate({width: 0}, 80);
//    $(".work .stroke.r").delay(320).animate({width: 0}, 80);
//    $(".work .stroke.tr").delay(400).animate({width: 0, opacity: 0}, 80);
//    $(".work").find("h2,.circle_inner").removeClass("hovered")
//}
//function conHoverIn() {
//    $(".contact .stroke.t").animate({width: 158, opacity: 1}, 120);
//    $(".contact .stroke.r").delay(120).animate({width: 158}, 120);
//    $(".contact .stroke.b").delay(240).animate({width: 158}, 120);
//    $(".contact .stroke.l").delay(360).animate({width: 158}, 120);
//    $(".contact").find("h2,.circle_inner").addClass("hovered")
//}
//function conHoverOut() {
//    $(".contact .stroke.l").animate({width: 0}, 120);
//    $(".contact .stroke.b").delay(120).animate({width: 0}, 120);
//    $(".contact .stroke.r").delay(240).animate({width: 0}, 120);
//    $(".contact .stroke.t").delay(360).animate({width: 0, opacity: 0}, 120);
//    $(".contact").find("h2,.circle_inner").removeClass("hovered")
//}
function infoOpen() {
    $(".info_bar").animate({scrollTop: 0}, 0);
    $(".info_bar").animate({left: 0}, {duration: 350, easing: "easeOutCubic"});
    $("#home_section").animate({left: 480}, {duration: 350, easing: "easeOutCubic"});
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
    $(".info_bar").animate({left: -480}, {duration: 350, easing: "easeOutCubic"});
    $("#home_section").animate({left: 0}, {duration: 350, easing: "easeOutCubic"});
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

$(document).ready(function () {
    if (winWidth < 720) {
        location.href = "mobile/"
    }
    if (!Modernizr.csstransformspreserve3d) {
        $(".wall").hide()
    }
    //$(".share-button").share({
    //    url: "http://tomlrn.com",
    //    text: "Design portfolio by Tomer Lerner",
    //    image: "http://carrot.is/img/fb-share.jpg"
    //});
    $("svg").find("circle").each(function () {
        strokeW = $(this).attr("stroke-width");
        circleR = $(this).attr("r");
        circleScope = (Math.PI) * 2 * circleR;
        $(this).attr("stroke-dasharray", circleScope);
        if (isFirefox == true) {
            $(this).animate({svgStrokeDashOffset: circleScope / strokeW}, 0)
        } else {
            $(this).animate({svgStrokeDashOffset: circleScope}, 0)
        }
    });
    $(window).hashchange(function () {
        hash = location.hash;
        document.title = "Design by Tomer Lerner -  " + (hash.replace(/^#/, ""));
        loadOut();
        if (hash === "") {
            window.location.hash = "#home"
        } else {
            if (hash === "#home") {
                home()
            } else {
                if (hash === "#skills") {
                    skills()
                } else {
                    if (hash === "#contact") {
                        contact()
                    } else {
                        if (hash === "#work") {
                            work()
                        } else {
                            if (hash === "#case_studies") {
                                case_studies()
                            } else {
                                if (hash === "#portfolio") {
                                    portfolio()
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    $(window).hashchange();
    if (isTouchDevice) {
        $(".wall.back").hide();
        window.ondeviceorientation = function (c) {
            alpha = Math.round(c.alpha);
            beta = Math.round(c.beta);
            gamma = Math.round(c.gamma);
            var b = window.orientation;
            if (move == 0 && hash == "#home") {
                if (b === -90) {
                    if (beta < -10) {
                        $(".logo").removeClass().addClass("flip_1")
                    } else {
                        if (beta > 10) {
                            $(".logo").removeClass().addClass("flip_2")
                        } else {
                            if (gamma < -5) {
                                $(".logo").removeClass().addClass("flip_3")
                            } else {
                                if (gamma > 40) {
                                    $(".logo").removeClass().addClass("flip_4")
                                } else {
                                    $(".logo").removeClass()
                                }
                            }
                        }
                    }
                } else {
                    if (b === 90) {
                        if (gamma < -40) {
                            $(".logo").removeClass().addClass("flip_4")
                        } else {
                            if (gamma > 5) {
                                $(".logo").removeClass().addClass("flip_3")
                            } else {
                                if (beta < -10) {
                                    $(".logo").removeClass().addClass("flip_2")
                                } else {
                                    if (beta > 10) {
                                        $(".logo").removeClass().addClass("flip_1")
                                    } else {
                                        $(".logo").removeClass()
                                    }
                                }
                            }
                        }
                    } else {
                        if (b === 0) {
                            if (gamma < -10) {
                                $(".logo").removeClass().addClass("flip_2")
                            } else {
                                if (gamma > 10) {
                                    $(".logo").removeClass().addClass("flip_1")
                                } else {
                                    if (beta < -5) {
                                        $(".logo").removeClass().addClass("flip_3")
                                    } else {
                                        if (beta > 40) {
                                            $(".logo").removeClass().addClass("flip_4")
                                        } else {
                                            $(".logo").removeClass()
                                        }
                                    }
                                }
                            }
                        } else {
                            if (b === 180) {
                                if (gamma < -10) {
                                    $(".logo").removeClass().addClass("flip_1")
                                } else {
                                    if (gamma > 10) {
                                        $(".logo").removeClass().addClass("flip_2")
                                    } else {
                                        if (beta < -40) {
                                            $(".logo").removeClass().addClass("flip_4")
                                        } else {
                                            if (beta > 5) {
                                                $(".logo").removeClass().addClass("flip_3")
                                            } else {
                                                $(".logo").removeClass()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        $(".logo_hover").on("touchstart touchmove", function (d) {
            move = 1;
            d.preventDefault();
            endCoords = d.originalEvent.targetTouches[0];
            var c = $(".logo_hover").width();
            var b = $(".logo_hover").height();
            var f = $(".logo_hover").offset().left - endCoords.pageX + c;
            var e = $(".logo_hover").offset().top - endCoords.pageY + b;
            if (e > 0 && e < 70) {
                $(".logo").removeClass().addClass("flip_4")
            } else {
                if (f > c / 2 && e > 70 && e < b - 70) {
                    $(".logo").removeClass().addClass("flip_2")
                } else {
                    if (f < c / 2 && e > 70 && e < b - 70) {
                        $(".logo").removeClass().addClass("flip_1")
                    } else {
                        if (e < b && e > b - 70) {
                            $(".logo").removeClass().addClass("flip_3")
                        }
                    }
                }
            }
        });
        $(".logo_hover").on("touchend", function (b) {
            b.preventDefault();
            $(".logo").removeClass("flip_1 flip_2 flip_3 flip_4 flip_5");
            move = 0
        });
        $(".dragged .arrow").css("width", "8px");
        $(".portfolio .dragged .arrow").css("left", "85%").css("opacity", "1");
        $(".study .dragged .arrow").css("right", "85%").css("opacity", "1");
        $(".portfolio .dragged .arrow.b,.study .dragged .arrow.t").css("margin-top", "3px");
        $(".portfolio .dragged .arrow.t,.study .dragged .arrow.b").css("margin-top", "-2px");
        $(".study_list li").on("touchstart", function () {
            $(".study_list li").removeClass("active").addClass("unactive");
            $(this).removeClass("unactive").addClass("active");
            $(this).find(".img").addClass("zoomed")
        })
    } else {
        if (!(isTouchDevice)) {
            $(".horiz_scroll").niceScroll({
                cursorcolor: "#fff",
                background: "#000",
                touchbehavior: true,
                oneaxismousemode: true,
                cursoropacitymax: 1,
                cursorwidth: 5,
                cursorborderradius: 0,
                cursorborder: "none",
                autohidemode: false,
                zindex: 20
            });
            $(".content,.study_inner").niceScroll({
                cursorcolor: "#fff",
                background: "#000",
                touchbehavior: true,
                cursoropacitymax: 1,
                cursorwidth: 5,
                cursorborderradius: 0,
                cursorborder: "none",
                autohidemode: false,
                zindex: 30
            });
            $(".info_bar").niceScroll({touchbehavior: true}).hide();
            $("body").on("mouseenter", ".logo_hover", function () {
                if (hash == "#home") {
                    if (Modernizr.csstransformspreserve3d) {
                        var c = 1;
                        var b = 5;
                        randomNum = Math.floor(Math.random() * (b - c + 1)) + c;
                        var d = "flip_" + randomNum + "";
                        $(".logo").addClass(d)
                    }
                } else {
                    $(".logo").animate({top: -70, opacity: 0}, {duration: 100, easing: "easeOutCubic"});
                    $(".logo_home").animate({bottom: 80, opacity: 1}, {duration: 200, easing: "easeOutCubic"})
                }
            });
            $("body").on("mouseleave", ".logo_hover", function () {
                if (hash == "#home") {
                    $(".logo").removeClass()
                } else {
                    $(".logo").delay(100).animate({top: 0, opacity: 1}, {duration: 100, easing: "easeOutCubic"});
                    $(".logo_home").animate({bottom: 40, opacity: 0}, {duration: 200, easing: "easeOutCubic"})
                }
            });
            $(".skills").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    skillHoverIn()
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    skillHoverOut()
                }
            });
            $(".work").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    workHoverIn()
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    workHoverOut()
                }
            });
            $(".strokes .dragged").hover(function () {
                $(this).find(".arrow").addClass("hovered");
                $(this).parent().addClass("hovered")
            }, function () {
                $(this).find(".arrow").removeClass("hovered");
                $(this).parent().removeClass("hovered")
            });
            $(".contact").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    conHoverIn()
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    conHoverOut()
                }
            });
            $(".study_link").hover(function () {
                if (!$(this).hasClass("active")) {
                    circleIn("study_circle", 300)
                }
            }, function () {
                if (!$(this).hasClass("active")) {
                    circleOut("study_circle", 300)
                }
            });
            $(".portfolio_link").hover(function () {
                if (!$(this).hasClass("active")) {
                    circleIn("portfolio_circle", 300)
                }
            }, function () {
                if (!$(this).hasClass("active")) {
                    circleOut("portfolio_circle", 300)
                }
            });
            $(".next").hover(function () {
                circleIn("next_circle", 200)
            }, function () {
                circleOut("next_circle", 200)
            });
            $(".prev").hover(function () {
                circleIn("prev_circle", 200)
            }, function () {
                circleOut("prev_circle", 200)
            });
            $(".info_btn").hover(function () {
                circleIn("info_circle", 400);
                $(".info_inner,.info_btn span").addClass("hovered")
            }, function () {
                circleOut("info_circle", 400);
                $(".info_inner,.info_btn span").removeClass("hovered")
            });
            $(".study_list li").on("mouseenter", function () {
                $(".study_list li").addClass("unactive");
                $(this).addClass("active")
            });
            $(".study_list li").on("mouseleave", function () {
                $(".study_list li").removeClass("unactive");
                $(this).removeClass("active")
            })
        }
    }
    $(".logo_hover").on("click", function () {
        if (!(isTouchDevice)) {
            $(".logo").delay(80).animate({top: 0, opacity: 1}, {duration: 120, easing: "easeOutCubic"});
            $(".logo_home").animate({bottom: 40, opacity: 0}, {duration: 200, easing: "easeOutCubic"});
            if (hash == "#skills") {
                skillHoverOut()
            } else {
                if (hash == "#work") {
                    workHoverOut()
                } else {
                    if (hash == "#contact") {
                        conHoverOut()
                    }
                }
            }
        }
        window.location.hash = "#home"
    });
    $(".skills h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#skills"
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
    $("body").on("click touchstart", "#home_section.close_cursor", function () {
        if (info == 1) {
            infoClose()
        }
    });
    $(".study_list li").find(".open").on("click", function (b) {
        if (innerCase == 1) {
            caseClosed()
        }
        b.preventDefault();
        $(".study_list li").addClass("close").removeClass("open").find(".txt").addClass("close");
        $(this).parent().addClass("open");
        $(this).siblings(".img").addClass("zoomed").find(".load_ring").show();
        $(this).parent().find("a.open,.txt").hide();
        if (!(isTouchDevice)) {
            $(".study_inner").getNiceScroll().hide()
        }
        var c = $(this).attr("href");
        $(this).siblings(".study_inner").fadeIn(100).load(c, function () {
            $(this).animate({scrollTop: 0}, 0);
            $(this).find("img").load(function () {
                $(".zoomed").delay(100).fadeOut(300, function () {
                    if (!(isTouchDevice)) {
                        $(".study_inner").getNiceScroll().resize().show()
                    }
                })
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
        var b = $(this).siblings(".image_wrapper").offset().top;
        $(this).parent().animate({scrollTop: b - 47}, {duration: 500, easing: "easeInOutCubic"})
    });
    $(".portfolio_list li").find(".open, .video").click(function (b) {
        b.preventDefault();
        portfolioPop = 1;
        if ($(this).hasClass("open")) {
            contentType = "image"
        } else {
            if ($(this).hasClass("video")) {
                contentType = "video"
            }
        }
        $("#portfolio_inner").fadeIn(300);
        if (!(isTouchDevice)) {
            $(".content").getNiceScroll().hide()
        }
        portfolioNum = $(this).parent().index() + 1;
        portfolio_page()
    });
    $(".portfolio_bg.close_cursor").on("click", function () {
        portfolioPop = 0;
        portfoliopopClose()
    });
    $("body").on("click", ".next, .prev", function () {
        if (!(isTouchDevice)) {
            $(".content").getNiceScroll().hide()
        }
        if ($(this).hasClass("next")) {
            portfolioNum = portfolioNum + 1
        } else {
            if ($(this).hasClass("prev")) {
                portfolioNum = portfolioNum - 1
            }
        }
        $(".content").animate({opacity: 0}, 200, function () {
            $(".portfolio_loader").show();
            portfolio_page()
        })
    });
    $(window).on("resize", function () {
        winWidth = $(window).width();
        winHeight = $(window).height();
        listResize();
        if (hash == "#skills" || hash == "#work" || hash == "#contact") {
            if (hash == "#skills") {
                $(".contact").animate({left: 120, top: -60}, 0).addClass("zoom-out");
                $(".work").animate({left: 180, top: -60}, 0).addClass("zoom-out");
                $(".skills").animate({left: 228, top: -60}, 0)
            } else {
                if (hash == "#work") {
                    $(".skills").animate({left: 40, top: -60}, 0).addClass("zoom-out");
                    $(".contact").animate({left: -40, top: -60}, 0).addClass("zoom-out");
                    $(".work").animate({top: 70}, 0)
                } else {
                    if (hash == "#contact") {
                        $(".skills").animate({left: -135}, 0).addClass("zoom-out");
                        $(".work").animate({left: -190}, 0).addClass("zoom-out");
                        $(".contact").animate({left: -226}, 0)
                    }
                }
            }
        }
        //if (winWidth < 720) {
        //    location.href = "mobile/"
        //}
    });
    function a() {
        $(".work_bg.l").animate({marginLeft: 0}, {duration: 700, easing: "easeInOutCubic"});
        $(".work_bg.r").animate({marginRight: 0}, {duration: 700, easing: "easeInOutCubic"});
        $(".drag_line").animate({width: 0}, {duration: 700, easing: "easeInOutCubic"});
        $(".logo-wrapper,.dragged").animate({left: 0}, {duration: 700, easing: "easeInOutCubic"})
    }

    $(".study .dragged").draggable({
        axis: "x", scroll: false, drag: function (b, c) {
            xpos = c.position.left;
            xposMinus = -(c.position.left);
            if (xpos < 0) {
                $(".work_bg.l").css("margin-left", "" + xposMinus + "px");
                $(".work_bg.r").css("margin-right", "" + xpos + "px");
                $(".logo-wrapper").css("left", "" + xposMinus * 0.3 + "px");
                $(this).find(".drag_line").css("width", "" + xposMinus + "px")
            } else {
                if (xpos > 0) {
                    return false
                }
            }
        }, stop: function (b, c) {
            if (xpos < -20) {
                window.location.hash = "#case_studies"
            }
            a()
        }
    });
    $(".portfolio .dragged").draggable({
        axis: "x", scroll: false, drag: function (b, c) {
            xpos = c.position.left;
            xposMinus = -(c.position.left);
            if (xpos > 0) {
                $(".work_bg.r").css("margin-right", "" + xpos + "px");
                $(".work_bg.l").css("margin-left", "" + xposMinus + "px");
                $(".logo-wrapper").css("left", "" + xposMinus * 0.3 + "px");
                $(this).find(".drag_line").css("width", "" + xpos + "px")
            } else {
                if (xpos < 0) {
                    return false
                }
            }
        }, stop: function (b, c) {
            if (xpos > 20) {
                window.location.hash = "#portfolio"
            }
            a()
        }
    })
});
$(window).load(function () {
    $(".loading").delay(1200).fadeOut(300, function () {
        if (hash == "#home") {
            $(".logo-wrapper").animate({marginTop: 0, opacity: 1}, {duration: 850, easing: "easeOutCubic"})
        } else {
            if (hash == "#skills" || hash == "#work" || hash == "#contact") {
                $(".logo-wrapper").animate({marginTop: -50, opacity: 1}, {duration: 850, easing: "easeOutCubic"})
            }
        }
        $(".circles-wrapper").delay(700).animate({marginTop: 0, opacity: 1}, {duration: 500, easing: "easeOutCubic"});
        $(".info_btn").delay(1000).animate({top: 0, opacity: 1}, {duration: 500, easing: "easeOutCubic"});
        loaded = 1
    })
});