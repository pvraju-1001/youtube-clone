/**
 * Converts a numeric value into a human-readable format with abbreviations.
 * @param {number} value - The numeric value to convert
 * @returns {string|number} The converted value as a string with 'M' (millions) or 'K' (thousands) suffix, or the original number if less than 1000
 * @example
 * valueConverter(1500000); // Returns "1M"
 * valueConverter(5000); // Returns "5K"
 * valueConverter(500); // Returns 500
 */
export const valueConverter = (value) => {
    if(value >= 1000000) {
        return Math.floor(value/1000000) + 'M';
    }
    else if(value >= 1000) {
        return Math.floor(value/1000) + 'K'
    }
    else {
        return value;
    }
}