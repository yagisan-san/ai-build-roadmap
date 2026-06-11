import Link from 'next/link'
import { PHASES, TRACKS, getPhasesByTrack, type Phase, type Track } from '@/lib/phases'

const TRACK_ORDER: Track[] = ['A', 'B', 'C']

const TRACK_COLORS: Record<Track, {
  badge: string; badgeText: string; card: string; cardHover: string; statusOpen: string
}> = {
  A: {
    badge: 'bg-[#E0F7FA] text-[#0891B2]',
    badgeText: 'text-[#0891B2]',
    card: 'hover:border-[#0891B2] hover:shadow-[0_4px_16px_rgba(8,145,178,0.1)]',
    cardHover: '',
    statusOpen: 'bg-[#DCFCE7] text-[#166534]',
  },
  B: {
    badge: 'bg-[#EDE9FE] text-[#7C3AED]',
    badgeText: 'text-[#7C3AED]',
    card: 'hover:border-[#7C3AED] hover:shadow-[0_4px_16px_rgba(124,58,237,0.1)]',
    cardHover: '',
    statusOpen: 'bg-[#DCFCE7] text-[#166534]',
  },
  C: {
    badge: 'bg-[#FFF7ED] text-[#EA580C]',
    badgeText: 'text-[#EA580C]',
    card: 'hover:border-[#EA580C] hover:shadow-[0_4px_16px_rgba(234,88,12,0.1)]',
    cardHover: '',
    statusOpen: 'bg-[#DCFCE7] text-[#166534]',
  },
  D: {
    badge: 'bg-[#FCE7F3] text-[#DB2777]',
    badgeText: 'text-[#DB2777]',
    card: 'hover:border-[#DB2777] hover:shadow-[0_4px_16px_rgba(219,39,119,0.1)]',
    cardHover: '',
    statusOpen: 'bg-[#DCFCE7] text-[#166534]',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <RoadmapSection />
    </>
  )
}

function Hero() {
  return (
    <section
      className="border-b border-[#E2E6EF] py-20 px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 50%, #FFF7ED 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white border border-[#CDD3E0] rounded-full px-4 py-1.5 text-[12px] text-[#6B7280] font-medium mb-6">
          <span className="badge-dot w-2 h-2 rounded-full bg-[#059669] inline-block" />
          非エンジニア × AI構築 完全ロードマップ
        </div>
        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
          AIを<span className="text-[#0891B2]">理解</span>して、<br />
          <span className="text-[#7C3AED]">構築</span>できる人になる。
        </h1>
        <p className="text-[14px] text-[#6B7280] leading-relaxed mb-8 max-w-md mx-auto">
          「使う」から「作る」へ。非エンジニアがAIプロダクトを構築するための学習ロードマップ＋実践教材。<br />
          作者自身が学びながら作るリアルなコンテンツ。
        </p>
        <Link
          href="/phase/00"
          className="inline-flex items-center gap-2 bg-[#0891B2] text-white text-[14px] font-bold px-7 py-3.5 rounded-xl hover:bg-[#0E7490] transition-colors"
        >
          Phase 00 から始める →
        </Link>
      </div>
    </section>
  )
}

function RoadmapSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-14">
      {TRACK_ORDER.map((track) => {
        const phases = getPhasesByTrack(track)
        const info = TRACKS[track]
        const colors = TRACK_COLORS[track]
        return (
          <div key={track} className="mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className={`text-[11px] font-bold px-3 py-1 rounded-md ${colors.badge}`}>
                {info.label}
              </span>
              <span className="text-[15px] font-bold text-[#1A1F2E]">{info.name}</span>
              <div className="flex-1 h-px bg-[#E2E6EF]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {phases.map((phase) => (
                <PhaseCard key={phase.id} phase={phase} colors={colors} />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

function PhaseCard({
  phase,
  colors,
}: {
  phase: Phase
  colors: (typeof TRACK_COLORS)[Track]
}) {
  const isPublished = phase.status === 'published'

  const card = (
    <div
      className={`group relative bg-white border border-[#E2E6EF] rounded-xl p-5 transition-all duration-200 ${
        isPublished ? `cursor-pointer ${colors.card}` : 'opacity-70'
      }`}
    >
      {isPublished && (
        <span className="absolute top-4 right-4 text-[#9CA3AF] text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          →
        </span>
      )}
      <div className="text-[11px] font-bold text-[#9CA3AF] mb-2 tracking-wide">
        PHASE {phase.id}
      </div>
      <div className="text-2xl mb-2">{phase.icon}</div>
      <h3 className="text-[14px] font-bold text-[#1A1F2E] mb-2">{phase.title}</h3>
      <p className="text-[12px] text-[#6B7280] leading-relaxed mb-4">{phase.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-[11px] text-[#9CA3AF]">⏱ {phase.timeEstimate}</span>
        {isPublished ? (
          <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${colors.statusOpen}`}>
            教材公開中
          </span>
        ) : (
          <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#F1F5F9] text-[#64748B]">
            準備中
          </span>
        )}
      </div>
    </div>
  )

  return isPublished ? (
    <Link href={`/phase/${phase.id}`}>{card}</Link>
  ) : (
    card
  )
}
