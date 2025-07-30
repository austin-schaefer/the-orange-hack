# Orange-Hack-Site Project Plan

## Project Overview

**Orange-Hack-Site** is a D&D house rules documentation website for homebrew content. This is a modern, searchable documentation site for D&D house rules, homebrew content, and campaign materials.

**Target URL:** `orangehack.infinitedragons.com` (subdomain)
**Tech Stack:** Astro with Starlight theme, deployed via GitHub Pages

## Phase 1: Foundation Setup

### 1. Initialize Astro + Starlight Project
- Set up basic Astro project with Starlight theme
- Configure for GitHub Pages deployment
- Establish basic navigation structure

### 2. Content Architecture Design
- Plan URL structure for different content types
- Design navigation hierarchy
- Create template structure for different page types

## Phase 2: Content Structure & Navigation

### 3. Core Content Categories
Based on typical D&D homebrew needs:
- House Rules (combat, magic, social encounters)
- Homebrew Classes/Subclasses
- Homebrew Races/Variants  
- Custom Spells/Items
- Campaign-Specific Content
- Player Resources/Quick Reference

### 4. Search & Discovery Features
- Configure Starlight's built-in search
- Tag/category system for content organization
- Cross-reference system between related rules

## Phase 3: Customization & Polish

### 5. Visual Customization
- Custom CSS variables for D&D-appropriate theming
- Configure Starlight theme options
- Ensure clean, readable typography

### 6. Deployment & Domain Setup
- GitHub Actions for automated deployment
- Custom domain configuration for `orangehack.infinitedragons.com`

## Questions to Resolve

1. **Content Organization:** Do you have existing content that would help us understand the navigation structure? Or should we start with a flexible structure you can grow into?

2. **D&D Edition:** Are you primarily focused on 5e, or do you need to support multiple editions?

3. **Content Types:** Beyond the categories I listed, are there specific types of homebrew content that are particularly important to your campaigns?

4. **Visual Style:** Any preferences for the visual theme? (dark/light mode preference, colors that match your campaign aesthetic, etc.)

## Next Steps

Decide whether to:
- Start with Astro + Starlight setup
- Refine content structure plan first

## Working Principles

- Plan everything upfront before implementation
- Review code before implementation 
- Small, focused tasks with frequent commits
- Keep dependencies minimal
- Never change author's content, only site code
- Update CLAUDE.md and README.md frequently