"use client";

import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CodeSnippet } from "@/data/projects";

export default function CodeBlock({ snippets }: { snippets: CodeSnippet[] }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  const current = snippets[active];

  function copy() {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-text-primary mb-5">Code</h2>

      {/* Tabs — only shown when there are multiple snippets */}
      {snippets.length > 1 && (
        <div className="flex flex-wrap gap-1 mb-0 border-b border-bg-border">
          {snippets.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-t ${
                active === i
                  ? "text-accent-cyan border-b-2 border-accent-cyan bg-accent-cyan/5"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Code block */}
      <div className="rounded-xl border border-bg-border overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-bg-card border-b border-bg-border">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
              {current.language}
            </span>
            {snippets.length === 1 && (
              <span className="text-xs text-text-secondary">{current.label}</span>
            )}
          </div>
          <button
            onClick={copy}
            className="font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors px-2 py-1 rounded"
          >
            {copied ? "copied" : "copy"}
          </button>
        </div>

        <SyntaxHighlighter
          language={current.language}
          style={atomOneDark}
          customStyle={{
            margin: 0,
            padding: "1.25rem 1.5rem",
            background: "#0d1117",
            fontSize: "0.8125rem",
            lineHeight: "1.7",
          }}
          showLineNumbers
          lineNumberStyle={{
            color: "#3d4a57",
            paddingRight: "1.5rem",
            userSelect: "none",
            minWidth: "2.5rem",
          }}
        >
          {current.code}
        </SyntaxHighlighter>
      </div>
    </section>
  );
}
