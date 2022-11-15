import { AxiosError } from 'axios';
import { Notify, QSpinnerTail } from 'quasar';
import { INotifyPosition } from 'src/types/quasar';
import { $app, $user } from 'src/injectables';
import { $router } from 'src/boot/router';
import { ROUTE_NAME } from 'src/router';
/**
 * ErrorHandler
 */
class NotificationHelper {
  /**
   * axiosError
   * @param _error
   */
  axiosError<T = unknown>(
    _error: unknown,
    _default: string | undefined = 'Verifique su conexión'
  ) {
    const error = _error as AxiosError<T>;
    console.log({ error });
    if (error.response) {
      // Unauthorized
      if (error.response.status === 401) {
        $user.logout();
        return $router.push({ name: ROUTE_NAME.AUTH });
      }
      // Client Error
      else if (error.response.status >= 400 && error.response.status < 500) {
        if (error.response.data) {
          const responseData = error.response.data;
          if (Array.isArray(responseData)) {
            return this.error(responseData);
          }
        }
      }
      // Server Error
      else {
        return this.error([
          'Los servicios no están disponibles por el momento',
        ]);
      }
    } else if (_default) {
      return this.error([_default]);
    }
  }
  /**
   * Loading
   */
  private _loading: CallableFunction | undefined;
  /**
   * success
   * @param _p
   */
  success(_p: string[], timeout = 4000, position: INotifyPosition = 'center') {
    _p.forEach((message) => {
      Notify.create({
        type: 'positive',
        message,
        position,
        timeout,
        actions: [
          {
            label: 'x',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    });
  }
  /**
   * success
   * @param _p
   */
  error(_p: string[], timeout = 4000, position: INotifyPosition = 'center') {
    _p.forEach((message) => {
      Notify.create({
        type: 'negative',
        message,
        position,
        timeout,
        actions: [
          {
            label: 'x',
            color: 'white',
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    });
  }
  /**
   * loading
   * @param _load
   * @param message
   */
  loading(
    _load = true,
    spinner = true,
    message = '',
    timeout = 0,
    position: INotifyPosition = 'center'
  ) {
    $app.loading = _load;
    if (_load && spinner) {
      this._loading = Notify.create({
        spinner: QSpinnerTail,
        position,
        message,
        timeout,
      });
    } else {
      if (this._loading) this._loading();
    }
  }
}
/**
 * Notification Helper Instance
 */
export const notificationHelper = new NotificationHelper();
