export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            I’m an embedded systems engineer passionate about bringing hardware to life with clean, maintainable firmware. My work spans board bring‑up, driver development, RTOS architectures, and secure connectivity to the cloud.
          </p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            I collaborate closely with hardware, mobile, and cloud teams to deliver end‑to‑end products. I care deeply about power budgets, deterministic timing, and shipping reliable updates over‑the‑air.
          </p>
        </div>
        <ul className="space-y-3">
          {[
            'Bare‑metal C/C++ and Rust for MCUs',
            'RTOS design (FreeRTOS, Zephyr) and concurrency',
            'Connectivity: BLE, Wi‑Fi, LoRa, LTE‑M, CAN',
            'Bootloaders, OTA, and secure key management',
            'Test automation, CI, and hardware‑in‑the‑loop',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-600" />
              <span className="text-neutral-800 dark:text-neutral-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
