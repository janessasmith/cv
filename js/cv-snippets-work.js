var isFirefox = typeof InstallTrigger !== "undefined"; // i don't know
var loaded = 0; // i don't know
var winWidth = $(window).width();   // visual area width of the current window of the brower
var winHeight = $(window).height(); // visual area height of the current window of the brower

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
    if(loaded == 1) {
        $(".circle h2, .close-line, .work h2, .rotate, .work .circle-inner, .work .strokes, .social").removeClass("active"); // i don't know
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
    if(hash == "#home" || hash == "#skills" || hash == "#contact") {
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
    $(".contact-bg").animate({left: "-100%"}, {
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
        complete: function() {
            // cancel timer set by setInterval() method
            window.clearInterval(skillList)
        }
    })
}

/**
 * 模块说明
 * @module skills
 * @method circleIn() circleOut() skills() skillHoverIn() skillHoverOut()
 *
 * @date 2015-09-08
 * @author Janessa Smith
 */

// skills
function  circleIn(b, a) {
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
    if(sTop > winHeight) {
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
    $(".skills-list").delay(700).fadeIn(350, function() {
        // execute skillListAnim() method
        skillList = window.setInterval(function() {
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
        complete: function() {
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

    if(!(isTouchDevice)) {
        circleIn("sk-circle", 0);
        $(".skills").find("h2, .circle-inner").addClass("hovered");
    } else {
        skillHoverIn();
    }
    workHoverOut();
}

/**
 * 模块说明
 * @module work
 * @method work() workHoverIn() workHoverOut()
 *
 * @date 2015-09-08
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
    $(".work h2, .rotate, .work .circle-inner, .close-line").addClass("active");
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
        complete: function() {
            $(".work .strokes").addClass("active");
        }
    }).find(".work .circle-inner").addClass("active");
    $(".contact").animate({top: -60, left: -40}, {
        duration: 500,
        easing: "easeOutCubic"
    }).addClass("zoom-out");

    if(!(isTouchDevice)) {
        $(".work .stroke").animate({width: 95, opacity: 1}, 0);
        $(".work").find("h2, .circle-inner").addClass("hovered");
    } else {
        workHoverIn();
    }
    skillHoverOut();
}



function home() {
    if (isTouchDevice) {
        skillHoverOut();
        workHoverOut();
    }
}


$(document).ready(function() {
    // i don't know
    // svg
    $("svg").find("circle").each(function() {
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
    $(window).hashchange(function() {
        hash = location.hash;
        document.title = "Designed by Janessa Smith -  " + (hash.replace(/^#/, ""));
        loadOut();
        if(hash === "") {
            window.location.hash = "#home";
        } else {
            if(hash == "#home") {
                home();
            } else {
                if(hash == "#skills") {
                    skills();
                } else {
                    if(hash == "#work") {
                        work();
                    }
                }
            }
        }
    });
    $(window).hashchange();
    if(isTouchDevice) {

    } else {
        if(!(isTouchDevice)) {
            // skills hover
            $(".skills").hover(function() {
                if(!$(this).find("h2").hasClass("active")) {
                    skillHoverIn();
                }
            }, function() {
                if(!$(this).find("h2").hasClass("active")) {
                    skillHoverOut();
                }
            });
            // work hover
            $(".work").hover(function() {
                if(!$(this).find("h2").hasClass("active")) {
                    workHoverIn();
                }
            }, function() {
                if(!$(this).find("h2").hasClass("active")) {
                    workHoverOut();
                }
            });
        }
    }
    // skills click
    $(".skills h2").on("click", function() {
        if(!$(this).hasClass("active")) {
            window.location.hash = "#skills";
        } else {
            window.location.hash = "#home";
        }
    });
    // work click
    $(".work h2").on("click", function() {
        if(!$(this).hasClass("active")) {
            window.location.hash = "#work";
        } else {
            window.location.hash = "#home";
        }
    })

})


$(window).load(function () {
    $(".loading").delay(1200).fadeOut(300, function() {
        if(hash == "#home") {
            $(".logo-wrapper").animate({marginTop: 0, opacity: 1}, {
                duration: 850,
                easing: "easeOutCubic"
            })
        } else {
            if(hash == "#skills" || hash == "#work" || hash == "contact") {
                $(".logo-wrapper").animate({marginTop: -50, opacity: 1}, {
                    duration: 850,
                    easing: "easeOutCubic"
                })
            }
        }
        $(".circles-wrapper").delay(700).animate({marginTop: 0, opacity: 1}, {
            duration: 500,
            easing: "easeOutCubic"
        })

        loaded = 1;
    });
});