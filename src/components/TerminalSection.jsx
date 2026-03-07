import { useState, useRef, useEffect } from 'react'
import SectionHeader from './SectionHeader'
import styles from './TerminalSection.module.css'

const DATA = {
  whoami: {
    name:     'Mouad',
    title:    'Full-Stack Software Engineer',
    school:   'ESISA',
    year:     '3rd year of 5',
    location: 'Morocco 🇲🇦',
    email:    'm.dikouk@esisa.ac.ma',
    github:   'github.com/MouadDk',
    linkedin: 'linkedin.com/in/mouad', 
  },

  skills: [
    { name: 'Java',         level: 85, cat: 'Languages'  },
    { name: 'Python',       level: 80, cat: 'Languages'  },
    { name: 'C / C++',      level: 82, cat: 'Languages'  },
    { name: 'C# / .NET',    level: 72, cat: 'Languages'  },
    { name: 'JavaScript',   level: 78, cat: 'Languages'  },
    { name: 'PHP',          level: 70, cat: 'Languages'  },
    { name: 'Spring Boot',  level: 80, cat: 'Frameworks' },
    { name: 'React',        level: 75, cat: 'Frameworks' },
    { name: 'REST APIs',    level: 85, cat: 'Frameworks' },
    { name: '.NET Core',    level: 70, cat: 'Frameworks' },
    { name: 'PostgreSQL',   level: 78, cat: 'Data & AI'  },
    { name: 'MySQL',        level: 75, cat: 'Data & AI'  },
    { name: 'AI / ML',      level: 65, cat: 'Data & AI'  },
    { name: 'Algorithms',   level: 82, cat: 'Data & AI'  },
  ],

  projects: [
    {
      id: '01', icon: '🚗',
      name: 'RideMa',
      short: 'Moroccan Ride-Hailing Platform',
      stack: 'Spring Boot · React · PostgreSQL · WebSocket',
      github: 'github.com/kenzaidr/projetPRPFA',
      desc: 'Full-stack Grab clone for Morocco. Real-time driver tracking, JWT auth, bilingual UI.',
      nda: false,
    },
    {
      id: '02', icon: '🔴',
      name: 'Connect4-AI',
      short: 'Connect 4 with Minimax AI',
      stack: 'Python · Minimax · Alpha-Beta Pruning',
      github: 'github.com/MouadDk/Connect4',
      desc: 'Playable Connect 4 with an unbeatable AI evaluating thousands of positions per move.',
      nda: false,
    },
    {
      id: '03', icon: '♟️',
      name: 'ChessEngine',
      short: 'Chess Engine with AI',
      stack: 'C++ · OpenGL · Minimax · Alpha-Beta',
      github: null,
      desc: 'Full FIDE rules, custom OpenGL GUI, AI reaches depth-6 in under 1 second.',
      nda: false,
    },
    {
      id: '04', icon: '🗂️',
      name: 'SecretariatApp',
      short: 'Secretariat Management System',
      stack: 'PHP · MySQL · HTML/CSS · MVC',
      github: null,
      desc: 'Production app built during internship. Replaced 100% of paper processes.',
      nda: true,
    },
  ],

  experience: [
    {
      period: '2024 · 1 Month',
      company: 'Tech Company',             
      role: 'Full-Stack Web Developer Intern',
      stack: 'PHP · MySQL · HTML/CSS',
      points: [
        'Built secretariat management app from scratch to production',
        'Designed normalized DB schema + full MVC backend',
        'Delivered within 1-month internship window',
        'Staff abandoned paper processes in week 1',
      ],
    },
  ],

  education: {
    degree: 'Engineering Degree in Software Engineering',
    school: 'ESISA',
    year: '3rd year of 5',
    status: 'In progress',
  },
}

const ac  = (t) => `<span class="tc-a">${t}</span>`
const dim = (t) => `<span class="tc-d">${t}</span>`
const bl  = (t) => `<span class="tc-b">${t}</span>`
const ok  = (t) => `<span class="tc-g">${t}</span>`
const wn  = (t) => `<span class="tc-w">${t}</span>`
const er  = (t) => `<span class="tc-e">${t}</span>`
const bar = (n) => ac('█'.repeat(Math.round(n/5))) + dim('░'.repeat(20 - Math.round(n/5))) + ' ' + ac(n + '%')

const CMDS = {
  help: () => [
    ac('┌── Commands ──────────────────────────────────────┐'),
    ac('│') + '                                                  ' + ac('│'),
    ac('│') + '  ' + bl('whoami          ') + dim('→') + ' About me                      ' + ac('│'),
    ac('│') + '  ' + bl('ls              ') + dim('→') + ' List all sections             ' + ac('│'),
    ac('│') + '  ' + bl('ls skills       ') + dim('→') + ' Skills & levels               ' + ac('│'),
    ac('│') + '  ' + bl('ls projects     ') + dim('→') + ' All projects                  ' + ac('│'),
    ac('│') + '  ' + bl('ls exp          ') + dim('→') + ' Work experience               ' + ac('│'),
    ac('│') + '  ' + bl('ls edu          ') + dim('→') + ' Education                     ' + ac('│'),
    ac('│') + '  ' + bl('cat project [n] ') + dim('→') + ' Project detail  e.g. ' + ac('cat project 1') + ' ' + ac('│'),
    ac('│') + '  ' + bl('contact         ') + dim('→') + ' Get in touch                  ' + ac('│'),
    ac('│') + '  ' + bl('github          ') + dim('→') + ' Open GitHub                   ' + ac('│'),
    ac('│') + '  ' + bl('clear           ') + dim('→') + ' Clear screen                  ' + ac('│'),
    ac('│') + '  ' + bl('sudo hire mouad ') + dim('→') + ' 👀                            ' + ac('│'),
    ac('│') + '                                                  ' + ac('│'),
    ac('└──────────────────────────────────────────────────┘'),
    '',
    dim('Tip: ') + ac('Tab') + dim(' autocomplete  ·  ') + ac('↑↓') + dim(' history'),
  ],

  whoami: () => {
    const w = DATA.whoami
    return [
      '',
      ac('  👤  ') + bl(w.name),
      dim('  ──────────────────────────────'),
      '  ' + dim('Role     →') + '  ' + bl(w.title),
      '  ' + dim('School   →') + '  ' + w.school,
      '  ' + dim('Year     →') + '  ' + w.year,
      '  ' + dim('Location →') + '  ' + w.location,
      '  ' + dim('Email    →') + '  ' + ac(w.email),
      '  ' + dim('GitHub   →') + '  ' + ac(w.github),
      '  ' + dim('LinkedIn →') + '  ' + ac(w.linkedin),
      '',
      '  ' + ok('✓') + ' ' + dim('Available for internships & collaborations'),
      '',
    ]
  },

  ls: (args) => {
    const sub = args[0]

    if (!sub) return [
      '',
      dim('  Sections:'),
      '',
      '  ' + ac('skills/    ') + dim('— Technical skills & proficiency'),
      '  ' + ac('projects/  ') + dim('— Built projects'),
      '  ' + ac('exp/       ') + dim('— Work experience'),
      '  ' + ac('edu/       ') + dim('— Education'),
      '',
      dim('  Run ') + bl('ls <section>') + dim(' to explore'),
      '',
    ]

    if (sub === 'skills') {
      const cats = [...new Set(DATA.skills.map(s => s.cat))]
      const lines = ['']
      cats.forEach(cat => {
        lines.push(ac('  ▸ ' + cat))
        DATA.skills.filter(s => s.cat === cat).forEach(s => {
          lines.push('    ' + bl(s.name.padEnd(15)) + ' ' + bar(s.level))
        })
        lines.push('')
      })
      lines.push(dim('  Total: ') + ac(DATA.skills.length + ' skills'))
      lines.push('')
      return lines
    }

    if (sub === 'projects') {
      const lines = ['', ac('  ▸ Projects  (' + DATA.projects.length + ' total)'), '']
      DATA.projects.forEach(p => {
        lines.push(
          '  ' + ac(p.id) + '  ' + p.icon + '  ' + bl(p.name.padEnd(16)) + dim(p.short) +
          (p.nda ? '  ' + wn('[NDA]') : '')
        )
      })
      lines.push('')
      lines.push(dim('  Run ') + bl('cat project <id>') + dim(' for details'))
      lines.push('')
      return lines
    }

    if (sub === 'exp') {
      const lines = ['']
      DATA.experience.forEach(e => {
        lines.push(ac('  ▸ ' + e.role))
        lines.push('  ' + dim('Company →') + '  ' + bl(e.company))
        lines.push('  ' + dim('Period  →') + '  ' + e.period)
        lines.push('  ' + dim('Stack   →') + '  ' + ac(e.stack))
        lines.push('')
        e.points.forEach((p, i) => lines.push('  ' + ac((i+1) + '.') + ' ' + p))
        lines.push('')
      })
      return lines
    }

    if (sub === 'edu') {
      const e = DATA.education
      return [
        '',
        ac('  ▸ Education'),
        '',
        '  ' + dim('Degree  →') + '  ' + bl(e.degree),
        '  ' + dim('School  →') + '  ' + e.school,
        '  ' + dim('Year    →') + '  ' + ac(e.year),
        '  ' + dim('Status  →') + '  ' + ok('● ' + e.status),
        '',
      ]
    }

    return [er("  ls: '" + sub + "' not found.") + ' Try: ' + ac('ls skills') + ' · ' + ac('ls projects') + ' · ' + ac('ls exp') + ' · ' + ac('ls edu')]
  },

  cat: (args) => {
    if (args[0] !== 'project') return [er('  Usage: cat project <id>  e.g. ') + ac('cat project 1')]
    const id = args[1]
    if (!id) return [er('  Missing id. Run ') + ac('ls projects') + er(' to see IDs.')]
    const p = DATA.projects.find(x => x.id === id.padStart(2, '0') || x.id === id)
    if (!p) return [er("  Project '" + id + "' not found. Run ") + ac('ls projects')]
    return [
      '',
      ac('  ╔══════════════════════════════════════════╗'),
      ac('  ║') + '  ' + p.icon + '  ' + bl(p.name) + ac('                               ║'),
      ac('  ╚══════════════════════════════════════════╝'),
      '',
      '  ' + dim('Full name →') + '  ' + p.short,
      '  ' + dim('Stack     →') + '  ' + ac(p.stack),
      '  ' + dim('GitHub    →') + '  ' + (p.nda ? wn('Confidential (NDA)') : ac(p.github || 'private')),
      '',
      '  ' + dim('Description:'),
      '  ' + p.desc,
      p.nda ? '  ' + wn('⚠ Code is under NDA.') : '',
      '',
    ]
  },

  contact: () => {
    const w = DATA.whoami
    return [
      '',
      ac('  ▸ Let\'s connect!'),
      '',
      '  ' + dim('Email    →') + '  ' + ac(w.email),
      '  ' + dim('GitHub   →') + '  ' + ac(w.github),
      '  ' + dim('LinkedIn →') + '  ' + ac(w.linkedin),
      '  ' + dim('Location →') + '  ' + w.location,
      '',
      '  ' + ok('✓') + ' ' + dim('Open to internships, freelance & collabs'),
      '',
    ]
  },

  github: () => {
    window.open('https:
    return [ok('  Opening ' + DATA.whoami.github + ' ...')]
  },

  'sudo hire mouad': () => '__hire__',

  clear: () => '__clear__',
}

const ALL = [
  'help','whoami','ls','ls skills','ls projects','ls exp','ls edu',
  'cat project 1','cat project 2','cat project 3','cat project 4',
  'contact','github','sudo hire mouad','clear',
]

export default function TerminalSection({ hoverOn, hoverOff }) {
  const [lines, setLines]   = useState([])   
  const [input, setInput]   = useState('')
  const [cmdHist, setCmdHist] = useState([])
  const [histIdx, setHistIdx] = useState(-1)
  const [hint, setHint]     = useState('')
  const [focused, setFocused] = useState(false)
  const [ready, setReady]   = useState(false)
  const [hiring, setHiring] = useState(false)

  const inputRef  = useRef(null)
  const bodyRef   = useRef(null)

  // ── Boot ────────────────────────────────────────────────────────
  useEffect(() => {
    let dead = false
    const boot = [
      { text: ac('mouad.dev') + dim(' — interactive terminal') },
      { text: dim('─'.repeat(44)) },
      { text: 'Type ' + ac('help') + ' to see all commands.' },
      { text: '' },
    ]
    setLines([])
    setReady(false)
    let i = 0
    const tick = () => {
      if (dead || i >= boot.length) { if (!dead) setReady(true); return }
      setLines(l => [...l, boot[i++]])
      setTimeout(tick, 110)
    }
    setTimeout(tick, 350)
    return () => { dead = true }
  }, [])

  // ── Autocomplete hint ───────────────────────────────────────────
  useEffect(() => {
    if (!input) { setHint(''); return }
    const m = ALL.find(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase())
    setHint(m ? m.slice(input.length) : '')
  }, [input])

  // ── Push output lines ───────────────────────────────────────────
  const push = (newLines) => {
    setLines(l => [...l, ...newLines.filter(x => x !== null && x !== undefined).map(text => ({ text: String(text) }))])
  }

  // ── Hire animation sequence ─────────────────────────────────────
  const runHireSequence = () => {
    setHiring(true)
    setReady(false)
    const w = DATA.whoami
    const seq = [
      { delay: 0,    text: '' },
      { delay: 200,  text: ac('  [sudo] password for recruiter: ') + dim('************') },
      { delay: 900,  text: '' },
      { delay: 1100, text: dim('  Authenticating...') },
      { delay: 1900, text: ok('  ✓ Access granted') },
      { delay: 2200, text: '' },
      { delay: 2400, text: dim('  Running candidate analysis...') },
      { delay: 2800, text: ok('  ✓ Java · Python · C++ · C# · JavaScript · PHP') },
      { delay: 3200, text: ok('  ✓ Spring Boot · React · REST APIs · PostgreSQL') },
      { delay: 3600, text: ok('  ✓ AI/Minimax projects: Chess Engine + Connect 4') },
      { delay: 4000, text: ok('  ✓ Production internship: Secretariat App deployed') },
      { delay: 4400, text: ok('  ✓ 3rd year engineering student · Morocco 🇲🇦') },
      { delay: 4800, text: '' },
      { delay: 5000, text: dim('  Generating offer...') },
      { delay: 5600, text: '' },
      { delay: 5800, text: ac('  ╔══════════════════════════════════════════╗') },
      { delay: 5900, text: ac('  ║') + '                                          ' + ac('║') },
      { delay: 6000, text: ac('  ║') + '     🎉  ' + bl('OFFER ACCEPTED — MOUAD HIRED') + '     ' + ac('║') },
      { delay: 6100, text: ac('  ║') + '                                          ' + ac('║') },
      { delay: 6200, text: ac('  ╚══════════════════════════════════════════╝') },
      { delay: 6400, text: '' },
      { delay: 6600, text: '  ' + dim('→') + ' ' + bl('Candidate:  ') + ac(w.name) },
      { delay: 6800, text: '  ' + dim('→') + ' ' + bl('Email:      ') + ac(w.email) },
      { delay: 7000, text: '  ' + dim('→') + ' ' + bl('GitHub:     ') + ac(w.github) },
      { delay: 7200, text: '  ' + dim('→') + ' ' + bl('LinkedIn:   ') + ac(w.linkedin) },
      { delay: 7400, text: '  ' + dim('→') + ' ' + bl('Start date: ') + ac('ASAP 🚀') },
      { delay: 7600, text: '' },
      { delay: 7800, text: dim('  (Not a real offer — but it could be! Run ') + ac('contact') + dim(' 😉)') },
      { delay: 8000, text: '' },
    ]
    seq.forEach(({ delay, text }) => {
      setTimeout(() => {
        setLines(l => [...l, { text }])
      }, delay)
    })
    setTimeout(() => {
      setHiring(false)
      setReady(true)
    }, 8200)
  }

  // ── Execute ─────────────────────────────────────────────────────
  const execute = (raw) => {
    const cmd = raw.trim()
    if (!cmd || hiring) return
    const lower = cmd.toLowerCase()

    // Echo the command
    push([{ type: 'cmd', text: cmd }])
    setCmdHist(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')
    setHint('')

    // Lookup
    const directFn = CMDS[lower]
    if (directFn) {
      const result = directFn()
      if (result === '__clear__') { setLines([]); return }
      if (result === '__hire__')  { runHireSequence(); return }
      push(Array.isArray(result) ? result : [result])
      return
    }

    const parts = lower.split(/\s+/)
    const fn = CMDS[parts[0]]
    if (fn) {
      const result = fn(parts.slice(1))
      if (result === '__clear__') { setLines([]); return }
      if (result === '__hire__')  { runHireSequence(); return }
      push(Array.isArray(result) ? result : [result])
    } else {
      push([
        er("  command not found: '" + cmd + "'"),
        '  Type ' + ac('help') + ' for available commands.',
        '',
      ])
    }
  }

  // ── Keyboard ────────────────────────────────────────────────────
  const onKey = (e) => {
    if (e.key === 'Enter') {
      execute(input)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (hint) setInput(v => v + hint)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHist.length - 1)
      setHistIdx(next)
      if (cmdHist[next] !== undefined) setInput(cmdHist[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : (cmdHist[next] || ''))
    }
  }

  // ── Auto-scroll INSIDE terminal body (never page scroll) ──────
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [lines])

  const focusTerm = () => { inputRef.current?.focus(); setFocused(true) }

  return (
    <section id="terminal" className={styles.section}>
      <SectionHeader num="01" title="Terminal" />

      <div className={styles.desc}>
        <span className={styles.descIcon}>$_</span>
        Explore my portfolio interactively. Type commands to discover my skills, projects & experience.
      </div>

      {/* Terminal window */}
      <div
        className={`${styles.term} ${focused ? styles.focused : ''}`}
        onClick={focusTerm}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
      >
        {/* Title bar */}
        <div className={styles.bar}>
          <span className={`${styles.dot} ${styles.dotR}`} />
          <span className={`${styles.dot} ${styles.dotY}`} />
          <span className={`${styles.dot} ${styles.dotG}`} />
          <span className={styles.barTitle}>mouad@portfolio:~</span>
          <span className={`${styles.barBadge} ${hiring ? styles.barBadgeHiring : ''}`}>
          {hiring ? '⚡ hiring...' : 'interactive'}
        </span>
        </div>

        {}
        <div className={styles.body} ref={bodyRef}>
          {lines.filter(Boolean).map((line, i) => (
            <div
              key={i}
              className={`${styles.line} ${line.type === 'cmd' ? styles.lineCmd : ''}`}
            >
              {line.type === 'cmd' && (
                <span className={styles.prompt}>
                  <span className={styles.pUser}>mouad</span>
                  <span className={styles.pAt}>@</span>
                  <span className={styles.pHost}>portfolio</span>
                  <span className={styles.pSym}>$</span>
                </span>
              )}
              <span dangerouslySetInnerHTML={{ __html: line.text }} />
            </div>
          ))}

          {}
          {ready && !hiring && (
            <div className={styles.inputRow}>
              <span className={styles.prompt}>
                <span className={styles.pUser}>mouad</span>
                <span className={styles.pAt}>@</span>
                <span className={styles.pHost}>portfolio</span>
                <span className={styles.pSym}>$</span>
              </span>
              <div className={styles.inputWrap}>
                {}
                <span className={styles.ghost} aria-hidden>
                  <span style={{ visibility: 'hidden' }}>{input}</span>
                  {hint && <span className={styles.hint}>{hint}</span>}
                </span>
                <input
                  ref={inputRef}
                  className={styles.input}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKey}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  autoComplete="off"
                  spellCheck={false}
                  autoCorrect="off"
                  autoCapitalize="off"
                  aria-label="Terminal input"
                />
              </div>
              <span className={`${styles.cur} ${focused ? styles.curBlink : ''}`} />
            </div>
          )}

          {}
          <div id="term-bottom" />
        </div>

        {}
        <div className={styles.foot}>
          <span>Tab → autocomplete</span>
          <span>↑↓ → history</span>
          <span>type <strong>help</strong> to start</span>
        </div>
      </div>
    </section>
  )
}
