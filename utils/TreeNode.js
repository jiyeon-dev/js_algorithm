function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function createTreeNode(root) {
  if (!root) return null;

  const values = root[Symbol.iterator]();
  const tree = new TreeNode(values.next().value);
  const queue = new Set().add(tree);

  for (const node of queue) {
    for (const position of ["left", "right"]) {
      const value = values.next().value;
      if (value != null) queue.add((node[position] = new TreeNode(value)));
    }
  }

  return tree;
}

module.exports = { createTreeNode };
