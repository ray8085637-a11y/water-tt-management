'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    setIsClient(true);
    // 클라이언트에서만 컴포넌트 동적 로드
    import('../assets/index-DCgDFyKC').then((module) => {
      setComponent(() => module.default);
    }).catch((error) => {
      console.error('컴포넌트 로드 실패:', error);
    });
  }, []);

  // 서버에서는 로딩 화면만 렌더링
  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">시스템 준비 중...</div>
      </div>
    );
  }

  // 컴포넌트 로드 완료되지 않았으면 로딩
  if (!Component) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">로딩 중...</div>
      </div>
    );
  }

  // 실제 컴포넌트 렌더링
  return <Component />;
}
