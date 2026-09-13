import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <style>{`
        .terms-container {
          max-width: 1000px;
          margin: 40px auto;
          padding: 40px;
          background: #ffffff;
          color: #333333;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.7;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .terms-container h1 {
          color: #ff2490;
          text-decoration: underline;
          text-decoration-thickness: 4px;
          text-underline-offset: 5px;
          font-size: 32px;
          margin-bottom: 25px;
        }

        .terms-container h2 {
          color: #ff2490;
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
          font-size: 24px;
          margin-top: 35px;
          margin-bottom: 15px;
        }

        .terms-container h3 {
          color: #ff2490;
          text-decoration: underline;
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
          font-size: 18px;
          margin-top: 24px;
          margin-bottom: 8px;
        }

        .terms-container p {
          font-size: 15px;
          margin: 10px 0;
        }

        .terms-container ul {
          padding-left: 30px;
          margin: 10px 0 20px;
        }

        .terms-container li {
          margin-bottom: 7px;
          font-size: 15px;
        }

        .terms-container hr {
          border: none;
          border-top: 1px solid #eeeeee;
          margin: 30px 0;
        }

        .contact-box {
          background: #fff5f8;
          border-left: 4px solid #ff2490;
          padding: 15px 20px;
          margin: 20px 0;
          border-radius: 6px;
        }

        .terms-footer {
          margin-top: 45px;
          padding: 20px;
          background: #fff5f8;
          border-radius: 8px;
          border: 1px solid #f8bbd0;
        }

        .terms-footer p {
          margin: 0;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .terms-container {
            margin: 15px;
            padding: 20px;
            border-radius: 8px;
          }

          .terms-container h1 {
            font-size: 25px;
          }

          .terms-container h2 {
            font-size: 21px;
          }

          .terms-container h3 {
            font-size: 17px;
          }

          .terms-container p,
          .terms-container li {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="terms-container">

        <h1>FemiDo User - TERMS AND CONDITIONS</h1>

        <p>
          <strong>Effective Date:</strong> [DD Month 2026]
        </p>

        <p>
          These Terms and Conditions ("Terms") govern your access to and use
          of the FemiDo mobile application, website, and all related services
          (collectively, the "Platform"). Please read these Terms carefully
          before using the Platform.
        </p>

        <p>
          By accessing, registering for, or using the Platform, you acknowledge
          that you have read, understood, and agree to be bound by these Terms,
          our Privacy Policy, and any additional policies or guidelines
          published by FemiDo from time to time. If you do not agree to these
          Terms, you must not access or use the Platform.
        </p>

        <hr />

        {/* 1 */}
        <section>
          <h2>1. Introduction</h2>

          <h3>1.1 About FemiDo</h3>

          <p>
            FemiDo is a technology platform operated by{" "}
            <strong>MLOCK INNOVATIONS LLP</strong> ("FemiDo," "Company," "we,"
            "us," or "our"), a company incorporated under the laws of India
            with its registered office at{" "}
            <strong>
              139, Uday Nagar, Indore Kanadia Road, Indore, Madhya Pradesh,
              India, 452016
            </strong>.
          </p>

          <p>
            The Platform enables Riders to connect with independent Drivers
            for transportation and related mobility services. Unless expressly
            stated otherwise, FemiDo acts solely as a technology intermediary
            facilitating connections between Riders and Drivers and does not
            itself provide transportation services.
          </p>

          <h3>1.2 Scope of the Terms</h3>

          <p>These Terms apply to all users of the Platform, including:</p>

          <ul>
            <li>Riders;</li>
            <li>Drivers or Driver Partners;</li>
            <li>Visitors to the Platform;</li>
            <li>Registered users;</li>
            <li>Any other individual accessing or using the Services.</li>
          </ul>

          <h3>1.3 Additional Policies</h3>

          <p>Your use of the Platform is also subject to:</p>

          <ul>
            <li>FemiDo Privacy Policy;</li>
            <li>Community Guidelines;</li>
            <li>Safety Policies;</li>
            <li>Cancellation and Refund Policy;</li>
            <li>Driver Partner Policies;</li>
            <li>Any other policies or notices published by FemiDo.</li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2>2. Acceptance of the Terms</h2>

          <h3>2.1 Agreement</h3>
          <p>
            By creating an account, accessing the Platform, booking a ride,
            providing transportation services, or otherwise using the Services,
            you agree to comply with these Terms.
          </p>

          <h3>2.2 Legally Binding Contract</h3>
          <p>
            These Terms constitute a legally binding agreement between you and
            FemiDo. If you use the Platform on behalf of a company or
            organization, you represent that you have authority to bind that
            entity to these Terms.
          </p>

          <h3>2.3 Changes to the Terms</h3>
          <p>
            FemiDo may modify these Terms from time to time to reflect changes
            in legal requirements, business practices, or Platform
            functionality.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2>3. Definitions</h2>

          <h3>3.1 "Account"</h3>
          <p>
            An account created by a User to access and use the Platform.
          </p>

          <h3>3.2 "Driver" or "Driver Partner"</h3>
          <p>
            An independent individual or transportation provider authorized by
            FemiDo to accept ride requests through the Platform.
          </p>

          <h3>3.3 "Platform"</h3>
          <p>
            The FemiDo mobile application, website, software, systems,
            interfaces, and related technology used to provide the Services.
          </p>

          <h3>3.4 "Ride"</h3>
          <p>
            A transportation service requested through the Platform and
            accepted by a Driver.
          </p>

          <h3>3.5 "Rider"</h3>
          <p>
            A User who requests or receives transportation services through
            the Platform.
          </p>

          <h3>3.6 "Services"</h3>
          <p>
            All services, features, technologies, software, payment
            facilities, customer support, safety features, and other
            functionality offered through the Platform.
          </p>

          <h3>3.7 "User"</h3>
          <p>
            Any person who accesses or uses the Platform, including Riders,
            Drivers, visitors, and registered users.
          </p>

          <h3>3.8 "Content"</h3>
          <p>
            Any text, images, videos, ratings, reviews, communications,
            documents, software, or other material available on or submitted
            through the Platform.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2>4. Eligibility</h2>

          <h3>4.1 Minimum Age</h3>
          <p>
            Users must be at least eighteen (18) years of age or otherwise
            legally competent to enter into a binding contract under
            applicable law.
          </p>

          <h3>4.2 Legal Capacity</h3>
          <p>By using the Platform, you represent and warrant that:</p>

          <ul>
            <li>You are legally capable of entering into binding agreements;</li>
            <li>You will comply with applicable laws;</li>
            <li>The information provided by you is accurate and complete;</li>
            <li>You are not prohibited by law from using the Services.</li>
          </ul>

          <h3>4.3 Driver Eligibility</h3>

          <p>
            Drivers must satisfy all onboarding requirements established by
            FemiDo, including verification of identity, driving licence,
            vehicle documentation, insurance, and any additional legal or
            regulatory requirements applicable to transportation services.
          </p>
        </section>

        {/* 5 */}
        <section>
          <h2>5. User Accounts</h2>

          <h3>5.1 Registration</h3>
          <p>
            Certain features of the Platform require users to create an
            account. During registration, users must provide accurate, current,
            and complete information.
          </p>

          <h3>5.2 Verification</h3>
          <p>
            FemiDo may require identity verification, mobile number
            verification, email verification, document verification, or other
            authentication measures before granting access to certain
            Services.
          </p>

          <h3>5.3 Account Security</h3>

          <p>Users are solely responsible for:</p>

          <ul>
            <li>Maintaining the confidentiality of account credentials;</li>
            <li>Preventing unauthorized access to their account;</li>
            <li>Keeping their password and verification codes secure;</li>
            <li>Promptly notifying FemiDo of suspected unauthorized use.</li>
          </ul>

          <h3>5.4 Accurate Information</h3>
          <p>
            Users must promptly update any information that becomes inaccurate
            or outdated.
          </p>

          <h3>5.5 One Account Per User</h3>
          <p>
            Unless expressly authorized by FemiDo, users may maintain only one
            personal account. Creating multiple accounts to evade restrictions,
            obtain unauthorized benefits, or engage in fraudulent activity is
            prohibited.
          </p>

          <h3>5.6 Account Suspension or Termination</h3>

          <p>
            FemiDo may suspend, restrict, or terminate a user's account where
            it reasonably believes that the user has:
          </p>

          <ul>
            <li>Violated these Terms;</li>
            <li>Engaged in fraudulent or unlawful conduct;</li>
            <li>Misused the Platform;</li>
            <li>Threatened the safety of other users;</li>
            <li>Provided false information;</li>
            <li>Failed to comply with applicable laws or FemiDo policies.</li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2>6. Rider Responsibilities</h2>

          <p>
            Riders are responsible for using the Platform in a lawful,
            respectful, and safe manner.
          </p>

          <h3>6.1 Accurate Booking Information</h3>
          <p>
            Riders shall provide accurate pickup and destination locations,
            contact information, and any additional details necessary to
            facilitate the requested ride.
          </p>

          <h3>6.2 Lawful Use</h3>
          <p>
            Riders shall use the Platform only for lawful purposes and shall
            not use the Services for any illegal, fraudulent, abusive, or
            unauthorized activity.
          </p>

          <h3>6.3 Respectful Conduct</h3>
          <p>
            Riders shall treat Drivers, other users, and FemiDo personnel with
            courtesy and respect. Harassment, discrimination, threats, abusive
            language, physical violence, sexual misconduct, or any behaviour
            that compromises the safety or dignity of others is strictly
            prohibited.
          </p>

          <h3>6.4 Compliance During the Ride</h3>
          <p>
            Riders shall comply with applicable laws and reasonable
            instructions provided by the Driver regarding safety, including
            wearing seat belts where available and refraining from conduct
            that distracts the Driver or endangers the ride.
          </p>

          <h3>6.5 Personal Belongings</h3>
          <p>
            Riders are solely responsible for their personal belongings before,
            during, and after the ride. FemiDo is not responsible for lost,
            forgotten, or damaged items.
          </p>

          <h3>6.6 Damage to Vehicles</h3>
          <p>
            Riders may be held responsible for damage caused to a Driver's
            vehicle due to intentional misconduct, negligence, vandalism, or
            other unlawful acts.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2>7. Driver/Partner Responsibilities</h2>

          <p>
            Drivers are independent service providers responsible for
            delivering transportation services in accordance with applicable
            laws and FemiDo's policies.
          </p>

          <h3>7.1 Legal Compliance</h3>
          <p>
            Drivers shall maintain all licences, permits, registrations,
            insurance policies, and approvals required by applicable law.
          </p>

          <h3>7.2 Vehicle Standards</h3>
          <p>
            Drivers shall ensure that their vehicles are safe, roadworthy,
            clean, and maintained in accordance with applicable legal and
            regulatory requirements.
          </p>

          <h3>7.3 Professional Conduct</h3>
          <p>
            Drivers shall conduct themselves professionally and respectfully at
            all times. Discrimination, harassment, unsafe driving,
            intoxication, reckless behaviour, or any conduct that endangers
            Riders or other road users is strictly prohibited.
          </p>

          <h3>7.4 Accurate Information</h3>
          <p>
            Drivers shall promptly update any changes to their personal
            information, vehicle details, licences, insurance, or other
            documents submitted to FemiDo.
          </p>

          <h3>7.5 Compliance with Ride Requests</h3>
          <p>
            Drivers shall make reasonable efforts to complete accepted rides
            unless cancellation is permitted under these Terms or required for
            safety, legal, or operational reasons.
          </p>

          <h3>7.6 Independent Contractor Relationship</h3>
          <p>
            Drivers acknowledge that they operate as independent contractors
            and are not employees, agents, partners, or representatives of
            FemiDo unless expressly agreed in writing.
          </p>
        </section>

        {/* 8 */}
        <section>
          <h2>8. Ride Booking & Cancellation</h2>

          <h3>8.1 Ride Requests</h3>
          <p>
            Riders may request transportation services through the Platform. A
            ride is confirmed only after a Driver accepts the request through
            the Platform.
          </p>

          <h3>8.2 Estimated Information</h3>
          <p>
            Estimated arrival times, fares, routes, and trip durations
            displayed on the Platform are estimates only and may vary due to
            traffic, weather, road conditions, user preferences, or other
            operational factors.
          </p>

          <h3>8.3 Rider Cancellations</h3>
          <p>
            Riders may cancel ride requests through the Platform. Cancellation
            fees may apply in accordance with FemiDo's Cancellation Policy.
          </p>

          <h3>8.4 Driver Cancellations</h3>
          <p>
            Drivers may cancel rides where reasonably necessary, including
            situations involving safety concerns, inability to locate the
            Rider, inaccurate booking information, vehicle breakdowns,
            emergencies, or other legitimate operational reasons.
          </p>

          <h3>8.5 No-Show Policy</h3>
          <p>
            If a Rider fails to arrive at the designated pickup location within
            the waiting period specified by the Platform, the Driver may cancel
            the ride and applicable charges may apply.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2>9. Payments, Fees & Refunds</h2>

          <h3>9.1 Fare Calculation</h3>
          <p>
            Ride fares are calculated using factors such as distance travelled,
            trip duration, demand, tolls, taxes, applicable charges, and other
            pricing parameters communicated through the Platform.
          </p>

          <h3>9.2 Payment Methods</h3>
          <p>
            Users may pay using approved payment methods including digital
            payment systems, UPI, debit cards, credit cards, wallets, net
            banking, cash where available, or other supported methods.
          </p>

          <h3>9.3 Payment Authorization</h3>
          <p>
            By adding a payment method, you authorize FemiDo and its payment
            partners to process applicable charges, taxes, fees, refunds,
            adjustments, and other amounts related to your use of the Services.
          </p>

          <h3>9.4 Refunds</h3>
          <p>
            Refunds, where applicable, will be processed in accordance with
            FemiDo's Refund Policy.
          </p>

          <h3>9.5 Taxes</h3>
          <p>
            Users are responsible for paying all applicable taxes associated
            with their use of the Services unless otherwise stated by
            applicable law.
          </p>

          <h3>9.6 Payment Disputes</h3>
          <p>
            Users should promptly report any disputed transactions through the
            Platform or customer support.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2>10. Safety Guidelines</h2>

          <p>
            The safety of Riders, Drivers, and other road users is a core
            priority of FemiDo.
          </p>

          <h3>10.1 Safe Use of the Platform</h3>
          <p>
            Users shall use the Platform responsibly and shall not engage in
            conduct that compromises the safety, security, or well-being of any
            individual.
          </p>

          <h3>10.2 Emergency Features</h3>

          <p>Where available, users are encouraged to utilize:</p>

          <ul>
            <li>Live trip tracking;</li>
            <li>Ride sharing with trusted contacts;</li>
            <li>SOS or emergency assistance features;</li>
            <li>Emergency contact notifications;</li>
            <li>In-app safety reporting.</li>
          </ul>

          <h3>10.3 Reporting Safety Incidents</h3>
          <p>
            Users should promptly report accidents, inappropriate behaviour,
            harassment, discrimination, suspected criminal activity, safety
            concerns, or emergencies through the Platform or appropriate
            emergency services.
          </p>

          <h3>10.4 Zero-Tolerance Policy</h3>
          <p>
            FemiDo maintains a zero-tolerance policy toward violence, threats,
            harassment, sexual misconduct, discrimination, human trafficking,
            possession of illegal substances, carrying prohibited weapons, or
            any conduct that places users at risk.
          </p>

          <h3>10.5 Cooperation with Investigations</h3>
          <p>
            Users agree to cooperate with FemiDo in investigating safety-related
            complaints, accidents, or policy violations.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2>11. Women-Only Service Policy</h2>

          <h3>11.1 Purpose</h3>
          <p>
            FemiDo is designed to provide a safer and more comfortable mobility
            experience by offering transportation services primarily for women
            Riders through verified Drivers, in accordance with applicable laws
            and Company policies.
          </p>

          <h3>11.2 Eligibility for Women-Focused Services</h3>
          <p>
            Certain services, ride categories, or promotional programmes may be
            available exclusively to women Riders or may require specific
            eligibility criteria determined by FemiDo.
          </p>

          <h3>11.3 Misrepresentation</h3>
          <p>
            Users shall not misrepresent their identity or eligibility to gain
            access to services intended for a specific user category.
          </p>

          <h3>11.4 Safety First</h3>
          <p>
            Nothing in this Policy guarantees absolute safety. Riders and
            Drivers are encouraged to make use of FemiDo's safety features.
          </p>
        </section>

        {/* 12 */}
        <section>
          <h2>12. Driver Verification & Compliance</h2>

          <h3>12.1 Verification Requirements</h3>
          <p>
            Before providing transportation services through the Platform,
            Drivers may be required to successfully complete FemiDo's onboarding
            and verification process.
          </p>

          <h3>12.2 Ongoing Compliance</h3>
          <p>
            Drivers are responsible for ensuring that all required licences,
            permits, insurance policies, vehicle registrations, and
            certifications remain valid.
          </p>

          <h3>12.3 Re-Verification</h3>
          <p>
            FemiDo may require Drivers to undergo periodic document
            verification, identity verification, vehicle inspections,
            background checks where permitted by law, or other compliance
            reviews.
          </p>

          <h3>12.4 Non-Compliance</h3>
          <p>
            Failure to satisfy verification requirements may result in
            suspension, restriction, or permanent removal from the Platform.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2>13. Ratings & Reviews</h2>

          <h3>13.1 User Feedback</h3>
          <p>
            Following completion of a ride, Riders and Drivers may have the
            opportunity to rate each other and provide feedback.
          </p>

          <h3>13.2 Appropriate Content</h3>
          <p>
            Ratings and reviews must be honest, accurate, respectful, and based
            on genuine experiences.
          </p>

          <h3>13.3 Moderation</h3>
          <p>
            FemiDo reserves the right to review, remove, edit, or restrict
            ratings or reviews that violate these Terms or applicable law.
          </p>

          <h3>13.4 Use of Ratings</h3>
          <p>
            Ratings and reviews may be considered when evaluating service
            quality, identifying safety concerns, improving the Platform, and
            determining whether continued access is appropriate.
          </p>
        </section>

        {/* 14 */}
        <section>
          <h2>14. Prohibited Conduct</h2>

          <p>
            Users shall not engage in any activity that interferes with the
            safe, lawful, or proper operation of the Platform.
          </p>

          <ul>
            <li>Providing false or misleading information;</li>
            <li>Creating multiple accounts without authorization;</li>
            <li>Impersonating another individual or entity;</li>
            <li>Using another person's account;</li>
            <li>Harassing, threatening, intimidating, or discriminating against any person;</li>
            <li>Engaging in violence, sexual misconduct, stalking, or abusive behaviour;</li>
            <li>Transporting illegal substances or prohibited items;</li>
            <li>Circumventing the Platform to avoid payment or applicable fees;</li>
            <li>Attempting to interfere with Platform security or systems;</li>
            <li>Uploading malicious software, viruses, or harmful code;</li>
            <li>Using automated scripts, bots, or unauthorized software;</li>
            <li>Violating intellectual property rights;</li>
            <li>Engaging in activities that violate applicable laws.</li>
          </ul>

          <p>
            FemiDo reserves the right to investigate suspected violations and
            take appropriate action.
          </p>
        </section>

        {/* 15 */}
        <section>
          <h2>15. Intellectual Property</h2>

          <h3>15.1 Ownership</h3>
          <p>
            The Platform and all associated content, including software, source
            code, databases, text, graphics, logos, trademarks, designs, user
            interfaces, audio, video, documentation, and other materials, are
            owned by or licensed to FemiDo.
          </p>

          <h3>15.2 Limited Licence</h3>
          <p>
            FemiDo grants users a limited, non-exclusive, non-transferable,
            revocable licence to access and use the Platform solely for its
            intended personal and lawful purposes.
          </p>

          <h3>15.3 Restrictions</h3>
          <p>Users shall not:</p>

          <ul>
            <li>Copy, reproduce, modify, distribute, publish, sell, lease, sublicense, or commercially exploit the Platform;</li>
            <li>Reverse engineer, decompile, or disassemble the Platform except where permitted by law;</li>
            <li>Remove or alter copyright notices or trademarks;</li>
            <li>Use FemiDo's intellectual property without permission.</li>
          </ul>

          <h3>15.4 Trademarks</h3>
          <p>
            "FemiDo," its logo, trade names, branding elements, and associated
            marks are the exclusive property of FemiDo or its licensors.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2>16. User Content</h2>

          <h3>16.1 User Submissions</h3>
          <p>
            The Platform may permit users to submit or upload profile
            photographs, ratings, reviews, feedback, comments, communications,
            documents, and other materials.
          </p>

          <h3>16.2 User Responsibility</h3>
          <p>You represent and warrant that:</p>

          <ul>
            <li>You own or have the necessary rights to submit the User Content;</li>
            <li>Your User Content does not infringe third-party rights;</li>
            <li>Your User Content complies with applicable laws;</li>
            <li>Your User Content is accurate and not misleading.</li>
          </ul>

          <h3>16.3 Prohibited Content</h3>
          <p>Users shall not upload content that:</p>

          <ul>
            <li>Is unlawful, defamatory, obscene, discriminatory, or abusive;</li>
            <li>Contains malware, viruses, or harmful software;</li>
            <li>Violates intellectual property rights;</li>
            <li>Promotes illegal activities or violence;</li>
            <li>Contains another person's confidential or personal information without authorization.</li>
          </ul>
        </section>

        {/* 17 */}
        <section>
          <h2>17. Privacy & Data Protection</h2>

          <h3>17.1 Privacy Policy</h3>
          <p>
            Your use of the Platform is subject to FemiDo's Privacy Policy,
            which explains how we collect, use, process, store, disclose, and
            protect your personal information.
          </p>

          <h3>17.2 Data Protection</h3>
          <p>
            FemiDo implements reasonable technical, administrative, and
            organizational measures to protect personal information.
          </p>

          <h3>17.3 User Obligations</h3>
          <p>
            Users are responsible for maintaining the confidentiality of their
            account credentials and protecting their devices against
            unauthorized access.
          </p>

          <h3>17.4 Legal Compliance</h3>
          <p>
            FemiDo processes personal information in accordance with applicable
            Indian laws, including the Digital Personal Data Protection Act,
            2023.
          </p>
        </section>

        {/* 18 */}
        <section>
          <h2>18. Third-Party Services</h2>

          <h3>18.1 Third-Party Providers</h3>
          <p>
            The Platform may integrate with or rely upon third-party providers
            for payment processing, mapping, cloud hosting, communication,
            analytics, identity verification, authentication, and customer
            support.
          </p>

          <h3>18.2 Third-Party Terms</h3>
          <p>
            Your use of third-party services may also be subject to their terms,
            conditions, and privacy policies.
          </p>

          <h3>18.3 External Links</h3>
          <p>
            The Platform may contain links to third-party websites or
            applications. Such links are provided for convenience only.
          </p>

          <h3>18.4 Service Interruptions</h3>
          <p>
            FemiDo is not responsible for failures, delays, outages, or
            interruptions caused by third-party service providers beyond our
            reasonable control.
          </p>
        </section>

        {/* 19 */}
        <section>
          <h2>19. Platform Availability</h2>

          <h3>19.1 Availability</h3>
          <p>
            FemiDo will use reasonable efforts to make the Platform available;
            however, uninterrupted or error-free operation cannot be
            guaranteed.
          </p>

          <h3>19.2 Maintenance</h3>
          <p>
            The Platform may be temporarily unavailable due to maintenance,
            upgrades, technical issues, security enhancements, emergencies, or
            circumstances beyond FemiDo's reasonable control.
          </p>

          <h3>19.3 Service Modifications</h3>
          <p>
            FemiDo reserves the right to modify, suspend, discontinue, or
            replace any feature, functionality, service, pricing model, or
            component of the Platform.
          </p>

          <h3>19.4 Geographic Availability</h3>
          <p>
            Certain Services, ride categories, promotions, or Platform
            features may be available only in specific geographic locations.
          </p>
        </section>

        {/* 20 */}
        <section>
          <h2>20. Disclaimer of Warranties</h2>

          <h3>20.1 Platform Provided "As Is"</h3>
          <p>
            To the maximum extent permitted by applicable law, the Platform and
            Services are provided on an "as is" and "as available" basis
            without warranties of any kind.
          </p>

          <h3>20.2 No Guarantee</h3>
          <p>FemiDo does not warrant or guarantee:</p>

          <ul>
            <li>Continuous availability of the Platform;</li>
            <li>That the Platform will be free from errors or defects;</li>
            <li>Availability of Drivers at any particular time or location;</li>
            <li>Accuracy of estimated arrival times, routes, or fares;</li>
            <li>The actions or performance of independent Drivers or Riders.</li>
          </ul>

          <h3>20.3 Independent Drivers</h3>
          <p>
            Drivers using the Platform are independent service providers.
          </p>

          <h3>20.4 Consumer Rights</h3>
          <p>
            Nothing in these Terms excludes or limits statutory rights or
            remedies that cannot lawfully be excluded or limited.
          </p>
        </section>

        {/* 21 */}
        <section>
          <h2>21. Limitation of Liability</h2>

          <h3>21.1 Platform Services</h3>
          <p>
            FemiDo provides a technology platform that enables Riders and
            Drivers to connect for transportation services.
          </p>

          <h3>21.2 Exclusion of Liability</h3>
          <p>
            To the maximum extent permitted by law, FemiDo shall not be liable
            for indirect, incidental, consequential, exemplary, special, or
            punitive damages.
          </p>

          <h3>21.3 Maximum Liability</h3>
          <p>
            Where permitted by applicable law, FemiDo's total aggregate
            liability arising out of or relating to these Terms shall not
            exceed the total amount paid by the User to FemiDo for the specific
            ride or service giving rise to the claim during the three (3)
            months immediately preceding the event.
          </p>
        </section>

        {/* 22 */}
        <section>
          <h2>22. Indemnification</h2>

          <h3>22.1 User Indemnity</h3>
          <p>
            You agree to defend, indemnify, and hold harmless FemiDo, its
            parent company, affiliates, directors, officers, employees,
            contractors, licensors, agents, and representatives from claims,
            damages, losses, costs, expenses, penalties, or legal fees arising
            out of or relating to:
          </p>

          <ul>
            <li>Your use of the Platform;</li>
            <li>Your violation of these Terms;</li>
            <li>Your violation of applicable laws;</li>
            <li>Your infringement of third-party rights;</li>
            <li>Your negligence, misconduct, or unlawful acts;</li>
            <li>Any content submitted by you.</li>
          </ul>

          <h3>22.2 Cooperation</h3>
          <p>
            FemiDo reserves the right to assume the exclusive defence and
            control of any matter subject to indemnification.
          </p>
        </section>

        {/* 23 */}
        <section>
          <h2>23. Suspension & Termination</h2>

          <h3>23.1 Suspension by FemiDo</h3>

          <p>
            FemiDo may suspend, restrict, or temporarily disable a User's
            access where it reasonably believes that:
          </p>

          <ul>
            <li>These Terms have been violated;</li>
            <li>Fraudulent or suspicious activity has occurred;</li>
            <li>There is a risk to user safety;</li>
            <li>Required verification documents are missing or invalid;</li>
            <li>Applicable laws require such action;</li>
            <li>Continued access may adversely affect the Platform.</li>
          </ul>

          <h3>23.2 Termination</h3>
          <p>
            FemiDo may permanently terminate a User's account where repeated or
            serious violations occur.
          </p>

          <h3>23.3 Effect of Termination</h3>
          <p>Termination does not affect:</p>

          <ul>
            <li>Outstanding payment obligations;</li>
            <li>Rights accrued before termination;</li>
            <li>Legal claims;</li>
            <li>Dispute resolution obligations;</li>
            <li>Provisions intended to survive termination.</li>
          </ul>
        </section>

        {/* 24 */}
        <section>
          <h2>24. Force Majeure</h2>

          <p>
            FemiDo shall not be liable for any delay, interruption, failure, or
            inability to perform its obligations where such failure results
            from events beyond its reasonable control, including:
          </p>

          <ul>
            <li>Natural disasters;</li>
            <li>Floods;</li>
            <li>Earthquakes;</li>
            <li>Fires;</li>
            <li>Epidemics or pandemics;</li>
            <li>War;</li>
            <li>Terrorist acts;</li>
            <li>Civil unrest;</li>
            <li>Government actions;</li>
            <li>Court orders;</li>
            <li>Power failures;</li>
            <li>Internet or telecommunications failures;</li>
            <li>Cyberattacks;</li>
            <li>Labour disputes;</li>
            <li>Other unforeseen events beyond reasonable control.</li>
          </ul>
        </section>

        {/* 25 */}
        <section>
          <h2>25. Changes to the Terms</h2>

          <h3>25.1 Right to Modify</h3>
          <p>
            FemiDo reserves the right to amend, modify, update, or replace
            these Terms at any time.
          </p>

          <h3>25.2 Notification</h3>
          <p>
            Material changes will be communicated through appropriate means,
            including publication on the Platform, email, push notifications,
            or other communication methods.
          </p>

          <h3>25.3 Continued Use</h3>
          <p>
            Your continued access to or use of the Platform after revised Terms
            become effective constitutes acceptance of the updated Terms.
          </p>
        </section>

        {/* 26 */}
        <section>
          <h2>26. Governing Law & Jurisdiction</h2>

          <h3>26.1 Governing Law</h3>

          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of India, including where applicable:
          </p>

          <ul>
            <li>Indian Contract Act, 1872;</li>
            <li>Information Technology Act, 2000;</li>
            <li>Consumer Protection Act, 2019;</li>
            <li>Digital Personal Data Protection Act, 2023;</li>
            <li>Applicable motor vehicle laws and regulations;</li>
            <li>Other applicable laws and regulations.</li>
          </ul>

          <h3>26.2 Jurisdiction</h3>

          <p>
            Subject to the dispute resolution provisions contained in these
            Terms, the courts located in{" "}
            <strong>[City, State, India]</strong> shall have exclusive
            jurisdiction.
          </p>
        </section>

        {/* 27 */}
        <section>
          <h2>27. Dispute Resolution</h2>

          <h3>27.1 Good Faith Resolution</h3>
          <p>
            If a dispute arises out of or in connection with these Terms, the
            parties shall first attempt to resolve the dispute through
            good-faith discussions.
          </p>

          <h3>27.2 Arbitration</h3>
          <p>
            If the dispute cannot be resolved amicably within thirty (30) days
            of written notice, the dispute shall be referred to arbitration in
            accordance with the Arbitration and Conciliation Act, 1996.
          </p>

          <ul>
            <li>The arbitration shall be conducted by a sole arbitrator;</li>
            <li>The seat and venue shall be [City, State, India];</li>
            <li>The proceedings shall be conducted in English;</li>
            <li>The arbitral award shall be final and binding.</li>
          </ul>

          <h3>27.3 Consumer Rights</h3>
          <p>
            Nothing in these Terms shall restrict rights or remedies available
            under applicable consumer protection laws.
          </p>
        </section>

        {/* 28 */}
        <section>
          <h2>28. Grievance Officer</h2>

          <p>
            In accordance with applicable Indian laws, FemiDo has appointed a
            Grievance Officer to address user complaints, grievances, and
            concerns relating to the Platform and Services.
          </p>

          <div className="contact-box">
            <p>
              <strong>Grievance Officer</strong>
            </p>
            <p>Name: [Name]</p>
            <p>Designation: Grievance Officer</p>
            <p>Email: [Email]</p>
            <p>
              Registered Office Address: [Registered Office Address]
            </p>
          </div>

          <p>Users may contact the Grievance Officer regarding:</p>

          <ul>
            <li>User complaints;</li>
            <li>Account-related concerns;</li>
            <li>Privacy and data protection issues;</li>
            <li>Safety-related incidents;</li>
            <li>Payment disputes;</li>
            <li>Violations of these Terms;</li>
            <li>Any other issue relating to the Platform or Services.</li>
          </ul>
        </section>

        {/* 29 */}
        <section>
          <h2>29. Contact Information</h2>

          <h3>Customer Support</h3>
          <p>Email: shegoindore@gmail.com</p>

          <h3>Privacy & Data Protection</h3>
          <p>Email: shegoindore@gmail.com</p>

          <h3>Grievance Officer</h3>
          <p>Email: [Email]</p>

          <h3>Website</h3>
          <p>www.femido.bike</p>

          <h3>Registered Office</h3>

          <p>
            <strong>MLOCK INNOVATIONS LLP</strong>
            <br />
            139, Uday Nagar, Indore Kanadia Road,
            <br />
            Indore, Madhya Pradesh, India, 452016
          </p>
        </section>

        {/* 30 */}
        <section>
          <h2>30. Miscellaneous</h2>

          <h3>30.1 Entire Agreement</h3>
          <p>
            These Terms, together with the Privacy Policy, Community
            Guidelines, Safety Policies, Refund Policy, and any additional
            policies published by FemiDo, constitute the entire agreement.
          </p>

          <h3>30.2 Severability</h3>
          <p>
            If any provision of these Terms is determined to be invalid,
            illegal, or unenforceable, the remaining provisions shall continue
            in full force and effect.
          </p>

          <h3>30.3 Waiver</h3>
          <p>
            Failure by FemiDo to enforce any provision of these Terms shall not
            constitute a waiver.
          </p>

          <h3>30.4 Assignment</h3>
          <p>
            FemiDo may assign or transfer its rights and obligations under
            these Terms, including in connection with a merger, acquisition,
            restructuring, or sale of assets.
          </p>

          <h3>30.5 Survival</h3>
          <p>
            Provisions relating to intellectual property, payments, limitation
            of liability, indemnification, dispute resolution, privacy,
            confidentiality, governing law, and other provisions intended to
            survive shall remain in effect.
          </p>

          <h3>30.6 Electronic Communications</h3>
          <p>
            By using the Platform, you consent to receive notices, disclosures,
            agreements, invoices, and other communications electronically
            through the Platform, email, SMS, push notifications, or other
            electronic means permitted by applicable law.
          </p>

          <h3>30.7 No Partnership or Agency</h3>
          <p>
            Nothing contained in these Terms shall be construed as creating any
            partnership, joint venture, employment, agency, or fiduciary
            relationship between FemiDo and any User or Driver.
          </p>

          <h3>30.8 Headings</h3>
          <p>
            Section headings are provided solely for convenience and shall not
            affect the interpretation of these Terms.
          </p>
        </section>

        <div className="terms-footer">
          <p>
            By accessing or using the FemiDo Platform, you acknowledge that you
            have read, understood, and agree to be bound by these Terms and
            Conditions.
          </p>
        </div>

      </div>
    </>
  );
};

export default TermsAndConditions;