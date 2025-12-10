import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BFCTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border p-10 flex flex-col items-center gap-6 text-center">
          <h2 className="text-center z-10 text-lg md:text-5xl font-sans font-semibold">
            <span className="title-gradient">提升效率，从今天开始</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            访问 BitsFactor.com 了解更多工具与更新，或直接解锁 ClipboardShare Pro，体验更安全、更顺畅的跨设备云剪贴板。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="h-11 rounded-xl px-8 py-2 text-white border-2 border-primary">
              <Link href="https://bitsfactor.com" target="_blank" rel="noopener noreferrer nofollow">
                访问 BitsFactor.com
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-11 rounded-xl px-8 py-2">
              <Link href="https://clipboardshare.com" target="_blank" rel="noopener noreferrer nofollow">
                开始使用 ClipboardShare Pro
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

