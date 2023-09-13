<script setup>

import {ref, watch} from "vue";

let props = defineProps({
    modelValue: Boolean
})

const orangeCat = ref(null)
const orangeCatLeg1 = ref(null)
const orangeCatLeg2 = ref(null)

watch(() => props.modelValue,
    () => {
    orangeCat.value.classList.add('completed')
    orangeCatLeg1.value.classList.add('completed')
    orangeCatLeg2.value.classList.add('completed')

    setTimeout(() => {
        orangeCat.value.classList.remove('completed')
        orangeCatLeg1.value.classList.remove('completed')
        orangeCatLeg2.value.classList.remove('completed')
    }, 2000)
})
</script>

<template>
    <g id="orange-cat" ref="orangeCat">
        <ellipse id="Ellipse 3" cx="73" cy="145.5" rx="45" ry="5.5" fill="#6B7280"/>
        <g id="cat">
            <path id="body" d="M20.9783 99.3914C20.9783 79.2645 38.3655 63.543 58.3908 65.5631L106.159 70.3819C122.523 72.0326 134.978 85.8075 134.978 102.255V102.255C134.978 119.947 120.636 134.289 102.944 134.289H54.9783C36.2006 134.289 20.9783 119.067 20.9783 100.289V99.3914Z" fill="#FB923C"/>
            <rect ref="orangeCatLeg1" id="leg-back" x="37.9783" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 37.9783 122.125)" fill="#FB923C"/>
            <rect ref="orangeCatLeg2" id="leg-front" x="85.9783" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 85.9783 122.125)" fill="#FB923C"/>
            <g id="eye">
                <path id="Vector 1" d="M126.977 93.7891H99.9783C99.9783 93.7891 99.9783 105.275 113.653 105.774C127.328 106.274 126.977 93.7891 126.977 93.7891Z" fill="white"/>
                <path id="Vector 2" d="M126.978 93.7891H109.978C109.978 93.7891 109.978 101.446 118.588 101.779C127.199 102.112 126.978 93.7891 126.978 93.7891Z" fill="black"/>
            </g>
            <g id="ear">
                <path id="Vector 5" d="M96.2105 74.8465L90.8116 87.8675C90.1314 89.508 87.81 89.5143 87.1208 87.8776L82.0395 75.8094C81.5142 74.562 82.3538 73.164 83.7017 73.0415L94.182 72.0887C95.6802 71.9525 96.7867 73.4569 96.2105 74.8465Z" fill="#F97316"/>
                <path id="Intersect" d="M95.9962 75.3635L90.982 87.4564L87.1206 78.415C86.5698 77.1251 87.4832 75.6836 88.8848 75.6309L95.9962 75.3635Z" fill="#FECDD3"/>
            </g>
            <path id="whiskars" d="M116.478 112.789L104.978 115.789M118.478 114.789L111.478 124.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="tail" d="M20.7595 36.7891C20.7595 44.789 19.9375 71.3275 29.6071 88.0308L22.4782 98.7891C22.4782 98.7891 17.4802 94.0694 14.8258 90.583C2.52408 74.4259 5.97822 52.3934 5.97824 39.3412C5.97826 26.2891 20.7595 28.7891 20.7595 36.7891Z" fill="#FB923C"/>
            <path id="mouth" d="M134.978 105.789L133.978 102.789L131.978 107.189" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="nose" d="M131.978 101.122C131.978 101.859 132.575 102.456 133.312 102.456H134.645C135.381 102.456 135.978 101.859 135.978 101.122V101.122C135.978 100.386 135.381 99.789 134.645 99.789H133.312C132.575 99.789 131.978 100.386 131.978 101.122V101.122Z" fill="#FECDD3"/>
        </g>
    </g>
</template>

<style>
#orange-cat.completed {
    transform-origin: center center;
    transform-box: fill-box;
    animation: orange-walk 2s linear forwards;
}
</style>
