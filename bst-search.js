function bstSearch(num) {
  let current = this.root;
  while (true) {
    if (!current) return false;
    if (current.value === num) return true;
    if (current.value > num) {
      current = current.left;
    }
    else {
      current = current.right;
    }
  }
}
