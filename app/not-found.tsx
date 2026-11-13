"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-ivory">
      <div className="max-w-md mx-auto text-center space-y-4">
        <span className="text-4xl font-bold font-sans text-primary">404</span>
        <h1 className="heading-section text-charcoal">પૃષ્ઠ મળ્યું નથી / Page Not Found</h1>
        <p className="text-subtitle text-sm">
          તમે શોધી રહ્યા છો તે પૃષ્ઠ ઉપલબ્ધ નથી. કૃપા કરીને મુખ્ય પૃષ્ઠ પર પાછા જાઓ.
        </p>
        <div className="pt-2">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>મુખ્ય પૃષ્ઠ પર પાછા જાઓ / Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

