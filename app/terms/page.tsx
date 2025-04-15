import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto py-16 px-4 mt-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">SMS Terms of Service</h1>
      <section className="mb-8">
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
        <p>To view our Privacy Policy, please visit: <a href="/privacy-policy" className="text-teal-600 underline">Privacy Policy</a></p>
      </section>
    </div>
    <Footer/>
    </>
  );
}