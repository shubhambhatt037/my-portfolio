import React from 'react';
import { useForm } from '@formspree/react';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        recaptcha: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Full name field is required'),
        email: Yup.string().email('Invalid email').required('Email field is required'),
        message: Yup.string().required('Message field is required'),
        recaptcha:
          process.env.NODE_ENV !== 'development' ? Yup.string().required('Robots are not welcome yet!') : Yup.string(),
      })}
      onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldError }) => {
        try {
          await handleSubmit({
            name,
            email,
            message,
          });

          setTimeout(() => resetForm(), 4000);
        } catch (err) {
          alert('Something went wrong, please try again!');
        } finally {
          if (state.errors) {
            state.errors.getFormErrors().forEach((error) => {
              setFieldError('email', error.message);
            });

            state.errors.getAllFieldErrors().forEach(([field, fieldErrors]) => {
              fieldErrors.forEach((fieldError) => {
                setFieldError(field, fieldError.message);
              });
            });
          }
          setSubmitting(false);
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <div className="relative mb-4">
            <FastField
              type="text"
              name="name"
              placeholder="Full name*"
              className="input"
              style={{ width: '100%' }}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="name" />
          </div>
          <div className="relative mb-4">
            <FastField
              type="email"
              name="email"
              placeholder="Email*"
              className="input"
              style={{ width: '100%' }}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="email" />
          </div>
          <div className="relative mb-4">
            <FastField
              component="textarea"
              name="message"
              placeholder="Message*"
              className="input"
              style={{ width: '100%' }}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="message" />
          </div>
          {values.name && values.email && values.message && process.env.NODE_ENV !== 'development' && (
            <div className="relative mb-4">
              <FastField
                component={Recaptcha}
                sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY}
                name="recaptcha"
                onChange={(value: string) => setFieldValue('recaptcha', value)}
              />
              <ErrorMessage className="text-red-600 block mt-1" component="span" name="recaptcha" />
            </div>
          )}
          {state.succeeded && (
            <div className="relative mb-4">
              <div className="text-center">
                <h4 className="font-normal">
                  Your message has been successfully sent, I will get back to you ASAP!
                </h4>
              </div>
            </div>
          )}
          <div className="text-left">
            <button
              type="submit"
              className="bg-slate-400 text-white font-semibold py-2 px-4 rounded hover:bg-slate-700"
              disabled={isSubmitting}
              style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
