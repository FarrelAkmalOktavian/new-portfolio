import { Component } from "react";
import Lanyard from "./Lanyard";

export default class LanyardErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    // Dicatat di console biar tetap kelihatan pas develop, tapi tampilan tidak ikut crash.
    console.error("Lanyard 3D gagal dirender, fallback ke versi CSS:", error);
  }

  render() {
    if (this.state.hasError) {
      return <Lanyard />;
    }
    return this.props.children;
  }
}