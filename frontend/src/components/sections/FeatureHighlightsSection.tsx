import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { QrCode, Scan, History, Download, Share2, Lock } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'QR Code Generation',
    description: 'Create custom QR codes instantly for URLs, text, contact information, and more.',
    badge: 'Core Feature',
  },
  {
    icon: Scan,
    title: 'Smart Scanning',
    description: 'Scan any QR code using your device camera with real-time detection and validation.',
    badge: 'Core Feature',
  },
  {
    icon: History,
    title: 'History Tracking',
    description: 'Keep track of all your generated and scanned QR codes in one convenient location.',
    badge: 'Popular',
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Download your QR codes in multiple formats including PNG, SVG, and PDF.',
    badge: 'Coming Soon',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your QR codes directly via email, social media, or messaging apps.',
    badge: 'Coming Soon',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and stored securely on the blockchain with full privacy controls.',
    badge: 'Security',
  },
];

export function FeatureHighlightsSection() {
  return (
    <section id="features" className="border-t">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-[980px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
              Everything you need to manage QR codes efficiently and securely
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
