# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Orange-Hack-Site** is a D&D house rules documentation website for homebrew content. This is a modern, searchable documentation site for D&D house rules, homebrew content, and campaign materials.

## Technology Stack

- **Framework:** Astro with Starlight theme for documentation
- **Language:** JavaScript/TypeScript (keeping it simple)
- **Styling:** Starlight's built-in theme with custom CSS variables
- **Content:** Markdown files with YAML frontmatter
- **Deployment:** GitHub Pages with GitHub Actions
- **Target URL:** `orangehack.infinitedragons.com` (subdomain)

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Collaboration Guidelines

**Author's Working Style:**
- Strongly prefers discovery and planning before implementation
- Wants to review code before implementation, especially beyond simple markdown
- Prefers small, focused tasks with frequent commits
- Values questions over confused implementation

**Key Constraints:**
- Keep dependencies minimal to avoid environment/package errors
- Prefer configuration over code where possible
- Must deploy easily to GitHub Pages
- Never change the content of pages the author writes, only site code
- FREQUENTLY update CLAUDE.md and README.md as work progresses

## Architecture Notes

- **Minimal Node.js complexity** - author is "more an author than developer"
- **macOS compatibility** required
- **AI assistance friendly** - designed to work well with Claude Code
- **Content-focused** - easy to add new content without touching code
- **Built-in search** via Starlight
- **Clean, readable design** prioritized

## Documentation File Purposes

**This repository contains multiple markdown files with specific purposes:**

- **CLAUDE.md** (this file): Technical guidance for Claude Code instances. Update when tech stack, commands, or collaboration guidelines change.
- **README.md**: Public-facing project description and setup instructions. Update when project description, installation, or usage changes.
- **PROJECT_PLAN.md**: Detailed project roadmap and phase planning. Update when adding phases, completing milestones, or changing project scope.

## Development Best Practices

- Always commit changes after each logical unit of work to maintain a clear, traceable project history