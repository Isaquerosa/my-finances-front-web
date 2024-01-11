"use client"
import { useState } from "react";
import SignInForm from "./SignInForm";
import firebaseAuth from "@/services/firebase";
import { useRouter } from "next/navigation";


interface FormState {
  email: string
  password: string
}

const initialValues = {
  email: '',
  password: '',
}

export default function SignIn() {
  const [formState, setFormState] = useState<FormState>(initialValues)
  const router = useRouter()

  async function handleSubmit(formValues: FormState) {
    setFormState(formValues)
    try {

      await firebaseAuth.signInWithEmailAndPassword(formValues.email, formValues.password)
      router.push('/transacoes')
    } catch (error) {
      console.log('Log da chamada', error)
    }
  }
  return (
    <SignInForm 
      email={formState.email}
      password={formState.password}
      handleSubmit={(values) => handleSubmit(values)}
    />
  )
}