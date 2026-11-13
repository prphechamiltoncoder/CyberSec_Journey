
/* =================================
   CYBERSEC_JOURNEY
   Dashboard Functionality
================================= */

// 1. PORTFOLIO DATA

const portfolio = {
    rooms: [],
    labs: [],
    skills: [],
    certifications: [],
    learningGoal: 20
};

// 2. ADD TRYHACKME ROOMS

function addRoom(name, category, date) {
    portfolio.rooms.push({
        name: name,
        category: category,
        date: date,
        completed: true
    });

    updateDashboard();
}

// 3. ADD HANDS-ON LABS

function addLab(name, description) {
    portfolio.labs.push({
        name: name,
        description: description
    });

    updateDashboard();
}

// 4. ADD SKILLS

function addSkill(skill) {
    portfolio.skills.push(skill);
    updateDashboard();
}

// 5. ADD CERTIFICATIONS

function addCertification(certification) {
    portfolio.certifications.push(certification);
    updateDashboard();
}

// 6. UPDATE DASHBOARD STATISTICS

function updateDashboard() {

    document.getElementById("rooms").textContent =
        portfolio.rooms.length;

    document.getElementById("labCount").textContent =
        portfolio.labs.length;

    document.getElementById("skillCount").textContent =
        portfolio.skills.length;

    document.getElementById("certCount").textContent =
        portfolio.certifications.length;

    // Calculate progress

    const progress =
        Math.min(
            (portfolio.rooms.length /
            portfolio.learningGoal) * 100,
            100
        );

    document.getElementById("progress").style.width =
        progress + "%";

    document.getElementById("progressText").textContent =
        Math.round(progress) +
        "% of my learning goal completed";

    // Display rooms

    const roomList = document.getElementById("roomList");

    roomList.innerHTML = "";

    portfolio.rooms.forEach(room => {

        const item = document.createElement("div");

        item.className = "activity-item";

        item.innerHTML = `
            <h3>${room.name}</h3>
            <p>${room.category} | Completed: ${room.date}</p>
        `;

        roomList.appendChild(item);

    });

    // Display labs

    const labList = document.getElementById("labList");

    labList.innerHTML = "";

    portfolio.labs.forEach(lab => {

        const item = document.createElement("div");

        item.className = "activity-item";

        item.innerHTML = `
            <h3>${lab.name}</h3>
            <p>${lab.description}</p>
        `;

        labList.appendChild(item);

    });
}

// 7. INITIALIZE DASHBOARD

updateDashboard();

