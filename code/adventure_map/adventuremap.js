// Storage keys for persistence
const STORAGE_KEYS = {
    CURRENT_NODE: 'fishbone_current_node',
    NODE_STATES: 'fishbone_node_states',
    EDGE_STATES: 'fishbone_edge_states',
    HABIT_CHECKBOXES: 'fishbone_habit_checkboxes',
    MAP_DATA: 'fishbone_map_data',
    STREAK_COUNT: 'fishbone_streak_count',
    LAST_COMPLETION_DATE: 'fishbone_last_completion_date',
    UNLOCKED_AVATARS: 'fishbone_unlocked_avatars'
};

const DEFAULT_MAP_DATA = {
    "nodes": [
        {
            "id": 1,
            "label": "Starting Point A",
            "nodeType": "standard",
            "state": "pending",
            "x": -150,
            "y": 50,
            "description": "Your journey begins with a calm start. Embrace your daily meditation and reading ritual.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 2,
            "label": "Starting Point B",
            "nodeType": "standard",
            "state": "pending",
            "x": 0,
            "y": 50,
            "description": "Every great adventure starts with a single step. Start with mindfulness and a good book.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 3,
            "label": "Starting Point C",
            "nodeType": "standard",
            "state": "pending",
            "x": 150,
            "y": 50,
            "description": "Set forth with energy and curiosity. A fresh path lies ahead.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 4,
            "label": "Path of Steady Progress",
            "nodeType": "standard",
            "state": "pending",
            "x": -200,
            "y": 150,
            "description": "A clear path opens; keep your focus as you maintain your routine.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 5,
            "label": "Beat the Clock",
            "nodeType": "challenge",
            "state": "pending",
            "x": -50,
            "y": 130,
            "description": "Race against time to complete your habits. Conquer your challenges before 18:00!",
            "timeLimit": "18:00",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 6,
            "label": "One-and-Done",
            "nodeType": "rest",
            "state": "pending",
            "x": 50,
            "y": 170,
            "description": "Today, select one habit to nail with full effort while letting the others rest for a moment.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 7,
            "label": "Steady Momentum",
            "nodeType": "standard",
            "state": "pending",
            "x": 200,
            "y": 150,
            "description": "Keep moving forward steadily while nurturing your routine and building momentum.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 8,
            "label": "Calm Woodland",
            "nodeType": "standard",
            "state": "pending",
            "x": -250,
            "y": 260,
            "description": "The forest whispers calm encouragement. Stay mindfully present in the serenity.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 9,
            "label": "Theme Day: Mind & Body",
            "nodeType": "event",
            "state": "pending",
            "x": -100,
            "y": 240,
            "description": "Focus on connecting mind and body today with a special theme that unites your practices.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 10,
            "label": "Double Down",
            "nodeType": "challenge",
            "state": "pending",
            "x": -20,
            "y": 280,
            "description": "Push a bit harder: double your effort on one selected habit to power through the challenge.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 11,
            "label": "Narrative Prompt",
            "nodeType": "event",
            "state": "pending",
            "x": 80,
            "y": 255,
            "description": "Imagine a surge of energy as a storm passes; channel its intensity into your daily ritual.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 12,
            "label": "Quiet Stream",
            "nodeType": "standard",
            "state": "pending",
            "x": 150,
            "y": 265,
            "description": "Flow like a quiet stream, letting your routine refresh your inner spirit.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 13,
            "label": "Micro-Habit Spotlight",
            "nodeType": "rest",
            "state": "pending",
            "x": 250,
            "y": 250,
            "description": "Mini actions can have big impacts. Today, try micro versions of your habits to spark progress.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "1 minute"
                },
                {
                    "name": "Reading",
                    "details": "5 minutes"
                }
            ]
        },
        {
            "id": 14,
            "label": "Swap & Amp",
            "nodeType": "challenge",
            "state": "pending",
            "x": -200,
            "y": 360,
            "description": "Mix things up: swap targets of two habits and amplify your efforts for a fresh challenge.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 15,
            "label": "Habit Remix",
            "nodeType": "event",
            "state": "pending",
            "x": -50,
            "y": 340,
            "description": "Blend your habits into one smooth routine; let each practice enhance the other.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 16,
            "label": "Reflect & Reset",
            "nodeType": "rest",
            "state": "pending",
            "x": 50,
            "y": 370,
            "description": "Take a moment to reflect on your progress and set one tweak for a better routine next time.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 17,
            "label": "Steady Climb",
            "nodeType": "standard",
            "state": "pending",
            "x": 200,
            "y": 355,
            "description": "Your commitment shines as you steadily climb towards new achievements in your routine.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        },
        {
            "id": 18,
            "label": "Sequential Flow",
            "nodeType": "challenge",
            "state": "pending",
            "x": -100,
            "y": 460,
            "description": "Focus intensely and complete your habits back-to-back in one continuous flow.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 19,
            "label": "50% Across the Board",
            "nodeType": "rest",
            "state": "pending",
            "x": 100,
            "y": 440,
            "description": "Today, perform each habit at half effort. Embrace a lighter pace and allow yourself to recover.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "5 minutes"
                },
                {
                    "name": "Reading",
                    "details": "15 minutes"
                }
            ]
        },
        {
            "id": 20,
            "label": "Bonus Micro-Habit",
            "nodeType": "event",
            "state": "pending",
            "x": 0,
            "y": 560,
            "description": "A bonus challenge appears! Add an extra micro-habit to spice up your routine today.",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                }
            ]
        },
        {
            "id": 21,
            "label": "Full Completion",
            "nodeType": "boss",
            "state": "pending",
            "x": 0,
            "y": 660,
            "description": "Face the ultimate trial: complete all your habits at full strength to claim victory over your challenges!",
            "timeLimit": "none",
            "habits": [
                {
                    "name": "Meditate",
                    "details": "10 minutes"
                },
                {
                    "name": "Reading",
                    "details": "30 minutes"
                },
                {
                    "name": "Running",
                    "details": "3 miles"
                }
            ]
        }
    ],
    "edges": [
        {
            "from": 1,
            "to": 4,
            "state": "pending"
        },
        {
            "from": 2,
            "to": 5,
            "state": "pending"
        },
        {
            "from": 2,
            "to": 6,
            "state": "pending"
        },
        {
            "from": 3,
            "to": 7,
            "state": "pending"
        },
        {
            "from": 4,
            "to": 8,
            "state": "pending"
        },
        {
            "from": 5,
            "to": 9,
            "state": "pending"
        },
        {
            "from": 5,
            "to": 10,
            "state": "pending"
        },
        {
            "from": 5,
            "to": 11,
            "state": "pending"
        },
        {
            "from": 6,
            "to": 12,
            "state": "pending"
        },
        {
            "from": 7,
            "to": 13,
            "state": "pending"
        },
        {
            "from": 8,
            "to": 14,
            "state": "pending"
        },
        {
            "from": 9,
            "to": 15,
            "state": "pending"
        },
        {
            "from": 10,
            "to": 15,
            "state": "pending"
        },
        {
            "from": 11,
            "to": 16,
            "state": "pending"
        },
        {
            "from": 12,
            "to": 16,
            "state": "pending"
        },
        {
            "from": 13,
            "to": 17,
            "state": "pending"
        },
        {
            "from": 14,
            "to": 18,
            "state": "pending"
        },
        {
            "from": 15,
            "to": 18,
            "state": "pending"
        },
        {
            "from": 16,
            "to": 19,
            "state": "pending"
        },
        {
            "from": 17,
            "to": 19,
            "state": "pending"
        },
        {
            "from": 18,
            "to": 20,
            "state": "pending"
        },
        {
            "from": 19,
            "to": 20,
            "state": "pending"
        },
        {
            "from": 20,
            "to": 21,
            "state": "pending"
        }
    ]
};

// Available avatars data array - used for unlocking rewards
const AVATAR_DATA = [
    {
        id: 'shark-red',
        src: '../img/shark-profile-red.png',
        profileSrc: '../img/profile/shark-red.png',
        name: 'Red Shark',
        unlocked: false
    },
    {
        id: 'fish-purple',
        src: '../img/fish-profile-purple.png',
        profileSrc: '../img/profile/fish-purple.png',
        name: 'Purple Fish',
        unlocked: false
    },
    {
        id: 'fish-green',
        src: '../img/fish-profile-green.png',
        profileSrc: '../img/profile/fish-green.png',
        name: 'Green Fish',
        unlocked: false
    },
    {
        id: 'shark-black',
        src: '../img/shark-profile-black.png',
        profileSrc: '../img/profile/shark-black.png',
        name: 'Black Shark',
        unlocked: false
    },
    {
        id: 'skeleton-yellow',
        src: '../img/skeleton-profile-yellow.png',
        profileSrc: '../img/profile/skeleton-yellow.png',
        name: 'Yellow Skeleton',
        unlocked: false
    },
    {
        id: 'fish-suit',
        src: '../img/fish-profile-suit.png',
        profileSrc: '../img/profile/fish-suit.png',
        name: 'Suit Fish',
        unlocked: false
    }
];

// Default avatar that is always unlocked
const DEFAULT_AVATAR = {
    id: 'skeleton-green',
    src: '../img/skeleton-profile-green.png',
    profileSrc: '../img/profile/skeleton-green.png',
    name: 'Green Skeleton',
    unlocked: true
};

// Function to save map data to localStorage
function saveMapData(data) {
    localStorage.setItem(STORAGE_KEYS.MAP_DATA, JSON.stringify(data));
}

// Function to get unlocked avatars from localStorage
function getUnlockedAvatars() {
    const savedAvatars = localStorage.getItem(STORAGE_KEYS.UNLOCKED_AVATARS);
    return savedAvatars ? JSON.parse(savedAvatars) : [];
}

// Function to save unlocked avatars to localStorage
function saveUnlockedAvatars(unlockedAvatars) {
    localStorage.setItem(STORAGE_KEYS.UNLOCKED_AVATARS, JSON.stringify(unlockedAvatars));
}

// Function to unlock a random avatar
function unlockRandomAvatar() {
    // Get currently unlocked avatars
    const unlockedAvatarIds = getUnlockedAvatars();

    // Find avatars that are not yet unlocked
    const lockedAvatars = AVATAR_DATA.filter(avatar => !unlockedAvatarIds.includes(avatar.id));

    // If all avatars are unlocked, return null
    if (lockedAvatars.length === 0) {
        console.log("All avatars already unlocked!");
        return null;
    }

    // Select a random avatar from the locked ones
    const randomIndex = Math.floor(Math.random() * lockedAvatars.length);
    const avatarToUnlock = lockedAvatars[randomIndex];

    // Add the avatar ID to the unlocked list
    unlockedAvatarIds.push(avatarToUnlock.id);

    // Save the updated list
    saveUnlockedAvatars(unlockedAvatarIds);

    console.log(`Unlocked avatar: ${avatarToUnlock.name}`);
    return avatarToUnlock;
}

// Function to show avatar unlocked modal
function showAvatarUnlockedModal(avatar) {
    // Create modal container if it doesn't exist
    if (!document.getElementById('avatar-unlocked-modal')) {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'avatar-unlocked-modal';
        modalContainer.className = 'modal-container';
        modalContainer.style.display = 'none';

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Add modal HTML structure
        modalContent.innerHTML = `
            <div class="challenge-title" style="background-color: #E67E22;">New Avatar Unlocked!</div>
            <div style="text-align: center; padding: 20px 0;">
                <img id="unlocked-avatar-img" src="${avatar.src}" alt="${avatar.name}" style="width: 150px; height: 150px; margin: 0 auto; display: block;">
                <div style="font-size: 24px; font-weight: bold; margin-top: 15px; color: #fff;">${avatar.name}</div>
            </div>
            <div class="challenge-bonus">
                <div class="bonus-header">Congratulations!</div>
                <div class="bonus-description">You've completed a boss node and unlocked a new avatar!</div>
                <div class="bonus-reward">Go to your profile to try it on.</div>
            </div>
            <div class="button-row">
                <button class="button accept-button" id="close-avatar-modal" style="width: 100%;">Awesome!</button>
            </div>
        `;

        // Add content to container
        modalContainer.appendChild(modalContent);

        // Add modal to page
        document.body.appendChild(modalContainer);

        // Add event listener to close button
        document.getElementById('close-avatar-modal').addEventListener('click', function () {
            modalContainer.style.display = 'none';
        });

        // Close modal when clicking outside of content
        modalContainer.addEventListener('click', function (event) {
            if (event.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        });
    } else {
        // Update existing modal with new avatar details
        document.getElementById('unlocked-avatar-img').src = avatar.src;
        document.getElementById('unlocked-avatar-img').alt = avatar.name;
        const nameElement = document.getElementById('unlocked-avatar-img').nextElementSibling;
        if (nameElement) {
            nameElement.textContent = avatar.name;
        }
    }

    // Show the modal
    document.getElementById('avatar-unlocked-modal').style.display = 'flex';
}

// Function to show map selection modal
function showMapSelectionModal() {
    // Create modal container if it doesn't exist
    if (!document.getElementById('map-selection-modal')) {
        const modalContainer = document.createElement('div');
        modalContainer.id = 'map-selection-modal';
        modalContainer.className = 'modal-container';
        modalContainer.style.display = 'none';

        // Create modal content
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        // Add modal HTML structure
        modalContent.innerHTML = `
            <div class="challenge-title" style="background-color: #276F7C;">Choose Your Map</div>
            <div class="time-remaining">
                <div class="bonus-header">Map Selection:</div>
                <div class="bonus-description">Choose which type of adventure map you'd like to use.</div>
            </div>
            <div class="habits-container">
                <div class="habit-item" id="default-map-option" style="cursor: pointer; transition: background-color 0.3s ease;">
                    <div class="habit-name">Default Adventure Map</div>
                    <div class="habit-details">Use the pre-designed map with a balanced path for your habits.</div>
                </div>
                <div class="habit-item" id="generated-map-option" style="cursor: pointer; transition: background-color 0.3s ease;">
                    <div class="habit-name">Custom Generated Map</div>
                    <div class="habit-details">Create a unique map tailored to your specific habits using AI.</div>
                </div>
            </div>
            <div class="button-row">
                <button class="button cancel-button" id="cancel-map-selection">Cancel</button>
            </div>
        `;

        // Add content to container
        modalContainer.appendChild(modalContent);

        // Add modal to page
        document.body.appendChild(modalContainer);

        // Add event listeners to options
        document.getElementById('default-map-option').addEventListener('click', function () {
            useDefaultMap();
            hideMapSelectionModal();
        });

        document.getElementById('generated-map-option').addEventListener('click', function () {
            generateNewMap();
            hideMapSelectionModal();
        });

        // Add hover effects to options
        document.getElementById('default-map-option').addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#4aa7b5';
        });

        document.getElementById('default-map-option').addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#3a8f9d';
        });

        document.getElementById('generated-map-option').addEventListener('mouseenter', function () {
            this.style.backgroundColor = '#4aa7b5';
        });

        document.getElementById('generated-map-option').addEventListener('mouseleave', function () {
            this.style.backgroundColor = '#3a8f9d';
        });

        // Add event listener to cancel button
        document.getElementById('cancel-map-selection').addEventListener('click', function () {
            hideMapSelectionModal();
        });

        // Close modal when clicking outside of content
        modalContainer.addEventListener('click', function (event) {
            if (event.target === modalContainer) {
                hideMapSelectionModal();
            }
        });
    }

    // Show the modal
    document.getElementById('map-selection-modal').style.display = 'flex';
}

// Function to hide map selection modal
function hideMapSelectionModal() {
    const modalContainer = document.getElementById('map-selection-modal');
    if (modalContainer) {
        modalContainer.style.display = 'none';
    }
}

// Function to use the default map
function useDefaultMap() {
    // Show loading animation in map area
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        // Create loading element
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'map-loading-message';
        loadingDiv.style.backgroundColor = '#276F7C';
        loadingDiv.style.borderRadius = '10px';
        loadingDiv.style.padding = '30px 20px';
        loadingDiv.style.textAlign = 'center';
        loadingDiv.style.color = '#d1dced';
        loadingDiv.style.fontSize = '20px';
        loadingDiv.style.fontWeight = 'bold';
        loadingDiv.style.marginTop = '20px';
        loadingDiv.textContent = "Setting up default adventure map...";

        // Replace the map with loading message
        mapContainer.innerHTML = '';
        mapContainer.appendChild(loadingDiv);

        // Save the default map data to localStorage
        saveMapData(DEFAULT_MAP_DATA);

        // Clear other saved state since we're using a new map
        localStorage.removeItem(STORAGE_KEYS.CURRENT_NODE);
        localStorage.removeItem(STORAGE_KEYS.NODE_STATES);
        localStorage.removeItem(STORAGE_KEYS.EDGE_STATES);
        localStorage.removeItem(STORAGE_KEYS.HABIT_CHECKBOXES);
        localStorage.removeItem(STORAGE_KEYS.STREAK_COUNT);

        // Add a small delay to show the loading message
        setTimeout(() => {
            console.log("Default map set up. Reloading page...");
            // Reload the page to use the new map data
            sessionStorage.setItem('newlyGeneratedMap', 'true');
            window.location.reload();
        }, 800);
    }
}

// Add a function to generate a new map based on habits
async function generateNewMap() {
    const habitData = localStorage.getItem("habitData");

    if (!habitData || JSON.parse(habitData).length === 0) {
        alert("Please add some habits first before generating a map.");
        return;
    }

    // Show loading animation in map area
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        // Create loading element
        const loadingDiv = document.createElement('div');
        loadingDiv.id = 'map-loading-message';
        loadingDiv.style.backgroundColor = '#276F7C';
        loadingDiv.style.borderRadius = '10px';
        loadingDiv.style.padding = '30px 20px';
        loadingDiv.style.textAlign = 'center';
        loadingDiv.style.color = '#d1dced';
        loadingDiv.style.fontSize = '20px';
        loadingDiv.style.fontWeight = 'bold';
        loadingDiv.style.marginTop = '20px';
        loadingDiv.textContent = "Creating adventure map...";

        // Replace the map with loading message
        mapContainer.innerHTML = '';
        mapContainer.appendChild(loadingDiv);

        // Start the ellipsis animation
        let dotsCount = 0;
        const dotsAnimation = setInterval(() => {
            dotsCount = (dotsCount + 1) % 4;
            const dots = '.'.repeat(dotsCount);
            loadingDiv.textContent = `Creating adventure map${dots}`;
        }, 500);

        try {
            // Make the request to the Reagent web app
            const response = await fetch(
                'https://noggin.rea.gent/ordinary-elephant-7817',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer rg_v1_ym68fddenmsi818hh993qlfl7iulg0gscd41_ngk',
                    },
                    body: JSON.stringify({
                        habitData: habitData
                    }),
                }
            ).then(response => response.json()); // Use response.json() to get the parsed object

            // Clear the animation
            clearInterval(dotsAnimation);

            console.log("Response:", response);

            // Check if we have valid map data
            if (response && response.nodes && response.edges) {
                // If the JSON uses traditional mathematical Y coordinates (up is positive),
                // we need to adjust for screen coordinates (down is positive)
                // This is handled later in the code when the map is loaded

                // Save the map data to localStorage
                saveMapData(response);

                // Clear other saved state since we're using a new map
                localStorage.removeItem(STORAGE_KEYS.CURRENT_NODE);
                localStorage.removeItem(STORAGE_KEYS.NODE_STATES);
                localStorage.removeItem(STORAGE_KEYS.EDGE_STATES);
                localStorage.removeItem(STORAGE_KEYS.HABIT_CHECKBOXES);
                localStorage.removeItem(STORAGE_KEYS.STREAK_COUNT);

                console.log("Map data generated successfully. Reloading page...");
                // Reload the page to use the new map data
                sessionStorage.setItem('newlyGeneratedMap', 'true');
                window.location.reload();
            } else {
                console.error("Invalid map data format:", response);
                loadingDiv.textContent = "Error: Invalid map data received. Please try again.";
            }
        } catch (error) {
            // Clear the animation
            clearInterval(dotsAnimation);

            console.error("Error generating map:", error);
            loadingDiv.textContent = "Error generating map. Please try again.";
        }
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the container element
    const container = document.getElementById('map-network');

    // Define node types with their colors and states
    const nodeTypes = {
        standard: {
            color: { background: '#FFFFFF', border: '#478BE3', filled: '#478BE3' },
            borderWidth: 2,
            size: 35
        },
        rest: {
            color: { background: '#FFFFFF', border: '#A9DFEB', filled: '#A9DFEB' },
            borderWidth: 2,
            size: 35
        },
        challenge: {
            color: { background: '#FFFFFF', border: '#F1C40F', filled: '#F1C40F' },
            borderWidth: 2,
            size: 35
        },
        event: {
            color: { background: '#FFFFFF', border: '#E84393', filled: '#E84393' },
            borderWidth: 2,
            size: 35
        },
        boss: {
            color: { background: '#FFFFFF', border: '#E67E22', filled: '#E67E22' },
            borderWidth: 2,
            size: 35
        }
    };

    // Map configuration option - increase the default size of the nodes for a larger clickable area
    const CLICK_AREA_SIZE = 50; // Clickable area size (larger than visual size)

    // default map data
    const mapData = DEFAULT_MAP_DATA;

    // Function to load map data from localStorage
    function loadMapData() {
        const savedData = localStorage.getItem(STORAGE_KEYS.MAP_DATA);
        return savedData ? JSON.parse(savedData) : null;
    }

    // Function to fix y-coordinates in the map data
    // In LLM-generated maps, we might get mathematical coordinates (where up is positive)
    // but vis.js uses screen coordinates (where down is positive)
    function normalizeMapCoordinates(mapData) {
        // First, detect if y-axis needs to be inverted
        // Check if the LLM is using mathematical coordinates (negative y at bottom, positive at top)
        // by looking at the pattern of y values in relation to a typical map structure

        // Make a shallow copy
        const normalizedData = JSON.parse(JSON.stringify(mapData));

        // First, determine if we need to invert Y values:
        // In a typical map, boss nodes should be at the top, starting nodes at the bottom
        // This might be reversed in mathematical coordinates (boss nodes have negative y)
        let needsInversion = false;

        // Check if boss nodes have lower y values than starting nodes
        const bossNodes = normalizedData.nodes.filter(node => node.nodeType === 'boss');
        const startNodes = normalizedData.nodes.filter(node =>
            node.label.toLowerCase().includes('start') ||
            node.label.toLowerCase().includes('beginning') ||
            node.label.toLowerCase().includes('path'));

        if (bossNodes.length > 0 && startNodes.length > 0) {
            const avgBossY = bossNodes.reduce((sum, node) => sum + node.y, 0) / bossNodes.length;
            const avgStartY = startNodes.reduce((sum, node) => sum + node.y, 0) / startNodes.length;

            // If boss nodes have smaller y values, we need to invert
            // (In screen coordinates, smaller y means higher position)
            if (avgBossY < avgStartY) {
                // The data seems correct for screen coordinates (smaller y at top)
                needsInversion = false;
            } else {
                // The data seems to use mathematical coordinates (larger y at top)
                needsInversion = true;
            }
        } else {
            // Alternative detection: 
            // Assume if we have negative y values, they're meant to be at the top
            const hasNegativeY = normalizedData.nodes.some(node => node.y < 0);
            const hasLargePositiveY = normalizedData.nodes.some(node => node.y > 200);

            if (hasNegativeY && hasLargePositiveY) {
                needsInversion = true;
            }
        }

        if (needsInversion) {
            console.log("Inverting Y coordinates for compatibility with screen coordinates");

            // Find the range of y values to properly invert
            const yValues = normalizedData.nodes.map(node => node.y);
            const minY = Math.min(...yValues);
            const maxY = Math.max(...yValues);

            // Invert each node's y coordinate
            normalizedData.nodes.forEach(node => {
                // Invert y value within the range
                // node.y = maxY - (node.y - minY);

                // Alternative: just negate y values
                node.y = -node.y;
            });
        }

        return normalizedData;
    }

    // Function to identify starting nodes based on map structure
    function findStartingNodes(mapData) {
        // Create a set to track which nodes have incoming edges
        const nodesWithIncoming = new Set();

        // Record all nodes that have incoming edges
        mapData.edges.forEach(edge => {
            nodesWithIncoming.add(edge.to);
        });

        // Get all node IDs that have no incoming edges - these are starting nodes
        const startNodeIds = mapData.nodes
            .filter(node => !nodesWithIncoming.has(node.id))
            .map(node => node.id);

        console.log("Identified starting nodes:", startNodeIds);
        return startNodeIds;
    }

    // Check if we have a custom map saved
    const savedMapData = loadMapData();
    // If we have a saved custom map, use it instead of the default
    if (savedMapData) {
        // Process the custom map to ensure coordinates are correct
        const normalizedMapData = normalizeMapCoordinates(savedMapData);
        // Use the normalized map data
        mapData.nodes = normalizedMapData.nodes;
        mapData.edges = normalizedMapData.edges;
    }

    // Create empty vis.js DataSets
    const nodes = new vis.DataSet([]);
    const edges = new vis.DataSet([]);

    // Create the network data object (initially empty)
    const data = {
        nodes: nodes,
        edges: edges
    };

    // Check if we have a map and habits
    const hasMap = localStorage.getItem(STORAGE_KEYS.MAP_DATA);
    const hasHabits = localStorage.getItem("habitData");

    // If no map, show placeholder message instead
    if (!hasMap) {
        // Hide the network container and map legend
        const mapContainer = document.querySelector('.map-container');
        const mapLegend = document.querySelector('.map-legend');
        const progressBarWrapper = document.querySelector('.progress-bar-wrapper');
        const percentage = document.querySelector('.percentage');

        if (mapContainer) {
            // Create message element
            const messageDiv = document.createElement('div');
            messageDiv.id = 'map-placeholder-message';
            messageDiv.style.backgroundColor = '#257b8a';
            messageDiv.style.borderRadius = '10px';
            messageDiv.style.padding = '30px 20px';
            messageDiv.style.textAlign = 'center';
            messageDiv.style.color = '#d1dced';
            messageDiv.style.fontSize = '18px';
            messageDiv.style.fontWeight = 'bold';
            messageDiv.style.marginTop = '20px';

            if (hasHabits) {
                messageDiv.textContent = "Once you add your habits, click on \"New Map\" to start your adventure!";
            } else {
                messageDiv.textContent = "Add some habits first, then come back to start your adventure!";
            }

            // Replace the map network with this message
            mapContainer.innerHTML = '';
            mapContainer.appendChild(messageDiv);
        }

        if (mapLegend) {
            mapLegend.style.display = 'none';
        }

        if (progressBarWrapper && percentage) {
            progressBarWrapper.style.display = 'none';
            percentage.style.display = 'none';
        }
    } else {
        // Process nodes to add group property based on nodeType and add selectable property
        const processedNodes = mapData.nodes.map(node => ({
            ...node,
            group: node.state === 'current' ? 'current' : node.nodeType,
            selectable: false, // Add selectable property, default to false
            displayLabel: node.label, // Store the original label in a new property
            label: "", // We'll display labels in tooltips instead of on the nodes
            size: CLICK_AREA_SIZE // Set a larger clickable area while maintaining visual appearance
        }));

        // Process edges to add dashes property and ID
        const processedEdges = mapData.edges.map(edge => ({
            ...edge,
            id: `e${edge.from}-${edge.to}`,
            dashes: edge.state === 'traversed' ? false : [5, 5],
            smooth: false // Use straight lines instead of curved
        }));

        // Update the datasets with the processed data
        nodes.update(processedNodes);
        edges.update(processedEdges);
    }

    // Variable to keep track of currently selected node
    let currentSelectedNode = null; // No node selected initially
    let characterImg = null;
    let targetNodeId = null; // For handling node selection and challenge acceptance

    // Object to store habit checkbox states
    let habitCheckboxStates = {};

    // Timer for countdown
    let countdownTimer = null;

    // Configuration options for the network
    const options = {
        nodes: {
            shape: 'circle',
            borderWidth: 2,
            shadow: false,
            font: {
                size: 0 // Hide labels
            },
            size: CLICK_AREA_SIZE, // Use the larger clickable area size
            scaling: {
                label: {
                    enabled: false
                }
            },
            chosen: false, // Prevent visual changes on selection
            margin: 10, // Add margin to increase clickable area
            widthConstraint: false,
            heightConstraint: false
        },
        edges: {
            width: 2,
            color: {
                color: '#1a3a4a',
                highlight: '#1a3a4a'
            },
            smooth: {
                enabled: false // Use straight lines
            },
            selectionWidth: 0 // Prevent edges from appearing selectable
        },
        physics: {
            enabled: false // Disable physics to keep nodes in fixed positions
        },
        interaction: {
            dragNodes: false,    // Prevent dragging individual nodes
            dragView: true,      // Enable dragging the entire view
            zoomView: true,      // Enable zooming
            navigationButtons: true, // Show navigation buttons
            keyboard: {
                enabled: true,   // Enable keyboard navigation
                bindToWindow: false
            },
            multiselect: false,  // Prevent multiple selection
            selectConnectedEdges: false // Prevent edges from being selected when nodes are selected
        },
        // Add bounds to restrict scrolling
        autoResize: true,
        height: '100%',
        width: '100%',
        // Limit how far users can pan and zoom
        configure: {
            enabled: false,
        }
    };

    // Create the network visualization
    const network = new vis.Network(container, data, options);

    // Function to save current node to localStorage
    function saveCurrentNode() {
        if (currentSelectedNode) {
            localStorage.setItem(STORAGE_KEYS.CURRENT_NODE, currentSelectedNode.toString());
        } else {
            localStorage.removeItem(STORAGE_KEYS.CURRENT_NODE);
        }
    }

    // Function to load current node from localStorage
    function loadCurrentNode() {
        const savedNode = localStorage.getItem(STORAGE_KEYS.CURRENT_NODE);
        return savedNode ? parseInt(savedNode) : null;
    }

    // Function to save node states to localStorage
    function saveNodeStates() {
        const nodeStates = {};
        const allNodes = nodes.get();

        allNodes.forEach(node => {
            nodeStates[node.id] = {
                state: node.state,
                group: node.group
            };
        });

        localStorage.setItem(STORAGE_KEYS.NODE_STATES, JSON.stringify(nodeStates));
    }

    // Function to load node states from localStorage
    function loadNodeStates() {
        const savedStates = localStorage.getItem(STORAGE_KEYS.NODE_STATES);
        return savedStates ? JSON.parse(savedStates) : null;
    }

    // Function to save edge states to localStorage
    function saveEdgeStates() {
        const edgeStates = {};
        const allEdges = edges.get();

        allEdges.forEach(edge => {
            edgeStates[edge.id] = {
                state: edge.state,
                dashes: edge.dashes
            };
        });

        localStorage.setItem(STORAGE_KEYS.EDGE_STATES, JSON.stringify(edgeStates));
    }

    // Function to load edge states from localStorage
    function loadEdgeStates() {
        const savedStates = localStorage.getItem(STORAGE_KEYS.EDGE_STATES);
        return savedStates ? JSON.parse(savedStates) : null;
    }

    // Function to save habit checkbox states to localStorage
    function saveHabitCheckboxStates() {
        localStorage.setItem(STORAGE_KEYS.HABIT_CHECKBOXES, JSON.stringify(habitCheckboxStates));
    }

    // Function to load habit checkbox states from localStorage
    function loadHabitCheckboxStates() {
        const savedStates = localStorage.getItem(STORAGE_KEYS.HABIT_CHECKBOXES);
        return savedStates ? JSON.parse(savedStates) : {};
    }

    // Function to save all state to localStorage
    function saveAllState() {
        saveCurrentNode();
        saveNodeStates();
        saveEdgeStates();
        saveHabitCheckboxStates();
        // Note: Streak data is saved separately when updated
    }

    // Streak management functions
    function getStreakCount() {
        const savedStreak = localStorage.getItem(STORAGE_KEYS.STREAK_COUNT);
        return savedStreak ? parseInt(savedStreak) : 0;
    }

    function getLastCompletionDate() {
        const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_COMPLETION_DATE);
        return lastDate ? new Date(lastDate) : null;
    }

    function saveStreakData(streakCount, completionDate) {
        localStorage.setItem(STORAGE_KEYS.STREAK_COUNT, streakCount.toString());
        localStorage.setItem(STORAGE_KEYS.LAST_COMPLETION_DATE, completionDate.toISOString());
    }

    function updateStreak() {
        let streakCount = getStreakCount();
        const lastCompletionDate = getLastCompletionDate();
        const today = new Date();

        // Reset dates to just the date part (no time) for comparison
        const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        // If this is the first completion or the streak was broken, start at 1
        if (!lastCompletionDate) {
            streakCount = 1;
        } else {
            const lastDate = new Date(
                lastCompletionDate.getFullYear(),
                lastCompletionDate.getMonth(),
                lastCompletionDate.getDate()
            );

            // Calculate the difference in days
            const timeDiff = todayDate.getTime() - lastDate.getTime();
            const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

            if (daysDiff === 0) {
                // Already completed something today, streak doesn't change
            } else if (daysDiff === 1) {
                // Completed yesterday, streak increases
                streakCount++;
            } else {
                // Streak broken
                streakCount = 1;
            }
        }

        // Save updated streak data
        saveStreakData(streakCount, today);

        // Update the UI
        updateStreakDisplay(streakCount);

        return streakCount;
    }

    function updateStreakDisplay(streakCount) {
        const streakElement = document.querySelector('.streak-info');
        if (streakElement) {
            streakElement.textContent = `Current Streak: ${streakCount} ${streakCount === 1 ? 'day' : 'days'}`;
        }
    }

    // Load saved state if available
    function loadSavedState() {
        // Load current node
        const savedCurrentNode = loadCurrentNode();
        if (savedCurrentNode) {
            currentSelectedNode = savedCurrentNode;
        }

        // Load node states
        const savedNodeStates = loadNodeStates();
        if (savedNodeStates) {
            const allNodes = nodes.get();
            const updatedNodes = allNodes.map(node => {
                if (savedNodeStates[node.id]) {
                    node.state = savedNodeStates[node.id].state;
                    node.group = savedNodeStates[node.id].group;
                }
                return node;
            });
            nodes.update(updatedNodes);
        }

        // Load edge states
        const savedEdgeStates = loadEdgeStates();
        if (savedEdgeStates) {
            const allEdges = edges.get();
            const updatedEdges = allEdges.map(edge => {
                if (savedEdgeStates[edge.id]) {
                    edge.state = savedEdgeStates[edge.id].state;
                    edge.dashes = savedEdgeStates[edge.id].dashes;
                }
                return edge;
            });
            edges.update(updatedEdges);
        }

        // Load habit checkbox states
        habitCheckboxStates = loadHabitCheckboxStates();

        // Update streak display
        updateStreakDisplay(getStreakCount());
    }

    // Function to handle changes to habit checkboxes
    function handleHabitCheckboxChange(nodeId, habitIndex, checked) {
        // Initialize node's habit states if not exist
        if (!habitCheckboxStates[nodeId]) {
            habitCheckboxStates[nodeId] = {};
        }

        // Save the checkbox state
        habitCheckboxStates[nodeId][habitIndex] = checked;

        // Save to localStorage
        saveHabitCheckboxStates();
    }

    // Ensure proper initialization of the current node text
    network.once("afterDrawing", function () {
        // Load saved state before initializing the view
        loadSavedState();

        // Flag to check if this is the first load after generating a new map
        const isNewlyGeneratedMap = sessionStorage.getItem('newlyGeneratedMap') === 'true';

        // Clear the flag after checking it
        if (isNewlyGeneratedMap) {
            sessionStorage.removeItem('newlyGeneratedMap');
        }

        // Use a single zoom operation with appropriate timing
        setTimeout(() => {
            // If we have a current node, focus on it
            if (currentSelectedNode) {
                network.focus(currentSelectedNode, {
                    scale: 0.8,
                    animation: isNewlyGeneratedMap ? false : {
                        duration: 1000,
                        easingFunction: "easeInOutQuad"
                    }
                });

                // Create character image after focusing
                setTimeout(createCharacterImage, isNewlyGeneratedMap ? 100 : 1000);
            } else {
                // If no current node, focus on starting nodes instead of the entire map
                const startingNodeIds = findStartingNodes(mapData);

                if (startingNodeIds.length > 0) {
                    // Get positions of all starting nodes
                    const startingPositions = network.getPositions(startingNodeIds);

                    // Calculate the center point of all starting nodes
                    let sumX = 0, sumY = 0;
                    let count = 0;

                    for (const nodeId in startingPositions) {
                        if (startingPositions.hasOwnProperty(nodeId)) {
                            sumX += startingPositions[nodeId].x;
                            sumY += startingPositions[nodeId].y;
                            count++;
                        }
                    }

                    // If we found starting nodes, focus on their center
                    if (count > 0) {
                        const centerX = sumX / count;
                        const centerY = sumY / count;

                        // Focus on the center of starting nodes
                        network.moveTo({
                            position: { x: centerX, y: centerY },
                            scale: 0.9,
                            animation: isNewlyGeneratedMap ? false : {
                                duration: 1000,
                                easingFunction: "easeInOutQuad"
                            }
                        });
                    } else {
                        // Fallback to fitting the entire network
                        network.fit({
                            animation: isNewlyGeneratedMap ? false : {
                                duration: 1000,
                                easingFunction: "easeInOutQuad"
                            }
                        });

                        // Set a reasonable zoom level
                        setTimeout(() => {
                            network.moveTo({
                                scale: 0.8,
                                animation: isNewlyGeneratedMap ? false : {
                                    duration: 1000,
                                    easingFunction: "easeInOutQuad"
                                }
                            });
                        }, isNewlyGeneratedMap ? 100 : 1000);
                    }
                } else {
                    // If no starting nodes were found, fall back to fitting the entire network
                    network.fit({
                        animation: isNewlyGeneratedMap ? false : {
                            duration: 1000,
                            easingFunction: "easeInOutQuad"
                        }
                    });

                    // Set a reasonable zoom level
                    setTimeout(() => {
                        network.moveTo({
                            scale: 0.8,
                            animation: isNewlyGeneratedMap ? false : {
                                duration: 1000,
                                easingFunction: "easeInOutQuad"
                            }
                        });
                    }, isNewlyGeneratedMap ? 100 : 1000);
                }
            }

            // Initialize the current node text display
            updateCurrentNodeText();

            // Update selectable nodes based on current state
            updateSelectableNodes();

            // Update map progress
            updateMapProgress();
        }, isNewlyGeneratedMap ? 100 : 500);
    });

    // Function to create the character image once
    function createCharacterImage() {
        // Remove any existing character
        if (characterImg) {
            characterImg.remove();
        }

        // If no node is selected, don't create the character
        if (!currentSelectedNode) return;

        // Create character image
        characterImg = document.createElement('img');
        characterImg.src = '../img/skeleton-profile-green.png'; // Path to the Fishbone character image
        characterImg.id = 'character-img';
        characterImg.style.position = 'absolute';
        characterImg.style.width = '40px';
        characterImg.style.height = '40px';
        characterImg.style.zIndex = '999'; // Ensure it's above the network

        // Initial positioning will be done by updateCharacterPosition
        updateCharacterPosition();

        // Add the character to the container
        container.appendChild(characterImg);
    }

    // Function to update only the position of the character image
    function updateCharacterPosition() {
        if (!characterImg || !currentSelectedNode) return;

        // Get the position of the current node in canvas coordinates
        const nodePosition = network.getPositions([currentSelectedNode])[currentSelectedNode];

        if (!nodePosition) return; // Node might not be available yet

        // Convert canvas coordinates to DOM coordinates (accounting for pan/zoom)
        const canvasPosition = network.canvasToDOM(nodePosition);

        // Position the character directly on top of the node
        characterImg.style.left = (canvasPosition.x - 20) + 'px';
        characterImg.style.top = (canvasPosition.y - 35) + 'px';
    }

    // Add debugging to check if labels are properly populated
    function updateCurrentNodeText() {
        const selectedNodeText = document.getElementById('selected-node');
        if (selectedNodeText && currentSelectedNode) {
            const currentNode = nodes.get(currentSelectedNode);
            if (currentNode) {
                // Log the node data to console for debugging
                console.log("Current node data:", currentNode);

                // Include nodeType and label with a colon separator instead of hyphen
                const nodeTypeCapitalized = currentNode.nodeType.charAt(0).toUpperCase() + currentNode.nodeType.slice(1);
                const labelText = currentNode.displayLabel || "Unknown"; // Use the displayLabel property we added

                // Create the display text with colon instead of hyphen
                const displayText = `${nodeTypeCapitalized}: ${labelText}`;
                console.log("Setting node text to:", displayText);

                // Set the text content
                selectedNodeText.textContent = displayText;

                // Add tooltip with full description
                selectedNodeText.title = currentNode.description || "";
            } else {
                selectedNodeText.textContent = 'None Selected';
                selectedNodeText.title = '';
            }
        } else if (selectedNodeText) {
            selectedNodeText.textContent = 'None Selected';
            selectedNodeText.title = '';
        }
    }

    // Update selectable nodes based on current node state
    function updateSelectableNodes() {
        // First, reset all nodes to not selectable
        const allNodes = nodes.get();
        allNodes.forEach(node => {
            node.selectable = false;
        });
        nodes.update(allNodes);

        // If there's a current node and it's in progress, only make it selectable
        if (currentSelectedNode) {
            const currentNode = nodes.get(currentSelectedNode);
            if (currentNode && currentNode.state === 'in-progress') {
                // When a node is in progress, only that node is selectable
                currentNode.selectable = true;
                nodes.update(currentNode);
                return; // Exit early - no other nodes should be selectable
            }
        }

        // If we're here, either there's no current node or it's completed
        // If we have a current node that's completed, find all connected nodes
        if (currentSelectedNode) {
            const connectedEdges = network.getConnectedEdges(currentSelectedNode);
            connectedEdges.forEach(edgeId => {
                const edge = edges.get(edgeId);
                // Only nodes that can be reached from the current node are selectable
                if (edge.from === currentSelectedNode) {
                    const targetNode = nodes.get(edge.to);
                    if (targetNode && targetNode.state !== 'completed') {
                        targetNode.selectable = true;
                        nodes.update(targetNode);
                    }
                }
            });
        } else {
            // If no node is selected yet, make starting nodes selectable
            // Dynamically identify starting nodes
            const startingNodeIds = findStartingNodes(mapData);

            // Make all starting nodes selectable
            startingNodeIds.forEach(nodeId => {
                const node = nodes.get(nodeId);
                if (node) {
                    node.selectable = true;
                    nodes.update(node);
                }
            });
        }
    }

    // Add event for continuous dragging
    network.on("dragging", function () {
        updateCharacterPosition();
    });

    // When drag ends
    network.on("dragEnd", function () {
        updateCharacterPosition();
    });

    // Handle zoom events
    network.on("zoom", function () {
        updateCharacterPosition();
    });

    network.on("stabilizationIterationsDone", function () {
        updateCharacterPosition();
        // Update selectable nodes when the network is stabilized
        updateSelectableNodes();
    });

    // Create the node challenge modal
    function createNodeChallengeModal() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('node-challenge-modal')) {
            const modalContainer = document.createElement('div');
            modalContainer.id = 'node-challenge-modal';
            modalContainer.className = 'modal-container';
            modalContainer.style.display = 'none';

            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            // Add modal HTML structure with no reward text for non-boss nodes
            modalContent.innerHTML = `
            <div class="challenge-title">Challenge Day!</div>
            <div class="challenge-bonus">
                <div class="bonus-header">Goal:</div>
                <div class="bonus-description">Complete all habits for this node!</div>
            </div>
            <div class="time-remaining">
                <div class="time-label">Time Remaining:</div>
                <div class="time-counter" id="time-counter">03:42:18</div>
            </div>
            <div class="habits-container" id="habits-container">
                <!-- Habits will be inserted here dynamically -->
            </div>
            <div class="button-row">
                <button class="button cancel-button" id="cancel-challenge">Cancel</button>
                <button class="button accept-button" id="accept-challenge">Accept</button>
            </div>
        `;

            // Add content to container
            modalContainer.appendChild(modalContent);

            // Add modal to page
            document.body.appendChild(modalContainer);

            // Add event listeners to buttons
            document.getElementById('cancel-challenge').addEventListener('click', function () {
                hideNodeChallengeModal();
            });

            document.getElementById('accept-challenge').addEventListener('click', function () {
                acceptNodeChallenge();
            });

            // Close modal when clicking outside of content
            modalContainer.addEventListener('click', function (event) {
                if (event.target === modalContainer) {
                    hideNodeChallengeModal();
                }
            });
        }
    }

    // Create the habit completion modal
    function createHabitCompletionModal() {
        // Create modal container if it doesn't exist
        if (!document.getElementById('habit-completion-modal')) {
            const modalContainer = document.createElement('div');
            modalContainer.id = 'habit-completion-modal';
            modalContainer.className = 'modal-container';
            modalContainer.style.display = 'none';

            // Create modal content
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';

            // Add modal HTML structure with no reward text for non-boss nodes
            modalContent.innerHTML = `
            <div class="challenge-title">Complete Your Habits</div>
            <div class="challenge-bonus">
                <div class="bonus-header">Today's Goal:</div>
                <div class="bonus-description" id="habit-description">Complete all habits to continue your journey!</div>
                <div class="bonus-reward" id="habit-reward"></div>
            </div>
            <div class="time-remaining">
                <div class="time-label">Time Remaining Today:</div>
                <div class="time-counter" id="habit-time-counter">03:42:18</div>
            </div>
            <div class="habits-container" id="habit-checkboxes-container">
                <!-- Habits with checkboxes will be inserted here dynamically -->
            </div>
            <div class="button-row">
                <button class="button cancel-button" id="close-habit-modal">Close</button>
                <button class="button accept-button" id="complete-habits">Complete!</button>
            </div>
        `;

            // Add content to container
            modalContainer.appendChild(modalContent);

            // Add modal to page
            document.body.appendChild(modalContainer);

            // Add event listeners to buttons
            document.getElementById('close-habit-modal').addEventListener('click', function () {
                hideHabitCompletionModal();
            });

            document.getElementById('complete-habits').addEventListener('click', function () {
                completeAllHabits();
            });

            // Close modal when clicking outside of content
            modalContainer.addEventListener('click', function (event) {
                if (event.target === modalContainer) {
                    hideHabitCompletionModal();
                }
            });
        }
    }

    // Show the habit completion modal
    function showHabitCompletionModal(node) {
        createHabitCompletionModal();

        // Update title based on node type
        const titleElement = document.querySelector('#habit-completion-modal .challenge-title');
        if (titleElement) {
            titleElement.textContent = `${node.nodeType.charAt(0).toUpperCase() + node.nodeType.slice(1)}: ${node.displayLabel}`;

            // Set the background color of the title to match the node type color
            const nodeTypeStyle = nodeTypes[node.nodeType];
            if (nodeTypeStyle && nodeTypeStyle.color && nodeTypeStyle.color.filled) {
                titleElement.style.backgroundColor = nodeTypeStyle.color.filled;

                // Set text color to white or black based on background brightness
                const rgb = hexToRgb(nodeTypeStyle.color.filled);
                const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
                titleElement.style.color = brightness > 128 ? '#333' : '#fff';
            }
        }

        // Helper function to convert hex color to RGB
        function hexToRgb(hex) {
            // Remove the # if present
            hex = hex.replace(/^#/, '');

            // Parse the hex values
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            return { r, g, b };
        }

        // Update description based on node
        const descriptionElement = document.getElementById('habit-description');
        if (descriptionElement) {
            descriptionElement.textContent = node.description;
        }

        // Set reward text only for boss nodes
        const rewardElement = document.getElementById('habit-reward');
        if (rewardElement) {
            if (node.nodeType === 'boss') {
                rewardElement.textContent = 'Reward: Unlock a new avatar!';
                rewardElement.style.display = 'block';
            } else {
                // Hide reward text for non-boss nodes
                rewardElement.style.display = 'none';
            }
        }

        // If this node has its own deadline, use that; otherwise end-of-day
        if (node.timeLimit && node.timeLimit !== 'none') {
            const [hh, mm] = node.timeLimit.split(':').map(Number);
            const deadline = new Date();
            deadline.setHours(hh, mm, 0, 0);
            startCountdownTimer('habit-time-counter', deadline);
        } else {
            startCountdownTimer('habit-time-counter');
        }


        // Add habits with checkboxes based on node data
        const habitsContainer = document.getElementById('habit-checkboxes-container');
        if (habitsContainer) {
            habitsContainer.innerHTML = ''; // Clear previous habits

            // Add habits from the node with checkboxes
            if (node.habits && node.habits.length > 0) {
                node.habits.forEach((habit, index) => {
                    const habitElement = document.createElement('div');
                    habitElement.className = 'habit-item';

                    // Get saved checkbox state if available
                    const isChecked = habitCheckboxStates[node.id] &&
                        habitCheckboxStates[node.id][index] === true;

                    habitElement.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div style="text-align: left; flex-grow: 1; padding-right: 10px;">
                        <div class="habit-name" style="text-align: left;">${habit.name}</div>
                        <div class="habit-details" style="text-align: left;">${habit.details}</div>
                    </div>
                    <div class="habit-checkbox-container" style="flex-shrink: 0;">
                        <input type="checkbox" id="habit-${index}" class="habit-checkbox" 
                              ${isChecked ? 'checked' : ''} style="width: 25px; height: 25px;">
                    </div>
                </div>
                `;
                    habitsContainer.appendChild(habitElement);
                });
            }

            // Add event listeners to checkboxes
            const checkboxes = document.querySelectorAll('.habit-checkbox');
            checkboxes.forEach((checkbox, index) => {
                checkbox.addEventListener('change', function () {
                    // Save the checkbox state
                    handleHabitCheckboxChange(node.id, index, checkbox.checked);

                    // Get the parent habit-item container
                    const habitContainer = checkbox.closest('.habit-item');
                    if (habitContainer) {
                        // Change background color based on checked state
                        if (checkbox.checked) {
                            // Green background when checked
                            habitContainer.style.backgroundColor = '#4CAF50';
                            habitContainer.style.transition = 'background-color 0.3s ease';
                        } else {
                            // Return to default background when unchecked
                            habitContainer.style.backgroundColor = '#3a8f9d'; // Original color
                            habitContainer.style.transition = 'background-color 0.3s ease';
                        }
                    }

                    // Check if all habits are completed
                    const allChecked = Array.from(checkboxes).every(box => box.checked);
                    const completeButton = document.getElementById('complete-habits');

                    if (completeButton) {
                        completeButton.disabled = !allChecked;
                        if (allChecked) {
                            completeButton.style.backgroundColor = '#4CAF50'; // Green when all habits are checked
                            completeButton.style.cursor = 'pointer';
                            completeButton.style.opacity = '1';
                        } else {
                            completeButton.style.backgroundColor = '#cccccc'; // Grey when disabled
                            completeButton.style.cursor = 'not-allowed';
                            completeButton.style.opacity = '0.6';
                        }
                    }
                });

                // Apply the correct initial color based on checkbox state when modal opens
                const habitContainer = checkbox.closest('.habit-item');
                if (habitContainer) {
                    if (checkbox.checked) {
                        habitContainer.style.backgroundColor = '#4CAF50'; // Green when checked
                    } else {
                        habitContainer.style.backgroundColor = '#3a8f9d'; // Original color
                    }
                }
            });
        }

        // Show modal
        const modalContainer = document.getElementById('habit-completion-modal');
        if (modalContainer) {
            modalContainer.style.display = 'flex';
        }
    }

    // Hide the habit completion modal
    function hideHabitCompletionModal() {
        const modalContainer = document.getElementById('habit-completion-modal');
        if (modalContainer) {
            // Don't reset checkbox states anymore - they're saved

            // Stop the countdown timer
            stopCountdownTimer();

            // Hide the modal
            modalContainer.style.display = 'none';
        }
    }

    // Complete all habits and mark node as completed
    function completeAllHabits() {
        if (currentSelectedNode) {
            const node = nodes.get(currentSelectedNode);

            // Mark the node as completed
            node.state = 'completed';
            node.group = node.nodeType; // Use type for styling
            nodes.update(node);

            // Update any connected edges if needed
            const connectedEdges = network.getConnectedEdges(currentSelectedNode);
            connectedEdges.forEach(edgeId => {
                const edge = edges.get(edgeId);
                if (edge.state === 'traversing') {
                    edge.state = 'traversed';
                    edges.update(edge);
                }
            });

            // Clear checkbox states for this node since it's completed
            if (habitCheckboxStates[currentSelectedNode]) {
                delete habitCheckboxStates[currentSelectedNode];
                saveHabitCheckboxStates();
            }

            // Check if this was a boss node and unlock an avatar if so
            if (node.nodeType === 'boss') {
                const unlockedAvatar = unlockRandomAvatar();
                if (unlockedAvatar) {
                    // Show avatar unlocked modal after a short delay
                    setTimeout(() => {
                        showAvatarUnlockedModal(unlockedAvatar);
                    }, 1000);
                }
            }

            // Update the streak count
            updateStreak();

            // Update the map progress
            updateMapProgress();

            // Update selectable nodes for the next step
            // Now other nodes connected to this one will be selectable
            updateSelectableNodes();

            // Save the state to localStorage
            saveAllState();

            // Reset the complete button's color before hiding the modal
            const completeButton = document.getElementById('complete-habits');
            if (completeButton) {
                completeButton.style.backgroundColor = '#276F7C'; // Reset to default teal color
                completeButton.disabled = true;
            }

            // Hide the modal
            hideHabitCompletionModal();
        }
    }

    // Set initial state and load event handlers
    function initializeMap() {
        // Initialize the current node text
        updateCurrentNodeText();

        // Update selectable nodes
        updateSelectableNodes();

        // Start the animation loop
        animateSelectableNodes();
    }

    // Initialize the map when everything is loaded
    setTimeout(initializeMap, 1200); // Slight delay to ensure everything is rendered

    // Show the node challenge modal
    function showNodeChallengeModal(node) {
        createNodeChallengeModal();

        // Update title based on node type
        const titleElement = document.querySelector('.challenge-title');
        if (titleElement) {
            titleElement.textContent = `${node.nodeType.charAt(0).toUpperCase() + node.nodeType.slice(1)}: ${node.displayLabel}`;

            // Set the background color of the title to match the node type color
            const nodeTypeStyle = nodeTypes[node.nodeType];
            if (nodeTypeStyle && nodeTypeStyle.color && nodeTypeStyle.color.filled) {
                titleElement.style.backgroundColor = nodeTypeStyle.color.filled;

                // Set text color to white or black based on background brightness
                const rgb = hexToRgb(nodeTypeStyle.color.filled);
                const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
                titleElement.style.color = brightness > 128 ? '#333' : '#fff';
            }
        }

        // Helper function to convert hex color to RGB
        function hexToRgb(hex) {
            // Remove the # if present
            hex = hex.replace(/^#/, '');

            // Parse the hex values
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            return { r, g, b };
        }

        // Update description based on node
        const descriptionElement = document.querySelector('.bonus-description');
        if (descriptionElement) {
            descriptionElement.textContent = node.description;
        }

        // Remove any existing reward element
        const oldRewardElement = document.querySelector('.bonus-reward');
        if (oldRewardElement) {
            oldRewardElement.remove();
        }

        // Add reward text only for boss nodes
        if (node.nodeType === 'boss') {
            const bonusDiv = document.querySelector('.challenge-bonus');
            if (bonusDiv) {
                const rewardElement = document.createElement('div');
                rewardElement.className = 'bonus-reward';
                rewardElement.textContent = 'Reward: Unlock a new avatar!';
                bonusDiv.appendChild(rewardElement);
            }
        }

        // Add habits based on node data
        const habitsContainer = document.getElementById('habits-container');
        if (habitsContainer) {
            habitsContainer.innerHTML = ''; // Clear previous habits

            // Add habits from the node
            if (node.habits && node.habits.length > 0) {
                node.habits.forEach(habit => {
                    const habitElement = document.createElement('div');
                    habitElement.className = 'habit-item';
                    habitElement.innerHTML = `
                <div class="habit-name">${habit.name}</div>
                <div class="habit-details">${habit.details}</div>
                `;
                    habitsContainer.appendChild(habitElement);
                });
            }
        }

        // Determine which timer to start
        if (node.timeLimit && node.timeLimit !== 'none') {
            const [hh, mm] = node.timeLimit.split(':').map(Number);
            const deadline = new Date();
            deadline.setHours(hh, mm, 0, 0);
            startCountdownTimer('time-counter', deadline);
        } else {
            // fallback to end‐of‐day
            startCountdownTimer('time-counter');
        }

        // Show modal
        const modalContainer = document.getElementById('node-challenge-modal');
        if (modalContainer) {
            modalContainer.style.display = 'flex';
        }
    }

    // Hide the node challenge modal
    function hideNodeChallengeModal() {
        const modalContainer = document.getElementById('node-challenge-modal');
        if (modalContainer) {
            modalContainer.style.display = 'none';
        }
    }

    function showCompletedNodeModal(node) {
        createHabitCompletionModal(); // Reuse the same modal structure

        // Update title based on node type
        const titleElement = document.querySelector('#habit-completion-modal .challenge-title');
        if (titleElement) {
            titleElement.textContent = `${node.nodeType.charAt(0).toUpperCase() + node.nodeType.slice(1)}: ${node.displayLabel} (Completed)`;

            // Set the background color of the title to match the node type color
            const nodeTypeStyle = nodeTypes[node.nodeType];
            if (nodeTypeStyle && nodeTypeStyle.color && nodeTypeStyle.color.filled) {
                titleElement.style.backgroundColor = nodeTypeStyle.color.filled;

                // Set text color to white or black based on background brightness
                const rgb = hexToRgb(nodeTypeStyle.color.filled);
                const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
                titleElement.style.color = brightness > 128 ? '#333' : '#fff';
            }
        }

        // Helper function to convert hex color to RGB
        function hexToRgb(hex) {
            // Remove the # if present
            hex = hex.replace(/^#/, '');

            // Parse the hex values
            const bigint = parseInt(hex, 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;

            return { r, g, b };
        }

        // Update description based on node
        const descriptionElement = document.getElementById('habit-description');
        if (descriptionElement) {
            descriptionElement.textContent = node.description;
        }

        // Change the header text to indicate this is a completed node
        const bonusHeader = document.querySelector('#habit-completion-modal .bonus-header');
        if (bonusHeader) {
            bonusHeader.textContent = "Completed on:";
        }

        // Try to get the completion date if available
        const lastDate = getLastCompletionDate();
        if (descriptionElement) {
            if (lastDate) {
                descriptionElement.textContent = `You completed these habits on ${lastDate.toLocaleDateString()}.`;
            } else {
                descriptionElement.textContent = "You've already completed these habits.";
            }
        }

        // Set reward text only for boss nodes
        const rewardElement = document.getElementById('habit-reward');
        if (rewardElement) {
            if (node.nodeType === 'boss') {
                rewardElement.textContent = 'Reward: New avatar unlocked!';
                rewardElement.style.display = 'block';
            } else {
                // Hide reward text for non-boss nodes
                rewardElement.style.display = 'none';
            }
        }

        // Hide the countdown timer section as it's not relevant for completed nodes
        const timeRemainingSection = document.querySelector('#habit-completion-modal .time-remaining');
        if (timeRemainingSection) {
            timeRemainingSection.style.display = 'none';
        }

        // Add habits without checkboxes (or with disabled checked checkboxes)
        const habitsContainer = document.getElementById('habit-checkboxes-container');
        if (habitsContainer) {
            habitsContainer.innerHTML = ''; // Clear previous habits

            // Add habits from the node as completed
            if (node.habits && node.habits.length > 0) {
                node.habits.forEach((habit, index) => {
                    const habitElement = document.createElement('div');
                    habitElement.className = 'habit-item';
                    habitElement.style.backgroundColor = '#4CAF50'; // Green background to show completion

                    habitElement.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <div style="text-align: left; flex-grow: 1; padding-right: 10px;">
                            <div class="habit-name" style="text-align: left;">${habit.name}</div>
                            <div class="habit-details" style="text-align: left;">${habit.details}</div>
                        </div>
                        <div class="habit-checkbox-container" style="flex-shrink: 0;">
                            <input type="checkbox" checked disabled style="width: 25px; height: 25px; opacity: 0.7;">
                        </div>
                    </div>
                    `;
                    habitsContainer.appendChild(habitElement);
                });
            }
        }

        // Update the button row - remove the Complete button
        const buttonRow = document.querySelector('#habit-completion-modal .button-row');
        if (buttonRow) {
            // Replace the buttons with just a close button
            buttonRow.innerHTML = `
                <button class="button cancel-button" id="close-completed-modal" style="width: 100%;">Close</button>
            `;

            // Add event listener to the new close button
            const closeButton = document.getElementById('close-completed-modal');
            if (closeButton) {
                closeButton.addEventListener('click', function () {
                    hideHabitCompletionModal();
                });
            }
        }

        // Show modal
        const modalContainer = document.getElementById('habit-completion-modal');
        if (modalContainer) {
            modalContainer.style.display = 'flex';
        }
    }

    // Accept the node challenge
    function acceptNodeChallenge() {
        // Only proceed if we have a valid target node
        if (targetNodeId) {
            const node = nodes.get(targetNodeId);

            // If this is the first node selection (starting the map)
            if (!currentSelectedNode) {
                // Set the current node, mark as 'in-progress' not 'completed'
                currentSelectedNode = targetNodeId;
                node.group = 'current';
                node.state = 'in-progress'; // Using in-progress instead of current
                nodes.update(node);
            } else {
                // Current node stays as is until habits are completed

                // Update the edge between them to show the path but not fully traversed
                const connectedEdges = network.getConnectedEdges(currentSelectedNode);
                connectedEdges.forEach(edgeId => {
                    const edge = edges.get(edgeId);
                    if (edge.from === currentSelectedNode && edge.to === targetNodeId) {
                        edge.dashes = false;
                        edge.state = 'traversing'; // Using traversing instead of traversed
                        edges.update(edge);
                    }
                });

                // Update the new current node
                node.group = 'current';
                node.state = 'in-progress';
                nodes.update(node);

                // Update the current node reference
                currentSelectedNode = targetNodeId;
            }

            // Move the view to center on the new node with animation
            network.focus(targetNodeId, {
                scale: 1.0,
                animation: {
                    duration: 800,
                    easingFunction: "easeInOutQuad"
                }
            });

            // Create character if it doesn't exist, or reposition it
            setTimeout(() => {
                if (!characterImg) {
                    createCharacterImage();
                } else {
                    updateCharacterPosition();
                }
            }, 850);

            // Update the "Current Node: x" text at the bottom to show the newly selected node
            updateCurrentNodeText();

            // Update map progress
            updateMapProgress();

            // Update selectable nodes - this will only make the current node selectable
            updateSelectableNodes();

            // Save state to localStorage
            saveAllState();

            // Reset the target node
            targetNodeId = null;
        }

        // Hide the modal
        hideNodeChallengeModal();
    }

    // Update countdown timer
    function startCountdownTimer(elementId, deadline) {
        // Clear previous timer
        if (countdownTimer) clearInterval(countdownTimer);

        // Update display once and then every second
        function update() {
            const now = new Date();
            // If a specific deadline was passed, use it; else default to end of day
            const end = deadline
                ? deadline
                : (() => {
                    const eod = new Date();
                    eod.setHours(23, 59, 59, 999);
                    return eod;
                })();

            let diff = end - now;
            if (diff <= 0) {
                document.getElementById(elementId).textContent = '00:00:00';
                clearInterval(countdownTimer);
                return;
            }

            const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
            const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
            const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
            document.getElementById(elementId).textContent = `${h}:${m}:${s}`;
        }

        update();
        countdownTimer = setInterval(update, 1000);
    }

    // Function to stop countdown timer
    function stopCountdownTimer() {
        if (countdownTimer) {
            clearInterval(countdownTimer);
            countdownTimer = null;
        }
    }

    // Legacy function for backward compatibility
    function updateCountdownTimer() {
        const timeCounter = document.getElementById('time-counter');
        if (timeCounter) {
            startCountdownTimer('time-counter');
        }
    }

    // Handle node selection
    network.on('selectNode', function (params) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);

        // If this is the current node and it's in progress, show habit completion modal
        if (nodeId === currentSelectedNode && node.state === 'in-progress') {
            showHabitCompletionModal(node);
        }
        // If the node is completed, show a view-only version of the habit modal
        else if (node.state === 'completed') {
            showCompletedNodeModal(node);
        }
        // If no current node yet or we're allowed to select new nodes (current one is completed)
        else if (node.selectable) {
            // Store target node
            targetNodeId = nodeId;

            // Show node challenge modal and start the countdown timer
            showNodeChallengeModal(node);
        }

        network.unselectAll();
    });

    // Handle click outside nodes - don't update the current node text
    network.on('click', function (params) {
        if (params.nodes.length === 0) {
            // Do nothing - keep the current node text as is
        }
    });

    // Apply specific styling based on node group and state
    network.on('afterDrawing', function (ctx) {
        const nodePositions = network.getPositions();
        const allNodes = nodes.get();

        allNodes.forEach(node => {
            const pos = nodePositions[node.id];
            if (pos) {
                let typeStyle = nodeTypes[node.nodeType];
                let fillColor, strokeColor;

                // Determine styling based on node type and state
                if (node.state === 'current' || node.state === 'in-progress') {
                    if (node.state === 'in-progress') {
                        // In-progress nodes have white background with colored border
                        // but also have a yellow highlight
                        fillColor = typeStyle.color.background;
                        strokeColor = typeStyle.color.border;
                    } else {
                        // Legacy current node styling
                        fillColor = typeStyle.color.filled;
                        strokeColor = typeStyle.color.border;
                    }

                    // Draw a highlight ring around the current/in-progress node
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, (typeStyle.size / 2) + 3, 0, 2 * Math.PI, false);
                    ctx.strokeStyle = '#FFEB3B'; // Bright yellow highlight
                    ctx.lineWidth = 2;
                    ctx.stroke();
                } else if (node.state === 'completed') {
                    // Completed nodes are filled with their type color
                    fillColor = typeStyle.color.filled;
                    strokeColor = typeStyle.color.border;
                } else {
                    // Pending nodes have white background with colored border
                    fillColor = typeStyle.color.background;
                    strokeColor = typeStyle.color.border;
                }

                // Draw the node - exact same rendering as original code
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, typeStyle.size / 2, 0, 2 * Math.PI, false);
                ctx.fillStyle = fillColor;
                ctx.fill();
                ctx.lineWidth = typeStyle.borderWidth;
                ctx.strokeStyle = strokeColor;
                ctx.stroke();

                // NEW: Add highlight effect for selectable nodes
                if (node.selectable) {
                    // Draw a pulsing highlight for selectable nodes
                    const pulseTime = Date.now() * 0.001; // Use time for pulsing effect
                    const pulseScale = 1 + 0.1 * Math.sin(pulseTime * 3); // Oscillation between 0.9 and 1.1

                    // Create a glowing effect for selectable nodes
                    const pulseRadius = (typeStyle.size / 2) * pulseScale + 3;

                    // Draw outer glow
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, pulseRadius, 0, 2 * Math.PI, false);
                    const glowColor = typeStyle.color.border;

                    // Create a radial gradient for the glow effect
                    const gradient = ctx.createRadialGradient(
                        pos.x, pos.y, typeStyle.size / 2, // Inner circle (node size)
                        pos.x, pos.y, pulseRadius // Outer circle (glow size)
                    );
                    gradient.addColorStop(0, 'rgba(255, 255, 255, 0)'); // Transparent at center
                    gradient.addColorStop(0.5, `rgba(255, 255, 255, 0.2)`); // Semi-transparent white
                    gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Transparent at edge

                    ctx.strokeStyle = glowColor;
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Fill with gradient
                    ctx.fillStyle = gradient;
                    ctx.fill();

                    // Add white dots around the selectable node (like sparkles)
                    const dotCount = 5;
                    const dotRadius = 2;
                    for (let i = 0; i < dotCount; i++) {
                        const angle = (pulseTime * 2 + (i / dotCount) * Math.PI * 2) % (Math.PI * 2);
                        const dotDistance = pulseRadius + 2;
                        const dotX = pos.x + Math.cos(angle) * dotDistance;
                        const dotY = pos.y + Math.sin(angle) * dotDistance;

                        ctx.beginPath();
                        ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI, false);
                        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                        ctx.fill();
                    }
                }
            }
        });
    });

    // Force redraw every frame to animate the pulsing effect
    function animateSelectableNodes() {
        network.redraw();
        requestAnimationFrame(animateSelectableNodes);
    }

    // Start the animation loop
    animateSelectableNodes();

    // Create a tooltip element for node descriptions
    let tooltipDiv = document.createElement('div');
    tooltipDiv.id = 'node-tooltip';
    tooltipDiv.style.position = 'absolute';
    tooltipDiv.style.backgroundColor = 'rgba(37, 123, 138, 0.9)';
    tooltipDiv.style.color = 'white';
    tooltipDiv.style.padding = '10px';
    tooltipDiv.style.borderRadius = '5px';
    tooltipDiv.style.zIndex = '1000';
    tooltipDiv.style.display = 'none';
    tooltipDiv.style.maxWidth = '250px';
    tooltipDiv.style.pointerEvents = 'none'; // Allow clicks to pass through
    container.appendChild(tooltipDiv);

    // Show tooltip on hover
    network.on("hoverNode", function (params) {
        const nodeId = params.node;
        const node = nodes.get(nodeId);

        if (node) {
            // Get node position and convert to DOM coordinates
            const position = network.getPositions([nodeId])[nodeId];
            const canvasPos = network.canvasToDOM(position);

            // Create tooltip content
            let tooltipContent = `<strong>${node.displayLabel}</strong><br>${node.description}`;

            // Add habits to tooltip
            if (node.habits && node.habits.length > 0) {
                tooltipContent += '<br><br><strong>Habits:</strong>';
                node.habits.forEach(habit => {
                    tooltipContent += `<br>• ${habit.name}: ${habit.details}`;
                });
            }

            // Add reward info only for boss nodes
            if (node.nodeType === 'boss') {
                tooltipContent += '<br><br><strong>Reward:</strong> Unlock a new avatar!';
            }

            // Indicate if the node is selectable
            if (node.selectable) {
                tooltipContent += '<br><br><strong>✓ Available to select</strong>';
            }

            // Update tooltip content and position
            tooltipDiv.innerHTML = tooltipContent;
            tooltipDiv.style.left = (canvasPos.x + 40) + 'px';
            tooltipDiv.style.top = (canvasPos.y - 30) + 'px';
            tooltipDiv.style.display = 'block';
        }
    });

    // Hide tooltip when not hovering
    network.on("blurNode", function () {
        tooltipDiv.style.display = 'none';
    });

    // Update map progress based on completed nodes in the 7-day path
    function updateMapProgress() {
        // For a weekly habit tracker, the total path is 7 nodes (days) long
        const TOTAL_DAYS_IN_JOURNEY = 7;

        // Count completed nodes that are on the user's path
        const completedNodes = nodes.get().filter(node => node.state === 'completed').length;

        // Calculate progress percentage based on a 7-day journey
        // Cap at 100% in case there are more than 7 completed nodes
        let progressPercentage = Math.min(
            Math.round((completedNodes / TOTAL_DAYS_IN_JOURNEY) * 100),
            100
        );

        updateProgressDisplay(progressPercentage);
    }

    // Update the progress display
    function updateProgressDisplay(percentage) {
        // Update progress bar and percentage text
        const progressBar = document.querySelector('.progress-bar');
        const percentageText = document.querySelector('.percentage');

        if (progressBar && percentageText) {
            progressBar.style.width = percentage + '%';
            percentageText.textContent = percentage + '%';
        }
    }

    // Function to find the shortest path length using BFS
    function findShortestPath(graph, startNodeId, endNodeId) {
        // If start and end are the same, return 0
        if (startNodeId === endNodeId) return 0;

        // If startNode has no outgoing edges in our graph
        if (!graph[startNodeId]) return Infinity;

        // BFS to find shortest path
        const queue = [{ node: startNodeId, distance: 0 }];
        const visited = new Set([startNodeId]);

        while (queue.length > 0) {
            const { node, distance } = queue.shift();

            // Get all neighbors
            const neighbors = graph[node] || [];

            for (const neighbor of neighbors) {
                if (neighbor === endNodeId) {
                    return distance + 1; // Found the end node
                }

                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push({ node: neighbor, distance: distance + 1 });
                }
            }
        }

        return Infinity; // No path found
    }

    // Add info tooltip at the bottom of the map
    const infoTooltip = document.createElement('div');
    infoTooltip.id = 'map-tooltip';
    infoTooltip.innerHTML = 'Click and drag to move the map<br>Pinch or scroll to zoom';
    infoTooltip.style.position = 'absolute';
    infoTooltip.style.bottom = '10px';
    infoTooltip.style.left = '50%';
    infoTooltip.style.transform = 'translateX(-50%)';
    infoTooltip.style.backgroundColor = 'rgba(0,0,0,0.6)';
    infoTooltip.style.color = 'white';
    infoTooltip.style.padding = '5px 10px';
    infoTooltip.style.borderRadius = '5px';
    infoTooltip.style.fontSize = '12px';
    infoTooltip.style.zIndex = '100';
    infoTooltip.style.pointerEvents = 'none';
    container.appendChild(infoTooltip);

    // Hide the tooltip after a delay
    setTimeout(() => {
        infoTooltip.style.opacity = '0';
        infoTooltip.style.transition = 'opacity 1s ease-out';
        setTimeout(() => {
            infoTooltip.remove();
        }, 1000);
    }, 4000);

    // Add a function to clear the saved data (for debugging/testing)
    window.clearFishboneData = function () {
        Object.values(STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        console.log("All Fishbone data cleared from localStorage.");
        // Reload the page to start fresh
        window.location.reload();
    };

    // Function to import map data from a JSON file
    window.importMapData = function (jsonData) {
        try {
            // Parse the JSON if it's a string
            const data = typeof jsonData === 'string' ? JSON.parse(jsonData) : jsonData;

            // Validate the data has the required structure
            if (!data.nodes || !data.edges) {
                throw new Error("Invalid map data: missing nodes or edges");
            }

            // Save the map data to localStorage
            saveMapData(data);

            // Clear other saved state since we're using a new map
            localStorage.removeItem(STORAGE_KEYS.CURRENT_NODE);
            localStorage.removeItem(STORAGE_KEYS.NODE_STATES);
            localStorage.removeItem(STORAGE_KEYS.EDGE_STATES);
            localStorage.removeItem(STORAGE_KEYS.HABIT_CHECKBOXES);

            console.log("Map data imported successfully. Reloading page...");
            // Reload the page to use the new map data
            window.location.reload();
        } catch (error) {
            console.error("Error importing map data:", error);
            alert("Error importing map data: " + error.message);
        }
    };

    // Add a reset button to the top section
    const newMapButton = document.querySelector('.new-map-button');
    if (newMapButton) {
        newMapButton.addEventListener('click', function () {
            // If we already have a map, confirm before resetting
            if (localStorage.getItem(STORAGE_KEYS.MAP_DATA)) {
                if (confirm("Are you sure you want to reset your progress and start a new map? This will reset your streak to 0 if you have not completed the boss node.")) {
                    showMapSelectionModal();
                }
            } else {
                // If no map exists yet, just show the selection modal without confirmation
                showMapSelectionModal();
            }
        });
    }

    // Initialize progress and selectable nodes
    updateMapProgress();
    updateSelectableNodes();
});