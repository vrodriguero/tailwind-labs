<script setup>
import {ref} from "vue";

const grayCat = ref(null)
const grayCatLeg1 = ref(null)
const grayCatLeg2 = ref(null)
const orangeCat = ref(null)
const orangeCatLeg1 = ref(null)
const orangeCatLeg2 = ref(null)

const startCompleteAnimation = () => {
    alert('Meow! Level completed!')
    grayCat.value.classList.add('completed');
    orangeCat.value.classList.add('completed');
    orangeCatLeg1.value.classList.add('completed');
    orangeCatLeg2.value.classList.add('completed');
    grayCatLeg1.value.classList.add('completed');
    grayCatLeg2.value.classList.add('completed');

    setTimeout(() => {
        orangeCatLeg1.value.classList.remove('completed');
        orangeCatLeg2.value.classList.remove('completed');
        grayCatLeg1.value.classList.remove('completed');
        grayCatLeg2.value.classList.remove('completed');
    }, 2000)
}

defineExpose({
    startCompleteAnimation
})
</script>

<template>
    <div class="w-full bg-blue-200 flex items-end relative">
        <svg class="w-full" width="736" height="463" viewBox="0 0 736 463" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="cats">
                <g id="orange-cat" ref="orangeCat">
                    <ellipse id="Ellipse 3" cx="307" cy="402.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat">
                        <path id="body" d="M254.978 356.391C254.978 336.265 272.365 320.543 292.391 322.563L340.159 327.382C356.523 329.033 368.978 342.807 368.978 359.255V359.255C368.978 376.947 354.636 391.289 336.944 391.289H288.978C270.201 391.289 254.978 376.067 254.978 357.289V356.391Z" fill="#FB923C"/>
                        <rect id="leg-back" x="271.978" y="379.125" width="20" height="23" rx="9" transform="rotate(-0.961192 271.978 379.125)" fill="#FB923C"/>
                        <rect id="leg-front" x="319.978" y="379.125" width="20" height="23" rx="9" transform="rotate(-0.961192 319.978 379.125)" fill="#FB923C"/>
                        <g id="eye">
                            <path id="Vector 1" d="M360.977 350.789H333.978C333.978 350.789 333.978 362.275 347.653 362.774C361.328 363.274 360.977 350.789 360.977 350.789Z" fill="white"/>
                            <path id="Vector 2" d="M360.978 350.789H343.978C343.978 350.789 343.978 358.446 352.588 358.779C361.199 359.112 360.978 350.789 360.978 350.789Z" fill="black"/>
                        </g>
                        <g id="ear">
                            <path id="Vector 5" d="M330.211 331.847L324.812 344.868C324.131 346.508 321.81 346.514 321.121 344.878L316.039 332.809C315.514 331.562 316.354 330.164 317.702 330.041L328.182 329.089C329.68 328.953 330.787 330.457 330.211 331.847Z" fill="#F97316"/>
                            <path id="Intersect" d="M329.996 332.364L324.982 344.456L321.121 335.415C320.57 334.125 321.483 332.684 322.885 332.631L329.996 332.364Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars" d="M350.478 369.789L338.978 372.789M352.478 371.789L345.478 381.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail" d="M254.759 293.789C254.759 301.789 253.937 328.327 263.607 345.031L256.478 355.789C256.478 355.789 251.48 351.069 248.826 347.583C236.524 331.426 239.978 309.393 239.978 296.341C239.978 283.289 254.759 285.789 254.759 293.789Z" fill="#FB923C"/>
                        <path id="mouth" d="M368.978 362.789L367.978 359.789L365.978 364.189" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose" d="M365.978 358.122C365.978 358.859 366.575 359.456 367.312 359.456H368.645C369.381 359.456 369.978 358.859 369.978 358.122V358.122C369.978 357.386 369.381 356.789 368.645 356.789H367.312C366.575 356.789 365.978 357.386 365.978 358.122V358.122Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="black-cat">
                    <ellipse id="Ellipse 2" cx="307" cy="256.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat_2">
                        <path id="body_2" d="M254.978 210.391C254.978 190.265 272.365 174.543 292.391 176.563L340.159 181.382C356.523 183.033 368.978 196.807 368.978 213.255V213.255C368.978 230.947 354.636 245.289 336.944 245.289H288.978C270.201 245.289 254.978 230.067 254.978 211.289V210.391Z" fill="#111827"/>
                        <rect id="leg-back_2" x="271.978" y="233.125" width="20" height="23" rx="9" transform="rotate(-0.961192 271.978 233.125)" fill="#111827"/>
                        <rect id="leg-front_2" x="319.978" y="233.125" width="20" height="23" rx="9" transform="rotate(-0.961192 319.978 233.125)" fill="#111827"/>
                        <g id="eye_2">
                            <path id="Vector 1_2" d="M360.977 204.789H333.978C333.978 204.789 333.978 216.275 347.653 216.774C361.328 217.274 360.977 204.789 360.977 204.789Z" fill="white"/>
                            <path id="Vector 2_2" d="M360.978 204.789H343.978C343.978 204.789 343.978 212.446 352.588 212.779C361.199 213.112 360.978 204.789 360.978 204.789Z" fill="black"/>
                        </g>
                        <g id="ear_2">
                            <path id="Vector 5_2" d="M330.211 185.847L324.812 198.868C324.131 200.508 321.81 200.514 321.121 198.878L316.039 186.809C315.514 185.562 316.354 184.164 317.702 184.041L328.182 183.089C329.68 182.953 330.787 184.457 330.211 185.847Z" fill="#1F2937"/>
                            <path id="Intersect_2" d="M329.996 186.364L324.982 198.456L321.121 189.415C320.57 188.125 321.483 186.684 322.885 186.631L329.996 186.364Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars_2" d="M350.478 223.789L338.978 226.789M352.478 225.789L345.478 235.289" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail_2" d="M254.759 147.789C254.759 155.789 253.937 182.327 263.607 199.031L256.478 209.789C256.478 209.789 251.48 205.069 248.826 201.583C236.524 185.426 239.978 163.393 239.978 150.341C239.978 137.289 254.759 139.789 254.759 147.789Z" fill="#111827"/>
                        <path id="mouth_2" d="M368.978 216.789L367.978 213.789L365.978 218.189" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose_2" d="M365.978 212.122C365.978 212.859 366.575 213.456 367.312 213.456H368.645C369.381 213.456 369.978 212.859 369.978 212.122V212.122C369.978 211.386 369.381 210.789 368.645 210.789H367.312C366.575 210.789 365.978 211.386 365.978 212.122V212.122Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="gray-cat" ref="grayCat">
                    <ellipse id="Ellipse 1" cx="307" cy="123.5" rx="45" ry="5.5" fill="#6B7280"/>
                    <g id="cat_3">
                        <path id="body_3" d="M254.978 77.3914C254.978 57.2645 272.365 41.543 292.391 43.5631L340.159 48.3819C356.523 50.0326 368.978 63.8075 368.978 80.2546V80.2546C368.978 97.9467 354.636 112.289 336.944 112.289H288.978C270.201 112.289 254.978 97.0667 254.978 78.2891V77.3914Z" fill="#9CA3AF"/>
                        <rect id="leg-back_3" x="271.978" y="100.125" width="20" height="23" rx="9" transform="rotate(-0.961192 271.978 100.125)" fill="#9CA3AF"/>
                        <rect id="leg-front_3" x="319.978" y="100.125" width="20" height="23" rx="9" transform="rotate(-0.961192 319.978 100.125)" fill="#9CA3AF"/>
                        <g id="eye_3">
                            <path id="Vector 1_3" d="M360.977 71.7891H333.978C333.978 71.7891 333.978 83.2751 347.653 83.7745C361.328 84.2739 360.977 71.7891 360.977 71.7891Z" fill="#6EE7B7"/>
                            <path id="Vector 2_3" d="M360.978 71.7891H343.978C343.978 71.7891 343.978 79.4464 352.588 79.7793C361.199 80.1123 360.978 71.7891 360.978 71.7891Z" fill="black"/>
                        </g>
                        <g id="ear_3">
                            <path id="Vector 5_3" d="M330.211 52.8465L324.812 65.8675C324.131 67.508 321.81 67.5143 321.121 65.8776L316.039 53.8094C315.514 52.562 316.354 51.164 317.702 51.0415L328.182 50.0887C329.68 49.9525 330.787 51.4569 330.211 52.8465Z" fill="#4B5563"/>
                            <path id="Intersect_3" d="M329.996 53.3635L324.982 65.4564L321.121 56.415C320.57 55.1251 321.483 53.6836 322.885 53.6309L329.996 53.3635Z" fill="#FECDD3"/>
                        </g>
                        <path id="whiskars_3" d="M350.478 90.7891L338.978 93.7891M352.478 92.7891L345.478 102.289" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="tail_3" d="M254.759 14.7891C254.759 22.789 253.937 49.3275 263.607 66.0308L256.478 76.7891C256.478 76.7891 251.48 72.0694 248.826 68.583C236.524 52.4259 239.978 30.3934 239.978 17.3412C239.978 4.28906 254.759 6.7891 254.759 14.7891Z" fill="#9CA3AF"/>
                        <path id="mouth_3" d="M368.978 83.7891L367.978 80.7891L365.978 85.1891" stroke="black" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="nose_3" d="M365.978 79.1224C365.978 79.8587 366.575 80.4557 367.312 80.4557H368.645C369.381 80.4557 369.978 79.8587 369.978 79.1224V79.1224C369.978 78.386 369.381 77.789 368.645 77.789H367.312C366.575 77.789 365.978 78.386 365.978 79.1224V79.1224Z" fill="#FECDD3"/>
                    </g>
                </g>
                <g id="gray-bowl">
                    <path id="Ellipse 6" d="M447 401C447 407.075 430.658 412 410.5 412C390.342 412 374 407.075 374 401C374 399.488 375.012 398.048 376.842 396.737L384 386H437L444.158 396.737C445.988 398.048 447 399.489 447 401Z" fill="white"/>
                    <ellipse id="Ellipse 7" cx="410.5" cy="386.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2" x="404" y="397" width="14.2" height="12" rx="6" fill="#9CA3AF"/>
                    <path id="Intersect_4" d="M428 392.132C423.332 393.295 417.207 394 410.5 394C403.793 394 397.668 393.295 393 392.132V390C393 386.134 396.134 383 400 383H421C424.866 383 428 386.134 428 390V392.132Z" fill="#FEE2E2"/>
                </g>
                <g id="black-bowl">
                    <path id="Ellipse 6_2" d="M449 253C449 259.075 432.658 264 412.5 264C392.342 264 376 259.075 376 253C376 251.488 377.012 250.048 378.842 248.737L386 238H439L446.158 248.737C447.988 250.048 449 251.489 449 253Z" fill="white"/>
                    <ellipse id="Ellipse 7_2" cx="412.5" cy="238.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2_2" x="406" y="249" width="14.2" height="12" rx="6" fill="black"/>
                    <path id="Intersect_5" d="M430 244.132C425.332 245.295 419.207 246 412.5 246C405.793 246 399.668 245.295 395 244.132V242C395 238.134 398.134 235 402 235H423C426.866 235 430 238.134 430 242V244.132Z" fill="#FEE2E2"/>
                </g>
                <g id="orange-bowl">
                    <path id="Ellipse 6_3" d="M454 119C454 125.075 437.658 130 417.5 130C397.342 130 381 125.075 381 119C381 117.488 382.012 116.048 383.842 114.737L391 104H444L451.158 114.737C452.988 116.048 454 117.489 454 119Z" fill="white"/>
                    <ellipse id="Ellipse 7_3" cx="417.5" cy="104.5" rx="26.5" ry="7.5" fill="#D9D9D9"/>
                    <rect id="Rectangle 2_3" x="411" y="115" width="14.2" height="12" rx="6" fill="#F97316"/>
                    <path id="Intersect_6" d="M435 110.132C430.332 111.295 424.207 112 417.5 112C410.793 112 404.668 111.295 400 110.132V108C400 104.134 403.134 101 407 101H428C431.866 101 435 104.134 435 108V110.132Z" fill="#FEE2E2"/>
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

#gray-cat.completed {
    transform-origin: center;
    transform-box: fill-box;
    animation: gray-walk 2s linear forwards;
}

#orange-cat.completed {
    transform-origin: center center;
    transform-box: fill-box;
    animation: orange-walk 2s linear forwards;
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
        transform: translateY(-280px);
    }
}

@keyframes gray-walk {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateY(280px);
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
