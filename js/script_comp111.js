var isFirefox = typeof InstallTrigger !== "undefined";
var winWidth = $(window).width();
var winHeight = $(window).height();
var loaded = 0;
var info = 0;
var move = 0;
var innerCase = 0;
var portfolioPop = 0;
var portfolioNum = 0;
var contentType = "image";
var deviceAgent = navigator.userAgent.toLowerCase();
var isTouchDevice = Modernizr.touch || (deviceAgent.match(/(iphone|ipod|ipad)/) || deviceAgent.match(/(android)/) || deviceAgent.match(/(iemobile)/) || deviceAgent.match(/iphone/i) || deviceAgent.match(/ipad/i) || deviceAgent.match(/ipod/i) || deviceAgent.match(/blackberry/i) || deviceAgent.match(/bada/i));

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
function load_out() {
    $("#logo").removeClass();
    if (loaded == 1) {
        $(".circle h2,.social,.close_line,.work h2,.rotate,.work .circle_inner,.work .strokes,#work_menu li a").removeClass("active");
        $("#logo_wrapper,#circles_wrapper").animate({marginTop: 0, opacity: 1}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom_out");
        $(".circle").animate({left: 0, top: 0}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom_out")
    }
    if (portfolioPop == 1) {
        setTimeout("portfoliopopClose()", 500)
    }
    $("#study_section, #portfolio_section").find(".inner_loader").animate({left: "0%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".phil_bg").animate({left: "-100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    $(".contact_bg").animate({left: "100%"}, {queue: false, duration: 500, easing: "easeOutCubic"});
    if (hash == "#home" || hash == "#philosophy" || hash == "#contact") {
        $(".work_bg.l").animate({left: "-100%"}, {queue: false, duration: 500, easing: "easeInCubic"});
        $(".work_bg.r").animate({right: "-100%"}, {queue: false, duration: 500, easing: "easeInCubic"})
    }
    $("#home_section").animate({left: "0%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    $("#study_section").animate({left: "-100%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    $("#portfolio_section").animate({left: "100%"}, {queue: false, duration: 1000, easing: "easeInOutCubic"});
    if (hash == "#portfolio" || hash == "#case_studies") {
        $(".info_btn").fadeOut(200)
    } else {
        $(".info_btn").delay(1300).fadeIn(200);
        $("#nav_bar").delay(1000).animate({top: -50}, {
            duration: 300, easing: "easeOutCubic", complete: function () {
                $(".share").removeClass("bar")
            }
        });
        menuClose()
    }
    $(".philosophy_list").fadeOut({
        queue: false, duration: 100, complete: function () {
            window.clearInterval(phillList)
        }
    })
}
function home() {
    if (isTouchDevice) {
        philHoverOut();
        conHoverOut();
        workHoverOut()
    }
}
var phillList = 0;
//function phillListAnim() {
//    var a = $(".philosophy_list").offset().top;
//    if (a > winHeight) {
//        $(".philosophy_list").animate({bottom: "100%"}, 0)
//    }
//    $(".philosophy_list").animate({bottom: "-=1%"}, {queue: false, duration: 60, easing: "linear"})
//}
function philosophy() {
    $(".philosophy h2,.philosophy .circle_inner,.philosophy .close_line").addClass("active");
    $(".phil_bg").delay(500).animate({left: "0%"}, {duration: 500, easing: "easeOutCubic"});
    $(".philosophy_list").delay(700).fadeIn(350, function () {
        phillList = window.setInterval(function () {
            phillListAnim()
        }, 60)
    });
    if (!(isTouchDevice)) {
        circleIn("phil_circle", 0);
        $(".philosophy").find("h2,.circle_inner").addClass("hovered")
    } else {
        philHoverIn()
    }
    $("#logo_wrapper").animate({marginTop: -50}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
    $(".contact").animate({left: 120, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
    $(".work").animate({left: 180, top: -60}, {duration: 500, easing: "easeOutCubic"}).addClass("zoom_out");
    $(".philosophy").animate({left: 228, top: -60}, {
        duration: 500, easing: "easeOutCubic", complete: function () {
            $(".philosophy .strokes").addClass("active")
        }
    }).find(".philosophy .circle_inner").addClass("active");
    workHoverOut();
    conHoverOut()
}

function menuOpen() {
    $("#menu").animate({left: 0}, {duration: 200, easing: "easeOutCubic"});
    $("#toggler").animate({marginLeft: 40}, {duration: 200, easing: "easeOutCubic"}).addClass("active")
}
function menuClose() {
    $("#menu").animate({left: -160}, {duration: 200, easing: "easeOutCubic"});
    $("#toggler").animate({marginLeft: 0}, {duration: 200, easing: "easeOutCubic"}).removeClass("active");
    $("#work_menu").delay(200).fadeIn(200)
}
function philHoverIn() {
    circleIn("phil_circle", 480);
    $(".philosophy").find("h2,.circle_inner").addClass("hovered")
}
function philHoverOut() {
    circleOut("phil_circle", 480);
    $(".philosophy").find("h2,.circle_inner").removeClass("hovered")
}

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
        load_out();
        if (hash === "") {
            window.location.hash = "#home"
        } else {
            if (hash === "#home") {
                home()
            } else {
                if (hash === "#philosophy") {
                    philosophy()
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
                        $("#logo").removeClass().addClass("flip_1")
                    } else {
                        if (beta > 10) {
                            $("#logo").removeClass().addClass("flip_2")
                        } else {
                            if (gamma < -5) {
                                $("#logo").removeClass().addClass("flip_3")
                            } else {
                                if (gamma > 40) {
                                    $("#logo").removeClass().addClass("flip_4")
                                } else {
                                    $("#logo").removeClass()
                                }
                            }
                        }
                    }
                } else {
                    if (b === 90) {
                        if (gamma < -40) {
                            $("#logo").removeClass().addClass("flip_4")
                        } else {
                            if (gamma > 5) {
                                $("#logo").removeClass().addClass("flip_3")
                            } else {
                                if (beta < -10) {
                                    $("#logo").removeClass().addClass("flip_2")
                                } else {
                                    if (beta > 10) {
                                        $("#logo").removeClass().addClass("flip_1")
                                    } else {
                                        $("#logo").removeClass()
                                    }
                                }
                            }
                        }
                    } else {
                        if (b === 0) {
                            if (gamma < -10) {
                                $("#logo").removeClass().addClass("flip_2")
                            } else {
                                if (gamma > 10) {
                                    $("#logo").removeClass().addClass("flip_1")
                                } else {
                                    if (beta < -5) {
                                        $("#logo").removeClass().addClass("flip_3")
                                    } else {
                                        if (beta > 40) {
                                            $("#logo").removeClass().addClass("flip_4")
                                        } else {
                                            $("#logo").removeClass()
                                        }
                                    }
                                }
                            }
                        } else {
                            if (b === 180) {
                                if (gamma < -10) {
                                    $("#logo").removeClass().addClass("flip_1")
                                } else {
                                    if (gamma > 10) {
                                        $("#logo").removeClass().addClass("flip_2")
                                    } else {
                                        if (beta < -40) {
                                            $("#logo").removeClass().addClass("flip_4")
                                        } else {
                                            if (beta > 5) {
                                                $("#logo").removeClass().addClass("flip_3")
                                            } else {
                                                $("#logo").removeClass()
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
                $("#logo").removeClass().addClass("flip_4")
            } else {
                if (f > c / 2 && e > 70 && e < b - 70) {
                    $("#logo").removeClass().addClass("flip_2")
                } else {
                    if (f < c / 2 && e > 70 && e < b - 70) {
                        $("#logo").removeClass().addClass("flip_1")
                    } else {
                        if (e < b && e > b - 70) {
                            $("#logo").removeClass().addClass("flip_3")
                        }
                    }
                }
            }
        });
        $(".logo_hover").on("touchend", function (b) {
            b.preventDefault();
            $("#logo").removeClass("flip_1 flip_2 flip_3 flip_4 flip_5");
            move = 0
        });
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
                        $("#logo").addClass(d)
                    }
                } else {
                    $("#logo").animate({top: -70, opacity: 0}, {duration: 100, easing: "easeOutCubic"});
                    $(".logo_home").animate({bottom: 80, opacity: 1}, {duration: 200, easing: "easeOutCubic"})
                }
            });
            $("body").on("mouseleave", ".logo_hover", function () {
                if (hash == "#home") {
                    $("#logo").removeClass()
                } else {
                    $("#logo").delay(100).animate({top: 0, opacity: 1}, {duration: 100, easing: "easeOutCubic"});
                    $(".logo_home").animate({bottom: 40, opacity: 0}, {duration: 200, easing: "easeOutCubic"})
                }
            });
            $(".philosophy").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    philHoverIn()
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    philHoverOut()
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
            $("#logo").delay(80).animate({top: 0, opacity: 1}, {duration: 120, easing: "easeOutCubic"});
            $(".logo_home").animate({bottom: 40, opacity: 0}, {duration: 200, easing: "easeOutCubic"});
            if (hash == "#philosophy") {
                philHoverOut()
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
    $(".philosophy h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#philosophy"
        } else {
            window.location.hash = "#home"
        }
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
        if (hash == "#philosophy" || hash == "#work" || hash == "#contact") {
            if (hash == "#philosophy") {
                $(".contact").animate({left: 120, top: -60}, 0).addClass("zoom_out");
                $(".work").animate({left: 180, top: -60}, 0).addClass("zoom_out");
                $(".philosophy").animate({left: 228, top: -60}, 0)
            } else {
                if (hash == "#work") {
                    $(".philosophy").animate({left: 40, top: -60}, 0).addClass("zoom_out");
                    $(".contact").animate({left: -40, top: -60}, 0).addClass("zoom_out");
                    $(".work").animate({top: 70}, 0)
                } else {
                    if (hash == "#contact") {
                        $(".philosophy").animate({left: -135}, 0).addClass("zoom_out");
                        $(".work").animate({left: -190}, 0).addClass("zoom_out");
                        $(".contact").animate({left: -226}, 0)
                    }
                }
            }
        }
        if (winWidth < 720) {
            location.href = "mobile/"
        }
    });
    function a() {
        $(".work_bg.l").animate({marginLeft: 0}, {duration: 700, easing: "easeInOutCubic"});
        $(".work_bg.r").animate({marginRight: 0}, {duration: 700, easing: "easeInOutCubic"});
        $(".drag_line").animate({width: 0}, {duration: 700, easing: "easeInOutCubic"});
        $("#logo_wrapper,.dragged").animate({left: 0}, {duration: 700, easing: "easeInOutCubic"})
    }

    $(".study .dragged").draggable({
        axis: "x", scroll: false, drag: function (b, c) {
            xpos = c.position.left;
            xposMinus = -(c.position.left);
            if (xpos < 0) {
                $(".work_bg.l").css("margin-left", "" + xposMinus + "px");
                $(".work_bg.r").css("margin-right", "" + xpos + "px");
                $("#logo_wrapper").css("left", "" + xposMinus * 0.3 + "px");
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
                $("#logo_wrapper").css("left", "" + xposMinus * 0.3 + "px");
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
    $("#loading").delay(1200).fadeOut(300, function () {
        if (hash == "#home") {
            $("#logo_wrapper").animate({marginTop: 0, opacity: 1}, {duration: 850, easing: "easeOutCubic"})
        } else {
            if (hash == "#philosophy" || hash == "#work" || hash == "#contact") {
                $("#logo_wrapper").animate({marginTop: -50, opacity: 1}, {duration: 850, easing: "easeOutCubic"})
            }
        }
        $("#circles_wrapper").delay(700).animate({marginTop: 0, opacity: 1}, {duration: 500, easing: "easeOutCubic"});
        $(".info_btn").delay(1000).animate({top: 0, opacity: 1}, {duration: 500, easing: "easeOutCubic"});
        loaded = 1
    })
});