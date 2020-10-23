module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['zero', 'ten', 'twenty','thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = ['hundred'];

    if (number.toString().length === '1') {
        return ones[0];
    } else if (number.toString().length === '2' && number.toString()[0] === '1') {

    }
  
}
