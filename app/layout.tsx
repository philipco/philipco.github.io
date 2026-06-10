import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Constantin Philippenko, Ph.D. | Lead ML Scientist",
  description:
    "Lead ML Scientist in Paris working on NLP, LLM systems, RAG, MLOps, AI quality, federated learning and AI transformation.",
  keywords: [
    "Constantin Philippenko",
    "Machine Learning",
    "Federated Learning",
    "RAG",
    "LLM Systems",
    "MLOps",
    "AI Quality",
    "AI Lead",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
