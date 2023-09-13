<script setup>
import { ref, watch } from "vue";
import {Head, useForm} from '@inertiajs/vue3';
import Level2 from "@/Components/Game/Level2.vue"
import GameLayout from "@/Layouts/GameLayout.vue";


const props = defineProps({
    level: {
        type: Number,
        required: true,
        default: 2,
    },
});

const gameLayout = ref(null)
const level2 = ref(null)
const userInput = ref('');
const errorMessage = ref();

const complete = () => {
    if (userInput.value === 'flex-col-reverse') {
        gameLayout.value.levelComplete();
        errorMessage.value = false
        level2.value.startCompleteAnimation();
    }
    else if (userInput.value === 'flex-col' || userInput.value === 'col-reverse') {
        errorMessage.value = "you are this 👌🏼 close to the answer. Try again!"
        gameLayout.value.incorrectAnswer();

    }
    else if (userInput.value.length === 0) {
        errorMessage.value = "you need to write something!!"
        gameLayout.value.incorrectAnswer();

    }
    else {
        errorMessage.value = "Nope! that's not it."
        gameLayout.value.incorrectAnswer();

    }
}

let showHint = ref(false)
const openHint = () => {
    showHint.value = ! showHint.value
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

const form = useForm({})
const previousLevel= () => {
    const currentLevel = parseInt(props.level);
    const previousLevel = currentLevel - 1;

    form.get(route('play.level', { level: previousLevel }));
}
const nextLevel= () => {
    const currentLevel = parseInt(props.level);
    const nextLevel = currentLevel + 1;

    form.get(route('play.level', { level: nextLevel }));
}

const playBackground = () => {
    gameLayout.value.playBackground()
}
</script>

<template>
    <Head title="Dashboard" />

    <GameLayout>
        <template #canvas>
            <Level2 ref="level2" @click="playBackground"/>
            <component :is="'Game' + level" ref="currentLevel" />

        </template>
        <div class="flex gap-8 mx-auto my-10">
            <form>
                <div class="flex flex-row text-white text-lg items-center gap-3">
                    <div class="flex flex-col gap-1">
                        <div class="flex flex-row">
                            <p class=" text-gray-500">1</p>
                            <div class="flex flex-row mx-4">
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
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <p class="text-gray-500">2</p>
                            <div class="flex flex-row mx-8">
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> div </p> <p class="text-gray-500"> &gt; </p>
                                gray cat
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p> <p class="text-gray-500"> &gt; </p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <p class="text-gray-500">3</p>
                            <div class="flex flex-row mx-8">
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> div </p> <p class="text-gray-500"> &gt; </p>
                                black cat
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p> <p class="text-gray-500"> &gt; </p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <p class="text-gray-500">4</p>
                            <div class="flex flex-row mx-8">
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> div </p> <p class="text-gray-500"> &gt; </p>
                                orange cat
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p> <p class="text-gray-500"> &gt; </p>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <p class="text-gray-500">5</p>
                            <div class="flex flex-row mx-4">
                                <p class="text-gray-500"> &lt; </p><p class="text-pink-500"> /div </p><p class="text-gray-500"> &gt; </p>
                            </div>
                        </div>
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
            <div class="flex flex-col gap-2 border-2 border-gray-600 mx-auto justify-center p-4 text-gray-400 text-lg bg-gray-800">
                <h1 class="font-bold text-xl">Level 2: Flex Direction</h1>
                <p> Helps Cats to reach their bowls! </p>
                <p> you need to use flex direction to control the direction of cats 🙂</p>
            </div>

        </div>
        <div v-if="showHint" class="w-2/3 flex mx-auto gap-8 my-10 p-8 border-2 border-gray-600 text-gray-400 text-lg bg-gray-800">
            <p class="">
                you need to use col-reverse to make the cats eat in their bowl
            </p>
        </div>

        <div class="flex flex-row gap-2 mx-auto">
            <button
                @click="previousLevel"
                class="bg-gray-300 py-2 px-6 rounded-2xl">
                Previous level
            </button>
            <button
                @click="nextLevel"
                class="bg-blue-300 py-2 px-6 rounded-2xl">
                Next level
            </button>
        </div>
    </GameLayout>
</template>
