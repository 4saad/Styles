document.addEventListener("DOMContentLoaded", function () {
    // Find the container div
    let menuContainer = document.querySelector(".Table");
    if (!menuContainer)
    { alert("no table");
        return;} // Exit if not found

    // Find the table inside .Menu.ItemView
    let table = menuContainer.querySelector("table"); 
    if (!table) return; // Exit if no table found

    // Create the sidebar div
    let sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    sidebar.classList.add("sidebar");

    // Move the first column into the sidebar
    let rows = table.querySelectorAll("tr");
    rows.forEach(row => {
        let firstCell = row.querySelector("td:first-child, th:first-child");
        if (firstCell) {
            sidebar.appendChild(firstCell); // Move cell into sidebar
        }
    });

    // Insert sidebar before the table
    menuContainer.insertBefore(sidebar, table);

    // Add a class to the table for styling adjustments
    table.classList.add("with-sidebar");
});
