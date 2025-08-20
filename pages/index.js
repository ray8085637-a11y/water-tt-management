import dynamic from 'next/dynamic';

// 클라이언트에서만 렌더링
const TaxManagementApp = dynamic(
  () => import('../assets/index-DCgDFyKC.js'),
  { 
    ssr: false,
    loading: () => <div>로딩 중...</div>
  }
);

export default function Home() {
  return <TaxManagementApp />;
}
