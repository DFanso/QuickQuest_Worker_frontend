"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoggedNavbar from "@/components/loggedNavbar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { Oval } from 'react-loader-spinner';
import Loader from "@/components/Loader";
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });


// Define props type for AuthenticatedLayout
type AuthenticatedLayoutProps = {
  children: ReactNode;
};

// RootLayout component
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AuthenticatedLayout>
            {children}
            <Footer />
          </AuthenticatedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {user ? <LoggedNavbar /> : <Navbar />}
      {children}
    </>
  );
};