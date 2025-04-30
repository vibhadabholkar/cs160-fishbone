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
    
    // Create a tree-structured map (starting at the bottom, branching upward)
    // No loops allowed - only forward progression
    // IMPORTANT: Every path must lead to the boss
    const nodes = new vis.DataSet([
        // Level 1 (bottom - starting point)
        { id: 1, label: "", group: 'current', state: 'current', nodeType: 'standard', x: 0, y: 300 },
        
        // Level 2
        { id: 2, label: "", group: 'standard', state: 'pending', nodeType: 'standard', x: -150, y: 200 },
        { id: 3, label: "", group: 'challenge', state: 'pending', nodeType: 'challenge', x: 150, y: 200 },
        
        // Level 3
        { id: 4, label: "", group: 'rest', state: 'pending', nodeType: 'rest', x: -250, y: 100 },
        { id: 5, label: "", group: 'event', state: 'pending', nodeType: 'event', x: -50, y: 100 },
        { id: 6, label: "", group: 'standard', state: 'pending', nodeType: 'standard', x: 100, y: 100 },
        { id: 7, label: "", group: 'event', state: 'pending', nodeType: 'event', x: 250, y: 100 },
        
        // Level 4
        { id: 8, label: "", group: 'challenge', state: 'pending', nodeType: 'challenge', x: -300, y: 0 },
        { id: 9, label: "", group: 'standard', state: 'pending', nodeType: 'standard', x: -150, y: 0 },
        { id: 10, label: "", group: 'rest', state: 'pending', nodeType: 'rest', x: 0, y: 0 },
        { id: 11, label: "", group: 'challenge', state: 'pending', nodeType: 'challenge', x: 150, y: 0 },
        { id: 12, label: "", group: 'event', state: 'pending', nodeType: 'event', x: 300, y: 0 },
        
        // Level 5
        { id: 13, label: "", group: 'standard', state: 'pending', nodeType: 'standard', x: -225, y: -100 },
        { id: 14, label: "", group: 'event', state: 'pending', nodeType: 'event', x: -75, y: -100 },
        { id: 15, label: "", group: 'rest', state: 'pending', nodeType: 'rest', x: 75, y: -100 },
        { id: 16, label: "", group: 'challenge', state: 'pending', nodeType: 'challenge', x: 225, y: -100 },
        
        // Level 6 (top - final boss)
        { id: 17, label: "", group: 'boss', state: 'pending', nodeType: 'boss', x: 0, y: -200 }
    ]);
    
    // Create edges array to connect the nodes (tree structure - no loops)
    // IMPORTANT: Ensure every path eventually leads to the boss
    const edges = new vis.DataSet([
        // Connections from Level 1 to Level 2
        { id: 'e1-2', from: 1, to: 2, dashes: [5, 5], state: 'pending' },
        { id: 'e1-3', from: 1, to: 3, dashes: [5, 5], state: 'pending' },
        
        // Connections from Level 2 to Level 3
        { id: 'e2-4', from: 2, to: 4, dashes: [5, 5], state: 'pending' },
        { id: 'e2-5', from: 2, to: 5, dashes: [5, 5], state: 'pending' },
        { id: 'e3-6', from: 3, to: 6, dashes: [5, 5], state: 'pending' },
        { id: 'e3-7', from: 3, to: 7, dashes: [5, 5], state: 'pending' },
        
        // Connections from Level 3 to Level 4
        { id: 'e4-8', from: 4, to: 8, dashes: [5, 5], state: 'pending' },
        { id: 'e4-9', from: 4, to: 9, dashes: [5, 5], state: 'pending' },
        { id: 'e5-9', from: 5, to: 9, dashes: [5, 5], state: 'pending' },
        { id: 'e5-10', from: 5, to: 10, dashes: [5, 5], state: 'pending' },
        { id: 'e6-10', from: 6, to: 10, dashes: [5, 5], state: 'pending' },
        { id: 'e6-11', from: 6, to: 11, dashes: [5, 5], state: 'pending' },
        { id: 'e7-11', from: 7, to: 11, dashes: [5, 5], state: 'pending' },
        { id: 'e7-12', from: 7, to: 12, dashes: [5, 5], state: 'pending' },
        
        // Connections from Level 4 to Level 5
        { id: 'e8-13', from: 8, to: 13, dashes: [5, 5], state: 'pending' },
        { id: 'e9-13', from: 9, to: 13, dashes: [5, 5], state: 'pending' },
        { id: 'e9-14', from: 9, to: 14, dashes: [5, 5], state: 'pending' },
        { id: 'e10-14', from: 10, to: 14, dashes: [5, 5], state: 'pending' },
        { id: 'e10-15', from: 10, to: 15, dashes: [5, 5], state: 'pending' },
        { id: 'e11-15', from: 11, to: 15, dashes: [5, 5], state: 'pending' },
        { id: 'e11-16', from: 11, to: 16, dashes: [5, 5], state: 'pending' },
        { id: 'e12-16', from: 12, to: 16, dashes: [5, 5], state: 'pending' },
        
        // Connections from Level 5 to Level 6 (final boss)
        { id: 'e13-17', from: 13, to: 17, dashes: [5, 5], state: 'pending' },
        { id: 'e14-17', from: 14, to: 17, dashes: [5, 5], state: 'pending' },
        { id: 'e15-17', from: 15, to: 17, dashes: [5, 5], state: 'pending' },
        { id: 'e16-17', from: 16, to: 17, dashes: [5, 5], state: 'pending' }
    ]);
    
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
    
    // Set initial zoom level and position to show the starting node
    network.once("afterDrawing", function() {
        network.fit({
            nodes: [1], // Focus on the starting node (bottom)
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
    let currentSelectedNode = 1; // Default to node 1 which is set as current at the bottom
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
        selectedNodeText.textContent = node.nodeType.charAt(0).toUpperCase() + node.nodeType.slice(1);
        
        // Check if the node is reachable (connected to the current node)
        const connectedEdges = network.getConnectedEdges(currentSelectedNode);
        const pathExists = connectedEdges.some(edgeId => {
            const edge = edges.get(edgeId);
            // Only allow forward progression (from current node to selected node)
            return (edge.from === currentSelectedNode && edge.to === nodeId);
        });
        
        if (pathExists) {
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
});