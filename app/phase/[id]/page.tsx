import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPhase, TRACKS, PHASES, type Phase, type Priority } from '@/lib/phases'
import Phase00Content from './content/phase-00'

const CONTENT_MAP: Record<string, React.ComponentType> = {
  '00': Phase00Content,
}

const PRIORITY_LABELS: Record<Priority, { label: string; className: string }> = {
  must:     { label: '🌱 まず知る',         className: 'bg-[#E0F7FA] text-[#0E7490] border border-[#A5F3FC]' },
  practice: { label: '⚡ 使いながら覚える', className: 'bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE]' },
  advance:  { label: '🚀 スケールしたら',   className: 'bg-[#FFF7ED] text-[#C2410C] border border-[#FED7AA]' },
}

const DIFFICULTY_LABELS = ['', '★☆☆☆☆', '★★☆☆☆', '★★★☆☆', '★★★★☆', '★★★★★']

const TRACK_COLORS = {
  A: { eyebrow: 'text-[#0891B2]', title: 'text-[#0E7490]', badge: 'bg-[#E0F7FA] text-[#0891B2]', border: 'border-l-[#0891B2]' },
  B: { eyebrow: 'text-[#7C3AED]', title: 'text-[#6D28D9]', badge: 'bg-[#EDE9FE] text-[#7C3AED]', border: 'border-l-[#7C3AED]' },
  C: { eyebrow: 'text-[#EA580C]', title: 'text-[#C2410C]', badge: 'bg-[#FFF7ED] text-[#EA580C]', border: 'border-l-[#EA580C]' },
  D: { eyebrow: 'text-[#DB2777]', title: 'text-[#BE185D]', badge: 'bg-[#FCE7F3] text-[#DB2777]', border: 'border-l-[#DB2777]' },
}

export async function generateStaticParams() {
  return PHASES.map((p) => ({ id: p.id }))
}

export default async function PhasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const phase = getPhase(id)
  if (!phase) notFound()

  const track = TRACKS[phase.track]
  const colors = TRACK_COLORS[phase.track]
  const phaseIndex = PHASES.findIndex((p) => p.id === id)
  const prevPhase = phaseIndex > 0 ? PHASES[phaseIndex - 1] : null
  const nextPhase = phaseIndex < PHASES.length - 1 ? PHASES[phaseIndex + 1] : null

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[12px] text-[#9CA3AF] mb-8">
        <Link href="/" className="hover:text-[#1A1F2E] transition-colors">ロードマップ</Link>
        <span>/</span>
        <span className={colors.eyebrow}>{track.label}</span>
        <span>/</span>
        <span className="text-[#1A1F2E] font-medium">Phase {phase.id}</span>
      </nav>

      {/* Header */}
      <div className={`border-l-4 pl-5 mb-8 ${colors.border}`}>
        <p className={`text-[12px] font-bold tracking-widest uppercase mb-1 ${colors.eyebrow}`}>
          {track.label} — {phase.eyebrow}
        </p>
        <h1 className={`text-3xl font-black mb-3 ${colors.title}`}>{phase.title}</h1>
        <div className="flex flex-wrap gap-2">
          <span className="text-[12px] px-3 py-1 rounded-full bg-[#F0F2F8] border border-[#E2E6EF] text-[#6B7280]">
            ⏱ {phase.timeEstimate}
          </span>
          <span className="text-[12px] px-3 py-1 rounded-full bg-[#F0F2F8] border border-[#E2E6EF] text-[#6B7280]">
            難易度 {DIFFICULTY_LABELS[phase.difficulty]}
          </span>
          <span className={`text-[12px] px-3 py-1 rounded-full font-semibold ${colors.badge}`}>
            {track.label}
          </span>
        </div>
      </div>

      {/* Goal */}
      <div className="bg-white border border-[#E2E6EF] rounded-xl p-6 mb-6">
        <h2 className="text-[13px] font-bold text-[#1A1F2E] mb-2 pb-2 border-b border-[#E2E6EF]">
          このフェーズで何ができるようになるか
        </h2>
        <p className="text-[13px] text-[#6B7280] leading-relaxed">
          ✦ {phase.ability}
        </p>
      </div>

      {/* Stuck warning */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
        <p className="text-[12px] font-bold text-red-600 mb-1">⚠️ これを知らないと詰む</p>
        <p className="text-[12px] text-red-700 leading-relaxed">{phase.stuck}</p>
      </div>

      {/* Point tip */}
      {phase.point && (
        <div className="bg-[#E0F7FA] border border-[#A5F3FC] rounded-xl p-5 mb-6">
          <p className="text-[12px] font-bold text-[#0E7490] mb-1">💡 ポイント</p>
          <p className="text-[12px] text-[#0E7490] leading-relaxed">{phase.point}</p>
        </div>
      )}

      {/* Topics */}
      <div className="bg-white border border-[#E2E6EF] rounded-xl p-6 mb-6">
        <h2 className="text-[13px] font-bold text-[#1A1F2E] mb-4 pb-2 border-b border-[#E2E6EF]">
          学習トピック
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {phase.topics.map((topic, i) => {
            const p = PRIORITY_LABELS[topic.priority]
            return (
              <div key={i} className="flex items-start gap-3 bg-[#F8F9FC] rounded-lg p-3">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold flex-shrink-0 mt-0.5 ${p.className}`}>
                  {p.label}
                </span>
                <span className="text-[12px] text-[#6B7280] leading-relaxed">{topic.title}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-white border border-[#E2E6EF] rounded-xl p-5 mb-10">
        <h2 className="text-[13px] font-bold text-[#1A1F2E] mb-3 pb-2 border-b border-[#E2E6EF]">
          使用ツール・サービス
        </h2>
        <div className="flex flex-wrap gap-2">
          {phase.tools.map((tool) => (
            <span
              key={tool}
              className="text-[12px] px-3 py-1.5 rounded-lg bg-[#F0F2F8] border border-[#E2E6EF] text-[#6B7280] font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      {phase.status === 'coming-soon' ? (
        <div className="text-center py-16 border-2 border-dashed border-[#E2E6EF] rounded-2xl mb-10">
          <p className="text-3xl mb-3">🚧</p>
          <p className="text-[15px] font-bold text-[#1A1F2E] mb-2">教材を準備中です</p>
          <p className="text-[13px] text-[#9CA3AF]">
            作者が実際に学んだあと、リアルな体験をもとに作成します。
          </p>
        </div>
      ) : CONTENT_MAP[phase.id] ? (
        <div className="bg-white border border-[#E2E6EF] rounded-2xl p-8 mb-10">
          <p className="text-[13px] font-bold text-[#0891B2] mb-6 pb-3 border-b border-[#E2E6EF]">📖 教材</p>
          {(() => { const C = CONTENT_MAP[phase.id]; return <C /> })()}
        </div>
      ) : (
        <div className="bg-white border border-[#E2E6EF] rounded-2xl p-8 mb-10">
          <p className="text-[13px] text-[#9CA3AF]">教材コンテンツを準備中です。</p>
        </div>
      )}

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-[#E2E6EF]">
        {prevPhase ? (
          <Link
            href={`/phase/${prevPhase.id}`}
            className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-[#0891B2] font-medium transition-colors"
          >
            ← Phase {prevPhase.id}：{prevPhase.title}
          </Link>
        ) : (
          <span />
        )}
        {nextPhase ? (
          <Link
            href={`/phase/${nextPhase.id}`}
            className="flex items-center gap-2 text-[13px] text-[#6B7280] hover:text-[#0891B2] font-medium transition-colors"
          >
            Phase {nextPhase.id}：{nextPhase.title} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
