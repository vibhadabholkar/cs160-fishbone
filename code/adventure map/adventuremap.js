// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    const container = document.getElementById('map-network');
    
    // Define node types with their colors
    const nodeTypes = {
        standard: {
            color: { background: '#FFFFFF', border: '#478BE3' },
            borderWidth: 2,
            size: 30
        },
        rest: {
            color: { background: '#A9DFEB', border: '#8ED1E5' },
            borderWidth: 2,
            size: 30
        },
        challenge: {
            color: { background: '#F1C40F', border: '#D4AC0D' },
            borderWidth: 2,
            size: 30
        },
        event: {
            color: { background: '#E84393', border: '#D63384' },
            borderWidth: 2,
            size: 30
        },
        boss: {
            color: { background: '#E67E22', border: '#D35400' },
            borderWidth: 2,
            size: 30
        },
        character: {
            color: { background: '#478BE3', border: '#3670B9' },
            borderWidth: 0,
            size: 40
        }
    };
    
    // Create nodes array for the adventure map
    // Each node has an id, label, type, and position
    const nodes = new vis.DataSet([
        { id: 1, label: "", group: 'rest', x: 0, y: -150 },
        { id: 2, label: "", group: 'standard', x: -150, y: 0 },
        { id: 3, label: "", group: 'event', x: 150, y: 0 },
        { id: 4, label: "", group: 'challenge', x: -75, y: 150 },
        { id: 5, label: "", group: 'standard', x: 75, y: 150 },
        { id: 6, label: "", group: 'character', x: 150, y: 200, fixed: true }
    ]);
    
    // Create edges array to connect the nodes
    // Each edge connects two nodes by their ids
    const edges = new vis.DataSet([
        { from: 1, to: 2, dashes: [5, 5] },
        { from: 1, to: 3, dashes: [5, 5] },
        { from: 2, to: 4, dashes: [5, 5] },
        { from: 3, to: 5, dashes: [5, 5] },
        { from: 4, to: 5, dashes: [5, 5] }
    ]);
    
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
                color: '#34495E',
                highlight: '#2C3E50'
            },
            smooth: false
        },
        physics: {
            enabled: false // Disable physics to keep nodes in fixed positions
        },
        interaction: {
            dragNodes: false, // Prevent dragging nodes
            dragView: false,  // Prevent dragging the view
            zoomView: false   // Prevent zooming
        }
    };
    
    // Create the network visualization
    const network = new vis.Network(container, data, options);
    
    // Handle node selection
    network.on('selectNode', function(params) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);
        
        // Skip character node
        if (node.group === 'character') {
            network.unselectAll();
            return;
        }
        
        // Update the selected node text
        const selectedNodeText = document.getElementById('selected-node');
        selectedNodeText.textContent = node.group.charAt(0).toUpperCase() + node.group.slice(1);
        
        // Position the character near the selected node (simulating player movement)
        const characterNode = nodes.get(6); // Character node id is 6
        const selectedNodePosition = network.getPositions([nodeId])[nodeId];
        
        // Adjust position to be close but not on top of the selected node
        const offsetX = 30;
        const offsetY = 30;
        
        nodes.update({
            id: 6,
            x: selectedNodePosition.x + offsetX,
            y: selectedNodePosition.y + offsetY
        });
    });
    
    // Handle click outside nodes to deselect
    network.on('click', function(params) {
        if (params.nodes.length === 0) {
            // Clear selection
            const selectedNodeText = document.getElementById('selected-node');
            selectedNodeText.textContent = 'None Selected';
        }
    });
    
    // Apply specific styling based on node group
    network.on('afterDrawing', function(ctx) {
        const nodePositions = network.getPositions();
        const allNodes = nodes.get();
        
        allNodes.forEach(node => {
            const pos = nodePositions[node.id];
            if (pos && node.group !== 'character') {
                const typeStyle = nodeTypes[node.group];
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, typeStyle.size / 2, 0, 2 * Math.PI, false);
                ctx.fillStyle = typeStyle.color.background;
                ctx.fill();
                ctx.lineWidth = typeStyle.borderWidth;
                ctx.strokeStyle = typeStyle.color.border;
                ctx.stroke();
            }
        });
    });
});