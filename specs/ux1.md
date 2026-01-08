# ux1 — Individuals Pathway Specification (LFF) v1.2

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

## Change log

### v1.0 (baseline — repo start)

### v1.1

Removed “Personal loans” from debt-type examples to avoid implying personal lending is offered.

Replaced “bureau checks” wording with “bureau checks” site-wide.

Version numbering reset to v1.0 to align the repository start.

Includes Education Ladder (progressive disclosure) and a build-ready Guidance Content Library.

Includes selector-stage Primary CTA disabled/enabled rules with dynamic label per selection.

Includes form lifecycle rules (submitting, validation priority, network failure, success behaviour).

Includes DATA-01 binding so Base44 forms can be swapped later with Pocket Business forms without changing downstream logic.

## Conformance stamp (universal)

This UX specification conforms to UX0 — Selector-to-Enquiry Interaction Pathway (v1.0) and applies its universal rules throughout, including:

Guidance module trigger rules: guidance may change only on capacity change, option change, form open, field focus, or submit validation errors (no timed rotation).

Validation priority: after a submit attempt with errors, guidance focuses on the first invalid field until corrected or focus changes.

Guidance format: the same four-block structure — You’re doing / Why we ask / What to enter / What happens next.

Fees microcopy: where fees are shown in guidance, use the canonical copy stored in UX0 (do not rewrite in UX1–UX5).

Copy governance: no implied certainty; outcomes depend on assessment and final approval.

# 1. Scope and intent

## 1.1 What this document defines

This document defines the Individuals pathway behaviour and the dedicated enquiry forms that start a structured lender‑match request, submitted via “Continue with eligibility” for consultant follow‑up.

## 1.2 Hard boundary

The Individuals pathway contains no Solar / Backup Power options or services. Solar is handled only via the Solar / Backup Power pathway.

# 2. Intended user experience

“I choose what I need, understand it, submit a short request, and get a clear follow‑up — without stress, admin overload, or false promises.”

# 3. Page structure and responsive behaviour

## 3.1 Desktop layout (two-module view)

Guidance module (typically a left panel): capacity selector + calm education.

Action module (typically a right panel): Individuals options + dynamic Primary CTA.

Explanation stays separate from action so option selection remains scannable.

## 3.2 Mobile layout (stacked)

After Individuals is selected, the UI must guide the user to the newly revealed options.

“Start over” must return the user to the neutral top view.

# 4. State model (what changes when)

## 4.1 State A — Individuals selected, no option selected

Action module: options list visible.

Primary CTA state: disabled.

Primary CTA label (disabled): “Select an option to check eligibility”.

Guidance module: Individuals static guidance (orientation).

## 4.2 State B — A specific Individuals option selected

Action module: selected option highlighted.

Primary CTA state: enabled.

Primary CTA label (enabled): “Check eligibility for {Selected option}” (updates immediately when selection changes).

Guidance module: dynamic guidance updates to match the selected option (including fees expectations pulled from UX0).

# 5. Navigation and reset behaviour

## 5.1 “Change capacity” behaviour

Clicking a different capacity tile immediately updates the Action module.

Individuals remains selected; the option selection is cleared.

Any open Individuals form is closed.

Primary CTA returns to disabled state and label.

## 5.2 “Start over” behaviour (global)

Clears capacity and option selections, closes any open form, and returns to the neutral view.

On mobile, must scroll/position back to hero top.

# 6. Guidance module enrichment (Guidance Panel)

## 6.1 Purpose

Reduce cognitive load by separating explanation (guidance) from action (selection and forms).

Allow safe exploration of options before committing.

## 6.2 Universal four-block format (locked)

You’re doing

Why we ask

What to enter

What happens next

## 6.3 Trigger rules (locked)

Guidance changes only on: capacity change, option change, form open, field focus, or submit validation errors.

Priority rule: after submit errors, show guidance for the first invalid field until corrected or focus changes.

No timers and no rotating tips.

## 6.4 Fees microcopy (guidance) — single source of truth

Fees expectations copy is maintained in UX0 under the Fees microcopy section. UX1 must not rewrite fees copy.

When an Individuals option is selected, display the relevant UX0 row verbatim.

## 6.5 Property finance terminology (PF-01 alignment)

Labels and headings must use: “Residential property finance”.

Supporting guidance copy may use: home loan, bond, mortgage, buy a home/flat, refinance your bond/home loan.

Do not create new categories such as “home finance” or “flat finance”.

## 6.6 Education Ladder (progressive disclosure) — implementation rule

The UI must educate without slowing the user down. Use staged education that is only revealed when the user acts (selection, form open, field focus, submit).

Layer 1 — Orientation (State A): teach the process and set expectations (no bureau checks at this stage; documents only once the route is clear).

Layer 2 — Option clarity (State B): four-block guidance + one pitfall line + one “what helps” line + fees microcopy (from UX0).

Layer 3 — Field micro-guides: on field focus or first validation error after submit.

Layer 4 — Submit messaging: clear confirmation on success; clear routing reason on errors.

# 7. Individuals options (selector stage)

## 7.1 Options catalogue (locked)

## 7.2 Mapping rule

Each option maps to a dedicated enquiry form.

The selected option is stored as a locked context value (hidden field) on submission.

Options are single-select and non-toggle: selecting the same option again does not deselect it. To clear a selection, use “Start over” or change capacity.

# 8. CTA naming and behaviour

## 8.1 Two-step CTA system (locked)

Primary CTA (selector stage): opens the dedicated enquiry form for the selected option.

Submit CTA (form stage): submits the enquiry request.

## 8.2 Selector-stage Primary CTA labels (locked)

Disabled (no option selected): “Select an option to check eligibility”

Enabled (option selected): “Check eligibility for {Selected option}”

## 8.3 Selector-stage Primary CTA rules

Disabled until an option is selected.

Label updates immediately as selection changes.

Clicking opens the dedicated enquiry form for the selected option.

Must not imply instant outcomes or approval.

## 8.4 Form-stage Submit CTA label

Submit button (locked): “Continue with eligibility”

# 9. Individuals enquiry forms — field specification

## 9.1 Dedicated form rule (locked)

Each Individuals option opens a dedicated enquiry form. The selected option is stored as a locked context value (hidden field) for that form.

## 9.2 Form catalogue (names)

Individuals Form A — Residential property finance (Enquiry)

Individuals Form B — Vehicle finance (Enquiry)

Individuals Form C — Debt help / debt review (Enquiry)

Individuals Form D — Asset finance (Enquiry)

## 9.3 Shared form structure (all Individuals forms)

Section A — Your details

Section B — Preferred communication

Section C — Eligibility details (varies by form)

Section D — Anything else you want us to know

Section E — Compliance & POPIA (required)

## 9.4 Shared fields (all Individuals forms)

### 9.4.1 First name

Capture: Text input

Validation: Required

Why we ask: So we can address you properly and label the enquiry.

### 9.4.2 Surname

Capture: Text input

Validation: Optional

Why we ask: Helps identify you correctly where names are common.

### 9.4.3 Mobile number

Capture: Text input

Validation: Required; South African format

Why we ask: Fast follow-up and coordination later.

### 9.4.4 Email

Capture: Email input

Validation: Required

Why we ask: Confirmations and follow-up coordination.

### 9.4.5 Preferred communication method

Capture: Single-select (radio)

Options (locked): WhatsApp / Phone call / Email

Validation: Required

Why we ask: So we contact you on the channel you’ll respond to.

### 9.4.6 Optional notes

Capture: Textarea

Validation: Optional

Why we ask: Allows key context without forcing extra fields.

## 9.5 Form A — Residential property finance (Eligibility details)

### 9.5.1 What do you want to do?

Capture: Single-select

Options (locked): Buy / Refinance / Improvements / Bridging finance

Validation: Required

### 9.5.2 Buyer profile

Capture: Single-select

Options: First-time buyer / Buying again / Upgrading / Investing

Validation: Required

### 9.5.3 Approx. property value / purchase price

Capture: Currency (R)

Validation: Required

### 9.5.4 Deposit available

Capture: Single-select

Options: 0–5% / 6–10% / 11–20% / 21%+

Validation: Required

### 9.5.5 Timeframe to proceed

Capture: Single-select

Options: ASAP / 1–3 months / 3–6 months / 6+ months

Validation: Required

### 9.5.6 Do you currently have a bond on this property?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

## 9.6 Form B — Vehicle finance (Eligibility details)

### 9.6.1 What do you want to do?

Capture: Single-select

Options: Purchase / Refinance to raise capital / Replace/upgrade / Not sure

Validation: Required

### 9.6.2 What are you financing?

Capture: Single-select

Options: Motor vehicle / Leisure asset (boat, caravan, aircraft) / Other

Validation: Required

Conditional: If Other, show text field “Other — what is it?”

### 9.6.3 Purchase source

Capture: Single-select

Options: Registered dealer / Private sale / Not sure

Validation: Required

### 9.6.4 Condition

Capture: Single-select

Options: New / Used / Not sure

Validation: Required

### 9.6.5 Approx. price / value

Capture: Currency (R)

Validation: Required

### 9.6.6 Deposit available

Capture: Single-select

Options: 0% / 1–10% / 11–20% / 21%+ / Not sure

Validation: Required

### 9.6.7 Preferred term

Capture: Single-select

Options: 36 / 48 / 60 / 72 / 84 months / Not sure

Validation: Required

### 9.6.8 Balloon / residual required?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

### 9.6.9 Timeframe to proceed

Capture: Single-select

Options: ASAP / 1–3 months / 3–6 months / 6+ months

Validation: Required

## 9.7 Form C — Debt help / debt review (Eligibility details)

### 9.7.1 What do you need help with?

Capture: Single-select

Options: Consolidate my debts / Home rescue (stop legal action/foreclosure) / Reduce repayments / Not sure

Validation: Required

### 9.7.2 Have you received a legal notice or foreclosure letter?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

### 9.7.3 Is there available equity in the property (value higher than bond)?

Capture: Single-select

Options: Yes / No / Not sure / Not applicable (no property)

Validation: Required

### 9.7.4 Are you currently under debt review or handed over to legal?

Capture: Single-select

Options: Under debt review / Handed over to legal / Neither / Not sure

Validation: Required

### 9.7.5 Approx. total monthly debt repayments (all debts combined)

Capture: Single-select

Options: Under R5,000 / R5,000–R10,000 / R10,001–R20,000 / R20,001+

Validation: Required

### 9.7.6 Optional notes (keep it short)

Capture: Free-text (max 1,000 chars)

Validation: Optional

## 9.8 Form D — Asset finance (Eligibility details)

### 9.8.1 What type of asset do you want to finance?

Capture: Single-select

Options: Electronics / appliances / Furniture / Equipment & tools / Other

Validation: Required

Conditional: If Other, show text field “Other — what is it?”

### 9.8.2 Approx. asset value (or amount needed)

Capture: Currency (R)

Validation: Optional

### 9.8.3 Deposit available

Capture: Single-select

Options: 0% / 1–10% / 11–20% / 21%+ / Not sure

Validation: Required

### 9.8.4 Preferred repayment term

Capture: Single-select

Options: 6 / 12 / 24 / 36 / 48 / 60 months / Not sure

Validation: Required

### 9.8.5 Do you already have a quote/pro-forma invoice?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

### 9.8.6 Timeframe to proceed

Capture: Single-select

Options: ASAP / 1–3 months / 3–6 months / 6+ months

Validation: Required

### 9.8.7 Optional notes (keep it short)

Capture: Free-text (max 1,000 chars)

Validation: Optional ## 9.9 Section E — Compliance & POPIA

### 9.9.1 Compliance text box (non-interactive)

Must include (bullets in the UI):

LookingForFinance facilitates introductions and structured submissions to suitable funders.

All outcomes are subject to assessment and final approval by the relevant funder.

No bureau checks are performed at this stage.

### 9.9.2 POPIA consent checkbox (mandatory)

Checkbox label (required): “I acknowledge the Privacy Notice and agree to the processing described above.”

# 10. Form lifecycle, errors, and post-submit behaviour (build rules)

## 10.1 Open-form behaviour

When the user clicks the selector-stage Primary CTA, open the dedicated form and show the Form-open banner (Appendix B.3).

On open, keyboard focus moves to the first editable field in Section A (First name).

## 10.2 Submitting state

On submit, disable the submit button (“Continue with eligibility”) and show a “Submitting…” state to prevent double submits.

Preserve all entered values during submission.

## 10.3 Validation and error display

Validation occurs inline where sensible, but the primary trigger is a submit attempt.

After a submit attempt with validation errors:

Show inline field error messages under each invalid field.

Guidance module switches to the first invalid field micro-guide (UX0 priority rule).

Add a single line to the guidance: “We need this to route you correctly — otherwise we may match you to the wrong option first.”

## 10.4 Network / server failure

If submission fails due to network/server error:

Do not clear the form.

Show: “We couldn’t submit your request just now. Please try again.”

Allow retry.

## 10.5 Submit success (confirmation)

On success, show a confirmation message (toast or panel) containing:

“Eligibility request received.”

“A consultant will review and contact you on your preferred channel.”

“No bureau checks are performed at this stage. Outcomes depend on assessment and final approval by the relevant funder.”

After success, either:

(Preferred) Make the form read-only and show “Back to options”, or

Close the form and return to the options list (retain option selection highlighted).

# Appendix A — Compliance verification (against UX0 v1.0)

# Appendix B — Guidance Content Library (Individuals)

## B.1 State A — Individuals selected, no option selected (orientation)

You’re doing

You’re exploring your options for an Individuals lender-match request.

Why we ask

We match the right route first, before any paperwork — so you don’t waste time on the wrong option.

What to enter

Start by selecting what you want to do. Rough estimates are fine.

What happens next

Once you submit, a consultant reviews your request and follows up.

We only move to documents once the route is clear and worth pursuing.

No bureau checks are performed at this stage.

## B.2 State B — Option selected guidance (use these per option)

### B.2.1 Residential property finance

You’re doing

You’re starting a lender-match request for residential property finance.

Why we ask

These answers help us match you to funders suited to your purpose and risk profile.

What to enter

Use your best estimate for price/value and your deposit band. If you’re unsure, choose the closest option.

What happens next

We review and follow up to confirm the most sensible route.

Paperwork is only requested once the route is clear and worth pursuing.

Most delays happen when…

The price, deposit, or timeframe is left vague — which forces unnecessary back-and-forth.

What helps / speeds this up…

A realistic price range, your deposit band, and an honest timeframe.

Fees expectations (from UX0)

Insert UX0 fees microcopy row: Residential property finance (verbatim).

### B.2.2 Vehicle finance

You’re doing

You’re starting a lender-match request for vehicle finance.

Why we ask

Vehicle deals differ by new/used, term, deposit, and whether a balloon is needed — which affects lender appetite and pricing.

What to enter

Use a rough vehicle price, deposit band, and preferred term. If you don’t know balloon/residual, select “Not sure”.

What happens next

We review and follow up to confirm the best route and any key constraints.

Paperwork is only requested once the route is clear and worth pursuing.

Most delays happen when…

Balloon/residual requirements are unclear, or the vehicle price is underestimated.

What helps / speeds this up…

New vs used, price band, term preference, and whether you want a balloon.

Fees expectations (from UX0)

Insert UX0 fees microcopy row: Vehicle / personal asset finance (verbatim).

### B.2.3 Debt help / debt review

You’re doing

You’re starting a routing request for debt relief support.

Why we ask

The right support route depends on your situation and the types of debt involved.

What to enter

Choose the closest description of your situation and the debt types involved.

What happens next

We review and follow up to route you to the most appropriate support pathway.

Most delays happen when…

The urgency or arrears context isn’t clear, which can misroute you.

What helps / speeds this up…

Honest urgency, and selecting the main debt types involved.

Fees expectations (from UX0)

Insert UX0 fees microcopy row: Debt help / debt review (verbatim).

### B.2.4 Asset finance

You’re doing

You’re starting a lender-match request for a special financing need.

Why we ask

Special cases can’t be reliably categorised upfront — we use your description to route this correctly.

What to enter

Describe what you want to finance, the amount needed, and your timeframe. A rough estimate is fine.

What happens next

A consultant reviews and follows up to clarify the route and feasibility.

Most delays happen when…

The description is too broad, so we have to ask multiple follow-up questions.

What helps / speeds this up…

“What is it?”, “How much?”, “When?”, and whether any security is available (even if you’re not sure).

Fees expectations (from UX0)

Insert UX0 fees microcopy row: Vehicle / personal asset finance (verbatim) unless a dedicated Asset finance row exists.

## B.3 Form-open banner (top-of-form guidance)

Use this short banner when any Individuals form opens:

Answer roughly — accuracy improves later.

If you don’t know, choose “Not sure” where available.

We only request documents once the route is clear and worth pursuing.

## B.4 Field micro-guides (shown on field focus or first error after submit)

Keep each to 2–4 short lines.

### B.4.1 Price / value fields

Use your best estimate or the closest band.

This affects deal sizing and which funders we approach.

### B.4.2 Deposit available

Choose the closest deposit band — don’t overstate it.

Deposit changes lender appetite and indicative pricing.

### B.4.3 Timeframe to proceed

Pick the most realistic timing.

This affects urgency and whether a route is practical.

### B.4.4 Preferred term (vehicle)

Longer terms lower monthly repayment but can increase total cost.

### B.4.5 Balloon / residual (vehicle)

A balloon can lower monthly repayment, but increases final settlement risk.

If you’re unsure, select “Not sure”.

### B.4.6 Debt urgency / arrears context

Be honest about urgency — it helps route you safely.

## B.5 Submit messaging

### B.5.1 Submit errors

After a submit attempt with errors, guidance switches to the first invalid field micro-guide.

Add: “We need this to route you correctly — otherwise we may match you to the wrong option first.”

### B.5.2 Submit success

“Eligibility request received.”

“A consultant will review and contact you on your preferred channel.”

“No bureau checks are performed at this stage. Outcomes depend on assessment and final approval by the relevant funder.”

# Appendix C — Data dictionary binding (UX1 → DATA-01)

This appendix binds UX1 fields to the canonical keys and enums defined in DATA-01 v1.0. Implementations must submit using these keys.

## C.1 Required top-level fields (all Individuals forms)

### C.1.1 contact

contact.first_name (required)

contact.surname (optional)

contact.mobile (required)

contact.email (required)

### C.1.2 enquiry

enquiry.capacity_path = individual

enquiry.option_key (required)

enquiry.option_label (required)

enquiry.preferred_channel (enum: whatsapp / phone_call / email)

enquiry.notes (optional)

enquiry.source (enum: organic / partner / campaign)

enquiry.referrer_id (optional)

enquiry.utm_source / enquiry.utm_medium / enquiry.utm_campaign / enquiry.utm_content (optional)

enquiry.landing_path (optional)

### C.1.3 consent

consent.popia_ack = true (required)

consent.popia_ack_at (required)

consent.marketing_opt_in (optional; default false)

## C.2 Option keys (Individuals)

Residential property finance: ind_residential_property_finance

Vehicle finance: ind_vehicle_finance

Debt help / debt review: ind_debt_help

Asset finance: ind_asset_finance

## C.3 eligibility_payload keys (by form)

Keys must match DATA-01 Sections 7.1–7.4 exactly.

Residential property finance: eligibility_payload.res_*

Vehicle finance: eligibility_payload.veh_*

Debt help / debt review: eligibility_payload.debt_*

Asset finance: eligibility_payload.spec_*
