'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Simple, robust Markdown Formatter for prompt previews
function MarkdownPreview({ content }) {
  if (!content) return null;

  // Split content into code blocks and normal text blocks
  const parts = [];
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;

  while ((match = codeBlockRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        value: content.slice(lastIndex, match.index),
      });
    }
    parts.push({
      type: 'code',
      language: match[1] || 'text',
      value: match[2],
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push({
      type: 'text',
      value: content.slice(lastIndex),
    });
  }

  // Helper to format inline markdown (bold, italic, inline code)
  const renderInline = (str) => {
    // Escape or split by inline code
    const segments = str.split(/(`[^`]+`)/g);
    return segments.map((seg, i) => {
      if (seg.startsWith('`') && seg.endsWith('`')) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 rounded text-xs font-mono bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/50"
          >
            {seg.slice(1, -1)}
          </code>
        );
      }

      // Handle bold **text**
      const boldSegments = seg.split(/(\*\*[^*]+\*\*)/g);
      return boldSegments.map((bSeg, j) => {
        if (bSeg.startsWith('**') && bSeg.endsWith('**')) {
          return (
            <strong key={`${i}-${j}`} className="font-semibold text-foreground">
              {bSeg.slice(2, -2)}
            </strong>
          );
        }

        // Handle italic *text*
        const italicSegments = bSeg.split(/(\*[^*]+\*)/g);
        return italicSegments.map((itSeg, k) => {
          if (itSeg.startsWith('*') && itSeg.endsWith('*')) {
            return (
              <em key={`${i}-${j}-${k}`} className="italic">
                {itSeg.slice(1, -1)}
              </em>
            );
          }
          return itSeg;
        });
      });
    });
  };

  return (
    <div className="space-y-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
      {parts.map((part, pIdx) => {
        if (part.type === 'code') {
          return (
            <div
              key={pIdx}
              className="my-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-950 text-gray-100"
            >
              <div className="flex items-center justify-between px-3 py-1.5 bg-gray-900 border-b border-gray-800 text-xs font-mono text-gray-400">
                <span>{part.language || 'code'}</span>
              </div>
              <pre className="p-3 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">
                <code>{part.value.trim()}</code>
              </pre>
            </div>
          );
        }

        // Split text block into lines
        const lines = part.value.split('\n');
        return (
          <div key={pIdx} className="space-y-2">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lIdx} className="h-1.5" />;

              // Heading 1
              if (trimmed.startsWith('# ')) {
                return (
                  <h1
                    key={lIdx}
                    className="text-lg sm:text-xl font-bold text-foreground pt-2 pb-1 border-b border-gray-200 dark:border-gray-800"
                  >
                    {trimmed.slice(2)}
                  </h1>
                );
              }

              // Heading 2
              if (trimmed.startsWith('## ')) {
                return (
                  <h2
                    key={lIdx}
                    className="text-base sm:text-lg font-semibold text-foreground pt-2 pb-0.5"
                  >
                    {trimmed.slice(3)}
                  </h2>
                );
              }

              // Heading 4
              if (trimmed.startsWith('#### ')) {
                return (
                  <h4
                    key={lIdx}
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 pt-2"
                  >
                    {trimmed.slice(5)}
                  </h4>
                );
              }

              // Heading 3
              if (trimmed.startsWith('### ')) {
                return (
                  <h3
                    key={lIdx}
                    className="text-sm sm:text-base font-semibold text-foreground pt-1.5"
                  >
                    {trimmed.slice(4)}
                  </h3>
                );
              }

              // Horizontal rule
              if (trimmed === '---' || trimmed === '***') {
                return (
                  <hr
                    key={lIdx}
                    className="my-3 border-t border-gray-200 dark:border-gray-800"
                  />
                );
              }

              // Blockquote
              if (trimmed.startsWith('> ')) {
                return (
                  <blockquote
                    key={lIdx}
                    className="pl-3 py-1 border-l-2 border-blue-500 text-gray-600 dark:text-gray-400 italic bg-blue-50/30 dark:bg-blue-950/20 rounded-r"
                  >
                    {renderInline(trimmed.slice(2))}
                  </blockquote>
                );
              }

              // Bullet list
              if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 pl-2">
                    <span className="text-blue-500 font-bold leading-5">•</span>
                    <span className="flex-1">{renderInline(trimmed.slice(2))}</span>
                  </div>
                );
              }

              // Numbered list
              const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
              if (numMatch) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 pl-2">
                    <span className="font-semibold text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                      {numMatch[1]}.
                    </span>
                    <span className="flex-1">{renderInline(numMatch[2])}</span>
                  </div>
                );
              }

              // Normal paragraph
              return (
                <p key={lIdx} className="leading-relaxed">
                  {renderInline(line)}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function StartupWeekPresentationsClient({ presentations }) {
  // Modal state
  const [activeModalPresentation, setActiveModalPresentation] = useState(null);
  // Independent open state for each dropdown inside the modal (empty by default = all collapsed)
  const [openPromptIds, setOpenPromptIds] = useState({});
  // Track copied prompt IDs
  const [copiedPromptId, setCopiedPromptId] = useState(null);

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalPresentation(null);
      }
    };

    if (activeModalPresentation) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalPresentation]);

  const handleOpenModal = (presentation) => {
    setActiveModalPresentation(presentation);
    // Keep both/all prompts closed by default upon opening
    setOpenPromptIds({});
  };

  const handleCloseModal = () => {
    setActiveModalPresentation(null);
    setCopiedPromptId(null);
  };

  // Toggle individual prompt dropdown (supports both being open in parallel)
  const togglePromptDropdown = (promptId) => {
    setOpenPromptIds((prev) => ({
      ...prev,
      [promptId]: !prev[promptId],
    }));
  };

  // Copy prompt text to clipboard
  const handleCopyPrompt = async (promptId, content) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedPromptId(promptId);
      setTimeout(() => {
        setCopiedPromptId(null);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy prompt to clipboard', err);
    }
  };

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 xl:px-12 w-full">
      <div className="w-full max-w-[1800px] mx-auto pt-8">
        {/* Page Header */}
        <header className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-4 transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Startup Week Presentations
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Slide decks and companion AI prompts from my talks at Startup Week.
            </p>
          </div>

          {/* Subtle Book a 1:1 Call Button on the right */}
          <div className="shrink-0 sm:pb-1">
            <a
              href="https://calendar.app.google/ksaLptXuFSWht8tU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book a Free 1:1 Audit Call
            </a>
          </div>
        </header>

        {/* Both Containers Side-by-Side in One Row Taking Full Available Space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">
          {presentations.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-24 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/60 p-6 sm:p-8 shadow-sm transition-all hover:shadow-md flex flex-col justify-between h-full"
            >
              {/* Top Section: Title & Header */}
              <div>
                {/* Short form badge before the title (matching blue theme) */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    {item.shortTitle}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {item.session}
                  </span>
                </div>

                {/* Full Title of the Presentation */}
                <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-6">
                  {item.fullTitle}
                </h2>

                {/* Slide Cover Preview Container (16:9 Aspect Ratio) */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 flex flex-col items-center justify-center p-6 text-center">
                  {item.slideImage ? (
                    <Image
                      src={item.slideImage}
                      alt={`${item.fullTitle} - First Slide`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center max-w-sm">
                      {/* Slide Placeholder Graphic */}
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 border border-blue-100 dark:border-blue-900">
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.75}
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                          />
                        </svg>
                      </div>
                      <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-gray-200/70 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full mb-2">
                        Cover Slide Preview
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
                        {item.shortTitle}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        First page of the presentation slide deck will appear here
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex flex-wrap items-center gap-3">
                {/* 1. Presentation Button */}
                <a
                  href={item.presentationUrl}
                  target={item.presentationUrl.startsWith('http') ? '_blank' : undefined}
                  rel={item.presentationUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Presentation
                </a>

                {/* 2. AI Prompts Button (Only shown if presentation has prompts) */}
                {item.prompts && item.prompts.length > 0 && (
                  <button
                    type="button"
                    onClick={() => handleOpenModal(item)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-blue-200 dark:border-blue-800/80 bg-blue-50/60 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-4 h-4 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    AI Prompts
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CENTERED MODAL */}
      {activeModalPresentation && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex items-start justify-between gap-4 bg-gray-50/50 dark:bg-gray-900/50">
              <div className="pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                    <svg
                      className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    AI Prompts
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {activeModalPresentation.shortTitle}
                  </span>
                </div>
                {/* Full presentation title in the modal header */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                  {activeModalPresentation.fullTitle}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="shrink-0 p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Body: Dropdown Accordions (all collapsed by default) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {activeModalPresentation.prompts && activeModalPresentation.prompts.length > 0 ? (
                activeModalPresentation.prompts.map((prompt, pIdx) => {
                  const isOpen = !!openPromptIds[prompt.id];
                  const isCopied = copiedPromptId === prompt.id;

                  return (
                    <div
                      key={prompt.id}
                      className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30 overflow-hidden transition-all"
                    >
                      {/* Dropdown Header Trigger */}
                      <button
                        type="button"
                        onClick={() => togglePromptDropdown(prompt.id)}
                        className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold">
                            {pIdx + 1}
                          </span>
                          <span className="font-semibold text-base text-foreground">
                            {prompt.title}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>

                      {/* Dropdown Expanded Body */}
                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 border-t border-gray-200/70 dark:border-gray-800">
                          {/* Top Action Bar with Copy Button */}
                          <div className="flex items-center justify-between gap-2 py-2 mb-3 border-b border-gray-200/60 dark:border-gray-800/60">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              Formatted Markdown Preview
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopyPrompt(prompt.id, prompt.content)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm cursor-pointer ${
                                isCopied
                                  ? 'bg-green-600 text-white'
                                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2.5}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  Copied!
                                </>
                              ) : (
                                <>
                                  <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                  </svg>
                                  Copy Prompt
                                </>
                              )}
                            </button>
                          </div>

                          {/* Markdown Preview Content */}
                          <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 max-h-[50vh] overflow-y-auto">
                            <MarkdownPreview content={prompt.content} />
                          </div>

                          {/* Bottom Copy Button */}
                          <div className="mt-3 flex justify-end">
                            <button
                              type="button"
                              onClick={() => handleCopyPrompt(prompt.id, prompt.content)}
                              className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                            >
                              {isCopied ? '✓ Copied to clipboard' : 'Copy prompt to clipboard'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <p>Prompts for this presentation are coming soon!</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Click any prompt dropdown to expand or collapse.</span>
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
