# Global Section Spacing Rules

## Standard Section Spacing
Verwende diese CSS-Klassen für alle Sections site-wide:

- `.section` - Standard-Abstand: `py-16 sm:py-20 md:py-24 lg:py-28`
- `.section-sm` - Kleinere Sections: `py-12 md:py-16 lg:py-20` 
- `.section-lg` - Größere Sections: `py-20 md:py-28 lg:py-32`
- `.section-xl` - Extra große Sections: `py-24 md:py-32 lg:py-40`

## Margin-Klassen
- `.section-mt` - Nur oberer Abstand: `mt-16 sm:mt-20 md:mt-24 lg:mt-28`
- `.section-mb` - Nur unterer Abstand: `mb-16 md:mb-24 lg:mb-28`

## Inline Tailwind Alternative
Falls CSS-Klassen nicht möglich: `py-16 sm:py-20 md:py-24 lg:py-28`

**WICHTIG:** Diese Abstände müssen auf ALLEN Unterseiten konsistent verwendet werden!

---

# TemplateDemo Page Updates

This file summarizes the changes made to the `TemplateDemo` page in `nextly-template/src/app/template-demo/page.tsx`.

- Integrated the content of `section_template_1_service_grid.md` as a new section.
- Converted the HTML from the markdown file to JSX.
- Used the Next.js `<Image>` component for image optimization.
- Adjusted image paths to point to the `/img/flux/` directory.