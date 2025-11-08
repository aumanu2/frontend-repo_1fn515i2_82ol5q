import { Send } from 'lucide-react';

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    alert(`Thanks ${data.name}! I will reply at ${data.email}.`);
    form.reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Have a project or idea? Let’s build it.</p>
        </div>
        <form onSubmit={submit} className="grid gap-4 bg-white dark:bg-neutral-900 p-6 rounded-xl border border-black/10 dark:border-white/10 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" required placeholder="Email" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" required rows="5" placeholder="Tell me about your project" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500" />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 font-semibold shadow hover:bg-indigo-500 transition">
            Send message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
