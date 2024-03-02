// Define linktree data
let linktreeData = [];

// Function to build the linktree
function buildLinktree() {
    let links = document.getElementById("links");
    links.innerHTML = ''; // Clear previous links

    // Loop through the linktree data and create list items with links
    linktreeData.forEach(function(item) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = item.platform;
        a.href = item.link;
        a.target = "_blank"; // Open link in a new tab
        li.appendChild(a);
        links.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Get input values
    let platform = document.getElementById("socialPlatform").value.trim();
    let link = document.getElementById("socialLink").value.trim();

    // Add link to linktree data if both platform and link are provided
    if (platform && link) {
        linktreeData.push({ platform: platform, link: link });
        buildLinktree(); // Rebuild the linktree
        // Clear form fields
        document.getElementById("socialPlatform").value = '';
        document.getElementById("socialLink").value = '';
        // Hide the form after submission
        toggleFormVisibility();
    }
}

// Function to toggle form visibility
function toggleFormVisibility() {
    let form = document.getElementById("addLinkForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}

// Add event listener to form submit event
document.getElementById("addLinkForm").addEventListener("submit", handleFormSubmit);

// Add event listener to the "Add Link" button to toggle form visibility
document.getElementById("addLinkButton").addEventListener("click", toggleFormVisibility);

// Build linktree initially
buildLinktree();