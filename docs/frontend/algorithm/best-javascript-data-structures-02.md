---
id: best-javascript-data-structures-02
title: JavaScript 알고리즘 & 자료구조 마스터클래스 2
tags: ["Algorithm", "Udemy"]
# hide_table_of_contents: true
---

## 객체의 Big O

- 입력, 삭제, 접근은 O(1)의 시간을 가진다.
- 검색은 O(n)의 시간을 가진다.

:::tip Object 메서드의 시간 복잡도

- `Object.keys`, `Object.values`, `Object.entries`는 O(n)의 시간을 가진다.
- `Object.hasOwnProperty`는 O(1)의 시간을 가진다.

:::

## 배열의 Big O

- 입력
  - push의 경우(마지막에 넣는 경우) O(1)의 시간을 가진다.
  - 맨 앞에 추가하는 경우 O(n)의 시간을 가진다. (배열의 길이 n에 따라 index를 변경해야 한다.)
- 삭제
  - pop의 경우(마지막을 제거하는 경우) O(1)의 시간을 가진다.
  - 맨 앞을 제거하는 경우 O(n)의 시간을 가진다. (배열의 길이 n에 따라 index를 변경해야 한다.)
- 검색은 O(n)의 시간을 가진다.
- 접근은 O(1)의 시간을 가진다.

| 배열 메서드                     | 시간 복잡도   |
| ------------------------------- | ------------- |
| push                            | O(1)          |
| pop                             | O(1)          |
| shift                           | O(n)          |
| unshift                         | O(n)          |
| concat                          | O(n)          |
| slice                           | O(n)          |
| splice                          | O(n)          |
| sort                            | O(n \* log N) |
| forEach, map, filter, reduce... | O(n)          |
