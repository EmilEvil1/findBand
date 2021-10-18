export const eventToggle = (value, func) => {
    return func(!value)
}

export const handleChangeMultiSelect = (event, func) => {
    const {target: { value },} = event;
    func(typeof value === 'string' ? value.split(',') : value,);
};