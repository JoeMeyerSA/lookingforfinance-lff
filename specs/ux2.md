# ux2 — Farmer Pathway Specification (LFF) v1.2

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

File ID + Title: UX2 — Farmer Pathway Specification (LFF)

Version: v1.2

Status: Active

Applies to: LookingForFinance.co.za — Farmer pathway selector experience + dedicated eligibility check forms

Owner: LookingForFinance (LFF)

Last updated: 2026-01-07

Precedence note: If this conflicts with UX0, UX0 wins. If a solution scope question arises, SOL-01 wins.

## Change log

v1.1 (2026-01-08): Replaced “bureau checks” wording with “bureau checks”.

## Conformance stamp (universal)

This UX specification conforms to: 1. UX0 — Selector-to-Enquiry Interaction Pathway (active version as defined in agents.md) 2. SOL-01 — Solutions Offered & Scope (active version as defined in agents.md) 3. DATA-01 — Form Data Dictionary (active version as defined in agents.md)

Conformance includes: 1. Guidance trigger rules (no timed rotation) 2. Validation priority rule (first invalid field drives guidance) 3. Primary CTA disabled/enabled rules with dynamic label per selection 4. Copy governance (no implied certainty; outcomes depend on assessment and final approval) 5. Fees microcopy governance (fees wording is stored in UX0 and must be reused verbatim) 6. Entity context governance (entity selection is submission-form-only, not a browsing/solutions concept)

## 1. Scope and intent

1.1. What this document defines 1. The Farmer pathway behaviour inside the Selector-to-Enquiry journey. 2. The Farmer options catalogue (what the user can select). 3. The eligibility check forms that start a structured lender‑match request and consultant follow‑up. 4. Guidance Panel behaviour and content structure for Farmer.

1.2. Hard boundaries 1. This is not approval. 2. No document collection on the website: documents are discussed and requested only once the route is clear and worth pursuing. 3. Solar / Backup Power is not offered inside Farmer. If the user wants solar funding, route them to the Solar / Backup Power pathway.

## 2. Intended user experience

2.1. One-sentence promise (experience-level, not marketing): “I can choose the right farming-related option, understand what’s being checked, submit a short request, and get practical follow‑up — without stress, admin overload, or false promises.”

## 3. Page structure and responsive behaviour

3.1. Desktop layout (two-module view) 1. Guidance Panel (left): Capacity selector + calm guidance. 2. Action Panel (right): Farmer options + Primary CTA, then the dedicated form. 3. Principle: explanation stays separate from action so the right side remains scannable and decisive.

3.2. Mobile layout (stacked) 1. Guidance content may collapse into an accordion/drawer. 2. After Farmer is selected, the UI must guide the user to the newly revealed options. 3. “Start over” must return the user to the neutral top view.

## 4. State model

4.1. State A — Farmer selected, no option selected 1. Action Panel: Farmer options visible. 2. Primary CTA state: disabled. 3. Primary CTA label (disabled): “Select an option to check eligibility”. 4. Guidance Panel: Farmer orientation guidance (static).

4.2. State B — A specific Farmer option selected 1. Action Panel: selected option highlighted. 2. Primary CTA state: enabled. 3. Primary CTA label (enabled): “Check eligibility for {Selected option}” (updates immediately when selection changes). 4. Guidance Panel: dynamic option guidance updates to match the selected option. - Includes fees expectations placeholder (pulled verbatim from UX0). - Includes the optional protection note placeholder (pulled verbatim from UX0).

4.3. State C — Dedicated eligibility check form open 1. Action Panel: the relevant dedicated form is open. 2. Primary CTA (selector-stage) is replaced by the form. 3. Guidance Panel: switches to form-level guidance. - Shows the form-open banner. - Then updates on field focus and validation errors.

4.4. State D — Submission confirmation 1. Confirmation restates the PV-01 four-step truth. 2. Confirmation includes TL-01 truth-lines (not approval; outcomes subject to assessment and final decision).

## 5. Navigation and reset behaviour

5.1. Change pathway behaviour 1. Selecting a different pathway clears the Farmer option selection. 2. Any open Farmer form closes. 3. Primary CTA returns to disabled state and disabled label.

5.2. Start over behaviour (global) 1. Clears pathway and option selections. 2. Closes any open form. 3. Returns to the neutral view. 4. On mobile, scrolls/positions back to the top.

## 6. Guidance Panel enrichment

6.1. Purpose 1. Reduce anxiety and cognitive load by explaining “why” separately from “do”. 2. Provide progressive education only when the user acts.

6.2. Guidance structure (locked format) Use the four-block structure in dynamic guidance: 1. You’re doing 2. Why we ask 3. What to enter 4. What happens next

6.3. Trigger rules (locked) Guidance may change only when: 1. Pathway changes. 2. Option changes. 3. Form opens. 4. Field focus changes. 5. Submission attempt returns validation errors.

6.4. Validation priority rule (locked) After a submit attempt with errors: 1. Guidance focuses on the first invalid field until corrected or focus changes. 2. A single reminder line may be shown: “We need this to route you correctly — otherwise we may match you to the wrong option first.”

6.5. Fees microcopy (locked; single source of truth) 1. When an option is selected and/or the form is opened, show the relevant fees expectations copy. 2. Implementation rule: copy the relevant UX0 fees microcopy row verbatim (do not rewrite in UX2).

6.6. Protection options (Insurance & Assurance) microcopy (locked; single source of truth) 1. Post-selection (State B): show the optional one-line note. 2. In-form (State C): show the optional checkbox + disclosure. 3. Implementation rule: copy the relevant UX0 protection microcopy blocks verbatim (do not rewrite in UX2).

6.7. Documents language (reduce admin fear) Use the UX0 pattern wherever documents are mentioned: 1. Heading: “Documents (when you’re ready)” 2. Body: “If you have it, great. If not, submit anyway — we’ll confirm what’s needed during follow-up.”

## 7. Farmer options catalogue

7.1. Options (locked set) | Option | Label (UI) | Dedicated eligibility check form | |—|—|—| | 1 | Agricultural property finance | Farmer Form A — Agricultural property finance | | 2 | Equipment & implements finance | Farmer Form B — Equipment & implements | | 3 | Seasonal funding / working capital | Farmer Form C — Seasonal funding / working capital | | 4 | Farm debt help (restructure / refinance) | Farmer Form D — Farm debt help |

7.2. Mapping rule (locked) 1. Each option maps to one dedicated form. 2. The selected option is stored as a locked context value (hidden field) on submission. 3. Options are single-select and non-toggle.

7.3. Solar pointer (locked) If a user’s need is clearly solar/backup funding: 1. Do not offer it as a Farmer option. 2. Route to Solar / Backup Power pathway.

## 8. CTA naming and behaviour

8.1. Two-step CTA system (locked) 1. Primary CTA (selector stage): opens the dedicated form for the selected option. 2. Submit CTA (form stage): submits the eligibility check.

8.2. Selector-stage Primary CTA labels (locked) 1. Disabled: “Select an option to check eligibility”. 2. Enabled: “Check eligibility for {Selected option}”.

8.3. Form-stage submit label (locked) Submit button: “Continue with eligibility”.

## 9. Farmer eligibility check forms — field specification

9.1. Dedicated form rule (locked) Each Farmer option opens a dedicated form. The selected option is stored as a locked context value (hidden field).

9.2. Form catalogue (names) 1. Farmer Form A — Agricultural property finance (Eligibility check) 2. Farmer Form B — Equipment & implements finance (Eligibility check) 3. Farmer Form C — Seasonal funding / working capital (Eligibility check) 4. Farmer Form D — Farm debt help (restructure / refinance) (Eligibility check)

9.3. Shared form structure (all Farmer forms) 1. Section A — Your details 2. Section B — Preferred communication 3. Section C — Legal entity submitting this application (submission-level packaging context) 4. Section D — Eligibility details (option-specific) 5. Section E — Protection options (optional) 6. Section F — Anything else you want us to know (optional) 7. Section G — Compliance & POPIA (required)

9.4. Shared fields (all Farmer forms) 9.4.1. First name 1. Capture: Text input 2. Validation: Required (min 2 characters)

9.4.2. Surname 1. Capture: Text input 2. Validation: Optional

9.4.3. Mobile number 1. Capture: Text input 2. Validation: Required (South African format)

9.4.4. Email 1. Capture: Email input 2. Validation: Required

9.4.5. Preferred communication method 1. Capture: Single-select (radio) 2. Options (locked): WhatsApp / Phone call / Email 3. Validation: Required

9.4.6. Legal entity submitting this application (keep simple; no extra explanatory paragraphs) 1. Capture: Single-select (radio) 2. Options (locked): Natural person / Business / Trust 3. Validation: Required

9.4.7. Amount required (estimate) (Farmer baseline — required) 1. Capture: Currency (R) 2. Validation: Required 3. Guidance: rough estimate is acceptable.

9.4.8. Timeframe to proceed (Farmer baseline — required) 1. Capture: Single-select 2. Options (locked): ASAP / 1–3 months / 3–6 months / 6+ months 3. Validation: Required

9.4.9. Optional notes 1. Capture: Textarea 2. Validation: Optional (max 1,000 characters recommended)

9.5. Section E — Protection options (optional) 1. Checkbox label: Insert UX0 protection checkbox label (verbatim). 2. If checked, show: - Categories multi-select: Insert UX0 categories label (verbatim) - Existing cover: Insert UX0 existing cover label (verbatim) - Existing provider (optional): Insert UX0 existing provider label (verbatim) - Disclosure: Insert UX0 protection disclosure (verbatim)

9.6. Section G — Compliance & POPIA 9.6.1. Compliance text box (non-interactive) Must include (bullets in the UI): 1. LookingForFinance facilitates introductions and structured submissions to suitable funders. 2. This starts a structured lender-match request and consultant follow-up — it is not approval. 3. All outcomes are subject to assessment and the final decision by the relevant funder. 4. No bureau checks are performed at this stage.

9.6.2. POPIA consent checkbox (mandatory) 1. Checkbox label (required): “I acknowledge the Privacy Notice and agree to the processing described above.” 2. Validation: must be checked to submit.

## 9A. Option-specific eligibility fields

### 9A.1 Farmer Form A — Agricultural property finance

Purpose

Capture: Single-select

Options: Buy / Refinance / Improvements (where applicable)

Validation: Required

Approx. property value / purchase price

Capture: Currency (R)

Validation: Required

Deposit available (estimate)

Capture: Single-select

Options: 0–5% / 6–10% / 11–20% / 21%+

Validation: Required

Province (where the farm/property is located)

Capture: Single-select

Options: South African provinces

Validation: Required

Primary production type

Capture: Single-select

Options: Crops / Livestock / Mixed / Other

Validation: Required

Security available beyond the property?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

Fees expectations: - Insert UX0 fees microcopy row: Agricultural property finance (verbatim).

### 9A.2 Farmer Form B — Equipment & implements finance

Asset type

Capture: Single-select

Options: Tractor / Implement / Vehicle / Irrigation / Other

Validation: Required

New or used

Capture: Single-select

Options: New / Used / Not sure

Validation: Required

Asset price (estimate)

Capture: Currency (R)

Validation: Required

Deposit available (estimate)

Capture: Single-select

Options: 0–5% / 6–10% / 11–20% / 21%+

Validation: Required

Security available beyond the asset?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

Fees expectations: - Insert UX0 fees microcopy row: Equipment / vehicle finance (verbatim).

### 9A.3 Farmer Form C — Seasonal funding / working capital

Funding purpose

Capture: Multi-select

Options: Inputs (seed/feed/fertiliser) / Labour / Fuel & logistics / Repairs & maintenance / Other

Validation: Required (min 1)

Repayment expectation

Capture: Single-select

Options: Once-off after harvest/sales / Monthly / Not sure

Validation: Required

Security available?

Capture: Single-select

Options: Yes / No / Not sure

Validation: Required

Fees expectations: - Insert UX0 fees microcopy row: Working capital / seasonal funding (verbatim).

### 9A.4 Farmer Form D — Farm debt help (restructure / refinance)

Debt situation

Capture: Single-select

Options: Struggling / In arrears / Creditor pressure / Need restructure / Not sure

Validation: Required

Debt types involved

Capture: Multi-select

Options: Property loans / Equipment finance / Vehicle finance / Overdraft / Supplier accounts / Other

Validation: Required (min 1)

Approx. monthly repayment total

Capture: Single-select

Options: Under R25,000 / R25,000–R50,000 / R50,001–R100,000 / R100,001+

Validation: Required

Urgency

Capture: Single-select

Options: Immediate (7 days) / Soon (30 days) / Planning (60–90 days)

Validation: Required

Fees expectations: - Insert UX0 fees microcopy row: (New row needed) Farm debt help (restructure / refinance).

## 10. Form lifecycle, errors, and post-submit behaviour

10.1. Open-form behaviour 1. Opening a form moves focus to the first field (First name). 2. Show a short form-open banner in guidance: rough answers are fine; “Not sure” is acceptable.

10.2. Submitting state 1. On submit, disable the submit button and show “Submitting…” 2. Preserve all entered values.

10.3. Validation and error display 1. Validation occurs inline where sensible, but the primary trigger is a submit attempt. 2. After submit attempt with errors: 1. Show inline field error messages. 2. Guidance switches to the first invalid field micro-guide (UX0 priority rule).

10.4. Network / server failure 1. Do not clear the form. 2. Show: “We couldn’t submit your request just now. Please try again.” 3. Allow retry.

10.5. Submit success (confirmation) On success, show confirmation containing: 1. “Eligibility request received.” 2. “A consultant will review and contact you on your preferred channel.” 3. “No bureau checks are performed at this stage. Outcomes depend on assessment and final approval by the relevant funder.”

After success, either: 1. (Preferred) Make the form read-only and show “Back to options”, or 2. Close the form and return to options (retain selection highlighted).

## Appendix A — Compliance verification (against UX0)

A.1 Conformance stamp present — Pass

A.2 Guidance trigger rules (no timed changes) — Pass

A.3 Validation priority rule (first invalid field guidance) — Pass

A.4 Selector-stage Primary CTA disabled/enabled + dynamic label — Pass

A.5 No implied certainty language — Pass

A.6 Entity context is submission-level only; no solutions-level framing — Pass

A.7 Solar separation — Pass

A.8 Fees microcopy referenced from UX0 only — Pass (Option D flagged for UX0 row addition)

A.9 DATA-01 binding present — Pass

## Appendix B — Guidance Content Library (Farmer)

### B.1 State A — Farmer selected, no option selected (orientation)

You’re doing: You’re exploring options for a Farmer eligibility check.

Why we ask: We match the right route first, before paperwork — so you don’t waste time on the wrong option.

What to enter: Start by selecting what you want to do. Rough estimates are fine.

What happens next: Once you submit, a consultant reviews your request and follows up.

Truth-lines (one or two lines, visible either here or on form): - This starts a structured lender-match request and follow-up — it is not approval. - All outcomes are subject to assessment and final approval by the relevant funder.

### B.2 State B — Option selected guidance (use per option)

#### B.2.1 Agricultural property finance

You’re doing: Starting a lender-match request for agricultural property finance.

Why we ask: Property deals depend on purpose, deposit, security and timing — this determines the right route.

What to enter: Use your best estimate for price/value, deposit band and timeframe.

What happens next: We review and follow up to confirm the most sensible route. Documents are only requested once the route is clear and worth pursuing.

Most delays happen when… - Value, deposit, or urgency is vague.

What helps / speeds this up… - A realistic value range, deposit band, and clear timeframe.

Fees expectations: - Insert UX0 fees microcopy row: Agricultural property finance (verbatim).

Protection note: - Insert UX0 optional protection note (verbatim).

#### B.2.2 Equipment & implements finance

You’re doing: Starting a lender-match request for equipment/implements finance.

Why we ask: New/used, deposit, asset type and security affect lender appetite and structuring.

What to enter: Choose the closest asset type and price estimate. If unsure, use “Not sure” where available.

What happens next: We review and follow up to confirm the best route and what matters most for assessment.

Most delays happen when… - Asset type is unclear or price is underestimated.

What helps / speeds this up… - Asset type, price estimate, and deposit band.

Fees expectations: - Insert UX0 fees microcopy row: Equipment / vehicle finance (verbatim).

Protection note: - Insert UX0 optional protection note (verbatim).

#### B.2.3 Seasonal funding / working capital

You’re doing: Starting a lender-match request for seasonal funding or working capital.

Why we ask: Timing and repayment expectations shape the safe route and who we approach.

What to enter: Select the closest purpose(s), repayment expectation and timeframe.

What happens next: We review and follow up to confirm fit and what’s needed for packaging.

Most delays happen when… - Repayment expectations aren’t clear.

What helps / speeds this up… - Clear timing, purpose, and a realistic repayment expectation.

Fees expectations: - Insert UX0 fees microcopy row: Working capital / seasonal funding (verbatim).

Protection note: - Insert UX0 optional protection note (verbatim).

#### B.2.4 Farm debt help (restructure / refinance)

You’re doing: Starting a routing request for farm debt restructure/refinance support.

Why we ask: The safest route depends on urgency, debt types and current repayment pressure.

What to enter: Be honest about urgency and select the main debt types involved.

What happens next: We review and follow up to route you to the most appropriate restructure/refinance pathway.

Most delays happen when… - Urgency is unclear, leading to misrouting.

What helps / speeds this up… - Honest urgency and the main debt types.

Fees expectations: - Insert UX0 fees microcopy row: (New row needed) Farm debt help (restructure / refinance).

Protection note: - Insert UX0 optional protection note (verbatim).

### B.3 Form-open banner (top-of-form guidance)

Use this banner when any Farmer form opens: 1. Answer roughly — accuracy improves later. 2. If you don’t know, choose “Not sure” where available. 3. We only request documents once the route is clear and worth pursuing.

### B.4 Field micro-guides (shown on field focus or first error after submit)

Keep each to 2–4 short lines.

Amount required

A rough estimate is fine — this affects deal sizing and routing.

Timeframe

Choose the most realistic timing — it affects urgency and who we approach.

Deposit band

Choose the closest band — don’t overstate it.

Security available

If unsure, select “Not sure” — we’ll clarify during follow-up.

Debt urgency

Be honest — it helps route you safely.

### B.5 Submit messaging

Submit errors: show first-invalid-field guidance + the single reminder line.

Submit success: use the universal confirmation set in Section 10.5.

## Appendix C — Data dictionary binding (UX2 → DATA-01)

### C.1 Required top-level fields (all Farmer forms)

contact

contact.first_name (required)

contact.surname (optional)

contact.mobile (required)

contact.email (required)

enquiry

enquiry.capacity_path = farmer

enquiry.option_key (required)

enquiry.option_label (required)

enquiry.preferred_channel (enum: whatsapp / phone_call / email)

enquiry.notes (optional)

enquiry.source (enum: organic / partner / campaign)

enquiry.referrer_id + UTM fields (optional)

consent

consent.popia_ack = true (required)

consent.popia_ack_at (required)

consent.marketing_opt_in (optional; default false)

eligibility_payload

Must include the Farmer baseline keys (below) plus option-specific keys.

### C.2 Option keys (Farmer)

Agricultural property finance: far_agricultural_property_finance

Equipment & implements finance: far_equipment_implements_finance

Seasonal funding / working capital: far_seasonal_working_capital

Farm debt help (restructure / refinance): far_debt_help_restructure

### C.3 Farmer baseline keys (submission-level; required on all Farmer forms)

eligibility_payload.far_entity_type (enum: natural_person / business / trust)

eligibility_payload.far_amount_needed (currency)

eligibility_payload.far_timeframe (enum: asap / m1_3 / m3_6 / m6_plus)

### C.4 Option-specific keys (recommended binding)

Implementations may extend this list, but must not rename baseline keys.

Form A (Agricultural property)

eligibility_payload.far_property_purpose (enum)

eligibility_payload.far_property_value (currency)

eligibility_payload.far_deposit_band (deposit_band)

eligibility_payload.far_province (string/enum)

eligibility_payload.far_farm_type (enum)

eligibility_payload.far_security_available (yes_no_not_sure)

Form B (Equipment & implements)

eligibility_payload.far_asset_type (enum)

eligibility_payload.far_asset_condition (enum)

eligibility_payload.far_asset_price (currency)

eligibility_payload.far_deposit_band (deposit_band)

eligibility_payload.far_security_available (yes_no_not_sure)

Form C (Seasonal / working capital)

eligibility_payload.far_funding_purpose (array enum)

eligibility_payload.far_repayment_expectation (enum)

eligibility_payload.far_security_available (yes_no_not_sure)

Form D (Debt help)

eligibility_payload.far_debt_status (enum)

eligibility_payload.far_debt_types (array enum)

eligibility_payload.far_debt_monthly_repayment_band (enum)

eligibility_payload.far_debt_urgency (enum)

Note: The keys above must be aligned to DATA-01 naming rules (snake_case) and enum governance.
