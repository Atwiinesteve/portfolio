window.addEventListener("scroll", function () {
	var backToTopButton = document.getElementById("back-to-top");
	if (window.pageYOffset > 100) {
		// Show backToTopButton after 100px of scrolling
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.style.display = "none";
	}
});
