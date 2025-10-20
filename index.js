import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>A+B Free Shipping Logic</title>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: #f6f6f7;
        }
        .container {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        h1 { color: #008060; margin-bottom: 10px; }
        .subtitle { color: #6d7175; margin-bottom: 30px; }
        .info { background: #f6f6f7; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .step { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #008060; }
        code { background: #f6f6f7; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 A+B Free Shipping Logic</h1>
        <p class="subtitle">应用已成功安装！</p>
        
        <div class="info">
          <h2>📦 包含的扩展</h2>
          <ul>
            <li><strong>Delivery Customization</strong>: 修改运费选项显示名称</li>
            <li><strong>Shipping Discount</strong>: 应用运费折扣</li>
          </ul>
        </div>

        <div class="info">
          <h2>🎯 运费规则</h2>
          <p><strong>条件：</strong> A类产品数量 ≥ 1 且 B类产品数量 ≥ A类产品数量</p>
          <p><strong>效果：</strong> A类产品运费显示为 Free</p>
        </div>

        <div class="info">
          <h2>⚙️ 激活步骤</h2>
          <div class="step">
            <strong>步骤 1：</strong> Settings → Shipping and delivery → Add customization
          </div>
          <div class="step">
            <strong>步骤 2：</strong> Discounts → Create discount → Select ab-shipping-discount
          </div>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/auth/callback', (req, res) => {
  res.send('Authentication successful!');
});

app.listen(PORT, () => {
  console.log(`✅ App running on http://localhost:${PORT}`);
});
