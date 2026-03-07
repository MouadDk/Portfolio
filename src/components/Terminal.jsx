import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Terminal.module.css'

const PORTFOLIO = {
  
  whoami: {
    name: 'Mouad',                          
    title: 'Full-Stack Software Engineer',   
    school: 'École d\'Ingénieurs',            
    year: '3rd year of 5',
    location: 'Morocco 🇲🇦',
    email: 'mouad@email.com',                
    github: 'github.com/mouad',              
    linkedin: 'linkedin.com/in/mouad',         
  },

  skills: [
    { name: 'Java', level: 85, category: 'Languages' },
    { name: 'Python', level: 80, category: 'Languages' },
    { name: 'C / C++', level: 82, category: 'Languages' },
    { name: 'C# / .NET', level: 72, category: 'Languages' },
    { name: 'JavaScript', level: 78, category: 'Languages' },
    { name: 'PHP', level: 70, category: 'Languages' },
    { name: 'Spring Boot', level: 80, category: 'Frameworks' },
    { name: 'React', level: 75, category: 'Frameworks' },
    { name: 'REST APIs', level: 85, category: 'Frameworks' },
    { name: '.NET Core', level: 70, category: 'Frameworks' },
    { name: 'PostgreSQL', level: 78, category: 'Data & AI' },
    { name: 'MySQL', level: 80, category: 'Data & AI' },
    { name: 'AI / ML', level: 85, category: 'Data & AI' },
    { name: 'Pandas/NumPy', level: 68, category: 'Data & AI' },
  ],

  projects: [
    {
      id: '01',
      icon: '🚗',
      name: 'Grab Morocco',
      short: 'Moroccan Ride-Hailing Platform',
      stack: 'Spring Boot · React · PostgreSQL · WebSocket',
      github: 'github.com/mouad/ridema',
      desc: 'Full-stack Grab clone for Morocco. Real-time driver tracking, JWT auth, bilingual UI.',
      nda: false,
    },
    {
      id: '02',
      icon: '🔴',
      name: 'Connect4-AI',
      short: 'Connect 4 Game with Minimax AI',
      stack: 'Python · Minimax · Alpha-Beta Pruning',
      github: 'github.com/mouad/connect4',
      desc: 'Playable Connect 4 with an unbeatable AI that evaluates thousands of positions per move.',
      nda: false,
    },
    {
      id: '03',
      icon: '♟️',
      name: 'ChessEngine',
      short: 'Chess Engine with AI opponent',
      stack: 'C++ · OpenGL · Minimax · Alpha-Beta',
      github: 'github.com/mouad/chess-engine',
      desc: 'Full FIDE rules, custom OpenGL GUI, AI reaches depth-6 in under 1 second.',
      nda: false,
    },
    {
      id: '04',
      icon: '🗂️',
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
        'Built secretariat management app from scratch',
        'Designed normalized DB schema + full MVC backend',
        'Delivered production app within 1-month window',
        'Staff adopted it — abandoned paper processes in week 1',
      ],
    },
  ],

  education: {
    degree: 'Engineering Degree in Software Engineering',
    school: 'Esisa',      
    year: '3rd year of 5',
    status: 'In progress',
  },
}

const accent = (t) => `<span class="t-accent">${t}</span>`
const dim = (t) => `<span class="t-dim">${t}</span>`
const bold = (t) => `<span class="t-bold">${t}</span>`
const success = (t) => `<span class="t-success">${t}</span>`
const warn = (t) => `<span class="t-warn">${t}</span>`
const err = (t) => `<span class="t-err">${t}</span>`

const bar = (level) => {
  const filled = Math.round(level / 5)
  const empty = 20 - filled
  return `${accent('█'.repeat(filled))}${dim('░'.repeat(empty))} ${accent(level + '%')}`
}

const COMMANDS = {

  help: {
    desc: 'Show all available commands',
    run: () => `
${accent('┌─ Available Commands ─────────────────────────────┐')}
${accent('│')}                                                  ${accent('│')}
${accent('│')}  ${bold('whoami')}          ${dim('→')} About Mouad                   ${accent('│')}
${accent('│')}  ${bold('ls')}              ${dim('→')} List all sections             ${accent('│')}
${accent('│')}  ${bold('ls skills')}       ${dim('→')} View all skills & levels      ${accent('│')}
${accent('│')}  ${bold('ls projects')}     ${dim('→')} View all projects             ${accent('│')}
${accent('│')}  ${bold('ls exp')}          ${dim('→')} Work experience               ${accent('│')}
${accent('│')}  ${bold('ls edu')}          ${dim('→')} Education                     ${accent('│')}
${accent('│')}  ${bold('cat project [n]')} ${dim('→')} Project details  (e.g. cat project 1) ${accent('│')}
${accent('│')}  ${bold('contact')}         ${dim('→')} Get in touch                  ${accent('│')}
${accent('│')}  ${bold('github')}          ${dim('→')} Open GitHub profile           ${accent('│')}
${accent('│')}  ${bold('clear')}           ${dim('→')} Clear terminal                ${accent('│')}
${accent('│')}  ${bold('sudo hire mouad')} ${dim('→')} 👀                            ${accent('│')}
${accent('│')}                                                  ${accent('│')}
${accent('└──────────────────────────────────────────────────┘')}

${dim('Tip: press')} ${accent('Tab')} ${dim('to autocomplete · use')} ${accent('↑ ↓')} ${dim('for history')}`,
  },

  whoami: {
    desc: 'About me',
    run: () => {
      const w = PORTFOLIO.whoami
      return `
${accent('╔══════════════════════════════════════╗')}
${accent('║')}  👤  ${bold(w.name)}                          ${accent('║')}
${accent('╚══════════════════════════════════════╝')}

  ${dim('Role     →')}  ${bold(w.title)}
  ${dim('School   →')}  ${w.school}
  ${dim('Year     →')}  ${w.year}
  ${dim('Location →')}  ${w.location}
  ${dim('Email    →')}  ${accent(w.email)}
  ${dim('GitHub   →')}  ${accent(w.github)}
  ${dim('LinkedIn →')}  ${accent(w.linkedin)}

  ${success('✓')} ${dim('Available for internships & collaborations')}`
    },
  },

  ls: {
    desc: 'List sections  (ls | ls skills | ls projects | ls exp | ls edu)',
    run: (args) => {
      const sub = args[0]

      if (!sub) return `
${dim('Sections in this portfolio:')}

  ${accent('skills/')}       ${dim('— Technical skills & proficiency')}
  ${accent('projects/')}     ${dim('— Built projects')}
  ${accent('exp/')}          ${dim('— Work experience')}
  ${accent('edu/')}          ${dim('— Education')}

${dim('Run')} ${bold('ls <section>')} ${dim('to explore, or')} ${bold('help')} ${dim('for all commands.')}`

      if (sub === 'skills') {
        const cats = [...new Set(PORTFOLIO.skills.map(s => s.category))]
        return cats.map(cat => {
          const items = PORTFOLIO.skills.filter(s => s.category === cat)
          return `\n${accent('▸ ' + cat)}\n` +
            items.map(s =>
              `  ${bold((s.name).padEnd(16))}  ${bar(s.level)}`
            ).join('\n')
        }).join('\n') + `\n\n${dim('Total: ')}${accent(PORTFOLIO.skills.length + ' skills')}`
      }

      if (sub === 'projects') {
        return `\n${accent('▸ Projects  (' + PORTFOLIO.projects.length + ' total)')}\n\n` +
          PORTFOLIO.projects.map(p =>
            `  ${accent(p.id)}  ${p.icon}  ${bold(p.name.padEnd(18))}  ${dim(p.short)}` +
            (p.nda ? `  ${warn('[NDA]')}` : '')
          ).join('\n') +
          `\n\n${dim('Run')} ${bold('cat project <id>')} ${dim('for details  (e.g.')} ${accent('cat project 1')}${dim(')')}`
      }

      if (sub === 'exp') {
        return PORTFOLIO.experience.map(e => `
${accent('▸ ' + e.role)}
  ${dim('Company →')}  ${bold(e.company)}
  ${dim('Period  →')}  ${e.period}
  ${dim('Stack   →')}  ${accent(e.stack)}

${e.points.map((p, i) => '  ' + accent((i + 1) + '.') + ' ' + p).join('\n')}`
        ).join('\n')
      }

      if (sub === 'edu') {
        const e = PORTFOLIO.education
        return `
${accent('▸ Education')}

  ${dim('Degree  →')}  ${bold(e.degree)}
  ${dim('School  →')}  ${e.school}
  ${dim('Year    →')}  ${accent(e.year)}
  ${dim('Status  →')}  ${success('● ' + e.status)}`
      }

      return err(`ls: '${sub}' not found. Try: ls skills · ls projects · ls exp · ls edu`)
    },
  },

  cat: {
    desc: 'Show project details  (cat project <id>)',
    run: (args) => {
      if (args[0] !== 'project') return err(`Usage: ${bold('cat project <id>')}  (e.g. cat project 1)`)
      const id = args[1]
      if (!id) return err(`Missing project id. Run ${accent('ls projects')} to see all IDs.`)
      const proj = PORTFOLIO.projects.find(p => p.id === id.padStart(2, '0') || p.id === id)
      if (!proj) return err(`Project '${id}' not found. Run ${accent('ls projects')} to see IDs.`)

      return `
${accent('╔══════════════════════════════════════════════╗')}
${accent('║')}  ${proj.icon}  ${bold(proj.name.padEnd(42))}${accent('║')}
${accent('╚══════════════════════════════════════════════╝')}

  ${dim('Full name →')}  ${proj.short}
  ${dim('Stack     →')}  ${accent(proj.stack)}
  ${dim('GitHub    →')}  ${proj.nda ? warn('Confidential (NDA)') : accent(proj.github || 'private')}

  ${dim('Description:')}
  ${proj.desc}
${proj.nda ? '\n  ' + warn('⚠') + '  ' + dim('Code is confidential per company NDA.') : ''}`
    },
  },

  contact: {
    desc: 'Get in touch',
    run: () => {
      const w = PORTFOLIO.whoami
      return `
${accent('▸ Let\'s connect!')}

  ${dim('Email    →')}  ${accent(w.email)}
  ${dim('GitHub   →')}  ${accent(w.github)}
  ${dim('LinkedIn →')}  ${accent(w.linkedin)}
  ${dim('Location →')}  ${w.location}

  ${success('✓')} ${dim('Open to internships, freelance & collaborations')}`
    },
  },

  github: {
    desc: 'Open GitHub profile',
    run: () => {
      window.open(`https://${PORTFOLIO.whoami.github}`, '_blank')
      return success(`Opening ${PORTFOLIO.whoami.github} ...`)
    },
  },

  'sudo hire mouad': {
    desc: 'easter egg',
    run: () => `
${accent('[sudo] password for recruiter: ')}***

${success('✓ Authentication successful')}
${success('✓ Checking candidate profile...')}
${success('✓ Skills verified: Java, Python, C++, React, Spring Boot')}
${success('✓ Projects: 4 shipped including 1 production app')}
${success('✓ Internship experience: confirmed')}

${accent('🎉 Hiring Mouad...')}

  ${dim('→')} ${bold('Offer letter sent to')} ${accent(PORTFOLIO.whoami.email)}
  ${dim('→')} ${bold('Start date: ASAP')} 🚀

${dim('(Not actually sent — but you should! Run')} ${accent('contact')} ${dim(')')}`
  },

  clear: {
    desc: 'Clear terminal',
    run: () => '__clear__',
  },
}

const ALL_CMDS = [
  'help', 'whoami', 'ls', 'ls skills', 'ls projects', 'ls exp', 'ls edu',
  'cat project 1', 'cat project 2', 'cat project 3', 'cat project 4',
  'contact', 'github', 'sudo hire mouad', 'clear',
]

function renderLine(html) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default function Terminal({ hoverOn, hoverOff }) {
  const [history, setHistory] = useState([])   
  const [input, setInput] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])   // past commands for ↑↓
  const [histIdx, setHistIdx] = useState(-1)
  const [hint, setHint] = useState('')
  const [focused, setFocused] = useState(false)
  const [booted, setBooted] = useState(false)

  const inputRef = useRef(null)
  const bottomRef = useRef(null)
  const bodyRef = useRef(null)

  // ── Boot sequence ────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false
    const boot = [
      { type: 'out', text: accent('Mouad.dev') + dim(' — interactive terminal v1.0') },
      { type: 'out', text: dim('────────────────────────────────────────') },
      { type: 'out', text: 'Type ' + accent('help') + ' to see all commands.' },
      { type: 'out', text: '' },
    ]
    // Reset history and boot cleanly (handles React StrictMode double-invoke)
    setHistory([])
    setBooted(false)
    let i = 0
    const next = () => {
      if (cancelled) return
      if (i >= boot.length) { setBooted(true); return }
      const line = boot[i++]
      if (line) setHistory(h => [...h, line])
      setTimeout(next, 120)
    }
    const id = setTimeout(next, 300)
    return () => { cancelled = true; clearTimeout(id) }
  }, [])

  // ── Auto-scroll ──────────────────────────────────────────────
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    if (!input.trim()) { setHint(''); return }
    const match = ALL_CMDS.find(c => c.startsWith(input.toLowerCase()) && c !== input.toLowerCase())
    setHint(match ? match.slice(input.length) : '')
  }, [input])

  // ── Execute command ──────────────────────────────────────────
  const execute = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    // Add to history
    setHistory(h => [...h, { type: 'in', text: cmd }])
    setCmdHistory(h => [cmd, ...h])
    setHistIdx(-1)
    setInput('')
    setHint('')

    // Multi-word commands (sudo hire mouad)
    if (COMMANDS[cmd]) {
      const result = COMMANDS[cmd].run([])
      if (result === '__clear__') {
        setHistory([])
      } else {
        const lines = result.split('\n')
        setTimeout(() => {
          setHistory(h => [...h, ...lines.map(l => ({ type: 'out', text: l }))])
        }, 40)
      }
      return
    }

    const parts = cmd.split(/\s+/)
    const name = parts[0]
    const args = parts.slice(1)
    const cmdFn = COMMANDS[name]

    if (cmdFn) {
      const result = cmdFn.run(args)
      if (result === '__clear__') {
        setHistory([])
      } else {
        const lines = result.split('\n')
        setTimeout(() => {
          setHistory(h => [...h, ...lines.map(l => ({ type: 'out', text: l }))])
        }, 40)
      }
    } else {
      setTimeout(() => {
        setHistory(h => [...h,
        { type: 'out', text: err(`Command not found: '${cmd}'`) },
        { type: 'out', text: `Type ${accent('help')} for available commands.` },
        ])
      }, 40)
    }
  }, [])

  const onKey = (e) => {
    if (e.key === 'Enter') {
      execute(input)
    } else if (e.key === 'Tab') {
      e.preventDefault()
      if (hint) setInput(i => i + hint)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(histIdx + 1, cmdHistory.length - 1)
      setHistIdx(next)
      setInput(cmdHistory[next] || '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(histIdx - 1, -1)
      setHistIdx(next)
      setInput(next === -1 ? '' : cmdHistory[next])
    }
  }

  const focus = () => {
    inputRef.current?.focus()
    setFocused(true)
  }

  return (
    <div
      className={`${styles.wrap} ${focused ? styles.focused : ''}`}
      onClick={focus}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {/* ── Title bar ── */}
      <div className={styles.bar}>
        <span className={`${styles.dot} ${styles.r}`} />
        <span className={`${styles.dot} ${styles.y}`} />
        <span className={`${styles.dot} ${styles.g}`} />
        <span className={styles.title}>mouad@portfolio:~</span>
        <span className={styles.badge}>interactive</span>
      </div>

      {/* ── Output area ── */}
      <div className={styles.body} ref={bodyRef}>
        {history.filter(Boolean).map((line, i) => (
          <div key={i} className={`${styles.line} ${line.type === 'in' ? styles.lineIn : styles.lineOut}`}>
            {line.type === 'in' && (
              <span className={styles.prompt}>
                <span className={styles.promptUser}>mouad</span>
                <span className={styles.promptAt}>@</span>
                <span className={styles.promptHost}>portfolio</span>
                <span className={styles.promptSymbol}>$</span>
              </span>
            )}
            {renderLine(line.text)}
          </div>
        ))}

        {/* ── Input line ── */}
        {booted && (
          <div className={styles.inputRow}>
            <span className={styles.prompt}>
              <span className={styles.promptUser}>mouad</span>
              <span className={styles.promptAt}>@</span>
              <span className={styles.promptHost}>portfolio</span>
              <span className={styles.promptSymbol}>$</span>
            </span>
            <div className={styles.inputWrap}>
              {/* Ghost layer: typed text (invisible) + hint */}
              <span className={styles.inputGhost} aria-hidden>
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
                aria-label="Terminal input"
              />
            </div>
            <span className={`${styles.cursor} ${focused ? styles.cursorBlink : ''}`} />
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {}
      <div className={styles.footer}>
        <span>Tab to autocomplete</span>
        <span>↑ ↓ history</span>
        <span>type <strong>help</strong> to start</span>
      </div>
    </div>
  )
}
