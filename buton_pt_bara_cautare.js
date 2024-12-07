document.addEventListener("DOMContentLoaded", function() {
    const openButton = document.getElementById("openButton");
    const closeButton = document.querySelector("#mySidebar .closebtn");
    const sidebar = document.getElementById("mySidebar");
    const mainContent = document.getElementById("main");
  
    openButton.addEventListener("click", function() {
      sidebar.style.width = "250px";
      mainContent.style.marginLeft = "250px";
      openButton.classList.add("hide-btn");
    });
  
    closeButton.addEventListener("click", function() {
      sidebar.style.width = "0";
      mainContent.style.marginLeft = "0";
      openButton.classList.remove("hide-btn");
    });
  });