---
id: chapter-2
title: Days 2
tags: ["Books", "Javascript"]
# hide_table_of_contents: true
---

<br />

    😃 책에서 기억하고 싶은 내용을 써보세요.

## 연산자

- 증가/감소(++/--) 연산자는 피연산자의 값을 변경하는 부수 효과가 있다.

```js showLineNumbers
var x = 1;

// ++ 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x++;
console.log(x); // 2

// -- 연산자는 피연산자의 값을 변경하는 암묵적 할당이 이뤄진다.
x--;
console.log(x); // 1
```

:::note 증가/감소 연산자

- 피연산자 앞에 위치한 **전위 증가/감소 연산자는 먼저 피연산자의 값을 증가/감소 시킨 후** 다른 연산을 수행한다.
- 피연산자 뒤에 위치한 **후위 증가/감소 연산자는 먼저 다른 연산을 수행한 후 피연산자의 값을 증가/감소** 시킨다.

```js showLineNumbers
var x = 5,
  result;

// 선할당 후증가(postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후 할당 (prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소(postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당(prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
```

:::

### 문자열 연결 연산자

- `+` 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.
  - `1 + true`를 연산하면 자바스크립트 엔진은 암묵적으로 불리언 타입의 값인 true를 숫자 타입인 1로 타입을 강제로 변환한 후 연산을 수행한다.
  - 이를 **암묵적 타입변환** 또는 **타입 강제변환** 이라고 한다.

### 동등/일치 비교 연산자

- **동등 비교 연산자<sup>(==)</sup>는 느슨한 비교**를 하지만 **일치 비교 연산자<sup>(===)</sup>는 엄격한 비교**를 한다.
  - 동등 비교 연산자<sup>(==)</sup>는 좌항과 우항의 피연산자를 비교할 때 먼저 **암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.**
  - 일치 비교 연산자<sup>(===)</sup>는 좌항과 우항의 피연산자가 **타입도 같고 값도 같은 경우에 한하여 true를 반환한다.**

:::danger 주의 사항

```js title="NaN" showLineNumbers
// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false

// 숫자가 NaN인지 조사하려면 빌트인 함수 Number.isNaN을 사용한다.
Number.isNaN(NaN); // true
Number.isNaN(10); // false

Number.isNaN(1 + undefined); // true
```

```js title="숫자 0" showLineNumbers
// 양의 0과 음의 0의 비교 (일치 비교/동등 비교 모두 true)
0 === -0; // true
0 == -0; // true
```

:::

## typeof 연산자

|                        | 타입       | 비고             |
| ---------------------- | ---------- | ---------------- |
| `typeof ''`            | string     |                  |
| `typeof 1`             | number     |                  |
| `typeof NaN`           | **number** | number 타입 주의 |
| `typeof true`          | boolean    |                  |
| `typeof undefined`     | undefined  |                  |
| `typeof null`          | **object** | object 타입 주의 |
| `typeof Symbol()`      | symbol     |                  |
| `typeof []`            | object     |                  |
| `typeof {}`            | object     |                  |
| `typeof new Date()`    | object     |                  |
| `typeof /abc/gi`       | object     |                  |
| `typeof function() {}` | function   |                  |

:::tip

- typeof 연산자로 `null` 값을 연산해 보면 `null`이 아닌 `object`를 반환한다는 데 주의하자.
  - 이는 자바스크립트의 첫 버전의 버그이다.
  - 값이 `null` 타입인지 확인할 때는 일치 연산자 <sup>(===)</sup>를 사용하자.

:::

## 제어문

### 블록문

- 블록문<sup>(block statement/compound statement)</sup>은 0개 이상의 중괄호로 묶은 것으로, 코드 블록 또는 블록이라고 부르기도 한다.

```js showLineNumbers
// 블록문
{
  var foo = 10;
}

// 제어문
var x = 1;
if (x < 10) {
  x++;
}

// 함수 선언문
function sum(a, b) {
  return a + b;
}
```

### 조건문

- if 문의 조건식이 불리언 값이 아닌 값으로 평가되면 자바스크립트 엔진에 의해 암묵적으로 불리언 값으로 강제 변환되어 실행할 코드 블록을 결정한다.

```js showLineNumbers
var x = 2;
var result;

// 2 % 2는 0이므로 조건식은 false이다.
if (x % 2) {
  result = "홀수";
} else {
  result = "짝수";
}

console.log(result); // 짝수
```

## 타입 변환과 단축 평가

- 개발자가 의도적으로 값으 ㅣ타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다.
- 자바스크립트 엔진에 의해 표현식을 평가하는 도중 암묵적으로 타입이 자동으로 변환되기도 한다.
  - 이를 **암묵적 타입 변환** 또는 **타입 강제 변환**이라 한다.
