<template lang="pug">
.img-infografica
  .img-infografica__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infografica__content(v-if="elements.length")
    .img-infografica__item(
        v-for="(item, index) in elements"
        :key="'img-infografica-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}]"
        @mouseover="selected = item.id"
        @mouseleave="selected = 0"
      )
      
      .img-infografica__item__dot 
      .img-infografica__item__letra
        span {{item.letra}}
        
    .img-infografica__card(
      v-for="item in elements"
      :key="'img-infografica-card-'+item.id"
      :ref="'card-ref-'+item.id"
      :style="getCardCords(item.id)"
      :class="{'img-infografica__card--selected' : selected === item.id}"
      @mouseover="selected = item.id"
      @mouseleave="selected = 0"
      v-child="item.elm"
    )
    .img-infografica__indicador(
      v-if="firstElement && showIndicator"
      :style="[{top: firstElement.y},{left: firstElement.x}]"
    )
      .indicador--hover

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../components/componentSlotMixins'
export default {
  name: 'ImagenInfografica2',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getCardCords(cardId) {
      const ref = 'card-ref-' + cardId
      if (!(ref in this.$refs)) {
        return [{ top: 0 }, { left: 0 }]
      }

      const currentCard = this.elements.find(card => card.id === cardId)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      const imgObj = {
        w: imgElement.clientWidth,
        h: imgElement.clientHeight,
      }
      const cardElement = this.$refs[ref][0]
      const cardObj = {
        x: parseInt(currentCard.x, 10),
        y: parseInt(currentCard.y, 10),
        w: cardElement.clientWidth,
        h: cardElement.clientHeight,
      }

      const cardPosY = (cardObj.y / 100) * imgObj.h
      const cardPosX = (cardObj.x / 100) * imgObj.w

      const finalObj = []

      if (cardPosY + cardObj.h > imgObj.h) {
        finalObj.push({ bottom: 0 })
      } else {
        finalObj.push({ top: currentCard.y })
      }

      if (cardPosX + cardObj.w > imgObj.w) {
        finalObj.push({ right: 0 })
      } else {
        finalObj.push({ left: currentCard.x })
      }

      return finalObj
    },
  },
}
</script>

<style lang="sass">
.img-infografica
  position: relative
  &__item
    position: absolute
    cursor: pointer
    transform: translate(-50%,-50%)
    width: 1.5%
    &__letra
      position: absolute
      transform: translate(-50%,-50%)
      left: 50%
      top: 50%
      span
        font-weight: bold
    &__dot
      position: relative
      width: 100%
      padding-top: 100%
      &:before, &:after
        content: ''
        display: block
        width: 100%
        height: 100%
        border-radius: 50%
        position: absolute
        top: 0
        left: 0
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out
        opacity: 1
      &:before
        animation: pulse 2s infinite
        pointer-events: none
  &__card
    position: absolute
    width: 300px
    opacity: 0
    pointer-events: none
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out
    transform: translateY(-10px)
    cursor: pointer
    border: 2px solid $color-secundario
    border-radius: 20px
    background-color: $white

    &--selected
      opacity: 1
      transform: translateY(0)
      pointer-events: auto
  &__indicador
    position: absolute

  &.color-primario
    .img-infografica__item__dot
      &:before, &:after
        background-color: $color-primario
  &.color-secundario
    .img-infografica__item__dot
      &:before, &:after
        background-color: $color-secundario
  &.color-acento-contenido
    .img-infografica__item__dot
      &:before, &:after
        background-color: $color-acento-contenido
  &.color-acento-botones
    .img-infografica__item__dot
      &:before, &:after
        background-color: $color-acento-botones

  @media (max-width: $bp-max-sm)
    &__item
      width: 5%

@keyframes pulse
  0%
    transform: scale(1)
    opacity: .7
  100%
    transform: scale(2)
    opacity: 0
</style>
