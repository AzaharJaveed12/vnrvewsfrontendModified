<template>
<div>
  <mdb-container class="mt-5">
    <mdb-carousel :interval="2000" showControls showIndicators full>
      <mdb-carousel-item img v-for="(image,i) in images" :src="image" mask="black-light" alt="First slide" :key=i>
        <mdb-carousel-caption title=" Title" text="Sub Text"></mdb-carousel-caption>
      </mdb-carousel-item>
      
    </mdb-carousel>
  </mdb-container>
</div>

</template>

<script>
  import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbLightbox, mdbCarousel, mdbCarouselItem, mdbCarouselCaption, mdbCard, mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbNavItem } from "mdbvue";
  export default {
    name: "GalleryPage",
    props:{
        images:{
          type:Array
        }
    },
    data() {
      return {
         
      }
    },
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon,
      mdbBtn,
      mdbLightbox,
      mdbCarousel,
      mdbCarouselItem,
      mdbCarouselCaption,
      mdbCard,
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbNavItem
    }
  }
</script>