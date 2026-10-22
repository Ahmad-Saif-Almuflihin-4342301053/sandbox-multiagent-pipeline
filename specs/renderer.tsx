import React from "react";
import type { RenderInput } from "@mokly/mokly";
import { renderToStaticMarkup } from "react-dom/server";

export default function render(input: RenderInput): string {
  return (
    "<!doctype html>" +
    renderToStaticMarkup(
      <html lang="id">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{input.entry.title}</title>
          {input.stylesheets.map((href) => (
            <link key={href} rel="stylesheet" href={href} />
          ))}
          <style>{`
            :root, [data-theme="light"], body[data-theme="light"] {
              --waskita-bg: #F7F4EB;
              --waskita-card: #E9DFCA;
              --waskita-audit-bg: #D4E5F2;
              --waskita-accent-subtle: #C0D5E5;
              --waskita-accent-primary: #C0CEE8;
              --waskita-text: #1E293B;
              --waskita-surface-white: #FFFFFF;
              --waskita-logo-fill: #10B981;
            }
            [data-theme="dark"], body[data-theme="dark"] {
              --waskita-bg: #0F172A;
              --waskita-card: #1E293B;
              --waskita-audit-bg: #1E293B;
              --waskita-accent-subtle: #334155;
              --waskita-accent-primary: #0284C7;
              --waskita-text: #F8FAFC;
              --waskita-surface-white: #1E293B;
              --waskita-logo-fill: #34D399;
            }
            *, *::before, *::after {
              box-sizing: border-box;
            }
            html, body {
              margin: 0;
              padding: 0;
              background-color: var(--waskita-bg);
              color: var(--waskita-text);
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }
          `}</style>
        </head>
        <body data-theme={input.colorScheme} data-mokly-viewport={input.viewport}>
          {input.node}
        </body>
      </html>
    )
  );
}
