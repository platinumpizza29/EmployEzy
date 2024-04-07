"use client";

import { Editor } from "@monaco-editor/react";
export function CodeEditor() {
  return (
    <Editor
      height="100vh"
      defaultLanguage="javascript"
      defaultValue="// Type your code here..."
      options={{
        minimap: { enabled: false },
        wordWrap: "on",
        automaticLayout: true,
      }}
    />
  );
}
