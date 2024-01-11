"use client"
import { useRouter } from 'next/navigation'


export default function TransactionsList() {
  const router = useRouter()
  function logout() {
    router.push('/')
  }
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="flex items-center justify-center flex-col">
        <button onClick={logout}>
          Logout
        </button>
        <h1>Listagem de transações</h1>
      </div>
    </main>
  )
}