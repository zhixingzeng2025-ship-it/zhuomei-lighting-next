"use client";

import { FormEvent, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
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
  submitLabel = "",
  onSuccess,
  endpoint = "/api/contact",
}: InquiryFormProps) {
  const { t } = useLanguage();
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
      const ok =
        Boolean((result as { success?: boolean }).success) ||
        Boolean((result as { ok?: boolean }).ok) ||
        res.ok;

      if (!ok) {
        throw new Error((result as { message?: string; error?: string }).message || (result as { error?: string }).error || t("inquiry.error"));
      }

      setStatus("success");
      setMessage(t("inquiry.success"));
      setFormData(initialState);
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : t("inquiry.error"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`.trim()}>
      <div className="grid gap-4 md:grid-cols-2">
          <input
            name="name"
            placeholder={t("inquiry.name")}
            value={formData.name}
            onChange={handleChange}
            required
            className="input-field"
          />
          <input
            name="email"
            placeholder={t("inquiry.email")}
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
          placeholder={t("inquiry.company")}
          value={formData.company}
          onChange={handleChange}
          className="input-field"
        />
        <input
          name="country"
          placeholder={t("inquiry.country")}
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
        <option value="">{t("inquiry.selectProduct")}</option>
        <option>{t("products.streetLight")}</option>
        <option>{t("products.solarStreetLight")}</option>
        <option>{t("products.floodLight")}</option>
        <option>{t("products.solarFloodLight")}</option>
        <option>{t("products.solarGardenLight")}</option>
        <option>{t("products.highBayLight")}</option>
        <option>{t("products.moistureProof")}</option>
        <option>{t("products.wallWasher")}</option>
        <option>{t("products.linearLight")}</option>
        <option>{t("products.projectorLight")}</option>
        <option>{t("products.pointLight")}</option>
      </select>
      <textarea
        name="details"
        placeholder={t("inquiry.details")}
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
        {status === "submitting" ? t("inquiry.sending") : submitLabel || t("inquiry.submit")}
        <ArrowRightIcon className="h-4 w-4" />
      </button>
      {status === "success" && message ? <p className="text-sm text-emerald-700">{message}</p> : null}
      {status === "error" && message ? <p className="text-sm text-rose-700">{message}</p> : null}
    </form>
  );
}
