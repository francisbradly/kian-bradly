// Browser detection utility functions
export interface BrowserInfo {
  isInAppBrowser: boolean;
  browserName: string;
  userAgent: string;
  isMobile: boolean;
}

export function detectBrowser(): BrowserInfo {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Common in-app browser patterns
  const inAppBrowserPatterns = [
    // Facebook
    /fbav|fban|fbios|fb_iab|facebook/,
    // Instagram
    /instagram/,
    // TikTok
    /tiktok|musically/,
    // Twitter/X
    /twitter|twitterandroid/,
    // LinkedIn
    /linkedin/,
    // Snapchat
    /snapchat/,
    // WhatsApp
    /whatsapp/,
    // Messenger
    /messenger/,
    // WeChat
    /micromessenger|wechat/,
    // Line
    /line/,
    // Telegram
    /telegram/,
    // Pinterest
    /pinterest/,
    // YouTube (mobile app)
    /youtubetv|youtube/,
    // Generic WebView indicators
    /webview|wv\)|embedded|; fb|fbsv/
  ];

  const isInApp = inAppBrowserPatterns.some(pattern => pattern.test(userAgent));
  
  // Additional checks for common WebView indicators
  const hasNativeApp = /mobile|android|iphone|ipad/i.test(userAgent) && 
                       !/chrome|firefox|safari|opera|edge/i.test(userAgent);

  const finalIsInApp = isInApp || hasNativeApp;
  const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);

  let browserName = "Unknown";
  if (/facebook|fbav|fban|fbios|fb_iab/.test(userAgent)) browserName = "Facebook";
  else if (/instagram/.test(userAgent)) browserName = "Instagram";
  else if (/tiktok|musically/.test(userAgent)) browserName = "TikTok";
  else if (/twitter|twitterandroid/.test(userAgent)) browserName = "Twitter/X";
  else if (/linkedin/.test(userAgent)) browserName = "LinkedIn";
  else if (/snapchat/.test(userAgent)) browserName = "Snapchat";
  else if (/whatsapp/.test(userAgent)) browserName = "WhatsApp";
  else if (/messenger/.test(userAgent)) browserName = "Messenger";
  else if (/micromessenger|wechat/.test(userAgent)) browserName = "WeChat";
  else if (/line/.test(userAgent)) browserName = "Line";
  else if (/telegram/.test(userAgent)) browserName = "Telegram";
  else if (/pinterest/.test(userAgent)) browserName = "Pinterest";
  else if (/youtubetv|youtube/.test(userAgent)) browserName = "YouTube";
  else if (finalIsInApp) browserName = "In-App Browser";
  else if (/chrome/i.test(userAgent)) browserName = "Chrome";
  else if (/safari/i.test(userAgent)) browserName = "Safari";
  else if (/firefox/i.test(userAgent)) browserName = "Firefox";
  else if (/edge/i.test(userAgent)) browserName = "Edge";

  return {
    isInAppBrowser: finalIsInApp,
    browserName,
    userAgent,
    isMobile
  };
}

export function openInSystemBrowser(url: string = window.location.href): void {
  // For iOS devices
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) {
    // Try Chrome first, then Safari
    window.location.href = `googlechrome://${url.replace(/^https?:\/\//, '')}`;
    setTimeout(() => {
      window.location.href = `safari://${url.replace(/^https?:\/\//, '')}`;
    }, 500);
  } 
  // For Android devices
  else if (/android/i.test(navigator.userAgent)) {
    // Try Chrome intent
    window.location.href = `intent://${url.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
  // Fallback for other platforms
  else {
    window.open(url, '_blank');
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback for older browsers
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    } catch (err) {
      return false;
    }
  }
}