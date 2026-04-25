

// majority chances hai ki humlog bhul jaenge isliye yeah sikh lo 

// how to get the OS display mode dark or light in js , without code 
// window.matchMedia('(prefers-color-scheme: dark)')
 
function thhheme(){

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.remove("light");
    document.body.classList.add("dark");
   
} else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
}
}

thhheme();



window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(){
    thhheme();
});


document.getElementById("toggletheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  const isDark = document.body.classList.contains("dark")
   showToast(isDark);

});



// Toast notification function
function showToast(isDark) {
  let existing = document.getElementById("toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "toast";
  toast.innerHTML = `
    <span class="toast-icon">${isDark ? "🌙" : "☀️"}</span>
    <span>Switched to <strong>${isDark ? "Dark" : "Light"} Mode</strong></span>
  `;

  Object.assign(toast.style, {
    position: "fixed",
    top: "30px",
    right: "-300px",          
    background: isDark ? "#1e1e1e" : "#ffffff",
    color: isDark ? "#f5f5f5" : "#1a1a1a",
    border: `1px solid ${isDark ? "#444" : "#ddd"}`,
    padding: "12px 20px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "15px",
    fontFamily: "Helvetica, sans-serif",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    zIndex: "9999",
    transition: "right 0.4s ease",
  });

  document.body.appendChild(toast);

  // Slide IN
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.right = "30px";
    });
  });

  // Slide OUT after 2.5s
  setTimeout(() => {
    toast.style.right = "-300px";
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// Button toggle
// document.getElementById("toggletheme").addEventListener("click", function () {
//   document.body.classList.toggle("dark");
//   document.body.classList.toggle("light");

//   const isDark = document.body.classList.contains("dark");
//   showToast(isDark);
// });
