<h1>202330117 송예진</h1>

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
