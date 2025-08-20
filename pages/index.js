import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  // 여기에 실제 컴포넌트 내용을 직접 작성하거나
  // 또는 아예 다른 방식으로 접근해야 합니다
  
  return (
    <div style={{ padding: '20px' }}>
      <h1>Water TT 관리시스템</h1>
      <p>시스템이 정상적으로 로드되었습니다.</p>
      
      {/* 로그인 폼 */}
      <div style={{ marginTop: '20px' }}>
        <input type="email" placeholder="이메일" style={{ marginRight: '10px', padding: '5px' }} />
        <input type="password" placeholder="패스워드" style={{ marginRight: '10px', padding: '5px' }} />
        <button style={{ padding: '5px 10px' }}>로그인</button>
      </div>
    </div>
  );
}
