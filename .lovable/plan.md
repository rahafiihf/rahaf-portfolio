# Update Rahaf's Portfolio Content

## Goal
Refresh the existing bilingual portfolio with Rahaf's current CV information while preserving its dark blue visual identity, typography, navigation, timeline storytelling, cards, and animations.

## Changes
- Update the introduction with the supplied professional summary and retain the typing and entrance effects.
- Replace the Journey timeline with the four supplied 2024–2026 education, training, and study milestones.
- Replace About Me with the supplied current, personal biography.
- Replace percentage-based skills with five scannable skill categories using the existing card, tag, and reveal styling.
- Replace existing linked projects with five informational case-study cards showing category, description, focus, and achievement/event/experience where provided. Remove all project links and “View Project” actions.
- Add bilingual Programs & Training and Achievements sections after Projects, styled consistently with the current storytelling design.
- Update contact details, retain LinkedIn, and add GitHub at `https://github.com/rahafiihf`.
- Extend navigation with Programs and Achievements while keeping all existing sections and smooth anchor behavior.
- Update all English and Arabic copy together, including section labels and metadata.

## Validation
- Confirm the old email and external project URLs are absent.
- Confirm every requested section and supplied item appears in both languages.
- Check desktop and mobile layouts, navigation anchors, scroll reveals, hover effects, and page loading.
- Confirm the final site builds without errors and contains no broken sections.

## Technical Details
- Update the existing data and translation modules rather than introducing a new design system.
- Adapt the existing portfolio component to render categorized skill cards and non-clickable project cards.
- Preserve semantic color tokens and existing animation helpers; add only small responsive styles where needed.
- Keep the site frontend-only because this update requires no stored data or account system.
