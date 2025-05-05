class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="navbar">
                <div class="nav-item">
                    <a href="../adventure_map/adventuremap.html">
                        <img src="../img/navbar/Map1.png" alt="Home" class="nav-icon">
                    </a>
                </div>
                <div class="nav-item">
                    <a href="../friends/friends.html">
                        <img src="../img/navbar/Friends.png" alt="Friends" class="nav-icon">
                    </a>
                </div>
                <div class="nav-item">
                    <a href="../habits/habits.html">
                        <img src="../img/navbar/Add.png" alt="Habits" class="nav-icon">
                    </a>
                </div>
                <div class="nav-item">
                    <a href="../insights/insights.html">
                        <img src="../img/navbar/Insights.png" alt="Insights" class="nav-icon">
                    </a>
                </div>
                <div class="nav-item">
                    <a href="../profile/profile.html">
                        <img src="../img/navbar/Profile.png" alt="Profile" class="nav-icon">
                    </a>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-navbar', Navbar);