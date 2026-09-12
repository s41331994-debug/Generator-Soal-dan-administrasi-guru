import { FormData, GeneratedSection, GroundingSource } from "../types";

// Audio decoding helpers
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// 1. Get CP Suggestions
export const getCPSuggestions = async (formData: Partial<FormData>): Promise<string> => {
  const response = await fetch("/api/gemini/cp-suggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Server error (${response.status})`);
  }

  const data = await response.json();
  return data.text || "";
};

// 2. Get Topic Suggestions
export const getTopicSuggestions = async (formData: Partial<FormData>): Promise<string> => {
  const response = await fetch("/api/gemini/topic-suggestions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Server error (${response.status})`);
  }

  const data = await response.json();
  return data.text || "";
};

// 3. Generate Admin Content
export const generateAdminContent = async (formData: FormData): Promise<GeneratedSection[]> => {
  const response = await fetch("/api/gemini/generate-admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gagal generate administrasi guru (${response.status})`);
  }

  const data = await response.json();
  return data.sections || [];
};

// 4. Generate Bank Soal
export const generateSoalContentSections = async (formData: FormData): Promise<GeneratedSection[]> => {
  const response = await fetch("/api/gemini/generate-soal", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gagal generate bank soal (${response.status})`);
  }

  const data = await response.json();
  return data.sections || [];
};

// 5. Generate Tryout / UAS
export const generateTryoutContent = async (formData: FormData): Promise<GeneratedSection[]> => {
  const response = await fetch("/api/gemini/generate-tryout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formData }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gagal generate tryout (${response.status})`);
  }

  const data = await response.json();
  return data.sections || [];
};

// 6. Grounded Search
export const groundedSearch = async (
  query: string,
  tool: 'web' | 'maps',
  location?: { latitude: number; longitude: number }
): Promise<{ text: string; sources: GroundingSource[] }> => {
  const response = await fetch("/api/gemini/grounded-search", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, tool, location }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || `Gagal melakukan pencarian (${response.status})`);
  }

  return await response.json();
};

// 7. Text to Speech
export const textToSpeech = async (text: string): Promise<AudioBuffer> => {
  const response = await fetch("/api/gemini/text-to-speech", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error("Gagal menghasilkan audio TTS.");
  }

  const data = await response.json();
  const base64Audio = data.audioBase64;
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const bytes = decode(base64Audio);
  return await decodeAudioData(bytes, audioContext, 24000, 1);
};

// 8. Generate Image
export const generateImage = async (prompt: string): Promise<string> => {
  const response = await fetch("/api/gemini/generate-image", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Gagal membuat gambar.");
  }

  const data = await response.json();
  return data.imageUrl;
};

// Legacy stubs if referenced elsewhere
export const editImage = async (_base64Data: string, _mimeType: string, prompt: string): Promise<string> => {
  return generateImage(prompt);
};

export const analyzeImage = async (_base64Data: string, _mimeType: string, _prompt: string): Promise<string> => {
  return "Analisis visual selesai.";
};

export const generateVideo = async (_prompt: string, _image: any, _aspectRatio: string) => {
  return { name: "op-stub" };
};

export const checkVideoOperation = async (_operation: any) => {
  return { done: true };
};

export const analyzeVideoFrames = async (_frames: any[], _prompt: string): Promise<string> => {
  return "Analisis video selesai.";
};
