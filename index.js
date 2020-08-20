function getSection(num) {
    const findNumberSec = document.querySelector(`span[data-number="${num}"]`);
    const getTag = findNumberSec.closest('div');
    const getDataSection = getTag.getAttribute('data-section');
    // console.log(findNumberSec)
    // console.log(getTag)
    // console.log(getDataSection)
    // findNumberSec.forEach(function(item) {
    //     console.log(item.dataset.number)
    //     if (item.dataset.number === num) {
    //         console.log(item)
    //     }
    // })
    return getDataSection;
}

// getSection(5);

export { getSection };