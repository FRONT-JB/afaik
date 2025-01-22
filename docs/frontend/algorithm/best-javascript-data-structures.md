---
id: best-javascript-data-structures
title: JavaScript 알고리즘 & 자료구조 마스터클래스
tags: ["Algorithm", "Udemy"]
# hide_table_of_contents: true
---

## Big O 표기법

:::note 1부터 N까지의 합

```js title="For 문을 이용한 함수"
function addUpTo1(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

```js title="연산만을 이용한 함수"
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
```

- 연산만을 이용한 함수는 3번의 연산으로 값을 계산하지만 for문은 n만큼의 연산이 늘어나게 된다.
  - `addUpTo1` 함수는 O(n)의 복잡도를 가진다. (n의 크기에 비례하게 시간이 늘어난다.)
  - `addUpTo2` 함수는 O(1)의 복잡도를 가진다. (함수 내 3개의 연산이 n에 영향을 받지 않고 항상 같은 시간이 걸린다.)
  - 이중 for문의 경우 O(n<sup>2</sup>)의 복잡도를 가진다. (n이 커질수록 n의 제곱만큼 늘어나게 된다.)

:::
