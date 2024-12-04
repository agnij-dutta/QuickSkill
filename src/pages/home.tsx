import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function HomePage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Learn Any Skill in
            <span className="block text-blue-400">15 Minutes or Less</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-xl text-gray-300">
            Connect with experts for quick, focused learning sessions. Master new skills one micro-lesson at a time.
          </p>
          
          <div className="mt-10">
            <div className="flex items-center justify-center gap-4">
              <div className="relative rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  placeholder="Search for skills..."
                />
              </div>
              <Button size="lg">
                Find Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}