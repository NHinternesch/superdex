// Superweek Pokedex - Main JavaScript

// DOM Elements
const pokedex = document.getElementById('pokedex');
const screen = document.getElementById('screen');
const initialState = document.getElementById('initialState');
const loadingState = document.getElementById('loadingState');
const profileState = document.getElementById('profileState');
const errorState = document.getElementById('errorState');

const speakerInput = document.getElementById('speakerInput');
const goButton = document.getElementById('goButton');
const backButton = document.getElementById('backButton');
const retryButton = document.getElementById('retryButton');

// Profile Elements
const speakerImage = document.getElementById('speakerImage');
const speakerName = document.getElementById('speakerName');
const speakerCompany = document.getElementById('speakerCompany');
const speakerLocation = document.getElementById('speakerLocation');
const speakerLinkedin = document.getElementById('speakerLinkedin');
const moveList = document.getElementById('moveList');

// State Management
let currentState = 'initial';

// Event Listeners
goButton.addEventListener('click', handleSearch);
speakerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
backButton.addEventListener('click', resetToInitial);
retryButton.addEventListener('click', resetToInitial);

// Main Search Handler
async function handleSearch() {
    const query = speakerInput.value.trim();

    if (!query) {
        shakePokedex();
        return;
    }

    // Start animation sequence
    await animateSequence(query);
}

// Animation Sequence
async function animateSequence(query) {
    // 1. Close animation
    await closePokedex();

    // 2. Show loading state
    showState('loading');

    // 3. Shake animation
    await shakePokedex();

    // 4. Fetch speaker data
    const speakerData = await fetchSpeakerData(query);

    // 5. Open animation with flash
    await openPokedex();

    // 6. Show result
    if (speakerData) {
        displaySpeakerProfile(speakerData);
        showState('profile');
    } else {
        showState('error');
    }
}

// Close Animation
function closePokedex() {
    return new Promise((resolve) => {
        pokedex.classList.add('closing');
        setTimeout(() => {
            pokedex.classList.remove('closing');
            resolve();
        }, 350);
    });
}

// Shake Animation
function shakePokedex() {
    return new Promise((resolve) => {
        pokedex.classList.add('shaking');
        setTimeout(() => {
            pokedex.classList.remove('shaking');
            resolve();
        }, 600);
    });
}

// Open Animation with Flash Effect
function openPokedex() {
    return new Promise((resolve) => {
        pokedex.classList.add('opening');

        // Add flash effect
        const flash = document.createElement('div');
        flash.classList.add('flash-effect');
        screen.appendChild(flash);

        setTimeout(() => {
            flash.remove();
        }, 400);

        setTimeout(() => {
            pokedex.classList.remove('opening');
            resolve();
        }, 350);
    });
}

// State Management
function showState(state) {
    // Hide all states
    initialState.classList.add('hidden');
    loadingState.classList.add('hidden');
    profileState.classList.add('hidden');
    errorState.classList.add('hidden');

    // Show requested state
    switch (state) {
        case 'initial':
            initialState.classList.remove('hidden');
            currentState = 'initial';
            break;
        case 'loading':
            loadingState.classList.remove('hidden');
            currentState = 'loading';
            break;
        case 'profile':
            profileState.classList.remove('hidden');
            currentState = 'profile';
            break;
        case 'error':
            errorState.classList.remove('hidden');
            currentState = 'error';
            break;
    }
}

// Fetch Speaker Data
async function fetchSpeakerData(query) {
    try {
        // Simulate API call delay for realistic Pokeball animation
        await new Promise(resolve => setTimeout(resolve, 1200));

        console.log(`🔍 Searching for speaker: "${query}"`);

        // Check if findSpeaker exists
        if (typeof findSpeaker !== 'function') {
            console.error('❌ findSpeaker function not found!');
            console.log('Available globals:', Object.keys(window));
            return null;
        }

        // Use the findSpeaker helper from speakers.js
        const speaker = findSpeaker(query);

        if (speaker) {
            console.log('✅ Speaker found:', speaker.name);
            return speaker;
        } else {
            console.log('❌ Speaker not found');
            return null;
        }
    } catch (error) {
        console.error('❌ Error fetching speaker data:', error.message);
        return null;
    }
}

// Display Speaker Profile
function displaySpeakerProfile(data) {
    // Set image with fallback
    speakerImage.src = data.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&size=200&background=4dd0e1&color=1a1a1a`;
    speakerImage.alt = data.name;
    speakerImage.onerror = function() {
        this.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&size=200&background=4dd0e1&color=1a1a1a`;
    };

    // Set name
    speakerName.textContent = data.name || 'Unknown Speaker';

    // Set company with link if available
    if (data.company) {
        if (data.companyUrl) {
            speakerCompany.innerHTML = `<a href="${data.companyUrl}" target="_blank" rel="noopener noreferrer">${data.company}</a>`;
        } else {
            speakerCompany.textContent = data.company;
        }
    } else {
        speakerCompany.textContent = 'Independent';
    }

    // Set location
    speakerLocation.textContent = data.location || 'Unknown';

    // Set LinkedIn
    if (data.linkedin) {
        speakerLinkedin.innerHTML = `<a href="${data.linkedin}" target="_blank" rel="noopener noreferrer">View Profile →</a>`;
    } else {
        speakerLinkedin.textContent = 'Not available';
    }

    // Set Moves (Pokemon style)
    moveList.innerHTML = '';
    if (data.moves && data.moves.length > 0) {
        data.moves.forEach(move => {
            const moveItem = document.createElement('div');
            moveItem.className = 'move-item';
            moveItem.innerHTML = `
                <div class="move-name">
                    <span class="move-type">${move.type}</span>
                    <span>${move.name}</span>
                </div>
                <div class="move-damage">${move.damage}</div>
            `;
            moveList.appendChild(moveItem);
        });
    } else {
        // Default moves if none specified
        moveList.innerHTML = `
            <div class="move-item">
                <div class="move-name">
                    <span class="move-type">📊</span>
                    <span>Analytics Strike</span>
                </div>
                <div class="move-damage">75</div>
            </div>
            <div class="move-item">
                <div class="move-name">
                    <span class="move-type">💡</span>
                    <span>Insight Beam</span>
                </div>
                <div class="move-damage">60</div>
            </div>
        `;
    }
}

// Reset to Initial State
async function resetToInitial() {
    await closePokedex();
    speakerInput.value = '';
    showState('initial');
    await openPokedex();
}

// Easter egg: Click on the main light to cycle through random speakers
let lightClickCount = 0;
document.querySelector('.light-main').addEventListener('click', async function() {
    lightClickCount++;
    if (lightClickCount >= 3) {
        lightClickCount = 0;
        const speakerNames = Object.keys(window.speakers || {});
        const randomSpeaker = speakerNames[Math.floor(Math.random() * speakerNames.length)];
        speakerInput.value = randomSpeaker;
        await handleSearch();
    }
});

// Initialize - Set random placeholder
function setRandomPlaceholder() {
    const speakerNames = Object.values(window.speakers || {}).map(s => s.name);
    const randomName = speakerNames[Math.floor(Math.random() * speakerNames.length)];
    speakerInput.placeholder = `${randomName}`;
}

setRandomPlaceholder();

console.log('🎮 Superdex initialized!');
console.log('👥 Total speakers loaded:', Object.keys(window.speakers || {}).length);
console.log('🎁 Easter egg: Triple-click the blue light for a random speaker!');
