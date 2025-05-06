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

    // The new Slay the Spire style map data
    const mapData = {
        "nodes": [
            {
                "id": 1,
                "label": "Path Beginning",
                "nodeType": "standard",
                "state": "pending",
                "x": -200,
                "y": 500,
                "description": "Begin your week of habit building.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 2,
                "label": "New Journey",
                "nodeType": "standard",
                "state": "pending",
                "x": 185,
                "y": 500,
                "description": "The start of a new week of healthy habits.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 3,
                "label": "Mind Focus",
                "nodeType": "standard",
                "state": "pending",
                "x": -290,
                "y": 410,
                "description": "Concentrate on clearing your mind through meditation.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 4,
                "label": "Running Day",
                "nodeType": "challenge",
                "state": "pending",
                "x": -115,
                "y": 425,
                "description": "Time for your weekly run! Push yourself a little today.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Running", "details": "3 miles • Afternoon" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 5,
                "label": "Reading Focus",
                "nodeType": "standard",
                "state": "pending",
                "x": 65,
                "y": 405,
                "description": "A day to focus on deepening your reading habit.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "45 minutes • Evening" }
                ]
            },
            {
                "id": 6,
                "label": "Mindful Movement",
                "nodeType": "challenge",
                "state": "pending",
                "x": 240,
                "y": 420,
                "description": "Combine mindfulness with physical activity today.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Running", "details": "3 miles • Afternoon" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 7,
                "label": "Growth Day",
                "nodeType": "event",
                "state": "pending",
                "x": -350,
                "y": 320,
                "description": "Today your habits will help you grow in unexpected ways.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 8,
                "label": "Rest Period",
                "nodeType": "rest",
                "state": "pending",
                "x": -235,
                "y": 340,
                "description": "A day to take it easier while maintaining your habits.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "20 minutes • Evening" }
                ]
            },
            {
                "id": 9,
                "label": "Consistency Check",
                "nodeType": "standard",
                "state": "pending",
                "x": -70,
                "y": 325,
                "description": "Focus on performing your habits at the same time each day.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 10,
                "label": "Running Day",
                "nodeType": "challenge",
                "state": "pending",
                "x": 120,
                "y": 315,
                "description": "Your second run of the week. Find your rhythm.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Running", "details": "3 miles • Afternoon" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 11,
                "label": "Reflection Point",
                "nodeType": "event",
                "state": "pending",
                "x": 300,
                "y": 340,
                "description": "Take time to reflect on how your habits are affecting you.",
                "habits": [
                    { "name": "Meditation", "details": "15 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 12,
                "label": "Milestone Day",
                "nodeType": "event",
                "state": "pending",
                "x": -290,
                "y": 240,
                "description": "Celebrate your consistency this week!",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 13,
                "label": "Challenge Yourself",
                "nodeType": "challenge",
                "state": "pending",
                "x": -145,
                "y": 245,
                "description": "Push a little harder with your habits today.",
                "habits": [
                    { "name": "Meditation", "details": "15 minutes • Morning" },
                    { "name": "Reading", "details": "45 minutes • Evening" }
                ]
            },
            {
                "id": 14,
                "label": "Running Day",
                "nodeType": "challenge",
                "state": "pending",
                "x": 105,
                "y": 225,
                "description": "Final run of the week. Make it count!",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Running", "details": "3 miles • Afternoon" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 15,
                "label": "Recovery Focus",
                "nodeType": "rest",
                "state": "pending",
                "x": 240,
                "y": 240,
                "description": "A day to focus on recovery and rejuvenation.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 16,
                "label": "Mindfulness Peak",
                "nodeType": "event",
                "state": "pending",
                "x": -220,
                "y": 140,
                "description": "Your meditation practice is deepening nicely.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 17,
                "label": "Knowledge Builder",
                "nodeType": "standard",
                "state": "pending",
                "x": -15,
                "y": 130,
                "description": "Your reading habit is building a foundation of knowledge.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 18,
                "label": "Physical Progress",
                "nodeType": "event",
                "state": "pending",
                "x": 180,
                "y": 150,
                "description": "Notice the improvements in your physical wellbeing from running.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 19,
                "label": "Integration Day",
                "nodeType": "challenge",
                "state": "pending",
                "x": -130,
                "y": 50,
                "description": "Feel how your habits work together to improve your life.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 20,
                "label": "Final Preparation",
                "nodeType": "rest",
                "state": "pending",
                "x": 100,
                "y": 60,
                "description": "Prepare yourself for the final challenge of the week.",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            },
            {
                "id": 21,
                "label": "Weekly Summit",
                "nodeType": "boss",
                "state": "pending",
                "x": 0,
                "y": -50,
                "description": "Complete your entire week of habits. Celebrate your consistency and growth!",
                "habits": [
                    { "name": "Meditation", "details": "10 minutes • Morning" },
                    { "name": "Running", "details": "3 miles • Afternoon" },
                    { "name": "Reading", "details": "30 minutes • Evening" }
                ]
            }
        ],
        "edges": [
            { "from": 1, "to": 3, "state": "pending" },
            { "from": 1, "to": 4, "state": "pending" },
            { "from": 2, "to": 5, "state": "pending" },
            { "from": 2, "to": 6, "state": "pending" },

            { "from": 3, "to": 7, "state": "pending" },
            { "from": 3, "to": 8, "state": "pending" },
            { "from": 4, "to": 8, "state": "pending" },
            { "from": 4, "to": 9, "state": "pending" },
            { "from": 5, "to": 9, "state": "pending" },
            { "from": 5, "to": 10, "state": "pending" },
            { "from": 5, "to": 11, "state": "pending" },
            { "from": 6, "to": 10, "state": "pending" },
            { "from": 6, "to": 11, "state": "pending" },

            { "from": 7, "to": 12, "state": "pending" },
            { "from": 8, "to": 12, "state": "pending" },
            { "from": 8, "to": 13, "state": "pending" },
            { "from": 9, "to": 13, "state": "pending" },
            { "from": 10, "to": 14, "state": "pending" },
            { "from": 11, "to": 14, "state": "pending" },
            { "from": 11, "to": 15, "state": "pending" },

            { "from": 12, "to": 16, "state": "pending" },
            { "from": 13, "to": 16, "state": "pending" },
            { "from": 13, "to": 17, "state": "pending" },
            { "from": 14, "to": 17, "state": "pending" },
            { "from": 14, "to": 18, "state": "pending" },
            { "from": 15, "to": 18, "state": "pending" },

            { "from": 16, "to": 19, "state": "pending" },
            { "from": 17, "to": 19, "state": "pending" },
            { "from": 17, "to": 20, "state": "pending" },
            { "from": 18, "to": 20, "state": "pending" },

            { "from": 19, "to": 21, "state": "pending" },
            { "from": 20, "to": 21, "state": "pending" }
        ]
    };

    // Storage keys for persistence
    const STORAGE_KEYS = {
        CURRENT_NODE: 'fishbone_current_node',
        NODE_STATES: 'fishbone_node_states',
        EDGE_STATES: 'fishbone_edge_states',
        HABIT_CHECKBOXES: 'fishbone_habit_checkboxes',
        MAP_DATA: 'fishbone_map_data',
        STREAK_COUNT: 'fishbone_streak_count',
        LAST_COMPLETION_DATE: 'fishbone_last_completion_date'
    };

    // Function to save map data to localStorage (for LLM generated maps)
    function saveMapData(data) {
        localStorage.setItem(STORAGE_KEYS.MAP_DATA, JSON.stringify(data));
    }

    // Function to load map data from localStorage
    function loadMapData() {
        const savedData = localStorage.getItem(STORAGE_KEYS.MAP_DATA);
        return savedData ? JSON.parse(savedData) : null;
    }

    // Check if we have a custom map saved
    const savedMapData = loadMapData();
    // If we have a saved custom map, use it instead of the default
    if (savedMapData) {
        // Use the saved map data
        mapData.nodes = savedMapData.nodes;
        mapData.edges = savedMapData.edges;
    }

    // Update the page title with the map title
    const headerElement = document.querySelector('#header h2');
    if (headerElement) {
        headerElement.textContent = "Weekly Habit Adventure";
    }

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

    // Create vis.js DataSets
    const nodes = new vis.DataSet(processedNodes);
    const edges = new vis.DataSet(processedEdges);

    // Create the network data object
    const data = {
        nodes: nodes,
        edges: edges
    };

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

        // Fit the view
        network.fit({
            animation: {
                duration: 1000,
                easingFunction: "easeInOutQuad"
            }
        });

        // After initial fitting, apply a zoom level
        setTimeout(() => {
            // If we have a current node, focus on it
            if (currentSelectedNode) {
                network.focus(currentSelectedNode, {
                    scale: 0.8,
                    animation: {
                        duration: 1000,
                        easingFunction: "easeInOutQuad"
                    }
                });
            } else {
                // Otherwise just set a general zoom level
                network.moveTo({
                    scale: 0.8, // Adjust as needed
                    animation: {
                        duration: 1000,
                        easingFunction: "easeInOutQuad"
                    }
                });
            }

            // Create character image if there's a current node
            if (currentSelectedNode) {
                setTimeout(createCharacterImage, 1100);
            }

            // Initialize the current node text display
            updateCurrentNodeText();

            // Update selectable nodes based on current state
            updateSelectableNodes();

            // Update map progress
            updateMapProgress();
        }, 1100);
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
        characterImg.src = '../img/Fishbone Default Green.png'; // Path to the Fishbone character image
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

                // Include nodeType and label with a dash separator
                const nodeTypeCapitalized = currentNode.nodeType.charAt(0).toUpperCase() + currentNode.nodeType.slice(1);
                const labelText = currentNode.displayLabel || "Unknown"; // Use the displayLabel property we added

                // Create the display text
                const displayText = `${nodeTypeCapitalized} - ${labelText}`;
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
            const startingNodes = [1, 2]; // IDs of the starting nodes
            startingNodes.forEach(nodeId => {
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

            // Add modal HTML structure
            modalContent.innerHTML = `
                <div class="challenge-title">Challenge Day!</div>
                <div class="challenge-bonus">
                    <div class="bonus-header">Challenge Bonus:</div>
                    <div class="bonus-description">Complete all habits before noon (12:00pm)!</div>
                    <div class="bonus-reward">Reward: New Fish Outfit</div>
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

            // Add modal HTML structure
            modalContent.innerHTML = `
                <div class="challenge-title">Complete Your Habits</div>
                <div class="challenge-bonus">
                    <div class="bonus-header">Today's Challenge:</div>
                    <div class="bonus-description" id="habit-description">Complete all habits to continue your journey!</div>
                    <div class="bonus-reward" id="habit-reward">Reward: Progress on your map</div>
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
                    <button class="button accept-button" id="complete-habits">Complete All</button>
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
        descriptionElement.textContent = node.description;

        // Set reward based on node type
        const rewardElement = document.getElementById('habit-reward');
        let reward = "Progress on your map";
        switch (node.nodeType) {
            case 'challenge':
                reward = "Double XP Bonus";
                break;
            case 'event':
                reward = "Special Decoration";
                break;
            case 'rest':
                reward = "Energy Refill";
                break;
            case 'boss':
                reward = "Rare Fish Outfit";
                break;
            default:
                reward = "New Fish Outfit";
        }
        rewardElement.textContent = `Reward: ${reward}`;

        // Start a live countdown timer
        startCountdownTimer('habit-time-counter');

        // Add habits with checkboxes based on node data
        const habitsContainer = document.getElementById('habit-checkboxes-container');
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
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div class="habit-name">${habit.name}</div>
                            <div class="habit-details">${habit.details}</div>
                        </div>
                        <div class="habit-checkbox-container">
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

                // Check if all habits are completed
                const allChecked = Array.from(checkboxes).every(box => box.checked);
                const completeButton = document.getElementById('complete-habits');

                if (completeButton) {
                    completeButton.disabled = !allChecked;
                    if (allChecked) {
                        completeButton.style.backgroundColor = '#4CAF50'; // Green when all habits are checked
                    } else {
                        completeButton.style.backgroundColor = '#276F7C'; // Default color
                    }
                }
            });
        });

        // Initially check if all checkboxes are already checked
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        const completeButton = document.getElementById('complete-habits');
        if (completeButton) {
            completeButton.disabled = !allChecked;
            if (allChecked) {
                completeButton.style.backgroundColor = '#4CAF50'; // Green when all habits are checked
            } else {
                completeButton.style.backgroundColor = '#276F7C'; // Default color
            }
        }

        // Show modal
        const modalContainer = document.getElementById('habit-completion-modal');
        modalContainer.style.display = 'flex';
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
        descriptionElement.textContent = node.description;

        // Set reward based on node type
        const rewardElement = document.querySelector('.bonus-reward');
        let reward = "New Fish Outfit";
        switch (node.nodeType) {
            case 'challenge':
                reward = "Double XP Bonus";
                break;
            case 'event':
                reward = "Special Decoration";
                break;
            case 'rest':
                reward = "Energy Refill";
                break;
            case 'boss':
                reward = "Rare Fish Outfit";
                break;
            default:
                reward = "New Fish Outfit";
        }
        rewardElement.textContent = `Reward: ${reward}`;

        // Add habits based on node data
        const habitsContainer = document.getElementById('habits-container');
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

        // Start a live countdown timer
        startCountdownTimer('time-counter');

        // Show modal
        const modalContainer = document.getElementById('node-challenge-modal');
        modalContainer.style.display = 'flex';
    }

    // Hide the node challenge modal
    function hideNodeChallengeModal() {
        const modalContainer = document.getElementById('node-challenge-modal');
        if (modalContainer) {
            modalContainer.style.display = 'none';
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
    function startCountdownTimer(elementId) {
        // Clear any existing timer
        if (countdownTimer) {
            clearInterval(countdownTimer);
        }

        // Function to update the countdown display
        const updateTimeDisplay = () => {
            const timeCounter = document.getElementById(elementId);
            if (!timeCounter) {
                clearInterval(countdownTimer);
                return;
            }

            const now = new Date();
            const endOfDay = new Date();
            endOfDay.setHours(23, 59, 59, 999);
            const timeRemaining = endOfDay - now;

            // If it's past midnight, stop the timer
            if (timeRemaining <= 0) {
                timeCounter.textContent = '00:00:00';
                clearInterval(countdownTimer);
                return;
            }

            const hours = Math.floor(timeRemaining / 3600000).toString().padStart(2, '0');
            const minutes = Math.floor((timeRemaining % 3600000) / 60000).toString().padStart(2, '0');
            const seconds = Math.floor((timeRemaining % 60000) / 1000).toString().padStart(2, '0');

            timeCounter.textContent = `${hours}:${minutes}:${seconds}`;
        };

        // Update immediately then set interval
        updateTimeDisplay();
        countdownTimer = setInterval(updateTimeDisplay, 1000);

        return countdownTimer;
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
    tooltipDiv.style.backgroundColor = 'rgba(39, 111, 124, 0.9)';
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
            if (confirm("Are you sure you want to reset your progress and start a new map?")) {
                window.clearFishboneData();
            }
        });
    }

    // Initialize progress and selectable nodes
    updateMapProgress();
    updateSelectableNodes();
});