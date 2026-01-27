import { SITE } from "../lib/config";
import Section from "../components/Section";
import Card from "../components/Card";
import CTA from "../components/CTA";

export default function Page() {
  return (
    <main className="wrap">
      <header className="nav">
      <div className="brandRow">
  <img className="logo" src="/logo.png" alt={SITE.brand} />
</div>
        <div className="pill">{SITE.product} · 14 days · 6–10 min/day</div>
      </header>

      <Section className="hero">
      <h1>Love shouldn’t require bracing.</h1>
<p className="sub">
  A quiet, contained reset for the part of you that learned to stay alert in closeness.
  <br />
  <br />
  Fourteen days. A few minutes at a time. Nothing to prove.
</p>

        <div className="ctaRow">
          <CTA href={SITE.gumroadUrl}>Begin The Quiet Reset</CTA>
          <a className="btn secondary" href="#details">
            What’s inside
          </a>
        </div>

        <p className="fine">
          Not therapy. No oversharing. No pressure to move faster than your system allows. Just steadier ground.
        </p>
      </Section>

      <section className="grid">
      <Card title="When love becomes effort">
  At some point, connection stopped being neutral.
  <br /><br />
  Your body learned to listen for shifts. To track tone.
  To stay slightly ahead of what might come next.
  <br /><br />
  You didn’t imagine this. You adapted.
</Card>

<Card title="What this offers">
  This isn’t about insight. It’s about relief.
  <br /><br />
  The Quiet Reset is designed to help your nervous system remember what safety feels like
  inside connection — not after it ends.
</Card>

      </section>

      <Section id="details">
        <h2>What this is</h2>
        <Card>
        <p className="muted">
  <strong>The Quiet Reset: Relationships</strong> is a short, practical system to help you:
</p>

<ul className="list">
  <li>notice safety sooner than you notice threat</li>
  <li>release the habit of interpreting everything</li>
  <li>hold boundaries without rehearsing them</li>
  <li>experience closeness that doesn’t tighten your chest</li>
</ul>

        </Card>
      </Section>

      <section className="two">
        <Card title="What this is not">
          <ul className="list">
            <li>Couples therapy</li>
            <li>Trauma processing</li>
            <li>Attachment theory lectures</li>
            <li>“Fix your partner” scripts</li>
            <li>Motivation culture</li>
          </ul>
        </Card>

        <Card title="What you get">
          <ul className="list">
            <li>14 guided audios (6–10 minutes)</li>
            <li>14 one-page companion sheets</li>
            <li>Bonus audio: “Two Minutes After Conflict” (reusable)</li>
          </ul>
          <div style={{ marginTop: "16px" }}>

  <p className="muted" style={{ marginBottom: "4px" }}>
    Bonus audio preview
  </p>
  <p className="muted" style={{ marginBottom: "8px" }}>
    A brief audio sample, if you’d like to listen.
  </p>

  <audio
    controls
    preload="none"
    style={{ width: "100%" }}
  >
    <source
      src="/audio/bonus-two-minutes-after-conflict.mp3"
      type="audio/mpeg"
    />
    Your browser does not support the audio element.
  </audio>

  <p className="audioNote">
    Each recording includes very subtle binaural tones beneath the voice, offering gentle support when listened to with headphones, without requiring attention or effort.
  </p>
</div>

        </Card>
      </section>

      <Section id="outline">
  <h2>14-day structure</h2>
  <p className="muted">
  Fourteen days, arranged in three gentle phases—orientation, regulation, integration.
</p>
<p className="muted">
  Nothing here is meant to be rushed—this is designed to land.
</p>

  <div className="outline">
    <div className="card">
      <h3 className="cardTitle">Phase 1 · Orientation (Days 1–3)</h3>
      <ul className="list">
        <li>Day 1 — You’re Not Broken</li>
        <li>Day 2 — What Bracing Feels Like</li>
        <li>Day 3 — Baseline Exists</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="cardTitle">Phase 2 · Regulation in Connection (Days 4–9)</h3>
      <ul className="list">
        <li>Day 4 — Before the Spike</li>
        <li>Day 5 — During Contact</li>
        <li>Day 6 — After Contact</li>
        <li>Day 7 — Boundaries Without Bracing</li>
        <li>Day 8 — When You’re Misread</li>
        <li>Day 9 — Receiving Care</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="cardTitle">Phase 3 · Integration (Days 10–14)</h3>
      <ul className="list">
        <li>Day 10 — Conflict Without Collapse</li>
        <li>Day 11 — Grief for Old Patterns</li>
        <li>Day 12 — Choosing What Regulates You</li>
        <li>Day 13 — Trusting the Pause</li>
        <li>Day 14 — What Remains</li>
      </ul>
    </div>

    <div className="card">
      <h3 className="cardTitle">Bonus</h3>
      <ul className="list">
        <li>Two Minutes After Conflict</li>
      </ul>
    </div>
  </div>
</Section>

      <div className="hr" />

      <Section>
        <h2>Founding edition</h2>
        <Card>
          <div className="priceRow">
            <div className="price">{SITE.price}</div>
            <div className="priceNote">one-time</div>
          </div>

          <div className="badge">Simple · Contained · Built for high-functioning nervous systems</div>

          <div className="ctaBlock">
            <CTA href={SITE.gumroadUrl}>Begin The Quiet Reset</CTA>
          </div>
          <p className="muted">
  One-time purchase. Yours to keep.
</p>
<p className="muted">
  Lifetime access to the full program.
</p>
<p className="muted" style={{ marginTop: "12px" }}>
  Prefer the book? You can also find <em>The Quiet Reset</em> on Amazon.
</p>

<p>
  <a
    href="https://www.amazon.com/dp/B0GJQDXM15"
    target="_blank"
    rel="noopener noreferrer"
    className="amazonLink"
  >
    View the book on Amazon
  </a>
</p>

        </Card>
      </Section>

      <footer className="footer">
        <p>
          <strong>Note:</strong> This program is educational and self-guided. It is not medical advice or therapy.
        </p>
        <p>© {new Date().getFullYear()} {SITE.brand}</p>
      </footer>
    </main>
  );
}
