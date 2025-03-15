import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="relative py-16">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-cover bg-center opacity-30" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">FAQ</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="question-1">
            <AccordionTrigger className="text-xl font-semibold text-white">
              What is Robowars?
            </AccordionTrigger>
            <AccordionContent>
              Robowars is an 8-week robotics competition where teams design, build, and battle robots.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger className="text-xl font-semibold text-white">
              Who can participate?
            </AccordionTrigger>
            <AccordionContent>
              Anyone aged 14 and above, working in teams of up to 4 people.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger className="text-xl font-semibold text-white">
              How do I register?
            </AccordionTrigger>
            <AccordionContent>
              Registration details will be shared soon. Stay tuned!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
