-- お問い合わせテーブルの作成
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- RLS (Row Level Security) を有効化
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 匿名ユーザーによる挿入を許可（フォームからの送信用）
CREATE POLICY "Enable insert for anonymous users" ON public.contacts
  FOR INSERT
  WITH CHECK (true);

-- 認証済みユーザーのみ閲覧可能（管理者用）
CREATE POLICY "Enable read access for authenticated users only" ON public.contacts
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- インデックスの作成（パフォーマンス向上）
CREATE INDEX IF NOT EXISTS contacts_created_at_idx ON public.contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS contacts_status_idx ON public.contacts (status);
CREATE INDEX IF NOT EXISTS contacts_email_idx ON public.contacts (email);

-- コメント追加
COMMENT ON TABLE public.contacts IS 'お問い合わせフォームからの送信データを保存';
COMMENT ON COLUMN public.contacts.id IS '一意のID';
COMMENT ON COLUMN public.contacts.created_at IS '作成日時';
COMMENT ON COLUMN public.contacts.name IS 'お名前';
COMMENT ON COLUMN public.contacts.email IS 'メールアドレス';
COMMENT ON COLUMN public.contacts.company IS '会社名（任意）';
COMMENT ON COLUMN public.contacts.message IS 'お問い合わせ内容';
COMMENT ON COLUMN public.contacts.status IS 'ステータス (new, in_progress, completed)';
COMMENT ON COLUMN public.contacts.updated_at IS '更新日時';
