let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("fa-angles-right", "fa-angles-left");
  } else sidebarBtn.classList.replace("fa-angles-left", "fa-angles-right");
};
