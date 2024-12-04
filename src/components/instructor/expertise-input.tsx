import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import { useState } from 'react';

interface ExpertiseInputProps {
  expertise: string[];
  setExpertise: (expertise: string[]) => void;
  error?: string;
}

export function ExpertiseInput({ expertise, setExpertise, error }: ExpertiseInputProps) {
  const [newExpertise, setNewExpertise] = useState('');

  const handleAddExpertise = () => {
    if (newExpertise.trim() && expertise.length < 5) {
      setExpertise([...expertise, newExpertise.trim()]);
      setNewExpertise('');
    }
  };

  const handleRemoveExpertise = (index: number) => {
    setExpertise(expertise.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          value={newExpertise}
          onChange={(e) => setNewExpertise(e.target.value)}
          placeholder="Add a skill (e.g., JavaScript, Photography)"
          className="flex-1"
        />
        <Button
          type="button"
          onClick={handleAddExpertise}
          disabled={expertise.length >= 5}
        >
          Add
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {expertise.map((skill, index) => (
          <span
            key={index}
            className="flex items-center space-x-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
          >
            <span>{skill}</span>
            <button
              type="button"
              onClick={() => handleRemoveExpertise(index)}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              <X className="h-4 w-4" />
            </button>
          </span>
        ))}
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}