"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AdminRegister() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // form Validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // Store token and admin data
      localStorage.setItem("adminToken", data.token)
      localStorage.setItem("adminData", JSON.stringify(data.admin))

      // Redirect to dashboard
      router.push("/admin/dashboard")
    } catch (err: any) {
      setError(err.message || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white font-sans">
      <img
        src="/images/admin_bg.jpg"
        alt="Background"
        className=" absolute inset-0 w-full h-full object-cover opacity-10 blur-1xl"
      />

      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden m-4">
        <div className="w-full md:w-[40%] bg-[#261592] flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden text-white">
          <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full" />
          <div className="absolute bottom-20 left-5 w-32 h-32 bg-white/5 rounded-full" />

          {/* Logo */}
          <div className="absolute top-8 left-8 flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <img src="/images/Logo-01.png" className="w-4 h-4" alt="logo" />
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">Tirzah Communications</span>
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight">Welcome Admin!</h1>
            <p className="text-white/90 text-sm leading-relaxed max-w-[240px] mx-auto">
              Create your admin account to manage your platform effectively.
            </p>
          </div>
       
          <div className="mt-8">
            <a href="/admin/login" className="text-white hover:text-white/80 underline text-sm">
              Already have an account? Sign In
            </a>
          </div>
        </div>

        {/* Right Panel - Create Account Form */}
        <div className="w-full md:w-[60%] bg-white flex flex-col items-center justify-center p-8 md:p-16">
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-[#261592]">Create Account</h2>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Enter Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-10 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Enter your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-10 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Enter Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-10 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-10 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full h-12 bg-[#261592] hover:bg-[#56a7d7] text-white rounded-full font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#4DB8A8]/20 transition-all active:scale-95"
                >
                  SIGN UP
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
