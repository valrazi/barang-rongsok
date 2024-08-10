<script setup lang="ts">
import { users, User } from '@/types/auth'
import { FwbModal, FwbInput, FwbTextarea } from 'flowbite-vue'
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
    deleteUser = (u: User) => {
        useSwal().fire({
            title:'Delete User',
            icon: 'warning',
            text: 'Hapus Pengguna ' + u.fullName + ' ?',
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
            <div class="flex flex-row gap-x-4">
                <div class="bg-white p-4 w-[25%]">
                    <img :src="userSelected?.photo" alt="" class="w-24 h-24">
                </div>

                <div class="bg-white rounded-xl p-2 flex flex-col gap-y-2 w-full ">
                    <div class="flex flex-row gap-x-4 ">
                        <fwb-input v-model="userSelected!.fullName!" placeholder="" label="Nama" class="w-full" 
                        :disabled="true"/>
                    </div>

                    <div class="flex flex-row gap-x-4 ">
                        <fwb-input v-model="userSelected!.birthDate!" placeholder="" label="Tanggal Lahir"
                            class="w-full" :disabled="true" />
                    </div>

                    <div class="flex flex-row gap-x-4 ">
                        <fwb-input v-model="userSelected!.gender!" placeholder="" label="Jenis Kelamin"
                            class="w-full"  :disabled="true"/>
                    </div>

                    <div class="flex flex-row gap-x-4 ">
                        <fwb-input v-model="userSelected!.email!" placeholder="" label="Email" class="w-full"  :disabled="true"/>
                    </div>

                    <fwb-textarea v-model="userSelected!.address!" :rows="4" label="Alamat"
                        placeholder="Write your message..." :disabled="true"/>
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
                        <button class="px-4 bg-red-500 text-white rounded-xl" @click="deleteUser(u)">Hapus</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>