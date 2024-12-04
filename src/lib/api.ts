const API_URL = 'https://api.quickskill.dev';

export async function loginUser(email: string, password: string) {
  // This is a mock implementation. Replace with actual API call.
  if (email === 'demo@quickskill.dev' && password === 'demo') {
    return {
      user: {
        id: '1',
        email: 'demo@quickskill.dev',
        name: 'Demo User',
        isInstructor: false,
      },
      token: 'mock-jwt-token',
    };
  }
  throw new Error('Invalid credentials');
}

export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
}) {
  // This is a mock implementation. Replace with actual API call.
  return {
    user: {
      id: '1',
      email: data.email,
      name: data.name,
      isInstructor: false,
    },
    token: 'mock-jwt-token',
  };
}

export async function becomeInstructor(data: {
  expertise: string[];
  bio: string;
  hourlyRate: number;
  availability: string[];
}) {
  // This is a mock implementation. Replace with actual API call.
  return {
    success: true,
    message: 'Instructor profile created successfully',
  };
}