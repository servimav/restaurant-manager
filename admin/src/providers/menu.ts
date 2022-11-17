import { IProductCategory } from 'src/types';
import { InjectionKey, reactive } from 'vue';
/**
 * MenuProvider
 */
class MenuProvider {
  /**
   * categories
   */
  categories = reactive<IProductCategory[]>([
    {
      id: 1,
      tag: '',
      title: 'Alimentos',
    },
  ]);
}

export const Menu = new MenuProvider();
export const MenuKey: InjectionKey<MenuProvider> = Symbol('MenuProvider');
