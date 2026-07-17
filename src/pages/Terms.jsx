import {
  FaCalendarAlt,
  FaEnvelope,
  FaExclamationTriangle,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";

const serviceItems = [
  "Tree removal",
  "Tree trimming and pruning",
  "Stump grinding",
  "Emergency tree services",
  "Professional landscaping",
  "Lawn and yard maintenance",
  "Seasonal yard cleanup",
  "Land and brush clearing",
  "Storm damage cleanup",
  "Mulching and planting services",
];

const messageItems = [
  "Estimate updates",
  "Appointment confirmations",
  "Service reminders",
  "Project status notifications",
  "Emergency service updates",
  "Customer support messages",
  "Payment or invoice reminders",
  "Promotional offers related to our services",
];

function Terms() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0b3d22] pb-20 pt-32 text-white lg:pb-24 lg:pt-40">
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
              Terms &amp;
              <span className="ml-3 text-green-300">Conditions</span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-green-50/80">
              These Terms and Conditions explain the rules that apply when you
              use our website, request an estimate, communicate with our team,
              or hire Native Landscaping &amp; Tree Services.
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

      {/* Terms Content */}
      <section className="bg-[#f4f8f5] py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[0.3fr_1fr] lg:px-8">
          {/* Sticky Information Card */}
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[2rem] bg-[#10351f] p-7 text-white shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-300 text-xl text-[#10351f]">
                <FaLeaf />
              </span>

              <h2 className="mt-6 text-2xl font-black">
                Service Terms
              </h2>

              <p className="mt-4 leading-7 text-green-50/75">
                Please review these terms before submitting a service request,
                accepting an estimate, or scheduling work with our team.
              </p>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <FaExclamationTriangle className="mt-1 shrink-0 text-green-300" />

                  <p className="text-sm leading-6 text-green-50/75">
                    Website information is general guidance and does not
                    replace an on-site professional property inspection.
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-5 border-t border-white/10 pt-7">
                <a
                  href="tel:+13155550198"
                  className="flex items-start gap-4 transition-colors hover:text-green-300"
                >
                  <span className="mt-1 text-green-300">
                    <FaPhoneAlt />
                  </span>

                  <div>
                    <p className="text-sm text-green-50/60">
                      Customer Support
                    </p>

                    <p className="mt-1 font-bold">
                      (518) 671-8733
                    </p>
                  </div>
                </a>

                <a
                  href=""
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

          {/* Main Terms Card */}
          <div className="rounded-[2rem] border border-green-100 bg-white p-7 shadow-lg sm:p-10 md:p-14">
            <div className="space-y-12 text-gray-600">
              <p className="text-lg leading-8">
                Welcome to Native Landscaping &amp; Tree Services. By
                accessing this website, submitting a contact or estimate
                request, scheduling an appointment, communicating with us, or
                using any of our landscaping or tree care services, you agree
                to these Terms and Conditions.
              </p>

              <p className="text-lg leading-8">
                If you do not agree with any part of these terms, please do not
                use our website, contact forms, messaging program, or services.
              </p>

              <TermsSection number="01" title="Age Requirement">
                <p>
                  By using this website, submitting a form, requesting an
                  estimate, scheduling a service, or enrolling in our SMS
                  messaging program, you confirm that you are at least 18 years
                  of age and legally able to enter into an agreement.
                </p>
              </TermsSection>

              <TermsSection number="02" title="Terminology">
                <p>
                  “Client,” “Customer,” “You,” and “Your” refer to the
                  individual, property owner, tenant, business, or organization
                  using this website or requesting our services.
                </p>

                <p className="mt-4">
                  “Native Landscaping &amp; Tree Services,” “The Company,”
                  “We,” “Our,” and “Us” refer to Native Landscaping &amp; Tree
                  Services.
                </p>

                <p className="mt-4">
                  “Services” refers to landscaping, tree care, yard cleanup,
                  stump grinding, emergency response, and other property
                  maintenance work offered by the Company.
                </p>
              </TermsSection>

              <TermsSection number="03" title="Services We Provide">
                <p>
                  Native Landscaping &amp; Tree Services may provide the
                  following residential and commercial services:
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {serviceItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-green-100 bg-[#f1f7f3] px-4 py-3 font-semibold text-gray-700"
                    >
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#078c45]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6">
                  Service availability may depend on location, weather,
                  property access, crew availability, equipment requirements,
                  permit requirements, utility hazards, and the condition of
                  the property.
                </p>

                <p className="mt-4">
                  We reserve the right to accept, decline, delay, modify, or
                  cancel a requested service when necessary.
                </p>
              </TermsSection>

              <TermsSection number="04" title="Estimates and Pricing">
                <p>
                  We may provide free estimates based on the information
                  available during a phone consultation, website request,
                  photograph review, or on-site inspection.
                </p>

                <p className="mt-4">
                  Estimates are based on the visible property conditions,
                  expected labor, equipment requirements, disposal costs,
                  materials, travel, and other known factors at the time the
                  estimate is prepared.
                </p>

                <p className="mt-4">
                  Final pricing may change if hidden damage, unstable trees,
                  underground structures, access limitations, utility hazards,
                  additional debris, unexpected labor, permit requirements, or
                  other unforeseen conditions are discovered.
                </p>

                <p className="mt-4">
                  Any significant change to the approved estimate will be
                  discussed with the customer before additional work is
                  completed whenever reasonably possible.
                </p>
              </TermsSection>

              <TermsSection number="05" title="Acceptance of Estimates">
                <p>
                  An estimate becomes approved when the customer confirms
                  acceptance verbally, electronically, in writing, by text
                  message, by email, through an online form, or through another
                  agreed communication method.
                </p>

                <p className="mt-4">
                  Approval confirms that the customer understands the described
                  scope of work, estimated pricing, payment requirements, and
                  any limitations stated in the estimate.
                </p>
              </TermsSection>

              <TermsSection number="06" title="Scheduling and Appointments">
                <p>
                  Appointment dates and arrival times are estimates unless
                  specifically confirmed as fixed times.
                </p>

                <p className="mt-4">
                  Arrival times may change because of weather, traffic,
                  emergency calls, equipment problems, previous projects,
                  employee availability, or other circumstances beyond our
                  reasonable control.
                </p>

                <p className="mt-4">
                  We will make reasonable efforts to communicate delays or
                  scheduling changes using the contact details provided by the
                  customer.
                </p>
              </TermsSection>

              <TermsSection number="07" title="Cancellations and Rescheduling">
                <p>
                  Customers should provide reasonable notice when cancelling or
                  rescheduling an appointment.
                </p>

                <p className="mt-4">
                  A cancellation fee may apply when a customer cancels after
                  equipment, materials, permits, subcontractors, disposal
                  services, or crew time have already been arranged.
                </p>

                <p className="mt-4">
                  The Company may reschedule or cancel work due to unsafe
                  conditions, severe weather, emergencies, equipment
                  availability, staffing issues, or other unavoidable events.
                </p>
              </TermsSection>

              <TermsSection number="08" title="Property Access and Authorization">
                <p>
                  By scheduling work, you confirm that you own the property or
                  have proper authorization from the property owner to approve
                  the requested services.
                </p>

                <p className="mt-4">
                  The customer must provide safe and reasonable access to the
                  work area, including gates, driveways, parking areas, yards,
                  and equipment access points.
                </p>

                <p className="mt-4">
                  The customer is responsible for securing pets, removing
                  personal property, moving vehicles, and informing occupants
                  or neighbors when necessary.
                </p>
              </TermsSection>

              <TermsSection number="09" title="Property Boundaries and Utilities">
                <p>
                  The customer is responsible for accurately identifying
                  property lines, easements, underground utilities, irrigation
                  systems, septic systems, invisible fences, drainage systems,
                  landscape lighting, cables, pipes, and concealed structures.
                </p>

                <p className="mt-4">
                  Native Landscaping &amp; Tree Services is not responsible for
                  damage to unmarked or undisclosed underground systems,
                  concealed structures, or inaccurate property boundaries.
                </p>

                <p className="mt-4">
                  Utility locating services or permits may be required before
                  certain work begins.
                </p>
              </TermsSection>

              <TermsSection number="10" title="Safety and Worksite Conditions">
                <p>
                  Landscaping and tree care activities may involve dangerous
                  equipment, falling branches, heavy machinery, wood chips,
                  debris, noise, dust, and temporary access restrictions.
                </p>

                <p className="mt-4">
                  Customers, children, visitors, and pets must remain outside
                  the active work area unless authorized by the crew.
                </p>

                <p className="mt-4">
                  We reserve the right to stop or postpone work when conditions
                  may place employees, customers, property, utility systems, or
                  the public at risk.
                </p>
              </TermsSection>

              <TermsSection number="11" title="Weather Conditions">
                <p>
                  Services may be delayed, rescheduled, modified, or cancelled
                  because of rain, snow, ice, lightning, high winds, flooding,
                  extreme temperatures, soft ground, poor visibility, or other
                  unsafe environmental conditions.
                </p>

                <p className="mt-4">
                  Weather-related delays do not automatically cancel an
                  approved estimate or service agreement.
                </p>
              </TermsSection>

              <TermsSection number="12" title="Emergency Tree Services">
                <p>
                  Emergency response times vary depending on weather, road
                  access, crew availability, equipment availability, service
                  demand, utility involvement, and the severity of the hazard.
                </p>

                <p className="mt-4">
                  Submitting an emergency request does not guarantee immediate
                  arrival or same-day service.
                </p>

                <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
                  <div className="flex items-start gap-4">
                    <FaExclamationTriangle className="mt-1 shrink-0 text-orange-600" />

                    <p className="leading-7 text-orange-900">
                      If a tree or branch is touching a power line, do not
                      approach or touch it. Stay away from the area and contact
                      the utility provider or emergency services immediately.
                    </p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection number="13" title="Customer Responsibilities">
                <p>The customer agrees to:</p>

                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#078c45]">
                  <li>Provide accurate contact and property information</li>
                  <li>Provide safe access to the service area</li>
                  <li>Disclose known hazards and property restrictions</li>
                  <li>Secure pets and keep people away from the worksite</li>
                  <li>Remove vehicles and movable items when requested</li>
                  <li>Identify property boundaries and concealed systems</li>
                  <li>Obtain necessary owner, landlord, or association approval</li>
                  <li>Make payment according to the agreed terms</li>
                </ul>
              </TermsSection>

              <TermsSection number="14" title="Materials and Landscaping Results">
                <p>
                  Natural materials such as plants, grass, trees, mulch, soil,
                  and seed may vary in appearance, size, color, growth rate, and
                  performance.
                </p>

                <p className="mt-4">
                  Landscaping results may depend on weather, soil quality,
                  drainage, sunlight, irrigation, pests, wildlife, customer
                  maintenance, and other environmental factors.
                </p>

                <p className="mt-4">
                  Unless expressly stated in writing, we do not guarantee that
                  plants, grass, trees, or other living materials will survive
                  after installation.
                </p>
              </TermsSection>

              <TermsSection number="15" title="Cleanup and Debris Removal">
                <p>
                  Cleanup services will be completed according to the approved
                  estimate and agreed scope of work.
                </p>

                <p className="mt-4">
                  Small wood chips, sawdust, leaves, soil disturbance, minor
                  lawn impressions, or natural debris may remain after tree or
                  landscaping work.
                </p>

                <p className="mt-4">
                  Logs, firewood, mulch, branches, stumps, soil, rocks, or other
                  materials will only be removed when included in the approved
                  service agreement.
                </p>
              </TermsSection>

              <TermsSection number="16" title="Payment Terms">
                <p>
                  Payment requirements will be communicated in the estimate,
                  invoice, service agreement, or other written communication.
                </p>

                <p className="mt-4">
                  Deposits may be required for large projects, special
                  materials, permits, equipment rental, or scheduled crew time.
                </p>

                <p className="mt-4">
                  Final payment may be due upon completion unless a different
                  payment schedule has been agreed in writing.
                </p>

                <p className="mt-4">
                  Customers are responsible for applicable taxes, approved
                  additional work, late charges, collection expenses, or other
                  costs permitted by law.
                </p>
              </TermsSection>

              <TermsSection number="17" title="SMS Messaging Terms">
                <PolicySubheading title="Program Description" />

                <p className="mt-4">
                  By providing your mobile phone number and consenting to
                  receive messages, you agree to receive recurring automated or
                  manually sent text messages from Native Landscaping &amp;
                  Tree Services.
                </p>

                <p className="mt-4">
                  Messages may include:
                </p>

                <ul className="mt-5 list-disc space-y-3 pl-6 marker:text-[#078c45]">
                  {messageItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-5">
                  Consent to receive SMS messages is not required as a
                  condition of purchasing services.
                </p>

                <PolicySubheading title="Opt-Out" />

                <p className="mt-4">
                  You may stop receiving SMS messages at any time by replying{" "}
                  <strong className="text-[#10351f]">STOP</strong> to any
                  message. After opting out, you may receive one final
                  confirmation message.
                </p>

                <PolicySubheading title="Support" />

                <p className="mt-4">
                  For assistance, reply{" "}
                  <strong className="text-[#10351f]">HELP</strong> to any text
                  message or contact us directly.
                </p>

                <PolicySubheading title="Message Frequency" />

                <p className="mt-4">
                  Message frequency may vary depending on your estimate,
                  appointment, project activity, service requests, and
                  communication preferences.
                </p>

                <PolicySubheading title="Message and Data Rates" />

                <p className="mt-4">
                  Standard message and data rates may apply depending on your
                  wireless carrier and mobile service plan.
                </p>

                <PolicySubheading title="Carrier Liability" />

                <p className="mt-4">
                  Mobile carriers are not responsible for delayed or
                  undelivered messages. Message delivery depends on carrier
                  availability, network coverage, device compatibility, and
                  other factors outside our control.
                </p>
              </TermsSection>

              <TermsSection number="18" title="User-Submitted Information">
                <p>
                  When submitting a contact form, estimate request, review,
                  photograph, document, or other content, you confirm that the
                  information is accurate and that you have permission to share
                  it.
                </p>

                <p className="mt-4">
                  You agree not to submit unlawful, misleading, abusive,
                  harmful, infringing, confidential, or inappropriate content.
                </p>

                <p className="mt-4">
                  We may remove or disregard content that violates these Terms
                  and Conditions or applicable law.
                </p>
              </TermsSection>

              <TermsSection number="19" title="Website Use">
                <p>
                  You agree to use our website only for lawful purposes and not
                  to interfere with its security, operation, availability, or
                  functionality.
                </p>

                <p className="mt-4">
                  You may not attempt to gain unauthorized access to our
                  website, forms, systems, servers, customer data, or connected
                  services.
                </p>
              </TermsSection>

              <TermsSection number="20" title="Cookies">
                <p>
                  We may use cookies, analytics technologies, and similar tools
                  to improve website performance, understand visitor activity,
                  remember preferences, and provide a better experience.
                </p>

                <p className="mt-4">
                  Additional information about how we collect and use personal
                  information is available in our Privacy Policy.
                </p>
              </TermsSection>

              <TermsSection number="21" title="Intellectual Property">
                <p>
                  Unless otherwise stated, Native Landscaping &amp; Tree
                  Services owns or has permission to use the text, logos,
                  photographs, graphics, videos, service descriptions, website
                  design, and other content displayed on this website.
                </p>

                <p className="mt-4">
                  You may not copy, reproduce, modify, republish, distribute,
                  sell, or commercially use our website content without prior
                  written permission.
                </p>
              </TermsSection>

              <TermsSection number="22" title="Third-Party Links and Services">
                <p>
                  Our website may contain links to or use third-party services,
                  including contact form providers, map services, messaging
                  platforms, analytics tools, payment services, or social media
                  websites.
                </p>

                <p className="mt-4">
                  We do not control and are not responsible for the content,
                  privacy practices, security, accuracy, or availability of
                  third-party websites and services.
                </p>
              </TermsSection>

              <TermsSection number="23" title="Hyperlinking to Our Website">
                <p>
                  Organizations may link to our website provided that the link
                  is not misleading, does not falsely imply sponsorship or
                  endorsement, does not damage our reputation, and is relevant
                  to the linking website.
                </p>

                <p className="mt-4">
                  We may request removal of any link that we believe is
                  misleading, unlawful, inappropriate, or harmful.
                </p>
              </TermsSection>

              <TermsSection number="24" title="Disclaimer">
                <p>
                  Website content is provided for general informational
                  purposes and does not replace an on-site inspection,
                  professional assessment, or property-specific recommendation.
                </p>

                <p className="mt-4">
                  We do not guarantee that all website information will always
                  be complete, accurate, current, or suitable for every
                  property.
                </p>

                <p className="mt-4">
                  Photographs shown on the website may represent previous work
                  or examples and do not guarantee identical results for every
                  project.
                </p>
              </TermsSection>

              <TermsSection number="25" title="Limitation of Liability">
                <p>
                  To the fullest extent permitted by law, Native Landscaping
                  &amp; Tree Services will not be liable for indirect,
                  incidental, special, punitive, or consequential damages
                  resulting from use of this website, delayed appointments,
                  weather conditions, utility issues, third-party services, or
                  information submitted through online forms.
                </p>

                <p className="mt-4">
                  Nothing in these terms excludes liability that cannot legally
                  be excluded under applicable law.
                </p>
              </TermsSection>

              <TermsSection number="26" title="Indemnification">
                <p>
                  You agree to indemnify and hold harmless Native Landscaping
                  &amp; Tree Services, its owners, employees, contractors, and
                  representatives from claims, losses, damages, expenses, or
                  liabilities resulting from inaccurate information,
                  unauthorized service requests, property disputes, or your
                  violation of these Terms.
                </p>
              </TermsSection>

              <TermsSection number="27" title="Changes to These Terms">
                <p>
                  We may update these Terms and Conditions to reflect changes in
                  our services, business practices, technologies, or legal
                  requirements.
                </p>

                <p className="mt-4">
                  Updated terms will be published on this page with a revised
                  “Last Updated” date. Continued use of the website or services
                  after an update means you accept the revised terms.
                </p>
              </TermsSection>

              <TermsSection number="28" title="Governing Law">
                <p>
                  These Terms and Conditions are governed by the applicable
                  laws of the State of New York and the United States, without
                  regard to conflict-of-law principles.
                </p>

                <p className="mt-4">
                  Any dispute will be handled in a court with appropriate
                  jurisdiction in New York unless otherwise required by
                  applicable law.
                </p>
              </TermsSection>

              <TermsSection number="29" title="Severability">
                <p>
                  If any provision of these Terms and Conditions is found to be
                  invalid, unlawful, or unenforceable, the remaining provisions
                  will continue to remain effective.
                </p>
              </TermsSection>

              <TermsSection number="30" title="Contact Information">
                <p>
                  For questions about these Terms and Conditions, estimates,
                  services, appointments, payments, or SMS communications,
                  contact us using the details below.
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
                      value="(518) 671-8733"
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
              </TermsSection>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

function TermsSection({ number, title, children }) {
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

          <div className="mt-5 leading-8">
            {children}
          </div>
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

  return (
    <div className="flex items-start gap-4">
      {content}
    </div>
  );
}

export default Terms;