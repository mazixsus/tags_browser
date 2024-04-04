import { MainPage } from "../views/MainPage";

import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const data = [
  { name: "Python", count: 123 },
  { name: "JavaScript", count: 2334 },
  { name: "Java", count: 534 },
  { name: "C++", count: 523 },
  { name: "C#", count: 100 },
  { name: "Ruby", count: 5234 },
  { name: "Go", count: 346 },
  { name: "Rust", count: 3467 },
  { name: "Dart", count: 3487 },
  { name: "Kotlin", count: 8678 },
  { name: "React", count: 246 },
  { name: "Vue", count: 7543 },
  { name: "Angular", count: 8543 },
  { name: "Svelte", count: 156 },
  { name: "Ember", count: 12343 },
  { name: "Node", count: 374 },
  { name: "Express", count: 5623 },
  { name: "Koa", count: 8324 },
  { name: "Hapi", count: 9123 },
  { name: "Fastify", count: 153 },
  { name: "MongoDB", count: 634 },
  { name: "PostgreSQL", count: 723 },
  { name: "MySQL", count: 936 },
  { name: "SQLite", count: 734 },
  { name: "MariaDB", count: 2341 },
  { name: "Redis", count: 234 },
  { name: "Memcached", count: 2334 },
  { name: "RabbitMQ", count: 944 },
  { name: "Kafka", count: 862 },
  { name: "NATS", count: 3265 },
  { name: "GraphQL", count: 9438 },
  { name: "REST", count: 4356 },
  { name: "SOAP", count: 432 },
  { name: "gRPC", count: 643 },
  { name: "WebSockets", count: 432 },
  { name: "HTTP", count: 244 },
  { name: "HTTPS", count: 234 },
];

export const MockedState = {
  initialState: {
    data: data,
    loading: false,
    error: null,
  },
};

const Mockstore = ({ tagsState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        tags: createSlice({
          name: "tags",
          initialState: {
            data: data,
            loading: false,
            error: null,
          },
          reducers: {
            listTags: (state, action) => {
            },
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  title: "MainPage",
  component: MainPage,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  excludeStories: /.*MockedState$/,
};

export const DefaultMainPage = {
  decorators: [(story) => <Mockstore tagsState={MockedState}>{story()}</Mockstore>],
};
