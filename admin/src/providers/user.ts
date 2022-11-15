import { IUser } from 'src/types';
import { InjectionKey, ref } from 'vue';
/**
 * useUser
 * @returns
 */
const useUser = () => {
  /**
   * profile
   */
  const profile = ref<IUser>({
    id: 0,
    name: '',
    phone: '',
    created_at: '',
    role: {
      id: 0,
      name: 'admin',
    },
    updated_at: '',
  });
  return {
    profile,
  };
};

export const User = useUser();
export const UserKey: InjectionKey<typeof User> = Symbol('useUser');
