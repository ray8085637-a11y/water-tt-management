export default function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Water TT 관리시스템</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>환경변수 확인</h2>
        <p><strong>Google Script URL:</strong></p>
        <code style={{ backgroundColor: '#f5f5f5', padding: '5px' }}>
          {process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '환경변수 없음'}
        </code>
        
        <p><strong>Spreadsheet ID:</strong></p>
        <code style={{ backgroundColor: '#f5f5f5', padding: '5px' }}>
          {process.env.NEXT_PUBLIC_SPREADSHEET_ID || '환경변수 없음'}
        </code>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>기본 기능 테스트</h2>
        <button 
          onClick={() => alert('버튼 작동 확인!')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          클릭 테스트
        </button>
      </div>

      <div>
        <h2>다음 단계</h2>
        <p>1. 환경변수가 올바르게 표시되는지 확인</p>
        <p>2. 버튼이 정상 작동하는지 확인</p>
        <p>3. 기본 기능 확인 후 실제 컴포넌트 추가</p>
      </div>
    </div>
  );
}
