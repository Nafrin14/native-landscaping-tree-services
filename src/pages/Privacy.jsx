import {
  FaCalendarAlt,
  FaEnvelope,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";

function Privacy() {
  return (
    <MainLayout>
      {/* Privacy Hero */}
      <section className="relative overflow-hidden bg-[#0b3d22] pb-20 pt-32 text-white lg:pb-24 lg:pt-40">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.2em] text-green-200 backdrop-blur">
              <FaShieldAlt />
              Legal Information
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Privacy
              <span className="ml-3 text-green-300">Policy</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-green-50/80">
              Learn how Native Landscaping &amp; Tree Services collects, uses,
              stores, and protects your personal information.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-green-50">
                <FaCalendarAlt className="text-green-300" />
                Effective Date: January 19, 2025
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-green-50">
                <FaCalendarAlt className="text-green-300" />
                Last Updated: July 17, 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="bg-[#f4f8f5] py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.3fr_1fr] lg:px-8">
          {/* Left Information */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] bg-[#10351f] p-7 text-white shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-300 text-xl text-[#10351f]">
                <FaLeaf />
              </span>

              <h2 className="mt-6 text-2xl font-black">
                Your Privacy Matters
              </h2>

              <p className="mt-4 leading-7 text-green-50/75">
                We are committed to handling your personal information safely,
                responsibly, and transparently.
              </p>

              <div className="mt-7 space-y-5 border-t border-white/10 pt-7">
                <a
                  href="tel: (518) 671-8733"
                  className="flex items-start gap-4 transition-colors hover:text-green-300"
                >
                  <span className="mt-1 text-green-300">
                    <FaPhoneAlt />
                  </span>

                  <div>
                    <p className="text-sm text-green-50/60">
                      Privacy Support
                    </p>

                    <p className="mt-1 font-bold">(518) 671-8733</p>
                  </div>
                </a>

                <a
                  href="mailto:info@nativelandscaping.com"
                  className="flex items-start gap-4 transition-colors hover:text-green-300"
                >
                  <span className="mt-1 text-green-300">
                    <FaEnvelope />
                  </span>

                  <div>
                    <p className="text-sm text-green-50/60">
                      Email Address
                    </p>

                    <p className="mt-1 break-all font-bold">
                      
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="mt-1 text-green-300">
                    <FaMapMarkerAlt />
                  </span>

                  <div>
                    <p className="text-sm text-green-50/60">
                      Service Area
                    </p>

                    <p className="mt-1 font-bold">
                       New York and nearby areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Card */}
          <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-lg sm:p-10 md:p-14">
            <div className="space-y-12 text-gray-600">
              <p className="text-lg leading-8">
                Native Landscaping &amp; Tree Services is committed to
                protecting your privacy and personal information. This Privacy
                Policy explains how we collect, use, store, share, and protect
                information when you visit our website, request a free
                estimate, schedule landscaping or tree services, submit a
                contact form, or communicate with our team.
              </p>

              <PrivacySection
                number="01"
                title="Information We Collect"
              >
                <p>
                  We may collect personal information when you contact us,
                  request an estimate, schedule a service, submit a website
                  form, or communicate with our team.
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#078c45]">
                  <li>Your full name</li>
                  <li>Residential or commercial property address</li>
                  <li>Email address</li>
                  <li>Telephone or mobile phone number</li>
                  <li>
                    Details about landscaping, tree care, or cleanup services
                  </li>
                  <li>Appointment and estimate information</li>
                  <li>Messages and communication history</li>
                  <li>
                    Photographs, documents, or files submitted with a service
                    request
                  </li>
                  <li>
                    Website usage information such as browser type, device
                    information, and IP address
                  </li>
                </ul>
              </PrivacySection>

              <PrivacySection
                number="02"
                title="SMS Privacy Notice"
              >
                <PolicySubheading title="Collection of Mobile Information" />

                <p className="mt-4">
                  We collect your mobile phone number when you voluntarily
                  provide it through our website, estimate request form, phone
                  call, service appointment, or another direct communication
                  method.
                </p>

                <PolicySubheading title="How We Use SMS Information" />

                <p className="mt-4">
                  We may use your mobile phone number to send appointment
                  reminders, estimate notifications, service updates, project
                  status information, emergency service communications,
                  customer support messages, and promotional communications
                  where consent has been provided.
                </p>

                <p className="mt-4">
                  Message frequency may vary depending on your service request,
                  appointments, project activity, and communication
                  preferences.
                </p>

                <PolicySubheading title="SMS Data Sharing" />

                <p className="mt-4">
                  We do not sell, rent, or share mobile phone information or SMS
                  consent data with third parties or affiliates for their own
                  marketing or promotional purposes.
                </p>

                <p className="mt-4">
                  Text messaging originator opt-in data and consent will not be
                  shared with third parties, except service providers that help
                  us deliver messages or where disclosure is required by law.
                </p>
              </PrivacySection>

              <PrivacySection
                number="03"
                title="SMS Opt-In Information"
              >
                <p>
                  By providing your mobile phone number and selecting an
                  applicable consent option, you agree to receive text messages
                  from Native Landscaping &amp; Tree Services.
                </p>

                <p className="mt-4">
                  Messages may include service updates, free estimate
                  information, appointment reminders, project notifications,
                  emergency communications, customer support messages, and
                  promotional information.
                </p>

                <div className="mt-6 rounded-2xl border border-green-100 bg-[#f1f7f3] p-6">
                  <p>
                    Message and data rates may apply. Reply{" "}
                    <strong className="text-[#10351f]">STOP</strong> at any time
                    to unsubscribe from text messages.
                  </p>

                  <p className="mt-3">
                    Reply <strong className="text-[#10351f]">HELP</strong> for
                    assistance.
                  </p>

                  <p className="mt-3">
                    Message frequency may vary. Consent is not a condition of
                    purchasing any service.
                  </p>
                </div>
              </PrivacySection>

              <PrivacySection
                number="04"
                title="How We Use Your Information"
              >
                <p>We may use the information we collect to:</p>

                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#078c45]">
                  <li>Respond to questions and service requests</li>
                  <li>Prepare and manage free estimates</li>
                  <li>Schedule landscaping and tree care services</li>
                  <li>Communicate appointment and project updates</li>
                  <li>Provide emergency tree service support</li>
                  <li>Process website contact forms</li>
                  <li>Provide customer service and technical support</li>
                  <li>Improve our website and customer experience</li>
                  <li>Maintain business, estimate, and service records</li>
                  <li>Send promotional messages where consent is provided</li>
                  <li>Prevent fraud, misuse, or security problems</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ul>
              </PrivacySection>

              <PrivacySection
                number="05"
                title="Mobile Information Sharing Statement"
              >
                <p>
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes.
                </p>

                <p className="mt-4">
                  All categories of information described in this Privacy
                  Policy exclude text messaging originator opt-in data and
                  consent. This information will not be shared with third
                  parties, except where necessary to provide messaging services
                  or comply with applicable law.
                </p>
              </PrivacySection>

              <PrivacySection
                number="06"
                title="How We Share Information"
              >
                <p>
                  Native Landscaping &amp; Tree Services does not sell or rent
                  your personal information.
                </p>

                <p className="mt-4">
                  We may share limited information with trusted service
                  providers that help us operate our website, process contact
                  forms, manage customer communications, schedule services,
                  deliver text messages, maintain business systems, or provide
                  analytics.
                </p>

                <p className="mt-4">
                  These service providers may only use personal information as
                  necessary to perform services on our behalf.
                </p>

                <p className="mt-4">
                  We may disclose information when required by law, court order,
                  government request, legal process, or when necessary to
                  protect our company, customers, employees, property, or
                  others.
                </p>
              </PrivacySection>

              <PrivacySection
                number="07"
                title="Cookies and Tracking Technologies"
              >
                <p>
                  Our website may use cookies, analytics technologies, and
                  similar tools to improve website performance, understand how
                  visitors use our website, remember user preferences, and
                  provide a better browsing experience.
                </p>

                <p className="mt-4">
                  Cookies generally do not store sensitive personal
                  information. You can control or remove cookies through your
                  browser settings. Some website features may not function
                  correctly when cookies are disabled.
                </p>
              </PrivacySection>

              <PrivacySection
                number="08"
                title="Third-Party Services and Links"
              >
                <p>
                  Our website may use or contain links to third-party services,
                  including contact form providers, customer relationship
                  management platforms, messaging providers, analytics tools,
                  map services, and social media platforms.
                </p>

                <p className="mt-4">
                  Native Landscaping &amp; Tree Services is not responsible for
                  the privacy practices, content, or security of third-party
                  websites and services. We recommend reviewing their privacy
                  policies before providing personal information.
                </p>
              </PrivacySection>

              <PrivacySection
                number="09"
                title="Data Security"
              >
                <p>
                  We use reasonable administrative, technical, and
                  organizational safeguards designed to protect personal
                  information from unauthorized access, disclosure, alteration,
                  destruction, loss, or misuse.
                </p>

                <p className="mt-4">
                  However, no method of internet transmission, electronic
                  storage, or digital security can be guaranteed to be
                  completely secure.
                </p>
              </PrivacySection>

              <PrivacySection
                number="10"
                title="Data Retention"
              >
                <p>
                  We retain personal information only for as long as reasonably
                  necessary to provide requested services, manage customer
                  relationships, maintain business records, resolve disputes,
                  enforce agreements, and comply with legal obligations.
                </p>

                <p className="mt-4">
                  SMS consent and opt-in records may be retained as required to
                  demonstrate compliance with applicable communication and
                  messaging requirements.
                </p>
              </PrivacySection>

              <PrivacySection
                number="11"
                title="Your Privacy Rights"
              >
                <p>
                  Depending on your location and applicable law, you may have
                  the right to:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#078c45]">
                  <li>Request access to your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of personal information</li>
                  <li>Request a copy of certain personal information</li>
                  <li>Withdraw consent for certain communications</li>
                  <li>Opt out of SMS or promotional communications</li>
                  <li>Object to or restrict certain processing activities</li>
                </ul>

                <p className="mt-5">
                  To submit a privacy request, contact us using the phone number
                  or email address listed below. We may need to verify your
                  identity before completing the request.
                </p>
              </PrivacySection>

              <PrivacySection
                number="12"
                title="California Privacy Rights"
              >
                <p>
                  California residents may have additional rights under the
                  California Consumer Privacy Act and related privacy laws,
                  including the rights to know, correct, delete, and limit
                  certain uses of personal information where applicable.
                </p>

                <p className="mt-4">
                  Native Landscaping &amp; Tree Services does not sell personal
                  information as that term is generally defined under the
                  California Consumer Privacy Act.
                </p>
              </PrivacySection>

              <PrivacySection
                number="13"
                title="International Privacy Rights"
              >
                <p>
                  Where the General Data Protection Regulation or similar laws
                  apply, personal information may be processed based on your
                  consent, the need to provide requested services, compliance
                  with legal obligations, or our legitimate business
                  interests.
                </p>
              </PrivacySection>

              <PrivacySection
                number="14"
                title="Children’s Privacy"
              >
                <p>
                  Our website and services are intended for adults. We do not
                  knowingly collect personal information from children under 13
                  years of age.
                </p>

                <p className="mt-4">
                  Our SMS messaging program is only available to individuals
                  who are at least 18 years old.
                </p>
              </PrivacySection>

              <PrivacySection
                number="15"
                title="Changes to This Privacy Policy"
              >
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our services, technologies, business practices, or
                  legal requirements.
                </p>

                <p className="mt-4">
                  Any changes will be published on this page with an updated
                  “Last Updated” date. We encourage visitors to review this
                  policy periodically.
                </p>
              </PrivacySection>

              <PrivacySection
                number="16"
                title="Contact Information"
              >
                <p>
                  For privacy questions, SMS support, opt-out requests, or
                  requests relating to personal information, contact Native
                  Landscaping &amp; Tree Services using the information below.
                </p>

                <div className="mt-7 rounded-[1.75rem] border border-green-100 bg-[#f1f7f3] p-6 sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ContactItem
                      icon={<FaLeaf />}
                      label="Company"
                      value="Native Landscaping & Tree Services"
                    />

                    <ContactItem
                      icon={<FaMapMarkerAlt />}
                      label="Service Area"
                      value=" New York and nearby areas"
                    />

                    <ContactItem
                      icon={<FaPhoneAlt />}
                      label="Phone"
                      value=" (518) 671-8733"
                      href="tel: (518) 671-8733"
                    />

                    <ContactItem
                      icon={<FaEnvelope />}
                      label="Email"
                      value=""
                      href=""
                    />
                  </div>
                </div>
              </PrivacySection>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

function PrivacySection({ number, title, children }) {
  return (
    <section className="border-b border-green-100 pb-12 last:border-b-0 last:pb-0">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-sm font-black text-[#078c45]">
          {number}
        </span>

        <div className="flex-1">
          <h2 className="text-2xl font-black text-[#10351f] md:text-3xl">
            {title}
          </h2>

          <div className="mt-5 leading-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function PolicySubheading({ title }) {
  return (
    <h3 className="mt-8 text-xl font-black text-[#10351f] first:mt-0">
      {title}
    </h3>
  );
}

function ContactItem({ icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#078c45] shadow-sm">
        {icon}
      </span>

      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <p className="mt-1 font-extrabold text-[#10351f]">
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-4 rounded-2xl transition-colors hover:text-[#078c45]"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4">{content}</div>;
}

export default Privacy;