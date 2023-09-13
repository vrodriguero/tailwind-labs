<script setup>

import {ref, watch} from "vue";

let props = defineProps({
    modelValue: Boolean
})

const grayCat = ref(null)
const grayCatLeg1 = ref(null)
const grayCatLeg2 = ref(null)

watch(() => props.modelValue,
    () => {
        grayCat.value.classList.add('completed')
        grayCatLeg1.value.classList.add('completed')
        grayCatLeg2.value.classList.add('completed')

        setTimeout(() => {
            grayCatLeg1.value.classList.remove('completed')
            grayCatLeg2.value.classList.remove('completed')
        }, 2000)
    })
</script>

<template>
    <g id="gray-cat" ref="grayCat">
        <ellipse id="Ellipse 1" cx="582" cy="145.5" rx="45" ry="5.5" fill="#6B7280"/>
        <g id="cat_3">
            <path id="body_3" d="M529.978 99.3914C529.978 79.2645 547.365 63.543 567.391 65.5631L615.159 70.3819C631.523 72.0326 643.978 85.8075 643.978 102.255V102.255C643.978 119.947 629.636 134.289 611.944 134.289H563.978C545.201 134.289 529.978 119.067 529.978 100.289V99.3914Z" fill="#9CA3AF"/>
            <rect ref="grayCatLeg1" id="leg-back_3" x="546.978" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 546.978 122.125)" fill="#9CA3AF"/>
            <rect ref="grayCatLeg2" id="leg-front_3" x="594.978" y="122.125" width="20" height="23" rx="9" transform="rotate(-0.961192 594.978 122.125)" fill="#9CA3AF"/>
            <g id="eye_3">
                <path id="Vector 1_3" d="M635.977 93.7891H608.978C608.978 93.7891 608.978 105.275 622.653 105.774C636.328 106.274 635.977 93.7891 635.977 93.7891Z" fill="#6EE7B7"/>
                <path id="Vector 2_3" d="M635.978 93.7891H618.978C618.978 93.7891 618.978 101.446 627.588 101.779C636.199 102.112 635.978 93.7891 635.978 93.7891Z" fill="black"/>
            </g>
            <g id="ear_3">
                <path id="Vector 5_3" d="M605.211 74.8465L599.812 87.8675C599.131 89.508 596.81 89.5143 596.121 87.8776L591.039 75.8094C590.514 74.562 591.354 73.164 592.702 73.0415L603.182 72.0887C604.68 71.9525 605.787 73.4569 605.211 74.8465Z" fill="#4B5563"/>
                <path id="Intersect_3" d="M604.996 75.3635L599.982 87.4564L596.121 78.415C595.57 77.1251 596.483 75.6836 597.885 75.6309L604.996 75.3635Z" fill="#FECDD3"/>
            </g>
            <path id="whiskars_3" d="M625.478 112.789L613.978 115.789M627.478 114.789L620.478 124.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="tail_3" d="M529.76 36.7891C529.76 44.789 528.937 71.3275 538.607 88.0308L531.478 98.7891C531.478 98.7891 526.48 94.0694 523.826 90.583C511.524 74.4259 514.978 52.3934 514.978 39.3412C514.978 26.2891 529.76 28.7891 529.76 36.7891Z" fill="#9CA3AF"/>
            <path id="mouth_3" d="M643.978 105.789L642.978 102.789L640.978 107.189" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
            <path id="nose_3" d="M640.978 101.122C640.978 101.859 641.575 102.456 642.312 102.456H643.645C644.381 102.456 644.978 101.859 644.978 101.122V101.122C644.978 100.386 644.381 99.789 643.645 99.789H642.312C641.575 99.789 640.978 100.386 640.978 101.122V101.122Z" fill="#FECDD3"/>
        </g>
    </g>
</template>

<style>
#gray-cat.completed {
    transform-origin: center;
    transform-box: fill-box;
    animation: gray-walk 2s linear forwards;
}
</style>
