export default function Phase00Content() {
  return (
    <div className="space-y-12">

      {/* INTRO */}
      <Section>
        <p className="text-[15px] text-[#6B7280] leading-relaxed">
          このフェーズのゴールはひとつだけ。<strong className="text-[#1A1F2E]">「AIの地図」を頭に入れること</strong>です。<br />
          地図があれば、これ以降のフェーズで「あ、これはあの場所の話だ」と迷わずに進めます。<br />
          コードは一行も出てきません。読むだけでOKです。
        </p>
      </Section>

      {/* 1 */}
      <Section title="01｜AIとML・DLって何が違うの？" eyebrow="全体像">
        <p className="body-text">
          「AI」「機械学習」「ディープラーニング」という言葉は全部よく聞くけれど、違いがよくわからない、という人が多いです。実は<strong className="text-[#1A1F2E]">入れ子構造</strong>になっています。
        </p>

        <div className="my-6 bg-[#F8F9FC] border border-[#E2E6EF] rounded-xl p-6">
          <div className="flex flex-col gap-3">
            <NestBox color="cyan" label="AI（人工知能）" desc="人間の知能をコンピュータで再現しようとする技術の総称。一番広い概念。" />
            <div className="pl-5">
              <NestBox color="purple" label="機械学習（ML）" desc="データを学習して、パターンを見つける技術。AIの中の一手法。" />
              <div className="pl-5 mt-3">
                <NestBox color="orange" label="ディープラーニング（DL）" desc="機械学習の中でも、脳の神経回路を模したモデルを使う手法。最近のAI進化の主役。" />
              </div>
            </div>
          </div>
        </div>

        <Callout type="point">
          覚え方：AI ⊃ 機械学習 ⊃ ディープラーニング。ロシア人形（マトリョーシカ）のイメージ。
        </Callout>
      </Section>

      {/* 2 */}
      <Section title="02｜LLMって何？" eyebrow="核心">
        <p className="body-text">
          <strong className="text-[#1A1F2E]">LLM（Large Language Model：大規模言語モデル）</strong>は、膨大な量のテキストデータを学習した巨大なAIモデルです。
          ChatGPTもClaudeもGeminiも、全部このLLMをベースに作られています。
        </p>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FactCard icon="📚" title="学習データ" desc="インターネット上の膨大なテキスト（本・記事・コード等）を読んで学習" />
          <FactCard icon="🔮" title="やっていること" desc="「次にどの単語が来そうか」を予測することで文章を生成している" />
          <FactCard icon="💬" title="得意なこと" desc="文章の生成・要約・翻訳・質問回答・コード生成など言語に関わること全般" />
        </div>

        <Callout type="caution">
          LLMは「計算して答えを出している」のではなく「それらしい言葉を予測している」。この違いが後で出てくる「ハルシネーション」の原因になります。
        </Callout>
      </Section>

      {/* 3 */}
      <Section title="03｜生成AIの種類" eyebrow="全体像">
        <p className="body-text">
          「生成AI」はテキストだけではありません。何を生成するかで4種類に分けて覚えておきましょう。
        </p>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TypeCard icon="💬" type="テキスト生成" tools="Claude / ChatGPT / Gemini" desc="文章・コード・要約・翻訳・アイデア出しなど。このロードマップで最も使う。" color="cyan" />
          <TypeCard icon="🎨" type="画像生成" tools="Midjourney / DALL-E / Stable Diffusion" desc="テキストの指示から画像を生成。プロダクトのデザインや素材作りに使える。" color="purple" />
          <TypeCard icon="🔊" type="音声生成" tools="ElevenLabs / OpenAI TTS / Whisper" desc="テキストを音声に変換、または音声をテキストに変換（文字起こし）。" color="orange" />
          <TypeCard icon="🎬" type="動画生成" tools="Runway / Sora / Veo" desc="静止画や指示から動画を生成。まだ発展途上だが急速に進化中。" color="green" />
        </div>
      </Section>

      {/* 4 */}
      <Section title="04｜Claude・ChatGPT・Geminiの違い" eyebrow="ツール比較">
        <p className="body-text">
          どれも「LLMベースのチャットAI」ですが、得意なこと・作っている会社・特徴が異なります。
        </p>

        <div className="my-5 overflow-x-auto">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="bg-[#F0F2F8]">
                <th className="text-left p-3 border border-[#E2E6EF] font-bold text-[#1A1F2E]">モデル</th>
                <th className="text-left p-3 border border-[#E2E6EF] font-bold text-[#1A1F2E]">開発元</th>
                <th className="text-left p-3 border border-[#E2E6EF] font-bold text-[#1A1F2E]">特徴</th>
                <th className="text-left p-3 border border-[#E2E6EF] font-bold text-[#1A1F2E]">このロードマップでの使いどころ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-[#E2E6EF] font-bold text-[#0891B2]">Claude</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">Anthropic</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">長文・コード・安全性に強い。指示への忠実さが高い。</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">Claude Code（開発）・プロンプト設計・要件定義</td>
              </tr>
              <tr className="bg-[#F8F9FC]">
                <td className="p-3 border border-[#E2E6EF] font-bold text-[#059669]">ChatGPT</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">OpenAI</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">最も広く使われている。プラグイン・画像生成も統合。</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">アイデア出し・調査・比較検討</td>
              </tr>
              <tr>
                <td className="p-3 border border-[#E2E6EF] font-bold text-[#7C3AED]">Gemini</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">Google</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">Googleサービスとの連携が強み。検索との統合。</td>
                <td className="p-3 border border-[#E2E6EF] text-[#6B7280]">リサーチ・最新情報の確認</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Callout type="point">
          どれが一番いいかという答えはなく、用途で使い分けます。まずClaudeを軸に学んで、必要に応じて他も試すのが最速です。
        </Callout>
      </Section>

      {/* 5 */}
      <Section title="05｜AIができること・できないこと" eyebrow="重要">
        <p className="body-text">
          「AIは何でもできる」と思って始めると、使えない場面でがっかりします。逆に「AIには限界がある」と知っていれば、できることだけをうまく任せられます。
        </p>

        <div className="my-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#DCFCE7] border border-[#86EFAC] rounded-xl p-5">
            <p className="text-[12px] font-bold text-[#166534] mb-3">✅ AIが得意なこと</p>
            <ul className="space-y-2">
              {[
                '文章の生成・要約・翻訳・校正',
                'コードの生成・レビュー・デバッグ',
                'アイデア出し・ブレインストーミング',
                'データの分類・整理・分析',
                '質問への回答（知識ベース）',
                '定型作業の自動化',
              ].map((item) => (
                <li key={item} className="text-[12px] text-[#166534] flex gap-2">
                  <span>▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-[12px] font-bold text-red-700 mb-3">❌ AIが苦手なこと</p>
            <ul className="space-y-2">
              {[
                'リアルタイムの最新情報（学習データに限界）',
                '正確な計算・論理的推論の保証',
                '個人の未公開情報へのアクセス',
                '自分の意志・感情・経験',
                '100%の事実保証（ハルシネーションがある）',
                'インターネットへの直接アクセス（標準では）',
              ].map((item) => (
                <li key={item} className="text-[12px] text-red-700 flex gap-2">
                  <span>▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 */}
      <Section title="06｜ハルシネーションとは" eyebrow="注意点">
        <p className="body-text">
          <strong className="text-[#1A1F2E]">ハルシネーション（幻覚）</strong>とは、AIが「もっともらしいが事実ではないこと」を自信満々に答えてしまう現象です。
        </p>

        <div className="my-5 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-[12px] font-bold text-amber-800 mb-3">🔍 具体例</p>
          <div className="space-y-3 text-[12px]">
            <div className="flex gap-3">
              <span className="text-[#6B7280] font-bold flex-shrink-0">質問：</span>
              <span className="text-[#6B7280]">「〇〇という本の著者は誰ですか？」</span>
            </div>
            <div className="flex gap-3">
              <span className="text-amber-700 font-bold flex-shrink-0">AI回答：</span>
              <span className="text-amber-700">「△△という作家です」← 実在しない著者名を答えることがある</span>
            </div>
          </div>
        </div>

        <p className="body-text">
          なぜ起きるか：LLMは「次に来る単語の確率」で文章を作るため、「それっぽい答え」を生成してしまうことがあります。正確性を確認する仕組みを自分で持つことが重要です。
        </p>

        <Callout type="point">
          対策：重要な事実はAIの回答を鵜呑みにせず、必ず一次情報で確認する。AIを「壁打ち相手」として使うのが安全。
        </Callout>
      </Section>

      {/* SUMMARY */}
      <Section title="まとめ" eyebrow="チェックリスト">
        <p className="body-text mb-5">以下が全部言えたら、このフェーズは完了です。</p>
        <div className="space-y-3">
          {[
            'AI ⊃ 機械学習 ⊃ ディープラーニング の入れ子構造を説明できる',
            'LLMは「次の単語を予測する」仕組みだと説明できる',
            '生成AIの4種類（テキスト・画像・音声・動画）を言える',
            'Claude・ChatGPT・Geminiの使い分けのイメージがある',
            'ハルシネーションが何かを人に説明できる',
          ].map((item, i) => (
            <label key={i} className="flex items-start gap-3 cursor-pointer group">
              <input type="checkbox" className="mt-0.5 w-4 h-4 rounded accent-[#0891B2] flex-shrink-0" />
              <span className="text-[13px] text-[#6B7280] group-hover:text-[#1A1F2E] transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </Section>

    </div>
  )
}

/* ── 共通コンポーネント ── */

function Section({ title, eyebrow, children }: { title?: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section>
      {title && (
        <div className="mb-4">
          {eyebrow && <p className="text-[11px] font-bold text-[#9CA3AF] tracking-widest uppercase mb-1">{eyebrow}</p>}
          <h2 className="text-[18px] font-bold text-[#1A1F2E] border-b border-[#E2E6EF] pb-2">{title}</h2>
        </div>
      )}
      {children}
    </section>
  )
}

function Callout({ type, children }: { type: 'point' | 'caution'; children: React.ReactNode }) {
  const styles = {
    point: 'bg-[#E0F7FA] border-[#A5F3FC] text-[#0E7490]',
    caution: 'bg-amber-50 border-amber-200 text-amber-800',
  }
  const icons = { point: '💡', caution: '⚠️' }
  return (
    <div className={`border rounded-xl p-4 mt-4 text-[12px] leading-relaxed ${styles[type]}`}>
      {icons[type]} {children}
    </div>
  )
}

function NestBox({ color, label, desc }: { color: string; label: string; desc: string }) {
  const colors: Record<string, string> = {
    cyan: 'border-[#0891B2] bg-[#E0F7FA]',
    purple: 'border-[#7C3AED] bg-[#EDE9FE]',
    orange: 'border-[#EA580C] bg-[#FFF7ED]',
  }
  const textColors: Record<string, string> = {
    cyan: 'text-[#0E7490]',
    purple: 'text-[#6D28D9]',
    orange: 'text-[#C2410C]',
  }
  return (
    <div className={`border-l-4 rounded-r-xl p-4 ${colors[color]}`}>
      <p className={`text-[13px] font-bold mb-1 ${textColors[color]}`}>{label}</p>
      <p className="text-[12px] text-[#6B7280]">{desc}</p>
    </div>
  )
}

function FactCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-[#E2E6EF] rounded-xl p-4 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-[12px] font-bold text-[#1A1F2E] mb-1">{title}</p>
      <p className="text-[11px] text-[#6B7280] leading-relaxed">{desc}</p>
    </div>
  )
}

function TypeCard({ icon, type, tools, desc, color }: { icon: string; type: string; tools: string; desc: string; color: string }) {
  const colors: Record<string, string> = {
    cyan: 'border-[#0891B2] bg-[#E0F7FA]',
    purple: 'border-[#7C3AED] bg-[#EDE9FE]',
    orange: 'border-[#EA580C] bg-[#FFF7ED]',
    green: 'border-[#059669] bg-[#DCFCE7]',
  }
  const labelColors: Record<string, string> = {
    cyan: 'text-[#0E7490]',
    purple: 'text-[#6D28D9]',
    orange: 'text-[#C2410C]',
    green: 'text-[#065F46]',
  }
  return (
    <div className={`border-l-4 rounded-r-xl p-4 ${colors[color]}`}>
      <div className="text-xl mb-1">{icon}</div>
      <p className={`text-[13px] font-bold mb-1 ${labelColors[color]}`}>{type}</p>
      <p className={`text-[10px] font-medium mb-2 ${labelColors[color]} opacity-70`}>{tools}</p>
      <p className="text-[12px] text-[#6B7280] leading-relaxed">{desc}</p>
    </div>
  )
}
