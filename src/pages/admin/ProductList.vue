<script setup lang="ts">
import { users, User, Products } from '@/types/index'
import { FwbModal } from 'flowbite-vue'
const userSelected = ref<User>()

const isShowModal = ref(false),
    closeModal = () => {
        isShowModal.value = false
        userSelected.value = undefined
    },
    showModal = (u: User) => {
        isShowModal.value = true
        userSelected.value = u
    },
    deleteProduct = (p: Products) => {
        useSwal().fire({
            title: 'Delete Product',
            icon: 'warning',
            text: 'Hapus Produk ' + p.name + ' ?',
            showCancelButton: true
        })
    },
    router = useRouter()
</script>
<template>
    <fwb-modal v-if="isShowModal" @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                Profil
            </div>
        </template>
        <template #body>
            <div class="flex flex-row gap-x-4 overflow-y-scroll">
                <div class=" p-4 overflow-y-scroll w-full rounded-xl h-[32rem]">
                    <div v-for="p in userSelected?.products"
                        class="flex justify-between p-2 my-2 rounded-xl bg-gray-300">
                        <div class="flex gap-x-4 justify-between w-full p-2">
                            <div class="flex flex-col items-center bg-white p-4 rounded-xl">
                                <img :src="p.thumbnail" class="w-30 h-24" alt="">
                                <h1 class="text-lg font-bold">{{ p.name }}</h1>
                                <h1 class="font-thin text-sm">Rp.{{ p.price }}</h1>
                                <h1>{{ p.isAvailable ? 'Tersedia' : 'Terjual' }}</h1>
                            </div>


                            <div class="flex gap-x-4 items-center">
                                <button class="px-4 py-2 h-fit bg-red-500 text-white rounded-xl"
                                    @click="deleteProduct(p)">Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </fwb-modal>
    <div class="flex flex-col w-full">
        <div class="flex w-full items-end justify-end py-2 px-4">
            <button class="px-4 py-2 bg-red-500 text-white font-bold rounded-xl" @click="router.push({name:'admin-login'})">Keluar</button>
        </div>

        <div class="w-full flex items-center justify-center h-full">
            <div class="bg-gray-300 p-4 overflow-scroll w-[65%] rounded-xl">
                <div v-for="u in users" class="flex justify-between bg-gray-100 p-2 my-2 rounded-xl">
                    <div class="flex gap-x-4">
                        <div class="w-8 h-8 rounded-full bg-gray-500"></div>
                        <div class="flex flex-col">
                            <h1 class="text-lg font-bold">{{ u.fullName }}</h1>
                            <h1 class="font-thin text-sm">Aktif</h1>
                        </div>
                    </div>
                    <div class="flex gap-x-4">
                        <button class="px-4 bg-blue-500 text-white rounded-xl" @click="showModal(u)">Rincian</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>