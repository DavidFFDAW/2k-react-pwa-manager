export function navigateTopPage() { 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function navigateBottomPage() { 
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}