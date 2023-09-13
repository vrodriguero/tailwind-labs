<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { ref } from "vue";
import { Link } from '@inertiajs/vue3';
import background from '@/../../public/audio/background.wav';
import correct from '@/../../public/audio/correct.wav';
import incorrect from '@/../../public/audio/incorrect.wav';
import chatChatter from '@/../../public/audio/catChatter.wav';
import chatPurr from '@/../../public/audio/catPurr.wav';

const backgroundAudio = new Audio(background);
const correctAudio = new Audio(correct);
const incorrectAudio = new Audio(incorrect);
const catChatterAudio = new Audio(chatChatter);
const catPurrAudio = new Audio(chatPurr);

const levelCompleted = ref(false);

const playBackground = () => {
    if (levelCompleted.value === false) {
        backgroundAudio.volume = 0.1;
        backgroundAudio.play();
        backgroundAudio.loop = true;
    }
}

const levelComplete = () => {
    correctAudio.play();
    backgroundAudio.pause();
    catPurrAudio.volume = 0.1
    catPurrAudio.play();
    levelCompleted.value = true;
}

const incorrectAnswer = () => {
    incorrectAudio.play();
}

const catChatter = () => {
    catChatterAudio.play();
}

defineExpose({
    playBackground,
    levelComplete,
    incorrectAnswer,
    catChatter,
})
</script>

<template>
    <div class="min-h-screen flex flex-col pt-4 bg-gray-900">
        <div class="w-full px-6 py-4">
            <div>
                <Link href="/" class="text-white font-bold text-2xl">
                    Tailwind-Labs
                </Link>
            </div>
        </div>
        <div class="w-full mt-6 px-6 py-4 flex flex-col flex-grow">
            <div class="flex flex-grow">
                <slot name="canvas" />
            </div>
            <slot />
        </div>
    </div>
</template>
