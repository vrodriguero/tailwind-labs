<script setup>
import { ref, watch, onMounted } from "vue";
import { Head } from '@inertiajs/vue3';
import Level1 from "@/Components/Game/Level1.vue"
import GameLayout from "@/Layouts/GameLayout.vue";
import background from '@/../../public/audio/background.mp3';
import correct from '@/../../public/audio/correct.wav';
import incorrect from '@/../../public/audio/incorrect.wav';
import chatChatter from '@/../../public/audio/catChatter.wav';
import chatPurr from '@/../../public/audio/catPurr.wav';

const props = defineProps({
    level: {
        type: Number,
        required: true,
        default: 1,
    },
});

const level1 = ref(null)
const userInput = ref('');
const errorMessage = ref();
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
    }
}

const complete = () => {
    if (userInput.value === 'flex-row-reverse') {
        correctAudio.play();
        backgroundAudio.pause();
        catPurrAudio.volume = 0.1
        catPurrAudio.play();
        errorMessage.value = false
        level1.value.startCompleteAnimation();
        levelCompleted.value = true;
    }
    else if (userInput.value === 'flex-row' || userInput.value === 'row-reverse') {
        errorMessage.value = "you are this 👌🏼 close to the answer. Try again!"
        incorrectAudio.play();
    }
    else if (userInput.value.length === 0) {
        errorMessage.value = "you need to write something!!"
        incorrectAudio.play();
    }
    else {
        errorMessage.value = "Nope! that's not it."
        incorrectAudio.play();
    }
}

let showHint = ref(false)
const openHint = () => {
    showHint.value = ! showHint.value
    catChatterAudio.play();
}

const inputWidth = () => {
    if (userInput.value.length === 0) {
        return '100px';
    }
    return userInput.value.length * 10 + 'px';
}

watch(userInput, () => {
    inputWidth()
})

</script>

<template>
    <Head title="Dashboard" />

    <GameLayout>
        <template #canvas>
            <Level1 ref="level1" @click="playBackground"/>
        </template>
        <div class="flex gap-8 mx-auto my-10">
            <form>
                <div class="flex flex-row text-white text-lg items-center gap-3">
                    <p class=" text-gray-500">1</p>
                    <div class="flex">
                        <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> div </p>
                        <p class="text-gray-400 ml-2"> class=</p>
                        <p class="text-blue-300 font-light">
                            "flex
                            <input
                                v-model="userInput"
                                :style="{width: inputWidth()}"
                                class="p-0 -mt-1 ml-2 text-md text-center text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-60"
                            >
                            "
                        </p>
                        <p class="text-gray-500"> &gt; </p>
                        <p class="mx-2">Help cats to eat in their bowl</p>
                        <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p><p class="text-gray-500"> &gt; </p>
                    </div>
                </div>
                <div v-if="errorMessage">
                    <p  class="text-red-500 text-sm m-2">{{ errorMessage }}</p>
                </div>
                <div class="flex flex-col text-gray-700 w-fit">
                    <button
                        @click.prevent="complete"
                        class="bg-blue-300 text-sm px-6 py-1 mt-5 rounded-full"
                    >
                        Submit
                    </button>
                    <button
                        @click.prevent="openHint"
                        class="bg-blue-300 text-sm px-6 py-1 mt-5 rounded-full"
                    >
                        need a paw  🐾 ?
                    </button>
                </div>
            </form>
            <div class="border-2 border-gray-600 mx-auto p-8 text-gray-400 text-lg bg-gray-800">
                <h1 class="font-bold text-xl my-3">Level 1: Flex Direction</h1>
                <p>you need to use flex direction to control the direction of cats</p>
            </div>

        </div>
        <div v-if="showHint" class="group w-2/3 flex mx-auto gap-8 my-10 p-8 border-2 border-gray-600 text-gray-400 text-lg bg-gray-800">
            <p class="group-hover:hidden transition delay-700 duration-300 ease-in-out">
                Just kidding! <br>
                you need to use row-reverse to make the cats eat in their bowl
            </p>
            <p class="hidden group-hover:block transition delay-700 duration-300 ease-in-out">

                Meow meow meow meow meow meow meow <br> meow meow meow meow !
            </p>
        </div>
    </GameLayout>
</template>
