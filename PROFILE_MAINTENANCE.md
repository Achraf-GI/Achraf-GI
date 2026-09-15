# Maintaining the profile

## Content

- `README.md`: concise recruiter-facing profile.
- `PROJECTS.md`: project context and supplied simulation results.
- `CERTIFICATIONS.md`: generated certification presentation grouped by domain.
- `data/certifications.json`: parent credentials, standalone credentials and nested component courses.
- `data/certifications-source.json`: unchanged bilingual certification records from the existing portfolio; no source entry was removed.
- `assets/profile-achraf-gaga.png`: exact copy of the portrait supplied on 15 September 2026; no alteration.

Update certification data, then run `node scripts/render-certifications.mjs`. Completed parent credentials suppress their component courses from the rendered page. The `priority` field preserves the requested order independently of domain grouping. Green Belt and Yellow Belt are grouped together under Quality. Machine Learning remains complementary.

## Unresolved information

- The confirmed target is `Achraf-GI/Achraf-Gaga`. It was cloned empty, so there was no existing README, certification data or asset to preserve in this repository.
- GitHub automatically displays a profile README only from a public repository named exactly like the account (`Achraf-GI/Achraf-GI`). The requested repository name `Achraf-Gaga` is preserved; its README will be visible on the repository page after publication, but will not automatically appear on the account overview. See https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme.
- Original certificate images, completion dates and credential URLs are missing for all credentials.
- Parent issuers still require confirmation for Six Sigma Green Belt, Six Sigma Yellow Belt, Digital Technology in Manufacturing and Industrial and Process Safety Engineering. The older course list names University at Buffalo for some Six Sigma components; it does not verify the parent issuer.
- Standalone credential issuers and competency tags are not supplied.
- No Add to LinkedIn feature or verified LinkedIn credential links were available in the source material; none are fabricated.
- No public project links were supplied for Automated Pumping Station Supervision, Dynamic KPI Dashboard or INNOVACLIM. Their names remain unlinked.
- Existing BI and simulation portfolio pages may contain less detail than the newer project descriptions supplied for this README.
- The portfolio homepage and five linked project pages returned HTTP 200 without authentication during validation on 15 September 2026. The GitHub profile link also returned HTTP 200. LinkedIn returned HTTP 999 to automated checking; its original user-supplied URL was preserved and needs manual confirmation.

Use `null` for missing data; do not enter guessed dates, certificate IDs or credential URLs. The generic SVG is explicitly labeled as a missing-image placeholder, not presented as a certificate.

## GitHub rendering

The README uses native Markdown and GitHub-safe HTML. Its 240 px portrait preserves the original aspect ratio, with no CSS-dependent layout. The left-aligned image permits the identity block to flow alongside it on wide screens and wrap on narrow screens. Native text and tables adapt to GitHub themes; the placeholder SVG includes its own high-contrast background. No external badges, counters, scripts or animations are used.

Never add internship reports, internship figures, datasets or Excel solution workbooks. No automatic push is included.
