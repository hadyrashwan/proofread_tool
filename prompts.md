# 2024-11-29 23:26:42.108425
+Here’s a refined version of your prompt:
+
+---
+
+Create a Chrome extension using Manifest V3 that adds a context menu option titled **"Fix using Proofread AI"**. When a user selects text and clicks this option, the selected text is sent to the Gemini API for processing. 
+
+The extension should include:
+- A variable for the API key to be inserted.
+- The API request should use the `gemini-1.5-flash-8b` model as specified in [Gemini API Quickstart](https://ai.google.dev/gemini-api/docs/quickstart?lang=rest).
+- The response should extract the proofread text from the API's `candidates[0].content.parts[0].text` field.
+
+Icons for the extension are already included in the `public` folder. 
+
+Below is an example response from the API for reference:
+```json
+{
+  "candidates": [
+    {
+      "content": {
+        "parts": [
+          {
+            "text": "Hi Hady, How can I help you?"
+          }
+        ],
+        "role": "model"
+      },
+      "finishReason": "STOP",
+      "index": 0
+    }
+  ]
+}
+```
+
+--- 
+
+This version is clearer and better structured for someone to implement the request.

# 2024-11-29 23:33:55.897691
+the text being sent shouldnt be just the selected text do some promot engineering
