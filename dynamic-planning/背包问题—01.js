/**
 * @param {number[]} n
 * @param {number} W
 * @param {number[]} weight
 * @param {number[]} value
 * @return {string}
 * 1. 确定状态的含义。令 dp[w] 装入容量为 w 的背包中所能获得的最大价值
 * 2. 确定状态转移方程。 dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i])
 * 3. 确定边界 dp[w] = 0
 * 4. 根据状态转移方程和边界条件，进行递推计算。
 */
function knapsackProblem01 (n, W, weight, value) {
    // 定义 dp 数组，处理边界
    dp = new Array(W + 1).fill(0)
		for(let i = 0; i < n; i++){
				for(let w = W; w >= weight[i]; w--) {
						// 状态转移方程
						dp[w] = Math.max(dp[w], dp[w - weight[i]] + value[i])
				}
        console.log(dp)
		}
		return dp[W]
}


/**
 * @param {number[]} n 物品总数，例：5
 * @param {number} W 背包容量，例：10
 * @param {number[]} weight 物品对应重量，例：[2,2,6,5,4]
 * @param {number[]} value 物品对应价值，例：[6,3,5,4,6]
 * @return {number} 最大收益
 * 1. 确定状态的含义。令 dp[i][w] 表示前 i 件物品 (0 ≤ i < n, 0 ≤ w ≤ W) 怡好装入容量为 w 的背包中所能获得的最大价值
 * 2. 确定状态转移方程。 dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight[i]] + value[i])
 * 3. 确定边界 dp[0][w] = w >= weight[0] ? value[0] : 0，dp[i][0] = 0
 * 4. 根据状态转移方程和边界条件，进行递推计算。
 */
function _knapsackProblem01 (n, W, weight, value) {
  // 定义 dp 数组，物品下标 0 ~ n-1,背包重量下标 0 ~ W
  dp = new Array(n).fill(0).map(val => new Array(W + 1).fill(0))

  // 处理背包限重为 w = 0 时的边界（声明 dp 时已处理，可省略）
  for(let i = 0; i < n; i++) {
    dp[i][0] = 0
  }

  // 处理仅选择第一件物品（下标 i = 0）的边界情况下对应不同背包容量时的最大收益
  // 当且仅当背包容量大于第一件物品重量时放入
  for(let w = 0; w <= W; w++) {
    dp[0][w] = w >= weight[0] ? value[0] : 0
  }

  // 状态转移方程
  for(let i = 1; i < n; i++){
      for(let w = 0; w <= W; w++) {
        if(w < weight[i]) {
          dp[i][w] = dp[i - 1][w]
        } else {
          // 状态转移方程
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weight[i]] + value[i])
        }
      }
  }
  console.log(dp)
  // 返回最终结果
  return dp[n - 1][W]
}

// test
// output: 15
// console.log(_knapsackProblem01(5, 10, [2,2,6,5,4], [6,3,5,4,6]))
console.log(knapsackProblem01(5, 10, [2,2,6,5,4], [6,3,5,4,6]))
