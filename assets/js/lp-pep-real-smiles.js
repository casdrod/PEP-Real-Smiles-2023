// fixed header with calc of header

    var theWindow = $(window),
        body = $("body"),
        header = $("header"),
        headerBottom = header.outerHeight();

    if(window.location.hash && theWindow.width() > 1025) {

		body.addClass("fix-nav").css('padding-top', headerBottom);;
	}


    theWindow.on("scroll", function () {
            if (theWindow.scrollTop() >= headerBottom) {

                body.addClass("fix-nav").css('padding-top', headerBottom);

            } else if (theWindow.scrollTop() <= headerBottom) {

                body.removeClass("fix-nav").css('padding-top','0');

            }
    });



// Copyright Year Auto Update
date = document.getElementById("copyDate");
date.innerHTML = new Date().getFullYear();