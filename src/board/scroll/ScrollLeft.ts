export const moveTimeLeft = (scrollTimeRef : any) => {
    scrollTimeRef.current?.scrollTo({
        left: scrollTimeRef.current.scrollLeft - scrollTimeRef.current.offsetWidth,
        behavior: 'smooth',
    })
}
export const moveLookupLeft = (scrollLookupRef : any) => {
    scrollLookupRef.current?.scrollTo({
        left: scrollLookupRef.current.scrollLeft - scrollLookupRef.current.offsetWidth,
        behavior: 'smooth',
    })
}
export const moveLikeLeft = (scrollLikeRef : any) => {
    scrollLikeRef.current?.scrollTo({
        left: scrollLikeRef.current.scrollLeft - scrollLikeRef.current.offsetWidth,
        behavior: 'smooth',
    })
}