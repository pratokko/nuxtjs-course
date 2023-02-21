

export default defineNuxtRouteMiddleware(() => {
    const pagevisitCount = usePagevisitCount()
    pagevisitCount.value++
    console.log("working globally");
})