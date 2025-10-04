declare module "react-slick" {
  import * as React from "react";

  // Minimal typings to satisfy TS. For full typings, install @types/react-slick.
  export interface Settings {
    [key: string]: any;
  }

  export default class Slider extends React.Component<Settings & { children?: React.ReactNode }> {}
}
