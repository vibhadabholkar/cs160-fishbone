class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="navbar">
                <div class="nav-item">
                    <img src="../img/navbar/Home.png" alt="Home" class="nav-icon">
                </div>
                <div class="nav-item">
                    <img src="../img/navbar/Friends.png" alt="Friends" class="nav-icon">
                </div>
                <div class="nav-item">
                    <img src="../img/navbar/Insights.png" alt="Insights" class="nav-icon">
                </div>
                <div class="nav-item">
                    <img src="../img/navbar/Profile.png" alt="Profile" class="nav-icon">
                </div>
            </div>
        `;
    }
}
customElements.define('custom-navbar', Navbar);