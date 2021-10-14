export const variantsCard = {
    visible: { opacity: 1 , y: 0 , transition:{duration: 1 , ease: "easeOut"}},
    hidden: { opacity: 0  , y: 100},
}

export const variantsAboutLeft = {
    visible: { opacity: 1 , x: 0 , transition:{duration: 1.5 , delay: 0.5 , ease: "easeOut"} },
    hidden: { opacity: 0  , x: -100},
}

export const variantsAboutRight = {
    visible: { opacity: 1 , x: 0 , transition:{duration: 1.5 , delay: 0.5 , ease: "easeOut"} },
    hidden: { opacity: 0  , x: 100},
}

export const variantsHoverIcons = {
    whileHover:{ scale: 1.1 },
    whileTap:{ scale: 0.9 },
}

export const variantsSidebar = {
    open: { x: 0 , display:'block' , opacity: 1 , transition:{ duration: 1 , ease: "easeOut"}},
    closed: { x: -100 , display:'none' , opacity: 0 , transition:{ duration: 1 , ease: "easeOut"}},
}