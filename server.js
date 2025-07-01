import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

// ✅ GET route with gender and username in URL
app.get('get/:gender/:username', (req, res) => {
  const { username, gender } = req.params;

  if (!username || !gender) {
    return res.status(400).json({ error: 'Username and gender are required' });
  }

  const type = gender.toLowerCase() === 'female' ? 'girl' : 'boy';

  // Use only gender and username for seed (no uuid)
  const seed = `${username}`;

  const avatarUrl = `https://avatar.iran.liara.run/public/${type}?username=${encodeURIComponent(seed)}`;

  res.json({ avatarUrl });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
