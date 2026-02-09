import { ContactForm } from '../ContactForm';

export function ContactSection() {
  return (
    <section id="contact" className="border-t">
      <div className="container py-16 md:py-24">
        <div className="mx-auto max-w-[600px]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
