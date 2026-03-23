import { Card, CardContent } from '@/components/ui/card';
import { QrCode, Shield, Zap, Globe } from 'lucide-react';

export function ProductOverviewSection() {
  return (
    <section id="overview" className="border-t bg-muted/50">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Why Smart QR?
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Smart QR is a next-generation QR code management platform built on the Internet Computer blockchain,
              offering unparalleled security, speed, and reliability.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Secure by Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Built on blockchain technology with Internet Identity authentication for maximum security.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Lightning Fast</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate and scan QR codes instantly with our optimized platform.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Always Available</h3>
                  <p className="text-sm text-muted-foreground">
                    Decentralized infrastructure ensures your QR codes are always accessible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-2">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="rounded-2xl bg-primary/10 p-8">
                    <QrCode className="h-24 w-24 text-primary" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-3">
                    The Complete QR Solution
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Smart QR provides everything you need to create, manage, and track QR codes for your business or personal use.
                    From simple URL encoding to advanced analytics, we've got you covered.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Generate QR codes for URLs, text, and more
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Scan QR codes with your device camera
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Store and manage your QR code history
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
