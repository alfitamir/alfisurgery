# Design Tokens

Token reference for **Alfi Surgery**. Use utility classes and CSS variables — never raw values.

## Colors

Apply with any color utility: `bg-<name>`, `text-<name>`, `border-<name>`, `ring-<name>`, `divide-<name>`, etc.

| Name | CSS variable |
|---|---|
| `background` | `--background` |
| `foreground` | `--foreground` |
| `card` | `--card` |
| `card-foreground` | `--card-foreground` |
| `popover` | `--popover` |
| `popover-foreground` | `--popover-foreground` |
| `primary` | `--primary` |
| `primary-foreground` | `--primary-foreground` |
| `secondary` | `--secondary` |
| `secondary-foreground` | `--secondary-foreground` |
| `muted` | `--muted` |
| `muted-foreground` | `--muted-foreground` |
| `accent` | `--accent` |
| `accent-foreground` | `--accent-foreground` |
| `destructive` | `--destructive` |
| `destructive-foreground` | `--destructive-foreground` |
| `border` | `--border` |
| `input` | `--input` |
| `ring` | `--ring` |
| `teal` | `--teal` |
| `ivory` | `--ivory` |
| `gold` | `--gold` |
| `gold-foreground` | `--gold-foreground` |
| `gradient-accent` | `--gradient-accent` |
| `patient-deep` | `--patient-deep` |
| `patient-blue` | `--patient-blue` |
| `patient-mist` | `--patient-mist` |
| `patient-apricot` | `--patient-apricot` |
| `patient-canvas` | `--patient-canvas` |
| `patient-ink` | `--patient-ink` |
| `daily-mint-surface` | `--daily-mint-surface` |
| `daily-mint-ink` | `--daily-mint-ink` |
| `daily-rose-surface` | `--daily-rose-surface` |
| `daily-rose-ink` | `--daily-rose-ink` |
| `daily-sky-surface` | `--daily-sky-surface` |
| `daily-sky-ink` | `--daily-sky-ink` |
| `daily-gold-surface` | `--daily-gold-surface` |
| `daily-gold-ink` | `--daily-gold-ink` |
| `home-doctor` | `--home-doctor` |
| `home-doctor-surface` | `--home-doctor-surface` |
| `home-patient` | `--home-patient` |
| `home-patient-surface` | `--home-patient-surface` |

## Typography

Typography classes (`font-*` for families, `text-*` for sizes):

| Class | CSS variable |
|---|---|
| `font-serif` | `--font-serif` |
| `font-sans` | `--font-sans` |
| `font-localized` | `--font-localized` |

## Border Radius

Border-radius classes:

| Class | CSS variable |
|---|---|
| `rounded-sm` | `--radius-sm` |
| `rounded-md` | `--radius-md` |
| `rounded-xl` | `--radius-xl` |
| `rounded` | `--radius` |

## Shadows

Box-shadow classes:

| Class | CSS variable |
|---|---|
| `shadow-elegant` | `--shadow-elegant` |
| `shadow-soft` | `--shadow-soft` |
| `shadow-patient` | `--shadow-patient` |

## Other

Reference via `var(--name)` in inline styles or CSS.

| CSS variable |
|---|
| `--gradient-hero` |
| `--gradient-gold` |
| `--home-veil` |

