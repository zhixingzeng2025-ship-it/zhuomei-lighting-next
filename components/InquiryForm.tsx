"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "./Icons";

type FormState = {
  name: string;
  email: string;
  company: string;
  country: string;
  product: string;
  details: string;
};

type InquiryFormProps = {
  className?: string;
  submitLabel?: string;
  onSuccess?: () => void;
  endpoint?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  country: "",
  product: "",
  details: "",
};

export default function InquiryForm({
  className = "",
  submitLabel = "Send Inquiry",
  onSuccess,
  endpoint = "/api/contact",
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json().catch(() => ({} as Record<string, unknown>));
      const ok = Boolean((result as { ok?: boolean }).ok) || res.ok;

      if (!ok) {
        throw new Error((result as { message?: string }).message || "提交失败");
      }

      setStatus("success");
      setMessage("Thank you! We will contact you soon.");
      setFormData(initialState);
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Error submitting your inquiry. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`.trim()}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <select
        name="product"
        value={formData.product}
        onChange={handleChange}
        className="input-field w-full"
      >
        <option value="">Product Interested</option>
        <option>Street Light</option>
        <option>Solar Street Light</option>
        <option>Flood Light</option>
        <option>Solar Flood Light</option>
        <option>Solar Garden Light</option>
        <option>High Bay Light</option>
        <option>Moisture Proof Lamps</option>
        <option>Wall Washer Light</option>
        <option>Linear Light</option>
        <option>Projector Light</option>
        <option>Point Light Source</option>
      </select>
      <textarea
        name="details"
        placeholder="Project Details"
        value={formData.details}
        onChange={handleChange}
        rows={5}
        className="input-field min-h-40 w-full resize-y"
      />
      <button
        type="submit"
        className="action-pill w-full bg-gradient-to-r from-brand-blue to-[#77bfff] px-6 text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : submitLabel}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      {status === "success" && message ? <p className="text-sm text-emerald-700">{message}</p> : null}
      {status === "error" && message ? <p className="text-sm text-rose-700">{message}</p> : null}
    </form>
  );
}
