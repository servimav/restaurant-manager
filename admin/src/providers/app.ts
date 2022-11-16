import { IApplication } from 'src/types';
import { InjectionKey, reactive, ref } from 'vue';
/**
 * ApplicationProvider
 */
class ApplicationProvider {
  /**
   * application
   */
  application = reactive<IApplication>({
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
  /**
   * headerTitle
   */
  headerTitle = ref('Inicio');
}

export const Application = new ApplicationProvider();
export const ApplicationKey: InjectionKey<ApplicationProvider> =
  Symbol('useApplication');
