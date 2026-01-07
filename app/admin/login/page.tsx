"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

// bg-[#261592]
// bg-[#56a7d7]

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminData", JSON.stringify(data.admin));

      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex overflow-hidden bg-neutral-50">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#261592] rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-[#56a7d7] rounded-tr-full" />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center gap-0 p-4 md:p-8">
        {/* Right Panel - Form Section (now on left visually) */}
        <div className="w-full md:w-[500px] h-[500px] bg-white rounded-3xl md:rounded-l-3xl md:rounded-r-none flex flex-col items-center justify-center p-12 shadow-2xl order-2 md:order-1">
          <div className="w-full max-w-sm space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-[#261592]">
                Sign in to Account
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
              <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
                {error}
              </div>
            )}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <Input
                id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email" required
                  className="pl-12 h-12 bg-gray-50 border-0 rounded-lg"
                />
              </div>

              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <Input
                id="password"
                  type="password"
                  value={password}
                  onChange= {(e) => setPassword(e.target.value)}
                  required
                  placeholder="********"
                  className="pl-12 h-12 bg-gray-50 border-0 rounded-lg"
                />
              </div>

              <div className="text-center">
                <a
                  href="/admin/forgot-password"
                  className="text-xs text-gray-500 hover:text-[#56a7d7] transition-colors"
                >
                  Forgot your password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#261592] hover:bg-[#56a7d7] text-white rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </div>
        </div>

        {/* Left Panel - Hello Section (now on right visually) */}
        <div className="w-full md:w-[400px] h-[500px] bg-[#261592] rounded-3xl md:rounded-r-3xl md:rounded-l-none flex flex-col items-center justify-center p-12 relative overflow-hidden shadow-2xl order-1 md:order-2">
          {/* Decorative circles */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full" />

          {/* Logo */}
          <div className="absolute top-8 right-8 flex items-center gap-2">
            <div className="w-8 h-8 bg-white/90 rounded flex items-center justify-center">
              <img src="/images/Logo-01.png" alt="Logo" className="w-6 h-6" />
            </div>
          </div>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-white">Hello, Admin</h1>
            <p className="text-white/90 text-sm max-w-xs leading-relaxed">
              Don't have an account yet?
            </p>
            <Link href="/admin/register">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#56a7d7] px-12 py-6 rounded-full font-medium transition-all duration-300"
              >
                SIGN UP
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';

// export default function AdminLogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Login failed');
//       }

//       localStorage.setItem('adminToken', data.token);
//       localStorage.setItem('adminData', JSON.stringify(data.admin));

//       router.push('/admin/dashboard');
//     } catch (err: any) {
//       setError(err.message || 'An error occurred during login');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
//       <Card className="w-full max-w-md shadow-2xl">
//         <CardHeader>
//           <div className="text-center space-y-2">
//             <h1 className="text-3xl font-bold">Admin Login</h1>
//             <p className="text-muted-foreground">Enter your credentials to access the admin panel</p>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && (
//               <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-md text-sm">
//                 {error}
//               </div>
//             )}

//             <div className="space-y-2">
//               <label htmlFor="email" className="text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="admin@example.com"
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <label htmlFor="password" className="text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                 placeholder="••••••••"
//                 required
//               />
//             </div>

//             <Button
//               type="submit"
//               className="w-full"
//               style={{ backgroundColor: '#261592' }}
//               disabled={loading}
//             >
//               {loading ? 'Logging in...' : 'Login'}
//             </Button>

//             <div className="text-center text-sm mt-4">
//               <span className="text-muted-foreground">Don't have an account? </span>
//               <Link href="/admin/register" className="text-[#261592] hover:underline font-medium">
//                 Create one
//               </Link>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
