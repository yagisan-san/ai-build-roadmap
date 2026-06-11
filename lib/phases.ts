export type Priority = 'must' | 'practice' | 'advance'
export type Track = 'A' | 'B' | 'C' | 'D'
export type Status = 'published' | 'coming-soon'

export interface Topic {
  title: string
  priority: Priority
}

export interface Phase {
  id: string
  track: Track
  eyebrow: string
  title: string
  description: string
  stuck: string
  point?: string
  topics: Topic[]
  tools: string[]
  timeEstimate: string
  difficulty: 1 | 2 | 3 | 4 | 5
  ability: string
  status: Status
  icon: string
}

export const TRACKS: Record<Track, { label: string; name: string; color: string }> = {
  A: { label: 'TRACK A', name: 'AI基礎理解', color: 'cyan' },
  B: { label: 'TRACK B', name: 'AI構築技術', color: 'purple' },
  C: { label: 'TRACK C', name: 'プロダクト化・収益', color: 'orange' },
  D: { label: 'TRACK D', name: 'マルチモーダルAI', color: 'pink' },
}

export const PHASES: Phase[] = [
  {
    id: '00',
    track: 'A',
    eyebrow: '全体像・概念',
    title: 'AIの地図を読む',
    icon: '🗺️',
    description: '全フェーズの前提。AIを「ツール」として使うから「仕組みを知る人」になるための第一歩。',
    stuck: 'AIに「ログイン機能を作って」と頼んだのに何を作られているかわからない。LLM・Agent・RAGが全部混乱する。土台の地図がないとAIに何を頼めばいいかすらわからない。',
    topics: [
      { title: 'AIとML・DLの違いを整理', priority: 'must' },
      { title: 'LLM（大規模言語モデル）とは', priority: 'must' },
      { title: '生成AIの種類（テキスト・画像・音声・動画）', priority: 'must' },
      { title: 'Claude / ChatGPT / Geminiの立ち位置', priority: 'must' },
      { title: 'AIができること・できないこと', priority: 'must' },
      { title: 'AI幻覚（ハルシネーション）の概念', priority: 'must' },
    ],
    tools: ['Claude', 'ChatGPT', 'Gemini'],
    timeEstimate: '2〜3h',
    difficulty: 1,
    ability: 'AIへの指示がズレなくなる',
    status: 'published',
  },
  {
    id: '01',
    track: 'A',
    eyebrow: 'LLMの仕組み',
    title: 'LLMの中身を知る',
    icon: '🔬',
    description: 'コードを書かなくても、仕組みを知っているだけで設計の精度が変わる。',
    stuck: 'APIコストが月10万円を超えて赤字になる。トークンの概念がないとコスト設計ができない。コンテキスト長を知らないと「なぜかAIが途中から的外れな回答をする」原因もわからない。',
    topics: [
      { title: 'トークンとは・コストとの関係', priority: 'must' },
      { title: 'コンテキスト長の概念と制限', priority: 'must' },
      { title: 'Temperature（ランダム性）の意味', priority: 'must' },
      { title: 'System / User / Assistantメッセージ構造', priority: 'practice' },
      { title: 'モデルの選び方（速度・精度・コスト）', priority: 'practice' },
      { title: 'Fine-tuningとプロンプトの使い分け', priority: 'advance' },
    ],
    tools: ['Claude API Docs', 'OpenAI Tokenizer'],
    timeEstimate: '3〜4h',
    difficulty: 2,
    ability: 'コスト設計が正確にできる',
    status: 'coming-soon',
  },
  {
    id: '02',
    track: 'A',
    eyebrow: 'プロンプトエンジニアリング',
    title: 'AIを意図通りに動かす',
    icon: '✍️',
    description: 'プロンプト設計はコードを書かなくてもできる。ここを磨けばエンジニアより良いAI出力を出せる。',
    stuck: '「良い感じにして」「もっとよく」を繰り返して同じ修正を30回やる。プロンプト設計を知らないとAIは賢いのに出力がブレ続け、製品の品質が安定しない。',
    point: '非エンジニアの最大の武器。プロンプト設計はコードを書かなくてもできる。ここを磨けばエンジニアより良いAI出力を出せる。',
    topics: [
      { title: 'Role / Context / Task 構造化プロンプト', priority: 'practice' },
      { title: 'Few-shot（例示）プロンプティング', priority: 'practice' },
      { title: 'Chain-of-Thought（思考の連鎖）', priority: 'practice' },
      { title: 'System Promptの設計原則', priority: 'practice' },
      { title: '出力フォーマット（JSON / Markdown）指定', priority: 'practice' },
      { title: 'プロンプトのバージョン管理', priority: 'practice' },
      { title: 'プロンプトインジェクション対策', priority: 'advance' },
      { title: 'Structured Output（構造化出力）', priority: 'advance' },
    ],
    tools: ['Claude', 'ChatGPT', 'PromptLayer', 'LangSmith'],
    timeEstimate: '4〜6h',
    difficulty: 3,
    ability: 'AIが一発で意図通りに動く',
    status: 'coming-soon',
  },
  {
    id: '03',
    track: 'B',
    eyebrow: 'AIツール活用',
    title: 'AIツールを使いこなす',
    icon: '⚙️',
    description: 'まずツールで動かす体験が先。「何ができるか」を肌で知ってから構築に入る。',
    stuck: 'コードも書けないのにいきなりAPI連携しようとして挫折する。ノーコードツールの存在を知らないと「エンジニアじゃないと無理」という思い込みから抜けられない。',
    topics: [
      { title: 'Claude / ChatGPTを最大限活用する', priority: 'practice' },
      { title: 'NotebookLMで独自知識を作る', priority: 'practice' },
      { title: 'Dify / Flowiseノーコードでのアプリ構築', priority: 'practice' },
      { title: 'Make / n8nでワークフロー自動化', priority: 'practice' },
      { title: 'Notion AIとの連携', priority: 'must' },
      { title: 'Zapier AIの活用', priority: 'advance' },
    ],
    tools: ['Dify', 'Flowise', 'Make', 'n8n', 'NotebookLM'],
    timeEstimate: '3〜5h',
    difficulty: 2,
    ability: 'コードなしでAIアプリが動く',
    status: 'coming-soon',
  },
  {
    id: '04',
    track: 'B',
    eyebrow: 'API連携',
    title: 'APIでAIを組み込む',
    icon: '🔗',
    description: 'AIを自分のアプリに「繋ぐ」技術。Claude CodeやCursorと組めばコードなしでも実装できる。',
    stuck: 'APIキーをコードに直書きしてGitHubに公開→不正利用で数十万円の請求が来る実例がある。APIの基本とセキュリティを知らないと怖くて使えない。',
    topics: [
      { title: 'APIキーの取得と安全な管理', priority: 'practice' },
      { title: 'REST APIの基本（リクエスト・レスポンス）', priority: 'practice' },
      { title: 'Claude APIの呼び出し方', priority: 'practice' },
      { title: 'Streaming（逐次表示）の実装', priority: 'practice' },
      { title: '.env環境変数でキーを隠す', priority: 'practice' },
      { title: 'レート制限とリトライ処理', priority: 'practice' },
      { title: 'Function Calling（ツール呼び出し）', priority: 'advance' },
      { title: 'Webhookでイベント駆動の連携', priority: 'advance' },
    ],
    tools: ['Claude API', 'OpenAI API', 'Postman', 'Claude Code'],
    timeEstimate: '4〜6h',
    difficulty: 3,
    ability: '自分のアプリにAIを組み込める',
    status: 'coming-soon',
  },
  {
    id: '05',
    track: 'B',
    eyebrow: 'RAG・独自知識',
    title: 'AIに自分の知識を持たせる',
    icon: '🧠',
    description: 'RAGはAI構築の核心技術。これを理解することでカスタムAIの設計が一気に広がる。',
    stuck: '「自社の商品情報を知っているチャットボットを作って」とAIに頼んでも、LLMは学習データにない情報を答えられない。RAGを知らないと「AIは独自情報を知れない」という誤解のまま設計が止まる。',
    topics: [
      { title: 'RAG（検索拡張生成）の仕組み', priority: 'must' },
      { title: 'Embedding（埋め込み）とは', priority: 'must' },
      { title: 'ベクトルDB（Pinecone / Supabase）', priority: 'practice' },
      { title: 'ドキュメントの前処理（チャンク分割）', priority: 'practice' },
      { title: 'Difyでノーコードでのシステム構築', priority: 'practice' },
      { title: '精度改善のチューニング方法', priority: 'practice' },
      { title: 'HyDE（仮想ドキュメント埋め込み）', priority: 'advance' },
      { title: 'Graph RAGの概念', priority: 'advance' },
    ],
    tools: ['Dify', 'Pinecone', 'Supabase', 'LlamaIndex'],
    timeEstimate: '4〜6h',
    difficulty: 4,
    ability: '独自知識を持つAIが作れる',
    status: 'coming-soon',
  },
  {
    id: '06',
    track: 'B',
    eyebrow: 'AIエージェント・MCP',
    title: 'AIに自律的に動かせる',
    icon: '🤖',
    description: '2025年最重要トピック。MCPはAIエージェントが外部ツールを使うための標準プロトコル。',
    stuck: '「AIエージェントを作りたい」と言いながらエージェントの定義すら曖昧なまま作り始めて、ただのチャットボットになる。ループ・判断・ツール呼び出しの設計ができないと自律動作は実現しない。',
    point: '2025年最重要トピック：MCPはAIエージェントが外部ツールを使うための標準プロトコル。Claude Codeがフル活用している技術でもある。',
    topics: [
      { title: 'AIエージェントの定義と構造', priority: 'must' },
      { title: 'ReAct（推論→行動のループ）パターン', priority: 'practice' },
      { title: 'ツール定義（Function Calling設計）', priority: 'practice' },
      { title: 'MCP（Model Context Protocol）とは', priority: 'practice' },
      { title: 'マルチエージェント設計パターン', priority: 'practice' },
      { title: 'エージェントのエラー処理・停止条件', priority: 'practice' },
      { title: 'LangGraphでステート管理', priority: 'advance' },
      { title: 'Computer Use（画面操作エージェント）', priority: 'advance' },
    ],
    tools: ['Claude API', 'LangGraph', 'n8n', 'Dify'],
    timeEstimate: '5〜8h',
    difficulty: 5,
    ability: 'AIが自律的に仕事をこなす',
    status: 'coming-soon',
  },
  {
    id: '07',
    track: 'C',
    eyebrow: 'AIプロダクト設計',
    title: 'AIプロダクトを設計する',
    icon: '📐',
    description: '技術を知った上でプロダクトを設計するのが非エンジニア開発者の強み。AIに設計書を書かせながら整理する。',
    stuck: '「AIチャットボット」「AIライター」「AI要約ツール」とアイデアを並べるだけで、何を作っても既存サービスと差別化できない。ユーザー視点の設計がないと「すごい技術で誰も使わないもの」になる。',
    topics: [
      { title: 'AIプロダクトの差別化軸の見つけ方', priority: 'practice' },
      { title: 'MVP設計（最小限で検証する）', priority: 'practice' },
      { title: 'ユーザーインタビューの設計', priority: 'practice' },
      { title: '要件定義書をAIと一緒に書く', priority: 'practice' },
      { title: 'AIの倫理（バイアス・プライバシー）', priority: 'practice' },
      { title: '利用規約でのAI免責の書き方', priority: 'advance' },
      { title: 'A/BテストでプロンプトをKPIで改善', priority: 'advance' },
      { title: 'LLMの評価指標（RAGAS等）', priority: 'advance' },
    ],
    tools: ['Notion', 'Figma', 'Claude', 'v0.dev'],
    timeEstimate: '5〜8h',
    difficulty: 4,
    ability: '売れるAIプロダクトを設計できる',
    status: 'coming-soon',
  },
  {
    id: '08',
    track: 'C',
    eyebrow: '構築・デプロイ',
    title: 'AIで作って世界に出す',
    icon: '🚀',
    description: 'コードは書かなくていい。Claude Code / Cursorに任せて自分は設計と判断に集中する。',
    stuck: 'Claude Codeに作らせたアプリをVercelにデプロイしようとしてエラー。環境変数の設定漏れなのかビルドエラーなのか判断できずAIに聞いても何を聞けばいいかわからない。',
    topics: [
      { title: 'Claude Codeを使った開発フロー', priority: 'practice' },
      { title: 'Vercelでのデプロイ手順', priority: 'practice' },
      { title: 'GitHubとの連携（自動デプロイ）', priority: 'practice' },
      { title: 'SupabaseでDB・認証を構築', priority: 'practice' },
      { title: 'Stripeで決済を組む', priority: 'practice' },
      { title: '本番 / 開発環境の分離', priority: 'practice' },
      { title: 'ログ監視（Sentry / Vercel Analytics）', priority: 'advance' },
      { title: 'コスト監視 APIの使用量アラート設定', priority: 'advance' },
    ],
    tools: ['Claude Code', 'Vercel', 'GitHub', 'Supabase', 'Stripe'],
    timeEstimate: '5〜10h',
    difficulty: 4,
    ability: 'AIプロダクトが世界に公開できる',
    status: 'coming-soon',
  },
  {
    id: '09',
    track: 'C',
    eyebrow: '発信・収益化',
    title: '構築を資産に変える',
    icon: '📣',
    description: '構築しながら発信する。学んだプロセスが読者の信頼になり、それが顧客になる。',
    stuck: '良いAIプロダクトを作っても誰にも届かず売れない。「非エンジニアがAIを構築している」というプロセスそのものが最大のコンテンツなのに、発信せずに完成待ちを続けると学習コストが全部埋没する。',
    topics: [
      { title: 'Xで構築ログを発信する', priority: 'practice' },
      { title: 'note / Zennで技術記事を書く', priority: 'practice' },
      { title: '発信→集客→販売のサイクル', priority: 'practice' },
      { title: 'SaaS収益（サブスク / 買い切り設計）', priority: 'practice' },
      { title: 'AI受託案件の獲得方法', priority: 'advance' },
      { title: 'コミュニティを軸にした収益化', priority: 'advance' },
    ],
    tools: ['note', 'Zenn', 'X', 'Stripe'],
    timeEstimate: '∞',
    difficulty: 2,
    ability: '構築がそのまま収益に変わる',
    status: 'coming-soon',
  },
]

export function getPhase(id: string): Phase | undefined {
  return PHASES.find((p) => p.id === id)
}

export function getPhasesByTrack(track: Track): Phase[] {
  return PHASES.filter((p) => p.track === track)
}
