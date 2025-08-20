import React from 'react';

// 임시 메인 페이지
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Water TT 관리시스템
        </h1>
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-lg">시스템이 성공적으로 배포되었습니다!</p>
          <p className="text-gray-600 mt-2">곧 전체 기능이 추가될 예정입니다.</p>
        </div>
      </div>
    </div>
  );
}
