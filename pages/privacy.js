import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import { Seo } from "@/components/common/Seo"

const PrivacyPolicy = () => {
  return (
    <>
      <Seo
        title='Privacy Policy | CodeMadeBiz'
        description='Privacy Policy for CodeMadeBiz — how we collect, use, and protect your information when you use our website and services.'
        path='/privacy'
      />
      <section className='agency bg-top legal-page'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='LEGAL' />
            <br />
            <br />
            <Title title='Privacy Policy' className='title-bg' as='h1' />
            <p>Last updated: July 24, 2026</p>
          </div>

          <div className='legal-content'>
            <p>
              CodeMadeBiz (“we”, “us”, or “our”) operates the website codemadebiz.com and related services for software development, AI solutions, and digital marketing. This Privacy Policy explains how we collect, use, store, and share information when you visit our site, contact us, or engage our services.
            </p>

            <h2>1. Information we collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>
                <strong>Contact details</strong> you provide (name, email, phone, company, project details) via forms, WhatsApp, email, consultation requests, or our on-site AI chat assistant.
              </li>
              <li>
                <strong>Chat messages</strong> you send through the website assistant (used to understand your requirements and guide you to the right offer or consultation).
              </li>
              <li>
                <strong>Usage data</strong> such as pages visited, device/browser type, approximate location, and referral source through analytics tools.
              </li>
              <li>
                <strong>Communication records</strong> related to sales, support, and project delivery.
              </li>
            </ul>

            <h2>2. How we use your information</h2>
            <p>We use information to:</p>
            <ul>
              <li>Respond to inquiries and book consultations</li>
              <li>Power our on-site AI assistant so it can qualify needs and recommend relevant services</li>
              <li>Prepare proposals and deliver contracted services</li>
              <li>Improve our website, offers, and customer experience</li>
              <li>Send service-related updates (and marketing only if you opt in or as permitted by law)</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>

            <h2>3. Sharing of information</h2>
            <p>
              We do not sell your personal information. We may share data with trusted processors who help us operate (for example hosting, analytics, form providers, communication tools, or AI model providers such as Google Gemini used to generate chat assistant replies), under appropriate confidentiality and security expectations. Messages you type in the chat assistant may be sent to that AI provider to generate a response. We may also disclose information if required by law or to protect against fraud or security threats.
            </p>

            <h2>4. Cookies and analytics</h2>
            <p>
              Our site may use cookies or similar technologies to understand traffic and improve performance. You can control cookies through your browser settings. Disabling cookies may affect some site features.
            </p>

            <h2>5. Data retention</h2>
            <p>
              We retain personal information only as long as needed for the purposes described above, including project records, legal, accounting, and dispute-resolution needs, unless a longer period is required by law.
            </p>

            <h2>6. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect personal information. No method of transmission or storage is fully secure; please contact us immediately if you believe your interaction with us has been compromised.
            </p>

            <h2>7. Your choices</h2>
            <p>Depending on applicable law, you may request access, correction, or deletion of personal information we hold about you, or object to certain processing. Contact us using the details below to make a request.</p>

            <h2>8. Third-party links</h2>
            <p>
              Our website may link to third-party sites or tools (including appointment forms and social profiles). Their privacy practices are governed by their own policies.
            </p>

            <h2>9. Children’s privacy</h2>
            <p>
              Our services are directed to businesses and professionals. We do not knowingly collect personal information from children under 16.
            </p>

            <h2>10. Changes</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when we do. Continued use of the site after updates constitutes acceptance of the revised policy where permitted by law.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions about this Privacy Policy:{" "}
              <a href='mailto:contact@codemadebiz.com'>contact@codemadebiz.com</a>
              <br />
              CodeMadeBiz · Bengaluru · +91 8762363186
            </p>

            <div className='offer-actions'>
              <Link href='/terms' className='button-primary secondary-cta'>
                Terms & Conditions
              </Link>
              <Link href='/contact' className='button-primary'>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
