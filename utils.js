/**
 * Converts a numeric value into a human-readable format with suffix.
 * @param {number} value - The numeric value to convert
 * @returns {string|number} The converted value with 'M' for millions, 'K' for thousands, or the original value
 * @example
 * valueConverter(1500000) // Returns '1M'
 * valueConverter(2500) // Returns '2K'
 * valueConverter(500) // Returns 500
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