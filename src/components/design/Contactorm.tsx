"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { collection, addDoc, Timestamp } from "firebase/firestore"
import { db } from "../../../fireconfig"

// === Schéma de validation Yup ===
const schema = yup.object().shape({
  name: yup.string().required("Votre nom est requis"),
  email: yup.string().email("Email invalide").required("L'email est requis"),
  phone: yup.string().required("Téléphone requis"),
  subject: yup.string().required("Choisissez un sujet"),
  message: yup.string().required("Le message est requis"),
})

type FormData = yup.InferType<typeof schema>

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const [success, setSuccess] = useState("")

  const onSubmit = async (data: FormData) => {
    setSuccess("")
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: Timestamp.now(),
      })
      setSuccess("Message envoyé avec succès ✅")
      reset()
    } catch (err) {
      console.error(err)
      setSuccess("Une erreur est survenue ❌")
    }
  }

  return (
    <section className="w-full bg-[#f9f8f6] py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl px-6 md:px-12 py-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-black">
          Vous avez des questions ? <br className="hidden md:block" />
          <span className="block">Contactez-nous !</span>
        </h2>

        {success && (
          <p className="text-center mb-6 font-medium text-green-600">{success}</p>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <input
              type="text"
              placeholder="Votre nom"
              {...register("name")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Adresse email"
              {...register("email")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Votre téléphone"
              {...register("phone")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <select
              {...register("subject")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-100"
            >
              <option value="">Choisir un sujet</option>
              <option value="project">Nouveau projet</option>
              <option value="quote">Demander un devis</option>
              <option value="support">Support client</option>
            </select>
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <textarea
              placeholder="Écrivez votre message"
              rows={4}
              {...register("message")}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-100"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-red-100 text-black font-semibold py-3 px-8 rounded-full transition duration-300 ${
                isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:bg-re-50"
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "ENVOYER LE MESSAGE"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
