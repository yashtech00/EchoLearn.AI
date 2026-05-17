"use client";

import { Fragment, type ReactNode } from "react";

type Block =
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts
    .filter((part) => part.length > 0)
    .map((part, i) => {
      const bold = part.match(/^\*\*(.+)\*\*$/);
      if (bold) {
        return (
          <strong key={i} className="font-bold text-[#2e3230]">
            {bold[1]}
          </strong>
        );
      }
      return <Fragment key={i}>{part}</Fragment>;
    });
}

function parseListItem(text: string): { title: string | null; body: string } {
  const match = text.match(/^\*\*([^*]+)\*\*:?\s*(.*)$/s);
  if (match) {
    return { title: match[1].trim(), body: match[2].trim() };
  }
  return { title: null, body: text };
}

/** Split a paragraph that embeds "1. ... 2. ..." style numbered points. */
function expandEmbeddedNumberedList(text: string): Block[] {
  if (!/\d+\.\s+/.test(text)) {
    return [{ type: "paragraph", text }];
  }

  const segments = text.split(/(?=\d+\.\s+)/).map((s) => s.trim()).filter(Boolean);
  if (segments.length <= 1) {
    return [{ type: "paragraph", text }];
  }

  const blocks: Block[] = [];
  const listItems: string[] = [];

  for (const seg of segments) {
    const numbered = seg.match(/^\d+\.\s+([\s\S]*)$/);
    if (numbered) {
      listItems.push(numbered[1].trim());
    } else {
      if (listItems.length) {
        blocks.push({ type: "list", ordered: true, items: [...listItems] });
        listItems.length = 0;
      }
      blocks.push({ type: "paragraph", text: seg });
    }
  }

  if (listItems.length) {
    blocks.push({ type: "list", ordered: true, items: listItems });
  }

  return blocks;
}

function parseFeedback(raw: string): Block[] {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let listItems: string[] = [];
  let listOrdered = false;
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraphLines.length) return;
    const text = paragraphLines.join(" ").trim();
    paragraphLines = [];
    if (!text) return;
    blocks.push(...expandEmbeddedNumberedList(text));
  };

  const flushList = () => {
    if (!listItems.length) return;
    blocks.push({ type: "list", ordered: listOrdered, items: [...listItems] });
    listItems = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      blocks.push({
        type: "heading",
        level: headingMatch[1].length,
        text: headingMatch[2],
      });
      continue;
    }

    const bulletMatch = trimmed.match(/^[-*•]\s+(.+)$/);
    if (bulletMatch) {
      flushParagraph();
      if (listItems.length && listOrdered) flushList();
      listOrdered = false;
      listItems.push(bulletMatch[1]);
      continue;
    }

    const numberedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (numberedMatch) {
      flushParagraph();
      if (listItems.length && !listOrdered) flushList();
      listOrdered = true;
      listItems.push(numberedMatch[1]);
      continue;
    }

    flushList();
    paragraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function ListItemContent({
  text,
  index,
  ordered,
}: {
  text: string;
  index: number;
  ordered: boolean;
}) {
  const { title, body } = parseListItem(text);
  const content = body || text;

  return (
    <li className="flex gap-3 sm:gap-4">
      <span
        className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#4a7c59]/15 text-[11px] font-bold text-[#4a7c59]"
        aria-hidden
      >
        {ordered ? index + 1 : "•"}
      </span>
      <div className="min-w-0 flex-1 rounded-[10px] border border-[#4a7c59]/10 bg-[#faf6f0]/90 px-3 py-2.5 sm:px-4 sm:py-3">
        {title ? (
          <>
            <p
              className="text-sm font-bold text-[#2e3230] sm:text-[15px]"
              style={{ fontFamily: "'Literata', serif" }}
            >
              {title}
            </p>
            {content ? (
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#2e3230]/75">
                {renderInline(content)}
              </p>
            ) : null}
          </>
        ) : (
          <p className="text-xs sm:text-sm leading-relaxed text-[#2e3230]/80">
            {renderInline(content)}
          </p>
        )}
      </div>
    </li>
  );
}

export function FormattedAiFeedback({
  content,
  className = "",
}: {
  content?: string | null;
  className?: string;
}) {
  if (!content?.trim()) {
    return (
      <p className="text-sm text-[#2e3230]/50 italic">
        No feedback available for this session.
      </p>
    );
  }

  const blocks = parseFeedback(content);

  if (blocks.length === 0) {
    return (
      <p className={`text-sm leading-relaxed text-[#2e3230]/80 ${className}`}>
        {renderInline(content)}
      </p>
    );
  }

  return (
    <div className={`space-y-4 sm:space-y-5 ${className}`}>
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = block.level <= 1 ? "h4" : block.level === 2 ? "h5" : "h6";
          return (
            <Tag
              key={i}
              className="text-base sm:text-lg font-bold text-[#2e3230] tracking-tight"
              style={{ fontFamily: "'Literata', serif" }}
            >
              {renderInline(block.text)}
            </Tag>
          );
        }

        if (block.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-sm sm:text-[15px] leading-relaxed text-[#2e3230]/80 font-medium"
            >
              {renderInline(block.text)}
            </p>
          );
        }

        return (
          <ul
            key={i}
            className="space-y-2.5 sm:space-y-3 list-none m-0 p-0"
            {...(block.ordered ? { role: "list" } : {})}
          >
            {block.items.map((item, j) => (
              <ListItemContent
                key={j}
                text={item}
                index={j}
                ordered={block.ordered}
              />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
