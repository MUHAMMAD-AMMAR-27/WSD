import { Document, Page, View, Text, Image, StyleSheet } from "@react-pdf/renderer";
import { extractNameInitials, formatDate } from "../../src/utils/format_utils.js";
import { parseCarbonOrISOToDate } from "../../src/utils/date_utils.js";
import { capitalize } from "../../src/utils/text_utils.js";

// ─────────────────────────────────────────────────────────────────────────────
// ALL fonts used are react-pdf built-ins — NO Font.register() required:
//   Times-Roman      → elegant serif body
//   Times-Bold       → serif headings / bold
//   Times-Italic     → serif italic (profile text)
//   Helvetica        → clean sans labels
//   Helvetica-Bold   → sans bold accents
// ─────────────────────────────────────────────────────────────────────────────

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmtDate(str) {
  if (!str) return "Present";
  const d = new Date(str);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

// ─── Design Tokens ───────────────────────────────────────────────────────────
const C = {
  navy: "#1a2540",
  navyDeep: "#111b30",
  gold: "#c7a75a",
  goldLight: "#e8d49a",
  white: "#ffffff",
  offWhite: "#f8f5f0",
  slate: "#1e293b",
  body: "#475569",
  muted: "#64748b",
  faint: "#94a3b8",
  light: "#f1f5f9",
  border: "#e2e8f0",
  sideText: "#dde4f0",
  sideFaint: "#7a8faf",
  sideDim: "#ffffff18",
};

// ─── Styles ───────────────────────────────────────────────────────────────────
const S = StyleSheet.create({
  // Page
  page: {
    flexDirection: "row",
    backgroundColor: C.white,
    fontFamily: "Times-Roman",
    fontSize: 10,
  },

  // ── SIDEBAR ──────────────────────────────────────────────────────────────
  sidebar: {
    width: 188,
    backgroundColor: C.navy,
    paddingTop: 28,
    paddingBottom: 28,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "column",
  },

  // Avatar
  avatarWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: C.gold,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  avatarImg: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: "center",
    marginBottom: 10,
  },
  avatarInitials: {
    fontFamily: "Times-Bold",
    fontSize: 24,
    color: C.navy,
  },

  // Sidebar name / title
  sidebarName: {
    fontFamily: "Times-Bold",
    fontSize: 13,
    color: C.white,
    textAlign: "center",
    lineHeight: 1.25,
    marginBottom: 3,
  },
  sidebarJobTitle: {
    fontFamily: "Helvetica",
    fontSize: 7,
    color: C.sideFaint,
    textAlign: "center",
    letterSpacing: 0.8,
    marginBottom: 14,
  },

  // Divider
  sideDivider: {
    height: 0.5,
    backgroundColor: C.sideDim,
    marginTop: 2,
    marginBottom: 12,
  },

  // Sidebar section
  sideSection: { marginBottom: 14 },
  sideSectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: C.gold,
    letterSpacing: 1.4,
    marginBottom: 8,
  },

  // Sidebar field label / value
  sideLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.sideFaint,
    letterSpacing: 0.7,
    marginBottom: 1,
  },
  sideValue: {
    fontFamily: "Times-Roman",
    fontSize: 9,
    color: C.sideText,
    marginBottom: 8,
    lineHeight: 1.4,
  },

  // Skills list
  skillRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  skillDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.gold,
    marginTop: 2.5,
    marginRight: 7,
    flexShrink: 0,
  },
  skillText: {
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: "#d1daea",
    flex: 1,
    lineHeight: 1.4,
  },

  // ── MAIN ─────────────────────────────────────────────────────────────────
  main: {
    flex: 1,
    flexDirection: "column",
  },

  // ── Header ───────────────────────────────────────────────────────────────
  header: {
    backgroundColor: C.offWhite,
    borderBottomWidth: 2.5,
    borderBottomColor: C.gold,
    paddingTop: 24,
    paddingBottom: 18,
    paddingLeft: 24,
    paddingRight: 24,
  },
  headerEyebrow: {
    fontFamily: "Helvetica",
    fontSize: 7,
    color: C.faint,
    letterSpacing: 2,
    marginBottom: 4,
  },
  headerName: {
    fontFamily: "Times-Bold",
    fontSize: 26,
    color: "#0f172a",
    lineHeight: 1.1,
    marginBottom: 5,
  },
  headerLocation: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: C.muted,
    marginBottom: 12,
  },
  contactStrip: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  contactItem: { marginRight: 20, marginBottom: 2 },
  contactLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 1,
    marginBottom: 1,
  },
  contactValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 8.5,
    color: C.slate,
  },

  // ── Body ─────────────────────────────────────────────────────────────────
  body: {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    flex: 1,
  },
  section: { marginBottom: 18 },

  // Section heading row
  sectionHeadRow: { marginBottom: 10 },
  sectionHeadText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7.5,
    color: C.gold,
    letterSpacing: 2,
    marginBottom: 4,
  },
  sectionLine: {
    height: 0.75,
    backgroundColor: C.border,
  },

  // Profile box
  profileBox: {
    backgroundColor: "#fdfaf5",
    borderLeftWidth: 2.5,
    borderLeftColor: C.gold,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  profileText: {
    fontFamily: "Times-Italic",
    fontSize: 9.5,
    color: C.body,
    lineHeight: 1.7,
  },

  // ── Experience ────────────────────────────────────────────────────────────
  expItem: {
    flexDirection: "row",
    marginBottom: 14,
    paddingBottom: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: C.light,
  },
  expItemLast: {
    flexDirection: "row",
  },
  expTimeline: {
    width: 14,
    alignItems: "center",
    paddingTop: 3,
    marginRight: 10,
  },
  expDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.gold,
  },
  expLine: {
    width: 1.5,
    flex: 1,
    backgroundColor: "#e8dfc8",
    marginTop: 3,
  },
  expContent: { flex: 1 },
  expRoleLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  expRole: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    color: "#0f172a",
    marginBottom: 4,
  },
  expMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  expOrgLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 1,
  },
  expOrg: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.muted,
  },
  expDurLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 1,
    textAlign: "right",
  },
  expDurBadge: {
    backgroundColor: C.light,
    borderWidth: 0.5,
    borderColor: C.border,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
  },
  expDurText: {
    fontFamily: "Helvetica",
    fontSize: 8,
    color: C.muted,
  },
  expDesc: {
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: C.body,
    lineHeight: 1.6,
  },

  // ── Education ─────────────────────────────────────────────────────────────
  eduItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: C.light,
    borderLeftWidth: 2.5,
    borderLeftColor: C.border,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 8,
  },
  eduLeft: { flex: 1, marginRight: 12 },
  eduQualLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  eduQual: {
    fontFamily: "Times-Bold",
    fontSize: 12,
    color: "#0f172a",
    marginBottom: 4,
  },
  eduInstLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 1,
  },
  eduInst: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: C.muted,
  },
  eduRight: { alignItems: "flex-end", flexShrink: 0 },
  eduPeriodLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 2,
  },
  eduPeriodValue: {
    fontFamily: "Helvetica",
    fontSize: 8.5,
    color: C.muted,
    backgroundColor: C.white,
    borderWidth: 0.5,
    borderColor: C.border,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
  },

  // ── ID / Passport Cards ───────────────────────────────────────────────────
  twoCol: { flexDirection: "row" },
  infoCard: {
    flex: 1,
    backgroundColor: C.light,
    borderWidth: 0.5,
    borderColor: C.border,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 10,
  },
  infoCardLast: {
    flex: 1,
    backgroundColor: C.light,
    borderWidth: 0.5,
    borderColor: C.border,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  infoCardTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: C.gold,
    letterSpacing: 1.4,
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: C.border,
  },
  infoRow: { marginBottom: 6 },
  infoLabel: {
    fontFamily: "Helvetica",
    fontSize: 6.5,
    color: C.faint,
    letterSpacing: 0.8,
    marginBottom: 1,
  },
  infoValue: {
    fontFamily: "Helvetica-Bold",
    fontSize: 9,
    color: C.slate,
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    borderTopWidth: 0.5,
    borderTopColor: C.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
  },
  footerText: {
    fontFamily: "Helvetica",
    fontSize: 7,
    color: C.faint,
    letterSpacing: 1,
  },
  footerDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: C.gold,
  },
});

// ─── Small reusable components ────────────────────────────────────────────────

function SideField({ label, value }) {
  return (
    <View>
      <Text style={S.sideLabel}>{label}</Text>
      <Text style={S.sideValue}>{value || "N/A"}</Text>
    </View>
  );
}

function SectionHead({ children }) {
  return (
    <View style={S.sectionHeadRow}>
      <Text style={S.sectionHeadText}>{children}</Text>
      <View style={S.sectionLine} />
    </View>
  );
}

function InfoRow({ label, value }) {
  return (
    <View style={S.infoRow}>
      <Text style={S.infoLabel}>{label}</Text>
      <Text style={S.infoValue}>{value || "N/A"}</Text>
    </View>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function WSDCv({ cvPreviewData }) {
  if (!cvPreviewData) {
    return <></>;
  }

  const { personal, passport, location, education, experience, skills, description } =
    cvPreviewData;

  console.log(cvPreviewData);

  return (
    <Document>
      <Page size="A4" style={S.page}>
        {/* ══════════════ SIDEBAR ══════════════ */}
        <View style={S.sidebar}>
          {/*Avatar*/}
          {personal?.avatar ? (
            <Image
              style={S.avatarImg}
              src={
                typeof personal.avatar === "string"
                  ? personal.avatar
                  : URL.createObjectURL(personal.avatar)
              }
            />
          ) : (
            <View style={S.avatarWrap}>
              <Text style={S.avatarInitials}>{extractNameInitials(personal?.fullName)}</Text>
            </View>
          )}

          <Text style={S.sidebarName}>{capitalize(personal?.fullName)}</Text>
          {experience?.[0]?.jobTitle && (
            <Text style={S.sidebarJobTitle}>{experience?.[0]?.jobTitle ?? "Professional"}</Text>
          )}

          <View style={S.sideDivider} />

          {/* Personal */}
          <View style={S.sideSection}>
            <Text style={S.sideSectionTitle}>Personal</Text>
            <SideField
              label="Father Name"
              value={capitalize(personal?.fathersName, undefined)} // In the <SideField /> Component, defaultValue should be 'undefined'
            />
            <SideField
              label="Gender"
              value={capitalize(personal?.gender, undefined)} // In the <SideField /> Component, defaultValue should be 'undefined'
            />
            <SideField
              label="Date of Birth"
              value={formatDate(parseCarbonOrISOToDate(personal?.dob))}
            />
            <SideField label="CNIC Number" value={personal?.cnic} />
            <SideField label="Phone" value={`+${personal?.phone}`} />
            <SideField label="City" value={location?.city} />
            <SideField label="Country" value={location?.country?.country_name} />
          </View>

          <View style={S.sideDivider} />

          {/* Passport */}
          <View style={S.sideSection}>
            <Text style={S.sideSectionTitle}>Passport</Text>
            <SideField label="Passport No." value={passport?.number} />
            <SideField
              label="Issue Date"
              value={formatDate(parseCarbonOrISOToDate(passport?.issueDate))}
            />
            <SideField
              label="Expiry Date"
              value={formatDate(parseCarbonOrISOToDate(passport?.expiryDate))}
            />
          </View>

          {(skills ?? []).length >= 1 && <View style={S.sideDivider} />}

          {/* Skills */}
          {(skills ?? []).length >= 1 && (
            <View style={S.sideSection}>
              <Text style={S.sideSectionTitle}>Skills</Text>
              {(skills ?? []).map((s, i) => (
                <View key={i} style={S.skillRow}>
                  <View style={S.skillDot} />
                  <Text style={S.skillText}>{typeof s === "string" ? s : s.skill}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* ══════════════ MAIN ══════════════ */}
        <View style={S.main}>
          {/* Header */}
          <View style={S.header}>
            <Text style={S.headerEyebrow}>CURRICULUM VITAE</Text>
            <Text style={S.headerName}>{capitalize(personal?.fullName, "N/A")}</Text>
            <Text style={S.headerLocation}>
              {capitalize(
                [location?.city, location?.country?.country_name].filter(Boolean).join(", "),
                "N/A"
              )}
            </Text>
            <View style={S.contactStrip}>
              {personal?.phone && (
                <View style={S.contactItem}>
                  <Text style={S.contactLabel}>PHONE</Text>
                  <Text style={S.contactValue}>{`+${personal.phone}`}</Text>
                </View>
              )}
              {personal?.gender && (
                <View style={S.contactItem}>
                  <Text style={S.contactLabel}>GENDER</Text>
                  <Text style={S.contactValue}>
                    {capitalize(personal.gender, 'N/A')}
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Body */}
          <View style={S.body}>
            {/* Identification & Documents */}
            <View style={S.section}>
              <SectionHead>Identification & Documents</SectionHead>
              <View style={S.twoCol}>
                <View style={S.infoCard}>
                  <Text style={S.infoCardTitle}>Personal Details</Text>
                  <InfoRow label="CNIC Number" value={personal?.cnic} />
                  <InfoRow
                    label="Date of Birth"
                    value={formatDate(parseCarbonOrISOToDate(personal?.dob))}
                  />
                  <InfoRow
                    label="Gender"
                    value={capitalize(personal?.gender, undefined)}
                  />
                </View>
                <View style={S.infoCardLast}>
                  <Text style={S.infoCardTitle}>Passport Details</Text>
                  <InfoRow label="Passport Number" value={passport?.number} />
                  <InfoRow
                    label="Issue Date"
                    value={formatDate(parseCarbonOrISOToDate(passport?.issueDate))}
                  />
                  <InfoRow
                    label="Expiry Date"
                    value={formatDate(parseCarbonOrISOToDate(passport?.expiryDate))}
                  />
                </View>
              </View>
            </View>

            {/* Profile */}
            {description && (
              <View style={S.section}>
                <SectionHead>Bio(Description)</SectionHead>
                <View style={S.profileBox}>
                  <Text style={S.profileText}>{description}</Text>
                </View>
              </View>
            )}

            {/* Education */}
            {(education ?? []).length > 0 && (
              <View style={S.section}>
                <SectionHead>Education</SectionHead>
                {education.map((edu, i) => (
                  <View key={i} style={S.eduItem}>
                    <View style={S.eduLeft}>
                      {edu.degree && <Text style={S.eduQualLabel}>QUALIFICATION</Text>}
                      {edu.degree && <Text style={S.eduQual}>{capitalize(edu.degree, 'N/A')}</Text>}
                      <Text style={S.eduInstLabel}>INSTITUTION</Text>
                      <Text style={S.eduInst}>{capitalize(edu.institute, 'N/A')}</Text>
                    </View>
                    <View style={S.eduRight}>
                      <Text style={S.eduPeriodLabel}>PERIOD</Text>
                      <Text style={S.eduPeriodValue}>
                        {((d) => {
                          if (!d) return;
                          return `${d.toLocaleDateString("en-US", { month: "short", year: "numeric" })} — `;
                        })(parseCarbonOrISOToDate(edu.startDate))}
                        {((d) => {
                          if (!d) return "PRESENT";
                          return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
                        })(parseCarbonOrISOToDate(edu.endDate))}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            )}

            {/* Experience */}
            {(experience ?? []).length > 0 && (
              <View style={S.section}>
                <SectionHead>Work Experience</SectionHead>
                {experience.map((exp, i) => {
                  const isLast = i === experience.length - 1;
                  return (
                    <View key={i} style={isLast ? S.expItemLast : S.expItem}>
                      <View style={S.expTimeline}>
                        <View style={S.expDot} />
                        {!isLast && <View style={S.expLine} />}
                      </View>
                      <View style={S.expContent}>
                        <Text style={S.expRoleLabel}>POSITION</Text>
                        <Text style={S.expRole}>{exp.jobTitle}</Text>
                        <View style={S.expMeta}>
                          <View>
                            <Text style={S.expOrgLabel}>ORGANISATION</Text>
                            <Text style={S.expOrg}>{exp.company}</Text>
                          </View>
                          <View>
                            <Text style={S.expDurLabel}>DURATION</Text>
                            <View style={S.expDurBadge}>
                              <Text style={S.expDurText}>
                                {fmtDate(exp.startDate)}
                                {exp.endDate ? ` — ${fmtDate(exp.endDate)}` : ""}
                              </Text>
                            </View>
                          </View>
                        </View>
                        {exp.description && <Text style={S.expDesc}>{exp.description}</Text>}
                      </View>
                    </View>
                  );
                })}
              </View>
            )}
          </View>

          {/* Footer */}
          <View style={S.footer}>
            <Text style={S.footerText}>CURRICULUM VITAE</Text>
            <View style={S.footerDot} />
            <Text style={S.footerText}>{personal?.fullName}</Text>
            <View style={S.footerDot} />
            <Text style={S.footerText}>{new Date().getFullYear()}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
