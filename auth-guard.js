document.addEventListener("DOMContentLoaded", () => {
    const userId = sessionStorage.getItem("userId");
    const userRole = sessionStorage.getItem("userRole");

    const currentPage = window.location.pathname;
    const expectedRole = currentPage.match(/\/([a-z]+)-dashboard\.html/i)?.[1];

    const basePath = "/vote"; // ✅ repo name for GitHub Pages

    if (!userId || !userRole || userRole !== expectedRole) {
        alert("Access Denied. Please log in first.");

        if (expectedRole === "admin") {
            window.location.href = `${basePath}/admin.html`; // ✅ admin redirect
        } else {
            window.location.href = `${basePath}/index.html`; // ✅ all others
        }
    } else {
        // Optional: prevent flash of dashboard content on unauthorized access
        const content = document.getElementById("dashboardContent");
        if (content) content.style.display = "block";
    }
});
