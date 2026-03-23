# Specification

## Summary
**Goal:** Build a single-page Smart QR marketing landing page with product information, a validated contact form that stores submissions in the Motoko canister, and an embedded Smart QR Login/Register app via a configurable URL.

**Planned changes:**
- Create a responsive single-page landing route with clearly labeled sections: Product Overview, Feature Highlights, Contact, and an embedded Login/Register area.
- Apply a consistent visual theme (colors/typography/spacing) across the page, using a non-blue/purple primary palette.
- Implement a contact form (Name, Email, Message) with client-side validation and UX states (loading, success, error) and duplicate-submit prevention.
- Add Motoko backend methods to create and persist contact submissions (with server timestamp) and to query recent submissions for verification/testing.
- Wire the contact form to the backend using existing actor + React Query patterns, without editing the specified immutable frontend files.

**User-visible outcome:** Users can view a polished Smart QR landing page on desktop/mobile, submit a contact message with clear feedback, and access the embedded Smart QR Login/Register app within the page (pointed at a configurable URL).
