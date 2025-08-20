import dynamic from 'next/dynamic';

const WaterTTApp = dynamic(
  () => import('../assets/index-DCgDFyKC.js'),
  { 
    ssr: false,
    loading: () => <div>Loading...</div>
  }
);

export default function Home() {
  return <WaterTTApp />;
}
