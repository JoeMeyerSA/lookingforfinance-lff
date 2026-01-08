# ux4 — Developers Pathway Specification (LFF) v1.3 (Locked)

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

## Document control

File ID + Title: UX4 — Developers Pathway Specification (LFF)

Version: v1.3

Status: Locked

Applies to: LookingForFinance.co.za — Developer pathway selector experience + dedicated eligibility check forms (DEV‑A to DEV‑E)

Owner: LookingForFinance (LFF)

Last updated: 2026-01-07

Precedence note: If this conflicts with UX0, UX0 wins. If a solution scope question arises, SOL‑01 wins.

## Change log

v1.3 (Locked): Copy-only change — replaced “checks” wording with “bureau checks”.

v1.0 (baseline): Initial Developers pathway.

v1.1 (Locked): Replaced Developer options with the final five-option set: Property Development, Industrial Property, Commercial Property, Refurbishments & Conversions, and Bridging finance. Added the required form questions per option (scope/occupancy/free-text details). Removed any Solar references from UX4.

## v1.2 (Locked): Confirmed Developer option set and form sub-questions exactly as specified (development vs vacant land; occupancy type for commercial/industrial; free-text bridging details).

## Conformance stamp (universal)

This UX specification conforms to:

UX0 — Selector‑to‑Enquiry Interaction Pathway (active version as defined in agents.md)

SOL‑01 — Solutions Offered & Scope (active version as defined in agents.md)

PX‑01 — Experience & Design Principles (active version as defined in agents.md)

DATA‑01 — Form Data Dictionary (active version as defined in agents.md)

…and must apply the universal rules throughout, including:

Guidance module trigger rules: guidance may change only on pathway change, option change, form open, field focus, or submit validation errors (no timed rotation).

Validation priority: after a submit attempt with errors, guidance focuses on the first invalid field until corrected or focus changes.

Guidance format (locked): the same four blocks everywhere:

You’re doing

Why we ask

What to enter

What happens next

Perspective nugget rule: one short “nugget” line may rotate only on pathway change, option change, form open, or page reload.

Copy governance: calm, truthful, finance‑safe; no implied certainty; no “approved/guaranteed/best rate”; do not describe any step as a “pre‑check”.

UI labels: use “Eligibility check” terminology in buttons and headings.

Fees + protection microcopy: when shown in guidance, use the canonical copy stored in UX0 (do not rewrite in UX4).

Submission CTA (locked): “Continue with eligibility”.

# 1. Scope and intent

## 1.1 What this document defines

This document defines the Developers pathway behaviour and the dedicated enquiry forms that start a structured lender‑match request, submitted via “Continue with eligibility” for consultant follow‑up.

## 1.2 Hard boundary

Developer pathway is business‑only. It is intended for a registered business / development entity.

If the user is applying as a private individual (not a business), they must use the Individual pathway.

Solar / Backup Power remains a standalone pathway and must not appear inside this journey.

## 1.3 Always‑true reassurance (must appear on this journey)

No bureau checks are performed at this stage.

All outcomes are subject to assessment, affordability checks, and the final decision by the relevant funder.

# 2. Page structure and responsive behaviour

## 2.1 Desktop layout (two‑module view)

Guidance module (left): calm orientation + dynamic guidance.

Action module (right): developer options (single‑select) + dynamic Primary CTA, or the dedicated form once opened.

## 2.2 Mobile layout (stacked)

Options first.

Guidance module immediately below options (or collapsible), so it stays accessible without long scroll.

“Start over” returns the user to the neutral top view.

# 3. State model (what changes when)

## 3.1 State A — Developer selected, no option selected

Action module: options list visible.

Primary CTA: disabled.

Primary CTA label (disabled): “Select an option to check eligibility”.

Guidance module: Developers orientation guidance.

## 3.2 State B — A specific Developer option selected

Action module: selected option highlighted.

Primary CTA: enabled.

Primary CTA label (enabled): “Check eligibility for {Selected option}” (updates immediately when selection changes).

Guidance module: dynamic option guidance updates to match the selected option.

Includes fees expectations placeholder (pulled verbatim from UX0).

Includes the optional protection note placeholder (pulled verbatim from UX0).

## 3.3 State C — Dedicated eligibility check form open

Action module: the relevant dedicated form is open.

Selector‑stage Primary CTA is replaced by the form.

Guidance module: switches to form‑level guidance.

Shows the form‑open banner.

On field focus, shows micro‑guides.

On submit errors, prioritises the first invalid field.

# 4. Developer finance options (selector stage)

## 4.1 Options catalogue (locked labels)

Developer finance options must be inside the Selectable options (Right Panel):

Property Development

Industrial Property

Commercial Property

Refurbishments & Conversions

Bridging finance

Important: There is no Solar option under the Developer pathway. Solar / Backup Power is handled only under UX5.

## 4.2 Routing map (selector → form)

Property Development → Form DEV‑A

Industrial Property → Form DEV‑B

Commercial Property → Form DEV‑C

Refurbishments & Conversions → Form DEV‑D

Bridging finance → Form DEV‑E

## 4.3 Return navigation

“← Back to Developer options” closes the form and returns to the selector.

The previous selection remains highlighted until changed.

If a user has entered data and clicks back, show a confirmation modal:

Title: “Leave this form?”

Body: “Your entered details will be lost.”

Actions: “Stay” (default) and “Leave”.

# 5. Call‑to‑action behaviour

## 5.1 Primary CTA (button)

Button label (default): “Check eligibility”.

Disabled state rule: disabled until an option is selected.

Disabled label: “Select an option to check eligibility”.

On click: open the dedicated DEV form for the selected option (State C → State D).

## 5.2 Success state (submission)

Show a confirmation screen that re-states PV‑01.

Confirm what was received.

State what happens next (human follow‑up).

Do not imply approval; keep language “assessment” and “final decision”.

# 6. Left guidance module (verbatim blocks)

## 6.1 State A — Developer selected, no option selected

Orientation (short):

“Select the developer finance option that best matches your need. We’ll ask a few guided questions, then route you to the most suitable funding path.”

Truth line (must include):

“This is a suitability/eligibility check — outcomes depend on assessment and the final decision by the relevant funder.”

Fees microcopy (reference):

Use UX0 → 7.10.4 → UX4 — Developers (copy/paste verbatim).

## 6.2 State B — Option selected (use the block for the selected option)

### 6.2.1 Property Development

What this covers: Funding aligned to a development project or vacant land held for development.

What we’ll ask (on the form): whether this is Development or Vacant land only.

What improves outcomes: clear costs, stage, timeframe, and security position.

Fees microcopy: Use UX0 → 7.10.4 → UX4 → Property Development (verbatim).

### 6.2.2 Industrial Property

What this covers: Industrial property funding (purchase/refinance) for owner-occupied or rental-occupied assets.

What we’ll ask (on the form): whether it is Owner-occupied or Rental-occupied.

What improves outcomes: property value/price, deposit, and occupancy clarity.

Fees microcopy: Use UX0 → 7.10.4 → UX4 → Industrial Property (verbatim).

### 6.2.3 Commercial Property

What this covers: Commercial property funding (purchase/refinance) for owner-occupied or rental-occupied assets.

What we’ll ask (on the form): whether it is Owner-occupied or Rental-occupied.

What improves outcomes: property value/price, deposit, and tenancy clarity (if rental).

Fees microcopy: Use UX0 → 7.10.4 → UX4 → Commercial Property (verbatim).

### 6.2.4 Refurbishments & Conversions

What this covers: Refurbishment, conversion, or improvement funding where the scope is project-specific.

What we’ll ask (on the form): a short description of the scope and intended outcome.

What improves outcomes: clear scope, costs, and timeframe.

Fees microcopy: Use UX0 → 7.10.4 → UX4 → Refurbishments & Conversions (verbatim).

### 6.2.5 Bridging finance

What this covers: Bridging funding needs where timing and repayment events matter (case-dependent).

What we’ll ask (on the form): free‑text details describing the bridging scenario.

What improves outcomes: a clear repayment event and timeframe.

Fees microcopy: Use UX0 → 7.10.4 → UX4 → Bridging finance (verbatim).

# 7. Developer enquiry forms — shared structure (all DEV forms)

## 7.1 Form catalogue (names)

DEV‑A: Developer Enquiry — Property Development

DEV‑B: Developer Enquiry — Industrial Property

DEV‑C: Developer Enquiry — Commercial Property

DEV‑D: Developer Enquiry — Refurbishments & Conversions

DEV‑E: Developer Enquiry — Bridging finance

## 7.2 Shared form sections (all DEV forms)

Section A — Your details (required)

Section B — Preferred communication (required)

Section C — Developer entity details (required)

Section D — Eligibility details (required; varies by DEV form)

Section E — Anything else (optional)

Section F — Compliance (required)

## 7.3 Shared fields (all DEV forms)

### 7.3.1 Section A — Your details (required)

First name (text)

Last name (text)

Mobile number (text)

Email address (text)

### 7.3.2 Section B — Preferred communication (required)

Preferred channel (radio)

WhatsApp

Phone call

Email

### 7.3.3 Section C — Developer entity details (required)

Your role (radio; required)

Owner / Director

Financial manager

Admin / assistant

Other

Registered entity name (text; required)

Registration number (text; required)

Trading name (text; optional)

Province (select; required)

Website (text; optional)

### 7.3.4 Section E — Anything else (optional)

Additional context (textarea)

### 7.3.5 Section F — Compliance (required)

Consent to be contacted (checkbox; required)

POPIA notice (display; required)

## 7.4 Submit behaviour (all DEV forms)

Primary submit label (locked): “Continue with eligibility”.

On submit, create the lead and attach:

Pathway = Developer

Option key (from DATA‑01)

eligibility_payload (DEV‑A to DEV‑E)

# 8. Form DEV‑A — Property Development (eligibility details)

## 8.1 Required questions

Is this Development or Vacant land only? (radio; required)

Development

Vacant land only

Project location (text; required)

Project stage (select; required)

Planning / feasibility

Land acquired

Early works

Construction underway

Near completion

Other / not sure

Estimated total project cost (currency; required)

Funding required (currency; required)

Timeframe (select; required)

ASAP (0–30 days)

1–3 months

3–6 months

6+ months

Not sure

## 8.2 Optional questions

Project name (text; optional)

Any presales / prelets? (select; optional)

Yes

No

Not sure

Expected end value (GDV) (currency; optional)

# 9. Form DEV‑B — Industrial Property (eligibility details)

## 9.1 Required questions

Occupancy status (radio; required)

Owner-occupied

Rental-occupied

Property location (text; required)

Estimated purchase price / value (currency; required)

Deposit available (currency; optional)

Funding required (currency; optional)

Timeframe (select; required)

ASAP (0–30 days)

1–3 months

3–6 months

6+ months

Not sure

## 9.2 Optional questions

If rental-occupied: brief tenancy detail (text; optional)

# 10. Form DEV‑C — Commercial Property (eligibility details)

## 10.1 Required questions

Occupancy status (radio; required)

Owner-occupied

Rental-occupied

Property location (text; required)

Estimated purchase price / value (currency; required)

Deposit available (currency; optional)

Funding required (currency; optional)

Timeframe (select; required)

ASAP (0–30 days)

1–3 months

3–6 months

6+ months

Not sure

## 10.2 Optional questions

If rental-occupied: brief tenancy detail (text; optional)

# 11. Form DEV‑D — Refurbishments & Conversions (eligibility details)

## 11.1 Required questions

Project location (text; required)

Describe the refurbishment/conversion (textarea; required)

Estimated total project cost (currency; required)

Funding required (currency; required)

Timeframe (select; required)

ASAP (0–30 days)

1–3 months

3–6 months

6+ months

Not sure

# 12. Form DEV‑E — Bridging finance (eligibility details)

## 12.1 Required questions

Describe your bridging scenario (textarea; required)

“Tell us what you’re bridging, what event repays it, and the timing.”

Funding required (currency; required)

Timeframe (select; required)

ASAP (0–30 days)

1–3 months

3–6 months

6+ months

Not sure

## 12.2 Optional questions

Security / asset context (text; optional)
