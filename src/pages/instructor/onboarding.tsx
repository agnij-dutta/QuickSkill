import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ExpertiseInput } from '@/components/instructor/expertise-input';
import { AvailabilitySelector } from '@/components/instructor/availability-selector';
import { becomeInstructor } from '@/lib/api';
import { useAuth } from '@/lib/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Briefcase, Clock, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

const instructorSchema = z.object({
  expertise: z.array(z.string()).min(1, 'Add at least one area of expertise'),
  bio: z.string().min(50, 'Bio must be at least 50 characters'),
  hourlyRate: z.number().min(5, 'Minimum rate is $5').max(500, 'Maximum rate is $500'),
  availability: z.array(z.string()).min(1, 'Select at least one availability slot'),
});

type InstructorForm = z.infer<typeof instructorSchema>;

export function InstructorOnboardingPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [expertise, setExpertise] = useState<string[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InstructorForm>({
    resolver: zodResolver(instructorSchema),
    defaultValues: {
      expertise: [],
      availability: [],
    },
  });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const onSubmit = async (data: InstructorForm) => {
    try {
      setIsLoading(true);
      await becomeInstructor({
        ...data,
        expertise,
        availability: selectedSlots,
      });
      toast.success('Your instructor profile has been created!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to create instructor profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Become an Instructor</h1>
          <p className="text-gray-500">Share your expertise and earn by teaching others</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Expertise Section */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Areas of Expertise</h2>
            </div>
            <ExpertiseInput
              expertise={expertise}
              setExpertise={setExpertise}
              error={errors.expertise?.message}
            />
          </div>

          {/* Bio Section */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Professional Bio</h2>
            </div>
            <Textarea
              {...register('bio')}
              error={!!errors.bio}
              rows={4}
              placeholder="Tell us about your experience and what you can teach..."
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>

          {/* Rate Section */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Hourly Rate</h2>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">$</span>
              <Input
                type="number"
                {...register('hourlyRate', { valueAsNumber: true })}
                error={!!errors.hourlyRate}
                placeholder="25"
              />
              <span className="text-gray-500">per hour</span>
            </div>
            {errors.hourlyRate && (
              <p className="text-sm text-red-500">{errors.hourlyRate.message}</p>
            )}
          </div>

          {/* Availability Section */}
          <div className="space-y-4 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Availability</h2>
            </div>
            <AvailabilitySelector
              selectedSlots={selectedSlots}
              setSelectedSlots={setSelectedSlots}
              error={errors.availability?.message}
            />
          </div>

          <Button className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating Profile...' : 'Create Instructor Profile'}
          </Button>
        </form>
      </div>
    </div>
  );
}