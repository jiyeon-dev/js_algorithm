# ☝️알고리즘 포인트

> 알고리즘 문제 풀다가 알게된 사실 및 알고리즘 풀때 알고 있으면 좋을 내용들을 적습니다.

## ◎ `배열` 보단 `객체`를 이용하자!

관련 문제 : [178871](https://github.com/jiyeon-dev/js_algorithm/blob/main/programmers/178871.js) → indexOf로 찾으면 시간초과 발생!

✔︎ 이유

- `indexOf`는 순차 검색이라 `O(n)`의 복잡도를 갖기 때문에 길이가 길수록 성능이 저하됨.
- `객체`는 키-값 쌍의 해시 테이블과 유사한 방식으로 관리되기 때문에 `O(1)`의 복잡도를 갖음.

**배열이 크고 여러 번 검색할수록 객체를 사용하는 것이 성능상 이점을 가질 수 있음.**

## ◎ 배열에서 두 값의 자리를 변경할 때는 `splice` 보단 `임시변수`를 이용하자!

관련 문제 : [178871](https://github.com/jiyeon-dev/js_algorithm/blob/main/programmers/178871.js)

✔︎ 이유

- `splice`는 배열에서 일부를 제거하고 새로운 요소를 삽입하는 방식이다. 따라서 내부적으로는 `배열의 재정렬`이 발생할 수 있다.
- `임시 변수`를 이용한 변경은 두 변수의 값을 `직접 교환`하기 때문에 더 빠르다.

## ◎ 아스키코드

관련 문제 : [2785](https://github.com/jiyeon-dev/js_algorithm/blob/main/programmers/2785.js)

```javascript
const char = "A";

// 문자를 ASCII로 변경
const ascii = char.charCodeAt(); // 65

// ASCII를 문자로 변경
String.fromCharCode(ascii); // A
```
