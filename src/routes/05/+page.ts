import { User } from '$lib/05-Props/User';

export async function load({ url }: { url: URL }) {
  // Beispiel: erlaube ?user=alice oder ?user=bob, um dynamische Props zu demonstrieren.
  const q = url.searchParams.get('user') ?? 'alice';

  const users: Record<string, User> = {
    alice: new User({ name: 'Alice Example', role: 'teacher', avatar: '/avatar-alice.jpg' }),
    bob: new User({ name: 'Bob Example', role: 'student', avatar: '/avatar-bob.jpg' }),
    eve: new User({ name: 'Eve Example', role: 'student' })
  };

  const result = 
  {
     user: users[q] ?? new User({ name: 'Guest', role: 'student' })
  };

  return result;
}
