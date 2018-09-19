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

```
|-- Root.js

|-- -- App.js 

|-- -- -- MemoPage.js - 라우팅을 위한 페이지

|-- -- -- -- MemoTemplate.js - 메모 페이지의 큰 틀을 정해주는 페이지

|-- -- -- -- -- MemoHeader.js - 메모의 헤더

|-- -- -- -- -- MemoFoler.js - 좌측 폴더 리스트

|-- -- -- -- -- MemoList.js - 폴더 내부의 리스트

|-- -- -- -- -- MemoContent.js - 메모의 내용

|-- -- -- -- -- MemoFooter.js - 메모의 풋터
```