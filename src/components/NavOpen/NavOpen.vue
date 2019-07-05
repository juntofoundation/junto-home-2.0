
<template>
    <div class="navOpen">
        <div class="navOpen__nav">
            <p class="navOpen__nav--item">&nbsp;</p>
            <slot name="navClose"></slot>
        </div>
        <div class="navOpen__body">
            <a href="/" class="navOpen__body--item removelink">
                HOME
            </a>
            <a href="/learn" class="navOpen__body--item removelink">
                Learn
            </a>
            <a href="/pack" class="navOpen__body--item removelink">
                Pack
            </a>
            <a href="/events" class="navOpen__body--item removelink">
                Events
            </a>
            <a href="/faq" class="navOpen__body--item removelink">
                FAQ
            </a>                                                
        </div>
    </div>
</template>
