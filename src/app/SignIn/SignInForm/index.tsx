import { Button } from "@/app/components/Button";
import { Input } from "@/app/components/Input";
import { Form, Formik } from "formik";
import { formValidationSchema } from "./schemas";

interface SignInFormProps {
  email: string
  password: string
  handleSubmit: (payload: { email: string; password: string }) => void
} 

export default function SignInForm({ email, password, handleSubmit }: SignInFormProps) {
  return (
    <Formik
      initialValues={{ email, password }}
      validationSchema={formValidationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await handleSubmit({
          ...values,
        })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <main className="flex items-center justify-center min-h-screen">
            <div className='w-full max-w-md flex flex-1 items-center justify-center flex-col mb-32'>
              <div className='flex flex-col'>
                <h1 className='text-lg mb-12'>Login</h1>
              </div>
              <div className='flex w-[70%] flex-col'>
                <Input 
                  name="email" 
                  label='Email' 
                  value={values.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email ? errors.email : ''}
                />
              </div>
              <div className='flex w-[70%] flex-col mt-8'>
                <Input 
                  name="password" 
                  label='Senha' 
                  type='password' 
                  value={values.password} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    errors.password && touched.password ? errors.password : ''
                  }
                />
              </div>
              <div className="flex w-[70%] flex-col mt-12">
                <Button 
                  name="submit-signin"
                  text="Entrar" 
                  type="submit"
                  isLoading={isSubmitting}
                />
              </div>
            </div>
          </main>
        </Form>
      )}
    </Formik>
  )
}