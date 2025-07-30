const unitOptions = {
"GW 2025-26": ["Tripping Point", "Sweeping Engagement", "Hammer & Anvil"],
"WTC 2025": ["Drone", "Medic", "Engineer"]
};

function updateUnits() {
const army = document.getElementById("army").value;
const unitSelect = document.getElementById("unit");
unitSelect.innerHTML = '<option value="">-- Select Unit --</option>';

if (unitOptions[army]) {
    unitOptions[army].forEach(unit => {
    const option = document.createElement("option");
    option.value = unit;
    option.text = unit;
    unitSelect.appendChild(option);
    });
}
}

// Called when unit is selected
function updateImage() {
const army = document.getElementById("army").value;
const unit = document.getElementById("unit").value;
if (army && unit) {
    const imagePath = `images/${army}_${unit}.png`;
    localStorage.setItem("overlayImagePath", imagePath);
}
}

// Only overlay.html runs this
if (document.getElementById("image")) {
setInterval(() => {
    const path = localStorage.getItem("overlayImagePath");
    const img = document.getElementById("image");
    if (img.src !== path) {
    img.src = path;
    }
  }, 500); // Check every 500ms
}