import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { ContactFormData, ContactApiResponse } from '@/types/contact'

export async function POST(request: NextRequest) {
  try {
    // リクエストボディの取得
    const body: ContactFormData = await request.json()

    // バリデーション
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: '必須項目が入力されていません',
          error: 'name, email, messageは必須です'
        },
        { status: 400 }
      )
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'メールアドレスの形式が正しくありません',
          error: 'Invalid email format'
        },
        { status: 400 }
      )
    }

    // Supabaseにデータを挿入
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: body.name,
          email: body.email,
          company: body.company || null,
          message: body.message,
          status: 'new'
        }
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json<ContactApiResponse>(
        {
          success: false,
          message: 'お問い合わせの送信に失敗しました',
          error: error.message
        },
        { status: 500 }
      )
    }

    return NextResponse.json<ContactApiResponse>(
      {
        success: true,
        message: 'お問い合わせを受け付けました',
        data
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json<ContactApiResponse>(
      {
        success: false,
        message: 'サーバーエラーが発生しました',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
