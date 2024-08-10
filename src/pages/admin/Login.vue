<script setup lang="ts">
const router = useRouter()
</script>
<template>
    <div class="justify-center translate-y-52 flex w-full">
        <div class="w-1/2 flex flex-col p-2 gap-y-4">
            <h1 class="text-xl border-b-2 border-black pb-2 text-center">Masuk Akun</h1>

            <div class="flex flex-col gap-y-2">
                <label for="">Alamat Email</label>
                <input type="text" placeholder="Masukkan Email Anda" class="p-2 rounded-xl bg-gray-200">
            </div>

            <div class="flex flex-col gap-y-2">
                <label for="">Password</label>
                <input type="text" placeholder="Masukkan Password Anda" class="p-2 rounded-xl bg-gray-200">
            </div>

            <button class="p-2 bg-black text-white text-center font-bold rounded-xl"
            @click="router.push('user-list')">Masuk</button>
        </div>
    </div>
</template>