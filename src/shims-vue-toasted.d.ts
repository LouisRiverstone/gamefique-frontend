import { ComponentCustomProperties } from 'vue'
import { Toasted } from 'vue-toasted';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $toasted: Toasted;
  }
}
