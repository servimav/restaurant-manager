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

  private _tableNumber = ref(0);

  set table(n: number) {
    this._tableNumber.value = n;
  }
  get table() {
    return this._tableNumber.value;
  }
}

export const Application = new ApplicationProvider();
export const ApplicationKey: InjectionKey<ApplicationProvider> =
  Symbol('useApplication');
