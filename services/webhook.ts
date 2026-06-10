
/**
 * Service untuk memicu Webhook BinaryDev dari sisi client
 */

export const sendToWebhook = async (type: string, payload: any) => {
  // Endpoint ini harus sesuai dengan lokasi deploy Edge Function Anda
  const WEBHOOK_URL = '/api/webhook'; 
  
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Token ini harus sama dengan WEBHOOK_SECRET di server
        'Authorization': 'Bearer binarydev_default_secret'
      },
      body: JSON.stringify({
        type: type,
        timestamp: Date.now(),
        data: payload
      })
    });

    if (!response.ok) throw new Error('Webhook request failed');
    
    return await response.json();
  } catch (error) {
    console.error('Error triggering webhook:', error);
    return null;
  }
};
