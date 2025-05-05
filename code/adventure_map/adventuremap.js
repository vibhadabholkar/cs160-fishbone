// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
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
    
    // The new JSON data for the habit tracker adventure map
    const mapData = {
        "nodes": [
            // Level 1 (Starting Point)
            {
                "id": 1,
                "label": "First Step",
                "nodeType": "standard",
                "state": "current",
                "x": 0,
                "y": 400,
                "description": "Your journey of self-improvement begins. Morning meditation, regular runs, and evening reading await."
            },
            
            // Level 2
            {
                "id": 2,
                "label": "Morning Clarity",
                "nodeType": "standard", 
                "state": "pending",
                "x": -200,
                "y": 330,
                "description": "The first week of morning meditation brings mental clarity. 7 consecutive days of mindfulness."
            },
            {
                "id": 3,
                "label": "First Miles",
                "nodeType": "challenge",
                "state": "pending",
                "x": 0, 
                "y": 330,
                "description": "Complete your habits before noon today!"
            },
            {
                "id": 4,
                "label": "Reading Ritual",
                "nodeType": "standard",
                "state": "pending",
                "x": 200,
                "y": 330,
                "description": "Establish your evening reading ritual. 7 consecutive days of reading for 30 minutes."
            },
            
            // Level 3
            {
                "id": 5,
                "label": "Mind Garden",
                "nodeType": "event",
                "state": "pending",
                "x": -275,
                "y": 260,
                "description": "Two weeks of consistent meditation. Your mind feels like a garden being tended daily."
            },
            {
                "id": 6,
                "label": "Breath Control",
                "nodeType": "standard",
                "state": "pending",
                "x": -125,
                "y": 260,
                "description": "Your breathing techniques improve during meditation, helping you maintain focus for the full 10 minutes."
            },
            {
                "id": 7,
                "label": "Runner's Zone",
                "nodeType": "challenge",
                "state": "pending",
                "x": 50,
                "y": 260,
                "description": "You've found your running rhythm. Complete 3 runs at a slightly faster pace than before."
            },
            {
                "id": 8,
                "label": "Story World",
                "nodeType": "event",
                "state": "pending",
                "x": 175,
                "y": 260,
                "description": "You've finished your first book! The stories now live in your imagination."
            },
            {
                "id": 9,
                "label": "Knowledge Rest",
                "nodeType": "rest",
                "state": "pending",
                "x": 275,
                "y": 260,
                "description": "Take time to reflect on what you've read. Let the knowledge settle before moving forward."
            },
            
            // Level 4
            {
                "id": 10,
                "label": "Mindfulness Moment",
                "nodeType": "rest",
                "state": "pending",
                "x": -225,
                "y": 190,
                "description": "A peaceful plateau in your meditation journey. Enjoy the calm as your habit solidifies."
            },
            {
                "id": 11,
                "label": "Body Challenge",
                "nodeType": "challenge",
                "state": "pending",
                "x": -75,
                "y": 190,
                "description": "Push yourself to run 4 miles once this week in addition to your regular runs."
            },
            {
                "id": 12,
                "label": "Knowledge Bridge",
                "nodeType": "standard",
                "state": "pending",
                "x": 75,
                "y": 190,
                "description": "Connect ideas between different books you've read. Your reading habit is building a network of knowledge."
            },
            {
                "id": 13,
                "label": "Genre Explorer",
                "nodeType": "event",
                "state": "pending",
                "x": 225,
                "y": 190,
                "description": "Try reading a different genre than usual. Expand your literary horizons."
            },
            
            // Level 5
            {
                "id": 14,
                "label": "Inner Sanctuary",
                "nodeType": "event",
                "state": "pending",
                "x": -150,
                "y": 120,
                "description": "One month of meditation has created a sanctuary within your mind you can access anytime."
            },
            {
                "id": 15,
                "label": "Endurance Peak",
                "nodeType": "challenge",
                "state": "pending",
                "x": 0,
                "y": 120,
                "description": "Complete all three weekly runs without stopping. Your endurance has reached new heights."
            },
            {
                "id": 16,
                "label": "Wisdom Collection",
                "nodeType": "standard",
                "state": "pending",
                "x": 150,
                "y": 120,
                "description": "You've read consistently for a month. The wisdom from these books is becoming part of who you are."
            },
            
            // Level 6
            {
                "id": 17,
                "label": "Mind-Body Connection",
                "nodeType": "challenge",
                "state": "pending",
                "x": -100,
                "y": 50,
                "description": "Try mindful running - applying meditation techniques during your run. Feel the synergy between habits."
            },
            {
                "id": 18,
                "label": "Reflective Reader",
                "nodeType": "rest",
                "state": "pending",
                "x": 100,
                "y": 50,
                "description": "After reading, meditate on the ideas encountered. Your habits are intertwining."
            },
            
            // Level 7 (Boss)
            {
                "id": 19,
                "label": "Habit Harmony",
                "nodeType": "boss",
                "state": "pending",
                "x": 0,
                "y": -20,
                "description": "You've integrated meditation, running, and reading into your life. These aren't just activities anymore - they're part of your identity."
            }
        ],
        "edges": [
            // Connections from Level 1 to Level 2
            { "from": 1, "to": 2, "state": "pending" },
            { "from": 1, "to": 3, "state": "pending" },
            { "from": 1, "to": 4, "state": "pending" },
            
            // Connections from Level 2 to Level 3
            { "from": 2, "to": 5, "state": "pending" },
            { "from": 2, "to": 6, "state": "pending" },
            { "from": 3, "to": 7, "state": "pending" },
            { "from": 4, "to": 8, "state": "pending" },
            { "from": 4, "to": 9, "state": "pending" },
            
            // Connections from Level 3 to Level 4
            { "from": 5, "to": 10, "state": "pending" },
            { "from": 6, "to": 10, "state": "pending" },
            { "from": 6, "to": 11, "state": "pending" },
            { "from": 7, "to": 11, "state": "pending" },
            { "from": 8, "to": 12, "state": "pending" },
            { "from": 9, "to": 13, "state": "pending" },
            
            // Connections from Level 4 to Level 5
            { "from": 10, "to": 14, "state": "pending" },
            { "from": 11, "to": 15, "state": "pending" },
            { "from": 12, "to": 15, "state": "pending" },
            { "from": 12, "to": 16, "state": "pending" },
            { "from": 13, "to": 16, "state": "pending" },
            
            // Connections from Level 5 to Level 6
            { "from": 14, "to": 17, "state": "pending" },
            { "from": 15, "to": 17, "state": "pending" },
            { "from": 15, "to": 18, "state": "pending" },
            { "from": 16, "to": 18, "state": "pending" },
            
            // Connections from Level 6 to Level 7 (Boss)
            { "from": 17, "to": 19, "state": "pending" },
            { "from": 18, "to": 19, "state": "pending" }
        ]
    };
    
    // Update the page title with the map title
    if (mapData.mapTitle) {
        const headerElement = document.querySelector('#header h2');
        if (headerElement) {
            headerElement.textContent = mapData.mapTitle;
        }
    }
    
    // Process nodes to add group property based on nodeType
    const processedNodes = mapData.nodes.map(node => ({
        ...node,
        group: node.state === 'current' ? 'current' : node.nodeType,
        label: "" // We'll display labels in tooltips instead of on the nodes
    }));
    
    // Process edges to add dashes property and ID
    const processedEdges = mapData.edges.map(edge => ({
        ...edge,
        id: `e${edge.from}-${edge.to}`,
        dashes: edge.state === 'traversed' ? false : [5, 5]
    }));
    
    // Create vis.js DataSets
    const nodes = new vis.DataSet(processedNodes);
    const edges = new vis.DataSet(processedEdges);
    
    // Create the network data object
    const data = {
        nodes: nodes,
        edges: edges
    };
    
    // Configuration options for the network, enabling dragging
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
            smooth: false,
            selectionWidth: 0 // Prevent edges from appearing selectable
        },
        physics: {
            enabled: false // Disable physics to keep nodes in fixed positions
        },
        interaction: {
            dragNodes: false,  // Prevent dragging individual nodes
            dragView: true,    // Enable dragging the entire view
            zoomView: true,    // Enable zooming
            navigationButtons: true, // Show navigation buttons
            keyboard: {
                enabled: true, // Enable keyboard navigation
                bindToWindow: false
            },
            multiselect: false, // Prevent multiple selection
            selectConnectedEdges: false // Prevent edges from being selected when nodes are selected
        },
        // Configure initial view
        configure: {
            enabled: false,
        }
    };
    
    // Create the network visualization
    const network = new vis.Network(container, data, options);
    
    // Find starting node (the one with state === 'current')
    const startingNode = mapData.nodes.find(node => node.state === 'current');
    let currentSelectedNode = startingNode ? startingNode.id : 1; // Default to node 1 if no current node found
    
    // Set initial zoom level and position to show the starting node
    network.once("afterDrawing", function() {
        network.fit({
            nodes: [currentSelectedNode], // Focus on the starting node (bottom)
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
    
    let characterImg = null;
    
    // Function to create and position the character image
    function createCharacterImage() {
        // Remove any existing character
        if (characterImg) {
            characterImg.remove();
        }
        
        // Get the position of the current node in canvas coordinates
        const nodePosition = network.getPositions([currentSelectedNode])[currentSelectedNode];
        
        // Convert canvas coordinates to DOM coordinates (accounting for pan/zoom)
        const canvasPosition = network.canvasToDOM(nodePosition);
        
        // Create character image
        characterImg = document.createElement('img');
        characterImg.src = '../img/Fishbone Default Green.png'; // Path to the Fishbone character image
        characterImg.id = 'character-img';
        characterImg.style.position = 'absolute';
        characterImg.style.width = '40px';
        characterImg.style.height = '40px';
        
        // Position the character directly on top of the node
        characterImg.style.left = (canvasPosition.x - 20) + 'px';
        characterImg.style.top = (canvasPosition.y - 35) + 'px';
        characterImg.style.zIndex = '999'; // Ensure it's above the network
        
        // Add the character to the container
        container.appendChild(characterImg);
    }
    
    // Handle window resize events to reposition the character
    window.addEventListener('resize', function() {
        if (characterImg) {
            setTimeout(createCharacterImage, 100);
        }
    });
    
    // Update character position when the network is dragged or zoomed
    network.on("dragEnd", function() {
        createCharacterImage();
    });
    
    network.on("zoom", function() {
        createCharacterImage();
    });
    
    network.on("stabilizationIterationsDone", function() {
        createCharacterImage();
    });
    
    // Initially create the character on the current node after network is ready
    network.once('afterDrawing', function() {
        setTimeout(createCharacterImage, 1200); // Delay to ensure network is fully rendered and positioned
    });
    
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
    network.on("hoverNode", function(params) {
        const nodeId = params.node;
        const node = nodes.get(nodeId);
        
        if (node) {
            // Get node position and convert to DOM coordinates
            const position = network.getPositions([nodeId])[nodeId];
            const canvasPos = network.canvasToDOM(position);
            
            // Update tooltip content and position
            tooltipDiv.innerHTML = `<strong>${node.label}</strong><br>${node.description}`;
            tooltipDiv.style.left = (canvasPos.x + 40) + 'px';
            tooltipDiv.style.top = (canvasPos.y - 30) + 'px';
            tooltipDiv.style.display = 'block';
        }
    });
    
    // Hide tooltip when not hovering
    network.on("blurNode", function() {
        tooltipDiv.style.display = 'none';
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
            document.getElementById('cancel-challenge').addEventListener('click', function() {
                hideNodeChallengeModal();
            });
            
            document.getElementById('accept-challenge').addEventListener('click', function() {
                acceptNodeChallenge();
            });
            
            // Close modal when clicking outside of content
            modalContainer.addEventListener('click', function(event) {
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
        
        // Update description based on node
        const descriptionElement = document.querySelector('.bonus-description');
        descriptionElement.textContent = node.description;
        
        // Set reward based on node type
        const rewardElement = document.querySelector('.bonus-reward');
        let reward = "New Fish Outfit";
        switch (node.nodeType) {
            case 'challenge':
                reward = "New Fish Outfit";
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
        
        // Add habits based on user profile
        const habitsContainer = document.getElementById('habits-container');
        habitsContainer.innerHTML = ''; // Clear previous habits
        
        // For this example, we'll use the three habits from the profile
        // In a real app, these would be pulled from the user's profile
        const habits = [
            { name: 'Meditation', details: '10 minutes • Morning' },
            { name: 'Running', details: '2 miles • Before noon' },
            { name: 'Reading', details: '20 minutes • Before noon' }
        ];
        
        // Create habit elements
        habits.forEach(habit => {
            const habitElement = document.createElement('div');
            habitElement.className = 'habit-item';
            habitElement.innerHTML = `
                <div class="habit-name">${habit.name}</div>
                <div class="habit-details">${habit.details}</div>
            `;
            habitsContainer.appendChild(habitElement);
        });
        
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
        // In a real app, this would mark the challenge as accepted
        // and start tracking the habits
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
    network.on('selectNode', function(params) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);
        
        // Skip if selecting already current node
        if (node.state === 'current') {
            network.unselectAll();
            return;
        }
        
        // Update the selected node text
        const selectedNodeText = document.getElementById('selected-node');
        selectedNodeText.textContent = node.label;
        
        // Check if the node is reachable (connected to the current node)
        const connectedEdges = network.getConnectedEdges(currentSelectedNode);
        const pathExists = connectedEdges.some(edgeId => {
            const edge = edges.get(edgeId);
            // Only allow forward progression (from current node to selected node)
            return (edge.from === currentSelectedNode && edge.to === nodeId);
        });
        
        if (pathExists) {
            // Show modal for the node
            showNodeChallengeModal(node);
            
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
            connectedEdges.forEach(edgeId => {
                const edge = edges.get(edgeId);
                if (edge.from === currentSelectedNode && edge.to === nodeId) {
                    edge.dashes = false;
                    edge.state = 'traversed';
                    edges.update(edge);
                }
            });
            
            // Update the current node reference
            currentSelectedNode = nodeId;
            
            // Move the view to center on the new node with animation
            network.focus(nodeId, {
                scale: 1.0,
                animation: {
                    duration: 800,
                    easingFunction: "easeInOutQuad"
                }
            });
            
            // Reposition the character after animation completes
            setTimeout(createCharacterImage, 850);
            
            // Update map progress
            updateMapProgress();
        }
        
        network.unselectAll();
    });
    
    // Handle click outside nodes to deselect
    network.on('click', function(params) {
        if (params.nodes.length === 0) {
            // Clear selection
            const selectedNodeText = document.getElementById('selected-node');
            selectedNodeText.textContent = 'None Selected';
        }
    });
    
    // Apply specific styling based on node group and state
    network.on('afterDrawing', function(ctx) {
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
            }
        });
    });
    
    // Update map progress based on distance remaining to the boss node
    function updateMapProgress() {
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
            filter: function(node) {
                return node.nodeType === 'boss';
            }
        })[0];
        
        if (!bossNode) return; // If no boss node found
        const bossNodeId = bossNode.id;
        
        // Get the starting node (node 1)
        const startNodeId = 1;
        
        // Get current node
        const currentNodeId = currentSelectedNode;
        
        // Calculate the shortest path from current node to boss
        const stepsRemaining = findShortestPath(graph, currentNodeId, bossNodeId);
        
        // Calculate the shortest path from start to boss (total journey length)
        const totalSteps = findShortestPath(graph, startNodeId, bossNodeId);
        
        // Calculate progress percentage
        let progressPercentage = 0;
        if (totalSteps > 0 && stepsRemaining <= totalSteps) {
            const stepsTaken = totalSteps - stepsRemaining;
            progressPercentage = Math.round((stepsTaken / totalSteps) * 100);
        }
        
        // Update progress bar and percentage text
        const progressBar = document.querySelector('.progress-bar');
        const percentageText = document.querySelector('.percentage');
        
        if (progressBar && percentageText) {
            progressBar.style.width = progressPercentage + '%';
            percentageText.textContent = progressPercentage + '%';
        }
    }
    
    // Function to find the shortest path length using BFS
    function findShortestPath(graph, startNodeId, endNodeId) {
        // If start and end are the same, return 0
        if (startNodeId === endNodeId) return 0;
        
        // If startNode has no outgoing edges in our graph
        if (!graph[startNodeId]) return Infinity;
        
        // BFS to find shortest path
        const queue = [{node: startNodeId, distance: 0}];
        const visited = new Set([startNodeId]);
        
        while (queue.length > 0) {
            const {node, distance} = queue.shift();
            
            // Get all neighbors
            const neighbors = graph[node] || [];
            
            for (const neighbor of neighbors) {
                if (neighbor === endNodeId) {
                    return distance + 1; // Found the end node
                }
                
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push({node: neighbor, distance: distance + 1});
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
    
    // Initialize progress
    updateMapProgress();
});