import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { getEmbedUrl } from '../config/landing';

export function EmbeddedSmartQrAuth() {
  const embedUrl = getEmbedUrl();

  if (!embedUrl) {
    return (
      <Card>
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              The Smart QR authentication embed URL is not configured. Please set the VITE_SMART_QR_EMBED_URL environment variable.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            title="Smart QR Login/Register"
            allow="camera; microphone"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </CardContent>
    </Card>
  );
}
