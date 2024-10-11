// src/App.tsx
import React, { useState } from 'react';

// 定义文章类型
interface Post {
  id: number;
  title: string;
  content: string;
  private: boolean;  // 表示是否是私有文章
}

const App: React.FC = () => {
  // 示例文章列表
  const [posts] = useState<Post[]>([
    { id: 1, title: '公开文章 1', content: '这是一篇公开的文章内容', private: false },
    { id: 2, title: '私人文章 1', content: '这是一篇私人文章，需要密钥才能查看！！', private: true },
    { id: 3, title: '公开文章 2', content: '这是一篇公开的文章内容', private: false },
  ]);

  // 密钥和令牌管理
  const [secretKey, setSecretKey] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);

  const handleKeySubmit = () => {
    // 在这里实现后端 API 的密钥验证，例如：调用 API 获取令牌
    if (secretKey === 'valid_secret_key') { // 这里做个模拟，假设“valid_secret_key”为正确密钥
      setToken('mock_token');  // 模拟获取令牌
    } else {
      alert('密钥不正确');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <img
          className='App-logo'
          src="https://via.placeholder.com/150"
          alt="头像"
          style={{ borderRadius: '50%', width: '150px', height: '150px' ,    WebkitAnimation: 'App-logo-spin infinite 20s linear',
            animation: 'App-logo-spin infinite 20s linear' }}
        />
        <h1>我的个人博客</h1>
        <p>欢迎来到我的博客，这是我的世界。</p>
      </header>
      
      <section style={{ marginTop: '30px' }}>
        <h2>文章列表</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '15px' }}>
              <h3>{post.title}</h3>
              {post.private && !token ? (
                <p style={{ color: 'red' }}>这是一篇私人文章，请输入密钥以查看。</p>
              ) : (
                <p>{post.content}</p>
              )}
            </li>
          ))}
        </ul>
      </section>
      
      <section style={{ marginTop: '30px' }}>
        <h2>输入密钥以查看私人文章</h2>
        <input
          type="text"
          placeholder="请输入密钥"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          style={{ padding: '10px', fontSize: '16px',WebkitAnimation: 'App-logo-spin infinite linear' }}
        />
        <button
          onClick={handleKeySubmit}
          style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' , WebkitAnimation: 'App-logo-spin infinite 20s linear'}}
        >
          提交
        </button>
      </section>
    </div>
  );
};

export default App;
