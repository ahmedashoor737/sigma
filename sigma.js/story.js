function Story(s) {
    this.id = s.Story.id;
    this.title = s.Story.title;
    this.author = s.Story.Author;
    this.nodes = readNodes(s.Story.Events);
    this.edges = getEdgesFromNodes(this.nodes);
}
function Node() {
    this.id = "";
    this.title = "";
    this.content = "";
    this.edges = [];
}
function Edge() {
    this.choice = "";
    this.target = "";
}
function readNodes(events) {
    var i = 0, nodes = [];
    for (; i < events.length; i++){
        var node = new Node();
        node.id = events[i].Event_id;
        node.title = events[i].Event_title;
        node.content = events[i].Event_Content;
        node.edges = readEdges(events[i].Default_branch);
        
        nodes.push(node);
    }
    return nodes;
}
function readEdges(choices) {
    var i = 0, edges = [];
    
    for (; i < choices.length; i++){
        var edge = new Edge();
        edge.choice = choices[i].choice;
        edge.target = choices[i].Next_event;
        edges.push(edge);
    }
    return edges;
}
function getEdgesFromNodes(nodes){
        var i = 0, edges = [];
        for (; i < nodes.length; i++){
            edges = edges.concat(nodes[i].edges);
        }
        return edges;
}