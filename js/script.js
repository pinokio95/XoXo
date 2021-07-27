$(function() {
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();


	/*Fixed Header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();
		
		checkScroll(scrollOffset);

	});

	function checkScroll(scrollOffset) {
		if( scrollOffset>=introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}

	/*Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
	});
	
	/* Menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
    	event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


});


function func1(){
	var t = Math.round(Math.random()*120);
	var l = Math.round(Math.random()*window.outerWidth-50);
document.getElementsByClassName("container_gap")[0].innerHTML+="<img class='snowflakes' style='top:"+t+"px; left:"+l+"px;' src='img/gap/3.gif'>";
}
setInterval(func1, 2000);
