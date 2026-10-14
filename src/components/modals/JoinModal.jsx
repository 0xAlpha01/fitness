import { useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import Button from "../ui/Button.jsx";

export default function JoinModal({ initialPlan, onClose, plans }) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan);
  const [sent, setSent] = useState(false);

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="join-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-title"
      >
        <Button
          variant="unstyled"
          className="modal-close"
          icon={X}
          aria-label="Close"
          onClick={onClose}
        />
        {!sent ? (
          <>
            <p className="section-kicker">LET&apos;S GET STARTED</p>
            <h2 id="join-title">
              Your fitness journey <em>starts here.</em>
            </h2>
            <p className="modal-copy">
              Leave your details and the gym team can follow up about
              membership.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <label>
                Full name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Email or phone
                <input
                  required
                  name="contact"
                  placeholder="How can we reach you?"
                />
              </label>
              <label>
                Membership plan
                <select
                  value={selectedPlan}
                  onChange={(event) => setSelectedPlan(event.target.value)}
                >
                  {plans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} - {plan.price}/month
                    </option>
                  ))}
                </select>
              </label>
              <Button
                type="submit"
                className="form-submit"
                icon={ArrowRight}
                iconSize={17}
              >
                Send enquiry
              </Button>
            </form>
            <p className="form-note">
              Demo form only - connect a backend or email service to receive
              enquiries.
            </p>
          </>
        ) : (
          <div className="success-state">
            <span className="success-icon">
              <Check />
            </span>
            <h2>You&apos;re on your way.</h2>
            <p>
              Your demo enquiry has been submitted on this page. Connect a
              backend to store and deliver real enquiries.
            </p>
            <Button icon={ArrowRight} iconSize={16} onClick={onClose}>
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
