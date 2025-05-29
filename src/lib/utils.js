import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

//clsx: A small utility for conditionally joining class names together. It accepts any number of arguments which can be strings, arrays, or objects.
//twMerge: A utility from tailwind-merge that merges Tailwind CSS classes intelligently, resolving conflicts by keeping the most specific classes.

export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}