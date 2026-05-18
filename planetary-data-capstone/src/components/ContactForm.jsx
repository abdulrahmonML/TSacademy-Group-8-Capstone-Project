import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\+?[0-9\s\-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Have Questions About Planetary Science?</h2>
      <p className="contact-subtitle">
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      {submitted ? (
        <div className="success-message">
          ✅ Your message has been submitted successfully! We'll get back to you
          soon.
        </div>
      ) : (
        <div className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Please enter a valid phone number."
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength={100}
                value={formData.message}
                onChange={handleChange}
              />
             <span className="char-count">100 characters</span>
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Submit &rarr;
          </button>
        </div>
      )}
    </section>
  );
}

export default ContactForm;