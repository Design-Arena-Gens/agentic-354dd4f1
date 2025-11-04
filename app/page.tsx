import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.badge}>Aayam Arts &amp; Studios</span>
        <h1>Master Prompt: Build the Ultimate WordPress Presence for AayamArts.com</h1>
        <p>
          Use this comprehensive implementation brief to engineer a visually stunning, high-converting WordPress
          experience that showcases the studio&apos;s 3D storytelling capabilities and drives demo bookings.
        </p>
      </header>

      <section className={styles.section}>
        <h2>Mission &amp; Vision</h2>
        <ul>
          <li>
            Establish Aayam Arts as the go-to creative partner for immersive 3D experiences: walkthroughs, blueprints,
            building elevations, VR demos, and 3D prints for high-end complexes, apartments, societies, and mega
            developments.
          </li>
          <li>
            Deliver a polished, future-ready UX that reflects architectural precision, design innovation, and premium
            craftsmanship.
          </li>
          <li>
            Optimize every interaction for conversions with persistent &ldquo;Book a Demo Now&rdquo;, &ldquo;Buy a
            Service&rdquo;, and &ldquo;Share Your Requirements&rdquo; CTAs.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Target Audience &amp; Positioning</h2>
        <ul>
          <li>Primary: Real-estate developers, architects, interior designers, property marketers, and facility planners.</li>
          <li>Secondary: Homeowners, residential societies, and commercial project investors seeking immersive visualizations.</li>
          <li>Messaging pillars: immersive realism, technical accuracy, rapid turnaround, collaborative delivery, premium service tiers.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Core Experience Pillars</h2>
        <ol>
          <li>
            <strong>High-Impact Storytelling:</strong> Cinematic hero with looping background video or WebGL animation,
            overlayed with bold headline, subheadline, and dual CTAs (&ldquo;Book a Demo Now&rdquo; primary, &ldquo;Download Portfolio&rdquo; secondary).
          </li>
          <li>
            <strong>Service Showcase:</strong> Modular sections for 3D Walkthroughs, Blueprint Modeling, Building
            Elevations, VR Demos, 3D Printing. Each block must include explainer copy, feature bullets, outcome imagery,
            testimonial snippets, and CTA buttons.
          </li>
          <li>
            <strong>Interactive Portfolio:</strong> Filterable gallery featuring uploaded images, videos, and VR embeds
            (360° if available). Support lightbox playback, service-based filters, location tags, and quick-view CTA overlay.
          </li>
          <li>
            <strong>Conversion Engine:</strong> Sticky floating CTA ribbon on desktop, collapsible action dock on mobile,
            anchored CTA cards in every major section, and a smart lead form with conditional logic plus Calendly/booking
            integration.
          </li>
          <li>
            <strong>Authority Builders:</strong> Client logos carousel, quantified impact metrics, process timeline,
            FAQ accordion, awards/media mentions, and downloadable capability statement.
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Site Architecture &amp; Key Screens</h2>
        <ol>
          <li>
            <strong>Home:</strong> Hero, service suite, interactive portfolio sampler, immersive process, testimonials,
            CTA-rich pricing teaser, contact + location intelligence map.
          </li>
          <li>
            <strong>Services Overview:</strong> Grid of service cards funneling to detailed subpages with scope,
            deliverables, timelines, tech stack, and FAQs. Each subpage ends with packaged offers and CTA block.
          </li>
          <li>
            <strong>Portfolio Hub:</strong> Dynamic filters (industry, scale, media type). Each case study page features
            problem → solution → result storytelling, embedded media, BTS slider, toolset highlights, testimonial,
            cross-sell CTA.
          </li>
          <li>
            <strong>Solutions by Persona:</strong> Landing pages tailored for Developers, Architects, Marketers, Society Committees, using relevant pain points, outcomes, and CTAs.
          </li>
          <li>
            <strong>About &amp; Team:</strong> Studio origin story, leadership bios with headshots, methodology, sustainability &amp;
            data-security stance, behind-the-scenes reel, recruitment CTA.
          </li>
          <li>
            <strong>Resources:</strong> Blog, insights, eBooks, webinars. Integrate lead magnets with gated downloads and nurture automation.
          </li>
          <li>
            <strong>Contact &amp; Demo:</strong> Multi-step form capturing project type, budget, timeline, deliverables, reference uploads. Include instant chat widget, phone, WhatsApp, and office address.
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2>Content &amp; Asset Strategy</h2>
        <ul>
          <li>Upload all supplied photos, renders, walkthrough clips, and VR demo videos to a dedicated portfolio CPT with taxonomy for service, industry, and format.</li>
          <li>Optimize media with WebP, adaptive streaming (HLS) for videos, placeholder thumbnails, and lazy loading.</li>
          <li>Craft persuasive copy: benefit-driven headlines, scannable feature lists, transformation-focused storytelling, and proof points (metrics, testimonials, client counts).</li>
          <li>Insert contextual CTAs after each content block, ensuring mobile-first tap targets.</li>
          <li>Provide downloadable project sheets and sample blueprints via secure, trackable links.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Design Direction</h2>
        <ul>
          <li>Visual language: architectural minimalism meets immersive tech — dark mode default with neon accents, depth layers, glassmorphism panels.</li>
          <li>Typography: pair a bold geometric sans for headings with a highly legible grotesque for body text.</li>
          <li>Motion: smooth parallax, hover reveals, scroll-triggered micro-animations illustrating design process.</li>
          <li>Navigation: mega menu with service previews, sticky header, quick-access CTA buttons.</li>
          <li>Accessibility: WCAG 2.2 AA contrast, keyboard nav, transcripts for videos, ARIA labels for all interactive elements.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Technical Requirements</h2>
        <ul>
          <li>CMS: WordPress 6.x with block-based theme (preferably Full Site Editing) or custom headless setup using WP GraphQL + Next.js frontend if performance demands.</li>
          <li>Theme foundation: Build custom child theme leveraging modern tooling (Sass/SCSS, ESBuild/Vite). Enforce BEM naming, CSS variables, and design tokens.</li>
          <li>Plugins (curated): Advanced Custom Fields Pro, WPML/Polylang (if multilingual), Gravity Forms/Fluent Forms, Rank Math/Yoast, WP Rocket or Perfmatters, Smush/Imagify, LiteSpeed Cache (if host compatible), Disable Gutenberg bloat as needed.</li>
          <li>Booking integration: Calendly or HubSpot Meetings with inline embed + API hooks for lead capture.</li>
          <li>Forms automation: CRM integration (HubSpot, Zoho, or Pipedrive) with conditional routing and autoresponder sequences.</li>
          <li>Security: WAF (Sucuri/Cloudflare), reCAPTCHA v3/v2, two-factor for admins, least-privilege roles, routine backups.</li>
          <li>Hosting readiness: Optimize for Vercel/Headless or premium managed WP host (Kinsta/WPEngine) with CDN, caching layers, and staging workflows.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>SEO &amp; Performance Blueprint</h2>
        <ul>
          <li>Keyword clusters: 3D architectural visualization, 3D walkthrough India, VR real estate demo, 3D floor plan services, building elevation design studio.</li>
          <li>Implement structured data (Organization, Product/Service, FAQ, VideoObject) and Open Graph/Twitter cards per page.</li>
          <li>
            Adopt clean URL taxonomy:{" "}
            <code>/services/3d-walkthrough/</code>,{" "}
            <code>
              /portfolio/
              {"{project-name}"}
              /
            </code>
            ,{" "}
            <code>
              /resources/
              {"{topic}"}
              /
            </code>
            .
          </li>
          <li>Use server-side caching, critical CSS inlining, image CDNs, and minimal render-blocking assets. Target Lighthouse 90+ across all devices.</li>
          <li>Set up analytics stack: GA4 with enhanced measurement, Microsoft Clarity/Hotjar heatmaps, and conversion tracking for each CTA.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Conversion Framework</h2>
        <ul>
          <li>Global CTA: sticky &ldquo;Book a Demo Now&rdquo; button leading to modal with quick scheduler + lead form.</li>
          <li>Service CTAs: each service card includes primary CTA (Book Demo) and secondary CTA (Request Custom Quote).</li>
          <li>Portfolio CTAs: quick action overlay (Play Video | Explore Project | Book Similar Experience).</li>
          <li>Exit-intent popups: offer &ldquo;Free 3D Concept Review&rdquo; download in exchange for contact info.</li>
          <li>Checkout-ready flow for standardized packages: integrate WooCommerce or Easy Digital Downloads for rapid purchase with secure payment gateway.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Automation &amp; Integrations</h2>
        <ul>
          <li>Sync leads to CRM, trigger segmented email drips, and create Slack/Teams alerts for new inquiries.</li>
          <li>Embed WhatsApp Business API chat widget with pre-filled enquiry templates.</li>
          <li>Connect portfolio CPT updates to social channels via Zapier/Make for automated announcements.</li>
          <li>Integrate testimonial collection workflow (VideoAsk/VocalVideo) feeding into dynamic testimonial slider.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Quality Assurance Checklist</h2>
        <ul>
          <li>Cross-browser QA (Chrome, Safari, Firefox, Edge) and responsive testing across breakpoints (320px → 1920px).</li>
          <li>Validate HTML, CSS, accessibility, and schema markup. Confirm Core Web Vitals thresholds on staging.</li>
          <li>Verify all CTAs, forms, and booking integrations route to correct destinations with confirmation emails.</li>
          <li>Ensure all media assets are optimized, tagged, and have descriptive captions/tooltips.</li>
          <li>Implement backup, rollback, and staging deployment strategy before go-live.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Deliverables &amp; Handover</h2>
        <ul>
          <li>Fully configured WordPress site with documented admin guide, component library, and reusable block patterns.</li>
          <li>Design system tokens, brand guideline sheets, and source files (Figma/Adobe XD) delivered.</li>
          <li>Content plan with 90-day editorial calendar and SEO keyword map.</li>
          <li>Training session for Aayam Arts team covering content updates, lead management, analytics dashboards.</li>
          <li>Post-launch optimization roadmap (A/B tests, feature backlog, quarterly performance review).</li>
        </ul>
      </section>

      <footer id="book-demo" className={styles.footer}>
        <p>
          Execute this plan end-to-end to deliver a show-stopping WordPress platform that turns immersive 3D experiences
          into qualified leads and long-term partnerships for Aayam Arts.
        </p>
        <a className={styles.ctaButton} href="#book-demo">
          Book a Demo Now
        </a>
      </footer>
    </main>
  );
}
