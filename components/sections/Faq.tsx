import { FaqList } from '../FaqList';

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line bg-bg-2">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered honestly
          </h2>
        </div>
        <div className="mt-10">
          <FaqList />
        </div>
      </div>
    </section>
  );
}
