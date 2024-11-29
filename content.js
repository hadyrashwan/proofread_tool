chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'toast') {
    showToast(message.text, message.duration);
  }
});

function showToast(text, duration) {
  const toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  toast.style.color = '#fff';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = 10000;
  toast.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  toast.style.fontFamily = 'Arial, sans-serif';
  toast.style.fontSize = '14px';
  toast.innerText = text;
  document.body.appendChild(toast);

  setTimeout(() => {
    document.body.removeChild(toast);
  }, duration);
}
