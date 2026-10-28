# Sam Dalgleish | CyberFrenchie

Source for the personal security research site at
`https://cyberfrenchie.github.io`.

## Local development

```sh
npm install
npm run dev
```

## Publishing

Pushes to `main` are built and deployed through GitHub Actions. Posts are
Markdown files in `src/posts`. Formal reports use the `report` tag; CVE work
uses the `cve-research` tag.

The site has no advertising, analytics or tracking cookies. Live CVE panels
read public data from the official CVE and NVD APIs in the visitor's browser.
