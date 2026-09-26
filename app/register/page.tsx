import { RegisterForm } from "@/components/RegisterForm";
import { RegisterShare } from "@/components/RegisterShare";
import { EVENT } from "@/content/event";

export const metadata = { title: `Register · ${EVENT.name}` };

export default function RegisterPage() {
  return (
    <div className="stack guide">
      <p className="kicker">Workshop registration</p>
      <h1>Tell the organizers you are coming.</h1>
      <p className="lede">
        Official registration is {EVENT.registration}. This form collects the email you will use with IBM Cloud. It does not collect passwords, API keys, CRNs, or payment cards.
      </p>
      <aside className="placeholder">
        <h2>Official registration link</h2>
        <p>
          {EVENT.registration}. This form records workshop attendance. It is not the IBM Quantum account, and it does not collect passwords, API keys, or CRNs.
        </p>
      </aside>
      <RegisterShare />
      <RegisterForm />
    </div>
  );
}
