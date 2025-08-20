import dynamic from 'next/dynamic';

// 올바른 경로로 수정
const TaxManagementApp = dynamic(
  () => import('../assets/index-DCgDFyKC'),  // .js 제거
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl">Water TT 시스템 로딩 중...</div>
      </div>
    )
  }
);

export default function Home() {
  return <TaxManagementApp />;
}
