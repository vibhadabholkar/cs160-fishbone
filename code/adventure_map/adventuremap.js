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
        label: "" // We'll display labels in tooltips instead of on the nodes
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

    // Configuration options for the network
    const options = {
        nodes: {
            shape: 'circle',
            borderWidth: 2,
            shadow: false,
            font: {
                size: 0 // Hide labels
            }
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

    // Set initial zoom level and position to show the map
    network.once("afterDrawing", function () {
        network.fit({
            animation: {
                duration: 1000,
                easingFunction: "easeInOutQuad"
            }
        });
        // After initial fitting, apply a zoom level
        setTimeout(() => {
            network.moveTo({
                scale: 0.8, // Adjust as needed
                animation: {
                    duration: 1000,
                    easingFunction: "easeInOutQuad"
                }
            });
        }, 1100);
    });

    // Variable to keep track of currently selected node
    let currentSelectedNode = null; // No node selected initially
    let characterImg = null;
    let targetNodeId = null; // For handling node selection and challenge acceptance

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

    // NEW FUNCTION: Update the selectable property for nodes based on the current node
    function updateSelectableNodes() {
        // First, reset all nodes to not selectable
        const allNodes = nodes.get();
        allNodes.forEach(node => {
            node.selectable = false;
        });
        nodes.update(allNodes);

        // If we have a current node, find all nodes that are directly connected
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

    // Show the node challenge modal
    function showNodeChallengeModal(node) {
        createNodeChallengeModal();

        // Update title based on node type
        const titleElement = document.querySelector('.challenge-title');
        titleElement.textContent = `${node.nodeType.charAt(0).toUpperCase() + node.nodeType.slice(1)}: ${node.label}`;

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

        // Set countdown timer
        updateCountdownTimer();

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
                // Just set the current node, don't mark anything as completed
                currentSelectedNode = targetNodeId;
                node.group = 'current';
                node.state = 'current';
                nodes.update(node);
            } else {
                // Update previous current node
                const prevCurrentNode = nodes.get(currentSelectedNode);
                prevCurrentNode.group = prevCurrentNode.nodeType;
                prevCurrentNode.state = 'completed';
                nodes.update(prevCurrentNode);

                // Update the new current node
                node.group = 'current';
                node.state = 'current';
                nodes.update(node);

                // Update the edge between them to traversed
                const connectedEdges = network.getConnectedEdges(currentSelectedNode);
                connectedEdges.forEach(edgeId => {
                    const edge = edges.get(edgeId);
                    if (edge.from === currentSelectedNode && edge.to === targetNodeId) {
                        edge.dashes = false;
                        edge.state = 'traversed';
                        edges.update(edge);
                    }
                });

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

            // Update map progress
            updateMapProgress();

            // Update selectable nodes
            updateSelectableNodes();

            // Reset the target node
            targetNodeId = null;
        }

        // Hide the modal
        hideNodeChallengeModal();
    }

    // Update countdown timer
    function updateCountdownTimer() {
        // In a real app, this would calculate the actual remaining time
        // For now, we'll just set a static time
        const timeCounter = document.getElementById('time-counter');
        if (timeCounter) {
            timeCounter.textContent = '03:42:18';
        }
    }

    // Handle node selection
    network.on('selectNode', function (params) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);

        // Update the selected node text
        const selectedNodeText = document.getElementById('selected-node');
        selectedNodeText.textContent = node.label;

        // Only proceed if the node is selectable
        if (node.selectable) {
            // Store target node
            targetNodeId = nodeId;

            // Show modal for the node
            showNodeChallengeModal(node);
        }

        network.unselectAll();
    });

    // Handle click outside nodes to deselect
    network.on('click', function (params) {
        if (params.nodes.length === 0) {
            // Clear selection
            const selectedNodeText = document.getElementById('selected-node');
            selectedNodeText.textContent = 'None Selected';
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
                if (node.state === 'current') {
                    // Current node is filled with its type color with a subtle highlight
                    fillColor = typeStyle.color.filled;
                    strokeColor = typeStyle.color.border;

                    // Draw a highlight ring around the current node
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

                // Draw the node
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
            let tooltipContent = `<strong>${node.label}</strong><br>${node.description}`;

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

    // Update map progress based on distance remaining to the boss node
    function updateMapProgress() {
        // If no node is selected, progress is 0%
        if (!currentSelectedNode) {
            updateProgressDisplay(0);
            return;
        }

        // Create an adjacency list from the edges for pathfinding
        const graph = {};
        edges.get().forEach(edge => {
            if (!graph[edge.from]) {
                graph[edge.from] = [];
            }
            graph[edge.from].push(edge.to);
        });

        // Find the boss node
        const bossNode = nodes.get({
            filter: function (node) {
                return node.nodeType === 'boss';
            }
        })[0];

        if (!bossNode) return; // If no boss node found
        const bossNodeId = bossNode.id;

        // Calculate the shortest path from current node to boss
        const stepsRemaining = findShortestPath(graph, currentSelectedNode, bossNodeId);

        // Calculate the shortest path from a starting node to boss (total journey length)
        // Using node 1 as a reference starting point
        const totalSteps = findShortestPath(graph, 1, bossNodeId);

        // Calculate steps taken, accounting for being at the first node
        // If we're at a starting node (1 or 2), count it as 1 step taken
        let stepsTaken;
        const isAtStartingNode = currentSelectedNode === 1 || currentSelectedNode === 2;

        if (isAtStartingNode) {
            // At starting node, we've completed 1 step (the selection of the starting node)
            stepsTaken = 1;
        } else {
            // For other nodes, calculate based on remaining distance
            stepsTaken = totalSteps - stepsRemaining + 1; // +1 to count the initial step
        }

        // Calculate progress percentage
        let progressPercentage = 0;
        if (totalSteps > 0) {
            // Calculate percentage including the starting node
            progressPercentage = Math.round((stepsTaken / (totalSteps + 1)) * 100);
        }

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

    // Initialize progress and selectable nodes
    updateMapProgress();
    updateSelectableNodes();
});