---
sidebar_position: 1
---

# JavaScript Reflect

Reflect는 ES6에서 도입된 내장 객체로, 프록시 핸들러의 메서드와 동일한 이름과 동작을 하는 정적 메서드들을 제공합니다.

## Reflect의 주요 특징

1. 모든 메서드가 정적(static)이며, 생성자로 사용할 수 없습니다.
2. 객체의 기본 동작을 가로채고 수정하는 데 사용됩니다.
3. 프록시 핸들러와 함께 사용하면 강력한 메타프로그래밍이 가능합니다.

## 주요 메서드

### 1. Reflect.get()

객체의 속성 값을 가져옵니다.

```javascript
const obj = { a: 1, b: 2 };
console.log(Reflect.get(obj, "a")); // 1
```

### 2. Reflect.set()

객체의 속성 값을 설정합니다.

```javascript
const obj = { a: 1, b: 2 };
Reflect.set(obj, "a", 3);
console.log(obj.a); // 3
```

### 3. Reflect.has()

객체가 특정 속성을 가지고 있는지 확인합니다.

```javascript
const obj = { name: "John" };
console.log(Reflect.has(obj, "name")); // true
console.log(Reflect.has(obj, "age")); // false
```

### 4. Reflect.deleteProperty()

객체의 속성을 삭제합니다.

```javascript
const obj = { name: "John", age: 30 };
Reflect.deleteProperty(obj, "age");
console.log(obj); // { name: 'John' }
```

### 5. Reflect.construct()

new 연산자처럼 생성자 함수를 호출합니다.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = Reflect.construct(Person, ["John", 30]);
console.log(person); // Person { name: 'John', age: 30 }
```

### 6. Reflect와 Proxy 함께 사용하기

```javascript
const target = {
  name: "John",
  age: 30,
};

const handler = {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.name);
// Accessing property: name
// John
```

## 사용 이점

1. **일관성**: 객체 조작을 위한 통일된 인터페이스를 제공합니다.
2. **안전성**: 예외 발생 대신 boolean 값을 반환하는 메서드들이 있어 더 안전한 코드 작성이 가능합니다.
3. **기능성**: 기존 방식으로는 어려웠던 작업들을 수행할 수 있습니다.
4. **메타프로그래밍**: 프로그램이 자신을 검사하고 수정할 수 있는 기능을 제공합니다.

## 주의사항

1. Reflect는 함수 객체가 아니므로 new 연산자와 함께 사용할 수 없습니다.
2. 모든 메서드는 정적이므로 Reflect의 인스턴스를 만들 수 없습니다.
3. IE에서는 지원되지 않으므로 폴리필이 필요할 수 있습니다.

## 결론

Reflect는 JavaScript에서 메타프로그래밍을 위한 강력한 도구입니다. 특히 Proxy와 함께 사용할 때 그 진가를 발휘하며, 객체 조작을 위한 더 깔끔하고 통일된 방법을 제공합니다.
