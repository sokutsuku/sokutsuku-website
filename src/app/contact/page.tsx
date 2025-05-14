// src/app/contact-page/page.tsx (またはContactセクションを含む任意のページ)
"use client";

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import SectionHeading from '@/components/elements/SectionHeading'; // 必要に応じて

// マップコンテナのスタイル
const mapContainerStyle = {
  width: '100%',
  height: '400px', // 高さは適宜調整
  borderRadius: '0.5rem', // 角丸 (任意)
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // 影 (任意)
};

const center = {
  lat: 34.702485,
  lng: 135.495951,
};

const mapOptions = {
  mapId: '9818a6fb97d128eb7436a75c', // ★★★ 必ずご自身のマップIDに置き換えてください ★★★
  disableDefaultUI: true, // デフォルトのUIコントロールを非表示にする (ズームコントロールなどは別途追加可能)
  zoomControl: true, // ズームコントロールは表示する例
};

const ContactPageWithMap: React.FC = () => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_Maps_API_KEY || "";

  if (!googleMapsApiKey) {
    console.error("Google Maps API Key is not set. Please set NEXT_PUBLIC_Maps_API_KEY environment variable.");
  }

  return (
    <div className="bg-gray-100 py-16 md:py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          id="contact-heading"
          title="Access"
          align="left"
          className="mb-12 text-gray-800" // SectionHeadingのスタイル
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* 左側: お問い合わせ情報など (この部分は自由に作成) */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">オフィス所在地</h3>
              <p className="text-gray-600">
                〒XXX-XXXX 大阪府大阪市〇〇区〇〇 X-X-X <br />
                （ビル名などがあれば）
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">連絡先</h3>
              <p className="text-gray-600">
                Email: contact@example.com <br />
                電話: 0X-XXXX-XXXX
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">営業時間</h3>
              <p className="text-gray-600">
                平日 9:00 - 18:00 <br />
                （土日祝日を除く）
              </p>
            </div>
            {/* ここにお問い合わせフォームへのリンクやボタンを配置しても良いでしょう */}
            {/* 例: <Button text="お問い合わせフォームへ" href="/contact-form" /> */}
          </div>

          {/* 右側: Google マップ */}
          <div className="w-full">
            {googleMapsApiKey ? (
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={15} // ズームレベルは適宜調整
                  options={mapOptions} // ★ カスタムスタイルを適用したオプション
                  // options={mapOptionsWithoutMapId} // Snazzy MapsなどJSONスタイルを使う場合
                >
                  {/* マーカーを立てる場合 */}
                  <Marker position={center} title="私たちのオフィス" />
                </GoogleMap>
              </LoadScript>
            ) : (
              <div style={mapContainerStyle} className="bg-gray-300 flex items-center justify-center text-gray-500">
                マップを読み込めません。(APIキー未設定)
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageWithMap;