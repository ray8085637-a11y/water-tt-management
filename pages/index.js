import dynamic from 'next/dynamic';

const TaxManagementApp = dynamic(
  () => import('../assets/index-DCgDFyKC.js'),  // .js 추가
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
