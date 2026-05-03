
export const P = {
  cursor: {
    show: {
      country: "show_country",
      company: "show_company",
      applicantRef: "show_applicant_reference",
      demandRef: "show_demand_reference",
    },
  },

  dashboard: {
    applicant: "applicant_reference_dashboard",
    demand: "demand_reference_dashboard",
  },

  applicant: {
    create: "create",
    edit: "edit",
    delete: "delete",
    status: "status",
  },

  demand: {
    create: "create",
    edit: "edit",
    delete: "delete",
    status: "status",
    revoke: "revoke",
  },
  applicant_ref: {
    create: "create",
    edit: "edit",
    delete: "delete",
  },
  demand_ref: {
    create: "create",
    edit: "edit",
    delete: "delete",
  },
  company: {
    create: "create",
    edit: "edit",
    delete: "delete",
  },
  report: {
    applicants_status: "applicants_status",

    demand: {
      status_bar: "demands_status_bar",
      process_bar: "demand_process_bar",
    },

    applicant_ref: {
      status_bar: "applicant_ref_status_bar",
      process_bar: "applicant_ref_process_bar",
    },

    demand_ref: {
      status_bar: "demand_ref_status_bar",
      process_bar: "demand_ref_process_bar",
    },

    country_and_company: "country_and_company_report",
    trade_and_sub_trade: "trade_and_sub_trade_report",

    expired: "expired_report",
    progress: "progress_report"
  }
};

export default class PermissionManager {
  constructor(permissions = null) {
    this.permissions = permissions || {};
  }

  // generic safe getter for any module
  get(module, key) {
    return this.permissions?.[module]?.[key] ?? false;
  }

  // cursor permissions
  getCursor(key) {
    return this.get("cursor", key);
  }

  // dashboard permissions
  getDashboard(key) {
    return this.get("dashboard", key);
  }

  // applicant permissions
  getApplicant(key) {
    return this.get("applicant", key);
  }

  // demand permissions
  getDemand(key) {
    return this.get("demand", key);
  }

  // applicant reference permissions
  getApplicantReference(key) {
    return this.get("applicant_reference", key);
  }

  // demand reference permissions
  getDemandReference(key) {
    return this.get("demand_reference", key);
  }

  // company permissions
  getCompany(key) {
    return this.get("company", key);
  }

  // reports permissions
  getReport(key) {
    return this.get("reports", key);
  }

  // optional: check any permission dynamically
  has(module, key) {
    return this.get(module, key);
  }
}

