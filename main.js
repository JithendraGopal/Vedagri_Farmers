function menubar(){
    const sidebar = document.querySelector('.nav_join_side')
    sidebar.style.display = "flex"
}
function back_menu(){
    const back = document.querySelector('.nav_join_side')
    back.style.display = "none"
}
// image changing in the in home page
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        './photos/photo-output.JPEG',
        './photos/pic2.JPEG', // Replace with the actual path to the second image
        './photos/pic3.PNG', // Replace with the actual path to the third image
        './photos/pic4.PNG'  // Replace with the actual path to the fourth image
    ];
    let currentImageIndex = 0;
    const mainImageDiv = document.getElementById('mainImage');

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImageDiv.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }

    setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds
});

// when the navbar service is clicked 
document.addEventListener("DOMContentLoaded", function() {
    // Select the anchor tag with the specified class
    var serviceLink = document.querySelector('.dropdown-content a');

    // Add a click event listener to the anchor tag
    serviceLink.addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        // Redirect the user to the Service_1.html page
        window.location.href = 'Service_1.html';
    });
});
// service for mobile and tab
document.addEventListener("DOMContentLoaded", function() {
    // Get the link element
    var serviceLink = document.querySelector(".dropdown-content_a2");

    // Add click event listener
    serviceLink.addEventListener("click", function(event) {
        // Prevent the default action (following the link)
        event.preventDefault();
        
        // Redirect to Service.html
        window.location.href = "Service_1.html";
    });
});


// for the service page 
document.addEventListener("DOMContentLoaded", function() {
    // Select the Home button
    var homeButton = document.querySelector('.homeBtt');

    // Add a click event listener to the Home button
    homeButton.addEventListener('click', function() {
        // Redirect the user to the Home page
        window.location.href = 'Home.html';
    });
});
// monbile and tab
document.addEventListener("DOMContentLoaded", function() {
    // Select the Home button
    var homeButton = document.querySelector('.Btt_side');

    // Add a click event listener to the Home button
    homeButton.addEventListener('click', function() {
        // Redirect the user to the Home page
        window.location.href = 'Home.html';
    });
});
// when click on the logo
document.addEventListener("DOMContentLoaded", function() {
    // Select the Home button
    var homeButton = document.querySelector('.logoImage');

    // Add a click event listener to the Home button
    homeButton.addEventListener('click', function() {
        // Redirect the user to the Home page
        window.location.href = 'Home.html';
    });
});

// when the tab and phone is clicked the service 
document.addEventListener("DOMContentLoaded", function() {
    // Select the Services button and dropdown content
    var servicesButton = document.querySelector('.ServicesBtt');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Add a click event listener to the Services button
    servicesButton.addEventListener('click', function(event) {
        // Toggle the visibility of the dropdown content
        dropdownContent.classList.toggle('active');
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.ServicesBtt')) {
            dropdownContent.classList.remove('active');
        }
    });
});
// About Us 
document.addEventListener("DOMContentLoaded", function() {
    // Get the Contacts link element
    var contactsLink = document.querySelector(".ContactsBtt");

    // Get the footer element
    var footer = document.querySelector("footer");

    // Add click event listener to the Contacts link
    contactsLink.addEventListener("click", function(event) {
        // Prevent the default action (following the link)
        event.preventDefault();

        // Scroll to the footer section
        footer.scrollIntoView({ behavior: "smooth" });
    });
});
