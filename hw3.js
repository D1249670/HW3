document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("SHBtn");

    togglePasswordBtn.addEventListener("click", () => {
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);
        togglePasswordBtn.textContent = type === "password" ? "顯示密碼" : "隱藏密碼";
    });
});