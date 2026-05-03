/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
class WSDReactPhoneInput2ValueValidator {
  constructor(payload = {}) {
    this.payload = payload;
    this.mode = null;
  }

  withCreateModeRules() {
    this.mode = "CREATE";
    return this;
  }

  withOptionalFieldRules() {
    this.mode = 'OPTIONAL';
    return this;
  }

  withUpdateModeRules() {
    this.mode = "UPDATE";
    return this;
  }

  get phoneValue() {
    return (this.payload.phoneValue || "").trim();
  }

  get countryData() {
    if ("countryData" in this.payload) {
      return this.payload.countryData ?? null;
    }

    return null;
  }

  get dialCode() {
    const dc = this.countryData?.dialCode;

    return typeof dc === "number" ? dc.toString() : dc;
  }

  get isWritten() {
    if (this.phoneValue === "") return false;

    if (!this.countryData) {
      if (this.phoneValue === "92") return false;
    }

    if (this.countryData) {
      if (this.phoneValue === this.dialCode) return false;
    }

    return true;
  }

  validateCreate() {
    if (!this.dialCode) return false;

    return (
      this.phoneValue.startsWith(this.dialCode) && this.phoneValue.length > this.dialCode.length
    );
  }

  validateUpdate() {
    if (this.countryData) {
      return this.validateCreate();
    }

    return this.phoneValue !== "" && this.phoneValue !== "92";
  }

  get isValid() {
    if (this.mode === 'OPTIONAL') {
      return this.validateUpdate();
    }

    return this.mode === "CREATE" ? this.validateCreate() : this.validateUpdate();
  }

  get isNotValid() {
    return !this.isValid;
  }
}

class PhoneInputValidator {
  static withCreateRule = (payload) => {
    return new WSDReactPhoneInput2ValueValidator(payload).withCreateModeRules();
  }

  static withUpdateRule = (payload) => {
    return new WSDReactPhoneInput2ValueValidator(payload).withUpdateModeRules();
  }

  static withOptionalFieldRule = (payload) => {
    return new WSDReactPhoneInput2ValueValidator(payload).withOptionalFieldRules();
  }
}

export {PhoneInputValidator};

export default WSDReactPhoneInput2ValueValidator;
