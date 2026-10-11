import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'funnel' && (
          <g transform="translate(185 42)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 22 H186 L164 70 H40 Z" strokeWidth="2.5" fill={a} fillOpacity="0.10" />
            <path d="M40 86 H164 L145 132 H59 Z" strokeWidth="2.5" fill={a} fillOpacity="0.16" />
            <path d="M59 148 H145 L128 190 H76 Z" strokeWidth="2.5" fill={a} fillOpacity="0.22" />
            <path d="M76 206 H128 L118 236 H86 Z" strokeWidth="2.5" fill={a} fillOpacity="0.32" />
            <path d="M102 236 V262" strokeWidth="3" strokeDasharray="5 7" />
            <circle cx="102" cy="276" r="9" fill={a} fillOpacity="0.8" stroke="none" />
            <path d="M210 45 h80 M210 101 h62 M210 162 h44 M210 218 h26" strokeWidth="2" strokeOpacity="0.55" />
          </g>
        )}
        {project.motif === 'experiment' && (
          <g transform="translate(190 48)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="10" width="250" height="206" rx="16" strokeWidth="2" strokeOpacity="0.8" />
            <path d="M38 174 H235 M38 45 V174" strokeWidth="1.5" strokeOpacity="0.45" />
            {[0, 1, 2, 3].map((i) => <line key={i} x1="38" x2="235" y1={70 + i * 30} y2={70 + i * 30} strokeWidth="1" strokeOpacity="0.18" />)}
            <rect x="62" y="106" width="38" height="68" rx="5" fill={a} fillOpacity="0.45" strokeWidth="1.5" />
            <rect x="124" y="75" width="38" height="99" rx="5" fill={a} fillOpacity="0.8" strokeWidth="1.5" />
            <rect x="186" y="52" width="28" height="122" rx="5" fill={a} fillOpacity="0.28" strokeWidth="1.5" />
            <path d="M60 238 H112 M60 250 H97 M131 238 H185 M131 250 H165" strokeWidth="2" strokeOpacity="0.55" />
            <circle cx="220" cy="250" r="14" strokeWidth="2" />
            <path d="M213 250 l5 5 l9 -11" strokeWidth="2.5" />
          </g>
        )}
        {project.motif === 'campaign' && (
          <g transform="translate(183 45)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="10" width="258" height="230" rx="15" strokeWidth="2" strokeOpacity="0.7" />
            <path d="M38 199 H240 M38 42 V199" strokeWidth="1.5" strokeOpacity="0.45" />
            {[0, 1, 2, 3].map((i) => <line key={i} x1="38" x2="240" y1={70 + i * 32} y2={70 + i * 32} strokeWidth="1" strokeOpacity="0.18" />)}
            {[45, 74, 105, 87, 145, 160].map((h, i) => <rect key={i} x={51 + i * 30} y={199 - h} width="17" height={h} rx="4" fill={a} fillOpacity={0.25 + i * 0.09} strokeWidth="1.2" />)}
            <path d="M48 132 L88 115 L119 128 L149 82 L180 95 L229 48" strokeWidth="3" />
            <path d="M213 48 h16 v16" strokeWidth="3" />
            {[48, 88, 119, 149, 180, 229].map((x, i) => <circle key={i} cx={x} cy={[132, 115, 128, 82, 95, 48][i]} r="4" fill={a} stroke="none" />)}
            <path d="M32 264 h90 M32 276 h54 M157 264 h100" strokeWidth="2" strokeOpacity="0.55" />
          </g>
        )}
        {project.motif === 'dashboard' && (
          <g transform="translate(180 42)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <rect x="8" y="8" width="282" height="250" rx="18" strokeWidth="2" strokeOpacity="0.8" />
            <rect x="27" y="28" width="244" height="34" rx="7" fill={a} fillOpacity="0.12" strokeOpacity="0.5" />
            <circle cx="43" cy="45" r="4" fill={a} stroke="none" />
            <path d="M57 45 h70 M143 45 h45 M204 45 h49" strokeWidth="2" strokeOpacity="0.55" />
            <rect x="27" y="78" width="72" height="54" rx="7" fill={a} fillOpacity="0.10" />
            <rect x="111" y="78" width="72" height="54" rx="7" fill={a} fillOpacity="0.16" />
            <rect x="195" y="78" width="76" height="54" rx="7" fill={a} fillOpacity="0.08" />
            <path d="M38 117 h24 M38 108 h37 M122 117 h24 M122 108 h37 M207 117 h23 M207 108 h43" strokeWidth="2" strokeOpacity="0.6" />
            <rect x="27" y="147" width="144" height="91" rx="8" strokeOpacity="0.55" />
            <path d="M39 221 H159 M39 167 V221" strokeWidth="1.2" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={49 + i * 21} y={217 - [28, 42, 34, 61, 48][i]} width="13" height={[28, 42, 34, 61, 48][i]} rx="3" fill={a} fillOpacity={0.35 + i * 0.1} strokeWidth="1" />)}
            <circle cx="226" cy="190" r="34" strokeWidth="10" strokeOpacity="0.25" />
            <path d="M226 156 A34 34 0 0 1 257 204" strokeWidth="10" />
            <path d="M196 230 h61" strokeWidth="2" strokeOpacity="0.5" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M18 6c-1.8-1.8-4-2.6-6.5-2.6C7.6 3.4 5 5.6 5 9c0 7.6 14 4.6 14 11.6 0 3-2.8 5-6.4 5-3 0-5.4-1.2-7.2-3" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.16em] text-mist">SERIES</span>
    </span>
  );
}
