# IA-01 — Five Gates Navigation Contract (LFF) v1.0
**Status:** Canonical information architecture rule (site-wide)  
**Applies to:** Website navigation, page structure, eligibility flow, form routing, and content placement.

---

## 1. Purpose
This document prevents navigation drift. It locks the website into a single, consistent way of routing users into the correct **Pocket Business (PB)** eligibility form without introducing alternate “solutions catalogues” or confusing cross-slicing.

---

## 2. The Five Gates (the only entry points)
The website must be organised exclusively around these five gates:

1. **Individual**
2. **Business**
3. **Farmer**
4. **Developer**
5. **Solar / Backup Power**

**Rule:** Users enter through one gate and remain inside that gate’s journey until submission.

---

## 3. Allowed inside-gate patterns (choose one, keep it consistent)
Inside a gate, the site may present *only* what is necessary to route the user to the correct PB form.

### 3.1. Pattern A — Gate → Need options → Check eligibility (recommended)
1. User selects a gate.
2. User selects a **need option** within that gate (kept intentionally small).
3. User clicks **Check eligibility** to open the **dedicated PB form** for that gate + need.

### 3.2. Pattern B — Gate → Single triage → Check eligibility (optional)
1. User selects a gate.
2. User clicks **Check eligibility**.
3. The first question inside the form captures the need (to route internally).

**Constraint:** Pattern B must not become a “global form”. It still remains gate-specific.

---

## 4. Forbidden patterns (do not implement)
The site must not introduce any navigation or page structure that bypasses the Five Gates.

1. **No global “Solutions” catalogue** (no “browse all solutions”).
2. **No cross-gate slicing** such as:
   - by industry (“construction”, “mining”, “retail”, etc.)
   - by product library (“home loans”, “SME loans”, “bridging”, etc.) as a primary navigation system
3. **No secondary pathways** that allow users to jump gates mid-flow.
4. **No mixed forms** that combine multiple gate contexts in one submission experience.

---

## 5. Form mapping contract (PB form routing)
### 5.1. 1:1 mapping rule
Every eligibility form must map **1:1** to:
- **Gate** (Individual / Business / Farmer / Developer / Solar)
- plus a **need option** (if Pattern A is used)

**Rule:** The website must only display the form that matches the user’s selected gate + need.

### 5.2. Form content scope (minimum viable only)
Website eligibility forms must collect **only**:
- minimum routing information for the selected gate + need
- contact details and consent/opt-in preferences
- solution-specific qualifiers that prevent misrouting

**Explicitly excluded from website pre-check:**
- affordability-heavy underwriting inputs (e.g., income, time-in-role)  
- document uploads / document collection

These are handled during PB-driven follow-up.

### 5.3. Entity selector placement
An **entity selector** is a *form packaging field* and appears **only inside relevant forms** where applicable (e.g., Business / Farmer / Solar).  
**It must never be presented as a solution-level concept or a navigation slice.**  
Individuals do not see an entity selector.

---

## 6. Submission outcome screen contract
After form submission, the user sees a confirmation/outcome message that is **defined per PB form** (form-specific messaging), not a generic site-wide message. The outcome content must:
- avoid any implied approval certainty
- explain the next step clearly
- set expectations that outcomes depend on assessment and the final decision-maker

---

## 7. Authority & cross-references
This file is the canonical truth for **navigation and information architecture**.

- **UX0** must reflect Five Gates-only entry points.
- **PB-01** defines the interaction model and two-panel experience.
- **SOL-01** defines scope of what is covered (without implying a catalogue UX).
- **DATA-01** defines the 1:1 form mapping and field dictionaries.

---

## 8. Change control
Any proposed change that introduces a new navigation slice or cross-gate catalogue requires a deliberate architectural review and an explicit update to this IA-01 document.
