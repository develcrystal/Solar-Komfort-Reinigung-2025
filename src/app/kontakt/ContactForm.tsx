"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  privacy: boolean;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    mode: "onChange"
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          subject: `Kontaktanfrage von ${data.name}`,
        }),
      });

      if (response.ok) {
        setIsSubmitSuccessful(true);
        reset();
      } else {
        throw new Error('Fehler beim Senden der Nachricht');
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Ein unbekannter Fehler ist aufgetreten');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Vielen Dank!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns schnellstmöglich bei Ihnen melden.
          </p>
          <button
            onClick={() => setIsSubmitSuccessful(false)}
            className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            Neue Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
            placeholder="Ihr Name"
            {...register("name", { 
              required: "Name ist erforderlich",
              minLength: { value: 2, message: "Name muss mindestens 2 Zeichen lang sein" }
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            E-Mail *
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
            placeholder="Ihre E-Mail-Adresse"
            {...register("email", { 
              required: "E-Mail ist erforderlich",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ungültige E-Mail-Adresse"
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="Ihre Telefonnummer"
            {...register("phone")}
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nachricht *
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            }`}
            placeholder="Ihre Nachricht an uns"
            {...register("message", { 
              required: "Nachricht ist erforderlich",
              minLength: { value: 10, message: "Nachricht muss mindestens 10 Zeichen lang sein" }
            })}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
          )}
        </div>
        
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacy"
              type="checkbox"
              className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${
                errors.privacy ? 'border-red-500' : ''
              }`}
              {...register("privacy", { 
                required: "Sie müssen der Datenschutzerklärung zustimmen" 
              })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacy" className="font-medium text-gray-700 dark:text-gray-300">
              Ich stimme der <a href="/datenschutz" className="text-blue-600 hover:underline" target="_blank">Datenschutzerklärung</a> zu und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verwendet werden. *
            </label>
            {errors.privacy && (
              <p className="mt-1 text-red-600 dark:text-red-400">{errors.privacy.message}</p>
            )}
          </div>
        </div>

        {submitError && (
          <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-md">
            <p className="text-sm text-red-700 dark:text-red-400">{submitError}</p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`w-full px-6 py-3 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
            isSubmitting || !isValid
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wird gesendet...
            </span>
          ) : (
            'Nachricht senden'
          )}
        </button>
      </form>
    </div>
  );
};