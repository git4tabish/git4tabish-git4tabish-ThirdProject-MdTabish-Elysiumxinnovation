let pets = [];
// map ka ek global variable banaega let map se
let map;
// user ki location store karne ke liye
let userLocation = null;
// pets ke markers map pe dikhane ke liye array
let petMarkers = [];

// ==========================
// Sample Pet DataBase
// ==========================
// yaha sample data rakhege dog cat kaa (chhotu database )
const samplePets = [
  // har pet ke details id, name, breed, age, etc add krna
  {
    id: 1,
    name: "Buddy",
    breed: "Labrador",
    age: "2 years",
    size: "Large",
    location: "2 km away",
    description: "Friendly and energetic Labrador who loves playing fetch.",
    image:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=874&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-10-15",
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    coordinates: [51.505, -0.09], // London
  },
  {
    id: 3,
    name: "Max",
    breed: "German Shepherd",
    age: "3 years",
    size: "Large",
    location: "3 km away",
    description: "Loyal and protective dog, well-trained in obedience.",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-09-12",
    vaccinations: ["Rabies", "Distemper"],
    coordinates: [51.507, -0.1],
  },
  {
    id: 4,
    name: "Mittens",
    breed: "Siamese",
    age: "2 years",
    size: "Small",
    location: "7 km away",
    description: "Elegant Siamese cat, vocal and very affectionate.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-11-20",
    vaccinations: ["Rabies", "Feline Leukemia"],
    coordinates: [51.515, -0.07],
  },
  {
    id: 5,
    name: "Charlie",
    breed: "Golden Retriever",
    age: "4 years",
    size: "Large",
    location: "6 km away",
    description: "Gentle Golden Retriever, great with kids and families.",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=870&auto=format&fit=crop",
    status: "Adopted",
    lastCheckup: "2023-08-30",
    vaccinations: ["Rabies", "Parvovirus"],
    coordinates: [51.508, -0.11],
  },
  {
    id: 6,
    name: "Luna",
    breed: "Persian",
    age: "5 years",
    size: "Medium",
    location: "4 km away",
    description: "Calm Persian cat with a beautiful long coat.",
    image:
      "https://images.unsplash.com/photo-1606220838311-056192d5b3d5?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-12-01",
    vaccinations: ["Rabies"],
    coordinates: [51.502, -0.12],
  },
  {
    id: 7,
    name: "Rocky",
    breed: "Bulldog",
    age: "2 years",
    size: "Medium",
    location: "8 km away",
    description: "Playful bulldog who loves short walks and naps.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=870&auto=format&fit=crop",
    status: "Pending Adoption",
    lastCheckup: "2023-09-05",
    vaccinations: ["Rabies", "Distemper"],
    coordinates: [51.509, -0.13],
  },
  {
    id: 8,
    name: "Coco",
    breed: "Cockatiel",
    age: "1 year",
    size: "Small",
    location: "9 km away",
    description: "Cheerful cockatiel that whistles and mimics sounds.",
    image:
      "https://images.unsplash.com/photo-1599695559764-5a1b99a67c1b?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-10-10",
    vaccinations: [],
    coordinates: [51.511, -0.14],
  },
  {
    id: 9,
    name: "Shadow",
    breed: "Black Cat",
    age: "3 years",
    size: "Medium",
    location: "2 km away",
    description: "Quiet and mysterious cat, enjoys lounging in sunny spots.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-07-22",
    vaccinations: ["Rabies"],
    coordinates: [51.506, -0.15],
  },
  {
    id: 10,
    name: "Daisy",
    breed: "Beagle",
    age: "2 years",
    size: "Medium",
    location: "10 km away",
    description: "Adventurous Beagle who loves sniffing trails.",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=870&auto=format&fit=crop",
    status: "Adopted",
    lastCheckup: "2023-11-02",
    vaccinations: ["Rabies", "Distemper"],
    coordinates: [51.503, -0.16],
  },
  {
    id: 11,
    name: "Oliver",
    breed: "Rabbit",
    age: "6 months",
    size: "Small",
    location: "3 km away",
    description: "Cute white rabbit that enjoys carrots and hopping around.",
    image:
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-09-28",
    vaccinations: ["Myxomatosis"],
    coordinates: [51.507, -0.17],
  },
  {
    id: 12,
    name: "Simba",
    breed: "Maine Coon",
    age: "4 years",
    size: "Large",
    location: "6 km away",
    description: "Majestic Maine Coon cat with a fluffy mane.",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1af9a44?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-12-15",
    vaccinations: ["Rabies", "Feline Leukemia"],
    coordinates: [51.514, -0.18],
  },
  {
    id: 13,
    name: "Bella",
    breed: "Cocker Spaniel",
    age: "3 years",
    size: "Medium",
    location: "12 km away",
    description: "Affectionate dog with long ears, loves cuddles.",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop",
    status: "Pending Adoption",
    lastCheckup: "2023-08-12",
    vaccinations: ["Rabies", "Parvovirus"],
    coordinates: [51.516, -0.19],
  },
  {
    id: 14,
    name: "Nala",
    breed: "Ragdoll",
    age: "2 years",
    size: "Medium",
    location: "4 km away",
    description: "Gentle and relaxed Ragdoll cat, great lap cat.",
    image:
      "https://images.unsplash.com/photo-1606220838311-056192d5b3d5?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-11-25",
    vaccinations: ["Rabies"],
    coordinates: [51.518, -0.2],
  },
  {
    id: 15,
    name: "Jack",
    breed: "Parrot",
    age: "5 years",
    size: "Small",
    location: "7 km away",
    description: "Talkative parrot that loves mimicking voices.",
    image:
      "https://images.unsplash.com/photo-1599695559764-5a1b99a67c1b?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-10-05",
    vaccinations: [],
    coordinates: [51.519, -0.21],
  },
  {
    id: 16,
    name: "Lucy",
    breed: "Shih Tzu",
    age: "1 year",
    size: "Small",
    location: "3 km away",
    description: "Friendly Shih Tzu who loves attention.",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-09-15",
    vaccinations: ["Rabies", "Distemper"],
    coordinates: [51.504, -0.22],
  },
  {
    id: 17,
    name: "Smokey",
    breed: "Russian Blue",
    age: "3 years",
    size: "Medium",
    location: "11 km away",
    description: "Quiet Russian Blue cat with a soft silver coat.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=870&auto=format&fit=crop",
    status: "Pending Adoption",
    lastCheckup: "2023-07-05",
    vaccinations: ["Rabies"],
    coordinates: [51.52, -0.23],
  },
  {
    id: 18,
    name: "Bailey",
    breed: "Husky",
    age: "2 years",
    size: "Large",
    location: "14 km away",
    description: "Energetic Husky with striking blue eyes.",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-10-18",
    vaccinations: ["Rabies", "Parvovirus"],
    coordinates: [51.521, -0.24],
  },
  {
    id: 19,
    name: "Mango",
    breed: "Lovebird",
    age: "1 year",
    size: "Small",
    location: "5 km away",
    description: "Bright and colorful lovebird with a cheerful song.",
    image:
      "https://images.unsplash.com/photo-1599695559764-5a1b99a67c1b?q=80&w=870&auto=format&fit=crop",
    status: "Adopted",
    lastCheckup: "2023-08-09",
    vaccinations: [],
    coordinates: [51.522, -0.25],
  },
  {
    id: 20,
    name: "Ruby",
    breed: "Border Collie",
    age: "4 years",
    size: "Medium",
    location: "13 km away",
    description: "Smart Border Collie who enjoys agility training.",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=870&auto=format&fit=crop",
    status: "Available",
    lastCheckup: "2023-12-12",
    vaccinations: ["Rabies", "Distemper", "Parvovirus"],
    coordinates: [51.523, -0.26],
  },
  // ...baaki pets same hi format me rakh rha hu
];

// ==========================
// Initialize Application
// ==========================
// jaise hi page load hota hai, pura app init kar rha hu
document.addEventListener("DOMContentLoaded", function () {
  initMap(); // map setup ke liye
  pets = [...samplePets]; // sample pets ko main pets array me daalne
  renderPets(); // pets ko grid me show krne
  addPetMarkers(); // pets ke markers map pe jaayege
  setupEventListeners(); // saare event listeners pe kaam krega
});

// ==========================
// Initialize Leaflet Map
// ==========================
// leaflet library ka use karke map
function initMap() {
  const defaultCoords = [51.505, -0.09]; // default location London set

  map = L.map("map").setView(defaultCoords, 13);

  // map ke liye tiles load krne ke liye OpenStreetMap se
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // user ki location lene ke liye
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        userLocation = [position.coords.latitude, position.coords.longitude];
        map.setView(userLocation, 13);

        // user ke liye marker
        L.marker(userLocation)
          .addTo(map)
          .bindPopup("Your Location")
          .openPopup();
      },
      function (error) {
        console.log("Geolocation error:", error);
        // agar location nahi mili toh default marker dikhaga uske liye
        L.marker(defaultCoords)
          .addTo(map)
          .bindPopup("Default Location")
          .openPopup();
      }
    );
  }
}

// ==========================
// Add Pet Markers on Map
// ==========================
// pets ke liye markers map pe add
function addPetMarkers() {
  // purane markers delete ke liye
  petMarkers.forEach((marker) => map.removeLayer(marker));
  petMarkers = [];

  // naye pets ke marker
  pets.forEach((pet) => {
    const icon = L.divIcon({
      className: `pet-marker ${pet.status.toLowerCase().replace(" ", "-")}`,
      html: `<div>${pet.status === "Available" ? "🐕" : "🐈"}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });

    const marker = L.marker(pet.coordinates, {icon: icon}).addTo(map)
      .bindPopup(`
                <div class="map-popup">
                    <img src="${pet.image}" alt="${pet.name}" style="width: 100px; height: 70px; object-fit: cover; border-radius: 4px;">
                    <h3>${pet.name}</h3>
                    <p>${pet.breed} • ${pet.age}</p>
                    <p><strong>Status:</strong> ${pet.status}</p>
                    <button onclick="viewPetDetails(${pet.id})" class="view-btn">View Details</button>
                </div>
            `);

    petMarkers.push(marker); // marker ko list me add
  });
}

// ==========================
// Setup UI Event Listeners
// ==========================
// sab buttons aur UI ke events handle krne ke liye
function setupEventListeners() {
  // sidebar toggle ke liye
  document.getElementById("menuBtn").addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");

    // overlay dikhane ke liye
    if (sidebar.classList.contains("active")) {
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        document.body.removeChild(overlay);
      });
      document.body.appendChild(overlay);
      overlay.style.display = "block";
    } else {
      const overlay = document.querySelector(".overlay");
      if (overlay) document.body.removeChild(overlay);
    }
  });

  // logout button pe click hone pe action honga
  document.getElementById("logoutBtn").addEventListener("click", function () {
    if (confirm("Are you sure you want to logout?")) {
      showNotification("Logging out...", "info");
      setTimeout(() => {
        window.location.href = "login.html"; // login page pe bhejne ke liye
      }, 1500);
    }
  });

  // filter button pe pets filter honge yha se
  document.getElementById("filterBtn").addEventListener("click", applyFilters);

  // reset filters button ka event
  document
    .getElementById("resetFilters")
    .addEventListener("click", resetFilters);

  // dropdown change hote hi filters apply hona chaiye
  document.querySelectorAll(".filters select").forEach((select) => {
    select.addEventListener("change", function () {
      if (this.value !== this.options[0].value) {
        applyFilters();
      }
    });
  });

  // map ke buttons handle krne ke liye
  document.getElementById("locateBtn").addEventListener("click", locateUser);
  document
    .getElementById("zoomInBtn")
    .addEventListener("click", () => map.zoomIn());
  document
    .getElementById("zoomOutBtn")
    .addEventListener("click", () => map.zoomOut());

  // modal close karne ka event
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("petModal").style.display = "none";
  });

  // modal ke bahar click karne pe close
  window.addEventListener("click", function (event) {
    const modal = document.getElementById("petModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ==========================
// Render Pets in Grid
// ==========================
// pets ko grid me card ke form me show krne ke liye
function renderPets(petsToRender = pets) {
  const petsGrid = document.getElementById("petsGrid");
  petsGrid.innerHTML = "";

  // agar koi pet nahi mila toh empty message dikhaye denaga
  if (petsToRender.length === 0) {
    petsGrid.innerHTML = `
            <div class="empty-state">
                <h3>No pets match your filters</h3>
                <p>Try adjusting your search criteria</p>
            </div>
        `;
    return;
  }

  // har pet ke liye ek card bana banega
  petsToRender.forEach((pet) => {
    const petCard = document.createElement("div");
    petCard.className = "pet-card";
    petCard.dataset.id = pet.id;

    // pet ke status ke hisaab se class set
    let statusClass = "";
    if (pet.status === "Available") statusClass = "status-available";
    else if (pet.status === "Pending Adoption") statusClass = "status-pending";
    else if (pet.status === "Adopted") statusClass = "status-adopted";

    // pet card ke andar ka content fill kr rha hu
    petCard.innerHTML = `
            <div class="pet-image">
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-status ${statusClass}">${pet.status}</div>
            </div>
            <div class="pet-info">
                <h3>${pet.name}</h3>
                <div class="pet-details">
                    <span>${pet.breed}</span>
                    <span>${pet.age}</span>
                    <span>${pet.size}</span>
                </div>
                <p class="pet-description">${pet.description}</p>
                <p><strong>Location:</strong> ${pet.location}</p>
                <div class="pet-actions">
                    <button class="view-btn" data-id="${pet.id}">View Details</button>
                    <button class="edit-btn" data-id="${pet.id}">Edit</button>
                    <button class="delete-btn" data-id="${pet.id}">Delete</button>
                </div>
            </div>
        `;
    petsGrid.appendChild(petCard);
  });

  // cards ke andar ke buttons ke liye event listeners add
  attachPetEventListeners();
}

// ==========================
// Attach Events to Each Pet Card
// ==========================
// pet card ke buttons (view, edit, delete) pe events add
function attachPetEventListeners() {
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => viewPetDetails(btn.dataset.id));
  });
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", () => editPet(btn.dataset.id));
  });
  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => deletePet(btn.dataset.id));
  });
}

// ==========================
// Show Pet Details (Modal + Map)
// ==========================
// jab user kisi pet pe click karta hai toh uska detail modal me dikhe
function viewPetDetails(petId) {
  const pet = pets.find((p) => p.id == petId);
  if (!pet) return;

  // pet ke status ke hisaab se class decide krna
  let statusClass = "";
  if (pet.status === "Available") statusClass = "status-available";
  else if (pet.status === "Pending Adoption") statusClass = "status-pending";
  else if (pet.status === "Adopted") statusClass = "status-adopted";

  // modal ke andar pet ke details fill
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
        <h2>${pet.name}'s Details</h2>
        <div class="pet-detail-container">
            <div class="pet-detail-image">
                <img src="${pet.image}" alt="${pet.name}">
                <div class="pet-status ${statusClass}">${pet.status}</div>
            </div>
            <div class="pet-detail-info">
                <p><strong>Breed:</strong> ${pet.breed}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <p><strong>Size:</strong> ${pet.size}</p>
                <p><strong>Location:</strong> ${pet.location}</p>
                <p><strong>Last Checkup:</strong> ${pet.lastCheckup}</p>
                <p><strong>Vaccinations:</strong> ${pet.vaccinations.join(
                  ", "
                )}</p>
            </div>
        </div>
        <div class="pet-detail-description">
            <h3>About ${pet.name}</h3>
            <p>${pet.description}</p>
        </div>
        <div class="modal-actions">
            <button class="edit-btn" onclick="editPet(${pet.id})">Edit</button>
            <button class="close-btn" onclick="document.getElementById('petModal').style.display='none'">Close</button>
        </div>
    `;

  // modal dikhane ke liye
  document.getElementById("petModal").style.display = "block";

  // map ko pet ki location pe center krne ke liye
  map.setView(pet.coordinates, 15);
}

// ==========================
// Edit Pet (Placeholder)
// ==========================
// pet edit karne ke liye abhi placeholder
function editPet(petId) {
  const pet = pets.find((p) => p.id == petId);
  if (!pet) return;

  showNotification(
    `Edit functionality for ${pet.name} would open here`,
    "info"
  );
  // TODO: edit form baad me banana hai
}

// ==========================
// Delete Pet
// ==========================
// pet ko delete karne ke liye
function deletePet(petId) {
  const pet = pets.find((p) => p.id == petId);
  if (!pet) return;

  if (
    confirm(
      `Are you sure you want to delete ${pet.name}? This action cannot be undone.`
    )
  ) {
    pets = pets.filter((p) => p.id != petId);
    renderPets(); // pets dubara render karne ke liye
    addPetMarkers(); // map markers refresh krne ke liye
    showNotification(`${pet.name} has been deleted`, "success");
  }
}

// ==========================
// Apply Filters
// ==========================
// filters apply karne ke liye
function applyFilters() {
  const breedFilter = document.getElementById("breedFilter").value;
  const ageFilter = document.getElementById("ageFilter").value;
  const sizeFilter = document.getElementById("sizeFilter").value;
  const locationFilter = document.getElementById("locationFilter").value;

  let filteredPets = [...samplePets];

  // breed ke hisaab se filter
  if (breedFilter !== "Breed") {
    filteredPets = filteredPets.filter((pet) => pet.breed === breedFilter);
  }

  // age ke hisaab se filter honga
  if (ageFilter !== "Age") {
    if (ageFilter === "Puppy/Kitten") {
      filteredPets = filteredPets.filter(
        (pet) => pet.age.includes("month") || parseInt(pet.age) < 1
      );
    } else if (ageFilter === "Adult") {
      filteredPets = filteredPets.filter(
        (pet) => !pet.age.includes("month") && parseInt(pet.age) >= 1
      );
    }
  }

  // size ke hisaab se filter honga
  if (sizeFilter !== "Size") {
    filteredPets = filteredPets.filter((pet) => pet.size === sizeFilter);
  }

  // location ke hisaab se filte krene ke liye
  if (locationFilter !== "Location Distance") {
    const maxDistance = parseInt(locationFilter);
    filteredPets = filteredPets.filter((pet) => {
      const distance = parseInt(pet.location);
      return distance <= maxDistance;
    });
  }

  pets = filteredPets;
  renderPets();
  addPetMarkers(); // map refresh honge yha se
  showNotification(
    `Found ${filteredPets.length} pets matching your filters`,
    "success"
  );
}

// ==========================
// Reset Filters
// ==========================
// filters reset karne ke liye
function resetFilters() {
  document.getElementById("breedFilter").value = "Breed";
  document.getElementById("ageFilter").value = "Age";
  document.getElementById("sizeFilter").value = "Size";
  document.getElementById("locationFilter").value = "Location Distance";

  pets = [...samplePets]; // fir se full list dikhane ke liye
  renderPets();
  addPetMarkers();
  showNotification("Filters have been reset", "info");
}

// ==========================
// Locate User on Map
// ==========================
// user ki location dhoondhnege yha se
function locateUser() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        userLocation = [position.coords.latitude, position.coords.longitude];
        map.setView(userLocation, 13);

        // user ke maarker ke liye
        L.marker(userLocation)
          .addTo(map)
          .bindPopup("Your Location")
          .openPopup();

        showNotification("Location found!", "success");
      },
      function (error) {
        console.log("Geolocation error:", error);
        showNotification("Could not get your location", "error");
      }
    );
  } else {
    showNotification("Geolocation is not supported by your browser", "error");
  }
}

// ==========================
// Notifications System
// ==========================
// notifications dikhane ke liye
function showNotification(message, type = "info") {
  // agar pehle se koi notification hai toh oo hat jaayge
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    document.body.removeChild(existingNotification);
  }

  // new notification ban rhi h
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  // notification ko animate karke show krna
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // 3 sec ke baad notification automatically hide honga
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
