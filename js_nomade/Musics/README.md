# JavaScript
---
# 1. 프로젝트 명
JS로 크롬 앱 만들기

# 2. 프로젝트 설명
- 크롬앱을 만드는 클론코딩을 통해 JavaScript를 학습하며 그 과정을 기록하기 위함
- 로그인을 하고, 로그인한 유저의 이름을 저장하는 로직을 구현하고자 함

# 3. 프로젝트 실행 방법
- 로그인 할 유저의 이름을 input하면 새로운 유저의 이름이 등록 되고, html파일에서 그 유저의 이름이 출력됨.
로그인 한 유저의 이름이 LocalStrage에 이미 존재한다면, 이를 삭제하고 실행.

# 4. 배운점과 어려웠던 점
- preventDefault() 사용하기
    - Js함수가 어떻게 실행되는지 잘 알지 못하였는데, addEventLister을 통해 특정 행위를 통해 함수가 실행될 때, preventDefault()를 잘 써야 하는 것을 배웠다. 기본 행위가 실행되는 것을 일단 막고, 이후의 코드가 작동되도록 해야 한다.

    - 26번 줄의 코드와 같이 onLoginSubmit이 실행될때, addEventListener의 "submit"으로 인해 submit하게 되면 곧바로 데이터가 전송되고 새로고침 되어버려 이후의 코드가 실행되지 않는다. 콘솔 창에서 input값이 아주 잠깐 보이고 새로고침 되어버린다. 이럴 때 onLoginSubmit 함수의 첫번째 줄에 PreventDefault를 넣어주면, 새로고침이 되는 걸 막고 이후의 코드를 실행하게 된다.

- LocalStorage 사용하기
    - 콘솔창의 Application 탭에서 LocalStorage를 처음 활용해보았다. LocalStarage.setItem('key', 'value')를 통해 데이터를 저장해둘 수 있다. 마치 파이썬의 딕셔너리형태와 비슷하다고 이해하였다.


# 5. 참고
- 노마드 <바닐라 JS로 크롬 앱 만들기>
    - https://nomadcoders.co/javascript-for-beginners/lectures/2907