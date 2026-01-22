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
        </Card>
      </section>

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
            <p className="fine">Founding pricing can end any time you choose. Keep it calm.</p>
          </div>
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
