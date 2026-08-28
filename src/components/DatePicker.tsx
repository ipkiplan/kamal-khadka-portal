import { useState } from 'react';
import { CalendarIcon } from 'lucide-react';
import { format, parse, isValid } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface DatePickerProps {
  id?: string;
  name: string;
  value: string; // YYYY-MM-DD, matching the app's existing form-state format
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
}

export function DatePicker({
  id,
  value,
  onChange,
  placeholder = 'Select a date',
}: DatePickerProps) {
  const [open, setOpen] = useState(false);

  const selectedDate = value
    ? parse(value, 'yyyy-MM-dd', new Date())
    : undefined;

  const displayValue =
    selectedDate && isValid(selectedDate)
      ? format(selectedDate, 'PPP')
      : '';

  // Only future dates are allowed:
  // today and all previous dates are disabled.
  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-white focus:outline-none focus:border-gold-500 transition-colors text-left flex items-center justify-between gap-2"
        >
          <span className={displayValue ? '' : 'text-white/40'}>
            {displayValue || placeholder}
          </span>

          <CalendarIcon
            className="w-4 h-4 text-white/50 flex-shrink-0"
            aria-hidden="true"
          />
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] min-w-[var(--radix-popover-trigger-width)] p-0 bg-[#1a1a1a] border-white/20"
        align="start"
      >
        <Calendar
          mode="single"
          className="w-full"
          disabled={{ before: tomorrow }}
          selected={
            selectedDate && isValid(selectedDate)
              ? selectedDate
              : undefined
          }
          onSelect={(date) => {
            onChange(date ? format(date, 'yyyy-MM-dd') : '');
            setOpen(false);
          }}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
}