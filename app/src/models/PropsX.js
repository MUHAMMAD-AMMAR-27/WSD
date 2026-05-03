export default class PropsX {
  constructor(initialKey, initialValue, condition = true) {
    this.props = {};

    if (condition && initialKey !== undefined) {
      this.props[initialKey] =
          typeof initialValue === "function"
              ? initialValue()
              : initialValue;
    }
  }

  // start builder
  static with(key, value, condition = true) {
    return new PropsX(key, value, condition);
  }

  // add props conditionally
  set(key, value, condition = true) {
    if (condition && key !== undefined) {
      this.props[key] =
          typeof value === "function" ? value() : value;
    }
    return this;
  }

  // final output
  out() {
    return { ...this.props };
  }
}