import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/generate-avatar', (req, res) => {
  const { username, gender } = req.body;

  if (!username || !gender) {
    return res.status(400).json({ error: 'Username and gender are required' });
  }

  const type = gender === 'female' ? 'girl' : 'boy';

  const avatarUrl = `https://avatar.iran.liara.run/public/${type}?username=${encodeURIComponent(username)}`;

  res.json({ avatarUrl });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
