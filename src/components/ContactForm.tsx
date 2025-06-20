"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje es requerido"),
});
type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("ok");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-800"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
        />
        {errors.name && (
          <span id="name-error" className="text-red-600 text-xs">
            {errors.name.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span id="email-error" className="text-red-600 text-xs">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block font-semibold mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && (
          <span id="message-error" className="text-red-600 text-xs">
            {errors.message.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary-dark transition disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "ok" && (
        <div className="text-green-600 text-center font-medium">¡Mensaje enviado!</div>
      )}
      {status === "error" && (
        <div className="text-red-600 text-center font-medium">Ocurrió un error. Intenta nuevamente.</div>
      )}
    </form>
  );
}
