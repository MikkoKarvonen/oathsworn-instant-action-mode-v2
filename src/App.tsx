import { useState } from 'react'
import './App.css'
import { chapters } from './data/chapters'
import { PlayButton } from './components/PlayButton'

const playbackSpeeds = [1, 1.25, 1.5, 1.75, 2]

function App() {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]?.number ?? 1)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)

  const chapter = chapters.find((c) => c.number === selectedChapter) ?? chapters[0]

  return (
    <div className="min-h-screen text-slate-100 relative z-10">
      <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
        <header className="deepwood-hero rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 text-emerald-200/80 uppercase tracking-[0.25em] text-xs font-semibold">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
            <span>Oathsworn: Into the Deepwood</span>
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold font-display text-amber-200 drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
            Lorekeeper&apos;s Companion
          </h1>
          <p className="mt-3 text-slate-200/90 max-w-3xl leading-relaxed">
            A grim companion forged for the Wire Road—track chapters, adjust the pace,
            and keep your company moving before the Deepwood closes in.
          </p>
        </header>

        <section className="glass rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-end md:justify-between">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-emerald-100 font-semibold tracking-wide">Choose chapter</label>
              <select
                className="w-full md:w-64 rounded-lg bg-slate-900/80 border border-emerald-700/60 text-slate-100 px-3 py-2 focus:border-amber-500 focus:ring-2 focus:ring-emerald-500/40 outline-none transition-colors shadow-inner shadow-black/40"
                value={selectedChapter}
                onChange={(event) => setSelectedChapter(Number(event.target.value))}
              >
                {chapters.map((c) => (
                  <option key={c.number} value={c.number} className="bg-slate-900">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-emerald-100 font-semibold tracking-wide">Playback speed</label>
              <select
                className="w-full md:w-32 rounded-lg bg-slate-900/80 border border-emerald-700/60 text-slate-100 px-3 py-2 focus:border-amber-500 focus:ring-2 focus:ring-emerald-500/40 outline-none transition-colors shadow-inner shadow-black/40"
                value={playbackSpeed}
                onChange={(event) => setPlaybackSpeed(Number(event.target.value))}
              >
                {playbackSpeeds.map((speed) => (
                  <option key={speed} value={speed} className="bg-slate-900">
                    {speed}x
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-emerald-400/80 via-amber-400/80 to-emerald-500/80" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-300/70">Field dossier</p>
                  <h2 className="text-2xl font-bold font-display text-amber-200 drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)]">
                    {chapter.name}
                  </h2>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              {chapter.sections && chapter.sections.length > 0 && (
                <div className="space-y-4">
                  <div className="banner-header">Sections</div>
                  <div className="grid gap-4">
                    {chapter.sections.map((section, index) => (
                      <article
                        key={`${chapter.number}-section-${index}`}
                        className={`fantasy-card ${section.type === 'rule' ? 'rule-card' : 'story-card'}`}
                      >
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <h4 className="text-lg font-semibold text-amber-100">
                            Section {index + 1}
                          </h4>
                          <div className="flex items-center gap-3">
                            {section.type === 'story' && (
                              <PlayButton
                                audioSrc={`chapter-${chapter.number}/section-${index + 1}.mp3`}
                                playbackRate={playbackSpeed}
                                className="shrink-0"
                              />
                            )}
                            <span className={`section-badge ${section.type}`}>
                              {section.type === 'rule' ? 'Rule' : 'Story'}
                            </span>
                          </div>
                        </div>
                        <div className="grim-divider mb-3" />
                        <p className="mt-2 text-slate-200 leading-relaxed whitespace-pre-wrap">
                          {section.text}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="text-xs text-slate-400 text-center space-y-3">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://www.shadowborne-games.com/pages/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200 hover:text-amber-300 transition-colors underline decoration-emerald-700/50 hover:decoration-amber-500"
            >
              Shadowborne Games
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://github.com/MikkoKarvonen/red-dragon-inn-reader"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-200 hover:text-amber-300 transition-colors underline decoration-emerald-700/50 hover:decoration-amber-500"
            >
              GitHub Repository
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
