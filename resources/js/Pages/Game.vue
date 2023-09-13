<script setup>
import { ref, watch } from "vue";
import { Head, useForm } from '@inertiajs/vue3';
import Level from "@/Components/Game/Level.vue"
import GameLayout from "@/Layouts/GameLayout.vue";
import { levels } from './levels.js'

const props = defineProps({
    level: {
        type: Number,
        required: true,
        default: 1,
    },
});

const level = ref(null)
const userInput = ref('');
const errorMessage = ref();

let levelConfig = levels;

const complete = () => {
    levelConfig[0].completed(userInput, errorMessage, level)
}

let showHint = ref(false)

const openHint = () => {
    showHint.value = ! showHint.value
}

const form = useForm({})

const nextLevel= () => {
    const currentLevel = parseInt(props.level);
    const nextLevel = currentLevel + 1;

    form.get(route('play.level', { level: nextLevel }));
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
            <Level
                ref="level"
                :catOrder="levelConfig[0].catOrder"
                :bowlOrder="levelConfig[0].bowlOrder"
            />
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

        <div class="flex flex-row mx-auto">
            <button
                @click="nextLevel"
                class="bg-blue-300 py-2 px-6 rounded-2xl">
                Next level
            </button>
        </div>
    </GameLayout>
</template>
