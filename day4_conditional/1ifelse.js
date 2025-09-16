let spped = 87;

if (spped > 80) {
    console.log("You are going too fast! Slow down.");
} else {
    console.log("You are driving within the speed limit.");
}

if (spped > 80) {
    if (spped > 100) {
        console.log("You are going too fast! Slow down immediately.");
    } else {
        console.log("You are going too fast! Slow down.");
    }
}