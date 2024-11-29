const API_KEY = 'AIzaSyClNDAdLe8HNXncQnwoPnMp-sIiGu5Zwc8'; // Replace with your actual API key

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'proofreadAI',
    title: 'Fix using Proofread AI',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'proofreadAI' && info.selectionText) {
    const selectedText = info.selectionText;
    const prompt = `Please proofread the following text and return the corrected version:\n\n${selectedText}`;
    fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-8b:generateContent?key=' + API_KEY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    })
    .then(response => response.json())
    .then(data => {
      const proofreadText = data.candidates[0].content.parts[0].text;
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (proofreadText) => {
          const range = window.getSelection().getRangeAt(0);
          range.deleteContents();
          range.insertNode(document.createTextNode(proofreadText));
        },
        args: [proofreadText]
      });
    })
    .catch(error => console.error('Error:', error));
  }
});
