document.addEventListener("DOMContentLoaded", () => {
    const userId = sessionStorage.getItem("userId");
    const userRole = sessionStorage.getItem("userRole");

    const currentPage = window.location.pathname;
    const expectedRole = currentPage.match(/\/([a-z]+)-dashboard\.html/i)?.[1];

    const dashboard = document.getElementById("dashboardContent");

    if (!userId || !userRole || userRole !== expectedRole) {
        alert("Access Denied. Please log in first.");

        // Redirect based on role
        if (expectedRole === "admin") {
            window.location.href = "vote/admin.html";
        } else {
            window.location.href = "/index.html";
        }
    } else {
        // ✅ Authorized → Show dashboard content
        if (dashboard) {
            dashboard.style.display = "block";
        }
        document.body.classList.remove("logged-out");
    }
});

