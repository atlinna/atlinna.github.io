## BFS

```
function bfs(start, target) {
    const queue = [];   // 存放用于广度优先遍历得数据
    const visited = new Set(); //避免走回头路
    queue.push(start);
    visited.add(start);
    let step = 0; // 记录扩散得步数
    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();
            // 判断是否到达终点找到目标
            if (cur == target || cur.val == target) return step;
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right);
        }
        // 更新步数，这里代表遍历完一个层级。
        step++
    }
}
```
