"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
  phone: string;
  instagram: string;
  instagramHandle: string;
  studio: string;
};

type FormStatus = "idle" | "sent";

export function ContactForm({
  email,
  phone,
  instagram,
  instagramHandle,
  studio,
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Name: ${name.trim()}`,
      `Email: ${fromEmail.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    const mailto = `mailto:${email}?subject=${encodeURIComponent("Message from Taropa")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <div className="contact-layout">
      <aside className="contact-aside" aria-label="Contact details">
        <div className="contact-aside__block">
          <p className="contact-aside__label">Email</p>
          <a className="contact-aside__link" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="contact-aside__block">
          <p className="contact-aside__label">Phone</p>
          <a
            className="contact-aside__link"
            href={`tel:${phone.replace(/\s/g, "")}`}
          >
            {phone}
          </a>
        </div>
        <div className="contact-aside__block">
          <p className="contact-aside__label">Instagram</p>
          <a
            className="contact-aside__link"
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {instagramHandle}
          </a>
        </div>
        <div className="contact-aside__block">
          <p className="contact-aside__label">Studio</p>
          <p className="contact-aside__text">{studio}</p>
        </div>
      </aside>

      <div className="contact-form-block">
        <p className="contact-form-block__eyebrow">Write to us</p>

        {status === "sent" ? (
          <div className="contact-form contact-form--sent" role="status">
            <p className="contact-form__thanks-text">
              Your message is ready in your email app — send it when you are
              ready.
            </p>
            <button
              type="button"
              className="contact-form__reset"
              onClick={() => {
                setStatus("idle");
                setName("");
                setFromEmail("");
                setMessage("");
              }}
            >
              Write another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span className="contact-field__label">Name</span>
              <input
                className="contact-field__input"
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="contact-field">
              <span className="contact-field__label">Email</span>
              <input
                className="contact-field__input"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
              />
            </label>
            <label className="contact-field">
              <span className="contact-field__label">Message</span>
              <textarea
                className="contact-field__input contact-field__input--area"
                name="message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <div className="contact-form__actions">
              <button type="submit" className="contact-form__submit">
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
