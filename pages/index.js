import { useState, useEffect } from 'react';

export default function Home() {
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 클라이언트에서만 실행
    if (typeof window !== 'undefined') {
      // 동적으로 컴포넌트 로드
      const loadComponent = async () => {
        try {
          console.log('컴포넌트 로딩 시작...');
          
          // assets/index-DCgDFyKC.js 파일 로드
          const module = await import('../assets/index-DCgDFyKC.js');
          const ImportedComponent = module.default;
          
          console.log('컴포넌트 로드 성공:', ImportedComponent);
          
          if (ImportedComponent) {
            setComponent(() => ImportedComponent);
          } else {
            throw new Error('컴포넌트를 찾을 수 없습니다');
          }
        } catch (err) {
          console.error('컴포넌트 로드 실패:', err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      // 약간의 지연 후 로드 (DOM 준비 대기)
      setTimeout(loadComponent, 100);
    }
  }, []);

  // 서버사이드 렌더링 시
  if (typeof window === 'undefined') {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>시스템 준비 중...</div>
      </div>
    );
  }

  // 로딩 중
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div>
          <div style={{ marginBottom: '10px' }}>Water TT 시스템 로딩 중...</div>
          <div style={{ fontSize: '14px', color: '#666' }}>컴포넌트를 불러오고 있습니다</div>
        </div>
      </div>
    );
  }

  // 에러 발생
  if (error) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#dc3545', marginBottom: '10px' }}>로드 실패</h2>
          <p style={{ marginBottom: '10px' }}>컴포넌트를 불러올 수 없습니다</p>
          <p style={{ fontSize: '14px', color: '#666' }}>오류: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            새로고침
          </button>
        </div>
      </div>
    );
  }

  // 컴포넌트 렌더링
  if (Component) {
    return <Component />;
  }

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh' 
    }}>
      <div>컴포넌트를 찾을 수 없습니다</div>
    </div>
  );
}
