const unitOptions = {
            1: ["Tipping Point", "Sweeping Engagement","Hammer & Anvil", "Dawn of War", "Crucible of Battle"],
            2: ["Drone", "Medic", "Engineer"],
            3: ["Archer", "Knight", "Mage"]
        };
const layoutOptions = {
            1: ["Layout 1", "Layout 2", "Layout 4", "Layout 6", "Layout 7", "Layout 8"],
            2: ["Layout 3", "Layout 5"],
            3: ["Layout 1", "Layout 7", "Layout 8"],
            4: ["Layout 5"],
            5: ["Layout 1", "Layout 2", "Layout 4", "Layout 6", "Layout 8"]
        };

        function updateUnits() {
            const armySelect = document.getElementById("mySelect");
            const unitSelect = document.getElementById("deploymentSelect");
            const selectedArmy = armySelect.value;

      // Clear existing options
        unitSelect.innerHTML = '<option value="">-- Select Unit --</option>';

        if (unitOptions[selectedArmy]) {
            unitOptions[selectedArmy].forEach(unit => {
            const option = document.createElement("option");
            option.value = unit.toLowerCase();
            option.text = unit;
            unitSelect.appendChild(option);
            });
        }
    }

    // Called when layout is selected
function updateLayout() {
const deploymentSelect = document.getElementById("deploymentSelect");
const layoutSelect = document.getElementById("layoutSelect");
const selectedDeployment = deploymentSelect.value;

      // Clear existing options
        layoutSelect.innerHTML = '<option value="">-- Select Layout --</option>';

        if (layoutOptions[selectedDeployment]) {
            layoutOptions[selectedDeployment].forEach(unit => {
            const option = document.createElement("option");
            option.value = unit.toLowerCase();
            option.text = unit;
            layoutSelect.appendChild(option);
            });
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

