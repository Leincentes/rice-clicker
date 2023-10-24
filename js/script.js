const riceContainer = document.querySelector('.rice-container');
const maxRiceGrains = 50; // Maximum number of rice grains before restart
let riceCount = 100; // Initial rice count
let pointsCount = 0; // Initial points count
let subtructHolder = 1; // Initial subtructer
let farmerPointsMultiplierHolder = 0;
let truckunPointsMultiplierHolder = 0;
let marcosPointsMultiplierHolder = 0;
let farmerPointsMultiplier = 2;
let truckunPointsMultiplier = 3;
let marcosPointsMultiplier = 4;
let currentPower = 1;

function update() {
    document.getElementById('riceCounter').textContent = `Set Rice: ${riceCount}`;
    document.getElementById('pointsCount').textContent = `Points: ${pointsCount}`;
    document.getElementById('currentPower').textContent = `Current Power: ${currentPower}`;
}

function handleUpdate(item, cost, multiplier, holder) {
    // update power
    if (pointsCount >= cost) {
        subtructHolder = multiplier * subtructHolder;
        pointsCount = pointsCount - cost;
        holder = holder += multiplier;
        if (document.getElementById('farmerPower')) {
            farmerPointsMultiplierHolder = holder;
        }
        if (document.getElementById('truckunPower')) {
            truckunPointsMultiplierHolder = holder;
        }
        if (document.getElementById('marcosPower')) {
            marcosPointsMultiplierHolder = holder;
        }
    }
    currentPower = holder;
}

// Click event and multiplier for farmer
document.getElementById('farmerImage').addEventListener('click', function () {
    handleUpdate('farmerPower', 10, farmerPointsMultiplier, farmerPointsMultiplierHolder);
    document.getElementById('farmerPower').textContent = `Farmer: ${farmerPointsMultiplierHolder}`;
});

// Click event and multiplier for truckun
document.getElementById('trucktorImage').addEventListener('click', function () {
    handleUpdate('truckunPower', 20, truckunPointsMultiplier, truckunPointsMultiplierHolder);
    document.getElementById('truckunPower').textContent = `Truckun: ${truckunPointsMultiplierHolder}`;
});

// Click event and multiplier for bong-bong
document.getElementById('marcosImage').addEventListener('click', function () {
    handleUpdate('marcosPower', 30, marcosPointsMultiplier, marcosPointsMultiplierHolder);
    document.getElementById('marcosPower').textContent = `Bong-Bong: ${marcosPointsMultiplierHolder}`;
});

// Click event for the rice image
document.getElementById('riceImage').addEventListener('click', function () {
    if (riceCount > 0) {
        riceCount -= subtructHolder;
        pointsCount++;
    }
});

function createRice() {
    const currentRiceGrains = document.querySelectorAll('.rice').length;

    if (currentRiceGrains >= maxRiceGrains) {
        // If the maximum limit is reached, clear all rice grains
        clearRice();
    }

    const numberOfRiceGrains = maxRiceGrains - currentRiceGrains; // Create only up to the limit
    for (let i = 0; i < numberOfRiceGrains; i++) {
        const riceGrain = document.createElement('div');
        riceGrain.className = 'rice';

        // Set a random horizontal position within the window width
        riceGrain.style.left = Math.random() * window.innerWidth + 'px';

        // Set a random vertical starting position within the window height
        riceGrain.style.top = Math.random() * window.innerHeight + 'px';

        // Randomize the animation duration for a natural effect
        const animationDuration = 2 + Math.random() * 2 + 's'; // Random duration between 2s and 4s
        riceGrain.style.animationDuration = animationDuration;

        riceGrain.addEventListener('animationiteration', () => {
            riceContainer.removeChild(riceGrain);
        });

        riceContainer.appendChild(riceGrain);
    }
}

function clearRice() {
    const riceGrains = document.querySelectorAll('.rice');
    riceGrains.forEach((riceGrain) => {
        riceContainer.removeChild(riceGrain);
    });
}

setInterval(createRice, 2000);
setInterval(update, 10);