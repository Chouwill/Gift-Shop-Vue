<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useProductStore } from "@/stores/useCart";

const modal = ref(true);
const dialogRef = ref<HTMLDialogElement | null>(null);
const productStore = useProductStore();
productStore.fetchProduct();

function openCart() {}

// 組件掛載時自動開啟 dialog
onMounted(() => {
  if (dialogRef.value && modal.value) {
    dialogRef.value.showModal();
  }
});
</script>

<template>
  <div>
    <button class="btn" @click="openCart">open modal</button>
    <dialog
      ref="dialogRef"
      id="my_modal_5"
      class="modal modal-bottom sm:modal-middle border relative"
      v-if="modal"
    >
      <div class="modal-box w-11/12 max-w-2xl">
        <div
          class="modal-header w-full flex justify-between absolute top-3 right-0"
        >
          <h2 class="modal-title text-left font-medium ml-4">購物車</h2>
          <button class="mr-4"><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="mt-7">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr
                v-for="(item, idx) in productStore.products"
                :key="item.id"
                class="hover:bg-amber-400 w-[90%]"
              >
                <td class="" rowspan="1">
                  <div
                    class="md:w-[254px] w-[100px] flex justify-start items-center gap-5 !border"
                  >
                    <div class="img-box">
                      <img
                        :src="item.image_url"
                        :alt="item.name"
                        class="md:w-[80px] md:h-[80px] w-[50px] h-[50px] object-cover"
                      />
                    </div>
                    <div class="product-information flex flex-col">
                      <h2 class="text-xs">{{ item.name }}</h2>
                      <h2 class="text-xs">{{ item.price }}</h2>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="flex justify-center items-center gap-2">
                    <button class="btn btn-sm">
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <div>9</div>
                    <button class="btn btn-sm">
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </td>
                <td>
                  <div>
                    NT$
                    {{ item.price }}
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  </div>
</template>
