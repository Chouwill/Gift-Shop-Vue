<script setup></script>

<template>
  <div>
    <div>訂單總覽</div>
    <div class="card bg-base-100 w-[90%] active:h-auto shadow-sm">
      <details
        class="collapse bg-base-100 border-base-300"
        name="my-accordion-det-1"
        open
      >
        <summary class="collapse-title font-semibold bg-gray-100 md:w-full">
          <div class="md:w-full flex justify-between items-center gap-3">
            <div class="md:text-lg text-[10px]">
              <div class="">訂單編號</div>
              <p class="">jfdojsfdjfdljfd</p>
            </div>

            <div class="md:text-lg text-[10px]">
              <div class="">訂單金額</div>
              <p class="">NT$300</p>
            </div>
            <div
              class="bg-amber-500 md:w-[60px] md:h-[30px] flex justify-center items-center w-[50px] h-[20px]">
              <div class="text-white md:text-sm text-[10px]">已完成</div>
            </div>
          </div>
        </summary>
        <div class="collapse-content text-sm">
          <ul
            class="timeline flex md:flex-row justify-center items-center md:transform-[scale(1)] transform-[scale(.5)]"
          >
            <li>
              <div class="timeline-middle">
                <div
                  class="w-[60px] h-[60px] rounded-full bg-amber-500 flex justify-center items-center"
                >
                  <i class="fa-solid fa-list text-white text-2xl"></i>
                </div>
              </div>
              <div class="timeline-end timeline-box">
                <div class="text-[12px font-bold text-center">訂單已成立</div>
                <div class="text-[12px font-bold text-center">2025-01-10</div>
              </div>
              <hr class="bg-amber-500 w-[50px]" />
            </li>
            <li>
              <hr class="bg-amber-500 w-[50px]" />
              <div class="timeline-middle">
                <div
                  class="w-[60px] h-[60px] rounded-full bg-amber-500 flex justify-center items-center"
                >
                  <i
                    class="fa-solid fa-money-bill-wave text-white text-2xl"
                  ></i>
                </div>
              </div>
              <div class="timeline-end timeline-box">
                <div class="text-[12px font-bold text-center">付款確認</div>
                <div class="text-[12px font-bold text-center">2025-01-10</div>
              </div>
              <hr class="bg-amber-500 w-[50px]" />
            </li>
            <li>
              <hr class="bg-amber-500 w-[50px]" />
              <div class="timeline-middle">
                <div
                  class="w-[60px] h-[60px] rounded-full bg-amber-500 flex justify-center items-center"
                >
                  <i class="fa-solid fa-truck text-white text-2xl"></i>
                </div>
              </div>
              <div class="timeline-end timeline-box">
                <div class="text-[12px font-bold text-center">訂單已出貨</div>
                <div class="text-[12px font-bold text-center">2025-01-10</div>
              </div>
              <hr class="bg-amber-500 w-[50px]" />
            </li>
            <li>
              <hr class="bg-amber-500 w-[50px]" />
              <div class="timeline-middle">
                <div
                  class="w-[60px] h-[60px] rounded-full bg-amber-500 flex justify-center items-center"
                >
                  <i class="fa-solid fa-check text-white text-2xl"></i>
                </div>
              </div>
              <div class="timeline-end timeline-box">
                <div class="text-[12px font-bold text-center">完成訂單</div>
                <div class="text-[12px font-bold text-center">2025-01-10</div>
              </div>
              <!-- <hr /> -->
            </li>
          </ul>
        </div>
      </details>
    </div>
  </div>
</template>
