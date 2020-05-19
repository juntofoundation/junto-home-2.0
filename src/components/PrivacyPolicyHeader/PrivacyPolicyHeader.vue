
<template>
  <div>
    <div class="privacyPolicyHeader" v-if="memberOpen != true">
      <!--  header + background image -->
      <div class="privacyPolicyHeader__header">
        <h2 class="privacyPolicyHeader__header--title">Junto Privacy Policy</h2>
      </div>

      <!-- main section -->

      <div class="privacyPolicyHeader__main">
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">Privacy Statement</p>
          <p class="privacyPolicyHeader__section--body">
            Privacy is at the very heart of the Junto Foundation, Inc. (“Junto,” “we,” “our,” or “us”).
            As a social media company founded in the spirit of authenticity, privacy represents a fundamental
            tenet of our belief system and an essential part of the very backbone upon which our Services stand.
            Therefore, we want you as a visitor to our Application (“App”) and user of our apps, features and software
            (collectively, “Services”) to feel confident in using our stuff provisions and fully understand the expectations
            around surrounding your privacy.
          </p>
          <p class="privacyPolicyHeader__section--body">
            We're dedicated to consumer privacy rights and thus offer our users a comprehensive Privacy Policy,
            written in plain language and with the intent of helping you understand what information we collect,
            why we collect it, and how you can update, manage, export, and delete your information. When we collect
            your information, we are subject to various laws in the United States and the General Data Protection Regulation (“GDPR”)
            which applies across the European Union (including in the United Kingdom), and we are responsible as the “controller” of that
            personal information for the purposes of those laws.
          </p>
          <p
            class="privacyPolicyHeader__section--body"
          >Before diving into the specifics, let’s get a few things out of the way:</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p class="privacyPolicyHeader__bullet--text">
              We do not own your data, PERIOD. Plain and simple, your data is yours.
              We don’t own it. Similarly, we have do our very best a vested interest
              in ensuring that any companies we formally collaborate with will never own
              your data nor possess the right to share it with anyone else. At the end of the day,
              it’s up to you what you decide to share with the world.
            </p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >We will never sell your data to ANYONE. The vast majority of companies profit off their users by selling their information. We promise to never do that. In fact, we won’t ever share any personal data about your online activity or use it to target you individually.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >We DO NOT track you. Few companies occasionally give users the option to exercise your Do Not Track right, but only do so after a user jumps through a bunch of confusing hoops. With us, you don’t have to worry about this. We don’t use tracking to collect any personal information. End of story.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >[We DO NOT run targeted advertisements.] Junto does not facilitate the use of targeted advertisements on our App. However, you may still see third-party advertisements from time to time independent of us. This is because we do not restrict our users from posting their own advertisements; we just won’t have a hand in the facilitation of any posted ads.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">SERVICES WE USE</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >AWS (Privacy Policy) : Used by us to store, process and distribute information.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Sentry (Privacy Policy) : Used by us to log anonymous reports on bugs and crashes happening in the Junto App.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">INFORMATION WE COLLECT</p>
          <p class="privacyPolicyHeader__section--subtitle">Information you (and you alone) give us</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >When you register an account with us, you provide us with personally identifiable information like name, email address, phone number, username and password, etc. Furthermore, you have the ability to add more information to your profile after registration (e.g., bio, location, personal website, etc.).</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >To help you organize how you communicate with others, whether directly or in groups, we may create a list of your contacts for you, and you can create, join, or get added to groups and broadcast lists. These groups and lists get associated with your account information.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Even if you aren’t signed into your Junto account, you might choose to provide us with information, such as an email address to receive updates and community highlights about our Services. You may customize your communication preferences, or let us know if you do not wish to receive any updates from the company by adjusting your subscriptions &amp; email options on the Junto Website.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Occasionally, you may voluntarily provide information to us to complete surveys and questionnaires or to participate in user polls. We use this information to improve our products &amp; Services and to ensure that we’re providing accurate disclosures.</p>
          </div>

          <p class="privacyPolicyHeader__section--subtitle">Information we collect automatically</p>
          <p
            class="privacyPolicyHeader__section--body"
          >When you visit our Website, we may collect certain user information automatically from your device. In some territories, including California and countries in the European Economic Area, this information may be considered personal data or personally identifiable information under applicable data protection laws.</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Log &amp; Device data. Information about your interactions with our Services, which may include log data like your device model, operating system, mobile network carrier, and time zone. Whether we collect some or all of this information often depends on what type of device you’re using and its settings.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Crash Reporting. Junto automatically collects crash logs through a third party service. These logs, however, do not contain any user information beyond device model and OS.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">INFORMATION WE DO NOT COLLECT</p>
          <p
            class="privacyPolicyHeader__section--body"
          >We DO NOT believe in collecting and using any of the following:</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Cookies, web beacons or other technologies to receive and store certain types of your personal information as you interact with our Services</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Certain analytics and viewer interactions services in connection with the operation of a site, including the collection and tracking of certain data and information regarding the characteristics and activities of visitors to a site (i.e., micro-interactions). To give you a better idea, popular services used by others, not us, include MixPanel and UXCam</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >IP addresses, user agents, or other unique technical identifiers and network activity information (e.g., browsing history, search history, or interactions with a third-party application).</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">HOW AND WHY WE USE YOUR INFORMATION</p>
          <p
            class="privacyPolicyHeader__section--body"
          >Junto is only using your personal information if it absolutely has to and has a legally valid reason for doing so, such as to:</p>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Provide the Features of our Website and the Services You Wish to Use. We will use your information to provide our Website to you; including managing your account; responding to your inquiries; and for other customer service and support purposes. With respect to GDPR, our reason for processing your personal information is for the purpose of providing you our Services and the performance of our contract with you.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >To Communicate Our Services, Events and for Other Relevant Purposes. If you have an account with us, we may use the contact details you provided to send you relevant communications and updates, where permitted by applicable law. We may use the information that you provide to us to personalize communications regarding our Services.</p>
          </div>
          <div class="privacyPolicyHeader__bullet">
            <img
              src="../../assets/images/junto-home-2.0__bullet.png"
              alt
              class="privacyPolicyHeader__bullet--icon"
            />
            <p
              class="privacyPolicyHeader__bullet--text"
            >Other. We also may use your information to manage our business or perform functions as otherwise described to you at the time of collection subject to your consent. Understand that by placing Content on the Service you are providing Junto with a worldwide, irrevocable, royalty-free, unlimited, non-exclusive license, for as long as the Content is part of your profile, to publicly display, modify, reproduce and distribute your Content, in whole or in part, on the Service for editorial and promotional purposes.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">WHO WE SHARE YOUR INFORMATION WITH</p>
          <p class="privacyPolicyHeader__section--body">
            No one. We aren’t interested in profiting off your personal data so there’s no need to share it.
            You and only you have the right to control how you share your information.
          </p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">YOUR DATA, YOUR RIGHTS, YOUR CHOICE</p>
          <p
            class="privacyPolicyHeader__section--body"
          >Under normal circumstances, local data protection laws (such as GDPR or the California Consumer Privacy Act) give a person rights with respect to personal information if that person is located in or is a resident of that country, state, or territory (including if you are located in the EU/EEA).</p>
          <p
            class="privacyPolicyHeader__section--body"
          >Junto believes every person who uses our Services should have complete autonomy over their personal information. Therefore, we extend the following rights to ALL users our Services, no matter where you are or the applicability of the corresponding data protection law(s).</p>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Access Your Personal Information</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to request access to a copy of your personal information right in the App. For any data beyond basic account information, Junto is currently in the process of finalizing the process by which one can access such information. As soon as this process is complete, you will be the first to know.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p
              class="privacyPolicyHeader__item--title"
            >Right to Rectify of your Personal Information</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You have the right to request that we rectify any mistakes in your personal information, including the right to have partial personal information completed.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to be Forgotten</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to require us to erase/delete your account. When deactivated, your account, including your display name, username, content and public profile, will no longer be viewable on Junto. It is important to remember, though, that search engines and other third parties may still retain copies of pieces of public information, even after you have deleted the information from our Services or deactivated your account.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Restriction of Processing</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to require us to restrict the further processing your personal information. In such cases, the respective information will be marked as restricted, and may only be processed by us for certain purposes.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Object</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to object, on grounds relating to your particular situation, to the processing of your personal information by us, and we may be required to no longer process some or all of your personal information.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Data Portability</p>
            <p
              class="privacyPolicyHeader__item--body"
            >In the near future, you will have the right to receive a copy of your personal information which you have provided to us, in a structured, commonly used, and machine-readable format. Rest assured, we will let you know when this is readily available.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Withdraw Consent</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to withdraw consent you have provided to us where we rely solely on your consent to process your personal information. You can always provide your consent to us again at a later time.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Right to Complain</p>
            <p
              class="privacyPolicyHeader__item--body"
            >You may have the right to lodge a complaint to an applicable supervisory authority or other regulator if you are not satisfied with our responses to your requests or how we manage your personal information. For example, if you are located in the EU/EEA, a list of and more information about the EU/EEA Data Protection Authorities can be found here: http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm. We encourage you to first reach out to us at hi@junto.foundation, so we have an opportunity to address your concerns directly.</p>
            <p
              class="privacyPolicyHeader__item--body"
            >When we receive formal written complaints, we respond by contacting the person who made the complaint. We work with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of your data that we cannot resolve with you directly.</p>
          </div>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Your Choice to Exercise Your Rights.</p>
            <p
              class="privacyPolicyHeader__item--body"
            >If you make the choice to exercise any of these rights, email us at hi@junto.foundation. Please understand, though, that you will need to provide us with (i) enough information to identify you, like your name, address, and account details; (ii) proof of your identity; and (iii) a description of what right you want to exercise and the information you are requesting. Most of the information necessary for you to exercise any rights should be easily accessible within the App. However, if for some reason If we are unable to verify that the person making the request is the person whom we have information about, we reserve the right to refrain from disclosing any data. We do this so that we can ensure we only share one’s data with the rightful owner. Also, know that any personal information we collect from you to verify your identity in connection with a request will be used solely for the purposes of verification.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">KEEPING YOUR INFORMATION SECURE</p>
          <p
            class="privacyPolicyHeader__section--body"
          >The security of your personal data is one of our highest priorities. We work hard to protect the personal data that you provide from loss, misuse, and unauthorized access, or disclosure. Given the nature of communications and information processing technology, there is no guarantee that personal data will be absolutely safe from access, alteration, or destruction by a breach of any of our physical, technical, and managerial safeguards.</p>
          <p
            class="privacyPolicyHeader__section--body"
          >You should take steps to protect against unauthorized access to your device and account by, among other things, choosing a unique and complex password that nobody else knows or can easily guess and keeping your log-in and password private. We are not responsible for any lost, stolen, or compromised passwords or for any activity on your account via unauthorized password activity.</p>
          <div class="privacyPolicyHeader__item">
            <p class="privacyPolicyHeader__item--title">Data Retention</p>
            <p
              class="privacyPolicyHeader__item--body"
            >We retain the personal data we collect for so long as is reasonably necessary to perform our contractual obligations to you. Consequently, all user content and data is immediately deleted upon request. Understand though, that as we said before, some search engines and other third parties may still retain some copies of information related to your account.</p>
          </div>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">THIRD-PARTY WEBSITES</p>
          <p
            class="privacyPolicyHeader__section--body"
          >Our Website may contain links to third-party websites and applications. Any access to and use of such linked websites and applications is not governed by this Policy but instead is governed by the privacy policies of those third parties. We do not endorse these parties, their content, or any products and services they offer, and we are not responsible for the information practices of such third-party websites or applications.</p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">TRANSFER OF YOUR INFORMATION</p>
          <p
            class="privacyPolicyHeader__section--body"
          >This Website is based in the United States. Your information may be processed, transferred to, and maintained on, servers and databases located within the U.S. and elsewhere. We reserve the right to transfer your information to and from any state, province, country or other governmental jurisdiction. When we transfer personal data outside of the European Union or EFTA States, we ensure an adequate level of protection for the rights of data subjects based on the adequacy of the receiving country’s data protection laws, contractual obligations placed on the recipient of the data (model clauses may be requested by inquiry as described below), or EU-US and Swiss-US Privacy Shield principles.</p>

          <p class="privacyPolicyHeader__section--body">
            In connection with the operation of the website, Junto may transfer your personal information to various locations, which may include locations both inside and outside of the European Economic Area. Junto complies with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework, as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information transferred from the European Union and/or Switzerland, to the United States. Under the Privacy Shield Framework, Junto is responsible for the processing of personal data it receives and subsequently transfers to a third party acting as an agent on its behalf. Junto complies with the Privacy Shield Principles for all onward transfers of personal data from the EU, including the onward transfer liability provisions. Junto has certified to the Department of Commerce that it adheres to the Privacy Shield Principles. If there is any conflict between the terms in this Policy and the Privacy Shield Principles, the Privacy Shield Principles shall govern. To learn more about the Privacy Shield program, and to view our certification, please visit https://www.privacyshield.gov/.
            With respect to personal data received or transferred pursuant to the Privacy Shield Framework, Junto is subject to the regulatory enforcement powers of the U.S. Federal Trade Commission.
          </p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">CHILDREN</p>
          <p
            class="privacyPolicyHeader__section--body"
          >Junto is not directed to children under 13 years of age and we do not knowingly collect personal information from children under 13. You must also be old enough to consent to the processing of your personal data in your country (in some countries we may allow your parent or guardian to do so on your behalf). If we discover that a child has provided us with personal information, we will promptly delete such personal information from our systems.</p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">CHANGES TO THIS POLICY</p>
          <p
            class="privacyPolicyHeader__section--body"
          >This Policy is current as of the date below. By using our Services, you signify your agreement to this Privacy Policy. We reserve the right to amend this Policy at our discretion and at any time and will notify you of such amendment(s) on our homepage. Please note that if you continue to visit and use this Website and our Services after those changes are in effect, you agree to the revised Policy.</p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--title">CONTACTING US</p>
          <p
            class="privacyPolicyHeader__section--body"
          >If you have any questions or comments about this Policy, the ways in which we collect and use your personal information, your choices and rights regarding such use, or wish to exercise your rights, please do not hesitate to contact us at hi@junto.foundation.</p>
        </div>

        <!-- new section -->
        <div class="privacyPolicyHeader__section">
          <p class="privacyPolicyHeader__section--subtitle">Last Revised May 18, 2020</p>
        </div>
      </div>
    </div>
  </div>
</template>

privacyPolicyHeader__section--title
privacyPolicyHeader__section--body
privacyPolicyHeader__section--bullet
privacyPolicyHeader__bullet
privacyPolicyHeader__bullet--icon
privacyPolicyHeader__bullet--text



