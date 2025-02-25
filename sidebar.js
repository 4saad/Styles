document.addEventListener("DOMContentLoaded", function() {
    var sidebar = document.getElementById("NewSidebarthree");
    var toggleButton = document.createElement("button");

    toggleButton.innerText = "☰";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.left = "10px";
    toggleButton.style.zIndex = "1001";
    
    document.body.appendChild(toggleButton);
    
    toggleButton.addEventListener("click", function() {
        sidebar.classList.toggle("open");
    });
});
