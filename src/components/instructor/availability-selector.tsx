import { cn } from '@/lib/utils';

interface AvailabilitySelectorProps {
  selectedSlots: string[];
  setSelectedSlots: (slots: string[]) => void;
  error?: string;
}

export const timeSlots = [
  'Morning (6 AM - 12 PM)',
  'Afternoon (12 PM - 5 PM)',
  'Evening (5 PM - 10 PM)',
  'Night (10 PM - 6 AM)',
] as const;

export function AvailabilitySelector({
  selectedSlots,
  setSelectedSlots,
  error,
}: AvailabilitySelectorProps) {
  const toggleTimeSlot = (slot: string) => {
    setSelectedSlots(
      selectedSlots.includes(slot)
        ? selectedSlots.filter((s) => s !== slot)
        : [...selectedSlots, slot]
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((slot) => (
          <button
            key={slot}
            type="button"
            onClick={() => toggleTimeSlot(slot)}
            className={cn(
              'rounded-md border p-2 text-sm transition-colors',
              selectedSlots.includes(slot)
                ? 'border-blue-600 bg-blue-50 text-blue-800'
                : 'border-gray-200 hover:border-blue-600'
            )}
          >
            {slot}
          </button>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}