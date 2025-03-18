<h1>202330117 송예진</h1>

<h2> Node.js는 무엇인가? <h2>

## 개발자
![Ryan Dahl](https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1674813354/dev/Dahl_Ryan_wg0lg5.png)

Node.js는 **라이언 달(Ryan Dahl)** 이 2009년에 개발했습니다. 당시 웹 개발은 Apache 서버를 기반으로 한 **동기식 처리 방식**이 주류였고, 확장성과 성능의 한계가 있었습니다.

<hr>

## <span style="background-color: white; color: black;">개발 동기</span>

라이언 달은 브라우저의 **비동기 이벤트 처리 모델**을 서버에서도 사용할 수 있도록 만들고 싶었습니다. 
특히, **파일 업로드 상태를 실시간으로 확인하지 못하는 기존 서버의 문제**를 해결하고자 했습니다.

<hr>

## <span style="background-color: white; color: black;">기술적 핵심</span>

- **Node.js는 V8 JavaScript 엔진(Chrome에서 사용됨)을 기반으로 동작**합니다.
- **논블로킹 I/O 모델**과 **이벤트 기반 아키텍처**를 적용해 빠른 서버 처리가 가능하게 했습니다.

<hr>

## <span style="background-color: white; color: black;">첫 발표와 반응</span>

- **2009년 JSConf EU**에서 처음 공개되었으며, 많은 개발자들이 관심을 가졌습니다.
- 기존의 서버 개발 방식과 달리 **단일 스레드 이벤트 루프 방식**이 혁신적인 개념으로 주목받았습니다.

<hr>

## <span style="background-color: white; color: black;">현재의 Node.js</span>

- 현재는 **오픈소스 프로젝트**로, 많은 개발자와 기업들이 기여하고 있습니다.
- **2015년, Node.js 재단(Node.js Foundation)이 설립**되었고, 이후 OpenJS 재단과 통합되어 관리되고 있습니다.
- **Netflix, PayPal, LinkedIn** 등 대기업에서도 Node.js를 활용하며, 웹 서버, API 개발, 마이크로서비스 등 다양한 분야에서 사용되고 있습니다.

<hr>

## <span style="background-color: white; color: black;">Node.js는 어디에 활용되는가?</span>

- **웹 서버 및 API 개발** – Express.js와 같은 프레임워크를 사용하여 **RESTful API, GraphQL 서버** 등을 구축하는 데 사용됨.
- **실시간 애플리케이션** – 채팅 앱, 실시간 데이터 스트리밍, WebSocket 기반 서비스(예: 온라인 게임, 주식 거래 시스템) 등에 활용됨.
- **마이크로서비스 및 서버리스** – AWS Lambda, Google Cloud Functions 등과 함께 사용하여 **확장성이 뛰어난 분산 시스템**을 구축하는 데 사용됨.

<hr>

## <span style="background-color: white; color: black;">Node.js가 인기를 끄는 이유?</span>

- **비동기 이벤트 기반 아키텍처** – 논블로킹 I/O 방식으로 **빠른 성능과 높은 확장성 제공**
- **JavaScript 풀스택 개발** – 프론트엔드와 백엔드를 같은 언어(JavaScript)로 개발 가능, **생산성 증가**
- **강력한 npm 생태계** – 수많은 오픈소스 라이브러리와 모듈을 쉽게 활용 가능
- **마이크로서비스 및 서버리스 아키텍처 지원** – 확장성이 뛰어나고 클라우드 환경에 최적화
- **대기업 및 커뮤니티 지원** – Netflix, PayPal, LinkedIn 등 대기업에서 적극 사용하며, **활발한 커뮤니티 존재**

<hr>

## <span style="background-color: white; color: black;">Node.js는 앞으로도 계속 발전할까?</span>


- **지속적인 업데이트 및 최적화** – V8 엔진 업그레이드와 성능 개선이 계속 이루어지고 있음.
- **Deno와의 경쟁 속 발전** – 창시자인 라이언 달이 만든 **Deno의 등장으로, Node.js도 보안과 성능을 개선 중**.
- **서버리스 및 클라우드 네이티브 환경 적합** – AWS Lambda, Azure Functions 등에서 널리 사용되며 확장성 강화.
- **npm 생태계의 성장** – 패키지 관리 및 모듈 생태계가 더욱 강력해지고 있음.
- **대기업과 커뮤니티 지원** – 오픈소스 커뮤니티와 **대기업(Netflix, Microsoft 등)의 지속적인 기여로 성장 가능성 높음**.

<hr>

## <span style="background-color: white; color: black;">Node.js의 장단점</span>

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

React project의 구조 및 역활
![구조설명](../vs코드/image/nodeinfo.jpg)
