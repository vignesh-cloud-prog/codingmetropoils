import Link from "next/link"
import { Title, TitleSm } from "@/components/common/Title"
import { Seo } from "@/components/common/Seo"

const TermsAndConditions = () => {
  return (
    <>
      <Seo
        title='Terms & Conditions | CodeMadeBiz'
        description='Terms & Conditions for using CodeMadeBiz websites, consultations, and software, AI, and marketing services.'
        path='/terms'
      />
      <section className='agency bg-top legal-page'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='LEGAL' />
            <br />
            <br />
            <Title title='Terms & Conditions' className='title-bg' as='h1' />
            <p>Last updated: July 24, 2026</p>
          </div>

          <div className='legal-content'>
            <p>
              These Terms & Conditions (“Terms”) govern your use of the CodeMadeBiz website and the software development, AI, CRM, and digital marketing services we provide. By accessing our site or engaging our services, you agree to these Terms.
            </p>

            <h2>1. About CodeMadeBiz</h2>
            <p>
              CodeMadeBiz provides technology and marketing solutions for local SMBs, startups, and enterprise clients, including websites, apps, AI agents and workflows, CRM dashboards, and growth services. Specific deliverables, timelines, and fees are defined in a proposal, statement of work, or written agreement for each engagement.
            </p>

            <h2>2. Website use</h2>
            <ul>
              <li>You may browse our site for lawful, informational, and business purposes.</li>
              <li>You agree not to misuse the site, attempt unauthorized access, scrape content at scale, or interfere with its operation.</li>
              <li>Site content (text, branding, designs, and materials) is owned by CodeMadeBiz or its licensors and may not be copied for commercial use without permission.</li>
            </ul>

            <h2>3. Consultations and inquiries</h2>
            <p>
              Booking a consultation or submitting a form does not create a binding project contract. We may accept or decline work at our discretion. Any quotes provided are estimates unless expressly stated as fixed in a signed agreement.
            </p>

            <h2>4. Services and plans</h2>
            <p>
              Descriptions of plans (Launch, Growth, Scale), AI services, MVP packages, and Website + CRM offerings on our site are general. The final scope, assumptions, and exclusions in your written agreement control. Change requests outside agreed scope may require additional fees and revised timelines.
            </p>

            <h2>5. Client responsibilities</h2>
            <p>When you hire us, you agree to:</p>
            <ul>
              <li>Provide accurate information, timely feedback, and required access (domains, accounts, content, approvals)</li>
              <li>Ensure you have rights to materials you supply (logos, copy, data, customer information)</li>
              <li>Use delivered software and AI tools in compliance with applicable laws and third-party platform terms</li>
            </ul>

            <h2>6. Payments</h2>
            <p>
              Payment terms are set in your proposal or invoice. Work may pause if invoices are overdue. Fees are generally non-refundable once work corresponding to a milestone has started, unless otherwise agreed in writing.
            </p>

            <h2>7. Intellectual property</h2>
            <p>
              Upon full payment of applicable fees, you receive the rights to project deliverables specified in your agreement (typically a license or assignment of custom work product). We retain ownership of pre-existing tools, frameworks, libraries, and know-how. We may showcase non-confidential work in our portfolio unless you request otherwise in writing.
            </p>

            <h2>8. AI and third-party services</h2>
            <p>
              AI features and integrations may rely on third-party models or platforms. Outputs can be inaccurate or incomplete; you are responsible for reviewing AI-assisted content and decisions before use in production or customer-facing contexts. Availability of third-party APIs may change outside our control.
            </p>

            <h2>9. Confidentiality</h2>
            <p>
              Each party agrees to protect confidential information shared during an engagement and use it only for delivering or receiving the services, except where disclosure is required by law or information is already public.
            </p>

            <h2>10. Disclaimer and limitation of liability</h2>
            <p>
              The website is provided “as is.” To the fullest extent permitted by law, CodeMadeBiz is not liable for indirect, incidental, special, or consequential damages arising from site use or services. Our total liability for a paid engagement is limited to the fees paid for that engagement in the three months preceding the claim, unless a different cap is stated in your agreement.
            </p>

            <h2>11. Warranties</h2>
            <p>
              We warrant that services will be performed in a professional manner consistent with industry practice. Except as expressly stated in a written agreement, we disclaim other warranties, including merchantability or fitness for a particular purpose.
            </p>

            <h2>12. Termination</h2>
            <p>
              Either party may terminate an engagement as allowed in the applicable agreement. Upon termination, you remain responsible for fees for work performed. Sections that by nature should survive (IP, confidentiality, liability, payment) will survive termination.
            </p>

            <h2>13. Governing law</h2>
            <p>
              These Terms are governed by the laws of India. Courts in Bengaluru, Karnataka shall have exclusive jurisdiction, subject to any different dispute clause in a signed client agreement.
            </p>

            <h2>14. Changes</h2>
            <p>
              We may update these Terms periodically. The “Last updated” date will reflect changes. Continued use of the website after updates constitutes acceptance where permitted by law. Material changes to an active paid engagement require written agreement.
            </p>

            <h2>15. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a href='mailto:contact@codemadebiz.com'>contact@codemadebiz.com</a>
              <br />
              CodeMadeBiz · Bengaluru · +91 8762363186
            </p>

            <div className='offer-actions'>
              <Link href='/privacy' className='button-primary secondary-cta'>
                Privacy Policy
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

export default TermsAndConditions
