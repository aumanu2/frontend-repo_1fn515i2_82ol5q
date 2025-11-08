import { Cpu, Radio, Wifi, Chip } from 'lucide-react';

const projects = [
  {
    title: 'Low-Power Environmental Sensor Node',
    icon: Wifi,
    stack: ['STM32', 'FreeRTOS', 'LoRa', 'MQTT'],
    description:
      'Ultra-low power node with adaptive sampling and OTA updates. Cloud telemetry and alerting.',
  },
  {
    title: 'BLE Wearable Health Tracker',
    icon: Radio,
    stack: ['nRF52', 'Zephyr RTOS', 'BLE 5', 'GATT'],
    description:
      'Custom firmware with motion analytics, secure pairing, and mobile app integration.',
  },
  {
    title: 'FPGA-Based Motor Control',
    icon: Cpu,
    stack: ['Xilinx', 'Verilog', 'PID', 'CAN'],
    description:
      'Deterministic control loops with sensor fusion and field-oriented control at 20kHz.',
  },
  {
    title: 'Edge AI Defect Detection',
    icon: Chip,
    stack: ['ESP32-S3', 'TinyML', 'TensorFlow Lite'],
    description:
      'On-device inference for real-time inspection with OTA model updates.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
            A selection of embedded and IoT builds showcasing firmware, connectivity, and hardware bring-up.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, icon: Icon, stack, description }) => (
            <article key={title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-600/10 text-indigo-600 p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s} className="text-xs rounded-md bg-black/5 dark:bg-white/10 px-2.5 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
