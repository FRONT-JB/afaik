---
sidebar_position: 1
---

# 기본 지식

> [ 😃 Esoolgnah ](#-references-) 님의 중요도 정리 내용을 한 페이지에 담았습니다.

## [ 자바스크립트는 어떤 언어일까? ]

> 자바스크립트는 싱글 스레드이면서 논 블록킹 언어입니다.

### 싱글 스레드 논 블록킹

:::info

- 자바스크립트는 **비동기 처리를 통해 싱글 스레드이지만 블록킹 되지 않게 하고, 하나의 요청이 완료될 때까지 기다리지 않고 동시에 다른 작업을 수행함으로써 문제를 해결**합니다.

:::

### 싱글 스레드

:::info
**스레드가 하나밖에 존재하지 않아 한번에 하나의 작업만 할 수 있습니다.**
:::

### 스레드

:::info
**어떠한 프로그램 내에서, 특히 프로세스 내에서 실행되는 흐름의 단위를 말합니다.**
:::

### 비동기 처리

:::info
**특정 로직의 실행이 끝날때까지 기다려주지 않고 나머지 코드를 먼저 실행하는 것**입니다. **멀티 스레드가 아닌 이유는 동시성 문제(동시에 공유된 자원에 접근하는 경우)를 해결하기 까다롭기 때문**입니다.
:::

---

## [ var, let, const의 차이점 ]

:::info var, let, const의 차이점

- `var`는 **변수 재선언, 재할당 모두 가능**합니다.
- `let`는 **변수 재선언은 불가능, 재할당은 가능**합니다.
- `const`는 **변수 재선언, 재할당 모두 불가능**합니다.
- **var는 function-scoped**이고, **let, const는 block-scoped**입니다.

```js title="var의 재선언, 재할당이 가능하기 때문에 생긴 문제점"
// 이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않습니다.
var a = "test";
var a = "test2";

// hoisting으로 인해 ReferenceError에러가 나지 않습니다.
c = "test";
var c;
```

```js title="es2015에 추가된 let, const는?"
// let
let a = "test";
let a = "test2"; // Uncaught SyntaxError: Identifier 'a' has already been declared
a = "test3"; // 가능

// const
const b = "test";
const b = "test2"; // Uncaught SyntaxError: Identifier 'a' has already been declared
b = "test3"; // Uncaught TypeError:Assignment to constant variable.
```

:::

### function-scoped

::::info function-scoped

```js
for (var j = 0; j < 10; j++) {
  console.log("j", j);
}
console.log("after loop j is ", j); // after loop j is 10

// 아래의 경우에는 에러가 발생합니다.
function counter() {
  for (var i = 0; i < 10; i++) {
    console.log("i", i);
  }
}
counter();
console.log("after loop i is", i); // ReferenceError: i is not defined
```

- `var`는 `function-scoped`이기 때문에 for문이 끝난다음에 i를 호출하면 값이 출력이 잘 됩니다.
- 그 이유는 **var가 hoisting이 되었기 때문**입니다.

```js
function sayHi() {
  const hi = "Hi there!";
  console.log(hi);
}

sayHi(); // 'Hi there!'
console.log(hi); // Error, hi is not defined
```

- function scope는 함수 내부 스코프를 의미하며 함수 내부에서 선언된 변수는 함수 내부에서만 접근이 가능합니다.

```js
function first() {
  const firstFunctionVariable = `I'm part of first`;
}

function second() {
  first(); // It works
  console.log(firstFunctionVariable); // Error, firstFunctionVariable is not defined
}
```

- function scope에서 다른 함수를 호출할 수 있지만, 다른 함수 내부에서 선언된 내부 변수에는 접근이 불가합니다.

::::

### block-scoped

:::info block-scoped

- var가 function-scoped로 hoisting이 되었다면
- let, const는 block-scoped단위로 hoisting이 일어납니다.

```js title="Block Scope"
{
  const hi = "Hi there!";
  console.log(hi); // 'Hi there!'
}
console.log(hi); // Error, hi is not defined
```

- 중괄호<sup>({})</sup> 내부에서 `let`, `const` 변수를 선언하면 그 변수들은 **중괄호 내부에서만 접근**이 가능합니다.
- 함수도 중괄호로 선언되므로 `block scope`도 `function scope`의 **부분집합**이라고 할 수 있습니다.

:::

### TDZ

> TDZ<sup>(Temporal Dead Zone)</sup> 란, 한글로 직역하자면 일시적인 사각지대란 뜻입니다.  
> 이 일시적인 사각지대는 **스코프의 시작 지점부터 초기화 시작 지점까지의 구간을 TDZ<sup>(Temporal Dead Zone)</sup>** 라고합니다.

:::info Temporal Dead Zone

```js
c = "test"; // ReferenceError: c is not defined
let c;

// let은 선언하고 나중에 값을 할당이 가능하지만
let dd
dd = 'test'

// const 선언과 동시에 값을 할당 해야합니다.
const aa // Missing initializer in const declaration
```

- 위의 코드에서 `ReferenceError`가 발생한 이유는 TDZ<sup>(Temporal Dead Zone)</sup>때문입니다.
- `let`은 값을 할당하기전에 변수가 선언 되어있어야 하는데 그렇지 않기 때문에 에러가 납니다.
- 이건 `const`도 마찬가지인데 좀 더 엄격합니다.
- `TDZ`가 **필요한 이유는 동적언어**이다보니 `runtime type check` 가 필요해서입니다.

:::

---

## [ 자바스크립트에서 비동기적으로 코딩하기 (1) ]

> 여러가지 이벤트를 처리할때에 동기식으로 처리하게 된다면 하나의 이벤트라 모두 처리될 때까지 다른 업무를 수행하지 못하는 단점 존재하기 때문에 이를 해결하기 위해 비동기가 필요합니다. _(자바스크립트는 싱글스레드이기 때문에 한번에 하나의 작업만 수행 가능합니다.)_

### 동기와 비동기

:::info 동기의 동작방식 [[출처]](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
요청을 보낸 후 해당 요청의 응답을 받아야 다음 동작 실행합니다. _(실행 순서가 확실합니다.)_
:::

:::info 비동기의 동작방식 [[출처]](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
요청을 보낸 후 응답과 관계없이 다음 동작을 실행합니다. _(실행 순서가 확실하지 않습니다.)_
:::

### 비동기 함수란?

:::info [출처](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
즉시 처리하지 못하는 이벤트들을 Web Api로 보내 콜스택이 비었을때 먼저 처리된 이벤트들을 줄세워 다시 이벤트 큐에 줄세워 놓게되는데 이를 이벤트 루프라 부릅니다. Web Api로 들어오는 순서는 중요하지 않고, 먼저 처리되는냐가 중요합니다.
자바스크립트는 즉시 처리 못하는 이벤트들을 이벤트 루프에 모아두고, 먼저 처리해야하는 이벤트를 실행합니다.
:::

### 비동기 처리란?

:::info [출처](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 작업입니다. _(특정 코드의 처리가 끝나기 전에 다음 코드를 실행할 수 있습니다.)_
:::

### 비동기 처리방식을 사용하는 이유

:::info [출처](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
서버 데이터 요청시에 응답을 기다리지 않고 다음 작업을 수행하기 위해 동기식 처리를 하게 되면 응답이 올때까지 대기시간이 길어 작업 시간이 길어집니다.
:::

### 비동기 처리방식을 사용한 경우의 문제점

:::info [출처](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
로직이 끝났을 때 원하는 동작을 수행하기 위해 콜백함수를 사용하는데, 이때 콜백 지옥 발생합니다._(가독성도 떨어지고 로직을 변경하기 어려워집니다.)_
:::

---

## [ 자바스크립트에서 비동기적으로 코딩하기 (2) ]

### [웹 API (Web API)](https://it-eldorado.tistory.com/86)

:::info [출처](https://it-eldorado.tistory.com/86)

- `Ajax 요청`, `setTimeout()`, `이벤트 핸들러`의 등록과 같이 **웹 브라우저에서 제공하는 기능**들을 말합니다. **중요한 것은 이러한 요청들의 처리가 JavaScript 엔진의 쓰레드와는 다른 쓰레드들에서 이뤄진다는 점**입니다.
- 자바스크립트 엔진의 스택에서 실행된 비동기 함수가 요청하는 비동기 작업에 대한 정보와 콜백 함수를 Web API를 통해 브라우저에게 넘기면, **브라우저는 이러한 요청들을 별도의 쓰레드에 위임하게 되고 그 쓰레드는 해당 요청이 완료되는 순간 전달받았던 콜백 함수를 자바스크립트 엔진의 `태스크 큐`라는 곳에 집어넣습니다.**
- `setTimeout()` **함수가 실행되면 자바스크립트 엔진은 Web API를 통해 브라우저에게** `setTimeout()` **작업을 요청하면서 콜백 함수를 전달**하고, **브라우저는 이러한 타이머 작업을 별도의 쓰레드에게 위임**합니다. **그러고 나면 자바스크립트 엔진의 스택에서는** `setTimeout()` **함수의 스택 프레임이 즉시** `pop` **됩니다.** 이후 **인자로 명시한 시간이 흐르고 나면 해당 타이머 작업을 처리하고 있던 쓰레드는 전달받았던 콜백 함수를 자바스크립트 엔진의 `태스크 큐`에 집어넣습니다.**

:::

### [태스크 큐 (Task Queue)](https://it-eldorado.tistory.com/86)

:::info [출처](https://it-eldorado.tistory.com/86)

- `태스크 큐`는 **Web API를 처리하고 있던 쓰레드로부터 전달받은 콜백 함수들을** `FIFO(First-In First-Out)` **구조로 저장하고 있는 일종의 큐(Queue)**로, **자바스크립트 엔진 자체에 포함되어 있는 부분**입니다.
- `태스크`**란 곧 콜백 함수를 의미**하기 때문에 **콜백 큐(Callback Queue)라고 부르기도 합니다. 여기에 저장된 콜백 함수들은 스택이 비는 순간 스택에 순서대로** `push`**됩니다**. 이러한 원리로 **비동기 작업이 완료된 이후 콜백 함수가 실행되고 작업이 완료되어 태스크 큐에 콜백 함수가 들어가 있더라도 스택이 비어있지 않다면 해당 콜백 함수가 바로 실행되지 못한다는 특징**이 있습니다.
- `setTimeout()` 함수도 인자로 명시한 시간은 '잠드는 최소 시간'일 뿐, 그것보다 더 오래 잠들 수 있습니다.

:::

### 이벤트 루프

![이벤트루프 설명](https://github.com/Esoolgnah/Frontend-Interview-Questions/raw/main/Images/important-4/javascript-eventloop.gif)

:::info

- 일반적인 작업은 콜스택(Call Stack)에서 이루어집니다.
- 시간이 소요되는 작업들(setTimeout, 이벤트, HTTP 요청 메서드 등)은 WebAPI에서 대기하다가 콜백큐(Callback Queue)로 보내집니다.
- Call Stack이 비워져 있을때만 Callback Queue에 저장되어있던 작업들을 Call Stack으로 보냅니다.

:::

- _[[JS] 도대체 이벤트 루프가 뭔가요?](https://baeharam.netlify.app/posts/javascript/event-loop)_
- _[[JavaScript] 자바스크립트 런타임](https://beomy.github.io/tech/javascript/javascript-runtime)_

---

## [ 자바스크립트에서 비동기적으로 코딩하기 (3) ]

### [Promise](https://joshua1988.github.io/web-development/javascript/promise-for-beginners)

> 프로미스는 자바스크립트 비동기 처리에 사용되는 객체입니다.  
> 자바스크립트의 비동기 처리란 **'특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성'**을 의미합니다.

::::note [프로미스 코드 - 기초](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/#%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4-%EC%BD%94%EB%93%9C---%EA%B8%B0%EC%B4%88)

```js title="ajax를 이용한 자바스크립트 코드"
function getData(callbackFunc) {
  $.get("url 주소/products/1", function (response) {
    callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
  });
}

getData(function (tableData) {
  console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
});
```

:::danger 콜백지옥
콜백 함수만을 이용한 비동기 통신은 콜백지옥의 위험성이 있습니다.
:::

<br />

```js title="Promise를 사용한 자바스크립트 코드"
function getData(callback) {
  // new Promise() 추가
  return new Promise(function (resolve, reject) {
    $.get("url 주소/products/1", function (response) {
      // 데이터를 받으면 resolve() 호출
      resolve(response);
    });
  });
}

// getData()의 실행이 끝나면 호출되는 then()
getData().then(function (tableData) {
  // resolve()의 결과 값이 여기로 전달됨
  console.log(tableData); // $.get()의 reponse 값이 tableData에 전달됨
});
```

::::

<br />

#### 프로미스의 3가지 상태

> 프로미스는 `new Promise()`로 생성하고 종료될 때까지 **3가지의 상태**를 갖습니다.

:::info Pending**<sup>(대기)</sup>**

> 비동기 처리 로직이 아직 완료되지 않은 상태

```js title="Pending"
new Promise();
```

- `new Promise()` 메서드를 호출하면 Pending**<sup>(대기)</sup>** 상태가 됩니다.

```js title="Pending"
new Promise(function (resolve, reject) {
  // ...
});
```

- `new Promise()` 메서드를 호출할 때 **콜백 함수**를 선언할 수 있고, **콜백 함수의 인자는 resolve, reject**입니다.

:::

<br />

:::info Fulfilled**<sup>(이행, 완료)</sup>**

> 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태

```js title="Fulfilled"
new Promise(function (resolve, reject) {
  resolve();
});
```

- 여기서 콜백 함수의 인자 resolve를 아래와 같이 실행하면 Fulfilled**<sup>(이행)</sup>** 상태가 됩니다.

```js title="Fulfilled"
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

- 그리고 이행 상태가 되면 **`then()`을 이용하여 처리 결과 값을 받을 수 있습니다.**

:::

<br />

:::info Rejected**<sup>(실패)</sup>**

> 비동기 처리가 실패하거나 오류가 발생한 상태

```js title="Rejected"
new Promise(function (resolve, reject) {
  reject();
});
```

- `new Promise()`로 프로미스 객체를 생성하면 콜백 함수 인자로 `resolve`와 `reject`를 사용할 수 있다고 했습니다. 여기서 `reject`를 호출하면 Rejected**<sup>(실패)</sup>** 상태가 됩니다.

```js title="Rejected"
function getData() {
  return new Promise(function (resolve, reject) {
    reject(new Error("Request is failed"));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData()
  .then()
  .catch(function (err) {
    console.log(err); // Error: Request is failed
  });
```

- 그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()`로 받을 수 있습니다.

:::

#### 프로미스의 에러 처리 방법

```js title="then()의 두번째 인자로 에러를 처리하는 방법"
getData().then(handleSuccess, handleError);
```

```js title="catch()를 이용하는 방법"
getData().then().catch();
```

```js title="에러처리의 예시"
function getData() {
  return new Promise(function (resolve, reject) {
    reject("failed");
  });
}

// 1. then()의 두 번째 인자로 에러를 처리하는 코드
getData().then(
  function () {
    // ...
  },
  function (err) {
    console.log(err);
  }
);

// 2. catch()로 에러를 처리하는 코드
getData()
  .then()
  .catch(function (err) {
    console.log(err);
  });
```

<br />

### [Async/Await](https://joshua1988.github.io/web-development/javascript/js-async-await)

> `async`와 `await`는 자바스크립트의 비동기 처리 패턴 중 가장 최근에 나온 문법입니다. 기존의 비동기 처리 방식인 **콜백 함수**와 **프로미스의 단점을 보완**하고 개발자가 읽기 좋은 코드를 작성할 수 있게 도와줍니다.

```js title="async / await의 기본 문법"
async function fetch() {
  await get(...);
}
```

- 먼저 함수의 앞에 `async` 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙입니다. 여기서 주의하셔야 할 점은 **비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작**합니다.

```js title="async / await의 예제"
function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

- 먼저 함수의 앞에 `async` 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 `await`를 붙입니다. 여기서 주의하셔야 할 점은 **비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작**합니다.

```js title="async & await 예외 처리"
async function logTodoTitle() {
  try {
    var user = await fetchUser();
    if (user.id === 1) {
      var todo = await fetchTodo();
      console.log(todo.title); // delectus aut autem
    }
  } catch (error) {
    console.log(error);
  }
}
```

- `async` / `await`에서 예외를 처리하는 방법은 바로 `try catch`입니다. 프로미스에서 에러 처리를 위해 `.catch()`를 사용했던 것처럼 `async`에서는 `catch {}` 를 사용하시면 됩니다.

---

## [ 호이스팅(hoisting)이란? ]

> 호이스팅이란 **`"끌어올린다"`** 라는 뜻으로 변수 및 함수 선언문이 스코프 내의 최상단으로 끌어올려지는 현상을 말합니다. 여기서 주의할 점은 **`"선언문"`** 이라는 것이며 **`"대입문"`**은 끌어올려지지 않습니다.

> _실행 컨텍스트 생성 시 렉시컬 스코프 내의 선언이 끌어올려 지는 게 호이스팅입니다._

:::::note

```js
console.log(a);
var a = 2;
```

```js
undefined;
```

::::info

> **컴파일러는 자바스크립트 엔진이 인터프리팅을 하기 전에 컴파일을 하는데 이 때, `var a = 2; 를 2개의 구문으로 봅니다.`**

    var a
    a = 2

> **var a 는 변수 선언문으로 컴파일을 할 때 처리**하고, **a = 2 는 실행할 때까지 내버려둡니다.** 따라서, 변수 a는 호이스팅 되고 콘솔에는 **`undefined`**가 출력됩니다.

:::danger let, const

- `var는` 선언, 초기화가 동시에 이루어지기 때문에 `undefined를 출력`
- `let, const는` 선언단계만 호이스팅 되기 때문에 `Reference Error를 출력`

:::

<br />

> **함수 선언문의 경우도 호이스팅이 됩니다.**

```js
func();
function func() {
  console.log("함수 호이스팅");
}
```

- 변수를 선언하는 것(const,let 등)처럼 함수 선언은 function으로 시작합니다.
- 선언 된 함수는 나중 사용을 위해 저장되며 call 될 때 실행됩니다.

<br />

:::danger **함수표현식**

> **함수 호이스팅에서 함수 표현식은 호이스팅 되지 않습니다.**

```js
var x = function (a, b) {
  return a * b;
};
```

- 자바스크립트 함수는 표현식을 사용하여 정의 될 수 있으며, 함수 표현식은 변수로 저장될 수 있습니다.
- 함수 표현식이 변수에 저장되면, 변수는 함수처럼 사용 가능해집니다. 변수에 저장된 함수는 함수명이 필요 없으며, 변수 이름을 통하여 호출됩니다.

:::

::::

:::::

---

## [ 클로저(Closure)란? ]

> 함수와 함수가 선언된 어휘적 환경의 조합입니다.(MDN 정의) 또한 함수가 속한 [렉시컬 스코프](#렉시컬스코프)를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있게 하는 기능 을 말합니다.

:::::note

```js
function outer() {
  var a = 2;
  function inner() {
    console.log(a);
  }
  return inner;
}
var func = outer();
func(); // 2
```

::::info
여기서 [GC(가비지콜렉터)](#가비지콜렉터)가 `outer()` 의 참조를 없앨 것 같지만 내부함수인 `inner()` 가 해당 스코프의 변수인 a를 참조하고 있기 때문에 없애지 않습니다. 따라서 스코프 외부에서 `inner()` 가 실행되도 해당 스코프를 기억하기 때문에 2를 출력하게 됩니다. 즉, 여기서 클로저는 `inner()` 가 되며 func 에 담겨 밖에서도 실행되고 렉시컬 스코프를 기억합니다.

> 위의 코드와 같은 방식으로 자바스크립트에는 없는 캡슐화라는 개념을 구현할 수 있고 정보 은닉과 캡슐화가 가져다주는 이점들을 얻을 수 있습니다.

::::

:::::

### 렉시컬스코프

렉시컬 스코프는 함수를 어디서 호출하는지가 아니라 어디에 선언하였는지에 따라 결정됩니다. 자바스크립트는 렉시컬 스코프를 따르므로 함수를 선언한 시점에 상위 스코프가 결정됩니다. 함수를 어디에서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않습니다.

### 가비지콜렉터

**메모리에 할당된 값이 더는 필요하지 않다고 판단될때 메모리를 해제시키는 과정을 가비지 컬렉션**이라고 부르며 **이 역할을 가비지 컬렉터가 맡고 있습니다.** **가비지 컬렉터가 ‘필요없다’라고 판단하는 기준은 더 이상 '객체에 닿을 수 없을 때'를 말합니다.** 닿는다는 roots(전역 변수)를 기준으로 참조, 또는 참조의 참조의… 참조가 되는 객체들입니다. 이 알고리즘을 mark and sweep이라고 부르는데 가비지 컬렉터는 ‘root에서 닿을 수 있는’ 객체들의 reachable을 true로 표시하고, false인 객체들은 메모리에서 해제시킵니다.

---

## [ this의 용법 ]

> this는 호출 패턴에 따라 다른 객체를 참조합니다. [실행 컨텍스트(EC)](#실행컨텍스트)가 생성될 때마다 this의 바인딩이 일어나며 우선순위 순으로 나열해보면 다음과 같습니다.

::::note

```js
var name = "global";
function Func() {
  this.name = "Func";
  this.print = function f() {
    console.log(this.name);
  };
}
var a = new Func();
a.print(); // Func
```

:::info new

- **[new](#new) 를 사용했을 때 해당 객체로 바인딩됩니다.**

:::

<br />

```js
function func() {
  console.log(this.name);
}
var obj = { name: "obj name" };
func.call(obj); // obj name
func.apply(obj); // obj name
func.bind(obj)(); // obj name
```

:::info call, apply, bind

- **[call](#call), [apply](#apply), [bind](#bind) 와 같은 명시적 바인딩을 사용했을 때 인자로 전달된 객체에 바인딩됩니다.**

:::

<br />

```js
var obj = {
  name: "obj name",
  print: function p() {
    console.log(this.name);
  },
};
obj.print(); // obj name
```

:::info object

- **객체의 메소드로 호출할 경우 해당 객체에 바인딩됩니다.**

:::

<br />

:::info 그 외의 경우

- `strict mode(엄격 모드)` : **undefined** 로 초기화됩니다.
- `일반` : 브라우저라면 **window** 객체에 바인딩됩니다.

:::

::::

#### 바인딩

바인딩(Binding) 이란 프로그램의 어떤 **기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정**하는 것을 말합니다.

#### 실행컨텍스트

**Execution Context(EC)**의 약자이며 **scope**, **hoisting**, **this**, **function**, **closure** 등의 **동작원리를 담고 있는 자바스크립트의 핵심원리**입니다.

#### new

**new라는 기호는 자바스크립트의 고유의 예약어이며 고유의 연산자(operator)** 입니다. _(new 연산자는 사용자 정의 객체 타입 또는 내장 객체 타입의 인스턴스를 생성한다.)_

#### call

**call**을 사용하면 **함수를 실행하고 함수의 첫 번째 인자로 전달하는 값에 this를 바인딩**합니다.

#### apply

**call**과 마찬가지로 **apply**를 사용하면 **함수를 실행하고 함수의 첫 번째 인자로 전달하는 값에 this를 바인딩**합니다. **call과의 차이점은 인자를 배열의 형태로 전달**한다는 것입니다. 이 때, 인자로 **배열 자체가 전달되는 것이 아니라, 배열의 요소들이 값으로 전달**됩니다.

#### bind

**bind**는 **함수의 첫 번째 인자에 this를 바인딩한다는 점은 같지만**, **함수를 실행하지 않으며 새로운 함수를 반환**합니다. 즉 **반환된 새로운 함수를 실행해야 원본 함수가 실행**됩니다.

---

## [ 브라우저의 렌더링 원리 ]

> 브라우저가 화면에 나타나는 요소를 렌더링 할 때, 웹킷(Webkit)이나 게코(Gecko) 등과 같은 렌더링엔진 을 사용합니다.
> 렌더링 엔진이 HTML, CSS, Javascript로 렌더링할 때 CRP라는 프로세스를 사용하며 다음 단계들로 이루어집니다.

<br />

::::info 렌더링 순서

1. **HTML**를 파싱 후, **DOM**트리를 구축합니다.
2. **CSS**를 파싱 후, **CSSOM**트리를 구축합니다.
3. **Javascript**를 실행합니다.
   :::danger 주의!
   **HTML 중간에 스크립트가 있다면 HTML 파싱이 중단됩니다.**
   :::
4. **DOM과 CSSOM을 조합**하여 **렌더트리를 구축**합니다.
   :::danger 주의!
   **`display: none` 속성과 같이 화면에서 보이지도 않고 공간을 차지하지 않는 것은 렌더트리로 구축되지 않습니다.**
   :::
5. 뷰포트 기반으로 렌더트리의 각 노드가 가지는 정확한 위치와 크기를 계산합니다. _(Layout 단계)_
6. 계산한 위치/크기를 기반으로 화면에 그립니다. _(Paint 단계)_

::::

---

## [ Reflow와 Repaint가 실행되는 시점 ]

### Reflow란?

> 생성된 DOM 노드의 레이아웃 수치(너비, 높이, 위치 등) 변경 시 영향 받은 모든 노드의(자신, 자식, 부모, 조상(결국 모든 노드) ) 수치를 다시 계산하여(Recalculate), 렌더 트리를 재생성하는 과정을 Reflow 라고 합니다.

:::info Reflow

- **DOM 엘리먼트 추가, 제거 또는 변경**
- **CSS 스타일 추가, 제거 또는 변경**
- **CSS 스타일을 직접 변경**하거나, **클래스를 추가함으로써 레이아웃이 변경될 수 있습니다.** 엘리먼트의 길이를 변경하면, **DOM 트리에 있는 다른 노드에 영향을 줄 수 있습니다.**
- **CSS3 애니메이션과 트랜지션. 애니메이션의 모든 프레임에서 리플로우가 발생합니다.**
- **offsetWidth 와 offsetHeight 의 사용. offsetWidth 와 offsetHeight 속성을 읽으면, 초기 리플로우가 트리거되어 수치가 계산됩니다.**
- **유저 행동. 유저 인터랙션으로 발생하는 hover 효과, 필드에 텍스트 입력, 창 크기 조정, 글꼴 크기 변경, 스타일시트 또는 글꼴 전환등을 활성화하여 리플로우를 트리거할 수 있습니다.**

:::

<br />

### Repaint란?

> **Reflow** 과정이 끝난 후 재 생성된 렌더 트리를 다시 그리게 되는데 이 과정을 **Repaint** 라고 합니다.

:::info Repaint

- 가시성이 변경되는 순간 **(opacity, background-color, visibility, outline)**
- **Reflow** 가 실행된 순간 뒤에 실행됩니다.

:::

---

## [ 주소창에 google.com을 입력하면 일어나는 일 ]

::::info

1. 사용자가 웹 브라우저를 통해 google.com 을 입력하면 URL 주소 중 도메인 네임 부분을 DNS 서버에서 검색합니다.
2. DNS 서버에서 해당 도메인 네임에 해당하는 IP 주소를 찾아 사용자가 입력한 URL 정보와 함께 전달합니다.
3. 브라우저는 HTTP 프로토콜을 사용하여 요청 메시지를 생성하고 HTTP 요청 메시지는 TCP/IP 프로토콜을 사용하여 서버로 전송됩니다.
4. 서버는 response 메시지를 생성하여 다시 브라우저에게 데이터를 전송합니다.
5. 브라우저는 response를 받아 파싱하여 화면에 렌더링합니다.

::::

#### DNS

도메인 이름 시스템(DNS)은 사람이 읽을 수 있는 도메인 이름(예: www.amazon.com )을 머신이 읽을 수 있는 IP 주소(예: 192.0.2.44)로 변환합니다. 모든 통신에는 주소가 필요합니다. 출발지와 도착지의 주소를 알아야 통신을 할 수 있습니다. 우리는 이 주소를 IP라고 부릅니다. IP 주소로 변환하는 과정에 개입하는 것이 DNS 입니다.

#### URL

URL(Uniform Resource Locator)은 통합 자원 지시자로 인터넷의 리소스를 가리키는 표준 명칭으로 서버의 자원을 요청할 때 사용됩니다. URL을 통해 인터넷 상의 모든 리소스를 요청할 수 있으며, HTTP, FTP 등의 자원 요청도 가능합니다.

#### HTTP

HTTP(HyperText Transfer Protocol)은 TCP 기반의 클라이언트와 서버 사이에 이루어지는 요청/응답 프로토콜입니다. HTTP는 Text Protocol로 사람이 쉽게 읽고 쓸 수 있습니다. 프로토콜 설계상 클라이언트가 요청을 보내면 반드시 응답을 받아야 합니다. 응답을 받아야 다음 request를 보낼 수 있습니다.

#### 프로토콜

프로토콜은 통신하기 위한 약속들을 기술적으로 잘 정의해 둔 것입니다. 데이터를 송수신하는 순서와 내용을 결정합니다. HTTP, TCP/IP, UDP 모두 프로토콜입니다.

#### TCP

TCP (전송 제어 프로토콜)은 두 개의 호스트를 연결하고 데이터 스트림을 교환하게 해주는 중요한 네트워크 프로토콜입니다. TCP는 데이터 전송을 제어하고 데이터를 어떻게 보낼 지, 어떻게 맞출 지 정합니다. 또한 데이터와 패킷이 보내진 순서대로 전달하는 것을 보장해줍니다.신뢰성과 연결성을 책임지기 위한 프로토콜이 TCP입니다. 호스트와 호스트간의 데이터 전송은 IP(인터넷 계층 프로토콜)에 의지하면서 동시에 신뢰성 있는 전송에 대해서는 TCP가 책임지는 구조입니다.

#### IP

IP (Internet Protocol)은 비신뢰성, 비연결지향 데이터그램 프로토콜로 패킷을 받아서 주소를 해석하고 경로를 결정하여 다음 호스트로 전송하는 역할을 합니다.

#### Response

HTTP 메시지는 서버와 클라이언트 간에 데이터가 교환되는 방식입니다. 메시지 타입은 두 가지가 있습니다. 요청(request)은 클라이언트가 서버로 전달해서 서버의 액션이 일어나게끔 하는 메시지고, 응답(response)은 요청에 대한 서버의 답변입니다.

#### 파싱

파싱은 하나의 프로그램을 런타임 환경(예를 들면, 브라우저 내 자바스크립트 엔진)이 실제로 실행할 수 있는 내부 포맷으로 분석하고 변환하는 것을 의미합니다. 즉, 파싱은 문서의 내용을 토큰(token)으로 분석하고, 문법적 의미와 구조를 반영한 파스 트리(parse tree)를 생성하는 과정입니다.

---

## [ 브라우저 저장소의 차이점 (local, session, cookie) ]

### LocalStorage

:::info

- **로컬 스토리지는 저장한 데이터를 지우지 않는 이상 영구적으로 보관**이 가능합니다.([도메인](#도메인)마다 별도로 로컬 스토리지가 생성됩니다.)
- 최대 크기: 5MB
- 사용 예시: 자동 로그인

:::

### SessionStorage

:::info

- 세션 종료 시 클라이언트에 대한 정보가 삭제됩니다.
- 최대 크기: 5MB
- 사용 예시: 입력 폼 정보, 비로그인 장바구니

:::

### 쿠키(Cookie)

::::note [출처](https://stupidsecurity.tistory.com/9)

`쿠키(Cookie)`란 인터넷 사용자가 어떠한 **웹 사이트를 방문할 경우 그 사이트가 사용하고 있는 서버를 통해 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일이다.** 쿠키에 담김 정보는 인터넷 사용자가 같은 웹사이트를 방문할 때마다 읽히고 수시로 새로운 정보로 바뀐다. **쿠키는 S/W가 아니다.** 그래서 **컴퓨터 내에서 프로그램처럼 실행될 수 없으며 바이러스를 옮길 수도, 악성코드를 설치할 수도 없다.** 하지만 **스파이웨어를 통해 유저의 브라우징 행동을 추적하는데에 사용될 수 있고, 누군가의 쿠키를 훔쳐서 해당 사용자의 웹 계정 접근권한을 획득할 수도 있다.**

**쿠키 종류**

- **Session Cookie** : **보통 만료시간(Expire date) 설정**하고 **메모리에만 저장되며 브라우저 종료 시 쿠키를 삭제**한다.
- **Persistent Cookie** : 장기간 유지되는 쿠키파일로 저장되어 브라우저 종료와 관계없이 사용한다.
- **Secure Cookie** : **HTTPS에서만 사용, 쿠키 정보가 암호화되어 전송**한다.
- **Third-Party Cookie** : **방문한 도메인과 다른 도메인의 쿠키, 광고 배너 등을 관리할 때 유입 경로를 추적하기 위해 사용**한다.

**쿠키 단점**

- 쿠키에 대한 **정보를 매 헤더에 추가하여 보내기 때문에 상당한 트래픽을 발생**시킨다.
- **결제 정보 등을 쿠키에 저장하였을 때 쿠키가 유출되면 보안에 대한 문제점도 발생할 수 있다.**

:::info

- 웹 사이트에서 쿠키를 설정하면, 모든 웹 요청에는 쿠키 정보가 포함됩니다. **(서버 부담 증가)**
- 최대 크기: 4KB
- 사용 예시: 팝업 창

:::
::::

### 서버 인증과 브라우저 저장소

:::danger 주요 정보를 요청 헤더에 넣는 방법
보안에 매우 취약합니다.
:::

:::danger Session, Cookie 방식
서버 부하가 증가하고, 세션 하이재킹 공격에 취약합니다.
:::

::::info JWT 방식

별도의 브라우저 저장소에 저장하지 않고 [JWT](#jwt)를 발급하고 검증하면 되어 확장성이 뛰어납니다.
:::caution
Payload 정보가 제한적이고, JWT길이가 길다는 단점 존재합니다.
:::

::::

#### 도메인

ip는 사람이 이해하고 기억하기 어렵기 때문에 이를 위해서 각 ip에 이름을 부여할 수 있게 했는데, 이것을 도메인이라고 합니다.

#### JWT

JWT(Json Web Token)란 Json 포맷을 이용하여 사용자에 대한 속성을 저장하는 Claim 기반의 Web Token입니다. JWT는 토큰 자체를 정보로 사용하는 Self-Contained 방식으로 정보를 안전하게 전달합니다.

---

## [ REST API란? ]

> **REST 원칙을 적용하여 서비스 API를 설계한 것을 말합니다.**

### REST란 무엇인가?

:::info

- [자원](#자원)을 이름으로 구분하여 해당 자원의 상태를 주고받는 모든 것입니다. HTTP [URI](#uri)를 통해 자원을 명시하고 HTTP 메서드(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 [CRUD](#crud)를 적용하는 것을 말합니다.
- 즉, 자원 기반의 구조 설계의 중심에 자원이 있고, HTTP 메서드를 통해 이를 처리합니다.

:::

### API란 무엇인가?

:::info

- 응용프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스입니다.
- 쉽게 말해 프로그램끼리 통신할 수 있도록 하는 중재자입니다.

:::

#### REST

**Representational State Transfer**의 약자로 전반적인 웹 어플리케이션에서 상호작용하는데 사용되는 웹 아키텍쳐 모델입니다. 즉, **자원을 주고받는 웹 상에서의 통신 체계에 있어서 범용적인 스타일을 규정한 아키텍쳐** 라고 할 수 있습니다.

#### API

**Application Programming Interface의 약자**로 구글 맵 API, 카카오 비전 API 등 기존에 있는 응용 프로그램을 통해서 **데이터를 제공받거나 기능을 사용하고자 할 때 사용하는 인터페이스 및 규격**을 말합니다. API는 프로그래밍 언어, 운영체제 등에서도 사용되는 범용적인 용어입니다. 따라서, **REST API라는 것은 REST 원칙을 적용하여 서비스 API를 설계한 것을 말하며 대부분의 서비스가 REST API를 제공합니다.**

#### 자원

자원(Resource)은 문서, 그림, DB, 이미지, 동영상, 해당 소프트웨어 자체 등의 웹에서 사용되는 모든 자료를 의미합니다.

#### URI

URI는 **Uniform Resource Identifier의 약자**이며, **리소스(전화,지도,이미지,텍스트)에 접근할 수 있는 유일한(Uniform) 식별자(Identifier)를 의미**합니다. URI를 수신하는 기기는 해당 URI에 맞게 데이터를 반환합니다.

#### CRUD

CRUD는 대부분의 컴퓨터 소프트웨어가 가지는 기본적인 데이터 처리 기능인 **Create(생성)**, **Read(읽기)**, **Update(갱신)**, **Delete(삭제)를 묶어서 일컫는 말**입니다. 사용자 인터페이스가 갖추어야 할 기능(정보의 참조/검색/갱신)을 가리키는 용어로서도 사용됩니다.

---

## [ References ]

- [Frontend-Interview-Questions](https://github.com/Esoolgnah/Frontend-Interview-Questions)
- [동기와 비동기](https://velog.io/@dev-katrina/%EB%B9%84%EB%8F%99%EA%B8%B0)
- [비동기 작업의 원리 (JavaScript 엔진, Web API, Task Queue, Event Loop)](https://it-eldorado.tistory.com/86)
- [자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
- [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
- [쿠키(COOKIE)란?](https://stupidsecurity.tistory.com/9)
