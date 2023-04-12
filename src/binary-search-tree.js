const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    tree = null

    root() {
        return this.tree
    }

    add(data) {
        if (this.tree === null) {
            this.tree = {data}
        } else {
            const newItem = (list) => {
                if (data < list.data) {
                    list.left ? newItem(list.left) : list.left = {data}
                } else {
                    list.right ? newItem(list.right) : list.right = {data}
                }
            }
            newItem(this.tree)
        }
    }

    has(data) {
        return !!this.find(data)
    }

    find(data) {
        if (this.tree === null) {
            return null
        } else {
            const findList = (list) => {
                if (list.data === data) {
                    return list
                } else {
                    let listData
                    if (list.left) {
                        listData = findList(list.left)
                        if (listData) {
                            return listData
                        }
                    }
                    if (list.right) {
                        listData = findList(list.right)
                        if (listData) {
                            return listData
                        } else {
                            return null
                        }
                    }
                    return null
                }
            }
            return findList(this.tree)
        }
    }

    remove(data) {
        if (this.tree === null) {
            return null
        } else {
            const removeList = (list, data) => {
                if (data < list.data) {
                    list.left = removeList(list.left, data)
                    return list
                } else if (data > list.data) {
                    list.right = removeList(list.right, data)
                    return list
                } else {
                    if (!list.left && !list.right) {
                        return null
                    }
                    if (!list.left) {
                        list = list.right
                        return list
                    }
                    if (!list.right) {
                        list = list.left
                        return list
                    }

                    let maxLeft = list.left
                    while (maxLeft.right) {
                        maxLeft = maxLeft.right
                    }
                    list.data = maxLeft.data
                    list.left = removeList(list.left, maxLeft.data)

                    return list
                }
            }

            this.tree = removeList(this.tree, data)
        }
    }

    min() {
        if (this.tree === null) {
            return null
        } else {
            const next = (list) => {
                if (!list.left){
                    return list.data
                }

                return next(list.left)
            }
            return next(this.tree)
        }
    }

    max() {
        if (this.tree === null) {
            return null
        } else {
            const next = (list) => {
                if (!list.right){
                    return list.data
                }

                return next(list.right)
            }
            return next(this.tree)
        }
    }
}

module.exports = {
    BinarySearchTree
};