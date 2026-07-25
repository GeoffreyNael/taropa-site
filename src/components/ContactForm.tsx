"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  title: string;
  intro: string;
  email: string;
  phone: string;
  instagram: string;
  instagramHandle: string;
  studio: string;
};

type FormStatus = "idle" | "sent";

export function ContactForm({
  title,
  intro,
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
    <div className="contact-panel">
      <header className="contact-panel__header">
        <h1 className="contact-panel__title">Get in touch</h1>
        <p className="contact-panel__intro">
          Reach us by email, phone, or Instagram — or visit the studio in New
          Delhi.
        </p>
      </header>

      <aside className="contact-aside">
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
        <header className="contact-form-block__header">
          <h2 className="contact-form-block__title">{title}</h2>
          <p className="contact-form-block__intro">{intro}</p>
        </header>

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
                rows={4}
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
