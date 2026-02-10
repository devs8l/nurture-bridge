import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Logo */}
            <div className="relative z-20 flex items-center justify-between w-full pt-6 md:pt-6 px-4 md:px-8">
                <div className="flex-1 flex justify-start">
                    <img
                        src="/cohera-logo.svg"
                        alt="Cohera Logo"
                        className="h-8 md:h-12 w-auto"
                    />
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb currentPage="Privacy Policy" />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-32">
                <h1 className="scto-head text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 text-center">
                    Privacy Policy
                </h1>

                <p className="roboto text-base md:text-md text-gray-600 mb-8 md:mb-12 text-center">
                    Effective: 10th September 2025
                </p>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            We at Nurture Bridge Tech Private Limited (together with our affiliates, "Nurture Bridge Tech," "we," "our," or "us") respect your privacy and are strongly committed to safeguarding the information we obtain from or about you. This Privacy Policy describes our practices with respect to Personal Information we collect from or about you when you use our websites, applications, and services, including our Cohera platform (collectively, the "Services"). This Privacy Policy does not apply to data we process solely on behalf of customers of our business offerings, such as integrations with electronic medical records (EMRs), APIs, or enterprise deployments. Our use of that data is governed by separate customer agreements.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            1. Personal Information We Collect
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            We collect Personal Information relating to you as follows:
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <h3 className="roboto text-lg font-semibold text-gray-900 mb-2">Information you provide to us</h3>
                                <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                                    <li><strong>Account Information:</strong> When you create an account or engage with our Services, we collect your name, contact details, account credentials, payment information, and transaction history.</li>
                                    <li><strong>Healthcare Information:</strong> When using our healthcare products (e.g., Cohera), we may process clinical data, patient records, or medical notes — only with proper authorization and in compliance with HIPAA, GDPR, DPDP Act 2023, and other applicable laws.</li>
                                    <li><strong>User Content:</strong> Information you input into our Services, such as uploads, survey responses, or documents.</li>
                                    <li><strong>Communication Information:</strong> If you contact us, we collect your name, contact details, and the contents of your messages.</li>
                                    <li><strong>Event & Marketing Data:</strong> Information you provide when attending our events, signing up for newsletters, or participating in promotional activities.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="roboto text-lg font-semibold text-gray-900 mb-2">Information we receive automatically from your use of the Services</h3>
                                <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                                    <li><strong>Log Data:</strong> IP address, browser type, device type, operating system, date/time of requests, and how you interact with our Services.</li>
                                    <li><strong>Usage Data:</strong> Features used, actions taken, time spent on Services, geolocation (if enabled), and engagement statistics.</li>
                                    <li><strong>Device Information:</strong> Device identifiers, operating system, mobile/desktop environment, browser details.</li>
                                    <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance user experience, administer our Services, and collect analytics.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            2. How We Use Personal Information
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            We may use your Personal Information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                            <li>To provide, operate, and maintain our Services.</li>
                            <li>To deliver AI-powered features such as clinical pre-charting, data insights, and fraud detection.</li>
                            <li>To improve and develop our Services, conduct research, and build safer AI systems.</li>
                            <li>To personalize user experiences and provide recommendations.</li>
                            <li>To communicate with you, including sending updates, security alerts, and promotional messages.</li>
                            <li>To ensure compliance with legal, regulatory, and contractual obligations (HIPAA, GDPR, CCPA, DPDP Act, etc.).</li>
                            <li>To detect, prevent, and respond to fraud, misuse, or security threats.</li>
                            <li>To process payments and manage billing.</li>
                            <li>To support business transfers, acquisitions, or restructuring.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            3. Disclosure of Personal Information
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            We may disclose Personal Information under the following circumstances:
                        </p>
                        <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                            <li><strong>Vendors & Service Providers:</strong> For hosting, cloud storage, analytics, payment processing, or customer support.</li>
                            <li><strong>Healthcare Partners:</strong> Hospitals, clinics, EMR/EHR providers (subject to BAA/contractual agreements).</li>
                            <li><strong>Legal Obligations:</strong> Where required by law, regulation, or valid legal process.</li>
                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or restructuring.</li>
                            <li><strong>Affiliates:</strong> Within the Nurture Bridge Tech group of companies.</li>
                            <li><strong>Other Users or Third Parties You Choose to Share Information With:</strong> Where you intentionally share data (e.g., collaboration features).</li>
                        </ul>
                        <p className="roboto text-base md:text-lg leading-relaxed mt-4">
                            <strong>We do not sell your personal information.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            4. Your Rights
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            Depending on your jurisdiction (GDPR, CCPA, DPDP Act 2023, HIPAA), you may have rights to:
                        </p>
                        <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                            <li>Access, correct, or delete your data.</li>
                            <li>Restrict or object to processing.</li>
                            <li>Request data portability.</li>
                            <li>Withdraw consent at any time.</li>
                            <li>File a complaint with a relevant supervisory authority.</li>
                        </ul>
                        <p className="roboto text-base md:text-lg leading-relaxed mt-4">
                            Requests can be submitted to <a href="mailto:hello@cohera.health" className="text-gray-700 underline hover:text-gray-900">hello@cohera.health</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            5. Children
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            Our Services are not directed to children under 13. We do not knowingly collect Personal Information from children under this age. If we become aware that we have collected such data, we will delete it promptly. If you are between 13–18, parental or guardian consent is required.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            6. Security & Retention
                        </h2>
                        <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                            <li>We employ industry-standard security measures, including encryption, firewalls, role-based access, and routine audits.</li>
                            <li>We retain Personal Information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law.</li>
                            <li>Healthcare-related data is managed under the "minimum necessary principle" and deleted or anonymized once no longer needed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            7. International Users & Data Transfers
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            Your Personal Information may be stored and processed in India, the United States, or other jurisdictions where Nurture Bridge Tech operates. We implement safeguards such as Standard Contractual Clauses (SCCs) and HIPAA-compliant agreements to ensure protection.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            8. Updates to This Privacy Policy
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            We may update this Privacy Policy periodically. When we do, we will revise the "Effective Date" above and post the updated version on this page. In cases where required by law, we will notify you through additional means (e.g., email or in-app notifications).
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            9. Contact Us
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            If you have questions about this Privacy Policy or our privacy practices:
                        </p>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            <strong>Email:</strong> <a href="mailto:hello@cohera.health" className="text-gray-700 underline hover:text-gray-900">hello@cohera.health</a>
                        </p>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            <strong>Company Name:</strong> Nurture Bridge Tech Private Limited
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-4 py-4">
                <Footer openContactForm={() => {}} />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
