<h1>202330117 송예진</h1>

<h2 style="background-color: gray;">📌 6주차 4월 17일</h2>

## state 끌어올리기
- handleClick 함수는 JavaScript의 slice() 배열 메서드를 사용하여 squares 배열의 사본인 nextSquares를 생성합니다.
- 그 다음 handleClick 함수는 nextSquares 배열의 첫 번째 Squares(indes [0])에 X를 추가하며 업데이트

- i를 handleClick에 전달해야 함
- Square의 onSquareClick prop를 아래와 같이 JSX에서 직접 handleClick(0)으로 설정할 수도 있지만, 이 방법은 작동하지 않음

=> 객체만 전달해라

- () => handleClick(0)은 화살표 함수로, 함수를 짧게 정의하는 방법입니다.
- Square가 클릭되면 => "화살표" 뒤의 코드가 실행되어 handleClick(0)을 호출합니다.
- handleClick(0) 함수를 화살표 함수가 호출하고, 화살표 함수를 Sqaure에 전달
- 나머지 8개의 Sqaure 컴포넌트 수정
</br></br></br>

- 왼쪽 위 사각형 클릭시 button이 Square로부터 onClick prop으로 받은 함수가 실행됨
- squares 배열의 첫번째 엘리먼트를 null에서 X로 업데이트
- Board 컴포넌트의 square state가 업데이트되어 Board와 그 모든 자식이 다시 렌더링됨
- 최종적으로 사용자는 왼쪽 위 사각형을 클릭한 후 비어있는 사각형이 X로 변경된 것을 확인
</br></br></br>

- DOM &lt; button &gt; 엘리먼트의 onClick 어트리뷰트(속성)는 빌트인 컴포넌트이기 때문에 React에서 특별한 의미
- 사용자 정의 컴포넌트, 예를 들어 Square의 경우 이름은 사용자가 원하는대로 지을 수 있음
- Square의 onSquareClick prop나 Board의 handleClick 함수에 어떠한 이름을 붙여도 코드는 동일하게 작동
- React에서는 주로 이벤트를 나타내는 prop에는 onSomething과 같은 이름을 사용하고, 이벤트를 처리하는 함수를 정의할 때는 handleSomething과 같은 이름을 사용

## 불변성이 왜 중요할까요
- 원본 데이터를 직접 변형하지 않음으로써 몇가지 이점을 얻을 수 있음

1. 불변성을 이용하면 복잡한 기능을 훨씬 쉽게 구현가능
- 특정 작업을 실행 취소하고 다시 실행하는 기능은 앱의 일반적인 요구사항
- 이전 버전의 데이터를 그래돌 유지하여 나중에 재사용할 수 있음

2. 불변성을 사용하는 것의 또 다른 장점이 있음
- 부모 컴포넌트의 state가 변경되면 모든 자식 컴포넌트가 자동으로 다시 렌덜이 됨
- 변경사항이 없는 자식 컴포넌트도 포함
- 사용자에게 보이는 것은 아니지만, 트리의 영향을 받지 않는 부분의 리렌더링을 피하는 것이 좋음
- 데이터의 변경 여부를 저렴한 비용으로 판단 가능

## 구조 분해 할당 (Destructuring Assignment)
- 비구조화 할당, 구조화 할당이라고도 번역되지만 구조 분해 할당을 많이 사용합니다.
- 배열이나 객체의 구조를 해체하여 내부 값을 개발 변수에 쉽게 할당하는 방법
- 코드의 간결성과 가독성을 높임
- map함수에서도 사용되는 아주 많이 사용하는 방법

<h2 style="background-color: gray;">📌 6주차 4월 10일</h2>

## props를 통해 데이터 전달하기
- 이제 Board에서 Square로 prop value를 전달해 보겠습니다.
- 정상적으로 출력되는지 확인해 보세요.

## 사용자와 상호작용하는 컴포넌트 만들기
- Square 컴포넌트를 클릭하면 X로 채워지게 코드를 수정해 보겠습니다.
1. 먼저 Square 내부에 handleClick 함수를 선언
2. Square 컴포넌트에서 반환되는 JSX 버튼의 props에 onClick 추가

- 다음으로 사각형 컴포넌트가 클릭 된 것을 기억하고 X로 채우기
- 컴포넌트는 무언가 기억을 위해 useState라는 Hook을 제공
- Sqaure의 현재 값을 state에 저장하고, Square가 클릭하면 값이 변경

1. 파일 상단에서 useState를 import합니다.
2. Square 컴포넌트에서 value prop을 제거합니다. 대신 useState를 사용
3. Square 컴포넌트의 시작 부분에 useState를 호출하고, value라는 이름의 state 변수를 반환

## React Developer Tools
- React 개발자 도구를 사용하면 React 컴포넌트의 props와 state를 확인할 수 있습니다.
- CodeSandBox의 브라우저 구역 하단에서 React 개발자 도구 탭을 찾을 수 있습니다.? 찾을 수가 없음.ㅠㅠ
- 개발자 도구에서 component를 열면 프로젝트 관련 정보를 얻을 수 있음

## 게임 완료하기
1. State 끌어올리기
- 현재 각 Square 컴포넌트는 게임 state의 일부를 기억합니다.
- 틱택토 게임에서 승자를 확인하려면 Board가 9개의 Square 컴포넌트 각각의 state를 기억하고 있어야 합니다.
- Board가 각각의 Square에서 기술적으로는 가능하지만, 코드가 이해하기 어렵고 버그에 취약하며 리팩토링하기 어렵기 때문에 권장하지 않습니다.
- 가장 좋은 방법은 state를 각 Square가 아닌 부모 컴포넌트인 Board에 저장하는 것입니다.
- Board 컴포넌트는 각 Square에 숫자를 전달했을 때와 같이 prop를 전달하여 각 Square에 표시할 내용을 정할 수 있습니다.
- 여러 자식 컴포넌트에서 데이터를 수집하거 고유하려면 부모 컴포넌트에서 공유 state를 선언해야함
- 부모 컴포넌트는 props를 통해 해당 state를 자식 컴포넌트에 전달 가능
- 자식 컴포넌트가 서로 동기화되고 부모 컴포넌트와도 동기화 가능

2. component 분리하기
- Board와 Square 분리


<hr/>

<h2 style="background-color: gray;">📌 5주차 4월 3일</h2>

## 이벤트에 응답하기
- component 내부에 event handler 함수를 선언하면 event에 응답할 수 있습니다.
- onClick-(handleClick)의 끝에 소괄호()가 없는 것을 주목하세요!
- 함수를 호출하지 않고 전달만 하면 됩니다.
- React는 사용자가 버튼을 클릭할 때 이벤트 핸들러를 호출합니다.

## 화면 업데이트하기
- component가 특정 정보를 "기억"해 두었다가 표시하기를 원하는 경우가 있습니다.
- 예를 들어 버튼이 클릭된 횟수를 세고 싶을 수 있습니다.
- 이렇게 하려면 component에 state를 추가하면 됩니다.

<br>

- 먼저, React에서 useState를 import합니다.
- 이 코드를 보면 useState는 react 파일 안에 Named Exports로 선언되어 있는 여러 개의 component 중 하나라는 것을 알 수 있습니다.
- 이제 component 내부에 state 변수를 선언할 수 있습니다.

<br>

- App.js에 CountState component를 호출합니다.
- 버튼은 반드시 2개 이상을 만들어야 합니다.
- 출력이 정상으로 되는지 확인하고 버튼을 테스트합니다.
- 화면이 아래쪽으로 너무 길면 CSS를 수정해서 두 구역으로 나눠 주세요.

## Hook 사용하기
- use로 시작하는 함수를 Hook라고 합니다.
- useState는 React에서 제공하는 내장 Hook입니다.
- 다른 내장 Hook은 API 참고서에서 찾아볼 수 있습니다.
- 또한 기존의 것들을 조합하여 자신만의 Hook을 작성할 수도 있습니다. 사용자 Hook
- Hook은 다른 함수보다 더 제한적입니다.
예를 들면
- component 또는 다른 Hook의 상단에서만 Hook을 호출할 수 있습니다.
- 조건이나 반복문에서 useState를 사용하고 싶다면 새 컴포넌트를 추출하여 그곳에 넣으세요

## Hook의 사용 규칙
- Hook은 React의 렌더링 및 상태 관리 메커니즘과 밀접하게 연결되어 있으며, 아래와 같은 규칙을 따라야 합니다.
1. 최상위에서만 호출해야 한다.<br>
**if, for, while 등의 블록 내부에서 Hooks를 호출**
2. React 함수형 component 또는 사용자 Hook 내부에서만 사용 가능<br>

## component 간 데이터 공유
- 사이트에서는 MyButton으로 설명하고 있지만, 우리는 CountState로 작성했던 것을 기억하고 사이트의 설명을 봐야 합니다.
- 하지만 데이터를 공유하고 항상 함께 업데이트하기 위한 component가 필요한 경우가 많습니다.
- 두개의 CountState2 component가 동일한 count를 표시하고 함께 업데이트하려면, state를 개별 버튼에서 모든 버튼이 포함된 가장 가까운 component 안으로 이동해야 합니다.
- 여기서 이야기하느 제일 가까운 component는 App component입니다.


<h2 style="background-color: gray;">📌 4주차 3월 27일</h2>

## Component의 생성 및 nesting(중첩)
- **component**는 고유한 로직과 모양을 가진 UI의 일부
- 버튼처럼 작을 수도 있고, 전체 페이지처럼 클 수도 있습니다.
- 마크업을 반환(return)하는 JavaScript 함수
- **Nesting**은 CSS선택자의 중첩 구조를 생각하면 쉽게 이해할 수 있습니다.
- css 중첩 구조는 2023년부터 자체 지원함. 이전에는 Sass나 Lass 등을 이용할 때 사용함.

## ✏️ 실습 ##
- MyApp라는 함수형 component를 만들어 보겠습니다.
1. 어떤 디렉토리에 파일을 만들지?
2. 파일 이름은 뭐라고 할지?
3. 함수는 어떻게 구성할지?

* 우리가 사용할 component는 src/ 아래 만들어야 합니다.
* 이번에는 MyApp을 만들지 않고 기존의 App.js를 이용

## export default와 export의 차이
### Namde Exports (export)
- 하나의 파일 안에 여러개 component가 있을 때 사용
- component를 사용하는 쪽에서는 component 정확한 이름 명시해야 합니다.
### Default Exports (export default)
- 하나의 파일 안에서 하나의 component만 내보내는 경우 사용
- component를 사용하는 쪽에서는 어떤 이름을 사용해도 상관 없습니다.

## JSX로 마크업 작성하기
- 앞에서 작성한 코드의 마크업 문법을 JSX라고 함
- 편의성 위해 사용
- JSX는 HTML보다 더욱 엄격한 문법을 적용
- React에서는 여러 개의 component를 JSX 태그로 반환할 수 있음
- 다만 여러 개의 component를 &lt;div&gt;...&lt;/div&gt; 또는 빈 &lt; &gt;...&lt;/ &gt; wrapping해 줘야 합니다.

## 스타일 추가하기
- React에서는 className으로 CSS 클래스를 지정
- className은 HTML의 class 속성과 동일한 방식으로 동작
- CSS 파일을 추가하는 방법을 규정하지 않음-> 정적 페이지를 작성할 때와 동일한 방법을 지원
- 가장 간단한 방법은 HTML에 &lt;link&gt;태그를 추가하는 것

## 데이터 표시하기
- JSX를 사용하면 자바스크립트에 마크업을 넣을 수 있습니다. -> JS안의 마크업 안에 JS를 넣는다는것이 더 정확
- JSX 코드 내에서 JavaScript로 "탈출"하여 변수나 표현식을 사용하는 것
- 이 방법을 **Excape Back**이라고 합니다.
- { } 중괄호를 사용해서 변수나 표현식을 사용자에게 표시하도록 하는 것
- 단순히 문자열을 전달하는 경우에는 중괄호 대신 큰 따옴표 사용

## 조건부 렌더링
- React에서 조건문을 작성하는 데에는 특별한 문법이 필요 없습니다.
- 일반적인 자바스크립트 코드를 작성할 때 사용하는 것과 동일한 방법을 사용

## Tutorial 환경설정정
- 문서에서는 CodeSandBox를 사용해서 학습을 진행한다고 합니다.
- 그러나 우리는 이미 CRA로 프로젝트를 생성하는 방법을 알고 있기 때문에 local에 프로젝트를 생성하고 학습을 진행합니다.
- 만일 현재 사용하고 있는 프로젝트를 생성하고 바로 commit을 했다면, switch 명령으로 처음 commit으로 이동한 후 새로운 branch를 만들어 진행하면 됩니다.

## 초기 코드 살펴보기
- 프로젝트를 새로 생성하거나, 초기 commit으로 switch해서 새 branch를 만듭니다.
- src/에 있는 파일 중 불필요한 파일을 삭제합니다. 반드시 삭제해야 하는 것은 아닙니다.


<hr>

<h2 style="background-color: gray;">📌 3주차 3월 20일</h2>

## <span> React Project의 구조 및 역할</span>

- **App.js**: 메인 컴포넌트
- **index.js**: React 앱의 진입점(entry point).ReactDOM.createRoot를 사용하여 App.js를 렌더링함.
- **.gitignore**: Git에 추가하지 않을 파일 목록을 정의.
- **pagcke.json**: 의존성 파일

- **node_modules/**: 초기 node module 및 새로 설치하는 패키지가 저장됩니다. git으로 관리하지 않기 때문에 디렉토리 이름이 흐릿하게 나와 있는 것을 확인할 수 있습니다.(압축하지 말 것)
- **public/**: 정적(static) 파일을 저장하는 디렉토리 입니다. build 후 배포할 html, CSS, JavaScript 등이 보관되는 곳입니다. 개발하면서 특별히 수정할 코드는 없습니다.
- **public/index.html**:  html 파일
- **src/**: React 프로젝트의 주요 코드가 위치하는 디렉토리입니다. 개발하면서 대부분의 작업이 이루어지는 곳입니다.
- **src/App.js**: 메인 commponent로 필요한 sub component를 모아서 관리합니다. 출력을 위해서 index.js로 전달됩니다.
- **src/App.css**: App.jc에 적용되는 스타일을 정의하는 스타일 파일입니다.
- **src/index.js**: React 앱의 진입 점으로 최종 렌더링의 되는 곳입니다.ReactDOM.creatRoot 사용하여 App.js를 렌더링합니다. 메인메소드같은거, commponent가 아님. 
- **src/index.css**: 전역 스타일을 정의하는 스타일 파일입니다.

## <span> 의존성 관리와 package.json</span>

- **package.json**은  패키지의 의존성을 관리하는 파일
- **의존성**이란, 하나의 소프트웨어가 다른 소프트웨어(라이브러리, 패키지, 모듈 등)에 의존하여 동작하는 관계
- 즉 어떤 프로젝트에 사용된 각종 패키지 등의 버전을 동일하게 유지하기 위한 것입니다.
- 협업을 할 때는 팀원들 각자의 컴퓨터에 같은 패키지들을 설치해서 동일한 개발환경을 구성해야 합니다. 코드는 GitHub 등 Git server를 이용하지만, node 패키지는 각 팀원들이 설치해야 합니다.
- 의존성을 무시하면 다른 버전의 패키지를 설치하는 팀원 때문에 개발 프로젝트의 오류 등이 발생할 수 있습니다.
- 개인의 경우도 GitHub에 있는 코드를 내려 받은 후에 동일한 개발환경을 구성해야 할 때가 있습니다.

## <span> 의존성을 관리하는 이유</span>
- **손쉬운 설치 및 업데이트**
- **일관된 개발 환경 유지지**
- **중복 설치 방지지**
- 프로젝트에 필요한 라이브러리를 쉽게 설치, 업데이트, 유지할 수 있도록 도와주는 시스템입니다.

## <span> Component를 작성하는 JavaScript와 Markup</span>
- **React component**는 JavaScrip함수입니다.
- Reat에서 사용되는 마크업을 JSX(Javascript Syntax eXten)

## <span>필요한 곳에 상호작용 기능 추가</span>
- React component는 데이터를 수신하고, 화면에 표시해야 하는 내용을 반환합니다.

## <span>full-stack App 개발을 도와주는 React Framework</span>
- React는 라이브러리이기 때문에 component를 조합할 수 있지만 라우팅 및 데이터 가져오기 방법 등을 규정하지는 않습니다.
- React로 전체 앱을 빌드하려면 Next.js또는 Remix와 같은 full-stack React Framework을 사용하는 것이 좋습니다.
- React도 하나의 아키텍처입니다.
- 따라서 이를 구현하는 Framework를 사용하면, 서버에서 실행되거나 혹은 빌드 중에도 비동기 component에서 데이터를 가져올 수도 있습니다.
- 또한 파일이나 데이터베이스에서 데이터를 읽어와서 대화형 component에 전달할 수도 있습니다.
- **full-stack App을 개발하는 것이라면 Framework을 사용하는 것이 생산성이 높습니다.**

## <span>모든 플랫폼에서 최고의 성능을 발휘하는 React</span>
- 동일한 기술을 사용하여, 웹앱과 네이티브 앱을 모두 구축할 수 있습니다.
- 각 플랫폼의 고유한 강점을 활용하여 모든 플랫폼에 잘 어울리는 인터페이스를 구현할 수 있습니다.

### 웹의 본질에 충실하기
- 빠르게 로드되기
- 서버에서 데이터를 가져오는 동안에도 html을 스트리밍을 시작할 수 있기 때문에, JavaScript 코드가 로드되기 전에 콘텐츠를 점진적으로 채울 수 있습니다.
- 클라이언트 측에서는 표준 웹 API를 사용해서, 렌더링 도중에도 UI를 반응하도록 할 수 있습니다.
- **이런 동작들은 사람들이 원하는 빠른 렌더링을 도와줍니다.**

### 진정한 네이티브 UX를 실현
- 사람들은 네이티브 앱이 자신의 플랫폼과 같은 모양과 느낌을 주기를 원합니다.
- React Native와 Expo를 사용하면 Android, IOS 등을 위한 앱을 React로 빌드할 수 있습니다.
- 앱이 네이티브처럼 보이고, 느껴지는 이유는 UI가 네이티브이기 때문입니다.
- 즉 Web View가 아니라 플랫폼에서 제공하는 Android 및 iOS View를 사용하기 때문입니다.
- React를 사용하면 웹 개발자도 네이티브 개발자도 될 수 있습니다.
- 사용자 경험의 희생 없이 다양한 플랫폼에 앱을 출시할 수 있습니다.
- 기업에서는 플랫폼 간의 장벽을 허물고, 전체 기능을 협업을 통해 개발할 수 있는 팀을 구성할 수 있습니다.

<h2  style="background-color: gray;">📌 1, 2주차 3월 13일</h2>

## <span>Node.js는 무엇인가?</span>

## 개발자
Node.js는 **라이언 달(Ryan Dahl)** 이 2009년에 개발했습니다. 당시 웹 개발은 Apache 서버를 기반으로 한 **동기식 처리 방식**이 주류였고, 확장성과 성능의 한계가 있었습니다.


## <span>개발 동기</span>

라이언 달은 브라우저의 **비동기 이벤트 처리 모델**을 서버에서도 사용할 수 있도록 만들고 싶었습니다. 
특히, **파일 업로드 상태를 실시간으로 확인하지 못하는 기존 서버의 문제**를 해결하고자 했습니다.


## <span>기술적 핵심</span>

- **Node.js는 V8 JavaScript 엔진(Chrome에서 사용됨)을 기반으로 동작**합니다.
- **논블로킹 I/O 모델**과 **이벤트 기반 아키텍처**를 적용해 빠른 서버 처리가 가능하게 했습니다.

## <span>첫 발표와 반응</span>

- **2009년 JSConf EU**에서 처음 공개되었으며, 많은 개발자들이 관심을 가졌습니다.
- 기존의 서버 개발 방식과 달리 **단일 스레드 이벤트 루프 방식**이 혁신적인 개념으로 주목받았습니다.


## <span>현재의 Node.js</span>

- 현재는 **오픈소스 프로젝트**로, 많은 개발자와 기업들이 기여하고 있습니다.
- **2015년, Node.js 재단(Node.js Foundation)이 설립**되었고, 이후 OpenJS 재단과 통합되어 관리되고 있습니다.
- **Netflix, PayPal, LinkedIn** 등 대기업에서도 Node.js를 활용하며, 웹 서버, API 개발, 마이크로서비스 등 다양한 분야에서 사용되고 있습니다.


## <span>Node.js는 어디에 활용되는가?</span>

- **웹 서버 및 API 개발** – Express.js와 같은 프레임워크를 사용하여 **RESTful API, GraphQL 서버** 등을 구축하는 데 사용됨.
- **실시간 애플리케이션** – 채팅 앱, 실시간 데이터 스트리밍, WebSocket 기반 서비스(예: 온라인 게임, 주식 거래 시스템) 등에 활용됨.
- **마이크로서비스 및 서버리스** – AWS Lambda, Google Cloud Functions 등과 함께 사용하여 **확장성이 뛰어난 분산 시스템**을 구축하는 데 사용됨.


## <span>Node.js가 인기를 끄는 이유?</span>

- **비동기 이벤트 기반 아키텍처** – 논블로킹 I/O 방식으로 **빠른 성능과 높은 확장성 제공**
- **JavaScript 풀스택 개발** – 프론트엔드와 백엔드를 같은 언어(JavaScript)로 개발 가능, **생산성 증가**
- **강력한 npm 생태계** – 수많은 오픈소스 라이브러리와 모듈을 쉽게 활용 가능
- **마이크로서비스 및 서버리스 아키텍처 지원** – 확장성이 뛰어나고 클라우드 환경에 최적화
- **대기업 및 커뮤니티 지원** – Netflix, PayPal, LinkedIn 등 대기업에서 적극 사용하며, **활발한 커뮤니티 존재**


## <span>Node.js는 앞으로도 계속 발전할까?</span>


- **지속적인 업데이트 및 최적화** – V8 엔진 업그레이드와 성능 개선이 계속 이루어지고 있음.
- **Deno와의 경쟁 속 발전** – 창시자인 라이언 달이 만든 **Deno의 등장으로, Node.js도 보안과 성능을 개선 중**.
- **서버리스 및 클라우드 네이티브 환경 적합** – AWS Lambda, Azure Functions 등에서 널리 사용되며 확장성 강화.
- **npm 생태계의 성장** – 패키지 관리 및 모듈 생태계가 더욱 강력해지고 있음.
- **대기업과 커뮤니티 지원** – 오픈소스 커뮤니티와 **대기업(Netflix, Microsoft 등)의 지속적인 기여로 성장 가능성 높음**.


## <span>Node.js의 장단점</span>

### `장점`

- **빠른 성능** – Chrome V8 엔진을 기반으로 동작하며, 비동기 및 논블로킹(Non-blocking) 방식으로 요청을 처리하여 빠른 속도를 자랑함.
- **JavaScript 풀스택 개발 가능** – 프론트엔드와 백엔드를 모두 JavaScript로 개발할 수 있어, 개발 생산성이 높아지고 코드 재사용이 용이함.
- **활발한 생태계** – npm(Node Package Manager)을 통해 수많은 오픈소스 라이브러리를 활용할 수 있어 개발이 빠르고 효율적임.
- **실시간 애플리케이션 개발에 강함** – WebSocket 및 Socket.io를 활용하여 채팅, 스트리밍, 실시간 알림 등의 기능을 쉽게 구현할 수 있음.
- **마이크로서비스 및 서버리스 아키텍처에 적합** – AWS Lambda, Google Cloud Functions 등의 서버리스 환경에서 사용하기 좋으며, 마이크로서비스 구조와도 잘 맞음.

### `단점`

- **싱글 스레드 특성으로 CPU 집약적인 작업에 부적합** – Node.js는 싱글 스레드 이벤트 루프 기반이므로, CPU를 많이 사용하는 연산(예: 대규모 데이터 처리, 이미지 렌더링 등)에 취약함.
- **콜백 지옥(Callback Hell) 문제** – 비동기 코드가 많아질수록 콜백 함수가 중첩되면서 코드가 복잡해지고 가독성이 떨어지는 문제가 있음. *(→ 해결책: async/await, Promise 활용)*
- **보안 취약점** – npm 패키지 의존성이 많아 보안 취약점이 발생할 가능성이 크며, 자주 업데이트 및 관리를 해야 함.
