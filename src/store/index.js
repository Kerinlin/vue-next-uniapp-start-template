import { createPinia } from 'pinia';

const store = createPinia();

export function setupPinia(app) {
  app.use(store);
}

export { store };
