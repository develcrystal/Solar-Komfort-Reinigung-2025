"use client";

import React, { useState } from 'react';
import { Container } from './Container';
import Image from 'next/image';

type Step = {
  id: number;
  title: string;
  description?: string;
  options?: {
    id: string;
    label: string;
    icon?: string;
    value: string;
  }[];
  inputType?: 'options' | 'text' | 'email' | 'tel' | 'number' | 'date' | 'textarea';
  placeholder?: string;
  isRequired?: boolean;
  condition?: (data: FormData) => boolean;
};

type FormData = {
  [key: string]: string;
};

type LeadFunnelProps = {
  title: string;
  subtitle?: string;
  steps: Step[];
  onSubmit?: (data: FormData) => void;
  primaryColor?: string;
  secondaryColor?: string;
  showProgressBar?: boolean;
  externalIsSubmitting?: boolean;
  externalError?: string | null;
};

export const LeadFunnel: React.FC<LeadFunnelProps> = ({
  title,
  subtitle,
  steps,
  onSubmit,
  primaryColor = '#3B82F6', // Blau als Standard
  secondaryColor = '#FFA500', // Orange als Standard
  showProgressBar = true,
  externalIsSubmitting,
  externalError,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Verwende externe Zustände, wenn sie bereitgestellt werden
  const submitting = externalIsSubmitting !== undefined ? externalIsSubmitting : isSubmitting;
  const errorMessage = externalError !== undefined ? externalError : error;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = () => {
    if (externalIsSubmitting !== undefined) {
      // Wenn externe Übermittlung verwendet wird, rufe einfach onSubmit auf
      if (onSubmit) {
        onSubmit(formData);
      }
    } else {
      // Ansonsten verwende den internen Zustand
      setIsSubmitting(true);
      setError(null);
      
      // Simuliere eine API-Anfrage
      setTimeout(() => {
        if (onSubmit) {
          try {
            onSubmit(formData);
          } catch (err) {
            setError('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
            setIsSubmitting(false);
            return;
          }
        }
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    }
  };

  const isStepComplete = (step: Step) => {
    if (step.isRequired && step.inputType) {
      return formData[`step_${step.id}`] !== undefined && formData[`step_${step.id}`] !== '';
    }
    return true;
  };

  // Filtere die Schritte basierend auf der condition-Eigenschaft
  const visibleSteps = steps.filter(step => !step.condition || step.condition(formData));
  
  // Bestimme den aktuellen Schritt im gefilterten Array
  const currentStepData = visibleSteps[currentStep];
  
  // Berechne den Fortschritt basierend auf den sichtbaren Schritten
  const progressPercentage = ((currentStep + 1) / visibleSteps.length) * 100;

  if (submitted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 max-w-md mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Vielen Dank!</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden. 
            Eine Bestätigungsmail wurde an die von Ihnen angegebene E-Mail-Adresse gesendet.
          </p>
          <button
            onClick={() => {
              setFormData({});
              setCurrentStep(0);
              setSubmitted(false);
            }}
            className="px-6 py-2 text-white rounded-full"
            style={{ backgroundColor: primaryColor }}
          >
            Neue Anfrage
          </button>
        </div>
      </div>
    );
  }



  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
      {showProgressBar && (
        <div className="w-full h-2 bg-gray-200">
          <div
            className="h-full transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercentage}%`, backgroundColor: primaryColor }}
          ></div>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-gray-600 dark:text-gray-300 mb-6">{subtitle}</p>}
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{currentStepData.title}</h3>
          {currentStepData.description && (
            <p className="text-gray-600 dark:text-gray-300 mb-4">{currentStepData.description}</p>
          )}

          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {errorMessage}
            </div>
          )}

          {currentStepData.inputType === 'options' && currentStepData.options && (
            <div className="grid grid-cols-2 gap-4">
              {currentStepData.options.map((option) => (
                <button
                  key={option.id}
                  className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center text-center ${
                    formData[`step_${currentStepData.id}`] === option.value
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                      : 'border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600'
                  }`}
                  onClick={() => handleChange(`step_${currentStepData.id}`, option.value)}
                >
                  {option.icon && (
                    <div className="mb-2">
                      <Image src={option.icon} alt={option.label} width={40} height={40} />
                    </div>
                  )}
                  <span className="font-medium">{option.label}</span>
                </button>
              ))}
            </div>
          )}

          {currentStepData.inputType === 'text' && (
            <input
              type="text"
              placeholder={currentStepData.placeholder || ''}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
            />
          )}

          {currentStepData.inputType === 'email' && (
            <input
              type="email"
              placeholder={currentStepData.placeholder || 'E-Mail-Adresse'}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
            />
          )}

          {currentStepData.inputType === 'tel' && (
            <input
              type="tel"
              placeholder={currentStepData.placeholder || 'Telefonnummer'}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
            />
          )}

          {currentStepData.inputType === 'number' && (
            <input
              type="number"
              placeholder={currentStepData.placeholder || ''}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
            />
          )}

          {currentStepData.inputType === 'date' && (
            <input
              type="date"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
            />
          )}

          {currentStepData.inputType === 'textarea' && (
            <textarea
              placeholder={currentStepData.placeholder || ''}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
              value={formData[`step_${currentStepData.id}`] || ''}
              onChange={(e) => handleChange(`step_${currentStepData.id}`, e.target.value)}
              required={currentStepData.isRequired}
              rows={4}
            />
          )}
        </div>

        <div className="flex justify-between">
          {currentStep > 0 ? (
            <button
              onClick={handlePrevious}
              className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Zurück
            </button>
          ) : (
            <div></div> // Platzhalter für die Ausrichtung
          )}
          
          <button
            onClick={handleNext}
            disabled={!isStepComplete(currentStepData) || submitting}
            className={`px-6 py-2 text-white rounded-full ${
              !isStepComplete(currentStepData) || submitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:opacity-90'
            }`}
            style={{ backgroundColor: primaryColor }}
          >
            {submitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Wird gesendet...
              </span>
            ) : currentStep === steps.length - 1 ? (
              'Absenden'
            ) : (
              'Weiter'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
