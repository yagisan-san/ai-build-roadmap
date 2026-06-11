import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: '非エンジニア × AI構築 学習ロードマップ',
  description:
    '「使う」から「作る」へ。非エンジニアがAIプロダクトを構築するための完全学習ロードマップ＋実践教材。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-noto)]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E6EF] shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-[15px] font-bold text-[#1A1F2E]">
          AI構築<span className="text-[#0891B2]">ロードマップ</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/" className="text-[13px] text-[#6B7280] hover:text-[#1A1F2E] font-medium transition-colors">
            ロードマップ
          </Link>
          <Link href="/phase/00" className="text-[13px] text-[#6B7280] hover:text-[#1A1F2E] font-medium transition-colors">
            教材
          </Link>
          <span className="text-[13px] text-[#9CA3AF] font-medium cursor-default">学習ノート</span>
          <span className="text-[13px] text-[#9CA3AF] font-medium cursor-default">ツール</span>
        </nav>
        <Link
          href="/phase/00"
          className="text-[13px] font-bold bg-[#0891B2] text-white px-5 py-2 rounded-lg hover:bg-[#0E7490] transition-colors"
        >
          Phase 00 から始める →
        </Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#E2E6EF] py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[13px] font-bold text-[#1A1F2E]">
          AI構築<span className="text-[#0891B2]">ロードマップ</span>
        </p>
        <p className="text-[12px] text-[#9CA3AF]">
          非エンジニアがAIプロダクトを構築するための実践的な学習サイト
        </p>
      </div>
    </footer>
  )
}
