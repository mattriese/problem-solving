class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** Recursively traverses the tree with DFS and counts the words
   * that are node values, except stops at nodes with value "STOP"
   * and does not count the word "STOP" or any of that node's descendants.
   * Returns the word count.
   **/
  countValidWords(node=this.root, wordCount=0) {
    if (this.root === null) return 0;
    if (node.val === "STOP") return wordCount;
    wordCount++;
    if (node.left) {
      wordCount = this.countValidWords(node.left, wordCount);
    }
    if (node.right) {
      wordCount = this.countValidWords(node.right, wordCount);
    }
    return wordCount;
  }
}

module.exports = { Node, Tree };
