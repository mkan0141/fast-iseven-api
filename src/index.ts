import { Hono } from 'hono';

const app = new Hono();

app.onError((err, c) => {
  return c.json({ error: err.message });
});

app.get('/api/iseven/:number', (c) => {
  const number = Number(c.req.param('number'));

  if (Number.isNaN(number)) {
    throw new Error("maybe it's not a number");
  }

  const iseven = Number(number) % 2 === 0;
  return c.json({ iseven });
});

export default app;
