import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-96">
        <h1 className="text-2xl font-bold">Our Package</h1>
        <div className="border p-4 rounded-lg shadow-lg">
          <Image
            src={ "/app/public/packing1.png" }
            alt="Package 1"
            width={180}
            height={120}
            className="rounded"
          />
          <h2 className="text-xl font-semibold mt-4">Package 1</h2>
          <p className="mt-2">This package offers a comprehensive set of tools and resources to help you achieve your goals. It includes detailed guides, exclusive content, and personalized support to ensure your success.</p>
          <p className="mt-2 font-bold">$99.99</p>
        </div>
      </main>
    </div>
  );
}
