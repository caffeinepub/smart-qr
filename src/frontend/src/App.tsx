import { ProductOverviewSection } from './components/sections/ProductOverviewSection';
import { FeatureHighlightsSection } from './components/sections/FeatureHighlightsSection';
import { ContactSection } from './components/sections/ContactSection';
import { EmbeddedSmartQrAuth } from './components/EmbeddedSmartQrAuth';
import { QrCode } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">Smart QR</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-sm font-medium transition-colors hover:text-primary">
              Overview
            </a>
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </a>
            <a href="#auth" className="text-sm font-medium transition-colors hover:text-primary">
              Login
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 lg:py-40">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Smart QR Code Management
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Create, scan, and manage QR codes with ease. Built on the Internet Computer for security and reliability.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#auth"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <ProductOverviewSection />

        {/* Feature Highlights */}
        <FeatureHighlightsSection />

        {/* Embedded Auth */}
        <section id="auth" className="border-t bg-muted/50">
          <div className="container py-16 md:py-24">
            <div className="mx-auto max-w-[980px]">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                  Access Your Account
                </h2>
                <p className="text-lg text-muted-foreground">
                  Login or register to start managing your QR codes
                </p>
              </div>
              <EmbeddedSmartQrAuth />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <QrCode className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Smart QR</span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2026. Built with ❤️ using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
