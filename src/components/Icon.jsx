

const ICONS = {
  
  java: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 16s-1.5.8 1 1.1c3 .4 4.5.3 7.8-.3 0 0 .9.5 2.1 1C11.8 20.3 3.2 17.8 7 16z"/>
      <path d="M6.1 13.7s-1.7 1.2 1.8 1.5c2.5.2 5.5.2 8.7-.3 0 0 .6.6 1.6.9C11 17.4 3.4 15.5 6.1 13.7z"/>
      <path d="M13.5 9.4c1.6 1.8-.4 3.4-.4 3.4s3.9-2 2.1-4.5c-1.7-2.3-3-3.4 4-7.3 0 0-11 2.7-5.7 8.4z"/>
      <path d="M19.1 17.9s1.1.9-1.2 1.6c-4.5 1.4-18.7 1.8-22.6 0-1.4-.6 1.2-1.5 2.1-1.7.9-.2 1.4-.1 1.4-.1-1.6-1.1-10.4 2.2-4.5 3.2C11 23 20.8 20.2 19.1 17.9z"/>
      <path d="M7.5 11.2s-7.4 1.8-2.6 2.4c2 .3 6 .2 9.7-.1 3-.3 6.1-.9 6.1-.9s-1.1.4-1.8.9c-7.3 1.9-21.4 1-17.3-.9 3.4-1.6 5.9-1.4 5.9-1.4z"/>
      <path d="M16.6 14.4c7.4-3.9 4-7.6 1.6-7.1-.6.1-.9.2-.9.2s.2-.4.7-.5c5.1-1.8 9 5.3-1.5 8.1 0 0 .1-.1.1-.7z"/>
      <path d="M14 0S17 3 11 7.6C6.3 11.3 9.8 13.3 11 15.6c-3.4-3.1-5.9-5.8-4.2-8.3C9.3 3.5 15.2 2 14 0z"/>
      <path d="M8.1 19.8c7.1.5 18-1 18.2-3.9 0 0-.5 1.3-5.9 2.3-6 1.2-13.4 1-17.8.3 0 0 .9.7 5.5 1.3z"/>
    </g>
  ),

  python: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2C6.1 2 6 3.8 6 5v1.5h4v.5H4.5C2.5 7 1 8.3 1 11s1.4 4 3.5 4.5l1 .1V14H7v1.5C7 18 8 19 11 19s4-1 4-3.5V14h-4v-.5h5.5c2 0 3.5-1.5 3.5-4.5S18 2 14 2h-4zm-1 1.5h2c.8 0 1.5.7 1.5 1.5S11.8 6.5 11 6.5H9c-.8 0-1.5-.7-1.5-1.5S8.2 3.5 9 3.5zm2 10h2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5z"/>
    </g>
  ),

  cpp: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10z"/>
      <path d="M8.5 10h3M10 8.5v3M14.5 10h3M16 8.5v3"/>
    </g>
  ),

  csharp: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 3a7 7 0 1 0 0 14A7 7 0 0 0 10 3z"/>
      <path d="M7 7.5C7.8 6.6 9 6 10.5 6c2.5 0 4 1.5 4 4s-1.5 4-4 4C9 14 7.8 13.4 7 12.5"/>
      <path d="M13 9h2.5M13 11h2.5M14 8v2M14 10v2"/>
    </g>
  ),

  javascript: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="16" height="16" rx="1"/>
      <path d="M8 14.5c0 1.5-1 2-2 2"/>
      <path d="M12 12.5c0-1 .5-1.5 1.5-1.5S15 11.5 15 12.5c0 2-3 2-3 4"/>
    </g>
  ),

  php: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="10" cy="10" rx="9" ry="5"/>
      <path d="M4.5 8.5 6 13l1.5-3L9 13l1-4.5"/>
      <path d="M12 8.5h2c1 0 1.5.5 1.5 1.5S15 11.5 14 11.5h-2v-3z"/>
    </g>
  ),

  spring: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3c-1 3-4 5-7 5C5 8 2 5 2 5s1 5 5 7c-2 1-4 .5-4 .5S5 16 10 16c4 0 8-3 8-8 0-2-.5-4-1-5z"/>
    </g>
  ),

  react: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="10" cy="10" rx="9" ry="3.5" transform="rotate(0 10 10)"/>
      <ellipse cx="10" cy="10" rx="9" ry="3.5" transform="rotate(60 10 10)"/>
      <ellipse cx="10" cy="10" rx="9" ry="3.5" transform="rotate(120 10 10)"/>
      <circle cx="10" cy="10" r="1.5" fill="currentColor" stroke="none"/>
    </g>
  ),

  api: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6h16v8H2zM6 6V4h8v2M6 14v2h8v-2"/>
      <path d="M6 10h8"/>
    </g>
  ),

  dotnet: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10a8 8 0 1 0 16 0A8 8 0 0 0 2 10z"/>
      <path d="M2 10h16M10 2c-2 2-3 5-3 8s1 6 3 8M10 2c2 2 3 5 3 8s-1 6-3 8"/>
    </g>
  ),

  html: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2l1.5 14L10 18l5.5-2L17 2H3z"/>
      <path d="M7 7h6l-.5 5L10 13l-2.5-.7L7 10h2l.2 1.3 .8.2.8-.2.2-2H7z"/>
    </g>
  ),

  git: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="5"  r="2"/>
      <circle cx="15" cy="5" r="2"/>
      <circle cx="5" cy="15" r="2"/>
      <path d="M5 7v6M7 5h6M7 7l6-2"/>
    </g>
  ),

  postgres: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="10" cy="5" rx="7" ry="2.5"/>
      <path d="M3 5v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5"/>
      <path d="M3 10v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5"/>
    </g>
  ),

  mysql: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="10" cy="5" rx="7" ry="2.5"/>
      <path d="M3 5v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5"/>
      <path d="M3 10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>
    </g>
  ),

  ai: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2a1.5 1.5 0 0 1 0 3M10 5v3M6 10H3M17 10h-3M10 15v3M10 18a1.5 1.5 0 0 1 0-3"/>
      <circle cx="10" cy="10" r="3"/>
      <path d="M4.9 4.9l2.2 2.2M12.9 12.9l2.2 2.2M15.1 4.9l-2.2 2.2M7.1 12.9l-2.2 2.2"/>
    </g>
  ),

  data: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="13" width="4" height="5" rx=".5"/>
      <rect x="8" y="8"  width="4" height="10" rx=".5"/>
      <rect x="14" y="3" width="4" height="15" rx=".5"/>
    </g>
  ),

  algorithm: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 10h16M10 2v16"/>
      <path d="M5 5l10 10M15 5 5 15"/>
    </g>
  ),

  car: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12l2-5h12l2 5"/>
      <rect x="2" y="12" width="16" height="5" rx="1"/>
      <circle cx="6"  cy="17" r="1.5"/>
      <circle cx="14" cy="17" r="1.5"/>
      <path d="M2 12h16M6 7l1-3h6l1 3"/>
    </g>
  ),

  game: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="16" height="11" rx="3"/>
      <path d="M6 10h4M8 8v4M13 10h.5M14.5 10h.5M14 9v.5M14 10.5v.5"/>
    </g>
  ),

  chess: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17h6M8 17v-2H7l1-3H8l-1-2h1V8H7l1-3h4l1 3h-2v2h1l-1 2h.5l1 3h-1v2"/>
      <path d="M5 17h10"/>
    </g>
  ),

  lock: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="12" height="9" rx="1.5"/>
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9"/>
      <circle cx="10" cy="14" r="1.5"/>
    </g>
  ),

  terminal: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="16" height="13" rx="1.5"/>
      <path d="M5 8l3 3-3 3M10 14h5"/>
    </g>
  ),

  star: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.8l-4.9 2.4.9-5.5L2 7.8l5.6-.8z"/>
    </g>
  ),

  link: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13H7a4 4 0 0 1 0-8h3M10 7h3a4 4 0 0 1 0 8h-3M7 10h6"/>
    </g>
  ),

  arrowUpRight: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 14L14 6M8 6h6v6"/>
    </g>
  ),

  code: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8l-4 4 4 4M14 8l4 4-4 4M12 4l-4 12"/>
    </g>
  ),

  wrench: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 3.3a4 4 0 0 0-5.4 5.4L3 15a1.4 1.4 0 0 0 2 2l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/>
    </g>
  ),

  brain: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 4C8 4 6.5 5.5 6.5 7.5c-1.5 0-3 1-3 3 0 1.5 1 2.5 2 3-.5 1-.5 2.5 1 3.5"/>
      <path d="M10 4c2 0 3.5 1.5 3.5 3.5 1.5 0 3 1 3 3 0 1.5-1 2.5-2 3 .5 1 .5 2.5-1 3.5"/>
      <path d="M10 4v14"/>
    </g>
  ),
}

export default function Icon({ name, size = 20, color = 'currentColor', className = '' }) {
  const paths = ICONS[name]
  if (!paths) return null
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {paths}
    </svg>
  )
}
