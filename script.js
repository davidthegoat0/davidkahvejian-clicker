// Initial game state variables
let cookieCount = 0;
let cookiesPerClick = 1;
let clickUpgradeLevel = 0;
let farmCount = 0;
let mineCount = 0;
let factoryCount = 0;
let templeCount = 0;
let portalCount = 0;
let cookiesPerSecond = 0;
let prestigeLevel = 0;
let prestigeMultiplier = 1;
let achievementMessage = "";

// Farm, Mine, Factory, Temple, Portal Efficiency Multipliers
let farmEfficiency = 1;
let mineEfficiency = 1;
let factoryEfficiency = 1;
let templeEfficiency = 1;
let portalEfficiency = 1;

// DOM Elements
const cookieCountElement = document.getElementById("cookieCount");
const prestigeButton = document.getElementById("prestigeButton");
const prestigeCostElement = document.getElementById("prestigeCost");
const prestigeMultiplierElement = document.getElementById("prestigeMultiplier");
const prestigeProgressBar = document.getElementById("prestigeProgressBar");
const achievementMessageElement = document.getElementById("achievementMessage");

// Increase cookies per click
function increaseCookies() {
    cookieCount += cookiesPerClick * prestigeMultiplier;
    updateCookieCount();
    checkAchievements();
}

// Update the displayed cookie count
function updateCookieCount() {
    cookieCountElement.textContent = cookieCount;
}

// Buy Click Upgrade
function buyClickUpgrade() {
    const upgradeCost = 50 + clickUpgradeLevel * 25;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        clickUpgradeLevel++;
        cookiesPerClick = 1 + clickUpgradeLevel;
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Farm
function buyFarm() {
    const farmCost = 100 + farmCount * 50;
    if (cookieCount >= farmCost) {
        cookieCount -= farmCost;
        farmCount++;
        cookiesPerSecond += 1 * farmEfficiency; // Farm increases CPS
        updateFarmCost();
        checkAchievements();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Farm Efficiency Upgrade
function buyFarmEfficiencyUpgrade() {
    const upgradeCost = 500;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        farmEfficiency *= 1.5; // Farm efficiency increases by 50%
        updateFarmEfficiency();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Mine
function buyMine() {
    const mineCost = 500 + mineCount * 100;
    if (cookieCount >= mineCost) {
        cookieCount -= mineCost;
        mineCount++;
        cookiesPerSecond += 5 * mineEfficiency; // Mine increases CPS
        updateMineCost();
        checkAchievements();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Mine Efficiency Upgrade
function buyMineEfficiencyUpgrade() {
    const upgradeCost = 2000;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        mineEfficiency *= 1.5; // Mine efficiency increases by 50%
        updateMineEfficiency();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Factory
function buyFactory() {
    const factoryCost = 2000 + factoryCount * 500;
    if (cookieCount >= factoryCost) {
        cookieCount -= factoryCost;
        factoryCount++;
        cookiesPerSecond += 20 * factoryEfficiency; // Factory increases CPS
        updateFactoryCost();
        checkAchievements();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Factory Efficiency Upgrade
function buyFactoryEfficiencyUpgrade() {
    const upgradeCost = 5000;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        factoryEfficiency *= 1.5; // Factory efficiency increases by 50%
        updateFactoryEfficiency();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Temple
function buyTemple() {
    const templeCost = 10000 + templeCount * 2500;
    if (cookieCount >= templeCost) {
        cookieCount -= templeCost;
        templeCount++;
        cookiesPerSecond += 50 * templeEfficiency; // Temple increases CPS
        updateTempleCost();
        checkAchievements();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Temple Efficiency Upgrade
function buyTempleEfficiencyUpgrade() {
    const upgradeCost = 30000;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        templeEfficiency *= 1.5; // Temple efficiency increases by 50%
        updateTempleEfficiency();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Portal
function buyPortal() {
    const portalCost = 50000 + portalCount * 10000;
    if (cookieCount >= portalCost) {
        cookieCount -= portalCost;
        portalCount++;
        cookiesPerSecond += 100 * portalEfficiency; // Portal increases CPS
        updatePortalCost();
        checkAchievements();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Buy Portal Efficiency Upgrade
function buyPortalEfficiencyUpgrade() {
    const upgradeCost = 100000;
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        portalEfficiency *= 1.5; // Portal efficiency increases by 50%
        updatePortalEfficiency();
        updateCookieCount();
    } else {
        alert("Not enough cookies!");
    }
}

// Prestige Function
function prestige() {
    if (cookieCount >= 10000) {
        prestigeLevel++;
        prestigeMultiplier *= 2; // Each prestige doubles the multiplier
        cookieCount = 0;
        cookiesPerSecond = 0;
        resetGenerators();
        updateCookieCount();
        updatePrestigeInfo();
    } else {
        alert("Not enough cookies for Prestige!");
    }
}

// Reset All Generators after Prestige
function resetGenerators() {
    farmCount = 0;
    mineCount = 0;
    factoryCount = 0;
    templeCount = 0;
    portalCount = 0;
    cookiesPerSecond = 0;
}

// Update Prestige info
function updatePrestigeInfo() {
    prestigeMultiplierElement.textContent = `Prestige Multiplier: x${prestigeMultiplier}`;
    prestigeProgressBar.style.width = "0%";
}

// Automatically add cookies per second
setInterval(() => {
    cookieCount += cookiesPerSecond * prestigeMultiplier;
    updateCookieCount();
}, 1000);

// Check for Achievements (example: buying first upgrade, etc.)
function checkAchievements() {
    if (farmCount >= 1) {
        achievementMessage = "Achievement Unlocked: First Farm!";
    }
    achievementMessageElement.textContent = `Achievements: ${achievementMessage}`;
}

