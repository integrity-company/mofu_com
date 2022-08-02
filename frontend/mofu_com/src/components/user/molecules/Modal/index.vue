<script setup lang="ts">
import Button from '../../atoms/Button/index.vue'
</script>

<template>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>
            <slot name="body" />
          </p>
        </div>
        <div class="modal-footer">
          <Button data-bs-dismiss="modal" @click="$emit('primary')">
            <slot name="primary-btn" />
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
