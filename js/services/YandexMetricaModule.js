/**
 * Модуль Яндекс.Метрики
 * Отложенная загрузка и управление трекингом в зависимости от согласий пользователя
 */
const YandexMetricaModule = {
  state: {
    loaded: false,
    initialized: false,
    counterId: null
  },

  init() {
    console.log('[YandexMetricaModule] init() called');
    this.state.counterId = window.CONFIG?.YANDEX?.METRIKA_COUNTER_ID || '109146519';
    console.log('[YandexMetricaModule] Counter ID:', this.state.counterId);
    if (typeof Logger !== 'undefined') {
      Logger.INFO('[YandexMetricaModule] Ready, counter ID:', this.state.counterId);
    } else {
      console.log('[YandexMetricaModule] Ready, counter ID:', this.state.counterId);
    }
  },

  enable() {
    console.log('[YandexMetricaModule] enable() called, initialized =', this.state.initialized);
    if (this.state.initialized) {
      console.log('[YandexMetricaModule] Already enabled, skipping');
      if (typeof Logger !== 'undefined') Logger.INFO('[YandexMetricaModule] Already enabled');
      return;
    }

    console.log('[YandexMetricaModule] Starting _loadScript()...');
    this._loadScript()
      .then(() => {
        console.log('[YandexMetricaModule] _loadScript() resolved, calling _initCounter()');
        this._initCounter();
        this.state.initialized = true;
        console.log('[YandexMetricaModule] Enabled and counter initialized successfully');
        if (typeof Logger !== 'undefined') {
          Logger.INFO('[YandexMetricaModule] Enabled and counter initialized');
        } else {
          console.log('[YandexMetricaModule] Enabled and counter initialized');
        }
      })
      .catch(err => {
        console.error('[YandexMetricaModule] _loadScript() rejected:', err.message);
        if (typeof Logger !== 'undefined') {
          Logger.ERROR('[YandexMetricaModule] Failed to load Yandex.Metrika script:', err.message);
        } else {
          console.error('[YandexMetricaModule] Failed to load Yandex.Metrika script:', err.message);
        }
      });
  },

  disable() {
    console.log('[YandexMetricaModule] disable() called, counterId =', this.state.counterId);
    if (typeof window.ym !== 'function' || !this.state.counterId) {
      console.warn('[YandexMetricaModule] Cannot disable: ym not a function or no counterId');
      return;
    }

    try {
      window.ym(this.state.counterId, 'userParams', { analytics_enabled: false });
      window.ym(this.state.counterId, 'hit', window.location.href, {
        params: { analytics: 'disabled' }
      });
      console.log('[YandexMetricaModule] Disabled tracking (userParams + hit sent)');
      if (typeof Logger !== 'undefined') {
        Logger.INFO('[YandexMetricaModule] Disabled tracking');
      } else {
        console.log('[YandexMetricaModule] Disabled tracking');
      }
    } catch (error) {
      console.error('[YandexMetricaModule] Error disabling analytics:', error.message);
      if (typeof Logger !== 'undefined') {
        Logger.WARN('[YandexMetricaModule] Error disabling analytics:', error.message);
      } else {
        console.warn('[YandexMetricaModule] Error disabling analytics:', error.message);
      }
    } finally {
      this.state.initialized = false;
      console.log('[YandexMetricaModule] state.initialized set to false');
    }
  },

  _loadScript() {
    console.log('[YandexMetricaModule] _loadScript() started');
    return new Promise((resolve, reject) => {
      if (this.state.loaded) {
        console.log('[YandexMetricaModule] Script already loaded, resolving immediately');
        resolve();
        return;
      }

      // Стандартная заглушка, как в оригинальном коде Яндекс.Метрики
      window.ym = window.ym || function() {
        (window.ym.a = window.ym.a || []).push(arguments);
      };
      window.ym.l = 1 * new Date();
      console.log('[YandexMetricaModule] window.ym stub created');

      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://mc.yandex.ru/metrika/tag.js';
      console.log('[YandexMetricaModule] Script element created, src =', script.src);

      script.onload = () => {
        console.log('[YandexMetricaModule] Script onload fired, loaded = true');
        this.state.loaded = true;
        resolve();
      };
      script.onerror = (err) => {
        console.error('[YandexMetricaModule] Script onerror fired:', err);
        reject(new Error('Script load error'));
      };

      document.head.appendChild(script);
      console.log('[YandexMetricaModule] Script appended to head');
      
      // ПРИМЕЧАНИЕ: Скрипт остается в DOM после загрузки, это ожидаемое поведение.
      // Библиотека Яндекс.Метрики требует постоянного присутствия скрипта для корректной работы.
      // Удаление скрипта приведет к неработоспособности трекинга и потере данных аналитики.
    });
  },

  _initCounter() {
    const id = this.state.counterId;
    console.log('[YandexMetricaModule] _initCounter() called for id:', id);
    try {
      window.ym(id, 'init', {
        // ssr: true,
        webvisor: false,
        clickmap: false,
        ecommerce: 'dataLayer',
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
      });
      console.log('[YandexMetricaModule] ym() init call completed successfully');
      if (typeof Logger !== 'undefined') {
        Logger.INFO('[YandexMetricaModule] Counter init called with id:', id);
      } else {
        console.log('[YandexMetricaModule] Counter init called with id:', id);
      }
    } catch (e) {
      console.error('[YandexMetricaModule] Error during counter init:', e.message);
      if (typeof Logger !== 'undefined') {
        Logger.ERROR('[YandexMetricaModule] Error during counter init:', e.message);
      } else {
        console.error('[YandexMetricaModule] Error during counter init:', e.message);
      }
    }
  }
};

if (typeof window !== 'undefined') {
  window.YandexMetricaModule = YandexMetricaModule;
  YandexMetricaModule.init();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = YandexMetricaModule;
}