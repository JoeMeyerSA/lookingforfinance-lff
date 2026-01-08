# agents.md — LFF Truth Sources and Build Rules (v1.1)

## 0. Navigation contract — Five gates only (non-negotiable)

The website is organised only by these five gates: Individual, Business, Farmer, Developer, Solar / Backup Power.

Users must enter through one gate and remain inside it; do not present any alternative slicing (no cross-gate “solutions catalogue”, “browse all solutions”, or industry-based menus).

Any choices shown after entering a gate exist only to route the user to the correct dedicated Pocket Business eligibility form (or are captured as intent inside that form).

## 0.1 Eligibility flow contract — dedicated PB forms + form-specific outcome message (non-negotiable)

After selecting a gate and then a need within that gate, the only next step is the Check eligibility CTA.

Clicking Check eligibility opens one dedicated Pocket Business enquiry form in the Action panel (right) with guidance on the left. The form is 1:1 mapped to that specific gate + need.

Website forms collect only minimum viable identity + consent + routing + selection-specific qualifiers; do not ask early underwriting inputs (e.g., income bands, time-in-role/time trading) and do not request document uploads.

Any legal entity selector appears only inside the relevant Business / Farmer / Solar forms (packaging-only), never for Individuals and never as a solutions-level concept.

On submit, the payload is sent to Pocket Business to trigger follow-up automations. The post-submit screen is a confirmation/outcome message defined per PB form (not a generic site-wide message) and must avoid “approval” language.

## 1. Purpose

This file defines the single set of truth sources for the LFF eligibility pre-check experience, and the rules builders (humans or AI) must follow to avoid drift.

## 2. Canonical truth-source file set (simple names)

Use only these files as the active specification set:

pb-01.md (Experience & design principles)

sol-01.md (Solutions offered & scope)

ux0.md (Global rules + microcopy rules)

ux1.md (Individuals pathway spec)

ux2.md (Farmers pathway spec)

ux3.md (Businesses pathway spec)

ux4.md (Developers pathway spec)

ux5.md (Solar / Backup power pathway spec)

data-01.md (Form data dictionary + keys + enums + payload dictionaries)

## 3. Precedence rules (what overrides what)

If two files conflict, resolve it in this order:

sol-01 (solutions offered + scope boundaries) is the top authority.

ux0 (global interaction rules + microcopy rules) overrides pathway details where it defines global behaviour.

ux1–ux5 define pathway-specific screens, options, and form steps.

data-01 is the source of truth for field keys, enums, option keys, and payload dictionaries.

pb-01 governs layout intent, experience constraints, and design principles across everything.

## 4. Global non-negotiables

Two-panel shell

Right panel = selections + form steps.

Left panel = guidance/context; it updates dynamically based on right-panel state.

One pathway at a time

User chooses exactly one pathway (Individual / Business / Farmer / Developer / Solar & Backup Power).

Pre-check is guidance-first

Do not request full document packs in the pre-check flow.

Provide educational guidance; move to documents only once the route is clear and worth pursuing.

No implied certainty

Use “pre-check completed / assessed” language.

Final outcomes depend on assessment and funder decision.

Terminology

Use “Residential property” in solution naming (taxonomy).

“Home” wording is allowed only where it reflects user intent on selection cards (buy/refinance intent), not taxonomy.

Microcopy reuse

Fees/process microcopy must be copied verbatim from ux0 (do not rewrite per pathway).

## 5. Pathway option sets (Right Panel) — locked summary

### 5.1. ux3 — Businesses (locked)

Business pathway includes Residential property finance (via business/trust) as a selectable option.

Business eligibility check includes an entity type selector:

Pty Ltd

Trust

Close corporation (CC)

### 5.2. ux4 — Developers (locked)

Selectable options (Right Panel):

Property Development

Ask on the form: development vs vacant land only

Industrial Property

Ask on the form: owner-occupied vs rental-occupied

Commercial Property

Ask on the form: owner-occupied vs rental-occupied

Refurbishments & Conversions

Bridging finance

Include a free-text field for scenario details

### 5.3. ux5 — Solar / Backup Power (locked)

Solar is its own pathway. - Do not surface Solar under Developer or Farmer. - Keep Solar/Backup Power logic inside ux5 only.

## 6. Data and routing rules

Keys and enums

Use data-01 keys exactly. Do not invent keys or rename existing keys.

Option routing

Routing must map to data-01 option keys and the correct payload dictionary for that option.

Form structure

Capture only what is required to assess fit and route.

Prefer short, progressive steps over long forms.

Entity context (Business/Farmer forms only)

Entity selection exists only to package the submission correctly.

It must not be treated as a “solution choice” or marketing concept.

## 7. Repo hygiene rules

Upload only the 9 MD files listed in Section 2.

Keep filenames stable (pb-01, sol-01, ux0–ux5, data-01).

When updating content, bump the version inside the file (do not rename files).

End of agents.md

## Hard exclusions (scope boundary)

Never offered: Personal loans, unsecured consumer credit, payday/cash loans.
