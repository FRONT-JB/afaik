---
id: best-javascript-data-structures-01
title: JavaScript 알고리즘 & 자료구조 마스터클래스 1
tags: ["Algorithm", "Udemy"]
# hide_table_of_contents: true
---

## Big O 표기법

Big O 표기법은 알고리즘의 성능을 나타내는 지표로, 입력값이 증가할 때 실행 시간이나 공간이 어떻게 증가하는지를 나타낸다.

1. O(1) - 상수 시간

   - 입력 크기와 관계없이 항상 같은 시간이 걸림
   - 예: **배열의 인덱스 접근, 객체의 키 접근**

2. O(log n) - 로그 시간

   - 입력이 증가할 때 실행 시간이 로그함수처럼 증가
   - 예: **이진 검색**

3. O(n) - 선형 시간

   - 입력 크기에 비례하여 실행 시간이 증가
   - 예: **단일 반복문**

4. O(n log n) - 선형 로그 시간

   - 대부분의 효율적인 정렬 알고리즘이 이에 해당
   - 예: **퀵소트, 머지소트**

5. O(n²) - 이차 시간

   - 입력 크기의 제곱에 비례하여 실행 시간이 증가
   - 예: **이중 반복문**

6. O(2ⁿ) - 지수 시간

   - 입력이 증가할 때마다 실행 시간이 2배씩 증가
   - 예: **재귀 피보나치**

7. O(n!) - 팩토리얼 시간
   - 가장 비효율적인 시간 복잡도
   - 예: 외판원 문제의 무차별 대입 해법

## Big O 시간 복잡도

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

## Big O 표현식의 단순화

- 배열(인덱스 기준) 또는 객체(키 기준)의 요소에 접근하는 것은 O(1)과 같이 일정하다.
- 루프는 n만큼의 복잡도를 가지며 O(n)과 같다. 중첩문의 경우 O(n<sup>2</sup>)이다.
- **알고리즘의 성능을 비교할 때는 가장 큰 차수의 항이 결정적인 역할**을 한다.
  - O(n^2 + n^3)의 경우 O(n^3)으로 단순화 할 수 있다.

## 공간 복잡도

- boolean, undefined, number, null은 불변의 공간이다.
  - 입력의 크기와 상관없이 똑같은 공간을 가진다.
- 문자열은 O(n)의 공간 복잡도를 가진다.
  - 50자의 문자열인 경우 1자의 문자열 보다 50배의 더 많은 공간을 차지하게 된다.
- 배열과 객체는 O(n)의 공간 복잡도를 가진다.

## 시간 복잡도와 공간 복잡도의 차이

- 시간 복잡도는 알고리즘이 실행되는데 걸리는 시간 또는 연산의 횟수를 나타낸다.
  - 입력값이 증가할 때 **실행 시간이 어떻게 증가하는지 측정**한다
- 공간 복잡도는 알고리즘이 실행될 때 필요한 추가적인 메모리 공간을 나타낸다.
  - 입력값이 증가할 때 **추가 메모리 사용량이 어떻게 증가하는지 측정**한다.
