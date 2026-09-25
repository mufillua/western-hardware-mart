import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Adds `.wh-reveal` (or `.wh-reveal-stagger` for a card-grid parent) to the
 * host in the template; this directive just toggles `.is-visible` once the
 * element scrolls into view, via IntersectionObserver, then stops
 * watching. Pure CSS (styles.scss) does the actual animating — this is
 * only a viewport trigger, so it stays cheap and doesn't fight Angular's
 * change detection.
 *
 * Usage:  <div class="wh-reveal" whmReveal>...</div>
 *         <div class="wh-grid wh-reveal-stagger" whmReveal>...cards...</div>
 */
@Directive({
  selector: '[whmReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private fallbackTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    const host = this.el.nativeElement;

    // No IntersectionObserver (very old browser) — just show the content,
    // never leave it permanently hidden.
    if (typeof IntersectionObserver === 'undefined') {
      host.classList.add('is-visible');
      return;
    }

    const reveal = () => {
      host.classList.add('is-visible');
      this.observer?.unobserve(host);
      if (this.fallbackTimer) clearTimeout(this.fallbackTimer);
    };

    // threshold must stay tiny (not e.g. 0.15): threshold is a fraction of
    // the *observed element's own* box, not the viewport. A tall host —
    // like a 77-item product grid spanning several times the viewport
    // height — would need an impossible amount of itself on screen at once
    // to ever cross a 15% threshold, so it would just never reveal. `0`
    // fires as soon as a single pixel is visible, which is correct
    // regardless of how tall the host is.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) reveal();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    this.observer.observe(host);

    // Safety net: content must never be permanently stuck invisible just
    // because a browser quirk kept the observer from firing. If it hasn't
    // revealed on its own shortly after mount, force it.
    this.fallbackTimer = setTimeout(reveal, 1500);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.fallbackTimer) clearTimeout(this.fallbackTimer);
  }
}
