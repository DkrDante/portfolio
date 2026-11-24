import React from "react";

interface SectionHeaderProps {
  idx: string;
  label: string;
  meta?: React.ReactNode;
  title?: React.ReactNode;
  sub?: React.ReactNode;
  id?: string;
}

/** //NN LABEL ─────── meta, then an H2 on the left and subcopy on the right. */
export function SectionHeader({ idx, label, meta, title, sub, id }: SectionHeaderProps) {
  return (
    <div className="t-sh" id={id}>
      <div className="t-sh-top t-caps">
        <span className="t-idx">
          <i>//</i>
          {idx}
        </span>
        <span>{label}</span>
        <span className="t-rule" aria-hidden />
        {meta && <span className="t-sh-meta">{meta}</span>}
      </div>
      {(title || sub) && (
        <div className="t-sh-body">
          {title && <h2 className="t-h2">{title}</h2>}
          {sub && <p className="t-sub">{sub}</p>}
        </div>
      )}
    </div>
  );
}
