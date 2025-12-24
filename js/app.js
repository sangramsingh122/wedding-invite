
// Bride & Groom
const brideName = "Roopal";
const groomName = "Sangram";

// Wedding Date (YYYY, MM - 1, DD, HH, MM)
const weddingDate = new Date(2026, 1, 10, 10, 30);

// Events
const events = [
    {
        title: "Shagun ceremony",
        date: "8 Feb 2026",
        time: "10:00 AM",
        venue: "Sangram's Residence",
        map: "https://www.google.com/maps/search/?api=1&query=RVX3%2BQ2Q+Behdarya%2C+Punjab"
    },
    {
        title: "DJ Night",
        date: "8 Feb 2026",
        time: "7:00 PM",
        venue: "Sangram's Residence",
        map: "https://www.google.com/maps/search/?api=1&query=RVX3%2BQ2Q+Behdarya%2C+Punjab"
    },
    {
        title: "Bhram Bhoj",
        date: "9 Feb 2026",
        time: "11:00 AM",
        venue: "Sangram's Residence",
        map: "https://www.google.com/maps/search/?api=1&query=RVX3%2BQ2Q+Behdarya%2C+Punjab"
    },
    {
        title: "Saand",
        date: "9 Feb 2026",
        time: "6:00 PM",
        venue: "Sangram's Residence",
        map: "https://www.google.com/maps/search/?api=1&query=RVX3%2BQ2Q+Behdarya%2C+Punjab"
    },
    {
        title: "Sehra Bandi",
        date: "10 Feb 2026",
        time: "8:00 AM",
        venue: "Sangram's Residence",
        map: "https://www.google.com/maps/search/?api=1&query=RVX3%2BQ2Q+Behdarya%2C+Punjab"
    },
    {
        title: "Departure of barat",
        date: "10 Feb 2026",
        time: "9:00 AM",
        venue: "Grand Resort",
        map: "https://www.google.com/maps/search/?api=1&query=RJ3F%2BCW7%2C+Dasuya%2C+Punjab+144205"
    },
];

// Background Music
const musicFile = "assets/audio/wedding-music.mp3";


// Insert names
document.querySelectorAll(".bride-name").forEach(e => e.textContent = brideName);
document.querySelectorAll(".groom-name").forEach(e => e.textContent = groomName);

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "🎉 Today is the Wedding Day!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Event Cards
const eventContainer = document.getElementById("event-list");
if (eventContainer) {
    // Get unique dates to preserve order
    const uniqueDates = [...new Set(events.map(e => e.date))];

    uniqueDates.forEach(date => {
        // Create Date Wrapper
        const dateWrapper = document.createElement("div");
        dateWrapper.className = "date-section";

        // Date Header
        const dateHeader = document.createElement("h3");
        dateHeader.className = "event-date-title";
        dateHeader.textContent = date;
        dateWrapper.appendChild(dateHeader);

        // Grid for cards of this date
        const cardsGrid = document.createElement("div");
        cardsGrid.className = "event-grid";

        // Filter and render events for this date
        events.filter(e => e.date === date).forEach(event => {
            const div = document.createElement("div");
            div.className = "event-card";
            div.innerHTML = `
                <h3>${event.title}</h3>
                <div class="event-detail">
                    <span class="event-label">Time:</span> 
                    <span class="event-value">${event.time}</span>
                </div>
                <div class="event-detail">
                    <span class="event-label">Venue:</span> 
                    <span class="event-value">${event.venue}</span>
                </div>
                <a href="${event.map}" target="_blank" class="location-btn">📍 View Location</a>
            `;
            cardsGrid.appendChild(div);
        });

        dateWrapper.appendChild(cardsGrid);
        eventContainer.appendChild(dateWrapper);
    });
}

// Background Music Control
const music = new Audio(musicFile);
music.loop = true;

const musicBtn = document.getElementById("music-btn");
if (musicBtn) {
    musicBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent bubbling
        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸";
        } else {
            music.pause();
            musicBtn.textContent = "▶";
        }
    });
}

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Gallery Modal
const modal = document.getElementById("gallery-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("modal-close");

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

if (closeModal) {
    closeModal.onclick = () => modal.style.display = "none";
}

// Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".animate").forEach(el => observer.observe(el));


