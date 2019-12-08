<template>
  <button :type="type" class="ds-push-button" :style="styleOverride" v-on="$listeners">
    {{ value }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

interface StyleOverride {
  width: string
  padding: string
}

@Component
export default class DashiPushButton extends Vue {
  @Prop({ type: String, required: true })
  private value!: string

  @Prop({ type: String, required: false, default: 'button' })
  private type!: string

  @Prop({ type: Number, required: false, default: () => null })
  private width!: number | null

  @Prop({ type: Number, required: false, default: () => null })
  private padding!: number | null

  @Prop({ type: String, required: false, default: 'none' })
  private status!: 'none' | 'primary' | 'disabled'

  get styleOverride(): Partial<StyleOverride> {
    const value: Partial<StyleOverride> = {}
    if (this.width != null) {
      value.width = `${this.width}px`
    }
    if (this.padding != null) {
      value.padding = `inherit ${this.padding}px`
    }
    return value
  }
}
</script>

<style lang="scss">
.ds-push-button {
  font-size: 13px;
  border-radius: 3px;
  margin: 1px;
  padding: 0 0 1px 0;
  background: #fff;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.2);
  border: 0; // 1px solid rgba(0, 0, 0, 0.1);

  line-height: 1.4;

  &:active {
    color: #efefef;
    background: #888888;
    box-shadow: 0px 0px 0px 1px rgb(105, 105, 105);
  }

  &:focus {
    outline: none;
    /*box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.12), 0px 1px 0px rgba(0, 0, 0, 0.2),*/
    /*  0px 0px 0px 4px rgba(136, 136, 136, 0.2);*/
    filter: drop-shadow(0px 0px 2px rgba(200, 200, 200));
  }
}
</style>
