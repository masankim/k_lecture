# nodejs 

### while 문

**while문**은 조건문이 참일 때 실행되는 반복문이다. 조건은 문장안이 실행되기 전에 참, 거짓을 판단한다.

## [문법](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while#문법)

```
while (condition)
  statement
```

- `조건`

  반복이 시작되기 전에 조건문은 참,거짓을 판단받게 된다. 만약 조건문이 참이라면, while문 안의 문장들이 실행된다. 거짓이라면, 문장은 그냥 while 반복문 후로 넘어간다.

- `문장`

  조건문이 참일 때만 while문 속의 문장들이 실행된다. 반복문 속에 여러개의 문장을 사용하고 싶다면 중괄호 { } 를 통해 문장들을 하나로 묶어야 한다.

## [예제](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while#예제)

다음의 while문은 n이 3보다 작을 때까지 반복한다.

```
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}
```

반복을 살펴보면, n을 x에 계속 더하게 된다. 그러므로 x와 n 변수는 다음의 값을 갖는다.

- 첫번째 반복; n=1 과 x=1
- 두번째 반복; n=2 과 x=3
- 세번째 반복; n=3 과 x=6

세번째 반복후, n<3 이라는 초건은 더 이상 참이아니가 되므로 반복은 종료된다



### do... while 문

### [문법](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while#Syntax)

```
do
   statement
while (condition);
```

- `*statement*`

  A statement that is executed at least once and is re-executed each time the condition evaluates to true. To execute multiple statements within the loop, use a [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) statement (`{ ... }`) to group those statements.

- `*condition*`

  An expression evaluated after each pass through the loop. If `condition` evaluates to true, the `statement` is re-executed. When `condition` evaluates to false, control passes to the statement following the `do...while`.

## [예제](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while#Examples)

### [Using do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while#Using_do...while)

In the following example, the `do...while` loop iterates at least once and reiterates until `i` is no longer less than 5.

```
var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);
```



### for 문

#### for (시작식 ; 조건식 ; 증감식) {

​	실행문...

#### }



## [Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Syntax)

```
for ([initialization]; [condition]; [final-expression])
   statement
```

- `initialization`

  An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable. This expression may optionally declare new variables with `var` or `let` keywords. Variables declared with `var` are not local to the loop, i.e. they are in the same scope the `for` loop is in. Variables declared with `let` are local to the statement.

  The result of this expression is discarded.

- `condition`

  An expression to be evaluated before each loop iteration. If this expression evaluates to true, `statement` is executed. This conditional test is optional. If omitted, the condition always evaluates to true. If the expression evaluates to false, execution skips to the first expression following the `for` construct.

- `final-expression`

  An expression to be evaluated at the end of each loop iteration. This occurs before the next evaluation of `condition`. Generally used to update or increment the counter variable.

- `statement`

  A statement that is executed as long as the condition evaluates to true. To execute multiple statements within the loop, use a [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) statement (`{ ... }`) to group those statements. To execute no statement within the loop, use an [empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty) statement (`;`).

## [Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Examples)

### [Using for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Using_for)

The following `for` statement starts by declaring the variable `i` and initializing it to `0`. It checks that `i` is less than nine, performs the two succeeding statements, and increments `i` by 1 after each pass through the loop.

```
for (let i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```

### [Optional for expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for#Optional_for_expressions)

All three expressions in the head of the `for` loop are optional.

For example, in the `initialization` block it is not required to initialize variables:

```
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
```

Like the `initialization` block, the `condition` block is also optional. If you are omitting this expression, you must make sure to break the loop in the body in order to not create an infinite loop.

```
for (let i = 0;; i++) {
   console.log(i);
   if (i > 3) break;
   // more statements
}
```

You can also omit all three blocks. Again, make sure to use a [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statement to end the loop and also modify (increase) a variable, so that the condition for the break statement is true at some point.

```
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```





### break

## [Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#Syntax)

```
break [label];
```

- `label` Optional

  Identifier associated with the label of the statement. If the statement is not a loop or [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch), this is required.

## [Description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#Description)

The `break` statement includes an optional label that allows the program to break out of a labeled statement. The `break` statement needs to be nested within the referenced label. The labeled statement can be any [block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block) statement; it does not have to be preceded by a loop statement.

A `break` statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop, switch, or label statement that the `break` statement is intended to break out of.

## [Examples](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#Examples)

### [break in while loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break#break_in_while_loop)

The following function has a `break` statement that terminates the [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) loop when `i` is 3, and then returns the value 3 * `x`.

```
function testBreak(x) {
  var i = 0;

  while (i < 6) {
    if (i == 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
```



### 함수(function)

### 선언

```javascript
//함수를 선언하는 방법
function <함수이름>( ) {
    
}

//함수를 호출하는 방법
<함수이름>()
```



#### 매개변수(parameter) 와 인자(argument)

```javascript
function func(parmeter1, parameter2) {
    statements
}

func(arg1 , arg2)
```



예제)

```
function func(a , b) {
    console.log(a+b)
}


func(2 , 4)

function func_1(a, b=3) {
    console.log(a+b)
}


func_1(2 ,6)
func_1(2)
```



#### 인자값으로 받을 수있는건 숫자, 문자 , 함수 등 여러가지 다 받을 수 있다.



### 함수는 사용자 정의 함수와 내장함수 



#### 내장함수 

### **▶ 1. eval() - 문자열을 코드로 인식하게 하는 함수.**

 \- eval("문자열")
ex)

```
var a = "1+1";
console.log(a); // 1+1
console.log(eval(a)); // 2
```



![img](https://blog.kakaocdn.net/dn/1Y7cO/btqCUzdCxUs/HTbypBfrUNgKxlY0E9X6A0/img.png)



**※ 주의할점** 
 \- eval이 빠르고 편리하여 jsonParse와 같은 기능으로 많이 사용하곤 하였다.
  다만 eval은 보안 이슈가 발생할 수 있으므로 다른 편리한 라이브러리가 많으므로 사용을 지양하는 것이 좋다고 생각한다.
 \- 참고 : https://goddaehee.tistory.com/36
ex)

```
var jsonStr = '{"no":1, "name":"갓댐"}';
eval("var obj1 = ("+ jsonStr +")" ); // eval 사용
var obj2 = JSON.parse(jsonStr); // 최신브라우저는 javascript 엔진이 JSON을 객체로 채택하여 사용 가능하다.

// obj1, obj2 동일한 결과
console.log(obj1);
console.log(obj2); // String => JSON Object

console.log(JSON.stringify(obj2)); // JSON Object => String
```



![img](https://blog.kakaocdn.net/dn/bJWjb9/btqCUyFMFPz/MZ8qxdXMgYNTgxgjzPJ2K1/img.png)



### **▶ 2. String() - 객체를 문자열로 변환하는 함수.**

 \- String(객체)
ex)

```
String(null);       // null
String(true);       // true
String(false);      // false
String(123);        // 123
String(123.456);    // 123.456
String(new Date()); // Mon Mar 23 2020 14:08:01 GMT+0900 (대한민국 표준시)
```

### **▶ 3. 문자를 숫자로 변환하는 함수**

**1) parseInt()** - 문자열을 파싱하여 정수로 반환 한다. (숫자가 아닌 문자(공백을 제외한) 포함시 무조건 NaN)
**2) parseFloat()** - 문자열을 파싱하여 부동 소수점 수로 반환 한다. 
 (첫자리 문자 : NaN, 첫자리가 문자가 아니며, 숫자 뒤에 문자 : 숫자 뒤 문자 제외 후 숫자로 변환)
**3) Number()** - 전달받은 객체의 값을 숫자로 반환 한다.
 (첫자리 문자 : NaN, 첫자리가 문자가 아니며, 숫자 뒤에 문자 : 숫자 뒤 문자 제외 후 숫자로 변환)


ex)

```
parseInt("777");        // 777
parseInt("777.000");    // 777
parseInt("777.001");    // 777

parseFloat("777");        // 777
parseFloat("777.000");    // 777
parseFloat("777.001");    // 777.001

Number("777");        // 777
Number("777.000");    // 777
Number("777.001");    // 777

parseInt("777 ");   // 777
parseInt(" 777 ");      // 777
parseInt("777 잘못들어간문자열"); // 777
parseInt("잘못들어간문자열 777"); // NaN

parseFloat("777 ");   // 777
parseFloat(" 777 ");      // 777
parseFloat("777 잘못들어간문자열"); // 777
parseFloat("잘못들어간문자열 777"); // NaN

Number("777 ");   // 777
Number(" 777 ");      // 777
Number("777 잘못들어간문자열"); // NaN	
Number("잘못들어간문자열 777"); // NaN	
```

### **▶ 4. 인코딩을 위한 내장 함수, 5. 디코딩을 위한 내장함수**

**1) escape(), unescape()** => deprecated
  참고 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape
**2) encodeURI(), decodeURI()**
 \- encodeURI() : URI에서 주소를 표시하는 특수문자(: ; / = ? &)를 제외하고, 모든 문자를 이스케이프 시퀀스(escape sequences) 처리하여 부호화
  즉 URI 전체를 인코딩 할때 사용.
 \- decodeURI() : encodeURI의 반대의 경우 사용, URI 전체를 디코딩 할때 사용.
**3) encodeURIComponent(), decodeURIComponent()**
 \- encodeURIComponent() : 모든 문자를 이스케이프 시퀀스(escape sequences) 처리하여 부호화
  URI의 특정 파라미터만 인코딩 할때 사용 하거나 인터넷 주소를 하나의 변수에 넣을때 쓸 수 있다.
 \- decodeURIComponent() : encodeURIComponent() 반대의 경우 사용

ex)

```
var uri = "https://goddaehee.tistory.com/category/3. 웹개발";

var ecnUri1 = encodeURI(uri);
var ecnUri2 = encodeURIComponent(uri);
console.log(ecnUri1); // https://goddaehee.tistory.com/category/3.%20%EC%9B%B9%EA%B0%9C%EB%B0%9C
console.log(ecnUri2); // https%3A%2F%2Fgoddaehee.tistory.com%2Fcategory%2F3.%20%EC%9B%B9%EA%B0%9C%EB%B0%9C

console.log(decodeURI(ecnUri1)); // https://goddaehee.tistory.com/category/3. 웹개발
console.log(decodeURIComponent(ecnUri2)); // https://goddaehee.tistory.com/category/3. 웹개발
```



![img](https://blog.kakaocdn.net/dn/lD1cF/btqCU6ChACf/GCtsBPKoRwv5vmG2quSXVK/img.png)



### **▶ 6. 이외 내장 함수**

 \- 인수로 전달된 값이 숫자가 아니라면, 숫자로 변환하여 검사 한다. 형변환을 하여 검사하기 때문에 사실 의도에 벗어난 결과가 나올 수 있으므로 주의 한다.
**1) isFinite()** - 전달된 값이 유한한 수인지 불린으로 리턴
**2) isNaN()** - 전달된 값이 NaN인지를 불린으로 리턴 (ECMAScript 6부터는 [Number.isNaN()](https://goddaehee.tistory.com/Number.isNaN()) 메소드의 사용을 권장, typeof를 사용할 수 도 있다)

ex)

```
isFinite(0);         // true
isFinite(true);      // true
isFinite(null);      // true
isFinite("777");     // true
isFinite("");        // true
isFinite("test");    // false
isFinite(undefined); // false

isNaN(0);         // false
isNaN(true);      // false
isNaN(null);      // false
isNaN("777");     // false
isNaN("");        // false
isNaN("test");    // true
isNaN(undefined); // true
```



# JS 배열 내장함수

JS를 배울때 배열의 내장함수에 대해 쉽게 생각하고 넘어 갔었는데 사용할때 마다 자꾸 검색하고 사용하다보니 한번 정리를 깔끔하게 해야 겠다는 생각이 들었다. 이번에 기회에 정리해보려 한다.

알아 볼 내장 함수들은 forEach, map, filter, reduce, splice, slice, shift, pop, unshift, push, indexof, findindex, find, join 이다.

------

## 1. forEach

forEach 메서드는 배열을 반복하는 메서드이다. 일반적으로 무언가를 반복하고자 할때는 for문을 사용한다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 for(let i=0;i<a.length;i++) {
4   console.log(a[i]); // 출력 : 1,2,3,4,5
5 }
```

위와 같이 배열 a의 길이를 이용하여 for 문 안에서 인덱스 i 값을 원소로 하여 반복하는 방식을 사용한다. 하지만 forEach 메서드를 사용하면 보다 쉽게 구현할 수 있다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 a.forEach(function(s) {
4    console.log(s); // 출력 : 1,2,3,4,5
5 })
```

배열 a는 각 1,2,3,4,5의 요소를 가지고 있다. 3열에서 배열 a의 메서드 forEach를 호출 하는데 인자로 함수를 전달하고 함수의 매개변수는 배열 a의 요소가 된다. 첫번째 배열 인덱스부터 마지막 배열 인덱스까지 반복한다.

------

## 2. Map

Map 메서드는 해당 배열의 모든 요소를 이용하여 새로운 배열을 반환하는 메서드이다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.map(function(s) {
4     return s * s;
5 })
6  
7 console.log(b); // 출력 : [1, 4, 9, 16, 25]
```

배열 a는 각 1,2,3,4,5의 요소를 가지고 있다. 3열에서 a배열의 map 메서드를 호출하고 인자로 함수를 넣고 함수의 매개변수는 배열 a의 요소가 된다. 리턴 값으로 s*s를 리턴하여 새로운 배열을 생성하고 b 변수에 저장했다. 7열에서 새로운 배열 1,4,9,16,25를 출력한다.

------

## 3. filter

filter 메서드는 조건에 만족하는 모든 요소들을 모아 새로운 배열을 반환하는 메서드이다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.filter(function(s){
4     return s%2 === 0;
5 })
6  
7 console.log(b); // 출력 : [2, 4]
```

배열 a는 각 1,2,3,4,5의 요소를 가지고 있다. 3열에서 filter 메서드를 호출하고 리턴에서 매개변수 s를 2로 나누었을때 나머지가 0인 요소들만 리턴하고 있다. 즉 매개변수가 해당 리턴의 조건을 반족하는 경우에만 해당 매개변수를 리턴한다. 좀 더 예제를 만들어 다르게 해보자.

```javascript
1 const a = [
2    {
3        name: 'jeon',
4        age:20
5    },
6    {
7        name: 'park',
8        age:25
9    },
10    {
11        name: 'park',
12        age:25
13    }
14 ]
15  
16 const b = a.filter(function(s) {
17     return s.age === 25;
18 })
19
20 console.log(b); 출력결과 ↓↓↓↓
// [
//     {
//         name: 'park',
//         age:25
//     },
//     {
//         name: 'park',
//         age:25
//     }
// ]
```

이번엔 배열안에 3개의 객체를 저장 하였다. 각 객체들은 name과 age 프로퍼티를 가지고 있다. 마찬 가지로 16열에서 filter 메서드를 호출 하는데 이번엔 각 개체의 age 프로퍼티가 25일 경우에만 리턴하도록 설정했다. 즉 이때 매개변수 s는 a배열의 객체들이 된다. 20열에서 b배열을 출력한 결과로 1개의 배열이 리턴되고 안에 2개의 배열이 담겨있다.

------

## 4. reduce

reduce 메서드는 배열의 각 요소에 대해 리듀서(reducer) 함수를 실행하고 하나의 결과값을 반환한다.
인자로는 리듀서함수와 accumulator 초기값을 받는다. reducer 함수란 정해진 4개의 매개변수가 있다.

accumulator : 누적 되는 매개 변수
currentValue : 현재 순환하는 인덱스의 값
currentIndex : 현재 순환하는 인덱스
array : 호출한 배열을 가르킴

위의 순서를 지켜야 하며 매개변수 이름은 바뀌어도 상관이 없다. currentIndex와 array 매개변수는 생략 가능하다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.reduce(function(a,b) {
4     return a + b;
5 },0)
6  
7 console.log(b); // 출력: 15
```

배열 a는 1,2,3,4,5 요소를 가지고 있다. 3열에서 reduce 메서드를 호출하는데 매개 변수로 a(accumulator) b(currentValue)를 받고 있다. 4열에서 a와 b를 더한 값을 리턴했다. 리턴의 결과 값은 매개변수 a에 저장되며 다시 순환한다. 여기서 a는 0이다. 2번째 매개변수 0으로 초기화 했다. b는 a 배열의 첫번째 요소 1이된다. 즉 0과 1을 더한 값을 다시 a 매개변수에 저장 하는 것이다. 그 다음 요소 2가 매개변수 b로 저장되고
다시 a와 b를 더한 값을 a 매개변수에 저장하고 배열의 마지막 원소까지 반복한다. 7열에서 1+2+3+4+5의 값인 15를 출력했다. 이번에는 currentIndex와 array 매개변수까지 다 사용해보자.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.reduce(function(a,b,c,d) {
4     if(c === d.length - 1) {
5         return ( a + b ) / d.length;
6     } else {
7         return a + b;
8     }
9 })
10 
11 console.log(b); // 출력: 3
```

4열에서 if문을 통해 c 가 d의 길이 -1와 같은지 검사한다. 여기서 c(currentIndex)는 배열의 인덱스이고 d(array)는 a배열이다. d.length - 1을 한것은 배열의 첫 인덱스는 0부터 시작하기 때문이다. 즉 인덱스 0번부터 4번까지 요소를 검사한다. 이 조건이 만족하는 경우는 마지막 요소를 순회하는 경우 a와 b를 더해주고
a배열의 길이를 나누어 평균을 리턴한다. 11열에서 15를 a의 길이로 나눴을때 값은 3을 출력했다.

------

## 5. splice

splice 메서드는 해당 구간 인덱스의 요소를 다른 요소로 바꾸거나 삭제하고 새로운 배열을 반환한다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.splice(0,2);
4  
5 console.log(b); // 출력: [1,2]
6 console.log(a); // 출력: [3,4,5]
```

3열에서 splice 메서드를 호출하여 첫번째 요소로는 시작지점의 인덱스를 지정하고 두번째 요소로는 시작지점으로 부터 제거할 요소의 수이다. 5열과 6열에서 a와 b를 둘다 출력했을때 b배열에는 a배열의 0번째 요소 1부터 2개의 요소 1,2를 가지는 배열을 출력했다. a배열에는 1,2 요소가 삭제 된 3,4,5 배열을 출력했다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.splice(0,2,10,11);
4 
5 console.log(b); // 출력: [1,2]
6 console.log(a); // 출력: [10,11,3,4,5]
```

이번에는 3열에서 3번째 4번째 인자로 해당 요소를 삭제하고 추가할 10과 11을 전달했다. 6열에서 a를 출력한 결과를 보면 1과 2를 삭제하고 10과 11이 추가됐다.

## 5-1. slice

slice 메서드는 splice와는 다르게 해당 구간 인덱스만을 가지는 새로운 배열을 반환한다. splice 요소는 해당 구간 인덱스를 삭제하지만 slice 메서드는 삭제하지 않고 유지한다.

```javascript
1 const a = [1,2,3,4,5];
2  
3 const b = a.slice(1,3);
4  
5 console.log(b); // 출력: [2,3]
6 console.log(a); // 출력: [1,2,3,4,5]
```

3열에서 주의깊게 봐야 할 점은 splice 메서드는 2번째 인자로 구간을 정할때 시작 지점 인덱스로 부터 정하지만 slice 메서드는 배열의 첫번째 인덱스로 부터 정해진다. 그리고 end요소 -1부분까지만 구간을 가진다.
즉 위에서 인자로 1과3을 전달 하였는데 이 의미는 a 배열의 1번째 인덱스 2부터 3번째 요소 4의 전까지(end-1) 즉 3 인덱스까지만 구간으로 정한다. 그 결과로 5번 열에서 확인 해보면 2와 3이 리턴됐다.
만약 인자가 음수 값을 가질 경우 배열의 마지막부터 계산한다.

------

## 6. shift pop unshift push

이 메서드들은 배열의 제일 앞 인덱스에 추가하거나 삭제하고 마지막 인덱스에 추가하거나 삭제한다.

### shift

```javascript
1 const a = [1,2,3,4,5];
2  
3 a.shift(); 
4 console.log(a); // 출력: [2,3,4,5]
```

배열의 첫번째 요소를 제거한다.

### pop

```javascript
1 const a = [1,2,3,4,5];
2  
3 a.pop();
4 console.log(a); // 출력: [1,2,3,4]
```

배열의 마지막 요소를 제거한다.

### unshift

```javascript
1 const a = [1,2,3,4,5];
2  
3 a.unshift(10);
4 console.log(a); // 출력: [10,1,2,3,4,5]
```

배열의 첫번째 요소에 10을 추가한다.

### push

```javascript
1 const a = [1,2,3,4,5];
2  
3 a.push(11);
4 console.log(a); // 출력: [1,2,3,4,5,11]
```

배열의 마지막 요소에 11을 추가한다.

------

## 7. indexOf

```null
1 const a = ['호랑이', '사자', '고양이', '멍멍이'];
2 console.log(a.indexOf('고양이')); // 2
```

배열의 요소 값을 indexOf 메서드 인자로 넘겨주면 해당 하는 값이 몇번째 인덱스 인지 알려준다.

------

## 8.findIndex

```javascript
1 const a = [
2   { name : '호랑이' },
3   { name : '사자' },
4   { name : '고양이' },
5   { name : '멍멍이' }
6 ]
console.log(a.findIndex(ary => ary.name === '고양이')); // 2
```

배열에서 조건에 맞는 값이 몇번째 인덱스 인지 알려준다. findIndex 메서드의 인자로 조건을 콜백함수로 넘겨준다.

------

## 9.find

```javascript
1 const a = [
2   { name : '호랑이' },
3   { name : '사자' },
4   { name : '고양이' },
5   { name : '멍멍이' }
6 ]
7 console.log(a.find(ary => ary.name === '고양이')); // {name: '고양이'}
```

findIndex 메서드와 매우 유사하지만 차이점은 findIndex는 인덱스를 리턴하지만 find는 값을 리턴한다.

------

## 10. join

```javascript
const a = [1,2,3,4,5];
console.log(a.join('A')); // 1A2A3A4A5;
```

배열을 문자열로 리턴하는데 메서드의 인자로 넘겨준 값으로 각 요소 사이에 구분을 둘 수 있다.
인자로 아무것도 전달하지 않으면 ','로 구분 한다. ''공백을 인자로 전달 할 경우 12345 같이 모든 요소가 구분 없이 리턴한다.





### 사용자 정의 함수

문법

// 함수의 선언 규칙
function function_name (매개변수 들) {
// 함수의 명령문 들
}



예제1

```javascript
        // name 과 v 라는 매개변수로 하는 함수
function print_value(name, v) {
console.log("Name: " + name + ", ");
console.log("Value: " + v + "<br/>");
var a = eval("1+2*3+4");
console.log(a)
}

// 김태경 , 175를 인자라 한다.
print_value("김태경", "175");

```





예제2

```javascript
// name 과 v 라는 매개변수로 하는 함수
function print_value(name, v="200") {
document.write("Name: " + name + ", ");
document.write("Value: " + v + "<br/>");
var a = eval("1+2*3+4");
document.write(a)
}

// 김태경 를 인자라 한다.
print_value("김태경");
   
```



위와 같은 예제는 매개변숙 2개임에도 불구하고 v는 초기값을 가지고 있으므로 함수를 호출할때

인자값으로 전달하지 않아도 된다.



# 객체 (자바스크립트에서 가장 중요한 부분)

#### 객체는 관련된 데이터와 함수(일반적으로 여러 데이터와 함수로 이루어지는데, 객체 안에 있을 때는 보통 프로퍼티와 메소드라고 부릅니다)의 집합입니다.

##### 다음과 같은 예제의 형태를 객체

```javascript
var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};
```



```javascript
var data = {
	obj:{
        name : "kim"
    },
    age:32
}
```



```javascript
//var obj = {}
var obj = new Object()

```

객체안에 어떤 일정한 프로포티나 메소드를 호출하는 방법은 다음과 같다.

```javascript
//person['name']
person.name
>> ['Bob', 'Smith']

person.bio()

data.obj.name
>> "kim"

person.name[1]
>> "Smith"
```



## [점 표기법](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics#점_표기법)

위에서, 우리는 객체의 프로퍼티와 메소드를 **점 표기법**을 통해 접근했습니다. 객체 이름(person)은 **네임스페이스**처럼 동작합니다. 객체내에 **캡슐화되어있는**것에 접근하려면 먼저 점을 입력해야합니다. 그 다음 점을 찍고 접근하고자 하는 항목을 적습니다. 간단한 프로퍼티의 이름일 수도 있을 것이고, 배열의 일부이거나 객체의 메소드를 호출할 수도 있습니다.

```
person.age
person.interests[1]
person.bio()
```

### [하위 namespaces](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics#하위_namespaces)

다른 객체를 객체 멤버의 값으로 갖는 것도 가능합니다. 예를 들면, 다음과 같은 name 멤버를 

```
name: ['Bob', 'Smith'],
```

아래와 같이 바꿔봅시다.

```
name : {
  first: 'Bob',
  last: 'Smith'
},
```

자, 이제 우리는 성공적으로 **하위 namespace** 를 만들었습니다. 복잡해보이지만, 사실 그렇지도 않습니다. 이 속성을 사용하려면 그저 끝에 다른 점을 하나 찍어주기만 하면 됩니다. JS 콘솔에서 아래와 같이 입력해보세요.

```
person.name.first
person.name.last
```

**중요**: 객체의 속성이 바뀌었으니까, 기존 메소드 코드를 바꿔 줘야 합니다. 기존 코드를

```
name[0]
name[1]
```

아래와 같이 바꿔줘야 합니다.

```
name.first
name.last
```

그렇지 않으면 기존 메소드는 더 이상 동작하지 않을 것입니다.

## [괄호 표기법](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics#괄호_표기법)

객체의 프로퍼티에 접근하는 다른 방법으로 괄호 표기법을 사용하는 것이 있습니다. 다음과 같이 사용하는 대신

```javascript
person.age
person.name.first
```

이렇게 사용할 수 있습니다.

```javascript
person['age']
person['name']['first']
```

이런 방식은 배열 속에 있는 항목에 접근하는 방법과 매우 유사해 보이는데 실제로도 이는 기본적으로 동일한 것입니다. 한 항목을 선택하기 위해 인덱스 숫자를 이용하는 대신에 각 멤버의 값들과 연결된 이름을 이용합니다. 객체가 간혹 **연관배열 (associative arrays**)이라고 불리는 것이 당연합니다. 연관배열은 배열이 숫자를 값에 연결하는 것과 같은 방법으로 스트링을 값에 매핑합니다.



## [객체 멤버 설정하기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics#객체_멤버_설정하기)

지금까지는 객체 멤버를 단순히 가져오기만(또는 **반환**) 했습니다. 설정할 멤버를 간단히 명시하여(점이나 대괄호 표기법을 사용) 객체 멤버의 값을 **설정**(갱신)하는 것도 물론 가능합니다.

```
person.age = 45;
person['name']['last'] = 'Cratchit';
```

위의 코드를 입력한 다음, 객체 멤버값을 아래와 같이 다시 확인해봅시다.

```
person.age
person['name']['last']
```

객체 멤버를 설정하는 것은 단순히 기존에 존재하는 프로퍼티나 메소드로 값을 설정하는 것 뿐 아니라, 완전히 새로운 멤버를 생성할 수도 있습니다. JS 콘솔에서 아래 내용을 입력해보세요.

```
person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }
```

자, 이제 새로운 멤버를 테스트해보세요.

```
person['eyes']
person.farewell()
```

대괄호 표현의 이점 중 하나는 멤버의 값을 동적으로 변경할 수 있을 뿐아니라, 멤버 이름까지도 동적으로 사용할 수 있다는 것입니다. 자, 만약 사용자가 두개의 텍스트 입력을 통해서 people 데이터에 커스텀 값을 넣고 싶어한다고 가정해봅시다. 그 값은 다음과 같이 얻어올 수 있을겁니다.

