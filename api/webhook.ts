
/**
 * BinaryDev Webhook Edge Function
 * Kompatibel dengan Vercel Edge, Cloudflare Workers, atau Deno.
 */

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // 1. Validasi Metode
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method Not Allowed', message: 'Gunakan metode POST' }),
      { 
        status: 405, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }

  // 2. Validasi Keamanan (Secret Token)
  // Anda harus mengatur WEBHOOK_SECRET di environment variables platform hosting Anda
  const authHeader = req.headers.get('Authorization');
  const secret = process.env.WEBHOOK_SECRET || 'binarydev_default_secret';
  
  if (authHeader !== `Bearer ${secret}`) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized', message: 'Token keamanan tidak valid' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    // 3. Parsing Data
    const body = await req.json();
    const { type, data, timestamp } = body;

    // Logika Bisnis: Contoh meneruskan ke Telegram/Slack atau Database eksternal
    console.log(`[Webhook Received] Event: ${type} pada ${new Date(timestamp).toLocaleString()}`);
    console.log('[Payload Data]', data);

    // Simulasi integrasi sukses
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Webhook processed successfully',
        receivedAt: new Date().toISOString()
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('[Webhook Error]', error);
    return new Response(
      JSON.stringify({ error: 'Bad Request', message: 'Format JSON salah atau data korup' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
