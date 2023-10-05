document.addEventListener('DOMContentLoaded', function() {
    // Get references to the link and innovations section
    const showInnovationsLink = document.getElementById('showInnovationsLink');
    const innovationsSection = document.getElementById('innovations');

    // Variable to track the section's visibility
    let isSectionVisible = false;

    // Function to toggle section visibility
    function toggleSectionVisibility() {
        if (isSectionVisible) {
            innovationsSection.style.display = 'none'; // Hide the innovations section
        } else {
            innovationsSection.style.display = 'block'; // Show the innovations section
        }
        isSectionVisible = !isSectionVisible; // Toggle the visibility state
    }

    // Add a click event listener to the link
    showInnovationsLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        toggleSectionVisibility(); // Toggle the visibility of the innovations section
    });

    // Get references to the header and details elements for personal info
    const personalInfoHeader = document.getElementById('personal-info-header');
    const personalInfoDetails = document.getElementById('personal-info-details');

    // Add a click event listener to the personal info header
    personalInfoHeader.addEventListener('click', function() {
        // Toggle the visibility of the details element
        personalInfoDetails.classList.toggle('hidden');

        // Change the header text based on visibility
        if (personalInfoDetails.classList.contains('hidden')) {
            personalInfoHeader.querySelector('h3').textContent = 'Personal Information - Click to Expand';
        } else {
            personalInfoHeader.querySelector('h3').textContent = 'Personal Information - Click to Collapse';
        }
    });

    // Get references to the header and details elements for the image collection
    const imageCollectionHeader = document.getElementById('image-collection-header');
    const imageCollectionDetails = document.getElementById('image-collection-details');

    // Add a click event listener to the image collection header
    imageCollectionHeader.addEventListener('click', function() {
        // Toggle the visibility of the details element
        imageCollectionDetails.classList.toggle('hidden');

        // Change the header text based on visibility
        if (imageCollectionDetails.classList.contains('hidden')) {
            imageCollectionHeader.querySelector('h3').textContent = 'Image Collection - Click to Expand';
        } else {
            imageCollectionHeader.querySelector('h3').textContent = 'Image Collection - Click to Collapse';
        }
    });

    // Get references to the header and details elements for the blog section
    const blogHeader = document.getElementById('blog-header');
    const blogDetails = document.getElementById('blog-details');

    // Add a click event listener to the blog header
    blogHeader.addEventListener('click', function() {
        // Toggle the visibility of the details element
        blogDetails.classList.toggle('hidden');

        // Change the header text and arrow icon based on visibility
        const arrowIconBlog = blogHeader.querySelector('#arrow-icon-blog');
        if (blogDetails.classList.contains('hidden')) {
            blogHeader.querySelector('h3').textContent = 'Blogs - Click to Expand';
            arrowIconBlog.textContent = '\u25B6'; // Change to a right-pointing arrow
        } else {
            blogHeader.querySelector('h3').textContent = 'Blogs - Click to Collapse';
            arrowIconBlog.textContent = '\u25BC'; // Change to a down-pointing arrow
        }
    });
});
