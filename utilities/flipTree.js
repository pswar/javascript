/**
 * @author Sathish Pottavathini (spottavathini)
 *
 * Simple implementation of commonly used utilities. 
 * Not meant to be robust but for starters use.
 * 
 * Given a binary tree where all the right nodes are leaf nodes, flip it upside down and turn it into a tree with left leaf nodes.
*/ 

function flipTree (root) {
    if (root == null)
        return null;
    
    // Working base condition
    if( root.left == null && root.right == null) {
        return root.left;
    }
    
    var newRoot = flipTree(root.left);
    
    root.left.left = root.right;
    root.left.right = root;
    root.left = NULL;
    root.right = NULL;
    
    return newRoot;
}