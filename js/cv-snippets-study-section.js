var isFirefox = typeof InstallTrigger !== "undefined"; // i don't know
var loaded = 0;
var info = 0;

var winWidth = $(window).width();   // visual area width of the current window of the brower
var winHeight = $(window).height(); // visual area height of the current window of the brower

var studyLoad = 0;
var innerCase = 0;
var proLoad = 0;
var contentType = "image"; // i don't know

// determine if the client is a touch device
var deviceAgent = navigator.userAgent.toLowerCase();
var isTouchDevice = Modernizr.touch ||
    (deviceAgent.match(/(iphone|ipod|ipad)/) ||
    deviceAgent.match(/(android)/) ||
    deviceAgent.match(/(iemobile)/) ||
    deviceAgent.match(/iphone/i) ||
    deviceAgent.match(/ipad/i) ||
    deviceAgent.match(/ipod/i) ||
    deviceAgent.match(/blackberry/i) ||
    deviceAgent.match(/bada/i));
//if (isTouchDevice) {
//    //Do something touchy
//} else {
//    //Can't touch this
//}

function loadOut() {
    // initialization
    if (loaded == 1) {
        $(".circle h2, .close-line, .work h2, .rotate, .work .circle-inner, .work .strokes, .social, .menu-work li a").removeClass("active");
        $(".logo-wrapper, .circles-wrapper").animate({marginTop: 0, opacity: 1}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom-out");
        $(".circle").animate({top: 0, left: 0}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        }).removeClass("zoom-out");
    }
    // show-bgs hide
    $(".sk-bg").animate({left: "-100%"}, {
        queue: false,
        duration: 500,
        easing: "easeOutCubic"
    })
    if (hash == "#home" || hash == "#skills" || hash == "#contact") {
        $(".work-bg.l").animate({left: "-100%"}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        });
        $(".work-bg.r").animate({right: "-100%"}, {
            queue: false,
            duration: 500,
            easing: "easeOutCubic"
        });
    }
    $(".contact-bg").animate({left: "100%"}, {
        queue: false,
        duration: 500,
        easing: "easeOutCubic"
    });
    // home-section hide
    $(".home-section").animate({left: "0%"}, {
        queue: false,
        duration: 500,
        easing: "easeOutCubic"
    });

    // skills-list fadeout
    $(".skills-list").fadeOut({
        queue: false,
        duration: 100,
        // callback function
        complete: function () {
            // cancel timer set by setInterval() method
            window.clearInterval(skillList)
        }
    });
    // study-section & project-section
    $(".study-section, .project-section").find(".study-loader").animate({left: "0%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".study-section").animate({left: "-100%"}, {
        queue: false,
        duration: 1000,
        easing: "easeInOutCubic"
    });
    $(".project-section").animate({left: "100%"}, {
        queue: false,
        duration: 1000,
        easing: "easeInOutCubic"
    });

    // study-section #studies
    if (hash == "#studies" || hash == "#project") {
        $(".info-btn").fadeOut(200);
        $(".nav-header").delay(1000).animate({top: 0}, {
            duration: 300,
            easing: "easeOutCubic"
        });
        $(".menu").removeClass("open");
    } else {
        $(".info-btn").delay(1300).fadeIn(200);
        $(".nav-header").delay(1000).animate({top: -48}, {
            duration: 300,
            easing: "easeOutCubic"
        });
        $(".menu-inner").removeClass("visible");
        $(".menu").removeClass("open");
    }
}

/**
 * 模块说明
 * @module skills
 * @method circleIn() circleOut() skills() skillHoverIn() skillHoverOut()
 *
 * @date 2015-09-01
 * @author Janessa Smith
 */

// skills
function circleIn(b, a) {
    circleR = $("#" + b).find("circle").attr("r");
    circleScope = (Math.PI) * 2 * circleR;
    $("#" + b).find("circle").attr("stroke-dasharray", circleScope);
    $("#" + b).find("circle").animate({svgStrokeDashOffset: 0}, a)
}// i don't know
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
}// i don't know

function skillHoverIn() {
    circleIn("sk-circle", 480);
    $(".skills").find("h2, .circle-inner").addClass("hovered");
}
function skillHoverOut() {
    circleOut("sk-circle", 480);
    $(".skills").find("h2, .circle-inner").removeClass("hovered");
}

var skillList = 0;
// skills-list show
function skillListAnim() {
    var sTop = $(".skills-list").offset().top; // relative to the top displacement
    if (sTop > winHeight) {
        $(".skills-list").animate({bottom: "100%"}, 0);
    } else {
        $(".skills-list").animate({bottom: "-=1%"}, {
            queue: false,
            duration: 60,
            easing: "linear"
        });
    }
}
function skills() {
    $(".skills h2, .skills .circle-inner, .skills .close-line").addClass("active");
    $(".sk-bg").delay(500).animate({left: "0%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".skills-list").delay(700).fadeIn(350, function () {
        // execute skillListAnim() method
        skillList = window.setInterval(function () {
            skillListAnim()
        }, 100)
    });
    $(".logo-wrapper").animate({marginTop: -50}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".skills").animate({top: -60, left: 228}, {
        duration: 500,
        easing: "easeOutCubic",
        complete: function () {
            $(".skills .strokes").addClass("active");
        }
    }).find(".skills .circle-inner").addClass("active");
    $(".work").animate({top: -60, left: 180}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".contact").animate({top: -60, left: 120}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");

    if (!(isTouchDevice)) {
        circleIn("sk-circle", 0);
        $(".skills").find("h2, .circle-inner").addClass("hovered");
    } else {
        skillHoverIn();
    }
    workHoverOut();
    conHoverOut();
}

/**
 * 模块说明
 * @module work
 * @method work() workHoverIn() workHoverOut()
 *
 * @date 2015-09-07
 * @author Janessa Smith
 */

// work
function workHoverIn() {
    $(".work .stroke.tr").animate({width: 95, opacity: 1}, 80);
    $(".work .stroke.r").delay(80).animate({width: 95}, 80);
    $(".work .stroke.br").delay(160).animate({width: 95}, 80);
    $(".work .stroke.bl").delay(240).animate({width: 95}, 80);
    $(".work .stroke.l").delay(320).animate({width: 95}, 80);
    $(".work .stroke.tl").delay(400).animate({width: 95}, 80);
    $(".work").find("h2, .circle-inner").addClass("hovered");
}
function workHoverOut() {
    $(".work .stroke.tl").animate({width: 0}, 80);
    $(".work .stroke.l").delay(80).animate({width: 0}, 80);
    $(".work .stroke.bl").delay(160).animate({width: 0}, 80);
    $(".work .stroke.br").delay(240).animate({width: 0}, 80);
    $(".work .stroke.r").delay(320).animate({width: 0}, 80);
    $(".work .stroke.tr").delay(400).animate({width: 0, opacity: 0}, 80);
    $(".work").find("h2, .circle-inner").removeClass("hovered");
}

function work() {
    $(".work h2, .rotate, .work .circle-inner, .work .close-line").addClass("active");
    $(".work-bg.l").delay(500).animate({left: "-40%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".work-bg.r").delay(500).animate({right: "-40%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".logo-wrapper").animate({marginTop: -50}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".skills").animate({top: -60, left: 40}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".work").animate({top: 70}, {
        duration: 500,
        easing: "easeOutCubic",
        complete: function () {
            $(".work .strokes").addClass("active");
        }
    }).find(".work .circle-inner").addClass("active");
    $(".contact").animate({top: -60, left: -40}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");

    if (!(isTouchDevice)) {
        $(".work .stroke").animate({width: 95, opacity: 1}, 0);
        $(".work").find("h2, .circle-inner").addClass("hovered");
    } else {
        workHoverIn();
    }
    skillHoverOut();
    conHoverOut();
}


/**
 * 模块说明
 * @module study-section
 * @method studiesCase() caseClosed()
 *
 * @date 2015-09-10
 * @author Janessa Smith
 */

// study-section
function studiesCase() {
    $(".home-section").animate({left: "100%"}, {
        duration: 1000,
        easing: "easeInOutCubic"
    });
    $(".study-section").animate({left: "0%"}, {
        duration: 1000,
        easing: "easeInOutCubic"
    });
    $(".study-section .study-loader").delay(100).animate({left: "100%"}, {
        duration: 500,
        easing: "easeInOutCubic",
    });

    // study-link
    $(".study-link").addClass("active");
    circleOut("project-circle", 300);
    circleIn("study-circle", 300);

    if (studyLoad == 0) {
        // study-list
        $(".study-list li").each(function () {
            var a = $(this).index() + 1;
            $(this).find(".img").css("background-image", "url(../../../cv/images/case_" + a + ".jpg)");
        });
    }
    studyLoad = 1;
}

function caseClosed() {
    $(".study-list li").removeClass("open close active unactive").find(".img").show()
        .removeClass("zoomed").find(".load").hide();
    $(".study-list li").find("a.open, .txt").show();
    $(".study-list li").find(".txt").removeClass("close");
    $(".study-inner").fadeOut(300);
    if (!(isTouchDevice)) {
        $(".study-inner").getNiceScroll().hide();
    }
    innerCase = 0;
}


/**
 * 模块说明
 * @module project-section
 * @method
 *
 * @date 2015-09-18
 * @author Janessa Smith
 */

function proListResize() {
    var a = $(".project-list li").outerHeight();
    $(".project-list li").css("width", a * 1.153);
    $(".project-list").css("width", ((a * 1.153 * $(".project-list li").length) / 2) + 110);

    if(!(isTouchDevice)) {
        // horiz-scroll
        $(".horiz-scroll").getNiceScroll().resize();
    }
}

function projectLoad() {
    proListResize();
    $(".project-list li").each(function() {
        var a = $(this).index() + 1;
        $(this).find(".img").css("background-image", "url(../../../cv/images/project/work_" + a + ".jpg)");
    })
}


function project() {
    $(".project-link").addClass("active");
    circleOut("study-circle", 300);
    circleIn("project-circle", 300);
    $(".home-section").animate({left: "-100%"}, {
        duration: 1000,
        easing: "easeInOutCubic"
    });
    $(".project-section").animate({left: "0%"}, {
        duration: 1000,
        easing: "easeInOutCubic"
    });

    // i don't know
    $(".project-section .study-loader").delay(100).animate({left: "-100%"}, {
        duration: 500,
        easing: "easeInOutCubic",
        complete: function() {
            $(".nav-header").animate({top: 0}, {
                duration: 300,
                easing: "easeInOutCubic"
            });
        }
    });

    if(proLoad == 0) {
        projectLoad();
    }
    proLoad = 1;
}


/**
 * 模块说明
 * @module contact
 * @method contact() conHoverIn() conHoverOut()
 *
 * @date 2015-09-09
 * @author Janessa Smith
 */

// contact
function conHoverIn() {
    $(".contact .stroke.t").animate({width: 158, opacity: 1}, 120);
    $(".contact .stroke.r").delay(120).animate({width: 158}, 120);
    $(".contact .stroke.b").delay(240).animate({width: 158}, 120);
    $(".contact .stroke.l").delay(360).animate({width: 158}, 120);
    $(".contact").find("h2, .circle-inner").addClass("hovered");
}
function conHoverOut() {
    $(".contact .stroke.l").animate({width: 0}, 120);
    $(".contact .stroke.b").delay(120).animate({width: 0}, 120);
    $(".contact .stroke.r").delay(240).animate({width: 0}, 120);
    $(".contact .stroke.t").delay(360).animate({width: 0, opacity: 0}, 120);
    $(".contact").find("h2, .circle-inner").removeClass("hovered");
}

function contact() {
    $(".contact").find("h2").addClass("active");
    $(".contact .close-line").addClass("active");
    $(".contact-bg").delay(500).animate({left: "50%"}, {
        duration: 500,
        easing: "easeOutCubic"
    });
    $(".logo-wrapper").animate({marginTop: -50}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".skills").animate({left: -135}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".work").animate({left: -190}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");
    $(".contact").animate({left: -226}, {
        duration: 500,
        easing: "easeOutCubic",
        complete: function () {
            $(".social").addClass("active");
        }
    }).find("h2").addClass("active");

    if (!(isTouchDevice)) {
        $(".contact .stroke").animate({width: 158, opacity: 1}, 0);
        $(".contact").find("h2, .circle-inner").addClass("hovered");
    } else {
        conHoverIn();
    }
    skillHoverOut();
    workHoverOut();
}

/**
 * 模块说明
 * @module info-btn
 * @method infoOpen() infoClose()
 *
 * @date 2015-09-10
 * @author Janessa Smith
 */

//info-btn
function infoOpen() {
    $(".info-side").animate({scrollTop: 0}, 0);
    $(".info-side").animate({left: 0}, {
        duration: 350,
        easing: "easeOutCubic"
    });
    $(".home-section").animate({left: 480}, {
        duration: 350,
        easing: "easeOutCubic"
    });
    setTimeout(function () {
        $(".info-side .intro").animate({paddingTop: 20}, {
            duration: 500,
            easing: "easeOutCubic"
        });
        circleIn("age", 500);
    }, 350);
    $(".info-btn").addClass("active");
    $(".home-section").addClass("close-cursor");
    info = 1;
}
function infoClose() {
    $(".info-side").animate({left: -480}, {
        duration: 350,
        easing: "easeOutCubic"
    });
    $(".home-section").animate({left: 0}, {
        duration: 350,
        easing: "easeOutCubic"
    });
    setTimeout(function () {
        $(".info-side .intro").animate({paddingTop: 40}, 0);
        circleOut("age", 0);
    }, 350);
    $(".info-btn").removeClass("active");
    $(".home-section").removeClass("close-cursor");
    info = 0;
}


/**
 * 模块说明
 * @module nav-header menu
 * @method
 *
 * @date 2015-09-16
 * @author Janessa Smith
 */

// menu
function menuOpen() {
    $(".nav-header .menu").addClass("open");
    $(".menu-inner").addClass("visible");
}
function menuClose() {
    $(".nav-header .menu").removeClass("open");
    $(".menu-inner").removeClass("visible");

    $(".menu-work").delay(200).fadeIn(200);
}


function home() {
    if (isTouchDevice) {
        skillHoverOut();
        workHoverOut();
        conHoverOut();
    }
}


$(document).ready(function () {
    // i don't know
    // svg
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
    })
    // hash
    $(window).hashchange(function () {
        hash = location.hash;
        document.title = "Designed by Janessa Smith -  " + (hash.replace(/^#/, ""));
        loadOut();
        if (hash === "") {
            window.location.hash = "#home";
        } else {
            if (hash === "#home") {
                home();
            } else {
                if (hash === "#skills") {
                    skills();
                } else {
                    if (hash === "#work") {
                        work();
                    } else {
                        if (hash === "#contact") {
                            contact();
                        } else {
                            if (hash === "#studies") {
                                studiesCase();
                            } else {
                                if(hash === "#project") {
                                    project();
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
        // work drag
        $(".dragged .arrow").css("width", "8px");
        $(".projects .dragged .arrow").css("left", "85%").css("opacity", "1");
        $(".study . dragged .arrow").css("right", "85%").css("opacity", "1");
        $(".projects .dragged .arrow.b,.study .dragged .arrow.t").css("margin-top", "3px");
        $(".projects .dragged .arrow.t,.study .dragged .arrow.b").css("margin-top", "-2px");
        // study-list show
        $(".study-list li").on("touchstart", function () {
            $(".study-list li").removeClass("active").addClass("unactive");
            $(this).removeClass("unactive").addClass("active");
            $(this).find(".img").addClass("zoomed");
        })
    } else {
        if (!(isTouchDevice)) {
            // skills hover
            $(".skills").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    skillHoverIn();
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    skillHoverOut();
                }
            });
            // work hover
            $(".work").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    workHoverIn();
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    workHoverOut();
                }
            });
            // contact hover
            $(".contact").hover(function () {
                if (!$(this).find("h2").hasClass("active")) {
                    conHoverIn();
                }
            }, function () {
                if (!$(this).find("h2").hasClass("active")) {
                    conHoverOut();
                }
            });

            // work drag
            $(".strokes .dragged").hover(function () {
                $(this).find(".arrow").addClass("hovered");
                $(this).parent().addClass("hovered");
            }, function () {
                $(this).find(".arrow").removeClass("hovered");
                $(this).parent().removeClass("hovered");
            });

            // info-btn hover
            $(".info-btn").hover(function () {
                circleIn("info-circle", 400);
                $(".info-inner, .info-btn span").addClass("hovered");
            }, function () {
                circleOut("info-circle", 400);
                $(".info-inner, .info-btn span").removeClass("hovered");
            });

            // study-list hover
            $(".study-list li").on("mouseenter", function () {
                $(".study-list li").addClass("unactive");
                $(this).addClass("active");
            });
            $(".study-list li").on("mouseleave", function () {
                $(".study-list li").removeClass("unactive");
                $(this).removeClass("active");
            });

            // study-link hover
            $(".study-link").hover(function () {
                if (!$(this).hasClass("active")) {
                    circleIn("study-circle", 300);
                }
            }, function () {
                if (!$(this).hasClass("active")) {
                    circleOut("study-circle", 300);
                }
            });
            // project-link hover
            $(".project-link").hover(function () {
                if (!$(this).hasClass("active")) {
                    circleIn("project-circle", 300);
                }
            }, function () {
                if (!$(this).hasClass("active")) {
                    circleOut("project-circle", 300);
                }
            });

            // info-side scrollbar
            $(".info-side").niceScroll({touchbehavior: true}).hide();

            // study-inner scroll
            $(".study-inner").niceScroll({
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
        }
    }
    // skills click
    $(".skills h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#skills";
        } else {
            window.location.hash = "#home";
        }
    });
    // work click
    $(".work h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#work";
        } else {
            window.location.hash = "#home";
        }
    });
    // contact click
    $(".contact h2").on("click", function () {
        if (!$(this).hasClass("active")) {
            window.location.hash = "#contact";
        } else {
            window.location.hash = "#home";
        }
    });

    // info-btn click
    $(".info-btn").on("click", function () {
        if (!$(this).hasClass("active")) {
            infoOpen();
        } else {
            infoClose();
        }
    });

    // menu click
    $(".nav-header .menu").on("click", function () {
        //$(this).toggleClass("open");
        //$(".menu-inner").toggleClass("visible");
        if (!$(this).hasClass("open")) {
            menuOpen();
        } else {
            menuClose();
        }
    });

    // home-section close-curser
    $("body").on("click touchstart", ".home-section.close-cursor", function () {
        if (info == 1) {
            infoClose();
        }
    });

    // study-section click
    $(".study .dragged").on("click", function () {
        window.location.hash = "#studies";
    });

    // project-section click
    $(".projects .dragged").on("click", function() {
        window.location.hash = "#project";
    });

    // study-list click
    $(".study-list li").find(".open").on("click", function (b) {
        if (innerCase == 1) {
            caseClosed();
        }
        b.preventDefault()
        $(".study-list li").addClass("close").removeClass("open")
            .find(".txt").addClass("close");
        $(this).parent().addClass("open");
        $(this).siblings(".img").addClass("zoomed")
            .find(".load").show();
        $(this).parent().find("a.open, .txt").hide();

        if (!(isTouchDevice)) {
            $(".study-inner").getNiceScroll().hide();
        }

        var c = $(this).attr("href");
        $(this).siblings(".study-inner").fadeIn(100).load(c, function () {
            $(this).animate({scrollTop: 0}, 0);
            $(this).find("img").load(function () {
                $(".zoomed").delay(100).fadeOut(300, function () {
                    if (!(isTouchDevice)) {
                        $(".study-inner").getNiceScroll().resize().show();
                    }
                });
            });
        });
        innerCase = 1;
    });

    // study-list back
    $("body").on("click", ".study-inner .back", function () {
        caseClosed();
    });

    // i don't know
    $("body").on("click", ".study-link", function () {
        if (innerCase == 1) {
            caseClosed();
        }
    });

    // study-list case down
    $("body").on("click", ".down", function () {
        var b = $(this).siblings(".image-wrapper").offset().top;
        $(this).parent().animate({scrollTop: b - 47}, {
            duration: 500,
            easing: "easeInOutCubic"
        });
    });

    // studies dragged
    function a() {
        $(".work-bg.l").animate({marginLeft: 0}, {
            duration: 700,
            easing: "easeInOutCubic"
        });
        $(".work-bg.r").animate({marginRight: 0}, {
            duration: 700,
            easing: "easeInOutCubic"
        });
        $(".drag-line").animate({width: 0}, {
            duration: 700,
            easing: "easeInOutCubic"
        });
        $(".logo-wrapper, .dragged").animate({left: 0}, {
            duration: 700,
            easing: "easeInOutCubic"
        });
    }

    // study drag
    $(".study .dragged").draggable({
        axis: "x",
        scroll: false,
        drag: function (b, c) {
            xPos = c.position.left;
            xPosMinus = -(c.position.left);
            if (xPos < 0) {
                $(".work-bg.l").css("margin-left", "" + xPosMinus + "px");
                $(".work-bg.r").css("margin-right", "" + xPos + "px");
                $(".logo-wrapper").css("left", "" + xPosMinus * 0.3 + "px");
                $(this).find(".drag-line").css("width", "" + xPosMinus + "px");
            } else {
                if (xPos > 0) {
                    return false;
                }
            }
        }, stop: function (b, c) {
            if (xPos < -20) {
                window.location.hash = "#studies";
            }
            a();
        }
    });

    // projects drag
    $(".projects .dragged").draggable({
        axis: "x",
        scroll: false,
        drag: function(b, c) {
            xPos = c.position.left;
            xPosMinus = -(c.position.left);
            if(xPos > 0) {
                $(".work-bg.r").css("margin-right", "" + xPos + "px");
                $(".work-bg.l").css("margin-left", "" + xPosMinus + "px");
                $(".logo-wrapper").css("left", "" + xPosMinus * .3 + "px");
                $(this).find(".drag-line").css("width", "" + xPos + "px");
            } else {
                if(xPos < 0) {
                    return false;
                }
            }
        }, stop: function(b, c) {
            if(xPos > 20) {
                window.location.hash = "#project";
            }
            a();
        }
    });

    // project-list click
    $(".project-list li").find(".open, .video").click(function(b) {
        b.preventDefault();
        if($(this).hasClass("active")) {
            contentType = "image";
        } else {
            if($(this).hasClass("video")) {
                contentType = "video";
            }
        }

    });
});


$(window).load(function () {
    $(".loading").delay(1200).fadeOut(300, function () {
        if (hash == "#home") {
            $(".logo-wrapper").animate({marginTop: 0, opacity: 1}, {
                duration: 850,
                easing: "easeOutCubic"
            })
        } else {
            if (hash == "#skills" || hash == "#work" || hash == "#contact") {
                $(".logo-wrapper").animate({marginTop: -50, opacity: 1}, {
                    duration: 850,
                    easing: "easeOutCubic"
                })
            }
        }
        $(".circles-wrapper").delay(700).animate({marginTop: 0, opacity: 1}, {
            duration: 500,
            easing: "easeOutCubic"
        });
        $(".info-btn").delay(1000).animate({top: 0, opacity: 1}, {
            duration: 500,
            easing: "easeOutCubic"
        });
        loaded = 1;
    });
});