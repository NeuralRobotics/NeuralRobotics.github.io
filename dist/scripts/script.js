const registerVideo = (bound, video) => {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 3);
			
			video.currentTime = video.duration * percentScrolled ;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}


registerVideo("#bound-one", "#bound-one video");

registerVideo("#bound-two", "#bound-two video")

registerVideo("#bound-three", "#bound-three video")



document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});









const form = document.getElementById("fcf-form-id");
const formFeedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const formData = new FormData(form);

	// Use fetch to submit the form data to your PHP file
	fetch("https://formspree.io/f/xdorjvpn", {
		method: "POST",
		body: formData,
	})
    .then((response) => response.text()) // Parse the response as text
    .then((data) => {
        console.log("Formspree Response:", data); // Log the entire Formspree response as text

        if (data.includes("uccess")) { // Check for a success message in the response
            formFeedback.textContent = "Sending successful.";
            formFeedback.style.color = "green";
        } else {
            formFeedback.textContent = "Sending failed: " + data; // Display the actual response
            formFeedback.style.color = "red";
        }
        formFeedback.style.display = "block";
    })
    .catch((error) => {
        console.error("Error:", error);
        formFeedback.textContent = "An error occurred. Please try again later.";
        formFeedback.style.color = "red";
        formFeedback.style.display = "block";
    });
});











