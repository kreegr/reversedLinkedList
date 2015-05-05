(function() {
    var LLNode = function LLNode(i) {
        this.i = i;
    };

    var i = 1;
    var headNode = new LLNode(i);
    var node = headNode;
    // build
    for (i; i < 100; i++) {
        node.nextNode = new LLNode(i);
        node = node.nextNode;
    }

    node = headNode;
    var nextNode = node.nextNode;
    var prevNode;
    while(nextNode) {
        nextNode = node.nextNode;
        node.nextNode = prevNode;
        prevNode = node;
        if (nextNode){
            node = nextNode;
        }
    }

    while (node) {
        console.log(node.i);
        node = node.nextNode;
    }
})();