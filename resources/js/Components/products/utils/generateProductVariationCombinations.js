export const generateProductVariationCombinations = ({
    colors = "",
    attrs = [],
    attrSelector = "values",
    combination = "",
    index = 0,
    output = [],
}) => {
    if (attrs.length <= 0) {
        return [colors];
    }

    if (index === attrs.length) {
        output.push(combination);
        return output;
    }

    for (const attr of attrs[index][attrSelector]) {
        const value = attr;
        const newCombination =
            combination === ""
                ? `${colors}-${value}`
                : `${combination}-${value}`;
        generateProductVariationCombinations({
            colors,
            attrs,
            attrSelector,
            combination: newCombination,
            index: index + 1,
            output,
        });
    }

    return output;
};
