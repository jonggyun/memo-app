# memo-app


## About

> 간단한 메모를 기록할 수 있는 메모 웹애플리케이션

## Project Duration

> 2018.09.19 ~ current

## Project Specification

> use create-react-app

> Client

* ReactJS

> Server

* Node.js (Koa Framework)

> Database

* MongoDB (mongoose)

> Structure

### Front-End
```
├── Root.js
├── components                          - 프레젠테이셔널 컴포넌트
│   ├── App.js                          - 컴포넌트의 전체 라우트 관리
│   ├── common                          - 공통 컴포넌트(ex. button, header ..)
│   ├── folders
│   │   └── Folders                     - 화면 좌측 폴더 컴포넌트
│   └── memo
│       ├── MemoContent                 - 메모페이지 내용 컴포넌트
│       ├── MemoFolder                  - 메모페이지 폴더 컴포넌트
│       ├── MemoHeader                  - 메모페이지 헤더 컴포넌트
│       ├── MemoList                    - 메모페이지 메모리스트 컴포넌트
│       └── MemoTemplate                - 메모페이지 (템플릿)프레임 컴포넌트
├── containers                          - 컨테이너 컴포넌트
├── index.css
├── index.js
├── lib
│   └── api.js                          - axios 비동기 연결
├── pages
│   ├── MemoPage.js
│   └── index.js
├── store
│   ├── configure.js
│   └── modules                         - Ducks 구조의 Redux
│       └── index.js
└── styles                              - 공통 CSS

```


### Back-End
```
├── api
│   ├── index.js         - memos 라우터 설정
│   └── memos
│       ├── index.js     
│       └── memo.ctrl.js - 비동기 방식을 이용한 DB접근 및 데이터 추출
├── index.js             - mongoDB와 접속하는 역할 및 api 라우터 설정
└── models               - schema 설정
    ├── folders.js       
    └── memos.js
```