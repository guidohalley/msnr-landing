"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { trackFormSubmit } from "@/utils/analytics";

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
        // Registrar evento de formulario exitoso
        trackFormSubmit("contact_form", true);
      } else {
        setStatus("error");
        // Registrar evento de formulario fallido
        trackFormSubmit("contact_form", false);
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <motion.form
      className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-md border border-zinc-100 dark:border-zinc-800"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Formulario de contacto"
      role="form"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-group">
        <label htmlFor="name" className="block font-semibold mb-1 text-zinc-900 dark:text-zinc-100">
          Nombre
          <span className="text-red-600 ml-1" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2.5 
                   focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/70 focus-visible:ring-2 
                   focus-visible:ring-[#E9FC87] dark:focus-visible:ring-[#E9FC87]/70 
                   bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-required="true"
        />
        {errors.name && (
          <span id="name-error" className="text-red-600 text-xs font-medium mt-1 block" role="alert">
            {errors.name.message}
          </span>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="email" className="block font-semibold mb-1 text-zinc-900 dark:text-zinc-100">
          Email
          <span className="text-red-600 ml-1" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2.5 
                   focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/70 focus-visible:ring-2 
                   focus-visible:ring-[#E9FC87] dark:focus-visible:ring-[#E9FC87]/70 
                   bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-required="true"
        />
        {errors.email && (
          <span id="email-error" className="text-red-600 text-xs font-medium mt-1 block" role="alert">
            {errors.email.message}
          </span>
        )}
      </div>
      
      <div className="form-group">
        <label htmlFor="message" className="block font-semibold mb-1 text-zinc-900 dark:text-zinc-100">
          Mensaje
          <span className="text-red-600 ml-1" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full rounded border border-zinc-300 dark:border-zinc-700 px-3 py-2.5 
                   focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/70 focus-visible:ring-2 
                   focus-visible:ring-[#E9FC87] dark:focus-visible:ring-[#E9FC87]/70 
                   bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-required="true"
        />
        {errors.message && (
          <span id="message-error" className="text-red-600 text-xs font-medium mt-1 block" role="alert">
            {errors.message.message}
          </span>
        )}
      </div>
      
      <motion.button
        type="submit"
        className="w-full py-3 rounded-full bg-[#E9FC87] text-[#262626] font-semibold shadow 
                 hover:bg-[#E9FC87]/90 transition disabled:opacity-60
                 focus:outline-none focus:ring-2 focus:ring-[#E9FC87]/50 focus:ring-offset-2 
                 dark:focus:ring-offset-zinc-900"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </motion.button>
      
      {status === "ok" && (
        <motion.div 
          className="text-green-600 dark:text-green-400 text-center font-medium p-3 bg-green-50 dark:bg-green-900/20 rounded-md" 
          role="status"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ¡Mensaje enviado correctamente!
        </motion.div>
      )}
      
      {status === "error" && (
        <motion.div 
          className="text-red-600 dark:text-red-400 text-center font-medium p-3 bg-red-50 dark:bg-red-900/20 rounded-md" 
          role="alert"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.
        </motion.div>
      )}
    </motion.form>
  );
}
