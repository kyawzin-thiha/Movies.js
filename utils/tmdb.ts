const getUpcoming = async (page = 1) => {
    try {
        const response = await fetch(`${process.env.API_URL}3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        })
        if (response.ok) {
            const data = await response.json();
            return [true, data];
        } else {
            return [false, "Error occur while fetching data"];
        }
    } catch (error) {
        return [false, "Internal Server Error"]
    }
}

const getLatests = async (page = 1) => {
    try {
        const response = await fetch(`${process.env.API_URL}3/movie/latest?api_key=${process.env.API_KEY}&language=en-US&page=${page}`, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        })
        if (response.ok) {
            const data = await response.json();
            return [true, data];
        } else {
            return [false, "Error occur while fetching data"];
        }
    } catch (error) {
        return [false, "Internal Server Error"]
    }
}

const getPopular = async (page = 1) => {
    try {
        const response = await fetch(`${process.env.API_URL}3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        })
        if (response.ok) {
            const data = await response.json();
            return [true, data];
        } else {
            return [false, "Error occur while fetching data"];
        }
    } catch (error) {
        return [false, "Internal Server Error"]
    }
}

const getNowPlayings = async (page = 1) => {
    try {
        const response = await fetch(`${process.env.API_URL}3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        })
        if (response.ok) {
            const data = await response.json();
            return [true, data];
        } else {
            return [false, "Error occur while fetching data"];
        }
    } catch (error) {
        return [false, "Internal Server Error"]
    }
}

const getDetail = async (movie: string) => {
    try {
        const response = await fetch(`${process.env.API_URL}3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US`, {
            method: "GET",
            next: {
                revalidate: 60 * 60 * 24 // 24 hours
            }
        })
        if (response.ok) {
            const data = await response.json();
            return [true, data];
        } else {
            return [false, "Error occur while fetching data"];
        }
    } catch (error) {
        return [false, "Internal Server Error"]
    }
}