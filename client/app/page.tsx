import styles from "./page.module.css";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function SendryLanding() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <div className={styles.logo}>📧 Sendry</div>
            <span className={styles.wipBadge}>Under Development</span>
          </div>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Email Deliverability Monitoring</h1>
          <p className={styles.heroSubtitle}>
            Protect your sender reputation and ensure your emails reach the inbox, not spam.
          </p>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <Feature
              icon="📊"
              title="Reputation Monitoring"
              description="Track domain and IP reputation across major email providers"
            />
            <Feature
              icon="🔐"
              title="Authentication Checks"
              description="Validate SPF, DKIM, and DMARC configurations automatically"
            />
            <Feature
              icon="⚡"
              title="Real-Time Alerts"
              description="Get notified of issues before they impact your campaigns"
            />
            <Feature
              icon="📈"
              title="Health Score"
              description="Monitor your deliverability health with a simple dashboard"
            />
            <Feature
              icon="🚨"
              title="Blacklist Detection"
              description="Automatic monitoring of major email blacklists"
            />
            <Feature
              icon="🌐"
              title="Multi-Domain Support"
              description="Manage and monitor multiple domains from one place"
            />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2026 Sendry. Currently under active development.</p>
        </div>
      </footer>
    </>
  );
}
