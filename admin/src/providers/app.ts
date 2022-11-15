import { IApplication } from 'src/types';
import { InjectionKey, reactive } from 'vue';
/**
 * ApplicationProvider
 */
const useApplication = () => {
  /**
   * application
   */
  const application = reactive<IApplication>({
    active: false,
    created_at: new Date().toLocaleDateString(),
    description: '',
    id: 1,
    image_id: 1,
    logo_id: 2,
    settings: {},
    title: 'Application Title',
    updated_at: new Date().toLocaleDateString(),
  });

  return {
    application,
  };
};

export const Application = useApplication();
export const ApplicationKey: InjectionKey<typeof Application> =
  Symbol('useApplication');
