<script setup>
import * as CatIcons from '@/Components/Cats'
import * as BowlIcons from '@/Components/Bowls'
import {ref} from "vue";

const props = defineProps({
    catOrder: Array,
    bowlOrder: Array,
})

const moveCat = ref(false);

const startCompleteAnimation = () => {
    alert('Meow! Level completed!')

    moveCat.value = true

    setTimeout(() => {
        moveCat.value = false
    }, 2000)
}

defineExpose({
    startCompleteAnimation
})
</script>

<template>
    <div class="w-full bg-blue-200 max-h-[50vh] flex items-end relative">
        <div class="h-[5vh] bg-red-300 w-full"></div>
        <svg class="absolute bottom-4 w-full" width="729" height="155" viewBox="0 0 729 155" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cats">
                <g v-for="cat in catOrder">
                    <component
                        :is="CatIcons[cat]"
                        v-model="moveCat"
                    />
                </g>
                <g v-for="cat in bowlOrder">
                    <component
                        :is="BowlIcons[cat]"
                    />
                </g>
            </g>
        </svg>
    </div>
</template>

<style>
#tail, #tail_2, #tail_3 {
    transform-origin: bottom center;
    transform-box: fill-box;
    animation: idle-tail 2s infinite alternate-reverse;
}

#body, #body_2, #body_3 {
    transform-origin: center center;
    transform-box: fill-box;
    animation: idle-body 2s infinite alternate-reverse;
}

#leg-back_3.completed,
#leg-front_3.completed,
#leg-back.completed ,
#leg-front.completed {
    transform-origin: center center;
    transform-box: fill-box;
    animation: moveLegs .5s infinite alternate-reverse;
}

@keyframes idle-tail {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}

@keyframes idle-body {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes orange-walk {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(512px);
    }
}

@keyframes gray-walk {
    0% {
        transform: translateX(0) scaleX(-1) ;
    }
    50% {
        transform: translateX(-510px) scaleX(-1) ;
    }
    99% {
        transform: translateX(-510px) scaleX(-1) ;
    }
    100% {
        transform: translateX(-510px) scaleX(1);
    }
}

@keyframes moveLegs {
    0% {
        transform: rotate(0deg) translateY(0);
    }
    50% {
        transform: rotate(45deg) translateY(2px);
    }
    100% {
        transform: rotate(-45deg) translateY(0);
    }
}
</style>
