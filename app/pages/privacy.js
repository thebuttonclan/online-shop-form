import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { MIN_PADDING } from 'theme';
import NavigationUl from 'components/NavigationUl';
import Header1 from 'components/Header1';
import Header2 from 'components/Header2';
import { Response } from 'layouts/DefaultLayout';

const externalLink = href => (
  <a href={href} target="_blank">
    {href}
  </a>
);

const mailLink = email => <a href={`mailto:${email}`}>{email}</a>;

const StyledContainer = styled(Container)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledP = styled.p`
  padding-left: ${MIN_PADDING};
  padding-right: ${MIN_PADDING};
`;

const RelativeDiv = styled.div`
  position: relative;
`;

const AbsoluteAnchor = styled.a`
  position: absolute;
  top: -120px;
`;

const sections = [
  {
    title: 'Scope',
    lines: [
      'This Terms of Use and Privacy Policy (“Terms and Conditions”) applies to launchonline.ca as well as any other sites (whether websites or mobile applications) and social media accounts (the “Accounts”) of The Alacrity Foundation of B.C. (“Alacrity”) and its affiliates.',
      'Acceptance of Terms and Conditions',
      'By accessing one or more of the Accounts, you accept without limitation or qualification these Terms and Conditions. Alacrity may revise the Terms and Conditions at any time.',
    ],
  },
  {
    title: 'Protection of Privacy',
    lines: [
      'Alacrity is committed to protecting the privacy of visitors of the Accounts in accordance with these Terms and Conditions and applicable privacy legislation. All information collected related to the use of the Accounts is subject to the Privacy Policy below.',
    ],
  },
  {
    title: 'Privacy Policy',
    lines: [
      'Alacrity is committed to protecting your privacy when you visit our Accounts. By using an Account, you agree to be bound by the Terms and Conditions, including this Privacy Policy, and you consent to the personal information that you provide to the Accounts being collected, used and disclosed by Alacrity in accordance with this Privacy Policy and for the purposes described in these Terms and Conditions.',
      'Subject to legal and contractual requirements, and upon reasonable notice, you may withdraw your consent to Alacrity’s collection, use and disclosure of personal information at any time by contacting Alacrity at the address provided below. You may not be permitted to withdraw consent to certain necessary uses and disclosures of personal information (such as, for example, maintaining reasonable business and transaction records and disclosures to government entities as required to comply with applicable laws). If you withdraw your consent, Alacrity may be unable to provide you with certain services or information.',
      'Note also that where Alacrity has provided or is providing services to you, your consent will be valid for so long as necessary to fulfill the purposes described in these Terms and Conditions or as otherwise described to you at the time of collection.',
    ],
  },
  {
    title: 'Collecting Information – Personal Information',
    lines: [
      `Personal information is any information about an identifiable individual or that permits and individual to be identified, but does not, in most circumstances, include business contact information. Alacrity collects personal information, wherever appropriate, directly from you or from interactions with you, but may where necessary collect personal information from other sources. The personal information Alacrity collects may include your name, address, email address and other information relevant to Alacrity providing services to you. Alacrity limits its
    collection of your personal information to the information that is necessary to fulfil the purposesAlacrity identifies to you or as otherwise required or permitted by law.`,
      'We generally use the personal information you provide for sharing news, industry updates, resources and email communications from us, as well as for the other purposes mentioned below. You may opt out of communications from us at any time. The information Alacrity collects from or through the Accounts will not be used to create individual profiles based upon browsing history.',
    ],
  },
  {
    title: 'Collecting Information – Contests and Surveys',
    lines: [
      'From time-to-time we may have a contest or request information from users by way of surveys. Participation in these contests or surveys is voluntary and may require the disclosure of personal information. Information requested in a contest may include contact information, such as name and address, and demographic information. Contact information will be used only to notify winners and award prizes. Survey information will be used on an aggregated basis only (and not on an individually identifiable basis).',
    ],
  },
  {
    title: 'Collecting Information – Emails',
    lines: [
      'Alacrity offers Account visitors the opportunity to receive communications by email. If you choose to opt-in, you will occasionally receive email correspondence from Alacrity regarding new information that Alacrity believes will be of interest to you.',
      [
        'If you want to unsubscribe from emails and communications or otherwise do not want Alacrity to use your email address, you can contact ',
        mailLink('info@launchonline.ca'),
        ' with your opt-out request.',
      ],
    ],
  },
  {
    title: 'Collecting Information – Cookies',
    lines: [
      'Like other sites, Alacrity uses various technologies to collect information and track your activity when you visit our Accounts. In particular, Alacrity may use cookies (small Files of information that are stored on your computer’s hard drive by your internet browser) or pixel tags (invisible images placed on certain pages of its sites). Cookies and pixel tags allow us to track your activities across various sites. The Accounts’ cookies do not store or contain any personal information. You may set your browser to notify you or decline the receipt of a cookie; however, certain features of our site may not function properly or be available if your internet browser is configured to disable cookies.',
    ],
  },
  {
    title: 'Collecting Information – Advertising',
    lines: [
      `We use Google Analytics’ 3rd-party audience data such as age, gender, and interests to better understand the behaviour of our customers and work with companies that collect information about your online activities to provide advertising targeted to suit your interests and preferences. For example, you may see certain ads on our Accounts or other sites because we contract with Google and other similar companies to target our ads based on information we or they have collected, including information that was collected through automated means (such as cookies and web beacons). These companies also use automated technologies to collect information,
    including Internet Protocol (IP) addresses, when you click on our ads, which helps track and manage the effectiveness of our marketing efforts`,
      [
        'You may opt out of the automated collection of information by third-party ad networks for the purpose of delivering advertisements tailored to your interests, by visiting the consumer opt-out page for the Self-Regulatory Principles for Online Behavioral Advertising at ',
        externalLink('https://optout.aboutads.info/'),
        ' and edit or opt-out your Google Display Network ads’ preferences at ',
        externalLink('https://adssettings.google.com/'),
        '.',
      ],
    ],
  },
  {
    title: 'Collecting Information – Storage, Retention and Disclosure',
    lines: [
      'Alacrity may automatically gather, or engage a third party to gather, certain information about our site traffic and store it. For this purpose, we use IP addresses to analyze trends, administer the Accounts, track site navigation for consideration on an aggregated basis, and gather broad demographic information for aggregate use. Alacrity does not use this information to create individual user profiles.',
      'Alacrity only retains your personal information as long as it is required for the reasons it was collected, to fulfil Alacrity’s legitimate business needs to retain personal information for auditing, reporting or dispute resolution purposes, or to comply with legal requirements.',
      'Alacrity provides access to personal information about our Accounts’ visitors only to those outside technical agents, service providers or affiliates (“Service Providers”) and employees who require it as part of their job. Alacrity currently collects, stores, accesses, and processes your personal information on servers located in Canada either at Alacrity’s premises or the premises of its Service Providers.',
      [
        'If you request information through ',
        mailLink('info@launchonline.ca'),
        ', Alacrity may require that its ServiceProviders who perform services on Alacrity’s behalf respond to your request. By using the Accounts, and by requesting information through ',
        mailLink('info@launchonline.ca'),
        ' you consent to Alacrity providing your email together with your original request for information to the Service Providers for purposes of responding. Alacrity takes commercially reasonable contractual or other measures to protect your personal information if stored, used, disclosed to, processed or handled by these Service Providers.',
      ],
      'From time to time, Alacrity may disclose your personal information to other Service Providers, where you consent to the disclosure or where disclosure is required or permitted by law. Alacrity does not sell personal information.',
    ],
  },
  {
    title: 'Safeguards',
    lines: [
      `Alacrity protects your personal information in Alacrity’s custody and control from loss, misuse, unauthorized access and alteration by using reasonable physical, organizational and technological security measures. To the extent Alacrity has arrangements with Service Providers to store or process personal information on Alacrity’s behalf, its policy is to require them, by contractual or other means, to provide comparable protection while the information is
    stored or processed by them. However, some of Alacrity’s Service Providers may be located in countries whose data protection laws are not as protective as those in your country of residence and, despite the measures that Alacrity has in place, these laws may permit government and national security authorities to access personal data in certain circumstances.`,
    ],
  },
  {
    title: 'Access to Personal Information',
    lines: [
      'You may make a request to gain access to your personal information under the Alacrity’s care or control. Such requests must be in writing and require proof of identity. Alacrity will attempt to respond to your request as soon as reasonably practicable, but in any event within thirty (30) calendar days and will give you written notice if more time is needed.',
    ],
  },
  {
    title: 'Further Information',
    lines: [
      [
        'If you have questions or require additional information please contact our privacy officer at ',
        mailLink('info@launchonline.ca'),
        '.',
      ],
      'If you are not satisfied with Alacrity’s response to your question or request for further information, you may contact the Office of the Information and Privacy Commissioner for British Columbia.',
    ],
  },
  {
    title: 'Protection of Intellectual Property Rights',
    lines: [
      'Alacrity strictly enforces protection of its intellectual property rights, including all patents, copyrights and trademarks. Images, logos, text, documentation, electronic text and image Files, audio and video Files and clips, and other materials on the Accounts are protected by copyright laws and may be covered by other restrictions. The materials and information from the Accounts are available for informational and non-commercial use only by request.',
    ],
  },
  {
    title: 'Links',
    lines: [
      'The Accounts may provide links to other sites, including social media sites that Alacrity may use along with you, for reference and other purposes. The privacy policies and terms of use of those other sites may be different from these Terms and Conditions. Alacrity is in no way responsible or liable for the content that appears on those other sites, or for your privacy once you have clicked through to those other sites. However, Alacrity is responsible for any personal information it collects, uses or discloses on those sites under these Terms and Conditions. You are advised to review the posted terms and conditions and privacy policies of all sites you visit through links from the Accounts.',
    ],
  },
  {
    title: 'Legal Contents “As is”',
    lines: [
      'The Accounts and all the information that they contain are provided “as is” without any express or implied warranty of any kind. All implied warranties of every kind, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement, are expressly disclaimed by Alacrity.',
    ],
  },
  {
    title: 'No Representations or Warranties',
    lines: [
      'No representation is made, and no warranty is given, whether express or implied, as to the completeness, reliability, timeliness or accuracy of any information on the Accounts. Neither Alacrity nor any of its partners, suppliers, associates or affiliates involved in creating, producing or delivering the Accounts or the contents appearing on the Accounts, is liable or responsible for any errors or omissions in the contents of the Accounts, or your use of the Accounts or the information contained on the Accounts. The information and contents of the Accounts may be out of date, and Alacrity makes no commitment to update the information and contents of the Accounts.',
    ],
  },
  {
    title: 'No Endorsements',
    lines: [
      'References in the Accounts to any specific products, processes or services, whether by trade-name, trademark, corporate entity or otherwise, do not constitute or imply an endorsement, recommendation or favouring of any kind by Alacrity, and Alacrity is in no way responsible or liable for your use of any such information, specific products, processes or services.',
      'The appearance in the Accounts of links to other sites does not constitute or imply an endorsement, recommendation or favouring of those sites or the information, products or services available on or through those sites by Alacrity, and Alacrity is in no way responsible or liable for your use, or the contents of, any such sites.',
    ],
  },
  {
    title: 'Limitation of Liability',
    lines: [
      'Alacrity has no responsibility or liability for any damages caused to your computer equipment or other property as a result of your use of the Accounts or any other sites linked to or from the Accounts.',
      'Under no circumstances will Alacrity, its employees, officers or directors be liable to any person or business entity for any direct, indirect, special, incidental, consequential or other damages (including, without limitation, any lost profits, business interruption or loss of programs, data, property or information, even if Alacrity has been specifically advised of the possibility of such damages), based on any use of the Accounts, their contents, any other sites or social media platforms to which the Accounts are linked or the contents of such linked sites or platforms.',
    ],
  },
  {
    title: 'Amendment',
    lines: [
      'Alacrity reserves the right to change or supplement the Terms and Conditions at any time. If Alacrity makes any substantial changes to the Terms and Conditions then Alacrity will make reasonable efforts to post a prominent announcement on launchonline.ca indicating that there has been a change but will not otherwise notify you of the change. You should review this policy regularly to ensure that you are aware of any changes made.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <StyledContainer>
        <Helmet>
          <title>Privacy Policy</title>
        </Helmet>
        <Header1>WEBSITE TERMS OF USE AND PRIVACY POLICY</Header1>
        <Header2>Contents:</Header2>
        <NavigationUl>
          {sections.map(section => {
            return (
              <li>
                <a href={`#${kebabCase(section.title)}`}>{section.title}</a>
              </li>
            );
          })}
        </NavigationUl>
        <Response.MediaContextProvider>
          {sections.map(section => {
            return (
              <RelativeDiv>
                <Response.Media greaterThanOrEqual="headerBreak">
                  <AbsoluteAnchor id={kebabCase(section.title)} />
                </Response.Media>
                <Response.Media lessThan="headerBreak">
                  <a id={kebabCase(section.title)} />
                </Response.Media>
                <Header2>{section.title}</Header2>
                {section.lines.map(line => {
                  return <StyledP>{Array.isArray(line) ? line.map(v => v) : line}</StyledP>;
                })}
              </RelativeDiv>
            );
          })}
        </Response.MediaContextProvider>
      </StyledContainer>
    </>
  );
}
