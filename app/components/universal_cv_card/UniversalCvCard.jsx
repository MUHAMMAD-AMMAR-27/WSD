import { Download, ExternalLink, Forward, Trash2 } from "lucide-react";
import { extractNameInitials } from "../../src/utils/format_utils.js";
import React from "react";

function buildFilename(name = "", uid = "") {
  const slug = name.trim().replace(/\s+/g, "_").toLowerCase() || "applicant";
  const short = uid.replace(/-/g, "").slice(0, 8) || "00000000";
  return `cv_${slug}_${short}.pdf`;
}

function formatDate(raw) {
  if (!raw) return "—";
  const d = new Date(raw.replace(" ", "T"));
  if (isNaN(d)) return raw;
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

const PALETTES = [
  { bg: "bg-emerald-100", text: "text-emerald-800" },
  { bg: "bg-blue-100", text: "text-blue-800" },
  { bg: "bg-violet-100", text: "text-violet-800" },
  { bg: "bg-amber-100", text: "text-amber-800" },
  { bg: "bg-pink-100", text: "text-pink-800" },
  { bg: "bg-cyan-100", text: "text-cyan-800" },
];

function pickPalette(name = "") {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return PALETTES[Math.abs(h) % PALETTES.length];
}

export default function UniversalCvCard({ applicant, onDownload, onOpen, onForward, onDelete }, key) {
  const {
    uid = "",
    full_name = "Unknown Applicant",
    avatar = null,
    updated_at: created_at,
    country = null,
  } = applicant;

  const palette = pickPalette(full_name);
  const filename = buildFilename(full_name, uid);
  const dateLabel = formatDate(created_at);

  const actions = [
    {
      label: "Download",
      icon: <Download size={14} />,
      danger: false,
      handler: () => onDownload?.(applicant),
    },
    {
      label: "Open",
      icon: <ExternalLink size={14} />,
      danger: false,
      handler: () => onOpen?.(applicant),
    },
    {
      label: "Forward",
      icon: <Forward size={14} />,
      danger: false,
      handler: () => onForward?.(applicant),
    },
    {
      label: "Delete",
      icon: <Trash2 size={14} />,
      danger: true,
      handler: () => onDelete?.(applicant),
    },
  ];

  return (
    <div key={key} className="group relative flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-3 transition-all duration-200 hover:border-emerald-200 hover:shadow-[0_2px_14px_rgba(16,185,129,0.08)] overflow-hidden">
      {/* Emerald hover accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-l-xl" />

      <div className="relative shrink-0">
        {!applicant.avatar ? (
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gray-400">
            {extractNameInitials(applicant.full_name)}
          </div>
        ) : (
          <img
            src={applicant.avatar}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
      </div>

      {/* Name + filename */}
      <div className="flex-1 min-w-0">
        <p className="text-[14px] font-semibold text-gray-900 leading-tight truncate mb-0.5">
          {full_name}
        </p>
        <span className="font-mono text-[11px] text-gray-400 truncate block">{filename}</span>
      </div>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-200 shrink-0" />

      {/* Action buttons */}
      <div className="flex flex-col items-center gap-2 shrink-0">
        <div className={"flex gap-3"}>
          {actions.map(({ label, icon, danger, handler }) => (
            <div key={label} className="relative group/btn">
              <button
                title={label}
                onClick={handler}
                className={[
                  "w-[36px] h-[36px] border flex items-center justify-center transition-all duration-150 cursor-pointer",
                  danger
                    ? "border-gray-200 bg-white text-gray-400 hover:border-red-300 hover:bg-red-50 hover:text-red-600"
                    : "border-gray-200 bg-white text-gray-400 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600",
                ].join(" ")}
              >
                {icon}
              </button>
            </div>
          ))}
        </div>

        {/* Created at */}
        <div className="flex justify-between w-full gap-1.5">
          <span className="text-[11px] text-gray-400 font-medium">Created At:</span>
          <span className="text-[11px] font-medium text-gray-600 rounded-md whitespace-nowrap">
            {dateLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
