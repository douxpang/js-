// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 源二叉树 
//    8
//  /  \
//  6   10
// / \  / \
// 5  7 9 11
// 镜像二叉树
//    8
//  /  \
// 10   6
// / \  / \
// 11 9 7  5
 
function change(root) {
    if(root) {
        let temp = root.right
        root.right = root.left
        root.left = temp
        change(root.right)
        change(root.left)
    }
}