import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Footer from "../components/layout/Footer";

const TermsOfUse = () => {
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
            <Breadcrumb currentPage="Terms of Use" />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-32">
                <h1 className="scto-head text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 text-center">
                    Terms of Use
                </h1>

                <p className="roboto text-base md:text-md text-gray-600 mb-8 md:mb-12 text-center">
                    Effective: 10th September 2025
                </p>

                <div className="space-y-8 text-gray-700">
                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            By accessing and using Cohera's website and services, you accept and agree to be bound by 
                            the terms and provision of this agreement. If you do not agree to abide by the above, please 
                            do not use this service.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            2. Use License
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed mb-4">
                            Permission is granted to temporarily access the materials (information or software) on 
                            Cohera's website for personal, non-commercial transitory viewing only. This is the grant of 
                            a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc list-inside roboto text-base md:text-lg leading-relaxed space-y-2 ml-4">
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any commercial purpose or for any public display;</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            3. Service Description
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            Cohera provides an AI-powered platform for autism care coordination and early intervention. 
                            We reserve the right to modify, suspend, or discontinue any aspect of our services at any 
                            time without notice. We also reserve the right to refuse service to anyone for any reason 
                            at any time.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            4. User Responsibilities
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            You are responsible for maintaining the confidentiality of your account and password. You 
                            agree to accept responsibility for all activities that occur under your account or password. 
                            You must notify us immediately upon becoming aware of any breach of security or unauthorized 
                            use of your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            5. Disclaimer
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            The materials on Cohera's website are provided on an 'as is' basis. Cohera makes no 
                            warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                            including, without limitation, implied warranties or conditions of merchantability, fitness 
                            for a particular purpose, or non-infringement of intellectual property.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            6. Limitations
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            In no event shall Cohera or its suppliers be liable for any damages (including, without 
                            limitation, damages for loss of data or profit, or due to business interruption) arising 
                            out of the use or inability to use the materials on Cohera's website, even if Cohera or a 
                            Cohera authorized representative has been notified orally or in writing of the possibility 
                            of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            7. Modifications
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            Cohera may revise these terms of service at any time without notice. By using this website, 
                            you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section>
                        <h2 className="helius text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                            8. Governing Law
                        </h2>
                        <p className="roboto text-base md:text-lg leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws and 
                            you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <div className="px-4   py-4">
                <Footer openContactForm={() => {}} />
            </div>
        </div>
    );
};

export default TermsOfUse;
