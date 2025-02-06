<template>
    <div ref="featuredRecommendationsSection" class="fade-in-left">
        <div id="featuredCarousel" class="carousel slide featured-section shadow-sm rounded-3" data-bs-ride="carousel"
            data-bs-interval="5000">
            <div class="carousel-inner">
                <div v-for="(product, index) in featuredProducts" :key="product.id"
                    :class="['carousel-item', { active: index === 0 }]">
                    <div class="featured-content d-flex align-items-center">
                        <div class="featured-image">
                            <img :src="product.thumbnail" class="featured-product-img" alt="Product Image" />
                        </div>
                        <div class="featured-info">
                            <h3 class="featured-title">{{ product.title }}</h3>
                            <p class="featured-price text-primary fw-bold">${{ product.price }}</p>
                            <RatingStars :rating="product.rating" />
                            <NuxtLink :to="'/products/' + product.id" class="btn btn-featured">Buy now</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
    featuredProducts: Array
})

const featuredRecommendationsSection = ref(null)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        },
        { threshold: 0.2 }
    )

    if (featuredRecommendationsSection.value) {
        observer.observe(featuredRecommendationsSection.value)
    }
})
</script>

<style scoped>
.fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-left.visible {
    opacity: 1;
    transform: translateX(0);
}

.featured-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.featured-info {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.featured-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

.featured-price {
    font-size: 1.5rem;
    margin-bottom: 20px;
}

.btn-featured {
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;
    align-self: start;
}

.btn-featured:hover {
    background-color: black;
    color: white;
}

.carousel-control-prev,
.carousel-control-next {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
}

.carousel-control-prev {
    left: 10px;
}

.carousel-control-next {
    right: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

.carousel-control-prev:hover .carousel-control-prev-icon,
.carousel-control-next:hover .carousel-control-next-icon {
    background-color: rgba(0, 0, 0, 0.9);
}

@media (max-width: 768px) {
    .carousel-control-prev,
    .carousel-control-next {
        padding: 8px;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 30px;
        height: 30px;
    }
}

@media (max-width: 480px) {
    .carousel-control-prev,
    .carousel-control-next {
        padding: 5px;
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        width: 15px;
        height: 15px;
    }
}

.featured-product-img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

@media (max-width: 768px) {
    .featured-content {
        flex-direction: column;
        text-align: center;
    }

    .featured-info {
        padding: 20px;
        text-align: center;
    }

    .featured-title {
        font-size: 1.5rem;
    }

    .featured-price {
        font-size: 1.2rem;
    }
}
</style>