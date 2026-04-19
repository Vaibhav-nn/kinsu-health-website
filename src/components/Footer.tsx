import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold text-white">Kinsu</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#ai"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              AI Technology
            </Link>
            <Link
              href="#security"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Security
            </Link>
            <Link
              href="#contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Kinsu Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
