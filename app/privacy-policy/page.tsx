import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
    <Header/>
    <div className="mt-32 max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SMS Communications - What Information We Collect</h2>
        <p className="mb-4">We collect personal information such as your name, phone number, email address, home address, and care preferences when you interact with CareLiving, LLC — including through our website, phone calls, intake forms, or SMS communication.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Schedule and confirm care visits</li>
          <li>Provide updates about your services</li>
          <li>Send invoices, payment reminders, or receipts</li>
          <li>Share important health or safety notices</li>
          <li>Respond to your questions or feedback</li>
        </ul>
        <p className="mb-4">We may also send occasional marketing updates, but only if you have opted in.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Who We Share Information With</h2>
        <p className="mb-4">We do not sell or share your personal information with third parties for marketing purposes. Your information is only shared with authorized CareLiving staff and care providers as needed to coordinate and deliver services.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SMS Communication Consent</h2>
        <p className="mb-4">By providing your phone number, you agree to receive SMS messages related to your care, scheduling, billing, and occasional service updates.<br />
        SMS consent is not shared with third parties or affiliates for marketing purposes.<br />
        Message frequency may vary. Message and data rates may apply. To opt out, reply STOP. For help, reply HELP or contact us at <a href="mailto:info@carelivers.com" className="text-teal-600 underline">info@carelivers.com</a>.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">SMS Terms of Service</h2>
        <p className="mb-4">By opting into SMS from a web form, phone conversation, or other medium, you agree to receive text messages from CareLiving, LLC. These messages may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Appointment scheduling and reminders</li>
          <li>Caregiver arrival notifications</li>
          <li>Billing updates and payment reminders</li>
          <li>Service updates or care plan notices</li>
          <li>Customer support responses</li>
          <li>Occasional promotional messages or event announcements</li>
        </ul>
        <p className="mb-4">Message frequency may vary. Message and data rates may apply.<br />
        To opt out at any time, text STOP.<br />
        For help, text HELP or visit <a href="https://www.carelivers.com" className="text-teal-600 underline">https://www.carelivers.com</a>.
        </p>
        <p>To view our Privacy Policy, please visit: <a href="https://www.carelivers.com/privacy" className="text-teal-600 underline">https://www.carelivers.com/privacy</a></p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">How to Access or Update Your Information</h2>
        <p>You may request to update, review, or delete your information at any time by contacting us at <a href="mailto:info@carelivers.com" className="text-teal-600 underline">info@carelivers.com</a>.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Related</h2>
        <p>See also our <a href="/terms" className="text-teal-600 underline">SMS Terms of Service</a>.</p>
      </section>
    </div>
    <Footer/>
    </>
  );
}