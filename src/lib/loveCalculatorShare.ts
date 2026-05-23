export const LOVE_CALCULATOR_URL = "https://www.lovecalculator.space/";

interface LoveCalculatorSharePayload {
  message: string;
  name1: string;
  name2: string;
  rank: string;
  result: number;
}

export const buildLoveCalculatorShareText = ({
  message,
  name1,
  name2,
  rank,
  result,
}: LoveCalculatorSharePayload) => {
  return `${rank}\n\n💕 It's my love bond result!\n${name1} ❤️ ${name2}\nCompatibility: ${result}%\n${message}\n\nCheck your love bond too:\n${LOVE_CALCULATOR_URL}`;
};

export const copyTextSafely = async (text: string) => {
  try {
    if (!navigator.clipboard?.writeText) return false;
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
};

export const canShareFile = (file: File) => {
  try {
    return Boolean(navigator.share && navigator.canShare?.({ files: [file] }));
  } catch {
    return false;
  }
};